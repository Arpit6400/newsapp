import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3" >
        <h2>Top Headlines</h2>
        <div className="row">
            <div className="col md-3">
          <NewsItem title="Mytilte" description="hhjhjb"/>
            </div>
            <div className="col md-3">
          <NewsItem title="Mytilte" description="hhjhjb"/>
            </div>
            <div className="col md-3">
          <NewsItem title="Mytilte" description="hhjhjb"/>
            </div>
        </div>
         
      </div>
    )
  }
}

export default News