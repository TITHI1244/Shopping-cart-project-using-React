import React from "react";

const TotalView = (props) => {
	return(
		<div className="border mt-3 totalView text-center">
			Total items: <span className="text-right">{props.totItem}</span> <br />
			Total price: <span className="text-right">{props.totPrice}</span>
			<button className="mt-5">Check out & pay</button>
		</div>
		)
}
export default TotalView;