import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowTeachers = () => {

    const [teachers, setTeachers] = useState ([])
    

    const getTeachers = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/teachers/')
        setTeachers(response.data)

    }

    useEffect(() => {
        getTeachers();
    }, [])




    return(
        <div className="table-special">

            <br/>
            <h1> Список преподавателей </h1>
            <a class = "btn btn-warning"  href="http://127.0.0.1:8000/admin/work/teacher/" target="_blank"> Получить доступ </a>
            <br/>
            <br/>

                
                    <Table striped bordered hover >
                    <thead>
                    <tr>
                    <th>Код преподавателя</th>
                    <th>ФИО</th>
                    <th>Код кафедры</th>
                    </tr>
                    </thead>
                    <tbody>

                    {teachers.map((teachers, index) => (
                    
                    <tr>
                        <td valign="middle"> {teachers.id} </td>
                        <td valign="middle"> {teachers.surname} </td>
                        <td valign="middle"> {teachers.department} </td>
                        

                    </tr>
                    )
                    )
                    }

                    </tbody>
  
                    </Table>
                
                
            
            
            

        </div>
    )
};

export default ShowTeachers;