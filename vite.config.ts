import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { fileURLToPath } from 'url';

export default defineConfig({
  envPrefix: 'APP_',
  build: {
    chunkSizeWarningLimit: 1500,
  },
  plugins: [
    react(),
    AutoImport({
      dts: './src/types/imports.d.ts',
      imports: [
        'react',
        'react-router-dom',
        {
          '@tanstack/react-query': [
            'useQuery',
            'useMutation',
            'useIsMutating',
            'useQueryClient',
          ],
        },
        {
          '@mui/material': [
            'Box',
            'Button',
            'Card',
            'CardContent',
            'Container',
            'Grid2',
            'Typography',
            'styled',
            ['Link', 'MuiLink'],
          ],
        },
      ],
    }),
    ViteImageOptimizer(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5774,
  },
});
