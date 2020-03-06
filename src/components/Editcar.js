import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



export default function Editcar(props){

    const [open, setOpen] = React.useState(false);
    const [car, addCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    });

    const handleClickOpen = () => {
      console.log(props.cars)
      addCar({
        brand: props.cars.brand, 
        model: props.cars.model, 
        color: props.cars.color, 
        fuel: props.cars.fuel, 
        year: props.cars.year, 
        price: props.cars.price
      })
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange= (event) => {
        addCar({...car, [event.target.name]:event.target.value })
    }

    const updateCar = () => {
      console.log(props.cars)
      props.updateCar(car, props.cars._links.car.href);
      handleClose();
    }

    return(
        <div>
        <Button variant="contained" size="small" color="primary" onClick={handleClickOpen}>
          Edit car
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit car</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="brand"
              value={car.brand}
              label="Brand"
              onChange={e => handleInputChange(e)}
              fullWidth
            />
            <TextField
              margin="dense"
              name="model"
              value={car.model}
              label="Model"
              onChange={e => handleInputChange(e)}
              fullWidth
            />
            <TextField
              margin="dense"
              name="color"
              value={car.color}
              label="Color"
              onChange={e => handleInputChange(e)}
              fullWidth
            />
            <TextField
              margin="dense"
              name="fuel"
              value={car.fuel}
              label="Fuel"
              onChange={e => handleInputChange(e)}
              fullWidth
            />
            <TextField
              margin="dense"
              name="year"
              value={car.year}
              label="Year"
              onChange={e => handleInputChange(e)}
              fullWidth
            />
            <TextField
              margin="dense"
              name="price"
              value={car.price}
              label="Price"
              onChange={e => handleInputChange(e)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={updateCar} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}