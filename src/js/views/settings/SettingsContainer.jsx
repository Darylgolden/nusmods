import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import classnames from 'classnames';

import availableThemes from 'data/themes.json';
import { NUM_DIFFERENT_COLORS } from 'reducers/theme';

const SettingsContainer = (props) => (
  <div className="settings-container">
    <h1 className="display-4">Settings</h1>
    <hr/>
    <div className="row">
      <div className="col-sm-2">
        <h4>Theme</h4>
      </div>
      <div className="col-sm-10">
        <div className="row">
          {props.availableThemes.map((theme) => {
            return (
              <div className={classnames('col-sm-4 theme-item', {
                [`theme-${theme.id}`]: true,
                'is-selected': props.theme === theme.id,
              })}
                key={theme.id}
              >
                <div>
                  <small>{theme.name}</small>
                </div>
                <ul className="list-unstyled theme-color-list">
                  {_.range(NUM_DIFFERENT_COLORS).map((index) => {
                    return (
                      <li key={index} className={`theme-color-item color-${index}`}/>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

SettingsContainer.propTypes = {
  availableThemes: PropTypes.array,
  theme: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    availableThemes,
    theme: state.theme.id,
  };
}

export default connect(
  mapStateToProps
)(SettingsContainer);
