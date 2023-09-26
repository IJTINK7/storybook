import React, {useState} from 'react';
import s from "./UncontrolledOnOff.module.css"

type PropsType = {
	callBack:(value: boolean)=> void
}
export const UncontrolledOnOff = (props:PropsType) => {
	const [activeElement, setActiveElement] = useState(true)
	const activateButtonHandler = () => {
		setActiveElement(true)
		props.callBack(true)
	}
	const deactivateButtonHandler = () => {
		setActiveElement(false)
		props.callBack(false)
	}
	const switchButtonHandler = () => {
		setActiveElement(!activeElement)
		props.callBack(!activeElement)
	}
	return (
		<div className={s.container}>
			<div onClick={activateButtonHandler} className={`${s.square} ${activeElement ? s.on : s.usual}`}>On</div>
			<div onClick={deactivateButtonHandler} className={`${s.square} ${activeElement ? s.usual : s.off}`}>Off</div>
			<div onClick={switchButtonHandler} className={`${s.circle} ${activeElement ? s.on : s.off}`}>Switch</div>
		</div>
	);
};