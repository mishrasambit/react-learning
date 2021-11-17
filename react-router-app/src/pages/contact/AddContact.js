import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import  Header from '../component/Header'
import MainContent from '../component/MainContent'

function AddContact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const formData={
            "id":Date.now(),
            "name": name,
            "phone": phone,
            "email": email,
            "country": country
        }
        try{
            const response = await axios.post('http://localhost:3003/users',formData,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            console.log("formdata", formData)
            
        }catch(e){
            console.log("error adding contact", e)
        }        
    }
    return (
        <div className="blogconainer">
            <Header appname="ContactApp" menu={[{link:'/contacts',text:'Contacts'},{link:'/addContact',text:'Add Contact'}]}/>
            <MainContent>
                <div className="contactform">
                    <form onSubmit={handleSubmit}>
                    <div>
                        <input type='text' name="name" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name="email" placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name="phone" placeholder='enter phone' onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name="country" placeholder='enter country' onChange={(e)=>setCountry(e.target.value)}/>
                    </div>
                    
                    <div className="button-area">
                        <div><Link to="/contacts">Cancel</Link> </div>
                        <div><input type="submit" value="Add" /></div>
                    </div>
                    </form>
                </div>
            </MainContent>
        </div>
    )
}

export default AddContact
