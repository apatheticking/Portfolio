import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = ({ onRouteChange }) =>{
	return(
		<div className="footer">
			<Grid>
				<Row>
					<div className="footerText">
						<Col xs={6} md={2}>
							<h3>Site Map</h3>
								<ul className="siteMap">
									<li onClick={() => {onRouteChange('AboutMe')}}>About Me</li>
									<li onClick={() => {onRouteChange('Resume')}}>Resume</li>
									<li onClick={() => {onRouteChange('Portfolio')}}>Portfolio</li>
									<li onClick={() => {onRouteChange('ContactMe')}}>Contact Me</li>
								</ul>
						</Col>
						{/*
						<Col xs={1} md={1}>
							<div className="line"></div>
						</Col>
						*/}
						<Col xs={6} md={10}>
							<h3>Contact Me</h3>
							<p>
								Email: <a href="mailto:jjlee16@gmail.com">jjlee16@gmail.com</a> <br />
								Phone Number: <a href="tel:416-912-1070">416-912-1070</a> <br />
							</p>
								<a href="https://www.linkedin.com/in/jeffrey-lee-80760a48/"><i className="fa fa-linkedin"></i></a>{" "}
								<a href="https://github.com/apatheticking/Portfolio"><i className="fa fa-github"></i></a><br />
						</Col>
					</div>
				</Row>
			</Grid>
		</div>
	);
}

export default Footer;