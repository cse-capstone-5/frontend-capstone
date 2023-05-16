
const fetchData = (keyword) => {};
const handleIsLoading = (value) => {};
const handleStartDate = (value) => {};
const handleEndDate = (value) => {};

export const MAIN_CONTEXT_DEFAULT_VALUE = {
	isLoading: true,
	wordCloudData: [],
	lineChartData: {},
	articleData: {},
	startDate: new Date(),
	endDate: new Date(),
	fetchData,
	handleIsLoading,
	handleStartDate,
	handleEndDate,
};