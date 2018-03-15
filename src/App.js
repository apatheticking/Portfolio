import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import PhotoFrame from './Components/PhotoFrame/PhotoFrame';
import AboutMe from './Components/AboutMe/AboutMe';
import Resume from './Components/Resume/Resume';
import ContactMe from './Components/ContactMe/ContactMe';
import Portfolio from './Components/Portfolio/Portfolio';

import { Grid, Row, Col, Panel } from 'react-bootstrap';

import './App.css';

class App extends Component { 
	constructor() {
		super();
		this.state = {
			route: "AboutMe"
		}
	}

	onRouteChange = (path) => {
	    this.setState({route: path});
  	}

	render() {
		const { route } = this.state;
		let display = null;

	    if ( route === 'AboutMe' ){
	    	display = <AboutMe />
	    } else if ( route === 'Resume'){
	    	display = <Resume />
	    } else if ( route === 'Portfolio' ) {
	    	display = <Portfolio />
	    } else if ( route === 'ContactMe' ) {
	    	display = <ContactMe />
	    }

	    return (
	      	<div className="App">
	      		<Grid>
	      			<Row>
		      			<Col>
			        		<Navigation onRouteChange={this.onRouteChange}/> 	
			  			</Col>
		  			</Row>
		  			<Row>
				    	<div className="Container">
					    	<Col sm="12" md="4">
					        	<PhotoFrame />
					    	</Col>
					    	<Col sm="12" md="8">
					    		<Panel className="ContentPanel">
						    		<div>
						    			{display}
						    		</div>
					    		</Panel>
					    	</Col>
				    	</div>
		  			</Row>
		  			<Row>
		  				<div className="Footer">
			        		<Col>
			        			<Footer onRouteChange={this.onRouteChange}/>
			    			</Col>
		    			</div>
		    		</Row>
		    	</Grid>
	      </div>
	    );
	}
}

export default App;
