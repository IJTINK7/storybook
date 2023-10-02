import React from 'react';

type AccordionBodyPropsType = {
	items: string[]
}
const AccordionBody = (props: AccordionBodyPropsType) => {
	return (
		<div>
			<ul>
				{props.items.map(((el,index)=> <li key={index}>{el}</li>))}
			</ul>
		</div>
	);
};
export default AccordionBody;