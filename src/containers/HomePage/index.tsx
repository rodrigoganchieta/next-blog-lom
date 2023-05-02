import Head from 'next/head';
import { Container, Category, AllPostsLinks } from './styles';
import { PostData } from '../../domain/posts/post';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';
import { SITE_NAME } from '../../config/app-config';
import { PaginationData } from '../../domain/posts/pagination';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}
          {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
        </title>
        <meta name="copyright" content="Rodrigo Anchieta" />
        <meta name="contact" content="rodrigoganchieta@gmail.com" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="rating" content="safe for kids" />
        <meta name="classification" content="Sites" />
        <meta name="description" content="Este é meu blog de tecnologia." />
        <meta
          name="description"
          content="Curso de JavaScript e TypeScript do Básico ao Avançado - Criado por Luiz Otávio Miranda, aluno Rodrigo Gonçalves de Anchieta"
        />
        <meta
          name="abstract"
          content="Curso de JavaScript e TypeScript do Básico ao Avançado - Criado por Luiz Otávio Miranda, aluno Rodrigo Gonçalves de Anchieta"
        />
        <meta
          name="keywords"
          content="Curso de JavaScript e TypeScript, desenvolvedor front-end, Rodrigo Anchieta, rodrigoganchieta, Rodrigo Gonçalves de Anchieta"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover="/images/javascript.png"
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
        <Pagination {...pagination} />
        {!pagination?.nextPage && (
          <Link href="/post/page/[...param]" as="/post/page/1" passHref>
            <AllPostsLinks>Ver todos os posts</AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
