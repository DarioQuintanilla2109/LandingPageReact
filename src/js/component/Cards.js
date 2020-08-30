import React from "react";

//This is JSX syntax -> HTML + JS
const Cards = () => {
	return (
		<div className="container">
			<div className="row ">
				<div
					className="card col mr-3 text-center mb-3 border-0"
					// NOTICE line 10, look at the syntax for styling our components - Paranthesis and double curly brackets
					style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="holder.js/100px180"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div
					className="card col mr-3 text-center mb-3 border-0"
					style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="../../img/rigo-baby.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div
					className="card col mr-3 text-center mb-3 border-0"
					style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="../../img/rigo-baby.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div
					className="card col mr-3 text-center mb-3 border-0"
					style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="../../img/rigo-baby.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
