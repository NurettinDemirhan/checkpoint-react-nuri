import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {data, addSomethingToData, removeSomethingFromData,getContentAndPageNumWithId } from './DataBase';
function BlogEntry() {
  const { id } = useParams();
    const [show, setShow] =useState({id:0,content:""})
    console.log(data)
    const newShow = getContentAndPageNumWithId(id)
    setShow(newShow)

  return (
    <div>
      <h2>Blog Entry {id}</h2>
      <h1>{show.content}</h1>
    </div>
  );
}

export default BlogEntry;