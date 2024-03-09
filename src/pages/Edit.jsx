import React from 'react'
import { useState,useEffect } from 'react'
import appwriteService from "../appwrite/config"
import { useNavigate,useParams } from 'react-router-dom'
import { Container,PostForm } from '../components/index'

function Edit() {
    const [post,setPost]=useState(null)
    const navigate = useNavigate()
    const {slug} = useParams();
    useEffect(()=>{
        if(slug){
            appwriteService.getPosts(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
                navigate("/")
        }
    },[slug,navigate])
    

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ): null
}

export default Edit