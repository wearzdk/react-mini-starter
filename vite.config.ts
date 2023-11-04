import generouted from '@generouted/react-router/plugin'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['react', 'react-router'],
      dts: 'src/auto-imports.d.ts',
    }),
    Icons({
      autoInstall: true,
    }),
    UnoCSS(),
    generouted(),
  ],
})
