import {
	RouterProvider,
	Route,
	createBrowserRouter,
	createRoutesFromChildren,
	Navigate,
	Routes,
} from "react-router-dom";
import Layout from "./Layout";
import Subscriber from "./components/Subscribers/Subscriber";
import MessageSent from "./components/Messages/Messages.sent";
import MessageDraft from "./components/Messages/Messages.draft";

const router = createBrowserRouter(
	createRoutesFromChildren(
		<Route path="/" element={<Layout />}>
			<Route path="/" element={<Navigate to={"/dashboard"} />} />
			<Route path="/dashboard" element={<div>Dashboard content</div>} />
			<Route path="/campaigns" element={<div>Campaigns content</div>} />
			<Route path="/templates" element={<div>Templates content</div>} />
			<Route path="/subscribers" element={<Subscriber />} />
			<Route path="/messages" element={<MessageSent />} />
			<Route path="/messages/draft" element={<MessageDraft />} />
			<Route
				path="/email-services"
				element={<div>Email Services content</div>}
			/>
			<Route
				path="/manage-users"
				element={<div>Manage Users content</div>}
			/>
			<Route path="/help" element={<div>Help content</div>} />
			<Route path="/about" element={<div>About content</div>} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
	// return <Component/>
}

export default App;
