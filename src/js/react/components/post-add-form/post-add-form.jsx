import React, { Component } from "react";
import "./post-add-form.scss";

export default class PostAddForm extends Component {
	constructor(props) {
		super(props);

		this.onValueChange = this.onValueChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			text: '',
		}
	}

	onValueChange(e) {
		this.setState({
			text: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({
			text: '',
		});
	}

	render() {
		return (
			<form
				className="bottom-panel d-flex"
				action=""
				onSubmit={this.onSubmit}
			>
				<input
					className="form-control new-post-label"
					type="text"
					placeholder="О чем вы думаете сейчас?"
					onChange={this.onValueChange}
					value={this.state.text}
				/>
				<button
					className="btn btn-outline-secondary"
					type="text"
				>
					Добавить
				</button>
			</form>
		);
	}
};