import React from "react";
import PropTypes from 'prop-types';
import { NotificationStyle } from './Notification.styled';


function Notification({title}) {
    return (
      <div>
        {title && <NotificationStyle>{title}</NotificationStyle>}
      </div>
    );
  }
  
  Notification.propTypes = {
    title: PropTypes.string,
  };
  
  export default Notification;
  