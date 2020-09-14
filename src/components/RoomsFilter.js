import React,{useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

//get all unique value

const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context =useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }=context

    //get unique types
    let types=getUnique(rooms,'type')
    //add all type
    types=['all',...types]
    //map to jsx
    types=types.map((item,index)=>{
    return<option value={item} key={index}>{item}</option>
    })

    let people=getUnique(rooms,'capacity')
    people=people.map((item,index)=>{
        return<option value={item} key={index}>{item}</option>
    })
    return (
        <section className='filter-container'>
            <Title title='search rooms'/>
            <form className='filter-form'>
                {/*Select type*/}
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end Select type*/}
                {/*Guests*/}
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/*end Guests*/}

                {/*room price*/}
                <div className='form-group'>
                    <label htmlFor='price'>room price ${price}</label>
                    <input type='range' name='price' min={minPrice}
                    max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control'/>
                </div>
                {/*end room price*/}

                {/*size*/}
                <div className='form-group'>
                    <label htmlFor='size'>room size</label>
                    <div className='size-inputs'>
                        <input type='number' name='minSize' value={minSize} id='size' onChange={handleChange} className='size-input'/>
                        <input type='number' name='maxSize' value={maxSize} id='size' onChange={handleChange} className='size-input'/>
                    </div>
                </div>
                {/*end size*/}

                {/*extras*/}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast' checked={breakfast} id='breakfast' onChange={handleChange}/>
                        <label htmlFor='breakfast'>Breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' checked={pets} id='pets' onChange={handleChange}/>
                        <label htmlFor='pets'>Pets</label>
                    </div>
                </div>
                {/*end of extras*/}



            </form>
        </section>
    )
}
