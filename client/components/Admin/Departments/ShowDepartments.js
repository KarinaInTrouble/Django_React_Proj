import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowDepartments = () => {

    const [departments, setDepartments] = useState ([])
    const history = useNavigate();
    

    const getDepartments = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/departments/')
        setDepartments(response.data)

    }

    useEffect(() => {
        getDepartments();
    }, [])

    const deleteDepartment = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/departments/${id}`);
        history('/departments')
    }



    return(
        <div className="table-special">

            <br/>
            <h1> Список кафедр </h1>
            <a class = "btn btn-warning"  href="http://127.0.0.1:8000/admin/work/department/" target="_blank"> Получить доступ </a>
            <br/>
            <br/>

                
                    <Table striped bordered hover >
                    <thead>
                    <tr>
                    <th>Код кафедры</th>
                    <th>Наименование</th>
                    </tr>
                    </thead>
                    <tbody>

                    {departments.map((departments, index) => (
                    
                    <tr>
                        <td valign="middle"> {departments.id} </td>
                        <td valign="middle"> {departments.name} </td>
                        

                    </tr>
                    )
                    )
                    }

                    </tbody>
  
                    </Table>
                
                
            
            
            

        </div>
    )
};

export default ShowDepartments;