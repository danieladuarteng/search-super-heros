import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonCustom from "../ButtonCustom";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

function Modal(props) {
  const { open, handleClose, hero } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">Hero details</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img alt="Hero" src={hero.image.url} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Biography</Typography>
              <Typography>Full name: {hero.biography["full-name"]}</Typography>
              <Typography>Alignment: {hero.biography.alignment}</Typography>
              <Typography>
                Place of birth: {hero.biography["place-of-birth"]}
              </Typography>
              <Typography>Publisher: {hero.biography.publisher}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Powerstats</Typography>
              <Typography>Combat: {hero.powerstats.combat}</Typography>
              <Typography>Durability: {hero.powerstats.durability}</Typography>
              <Typography>
                Intelligence: {hero.powerstats.intelligence}
              </Typography>
              <Typography>Power: {hero.powerstats.power}</Typography>
              <Typography>Speed: {hero.powerstats.speed}</Typography>
              <Typography>Strength: {hero.powerstats.strength}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Appearance</Typography>
              <Typography>Eye color: {hero.appearance["eye-color"]}</Typography>
              <Typography>Gender: {hero.appearance.gender}</Typography>
              <Typography>
                Hair color: {hero.appearance["hair-color"]}
              </Typography>
              <Typography>Race: {hero.appearance.race}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h6">Work</Typography>
              <Typography> Base: {hero.work.base} </Typography>
              <Typography>Occupation: {hero.work.occupation}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h6">Connections</Typography>
              <Typography>
                Group affiliation:
                {hero.connections["group-affiliation"]}
              </Typography>
              <Typography>Relatives: {hero.connections.relatives}</Typography>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonCustom onClick={handleClose} color="secondary" autoFocus>
          Close
        </ButtonCustom>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
