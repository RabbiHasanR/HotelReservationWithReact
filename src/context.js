import React, { Component } from 'react'

const RoomContext=React.createContext()

class RoomProvider extends Component {
    state={
        greeting:'Hello',
        name:'Rabbi'
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomCosumer=RoomContext.Cosumer

export {RoomProvider,RoomCosumer,RoomContext}
