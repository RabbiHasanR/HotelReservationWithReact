import React, { Component } from 'react'
import { RoomContext} from '../context'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        const {greeting,name}=this.context
        return (
            <div>
                Hello from featured rooms!{greeting} {name}
            </div>
        )
    }
}
