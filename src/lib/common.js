import {subDays} from "date-fns";
import dayjs from "dayjs";

export const today = new Date();

export const yesterday = subDays(new Date(), 1);

export const dateFormatter = (date = new Date(), format) => dayjs(date).format(format);

export const str2date = (strDate) => new Date(strDate.slice(0, 4), strDate.slice(4, 6)-1, strDate.slice(6, 9));