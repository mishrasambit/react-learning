import React from 'react';

class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state = {lat:null, errormessage:null}
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({lat: position.coords.latitude})
            },
            (error)=>this.setState({errormessage: error.message})
        )
    }
    render(){
        const {lat, errormessage} = this.state;
        if(!lat && errormessage)
            return <h1>error: {this.state.errormessage}</h1>
        if(lat && !errormessage)
            return <h1>lattitude: {this.state.lat}</h1>
        return <h1>Loading</h1>
    }
}

export default Welcome;