import { configureStore } from "@reduxjs/toolkit";

import admin from './slices/adminSlice';
import suppliers from './slices/suppliersSlice';
import clients from './slices/clientsSlice';
import workers from './slices/workersSlice';
import works from './slices/worksSlice';
import warehouses from './slices/warehousesSlice';
import shops from './slices/shopsSlice';
import rawMaterialsAndWorkPrices from './slices/rawMaterialsAndWorkPricesSlice';

import clientsChanged from './slices/clientsChangedSlice';
import suppliersChanged from './slices/suppliersChangedSlice';
import worksChanged from './slices/worksChangedSlice';
import workersChanged from './slices/workersChangedSlice';
import warehousesChanged from './slices/warehousesChangedSlice';
import rawMaterialsAndWorkPricesChanged from './slices/rawMaterialsAndWorkPricesChangedSlice';
import shopsChanged from './slices/shopsChangedSlice';

export const store = configureStore({
    reducer: {
        admin,
        suppliers,
        clients,
        workers,
        works,
        warehouses,
        shops,
        rawMaterialsAndWorkPrices,

        clientsChanged,
        suppliersChanged,
        worksChanged,
        workersChanged,
        warehousesChanged,
        rawMaterialsAndWorkPricesChanged,
        shopsChanged,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;