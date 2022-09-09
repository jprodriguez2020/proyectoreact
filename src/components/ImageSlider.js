import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function ImageSlider() {
    <><div className="container mt-5 carousel"></div><h1 className="slider_title">Our Services</h1></>  
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    return (        
        <Slider {...settings}>           
               <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://t3.ftcdn.net/jpg/03/17/25/52/240_F_317255269_g3wQcTo7oeE22RcsdzLLNRq2rKEdlr3H.jpg" alt='t' />
                        </div>
                        <div className="details">
                            <h4>Anything for your dog </h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://media.istockphoto.com/photos/funny-white-cat-in-black-sunglasses-and-an-shirt-lies-on-a-fabric-picture-id1363576252?k=20&m=1363576252&s=612x612&w=0&h=zlyspLsNYShXHZ78gbGCHdGiLHQfB3K8XDMStL8R2gU=" alt='y' />
                        </div>
                        <div className="details">
                            <h4>Anything for your cat </h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://media.istockphoto.com/photos/chocolate-labrador-puppy-sitting-in-large-dog-bowl-5-weeks-old-picture-id866757708?k=20&m=866757708&s=612x612&w=0&h=6GVullLFU_d9utDxh06l1LIYB6Xy-qteYmg3uEDFaqc=" alt='t' />
                        </div>
                        <div className="details">
                            <h4>Things for your puppy</h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://images.unsplash.com/photo-1616492999534-afcb90752016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGp1Z3VldGVzJTIwcGFyYSUyMG1hc2NvdGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt='y' />
                        </div>

                        <div className="details">
                            <h4>Toys and accessories</h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://media.istockphoto.com/photos/british-shorthair-cat-on-colored-background-picture-id1052960618?k=20&m=1052960618&s=612x612&w=0&h=eWs4LN2h2eiLJxX2vA5rQXX0bvjq6m0wu6pJxbblVHM=" alt='t' />
                        </div>
                        <div className="details">
                            <h4>Team Shop </h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzY290YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt='t' />
                        </div>
                        <div className="details">
                            <h4>PetsHotel </h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://media.istockphoto.com/photos/cavalier-king-charles-spaniel-dog-grooming-session-picture-id969097426?k=20&m=969097426&s=612x612&w=0&h=cWo5VUxeWnnqoBkGel-b1n0_yWXh6wzZcnjVCevCldY=" alt='t' />
                        </div>
                        <div className="details">
                            <h4>Grooming Salon </h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://media.istockphoto.com/photos/bumble-bee-kitty-cat-holding-flower-on-yellow-picture-id1321168552?k=20&m=1321168552&s=612x612&w=0&h=Pe6BbN3yTk7XrKx78N-rDXprE_nsNKtX1UQqEgUnkac=" alt='t' />
                        </div>
                        <div className="details">
                            <h4>Reptile Kits </h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://t3.ftcdn.net/jpg/04/89/83/32/240_F_489833270_7ZItV5OgTDQ6a0iv69oJo7oZynydKErg.jpg" alt='t' />
                        </div>
                        <div className="details">
                            <h4>Veterinary Services </h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://media.istockphoto.com/photos/fashionista-puppy-jack-russell-terrier-girl-wakes-up-on-a-pink-near-picture-id1227487330?k=20&m=1227487330&s=612x612&w=0&h=k_sTWU6n_pBptHgqGmqSEu2hEPKJhZq-gn8xNqGlibo=" alt='t' />
                        </div>
                        <div className="details">
                            <h4>Dog Training</h4>
                            <a href='/' className="job-title">Learn more</a>
                        </div>
                    </div>
                </div>
            </Slider>
    )
}

export default ImageSlider