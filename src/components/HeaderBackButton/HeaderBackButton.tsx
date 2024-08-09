"use client";

import styles from "./HeaderBackButton.module.css";
import Button from "../ui/Button/Button";
import { useRouter } from "next/navigation";

const BackIcon = () => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z" />
    </svg>
  );
};

export const HeaderBackButton = (): React.ReactNode => {
  const { back } = useRouter();
  return (
    <Button
      className={styles.headerButton}
      onClick={back}
      icon={<BackIcon />}
    ></Button>
  );
};
