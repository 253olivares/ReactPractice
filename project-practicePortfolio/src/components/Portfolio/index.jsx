import React from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders';
import './index.scss'
import portfolioData from'../../data/portfolio.json';
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../../firebase'

const Portfolio = () => {

    const [letterClass, setLetterClass] = React.useState('text-animate');
    const [portfolio, setPortfolio] = React.useState([]);

    React.useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    React.useEffect(()=> {
        
        getPortfolio()

    },[])

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'))
        console.log(querySnapshot);
         setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
        console.log(portfolio);
    }

    function renderPortfolio(portfolio) {

        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return(
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.file} 
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={()=> window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <React.Fragment >
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={"Portfolio".split("")} 
                        idx={15}
                    />
                </h1>
                    {
                      portfolio ?  renderPortfolio(portfolio) : "No Data found please add Data!"
                    }
            </div>
            <Loader type='pacman' />
        </React.Fragment>
    )
}

export default Portfolio;