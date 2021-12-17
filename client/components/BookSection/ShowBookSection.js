import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowBookSection = () => {

    const [booksection, setBookSection] = useState ([])
    const history = useNavigate();
    

    const getBookSection = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/booksection/')
        setBookSection(response.data)

    }

    

    useEffect(() => {
        getBookSection();
    }, [])



    const deleteBookSection = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/booksection/${id}`);
        history('/booksection/')
    }




    return(
        
        <div className="table-content">
        
        

        <br/>
        <h1 > Список разделов учебников </h1> 
        <Link className = "btn btn-outline-dark m-2" to = {"/booksection/add/"}> Добавить раздел учебника </Link> 
        <br/>
        <br/>
            
                
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Код раздела учебника</th>
                    <th>Наименование</th>
                    <th>Обновление</th>
                    <th>Удаление</th>
                    </tr>
                    </thead>
                    <tbody>

                    {booksection.map((booksection, id) => (
                    
                    <tr>
                        <td valign="middle"> {booksection.id} </td>
                        <td valign="middle"> {booksection.name} </td>

                        <td valign="middle"> <Link className="btn btn-success m-2" to = {`/booksection/${booksection.id}/update`}> Обновить </Link> </td>
                        <td valign="middle"> <a className="btn btn-danger m-2" href="http://localhost:3000/booksection/" onClick={() => deleteBookSection(booksection.id)}> Удалить </a> </td>

                    </tr>
                    )
                    )
                    }

                    </tbody>
  
                    </Table>
                   
                
                
            
            
            

        </div>
    )
};

export default ShowBookSection;