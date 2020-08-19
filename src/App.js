import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
//import { fetchData } from "./actions";
import { isLoadingApi, loadData, isError } from "./reducers";
function App({  data, isLoading, records, loadDdata }) {
  useEffect(() => {
    if (!records.length) {
    data();
    }
  });
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {console.log("records=", records)}
    </div>
  );
}
/**
 * can use useSelector hooks
 */
const mapStateToProps = state => {
  const { records, isLoading } = state.global;
  return {
    records,
    isLoading
  };
};

/**
 * can use useDispach hooks
 */
const mapDispatch = dispatch => {
  return {
    data: () => dispatch(isLoadingApi())
  };
};
export default connect(
  mapStateToProps,
  mapDispatch
)(App);
