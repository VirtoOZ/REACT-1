import React from "react";
import "./app-header.scss";

const AppHeader = ({ liked, allPosts }) => {
	return (
		<div className="app-header d-flex">
			<h1>Belorus Anatoly</h1>
			<h2>{allPosts} записей, из них понравились {liked}</h2>
		</div>
	);
};
export default AppHeader;