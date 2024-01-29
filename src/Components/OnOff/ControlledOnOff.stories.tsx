import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import {ControlledOnOff} from "./ControlledOnOff";

export default {
	component: ControlledOnOff,
};

const callbackHandler = action("On,Off or Switch button was clicked")

export const FullControlledOnOff = () => {
	const [activeOnOffElement, setActiveOnOffElement] = useState<boolean>(true)
	return <ControlledOnOff active={activeOnOffElement} callBack={()=>{
		setActiveOnOffElement(!activeOnOffElement)
		callbackHandler()
	}}/>
}
export const OnModeControlledOnOff = () => {
	return <ControlledOnOff active={true} callBack={callbackHandler}/>
}
export const OffModeControlledOnOff = () => {
	return <ControlledOnOff active={false} callBack={callbackHandler}/>
}