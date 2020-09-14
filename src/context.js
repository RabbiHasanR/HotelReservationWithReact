import React, { Component } from 'react'

import items from './data'

const RoomContext=React.createContext()

class RoomProvider extends Component {
    state={
       rooms:[],
       sortedRooms:[],
       featuredRooms:[],
       loading:true,
       type:'all',
       capacity:1,
       price:0,
       minPrice:0,
       maxPrice:0,
       minSize:0,
       maxSize:0,
       breakfast:false,
       pets:false
    }

    componentDidMount(){
        //get data
        let rooms=this.formatData(items)
        let featuredRooms=rooms.filter(room=>room.featured===true)
        let maxPrice=Math.max(...rooms.map(item=>item.price))
        let maxSize=Math.max(...rooms.map(item=>item.size))
        this.setState({
            rooms,
            sortedRooms:rooms,
            featuredRooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        })
    }

    formatData(items){
        let tempItems = items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=>image.fields.file.url)
            let room={...item.fields,images,id}

            return room
        })
        return tempItems
    }

    getRoom=(slug)=>{
        let tempRooms=[...this.state.rooms]
        const room=tempRooms.find(room=>room.slug===slug)
        return room
    }

    handleChange=event=>{
        const target=event.target
        const value=target.type==='checkbox'?target.checked:target.value
        const name=target.name
        this.setState({
            [name]:value
        },this.filterRooms)
        console.log(name,value)
    }

    filterRooms=()=>{
        let {rooms,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=this.state
        //all the rooms
        let tempRooms=[...rooms]
        //transform the value
        capacity=parseInt(capacity)
        //filter by type
        if(type!=='all'){
            tempRooms=tempRooms.filter(room=>room.type===type)
        }
        //filter by capacity
        if(capacity!==1){
            tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
        }
        this.setState({
            sortedRooms:tempRooms
        })
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer=RoomContext.Consumer

export {RoomProvider,RoomConsumer,RoomContext}
