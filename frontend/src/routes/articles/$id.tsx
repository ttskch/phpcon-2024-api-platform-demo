import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Article, client } from '../../lib/api/api';

export const Route = createFileRoute('/articles/$id')({
  loader: async ({ params: { id } }) => {
    const { data } = await client.GET('/api/articles/{id}', { params: { path: { id } } });
    return data;
  },
  component: ArticleDetailComponent,
})

function ArticleDetailComponent() {
  const article = Route.useLoaderData() as Article;
  return (
    <table className="m-2">
      <tbody>
        <tr>
          <th className="border px-2 py-1 text-left">ID</th>
          <td className="border px-2 py-1">{article.id}</td>
        </tr>
        <tr>
          <th className="border px-2 py-1 text-left">Title</th>
          <td className="border px-2 py-1">{article.title}</td>
        </tr>
        <tr>
          <th className="border px-2 py-1 text-left">Content</th>
          <td className="border px-2 py-1">{article.content}</td>
        </tr>
        <tr>
          <th className="border px-2 py-1 text-left">Published</th>
          <td className="border px-2 py-1">{article.published ? 'YES' : 'NO'}</td>
        </tr>
        <tr>
          <th className="border px-2 py-1 text-left">Created At</th>
          <td className="border px-2 py-1">{article.createdAt}</td>
        </tr>
        <tr>
          <th className="border px-2 py-1 text-left">Updated At</th>
          <td className="border px-2 py-1">{article.updatedAt}</td>
        </tr>
      </tbody>
    </table>
  );
}
