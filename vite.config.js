import { defineConfig } from 'vite'

export default defineConfig({
    // GitHub Pages deployment configuration
    // If you are deploying to https://<USERNAME>.github.io/<REPO>/, set base to '/<REPO>/'
    // Example: base: '/lightspirits-homepage/',
    base: './', // Use relative paths for flexibility if repo name is unknown
    build: {
        outDir: 'dist',
    }
})
