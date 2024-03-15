import {useEffect, useState} from "react";

export default  {
	title: "useEffect demo"
}


export const SimpleExample = () => {
	const [counter, setCounter] = useState(0)
	console.log("SimpleExample")
	useEffect(()=>{
		console.log("useEffect every render")
	})
	useEffect(()=>{
		console.log("useEffect only first render(ComponentDidMount)")
	}, [])
	useEffect(()=>{
		console.log("useEffect first render and every counter variable changing")
	}, [counter])
	const onclickHandler = () => {
		setCounter(counter+1)
	}

	const [date, setDate]= useState(new Date())
	const digitsToString = (digit: number) => digit < 10 ? "0" + digit : digit

	const secondsAsString = digitsToString(date.getSeconds())
	const minutesAsString = digitsToString(date.getMinutes())
	const hoursAsString = digitsToString(date.getHours())
	useEffect(()=>{
		setInterval(()=>setDate(new Date()),1000)
	}, [secondsAsString])
	return (
		<div>
			<button onClick={onclickHandler}>+</button>
			<div>{counter}</div>
			<div>Clock:</div>
			<div>{hoursAsString}:{minutesAsString}:{secondsAsString}</div>
		</div>
	);
};