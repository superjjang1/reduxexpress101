import {statement} from "@babel/template";
//all reducers have 2 params
//1. current statement, suually provide a default
//2. the action object
const seedData = [
    {
        food: 'steak',
        quantity: 1
    },
    {
        food: 'fish',
        quantity: 1
    },
    {
        food: 'crab',
        quantity: 1
    },
    {
        food: 'pork',
        quantity: 1
    }
]

export default (state = seedData, action)=>{
    console.log("meat Reducer is running");
    console.log(action.type);
    if(action.type ==='updateMeat'){
        let newState = [...state];
        if(action.payload.operation === '+'){
            newState[action.payload.indexToChange].quantity++;
        }else if(action.payload.operation ==='-'){
            newState[action.payload.indexToChange].quantity--;
        }
        return newState;
    }else if(action.type ==='clearInventory'){
        return []; }else if(action.type ==='resetInventory'){
            return seedData
        }else if(action.type=== 'addItem-Meat'){
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
