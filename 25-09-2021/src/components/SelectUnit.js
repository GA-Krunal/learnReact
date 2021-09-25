import React from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
export default function SelectUnit(props) {
    return (
        <>
            <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">{props.name}</InputLabel>
                <Select
                    value={props.unit}
                    onChange={props.handleChange}
                    style={{ width: 200 }}
                >
                    <MenuItem selected="selected" disabled>
                        Select a Unit
                    </MenuItem>
                    <MenuItem value={"km"}>Kilometer</MenuItem>
                    <MenuItem value={"m"}>Meter</MenuItem>
                    <MenuItem value={"cm"}>Centemeter</MenuItem>
                    <MenuItem value={"mm"}>Milimeter</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}
