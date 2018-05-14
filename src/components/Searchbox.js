import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <div>
       <input className='pa3 ba b--green bg-lightest-blue'
        type='text' 
        placeholder='search' 
        onChange = {searchChange}
        />
    </div>
    );
}
export default Searchbox;