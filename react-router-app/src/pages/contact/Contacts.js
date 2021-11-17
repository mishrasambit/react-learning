import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import  Header from '../component/Header'
import  MainContent from '../component/MainContent'

function Contacts() {
    const [contacts, setContacts] = useState([])
    useEffect(()=>{
      getAllUsers()
      return () => {
        console.log("Cancelling in cleanup in Contacs");
      }
    },[])
    const getAllUsers=async ()=>{
      const response = await axios.get(`http://localhost:3003/users`)
      console.log(response)
      setContacts(response.data)
    }
    return (
        <div className="blogconainer">
            <Header appname="ContactApp" 
            menu={[{link:'/contacts',text:'Contacts'},{link:'/addContact',text:'Add Contact'}]}/>
            <MainContent>
                <div className="blogs-content">
                    {
                        contacts.map(contact=>(
                            <Link to={`/contact/${contact.email}`} key={contact.email}>
                            <div className="blog-card" >
                                {contact.name}
                            </div>
                            </Link>
                        ))
                    }
                </div>
            </MainContent>
        </div>
    )
}

export default Contacts
