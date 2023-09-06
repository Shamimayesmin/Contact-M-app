import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
	return (
		<div>
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* <Outlet></Outlet> */}
					{/* Page content here */}
					
					<label htmlFor="my-drawer-2"  className="btn btn-ghost lg:hidden items-start justify-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<div className="flex flex-col items-center mt-10">
					<Outlet></Outlet>
					</div>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* <Outlet></Outlet> */}
						{/* Sidebar content here */}
						<li>
							<Link to='/contact'>Contacts</Link>
						</li>
						<li>
							<Link to='/'>Charts and Maps</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
