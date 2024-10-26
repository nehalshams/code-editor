import QuestionHeader from '@/components/Pages/QuestionsPage/QuestionHeader';
import QuestionsTable from '@/components/Pages/QuestionsPage/QuestionsTable';
import React from 'react'
import { useParams } from 'react-router-dom'
// background-image: linear-gradient(0deg,#000,#0000 5%),linear-gradient(270deg,#000,#0000 5%);
const QuestionsPage = () => {
    const { language } = useParams();

    return (
        <>
            <QuestionHeader language={ language || "" }/>
            <QuestionsTable/>

        </>
    )
}

export default QuestionsPage
