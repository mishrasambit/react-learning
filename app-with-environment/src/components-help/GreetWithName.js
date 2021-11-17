import {useState} from 'react';
function GreetWithName(){
    const [username, setUsername]=useState('');
    function clickHandler(){
        console.log("username",username);
        
    }
    return (
        <div>
            form to check event handling
            
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <button onClick={clickHandler}>click</button>
            
        </div>
    );
}

export default GreetWithName;