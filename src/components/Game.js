import React from "react";

export default ({arr, shuffle})=>{
    return <>
    {arr.map(url=>
           <div className="col-3 mt-2" key={url} style={{maxHeight:"150px"}}>
        <img onClick={() => shuffle(url)} className="img-fluid" style={{overflowY:"hidden"}} src={url}/>
    </div>)}
    </>
}