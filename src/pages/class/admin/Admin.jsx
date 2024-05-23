import React, { useEffect, useState } from "react";
import Card from '../../../components/card/Card';

import classes from '../../../api/classes';

export default function Admin() {
    const [classesNotConfirmed, setClassesNotConfirmed] = useState([]);

    async function getClassesNotConfirmed() {
        const res = await classes.byConfirmed(false);

        setClassesNotConfirmed(res.data);
    }

    useEffect(() => {
        getClassesNotConfirmed();
    }, []);

    const confirmClass = async e => {
        const res = await classes.confirm(e.target.id);

        if (res.status === 200) {
            console.log(`Aula ${res.data.title} confirmada`);
        }

        setClassesNotConfirmed(classesNotConfirmed.filter(c => c.id !== e.target.id));
    }

    return <>
        {
            classesNotConfirmed[0]
                ? classesNotConfirmed.map(class2 => {
                    return <Card.Class adminPage={true} class2={class2} confirmClass={confirmClass} key={class2} />
                })
                : 'Sem aulas não confirmada'
        }
    </>
}