import ArticleLeading from "./article-leading";
import HeaderActionBar from "./header-action-bar";

function ArticleHeader({ post }) {
  return (
    <header className="mb-12">
      <ArticleLeading post={post} />
      <HeaderActionBar />
    </header>
  );
}

export default ArticleHeader;
