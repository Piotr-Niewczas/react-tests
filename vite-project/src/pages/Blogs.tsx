import BlogList from "../components/BlogList";
import Blog from "../types/Blog";
import useFetch from "../useFetch";

const Blogs = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch<Blog[]>("http://localhost:5174/blogs");

  // function handleDelete(id: number): void {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  return (
    <div>
      {error && (
        <div style={{ color: "red" }}>
          <h2>Error: {error}</h2>
        </div>
      )}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All the blogs!" />}
    </div>
  );
};

export default Blogs;
