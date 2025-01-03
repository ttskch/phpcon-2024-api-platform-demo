/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ArticlesIndexImport } from './routes/articles/index'
import { Route as ArticlesNewImport } from './routes/articles/new'
import { Route as ArticlesIdImport } from './routes/articles/$id'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesIndexRoute = ArticlesIndexImport.update({
  id: '/articles/',
  path: '/articles/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesNewRoute = ArticlesNewImport.update({
  id: '/articles/new',
  path: '/articles/new',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesIdRoute = ArticlesIdImport.update({
  id: '/articles/$id',
  path: '/articles/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/articles/$id': {
      id: '/articles/$id'
      path: '/articles/$id'
      fullPath: '/articles/$id'
      preLoaderRoute: typeof ArticlesIdImport
      parentRoute: typeof rootRoute
    }
    '/articles/new': {
      id: '/articles/new'
      path: '/articles/new'
      fullPath: '/articles/new'
      preLoaderRoute: typeof ArticlesNewImport
      parentRoute: typeof rootRoute
    }
    '/articles/': {
      id: '/articles/'
      path: '/articles'
      fullPath: '/articles'
      preLoaderRoute: typeof ArticlesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/articles/$id': typeof ArticlesIdRoute
  '/articles/new': typeof ArticlesNewRoute
  '/articles': typeof ArticlesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/articles/$id': typeof ArticlesIdRoute
  '/articles/new': typeof ArticlesNewRoute
  '/articles': typeof ArticlesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/articles/$id': typeof ArticlesIdRoute
  '/articles/new': typeof ArticlesNewRoute
  '/articles/': typeof ArticlesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/articles/$id' | '/articles/new' | '/articles'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/articles/$id' | '/articles/new' | '/articles'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/articles/$id'
    | '/articles/new'
    | '/articles/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ArticlesIdRoute: typeof ArticlesIdRoute
  ArticlesNewRoute: typeof ArticlesNewRoute
  ArticlesIndexRoute: typeof ArticlesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ArticlesIdRoute: ArticlesIdRoute,
  ArticlesNewRoute: ArticlesNewRoute,
  ArticlesIndexRoute: ArticlesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/articles/$id",
        "/articles/new",
        "/articles/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/articles/$id": {
      "filePath": "articles/$id.tsx"
    },
    "/articles/new": {
      "filePath": "articles/new.tsx"
    },
    "/articles/": {
      "filePath": "articles/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
