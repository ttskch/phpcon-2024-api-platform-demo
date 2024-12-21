import createClient from 'openapi-fetch';
import { components, paths } from './schema';

export const client = createClient<paths, 'application/ld+json'>({
    baseUrl: 'http://localhost:8000',
})

export type Article = components['schemas']['Article.jsonld']
