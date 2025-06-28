import FooterActionBar from "./footer-action-bar";
import AuthorBio from "./author-bio";

function ArticleFooter({ post }) {
  return (
    <footer className="pt-8 mt-16 border-t border-gray-200">
      <FooterActionBar />
      <AuthorBio post={post} />
    </footer>
  );
}

export default ArticleFooter;
