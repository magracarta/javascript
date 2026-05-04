import { combineReducers ,createStore, compose, legacy_createStore, UnknownAction } from 'redux';

const loginAction = {type : 'LOGIN'};
const anyAction = { type:'example', data :'123' };


const initialState ={
    user:{
        isLogginIn : false,
        data : null,
    },
    posts: [],
};


const reducer = combineReducers({
    user : (state = initialState.user , action: UnknownAction) => {
        switch(action.type){
            case 'LOGIN' : 
                return {
                    isLoginIn : true,
                    data : {
                        nickname : 'zerocho',
                    }
                }
            default : return state;
        }
    },
    posts :  (state = initialState.posts , action: UnknownAction) => state,
});

const store = createStore(reducer, initialState);
store.dispatch({type: 'LOGIN',  data:{nickname: 'asdkl', password : "sdajflkdsjk"}});

