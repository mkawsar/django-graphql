import React, {Component} from 'react';
import Footer from "../lib/Footer";

class List extends Component {
    componentDidMount() {
        document.title = 'Author List'
    }

    render() {
        return (
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
                            <div className="col-sm-12 features-box wow">
                                <ul className="list-group">
                                    <li className="list-group-item">These Boots Are Made For Walking</li>
                                    <li className="list-group-item">Eleanor, Put Your Boots On</li>
                                    <li className="list-group-item">Puss 'n' Boots</li>
                                    <li className="list-group-item">Die With Your Boots On</li>
                                    <li className="list-group-item">Fairies Wear Boots</li>
                                </ul>
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