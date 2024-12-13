import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
import {list} from "../data/Data"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard services={list}/>
        </div>
      </section>
    </>
  )
}

export default Blog
