import React from 'react';
import { connect } from 'react-redux';

const MsgList = ({ messages }) => {
	return (
		<div className="result">
			<div className="alert alert-primary" role="alert">
				RESULT:
			</div>
			<div className="container-list">
				<ul className="list-group list-group-flus">
					{messages.map((msg, i) =>
						<li key={i} className="list-group-item">
							{msg}
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		messages: state.messages
	}
}

export default connect(mapStateToProps)(MsgList);
