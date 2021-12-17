import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowSpecial = () => {

    const [special, setSpecial] = useState ([])
    const history = useNavigate();
    

    const getSpecial = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/special/')
        setSpecial(response.data)

    }

    useEffect(() => {
        getSpecial();
    }, [])

    const deleteSpecial = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/special/${id}`);
        history('/special')
    }



    return(
        <div className="table-special">

            <br/>
            <h1> Специальности </h1>
            <a class = "btn btn-warning" href="http://127.0.0.1:8000/admin/work/special/" target="_blank"> Получить доступ </a>
            <br/>
            <br/>
            
                
                    <Table striped bordered hover >
                    <thead>
                    <tr>
                    <th>Код специальности</th>
                    <th>Наименование</th>
                    </tr>
                    </thead>
                    <tbody>

                    {special.map((special, index) => (
                    
                    <tr>
                        <td valign="middle"> {special.id} </td>
                        <td valign="middle"> {special.name} </td>
                        

                    </tr>
                    )
                    )
                    }

                    </tbody>
  
                    </Table>
                
                
            
            
            

        </div>
    )
};

export default ShowSpecial;