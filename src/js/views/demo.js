import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-center">Add a new contact</h1>
		<form>
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label" >Full name</label>
				<input type="text" className="form-control" placeholder = "Type name here..." />
			</div>
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label" >Email</label>
				<input type="email" className="form-control" placeholder = "Enter email here..." />
			</div>
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label" >Phone Number</label>
				<input type="text" className="form-control" placeholder = "Enter number here..." />
			</div>
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label" >Address</label>
				<input type="text" className="form-control" placeholder = "Enter address here..." />
			</div>
			<div className="d-grid gap-2">
			<button type="submit" className="btn btn-primary">Save</button>
			</div>

			
		</form>
			<Link to="/">
				<button className="btn btn-link">or get back to Contacts</button>
			</Link>
		</div>
	);
};
