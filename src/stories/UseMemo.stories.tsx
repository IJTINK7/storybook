import React, {useMemo, useState} from "react";

export default {
	title: "UseMemo"
}

export const DifficultCounting = () => {
	const [a, setA] = useState<number>(5)
	const [b, setB] = useState<number>(5)
	let resultA = 1
	let resultB = 1


	resultA = useMemo(() => {
		let tempResultA = 1
		for (let i = 1; i <= a; i++) {
			let fake = 0;
			while (fake < 100000000) {
				fake++
				const fakeValue = Math.random()
			}
			resultA = resultA * i
		}
		return tempResultA
	}, [a])


	for (let i = 1; i <= b; i++) {
		resultB = resultB * i
	}
	return (
		<div>
			<input value={a} onChange={(e) => {
				setA(+e.currentTarget.value)
			}}/>
			<input value={b} onChange={(e) => {
				setB(+e.currentTarget.value)
			}}/>
			<hr/>
			<div>Result for a:{resultA}</div>
			<div>Result for b:{resultB}</div>
		</div>
	)
}


const BadUsers = (props: { users: string[] }) => {
	console.log("Users was render")
	return <div>{props.users.map((el, index) => <div key={index}>{el}</div>)}</div>
}

const Users = React.memo(BadUsers) // creating of container component

export const HelpToReactMemo = () => {
	console.log("HelpToReactMemo is rendering")
	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState(["Roma", "Anna", "Bob"])

	const newArray = useMemo(() => {
		return users.filter(el => el.toLowerCase().indexOf("a") > -1)
	}, [users])


	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			{counter}
			<Users users={newArray}/>
		</div>
	)
}
export const LikeUseCallBack = () => {
	console.log("LikeUseCallBack")
	const [counter, setCounter] = useState(0)
	const [books, setBooks] = useState(["React", "JS", "CSS"])

	const newArray = useMemo(() => {
		return books.filter(el => el.toLowerCase().indexOf("a") > -1)
	}, [books])

	const memorizedAddBook = useMemo(()=> {
		return ()=>{
			const newBooks = [...books, "Angular " + new Date().getTime()]
			setBooks(newBooks)
		}
	}, [books])

	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			{counter}
			<Book books={newArray} addBook={memorizedAddBook}/>
		</div>
	)
}

type BookSecretPropsType = {
	books: string[]
	addBook:()=> void
}
const BooksSecret = (props: BookSecretPropsType ) => {
	console.log("BooksSecret")
	return <div>
		<button onClick={() => props.addBook()}>Add book</button>
		{props.books.map((el, index) => <div key={index}>{el}</div>)}
	</div>
}
const Book = React.memo(BooksSecret)