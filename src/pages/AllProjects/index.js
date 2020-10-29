import React, {useState,useEffect} from 'react';
import './style.scss';
import { Link } from 'react-router-dom';


const AllProjects = () => {
    const [windowWidth, setWindowWidth] = useState(true)
    const [myWidth, setMyWidth] = useState(0)

    useEffect(()=>{
       
        const changeWidth = ()=>{
            let winWidth = window.innerWidth
            if(winWidth!==myWidth){
                setMyWidth(winWidth)
            }
            console.log(myWidth);
            if (myWidth<768){
                setWindowWidth(false)
            }else setWindowWidth(true)
            }
        window.addEventListener('resize',changeWidth())
        //return window.removeEventListener('resize',changeWidth())
    },[windowWidth,myWidth])
    console.log(windowWidth);
    //console.log(winWidth);

    return (
        <section className='allContainer'>
            <h2 className='allProjects-title'>Наші кейси</h2>
            <div className='mainProjects'>
                {/* {renderPhoto(tellmeProject)}  */}

                <div className='mainProjects-item'>
                    <Link to='/itseems'>
                        <img src={windowWidth?'./images/cases/itSeems-dt.png':'./images/cases/itSeens-mob.png'} alt='ItSeems' title='itSeems'/>
                    </Link>
                </div>
                <div className='mainProjects-item'>
                    <Link to='/tellme'>
                        <img src='./images/cases/tellMe-dt.png' alt='TellMe' title='tellMe'/>
                    </Link>
                </div>
                <div className='mainProjects-item'>
                    <a href='https://itseems.com.ua'>
                        <img src='./images/cases/vote-dt.png' alt='ItSeems' title='itSeems' />
                    </a>
                </div>
                <div className='mainProjects-item'>
                    {/* <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/tellme1.png' alt='TellMe' title='tellMe'/>
                    </a> */}
                </div>
            </div>
            <h2 className='allProjects-title'>Наші кейси</h2>
            <div className='secondaryProjects'>
                {/* {renderPhoto(itSeemsProject)} */}

                <div className='secondaryProjects-item'>
                    <a href='https://itseems.com.ua'>
                        <img src='./images/cases/forsmaster-dt.png' alt='ItSeems' title='itSeems' />
                    </a>
                </div>
                <div className='secondaryProjects-item'>
                    {/* <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/Group-949.png' alt='TellMe' title='tellMe'/>
                    </a> */}
                </div>
                <div className='secondaryProjects-item'>
                    {/* <a href='https://itseems.com.ua'>
                        <img src='./images/cases/ItSeems/Group-609.png' alt='ItSeems' title='itSeems'/>
                    </a> */}
                </div>
                <div className='secondaryProjects-item'>
                    {/* <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/Group-949.png' alt='TellMe' title='tellMe'/>
                    </a> */}
                </div>
                <div className='secondaryProjects-item'>
                    {/* <a href='https://itseems.com.ua'>
                        <img src='./images/cases/ItSeems/Group-609.png' alt='ItSeems' title='itSeems'/>
                    </a> */}
                </div>
                <div className='secondaryProjects-item'>
                    {/* <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/Group-949.png' alt='TellMe' title='tellMe'/>
                    </a> */}
                </div>
            </div>
        </section>
    )
}

export default AllProjects;