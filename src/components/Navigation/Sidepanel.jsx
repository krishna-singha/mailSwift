import { Button } from "@/components/ui/button";
import React from "react";

function Sidepanel() {
	return (
		<>
			<div className="flex flex-col w-64 border-r border-gray-200 bg-white">
				<div className="flex items-center justify-center h-20 border-b border-gray-200">
					<h1 className="text-3xl font-semibold text-blue-600">
						SENDPORTAL
					</h1>
				</div>
				<div className="flex flex-col flex-grow p-4 overflow-auto">
					<nav className="flex flex-col space-y-1">
						<Button
							className="justify-start rounded-none text-left text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600"
							variant="ghost"
						>
							Dashboard
						</Button>
						<Button
							className="justify-start rounded-none text-left text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600"
							variant="ghost"
						>
							Campaigns
						</Button>
						<Button
							className="justify-start rounded-none text-left text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600"
							variant="ghost"
						>
							Templates
						</Button>
						<Button
							className="justify-start rounded-none text-left text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
							variant="secondary"
						>
							Subscribers
						</Button>
						<Button
							className="justify-start rounded-none text-left text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600"
							variant="ghost"
						>
							Messages
						</Button>
						<Button
							className="justify-start rounded-none text-left text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600"
							variant="ghost"
						>
							Email Services
						</Button>
						<Button
							className="justify-start rounded-none text-left text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600"
							variant="ghost"
						>
							Manage Users
						</Button>
					</nav>
				</div>
			</div>
		</>
	);
}

export default Sidepanel;
