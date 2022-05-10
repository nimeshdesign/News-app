/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../index.css';
export default class NewsSlider extends Component {

  constructor(){
    super();
    //console.log("hello this is a consrtoctor from news component");
    this.state = {
      // articles: this.articles 
      articles: [],
      loading: false
    }
  
  }
  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=49da0776443d45228472e4c2dedeeecb&page=1&pageSize=5";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }
  render() {
    return (
   
      <div>
      <Carousel variant="dark my-5">
      {this.state.articles.map((element)=>{
        return <Carousel.Item  key={element.url}>
       <div className='row'>
          <div className="col-md-6">
            <div className="slider-image">
              <img src={!element.urlToImage?"https://english.cdn.zeenews.com/sites/default/files/2022/04/29/1037011-northernlights-pixabay-pic.jpg":element.urlToImage} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-6">
          <div className="main-contain">
            <h5 className="card-title" >{element.title}</h5>
             <p className="card-text">{!element.description?"According to the daily coal report of the National Power Portal, ther":element.description}</p>
             <p className="card-text"><small className="text-muted">By {!element.author?"Unknown": element.author} on {new Date(element.publishedAt).toGMTString()} </small></p>
             <a rel="noreferrer" href={element.url } target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      
        </div>
        </Carousel.Item>
      })}
    </Carousel>
      </div>
    
    )
  }
}


