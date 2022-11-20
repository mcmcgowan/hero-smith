import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../client/features/tempfeat/tempSlice' //TODO: replace once real features are added

export default configureStore({
  reducer: {
      counter: counterReducer //TODO: replace once real features are added
  }
})