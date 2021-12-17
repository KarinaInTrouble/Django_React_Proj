import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowStudents = () => {

    const [students, setStudents] = useState ([])
    

    const getStudents= async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/student/')
        setStudents(response.data)

    }

    useEffect(() => {
        getStudents();
    }, [])



    return(
        <div className="table-content">

            <br/>
            <h1> Студенты </h1>
            <a class = "btn btn-warning" href="http://127.0.0.1:8000/admin/work/student/" target="_blank"> Получить доступ </a>
            <br/>
            <br/>
            
                
                    <Table striped bordered hover >
                    <thead>
                    <tr>
                    <th>Код студента</th>
                    <th>ФИО студента</th>
                    <th>№ зачетной книжки</th>
                    <th>Код специальности</th>
                    <th>Год поступления</th>
                    <th>Курс</th>
                    </tr>
                    </thead>
                    <tbody>

                    {students.map((students, index) => (
                    
                    <tr>
                        <td valign="middle"> {students.id} </td>
                        <td valign="middle"> {students.surname} </td>
                        <td valign="middle"> {students.transcript_number} </td>
                        <td valign="middle"> {students.special} </td>
                        <td valign="middle"> {students.admission_year} </td>
                        <td valign="middle"> {students.course} </td>
                        

                    </tr>
                    )
                    )
                    }

                    </tbody>
  
                    </Table>
                
                
            
            
            

        </div>
    )
};

export default ShowStudents;