import React from "react";
import "./post-add-form.scss";

const PostAddForm = ({ onAdd }) => {
	return (
		<div className="bottom-panel d-flex" action="">
			<input
				className="form-control new-post-label"
				type="text"
				placeholder="О чем вы думаете сейчас?"
			/>
			<button
				className="btn btn-outline-secondary"
				type="text"
				onClick={() => onAdd('Hello')}
			>
				Добавить
			</button>
		</div>
	);
};

export default PostAddForm;