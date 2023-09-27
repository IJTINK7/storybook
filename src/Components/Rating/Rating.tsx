import React from 'react';
import {Star} from "./Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
	value: RatingValueType
	callBack: (value: RatingValueType)=> void
}
export const Rating = (props: RatingPropsType) => {
	return (
		<div>
			<Star selected={ props.value > 0 } setRatingValue={()=>props.callBack(1)}/>
			<Star selected={ props.value > 1 } setRatingValue={()=>props.callBack(2)}/>
			<Star selected={ props.value > 2 } setRatingValue={()=>props.callBack(3)}/>
			<Star selected={ props.value > 3 } setRatingValue={()=>props.callBack(4)}/>
			<Star selected={ props.value > 4 } setRatingValue={()=>props.callBack(5)}/>
		</div>

	)
}