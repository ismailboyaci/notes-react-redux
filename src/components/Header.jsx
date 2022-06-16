import { Grid, Typography } from '@mui/material';
import Search from './Search';

function Header() {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography variant='h2' align='center'>NOTES APP</Typography>
                    <Search />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
            </Grid>
        </>
    )
}

export default Header