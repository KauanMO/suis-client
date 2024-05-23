import React, { useEffect, useState } from "react";
import Card from '../../../components/card/Card';

import classes from '../../../api/classes';

export default function Admin() {
    const [classesNotConfirmed, setClassesNotConfirmed] = useState([]);

    useEffect(() => {
        async function findAllNotConfirmed() {
            const res = await classes.byConfirmed(false);

            setClassesNotConfirmed(res.data);
        }

        findAllNotConfirmed();
    }, []);

    const confirmClass = e => {
        console.log(e.target.id);
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