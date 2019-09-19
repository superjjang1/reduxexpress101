import React, { Component } from 'react'
//in order for this component to know about redux, we need some glue,
//react-redux specifically, to connect the thing
import {connect} from 'react-redux';
import updateMeat from '../actions/meatInvUpdate'
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.5/node_modules/redux';
import AddItem from './AddItem';




export class MeatDept extends Component {
    changeQuantity=(operation, indexToChange)=>{
        console.log(operation,indexToChange);
        this.props.updateMeat(operation,indexToChange);
    
    }    
    render() {
        // console.log(connect);
        console.log(this.props.meatData);
        const meats = this.props.meatData.map((meat, i)=>{
            return(
                <div key={i}>
                    <li>type: {meat.food} quantity: {meat.quantity}</li>
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('+',i)}}value="+"/>
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('-',i)}}value="-"/>
                </div>
            )
        })

        return (
            <div>
                <AddItem dept="Meat"/>
                {meats}
            </div>
        )
    }
}

function mapStateToProps(state){
    //mapStateToProps takes 1 arg;"state"
    //that "state" var, IS the rootReducer(store)
    //mapStateToProps returns an object with:
    //the key/property is the local propname in THIS component
    //value will be the property in the rootReducer(store)
    return {
        meatData: state.meat
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateMeat: updateMeat
    },dispatch)
}

// export default MeatDept
//we don't export the class when we need REDUX, we export connect(f)
//connect takes 2 args, (1) it takes a function that is going to map the state
//to mapStateToProps (2) a function that maps the dispatch to props. 
//(3) connect, is a function, that returns a function.
// you can rewrite it like this. const meatDeptWithRedux = connect(mapStateToProps)
export default connect(mapStateToProps,mapDispatchToProps)(MeatDept);