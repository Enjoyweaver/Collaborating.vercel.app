import { TooltipProvider } from "@radix-ui/react-tooltip";
import { AppProps } from "next/app";
import Head from "next/head";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Badge } from "../components/Badge";
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
        <title>Collaborating on Fantom</title>
        <link href="/twitterLogo.png" rel="icon" type="image/png" />
      </Head>
      <TooltipProvider>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
          <Badge />
        </SessionProvider>
      </TooltipProvider>
    </>
  );
}
