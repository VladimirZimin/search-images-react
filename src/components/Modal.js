import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      this.props.onClose();
    }
  };

  handleClickOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, tags } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.handleClickOverlay}>
        <div className="Modal">
          <img src={largeImage} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
