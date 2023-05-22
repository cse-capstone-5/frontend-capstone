import {dateFormatter, today, yesterday} from "../../lib/common";

const fetchData = (keyword) => {};
const handleIsLoading = (value) => {};
const handleStartDate = (value) => {};
const handleEndDate = (value) => {};
const handleStart = (value) => {};
const handleEnd = (value) => {};

export const MAIN_CONTEXT_DEFAULT_VALUE = {
	isLoading: true,
	wordCloudData: [],
	lineChartData: {},
	articleData: {},
	startDate: new Date(),
	endDate: new Date(),
	start: dateFormatter(yesterday, 'YYYYMMDD'),
	end: dateFormatter(today, 'YYYYMMDD'),
	fetchData,
	handleIsLoading,
	handleStartDate,
	handleEndDate,
	handleStart,
	handleEnd
};