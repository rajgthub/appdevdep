import React, { Component } from "react"
import "../App.css"
import { withStyles } from "@material-ui/core/styles"
// import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent"
import images from "../images"

withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent)

export default class Gallery extends Component {
  state = {
    open: false
  }
  handleClick = ele => {
    const str = "Modal_" + ele
    this[str].style.display = "block"
  }

  handleClose = ele => {
    const str = "Modal_" + ele
    this[str].style.display = "none"
  }
  renderImage = (id, gallery) => (<div className="responsive">
  <div className="gallery">
    <img
      src={gallery}
      className="thumpNail"
      id={"Img_" + id}
      alt="Cinque Terre"
      width="600"
      height="400"
      onClick={e => {
        this.handleClick(id)
      }}
    />
    <div
      id={"Modal_" + id}
      className="modal"
      ref={modal => {
        //   [modal.id]=e.target
        this["Modal_" + id] = modal
        //  this.myModal[modal.id] = modal.id;
      }}
    >
      {/* The Close Button */}
      <span
        className="close"
        onClick={e => {
          this.handleClose(id)
        }}
      >
        &times;
      </span>
      {/* Modal Content (The Image) */}
      <img
        src={gallery}
        className="modal-content"
        id={"img_0" + id}
        alt="children"
      />
      {/* Modal Caption (Image Text) */}
    </div>
  </div>
</div> )
  render() {
    return (
      <div className="row" style={{ padding: "20px" }}>
        {images.map((ele, id) => this.renderImage(id + 1, ele))}
      </div>
    )
  }
}
