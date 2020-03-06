import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import Button from '@material-ui/core/Button';
import Addcar from './Addcar';
import Editcar from './Editcar';

export default function Carlist(){

    const [cars, setCars] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch ('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
    }

    const updateCar = (car, link) => {
        
        fetch(link, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    })
        .then(res => fetchData())
        .catch(err => console.error(err));
    }
    

    const deleteCar = (link) => {
        if (window.confirm('Are you sure?')){
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err));
    }
    }

    const saveCar = (car) => {
        fetch ('https://carstockrest.herokuapp.com/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    })
    .then(res => fetchData())
    .catch(err => console.log(err))
        }

    const columns = [
        {
            Header: 'Brand',
            accessor: 'brand',
            width: 200
        },

        {
            Header: 'Model',
            accessor: 'model',
            width: 200
        },

        {
            Header: 'Color',
            accessor: 'color',
            width: 150
        },

        {
            Header: 'Fuel',
            accessor: 'fuel',
            width: 150
        },

        {
            Header: 'Year',
            accessor: 'year',
            width: 150
        },

        {
            Header: 'Price',
            accessor: 'price',
            width: 150
        },

        {
            Cell: row => <Editcar updateCar={updateCar} cars={row.original} />,
            sortable: false,
            filterable: false,
            width: 100
        },

        {
            accessor: '_links.self.href',
            Cell: row => <Button size="small" variant="contained" color="secondary" onClick={() => deleteCar(row.value)}>Delete</Button>,
            sortable: false,
            filterable: false,
            width: 100
        },
    ]

    return (
        <div>
            <div class="addbutton"><Addcar saveCar={saveCar} /></div>
            <ReactTable filterable={true} data={cars} columns={columns}/>
        </div>
        )
}