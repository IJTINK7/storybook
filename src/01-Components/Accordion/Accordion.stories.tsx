import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

// const meta: Meta<typeof Accordion> = {
// 	component: Accordion,
// };

export default {
	component: Accordion,
};


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

// "old syntax"

const callbackHandler  = action("FullAccordion was clicked")

export const CollapsedAccordion =() => {
	return <Accordion title={"Collapsed Accordion"}
					  collapsed={true}
					  callBack={()=>{}}/>
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
					  callBack={()=>{
						  setCollapsed(!collapsed)
						  callbackHandler()
					  }
					  }/>
}
