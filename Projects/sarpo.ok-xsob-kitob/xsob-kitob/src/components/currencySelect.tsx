import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { MenuItem, Select, Typography } from '@mui/material';
import { useEffect } from 'react';

const CurrencySelect = (props: any) => {
    const [selected, setSelected] = useState('');

    useEffect(() => {
        props.data.map((supplier) => {
            if (supplier.default) {
                setSelected(supplier.currency)
            }
        })
    }, [props.data])

    const filtered = props.data.filter((total) => {
        return total.currency === selected;
    });

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    return (
        <>
            <StyledTableCell align="right">
                <Select
                    id="demo-simple-select"
                    labelId="demo-simple-select-label"
                    size='small'
                    value={selected}
                    onChange={(event: any) => setSelected(event.target.value)}
                >
                    {
                        props.data.map(({ id, currency, default }) => (
                            <MenuItem key={id} value={currency}>
                                {currency}
                            </MenuItem>
                        ))
                    }
                </Select>
            </StyledTableCell>
            <StyledTableCell align="right">
                {
                    selected !== "" ?
                        filtered.map(({ id, total }) => (
                            <Typography key={id}>{total}</Typography>
                        ))
                        : '0'
                }
            </StyledTableCell>
        </>
    )
}

export default CurrencySelect;