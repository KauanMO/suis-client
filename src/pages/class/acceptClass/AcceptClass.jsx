import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../../../api/users";
import classes from "../../../api/classes";
import Modal from "../../../components/modal/Modal";
import Input from "../../../components/input/Input";

export default function AcceptClass() {
    let { classId, userId } = useParams();

    const [username, setUsername] = useState(null);
    const [class2, setClass2] = useState({ title: '', duration: '' });
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [password, setPassword] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const userRes = await users.byId(userId);
            setUsername(userRes.data.username);

            const classRes = await classes.byId(classId);
            setClass2({ title: classRes.data.title, duration: classRes.data.duration });
        }

        fetchData();
    }, [userId, classId]);

    const confirmTutor = async () => {
        const confirmPasswordRes = await users.confirmPassword(userId, password);

        if (confirmPasswordRes.status === 200) {
            const classConfirmTutorRes = await classes.confirmTutor(classId);

            console.log(classConfirmTutorRes);
        } else {
            console.log('senha incorreta');
        }
    }

    return <>
        {
            confirmModalOpen
                ? <Modal>
                    <Input.Default onInput={e => setPassword(e.target.value)} placeholder={'Sua senha'} />
                    <button onClick={confirmTutor}>Confirmar</button>
                </Modal>
                : ''
        }

        <h1>Olá {username}!</h1>
        <h3>Você foi convidado a ser tutor da aula "{class2.title}", com a duração de {class2.duration} horas.</h3>

        <button onClick={() => setConfirmModalOpen(true)}>Aceitar</button>

        <button>recusar</button>
    </>
}