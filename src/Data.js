import { faker } from "@faker-js/faker";

const generatesubscriptionTableData = (rowCount) => {
	const tableData = [];
	for (let i = 0; i < rowCount; i++) {
		const rowData = {
			email: faker.internet.email(),
			name: faker.person.fullName(),
			lastActive: faker.date.past().toLocaleDateString(),
			subscriptionStatus: faker.helpers.arrayElement([
				"Subscribed",
				"Unsubscribed",
			]),

			actions: "Edit",
		};
		tableData.push(rowData);
	}
	return tableData;
};

const generatemessagesTableData = (rowCount) => {
	const tableData = [];
	for (let i = 0; i < rowCount; i++) {
		const rowData = {
			dateTime: faker.date
				.recent()
				.toISOString()
				.slice(0, 16)
				.replace("T", " "),
			subject: faker.lorem.sentence(),
			source: "Javascript error tracking released",
			email: faker.internet.email(),
			status: faker.helpers.arrayElement([
				"Delivered",
				"Opened",
				"Clicked",
				"Bounced",
			]),
			draft: faker.helpers.arrayElement(["Draft"]),
			actions: "Edit",
		};
		tableData.push(rowData);
	}
	return tableData;
};

const subscriptionTableData = generatesubscriptionTableData(15);
const messagesTableData = generatemessagesTableData(15);

export { subscriptionTableData, messagesTableData };
