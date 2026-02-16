import React from 'react'
import '../styles/SideBar.css'
import '../styles/ALL.css'

const SideBar = ({filters,setFilters}) => {
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFilters(prev => ({...prev,[name]:value}))
    };

    const handleClear = (e) =>{
        setFilters({
            category : 'all',
            curr_price : 'all',
            color : 'all',
            rating: 'all'
        })
    };

    

    return (
        <div>
            <div className="cats">
                <h2>Category</h2>
                <form action="">
                <div className='radio-cat'>
                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='category' value='all' checked={filters.category==="all"} onChange={handleChange} />
                        <span className='checkmark'></span>All
                        
                    </label>
                    </div>
                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='category' value='Electronics' checked={filters.category==="Electronics"} onChange={handleChange} />
                         <span className='checkmark'></span>Electronics
                        
                       </label>
                    </div>
                     <div>
                    <label className='sidebar-label-container'>
                         <input type="radio" name='category' value='Bag' checked={filters.category === "Bag"} onChange={handleChange} />
                         <span className='checkmark'></span>Bags
                       
                       </label>
                    </div>
                    <div>
                    <label className='sidebar-label-container'>
                         <input type="radio" name='category' value='Clothing' checked={filters.category === "Clothing"} onChange={handleChange} />
                        <span className='checkmark'></span>Clothing
                       
                        
                    </label>
                    </div>
                     <div>
                    <label className='sidebar-label-container'>
                         <input type="radio" name='category' value='Footwear' checked={filters.category === "Footwear"} onChange={handleChange} />
                        <span className='checkmark'></span>Footwear
                    </label>
                    </div>

                     <div>
                    <label className='sidebar-label-container'>
                         <input type="radio" name='category' value='Accessories' checked={filters.category === "Accessories"} onChange={handleChange} />
                        <span className='checkmark'></span>Accessories
                    </label>
                    </div>
                </div>
                </form>
            </div>

            {/* Prices */}
            <div className="cats">
               
                <h2>Price</h2>
                 <form action="">
                <div className='radio-cat'>
                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='curr_price' value='all' checked={filters.curr_price === "all"} onChange={handleChange}/>
                        <span className='checkmark'></span>All
                        
                    </label>
                    </div>
                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='curr_price' value='under1000' checked={filters.curr_price === "under1000"} onChange={handleChange}/>
                         <span className='checkmark'></span>Under ₹1000
                       </label>
                    </div>

                     <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='curr_price' value='1000-2000' checked={filters.curr_price === "1000-2000"} onChange={handleChange} />
                         <span className='checkmark'></span>₹1000 - ₹2000
                        
                       </label>
                    </div>

                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='curr_price' value='2000-3000' checked={filters.curr_price === "2000-3000"} onChange={handleChange}/>
                        <span className='checkmark'></span>₹2000 - ₹3000
                    </label>
                    </div>

                     <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='curr_price' value='above3000' checked={filters.curr_price === "above3000"} onChange={handleChange}/>
                        <span className='checkmark'></span>Above ₹3000
                    </label>
                    </div>
                   
                </div>
                 </form>


            </div>
            <div className="cats">
                <h2>Colors</h2>
                    <form action="">
                  <div className='radio-cat'>
                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='color' value='all' checked={filters.color === "all"} onChange={handleChange} />
                        <span className='checkmark'></span>All
                        
                    </label>
                    </div>
                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='color' value='red' checked={filters.color === "red"} onChange={handleChange}/>
                         <span className='checkmark'></span>Red
                        
                       </label>
                    </div>
                     <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='color' value='black' checked={filters.color === "black"} onChange={handleChange}/>
                         <span className='checkmark'></span>Black
                        
                       </label>
                    </div>
                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='color' value='grey' checked={filters.color === "grey"} onChange={handleChange} />
                        <span className='checkmark'></span>Gray
                    </label>
                    </div>

                     <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='color' value='white' checked={filters.color === "white"} onChange={handleChange}/>
                        <span className='checkmark'></span>White
                    </label>
                    </div>

                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='color' value='brown' checked={filters.color === "brown"} onChange={handleChange} />
                        <span className='checkmark'></span>Brown
                    </label>
                    </div>

                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='color' value='blue' checked={filters.color === "blue"} onChange={handleChange}/>
                        <span className='checkmark'></span>Blue
                    </label>
                    </div>
                </div>
            </form>
            </div>


            {/* Rating */}

             <div className="cats">
                <h2>Rating</h2>
                <form action="">
                <div className='radio-cat'>
                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='rating' value='all' checked={filters.rating === 'all'} onChange={handleChange} />
                        <span className='checkmark'></span>All
                        
                    </label>
                    </div>
                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='rating' value='4.5' checked={filters.rating === '4.5' }  onChange={handleChange}/>
                         <span className='checkmark'></span> 4.5★ & up
                       </label>
                    </div>

                     <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='rating' value='4.0' checked={filters.rating === '4.0'} onChange={handleChange} />
                         <span className='checkmark'></span> 4.0★ & up
                        
                       </label>
                    </div>

                    <div>
                    <label className='sidebar-label-container'>
                        <input type="radio" name='rating' value='3.5' checked={filters.rating === '3.5'} onChange={handleChange} />
                        <span className='checkmark'></span> 3.5★ & up
                    </label>
                    </div>

                </div>

                
                <div className="clear-btn">
                <button type="button" OnClick={handleClear}>
                    Clear
                </button>
            </div>
</form>
            </div>
        
            
        </div>
    )
}

export default SideBar
