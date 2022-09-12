import Info from './Info';
import './Learnmore.css';


const LearnMore = () => {
  return (

    <div className='container-info grid grid-cols-1 '>                                                                  
           <div className='item'>
               <div className='content'>  
                   <h3>{Info[0].title}</h3>
                   <p> {Info[0].description}</p>
               </div>  
            </div>                                              
     </div>       
              
                               
  )
}

export default LearnMore