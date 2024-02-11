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
      canonical: "https://www.dapxexuyenviet.vn/",
      twitter: {
        cardType: "summary_large_image",
        site: "@xuvitravel",
        handle: "@xuvitravel",
      },
    };
  },
  head: (
    <>
      <html lang="vi"></html>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta http-equiv="Content-Language" content="vi" />
      <meta name="description" content="XuVi: Đạp xe xuyên Việt" />
      <meta property="og:title" content="XuVi" />
      <meta property="og:description" content="Đạp xe xuyên Việt" />
      <meta name="apple-mobile-web-app-title" content="XuVi" />
    </>
  ),
};

export default config;
