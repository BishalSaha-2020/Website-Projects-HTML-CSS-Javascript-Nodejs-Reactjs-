import React from 'react'

function Alert(props) {

    const Capitalized=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (

       
       <div style={{height: "50px"}}>
         {props.Alerty && <div className={`alert alert-${props.Alerty.type} alert-dismissible fade show`} role="alert">
           <strong>{Capitalized(props.Alerty.type)}</strong>:{props.Alerty.msg}
        </div>  }
          </div>  
     
    )
}

export default Alert
