# Songflix

* Songflix is a clone of one of the biggest streaming service web app Netflix, except that the user can watch music videos and concerts, as opposed to movies and TV shows.
 
# Live site demo
* Demo: [Link](https://songflix.herokuapp.com/#/)
  
# Technologies       
* This web app was made using PostgreSQL to handle the backend database, Ruby on Rails for the backend, React/Redux for the frontend, CSS3 for styling, and Amazon AWS S3 to store images and videos. The website was deployed using Heroku.      
      
# MVPs 
* Displaying videos and hovering over them
* Search Bar 
* Displaying videos by genre
* My List 


# Hovering over videos

## Information about this feature
* Whenever the user hovers over any music video, it expands and it starts to play automatically with sound, also the "add to my list" button appears. The video stops whenever the mouse is outside the video, and the list button dissapears. 

## Code snippet for this feature
```javascript
    // on Video Item component

    onHoverPlay(e) {
        e.currentTarget.load();
        e.currentTarget.play();
    }

    onLeave(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
        e.currentTarget.load();
    }

    // render function

    <Link to={`/videos/${video.id}`}>
            <div className="video-item-container">
                <video className="video-hover" poster={video.thumbnail} muted={false} controls={false}
                    onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} >
                    <source src={video.music_video} type="video/mp4" />
                </video>
                <button className="list-index-button" onClick={this.handleList(video.id)}>{listButton}</button>
            </div>
    </Link> 

```


# Search Bar Feature

## Information about this feature
* Amongst a variety of videos, finding a specific video can take some time, so implementing a search bar can be extremelly helpful for the user.
* When the search icon is clicked on, the user get redirected to a "Search Page", in which all catalog of music videos are displayed in a grid layout, that was implemented through CSS. Also, an input field appears next to the search icon for this page.
* By typing any letters on the input field, an instant filtering is activated, displaying all music videos related to artists and song titles with the matching word typed, along with information related to those below each video.

## Code snippet for this feature
```javascript
    // on Search Component:

    // update function create
    updateSearch(e) {
        this.setState({search: e.target.value.substr(0, 20)})
    }

    // variable that stores all filtered videos
     const { videos } = this.props;
        let filteredVideos = videos.filter(video => {

            return (
                (video.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) || (video.artist.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
            )
        })

    // Render function, where the update Search gets binded in the input field

    return (
            <div>
                <header style={{ display:"flex" }}>
                    <NavBarContainer />
                    <div className="search">
                        <input className="search-input" type="text" placeholder="search titles or artists" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                    </div>
                </header>
                <div className="grid-container-search">
                    {filteredVideos.map((video, idx) => {
                            return (
                                <div key={idx}>
                                    <VideoItemContainer video={video} key={idx} />
                                </div> )})}
                </div>
            </div>
             ) 
```

<!-- # Challenges faced and how it was fixed

## Explaining the problem
* One of the features for this project is the ability of adding music videos to your list, that way users can see all their favorite videos on that page. 
* The issue faced was that the videos weren't automatically disappearing whenever the user clicked on the "remove from my list" button for a specific video, so it would only disappear upon a page refresh. 

## Solving the problem
* It was noticed that the videos removed from the list were being updated in the backend, but not in the frontend. That means that the list of videos on backend wasn't matching all videos contained on the frontend state after the action was called.
* So, after checking the video reducer, 

```javascript
        case RECEIVE_MY_LIST_ITEMS:
            let newState = Object.assign({}, state);
            newState[Object.keys(newState)[0]].listVideoIds = action.videos.listVideoIds;
            return newState;
``` -->