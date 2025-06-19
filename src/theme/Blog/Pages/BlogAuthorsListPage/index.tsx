import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { translateBlogAuthorsListPageTitle } from '@docusaurus/theme-common/internal';
import BlogLayout from '@theme/BlogLayout';
import type { Props } from '@theme/Blog/Pages/BlogAuthorsListPage';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';
import Author from '@theme/Blog/Components/Author';
import type { AuthorItemProp } from '@docusaurus/plugin-content-blog';
import styles from './styles.module.css';
import AcercaAutores from '../../../../components/AcercaAutores';

function AuthorListItem({ author }: { author: AuthorItemProp }) {
  return (
    <li className={styles.authorListItem}>
      <Author as="h2" author={author} count={author.count} />
    </li>
  );
}

function AuthorsList({ authors }: { authors: Props['authors'] }) {
  return (
    <section className={clsx('margin-vert--lg', styles.authorsListSection)}>
      <ul>
        {authors.map((author) => (
          <AuthorListItem key={author.key} author={author} />
        ))}
      </ul>
    </section>
  );
}

export default function BlogAuthorsListPage({
  authors,
  sidebar,
}: Props): ReactNode {
  const title: string = translateBlogAuthorsListPageTitle();
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_authors_list" />
      <BlogLayout>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
          <Heading as="h1">Acerca de la Olimpiada Michoacana</Heading>
          <AcercaAutores />
          <Heading as="h1">Equipo</Heading>
          <p style={{ marginBottom: '5rem' }}>
            Conoce a los miembros de la Olimpiada Michoacana de Matemáticas, quienes trabajan arduamente para hacer de este evento una experiencia inolvidable.
          </p>
          <AuthorsList authors={authors} />
        </div>
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
