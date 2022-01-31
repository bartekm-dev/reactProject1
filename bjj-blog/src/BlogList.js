const BlogList = ({ blogs, title, deleteBlog }) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>Written by: {blog.author}</h3>
                    <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;