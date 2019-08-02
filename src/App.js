import React, {Component} from 'react';
import TaskInfo from './ToDoTasks';

import './App.css';

export default class WrapperToDos extends Component{
	constructor(props){
		super(props);
		this.state={
			tasks:[{id:1, task:'Sacar la basura', isChecked: true},
				  {id:2, task:'Comprar bananas', isChecked: false}, 
				  {id:3, task:'Hacer la tarea', isChecked: true}, 
				  {id:4, task:'Cortar el pasto', isChecked: false}, 
				  {id:5, task:'Lavar los platos', isChecked: false} ]}
		
	}

	render(){
		return(
			<div>
       		<TaskInfo						
					data={this.state.tasks} 
					ischecked={this.handleChecked}
					/>
       		</div>
		)
	}

}