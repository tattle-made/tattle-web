import React, {Component} from 'react';
import {Layout, Popover, Button} from 'antd';
import {Row, Col} from 'antd';
import LoginForm from './LoginForm';
import LandingPage from './LandingPage';
import Mailchimp from './Mailchimp';
const {Header, Content, Footer} = Layout;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class Home extends Component{
	render(){
		//console.log(LoginForm);
		return(
			<Layout>
				<Header style={{backgroundColor: '#ffffff'}}> 
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
					<Row>
						<Mailchimp/>
					</Row>
				</Header>
				{/*<Content> <LandingPage/> </Content>*/}
			</Layout>
		)
	}
}

export default Home