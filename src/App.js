import React, {Component} from 'react';
import TaskInfo from './ToDoTasks';

import './App.css';

export default class WrapperToDos extends Component{
	constructor(props){
		super(props);
		this.state={
			tasks:[{number:1, task:'Sacar la basura', isChecked: true},
				  {number:2, task:'Comprar bananas', isChecked: false}, 
				  {number:3, task:'Hacer la tarea', isChecked: true}, 
				  {number:4, task:'Cortar el pasto', isChecked: false}, 
				  {number:5, task:'Lavar los platos', isChecked: false} ]}
		
	}

	render(){
		return(
			<div>
       		<TaskInfo						
					data={this.state.tasks}
					/>
       		</div>
		)
	}

}