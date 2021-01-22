import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import {firebaseFirestore} from "../../config/base";

export default class DeletePictureModal extends Component {

    state = {
        isVisible: false,
        loading: false
    }

    showModal = () => {
        this.setState({
            isVisible: true
        })
    };

    handleOk = () => {
        this.handleDelete();
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

    handleDelete = (e) => {
        firebaseFirestore.collection("pictures").doc(this.props.pictureID).delete().then(function() {
            console.log("Document successfully deleted!");
            window.location.reload();
        }).catch(function(error) {
            console.error("Error removing document: ", error);
            alert(error.message);
        });
    }

    render() {
        const {isVisible, loading} = this.state;
        const {showModal, handleOk, handleCancel} = this;

        return (
            <>
                <button className="btn btn-outline-danger" onClick={showModal}>
                    Delete
                </button>
                <Modal title="Are you sure?" visible={isVisible} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <button className="btn btn-light" key="back" onClick={this.handleCancel}>
                      Cancel
                    </button>,
                    <button className="btn btn-danger" key="submit" onClick={this.handleOk}>
                      Delete
                    </button>,
                  ]}
                >
                    <p>Once deleted the item cannot be recovered</p>
                </Modal>
            </>
        )
    }
}
