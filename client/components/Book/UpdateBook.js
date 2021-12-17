import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router";


const UpdateBook = () => {

    const [special, setSpecial] = useState ([])

    const getSpecial = async () => {
        const responce = await axios.get('http://127.0.0.1:8000/api/special/')
        setSpecial(responce.data)

    }

    useEffect(() => {
        getSpecial();
    }, [])

    const {id} = useParams("");
    const [name, setName] = useState("");
    const [sertificate, setSertificate] = useState("");
    const [certification_year, setCertYear] = useState("");
    const [special_id, setSpecialId] = useState("");
    const [pages, setPages] = useState("");
    const [pictures, setPictures] = useState("");

    const history = useNavigate();
    

    const loadBook = async() =>{
        const { data } = await axios.get(`http://127.0.0.1:8000/api/book/${id}/`);
        console.log(data)

        setName(data.name)
        setSertificate(data.sertificate)
        setCertYear(data.certification_year)
        setSpecialId(data.special_id)
        setPages(data.pages)
        setPictures(data.pictures)


    } 

    useEffect(() =>{
        loadBook()
    }, [])

    const UpdateBookInfo = async () =>{
        let formField = new FormData()

        formField.append('name', name)
        formField.append('sertificate', sertificate)
        formField.append('certification_year', certification_year)
        formField.append('special_id', special_id)
        formField.append('pages', pages)
        formField.append('pictures', pictures)

        await axios({
            method: "PUT",
            url: `http://127.0.0.1:8000/api/book/${id}/`,
            data:formField

        }).then(response => {
            console.log(response.data)
            history('/book')
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

                    <input 
                        className="form-control form-control-lg"
                        placeholder = "Сертификат"
                        maxLength = "9"
                        type="text"
                        name="sertificate" 
                        value={sertificate} 
                        onChange={(e) => setSertificate(e.target.value)}/>
                        
                    

                        <input 
                        className="form-control form-control-lg"
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
                        placeholder = "Количество страниц"
                        type="number"
                        min = "0"
                        name="pages" 
                        value={pages} 
                        onChange={(e) => setPages(e.target.value)}/>
                        


                        <input 
                        className="form-control form-control-lg"
                        placeholder = "Количество рисунков"
                        type="number"
                        min = "0"
                        name="pictures" 
                        value={pictures} 
                        onChange={(e) => setPictures(e.target.value)}/>
                        


                    <br/>

                    <button className="btn btn-warning" onClick={UpdateBookInfo}> Обновить </button>

                </div>

            </div>

        </div>
    )
}

export default UpdateBook;
