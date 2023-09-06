/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { IContact } from "../../types/globalTypes";
import { Link } from "react-router-dom";
import { useRemoveContactMutation } from "../../redux/api/apiSlice";

interface IProps {
	contact: IContact;
}
const Contact = ({ contact }: IProps) => {
	// console.log(contact);

	const { _id, firstName, lastName, status } = contact;

    const [removeContact] = useRemoveContactMutation()
	return (
		<>
			<tr>
				<th></th>
				<td>{firstName}</td>
				<td>{lastName}</td>
				
				{/* onClick={()=>handleDeleteBuyer(_id)} */}
				<td>
					<Link to={`/details/${contact._id}`}>
						<button className="btn btn-xs btn-neutral">View</button>
					</Link>
				</td>
				<td>
					<Link to={`/edit/${_id}`}>
						<button className="btn btn-xs btn-accent">Edit</button>
					</Link>
				</td>
				<td>
					<button onClick={() => removeContact(_id)} className="btn btn-xs btn-error">Delete</button>
				</td>
			</tr>
		</>
	);
};

export default Contact;
