import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Ben-s-Birthday/' // <-- ใส่ชื่อ repo ของคุณ
});
