import React from "react";

export default ({arr, shuffle})=>{
    return <>
    {arr.map(url=>
           <div className="col-3 mt-2" style={{maxHeight:"150px"}}>
        <img onClick={shuffle} className="img-fluid" style={{overflowY:"hidden"}} src={url}/>
    </div>)}
    </>
}