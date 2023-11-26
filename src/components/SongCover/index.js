import SongListView from '../SongListView'
import './index.css'

const SongCover = props => {
  const {initialTracksList} = props
  return (
    <>
      <div className="Singer-container">
        <h1>Ed Sheeran</h1>
        <p>Singer</p>
      </div>
      <SongListView initialTracksList={initialTracksList} />
    </>
  )
}

export default SongCover
