import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../store/messages/actions';

class FormAddMsg extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleChange(e) {
    this.setState({
			text: e.target.value
		});
  }

	handleSubmit(e) {
		e.preventDefault();
		this.props.addMessage(this.state.text);
		this.setState({
			text: ''
		});
	}

	handleClear(e) {
		this.props.clearMessages();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-row">
					<div className="col-7">
						<input type="text" className="form-control" value={this.state.text} onChange={this.handleChange}/>
					</div>
					<div className="col">
						<input type="submit" className="form-control btn btn-primary span4" value="Send" />
						<input type="button" className="form-control btn btn-danger span4" value="Clear" onClick={this.handleClear} />
					</div>
				</div>
			</form>
		);
	}
}

export default connect( null, {
	addMessage: actions.addMessage,
	clearMessages: actions.clearMessages,
})(FormAddMsg);
