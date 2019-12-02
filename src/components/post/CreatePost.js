import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: ""
    };
  }
  onFieldChange(event) {
    [event.target.name] = event.target.value;
  }
  onSubmitCreate(event) {
    event.preventDefault();
    const body = {
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId
    };
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios
      .post("/", {
        body,
        config
      })
      .then(response => {
        console.log(response);
        this.push.history("/dashboard");
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="col-md-6 col-md-offset-4">
        <h3>Create Post</h3>
        <form onSubmit={this.onSubmitCreate}>
          <div>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.onFieldChange}
              placeholder="Post Title"
            />
          </div>
          <div>
            <textarea
              name="text"
              cols="30"
              rows="5"
              placeholder="Create a post"
              onChange={this.onFieldChange}
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Create Post"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(CreatePost);
