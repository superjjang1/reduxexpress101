import {statement} from "@babel/template";
import { exportDefaultSpecifier } from "@babel/types";
//all reducers have 2 params
//1. current statement, suually provide a default
//2. the action object


export default (state = [], action)=>{
    console.log("dairy Reducer is running");
    console.log(action.type);
    if (action.type ==='updateDairy'){
        let newState = [...state];
        if(action.payload.operation ==='+'){
            newState[action.payload.indexToChange].quantity++;
        }else if(action.payload.operation === '-'){
            newState[action.payload.indexToChange].quantity--;
        }
        return newState;
    }else if(action.type ==='clearInventory'){
        return [] }else if(action.type ==='resetInventory'){
            return []
        }else if(action.type=== 'addItem-Dairy'){
            let newState=[...state];
            const food= action.payload.food
            const quantity = action.payload.quantity
            newState.push({
        
                food,
                quantity
            })
            return newState
        }else if(action.type ==='getInv-dairy'){
            return action.payload.data
        }

        else{

            return state;
        }
    }
