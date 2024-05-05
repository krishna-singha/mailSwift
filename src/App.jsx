import {
	RouterProvider,
	Route,
	createBrowserRouter,
	createRoutesFromChildren,
	Navigate,
} from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Component from "./components/Test";
import Layout from "./Layout";
import Subscriber from "./components/Subscribers/Subscriber";

const router = createBrowserRouter(
	createRoutesFromChildren(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Navigate to={"/subscriber"} />} />
			<Route path="subscriber" element={<Subscriber />} />
			<Route path="help" element={<div>help</div>} />
			<Route path="about" element={<div>about</div>} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
	// return <Component/>
}

export default App;
