import {useEffect, useState} from "react";

export default  {
	title: "useEffect demo"
}


export const SimpleExample = () => {
	const [counter, setCounter] = useState(0)
	console.log("SimpleExample")
	useEffect(()=>{
		console.log("useEffect")
	}, [])
	const onclickHandler = () => {
		setCounter(counter+1)
	}
	return (
		<div>
			<button onClick={onclickHandler}>+</button>
			<div>{counter}</div>
		</div>
	);
};