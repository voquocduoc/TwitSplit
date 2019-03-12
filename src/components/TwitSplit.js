import React from 'react';
import MsgList from './forms/MsgList';
import FormAddMsg from './forms/FormAddMsg';

export default () => {
	return (
		<div className="container">
			//I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.
			<FormAddMsg />
			<MsgList />
		</div>
	)
}
