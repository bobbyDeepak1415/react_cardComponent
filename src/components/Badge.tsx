import type { BadgeInterface } from "../types";

import styles from "./Badge.module.css";

const Badge = ({ text, filled }: BadgeInterface) => {

  const filledClass=filled? styles.filled : ""

  return <h2 className={`${styles.badge} ${filledClass}`}>{text}</h2>;
};

export default Badge;
