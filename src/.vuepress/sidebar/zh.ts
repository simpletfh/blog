import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "linux相关",
      icon: "laptop-code",
      prefix: "book/linux/",
      children: "structure",
    },
    {
      text: "工具相关",
      icon: "laptop-code",
      prefix: "book/tools/",
      children: "structure",
    },
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
