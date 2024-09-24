import style from "./Task.module.css";
import {  useState } from "react";

export const Task = ({text, id, completed, deleteTask, changeTask}) => {
	const [textUpdate, setTextUpdate] = useState(text);
	const [isEdit, setIsEdit] = useState(false);
	const handleEdit = () => setIsEdit(!isEdit);



	const handleUpdateTask = () => {
		changeTask(id, textUpdate).then(() => {
			setIsEdit(false);
		});
	};
	return (
		<div key={id} className={style.Task}>
			{isEdit ? (
				<input
					value={textUpdate}
					onChange={(e) => setTextUpdate(e.target.value)}
				/>
			) : (
				<span>{text}</span>
			)}
			{isEdit ? (
				<>
					<button type="submit" onClick={handleUpdateTask}>
						Изменить
					</button>
					<button onClick={handleEdit}>Вернуться</button>
				</>
			) : (
				<button onClick={handleEdit}>Редактировать</button>
			)}
			<input className={style.input} name="chechbox" type='checkbox' defaultChecked={completed} />
			<button onClick={() => deleteTask(id)}>Удалить</button>
		</div>
	);
};
