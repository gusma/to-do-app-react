import React from 'react';

function TaskDisplay(props){
	return(
		<li><input type="checkbox" checked={props.isChecked}></input>{props.number} - {props.task}</li>
	)
}

export default TaskDisplay;