import {useState} from "react";
import {getAllData} from "../api/apis";

export const useMain = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [wordCloudData, setWordCloudData] = useState([])
  const [lineChartData, setLineChartData] = useState({})
  const [articleData, setArticleData] = useState({})

  const fetchData = (keyword) => {
    setIsLoading(true);

    getAllData(keyword).then(res => {
      const data = res.data;
      let idx = 1;
      const resWordCloudData = Object.keys(data.wordCloud).filter(key => key !== keyword).map(key => {
        const value = data.wordCloud[key];

        return {
          text: key,
          value: value
        }
      })

      const resLineChartData = data.lineChart.map(value => {
        const dateValues = value.name.slice(0, 10).split("-")
        const date = dateValues[0] + '년' + dateValues[1] + '월' + dateValues[2] + '일';
        const count = Math.round(value.count * 100) / 100;

        return {
          date,
          count
        }
      })

      const resArticleData = data.article.map(value => {
        const title = value[0];
        const link = value[1];

        return {
          idx: idx++,
          title: title,
          link: link
        }
      })

      setWordCloudData(resWordCloudData);
      setLineChartData(resLineChartData);
      setArticleData(resArticleData);
      setIsLoading(false);
    });
  }

  const handleIsLoading = value => setIsLoading(value);

  return ({
    isLoading,
    wordCloudData,
    lineChartData,
    articleData,
    handleIsLoading,
    fetchData,
  });
}