import Card from '@mui/material/Card';
import '../scss/playlistPicker.scss'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PlaylistPicker = (props) => {
  return (
      <div className='track-list'>
        {props.array.map(song =>
              <div key={song.track_name} className='song-card'>
            <Card>
              <CardMedia
                component="img"
                image={song.album_img}
                alt="album image"
              />
              <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                {song.track_name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {song.album_name}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
  );
};

export default PlaylistPicker;
