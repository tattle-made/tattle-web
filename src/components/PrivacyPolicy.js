import React, {Component} from 'react';
import {Layout, Popover, Button} from 'antd';
import {Row, Col} from 'antd';
import LoginForm from './LoginForm';
import LandingPage from './LandingPage';
const {Header, Content, Footer} = Layout;

class PrivacyPolicy extends Component{
	render(){
		return(
			<Layout>
				<Header style={{backgroundColor: '#ffffff'}} className="pa4"> 
					<Row type="flex" justify="end">
			      		<Col span={8}>
			      			<a href="/">
			      				<img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/public-storage%2Fweb_logo.png?alt=media&token=e6eeef3f-21b6-4ee1-8499-6e44056f506a"/>
			      			</a>
			      		</Col>
			      		<Col span={14}></Col>
			      		<Col span={2}>
				      		<Popover placement="bottomRight" content={<LoginForm/>} title="Login">
								<Button>Login</Button>
							</Popover>
		      			</Col>
					</Row>
				</Header>
				<Content> 
					<Row type="flex" justify="end">
						<Col span={2}></Col>
			      		<Col span={12} style={{padding:'1em'}}>
			      			<h1> Privacy Policy </h1>
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

			      		</Col>
			      		<Col span={10}></Col>
					</Row> 
				</Content>
			</Layout>
		)
	}
}

export default PrivacyPolicy