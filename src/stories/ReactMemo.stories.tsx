import React, {useState} from "react";

export default {
	title: "React.memo demo"
}
const NewMessagesCounter = (props: any) => {
	return <div>{props.count}</div>
}
const BadUsers = (props: {users: string[]}) => {
	console.log("Users was render")
	return <div>{props.users.map((el, index)=> <div key={index}>{el}</div>)}</div>
}

const Users = React.memo(BadUsers) // creating of container component

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