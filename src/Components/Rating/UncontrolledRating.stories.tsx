import { action } from '@storybook/addon-actions';
import {UncontrolledRating} from './UncontrolledRating';
import React from "react";
export default {
	component: UncontrolledRating,
};

const callbackHandler = action("Clicked Star number: ")

export const FullRating = () => {
	return <UncontrolledRating defaultValue ={0} callback={callbackHandler}/>
}
export const ZeroStarRating = () => {
	return <UncontrolledRating defaultValue={0} callback={callbackHandler}/>
}
export const OneStarRating = () => {
	return <UncontrolledRating defaultValue={1} callback={callbackHandler}/>
}
export const TwoStarRating = () => {
	return <UncontrolledRating defaultValue={2} callback={callbackHandler}/>
}
export const ThreeStarRating = () => {
	return <UncontrolledRating defaultValue={3} callback={callbackHandler}/>
}
export const FourStarRating = () => {
	return <UncontrolledRating defaultValue={4} callback={callbackHandler}/>
}
export const FiveStarRating = () => {
	return <UncontrolledRating defaultValue={5} callback={callbackHandler}/>
}