import React from "react";
import '../styles/loader.scss';

export default function Loader(){
    return (
         <div className="spinner-border text-danger loader" role="status">
        <span className="visually-hidden ">Loading...</span>
        </div>
    )
}