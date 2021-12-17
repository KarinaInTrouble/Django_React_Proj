import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate} from 'react-router-dom';


const AddBookSection = () => {

    const [id, setID] = useState("")
    const [name, setName] = useState("")

    const history = useNavigate();

    const AddBookSectionInfo = async () =>{
        let formField = new FormData()

        formField.append('name', name)

        await axios({
            method: 'post',
            url:'http://127.0.0.1:8000/api/booksection/',
            data: formField,
        }).then((response) =>{
            console.log(response.data);
            history('/booksection')
        } )
    }

   

    return(
        <div>
            <h1> Добавить раздел учебника </h1>

            <div className="container">
                <div className="form-group">
                    
                        <input 
                        className="form-control form-control-lg"
                        placeholder = "Наименование"
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                        

                    
                    

                    <br/>

                    <button className="btn btn-outline-success"  onClick={AddBookSectionInfo}> Добавить </button>

                </div>

            </div>



        </div>
    )
};

export default AddBookSection;