import React, { forwardRef } from 'react'
import MaterialTable from 'material-table'

import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import { Text } from '../Text'
import { Box } from '@material-ui/core'

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
}

export const TableDynamic = ({
  stateFilterCategory,
  viewsAllDatas,
  inputText,
  eventActionButtons
}) => {
  return (
    <div>
      {
        stateFilterCategory.data.length > 0
          ? (
            <MaterialTable
              icons={tableIcons}
              title={
                <Text
                  type='span'
                  fontFamily='RobotoBlack'
                  title={
                    viewsAllDatas
                      ? `Has seleccionado todos los productos - (${stateFilterCategory.data.length})`
                      : `Resultado de busqueda - (${stateFilterCategory.data.length})`
                  }
                  fontSize='17px'
                  color='#202E5D'
                />
              }
              columns={[
                { title: 'ID', field: 'id' },
                { title: 'Index', field: 'index' },
                { title: 'Nombre', field: 'name' },
                { title: 'Fecha', field: 'createdAt' },
                { title: 'Categoría', field: 'category' },
                { title: 'Tags', field: 'tags' }
              ]}
              data={stateFilterCategory.data}
              options={{
                rowStyle: {
                  color: '',
                  backgroundColor: '',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  paddingLeft: '50px'
                },

                headerStyle: {
                  backgroundColor: 'rgba(133, 161, 173, 0.03)',
                  padding: '10px',
                  fontFamily: 'RobotoBold',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  paddingLeft: '20px'
                },

                search: viewsAllDatas
              }}
              localization={{
                toolbar: {
                  searchPlaceholder: 'Buscar...'
                },
                pagination: {
                  firstTooltip: 'Primer página',
                  previousTooltip: 'Página anterior',
                  nextTooltip: 'Siguiente página',
                  lastTooltip: 'Última página',
                  labelRowsSelect: 'Filas',
                  labelDisplayedRows: '{from}-{to} de {count}'
                },
                body: {
                  emptyDataSourceMessage: 'No se han encontrado registros'
                }
              }}
            />
            )
          : viewsAllDatas && stateFilterCategory.data.length === 0
            ? (
              <Box display='flex' width='100%' height='calc(100vh - 39vh)' justifyContent='center' alignItems='center'>
                <Text
                  type='span'
                  fontFamily='RobotoBold'
                  title='Filtre los datos por categorias'
                  fontSize='14px'
                  color='#202E5D'
                />
              </Box>
              )
            : eventActionButtons && inputText && stateFilterCategory.data.length === 0
              ? (
                <Box display='flex' width='100%' height='calc(100vh - 39vh)' justifyContent='center' alignItems='center'>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='No se encontro resultado'
                    fontSize='14px'
                    color='#202E5D'
                  />
                </Box>
                )
              : (
                <Box display='flex' width='100%' height='calc(100vh - 39vh)' justifyContent='center' alignItems='center'>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title=''
                    fontSize='14px'
                    color='#202E5D'
                  />
                </Box>
                )
      }
    </div>
  )
}
