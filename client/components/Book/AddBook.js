import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate} from 'react-router-dom';


const AddBook = () => {
    const [special, setSpecial] = useState ([])

    const getSpecial = async () => {
        const responce = await axios.get('http://127.0.0.1:8000/api/special/')
        setSpecial(responce.data)

    }

    useEffect(() => {
        getSpecial();
    }, [])

    

    const [id, setID] = useState("")
    const [name, setName] = useState("")
    const [sertificate, setSertificate] = useState("")
    const [certification_year, setCertYear] = useState("")
    const [special_id, setSpecialId] = useState("")
    const [pages, setPages] = useState("")
    const [pictures, setPictures] = useState("")

    const history = useNavigate();

    const AddBookInfo = async () =>{
        let formField = new FormData()

        formField.append('name', name)
        formField.append('sertificate', sertificate)
        formField.append('certification_year', certification_year)
        formField.append('special_id', special_id)
        formField.append('pages', pages)
        formField.append('pictures', pictures)

        await axios({
            method: 'post',
            url:'http://127.0.0.1:8000/api/book/',
            data: formField,
        }).then((response) =>{
            console.log(response.data);
            history('/book')
        } )
    }

   

    return(
        <div >

            <h1> Добавить книгу </h1>
 
            <div className="container">
                <div className="form-group">

                        <input 
                        className="form-control form-control-lg"
                        placeholder = "Наименование"
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                        

                    
                    

                        <input 
                        className="form-control form-control-lg"
                        type="text"
                        maxLength = "9"
                        placeholder = "Сертификат"
                        name="sertificate" 
                        value={sertificate} 
                        onChange={(e) => setSertificate(e.target.value)}/>
                        

                    
                    

                        <input 
                        className="form-control form-control-lg"
                        placeholder = "Год сертификации"
                        type="date"
                        name="certification_year" 
                        value={certification_year} 
                        onChange={(e) => setCertYear(e.target.value)}/>
                        

                    
                    

                        <select
                         
                        name="special_id" 
                        className="form-control form-control-lg"
                        value={special_id} 
                        onChange={(e) => setSpecialId(e.target.value)}>
                        {special.map((special, index) => (
                    
                        <option value={special.id}>{special.name}</option>

                    
                        )
                        )
                        }
                                


                        </select>

                        

                    
                    

                    

                        <input 
                        className="form-control form-control-lg"
                        type="number"
                        placeholder = "Количество страниц"
                        min = "0"
                        name="pages" 
                        value={pages} 
                        onChange={(e) => setPages(e.target.value)}/>
                        

                    

                    

                        <input 
                        className="form-control form-control-lg"
                        type="number"
                        placeholder = "Количество рисунков"
                        min = "0"
                        name="pictures" 
                        value={pictures} 
                        onChange={(e) => setPictures(e.target.value)}/>
                        

                                     





                    <br/>

                    <button className="btn btn-outline-success"  onClick={AddBookInfo}> Добавить </button>

                </div>

            </div>



        </div>
    )
};

export default AddBook;