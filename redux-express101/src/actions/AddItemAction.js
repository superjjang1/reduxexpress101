import axios from 'axios';

export default (dept, food, quantity) =>{
    const type = `addItem-${dept}`
    const updateUrl = `${window.apiHost}/update-dept/${dept}`
    const updateDept = axios.post(updateUrl,{
        newQuantity: quantity,
        food: food
    })
    return {
        type,
        payload: updateDept
        //we make our request from updateUrl, and the promise is updateDept
        

    }
}