import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type PropsType = {
	title: string
	callback:()=>void
	onCLick: (value: any)=> void
}

export const UncontrolledAccordion = (props: PropsType) => {
	const [collapsed, setCollapsed] = useState(true)
	const clickAccordionTitleHandler = () => {
		setCollapsed(!collapsed)
		props.callback()
	}
	return (
		<div>
			<div>
				<AccordionTitle title={props.title} callBack={clickAccordionTitleHandler}/>
			</div>
			{/*{props.collapsed ? <AccordionBody/> : <></>}*/} {/*not good*/}
			{collapsed && <AccordionBody items={[{title: "Igor", value: 1},{title: "Victor", value: 2}]} onCLick={props.onCLick}/>} {/*best practice*/}
		</div>
	)
};
