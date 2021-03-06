import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
    const lg = localStorage.getItem('lg');
    // const [hash, setHash] = useState(null);
    const [height, setHeight] = useState({
        homeTop: null,
        specializationTop: null,
        portfolioTop: null,
        aboutTop: null,

    })
        
    let arr = [];
    // console.log(locate.pathname = '/ru')
    const myRef = useCallback((block) => {
        arr.push(block)
        return arr
    }, [arr])



    const handleScroll = () => {
        let hHeight = +localStorage.getItem('height')
        arr = Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
        let aboutHeight, homeHeight, portfolioHeight, specializationHeight;
        let win = window.pageYOffset
        //    console.log(arr,hHeight,win);
        arr.map(item => {
            if (item.id === "home") {
                homeHeight = item.height
            }
            if (item.id === "specialization") {
                specializationHeight = item.height
            }
            if (item.id === "portfolio") {
                portfolioHeight = item.height
            }
            if (item.id === "about") {
                aboutHeight = item.height
            }
            setHeight({
                homeTop: Math.floor(homeHeight),
                specializationTop: Math.floor(specializationHeight),
                portfolioTop: Math.floor(portfolioHeight),
                aboutTop: Math.floor(aboutHeight),
            })
            return height
        })

        if (win < height.homeTop - hHeight) {
            if(lg === 'en'){
                locate.pathname = '/en/'
            }

            if(lg === 'ru'){
                locate.pathname = '/ru/'
            }
            locate.hash = '#home'
            history.replace(locate.hash)

        }
        else if (win >= height.homeTop - hHeight && (win < (height.homeTop + height.specializationTop - hHeight))) {
            // console.log(height.homeTop,win);
            if(lg === 'en'){
                locate.pathname = '/en/'
            }

            if(lg === 'ru'){
                locate.pathname = '/ru/'
            }
            locate.hash = '#specialization'
            history.replace(locate.hash)

        }
        else if (win >= (height.homeTop + height.specializationTop - hHeight) && win < (height.homeTop + height.specializationTop + height.portfolioTop - hHeight)) {
            // console.log(height.homeTop + height.specializationTop ,win);
            if(lg === 'en'){
                locate.pathname = '/en/'
            }

            if(lg === 'ru'){
                locate.pathname = '/ru/'
            }
            locate.hash = '#portfolio'
            history.replace(locate.hash)

        }
        else if (win >= (height.homeTop + height.specializationTop + height.portfolioTop - hHeight) && win < (height.homeTop + height.specializationTop + height.portfolioTop + height.aboutTop - 240)) {
            //console.log(height.homeTop + height.specializationTop + height.portfolioTop ,win);
            if(lg === 'en'){
                locate.pathname = '/en/'
            }

            if(lg === 'ru'){
                locate.pathname = '/ru/'
            }
            locate.hash = '#about'
            history.replace(locate.hash)

        }
        else if (win >= (height.homeTop + height.specializationTop + height.portfolioTop + height.aboutTop - 240) && height.homeTop && height.specializationTop && height.portfolioTop && height.aboutTop) {
            // console.log(height.homeTop + height.specializationTop + height.portfolioTop + height.aboutTop - 240,win);
            if(lg === 'en'){
                locate.pathname = '/en/'
            }

            if(lg === 'ru'){
                locate.pathname = '/ru/'
            }
            locate.hash = '#forcustomer'
            history.replace(locate.hash)

        }
        else {
            if(lg === 'en'){
                locate.pathname = '/en/'
            }

            if(lg === 'ru'){
                locate.pathname = '/ru/'
            }
            locate.hash = '#home'
            history.replace(locate.hash)
        }
    }

    // useEffect(()=>{
    //     const changeHash = () => {
    //         if(lg !== 'uk'){
    //             setHash('/')
    //         }else{
    //             setHash(null)
    //         }
    //     }
    //     changeHash()
    // })
    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    })
    useEffect(() => {
        document.addEventListener('resize', handleScroll)
        return () => document.removeEventListener('resize', handleScroll)
    })
    return (

      <ScrollToTop>
        <Fragment>
            <First collectHeight={myRef} id='home' />
            <Specialization collectHeight={myRef} specItems={specItems} id='specialization' />
            <Portfolio collectHeight={myRef} portfolioItems={portfolioItems} id='portfolio' />
            <About collectHeight={myRef} id='about' />
        </Fragment>
        </ScrollToTop>  

    )
}

export default Home;