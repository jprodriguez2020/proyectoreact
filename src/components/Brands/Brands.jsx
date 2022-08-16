import React from 'react';
import CardBrand from './CardBrand';
import Proplan from '../../assets/img/Proplan.jpg'
import RoyalCanin from '../../assets/img/RoyalCanin.jpg'
import Pedigree from '../../assets/img/Pedigree.jpg'
import Performance from '../../assets/img/Performance.jpg'
import Excellent from '../../assets/img/Excellent.jpg'
import OldPrince from '../../assets/img/OldPrince.jpg'
import DogChow from '../../assets/img/DogChow.jpg'
import Eukanuba from '../../assets/img/Eukanuba.jpg'


const brands = [
    {
        id: 1,
        title:'Proplan',
        image: Proplan,
    },
    {
        id: 2,
        title:'Royal Canin',
        image: RoyalCanin,
    },
    {
        id: 3,
        title:'Pedigree',
        image: Pedigree,
    },
    {
        id: 4,
        title:'Performance',
        image: Performance,
    },
	{
        id: 5,
        title:'Excellent',
        image: Excellent,
    },
	{
        id: 6,
        title:'Old Prince',
        image: OldPrince,
    },
    {
        id: 7,
        title:'Dog Chow',
        image: DogChow,
    },
	{
        id: 8,
        title:'Eukanuba',
        image: Eukanuba,
    }
]

function Brands() {
  return (
    <div>
        <h2 className ='mt-3 text-4xl font-dynapuff text-center'>BRANDS WE CARRY</h2>
        <div className= "flex flex-row">
            {
                brands.map(({title, image, id}) => (
                    <div className ="font-dynapuff w-60 h-60" key={id}>
                        <CardBrand imageLogo={image} title={title}/>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Brands;