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

// Kabzda 14

const callbackHandler  = action("FullAccordion was clicked")
const onClickHandler  = action("Some item was clicked")

export const CollapsedAccordion =() => {
	return <Accordion title={"Collapsed Accordion"}
					  collapsed={true}
					  callBack={()=>{}}
					  items={[]}
					  onCLick={onClickHandler}

	/>
}
export const OpenedAccordion =() => {
	return <Accordion title={"Opened Accordion"}
					  collapsed={false}
					  callBack={() => {}}
					  items={[{title: "Roma", value: 1},{title: "Anna", value: 2},{title: "Igor", value: 3}]}
					  onCLick={onClickHandler}
	/>
}

export const FullAccordion =() => {
	const [collapsed, setCollapsed] = useState(false)
	return <Accordion title={"FullAccordion (click on me)"}
					  collapsed={collapsed}
					  callBack={()=>{
						  setCollapsed(!collapsed)
						  callbackHandler()
					  }}
					  items={[{title: "Sasha", value: 1},{title: "Sergey", value: 2},{title: "Inna", value: 3}, {title: "Alla", value: 4}]}
					  onCLick={onClickHandler}
	/>
}



