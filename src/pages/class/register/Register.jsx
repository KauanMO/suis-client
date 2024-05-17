import { React, useState, useEffect } from "react";
import Input from "../../../components/input/Input";
import competences from '../../../api/competence';
import classes from '../../../api/classes';
import classCompetencesAPI from '../../../api/classCompetences';

export default function Register() {
    const [competencesConfirmed, setCompetencesConfirmed] = useState([]);
    const [competencesFiltered, setCompetencesFiltered] = useState(competencesConfirmed);
    const [classCompetences, setClassCompetences] = useState([]);

    const [formData, setFormData] = useState({
        title: 'Aula de java',
        tutor: 'Kauan',
        duration: 5
    });

    const getCompetences = async () => {
        const resCompetenciasConfirmed = await competences.byConfirmed(true);

        setCompetencesConfirmed(resCompetenciasConfirmed.data);
    }

    useEffect(() => {
        getCompetences();
    }, []);

    const onInputFormData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const sendClassForm = async () => {
        const classResponse = await classes.post(formData);

        sendClassCompetencesForm(classResponse.data.id);
    }

    const sendClassCompetencesForm = async classId => {
        const classCompetencesResponse = await classCompetencesAPI.post({
            class2: {
                id: classId
            },
            assignedBy: 'Kauan',
            competences: classCompetences
        });

        console.log(classCompetencesResponse);
    }

    const findCompetence = e => {
        setCompetencesFiltered(competencesConfirmed.filter(c => c.name.includes(e.target.value)));
    }

    const addClassCompetence = e => {
        setClassCompetences(prevCompetences => {
            const existingCompetenceIndex = prevCompetences.findIndex(
                competence => competence.id === e.target.id
            );

            if (existingCompetenceIndex !== -1) {
                return prevCompetences.filter(
                    (competence, i) => i !== existingCompetenceIndex
                );
            } else {
                return [...prevCompetences, { id: e.target.id }];
            }
        });
    }

    return <>
        <Input.Default name={'title'} onInput={onInputFormData} placeholder={'Título'} value={formData.title} />
        <Input.Default name={'tutor'} onInput={onInputFormData} placeholder={'Professor'} value={formData.tutor} />
        <Input.Default name={'duration'} onInput={onInputFormData} placeholder={'Duração (horas)'} value={formData.duration} />
        <Input.Default onInput={findCompetence} placeholder={'Pesquisar competência'} />
        <div>
            {
                competencesFiltered[0]
                    ? competencesFiltered.map(competence => {
                        return <Input.Checkbox key={competence.id} onChange={addClassCompetence} checked={classCompetences.some(cc => cc.id === competence.id)} id={competence.id} text={competence.name} />
                    })
                    : 'Nenhuma competência confirmada encontrada'
            }
        </div>
        <button onClick={sendClassForm}>Cadastrar aula</button>
    </>
}