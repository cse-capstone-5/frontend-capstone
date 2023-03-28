import React, { useContext, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";

const Main = () => {
    const handleClick = () => {
        console.log(1);
    };

    // @ts-ignore
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Box mb={25} mt={15}>
                <Typography variant={"h1"}>평판분석 서비스</Typography>
            </Box>
            <Box
                mb={3}
                sx={{
                    width: 1000,
                    maxWidth: "100%",
                }}
            >
                <TextField
                    label={"검색할 키워드를 입력해주세요. (ex. 코로나)"}
                    variant={"outlined"}
                    fullWidth
                />
            </Box>
            <Box mb={30}>
                <Grid container>
                    <Grid item xs={12}>
                        Date picker position
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant={"contained"}
                            size={"large"}
                            style={{
                                fontSize: "30px",
                            }}
                            onClick={handleClick}
                        >
                            분석
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Main;
