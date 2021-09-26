import produce from "immer"



export default function reducer(state={},action) {
    
    switch(action.type){

        case "login":
            return produce(state , newState=>{
                newState.email=action.payload.email
                newState.password=action.payload.password
            })
            
            default:
                return state;
    }
}