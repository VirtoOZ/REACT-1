import React, { Component } from "react";
import "./search-panel.scss";

export default class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};

		this.onUpdateSerch = this.onUpdateSerch.bind(this);
	}

	onUpdateSerch(e) {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSerch(term);
	}

	render() {
		return (
			<input
				className="form-control search-input"
				type="text"
				placeholder="поиск по записям"
				onChange={this.onUpdateSerch}
			/>
		);
	}
}
