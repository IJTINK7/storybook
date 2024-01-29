import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {PageTitle} from "./Components/PageTitle";
import {Accordion} from "./Components/Accordion/Accordion";
import {UncontrolledAccordion} from "./Components/Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./Components/OnOff/UncontrolledOnOff";
import {CustomSelect} from "./Components/Select/CustomSelect";
import {ControlledOnOff} from "./Components/OnOff/ControlledOnOff";

export type cityType = {
	title: string
	value: number
}

function App() {
	let [controlledRatingValue, setControlledRatingValue] = useState<RatingValueType>(1);
	let [controlledAccordionCollapsed, setControlledAccordionCollapsed] = useState<boolean>(false);
	const [activeOnOffElement, setActiveOnOffElement] = useState<boolean>(true)
	const cities: cityType[] = [
		{title: "Minsk", value: 1},
		{title: "Moscow", value: 2},
		{title: "Kiev", value: 3}
	]
	return (
		<div className="App">
			<PageTitle title={"This is APP component"}/>
			<PageTitle title={"The testing of props title"}/>
			<hr/>
			<Accordion title={"This Accordion is controlled by the user"}
					   collapsed={controlledAccordionCollapsed}
					   callBack={() => setControlledAccordionCollapsed(!controlledAccordionCollapsed)}
					   onCLick={()=>{}}
					   items={[]}/>
			<UncontrolledAccordion title={"This Accordion is uncontrolled by the user (click me)"} onCLick={()=>{}} callback={()=>{}}/>
			<hr/>
			<Rating value={controlledRatingValue} callBack={setControlledRatingValue}/>

			{/*/!*<UncontrolledRating/>*!/  <--*/}

			<hr/>
			<hr/>
			{/*<ControlledOnOff active={activeOnOffElement} callBack={() => setActiveOnOffElement(!activeOnOffElement)}/>*/}
			<UncontrolledOnOff callBack={setActiveOnOffElement}/>
			{activeOnOffElement.toString()}
			<CustomSelect title={"Select city title"} items={cities}/>
		</div>
	);
}

export default App;
