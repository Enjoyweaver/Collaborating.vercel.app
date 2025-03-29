import { TooltipProvider } from "@radix-ui/react-tooltip";
import { AppProps } from "next/app";
import Head from "next/head";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import "../styles/text-editor.css";
import "@liveblocks/react-comments/styles.css";
import "@liveblocks/react-comments/styles/dark/media-query.css";
import "../styles/text-editor-comments.css";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <title>Collaborating</title>
        <link href="/twitterLogo.png" rel="icon" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TooltipProvider>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </TooltipProvider>
    </>
  );
}
