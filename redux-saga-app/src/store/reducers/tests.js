const initialState = {
  result : ''
}

const tests = (state = initialState, action) => {

  console.log("Reducer calisti :"+action.type) 

  switch (action.type) {
    case "TEST_REQUEST":
      return {
        ...state
    }
    case "TEST_RESPONSE":
      return {
        ...state,
        result : action.payload
      }
    default:
      return state;
  }
}

export default tests;