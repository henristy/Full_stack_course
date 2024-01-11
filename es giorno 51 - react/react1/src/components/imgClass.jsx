import { Component } from "react";

export default class ImageComponent extends Component {
    render() {
        return (
            <img src={this.props.imgSrc} alt={this.props.imgDesc} />
        )
    }
}