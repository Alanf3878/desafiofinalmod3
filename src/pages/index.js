import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';
import "../components/global/global.css"
import { Link } from 'gatsby';

const Index = () => {
  return (
   <div>
     <Header/> 
     <Main/>
     <Footer />
   </div>
  );
};

export default Index;