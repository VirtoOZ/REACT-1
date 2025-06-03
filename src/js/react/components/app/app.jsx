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
				{ label: 'Going to learn React', important: true, like: true, id: 'dsfsdf' },
				{ label: 'Than is so good', important: false, like: false, id: 'dfgal' },
				{ label: 'I need a breack...', important: false, like: false, id: 'lkdibg' }
			]
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLike = this.onToggleLike.bind(this);
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

	onToggleLike(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((item) => item.id === id);
			const oldPost = data[index];
			const newItem = { ...oldPost, like: !oldPost.like };
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			};
		})
	}

	onToggleImportant(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((item) => item.id === id);
			const oldPost = data[index];
			const newItem = { ...oldPost, important: !oldPost.important };
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			};
		})
	}

	render() {
		const { data } = this.state;
		const liked = data.filter((item) => item.like).length;
		const allPosts = data.length;

		return (
			<div className="app" >
				<AppHeader
					liked={liked}
					allPosts={allPosts}
				/>
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLike={this.onToggleLike}
				/>
				<PostAddForm
					onAdd={this.addItem} />
			</div>
		);
	}
};
