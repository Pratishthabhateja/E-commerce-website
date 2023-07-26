import React from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import ProductsMain from '../Components/ProductsMain'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories/>
        <ProductsMain/>
        <Newsletter/>
        <Footer/>
    </div>
  );
};

export default Home;