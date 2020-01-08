import React, {Component} from "react";
import Footer from '../lib/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Home'
        };
    }

    componentDidMount() {
        document.title = this.state.title
    }

    render() {
        return (
            <div>
                <div className="features-container section-container">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>Bootstrap Navbar Menu</h2>
                                <div className="divider-1">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 features-box wow fadeInLeft">
                                <div className="row">
                                    <div className="col-sm-3 features-box-icon">
                                        <i className="fa fa-twitter"></i>
                                    </div>
                                    <div className="col-sm-9">
                                        <h3>Ut wisi enim ad minim</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et.
                                            Ut wisi enim ad minim veniam, quis nostrud.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 features-box wow fadeInLeft">
                                <div className="row">
                                    <div className="col-sm-3 features-box-icon">
                                        <i className="fa fa-instagram"></i>
                                    </div>
                                    <div className="col-sm-9">
                                        <h3>Sed do eiusmod tempor</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et.
                                            Ut wisi enim ad minim veniam, quis nostrud.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 features-box wow fadeInLeft">
                                <div className="row">
                                    <div className="col-sm-3 features-box-icon">
                                        <i className="fa fa-magic"></i>
                                    </div>
                                    <div className="col-sm-9">
                                        <h3>Quis nostrud exerci tat</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et.
                                            Ut wisi enim ad minim veniam, quis nostrud.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 features-box wow fadeInLeft">
                                <div className="row">
                                    <div className="col-sm-3 features-box-icon">
                                        <i className="fa fa-cloud"></i>
                                    </div>
                                    <div className="col-sm-9">
                                        <h3>Minim veniam quis nostrud</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et.
                                            Ut wisi enim ad minim veniam, quis nostrud.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;