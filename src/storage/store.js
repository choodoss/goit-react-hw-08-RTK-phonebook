import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducerUser } from "./userSlice";
import { reducerContact } from "./contactsSlice";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, reducerUser)

export const store = configureStore({
    reducer: {
        contacts: reducerContact,
        user: persistedReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})
export const persistor = persistStore(store)

