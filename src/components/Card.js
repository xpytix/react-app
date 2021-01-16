import React from 'react';
import "./Card.css"
import CardItem from './CardItem';
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';
import img4 from '../Images/4.jpg';
import img5 from '../Images/5.jpg';
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={img1}
                            text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={img2}
                            text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={img3}
                            text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={img4}
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={img5}
                            text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
