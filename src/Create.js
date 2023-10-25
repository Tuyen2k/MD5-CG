import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Create() {

    const navigate = useNavigate()
    const [tour] = useState({
        title: '',
        price: 0.0,
        description: ''
    })

    const handledCreate = (e) => {
        axios.post("http://localhost:3001/tuors", e).then(res => {
            alert("Create Success!!!")
            navigate('/')
        }).catch(Error => console.log(Error))
    }

    return (
        <>
            <div className='container'>
                <h1>Create Tour</h1>
                <Formik onSubmit={(e) => handledCreate(e)}
                        initialValues={tour}>
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