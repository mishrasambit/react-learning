import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import  Header from '../component/Header'
import  MainContent from '../component/MainContent'

function Contact(props) {
    const [contact, setContact] = useState({})
    const params = useParams();
    console.log("contactId:", params)
    
    useEffect(
        ()=>{
            let axioscancelsource = axios.CancelToken.source();
            getContactByEmail(axioscancelsource);
            return () => {
                axioscancelsource.cancel("Cancelling in cleanup");
            }
        }
        ,[])

    const getContactByEmail = async (axioscancelsource)=>{
        const response = await axios.get(`http://localhost:3003/users?email=${params.emailid}`,{
            //cancelToken:axioscancelsource
        })
        console.log(response)
        setContact(response.data[0])
    }
    
    return (
        <div className="blogconainer">
            <Header appname="ContactApp" menu={[{link:'/contacts',text:'Contacts'},{link:'/addContact',text:'Add Contact'}]}/>
            <MainContent>
                {/* {this.props.match.params.id} */}
                
                {
                    (contact.email!==undefined)?
                    <div className="blogdetail">
                        <div className="blog-title">{contact.name}</div>
                        <div className="blog-body">{contact.email}</div>
                        <div className="blog-body">{contact.phone}</div>
                        <div className="blog-body">{contact.country}</div>
                        <div className="blog-body"><Link to={`/editContact/${contact.id}`}>Edit Contact</Link></div>
                    </div>
                    :<>Loading...</>
                }
            </MainContent>
        </div>
    )
}

export default Contact
