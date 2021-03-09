import React from "react";
import { FullScreenWrapper } from "../../style/FullScreenWrapper";
import Navigation from "../Nav/Navigation";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Rank = ({ user }) => {
  return (
    <>
      {!user.name && <Redirect to="/" />}
      <FullScreenWrapper>Rank</FullScreenWrapper>
      <Navigation />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Rank);
