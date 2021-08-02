import React  from "react";
import { useDispatch } from "react-redux";
import { testRequest } from "../store/actions/tests";


const TestPage =() => {

    const dispatch = useDispatch();

    const testRequestClick = () => {
    
        dispatch(testRequest());

    }

    return(
      <button  onClick={()=> {
          testRequestClick()
         }}>
             Saga Test Request!
     </button>
    )

}

export default TestPage;

