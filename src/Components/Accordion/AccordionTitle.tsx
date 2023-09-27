import React from 'react';

type PropsType = {
	title: string
	callBack: ()=>void
}

const AccordionTitle = (props:PropsType) => {
	return (
		<div onClick={props.callBack}>
			<h3>{props.title}</h3>
		</div>
	);
};
export default AccordionTitle;