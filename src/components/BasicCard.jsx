import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import { Delete } from '@mui/icons-material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/reducer/noteReducer'


export default function BasicCard(props) {

  const mavi = '#1565c0'
  const yesil = '#2e7d32'
  const kirmizi = '#c62828'
  const bColor = () => {
    if (props.color === 'mavi') {
      return mavi
    } else if (props.color === 'yesil') {
      return yesil
    } else {
      return kirmizi
    }
  };

  const dispatch = useDispatch()

  const deleteNot = (id) => {
    const note = {
      id: id,
      title: '',
      description: '',
      color: ''
    }
    dispatch(deleteNote(note))
  };

  return (
    <Card sx={{ minWidth: 300, minHeight: 200, maxWidth: 300, maxHeight: 200 }} style={{ backgroundColor: bColor(), marginTop: 5 }}>
      <CardContent>
        <Typography variant='h4' color="text.primary" gutterBottom align='center'>
          {props.name}
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
      <Box display="flex"
        justifyContent="flex-end"
        alignItems="flex-end" >
        <Button onClick={() => deleteNot(props.id)}><Delete style={{ color: '#ffffff' }}></Delete></Button>
      </Box>
    </Card>
  );
}
