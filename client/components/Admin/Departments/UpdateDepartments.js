import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router";


const UpdateDepartments = () => {

    

    const {id} = useParams("");
    const [pk, setID] = useState("");
    const [name, setName] = useState("");

    const history = useNavigate();
    

    const loadDepartments = async() =>{
        const { data } = await axios.get(`http://127.0.0.1:8000/api/departments/${id}/`);
        console.log(data)

        setID(data.pk)
        setName(data.name)


    } 

    useEffect(() =>{
        loadDepartments()
    }, [])

    const UpdateDepartmentsInfo = async () =>{
        let formField = new FormData()
        formField.append('id', pk)
        formField.append('name', name)

        await axios({
            method: "PUT",
            url: `http://127.0.0.1:8000/api/departments/${id}/`,
            data:formField

        }).then(response => {
            console.log(response.data)
            history('/departments')
        })
    }

    return(
        <div>
            <h1> Изменить элемент </h1>

            <div className="container">
                <div className="form-group">
                    <div className="form-control">

                        <input 
                        
                        type="text" className="form-control form-control-lg" 
                        name="id" 
                        value={pk} 
                        placeholder={id}
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

                    <button className="btn btn-success" onClick={UpdateDepartmentsInfo}> Обновить </button>

                </div>

            </div>

        </div>
    )
}

export default UpdateDepartments;

