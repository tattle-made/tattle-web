import React, {Component} from 'react';
import Page, {Grid, GridColumn} from '@atlaskit/page';
import Button from '@atlaskit/button';
import Mailchimp from './Mailchimp';
import styled from 'styled-components';
import Header from './Layout/Header';

const ContentSection = styled.section`
	margin-top:4em;
`;

const HeaderSection = styled.section`
	margin-top:1em;
	margin-bottom:1em;
`;

const RightAligned = styled.section`
	margin-top:4em;
	text-align:right;
`;

export default class Home extends Component{
	render(){
		return(
			<div>
				<Page>
					<Header/>

					<Grid>
							<GridColumn medium={8}>
								<ContentSection style={{'padding-top':'4em'}}>
									<h1>Fact Checked Stories for WhatsApp Users at Scale</h1>
									<h3>Tattle leverages technology to scale existing fact checking efforts by connecting WhatsApp users to fact checked stories in real time, making users more informed about what they read and share on WhatsApp. </h3>
									<h5>Share messages you are forwarded on WhatsApp with Tattle. Be an informed WhatsApp user. Empower others to be the same.</h5>
									<Mailchimp/>
								</ContentSection>
							</GridColumn>
							<GridColumn medium={4} style={{'text-align':'right'}}>
								<RightAligned>
									<img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/public-storage%2Flanding_page_showcase_image.png?alt=media&token=64253228-8bfa-41d2-94ab-d16717eada34"/>
								</RightAligned>
							</GridColumn>
					</Grid>
				</Page>
			</div>
		)
	}
}

//