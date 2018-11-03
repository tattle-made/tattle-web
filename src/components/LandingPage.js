import React, {Component} from 'react';
import {Row, Col} from 'antd';

class LandingPage extends Component{
	render(){
		return(
			<div>
				<Row>
					<Col span={8}>
							<img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/public-storage%2Flanding_image.png?alt=media&token=94353b6f-5346-4055-9862-a1de7a8c7243"/>
					</Col>

					<Col className="f-headline lh-solid" span={8}>
						Tattle
					</Col>

					<Col span={8}>
						hello
					</Col>
				</Row>
			</div>
		)
	}
}

export default LandingPage;