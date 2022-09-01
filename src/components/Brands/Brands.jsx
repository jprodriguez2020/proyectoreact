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
    <div className= "p-4 bg-themeYellow">
        <h2 className ='mb-2 text-2xl text-center font-dynapuff md:text-4xl'>BRANDS WE CARRY</h2>
        <hr className="w-1/5 mx-auto"/>
        <div className= "grid grid-cols-2 p-8 lg:grid-cols-4 justify-items-center sm:grid-cols-4 md:grid-cols-4 lg:gap-2">
            {
                brands.map(({title, image, id}) => (
                    <div className ="sm:w-24 md:w-32 lg:w-48 font-dynapuff" key={id}>
                        <CardBrand imageLogo={image} title={title}/>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Brands;