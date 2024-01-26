import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Blog from "../types/Blog";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch<Blog>("http://localhost:5174/blogs/" + id);

  const navigate = useNavigate();

  function handleDelete(): void {
    fetch("http://localhost:5174/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate(-1);
    });
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogDetails;
