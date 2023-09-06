import { RouterProvider } from "react-router-dom";
import "./App.css";

import {router} from './routes/routes.tsx'
// import Main from "./layout/Main";

function App() {
	return (
		<div className="App">
			 <RouterProvider router={router}/>
			{/* <Main></Main> */}
		</div>
	);
}

export default App;
