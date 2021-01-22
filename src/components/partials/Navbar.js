import React, { Component } from 'react';
import logo from "../../img/my_unsplash_logo.svg"

import InputWithIcon from "./InputWithIcon";
import AddPictureModal from "./AddPictureModal";

export default class Navbar extends Component {
    render() {
        const {changeSearchName, searchName} = this.props;

        return (
            <div className="navbar">
                <div className="container">
                    <nav>
                        <div className="navbar-brand">
                            <img src={logo} alt="Logo" className="img-fluid"/>
                        </div>

                        <div className="search-container">
                            <InputWithIcon icon="search" placeholder="Search by name" id="searchName" name="searchName" value={searchName} onChange={changeSearchName}/>
                        </div>

                        <div className="add-picture">
                            <AddPictureModal/>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
