import React, { useEffect } from 'react'
import axios from 'axios';

import { start } from '@/app/slices/adminSlice';
import { start as clientsSliceStart } from '@/app/slices/clientsSlice';
import { start as rawMaterialsAndWorkPricesSliceStart } from '@/app/slices/rawMaterialsAndWorkPricesSlice';
import { start as shopsSliceStart } from '@/app/slices/shopsSlice';
import { start as suppliersSliceStart } from '@/app/slices/suppliersSlice';
import { start as warehousesSliceStart } from '@/app/slices/warehousesSlice';
import { start as workersSliceStart } from '@/app/slices/workersSlice';
import { start as worksSliceStart } from '@/app/slices/worksSlice';

import { useAppDispatch, useAppSelector } from '../app/hooks';

const RealtimeGetReq = () => {
    const dispatch = useAppDispatch();
    const suppliersChanged = useAppSelector((state) => state.suppliersChanged.value)
    const clientsChanged = useAppSelector((state) => state.clientsChanged.value)
    const workersChanged = useAppSelector((state) => state.workersChanged.value)
    const worksChanged = useAppSelector((state) => state.worksChanged.value)
    const warehousesChanged = useAppSelector((state) => state.warehousesChanged.value)
    const rawMaterialsAndWorkPricesChanged = useAppSelector((state) => state.rawMaterialsAndWorkPricesChanged.value)
    const shopsChanged = useAppSelector((state) => state.shopsChanged.value)

    useEffect(() => {
        const admin = JSON.parse(localStorage.getItem('tokens'))
        dispatch(start(admin));
    }, [])

    useEffect(() => {
        (async function () {
            const { data } = await axios.get("http://localhost:5500/suppliers")
            dispatch(suppliersSliceStart(data))
        }());
    }, [suppliersChanged])
    useEffect(() => {
        (async function () {
            const { data } = await axios.get("http://localhost:5500/clients")
            dispatch(clientsSliceStart(data))
        }());
    }, [clientsChanged])
    useEffect(() => {
        (async function () {
            const { data } = await axios.get("http://localhost:5500/workers")
            dispatch(workersSliceStart(data))
        }());
    }, [workersChanged])
    useEffect(() => {
        (async function () {
            const { data } = await axios.get("http://localhost:5500/works")
            dispatch(worksSliceStart(data))
        }());
    }, [worksChanged])
    useEffect(() => {
        (async function () {
            const { data } = await axios.get("http://localhost:5500/warehouses")
            dispatch(warehousesSliceStart(data))
        }());
    }, [warehousesChanged])
    useEffect(() => {
        (async function () {
            const { data } = await axios.get("http://localhost:5500/rawMaterialsAndWorkPrices")
            dispatch(rawMaterialsAndWorkPricesSliceStart(data))
        }());
    }, [rawMaterialsAndWorkPricesChanged])
    useEffect(() => {
        (async function () {
            const { data } = await axios.get("http://localhost:5500/shops")
            dispatch(shopsSliceStart(data))
        }());
    }, [shopsChanged])

    return (
        <></>
    )
}

export default RealtimeGetReq