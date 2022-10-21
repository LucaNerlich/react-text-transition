import React from "react";

import TextTransition, { presets } from "../../../src";

const WORDS = [
	"React",
	"Webpack",
	"Babel",
	"ReactDOM",
	"Vue",
	"Angular",
	"jQuery",
	"ESLint"
];

const Demo: React.FC = () => {
	const [number, setNumber]       = React.useState(0);
	const [oldNumber, setOldNumber] = React.useState(0);
	const [index, setIndex]         = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setNumber((oNumber) => {
				setOldNumber(oNumber);
				return Math.round(Math.random() * 100000);
			});
			setIndex((i) => i + 1);
		}, 2000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="center">
			<div>
				<TextTransition
					inline
					colors={['#efdd43', '#57c518']}
					springConfig={presets.wobbly}
				>
                    {WORDS[index % WORDS.length]}
                </TextTransition>
				&nbsp;is awesome
			</div>
		</div>
	);
};

export default Demo;
