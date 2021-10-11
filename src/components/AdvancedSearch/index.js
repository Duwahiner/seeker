import { createPortal as CreatePortal } from 'react-dom'
import { Box, Grid, IconButton } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import styled from '@emotion/styled'

import { Text } from '../Text'
import { CheckBox } from '../CheckBox'
import { Radio } from '../Radio'
import Buttons from '../Buttons'

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  z-index: 1000;
  top: 0;
  bottom: 0;
`

export const ContainerWrapper = styled.div`
  background: #ffffff;
  border-radius: 0.6rem;
  box-shadow: 0rem 1.25rem 2.5rem -0.75rem rgba(196, 196, 196, 0.35);
  box-sizing: border-box;
  padding: 1.25rem 1.875rem;
  width: 550px;
  min-width: 480px;
  z-index: 10;
`

export const IconContainer = styled(Box)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Divider = styled.hr`
  padding: 0 1.875rem;
  margin: 0;
  border-width: 0px;
  opacity: 0.3;
  border-bottom:
    solid 1px ${({ theme }) => theme.colors.colorFooterBorder};
`

export const AdvancedSearch = ({
  theme,
  handleChangeChecked,
  consfigAdvancedInput,
  handleActiveModal,
  handleChangeCheckedRadio
}) => {
  return CreatePortal(
    <Container>
      <ContainerWrapper>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Text
              type='span'
              fontFamily='RobotoBold'
              title='Configuración avanzada'
              fontSize='18px'
              color={theme.colors.bgHeader}
            />
          </Grid>

          <Grid item>
            <IconContainer>
              <IconButton
                aria-label='search'
                color='primary'
                onClick={() => handleActiveModal(false)}
              >
                <Close color='primary' style={{ fontSize: 22 }} />
              </IconButton>
            </IconContainer>
          </Grid>
        </Grid>

        <Grid>
          <Box mt={4}>
            <Divider />
          </Box>
        </Grid>

        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item xs={12}>
            <Box width='100%' mt={2} mb={2}>
              <Text
                type='span'
                fontFamily='Roboto'
                title='Elija una entrada de texto'
                fontSize='15px'
                color={theme.colors.colorCheckText}
              />
            </Box>
          </Grid>

          <Grid container item>
            <Grid item xs={12}>
              <Box>
                <Radio
                  theme={theme}
                  title='Texto'
                  size='small'
                  handleChangeCheckedRadio={handleChangeCheckedRadio}
                  label={[
                    {
                      title: 'Texto',
                      value: 'text',
                      mr: 2,
                      checked: consfigAdvancedInput.inputSearch.text.checked
                    },
                    {
                      title: 'Fecha',
                      value: 'date',
                      mr: 2,
                      checked: consfigAdvancedInput.inputSearch.date.checked
                    },
                    {
                      title: 'Número',
                      value: 'number',
                      mr: 3,
                      checked: consfigAdvancedInput.inputSearch.number.checked
                    }
                  ]}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Box mt={4}>
            <Divider />
          </Box>
        </Grid>

        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item xs={12}>
            <Box width='100%' mt={2} mb={2}>
              <Text
                type='span'
                fontFamily='Roboto'
                title='Filtre por categoría'
                fontSize='15px'
                color={theme.colors.colorCheckText}
              />
            </Box>
          </Grid>

          <Grid container item>
            <Grid item>
              <Box mr={2}>
                <Box>
                  <CheckBox
                    theme={theme}
                    title='Usuarios'
                    nameType='users'
                    handleChangeChecked={(event) =>
                      handleChangeChecked(event, 'configAdvanced')}
                    disabled={false}
                    checked={consfigAdvancedInput.filterCategorySearch.users.checked}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item>
              <Box mr={2}>
                <Box>
                  <CheckBox
                    theme={theme}
                    title='Fuestes'
                    nameType='sources'
                    handleChangeChecked={(event) =>
                      handleChangeChecked(event, 'configAdvanced')}
                    disabled={false}
                    checked={consfigAdvancedInput.filterCategorySearch.sources.checked}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item>
              <Box mr={2}>
                <Box>
                  <CheckBox
                    theme={theme}
                    title='Conciliaciones'
                    nameType='reconciliations'
                    handleChangeChecked={(event) =>
                      handleChangeChecked(event, 'configAdvanced')}
                    disabled={false}
                    checked={consfigAdvancedInput.filterCategorySearch.reconciliations.checked}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item>
              <Box mr={0}>
                <Box>
                  <CheckBox
                    theme={theme}
                    title='Tableros'
                    nameType='boards'
                    handleChangeChecked={(event) =>
                      handleChangeChecked(event, 'configAdvanced')}
                    disabled={false}
                    checked={consfigAdvancedInput.filterCategorySearch.boards.checked}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Box my={4}>
            <Divider />
          </Box>
        </Grid>

        <Grid container alignItems='center'>
          <Grid container justifyContent='center'>
            <Box display='inline' width='auto' mr={0} mb={2}>
              <Buttons
                type='span'
                fontFamily='Roboto'
                title='LISTO'
                fontSize='15px'
                theme={theme}
                color={theme.colors.bgFooter}
                onClick={() => handleActiveModal(false)}
                variant='contained'
              />
            </Box>

            {/* <Box display='inline' width='auto'>
              <Buttons
                type='span'
                fontFamily='Roboto'
                title='GUARDAR'
                fontSize='15px'
                theme={theme}
                variant='contained'
                color={theme.colors.bgFooter}
              />
            </Box> */}
          </Grid>
        </Grid>

      </ContainerWrapper>
    </Container>,
    document.getElementById('root')
  )
}
