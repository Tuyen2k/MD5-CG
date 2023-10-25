import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export default function TourDetail (){
    const {id} = useParams()
    const [tour,setTour] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:3001/tuors/"+id).then(res => {
            setTour(res.data)
        }).catch(Error => console.log(Error))
    }, [])

    return(
        <>
            <h1>Tour Detail</h1>
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>Name</th>
                    <td>{tour.title}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>{tour.price}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{tour.description}</td>
                </tr>
                </thead>
            </table>
            <Link className='btn btn-outline-primary'  to={'/'}>Back Home</Link>
        </>
    )
}