import React from "react";
import { connect } from "react-redux";
import { getStreams } from "../../actions/index";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="extra content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative right floated"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="card" key={stream.id}>
          <div className="image">
            <img
              alt="Stream Preview Gif"
              src={process.env.PUBLIC_URL + "./placeholder.gif"}
            />
          </div>
          <div className="content">
            <Link className="header" to={`/streams/${stream.id}`}>
              <div className="header">{stream.title}</div>
            </Link>

            <div className="description">{stream.description}</div>
            <div className="ui divider"></div>
            {this.renderAdmin(stream)}
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ marginBottom: "2rem" }}>
          <Link className="ui button primary" to="/streams/create">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="stream-container">
        <h2>All Streams</h2>
        {this.renderCreate()}
        <div className="ui link cards">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { getStreams }
)(StreamList);
