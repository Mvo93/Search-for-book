import React, {useState,useRef,useEffect}  from "react";
import '../styles/input.scss';
import { useDispatch,useSelector } from "react-redux";

export default function Input() {
  const dispatch=useDispatch()
  const pem=useSelector(s=>s)
  let inpt=useRef()

  function search(){
      if(pem.vl.startSearch!=pem.vl.text){
      dispatch({type:"changeCards", payload:[]})
      dispatch({type:"startSearch",payload:pem.vl.text})
    }

  }
  function hanclick(e){
    dispatch({type:"changeselect",payload:e.target.value})
  }
  function changeText(e){
    dispatch({type:"changetext",payload:e.target.value})
  }
 function startSearch(){
  search()
  }
  function hanclickOrderby(e){
    dispatch({type:"changeorderBy",payload:e.target.value})
  } 

useEffect(() => {
  const listener = function(event){
  if(event.key=="Enter"){
      search()
    }
  };
  inpt.current.addEventListener('keydown', listener);
  return () => {
  inpt.current.removeEventListener('keydown', listener);
  };
}, [pem.vl.text,pem.vl.startSearch]);

  return (
<div className="input_info">
    <div class="input-group mb-3">
  <input type="text" ref={inpt} class="form-control" placeholder="try ro find the books" aria-label="Recipient's username" aria-describedby="button-addon2"  value={pem.vl.text} onChange={e=>changeText(e)}/>
  <button type="button" class="btn btn-dark" onClick={startSearch}>Search</button>
  </div>
    <div className="selects">
      <div className="info_select">
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e)=>hanclick(e)}>
              <option value="ALL">all</option>
              <option value="Art">art</option>
              <option value="Biography">biography</option>
              <option value="Computers">computers</option>
              <option value="History">history</option>
              <option value="Medical">medical</option>
              <option value="Poetry">poetry</option>
          </select>
      </div>
      <div className="info_select">
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={e=>hanclickOrderby(e)}>
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
      </select>
  </div>
  </div>
</div>
  );
}


