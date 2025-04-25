import React from "react";

import AppHeader from "../app-header/app-header.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import PostStatusFilter from "../post-status-filter/post-status-filter.jsx";
import PostList from "../post-list/post-list.jsx";
import PostAddForm from "../post-add-form/post-add-form.jsx";
import "./app.css";

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList />
			<PostAddForm />
		</div>
	);
};
export default App;