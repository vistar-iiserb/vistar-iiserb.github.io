# GitHub Pages Deployment Checklist

## ✅ Pre-deployment Setup

### 1. Repository Configuration
- [ ] Repository name follows GitHub Pages naming convention:
  - For user/organization sites: `username.github.io` or `organization.github.io`
  - For project sites: any name (will be accessible at `username.github.io/repository-name`)
- [ ] Repository is public (required for free GitHub Pages)
- [ ] Repository has a `main` branch

### 2. GitHub Pages Settings
- [ ] Go to repository Settings → Pages
- [ ] Set Source to "GitHub Actions"
- [ ] Verify custom domain settings if using one

### 3. Environment Variables (GitHub Secrets)
Navigate to Settings → Secrets and variables → Actions and add:

**Required Secrets:**
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- [ ] `NEXT_PUBLIC_SANITY_DATASET` - Usually "production"
- [ ] `NEXT_PUBLIC_SANITY_API_READ_TOKEN` - Sanity read token

**Optional Secrets (if using Contentful):**
- [ ] `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` - Your Contentful space ID
- [ ] `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` - Contentful access token

### 4. Local Environment Setup
- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in all environment variables in `.env.local`
- [ ] Test local development with `npm run dev`
- [ ] Test local build with `npm run build`

## 🚀 Deployment Process

### Automatic Deployment (Recommended)
- [ ] Push changes to the `main` branch
- [ ] Check Actions tab for workflow status
- [ ] Wait for deployment to complete (usually 2-5 minutes)
- [ ] Verify site at your GitHub Pages URL

### Manual Deployment (Testing)
- [ ] Run `./deploy.sh` to build locally
- [ ] Check the `out` directory for static files
- [ ] Test with local server if needed

## 🔍 Troubleshooting

### Common Issues:
1. **404 Error on deployment:**
   - Check if `.nojekyll` file exists in output
   - Verify `basePath` and `assetPrefix` in `next.config.mjs`

2. **Build failures:**
   - Check GitHub Actions logs
   - Verify all secrets are set correctly
   - Test build locally first

3. **Missing images/assets:**
   - Ensure `images: { unoptimized: true }` in `next.config.mjs`
   - Check if assets are in the `public` directory

4. **Environment variable issues:**
   - Verify all `NEXT_PUBLIC_*` variables are set in GitHub Secrets
   - Check that variables are properly prefixed with `NEXT_PUBLIC_`

### Verification Steps:
- [ ] Site loads correctly at GitHub Pages URL
- [ ] All pages are accessible
- [ ] Images and assets load properly
- [ ] Dynamic content from Sanity/Contentful displays
- [ ] Responsive design works on mobile
- [ ] Dark/light mode toggle functions

## 📞 Support Resources

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **Next.js Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **GitHub Actions for Next.js:** https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml

## 📝 Additional Notes

- GitHub Pages has a 1GB size limit for repositories
- Builds timeout after 10 minutes
- HTTPS is enforced by default on `.github.io` domains
- DNS changes may take up to 24 hours to propagate for custom domains
