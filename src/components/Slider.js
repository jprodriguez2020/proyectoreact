
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import {Link} from "react-router-dom";

function ImageSlider() {
   <div className='container mt-5 carousel'>
   <h1 className='slider_title'>Our Services</h1></div>

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
          breakpoint: 700,
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
    }
 
 
 return (
  <Slider {...settings}>       
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src="https://media.istockphoto.com/photos/british-shorthair-cat-on-colored-background-picture-id1052960618?k=20&m=1052960618&s=612x612&w=0&h=eWs4LN2h2eiLJxX2vA5rQXX0bvjq6m0wu6pJxbblVHM=" alt='gato'/>
                </div>
                <div className="details">
                    <h4>Anything for your cat</h4>                    
                    <Link to= "/LearnMore" className="job-title">Learn more</Link>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
             <div className="card">
                 <div className="card-image">
                     <img src="https://media.istockphoto.com/photos/chinese-crested-dog-picture-id882140760?k=20&m=882140760&s=612x612&w=0&h=2_z5VO_4vGFAvhreM5dR6MS9-qv9uJadosRi-bq47kY="alt='perro' />
                  </div>
                  <div className="details">
                      <h4>Anything for your dog</h4>
                      <Link to= "/LearnMore" className="job-title">Learn more</Link>
                   </div>
              </div>
        </div>
        <div className="card-wrapper">
             <div className="card">
                 <div className="card-image"> 
                     <img src="https://media.istockphoto.com/photos/photo-of-a-saffron-finch-perched-on-a-green-lawn-background-in-the-picture-id1256024780?k=20&m=1256024780&s=612x612&w=0&h=gvXx8r5lOhFXXyyzn0i03DqKxnr43LelJiA1_yktRYU=" alt='pajaro' />
                  </div>
                  <div className="details">
                      <h4>Team Shops</h4>
                      <Link to= "/LearnMore" className="job-title">Learn more</Link>
                   </div>
             </div>
        </div>  
       <div className="card-wrapper">
           <div className="card">
               <div className="card-image">                 
                   <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzY290YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt='perro'/>
                </div>
                <div className="details">
                     <h4>Special accessories</h4>
                     <Link to= "/LearnMore" className="job-title">Learn more</Link>
                </div>
           </div>
       </div>
       <div className="card-wrapper">
            < div className="card">
                <div className="card-image">
                   <img src="https://media.istockphoto.com/photos/veiled-chameleon-closeup-picture-id856713478?k=20&m=856713478&s=612x612&w=0&h=UevWQKzgd2iTueCe5sCPDKWyhl-wtUF5oy3QytC1N4g="alt='camaleon' />
                </div>
                <div className="details">
                   <h4>Reptile kits</h4>
                   <Link to= "/LearnMore" className="job-title">Learn more</Link>
                </div>
            </div>
       </div>
       <div className="card-wrapper">
            <div className="card">
               <div className="card-image">
                  <img src="https://media.istockphoto.com/photos/professional-cares-for-a-dog-in-a-specialized-salon-groomers-holding-picture-id1199583949?k=20&m=1199583949&s=612x612&w=0&h=8GTp96byKJ2uPsxgTxGBce_PT4uWqGp8Wf8vG8WoVYU="alt='perro' />
                </div>
                <div className="details">
                  <h4>Grooming Salon </h4>
                  <Link to= "/LearnMore" className="job-title">Learn more</Link>
               </div>
            </div>
       </div>
       <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src="https://media.istockphoto.com/photos/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-picture-id1322123064?k=20&m=1322123064&s=612x612&w=0&h=jCfkW9_GW2C0LUE3B4BnrlxYWiLyIu1redeK2V96-jY="alt='gato' />
               </div>
                <div className="details">
                     <h4>Pets Hotel</h4>
                     <Link to= "/LearnMore" className="job-title">Learn more</Link>
                 </div>                                           
           </div>
       </div>
       <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                   <img src="https://media.istockphoto.com/photos/sick-ill-dog-picture-id474077956?k=20&m=474077956&s=612x612&w=0&h=Qkgy9crfnFK1VdbKjvn9DbRMipLUNRWbImN7ApgnjDA=" alt='perro' />
                </div>
                <div className="details">
                     <h4>Veterinary Services</h4>
                     <Link to= "/LearnMore" className="job-title">Learn more</Link>
                </div>
            </div>    
       </div>
        <div className="card-wrapper">
             <div className="card">
                  <div className="card-image">
                     <img src='https://media.istockphoto.com/photos/dog-as-easter-bunny-inside-pink-colored-egg-on-green-background-picture-id1387654729?k=20&m=1387654729&s=612x612&w=0&h=RS-fql6t90kR27O55yHMHFZGhsLRgEnz7ULMhLH79Rw=' alt='perro'/>
                  </div>
                  <div className="details">
                      <h4>Dog Spa</h4>
                      <Link to= "/LearnMore" className="job-title">Learn more</Link>
                  </div>
              </div>
        </div>
         <div className="card-wrapper">
              <div className="card">
                  <div className="card-image">                              
                     <img src="https://media.istockphoto.com/photos/dog-holding-a-bouquet-of-tulips-in-his-teeth-on-a-pink-background-picture-id1369757652?k=20&m=1369757652&s=612x612&w=0&h=C2B1YO_58g41PwLUlZv8n_uyN8kvZuWzbH1ImTq5CBg=" alt='perro'/>
                  </div>
                  <div className="details">
                     <h4>Dog Training</h4>
                     <Link to= "/LearnMore" className="job-title">Learn more</Link>
                  </div>
              </div>            
         </div>                   
  </Slider>
 )
} 
export default ImageSlider;