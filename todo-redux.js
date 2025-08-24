
const redux = require("redux");

// Actions
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// ACTION CREATORS
const addToDo = (text) => ({text, type:ADD_TODO});
const toggleToDo = (index) => ({index, type:TOGGLE_TODO});

//Initial State
const initialState={
    todos:[]
}

//Reducers
//must return updated state
function todoReducer(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text: action.text,
                        completed:false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo,i)=>{
                    if(i==action.index){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}

// Creating store
const store = redux.createStore(todoReducer);

// dispatch actions (same as dispatching from a react component)
store.dispatch(addToDo("Study at 8"));
store.dispatch(addToDo("Office at 9"));
store.dispatch(toggleToDo(0));

// Read data from store. (using selectors)
console.log(store.getState());