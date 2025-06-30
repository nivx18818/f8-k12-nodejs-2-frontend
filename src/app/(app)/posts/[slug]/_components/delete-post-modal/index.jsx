"use client";

import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

function DeletePostModal({ handleDeletePost }) {
  const { slug } = useParams();
  const router = useRouter();

  const handleCancel = () => handleDeletePost(false);

  const handleConfirm = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${slug}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) router.push("/");
      const res = await response.json();
      throw new Error(
        res.message ?? "An error occurred while deleting the post"
      );
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      handleCancel();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000070] text-gray-800">
      <div className="p-6 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Delete Post</h2>
        <p className="mb-4">Are you sure you want to delete this post?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePostModal;
