import React from 'react';
import {Headers} from './Headers'
import {news} from './News'

export class HeadersContainer extends React.Component{
    constructor(props){
        super(props)
        this.state ={data:[...news]};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        console.log("evento");
        console.log(e.currentTarget.id);
        
    }
    render() {
        
        let content = this.state.data.map(news =>
            <Headers news = {news} handleClick={this.handleClick} /> )
        return (
            <>            
            {content}
            </>
        )
    }
    
}