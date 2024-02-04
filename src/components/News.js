import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=  [
    {
        "source": {
            "id": "news-com-au",
            "name": "News.com.au"
        },
        "author": "Andrew McMurtry",
        "title": "36-year stunner blows Australia away",
        "description": "Queensland tearaway Xavier Bartlett has written himself into the history books, delivering the second best figures for a debutant in Australian cricket history.",
        "url": "https://www.news.com.au/sport/cricket/aussie-debutant-xavier-bartletts-36year-first-blows-west-indies-away/news-story/1df0977e43c1b36941c894331344f12b",
        "urlToImage": "https://content.api.news/v3/images/bin/52032b734001e5075161ec7d2a248e05",
        "publishedAt": "2024-02-02T08:56:00Z",
        "content": "Queensland tearaway Xavier Bartlett has written himself into the history books, delivering the second best figures for a debutant in Australian cricket history.\r\nBartlett was outstanding as he got hi… [+2821 chars]"
    },
    {
        "source": {
            "id": "google-news-au",
            "name": "Google News (Australia)"
        },
        "author": "cricket.com.au",
        "title": "Morris, Bartlett to debut as Aussies bowl first at MCG | cricket.com.au - cricket.com.au",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMilAFodHRwczovL3d3dy5jcmlja2V0LmNvbS5hdS9uZXdzLzM4NzY4OTkvbGFuY2UtbW9ycmlzLXhhdmllci1iYXJ0bGV0dC10by1tYWtlLW9kaS1kZWJ1dC1hcy1hdXNzaWVzLWJvd2wtZmlyc3QtYWdhaW5zdC13aW5kaWVzLWZpcnN0LW9kaS1tZWxib3VybmUtbWNn0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-02-02T03:15:00+00:00",
        "content": null
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
  constructor(){
    super();
    console.log("Cons from news");
    this.state ={
      articles:this.articles,
      loading : false
    }
   }

  render() {
    return (
      <div className="container my-3" >
        <h2>Top Headlines</h2>
        <div className="row">
            <div className="col md-3">
          <NewsItem title="Mytilte" description="hhjhjb" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" newsUrl="TODO" />
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