import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router";


const UpdateGiveBook = () => {



    const [id_book, setIdBook] = useState ([])

    const getIdBook = async () => {
        const responce = await axios.get('http://127.0.0.1:8000/api/book/')
        setIdBook(responce.data)

    }

    useEffect(() => {
        getIdBook();
    }, [])

    const [id_student, setIdStudent] = useState ([])

    const getIdStudent = async () => {
        const responce = await axios.get('http://127.0.0.1:8000/api/student/')
        setIdStudent(responce.data)

    }

    useEffect(() => {
        getIdStudent();
    }, [])

    
    const {id} = useParams("")
    const [date, setDate] = useState("")
    const [student, setStudent] = useState("")
    const [book, setBook] = useState("")

    const history = useNavigate();
    

    const loadGiveBook = async() =>{
        const { data } = await axios.get(`http://127.0.0.1:8000/api/givebook/${id}/`);
        console.log(data)

        setDate(data.date)
        setStudent(data.student)
        setBook(data.book)


    } 

    useEffect(() =>{
        loadGiveBook()
    }, [])

    const UpdateGiveBookInfo = async () =>{
        let formField = new FormData()

        formField.append('date', date)
        formField.append('student', student)
        formField.append('book', book)


        await axios({
            method: "PUT",
            url: `http://127.0.0.1:8000/api/givebook/${id}/`,
            data:formField

        }).then(response => {
            console.log(response.data)
            history('/givebook')
        })
    }

    return(
        <div>
            <h1> Изменить элемент </h1>

            <div className="container">
                <div className="form-group">
                    

                <input 
                        className="form-control form-control-lg"
                        placeholder = "Дата выдачи учебника"
                        type="date" 
                        name="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}/>
                        

                        <select
                         
                        name="student" 
                        className="form-control form-control-lg"
                        value={student} 
                        onChange={(e) => setStudent(e.target.value)}>
                        {id_student.map((id_student, index) => (
                    
                        <option value={id_student.id}>{id_student.surname}</option>

                    
                        )
                        )
                        }
                                


                        </select>
                        
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


                    <br/>

                    <button className="btn btn-warning" onClick={UpdateGiveBookInfo}> Обновить </button>

                </div>

            </div>

        </div>
    )
}

export default UpdateGiveBook;
