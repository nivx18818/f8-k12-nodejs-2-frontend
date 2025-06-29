import PostFormHeader from "./_components/post-form-header";

function CreatePostLayout({ children }) {
  return (
    <>
      <PostFormHeader />
      <div className="max-w-4xl px-6 py-8 mx-auto">{children}</div>
    </>
  );
}

export default CreatePostLayout;
