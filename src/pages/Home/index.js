import React, { Fragment,useState,useEffect,useCallback } from 'react';
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

    const myRef = useCallback((block)=>{        
        arr.push(block)
        return arr
    },[arr])
    


    const handleScroll = ()=>{
        let hHeight = +localStorage.getItem('height')
        arr=Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
        let aboutHeight,homeHeight,portfolioHeight,specializationHeight;
        let win = window.pageYOffset
        console.log(arr,hHeight,win);
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
                        homeTop:Math.floor(homeHeight),
                        specializationTop:Math.floor(specializationHeight),
                        portfolioTop:Math.floor(portfolioHeight),
                        aboutTop:Math.floor(aboutHeight),
                    })
                    return height
        })

        if(win<height.homeTop){
            locate.hash = '#home'
            history.replace(locate.hash)
        }
       else if(win>=height.homeTop && (win<(height.homeTop + height.specializationTop ))){
          // console.log(height.homeTop,win);
            locate.hash = '#specialization'
            history.replace(locate.hash)
        }
     else if(win>=(height.homeTop + height.specializationTop ) && win<(height.homeTop + height.specializationTop + height.portfolioTop )){
        // console.log(height.homeTop + height.specializationTop ,win);
            locate.hash = '#portfolio'
            history.replace(locate.hash)
        }
       else if(win>=(height.homeTop + height.specializationTop + height.portfolioTop ) && win<(height.homeTop  + height.specializationTop + height.portfolioTop + height.aboutTop - 240)){
          //console.log(height.homeTop + height.specializationTop + height.portfolioTop ,win);
            locate.hash = '#about'
            history.replace(locate.hash)
        }
        else if(win>=(height.homeTop + height.specializationTop + height.portfolioTop + height.aboutTop - 240) && height.homeTop && height.specializationTop && height.portfolioTop && height.aboutTop) {
           // console.log(height.homeTop + height.specializationTop + height.portfolioTop + height.aboutTop - 240,win);
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
    useEffect(()=>{
        document.addEventListener('resize', handleScroll)
        return ()=>document.removeEventListener('resize', handleScroll)
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