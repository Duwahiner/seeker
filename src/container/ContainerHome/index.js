import { useCallback, useEffect } from 'react'
import { Box } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../../components/Layout'
import Main from '../../components/Main'

import { useTheme } from '../../hooks/useTheme'
import { dataRequestJson } from '../../sagas/fetchRequest'

// Consumiendo los Json.
import users from '../../assets/data/usuarios.json'
import boards from '../../assets/data/tableros.json'
import sources from '../../assets/data/fuetnes.json'
import reconciliations from '../../assets/data/conciliaciones.json'

import {
  activeAdvancedModal,
  getRunSearch,
  setActionButton,
  setFilterConfigAdvenced,
  setFilterConfigAdvencedCurrentInput,
  setFilterData,
  setInputText,
  setStateFilterCategory,
  setValidatedFilter,
  setViewAllData
} from '../../reducers/homeReducer'

import {
  getResultSearch,
  getConsfigAdvanced,
  getActiveAdvancedModal,
  getFilterResultSearch,
  getViewsAllDatas,
  getValidatedFilter,
  getStateData,
  getStateFilterCategory,
  getInputText,
  getEventActionButtons,
  getFilterResultSearchData
} from '../../celectors/getStateHome'
import { getMapString } from '../../util/util'

const ContainerHome = () => {
  const { theme } = useTheme()
  const inputText = useSelector(getInputText)
  const stateData = useSelector(getStateData)
  const resultSearch = useSelector(getResultSearch)
  const consfigAdvanced = useSelector(getConsfigAdvanced)
  const activeAdvanced = useSelector(getActiveAdvancedModal)
  const filterResultSearch = useSelector(getFilterResultSearch)
  const viewsAllDatas = useSelector(getViewsAllDatas)
  const validatedFilter = useSelector(getValidatedFilter)
  const stateFilterCategory = useSelector(getStateFilterCategory)
  const eventActionButtons = useSelector(getEventActionButtons)
  const filterResultSearchData = useSelector(getFilterResultSearchData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dataRequestJson({
      users: JSON.parse(JSON.stringify(users)),
      boards: JSON.parse(JSON.stringify(boards)),
      sources: JSON.parse(JSON.stringify(sources)),
      reconciliations: JSON.parse(JSON.stringify(reconciliations))
    }))
  }, [dispatch, consfigAdvanced])

  const handleChangeChecked = (event, nameAction) => {
    if (nameAction === 'configAdvanced') {
      dispatch(setFilterConfigAdvenced({
        category: event.target.name,
        name: event.target.name,
        checked: event.target.checked
      }))

      dispatch(setInputText(''))
      dispatch(setStateFilterCategory([]))
    }

    if (nameAction === 'filterResult') {
      dispatch(setActionButton(false))
      dispatch(setFilterData({
        category: event.target.name,
        name: event.target.name,
        checked: event.target.checked
      }))
    }
  }

  const handleChangeCheckedRadio = (event, nameAction) => {
    const copyFilterRadio = JSON.parse(JSON.stringify(consfigAdvanced.inputSearch))

    const extractValue = Object.values(copyFilterRadio)

    const result = extractValue.map((item) => {
      if (item.name === event.target.value) {
        Object.assign(item, { ...item, checked: event.target.checked })
      } else {
        Object.assign(item, { ...item, checked: false })
      }

      return item
    })

    if (nameAction === 'configAdvanced') {
      dispatch(setFilterConfigAdvencedCurrentInput({
        text: result[0],
        date: result[1],
        number: result[2]
      }))

      dispatch(setInputText(''))
      dispatch(setStateFilterCategory([]))
    }
  }

  const handleActiveModal = (active) => {
    dispatch(activeAdvancedModal(active))
  }

  const handleChangeSwitch = (event) => {
    dispatch(setViewAllData({ checked: event.target.checked }))
  }

  useEffect(() => {
    const valuesFilter = Object.values(consfigAdvanced.filterCategorySearch)

    const resultsMap = valuesFilter.filter((item) => {
      return item.checked
    }).map((item) => item.name)

    dispatch(setValidatedFilter(resultsMap))
  }, [consfigAdvanced, dispatch])

  const filterCategory = useCallback((dataOrigin) => {
    const valuesFilte = Object.values(filterResultSearch)

    const resultsFilter = valuesFilte.filter((item) => {
      return item.checked
    })
      .map((item) => Object.assign({}, dataOrigin[item.name]))
      .map((item) => item.data)
      .flat(2)

    return resultsFilter
  }, [filterResultSearch])

  useEffect(() => {
    if (viewsAllDatas) {
      const resultsFilter = filterCategory(stateData)

      dispatch(setInputText(''))
      dispatch(getRunSearch([]))
      dispatch(setActionButton(false))
      dispatch(setStateFilterCategory(resultsFilter))
    } else {
      if (inputText === '' && !eventActionButtons) dispatch(setStateFilterCategory([]))
    }
  }, [
    stateData,
    filterCategory,
    viewsAllDatas,
    inputText,
    eventActionButtons,
    dispatch
  ])

  const runFilterSearch = useCallback(() => {
    const valuesFilter = Object.values(filterResultSearch)
    const dataFilter = []

    valuesFilter.forEach((item) => {
      if (item.checked) {
        dataFilter.push(...resultSearch.data.filter((current) => {
          return current.category === item.name
        }))
      }
    })

    return dataFilter
  }, [filterResultSearch, resultSearch])

  useEffect(() => {
    if (!viewsAllDatas && eventActionButtons) {
      const dataFilter = runFilterSearch()

      dispatch(setStateFilterCategory(dataFilter))
    } else {
      if (!viewsAllDatas) {
        const dataFilter = runFilterSearch()

        dispatch(setStateFilterCategory(dataFilter))
      }
    }
  }, [
    viewsAllDatas,
    dispatch,
    eventActionButtons,
    runFilterSearch
  ])

  return (
    <Box>
      <Layout theme={theme}>
        <Main
          theme={theme}
          stateFilterCategory={stateFilterCategory}
          filterResultSearch={filterResultSearch}
          handleChangeChecked={handleChangeChecked}
          consfigAdvancedInput={consfigAdvanced}
          activeAdvancedModal={activeAdvanced}
          handleActiveModal={handleActiveModal}
          handleChangeCheckedRadio={handleChangeCheckedRadio}
          viewsAllDatas={viewsAllDatas}
          handleChangeSwitch={handleChangeSwitch}
          validatedFilter={validatedFilter}
          inputText={inputText}
          eventActionButtons={eventActionButtons}
          filterResultSearchData={filterResultSearchData}
          getMapString={getMapString}
        />
      </Layout>
    </Box>
  )
}

export default ContainerHome
