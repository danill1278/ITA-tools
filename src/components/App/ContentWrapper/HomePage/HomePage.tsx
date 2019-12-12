import React from 'react';
import './HomePage.css';
import Tiles from './Tiles/Tiles';
import Title from '../../../shared/Title/Title';

const tiles = [
  {
    id: '001',
    name: 'Shared components',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae?',
    icon: 'icon-cogs',
    path: '/component'
  },
  {
    id: '002',
    name: 'Random1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae?',
    icon: 'icon-cogs',
    path: '/component'
  },
  {
    id: '003',
    name: 'Random4',
    text: 'text',
    icon: 'icon-cogs',
    path: '/component'
  },
  {
    id: '004',
    name: 'Random4',
    text: 'text',
    icon: 'icon-cogs',
    path: '/component'
  },
  {
    id: '005',
    name: 'Random2',
    text: 'text',
    icon: 'icon-cogs',
    path: '/component'
  },
  {
    id: '006',
    name: 'Random4',
    text: 'text',
    icon: 'icon-cogs',
    path: '/component'
  }
];

const HomePage = () => {
  return (
    <div>
      <div className="title">
        <Title variant="h1" text="ITA Tools" primary />
      </div>
      
      <Tiles tiles = { tiles } />
    </div>
  )
}

export default HomePage;