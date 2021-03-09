import React from "react";
import { userLogout } from "../../redux/actions";
import { connect } from "react-redux";

const Profile = ({ userLogout }) => {
  return (
    <>
      <section>
        Profile
        <button onClick={() => userLogout()}>klik</button>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
