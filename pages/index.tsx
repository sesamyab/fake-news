import React, { FC } from "react";

import { Layout, ArticleList } from '../components'

interface Props { 
  articles: Article[]
}

const HomePage: FC<Props> = ({ articles })  => {
  return (
    <Layout>
      <ArticleList articles={articles}/>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/articles')
  const articles = await res.json()

  return {
    props: {
      articles
    }, 
  }
}

export default HomePage