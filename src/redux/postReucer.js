const initialValue={text:" ",
                    select1:"ALL", 
                    orderBy:"RELEVANCE",
                    startSearch:" ",
                    zapros:""}

const initialState={
                    cards:[],
                    booksCount:0 }

export const valueReducer=(state=initialValue,action)=>{
     switch(action.type){
        case "changetext" :
            return {...state,text:action.payload}
        case "changeselect" :
            return {...state,select1:action.payload}
        case "changeorderBy" :
            return {...state,orderBy:action.payload}
            case "startSearch" :
            return {...state,startSearch:action.payload}
        case "changeZapros" :
            return {...state,zapros:action.payload}
        default:
            return  state
        }
}


export const stateReducer=(state=initialState,action)=>{
    switch(action.type){
       case "changeCards" :
           return {...state,cards:action.payload}
       case "changebooksCount" :
           return {...state,booksCount:action.payload}
           case "remove" :
           return {cards:[],
            booksCount:0 }
       default:
           return  state
       }
}
