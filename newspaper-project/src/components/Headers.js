import React from 'react';

export class Headers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.newsData}
        this.sendID = this.sendID.bind(this)
    }
    sendID() {        
        this.props.handleClick(this.state.id)
    }
    render(){ 
        return(                       
            <div className="Header" onClick={this.sendID}>
                <h1>{this.state.title}</h1>
                <img src = {this.state.img}/>
                <h2>{this.state.content}</h2>
                <button >Leer +</button>
            </div>
        )
        }  
}