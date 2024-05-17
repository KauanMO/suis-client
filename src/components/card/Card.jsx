import React from "react";
import styles from './Card.module.css';

function Competence({ competence, adminPage, confirmCompetence }) {
    return <div className={styles.competence}>
        <span>
            Competência: {competence.name}
        </span>
        <span>
            Criado por: {competence.createdBy}
        </span>
        {adminPage
            ? <button id={competence.id} onClick={confirmCompetence}>Aprovar</button>
            : ''
        }
    </div>
}

const Card = {
    Competence
}

export default Card;