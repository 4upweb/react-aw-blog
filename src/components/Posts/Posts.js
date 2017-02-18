import React, {Component} from 'react';
import './Posts.css';
import Post from './Post/Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            deleted: []
        };
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(results => this.setState({items: results}));
    }

    handlePostDelete = (id) => {
        this.setState({deleted: this.state.deleted.concat([id])});
    };

    handlePostUpdate = (updItem, postUpdateCalback) => {
        const items = this.state.items;
        const updItems = items.map(item => {
            if (updItem.id === item.id) {
                item.title = updItem.title;
                item.body = updItem.body;
            }
            return item;
        });
        this.setState({items: updItems});
        postUpdateCalback && postUpdateCalback();
    };

    render() {
        const items = this.state.items
            .filter(item => this.state.deleted.indexOf(item.id) === -1);
        return (
            <div className="container posts">
                {items.map(item =>
                    <Post key={item.id} post={item}
                          onPostDelete={() => this.handlePostDelete(item.id)}
                          onPostUpdate={(item, callback) => this.handlePostUpdate(item, callback)}/>)}
            </div>
        );
    }
}

export default Posts;
