import React, {useContext, useEffect, useState} from "react";
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import DayPicker from "../component/DayPicker";
import MainContext from "../../context/MainContext";
import {dateFormatter, today, yesterday} from "../../lib/common";
import dayjs from "dayjs";

const Main = () => {
	const {
		handleStartDate,
		handleEndDate,
		start,
		end,
		handleStart,
		handleEnd
	} = useContext(MainContext);
	const [searchKeyword, setSearchKeyWord] = useState("");

	const [title, setTitle] = useState("|")
	const [fullTitle, setFullTitle] = useState("Sentimeter")
	const [titleIndex, setTitleIndex] = useState(0)

	const [subTitle, setSubTitle] = useState("|")
	const [fullSubTitle, setFullSubTitle] = useState("당신의 키워드 감성분석")
	const [subTitleIndex, setSubTitleIndex] = useState(0)

	useEffect(() => {
		if (titleIndex < fullTitle.length) {
			setTimeout(() => {
				setTitle((title + fullTitle[titleIndex]).replace("|", "") + "|")
				setTitleIndex(titleIndex + 1)
			}, 100)
		} else {
			setTitle(fullTitle)
		}

		if (subTitleIndex < fullSubTitle.length) {
			setTimeout(() => {
				setSubTitle((subTitle + fullSubTitle[subTitleIndex]).replace("|", "") + "|")
				setSubTitleIndex(subTitleIndex + 1)
			}, 90)
		} else {
			setSubTitle(fullSubTitle)
		}

		handleStartDate(yesterday);
		handleEndDate(today);
		handleStart(dateFormatter(yesterday, 'YYYYMMDD'));
		handleEnd(dateFormatter(today, 'YYYYMMDD'));
	}, [titleIndex, subTitleIndex])

	const handleChange = (value: Date[]) => {
		if (value) {
			handleStartDate(value[0]);
			handleEndDate(value[1]);
			handleStart(dateFormatter(value[0], 'YYYYMMDD'));
			handleEnd(dateFormatter(value[1], 'YYYYMMDD'));
		} else {
			handleStartDate(yesterday);
			handleEndDate(today);
			handleStart(dateFormatter(yesterday, 'YYYYMMDD'));
			handleEnd(dateFormatter(today, 'YYYYMMDD'));
		}
	}

	const marginStyle = {marginTop: "80px"}

	return (
		<div>
			<Grid
				container
				spacing={0}
				direction={'column'}
				alignItems={'center'}
			>
				<Grid item>
					<Typography variant={'h6'} style={{marginTop: "320px"}}>{subTitle}</Typography>
				</Grid>
				<Grid item>
					<Typography variant={'h2'}>{title}</Typography>
				</Grid>
				<Grid item style={marginStyle}>
					<TextField
						variant={'outlined'}
						style={{width: 700}}
						label={'검색할 키워드를 입력하세요. (ex. 코로나)'}
						color={'primary'}
						fullWidth
						onChange={e => setSearchKeyWord(e.target.value)}
					/>
				</Grid>
				<Grid item style={marginStyle}>
					<DayPicker onChange={handleChange}/>
				</Grid>
				<Grid item style={marginStyle}>
					<Button
						variant={'contained'}
						color={'primary'}
						component={Link}
						to={`/search/${searchKeyword}/start/${start}/end/${end}`}
					>
						<Typography variant={'h5'}>분석하기</Typography>
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Main;
