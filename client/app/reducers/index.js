/**
 * Created by wliuhuiz on 9/13/15.
 */
import { combineReducers } from 'redux';
import {modalButton, searchPanel} from './dashboard-reducers';

export default combineReducers({
    modalButton,
    searchPanel
});