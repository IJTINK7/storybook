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
	const AddUser = () => {
		// 1 // If we use a mutable change of our initial state,
		// it won't render our data.

		// const newUsers = [...users]
		// users.push("Anton" + new Date().getTime())
		// setUsers(newUsers)

		//2 That's why we have to use immutable changing of our initial state
		// (for rendering new data after calling "AddUser" function)

		setUsers([...users, "Anton" + new Date().getTime()])
	}
	return(
		<div>
			<button onClick={()=>setCounter(counter + 1)}>+</button>
			<button onClick={AddUser}>Add user</button>
			<NewMessagesCounter count={counter}/>
			<Users users={users}/>
		</div>
	)
}