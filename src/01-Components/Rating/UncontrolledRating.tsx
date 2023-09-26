import React, {useState} from 'react';
import {Star} from "./Star";

export const UncontrolledRating = () => {
	const [ratingValue, setRatingValue] = useState(0)
	return (
		<div>
			<Star selected={ratingValue > 0} setRatingValue={()=>setRatingValue(1)}/>
			<Star selected={ratingValue > 1} setRatingValue={()=>setRatingValue(2)}/>
			<Star selected={ratingValue > 2} setRatingValue={()=>setRatingValue(3)}/>
			<Star selected={ratingValue > 3} setRatingValue={()=>setRatingValue(4)}/>
			<Star selected={ratingValue > 4} setRatingValue={()=>setRatingValue(5)}/>
		</div>
	)
}
