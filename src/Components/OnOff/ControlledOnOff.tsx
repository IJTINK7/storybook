import React from 'react';
import s from "./UncontrolledOnOff.module.css"
type PropsType ={
	active: boolean
	callBack: (active: boolean)=>void
}

export const ControlledOnOff = (props: PropsType) => {
	const activateButtonHandler = () => {
		props.callBack(true)
	}
	const deactivateButtonHandler = () => {
		props.callBack(false)
	}
	const switchButtonHandler = () => {
		props.callBack(!props.active)
	}
	return (
		<div className={s.container}>
			<div onClick={activateButtonHandler} className={`${s.square} ${props.active ? s.on : s.usual}`}>On</div>
			<div onClick={deactivateButtonHandler} className={`${s.square} ${props.active ? s.usual : s.off}`}>Off</div>
			<div onClick={switchButtonHandler} className={`${s.circle} ${props.active ? s.on : s.off}`}>Switch</div>
		</div>
	);
};