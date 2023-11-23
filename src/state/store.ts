import {createStore, applyMiddleware, combineReducers, AnyAction} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import partsReducer from "../reducers/partsReducer";

const rootReducer = combineReducers({
    parts: partsReducer, // Замените на ваш редьюсер
    // Другие редьюсеры, если есть
});

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchThunkType = ThunkDispatch<AppStateType, unknown, AnyAction>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
