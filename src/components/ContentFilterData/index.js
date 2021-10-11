import { Box, Grid } from '@material-ui/core'
import styled from '@emotion/styled'

import { CheckBox } from '../CheckBox'
import { Text } from '../Text'

const Container = styled(Grid)`
  width: 100%;
  height: auto;
  min-height: 50px;
`

export const ContentFilterData = ({
  theme,
  handleChangeChecked,
  filterResultSearch,
  validatedFilter,
  viewsAllDatas
}) => {
  const validated = (value) => {
    const vews = viewsAllDatas === true ? viewsAllDatas : validatedFilter.includes(value)

    return vews
  }

  return (
    <Container container justifyContent='center' item xs={12}>
      <Box display='flex' width='100%' bgcolor='' alignItems='center'>
        <Box>
          <Box mr={3}>
            <Text
              type='span'
              fontFamily='RobotoBold'
              title='Filtro para los datos'
              fontSize='13px'
              color={theme.colors.bgHeader}
            />
          </Box>
        </Box>

        <Box mr={3}>
          <Box>
            <CheckBox
              theme={theme}
              title='Usuarios'
              nameType='users'
              handleChangeChecked={(event) =>
                handleChangeChecked(event, 'filterResult')}
              disabled={!validated('users')}
              checked={
                !validated('users')
                  ? false
                  : filterResultSearch.users.checked
              }
            />
          </Box>
        </Box>

        <Box mr={3}>
          <Box>
            <CheckBox
              theme={theme}
              title='Fuestes'
              nameType='sources'
              handleChangeChecked={(event) =>
                handleChangeChecked(event, 'filterResult')}
              disabled={!validated('sources')}
              checked={
                !validated('sources')
                  ? false
                  : filterResultSearch.sources.checked
              }
            />
          </Box>
        </Box>

        <Box mr={3}>
          <Box>
            <CheckBox
              theme={theme}
              title='Conciliaciones'
              nameType='reconciliations'
              handleChangeChecked={(event) =>
                handleChangeChecked(event, 'filterResult')}
              disabled={!validated('reconciliations')}
              checked={
                !validated('reconciliations')
                  ? false
                  : filterResultSearch.reconciliations.checked
              }
            />
          </Box>
        </Box>

        <Box>
          <Box>
            <CheckBox
              theme={theme}
              title='Tableros'
              nameType='boards'
              handleChangeChecked={(event) =>
                handleChangeChecked(event, 'filterResult')}
              disabled={!validated('boards')}
              checked={
                !validated('boards')
                  ? false
                  : filterResultSearch.boards.checked
              }
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
