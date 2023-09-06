import React from "react";
import { useEditContactMutation, useGetContactQuery,} from "../../redux/api/apiSlice";
import { useForm } from "react-hook-form";
import { IContact } from "../../types/globalTypes";
import { useNavigate, useParams } from "react-router-dom";


const EditContact = () => {

    const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IContact>();

  const [editContact] = useEditContactMutation();
//   const { data, isLoading, isError } = useEditContactMutation();

//   const handleUpdateTask = async (formData: IContact) => {
//     try {
//       const updatedData = await editContact({ id, ...formData });

//       if (!isError && updatedData.matchedCount > 0) {
//         navigate('/allcontact');
//       }
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };
	return (
		<div>
			
			<div className="my-16">
				<h2 className="text-center text-2xl">Edit Contact </h2>
				<form
					// onSubmit={handleSubmit()}
					className="w-4/5 mx-auto bg-slate-200 my-8 p-8 rounded-lg"
				>
					<div className="flex mt-5">
						<label className="label">
							<span className="label-text text-lg">First Name</span>
						</label>
						<input
							type="text"
							placeholder="First Name"
							className="input input-bordered w-full max-w-xs"
							{...register("firstName")}
                            // defaultValue={contactData?.firstName}
                            
						/>
					</div>

					<div className="form-control w-full max-w-lg mt-4">
						<div className="flex mt-5">
							<label className="label">
								<span className="label-text text-lg">Last Name</span>
							</label>
							<input
								type="text"
								placeholder="Last Name"
								className="input input-bordered w-full max-w-xs"
								{...register("lastName")}
                                // defaultValue={contactData?.lastName}
							/>
						</div>

						

						<input
							className="btn btn-info w-full mb-4"
							value="Save change"
							type="submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditContact;




// const [editContact] = useEditContactMutation();
   
    
// const handleEdit = async (data:IContact) => {
//     try {
//         const { firstName, lastName } = data;
//         const result = await editContact({ contactId: id, firstName, lastName });
  
//         if (result.data.matchedCount > 0) {
//         //   toast.success('Task updated');
//         //   navigate('/details');
//         }
//       } catch (error) {
//         // Handle error here
//       }
//   };

//   const handleEdit = (formData:IContact)=>{
//     console.log(formData);
//     editContact(formData); 
//     navigate('/allcontact')
//   }


  


// const handleUpdateTask = (data) => {
// 	// event.preventDefault();
// 	// console.log(data)
// 	const updatedTitle = data.title;
// 	const updatedMessage = data.message;

// 	fetch(`  https://todo-app-server-ten.vercel.app/edit/${_id}`, {
// 		method: "PUT",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ updatedTitle, updatedMessage }),
// 	})
// 		.then((res) => res.json())
// 		.then((data) => {
// 			if (data.matchedCount > 0) {
// 				// toast.success("Task updated");
// 				// event.target.reset();
// 				// data.reset();
// 				navigate("/allcontact");
// 			}
// 		});
// };


// try {
        
//     const result = await editContact({ id, ...data });
//   const { data: updatedData } = await editContact({ id, ...data });

//   if (updatedData.matchedCount > 0) {
//     navigate('/allcontact');
//   }
// } catch (error) {
//   console.error('Error updating task:', error);
// }