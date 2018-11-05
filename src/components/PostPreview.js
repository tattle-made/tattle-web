import React, {Component} from 'react';
import {Player} from 'video-react';
// import "./node_modules/video-react/dist/video-react.css"; 

export default class PostPreview extends Component{
	render(){
		switch(this.props.type){
			case "image":
				return(<img src="https://sf.tac-cdn.net/images/products/large/FTD-BD2.jpg"/>)
				break;
			case "video":
				return(
					<Player
					      playsInline
					      width={25}
					      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
			      	/>
				)
				break;
			case "text":
					return(<p>text of the post goes here</p>)
				break;
			default:
					return(<p>no preview available</p>)
				break;
		}
	}
}