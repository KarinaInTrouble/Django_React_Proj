import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowBook = () => {

    const [book, setBook] = useState ([])
    const history = useNavigate();
    

    const getBook = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/book/')
        setBook(response.data)

    }

    

    useEffect(() => {
        getBook();
    }, [])



    const deleteBook = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/book/${id}`);
        history('/book/')
    }




    return(
        
        <div className="table-content">
        
        <br/>

        <h1 id="books"> Список добавленных книг </h1>  
        <Link class = "btn btn-outline-dark m-2" to = {"/book/add/"}> Добавить книгу </Link>

        <br/>
        <br/>
            
                
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Код учебника</th>
                    <th>Наименование</th>
                    <th>Сертификат</th>
                    <th>Год сертификации</th>
                    <th>Специальность</th>
                    <th>Кол-во страниц</th>
                    <th>Кол-во рисунков</th>
                    <th>Обновление</th>
                    <th>Удаление</th>
                    </tr>
                    </thead>
                    <tbody>

                    {book.map((book, id) => (
                    
                    <tr>
                        <td valign="middle"> {book.id} </td>
                        <td valign="middle"> {book.name} </td>
                        <td valign="middle"> {book.sertificate} </td>
                        <td valign="middle"> {book.certification_year} </td>
                        <td valign="middle"> {book.special_id} </td>
                        <td valign="middle"> {book.pages} </td>
                        <td valign="middle"> {book.pictures} </td>

                        <td valign="middle"> <Link className="btn btn-success m-2" to = {`/book/${book.id}/update`}> Обновить </Link> </td>
                        <td valign="middle"> <a className="btn btn-danger m-2" href="http://localhost:3000/book/" onClick={() => deleteBook(book.id)}> Удалить </a> </td>

                    </tr>
                    )
                    )
                    }

                    </tbody>
  
                    </Table>
                    
                
                
            
            
            

        </div>
    )
};

export default ShowBook;