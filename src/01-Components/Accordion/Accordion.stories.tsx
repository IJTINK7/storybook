import type { Meta } from '@storybook/react';

import {Accordion} from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
	component: Accordion,
};

export default meta;

export const CollapsedAccordion =() => {
	return <Accordion title={"Collapsed Accordion"}
					  collapsed={true}
					  callBack={() => {}}/>
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
