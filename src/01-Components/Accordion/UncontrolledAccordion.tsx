import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type PropsType = {
	title: string
}

export const UncontrolledAccordion = (props: PropsType) => {
	const [collapsed, setCollapsed] = useState(true)
	const clickAccordionTitleHandler = () => {
		setCollapsed(!collapsed)
	}
	return (
		<div>
			<div>
				<AccordionTitle title={props.title} callBack={clickAccordionTitleHandler}/>
			</div>
			{/*{props.collapsed ? <AccordionBody/> : <></>}*/} {/*not good*/}
			{collapsed && <AccordionBody/>} {/*best practice*/}
		</div>
	)
};
