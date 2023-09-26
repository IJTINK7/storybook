import {Rating, RatingValueType} from './Rating';
import React, {useState} from "react";

export default {
	component: Rating,
};

export const FullRating = () => {
	let [controlledRatingValue, setControlledRatingValue] = useState<RatingValueType>(0);
	return <Rating value={controlledRatingValue} callBack={setControlledRatingValue}/>
}
export const ZeroStarRating = () => {
	return <Rating value={0} callBack={()=>{}}/>
}
export const OneStarRating = () => {
	return <Rating value={1} callBack={()=>{}}/>
}
export const TwoStarRating = () => {
	return <Rating value={2} callBack={()=>{}}/>
}
export const ThreeStarRating = () => {
	return <Rating value={3} callBack={()=>{}}/>
}
export const FourStarRating = () => {
	return <Rating value={4} callBack={()=>{}}/>
}
export const FiveStarRating = () => {
	return <Rating value={5} callBack={()=>{}}/>
}