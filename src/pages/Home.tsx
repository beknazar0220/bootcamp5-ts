import React, {useEffect} from 'react'
import axios from 'axios'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { getPostStart, getPostSuccess, getPostError } from '../redux/post/postSlice';
import Loading from '../loading/Loading';

const API = "https://jsonplaceholder.typicode.com/posts"
function Home() {
    const {posts, loading, error} = useSelector((state:RootState) => state.list)

    const dispatch: AppDispatch = useDispatch()

    async function getPost (){
        dispatch(getPostStart())
        try {
            const res = await axios.get(API)

            console.log(res);
            setTimeout(() => {
                dispatch(getPostSuccess(res.data))
            },30000)
        } catch (error) {
            dispatch(getPostError("not found post"))
        }
    }

    useEffect(() => {getPost()}, [])

    if(loading) {
        return <Loading/>
    }
    if(error){
        return<div>{error}</div>
    }
  return (
    <div>
        {
            posts.map((item) =>(
                <div key={item.id}>
                    <h5>{item.title}</h5>
                </div>
            ))
        }
    </div>
  )
}

export default Home