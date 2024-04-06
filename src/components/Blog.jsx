import React from 'react'
import useFetch from '../hooks/useFetch';

const Blog = ({count}) => {
    const { data, loading, error } = useFetch('http://localhost:8082/blog/all',count);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

  return (
    <main>
            <div className="bloglist">
                <h1>Blog Posts</h1>
                <ul id="blogs">
                {data.map(dataobj => (
                    <li className="blogs">
                        <p><strong>Blog Title:</strong> <span className="blogTitle"> {dataobj.blog} </span></p>
                        <p><strong>Author Id:</strong> <span className="blogTitle"> {dataobj.author_id} </span></p>
                        <p><strong>Date:</strong> <span className="blogTitle"> {dataobj.date} </span></p>
                    </li>
                ))}
                </ul>
            </div>            
        </main>
  )
}

export default Blog