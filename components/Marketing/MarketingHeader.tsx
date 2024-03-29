import clsx from "clsx";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ComponentProps } from "react";
import { SignInIcon } from "../../icons";
import { Button } from "../../primitives/Button";
import { Container } from "../../primitives/Container";
import { Logo } from "../Logo";
import styles from "./MarketingHeader.module.css";

export function MarketingHeader({
  className,
  ...props
}: ComponentProps<"header">) {
  return (
    <header className={clsx(className, styles.header)} {...props}>
      <Container className={styles.container}>
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/#projects">
          <Button>Collaboration Wanted</Button>
        </Link>
        <Link href="/#wall-of-collaboration">
          <Button>Wall of Collaboration</Button>
        </Link>
        <Button icon={<SignInIcon />} onClick={() => signIn()}>
          Sign in to collaborate
        </Button>
      </Container>
    </header>
  );
}
