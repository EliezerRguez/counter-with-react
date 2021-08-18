import React from "react";
import PropTypes from "prop-types";

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

export default Counter;
