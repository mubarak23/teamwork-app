import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
//import DahNav from "../components/dashboard/DashNav";
import "../styles/dashboard.css";
import CreatePost from "./PostArticle";
//import Feeds from "./FeedPage";
import DemoFeed from "./DemoFeed";
import PostGif from "./PostGif";

const Dashboard = props => {
  //const { auth } = props;
  //if (!auth.token) {
  // return <Redirect to="/login" />;
  //}
  //Redirect
  return (
    <div className="container">
      <div style={{ display: "", marginTop: "40px", marginBottom: "40px" }}>
        <div className="row dash-row">
          <div className="col-xs-12 col-sm-10">
            <div className="dashboard-display">
              <Route path="/dashboard" component={DemoFeed} />
              <Route path="/dashboard/create-article" component={CreatePost} />
              <Route path="/dashboard/postgif" component={PostGif} />
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
