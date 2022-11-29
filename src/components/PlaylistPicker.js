import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const PlaylistPicker = (props) => {
console.log(props)
  return (
      <div className='track-list'>
        {props.array.map(song =>
              <div key={song.track_name} className='song-card'>
            <Card sx={{ maxWidth: '25%' }}>
              <CardMedia
                component="img"
                height="180"
                image={song.album_img}
                alt="album image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {song.track_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
