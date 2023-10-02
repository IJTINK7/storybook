import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";


type PropsType = {
	title: string
	collapsed: boolean
	callBack: () => void
	items: string[]
}

export const Accordion = (props: PropsType) => {
	return (
		<div>
			<AccordionTitle title={props.title} callBack={props.callBack}/>
			{/*{props.collapsed ? <AccordionBody/> : <></>}*/} {/*not good*/}
			{!props.collapsed && <AccordionBody items={props.items}/>} {/*best practice*/}
		</div>
	)
};
