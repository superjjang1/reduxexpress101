import React, { Component } from 'react'
import {connect} from 'react-redux';
// import MeatDept from './MeatDept';
// import Dairy from './Dairy';
// import FrozenDept from './FrozenDept';
import {bindActionCreators} from 'redux';
import clearInventory from '../actions/clearInventory';
import resetInventory from '../actions/resetInventory';

class Main extends Component {
    render() {
        const frozenQuantity = this.props.frozenData.reduce((a,b)=>a+b.quantity,0)
        const dairyQuantity = this.props.dairyData.reduce((a,b)=>a+b.quantity,0)
        const meatQuantity = this.props.meatData.reduce((a,b)=>a+b.quantity,0)

        console.log(frozenQuantity)
        // console.log(connect);
        // const frozens = this.props.frozenData.map((item, i)=> <h1 key ={item.food + i}>{item.quantity} {item.food}</h1>)
        // const dairys = this.props.dairyData.map((item, i)=> <h1 key ={item.food + i}>{item.quantity} {item.food}</h1>)
        // const meats = this.props.meatData.map((item, i)=> <h1 key ={item.food + i}>{item.quantity} {item.food}</h1>)
        const storeInventoryArray = [
            ...this.props.frozenData,
            ...this.props.meatData,
            ...this.props.dairyData
        ];
        let storeProducts = storeInventoryArray.map((product,i)=>{
            return(
                <div>
                    <h3 key = {i}>Type: {product.food} Quantity:{product.quantity}</h3>
                </div>
            )
        })
        return (
            
                <div>
                    <h1> Welcome to Publix</h1><hr />
                    <h3>Total frozen foods: {frozenQuantity}</h3>
                    <h3>Total meat foods: {meatQuantity}</h3>
                    <h3>Total dairy foods: {dairyQuantity}</h3>
                    <button onClick={this.props.clearInventory}>Clear all Inventory</button>
                    <button onClick={this.props.resetInventory}>Reset Inventory</button>
                    {storeProducts}
                </div>
        
        )
    }
}
function mapStateToProps(state){
    return{
        meatData: state.meat,
        frozenData: state.frozen,
        dairyData: state.dairy
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearInventory,
        resetInventory
    },dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
