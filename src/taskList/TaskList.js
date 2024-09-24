import { TaskListContext } from "../context/taskContext"
import { Task } from "../Task/Task"
import {useContext} from 'react'

export const TaskList = ()=>{
	const {task, changeTask, deleteTask} = useContext(TaskListContext)
	return(
		<>
		{task.map((task) => (
						<Task
						key={task.id}
						{...task}
						changeTask={changeTask}
						deleteTask={deleteTask}
						/>
				))}
		</>
	)
}
