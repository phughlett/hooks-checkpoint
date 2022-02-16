import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import Modal from '@mui/material/Modal';
import MyContext from '../context/MyContext'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({item}) {

  let {handleProductClick, clickededProduct} = useContext(MyContext);


  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    handleProductClick(id);
    console.log(clickededProduct);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);





   return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.category}
        </Typography>
        <Typography variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
      <div>
      <Button onClick={(e) => {handleOpen(item.id)}}>View Product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"      >
        <Box sx={style}>
          <Typography>
            {item.name}
          </Typography>
           <img src="https://m.media-amazon.com/images/M/MV5BZmMxNmEzM2EtOGU1Mi00Y2UxLWFmZjAtNDZhMDU0YjI4NjFiXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg" alt="" width="200" height="200"></img>
        </Box>
      </Modal>
      </div>
      </CardActions>
    </Card>
  );
}