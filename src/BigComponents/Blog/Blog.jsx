import React from 'react'
import { Navigation } from "../../Components/Navigation"
import { BlogSection1 } from '../../Components/BlogSection/BlogSection1'

const Blog = () => {
  return (
    <>
      <Navigation hasColor={true} />
      <BlogSection1 />
    </>
  )
}

export {Blog}
