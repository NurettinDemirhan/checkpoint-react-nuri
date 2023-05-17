import React,{ useState } from "react"


export function Blog({ onBlogSubmit }){

    const [content,setContent] = useState("")

    const handleContentChange = (e) => {
        setContent(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        onBlogSubmit(content);
        setContent('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={handleContentChange}
                placeholder=""
                rows="2"
                cols="50"
            />
            <button type="submit">Submit</button>
            <p>Total Characters: {content.length}</p>
        </form>
    )
}