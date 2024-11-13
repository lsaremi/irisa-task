import React from "react";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

const Rtl = ({ children }: { children: React.ReactNode }) => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default Rtl;
