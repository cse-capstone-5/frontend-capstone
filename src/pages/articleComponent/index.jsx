import React, {useEffect, useState} from "react";

const ArticleComponent = (props) => {
  const {keyword} = props

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const initArticles = () => {
    const mock = [
      ["코로나19 동절기 접종 오늘까지 희망자는 계속 무료접종 가능", "https://www.yna.co.kr/view/AKR20230406140400530?input=1195m"],
      [" 코로나 방역 인건비 허위청구 공익제보자에 보상금 4천만원", "https://www.yna.co.kr/view/AKR20230404049500061?input=1195m"],
      ["코로나19 동절기 추가접종 내일 종료 희망자는 일부기관서 가능", "https://www.yna.co.kr/view/AKR20230406079600530?input=1195m"]
    ]
  }

  useEffect(() => {
    initArticles();
  }, [keyword])
};

export default ArticleComponent;