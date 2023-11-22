import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import { Create } from "@mui/icons-material";
import { useState } from "react";


export default function TodoForm({addTodo}) {
    const [text, setText] = useState('')
    const handleChange = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    }
    return(
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Add to do" 
                    variant="outlined" 
                    value={text} 
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                        <IconButton aria-label="create todo" edge="end" type="submit"> 
                            <Create /> 
                        </IconButton>
                    </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    )
}


// <OutlinedInput
//             id="outlined-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />