import React,{useContext} from 'react'
import {RoomContext} from '../Context'
import Title from './Title'

export default function RoomsFilter() {
    const context =useContext(RoomContext)
    return (
        <div>
            Hello Froom room filter.
        </div>
    )
}
