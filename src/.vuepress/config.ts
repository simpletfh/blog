import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Blog Demo",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "ToolForge",
      description: "注重高质量代码工具和解决方案的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
