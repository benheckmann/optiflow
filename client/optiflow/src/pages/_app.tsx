import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import {createEmotionCache, MantineProvider} from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  const myCache = createEmotionCache({
    key: 'mantine',
    prepend: false
  });

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={myCache}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
