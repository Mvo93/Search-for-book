import React  from "react";
import Input from "./input";
import Main from "./main";
import '../styles/App.scss';
import { useDispatch,useSelector } from "react-redux";



function App() {
  const dispatch=useDispatch()
  return (
  <div className="App">
      <div className="App-header" >
     <h1 onClick={()=>{
        dispatch({type:"changetext",payload:" "})
        dispatch({type:"remove"})
        }}>Search for books </h1>
     <Input />
     <Main />
      </div>
    </div>
  );
}

export default App;
