import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { isLoadingApi, loadData, isError } from './reducers';

function App({ data, isLoading, records }) {
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {console.log('records=', records)}
    </>
  );
}

/**
 * can use useSelector hooks
 */
const mapStateToProps = state => {
  const { records, isLoading } = state.global || {};

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
    data: () => dispatch(isLoadingApi(true))
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(App);
