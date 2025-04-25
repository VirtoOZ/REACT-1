import React from "react";
import "./post-list-item.css";

const PostListItem = () => {
	return (
		<li className="app-list-item d-flex justify-content-between">
			<span className="app-list-item-label">
				Hallo World
			</span>
			<div className="d-flex justify-content-center align-items-center">
				<button className="btn-star btr-sm">
					<i className="fa fa-star"></i>
				</button>
				<button
					type="button"
					className="btn-trash btr-sm"
				>
					<i className="fa fa-trash-o"></i>
				</button>
				<button
					type="button"
					className="btn-trash btr-sm"
				>
					<i className="fa fa-heart"></i>
				</button>
			</div >
		</li >
	);
};

export default PostListItem;