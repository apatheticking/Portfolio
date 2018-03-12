import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () =>{
	return(
		<div className="footer">
			<Grid>
				<Row>
					<div className="footerText">
						<Col xs={2} md={2}>
							<h3>Site Map</h3>
								<ul className="siteMap">
									<li>Resume</li>
									<li>Portfolio</li>
									<li>Contact Me</li>
								</ul>
						</Col>
					
						<Col xs={1} md={1}>
							<div className="spacing line"></div>
						</Col>

						<Col xs={4} md={4}>
							<h3>Contact Me</h3>
							<p>
								Email: jjlee16@gmail.com <br />
								Phone Number: 416-912-1070 <br />
							</p>
								<a href="#"><i className="fa fa-linkedin"></i></a>{" "}
								<a href="#"><i className="fa fa-google-plus"></i></a>
						</Col>
					</div>
				</Row>
			</Grid>
		</div>
	);
}

export default Footer;