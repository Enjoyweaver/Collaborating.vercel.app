import clsx from "clsx";
import { getProviders, signIn } from "next-auth/react";
import { ComponentProps } from "react";
import { users } from "../../data/users";
import { Button } from "../../primitives/Button";
import { Select } from "../../primitives/Select";
import styles from "./Authentication.module.css";

interface Props extends ComponentProps<"div"> {
  providers?: Awaited<ReturnType<typeof getProviders>>;
}

export function AuthenticationLayout({
  providers,
  className,
  ...props
}: Props) {
  return (
    <div className={clsx(className, styles.container)} {...props}>
      <main className={styles.main}>
        <h2 className={styles.title}>
          {" "}
          Once your project has been listed for collaboration, or you have been
          approved to collaborate on a project, this is where you can sign in to
          collaborate. Just select your name below and sign-in with your email
          that you used to sign up with. No password required.
        </h2>
        {providers && providers.credentials ? (
          <DemoLogin />
        ) : (
          <NextAuthLogin providers={providers} />
        )}
      </main>
      <aside className={styles.aside} />
    </div>
  );
}

function NextAuthLogin({ providers }: Props) {
  if (!providers) {
    return <h4 className={styles.error}>No NextAuth providers enabled</h4>;
  }

  return (
    <div className={styles.actions}>
      {Object.values(providers).map((provider) => (
        <Button key={provider.name} onClick={() => signIn(provider.id)}>
          Sign in with {provider.name}
        </Button>
      ))}
    </div>
  );
}

// === EVERYTHING BELOW ONLY NECESSARY FOR DEMO AUTH ===========================

function DemoLogin() {
  return (
    <div className={styles.actions}>
      <Select
        items={users.map((user) => ({ value: user.id, title: user.name }))}
        onChange={(email) => {
          signIn("credentials", { email });
        }}
        placeholder="Choose a profile…"
      />
    </div>
  );
}
