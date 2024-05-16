import { React } from "react";
import styles from './text.module.css';

export function Title1({ children }) {
    return <span className={styles.title1}>{children}</span>
}