import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Đạp xe xuyên Việt</span>,
  project: {
    link: "https://github.com/dapxexuyenviet/dapxexuyenviet.github.io",
  },
  // chat: {
  //   link: "https://www.facebook.com/xuvitravel",
  // },
  docsRepositoryBase:
    "https://github.com/dapxexuyenviet/dapxexuyenviet.github.io/tree/main",
  footer: {
    text: "Đạp xe xuyên Việt",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – XuVi",
    };
  },
};

export default config;
