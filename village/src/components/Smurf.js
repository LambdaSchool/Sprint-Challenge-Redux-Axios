import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Smurf extends Component {
  goodbyeSmurf = () => {
    this.props.goodbyeSmurf(this.props.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="Smurf">
        <span
          style={{ color: 'red', cursor: 'pointer', fontWeight: 'bold' }}
          onClick={this.goodbyeSmurf}
        >
          X
        </span>
        {this.props.location.pathname !== '/' ? (
          <h3>{this.props.name}</h3>
        ) : (
          <Link to={`/smurf/${this.props.id}`}>
            <h3>{this.props.name}</h3>
          </Link>
        )}
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

// withRouter is needed here to be able to use Route props, namely the history object, location object, and match object.

export default withRouter(Smurf);
