import React from 'react';
import {ItemType} from "./Accordion";

type AccordionBodyPropsType = {
	items: ItemType[]
	onCLick: (value: any)=> void
}
const AccordionBody = (props: AccordionBodyPropsType) => {

	return (
		<div>
			<ul>
				{props.items.map(((el,index)=> {
					const onClickHandler = () => {
						props.onCLick(el.title)
					}
					return<li onClick={onClickHandler} key={index}>{el.title}</li>
				}))}
			</ul>
		</div>
	);
};
export default AccordionBody;