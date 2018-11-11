import React, {Component} from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from 'styled-components';

const MailChimpSection = styled.section`
	margin-top: 4em;
`;

class MyForm extends Component{
	render(){
		return(<div>form</div>);
	}
}

export default class MailChimp extends Component{
	render(){
		return (
			<MailChimpSection className="mailchimp"> 
				<h2 className="something">Subscribe for Updates</h2>
				<MailchimpSubscribe url={'http://eepurl.com/dM-5VQ'}/>
			</MailChimpSection>
		)
	}
}

// todo style this. create a class. there's a div within it for error and warning
// an input for email address and a button for submit button
// styling these 3 should give you something thats consistent with this branding