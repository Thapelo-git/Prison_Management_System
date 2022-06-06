import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
function Viewuser() {
  const [data,setData]=useState({})
  let currentId = useParams()
  const {id}=currentId;

  useEffect(()=>{
    db.ref("Puser").on("value",(snap)=>{
      setData({
        ...snap.val(),
      })
    })
  },[id]);
  console.log(data,'mmmmmmmmmmmmm')
  console.log(id)
  return (
    <>
    {
      Object.keys(data).map((userId)=>{
        if(userId === id){
          return(<>
          <h1>ghjksdlfglkjh {data[id].name}</h1>
          <h1>ghjksdlfglkjh {data[id].name}</h1>
          <h1>ghjksdlfglkjh {data[id].name}</h1>
          <h1>ghjksdlfglkjh {data[id].IDnumber}</h1>
<p>{data[id].name}</p>
</>
          )
        }
      })
    }
    </>
  )
}

export default Viewuser