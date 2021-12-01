import React, {useState, useEffect} from "react";
import "../style.css";
import axios from "axios";

function QuestionsForm(){

    const [value, setValue] = useState({
        userName: "",
        favBand: "",
        whoBecome: ""
    });

  /*  const [users, setUsers] = useState([]);

      useEffect(() => {
        fetch("/user")
            .then(res => res.json())
            .then(json => setUsers(json));
    }, [])*/

    function handleChange(e) {
        setValue( {...value, [e.target.name]: e.target.value} )
        console.log("TARGET: ", e.target.value, "VALUE: ", value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("NAME MY: ", value.userName);
        axios.post("http://localhost:8000/user",
            {...value})
            .then((res) => console.log("RES: ", res))
            .catch((error) => console.log("THIS IS AN ERROR", error))
    }

    return(
        <div>
            <h1>Анкета</h1>
            <form>
                <div className="question-wrapper">
                    <label
                        htmlFor="userName">1. Как тебя зовут?</label>
                    <input
                        name="userName"
                        type="text"
                        value={value.userName}
                        onChange={handleChange} />
                </div>

                <div className="question-wrapper">
                    <label
                        htmlFor="favBand">2. Твоя любимая группа?</label>
                    <input
                        name="favBand"
                        type="text"
                        value={value.favBand}
                        onChange={handleChange}/>
                </div>

                <div className="question-wrapper">
                    <label
                        htmlFor="whoBecome">3. Кем хочешь стать?</label>
                    <input
                        name="whoBecome"
                        type="text"
                        value={value.whoBecome}
                        onChange={handleChange}/>
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}>Отправить</button>
            </form>
        </div>
    )
}

export default QuestionsForm;