import clsx from "clsx";
import { ComponentProps } from "react";
import CollaboratingImage from "../../public/twitterLogo.png"; // Adjust the path if needed
import styles from "./Logo.module.css";

export function Logo({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={clsx(className, styles.logo)} {...props}>
      <img
        className={styles.mark}
        src={CollaboratingImage.src}
        alt="Collaborating Logo"
      />
    </div>
  );
}
