import axios from 'axios';
import { useEffect, useState } from 'react';

const host = 'https://api.realworld.io';

// GET
axios.get(`${host}/api/articles`).then((res) => {
  // console.log(res.data);
});

const apiArticleRequest = async () => {
  const result = await axios.get(`${host}/api/articles`);
  return result;
  // console.log(result.data);
};

const AxiosText = () => {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    apiArticleRequest().then((d) => setArticleList(d.data.articles));
  }, []);
  return (
    <>
      <h1>console을 확인해 보세요.</h1>
      <ul>
        {articleList.map((article) => (
          <li key={article.slug}>article.slug</li>
        ))}
      </ul>
    </>
  );
};

export default AxiosText;
