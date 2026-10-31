# VISTAR - IISER Bhopal

This is the official website for VISTAR (Vision and Intelligence in Systems, Technology, and Research) lab at IISER Bhopal. Built with [Next.js](https://nextjs.org/) and deployed on GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/vistar-iiserb/vistar-iiserb.github.io.git
cd vistar-iiserb.github.io
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## 🌍 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Repository Setup:**
   - Repository name should be: `username.github.io` or `organization.github.io`
   - For this project: `vistar-iiserb.github.io`

2. **GitHub Pages Configuration:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

3. **Environment Variables (Secrets):**
   Add the following secrets in your GitHub repository settings (Settings > Secrets and variables > Actions):
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID
   NEXT_PUBLIC_SANITY_DATASET
   NEXT_PUBLIC_SANITY_API_READ_TOKEN
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID (if using Contentful)
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN (if using Contentful)
   ```

4. **Automatic Deployment:**
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at: `https://vistar-iiserb.github.io`

### Manual Deployment:
```bash
npm run build
npm run export
```

## 🛠 Built With

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS, HeroUI
- **Content Management:** Sanity CMS
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React, React Icons
- **Typography:** Custom fonts (GeneralSans, InstrumentSerif, etc.)

## 📁 Project Structure

```
vistar-iiserb.github.io/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blogs/             # Blog pages
│   ├── contact/           # Contact page
│   ├── hackathon/         # Hackathon teams board
│   └── team/              # Team page
├── components/            # React components
├── sanity/               # Sanity CMS configuration
├── public/               # Static assets
├── utils/                # Utility functions
└── .github/workflows/    # GitHub Actions workflows
```

## Hackathon teams board

The `/hackathon` board is a static, client-rendered view of the registered teams
and their repository status.
Add or update entries in `public/data/teams-registry.json` using the
`teamName`, `repo` (`owner/name`), and manually maintained `members` fields.
For example:

```json
{
  "teamName": "Team Alpha",
  "repo": "owner/repo",
  "members": ["Aarav Sharma", "Isha Patel"]
}
```

The board reads its status data from `public/data/teams-status.json`.

## 🔧 Key Configuration Files

- `next.config.mjs` - Next.js configuration with static export settings
- `.github/workflows/nextjs.yml` - GitHub Actions deployment workflow
- `sanity.config.ts` - Sanity CMS configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## 🎨 Features

- Responsive design
- Dark/Light mode toggle
- Blog system with Sanity CMS
- Team member profiles
- Contact forms
- Smooth animations
- SEO optimized

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support, email vistar@iiserb.ac.in or create an issue in this repository.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
