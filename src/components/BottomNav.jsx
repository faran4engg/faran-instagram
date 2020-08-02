import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import firebase from 'firebase';
import { db, storage } from '../firebase/firebase-config';
import './BottomNav.css';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: 'auto',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');
  const [open, setOpen] = React.useState(false);
  const [caption, setCaption] = React.useState('das');

  const [imagePreviewUrl, setImagePreviewUrl] = React.useState('');
  const [file, setFile] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = <img src={imagePreviewUrl} alt='post img' />;
  } else {
    $imagePreview = (
      <div className='previewText'>Please select an Image for Preview</div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', file);

    const newPost = storage.ref(`images/${file.name}`).put(file);
    newPost.on(
      'state_changed',
      (snapshot) => {
        console.log({ snapshot });
      },
      (error) => {
        console.log({ error });
      },
      () => {
        // complete function
        storage
          .ref('images')
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            // now post the newPost :)
            db.collection('posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: 'newPost-username',
            });

            handleClose();
          });
      }
    );
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction label='Home' value='home' icon={<HomeIcon />} />
        <BottomNavigationAction
          label='Search'
          value='search'
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label='Add'
          value='add'
          icon={<AddBoxIcon />}
          onClick={handleClickOpen}
        />
        <BottomNavigationAction
          label='Favorites'
          value='favorites'
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label='Profile'
          value='Peprofile'
          icon={<PersonIcon />}
        />
      </BottomNavigation>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>

            <Button autoFocus color='inherit' onClick={handleClose}>
              Add Post
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <div className='file-upload-wrapper'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <input
                  className='fileInput'
                  type='text'
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <input
                className='fileInput'
                type='file'
                onChange={(e) => handleImageChange(e)}
              />
              <button
                className='submitButton'
                type='submit'
                onClick={(e) => handleSubmit(e)}
              >
                Upload Image
              </button>
            </form>
            <div className='imgPreview'>{$imagePreview}</div>
          </div>
        </Container>
      </Dialog>
    </>
  );
}
