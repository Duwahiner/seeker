import { Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { ContentSearch } from '../../components/ContentSearch'

import {
  getFilterResultSearchData,
  getRunSearch,
  resetResultSearch,
  setActionButton,
  setInputText
} from '../../reducers/homeReducer'

const ContainerSearch = ({
  theme,
  filterResultSearch,
  handleChangeChecked,
  handleActiveModal,
  viewsAllDatas,
  handleChangeSwitch,
  validatedFilter,
  inputText,
  consfigAdvancedInput,
  filterResultSearchData,
  getMapString
}) => {
  const dispatch = useDispatch()

  const onChange = (event) => {
    const value = event.target.value

    dispatch(setInputText(value))
    dispatch(getFilterResultSearchData())
    dispatch(setActionButton(false))
  }

  const handleGetRunSearch = () => {
    dispatch(getRunSearch())
    dispatch(setActionButton(true))
  }

  const handleResetResultSearch = (text) => {
    dispatch(resetResultSearch({ data: [] }))
    dispatch(setInputText(text))
  }

  const handleResetBlur = () => {
    setTimeout(() => {
      dispatch(resetResultSearch({ data: [] }))
      dispatch(setActionButton(false))
    }, 300)
  }

  return (
    <Box width='100%'>
      <ContentSearch
        theme={theme}
        inputText={inputText}
        onChange={onChange}
        filterResultSearch={filterResultSearch}
        handleGetRunSearch={handleGetRunSearch}
        handleChangeChecked={handleChangeChecked}
        handleActiveModal={handleActiveModal}
        viewsAllDatas={viewsAllDatas}
        handleChangeSwitch={handleChangeSwitch}
        validatedFilter={validatedFilter}
        consfigAdvancedInput={consfigAdvancedInput}
        filterResultSearchData={filterResultSearchData}
        getMapString={getMapString}
        handleResetResultSearch={handleResetResultSearch}
        handleResetBlur={handleResetBlur}
      />
    </Box>
  )
}

export default ContainerSearch
