import React from 'react';
export class Headers extends React.Component {
    render(){      
        return(
                       
            <div className="Header">
                <h1>{this.props.news.title}</h1>
                <h2>{this.props.news.content}</h2>
            </div>
        )
        }  
}