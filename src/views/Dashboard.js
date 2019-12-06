import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import DahNav from "../components/dashboard/DashNav";
import "../styles/dashboard.css";
import CreatePost from "./PostArticle";
import Feeds from "./FeedPage";
import Postgif from "./PostGif";

const Dashboard = props => {
  const { auth } = props;
  if (!auth.token) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="container">
      <div style={{ display: "", marginTop: "40px", marginBottom: "40px" }}>
        <div className="row dash-row">
          <div className="col-xs-12 col-sm-10">
            <DahNav />
            <div className="dashboard-display">
              <Route exact path="/dashboard" component={Feeds} />
              <Route path="/create-article" component={CreatePost} />
              <Route path="/postgif" component={Postgif} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToprops = state => {
  return {
    auth: state.auth.auth
  };
};

export default connect(mapStateToprops)(Dashboard);
