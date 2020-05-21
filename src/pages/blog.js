import React from 'react';
import { graphql, Link } from 'gatsby'

import blogStyles from './blog.module.scss'

import Layout from '../components/layout'


export const query = graphql`
query{
    allContentfulBlogPost(
      sort:{
        fields:publishedDate,
        order:DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
    ` 

const BlogPage = (props) =>{
    const {data} = props;

    return(
        <Layout>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((post)=>
                <li className={blogStyles.post} key={post.node.title}>
                    <Link to={`/blog/${post.node.slug}`}>
                        <h1>{post.node.title}</h1>
                    </Link>>
                    <p>{post.node.publishedDate}</p>
                </li>)}
            </ol>
        </Layout>
    )
}

export default BlogPage;