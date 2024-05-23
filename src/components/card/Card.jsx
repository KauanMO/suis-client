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
        
        {
            adminPage
                ? <button id={competence.id} onClick={confirmCompetence}>Aprovar</button>
                : ''
        }
    </div>
}

function Class({ class2, adminPage, confirmClass }) {
    return <div className={styles.class}>
        <span>
            Competência: {class2.title}
        </span>
        <span>
            Duração: {class2.duration}
        </span>
        <span>
            Professor: {class2.tutor}
        </span>

        {
            adminPage
                ? <button id={class2.id} onClick={confirmClass}>Aprovar</button>
                : ''
        }
    </div>
}

const Card = {
    Competence,
    Class
}

export default Card;