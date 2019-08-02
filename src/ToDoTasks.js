import React, {Component} from 'react';

export default class TaskInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			tasks : props.data,
			}
            this.handleChecked = this.handleChecked.bind(this);
	}
    handleChecked () {
        if(this.props.isChecked){
            console.log("Show me the money")
        }
        else{
            console.log("Pum")
        }

    }
	render(){
		return(
			<div>
                <ul>
				{this.state.tasks.map((props)=>
				<li><input type="checkbox" checked={props.isChecked} onChange={this.handleChecked()}></input> {props.task}</li>
                )}
                </ul>
			</div>
		)		
	}

}