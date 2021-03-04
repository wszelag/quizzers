import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { userLogout } from "../redux/actions";

const Game = ({ user, userLogout }) => {
  return (
    <>
      {!user.name && <Redirect to="/" />}
      <section>Game</section>
      <button onClick={() => userLogout()}>logout</button>
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
