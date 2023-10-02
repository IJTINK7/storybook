import React, {useState} from 'react';
import {Accordion} from "../Accordion/Accordion";
import {cityType} from "../../App";

type PropsType = {
	title: string
	items: cityType[]
}
export const CustomSelect: React.FC<PropsType> = ({title, items}) => {

	const [collapsed, setCollapsed] = useState<boolean>(true)
	const [selectTitle, setSelectTitle] = useState<string>(title)

	const openCloseSelectHandler = () => {
		console.log("wanna change")
		setCollapsed(!collapsed)
	}
	const selectTitleHandler = (value: string) => {
		setSelectTitle(value)
		setCollapsed(true)
	}
	return (
		<div>
			<Accordion title={selectTitle} collapsed={collapsed} callBack={openCloseSelectHandler} items={items} onCLick={selectTitleHandler}/>
		</div>
	);
};