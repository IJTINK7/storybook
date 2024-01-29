import {UncontrolledAccordion} from './UncontrolledAccordion';
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
	component: UncontrolledAccordion,
};

const callbackHandler  = action("UncontrolledFullAccordion was clicked")
const onClickHandler = action("Some item was clicked")

export const FullAccordion =() => {
	return <UncontrolledAccordion title={"Menu"} callback={callbackHandler} onCLick={onClickHandler}/>
}