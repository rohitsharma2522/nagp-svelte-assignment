import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry:'index.html',
      name:"login-component"
    }
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
        css:'injected'
      },
    }),
  ]
})
