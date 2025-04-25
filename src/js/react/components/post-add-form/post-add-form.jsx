import React from "react";
import "./post-add-form.css";

const PostAddForm = () => {
	return (
		<form className="bottom-panel d-flex" action="">
			<input
				className="form-control new-post-label"
				type="text"
				placeholder="О чем вы думаете сейчас?"
			/>
			<button
				className="btn btn-outline-secondary"
				type="text"
			>
				Добавить
			</button>
		</form>
	);
};

export default PostAddForm;