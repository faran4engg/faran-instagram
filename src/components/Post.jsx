import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBlockEnd: '2em',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Post({ id, username, caption, imageUrl, timestamp }) {
  const classes = useStyles();
  console.log({ id });

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              F
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={username}
          subheader={new Date(timestamp?.seconds * 1000).toDateString()}
        />
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <CardActions disableSpacing>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ModeCommentIcon />
            </IconButton>
            <IconButton>
              <SendIcon />
            </IconButton>
          </CardActions>
          <Typography variant='body2' color='textSecondary' component='p'>
            <strong>{username}: </strong> {caption}
          </Typography>
          <br />
          <Typography variant='subtitle2' display='block' gutterBottom>
            <strong>lol</strong> caption text
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
