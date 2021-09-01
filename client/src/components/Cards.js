import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1531111827304-9256cf7397c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80'
              text='Explore the hidden activities deep inside the Amazon Jungle'
              label='Adventure'
              path='/carda'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1443181994330-3e365ff8949e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=501&q=80'
              text='Travel through the Islands in a Private Cruise'
              label='Luxury'
              path='/cardb'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1616876798755-5841e0d4ddf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/cardc'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1597250861267-429663f244a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
              text='Experience Rock Climbing on Top of the Mountains'
              label='Adventure'
              path='/cardd'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1584652868574-0669f4292976?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
              text='Experience World Famous Museum'
              label='Adrenaline'
              path='/carde'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
