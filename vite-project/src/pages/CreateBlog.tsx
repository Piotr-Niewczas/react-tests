import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";

function CreateBlog() {
  const authors = ["mario", "yoshi", "kiriko"];

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState(authors[0]);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:5174/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added");
      setIsPending(false);
      navigate("/blogs");
    });
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          {authors.map((author) => (
            <option key={author} value={author}>
              {" "}
              {author}{" "}
            </option>
          ))}
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
}

export default CreateBlog;
