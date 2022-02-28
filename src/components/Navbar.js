import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; 

const Navbar = () => {
    const thali=useSelector(state=>state.counter.thali)

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed navbar-dark bg-dark">
                <div className="container-fluid">
                    <p style={{fontFamily:'Sans-serif',fontSize:'25px'}} 
                    className="navbar-brand" ><span style={{color:'red',
                fontSize:'25px',
                fontFamily:'Sans-serif'}}>  Andy's Food Court</span></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    < ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link style={{fontFamily:'Sans-serif',fontSize:'25px',}}
                                 className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li style={{fontFamily:'Sans-serif',fontSize:'25px',margin:'5px'}} 
                            className="nav-item">
                            <Link className="nav-link" to="/Menu">Menu</Link>
                            </li>
                            
                            <li className="nav-item"><Link className="nav-link" to="/Cart">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJCmaoVg33Gg8ReHJ5yMXybtsPgVN4dUapQ&usqp=CAU" 
                            width={'40px'} height={'40px'}/>
 
                                </Link></li> <h3 style={{color:'white'}}>{thali.length}</h3>
                            
            </ul >
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
    