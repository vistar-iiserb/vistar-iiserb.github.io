"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";

type TeamStatus = {
    teamName: string;
    members: string[];
    repoUrl: string;
    primaryLanguage: string | null;
    lastActivity: string | null;
    status: "active" | "idle" | "unreachable";
};

function formatRelativeActivity(timestamp: string, now: number) {
    const elapsedMs = Math.max(0, now - Date.parse(timestamp));
    const elapsedHours = Math.floor(elapsedMs / (60 * 60 * 1000));
    if (elapsedHours < 1) return "Just now";
    if (elapsedHours < 24) return `${elapsedHours}h ago`;
    const elapsedDays = Math.floor(elapsedHours / 24);
    return `${elapsedDays}d ago`;
}

function ActivityLabel({ team, now }: { team: TeamStatus; now: number | null }) {
    if (team.status === "unreachable") {
        return <span className="rounded-full border border-[#30302b] px-2.5 py-1 text-xs text-neutral-400">Private / Inaccessible</span>;
    }

    if (!team.lastActivity) {
        return <span className="text-neutral-400">Awaiting first push</span>;
    }

    const activityText = now === null ? "Recently" : formatRelativeActivity(team.lastActivity, now);
    return (
        <span className="flex items-center gap-2 text-neutral-300">
            <span className={`h-2 w-2 rounded-full ${team.status === "active" ? "bg-emerald-400" : "bg-neutral-500"}`} />
            {team.status === "active" ? `Active · ${activityText}` : `Idle · ${activityText}`}
        </span>
    );
}

function TeamCard({ team, now }: { team: TeamStatus; now: number | null }) {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-[#30302b] bg-[#191815] p-5 transition duration-300 hover:-translate-y-1 hover:border-neutral-600">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight text-[#ffffe3]">{team.teamName}</h2>
                </div>
                <a
                    href={team.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${team.teamName} repository`}
                    className="text-neutral-500 transition hover:text-[#ffffe3]"
                >
                    <ExternalLink size={18} />
                </a>
            </div>
            {team.members.length > 0 && (
                <details className="mt-5 border-t border-[#30302b] pt-4">
                    <summary className="cursor-pointer list-none text-sm text-neutral-400 transition hover:text-[#ffffe3]">
                        <span className="flex items-center justify-between">
                            Members
                            <span className="text-xs text-neutral-600">{team.members.length}</span>
                        </span>
                    </summary>
                    <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
                        {team.members.map((member) => <li key={member}>{member}</li>)}
                    </ul>
                </details>
            )}
            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-8 text-sm">
                <span className="rounded-full bg-[#30302b] px-2.5 py-1 text-neutral-300">
                    {team.primaryLanguage ?? "Language not detected"}
                </span>
                <ActivityLabel team={team} now={now} />
            </div>
        </article>
    );
}

function LoadingSkeleton() {
    return (
        <div className="grid gap-5 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-44 animate-pulse rounded-2xl border border-[#30302b] bg-[#191815]" />
            ))}
        </div>
    );
}

export default function HackathonBoard() {
    const [teams, setTeams] = useState<TeamStatus[]>([]);
    const [search, setSearch] = useState("");
    const [language, setLanguage] = useState("All languages");
    const [activityStatus, setActivityStatus] = useState("All activity");
    const [now, setNow] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        setNow(Date.now());
        const statusUrl = process.env.NODE_ENV === "development"
            ? "/data/teams-status.json"
            : `https://raw.githubusercontent.com/vistar-iiserb/vistar-iiserb.github.io/main/public/data/teams-status.json?t=${Date.now()}`;

        fetch(statusUrl, { cache: "no-store" })
            .then((response) => {
                if (!response.ok) throw new Error("Unable to load team status.");
                return response.json() as Promise<TeamStatus[]>;
            })
            .then((data) => {
                if (isMounted) {
                    const normalizedTeams = Array.isArray(data)
                        ? data.map((team) => ({ ...team, members: Array.isArray(team.members) ? team.members : [] }))
                        : [];
                    setTeams(normalizedTeams);
                }
            })
            .catch(() => {
                if (isMounted) setError("Team status is temporarily unavailable.");
            })
            .finally(() => {
                if (isMounted) setIsLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const languages = useMemo(
        () => ["All languages", ...new Set(teams.flatMap((team) => team.primaryLanguage ? [team.primaryLanguage] : []))],
        [teams],
    );
    const filteredTeams = useMemo(() => {
        const query = search.trim().toLowerCase();
        return teams
            .filter((team) => language === "All languages" || team.primaryLanguage === language)
            .filter((team) => activityStatus === "All activity" || team.status === activityStatus)
            .filter((team) => !query || team.teamName.toLowerCase().includes(query))
            .sort((first, second) => first.teamName.localeCompare(second.teamName));
    }, [activityStatus, language, search, teams]);

    return (
        <section aria-label="Hackathon teams">
            <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-[#30302b] bg-[#191815] p-4 sm:flex-row">
                <label className="relative flex-1">
                    <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                    <span className="sr-only">Search teams</span>
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search teams"
                        className="w-full rounded-xl border border-[#30302b] bg-[#10100e] py-2.5 pl-10 pr-3 text-sm text-[#ffffe3] outline-none placeholder:text-neutral-600 focus:border-neutral-500"
                    />
                </label>
                <label>
                    <span className="sr-only">Filter by language</span>
                    <select
                        value={language}
                        onChange={(event) => setLanguage(event.target.value)}
                        className="w-full rounded-xl border border-[#30302b] bg-[#10100e] px-3 py-2.5 text-sm text-neutral-300 outline-none focus:border-neutral-500 sm:w-48"
                    >
                        {languages.map((languageName) => <option key={languageName}>{languageName}</option>)}
                    </select>
                </label>
                <label>
                    <span className="sr-only">Filter by activity</span>
                    <select
                        value={activityStatus}
                        onChange={(event) => setActivityStatus(event.target.value)}
                        className="w-full rounded-xl border border-[#30302b] bg-[#10100e] px-3 py-2.5 text-sm text-neutral-300 outline-none focus:border-neutral-500 sm:w-48"
                    >
                        <option value="All activity">All activity</option>
                        <option value="active">Active</option>
                        <option value="idle">Idle</option>
                    </select>
                </label>
            </div>

            {isLoading ? <LoadingSkeleton /> : error ? (
                <div className="rounded-2xl border border-dashed border-[#30302b] px-6 py-12 text-center text-sm text-neutral-400">{error}</div>
            ) : filteredTeams.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2">{filteredTeams.map((team) => <TeamCard key={team.repoUrl} team={team} now={now} />)}</div>
            ) : (
                <div className="rounded-2xl border border-dashed border-[#30302b] px-6 py-12 text-center text-sm text-neutral-400">
                    No teams match your search.
                </div>
            )}
        </section>
    );
}
