import Head from 'next/head'
import { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { start } from '@/app/slices/suppliersChangedSlice';

import NavigationLayout from '@/layouts/NavigationLayout/NavigationLayout';
import CurrencySelect from '../components/currencySelect';

import { styled, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box, Modal, TextField, Stack, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
// import { Stack } from '@mui/system';

const Suppliers = () => {
    const admin = useAppSelector(state => state.admin.value);
    const state = useAppSelector(state => state.suppliers.value);
    const dispatch = useAppDispatch();

    const [modal, setModal] = useState(false);
    const [modalStatus, setModalStatus] = useState('')
    const [modalErrorStatus, setModalErrorStatus] = useState(false)
    const [modalEdit, setModalEdit] = useState({})
    const [modalEditPassword, setModalEditPassword] = useState('')
    const [createdCurrency, setCreatedCurrency] = useState(2)
    const [currency, setCurrency] = useState(<Stack key={1} direction='row' spacing={1}>
        <TextField fullWidth label="Currency" name='currency1' />
        <TextField fullWidth label="Total" type='number' name='total1' />
        <FormControlLabel value='default/1' control={<Radio />} label='' />
    </Stack>)

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    let newCurrency = <Stack key={createdCurrency} direction='row' spacing={1}>
        <TextField fullWidth label="Currency" name={`currency${createdCurrency}`} />
        <TextField fullWidth label="Total" type='number' name={`total${createdCurrency}`} />
        <FormControlLabel value={`default/${createdCurrency}`} control={<Radio />} label='' />
    </Stack>

    const createSupplier = async (event: any) => {
        event.preventDefault();
        let form = document.forms.createSupplier
        let num = 1;

        let arr: {}[] = []
        let newSupplier = {
            id: uuidv4(),
            total: arr
        };

        let fm = await new FormData(form);
        await fm.forEach((value, key) => {
            if (key === 'name' || key === 'phone') {
                newSupplier[key] = value;
            } else if (key === `currency${num}`) {
                arr[num - 1] = {
                    id: uuidv4(),
                    currency: value,
                    default: false
                }
                if (arr[num - 1].total && arr[num - 1].currency) {
                    num = num + 1
                }
            } else if (key === `total${num}`) {
                arr[num - 1] = {
                    ...arr[num - 1],
                    total: value
                }
                if (arr[num - 1].total && arr[num - 1].currency) {
                    num = num + 1
                }
            } else if (key === `currencyDefault`) {
                let numb = value.split('/')[1];
                arr[numb - 1] = {
                    ...arr[numb - 1],
                    default: true
                }
            }
        });
        console.log(newSupplier);

        await axios.post('http://localhost:5500/suppliers', newSupplier)
            .then(function (response) {
                console.log(response);
                dispatch(start());
                closeModal();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const deleteSupplier = (event: any) => {
        event.preventDefault();

        if (event.target[0].value === admin.password) {
            axios.delete(`http://localhost:5500/suppliers/${modalEdit.id}`)
                .then(res => {
                    dispatch(start());
                    closeModal();
                })
        } else {
            setModalErrorStatus(true)
        }
    }

    const editSupplier = (event: any) => {
        event.preventDefault();

        if (event.target[0].value === admin.password) {

        } else {
            setModalErrorStatus(true)
        }
    }

    const createCurrency = () => {
        setCreatedCurrency(createdCurrency + 1);
        setCurrency([currency, newCurrency]);
    };

    const openModal = () => {
        setModal(true)
    };

    const closeModal = () => {
        setModal(false);
        setCurrency(<Stack key={1} direction='row' spacing={1}>
            <TextField fullWidth label="Currency" name='currency1' />
            <TextField fullWidth label="Total" type='number' name='total1' />
            <FormControlLabel value='default/1' control={<Radio />} label='' />
        </Stack>);
        setCreatedCurrency(2)
        setModalStatus('');
        setModalEdit({});
        setModalErrorStatus(false);
        setModalEditPassword('');
    };

    return (
        <>
            <Head>
                <title>Suppliers</title>
                <meta name="description" content="Creater by little_7o7" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationLayout navigation='suppliers'>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="right">Numbers</StyledTableCell>
                                <StyledTableCell align="right">Currency</StyledTableCell>
                                <StyledTableCell align="right">Total</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button color='inherit' onClick={() => { setModalStatus('create'); openModal() }} ><AddIcon /></Button>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.map((supplier) => (
                                <StyledTableRow key={supplier.name} sx={{ alignItems: 'center' }}>
                                    <StyledTableCell component="th" scope="row"><Typography>{supplier.name}</Typography></StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Box display='flex' justifyContent='flex-end' gap='10px'>
                                            <Typography key={supplier.phone}>{supplier.phone}</Typography>
                                        </Box>
                                    </StyledTableCell>
                                    <CurrencySelect data={supplier.total} />
                                    <StyledTableCell align="right" sx={{ display: 'flex', gap: "5px" }}>
                                        <IconButton onClick={() => { setModalStatus('edit'); openModal(); setModalEdit(supplier) }} >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => { setModalStatus('delete'); openModal(); setModalEdit(supplier) }} >
                                            <DeleteIcon />
                                        </IconButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </NavigationLayout>
            <Modal
                keepMounted
                open={modal}
                onClose={() => closeModal()}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    {modalStatus === 'create' ?
                        <form name="createSupplier" onSubmit={createSupplier}>
                            <Typography textAlign='center' marginBottom={1.5} fontSize={20}>Create Supplier</Typography>
                            <Box display='flex' flexDirection='column' gap={1}>
                                <TextField fullWidth label="Name" name='name' />
                                <TextField fullWidth label="Phone" name='phone' />
                                <RadioGroup name="currencyDefault">
                                    <Stack spacing={1}>
                                        {currency}
                                    </Stack>
                                </RadioGroup>
                                <Button onClick={createCurrency} fullWidth size='small' variant="contained" color='inherit'>Create Currency</Button>
                                <Button type='submit' fullWidth variant="contained" color='inherit'>Create</Button>
                            </Box>
                        </form> : modalStatus === 'edit' ?
                            <form name="deleteSupplier" onSubmit={editSupplier}>
                                <Typography textAlign='center' marginBottom={1.5} fontSize={20}>Edit Supplier</Typography>
                                <Box display='flex' flexDirection='column' gap={1}>
                                    <TextField fullWidth label="Admin Password" value={modalEditPassword} onChange={(e) => setModalEditPassword(e.target.value)} />
                                    {modalErrorStatus ? <span>Pleace check your password</span> : ''}
                                    <Button type='submit' fullWidth variant="contained" color='inherit'>Edit</Button>
                                </Box>
                            </form>
                            :
                            <form name="editSupplier" onSubmit={deleteSupplier}>
                                <Typography textAlign='center' marginBottom={1.5} fontSize={20}>Delete Supplier</Typography>
                                <Box display='flex' flexDirection='column' gap={1}>
                                    <TextField fullWidth label="Admin Password" value={modalEditPassword} onChange={(e) => setModalEditPassword(e.target.value)} />
                                    {modalErrorStatus ? <span>Pleace check your password</span> : ''}
                                    <Button type='submit' fullWidth variant="contained" color='inherit'>Delete</Button>
                                </Box>
                            </form>
                    }
                </Box>
            </Modal>
        </>
    )
}

export default Suppliers;
