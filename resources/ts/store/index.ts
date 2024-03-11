import { configureStore, combineReducers } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { auth, layout, categories } from './slices'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
//import storage_session from "redux-persist/lib/storage/session";
import storage_local from "redux-persist/lib/storage"; /*Local storage */
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

let storage = storage_local;

const persistConfig:any = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['general']
};

const tmp:any = combineReducers({        
    auth,
    layout,
    categories,
    //[authApi.reducerPath]: authApi.reducer,
    //[workOrdersApi.reducerPath]: workOrdersApi.reducer,
    //[searchApi.reducerPath]: searchApi.reducer,
    //[employeeApi.reducerPath]: employeeApi.reducer,
  })
const persistedReducer:any = persistReducer(persistConfig, tmp);

export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
      //.concat(authApi.middleware)
      //.concat(workOrdersApi.middleware)
      //.concat(searchApi.middleware)
      //.concat(employeeApi.middleware)
      ,
})

export const persistor = persistStore(store)

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
