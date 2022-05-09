import React, { Component } from 'react'
import '../index.css';
export class NewsItem extends Component {
  render() {
    let  {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <>
      
      <div className='my-3'>
            <div className="card">
        <img src={!imageUrl?"https://english.cdn.zeenews.com/sites/default/files/2022/04/29/1037011-northernlights-pixabay-pic.jpg":imageUrl} className="card-img-top" alt="..." style={{height: "200px"}}/>
        <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text">{!description?"According to the daily coal report of the National Power Portal, ther":description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
        
      </div>
      </>
    )
  }
}

export default NewsItem
