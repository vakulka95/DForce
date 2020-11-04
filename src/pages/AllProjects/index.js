import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';


const AllProjects = () => {
    // const [windowWidth, setWindowWidth] = useState(true)
    // const [myWidth, setMyWidth] = useState(0)

    // useEffect(()=>{
       
    //     const changeWidth = ()=>{
    //         let winWidth = window.innerWidth
    //         if(winWidth!==myWidth){
    //             setMyWidth(winWidth)
    //             console.log(winWidth, myWidth);
    //         }
    //         console.log(myWidth);
    //         if (myWidth<768){
    //             setWindowWidth(false)
    //         }else {
    //             setWindowWidth(true)
    //         }
    //         console.log(windowWidth);
    //         }
    //     window.addEventListener('resize',changeWidth())
    //     //return window.removeEventListener('resize',changeWidth())
    // },[windowWidth,myWidth])
    // //console.log(windowWidth);
    // //console.log(winWidth);

    return (
        <section className='allContainer'>
            <div className='container'>
            <h2 className='allProjects-title'>Провідні проекти</h2>
            <div className='mainProjects'>
                {/* {renderPhoto(tellmeProject)}  */}

                <div className='mainProjects-item'>
                    <Link to='/itseems' className='mainProjects-item-img itSeems'>
                        <span className='mainProjects-item-inner'></span>
                    </Link>
                </div>
                <div className='mainProjects-item'>
                    <Link to='/tellme' className='mainProjects-item-img tellMe'>
                        <span className='mainProjects-item-inner'></span>
                    </Link>
                </div>
                <div className='mainProjects-item'>
                    {/* <Link to='./vote' className='mainProjects-item-img vote'> */}
                    <div className='mainProjects-item-img vote'>
                    <div className='in-progress'>In progress</div>
                        <span className='mainProjects-item-inner'></span>
                    </div>
                    {/* </Link> */}
                </div>
                <div className='mainProjects-item'>
                    {/* <a href='https://tellme.com.ua/'>
                        <img src='./images/cases/TellMe/tellme1.png' alt='TellMe' title='tellMe'/>
                    </a> */}
                </div>
            </div>
            <h2 className='allProjects-title'>Веб-сайти</h2>
            <div className='secondaryProjects'>
                {/* {renderPhoto(itSeemsProject)} */}

                <div className='secondaryProjects-item'>
                    <a href='https://www.fors-master.com.ua' className='mainProjects-item-img forsMaster'>
                        <span className='mainProjects-item-inner'></span>
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
            </div>
        </section>
    )
}

export default AllProjects;