import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/layout'

const AboutPage = () =>{
    return(
        <Layout>
            <h1>About Me</h1>
            <p>Im 23 years old</p>
            <p>Need a developer?<Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage;