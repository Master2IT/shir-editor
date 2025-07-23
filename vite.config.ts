import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ command }) => {
    // Development configuration
    if (command === 'serve') {
        return {
            plugins: [react(), tailwindcss()],
            resolve: {
                alias: {
                    "@": resolve(import.meta.dirname, "./src"),
                },
            },
            server: {
                port: 3000,
                open: true,
            },
        }
    }

    // Build configuration for library
    return {
        plugins: [react()],
        resolve: {
            alias: {
                "@": resolve(import.meta.dirname, "./src"),
            },
        },
        build: {
            lib: {
                entry: resolve(import.meta.dirname, 'src/index.ts'),
                name: 'ShirEditor',
                fileName: (format) => `shir-editor.${format}.js`,
            },
            rollupOptions: {
                external: ['react', 'react-dom', 'tailwindcss'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                },
            },
        },
    }
})
