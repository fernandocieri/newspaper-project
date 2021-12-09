import React from 'react';

export class Headers extends React.Component {
    render(){      
        return(                       
            <div className="Header" onClick={this.props.handleClick}>
                <h1>{this.props.news.title}</h1>
                <img src = {this.props.news.img}/>
                <h2>{this.props.news.content}</h2>
                <button >Leer +</button>
            </div>
        )
        }  
}