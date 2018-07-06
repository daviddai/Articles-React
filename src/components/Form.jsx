import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import {addArticle} from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends React.Component {

    constructor() {
        super();

        this.state = {
            title: ""
        };
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        const title = this.state.title;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({
            title: ""
        })
    };

    render() {
        const title = this.state.title;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                    SAVE
                </button>
            </form>
        );
    }

}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
    addArticle: PropTypes.func.isRequired
};

export default Form;