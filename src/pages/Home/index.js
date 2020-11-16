import React, { Fragment,useState,useEffect } from 'react';
import Specialization from '../../components/home/Specialization/Specialization';
import First from '../../components/home/First';
import About from '../../components/home/About';
import Portfolio from '../../components/home/Portfolio';
import specItems from '../../json/specItems';
import portfolioItems from '../../json/portfolioItems';

function Home() {
    const[height,setHeight] = useState({
        homeTop:null,
        specializationTop:null,
        portfolioTop:null,
        aboutTop:null,

    })

    let arr = []

    const spec = (refForBlock)=>{
        let block = refForBlock;
        arr.push(block)
        arr=Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
    }

    const handleScroll = ()=>{
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
        })
        console.log(height);
    }

 
    useEffect(()=>{
        document.addEventListener('scroll', handleScroll)
        return ()=>document.removeEventListener('scroll', handleScroll)
    })
    return (


        <Fragment>
            <First myRef={spec} id='home'/>
            <Specialization myRef={spec}  specItems={specItems} id='specialization' />
            <Portfolio myRef ={spec}  portfolioItems={portfolioItems} id='portfolio' />
            <About myRef={spec} id='about' />
        </Fragment>


    )
}

export default Home;