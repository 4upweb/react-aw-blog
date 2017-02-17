import React, {Component} from 'react';
import './Posts.css';
import Post from './Post/Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(results => this.setState({items: results}));
    }

    handleDelete(i) {
        const posts = this.state.items.slice();
        this.setState({items: posts});
    }

    render() {
        const items = this.state.items;
        return (
            <div className="container posts">
                {items.map(item =>
                    <Post key={item.id} post={item} />)}
            </div>
        );
    }
}

export default Posts;
