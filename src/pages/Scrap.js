import React from 'react';

function Scrap() {
  return (
    <div className='Scrap'>
      <div className='title'>
        <div className='page_name'>
          <h1>Scrap</h1>
        </div>
      </div>

      <div className='search'>
        <input type='text' placeholder='Search' />
        <img src='/search.png' alt='search' />
      </div>

      <div className='card_container'>
        <div className='card_row'>
          {[...Array(18)].map((_, i) => (
            <div key={i} className='card'>
              <div className='placeholder'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scrap;
