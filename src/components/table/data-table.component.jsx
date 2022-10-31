import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import {visuallyHidden} from '@mui/utils';
import ProgressBa from './ProgressBa';
import {serviceCompletion} from "../../api/servicesCompletionApi";
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'asc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
const headCellsPlanA = [
    {
        id: 'proposalDate',
        numeric: false,
        disablePadding: false,
        label: 'Proposal Date',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Progress',
    },
    {
        id: 'done',
        numeric: false,
        disablePadding: false,
        label: 'Done',
    },
];
const headCellsPlanB = [
    {
        id: 'proposalDate',
        numeric: false,
        disablePadding: false,
        label: 'Proposal Date',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Progress',
    },
    {
        id: 'done',
        numeric: false,
        disablePadding: false,
        label: 'Done',
    },
    {
        id: 'planB',
        numeric: false,
        disablePadding: false,
        label: 'Plan B',
    }


];
const headCellsPlanC = [
    {
        id: 'completedDate',
        numeric: false,
        disablePadding: false,
        label: 'Completed Date',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Progress',
    },
    {
        id: 'done',
        numeric: false,
        disablePadding: false,
        label: 'Done',
    },
];

function EnhancedTableHead(props) {
    const {order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    const planId = useSelector(state => state.order.plan);
    let headCells = null;
    switch (planId) {
        case 1:
            headCells = headCellsPlanA;
            break;
        case 2:
            headCells = headCellsPlanB;
            break;
        case 3:
            headCells = headCellsPlanC;
            break;


    }

    return (
        <TableHead>
            <TableRow>

                {headCells.map((headCell) => (

                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const {numSelected} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} finished
                </Typography>
            ) : (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    MOVING STATUS
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Done">
                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon/>
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('proposalDate');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);

    const orderId = useSelector(state => state.order.orderId)


    const [rows, setRows] = useState([])

    const getServiceCompletionData = async () => {
        try {
            const response = await serviceCompletion(orderId)
            setRows(response);
        } catch (e) {
            alert('error')
        }
    }

    useEffect(() => {
        getServiceCompletionData();
    }, []);
    console.log("rows", rows);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const orderStatus = useSelector(state => state.order.orderStatus)

    const planId = useSelector(state => state.order.plan);
    let headCells = null;
    switch (planId) {
        case 1:
            headCells = headCellsPlanA;
            break;
        case 2:
            headCells = headCellsPlanB;
            break;
        case 3:
            headCells = headCellsPlanC;
            break;

    }

    return (
        <Box style={{
            display: 'block',
            padding: 30
        }} sx={{width: '100%'}}>

            <Paper sx={{width: '100%', mb: 2}}>
                <EnhancedTableToolbar numSelected={selected.length}/>
                <ProgressBa value={orderStatus}/>
                <TableContainer style={{
                    display: 'block',
                    padding: 30
                }}>
                    <Table
                        sx={{minWidth: 700}}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead style={{
                            display: 'block',
                            padding: 30
                        }}
                                           numSelected={selected.length}
                                           order={order}
                                           orderBy={orderBy}
                                           onSelectAllClick={handleSelectAllClick}

                                           rowCount={rows.length}
                        />

                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(index);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    // theo hang co duowc nhung
                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={index}
                                            selected={isItemSelected}
                                        >
                                            {
                                                planId === 3 &&
                                                <TableCell align="center">
                                                    {row.completionDate}
                                                </TableCell>
                                            }

                                            {
                                                planId === 1 || planId === 2 &&
                                                <TableCell align="center">
                                                    {row.proposedDate}
                                                </TableCell>
                                            }

                                            <TableCell align="left">{row.serviceContent}</TableCell>
                                            {planId === 3 &&  <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    disabled={true}
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            }

                                            {planId === 1 || planId === 2 &&
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                            }


                                            {planId === 2 && <TableCell align="right">{row.serviceRequired}</TableCell>}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 40 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </Box>
    );
}
