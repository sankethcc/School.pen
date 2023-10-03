import React , { useState ,useEffect} from 'react'
import ProfileWrapper from '../QuizP1/MainContant/ProfileWrapper'
import DropDown from '../QuizP1/MainContant/DropDown'
import AccordianAdd from './AccordianAdd'
import { Box, TextField } from '@mui/material'
import axios from 'axios';

const AddSubject =  ({ toggleMenu, close }) => {
    const [subjects, setsubject] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/get_all_subject_quizz`).then(
            // &limit=10
            async(response) => {
                // setUser(response.data);
                // console.log(response.data);
                // const data = await response.json();
                // console.log(data);
                setsubject(response.data);
                // const objectSet = new Set(subjects.map(JSON.stringify));
                // const outputJSON = JSON.stringify(response.data, null, 2);
                // console.log(outputJSON)
                // var wordsArray = response.data.split('}, {"_id"');
                // var wordsArray = Array.from(response.data)
                // console.log(wordsArray);
                                   
            }
            ).catch((error) => {
                console.error(error);

        });
        
        
    }  , []);

  return (
    <Box >
        {/* <ProfileWrapper toggleMenu={toggleMenu} close={close} name="Create Subject" /> */}
        {/* <Box
        sx={{
          display:'flex',
          justifyContent:'space-between',
          pt:'48px'
        }}
        >
        <DropDown dropdownName={"Class"} listArray={["Science", "Mathematics", "History"]} add={true}/>

        <TextField id="outlined-basic" label="Search subject" variant="outlined" 
        sx={{
          bgcolor:"#fff",
          borderRadius:'12px',
          
        }}
        />
        </Box> */}
        
          {
            //   subjects.map((data) => {
            //     return
        <Box 
        sx={{
            backgroundColor:'#fff',
            p:'0px 48px',
            borderRadius:'12px',
            mt:'32px',
            fontWeight:'700'
        }}
          >
            
        <AccordianAdd
            subject="Science" 
            SubSubject={['Chemitry', 'Biology', 'Physics', 'Earth Science', 'Astronomy']} 
            topics={['Element', "Chemical Reactions", 'Organic chemistry']}        
        />
                </Box>
            //   })
          }
        
        {/* <Box
        sx={{
            backgroundColor:'#fff',
            p:'0px 48px',
            borderRadius:'12px',
            mt:'32px',
            fontWeight:'700'
        }}
        >
        <AccordianAdd 
            subject="English" 
            SubSubject={[]} 
            topics={[]}
        
        />
        </Box>
        
        <Box
        sx={{
            backgroundColor:'#fff',
            p:'0px 48px',
            borderRadius:'12px',
            mt:'32px',
            fontWeight:'700'
        }}
        >
        <AccordianAdd 
            subject="English" 
            SubSubject={[]} 
            topics={[]}
        
        />
        </Box>

        <Box
        sx={{
            backgroundColor:'#fff',
            p:'0px 48px',
            borderRadius:'12px',
            mt:'32px',
            fontWeight:'700'
        }}
        >
        <AccordianAdd 
            subject="English" 
            SubSubject={[]} 
            topics={[]}
        
        />
        </Box> */}
       
      </Box>
      
    
  )
}

export default AddSubject
