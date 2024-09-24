import { useContext } from 'react'
import { TaskListContext } from '../context/taskContext'

export const Sort = () => {
	const { handleSort, sort } = useContext(TaskListContext)

	return (
		<button type='submit' onClick={handleSort}>{sort === "asc" ? "Список по возрастанию" : "Список по убыванию"}</button>
	)
}
