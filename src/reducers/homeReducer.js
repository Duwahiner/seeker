const GET_DATA_JSON = 'GET_DATA_JSON'
const SET_VIEW_ALL_DATA = 'SET_VIEW_ALL_DATA'
const GET_RUN_SEARCH = 'GET_RUN_SEARCH'
const SET_INPUT_TEXT = 'SET_INPUT_TEXT'
const SET_STATE_FILTER_CATEGORY = 'SET_STATE_FILTER_CATEGORY'
const ACTIVE_ADVANCED_MODAL = 'ACTIVE_ADVANCED_MODAL'
const SET_FILTER_DATA = 'SET_FILTER_DATA'
const SET_FILTER_CONFIG_ADVENCED = 'SET_FILTER_CONFIG_ADVENCED'
const SET_FILTER_CONFIG_ADVENCED_CURRENT_INPUT = 'SET_FILTER_CONFIG_ADVENCED_CURRENT_INPUT'
const SET_VELIDATED_FILTER = 'SET_VELIDATED_FILTER'
const SET_ACTION_BUTTON = 'SET_ACTION_BUTTON'
const GET_FILTER_RESULT_SEARCH_DATA = 'GET_FILTER_RESULT_SEARCH_DATA'
const RESET_RESULT_SEARCH = 'RESET_RESULT_SEARCH'

export const getDataJson = (data = {}) => {
  const users = data.data.users.map(mapDataUser)
  const boards = data.data.boards.map(mapDataBoards)
  const sources = data.data.sources.map(mapDataSources)
  const reconciliations = data.data.reconciliations.map(mapDataReconciliations)

  return {
    type: GET_DATA_JSON,
    payload: {
      users: { data: users },
      boards: { data: boards },
      sources: { data: sources },
      reconciliations: { data: reconciliations }
    }
  }
}

export const setInputText = (inputText = '') => {
  return {
    type: SET_INPUT_TEXT,
    payload: {
      text: inputText
    }
  }
}

export const activeAdvancedModal = (active = false) => {
  return {
    type: ACTIVE_ADVANCED_MODAL,
    payload: {
      active
    }
  }
}

export const getRunSearch = (data) => {
  return {
    type: GET_RUN_SEARCH,
    payload: data
  }
}

export const setFilterData = (setFilter = {
  name: '',
  checked: true,
  category: ''
}) => {
  return {
    type: SET_FILTER_DATA,
    payload: setFilter
  }
}

export const setFilterConfigAdvenced = (setFilter = {
  name: '',
  checked: true,
  category: ''
}) => {
  return {
    type: SET_FILTER_CONFIG_ADVENCED,
    payload: setFilter
  }
}

export const setFilterConfigAdvencedCurrentInput = (setFilter = {
  text: {
    name: 'text',
    checked: true
  },
  date: {
    name: 'date',
    checked: false
  },
  number: {
    name: 'number',
    checked: false
  }
}) => {
  return {
    type: SET_FILTER_CONFIG_ADVENCED_CURRENT_INPUT,
    payload: setFilter
  }
}

export const setViewAllData = (viewAllData = {
  checked: false
}) => {
  return {
    type: SET_VIEW_ALL_DATA,
    payload: viewAllData
  }
}

export const setValidatedFilter = (dataFilter = []) => {
  return {
    type: SET_VELIDATED_FILTER,
    payload: dataFilter
  }
}

export const setStateFilterCategory = (dataFilter = []) => {
  return {
    type: SET_STATE_FILTER_CATEGORY,
    payload: dataFilter
  }
}

export const setActionButton = (event = false) => {
  return {
    type: SET_ACTION_BUTTON,
    payload: event
  }
}

export const getFilterResultSearchData = () => {
  return {
    type: GET_FILTER_RESULT_SEARCH_DATA
  }
}

export const resetResultSearch = (getData = {
  data: []
}) => {
  return {
    type: RESET_RESULT_SEARCH,
    payload: { data: getData.data }
  }
}

const initialState = {
  eventActionButtons: false,
  viewsAllDatas: false,
  activeAdvancedModal: false,
  getInputText: '',
  stateFilterCategory: { data: [] },
  validatedFilter: [],

  consfigAdvanced: {
    inputSearch: {
      text: {
        name: 'text',
        checked: true
      },

      date: {
        name: 'date',
        checked: false
      },

      number: {
        name: 'number',
        checked: false
      }
    },

    filterCategorySearch: {
      users: {
        name: 'users',
        checked: true
      },

      boards: {
        name: 'boards',
        checked: true
      },

      sources: {
        name: 'sources',
        checked: true
      },

      reconciliations: {
        name: 'reconciliations',
        checked: true
      }
    }
  },

  filterResultSearch: {
    users: {
      name: 'users',
      checked: true
    },

    boards: {
      name: 'boards',
      checked: true
    },

    sources: {
      name: 'sources',
      checked: true
    },

    reconciliations: {
      name: 'reconciliations',
      checked: true
    }
  },

  getResultSearch: { data: [] },

  filterResultSearchData: { data: [] },

  getData: {
    users: { data: [] },
    boards: { data: [] },
    sources: { data: [] },
    reconciliations: { data: [] }
  }
}

export const homeReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_DATA_JSON:
      return Object.assign({}, {
        ...state,
        getData: payload
      })

    case SET_STATE_FILTER_CATEGORY:
      return Object.assign({}, {
        ...state,
        stateFilterCategory: { data: payload }
      })

    case SET_INPUT_TEXT:
      return Object.assign({}, {
        ...state,
        getInputText: payload.text
      })

    case RESET_RESULT_SEARCH:
      return Object.assign({}, {
        ...state,
        filterResultSearchData: { data: payload.data }
      })

    case GET_RUN_SEARCH:
      return Object.assign({}, {
        ...state,
        getResultSearch: { data: payload || runSearch(state) }
      })

    case GET_FILTER_RESULT_SEARCH_DATA:
      return Object.assign({}, {
        ...state,
        filterResultSearchData: { data: runSearch(state).slice(0, 12) }
      })

    case ACTIVE_ADVANCED_MODAL:
      return Object.assign({}, {
        ...state,
        activeAdvancedModal: payload.active
      })

    case SET_VELIDATED_FILTER:
      return Object.assign({}, {
        ...state,
        validatedFilter: payload
      })

    case SET_ACTION_BUTTON:
      return Object.assign({}, {
        ...state,
        eventActionButtons: payload
      })

    case SET_VIEW_ALL_DATA:
      return Object.assign({}, {
        ...state,
        viewsAllDatas: payload.checked,
        filterResultSearch:
          payload.checked
            ? { ...initialState.filterResultSearch }
            : { ...state.filterResultSearch }
      })

    case SET_FILTER_DATA:
      return Object.assign({}, {
        ...state,
        filterResultSearch: {
          ...state.filterResultSearch,
          [payload.category]: {
            name: payload.name,
            checked: payload.checked
          }
        }
      })

    case SET_FILTER_CONFIG_ADVENCED:
      return Object.assign({}, {
        ...state,
        consfigAdvanced: {
          ...state.consfigAdvanced,
          filterCategorySearch: {
            ...state.consfigAdvanced.filterCategorySearch,
            [payload.category]: {
              name: payload.name,
              checked: payload.checked
            }
          }
        }
      })

    case SET_FILTER_CONFIG_ADVENCED_CURRENT_INPUT:
      return Object.assign({}, {
        ...state,
        consfigAdvanced: {
          ...state.consfigAdvanced,
          inputSearch: payload
        }
      })

    default:
      return state
  }
}

const runSearch = (state) => {
  const rule = new RegExp(`(${state.getInputText})`, 'gi')
  const ruleNumbre = new RegExp(`^(${state.getInputText})`, 'gi')
  const valuesFilte = Object.values(state.consfigAdvanced.filterCategorySearch)

  const resultsFilter = valuesFilte.filter((item) => {
    return item.checked
  })
    .map((item) => Object.assign({}, state.getData[item.name]))
    .map((item) => item.data)
    .flat(2)

  // Posible mejora filtrar por la entrada de texto que se haya definido.
  const resultGroupData = resultsFilter.filter((item) => {
    if (state.getInputText) {
      const validatedName = rule.test(item.name)
      const validatedTags = rule.test(item.tags)
      const validatedId = rule.test(item.id)
      const validatedIndex = ruleNumbre.test(item.index)
      const validatedCreatedAt = rule.test(item.createdAt)
      const validatedCategory = rule.test(item.category)
      const validatedEmail = rule.test(item?.email)

      if (
        validatedName ||
        validatedTags ||
        validatedIndex ||
        validatedCreatedAt ||
        validatedId ||
        validatedEmail ||
        validatedCategory
      ) return true
      else return false
    } else return false
  })

  return resultGroupData
}

const mapDataUser = (user) => {
  const result = Object.assign({}, {
    category: 'users',
    id: user._id,
    index: user.index,
    isActive: user.isActive,
    picture: user.picture,
    age: user.age,
    name: user.name.firstName,
    nameCopy: user.name,
    gender: user.gender,
    company: user.company,
    email: user.email,
    phone: user.phone,
    address: user.address,
    createdAt: user.createdAt,
    tags: user.tags.join(' - ')
  })

  return result
}

const mapDataBoards = (boards) => {
  const result = Object.assign({}, {
    category: 'boards',
    id: boards._id,
    index: boards.index,
    isActive: boards.isActive,
    name: boards.dashboardName,
    visualType: boards.visualType,
    createdAt: boards.timestamp.createdAt,
    updateAt: boards.timestamp.updateAt,
    timestampCopy: boards.timestamp,
    description: boards.description,
    tags: boards.tags.join(' - ')
  })

  return result
}

const mapDataSources = (sources) => {
  const result = Object.assign({}, {
    category: 'sources',
    id: sources._id,
    index: sources.index,
    isActive: sources.isActive,
    name: sources.name,
    company: sources.company,
    createdAt: sources.timestamp.createdAt,
    updateAt: sources.timestamp.updateAt,
    timestampCopy: sources.timestamp,
    description: sources.description,
    tags: sources.tags.join(' - ')
  })

  return result
}

const mapDataReconciliations = (reconciliations) => {
  const result = Object.assign({}, {
    category: 'reconciliations',
    id: reconciliations._id,
    index: reconciliations.index,
    isActive: reconciliations.isActive,
    sourceA: reconciliations.sourceA,
    sourceB: reconciliations.sourceB,
    balance: reconciliations.balance,
    name: reconciliations.conciliationName,
    createdAt: reconciliations.timestamp.createdAt,
    updateAt: reconciliations.timestamp.updateAt,
    timestampCopy: reconciliations.timestamp,
    description: reconciliations.description,
    tags: reconciliations.tags.join(' - ')
  })

  return result
}
