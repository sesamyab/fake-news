import React, { FC } from "react";

import { Layout } from '../components'

interface Article {
  title: string,
  image: string,
  description: string
}

interface Props { 
  articles: Article[]
}

const HomePage: FC<Props> = ({ articles })  => {
  console.log(articles)
    return (
      <Layout>
        <p>pepe</p>
      </Layout>
    );
  }
;

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