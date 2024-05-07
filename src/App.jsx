import {
	RouterProvider,
	Route,
	createBrowserRouter,
	createRoutesFromChildren,
	Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Subscriber from "./components/Subscribers/Subscriber";
import MessageSent from "./components/Messages/Sent";
import MessageDraft from "./components/Messages/Draft";

const router = createBrowserRouter(
	createRoutesFromChildren(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Navigate to={"/dashboard"} />} />
			<Route path="/dashboard" element={<div>Dashboard content</div>} />
			<Route path="/campaigns" element={<div>Campaigns content</div>} />
			<Route path="/templates" element={<div>Templates content</div>} />
			<Route path="/subscribers" element={<Subscriber />} />
			<Route path="/messages">
				<Route index element={<Navigate to="/messages/sent" />} />
				<Route path="sent" element={<MessageSent />} />
				<Route path="draft" element={<MessageDraft />} />
			</Route>
			<Route
				path="/email-services"
				element={<div>Email Services content</div>}
			/>
			<Route
				path="/manage-users"
				element={<div>Manage Users content</div>}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
	// return <Component/>
}

export default App;
