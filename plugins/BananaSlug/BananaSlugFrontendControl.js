/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

const ReactDOM = require('react-dom');
const React = require('react');

const immutable = require('immutable');

const  {PropTypes} = React;

const State = immutable.Record({
  enabled: false,
});

class BananaSlugFrontendControl extends React.Component {
  constructor(props) {
    super(props);
    this._toogle = this._toogle.bind(this);
    this._defaultState = new State();
  }

  componentDidMount(): void {
    if (!this.props.state !== this._defaultState) {
      this.props.onChange(this._defaultState);
    }
  }

  render() {
    var state = this.props.state || this._defaultState ;
    return (
      <div style={styles.container} onClick={this._toogle} tabIndex={0}>
        <input
          style={styles.checkbox}
          type="checkbox"
          checked={state.enabled}
          readOnly={true}
        />
        <span>trace react updates</span>
      </div>
    );
  }

  _toogle() {
    var state = this.props.state || this._defaultState;
    var nextState = state.merge({
      enabled: !state.enabled,
    });

    this.props.onChange(nextState);
  }
}

var styles = {
  checkbox: {
    pointerEvents: 'none',
  },
  container: {
    WebkitUserSelect: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'arial',
    fontSize: '12px',
    outline: 'none',
    userSelect: 'none',
  },
};

module.exports = BananaSlugFrontendControl;