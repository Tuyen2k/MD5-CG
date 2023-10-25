import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export  default function Update (){
    const navigate = useNavigate()
    const [tour, setTour] = useState({})
    const {id} =  useParams()

    useEffect(()=>{
        axios.get("http://localhost:3001/tuors/"+id).then(res => {
            setTour(res.data)
        }).catch(Error => console.log(Error))
    }, [])

    const handledUpdate = (e )=> {
        // let tourU = {...e}
        // console.log(tourU)
        axios.put("http://localhost:3001/tuors/"+e.id, e).then(res => {
            alert("Update Success!!!")
            navigate('/')
        }).catch(Error => console.log(Error))
    }


    return(
        <>
            <div className='container'>
                <h1>Update Tour</h1>
                <Formik onSubmit={(e) => handledUpdate(e, tour.id)}
                        initialValues={tour}
                enableReinitialize={true}>
                    <Form>
                        <label htmlFor="title" className="form-label">Name</label>
                        <div className="input-group mb-3">
                            <Field type="text" className="form-control" name="title" id="title"/>
                        </div>
                        <label htmlFor="price" className="form-label">Price</label>
                        <div className="input-group mb-3">
                            <Field type="number" className="form-control" name="price" id="price"/>
                        </div>
                        <label htmlFor="description" className="form-label">Description</label>
                        <div className="input-group mb-3">
                            <Field type="text" className="form-control" name="description" id="description"/>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Save</button>
                        <Link className='btn btn-outline-primary' to={'/'}>Back Home</Link>
                    </Form>
                </Formik>
            </div>
        </>
    )

}