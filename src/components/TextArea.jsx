import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch } from "react-redux";
import { addNote } from '../redux/reducer/noteReducer'

const buttonStyle = {
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
};

function TextArea() {


    const [color, setColor] = useState('mavi');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const selectColor = (color) => {
        setColor(color)
    };

    const addNot = (e) => {
        e.preventDefault();
        const newNote = {
            id: Math.round(Math.random()*100),
            title: title,
            description: description,
            color: color
        };
        dispatch(addNote(newNote))
        setTitle('');
        setDescription('');
        setColor('mavi');
    };


    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Box component='form' onSubmit={addNot}>
                        <TextField
                            fullWidth
                            hiddenLabel
                            placeholder="Title"
                            variant="outlined"
                            size="small"
                            style={{ marginTop: 10 }}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            hiddenLabel
                            placeholder="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            style={{ marginTop: 10 }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Grid container gap={2} style={{ marginTop: 10 }}>
                            <Button
                                variant="contained"
                                size="large"
                                style={buttonStyle}
                                onClick={() => selectColor('mavi')}
                            >{color === 'mavi' ? <CheckIcon /> : ''}
                            </Button>
                            <Button
                                variant="contained"
                                size="large"
                                color="success"
                                style={buttonStyle}
                                onClick={() => selectColor('yesil')}
                            >{color === 'yesil' ? <CheckIcon /> : ''}
                            </Button>
                            <Button
                                variant="contained"
                                size="large"
                                color="error"
                                style={buttonStyle}
                                onClick={() => selectColor('kirmizi')}
                            >{color === 'kirmizi' ? <CheckIcon /> : ''}
                            </Button>
                        </Grid>
                        <Grid container style={{ marginTop: 10 }}>
                            <FormControl>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    size="large"
                                    style={buttonStyle}
                                >ADD</Button>
                            </FormControl>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
            </Grid>
        </div>
    );
}

export default TextArea;
