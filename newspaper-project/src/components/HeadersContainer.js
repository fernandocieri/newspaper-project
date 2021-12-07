import React from 'react';
import {Headers} from './Headers'
import {news} from './News'
export class HeadersContainer extends React.Component{
    constructor(props){
        super(props)
        this.state ={data: news};
    }
    render() {
        let content = this.props.news.map(news =>
            <Headers news = {news} /> )
        return (
            <>
            {console.log(content)}
            {content}
            </>
        )
    }
    
}