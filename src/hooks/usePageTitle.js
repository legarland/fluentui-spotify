import { useDispatch } from 'react-redux'
import { setPageTitle } from '../store/pageSlice'

const usePageTitle = (title) => {
  const dispatch = useDispatch()
  dispatch(setPageTitle(title))
}

export default usePageTitle
