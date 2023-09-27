import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {PageTitle} from "./Components/PageTitle";
import {Accordion} from "./Components/Accordion/Accordion";
import {UncontrolledAccordion} from "./Components/Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./Components/OnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./Components/Rating/UncontrolledRating";

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
