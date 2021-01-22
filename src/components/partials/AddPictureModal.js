import React, { Component } from 'react';
import { Modal } from 'antd';
import {firebaseFirestore} from "../../config/base";

export default class AddPictureModal extends Component {

    state = {
        isVisible: false,
        title: "",
        imageURL: ""
    }

    showModal = () => {
        this.setState({
            isVisible: true,
            title: "",
            imageURL: ""
        })
    };

    handleOk = () => {
        this.handleSubmit();
        this.setState({
            isVisible: false
        })
    };

    handleCancel = () => {
        this.setState({
            isVisible: false
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const {title, imageURL} = this.state;
        // Add a new document with a generated id.
        firebaseFirestore.collection("pictures").add({
            title,
            imageURL
        })
        .then(function(docRef) {
            console.log(docRef);
            console.log("Document written with ID: ", docRef.id);
            window.location.reload();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            alert(error.message);
        });
    }

    render() {
        const {isVisible, title, imageURL} = this.state;
        const {showModal, handleOk, handleCancel, handleChange, handleSubmit} = this;

        return (
            <>
                <button className="btn btn-primary btn-block" onClick={showModal}>
                    Add a photo
                </button>
                <Modal title="Add a new photo" visible={isVisible} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <button className="btn btn-light" key="back" onClick={this.handleCancel}>
                      Cancel
                    </button>,
                    <button className="btn btn-primary" key="submit" type="submit" onClick={this.handleOk}>
                      Submit
                    </button>,
                  ]}
                >
                    <form className="add-picture-form" id="add-picture-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Label</label>
                            <input className="form-control" id="title" name="title" onChange={handleChange} placeholder="Suspendisse elit massa" required value={title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageURL">Photo URL</label>
                            <input className="form-control" id="imageURL" name="imageURL" onChange={handleChange} placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..." required value={imageURL}/>
                        </div>
                    </form>
                </Modal>
            </>
        )
    }
}
