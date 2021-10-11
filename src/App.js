import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { margin } from "@mui/system";

// const useStyles=makeStyles((theme)=>({
//   container:{
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8,0,6)
//   }
// }))

function App() {
  
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Icon style={{ marginRight:"20px" }}>photo_camera</Icon>
          <Typography varaiant="h6"> Photo album </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              style={{ marginTop:"70px" }}
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              HelloPhoto
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse libero urna, commodo gravida magna eget, fringilla
              semper mauris. Cras cursus in nibh at auctor. Fusce molestie eu
              elit vel cursus. Proin consequat eros ac eleifend dapibus. Vivamus
              accumsan mollis.
            </Typography>
            
            <div  style={{textAlign:'center', width:"auto", margin:' 40px auto'}}>
              <Grid container spacing={2} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Grid items >
                  <Button variant="contained" color="primary" sx={{ml: 5}}>
                    See My Photos
                  </Button>
                  <Button variant="outlined" color="primary" sx={{ml: 2}}>
                  Secondary Action 
                  </Button>
                </Grid>
              </Grid>
            </div>
            
          </Container>
        </div>
        <container maxWidth="md" style={{}}>
          <Grid container spacing={4}>
            <Grid items>
              
            </Grid>
          </Grid>
        </container>
      </main>
    </>
  );
}

export default App;
