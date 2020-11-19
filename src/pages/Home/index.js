import React, { Fragment,useState,useEffect } from 'react';
import {useHistory,useLocation }from 'react-router-dom';
import Specialization from '../../components/home/Specialization/Specialization';
import First from '../../components/home/First';
import About from '../../components/home/About';
import Portfolio from '../../components/home/Portfolio';
import specItems from '../../json/specItems';
import portfolioItems from '../../json/portfolioItems';
import ScrollToTop from '../../utils/ScrollToTop';


function Home() {
    let history = useHistory()
    let locate = useLocation()
    const[height,setHeight] = useState({
        homeTop:null,
        specializationTop:null,
        portfolioTop:null,
        aboutTop:null,

    })
    let arr=[];

    const myRef = (block)=>{        
        arr.push(block)
        arr=Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
        console.log(arr);
        return arr
    }


    const handleScroll = ()=>{
        console.log(arr);
        let aboutHeight,homeHeight,portfolioHeight,specializationHeight;
        let win = window.pageYOffset
        arr.map(item=>{
                    if(item.id ==="home"){  
                homeHeight = item.height         
                    }
                    if(item.id ==="specialization"){
               specializationHeight = item.height
                    }
                    if(item.id ==="portfolio"){ 
                portfolioHeight = item.height
                    }
                    if(item.id ==="about"){
                aboutHeight = item.height
                    }
                    setHeight({
                        homeTop:homeHeight,
                        specializationTop:specializationHeight,
                        portfolioTop:portfolioHeight,
                        aboutTop:aboutHeight,
                    })
                    return height
        })
        console.log(height,win);

        if(win<height.homeTop){
            locate.hash = '#home'
            history.replace(locate.hash)
        }
       else if(win>=height.homeTop && (win<(height.homeTop + height.specializationTop))){
            locate.hash = '#specialization'
            history.replace(locate.hash)
        }
     else if(win>=(height.homeTop + height.specializationTop) && win<(height.homeTop + height.specializationTop + height.portfolioTop)){
            locate.hash = '#portfolio'
            history.replace(locate.hash)
        }
       else if(win>=(height.homeTop + height.specializationTop + height.portfolioTop) && win<(height.homeTop + height.specializationTop + height.portfolioTop + height.aboutTop - 240)){
            locate.hash = '#about'
            history.replace(locate.hash)
        }
        else if(win>=(height.homeTop + height.specializationTop + height.portfolioTop + height.aboutTop - 240) && height.homeTop && height.specializationTop && height.portfolioTop && height.aboutTop) {
            locate.hash = '#forcustomer'
            history.replace(locate.hash)
        }
        else{
            locate.hash = '#home'
            history.push(locate.hash)
        }

    }

 
    useEffect(()=>{
        document.addEventListener('scroll', handleScroll)
        return ()=>document.removeEventListener('scroll', handleScroll)
    })
    return (

        <ScrollToTop>
        <Fragment>
            <First collectHeight={myRef} id='home'/>
            <Specialization collectHeight={myRef}  specItems={specItems} id='specialization' />
            <Portfolio collectHeight={myRef} portfolioItems={portfolioItems} id='portfolio' />
            <About collectHeight={myRef} id='about' />
        </Fragment>
        </ScrollToTop>

    )
}

export default Home;