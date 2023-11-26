import './index.css'
import {Component} from 'react'

class SongListView extends Component {
  constructor(props) {
    super(props)
    this.state = {search: '', videoList: props.initialTracksList}
  }

  onSearchText = event => {
    const {initialTracksList} = this.props
    const searchQuery = event.target.value.toLowerCase()

    const updatedVideos = initialTracksList.filter(eachMusic =>
      eachMusic.name.toLowerCase().includes(searchQuery),
    )

    this.setState({
      search: event.target.value,
      videoList: updatedVideos,
    })
  }

  onDeleteMusic = id => {
    this.setState(prevState => ({
      videoList: prevState.videoList.filter(track => track.id !== id),
    }))
  }

  onSearchMusic = () => {
    const {initialTracksList} = this.props
    const {search} = this.state
    const updatedVideos = initialTracksList.filter(eachMusic =>
      eachMusic.name
        .split(' ')
        .join('')
        .toLowerCase()
        .includes(search.toLowerCase()),
    )

    this.setState({videoList: updatedVideos})
  }

  render() {
    const {search, videoList} = this.state

    return (
      <>
        <div className="playlist-container">
          <div className="search-block">
            <div>
              <h1>Songs Playlist</h1>
            </div>
            <div>
              <input
                type="search"
                className="search-input"
                value={search}
                placeholder="Search"
                onChange={this.onSearchText}
                onKeyDown={event => {
                  if (event.key === 'Enter') {
                    this.onSearchMusic()
                  }
                }}
              />
            </div>
          </div>
          {videoList.length === 0 ? (
            <p>No Songs Found</p>
          ) : (
            <ul className="music-overflow-container">
              {videoList.map(eachTrack => (
                <li key={eachTrack.id} className="music-track-container">
                  <div>
                    <img
                      className="music-image"
                      alt="track"
                      src={`${eachTrack.imageUrl}`}
                    />
                  </div>
                  <div>
                    <p>{eachTrack.name}</p>
                    <p>{eachTrack.genre}</p>
                  </div>
                  <div>
                    <p>{eachTrack.duration}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => this.onDeleteMusic(eachTrack.id)}
                      data-testid="delete"
                    >
                      delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default SongListView
