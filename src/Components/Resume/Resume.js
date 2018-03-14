import React from 'react';
import { Tabs, Tab, Panel } from 'react-bootstrap';
import './Resume.css';

const Resume = () => {
	return(
		<div>
			<h1>Jeffrey Lee's Resume</h1>
				<Tabs className="tab" defaultActiveKey={1}>
					<Tab eventKey={1} title="Profile">
					    <Panel>
							<Panel.Body>
								<p>
									Lorem ipsum dolor sit amet, et usu idque maluisset neglegentur. Enim ridens dolorem ut his, 
									ne his agam everti, an cum fuisset salutandi voluptatibus. Ne aperiri officiis sit. Quo nibh 
									error senserit in. Eam at officiis reprimique dissentiet, euismod denique cum cu.
								</p>
							</Panel.Body>
						</Panel>
					</Tab>
					<Tab eventKey={2} title="Technical Skills">
					    <Panel.Body>
								<p>
									Lorem ipsum dolor sit amet, et usu idque maluisset neglegentur. Enim ridens dolorem ut his, 
									ne his agam everti, an cum fuisset salutandi voluptatibus. Ne aperiri officiis sit. Quo nibh 
									error senserit in. Eam at officiis reprimique dissentiet, euismod denique cum cu.
								</p>
						</Panel.Body>
					</Tab>
					<Tab eventKey={3} title="Work Experience">
					    <Panel.Body>
								<p>
									Lorem ipsum dolor sit amet, et usu idque maluisset neglegentur. Enim ridens dolorem ut his, 
									ne his agam everti, an cum fuisset salutandi voluptatibus. Ne aperiri officiis sit. Quo nibh 
									error senserit in. Eam at officiis reprimique dissentiet, euismod denique cum cu.
								</p>
						</Panel.Body>
					</Tab>
					<Tab eventKey={4} title="Education">
					    <Panel.Body>
								<p>
									Lorem ipsum dolor sit amet, et usu idque maluisset neglegentur. Enim ridens dolorem ut his, 
									ne his agam everti, an cum fuisset salutandi voluptatibus. Ne aperiri officiis sit. Quo nibh 
									error senserit in. Eam at officiis reprimique dissentiet, euismod denique cum cu.
								</p>
						</Panel.Body>
					</Tab>
				</Tabs>
				<a href="#" download="JeffreyLeeResume.doc">Download Jeff's Resume</a>
		</div>
	);
}

export default Resume;