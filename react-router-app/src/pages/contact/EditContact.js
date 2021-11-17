import React,{useState, useEffect} from 'react'
import {Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import  Header from '../component/Header'
import MainContent from '../component/MainContent'

const initialContact ={
    "id": 0,
    "name": undefined,
    "phone": undefined,
    "email": undefined,
    "country": undefined
  }
function EditContact() {
    const [contact, setContact] = useState(initialContact)
    const params = useParams();
    const navigate = useNavigate();
    console.log("contactId:", params)
    
    useEffect(
        ()=>{
            let axioscancelsource = axios.CancelToken.source();
            getContactById(axioscancelsource);
            return () => {
                axioscancelsource.cancel("Cancelling in cleanup");
            }
        }
        ,[])

    const getContactById = async (axioscancelsource)=>{
        const response = await axios.get(`http://localhost:3003/users/${params.id}`,{
            //cancelToken:axioscancelsource
        })
        console.log(response)
        setContact(response.data)
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const formData={...contact}
        try{
            const response = await axios.put(`http://localhost:3003/users/${contact.id}`,formData,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            console.log("formdata", formData)
            navigate("/contacts")
        }catch(e){
            console.log("error adding contact", e)
        }        
    }
    
    const handleDelete=(e)=>{
        e.preventDefault()
        console.log("deleting...",contact)
        navigate("/contacts")
    }
    
    return (
        <div className="blogconainer">
            <Header appname="ContactApp" menu={[{link:'/contacts',text:'Contacts'},{link:'/addContact',text:'Add Contact'}]}/>
            <MainContent>
                <div className="contactform">
                    {
                        contact===undefined || contact.name === undefined?<div>Loading...</div> :
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type='text' 
                                name="name" 
                                placeholder='enter name' 
                                value={contact.name}
                                onChange={(e)=>setContact({...contact, name:e.target.value})}
                                />
                            </div>
                            <div>
                                <input type='text'
                                name="email"
                                placeholder='enter email' 
                                value={contact.email}
                                onChange={(e)=>setContact({...contact, email:e.target.value})}
                                />
                            </div>
                            <div>
                                <input type='text'
                                name="phone" 
                                placeholder='enter phone' 
                                value={contact.phone}
                                onChange={(e)=>setContact({...contact, phone:e.target.value})}
                                />
                            </div>
                            <div>
                                <input type='text'
                                name="country" 
                                placeholder='enter country' 
                                value={contact.country}
                                onChange={(e)=>setContact({...contact, country:e.target.value})}
                                />
                            </div>
                            
                            <div className="button-area">
                                <div><Link to="/contacts">Cancel</Link> </div>
                                <div><input type="submit" value="Update" /></div>
                                <div><button onClick={handleDelete}>Delete</button></div>
                            </div>
                        </form>
                    }
                </div>
            </MainContent>
        </div>
    )
}

export default EditContact
