import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowGiveBook = () => {

    const [givebook, setGiveBook] = useState ([])
    const history = useNavigate();
    

    const getGiveBook = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/givebook/')
        setGiveBook(response.data)

    }

    

    useEffect(() => {
        getGiveBook();
    }, [])



    const deleteGiveBook = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/givebook/${id}`);
        history('/givebook/')
    }




    return(
        
        <div className="table-content">
        
        <br/>

        <h1 id="books"> Выдача учебников студентам </h1>  
        <Link class = "btn btn-outline-dark m-2" to = {"/givebook/add/"}> Добавить новый элемент </Link>

        <br/>
        <br/>
            
                
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Дата выдачи учебника</th>
                    <th>Студент</th>
                    <th>Учебник</th>
                    <th>Обновление</th>
                    <th>Удаление</th>
                    </tr>
                    </thead>
                    <tbody>

                    {givebook.map((givebook, id) => (
                    
                    <tr>
                        <td valign="middle"> {givebook.date} </td>
                        <td valign="middle"> {givebook.student} </td>
                        <td valign="middle"> {givebook.book} </td>

                        <td valign="middle"> <Link className="btn btn-success m-2" to = {`/givebook/${givebook.id}/update`}> Обновить </Link> </td>
                        <td valign="middle"> <a className="btn btn-danger m-2" href="http://localhost:3000/givebook/" onClick={() => deleteGiveBook(givebook.id)}> Удалить </a> </td>

                    </tr>
                    )
                    )
                    }

                    </tbody>
  
                    </Table>
                    
                
                
            
            
            

        </div>
    )
};

export default ShowGiveBook;