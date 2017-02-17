import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnTitle: props.title || 'Default'
        };
    }

    handleClick = () => {
        if (this.props.toggleTitle) {
            this.setState(prevState => ({
                btnTitle: (prevState.btnTitle === this.props.title) ? this.props.toggleTitle : this.props.title
            }));
        }
        this.props.handleClick();
    };

    render() {
        const btnType = `btn btn-${this.props.btn}`;
        return (
            <button type="button" className={btnType} onClick={this.handleClick}>{this.state.btnTitle}</button>
        );
    }
}

Button.propTypes = {
    title: React.PropTypes.string.isRequired,
    toggleTitle: React.PropTypes.string,
    handleClick: React.PropTypes.func.isRequired,
    btn: React.PropTypes.oneOf(['default', 'success','info','warning','danger'])
};

Button.defaultProps = {
    btn: "default"
};

export default Button;
