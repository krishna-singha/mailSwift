import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
	TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { messagesTableData } from "@/src/Data";

function MessageSent() {
	return (
		<div className="flex h-[100%] flex-col p-8 overflow-y-scroll no-scrollbar">
			<div className="flex gap-8 mb-6">
				<NavLink
					to={"/messages"}
					className="py-[4px] px-2 border-b-[3px] border-blue-700 cursor-pointer"
				>
					Sent
				</NavLink>

				<NavLink
					to={"/messages/draft"}
					className="py-[4px] px-2 border-b-[3px] border-transparent cursor-pointer"
				>
					Draft
				</NavLink>
			</div>
			<div className="flex flex-row gap-5 justify-between">
				<div className="flex flex-row space-x-4">
					<Input
						className="max-w-60 min-w-24"
						placeholder="Search..."
					/>
					<Select>
						<SelectTrigger
							aria-label="Filter"
							id="filter"
							className="max-w-60 min-w-16"
						>
							<SelectValue placeholder="Select your option" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="option1">Option 1</SelectItem>
							<SelectItem value="option2">Option 2</SelectItem>
							<SelectItem value="option3">Option 3</SelectItem>
							<SelectItem value="option4">Option 4</SelectItem>
						</SelectContent>
					</Select>
					<Button>Search</Button>
				</div>
			</div>

			<div className="mt-4">
				<Table className="bg-slate-100">
					<TableHeader>
						<TableRow>
							<TableHead>Date</TableHead>
							<TableHead>Subject</TableHead>
							<TableHead>Source</TableHead>
							<TableHead>Recipient</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{messagesTableData.map((data, key) => {
							return (
								<TableRow key={key}>
									<TableCell>{data.dateTime}</TableCell>

									<TableCell className="max-w-[15rem] whitespace-nowrap overflow-hidden text-ellipsis">
										{data.subject}
									</TableCell>

									<TableCell className="text-[#039adf]">
										<i className="fa-solid fa-envelope text-gray-400"></i>{" "}
										{data.source}
									</TableCell>
									<TableCell className="text-[#039adf]">
										{data.email}
									</TableCell>

									<TableCell>
										<Badge
											className={`rounded-md ${data.status === "Delivered"
												? "bg-blue-200 text-blue-800"
												: data.status === "Opened" || data.status === "Clicked"
													? "bg-emerald-200 text-emerald-800"
													: "bg-red-200 text-red-800"
												}`}
											variant="primary"
										>
											{data.status}
										</Badge>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}

export default MessageSent;
