import React from 'react';

class PropertyItem extends React.Component {
  render() {
    return (
      <div>
      	<div className="property-item">
          	<div className="property-title property-info">Property Name</div>
          	<div className="property-title property-info">User Rating</div>
          	<div className="property-title property-info">Sleeps Max</div>
          	<div className="property-title property-info">Sleeps Comfortably</div>
          	<div className="property-title property-info">Tiebreaker</div>
          </div>
      {this.props.data.map(function(item){
        return (
          <div key={item.id} className="property-item">
          	<div className="property-info name">{item.title}</div>
          	<div className="property-info">{item.user_rating}</div>
          	<div className="property-info">{item.sleeps_max}</div>
          	<div className="property-info">{item.sleeps_comfortably}</div>
          	<div className="property-info">{item.tiebreaker_sort}</div>
          </div>
        );
      })}
      </div>
    );
  }
}

export default PropertyItem;