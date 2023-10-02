// import { action } from '@storybook/addon-actions';
import React, {ChangeEvent, useRef, useState} from "react";
export default {
    title: "input",
    // component: UncontrolledInput,
};
//
// const callbackHandler = action("Active")

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    return <div> <input onChange={(event)=>{
        setValue(event.currentTarget.value)
    }}/> - {value} </div>
}
export const GetValueOfUncontrolledInputAfterPressButton = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const saveValue = () => {
        const element = inputRef.current as HTMLInputElement;
        setValue(element.value)
    }
    return (
        <div>
            <div>
                <input ref={inputRef}/>
            </div>
            <div>
                <button onClick={saveValue}>Save</button>
            </div>
            <div>Actual value: {value}</div>
        </div>
    )
}

export const ControlledInput  = () => {
    const [parentValue, setParentValue] = useState("")
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>)=> {
        setParentValue(e.currentTarget.value)
    }
    // return <input value={parentValue} onChange={action("Want to change")}/>
    return <input value={parentValue} onChange={onChangeInput}/>
}
export const ControlledInputWithFixedValue = () => <input value={"Hello, I am controlled input"}/>;