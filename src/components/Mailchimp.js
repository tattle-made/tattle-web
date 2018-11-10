import React, {Component} from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

export default class MailChimp extends Component{
	render(){
		return (
			<div>
				<h2>Subscribe for Updates</h2>
				<MailchimpSubscribe url={'http://eepurl.com/dM-5VQ'}/>
			</div>
		)
	}
}

// todo style this. create a class. there's a div within it for error and warning
// an input for email address and a button for submit button
// styling these 3 should give you something thats consistent with this branding