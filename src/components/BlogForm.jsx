import React, { useState } from 'react'

const BlogForm = ({setCounter}) => {
    const [formData, setFormData] = useState({});
    const [count, setCount] = useState(1);
    

    const handelChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        fetch("http://localhost:8082/blog/save",{
            method: 'POST',
            body: JSON.stringify(formData),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response)=>{
            console.log(count)
            console.log(response)
            setCount(count + 1)
            console.log(count)
            
            setCounter(count) 
        })
        // .then((data)=>{
        //     console.log(data)
        // })
        .catch((err)=>{
            console.error(err)
        })
        console.log(count)
        console.log(formData)
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>

            <tr>
                <td>Blog: </td>
                <td><textarea name="blog" onChange={handelChange} value={formData.blog || ""} ></textarea></td>
            </tr>

            <tr>
                <td>Author ID: </td>
                <td><input type="text" name="author_id" onChange={handelChange} value={formData.author_id || ""}  /></td>
            </tr>

            
            <tr>
                <td></td>
                <td><input type="submit" value="Post" /></td>
            </tr>

        </table>
      </form>
    </div>
  )
}

export default BlogForm