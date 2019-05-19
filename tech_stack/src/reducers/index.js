import { combineReducers } from 'redux';

import libraries from './library'
import selectedLibraryId from './selection'

export default combineReducers({
    libraries,
    selectedLibraryId
})