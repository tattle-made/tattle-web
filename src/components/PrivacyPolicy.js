import React, {Component} from 'react';
import Page, {Grid, GridColumn} from '@atlaskit/page';
import Header from './Layout/Header';
import PageHeader from '@atlaskit/page-header';

class PrivacyPolicy extends Component{
	render(){
		return(
			<Page>
				<Header/>
				<Grid>
					<GridColumn medium={8}>
						<PageHeader>Privacy Policy</PageHeader>
						<h2>About Tattle</h2>
						<p>Tattle is an app for anonymously crowdsourcing, and annotating messages forwarded on WhatsApp from WhatsApp users.</p>

						<h2>What Tattle Collects About You:</h2>
						<p>Besides the content you share with Tattle, the app stores the time at which the post was submitted to the app. While submitting, the location from where the message is being shared is selected by default, but a user can opt out of this prior to submission of a post. This location is that given by your Internet service provider.</p>

						<h2>Why Tattle Needs this Information?</h2>
						<p>The three data points- content, time and location enable for deeper understanding of trends on information dissemination on WhatsApp such as:</p>
						<ul>
						<li>Where do posts originate from?</li>
						<li>Do WhatsApp videos have a shelf life or are they recycled and forwarded in newer forms?</li>
						<li>What kind of content is circulated on WhatsApp and how is it received?</li>
						</ul>
						<p>The crowdsourced data will be open-access and can be used by researchers studying spread of information and misinformation on encrypted platforms such as WhatsApp. The data will also be valuable for online information verification groups.</p>

						<h2>Control over Information:</h2>
						<p>Tattle does not collect any personal information on the user. Any user can request for access to the data being collected by the app through the contact email id.</p>

						<h2>Reach us:</h2>
						<p>You can reach out with further questions at feedback@gettattle.app</p>
					</GridColumn>
					<GridColumn medium={4}>

					</GridColumn>
				</Grid>
			</Page>
		)
	}
}

export default PrivacyPolicy