import ArticleLeading from "./article-leading";
import HeaderActionBar from "./header-action-bar";

function ArticleHeader({ post, handleDeletePost }) {
  return (
    <header className="mb-12">
      <ArticleLeading post={post} />
      <HeaderActionBar post={post} handleDeletePost={handleDeletePost} />
    </header>
  );
}

export default ArticleHeader;
