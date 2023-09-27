import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
	component: UncontrolledOnOff,
};

const callbackHandler = action("On,Off or Switch button was clicked")

export const FullUncontrolledOnOff = () => {
	return <UncontrolledOnOff callBack={callbackHandler}/>
}