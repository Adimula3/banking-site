import React from 'react';
import '../styles/home.css'
import {Col, Row} from "react-bootstrap";
function Home(props) {
    return (
        <div>
            <header >
                <div className=" header d-flex">
                    <div className="logo-box">
                        <h2 className="logo">Barclays</h2>
                        <span>BANK</span>
                    </div>
                    <span className="sp-1">We take care of your money</span>
                    <div className="h-call">
                        <p>Call Toll FREE:</p>
                        <div className="d-flex">
                            <h6>(800) 123 1234</h6>
                            <span>M-F 7am-11pm CT</span>
                        </div>
                    </div>

                    <div className="h-links">
                        <a href="">Log in</a>
                        <a href="">Create an account</a>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Products & Rates</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Banking</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacts</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-details">
                        <h1>Discover the perfect banking solutions for you with our guidance and support</h1>
                        <p>From checking and savings accounts to credit cards and loans, we're here to help!</p>
                        <span>Let's start with CDs</span>
                    </div>
                </div>
            </div>
            <div className="breadcrumbs d-flex">
                <div className="b-d b-1">
                    <h2><b>01.</b> Find the right account</h2>
                </div >
                <div  className="b-d b-2">
                    <h2>02. Choose the right credit card</h2>
                </div>
                <div  className="b-d b-3">
                    <h2>03. Grow your saving tax-free</h2>
                </div>
                <div  className="b-d b-4">
                    <h2>04. Step Up your saving</h2>
                </div>
            </div>


            <div className="c-d d-flex">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Step Up your saving</h5>
                        <p className="card-text">See how with our CD Ladder tool</p>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Recent retail security breaches</h5>
                        <p className="card-text">Learn how we protect you</p>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">New features in mobile banking</h5>
                        <p className="card-text">Accessing Your Account is Easier</p>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">View our rates</h5>
                        <p className="card-text">Save more with us Saving & CD accounts</p>
                    </div>
                </div>
            </div>


            <div className="a-management">
                <Row>
                    <Col lg={3}>
                        <h1>Personal Banking</h1>
                        <p>Praesent vestibulum aenean noummy endrerit mauris.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes ascetur ridiculus mus.</p>
                        <ul>
                            <li>Checking accounts</li>
                            <li>Savings accounts and CDs</li>
                            <li>Debit, credit, prepaid and gift cards</li>
                            <li>MB residential mortgages</li>
                            <li>Loans</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h1>Business banking</h1>
                        <p>Praesent vestibulum aenean noummy endrerit mauris.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes ascetur ridiculus mus.</p>
                        <ul>
                            <li>Checking accounts</li>
                            <li>MB Business Money Market Account</li>
                            <li>Credit and debit cards</li>
                            <li>Treasury Management</li>
                            <li>Solutions for growing your business</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h1>Wealth Management</h1>
                        <p>Praesent vestibulum aenean noummy endrerit mauris.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes ascetur ridiculus mus.</p>
                        <ul>
                            <li>Private Banking</li>
                            <li>Investments</li>
                            <li>Personal Trust and Estate Services</li>
                            <li>Institutional Trust and Retirement</li>
                            <li>Plan Services</li>
                            <li>Research and commentary</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h1>Sweet banking</h1>
                    </Col>
                </Row>
            </div>

            <div className="more">
                <div className="breadcrumbs-1 d-flex">
                    <div  className="b-d-m b-2">
                        <h2>Money maker</h2>
                        <span className="s-1">0.85%APY**</span>
                    </div>
                    <div  className="b-d-m b-3">
                        <h2>CD</h2>
                        <span className="s-2">1.05%APY**</span>
                    </div>
                    <div  className="b-d-m b-4">
                        <h2>High Yield Savings</h2>
                        <span className="s-3">0.90%APY**</span>
                    </div>
                </div>

                <div className="news-letter d-flex">
                    <p>Sign up to receive bank`s & financial news:</p>

                </div>
                <footer className="footer text-center text-md-start">
                    <div className="container p-4">
                        <Row>
                            <Col className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase f-h">Barclays</h5>
                            </Col>

                            <Col className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-0">Tools & Calculators</h5>

                                <ul className="list-un-styled mb-0">
                                    <li>
                                        <a href="" className="text-white">Foreign Exchange</a>
                                    </li>
                                    <li>
                                        <a href="" className="text-white">Credit Card Selector</a>
                                    </li>
                                    <li>
                                        <a href="" className="text-white">Account Selector</a>
                                    </li>
                                    <li>
                                        <a href="" className="text-white">Mortgage Payment Calculator</a>
                                    </li>
                                </ul>
                            </Col>

                            <Col className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-0">Customer service</h5>

                                <ul className="list-un-styled">
                                    <li>
                                        <a href="" className="text-white">Apply Online</a>
                                    </li>
                                    <li>
                                        <a href="" className="text-white">Branch & ATM Locator</a>
                                    </li>
                                    <li>
                                        <a href="" className="text-white">Send us an Email</a>
                                    </li>
                                    <li>
                                        <a href="" className="text-white">Voluntary Codes</a>
                                    </li>
                                </ul>
                            </Col>

                        </Row>

                    </div>
                </footer>
            </div>
        </div>

    );
}

export default Home;
