import {subDays} from "date-fns";
import dayjs from "dayjs";

export const today = new Date();
export const yesterday = subDays(new Date(), 1);

export const dateFormatter = (date = new Date(), format) => dayjs(date).format(format);
