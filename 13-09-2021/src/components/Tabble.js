import React, { Component } from 'react'
import { Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Table.css';
export default class Tabble extends Component {

    render() {
        let { itemsArr, delItem } = this.props
        return (
           
            <TableContainer style={{marginTop:"10px", width:"800px"}}>
                <Table size="small">
                    <TableHead >
                        <TableRow>
                            <TableCell align="center">firstName</TableCell>
                            <TableCell align="center">lastName</TableCell>
                            <TableCell align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {itemsArr.map((element) =>
                            <TableRow key={Math.random()} style={{ textAlign: "center" }}>
                                <TableCell align="center">{element.firstName}</TableCell>
                                <TableCell align="center">{element.lastName}</TableCell>
                                <TableCell align="center"><Button color="secondary" variant="contained" onClick={() => delItem(element)}><DeleteIcon /></Button></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}