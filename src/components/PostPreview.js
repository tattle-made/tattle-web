import React, {Component} from 'react';
import {Player} from 'video-react';
//import FirebaseUtil from '../FirebaseUtil';
// import "./node_modules/video-react/dist/video-react.css"; 

export default class PostPreview extends Component{
	constructor(props){
		super(props);
		this.state={
			type:'pre-load',
			fileName:'default'
		}
	}

	componentDidMount(){
		// switch(this.props.type){
		// 	case "image":
		// 		FirebaseUtil.getImageUrl(this.props.filename)
		// 			.then(url=>{
		// 				this.setState({
		// 					type:'image',
		// 					fileName:url
		// 				})
		// 			})
		// 			.catch(err=>console.log(err));
		// 	break;
		// }
	}

	render(){
		//console.log(FirebaseUtil);
		switch(this.props.type){
			case "image":
					// return(<img src={this.state.fileName}/>)
					return(<img src="https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg"/>)
				break;
			case "video":
				// return(
				// 	<Player
				// 	      playsInline
				// 	      width={25}
				// 	      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
			 //      	/>
				// )
				return(<p> loading video</p>)
				break;
			case "text":
					return(<p>text of the post goes here</p>)
				break;
			case "pre-load":
				return(<p>loading</p>)
				break;
			default:
					return(<p>no preview available</p>)
				break;
		}
	}
}
