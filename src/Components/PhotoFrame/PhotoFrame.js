import React from 'react';
import { Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import Profile from '../../Assets/Images/Profile.jpg';
import "./PhotoFrame.css"


const PhotoFrame = () => {
	return (
		<div className="Frame">
			<Carousel>
			  <Carousel.Item>
			    <Image src={Profile} rounded responsive/>
			  </Carousel.Item>
			  <Carousel.Item>
			    <Image src={Profile} rounded responsive/>
			  </Carousel.Item>
			  <Carousel.Item>
			    <Image src={Profile} rounded responsive/>
			  </Carousel.Item>
			</Carousel>
		</div>
	);
}

export default PhotoFrame;