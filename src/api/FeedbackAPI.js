import { REACT_URL } from ".";
import { fillTextAction } from "../redux/Slices/feedbackSlice";

export const AddFeedback = (data) => {
  return (dispatch) => {
    REACT_URL.post("/addfeedback", data).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};
