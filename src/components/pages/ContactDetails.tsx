import React from "react";
import { useGetSingleContactQuery } from "../../redux/api/apiSlice";
import { Link, useParams } from "react-router-dom";





const ContactDetails = () => {
    const { id } = useParams();
	const { data } = useGetSingleContactQuery(id)
	console.log(data);
    const {firstName,lastName,_id} = data || {}
	return (
		<div>
			
			<div className="card w-96 bg-slate-200">
					<div className="card-body items-center text-center">
						<h2 className="card-title">Contact</h2>
						<p>First Name : {firstName}</p>
						<p>Last Name : {lastName}</p>
						
						<div className="card-actions justify-end">
							
							<Link to={`/edit/${_id}`}><button className="btn btn-accent">Edit</button></Link>
						</div>
					</div>
				</div>
		</div>
	);
};

export default ContactDetails;
