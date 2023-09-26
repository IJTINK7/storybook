import React from "react";
type PropsType = {
	title: string
}
export const PageTitle = (props: PropsType) => {
	return <h1>{props.title}</h1>
}