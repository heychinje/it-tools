// vite.config.ts
import { resolve } from "node:path";
import { URL, fileURLToPath } from "node:url";
import VueI18n from "file:///Users/hqzheng/code/it-tools/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import vue from "file:///Users/hqzheng/code/it-tools/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/hqzheng/code/it-tools/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Unocss from "file:///Users/hqzheng/code/it-tools/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///Users/hqzheng/code/it-tools/node_modules/unplugin-auto-import/dist/vite.js";
import IconsResolver from "file:///Users/hqzheng/code/it-tools/node_modules/unplugin-icons/dist/resolver.mjs";
import Icons from "file:///Users/hqzheng/code/it-tools/node_modules/unplugin-icons/dist/vite.mjs";
import { NaiveUiResolver } from "file:///Users/hqzheng/code/it-tools/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Components from "file:///Users/hqzheng/code/it-tools/node_modules/unplugin-vue-components/dist/vite.mjs";
import { defineConfig } from "file:///Users/hqzheng/code/it-tools/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///Users/hqzheng/code/it-tools/node_modules/vite-plugin-pwa/dist/index.js";
import markdown from "file:///Users/hqzheng/code/it-tools/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import svgLoader from "file:///Users/hqzheng/code/it-tools/node_modules/vite-svg-loader/index.js";
import { configDefaults } from "file:///Users/hqzheng/code/it-tools/node_modules/vitest/dist/config.js";
var __vite_injected_original_dirname = "/Users/hqzheng/code/it-tools";
var __vite_injected_original_import_meta_url = "file:///Users/hqzheng/code/it-tools/vite.config.ts";
var baseUrl = process.env.BASE_URL ?? "/";
var vite_config_default = defineConfig({
  plugins: [
    VueI18n({
      runtimeOnly: true,
      jitCompilation: true,
      compositionOnly: true,
      fullInstall: true,
      strictMessage: false,
      include: [
        resolve(__vite_injected_original_dirname, "locales/**")
      ]
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        "vue-i18n",
        {
          "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
        }
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true
      }
    }),
    Icons({ compiler: "vue3" }),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    markdown(),
    svgLoader(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "generateSW",
      manifest: {
        name: "IT Tools",
        description: "Aggregated set of useful tools for developers.",
        display: "standalone",
        lang: "fr-FR",
        start_url: `${baseUrl}?utm_source=pwa&utm_medium=pwa`,
        orientation: "any",
        theme_color: "#18a058",
        background_color: "#f1f5f9",
        icons: [
          {
            src: "/favicon-16x16.png",
            type: "image/png",
            sizes: "16x16"
          },
          {
            src: "/favicon-32x32.png",
            type: "image/png",
            sizes: "32x32"
          },
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    Components({
      dirs: ["src/"],
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [NaiveUiResolver(), IconsResolver({ prefix: "icon" })]
    }),
    Unocss()
  ],
  base: baseUrl,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  define: {
    "import.meta.env.PACKAGE_VERSION": JSON.stringify(process.env.npm_package_version),
    "import.meta.env.TAURI": JSON.stringify(process.env.TAURI === "true")
  },
  test: {
    exclude: [...configDefaults.exclude, "**/*.e2e.spec.ts"]
  },
  build: {
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaHF6aGVuZy9jb2RlL2l0LXRvb2xzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaHF6aGVuZy9jb2RlL2l0LXRvb2xzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ocXpoZW5nL2NvZGUvaXQtdG9vbHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IFVSTCwgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcblxuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnO1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJztcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJztcbmltcG9ydCB7IE5haXZlVWlSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgbWFya2Rvd24gZnJvbSAndml0ZS1wbHVnaW4tdnVlLW1hcmtkb3duJztcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJztcbmltcG9ydCB7IGNvbmZpZ0RlZmF1bHRzIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5cbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTCA/PyAnLyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgVnVlSTE4bih7XG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgIGppdENvbXBpbGF0aW9uOiB0cnVlLFxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxuICAgICAgZnVsbEluc3RhbGw6IHRydWUsXG4gICAgICBzdHJpY3RNZXNzYWdlOiBmYWxzZSxcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgcmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGVzLyoqJyksXG4gICAgICBdLFxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAge1xuICAgICAgICAgICduYWl2ZS11aSc6IFsndXNlRGlhbG9nJywgJ3VzZU1lc3NhZ2UnLCAndXNlTm90aWZpY2F0aW9uJywgJ3VzZUxvYWRpbmdCYXInXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICAgIGVzbGludHJjOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEljb25zKHsgY29tcGlsZXI6ICd2dWUzJyB9KSxcbiAgICB2dWUoe1xuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgIH0pLFxuICAgIHZ1ZUpzeCgpLFxuICAgIG1hcmtkb3duKCksXG4gICAgc3ZnTG9hZGVyKCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIHN0cmF0ZWdpZXM6ICdnZW5lcmF0ZVNXJyxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdJVCBUb29scycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWdncmVnYXRlZCBzZXQgb2YgdXNlZnVsIHRvb2xzIGZvciBkZXZlbG9wZXJzLicsXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICAgICAgbGFuZzogJ2ZyLUZSJyxcbiAgICAgICAgc3RhcnRfdXJsOiBgJHtiYXNlVXJsfT91dG1fc291cmNlPXB3YSZ1dG1fbWVkaXVtPXB3YWAsXG4gICAgICAgIG9yaWVudGF0aW9uOiAnYW55JyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMThhMDU4JyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyNmMWY1ZjknLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9mYXZpY29uLTE2eDE2LnBuZycsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Zhdmljb24tMzJ4MzIucG5nJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczMngzMicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgZGlyczogWydzcmMvJ10sXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpLCBJY29uc1Jlc29sdmVyKHsgcHJlZml4OiAnaWNvbicgfSldLFxuICAgIH0pLFxuICAgIFVub2NzcygpLFxuICBdLFxuICBiYXNlOiBiYXNlVXJsLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgICdpbXBvcnQubWV0YS5lbnYuUEFDS0FHRV9WRVJTSU9OJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbiksXG4gICAgJ2ltcG9ydC5tZXRhLmVudi5UQVVSSSc6IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LlRBVVJJID09PSAndHJ1ZScpLFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZXhjbHVkZTogWy4uLmNvbmZpZ0RlZmF1bHRzLmV4Y2x1ZGUsICcqKi8qLmUyZS5zcGVjLnRzJ10sXG4gIH0sXG4g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
