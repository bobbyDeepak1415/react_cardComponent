import type { BadgeInterface } from "../types";

import styles from "./components/Badge.module.css";

const Badge = ({ text, filled }: BadgeInterface) => {
  return <small className={`${styles.badge}`}>{text}</small>;
};

export default Badge;
...