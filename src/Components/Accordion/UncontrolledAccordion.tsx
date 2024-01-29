import React, {useReducer} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type PropsType = {
	title: string
	callback:()=>void
	onCLick: (value: any)=> void
}

type ActionType = {
	type: string
}

const reducer = (state: boolean, action: ActionType): boolean => {
	switch (action.type) {
		case "TOGGLE-COLLAPSED":
			return !state
		default:
			throw new Error("You chose Incorrect action type")
	}
}

export const UncontrolledAccordion = (props: PropsType) => {
	// const [collapsed, setCollapsed] = useState(true)

	const [collapsed, dispatchCollapsed] = useReducer(reducer,true)

	const clickAccordionTitleHandler = () => {
		dispatchCollapsed({type: "TOGGLE-COLLAPSED"})
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
