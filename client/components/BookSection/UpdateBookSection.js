import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router";


const UpdateBookSection = () => {


    const {id} = useParams("");
    const [name, setName] = useState("");

    const history = useNavigate();
    

    const loadBookSection = async() =>{
        const { data } = await axios.get(`http://127.0.0.1:8000/api/booksection/${id}/`);
        console.log(data)

        setName(data.name)


    } 

    useEffect(() =>{
        loadBookSection()
    }, [])

    const UpdateBookSectionInfo = async () =>{
        let formField = new FormData()

        formField.append('name', name)

        await axios({
            method: "PUT",
            url: `http://127.0.0.1:8000/api/booksection/${id}/`,
            data:formField

        }).then(response => {
            console.log(response.data)
            history('/booksection')
        })
    }

    return(
        <div>
            <h1> Изменить элемент </h1>

            <div className="container">
                <div className="form-group">
                    


                        <input 
                        type="text" className="form-control form-control-lg" 
                        placeholder = "Наименование"
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>

                

                    <br/>

                    <button className="btn btn-warning" onClick={UpdateBookSectionInfo}> Обновить </button>

                </div>

            </div>

        </div>
    )
}

export default UpdateBookSection;
