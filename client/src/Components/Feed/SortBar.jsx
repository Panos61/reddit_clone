import React from 'react';
import { Card, CardBody } from 'reactstrap';

const SortBar = () => {
  return (
    <>
      <Card id='sort-bar-card' style={{ borderColor: '#cccccc' }}>
        <CardBody>
          <div className='sort-bar-container'>
            <div className='sort-bar-option'>
              <i className='fa fa-rocket' aria-hidden='true'>
                <span>Best</span>
              </i>
            </div>
            <div className='sort-bar-option'>
              <i className='fa fa-fire' aria-hidden='true'>
                <span>Hot</span>
              </i>
            </div>
            <div className='sort-bar-option'>
              <i className='fa fa-sun-o' aria-hidden='true'>
                <span>New</span>
              </i>
            </div>
            {/* <div className='sort-bar-option'>
              <i className='fa fa-bar-chart' aria-hidden='true'>
                <span>Top</span>
              </i>
            </div> */}
            {/* <div className='sort-bar-option'>
              <i className='fa fa-ellipsis-h' aria-hidden='true' />
            </div> */}
            {/* <div className='sort-bar-view'>
              <i className='fa fa-align-justify' aria-hidden='true'></i>{' '}
            </div> */}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default SortBar;
