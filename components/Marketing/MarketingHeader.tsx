import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState, ComponentProps } from "react";
import { signIn } from "next-auth/react";
import { SignInIcon } from "../../icons";
import { Button } from "../../primitives/Button";
import { Container } from "../../primitives/Container";
import { Logo } from "../Logo";
import styles from "./MarketingHeader.module.css";

export function MarketingHeader({
  className,
  ...props
}: ComponentProps<"header">) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={clsx(
        className,
        styles.header,
        scrolled && styles.scrolled,
        menuOpen && styles.menuOpen
      )}
      {...props}
    >
      <Container className={styles.container}>
        <Link href="/" className={styles.logoWrapper}>
          <Logo />
          <div className={styles.logoGlow}></div>
        </Link>

        <nav className={styles.navigation}>
          <Link href="/#projects" className={styles.navLink}>
            <span className={styles.navLinkText}>Explore</span>
            <span className={styles.navLinkHighlight}></span>
          </Link>

          <Link href="/#how-it-works" className={styles.navLink}>
            <span className={styles.navLinkText}>How It Works</span>
            <span className={styles.navLinkHighlight}></span>
          </Link>

          <Link href="/#wall-of-collaboration" className={styles.navLink}>
            <span className={styles.navLinkText}>Wall of Collaboration</span>
            <span className={styles.navLinkHighlight}></span>
          </Link>
        </nav>

        <div className={styles.actionButtons}>
          <Button
            className={styles.signInButton}
            icon={<SignInIcon />}
            onClick={() => signIn()}
          >
            <span className={styles.buttonText}>Join Collaboration</span>
          </Button>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={styles.hamburgerIcon}>
            <span
              className={clsx(styles.hamburgerLine, styles.hamburgerLine1)}
            ></span>
            <span
              className={clsx(styles.hamburgerLine, styles.hamburgerLine2)}
            ></span>
            <span
              className={clsx(styles.hamburgerLine, styles.hamburgerLine3)}
            ></span>
          </div>
        </button>
      </Container>

      <div className={styles.mobileMenu}>
        <div className={styles.mobileMenuContent}>
          <nav className={styles.mobileNavigation}>
            <Link
              href="/#projects"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              Explore Projects
            </Link>

            <Link
              href="/#how-it-works"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>

            <Link
              href="/#wall-of-collaboration"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              Wall of Collaboration
            </Link>
          </nav>

          <Button
            className={styles.mobileSignInButton}
            onClick={() => signIn()}
          >
            Join Collaboration
          </Button>

          <div className={styles.mobileMenuBackground}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={styles.mobileMenuBubble}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 60 + 20}px`,
                  height: `${Math.random() * 60 + 20}px`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
