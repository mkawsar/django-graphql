import React, {Component} from 'react';
import Footer from "../lib/Footer";

class List extends Component{
    componentDidMount() {
        document.title = 'Author List'
    }

    render() {
        return(
            <div>
                <div className="features-container section-container">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12 features section-description wow fadeIn">
                                <h2>Author List</h2>
                                <div className="divider-1">
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 features-box wow fadeInLeft">
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default List;