import React from 'react';

import {images} from "../../constants"
import {SubHeading} from "../../components"
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
    	<img src={images.chef} alt="chef"/>
    </div>
    <div className="app__wrapper_info">
    	<SubHeading title="Chef's Word"/>
    	<h1 className="headtext__cormorant">What We Believe In</h1>
    	<div className="app__chef-content_quote">
    		<img src={images.quote} alt="quote"/>
    		<p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed gravida sapien, quis luctus enim. Fusce tellus urna, tincidunt .</p>
    	</div>
    	<p className="p__opensans">Duis dolor metus, euismod sed dapibus id, porta sit amet quam. Donec fringilla elementum consequat. Vestibulum feugiat pretium purus at placerat. Praesent commodo nunc turpis, a rutrum mauris fringilla quis</p>
  	</div> 

  	<div className="app__chef-sign">
  		<p className="p__opensans">Chef & Founder</p>
  	</div>
  </div>
);

export default Chef;
