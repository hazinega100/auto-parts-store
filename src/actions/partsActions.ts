import { Dispatch } from 'redux';
import axios from 'axios';

export interface Part {
    id: number;
    name: string;
    // Добавьте другие поля согласно вашим данным
}

export const FETCH_PARTS_REQUEST = 'FETCH_PARTS_REQUEST';
export const FETCH_PARTS_SUCCESS = 'FETCH_PARTS_SUCCESS';
export const FETCH_PARTS_FAILURE = 'FETCH_PARTS_FAILURE';

interface FetchPartsRequestAction {
    type: typeof FETCH_PARTS_REQUEST;
}

interface FetchPartsSuccessAction {
    type: typeof FETCH_PARTS_SUCCESS;
    payload: Part[];
}

interface FetchPartsFailureAction {
    type: typeof FETCH_PARTS_FAILURE;
    payload: string;
}

export type PartsActionTypes =
    | FetchPartsRequestAction
    | FetchPartsSuccessAction
    | FetchPartsFailureAction;

export const fetchPartsRequest = (): PartsActionTypes => {
    return {
        type: FETCH_PARTS_REQUEST
    };
};

export const fetchPartsSuccess = (parts: Part[]): PartsActionTypes => {
    return {
        type: FETCH_PARTS_SUCCESS,
        payload: parts
    };
};

export const fetchPartsFailure = (error: string): PartsActionTypes => {
    return {
        type: FETCH_PARTS_FAILURE,
        payload: error
    };
};

export const fetchParts = () => {
    return (dispatch: Dispatch<PartsActionTypes>) => {
        dispatch(fetchPartsRequest());
        axios.get<Part[]>('API URL')
            .then(response => {
                const parts = response.data;
                dispatch(fetchPartsSuccess(parts));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchPartsFailure(errorMsg));
            });
    };
};
