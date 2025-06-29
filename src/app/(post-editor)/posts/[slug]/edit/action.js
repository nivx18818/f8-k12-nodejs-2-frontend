"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const updatePost = async (formData) => {
  try {
    const headerList = await headers();
    const referer = headerList.get("referer");
    const path = new URL(referer).pathname; // Ex: /posts/:slug/edit
    const slug = path.split("/")[2];
    const data = Object.fromEntries(formData.entries());

    const response = await fetch(`${process.env.BASE_API_URL}/posts/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { success: false, error: "Failed to update post" };
    }

    const res = await response.json();

    if (!res.success) {
      return { success: false, error: res.message ?? "Server error" };
    }

    redirect(`/posts/${res.data.slug}`);
  } catch (error) {
    console.error(error);
    return { success: false, error: "Network error" };
  }
};
