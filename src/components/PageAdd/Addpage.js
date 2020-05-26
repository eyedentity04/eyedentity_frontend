import React, {useState,useEffect} from 'react'
import Navbar from '../Navbar'
import {Formik} from 'formik'
import {Modal} from "react-bootstrap"
import axios from "axios"
import './Addpage.css'

const Add = (props) =>{

    const url = process.env.REACT_APP_API_URL

    const [data,setData] = useState([])
    const [profile,setProfile] = useState([])

    useEffect(() =>{
       
        async function myProfile() {
            const user = JSON.parse(localStorage.getItem("user"))
            const token = user.token
            const id = user.id
            const result = await axios.get(`${url}/users/edit/${id}`,{
            headers: { "token": token }
            }).catch(err => {
                window.alert("error",err)
            })
            setData(result)
            console.log(result)
        }
        myProfile()
        
    }, [])

    return (
        <div>ini tempat edit profile</div>
    )

}

export default Add 