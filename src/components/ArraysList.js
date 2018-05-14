import React from 'react';
import Card from './Card';

const ArraysList = ({arrays}) => {
    
    return(
    <div>
    
    {
    arrays.map((x,i) =>
                                       <Card key={i} 
                                       id={arrays[i].id} 
                                       name={arrays[i].name} 
                                       email={arrays[i].email} 
                                       contact={arrays[i].contact} 
                                       
        />)
        }
    </div>
    )
}
export default ArraysList;