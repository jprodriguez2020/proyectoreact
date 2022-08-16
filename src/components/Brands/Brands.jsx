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
    <div className="flex items-center">
        <div className="rounded overflow-hidden shadow-lg ">
            {
                brands.map(({title, image, id}) => (
                    <div className ="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 font-dynapuff" key={id}>
                        <CardBrand imageLogo={image} title={title}/>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Brands;