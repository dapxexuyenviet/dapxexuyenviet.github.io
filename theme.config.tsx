import React from "react";
import { useRouter } from "next/router";
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
    const router = useRouter();
    const canonicalUrl = (
      `https://www.dapxexuyenviet.vn` +
      (router.asPath === "/" ? "" : router.asPath)
    ).split("?")[0];

    return {
      titleTemplate: "%s – XuVi",
      canonical: canonicalUrl,
      twitter: {
        cardType: "summary_large_image",
        site: "@xuvitravel",
        handle: "@xuvitravel",
      },
    };
  },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta httpEquiv="Content-Language" content="vi" />
      <meta name="description" content="XuVi: Đạp xe xuyên Việt" />
      <meta property="og:title" content="XuVi" />
      <meta property="og:description" content="Đạp xe xuyên Việt" />
      <meta name="apple-mobile-web-app-title" content="XuVi" />
    </>
  ),
};

export default config;
