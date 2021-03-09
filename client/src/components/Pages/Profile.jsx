import React from "react";
import { FullScreenWrapper } from "../../style/FullScreenWrapper";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "../Nav/Navigation";

const Profile = ({ user }) => {
  return (
    <>
      {!user.name && <Redirect to="/" />}
      <FullScreenWrapper>Profile</FullScreenWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
