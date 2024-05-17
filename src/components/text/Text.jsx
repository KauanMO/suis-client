import { React } from "react";
import styles from './text.module.css';

function Title1({ children }) {
    return <span className={styles.title1}>{children}</span>
}

function Span2({ children }) {
    return <span>{children}</span>
}

const Text = {
    Title1,
    Span2
}

export default Text;