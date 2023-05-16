import React, {useContext, useEffect, useState} from "react";
import {DateRangePicker} from "rsuite";
import 'rsuite/dist/rsuite.css'
import {addDays, endOfDay, startOfDay, subDays} from "date-fns";
import MainContext from "../../../context/MainContext";

const DayPicker = ({onChange}) => {
  const {
    startDate,
    endDate,
    handleStartDate,
    handleEndDate
  } = useContext(MainContext);

  const Ranges = [
    {
      label: '오늘',
      value: [startOfDay(new Date()), endOfDay(new Date())],
      placement: 'left'
    },
    {
      label: '어제',
      value: [startOfDay(addDays(new Date(), -1)), endOfDay(addDays(new Date(), -1))],
      placement: 'left'
    },
    {
      label: '7일 전',
      value: [startOfDay(subDays(new Date(), 7)), endOfDay(new Date())],
      placement: 'left'
    },
    {
      label: '30일 전',
      value: [startOfDay(subDays(new Date(), 30)), endOfDay(new Date())],
      placement: 'left'
    }
  ];

  return (
    <React.Fragment>
      <DateRangePicker
        format={'yyyy년 MM월 dd일'}
        locale={'ko'}
        value={[startDate, endDate]}
        defaultCalendarValue={[new Date(), new Date()]}
        onChange={onChange}
        ranges={Ranges}
        size={'lg'}
      />
    </React.Fragment>
  );
};

export default DayPicker;
