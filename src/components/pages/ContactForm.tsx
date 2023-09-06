import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetContactQuery, usePostContactMutation } from "../../redux/api/apiSlice";
import {  useAppSelector } from "../../redux/hook";


import { useNavigate } from "react-router-dom";
import Contact from "./Contact";


const date = new Date()

interface IContact {
	_id: number;
	firstName: string;
	lastName: string;
	status: boolean;
    
}

const ContactForm = () => {
    const navigate = useNavigate()
	const [selectedStatus, setSelectedStatus] = useState(true);
	const [postContact] = usePostContactMutation();

	// const { data } = useAppSelector((state) => state.contact);
    // const { data, isLoading, isError } = useGetContactQuery([]);
    // console.log(data);
    
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IContact>();

	const onSubmit = (formData: IContact) => {
        // eslint-disable-next-line no-global-assign
        
		formData.status = selectedStatus;
		console.log(formData);
		postContact(formData); 
        navigate('/allcontact')
	};

	const handleStatusChange = (newStatus: boolean) => {
		setSelectedStatus(newStatus);
	};

	return (
		<div className="">
			<h3 className="text-2xl">Create Contact</h3>

			<div className="w-full mx-auto mt-5">
				<form className="items-center" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex gap-2">
						<label className="label">
							<p>
								<span className="text-lg">First Name</span>
							</p>
						</label>
						<input
							type="text"
							placeholder="First Name"
							className="input input-bordered w-full max-w-xs"
							{...register("firstName")}
						/>
					</div>
					<div className="flex mt-5">
						<label className="label">
							<span className="label-text text-lg">Last Name</span>
						</label>
						<input
							type="text"
							placeholder="Last Name"
							className="input input-bordered w-full max-w-xs"
							{...register("lastName")}
						/>
					</div>
					<div className="flex items-center justify-center p-5">
						<div className="mr-10">
							<label className="label">
								<span className="label-text text-2xl">Status :</span>
							</label>
						</div>
						<div className="">
							<div className="mb-2">
								<input
									type="radio"
									name="status"
									className="radio radio-primary"
									checked={selectedStatus === true}
									// onChange={() => dispatch(toggleState)}
                                    onChange={() => handleStatusChange(true)}
                                    
								/>
								<span className="text-lg mb-[-10px] ml-2">Active</span>
							</div>
							<div>
								<input
									type="radio"
									name="status"
									className="radio radio-primary"
									checked={selectedStatus === false}
									// onChange={() => dispatch(toggleState)}
                                    onChange={() => handleStatusChange(false)}
								/>
								<span className="text-lg">Inactive</span>
							</div>
						</div>
					</div>
					<input
						type="submit"
						value="add contact"
						className=" btn bg-info text-white rounded p-2"
					/>
				</form>
				
			</div>

            
		</div>
	);
};

export default ContactForm;
