import React from 'react';

function Scrap() {
    return (
        <div className='Scrap'>
            <div className='title'>
                <div className='page_name'>
                    <h1>Scrap</h1>
                </div>
                <div className='scrap_name'>
                    <h1>later</h1>
                </div>
            </div>

            <div className='filter'>
                <img src='/filter.png' alt='filter' />
                <span>Filter</span>
            </div>
            <div className='line'>
                <img src='/line.png' alt='line' />
            </div>
            <div className='checkboxes'>
                <div>
                    <img className='checkbox' src='/box_empty.png' alt='box_empty' />
                    <span>Main dishes</span>
                </div>
                <div>
                    <img className='checkbox' src='/box_empty.png' alt='box_empty' />
                    <span>Side dishes</span>
                </div>
                <div>
                    <img className='checkbox' src='/box_empty.png' alt='box_empty' />
                    <span>Dessert</span>
                </div>
                <div>
                    <img className='checkbox' src='/box_empty.png' alt='box_empty' />
                    <span>Meat</span>
                </div>
                <div>
                    <img className='checkbox' src='/box_empty.png' alt='box_empty' />
                    <span>Fish</span>
                </div>
                <div>
                    <img className='checkbox' src='/box_empty.png' alt='box_empty' />
                    <span>Seafood</span>
                </div>
                <div>
                    <img className='checkbox' src='/box_empty.png' alt='box_empty' />
                    <span>Vegetable</span>
                </div>
                <div>
                    <img className='checkbox' src='/box_empty.png' alt='box_empty' />
                    <span>Dairy product</span>
                </div>
            </div>

            <div className='search'>
                <input type='text' placeholder='Search'/>
                <img src='/search.png' alt='search' />
            </div>

            <div className='card_container'>
                {[...Array(15)].map((_, i) => (
                    <div key={i} className='card'>
                        <img src='/tteokgalbi.png' alt='tteokgalbi' />
                        <div className='card_info'>
                            <span className='card_title'>떡갈비</span>
                            <div className='card_icons'>
                                <img className='heart' src='/heart_empty.png' alt='heart_empty' />
                                <span className='ingredients'>재료</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Scrap;
