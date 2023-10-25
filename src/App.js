import './App.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const navigate = useNavigate()
    const [tours, setTours] = useState([])
    const [isCheck, setCheck] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3001/tuors").then(res => {
            setTours(res.data)
        }).catch(Error => console.log(Error))
    }, [isCheck])

    const handledDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:3001/tuors/"+id).then(res => {
                alert("Delete Success!!!")
               setCheck(true)
            }).catch(Error => console.log(Error))
        }
    }

    // const handledDetail=(id)=>{
    //     navigate(`/detail/${id}`)
    // }

    return (
        <>
            <div className="container">
                <span><h1>List Tour</h1></span>
                <div>
                    <Link to={'create'} className="btn btn-outline-primary" style={{borderRadius: '5px'}}>Create</Link>
                </div>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tours.map((tour, index = 0) => {
                        return (
                            <tr key={tour.id}>
                                <td>{index + 1}</td>
                                <td><Link to={'/detail/'+tour.id}>{tour.title}</Link></td>
                                <td>{tour.price}</td>
                                <td><Link className="btn btn-outline-primary" to={'update/' + tour.id}>Update</Link>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger"
                                            onClick={() => handledDelete(tour.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;
