import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/footer';
import Logo from '../../images/logo-3.png'


const BlogDetails = () => {

    const { id } = useParams()

    const BlogDetails = blogs.find(item => item.id === id)

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'}/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <BlogSingle />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
