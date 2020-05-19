const initialState = {
    userName: '',
    password: '',
    environment: '' 
};

export default function redLogin(state = initialState,action) {
  //console.log(action.userName);
  switch(action.type) {
     case 'LOGIN_DATA':
     return {
         ...state,
         userName:action.userName ,
         password: action.password,
         environment: action.environment
       };
       default:
        return state;
   }
}
