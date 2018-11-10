import React, {Component} from 'react';
import Page, {Grid, GridColumn} from '@atlaskit/page';
import Button from '@atlaskit/button';
import Mailchimp from './Mailchimp';

export default class Home extends Component{
	render(){
		return(
			<div>
				<Page>
					<Grid>
						<GridColumn medium={2}>
							<a href="/">
			      				<img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/public-storage%2Fweb_logo.png?alt=media&token=e6eeef3f-21b6-4ee1-8499-6e44056f506a"/>
		      				</a>
						</GridColumn>
						<GridColumn medium={8}>
							<Button appearance={'subtle-link'} href={'/feed'}> Feed </Button>
							<Button appearance={'subtle-link'} href={'dataset'}> Dataset </Button>
						</GridColumn>
						<GridColumn medium={2}>
							<Button appearance={'primary'}> Login </Button>
						</GridColumn>
					</Grid>

					<Grid>
						<GridColumn medium={8}>
							<h1>Fact Checked Stories for WhatsApp Users at Scale</h1>
							<h3>Tattle leverages technology to scale existing fact checking efforts by connecting WhatsApp users to fact checked stories in real time, making users more informed about what they read and share on WhatsApp. </h3>
							<h5>Share messages you are forwarded on WhatsApp with Tattle. Be an informed WhatsApp user. Empower others to be the same.</h5>
							<Mailchimp/>
						</GridColumn>
						<GridColumn medium={4}>
							<img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/public-storage%2Flanding_page_showcase_image.png?alt=media&token=64253228-8bfa-41d2-94ab-d16717eada34"/>
						</GridColumn>
					</Grid>

					<Grid>
						<Button appearance={'subtle-link'} href={'/privacy-policy'}> Privacy Policy </Button>
						<Button appearance={'subtle-link'} href={'about'}> About Us </Button>
						<Button appearance={'subtle-link'} href={'contact'}> Contact </Button>
					</Grid>
				</Page>
			</div>
		)
	}
}

//