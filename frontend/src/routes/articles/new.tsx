import * as React from 'react';
import { FormEvent } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Article, client } from '../../lib/api/api';

export const Route = createFileRoute('/articles/new')({
  component: ArticleNewComponent,
})

function ArticleNewComponent() {
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Article = {
      title: formData.get('title')?.toString() ?? '',
      content: formData.get('content')?.toString() ?? '',
      published: formData.get('published') === 'on',
    };

    await client.POST('/api/articles', { headers: { 'Content-Type': 'application/ld+json' }, body: data });

    navigate({to: '/articles'});
  };

  return (
    <form className="m-2 grid grid-cols-3 gap-2 w-[300px]" onSubmit={(e) => onSubmit(e)}>
      <label>Title</label>
      <input type="text" name="title" className="col-span-2 border border-gray-300 p-1" autoFocus={true} />
      <label>Content</label>
      <textarea name="content" className="col-span-2 border border-gray-300 p-1"></textarea>
      <label>Published</label>
      <span className="col-span-2"><input type="checkbox" name="published" /></span>
      <button type="submit" className="col-start-2 col-span-2 bg-gray-300 p-1">Submit</button>
    </form>
  );
}
