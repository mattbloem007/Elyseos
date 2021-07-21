import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Banner from "../components/sections/banner"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="A decentralised sacramental medicine ecosystem"/>
    <Banner />
    <GetStarted />
  </Layout>
)

export default IndexPage
