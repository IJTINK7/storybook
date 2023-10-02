import { action } from '@storybook/addon-actions';
import React, {useState} from "react";
import {CustomSelect} from "./CustomSelect";
import {Accordion} from "../Accordion/Accordion";

export default {
	component: CustomSelect,
};
export type cityType = {
	title: string
	value: number
}

const callbackHandler = action("")
const onClickHandler = action("")


export const FullCustomSelect = () => {
	const cities: cityType[] = [
		{title: "Minsk", value: 1},
		{title: "Moscow", value: 2},
		{title: "Kiev", value: 3}
	]
	const [collapsed, setCollapsed] = useState<boolean>(true)
	const [selectTitle, setSelectTitle] = useState<string>("Select the city")

	const openCloseSelectHandler = () => {
		callbackHandler("Select was opened")
		setCollapsed(!collapsed)
	}
	const selectTitleHandler = (value: string) => {
		onClickHandler(`Item ${value} was selected`)
		setSelectTitle(value)
		setCollapsed(true)
	}
	return (
		<div>
			<Accordion title={selectTitle} collapsed={collapsed} callBack={openCloseSelectHandler} items={cities} onCLick={selectTitleHandler}/>
		</div>
	);
}

export const ClosedCustomSelect = () => {
	return (
		<div>
			<Accordion title={"Select the city"} collapsed={true} callBack={()=>{}} items={[]} onCLick={()=>{}}/>
		</div>
	);
}
export const OpenedCustomSelect = () => {
	const cities: cityType[] = [
		{title: "Minsk", value: 1},
		{title: "Moscow", value: 2},
		{title: "Kiev", value: 3}
	]

	return (
		<div>
			<Accordion title={"Select the city"} collapsed={false} callBack={()=>{}} items={cities} onCLick={()=>{}}/>
		</div>
	);
}
export const ClosedMinskSelect = () => {
	return (
		<div>
			<Accordion title={"Minsk"} collapsed={true} callBack={()=>{}} items={[]} onCLick={()=>{}}/>
		</div>
	);
}
export const ClosedMoscowSelect = () => {
	return (
		<div>
			<Accordion title={"Moscow"} collapsed={true} callBack={()=>{}} items={[]} onCLick={()=>{}}/>
		</div>
	);
}

export const ClosedKievSelect = () => {
	return (
		<div>
			<Accordion title={"Kiev"} collapsed={true} callBack={()=>{}} items={[]} onCLick={()=>{}}/>
		</div>
	);
}


