import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    preview: {
        allowedHosts: [
            'localhost',
            'laravel-application2-1-31dq.onrender.com' // Add your Render URL here
        ]
    }
});