import { faker } from "@faker-js/faker";

const generateTableData = (rowCount) => {
	const tableData = [];
	for (let i = 0; i < rowCount; i++) {
		const rowData = {
			email: faker.internet.email(),
			subject: faker.lorem.sentence(),
			source: "Javascript error tracking released",
			name: faker.person.fullName(),
			lastActive: faker.date.past().toLocaleDateString(),
			dateTime: faker.date.recent().toISOString().slice(0, 19).replace("T", " "),
			subscriptionStatus: faker.helpers.arrayElement([
				"Subscribed",
				"Unsubscribed",
			]),
			status: faker.helpers.arrayElement([
				"Delivered", 
				"Opened", 
				"Clicked",
				"Bounced", 
			]),
			draft: faker.helpers.arrayElement([
				"Draft", 
			]),
			actions: "Edit",
		};
		tableData.push(rowData);
	}
	return tableData;
};

const tableData = generateTableData(15);
export default tableData;
