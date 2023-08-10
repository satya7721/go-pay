import React from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


const CustomInput = styled(TextField)({
    backgroundColor: '#FFFF',
    width: '85%',
    borderRadius: '2vw',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
            bgcolor: 'white'
        },
    }
})

const SearchBar = () => {
  return (
    <CustomInput
    id="input-with-icon-textfield"

    InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <SearchIcon 
                sx={{
                    color:'#2C3A47'
                }}
                />
            </InputAdornment>
        ),
    }}
    placeholder='Pay by UID'
    variant="outlined"
/>
  )
}

export default SearchBar