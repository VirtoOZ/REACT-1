import React, { Component } from "react";
import "./post-list-item.scss";

export default class PostListItem extends Component {


	render() {
		const { label, onDelete, onToggleImportant, onToggleLike, important, like } = this.props;
		let classNames = "app-list-item d-flex justify-content-between";
		if (important) {
			classNames += ' important';
		}
		if (like) {
			classNames += ' like';
		}
		return (
			<div className={classNames}>
				<span className="app-list-item-label" onClick={onToggleLike}>
					{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<button className="btn-star btr-sm" onClick={onToggleImportant}>
						<i className="fa fa-star"></i>
					</button>
					<button
						type="button"
						className="btn-trash btr-sm"
						onClick={onDelete}
					>
						<i className="fa fa-trash-o"></i>
					</button>
					<button
						type="button"
						className="btn-trash btr-sm"
					>
						<i className="fa fa-heart"></i>
					</button>
				</div>
			</div>
		)
	}
}