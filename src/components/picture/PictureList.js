import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import PictureItem from "./PictureItem";

class PictureList extends React.Component {
    render() {
        const {pictureList} = this.props;

        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    {pictureList.map((pictureItem, i) => (
                        <PictureItem pictureItem={pictureItem} key={pictureItem.id}/>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        )
    }
}

export default PictureList;