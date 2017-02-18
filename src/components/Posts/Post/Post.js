import alertify from 'alertify.js';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '../../Button/Button';
import Comments from '../Comments/Comments';
import EditForm from '../EditForm/EditForm';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCommentsLoaded: false,
            item: this.props.post
        };
    }

    handleFormCancel = (id) => {
        ReactDOM.unmountComponentAtNode(document.getElementById(`edit-post-${id}`));
    };

    handleFormSubmit = (item) => {
        this.props.onPostUpdate(item, () => {
            ReactDOM.unmountComponentAtNode(document.getElementById(`edit-post-${item.id}`));
        });
    };

    editPost = (id) => {
        ReactDOM.render(
            (<EditForm item={this.props.post}
                       onFormCancel={() => this.handleFormCancel(this.props.post.id)}
                       onFormSubmit={(item) => this.handleFormSubmit(item)}/>),
            document.getElementById(`edit-post-${id}`)
        );
    };

    deletePost = (id) => {
        const props = this.props;
        alertify.confirm("Are you sure do delete this post?", () => {
            // user clicked "ok"
            props.onPostDelete();
        }, () => {
            // user clicked "cancel"
            // console.log('postKept: ', id);
        });
    };

    toggleComments = (id) => {
        if (!this.state.isCommentsLoaded) {
            ReactDOM.render(
                <Comments id={id}/>,
                document.getElementById(`comments-for-post-${id}`)
            );
        } else {
            ReactDOM.unmountComponentAtNode(document.getElementById(`comments-for-post-${id}`));
        }
        this.setState(prevState => ({
            isCommentsLoaded: !prevState.isCommentsLoaded
        }));
    };

    componentWillUnmount() {
        const $this = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(document.getElementById(`comments-for-${$this.id}`));
        ReactDOM.unmountComponentAtNode(document.getElementById(`edit-${$this.id}`));
    };

    render() {
        const {id, title, body} = this.props.post;
        return (
            <div id={`post-${id}`}>
                <div className="row">
                    <h3 className="title">{title}</h3>
                    <p>{body}</p>
                    <div className="btn-group btn-group-sm" role="group">
                        <Button btn="info" title="Edit" handleClick={() => this.editPost(id)}/>
                        <Button btn="danger" title="Delete" handleClick={() => this.deletePost(id)}/>
                    </div>

                    <div className="btn-group pull-right btn-group-sm" role="group">
                        <Button btn="success" title="Show Comments" toggleTitle="Hide Comments"
                                handleClick={() => this.toggleComments(id)}/>
                    </div>
                </div>
                <div id={`comments-for-post-${id}`}></div>
                <div id={`edit-post-${id}`}></div>
                <hr/>
            </div>
        );
    }
}

export default Post;