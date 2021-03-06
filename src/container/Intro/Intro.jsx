import React,{useState,useRef} from 'react';
import {BsFillPlayFill,BsPauseFill} from "react-icons/bs";

import {meal} from "../../constants"

import './Intro.css';



export default function Intro() {

const [playVideo, setPlayVideo] = useState(false)
const vidRef=useRef()


	return (
		<div className="app__video">
			<video 
				ref={vidRef}
				src={meal}
				type="video/mp4"
				loop
				controls={false}
				muted
			/>
			<div className="app__video-overlay flex__center">
				<div className="app__video-overlay_circle flex__center"
					onClick={()=>{
						setPlayVideo(!playVideo);
						if(playVideo){
							vidRef.current.pause();
						}
						else{
							vidRef.current.play();
						}
						
					}}
				>

				{playVideo ?(
					<BsPauseFill color="white" fontSize={30}/>)
				:(
					<BsFillPlayFill color="white" fontSize={30}/>
					)


					}
				</div>
			</div>
		</div>

	)
}