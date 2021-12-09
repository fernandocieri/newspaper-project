import React from 'react';
import {Headers} from './Headers'
import {news} from './News'

export class HeadersContainer extends React.Component{
    constructor(props){
        super(props)
        this.state ={data:[...news], idNumber: undefined};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id){
        console.log("evento");
        console.log(this.state.idNumber);
        this.setState(state => {state.idNumber = id});
        console.log(this.state.idNumber);        
    }
    render() {
        
        let content = this.state.data.map(news =>
            <Headers newsData={news} news = {news} handleClick={this.handleClick} /> )
        return (
            <>            
            {content}
            </>
        )
    }
    
}