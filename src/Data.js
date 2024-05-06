import { faker } from "@faker-js/faker";

const generateTableData = (rowCount) => {
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

const tableData = generateTableData(15);
export default tableData;
