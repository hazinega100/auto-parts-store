import {
    FETCH_PARTS_REQUEST,
    FETCH_PARTS_SUCCESS,
    FETCH_PARTS_FAILURE, PartsActionTypes, Part
} from '../actions/partsActions';

export interface PartsStateType {
    parts: Part[];
    loading: boolean;
    error: string;
}

const initialState: PartsStateType = {
    parts: [],
    loading: false,
    error: ''
};

const partsReducer = (state = initialState, action: PartsActionTypes): PartsStateType => {
    switch (action.type) {
        case FETCH_PARTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PARTS_SUCCESS:
            return {
                ...state,
                loading: false,
                parts: action.payload,
                error: ''
            };
        case FETCH_PARTS_FAILURE:
            return {
                ...state,
                loading: false,
                parts: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default partsReducer;
