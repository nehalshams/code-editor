import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './Root';
import Dashboard from '@/Pages/Dashboard/Dashboard';
import QuestionsPage from '@/Pages/QuestionsPage/QuestionsPage';
import QuestionDetail from '@/Pages/QuestionDetail/QuestionDetail';
const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route path="" element={<Dashboard />} />
                <Route path="/questions/:language" element={<QuestionsPage />} />
                <Route path="/questions/:language/:questionId" element={<QuestionDetail />} />
                {/* <Route path="languages" element={<Languages />} />
                <Route path="assessment/:language" element={<Assessment />} />
                <Route path="results" element={<Results />} />
                <Route path="profile" element={<Profile />} />
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="login" element={<Login />} />  */}
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    )
}

export default Router
