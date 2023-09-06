import React from "react";
import { IContact } from "../../types/globalTypes";
import { useGetContactQuery } from "../../redux/api/apiSlice";
import Contact from "./Contact";



const AllContact = () => {
	const { data, isLoading, isError } = useGetContactQuery([]);
	

	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>View</th>
							<th>Edit</th>
							<th>Delete</th>
							{/* <th>Favorite Color</th> */}
						</tr>
					</thead>
					<tbody>
						{data?.map((contact: IContact) => (
							<Contact key={contact._id} contact={contact} />
						))}
					</tbody>
				</table>
			</div>
			
		</div>
	);
};

export default AllContact;


