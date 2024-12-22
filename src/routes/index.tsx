import TableOfContents from "~/components/TableOfContents";
import ArticleTitle from "~/components/ArticleTitle";
import Nav from "~/components/Nav";
import Container from "~/components/Container";

export default function Home() {
  return (
    <Container>
      <Nav />
      <ArticleTitle label="" />
      <TableOfContents />
    </Container>
  );
}
