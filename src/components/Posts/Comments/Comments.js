import React, {Component} from 'react';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}/comments`)
            .then(response => response.json())
            .then(results => this.setState({comments: results}));
    }

    render() {
        const comments = this.state.comments;
        return (
            <div className="comments">
                <h5>Comments:</h5>
                <ul className="list-group">
                    {comments.map(item =>
                        <li key={item.id} className="list-group-item"><span className="badge">{item.email}</span>
                            <p><strong>{item.name}</strong></p>
                            <p>{item.body}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Comments;