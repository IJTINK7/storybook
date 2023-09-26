import React from 'react';

type PropsType = {
	selected: boolean
	setRatingValue: ()=>void
}

export const Star = (props: PropsType) => {
	return <span onClick={props.setRatingValue}>{props.selected ? <b>Star </b> : "Star "}</span>
};