import React from 'react';
import drawerImage from '../../../images/drawers.jpg';
import avatar from '../../../images/avatar-michelle.jpg';
import shareIcon from '../../../images/icon-share.svg';
import '../CardContent/CardContent.css'
import Share from '../Share/Share';

export const CardContent = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={drawerImage} alt="Furniture drawer" />
      </div>
      <div className="card-body">
        <h1 className="card-title">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="card-description">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        {/* Footer */}
        <div className="card-footer">
          <div className="user-section">
            <div className="avatar-wrapper">
            </div>
            <div className="user-details">
              <h3 className="user-name">Michelle Appleton</h3>
              <p className="date">28 Jun 2020</p>
            </div>
          </div>
          <div className="share-button">
            <img src={shareIcon} alt="Share Icon" />
          </div>
          <Share/>
        </div>
      </div>
    </div>
  );
};
