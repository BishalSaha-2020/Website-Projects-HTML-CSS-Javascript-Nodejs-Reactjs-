import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  
    constructor(){
        super();
        
    }

    render() {
        let {title,description,imageurl,newsurl,author,date,source,}=this.props;
        return (
            <div>
                
                <div className="card" >
                <span class="position-absolute  top=0 translate-middle badge rounded-pill bg-danger" style={{left:'85%'}}>
                {source}
                <span class="visually-hidden">unread messages</span>
                </span>
                    <img src={imageurl} className="card-img-top" alt='BLANK PHOTO' />
            <div className="card-body">
            <span class="badge rounded-pill bg-warning text-dark">New</span>
            
                
                <h5 className="card-title">{title}...</h5>
               
                <p className="card-text">{description}...</p>
                <small class="text-muted " style={{color:'red'}}>By {author} on {new Date(date).toGMTString()} </small>
                <br />
                <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
            </div>
        )
    }
}

export default NewsItem






