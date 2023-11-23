// PartList.tsx

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchParts, Part} from '../actions/partsActions';
import {AppDispatchThunkType, AppStateType} from "../state/store";

const PartList: React.FC = () => {
    const dispatch = useDispatch<AppDispatchThunkType>();
    const parts = useSelector<AppStateType, Part[]>(state => state.parts.parts);
    const loading = useSelector<AppStateType, boolean>((state) => state.parts.loading);

    useEffect(() => {
        dispatch(fetchParts());
    }, [dispatch]);

    return (
        <div className="part-list">
            {loading ? (
                <p>Loading...</p>
            ) : (
                parts.map((part: Part) => (
                    <div className="part-card" key={part.id}>
                        <h2>{part.name}</h2>
                        {/* Другие поля запчасти */}
                    </div>
                ))
            )}
        </div>
    );
};

export default PartList;
