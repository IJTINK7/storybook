import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

export type ItemType = {
	title: string
	value: any
}

type PropsType = {
	title: string
	collapsed: boolean
	callBack: () => void
	items: ItemType[]
	onCLick: (value: any)=> void
}

export const Accordion = (props: PropsType) => {
	return (
		<div>
			<AccordionTitle title={props.title} callBack={props.callBack}/>
			{/*{props.collapsed ? <AccordionBody/> : <></>}*/} {/*not good*/}
			{!props.collapsed && <AccordionBody items={props.items} onCLick={props.onCLick}/>} {/*best practice*/}
		</div>
	)
};
