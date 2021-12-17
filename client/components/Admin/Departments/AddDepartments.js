import axios from "axios";
import React, {useState} from "react";
import { useNavigate} from 'react-router-dom';


const AddDepartments = () => {
    const [id, setID] = useState("")
    const [name, setName] = useState("")

    const history = useNavigate();

    const AddDepartmentsInfo = async () =>{
        let formField = new FormData()

        formField.append('id', id)
        formField.append('name', name)

        await axios({
            method: 'post',
            url:'http://127.0.0.1:8000/api/departments/',
            data: formField,
        }).then((response) =>{
            console.log(response.data);
            history('/departments')
        } )
    }

   

    return(
        <div>
            <h1> Добавить новую кафедру </h1>

            <div className="container">
                <div className="form-group">
                    <div className="form-control">

                        <input 
                        type="text" className="form-control form-control-lg" 
                        name="id" 
                        value={id} 
                        onChange={(e) => setID(e.target.value)}/>

                    </div>
                    <div className="form-control">

                        <input 
                        type="text" className="form-control form-control-lg" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                        

                    </div>

                    <br/>

                    <button className="btn btn-success" onClick={AddDepartmentsInfo}> Добавить </button>

                </div>

            </div>



        </div>
    )
};

export default AddDepartments;