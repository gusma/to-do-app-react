import React, {Component} from 'react';

class TaskInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			tasks : props.data,
			}
            this.handleChecked = this.handleChecked.bind(this);
	}
   handleChecked (id) {
        this.setState(
            this.state.tasks.map(function(task){
                if(task.id === id) {
                    task.checked = !task.checked
                }
                return task;
            })
        );
    }
	render(){
		return(
			<div>
                <ul>
				{this.state.tasks.map((props)=>
				<li><input type="checkbox" checked={props.isChecked} onChange={this.handleChecked(props.id)}></input> {props.task}</li>
                )}
                </ul>
			</div>
		)		
	}

}

export default TaskInfo;