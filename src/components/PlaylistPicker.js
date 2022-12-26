import "../scss/playlistPicker.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import { Grid } from "@mui/material";

const PlaylistPicker = (props) => {
  return (
    <div className="playarray">
      <Grid container spacing={1}>
        {props.array.map((song) => (
          <Grid item xs={2} key={song.track_name}>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...(props.array ? { timeout: 1000 } : {})}
            >
              <Card>
                <CardMedia
                  component="img"
                  maxwidth="100px"
                  image={song.album_img}
                  alt="album image"
                />
                <CardContent>
                  <Typography variant="body2" component="div">
                    {song.track_name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {song.album_name} - {song.album_release_year}
                  </Typography>
                  <Typography variant="caption" component="div">
                    {song.gloom_index}% happy
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PlaylistPicker;
