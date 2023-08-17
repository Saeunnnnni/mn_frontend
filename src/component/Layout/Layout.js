import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout({page}){
    return(
        <>
            <Header/>
            {page}
            <Footer/>
        </>
    )    
}

export default Layout;