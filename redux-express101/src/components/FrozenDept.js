import React, { Component } from 'react'
import {connect} from 'react-redux';
//we need our action creator
import updateFrozen from '../actions/frozenInvUpdate';
// update is a function with an object, in order for it to be
//considered an actioncreator, we need to import a function called 
//{ bindActionCreators } from 'redux';
import { bindActionCreators } from 'redux';
import AddItem from './AddItem';

export class FrozenDept extends Component {
    componentDidMount(){
        // this.props.updateFrozen([]);
}
changeQuantity=(operation, indexToChange)=>{
    console.log(operation,indexToChange);
    this.props.updateFrozen(operation,indexToChange);

}
    render() {
        // console.log(connect);
        console.log(this.props.frozenData);
        const frozens = this.props.frozenData.map((frozen, i)=>{
            return(
                <div key={i}>
                    <li>type: {frozen.food} quantity: {frozen.quantity}</li>
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('+',i)}}value="+"/>
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('-',i)}}value="-"/>

                </div>
            )
        })
        console.log(frozens)
        return (
            <div>
                <AddItem dept="Frozen"/>
                {frozens}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        frozenData:state.frozen
    }
}

function mapDispatchToProps(dispatch){
    //mapDispatchToProps is how we connect our
    //component using this action creator
    //to the dispatch
    //this function returns, bindActionCreators,
    //and we hand bindActionCreators an object
    return bindActionCreators({
        // each property will be a local prop
        //for this component.  
        //each value will be a function, actionCreator, that will have
        //it's return value(action) sent to the dispatch.
        updateFrozen: updateFrozen
        //updateFrozen, was a regular function.
        //But, bindActionCreators, is like being bit by a radio
        //active spider, now an action creator 
        //All an action creator is, is a function, that returns an action
        //what is an Action? an actin, is an object, that has
        //atleast one property, it has to have a type, or it's not an action.
        ///the dispatch will send that object, to every reducer.
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FrozenDept);
