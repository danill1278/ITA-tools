import React from 'react';
import './TileItem.css';
import Title from '../../../../../shared/Title/Title';

interface Props {
  tile: any;
}

const TileItem: React.FC<Props> = ({ tile }) => {
  return (
    <div className="tiles__tile">
      <Title variant="h3" text={ tile.name } />
      <i className={ `icon ${tile.icon}` }></i>
      <p>{ tile.text }</p>
    </div>
  )
}

export default TileItem;