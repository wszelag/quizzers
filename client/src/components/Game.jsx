import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { userLogout } from "../redux/actions";
import Navigation from "./Nav/Navigation";
import { FullScreenWrapper } from "../style/FullScreenWrapper";

const Game = ({ user, userLogout }) => {
  return (
    <>
      {!user.name && <Redirect to="/" />}
      <FullScreenWrapper>
        Game
        <button onClick={() => userLogout()}>logout</button>
        <Navigation />
      </FullScreenWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  userLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
