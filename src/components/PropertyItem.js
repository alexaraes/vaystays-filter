import React from 'react';

const PropertyItem = (property) => {
	return (
		<div className="gif-item">
			<span>{property.property.title}</span>
			<span>{property.property.user_rating}</span>
			<span>{property.property.sleeps_comfortably}</span>
			<span>{property.property.sleeps_max}</span>
		</div>
	)
};

export default PropertyItem;