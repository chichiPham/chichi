import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MapIcon from '@mui/icons-material/Map';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';


export default function FolderList() {
  return (  
     <>
    <Box style={{
        display: 'block',
        padding: 30
    }} sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary=" Nguyen Van A" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonPinCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Current Address" secondary="aaa" />
      </ListItem>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MapIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Distance" secondary="100km" />
      </ListItem>
       
    </List>
    </Grid>
        <Grid item xs={12} md={6}> 
        <List>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CalendarMonthIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Intended date for moving house" secondary="22/12/2022" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WhereToVoteIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Destination" secondary="bbb" />
      </ListItem>
        </List>
        </Grid>
        </Grid>
    </Paper> 
     </Box>
    </>
  );
}
