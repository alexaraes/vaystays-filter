import React from 'react';
import PropertyItem from './PropertyItem';

const PropertiesList = (props) => {
  const propertyItems = props.properties.map((property) => {
    return <PropertyItem key={property.id} property={property} />
  });

  return (
    <div className="gif-list">{propertyItems}</div>
  );
};

export default PropertiesList;