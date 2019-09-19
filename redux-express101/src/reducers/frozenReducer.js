import {statement} from "@babel/template";
import { thisExpression } from "@babel/types";
//all reducers have 2 params
//1. current statement, suually provide a default
//2. the action object
const seedData = [
    {
        food: 'pizza',
        quantity: 1
    },
    {
        food: 'ice cream',
        quantity: 1
    },
    {
        food: 'family dinner',
        quantity: 1
    },
    {
        food: 'frozen veggies',
        quantity: 1
    }
]

export default (state = seedData, action)=>{
    console.log("frozen Reducer is running");
   
    if (action.type ==='updateFrozen'){
        let newState = [...state];
        console.log(newState);
        if(action.payload.operation === '+'){
            newState[action.payload.indexToChange].quantity++;
        }else if(action.payload.operation === '-'){
            newState[action.payload.indexToChange].quantity--;
        }
        return newState;
    }else if(action.type ==='clearInventory'){
        return []}else if(action.type ==='resetInventory'){
            return seedData
        }
            else if(action.type=== 'addItem-Frozen'){
                let newState=[...state];
                const food= action.payload.food
                const quantity = action.payload.quantity
                newState.push({
            
                    food,
                    quantity
                })
                return newState
        }else{

            return state;
        }
    }
