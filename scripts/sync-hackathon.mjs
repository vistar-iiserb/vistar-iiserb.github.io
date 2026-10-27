import { readFile, rename, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = resolve(rootDirectory, "public/data/teams-registry.json");
const statusPath = resolve(rootDirectory, "public/data/teams-status.json");
const githubApiUrl = "https://api.github.com";
const activeWindowMs = 24 * 60 * 60 * 1000;

const token = process.env.GITHUB_TOKEN;
if (!token) {
  throw new Error("GITHUB_TOKEN is required to sync hackathon repositories.");
}

const registry = JSON.parse(await readFile(registryPath, "utf8"));
if (!Array.isArray(registry)) {
  throw new Error("The teams registry must contain an array.");
}

for (const team of registry) {
  if (
    typeof team?.teamName !== "string" ||
    typeof team?.repo !== "string" ||
    !Array.isArray(team?.members) ||
    team.members.some((member) => typeof member !== "string" || !member.trim()) ||
    !/^[^/]+\/[^/]+$/.test(team.repo)
  ) {
    throw new Error(`Invalid team registry entry: ${JSON.stringify(team)}`);
  }
}

let previousStatus = [];
try {
  previousStatus = JSON.parse(await readFile(statusPath, "utf8"));
  if (!Array.isArray(previousStatus)) previousStatus = [];
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const previousByRepo = new Map(previousStatus.map((team) => [team.repoUrl, team]));
const apiHeaders = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
};
const fetchJson = async (path) => {
  const response = await fetch(`${githubApiUrl}${path}`, { headers: apiHeaders });
  if (!response.ok) {
    const error = new Error(`GitHub API returned ${response.status} for ${path}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
};

const statusEntries = [];
let apiErrors = 0;
const errorThreshold = Math.max(1, Math.floor(registry.length / 3));
const syncedAt = Date.now();

for (const team of registry) {
  const repoUrl = `https://github.com/${team.repo}`;
  const [owner, repo] = team.repo.split("/");

  try {
    const repository = await fetchJson(`/repos/${owner}/${repo}`);
    let commits = [];

    try {
      commits = await fetchJson(`/repos/${owner}/${repo}/commits?per_page=1`);
    } catch (error) {
      if (error.status !== 409) throw error;
    }

    const lastActivity = commits[0]?.commit?.author?.date ?? null;
    const isActive = lastActivity && syncedAt - Date.parse(lastActivity) < activeWindowMs;
    statusEntries.push({
      teamName: team.teamName,
      members: team.members,
      repoUrl,
      primaryLanguage: repository.language ?? null,
      lastActivity,
      syncedAt: new Date(syncedAt).toISOString(),
      status: isActive ? "active" : "idle",
    });
  } catch (error) {
    if (error.status === 404) {
      statusEntries.push({
        teamName: team.teamName,
        members: team.members,
        repoUrl,
        primaryLanguage: null,
        lastActivity: null,
        syncedAt: new Date(syncedAt).toISOString(),
        status: "unreachable",
      });
      continue;
    }

    apiErrors += 1;
    const previous = previousByRepo.get(repoUrl);
    if (previous) {
      const previousWithoutTrack = { ...previous };
      delete previousWithoutTrack.track;
      statusEntries.push({ ...previousWithoutTrack, teamName: team.teamName, members: team.members });
      console.warn(`Keeping previous data for ${team.repo}: ${error.message}`);
    } else {
      statusEntries.push({
        teamName: team.teamName,
        members: team.members,
        repoUrl,
        primaryLanguage: null,
        lastActivity: null,
        syncedAt: new Date(syncedAt).toISOString(),
        status: "unreachable",
      });
      console.warn(`No previous data for ${team.repo}: ${error.message}`);
    }
  }
}

if (apiErrors > errorThreshold) {
  throw new Error(`Aborting sync: ${apiErrors} API errors exceeded the threshold of ${errorThreshold}.`);
}

const temporaryStatusPath = `${statusPath}.tmp`;
await writeFile(temporaryStatusPath, `${JSON.stringify(statusEntries, null, 2)}\n`, "utf8");
await rename(temporaryStatusPath, statusPath);
console.log(`Synced ${statusEntries.length} hackathon team(s).`);
