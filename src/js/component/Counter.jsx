import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

//create your first component
const Counter = props => {
	return (
		<div className="counter">
			<div className="reloj">
				<i className="far fa-clock"></i>
			</div>
			<div className="cuarto">{props.digitFour % 10}</div>
			<div className="tercero">{props.digitThree % 10}</div>
			<div className="segundo">{props.digitTwo % 10}</div>
			<div className="primero">{props.digitOne % 10} </div>
		</div>
	);
};

Counter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const one = Math.floor(counter / 1);
	const two = Math.floor(counter / 10);
	const three = Math.floor(counter / 100);
	const four = Math.floor(counter / 1000);
	counter++;

	ReactDOM.render(
		<Counter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector(".counterContainer")
	);
}, 1000);
