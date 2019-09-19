import React, { Component } from 'react'
import {connect} from 'react-redux';
import updateDairy from '../actions/dairyInvUpdate';
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.5/node_modules/redux';
import AddItem from './AddItem';
import getInv from '../actions/getInv.js'


export class Dairy extends Component {
    componentDidMount(){
        // run an action that gets the dairy inventory from
        // the back-end
        this.props.getInv('dairy');

    }
    changeQuantity=(operation, indexToChange)=>{
        console.log(operation,indexToChange);
        this.props.updateDairy(operation,indexToChange);
    
    }
    render() {
        // console.log(connect);
        console.log(this.props.dairyData)
        const Dairys = this.props.dairyData.map((dairy, i)=>{
            return(
                <div key = {i}>
                    <li>type: {dairy.food} quantity: {dairy.quantity}</li>
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('+',i)}}value="+"/>
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('-',i)}}value="-"/>
                </div>
            )
        })
        return (
            <div>
                <AddItem dept="Dairy" />
                {Dairys}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        dairyData: state.dairy
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateDairy: updateDairy,
        getInv
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Dairy);
