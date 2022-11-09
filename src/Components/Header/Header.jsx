import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Header() {
  return (
    <Box 
        sx={{
          minwidth: 600,
        }}>
      <Paper elevation={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
              <h4>
                Our Store
              </h4>
          </Grid>
          <Grid item xs={6}>
            <>
              Cart
            </>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
export default Header;