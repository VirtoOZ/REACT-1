import React, { Component } from "react";

import AppHeader from "../app-header/app-header.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import PostStatusFilter from "../post-status-filter/post-status-filter.jsx";
import PostList from "../post-list/post-list.jsx";
import PostAddForm from "../post-add-form/post-add-form.jsx";
import "./app.scss";
import { roundArrow } from "tippy.js";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ label: 'Going to learn React', important: true, id: 'dsfsdf' },
				{ label: 'Than is so good', important: false, id: 'dfgal' },
				{ label: 'I need a breack...', important: false, id: 'lkdibg' }
			]
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.maxId = 4;
	}

	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id === id);
			const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
			return {
				data: newArr
			}
		});
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	render() {
		return (
			<div className="app" >
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deleteItem}
				/>
				<PostAddForm
					onAdd={this.addItem} />
			</div>
		);
	}
};
