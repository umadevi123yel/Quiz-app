import React,{ useState } from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import QuizStart from './pages/quizpage';
import FinalPage from './pages/finalPage';
const router = createBrowserRouter([
    {
      path:'/',
      element:<QuizStart/>,
    },
    {
        path:'/Final',
        element:<FinalPage/>
    }
])

const App = () => {
    return (
        <RouterProvider router={router}/>
      )
}

export default App