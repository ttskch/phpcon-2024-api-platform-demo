import * as React from 'react';
import { Link, createFileRoute } from '@tanstack/react-router';
import { Article, client } from '../../lib/api/api';

export const Route = createFileRoute('/articles/')({
  loader: async () => {
    const { data } = await client.GET('/api/articles');
    return data?.member;
  },
  component: ArticleIndexComponent,
})

function ArticleIndexComponent() {
  const articles = Route.useLoaderData() as Article[];
  return (
    <ul className="m-2">
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={`/articles/${article.id}`}>{article.title}</Link>
        </li>
      ))}
        <li><Link href={'/articles/new'}>+ Add</Link></li>
    </ul>
  );
}
