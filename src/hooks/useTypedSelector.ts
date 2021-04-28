/* eslint-disable import/prefer-default-export */
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
