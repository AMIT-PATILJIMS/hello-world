import _ from 'lodash'
import React, { Component } from 'react'
import './components/styles.css'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'
const API_KEY_2 = "AIzaSyCcKuHGY1mlFDkwiMFjOvBV5gBDp3Knz7E";
const API_KEY = "AIzaSyCagpIWnhmbW9prbTX1k8QgOFW3t-23sss";


class App extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('kapil sharma show')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (data)=>{
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    })
  }
  
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
        videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;
