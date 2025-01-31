import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import 'src/styles/helpers/vars';
          @import 'src/styles/helpers/mixins';
        `
      }
    }
  }
});
