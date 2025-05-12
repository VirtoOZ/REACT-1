import React from "react";

import AppHeader from "../app-header/app-header.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import PostStatusFilter from "../post-status-filter/post-status-filter.jsx";
import PostList from "../post-list/post-list.jsx";
import PostAddForm from "../post-add-form/post-add-form.jsx";
import "./app.css";

const App = () => {
	const data = [
		{ label: 'Going to learn React', important: true, },
		{ label: 'Than is so good', important: false, },
		{ label: 'I need a breack...', important: false, }
	];

	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList posts={data} />
			<PostAddForm />
		</div>
	);
};
export default App;