import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  Button,
  Content,
  Backdrop,
  CloseButton,
  TextContent,
  BtnContainer,
  CloseIcon,
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  closeModal = e => {
    this.props.onClose();
  };

  toAgree = e => {
    this.props.toAgree();
  };

  render() {
    const textContent = this.props.text;
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <Content>
          <CloseButton type="button" onClick={this.closeModal}>
            <CloseIcon width="12" height="12" />
          </CloseButton>
          <TextContent>{textContent}</TextContent>
          <BtnContainer>
            <Button
              type="button"
              onClick={this.toAgree}
            >
              ДА
            </Button>
            <Button type="button" onClick={this.closeModal}>
              НЕТ
            </Button>
          </BtnContainer>
        </Content>
      </Backdrop>,
        modalRoot
    );
  }
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  toAccept: PropTypes.func,
};
