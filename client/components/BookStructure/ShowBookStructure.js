import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowBookStructure = () => {

    const [bookstructure, setBookStructure] = useState ([])
    const history = useNavigate();
    

    const getBookStructure = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/bookstructure/')
        setBookStructure(response.data)

    }

    

    useEffect(() => {
        getBookStructure();
    }, [])



    const deleteBookStructure = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/bookstructure/${id}`);
        history('/bookstructure/')
    }




    return(
        
        <div className="table-content">
        
        

        <br/>
        <h1 > Список разделов учебников </h1> 
        <Link className = "btn btn-outline-dark m-2" to = {"/bookstructure/add/"}> Добавить структуру учебника </Link> 
        <br/>
        <br/>
            
                
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Код учебника</th>
                    <th>Код раздела учебника</th>
                    <th>Удаление</th>
                    </tr>
                    </thead>
                    <tbody>

                    {bookstructure.map((bookstructure, id) => (
                    
                    <tr>
                        <td valign="middle"> {bookstructure.book} </td>
                        <td valign="middle"> {bookstructure.section} </td>
                        <td valign="middle"> <a className="btn btn-danger m-2" href="http://localhost:3000/bookstructure/" onClick={() => deleteBookStructure(bookstructure.id)}> Удалить </a> </td>

                    </tr>
                    )
                    )
                    }

                    </tbody>
  
                    </Table>
                   
                
                
            
            
            

        </div>
    )
};

export default ShowBookStructure;