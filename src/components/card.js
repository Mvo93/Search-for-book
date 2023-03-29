import React,{useState,useRef,useEffect} from "react"
import '../styles/card.scss';

export default  function Card({setShow,data,setInfo}) {
  const[image,setImage]=useState("https://avatars.mds.yandex.net/i?id=97ced811068924ee0d9dbecea3026689-5233403-images-thumbs&n=13")
  const cardref=useRef()
  useEffect(()=>{
    cardref.current.addEventListener('click', ()=>{
      setInfo(data) 
      setShow(true)})
  }
  ,[])
  setTimeout(()=>{
    try{
    setImage(data.imageLinks.thumbnail)
    }
    catch{
  }
  },100)
    return (  
      <>
    <div class="carder " ref={cardref} >
      <div className="imgDIV">
    <img src={image} className="dataimg" alt="..."/>
    </div>
    <div class="bodyart">
      <ul><hr></hr>
          <li>{data.categories?data.categories:"Without categories"}</li>
          <hr></hr>
          <li><b>{data.title}</b></li>
          <li className="author" >{[data.authors].join(`  ,`)}</li>
      </ul>
    </div>
  </div>
  
  </>
  ) 
}
  
  

