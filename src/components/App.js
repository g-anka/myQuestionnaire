import React from "react";
import { Routes, Route } from "react-router-dom";
import QuestionsForm from "./QuestionsForm";


function App(){
    return(
        <div className="App">
            <Routes>
                <Route path ="/" element={<QuestionsForm />} />
            </Routes>
        </div>
    )
}

export default App;