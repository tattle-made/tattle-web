import React, {Component} from 'react';
import FirebaseUtil from '../FirebaseUtil';
import {Layout, Popover, Button, List, Tag} from 'antd';
import {Row, Col} from 'antd';
import LoginForm from './LoginForm';
import LandingPage from './LandingPage';
import PostPreview from './PostPreview';

const {Header, Content, Footer} = Layout;


class Feed extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentPage : 1,
			posts : []
		}
	}

	componentDidMount(){
		const firebase = new FirebaseUtil();
		firebase.getPosts()
		.then((posts)=>{
			var result = [];
			posts.forEach((doc)=>{
				result.push(doc.data());
			})
			this.setState({
				currentPage : 1,
				posts : result
			})
			console.log(this.state);
		})
		.catch(err=>console.log(err))
	}

	render(){
		const listData = this.state.posts;
		
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

				<List
					header={<div>Header</div>}
					footer={<div>Footer</div>}
					bordered
					dataSource={this.state.posts}
					pagination={true}
					positon={'bottom'}
					renderItem={item=>(
						<List.Item>{
							<div>
								<Row>
									<Col span={6}>
										<PostPreview type={item.type}></PostPreview>
									</Col>
									<Col span={18}>
										<h1>{item.title}</h1>
										<h6>{item.timestamp===undefined?'timestamp unavailable':item.timestamp.toString()}</h6>
										<h2>{item.description}</h2>
										<Tag> tag1</Tag>
										<Tag> tag2</Tag>
									</Col>
								</Row>
								
								
							</div>
						}</List.Item>
					)}
					size="large"
					>
				</List>
					
				</Content>
			</Layout>
		)
	}

	loadPostsFromFirebase(){
		
	}
}

export default Feed