import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Blogs = () => {
    const [blogs, setBlogs] = useState([
        {title: "White belt problems", body:"White Belt problems are: ...", author:'BM', id: 1 },
        {title: "Blue belt problems", body:"Blue Belt problems are: ...", author:'TP', id: 2 },
        {title: "Purple belt problems", body:"Purple Belt problems are: ...", author:'CD', id: 3 },
        {title: "Brown belt problems", body:"Brown Belt problems are: ...", author:'CJ', id: 4 },
        {title: "Black belt problems", body:"Black Belt problems are: ...", author:'BM', id: 5 }

    ])
    const deleteBlog = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('effect hook ran from blogs');
        console.log(blogs);
    });

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All things are here" deleteBlog={deleteBlog}/>
            <BlogList blogs={blogs.filter((blogs)=> blogs.author==='BM')} title="All Blogs by BM" />
        </div>
     );
}
 
export default Blogs;