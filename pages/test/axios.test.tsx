import HeaderTest from '@src/pages/test/component/Header';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface ArticleDTO {
  articles: Article[];
  articlesCount: number;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio: null;
  image: string;
  following: boolean;
}

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

const AxiosTest = () => {
  const [articleList, setArticleList] = useState<Array<Article>>([]);
  useEffect(() => {
    apiArticleRequest().then((d) => setArticleList(d.data.articles));
  }, []);
  return (
    <>
      <h1>console을 확인해 보세요.</h1>
      <HeaderTest />
      <ul>
        {articleList.map((article: Article) => (
          <li key={article.slug}>article.slug</li>
        ))}
      </ul>
    </>
  );
};

export default AxiosTest;
