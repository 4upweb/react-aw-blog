import React, {Component} from 'react';
import Button from '../../Button/Button';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.item.id,
            title: this.props.item.title,
            body: this.props.item.body
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const { value, name } = target;

        this.setState({
            [name]: value
        });
    };

    handleCancel = () => {
        this.props.onFormCancel();
    };

    handleSubmit = () => {
        if (this.state.title && this.state.body) {
            this.props.onFormSubmit(this.state);
        }
    };

    render() {
        return (
            <div className="comments">
                <h5>Edit:</h5>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="email" className="form-control" name="title"
                               placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea className="form-control" rows="3" name="body" value={this.state.body}
                                  onChange={this.handleChange}/>
                    </div>
                    <div className="btn-group btn-group-sm" role="group">
                        <Button btn="info" title="Cancel" handleClick={() => this.handleCancel()}/>
                    </div>
                    <div className="btn-group btn-group-sm pull-right" role="group">
                        <Button btn="warning" title="Submit" handleClick={() => this.handleSubmit()}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditForm;