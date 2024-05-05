
import { Input } from "@/components/ui/input";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import {
	TableHead,
	TableRow,
	TableHeader,
	TableBody,
	Table,
} from "@/components/ui/table";

export default function Component() {
	return (
		<div className="flex h-screen bg-[#F4F7F9]">
			<div className="flex flex-col w-64 border-r border-gray-200 bg-white">
				<div className="flex items-center justify-center h-16 border-b border-gray-200">
					<h1 className="text-lg font-semibold text-blue-600">
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
			<div className="flex flex-col flex-grow p-8">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-semibold">Subscribers</h2>
					<div className="flex items-center">
						<Avatar>
							<AvatarImage
								alt="Jon Behr"
								src="/placeholder.svg?height=32&width=32"
							/>
							<AvatarFallback>JB</AvatarFallback>
						</Avatar>
						<p className="ml-2">Jon Behr</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function ListIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="8" x2="21" y1="6" y2="6" />
			<line x1="8" x2="21" y1="12" y2="12" />
			<line x1="8" x2="21" y1="18" y2="18" />
			<line x1="3" x2="3.01" y1="6" y2="6" />
			<line x1="3" x2="3.01" y1="12" y2="12" />
			<line x1="3" x2="3.01" y1="18" y2="18" />
		</svg>
	);
}

function SettingsIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}
