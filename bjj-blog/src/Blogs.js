import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Blogs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {fetch('http://localhost:8000/blogss')
        .then(res => {
            if (res.ok){
                return res.json();
            } else {
                throw Error('Could not fetch the data for that resource')
            }
            
        })
        .then((data) => {
            setBlogs(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((err) => {
            setError(err.message)
            setIsLoading(false);
        })   }, 1000)     
    },[]);

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div id="loader">Loading.....</div>}
            {blogs && <BlogList blogs={blogs} title="All things are here" />}
            {blogs && <BlogList blogs={blogs.filter((blogs)=> blogs.author==='BM')} title="All Blogs by BM" />}
        </div>
        
     );
}
 
export default Blogs;