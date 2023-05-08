import React, {useEffect, useState} from "react";
import {CircularProgress} from "@material-ui/core";
import ReactWordcloud from "react-wordcloud";

const SentWordCloud = (props) => {
  const {keyword} = props;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const callbacks = {
    getWordColor: word => word.value > 50 ? "blue" : "red",
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }

  const options = {
    fontSizes: [10, 80],
    padding: 2
  }

  const initWordCloud = () => {
    const mock = {
      "1": 3,
      "4": 1,
      "90": 1,
      "코로나": 37,
      "코로나19": 25,
      "확진": 13,
      "사망": 8,
      "신규": 6,
      "위중증": 5,
      "신규확진": 5,
      "증가": 5,
      "더": 4,
      "해제": 4,
      "급증": 4,
      "전": 3,
      "대비": 3,
      "경남": 3,
      "어제": 3,
      "동절기": 3,
      "가능": 3,
      "감소": 3,
      "이전": 3,
      "속": 3,
      "1만523명": 3,
      "때": 3,
      "중국": 3,
      "만에": 3,
      "하늘길": 2,
      "까지": 2,
      "자영업자": 2,
      "1명": 2,
      "추가": 2,
      "접종": 2,
      "병": 2,
      "1일": 2,
      "전주": 2,
      "희망자는": 2,
      "2배": 2,
      "1만735명": 2,
      "회복": 2,
      "비대면": 2,
      "진료": 2,
      "종합": 2,
      "142명": 2,
      "5명": 2,
      "이후": 2,
      "확진자": 2,
      "전과": 2,
      "변이": 2,
      "추가접종": 2,
      "종료": 2,
      "환자": 2,
      "136명": 2,
      "후": 2,
      "1만4465명": 2,
      "타격": 2,
      "3년": 2,
      "산불": 2,
      "다시": 1,
      "넓어진다": 1,
      "국제선": 1,
      "늘린다": 1,
      "집중진단": 1,
      "코로나로": 1,
      "대출받은": 1,
      "서민": 1,
      "제때": 1,
      "돈": 1,
      "못": 1,
      "갚는다": 1,
      "횡재냐": 1,
      "노력이냐": 1,
      "정유사": 1,
      "전보다": 1,
      "6배": 1,
      "벌어": 1,
      "274명": 1,
      "최근": 1,
      "1주일": 1,
      "729명": 1,
      "전주대비": 1,
      "91명": 1,
      "줄어": 1,
      "8일부터": 1,
      "백신": 1,
      "의원": 1,
      "대폭": 1,
      "줄어든다": 1,
      "광주": 1,
      "335명": 1,
      "전남": 1,
      "291명": 1,
      "세대가": 1,
      "몇": 1,
      "번": 1,
      "지나가도": 1,
      "진화": 1,
      "계속할": 1,
      "것": 1,
      "이영광의": 1
    }

    const newData = Object.keys(mock).map(key => {
      const value = mock[key]

      return {
        text:key,
        value: value
      }
    })

    setData(newData)
    setIsLoading(false);
  }

  useEffect(() => {
    initWordCloud();
  }, [keyword]);

  return (
    isLoading ? <CircularProgress/> : (
      <ReactWordcloud words={data} size={[450, 450]} options={options}/>
    )
  )
}

export default SentWordCloud;