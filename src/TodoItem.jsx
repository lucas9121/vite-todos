import ListItem from '@mui/material/ListItem';
import { ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import ClearIcon from '@mui/icons-material/Clear';

export default function TodoItem({todo, removeTodo, toggleTodo}) {
    // adds unique id. 
    // Could just write todo.id, but not helpful to other devs
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={() => {removeTodo(todo.id)}}>
            <ClearIcon />
            </IconButton>
        }
        disablePadding
        >
        <ListItemButton role={undefined} dense>
            <ListItemIcon>
            <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={() => {toggleTodo(todo.id)}}
            />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} />
        </ListItemButton>
        </ListItem>
    );
}