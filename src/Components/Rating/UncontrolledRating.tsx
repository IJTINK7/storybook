import React, {useState} from 'react';
import {Star} from "./Star";
import {RatingValueType} from "./Rating";

type PropsType ={
	defaultValue?: RatingValueType
	callback:(value: RatingValueType)=> void
}
export const UncontrolledRating = (props: PropsType) => {
	const [ratingValue, setRatingValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0 )
	return (
		<div>
			<Star selected={ratingValue > 0} setRatingValue={()=>{setRatingValue(1); props.callback(1)}}/>
			<Star selected={ratingValue > 1} setRatingValue={()=>{setRatingValue(2); props.callback(2)}}/>
			<Star selected={ratingValue > 2} setRatingValue={()=>{setRatingValue(3); props.callback(3)}}/>
			<Star selected={ratingValue > 3} setRatingValue={()=>{setRatingValue(4); props.callback(4)}}/>
			<Star selected={ratingValue > 4} setRatingValue={()=>{setRatingValue(5); props.callback(5)}}/>
		</div>
	)
}
