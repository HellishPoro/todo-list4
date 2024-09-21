import { useContext } from 'react'
import { SortContext } from '../context/sortContext'

export const Sort = () => {
	const { handleSort, sort } = useContext(SortContext)

	return (
		<button type='submit' onClick={handleSort}>{sort === "asc" ? "Список по возрастанию" : "Список по убыванию"}</button>
	)
}
