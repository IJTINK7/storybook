import type {Meta} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
	component: Accordion,
};

export default meta;

// "new syntax"

// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
// 	args: {
// 		title: "bla",
// 		collapsed: true,
// 		callBack: ()=>{callbackHandler()}
// 	},
// };

const callbackHandler  = action("activate console")

export const CollapsedAccordion =() => {
	return <Accordion title={"Collapsed Accordion"}
					  collapsed={true}
					  callBack={()=>{callbackHandler()}}/>
}
export const OpenedAccordion =() => {
	return <Accordion title={"Opened Accordion"}
					  collapsed={false}
					  callBack={() => {}}/>
}

export const FullAccordion =() => {
	const [collapsed, setCollapsed] = useState(false)
	return <Accordion title={"FullAccordion (click on me)"}
					  collapsed={collapsed}
					  callBack={()=>setCollapsed(!collapsed)}/>
}
