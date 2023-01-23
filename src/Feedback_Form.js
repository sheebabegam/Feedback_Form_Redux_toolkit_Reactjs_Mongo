import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReusableInput from "./components/Reusable_Input";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

import { AddFeedback } from "./api/FeedbackAPI";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Feedback_Form(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      des: "",
      det: "",
      email: "",
    },
    validationSchema: yup.object({
      des: yup.string().strict().trim().required("this field required"),
      det: yup.string().strict().trim().required("this field required"),
      email: yup
        .string()
        .email("Enter valid email id")
        .strict()
        .trim()
        .required("this field required"),
    }),

    onSubmit: (data) => {
      console.log(data);
      dispatch(AddFeedback(data));
    },
  });

  return (
    <div>
      <Button onClick={handleOpen} className={classes.button}>
        Feedback Form
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.modal_box}>
          <div className={classes.flex_div}>
            <h2 className={classes.feedback_h2}>Share Your Feedback</h2>
            <div className={classes.close_icon_div} onClick={handleClose}>
              <CloseIcon className={classes.close_icon} />
            </div>
          </div>
          <div>
            <ReusableInput
              label="Short Description"
              name="des"
              value={formik.values.des}
              onChange={formik.handleChange}
            />
            <br />
            <br />
            <TextField
              id="standard-multiline-static"
              label="Write in Details"
              multiline
              rows={4}
              variant="standard"
              style={{ width: 700 }}
              InputLabelProps={{
                style: {
                  fontSize: 12,
                },
              }}
              name="det"
              value={formik.values.det}
              onChange={formik.handleChange}
            />
            <br />
            <br />
            <br />
            <ReusableInput
              label="Email Address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <br />
            <br />
            <br />
            <Button className={classes.attach_btn} component="label">
              <AttachFileIcon className={classes.attch_icon} />
              Attachment
              <input type="file" hidden />
            </Button>
            <br />
            <br />
            <br />
            <Button className={classes.send_btn} onClick={formik.handleSubmit}>
              Send
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Feedback_Form;

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white !important",
    height: 48,
    padding: "0 30px",
    fontWeight: "bold !important",
    marginTop: "50px !important",
  },
  modal_box: {
    borderRadius: "10px !important",
    border: "none !important",
    width: "700px !important",
  },
  flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "-30px !important",
  },
  feedback_h2: {
    color: "#0058ffdb !important",
    textAlign: "left",
  },
  close_icon_div: {
    height: "40px !important",
    width: "40px !important",
    borderRadius: "50% !important",
    backgroundColor: "#0058ffdb !important",
    marginRight: "-25px !important",
    marginTop: "-20px !important",
    cursor: "pointer !important",
  },
  close_icon: {
    padding: "8px !important",
    color: "white !important",
    fontWeight: "bolder !important",
  },
  attch_icon: {
    color: "#0058ffdb !important",
    transform: "rotate(46deg) !important",
    paddingRight: "10px !important",
  },
  attach_btn: {
    borderRadius: "50px !important",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    textTransform: "capitalize !important",
    color: "black !important",
    padding: "10px 30px !important",
    fontSize: "13px !important",
    fontWeight: "bold !important",
  },
  send_btn: {
    backgroundColor: "#0058ffdb !important",
    borderRadius: "50px !important",
    color: "white !important",
    fontSize: "13px !important",
    fontWeight: "bold !important",
    textTransform: "capitalize !important",
    padding: "10px 70px !important",
  },
});
