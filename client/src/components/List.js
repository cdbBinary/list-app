import React from 'react';

const List = ({list}) =>
	<div className="single-list" key={list.id}>
		<h1>List #:</h1>
		<h1>{list.id}</h1>
		<h1>Title</h1>
    <h4>{list.title}</h4>
    <h1>Excerpt</h1>
    <p>{list.excerpt}</p>
    <h1>Description</h1>
    <p>{list.description}</p>
    <h1>Upvotes</h1>
    <p>{list.upvotes}</p>
	</div>

	export default List;
