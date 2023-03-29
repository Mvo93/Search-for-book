import React,{useEffect, useState} from "react";
import '../styles/main.scss';
import Card from "./card";
import Loader from "./Loader";
import StaticExample from "./react-modal";
import { useDispatch,useSelector } from "react-redux";


export default  function Main() {
  const dispatch=useDispatch()
  const pem=useSelector(s=>s)
  const[count,setCount]=useState(0)
  const[load,setload]=useState(true)
  const[show,setShow]=useState(false)
  const[info,setInfo]=useState({})


  useEffect(()=>{
    setload(true)                                                                                                                                
    const fetchData=async()=>{
      const result=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${pem.vl.startSearch}&startIndex=${count}&maxResults=30&orderBy=${pem.vl.orderBy}&key=AIzaSyBgeV9VbD_Sasnk1XmNvunegjDhPwzUlDY`)  
      let res=await result.json()
      setload(false)  
      res.items && dispatch({type:"changeCards", payload:[...pem.st.cards,...res.items]})
      dispatch({type:"changebooksCount", payload:res.totalItems})                                                                                                                
    }
     fetchData()
     
  },[pem.vl.startSearch,pem.vl.orderBy,count])

  let Cards_filtred=pem.st.cards.filter(item=>item.volumeInfo.categories && item.volumeInfo.categories.includes(pem.vl.select1))                       
 
  function loadmore(){
   setCount(count+30)
   console.log(count)
  }
  
  return load?<div className="outside_main"><Loader/></div>:(
   <div className="outside_main">
          <p>Всего найдено книг:{pem.st.booksCount}</p>
          <div className="main">
            {pem.vl.select1==="ALL"?(pem.st.cards).map((item)=><Card key={item.etag} setInfo={setInfo} setShow={setShow}  data={item.volumeInfo}/>): Cards_filtred.length>0?Cards_filtred.map((item)=><Card key={item.etag} setShow={setShow} setInfo={setInfo}  data={item.volumeInfo}/>):<div className="main"><h2>There is nothing
</h2></div>}
          </div>
    <div className="loadmore">{((count<pem.st.booksCount &&  Cards_filtred.length==0 && pem.vl.select1=="ALL" ) || ( pem.vl.select1!="ALL"  && Cards_filtred.length>0)   )? <button type="button" className="btn btn-info" onClick={loadmore}>Load more</button>:""}</div>
    {show &&(<StaticExample info={info} setInfo={setInfo} show={show} setShow={setShow} />)}
    </div>
  );
}
