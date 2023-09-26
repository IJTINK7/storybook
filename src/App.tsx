import React, {useState} from 'react';
import {Rating, RatingValueType} from "./01-Components/Rating/Rating";
import {PageTitle} from "./01-Components/PageTitle";
import {Accordion} from "./01-Components/Accordion/Accordion";
import {UncontrolledAccordion} from "./01-Components/Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./01-Components/06-OnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./01-Components/Rating/UncontrolledRating";

function App() {
	let [controlledRatingValue, setControlledRatingValue] = useState<RatingValueType>(1);
	let [controlledAccordionCollapsed, setControlledAccordionCollapsed] = useState<boolean>(false);
	const [activeOnOffElement, setActiveOnOffElement] = useState<boolean>(true)
	return (
		<div className="App">
			<PageTitle title={"This is APP component"}/>
			<PageTitle title={"The testing of props title"}/>
			<hr/>
			<Accordion title={"This Accordion is controlled by the user"}
					   collapsed={controlledAccordionCollapsed}
					   callBack={() => setControlledAccordionCollapsed(!controlledAccordionCollapsed)}/>
			<UncontrolledAccordion title={"This Accordion is uncontrolled by the user (click me)"}/>
			<hr/>
			<Rating value={controlledRatingValue} callBack={setControlledRatingValue}/>
			<UncontrolledRating/>
			<hr/>
			<hr/>
			{/*<ControlledOnOff active={activeOnOffElement} callBack={() => setActiveOnOffElement(!activeOnOffElement)}/>*/}
			<UncontrolledOnOff callBack={setActiveOnOffElement}/>
			{activeOnOffElement.toString()}
		</div>
	);
}

export default App;
