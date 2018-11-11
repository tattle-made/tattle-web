import React,{Component} from 'react';
import Page, {Grid, GridColumn} from '@atlaskit/page';
import Button from '@atlaskit/button';
import styled from 'styled-components';

const HeaderSection = styled.section`
	margin-top:1em;
	margin-bottom:1em;
`;

export default class Header extends Component{
	render(){
		return(
			<Grid>
				<GridColumn medium={2}>
					<HeaderSection>
						<a href="/">
		      				<img style={{'height':'32px'}}src="https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/public-storage%2Fweb_logo.png?alt=media&token=e6eeef3f-21b6-4ee1-8499-6e44056f506a"/>
	      				</a>
	  				</HeaderSection>
				</GridColumn>
				<GridColumn medium={8}>
					<HeaderSection>
						<Button appearance={'subtle-link'} href={'/'}> Feed </Button>
						<Button appearance={'subtle-link'} href={'/privacy-policy'}> Privacy Policy </Button>
						<Button appearance={'subtle-link'} href={'/'}> About </Button>
					</HeaderSection>
				</GridColumn>
				<GridColumn medium={2}>
					<HeaderSection>
						<Button appearance={'primary'} shouldFitContainer> Login </Button>
					</HeaderSection>
				</GridColumn>
			</Grid>
		)
	}
}