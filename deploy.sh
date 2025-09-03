#!/bin/bash

# VISTAR Website Deployment Script
# This script builds and prepares the site for GitHub Pages deployment

echo "🚀 Building VISTAR website for GitHub Pages..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the application
echo "🔨 Building the application..."
npm run build

# Add .nojekyll file to prevent Jekyll processing
echo "📄 Adding .nojekyll file..."
touch ./out/.nojekyll

echo "✅ Build completed successfully!"
echo "📂 Static files are in the './out' directory"
echo "🌐 Ready for GitHub Pages deployment"

# Optional: Preview the build locally
read -p "Do you want to preview the build locally? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔍 Starting local preview server..."
    echo "📍 Open http://localhost:8000 in your browser"
    cd out && python3 -m http.server 8000
fi
