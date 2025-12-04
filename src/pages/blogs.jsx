import BlogsComponent from "../components/blogs/blogs";
import Contact from "../components/contact";
import HeaderTop from "../components/header-top";
import Footer from "../components/home/footer";
import Header from "../components/home/header";

function Blogs() {
  return (
    <>
      <HeaderTop>TOKEN LIVE! BUY NOW!</HeaderTop>
      <Header />
      <BlogsComponent />
      <Contact />
      <Footer />
    </>
  );
}

export default Blogs;
