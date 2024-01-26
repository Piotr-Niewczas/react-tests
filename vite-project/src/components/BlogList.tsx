import { Link } from "react-router-dom";
import Blog from "../types/Blog";
import "./BlogList.css";

interface Props {
  title: string;
  blogs: Blog[];
}

function BlogList({ title, blogs }: Props) {
  return (
    <div className="blog-list">
      <h2> {title} </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2> {blog.title} </h2>
            <p> Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
