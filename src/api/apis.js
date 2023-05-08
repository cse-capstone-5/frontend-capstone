import {createRequestUrl} from "./constants";
import axios from "axios";

const LINECHART = createRequestUrl('line-chart')
const WORDCLOUD = createRequestUrl('word-cloud')
const NEWS = createRequestUrl('article')
const ALL = createRequestUrl('keyword')

// export const getLineChartByKeyword = keyword => axios.get(`${LINECHART}/keyword/${keyword}`, {}, {withCredentials: true});

export const getWordCloudByKeyword = keyword => axios.get(`${WORDCLOUD}/keyword/${keyword}`);

export const getNewsByKeyword = keyword => axios.get(`${NEWS}/keyword/${keyword}`);