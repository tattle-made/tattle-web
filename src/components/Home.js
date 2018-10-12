import React, {Component} from 'react';
import {Layout, Popover, Button} from 'antd';
import {Row, Col} from 'antd';
import LoginForm from './LoginForm';
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
				<Header> 
					<Row gutter={16}>
						<Row>
				      		<Col span={20}>Tattle</Col>
				      		<Col span={4}>
					      		<Popover placement="bottomRight" content={<LoginForm/>} title="Login">
									<Button>Login</Button>
								</Popover>
			      			</Col>
					    </Row>
					</Row>
				</Header>
				<Content> content </Content>
				<Footer> footer </Footer>
			</Layout>
		)
	}
}

export default Home