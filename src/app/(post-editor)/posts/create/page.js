import PostForm from "../_components/post-form";
import { createPost } from "./action";

function CreatePostForm() {
  return <PostForm formAction={createPost} />;
}

export default CreatePostForm;
