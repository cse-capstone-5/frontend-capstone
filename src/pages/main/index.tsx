import React, {useContext, useEffect, useState} from "react";
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const Main = () => {
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
	}, [titleIndex, subTitleIndex])

	const marginStyle = {marginTop: "100px"}

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
					<Button
						variant={'contained'}
						color={'primary'}
						component={Link}
						to={`/search/${searchKeyword}`}
					>
						<Typography variant={'h5'}>분석하기</Typography>
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Main;
