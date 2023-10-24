import React, {useState} from "react";

export default {
	title: "useState demo"
}
const generateData = () => {
	return 123
}
export const Example = () => {
	console.log("Example")
	const [counter, setCounter] = useState(generateData)
	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>+</button>
		</div>
	)
}