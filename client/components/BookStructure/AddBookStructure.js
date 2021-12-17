import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate} from 'react-router-dom';


const AddBookStructure = () => {


    const [id_book, setIdBook] = useState ([])

    const getIdBook = async () => {
        const responce = await axios.get('http://127.0.0.1:8000/api/book/')
        setIdBook(responce.data)

    }

    useEffect(() => {
        getIdBook();
    }, [])

    const [id_section, setIdSection] = useState ([])

    const getIdSection = async () => {
        const responce = await axios.get('http://127.0.0.1:8000/api/booksection/')
        setIdSection(responce.data)

    }

    useEffect(() => {
        getIdSection();
    }, [])


    const [book, setBook] = useState("")
    const [section, setSection] = useState("")

    const history = useNavigate();

    const AddBookStructureInfo = async () =>{
        let formField = new FormData()

        formField.append('book', book)
        formField.append('section', section)

        await axios({
            method: 'post',
            url:'http://127.0.0.1:8000/api/bookstructure/',
            data: formField,
        }).then((response) =>{
            console.log(response.data);
            history('/bookstructure')
        } )
    }

   

    return(
        <div>
            <h1> Добавить раздел учебника </h1>

            <div className="container">
                <div className="form-group">
                    
                    <select
                         
                         name="book" 
                         className="form-control form-control-lg"
                         value={book} 
                         onChange={(e) => setBook(e.target.value)}>
                         {id_book.map((id_book, index) => (
                     
                         <option value={id_book.id}>{id_book.name}</option>
 
                     
                         )
                         )
                         }
                                 
 
 
                    </select>
                    <select
                         
                         name="section" 
                         className="form-control form-control-lg"
                         value={section} 
                         onChange={(e) => setSection(e.target.value)}>
                         <option >Код раздела учебника</option>
                         {id_section.map((id_section, index) => (
                     
                         <option value={id_section.id}>{id_section.name}</option>
 
                     
                         )
                         )
                         }
                                 
 
 
                    </select>
                        

                    
                    

                    <br/>

                    <button className="btn btn-outline-success"  onClick={AddBookStructureInfo}> Добавить </button>

                </div>

            </div>



        </div>
    )
};

export default AddBookStructure;