import { React, useState, useEffect } from "react";
import competences from "../../../api/competence";
import Card from "../../../components/card/Card";

export default function Admin() {
    const [competencesNotConfirmed, setCompetencesNotConfirmed] = useState([]);

    const getCompetencesNotConfirmed = async () => {
        const confirmedResponse = await competences.byConfirmed(false);

        setCompetencesNotConfirmed(confirmedResponse.data);
    }

    useEffect(() => {
        getCompetencesNotConfirmed();
    }, []);

    const confirmCompetence = async e => {
        await competences.confirm(e.target.id);

        getCompetencesNotConfirmed();
    }

    return <>
        {competencesNotConfirmed
            ? competencesNotConfirmed.map(competence => {
                return <Card.Competence key={competence} confirmCompetence={confirmCompetence} adminPage={true} competence={competence} />
            })
            : 'Sem competências não aprovadas'
        }
    </>
}