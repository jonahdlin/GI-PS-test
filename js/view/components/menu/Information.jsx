import React from 'react';
import classNames from 'classnames';

import PathwayCommonsService from '../../../services/pathwayCommons/';

// Information
// Prop Dependencies ::
// uri
export class Information extends React.Component {
  render() {
    return(
      <div className={classNames('Information', (this.props.hidden ? 'hidden' : ''))}>
        {this.props.comments.map((comment, index) => {
          return (
            <div className="comment" key={index}>
              {comment}
              <br/>
              <br/>
            </div>
          );
        })}
      </div>
    );
  }
}
