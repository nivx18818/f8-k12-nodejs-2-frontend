function PostForm({ formAction, data = { slug: "", title: "", content: "" } }) {
  return (
    <form id="post-form" action={formAction} className="space-y-8" method="POST">
      {/* Slug Input */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          URL Slug
        </label>
        <input
          type="text"
          name="slug"
          placeholder="url-friendly-slug"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-transparent font-[inherit]"
          pattern="[a-z0-9-]+"
          title="Only lowercase letters, numbers, and hyphens allowed"
          required
          defaultValue={data.slug}
        />
        <p className="mt-1 text-xs text-gray-500">
          Use only lowercase letters, numbers, and hyphens
        </p>
      </div>

      {/* Title Input */}
      <div>
        <textarea
          name="title"
          placeholder="Title"
          className="w-full text-4xl font-bold leading-tight text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none resize-none md:text-5xl font-[inherit] field-sizing-content"
          maxLength={191}
          required
          defaultValue={data.title}
        />
      </div>

      {/* Content Editor */}
      <div className="min-h-96">
        <textarea
          name="content"
          placeholder="Tell your story..."
          className="w-full text-lg leading-relaxed text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none resize-none font-[inherit] field-sizing-content"
          required
          defaultValue={data.content}
        />
      </div>
    </form>
  );
}

export default PostForm;
