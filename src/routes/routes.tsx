import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import ContactForm from "../components/pages/ContactForm";
import AllContact from "../components/pages/AllContact";
import ContactDetails from "../components/pages/ContactDetails";
import EditContact from "../components/pages/EditContact";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/contact",
				element: <ContactForm></ContactForm>,
			},
			{
				path: "/allcontact",
				element: <AllContact />,
			},
			{
				path: "/details/:id",
				element: <ContactDetails />,
			},
			{
				path: "/edit/:id",
				
				element:<EditContact/> ,
			},
		],
	},
]);
