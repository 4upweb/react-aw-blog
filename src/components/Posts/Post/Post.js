import alertify from 'alertify.js';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '../../Button/Button';
import Comments from '../Comments/Comments';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCommentsLoaded: false
        };
    }
    editPost = (id) => {
        console.log('editPost:', id);
    };

    deletePost = (id) => {
        // confirm dialog
        alertify.confirm("Are you sure do delete this post?", function () {
            // user clicked "ok"
            console.log('postDeleted: ', id);
        }, function() {
            // user clicked "cancel"
            console.log('postKept: ', id);
        });
    };

    toggleComments = (id) => {
        if (!this.state.isCommentsLoaded) {
            ReactDOM.render(
                <Comments id={id} />,
                document.getElementById(`comments-for-post-${id}`)
            );
        } else {
            ReactDOM.unmountComponentAtNode(document.getElementById(`comments-for-post-${id}`));
        }
        this.setState(prevState => ({
            isCommentsLoaded: !prevState.isCommentsLoaded
        }));
    };

    render() {
        const {id, title, body} = this.props.post;
        return (
            <div>
                <div className="row">
                    <h3 className="title">{title}</h3>
                    <p>{body}</p>
                    <div className="btn-group btn-group-sm" role="group">
                        <Button btn="info" title="Edit" handleClick={() => this.editPost(id)} />
                        <Button btn="danger" title="Delete" handleClick={() => this.deletePost(id)} />
                    </div>

                    <div className="btn-group pull-right btn-group-sm" role="group">
                        <Button btn="success" title="Show Comments" toggleTitle="Hide Comments" handleClick={() => this.toggleComments(id)} />
                    </div>
                </div>
                <div id={`comments-for-post-${id}`}></div>
                <hr/>
            </div>
        );
    }
}

export default Post;