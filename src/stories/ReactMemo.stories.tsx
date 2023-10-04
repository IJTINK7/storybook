import {useState} from "react";

export default {
	title: "React.memo demo"
}
const NewMessagesCounter = (props: any) => {
	return <div>{props.count}</div>
}
const Users = (props: {users: string[]}) => {
	console.log("Users was render")
	return <div>{props.users.map((el, index)=> <div key={index}>{el}</div>)}</div>
}
export const Example = () =>{
	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState(["Roma", "Anna", "Bob"])
	return(
		<div>
			<button onClick={()=>setCounter(counter + 1)}>+</button>
			<NewMessagesCounter count={counter}/>
			<Users users={users}/>
		</div>
	)
}