// import React, {useState} from "react";
//
// export default {
// 	title: "useState demo"
// }
// const generateData = () => {
// 	return 123
// }
// export const Example = () => {
// 	console.log("Example")
// 	const [counter, setCounter] = useState(generateData)
// 	return (
// 		<div>
// 			<button onClick={() => setCounter(counter + 1)}>+</button>
// 		</div>
// 	)
// }

import React, {useState} from "react";

export default {
	title: "useState demo"
}
const generateData = () => {
	console.log("generateData")
	return 456
}
export const Example = () => {
	console.log("Example")
	const [counter, setCounter] = useState(generateData)
	const changer = (state: number) => {
		return state + 1
	}
	return (
		<div>
			<button onClick={() => setCounter(changer)}>+</button>
			{counter}
		</div>
	)
}
