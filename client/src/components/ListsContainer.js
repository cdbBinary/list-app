import React, { Component } from 'react';
import axios from 'axios';
class ListsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        axios.get('api/v1/lists.json')
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="lists-container">
                {this.state.lists.map( list => {
                    return (
                        <div className="single-list" key={list.id}>
                        		<h1>Title</h1>
                            <h4>{list.title}</h4>
                            <h1>Excerpt</h1>
                            <p>{list.excerpt}</p>
                            <h1>Description</h1>
                            <p>{list.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ListsContainer;
