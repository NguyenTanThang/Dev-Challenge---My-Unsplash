import React, { Component } from 'react';
import {firebaseFirestore} from "../config/base";

import Navbar from "../components/partials/Navbar";
import PictureList from "../components/picture/PictureList";

export default class HomePage extends Component {

    state = {
        pictureList: [],
        searchName: ""
    }

    componentDidMount() {
        let data = [];
        firebaseFirestore.collection("pictures").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                data = [{
                    id: doc.id,
                    ...doc.data()
                }, ...data];
            });
            console.log(data);
            this.setState({
                pictureList: data
            })
        });
    }

    changeSearchName = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {pictureList, searchName} = this.state;
        const {changeSearchName} = this;
        let currentPictureList = pictureList;

        currentPictureList = currentPictureList.filter(currentPictureItem => {
            return currentPictureItem.title.toLowerCase().includes(searchName.toLowerCase());
        })
        
        return (
            <div>
                <Navbar searchName={searchName} changeSearchName={changeSearchName}/>
                <PictureList pictureList={currentPictureList}/>
            </div>
        )
    }
}
