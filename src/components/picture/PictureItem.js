import React, { Component } from 'react';
import DeletePictureModal from "../partials/DeletePictureModal";

export default class PictureItem extends Component {
    render() {
        const {imageURL, title, id} = this.props.pictureItem;

        return (
            <div className="picture-item">
                <img src={imageURL} alt={title} className="img-fluid"/>
                <div className="picture-item__title">{title}</div>
                <div className="picture-item__delete">
                    <DeletePictureModal pictureID={id}/>
                </div>
            </div>
        )
    }
}
