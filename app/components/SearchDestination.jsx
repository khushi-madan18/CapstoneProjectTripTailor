'use client';
import {use, useState} from 'react';

export default function SearchDestination(){
    const [destination,setDestination] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (destination.trim()!==''){
            alert(`Searching for travel plans in ${destination}`)
        }
    };

    return (
        <section className='search-section'>
            <div className='container'>
                <h2 className='search-heading'>Find Your Next Adventure</h2>
                <form onSubmit={handleSubmit} className='search-form'>
                    <input type="text" placeholder='Enter your destination...' value={destination} onChange={(e)=>setDestination(e.target.value)} className='search-input'/>
                    <button className='search-button' type='submit'>Search</button>
                </form>
            </div>
        </section>
    )
}