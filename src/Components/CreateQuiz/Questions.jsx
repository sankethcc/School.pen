import React, { useState } from 'react';
import {
  TextField,
  Radio,
  FormControlLabel,
  Box,
  IconButton,
  Button,
  Typography,
  Input,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClearIcon from '@mui/icons-material/Clear';

const CreateQuiz = () => {
  const [question, setQuestion] = useState({ text: '', image: null });
  const [options, setOptions] = useState([
    { text: '', image: null },
    { text: '', image: null },
    { text: '', image: null },
    { text: '', image: null },
  ]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const handleQuestionChange = (event) => {
    setQuestion({ ...question, text: event.target.value });
  };

  const handleOptionChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index].text = event.target.value;
    setOptions(newOptions);
  };

  const handleRadioChange = (event) => {
    setCorrectAnswerIndex(parseInt(event.target.value, 10));
  };

  const handleDeleteImage = (type) => {
    if (type === 'question') {
      setQuestion({ ...question, image: null });
    } else if (type === 'option') {
      const newOptions = options.map((option, index) => {
        if (index === correctAnswerIndex) {
          return { ...option, image: null };
        }
        return option;
      });
      setOptions(newOptions);
    }
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions[index] = { text: '', image: null };
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    const newOptions = [...options, { text: '', image: null }];
    setOptions(newOptions);
  };

  const handleImageUpload = (event, index, type) => {
    const newOptions = [...options];
    if (type === 'question') {
      setQuestion({ ...question, image: URL.createObjectURL(event.target.files[0]) });
    } else if (type === 'option') {
      newOptions[index].image = URL.createObjectURL(event.target.files[0]);
      setOptions(newOptions);
    }
  };

  const handlePostQuestion = () => {
    console.log('Posted Question:', { question, options, correctAnswerIndex });
  };


  const inputStyle = {
    padding: "11px 27px",
    borderRadius: "12px",
    background: "#EFF3F4",
    width: "100%",
    border: "none",
    color: "#707070",
    fontSize:'18px'
  };

  

  return (
    <Box >
    <Box display="flex" flexDirection="column" alignItems="center" width="100%"
        sx={{
            background:'#fff', width:'100%', mt:'32px', p:'56px 48px', 
            borderRadius:'40px'
        }}
    >
        <Typography sx={{font:'700 32px Poppins', color:'var(--grey, #707070)',alignSelf:'start', pb:"28px"}} >Question</Typography>
        <Box sx={{display:'flex', width:'100%'}}>

            <Input
                disableUnderline
                placeholder='Question'
                multiline
                fullWidth
                value={question.text}
                onChange={handleQuestionChange}
                margin="normal"
                style={inputStyle}
                sx={{
                    color:'var(--grey, #707070)'
                }}
            />
                {/* <IconButton onClick={() => setQuestion({ ...question, text: '' })} aria-label="Clear question">
                <DeleteOutlineIcon />
                </IconButton> */}
                <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, null, 'question')}
                style={{ display: 'none' }}
                id="question-image-upload"
                />
                <label htmlFor="question-image-upload">
                <IconButton component="span" aria-label="Upload image">
                    <AddPhotoAlternateIcon />
                </IconButton>
                </label>
        </Box>
        <Typography sx={{font:'700 32px Poppins', color:'var(--grey, #707070)',alignSelf:'start', pb:"28px", mt:'28px'}} >Options:</Typography>
        <Box sx={{width:"100%", display:'grid', gridTemplateColumns:"12fr", gridRowGap:'24px'}}>

                {options.map((option, index) => (
                    <Box key={index} style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', marginBottom: '8px', width:'100%', gap:'32px' }}>
                    <FormControlLabel
                        value={index.toString()}
                        control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 35, }}} checked={correctAnswerIndex === index} onChange={handleRadioChange} />}
                        label=""
                        labelPlacement="start"
                        
                    />
                    <Input
                        placeholder={`Option ${index+1}`}
                        style={inputStyle}
                        disableUnderline
                        value={option.text}
                        onChange={(e) => handleOptionChange(e, index)}
                        variant="outlined"
                        margin="normal"
                    />
                    <Box display="flex" alignItems="center">
                        {option.image && (
                        <IconButton
                            onClick={() => handleDeleteImage('option')}
                            aria-label={`Delete image for Option ${index + 1}`}
                            s
                        >
                            <DeleteOutlineIcon size="large" />
                        </IconButton>
                        )}

                        <IconButton onClick={() => handleDeleteOption(index)} aria-label={`Clear Option ${index + 1}`}>
                        <DeleteOutlineIcon />
                        </IconButton>
                        <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, index, 'option')}
                        style={{ display: 'none' }}
                        id={`option-image-upload-${index}`}
                        />
                        <label htmlFor={`option-image-upload-${index}`}>
                        <IconButton component="span" aria-label={`Upload image for Option ${index + 1}`}>
                            <AddPhotoAlternateIcon />
                        </IconButton>
                        </label>
                    </Box>
                    </Box>
                ))}
        </Box>
        <Typography sx={{cursor:'pointer', color:'#7A58E6', font:'700 20px Poppins', alignSelf:'end', mt:'32px'}} onClick={handleAddOption} aria-label="Add option" >Add Another Options</Typography>
    </Box>
    <Box sx={{display:'flex', width:"100%", mt:'56px', mb:'91px', justifyContent:'center'}}>
      <Button variant="contained" onClick={handlePostQuestion} color="primary"
        sx={{
            width: "375px",
            borderRadius: "12px",
            background: "#7A58E6",
            cursor: "pointer",
            border: "none",
            color: "#FFF",
            fontSize: "18px",
            fontWeight: "500",
            textTransform: "capitalize",
            p: "10px 10px",
            "&:hover": {
              background: "#7A58E6",
            },
          }}
      >
        Post Question
      </Button>


    </Box>
    </Box>
  );
};

export default CreateQuiz;
