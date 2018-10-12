import React, {Component} from 'react';
import FirebaseUtil from '../FirebaseUtil';

class Feed extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentPage : 1
		}
	}

	componentDidMount(){
		const firebase = new FirebaseUtil();
		firebase.getPosts();
	}

	render(){
		return(
			<h1> Feed </h1>
		)
	}

	loadPostsFromFirebase(){
		
	}
}

export default Feed