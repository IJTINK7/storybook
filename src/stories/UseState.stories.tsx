import React, {useState} from "react";

export default {
	title: "useState demo"
}
export const Example = () => {
	const [counter, setCounter] = useState(0)
	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>+</button>
		</div>
	)
}