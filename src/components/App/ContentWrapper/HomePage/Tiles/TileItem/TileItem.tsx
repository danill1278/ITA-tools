import React from 'react';
import './TileItem.css';
import Title from '../../../../../shared/Title/Title';
import { Link } from 'react-router-dom';

interface Props {
  tile: any;
}

const TileItem: React.FC<Props> = ({ tile }) => {
  return (
      <Link to={ tile.path} className="tiles__tile">
        <Title variant="h3" text={ tile.name } />
        <i className={ `icon ${tile.icon}` }></i>
        <p>{ tile.text }</p>
      </Link>
  )
}

export default TileItem;