import styled from '@emotion/styled'
import { Box, Grid, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { InputDate } from '../InputDate'

import { Text } from '../Text'

const Container = styled(Box)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgMain};
  border-radius: 40px;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
`

const ToBlock = styled(Box)`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.bgMain};
  border-radius: 40px;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
  position: absolute;
  z-index: 20;
  cursor: no-drop;
  opacity: 0.7;
`

const BorderLeft = styled(Box)`
  border-Left:
    solid 1px ${({ theme }) => theme.colors.colorFooterBorder};
`

const ContentButtonText = styled(Box)`
  & span {
    transition: all 0.3s; 
    &:hover {
      color: ${({ theme }) => theme.colors.bgHover}
    }
  }
`

export const SearchInputTypeText = styled.input`
  width: 100%;
  height: 100%;
  font-family: Roboto;
  font-size: 18px;
  color: ${({ color }) => color};
  padding: 10px 20px;
  outline: none;
  border: none;
  box-sizing: border-box;
  line-height: 50px;
  background-color: transparent;
  &::placeholder {
      font-family: RobotoLightItalic;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.placeholder};
}
`
export const SearchInputTypeNumber = styled.input`
  width: 100%;
  height: 100%;
  font-family: Roboto;
  font-size: 18px;
  color: ${({ color }) => color};
  padding: 10px 20px;
  outline: none;
  border: none;
  box-sizing: border-box;
  line-height: 50px;
  background-color: transparent;
  &::placeholder {
      font-family: RobotoLightItalic;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.placeholder};
}
`

const ContentResultSearch = styled(Box)`
  width: 100%;
  height: auto;
  max-height: 400px;
  background-color: ${({ theme }) => theme.colors.bgMain};
  border-radius: 0px 0px 28px 28px;
  top: 30px;
  left: 0px;
  box-sizing: border-box;
  position: absolute;
  padding: 60px 20px 0px 20px;
  z-index: 11;
  opacity: 1;
  overflow: auto;
  box-shadow: 0rem 1.25rem 2.5rem -0.75rem rgba(196, 196, 196, 0.1);
  &::-webkit-scrollbar {
    display: block;
    background: rgba(196, 196, 196, 0);
    width: 2px;
    opacity: 0;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(196, 196, 196, 0);
    border-radius: 8px;
    opacity: 0;
  }

  &::-webkit-scrollbar-thumb:hover{
    background: #aabbf2;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
`

const Border = styled(Box)`
  padding: 10px 20px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-bottom:
    solid 1px ${({ theme }) => theme.colors.colorFooterBorder};
`

export const Divider = styled.hr`
  padding: 0 1.875rem;
  margin: 0;
  border-width: 0px;
  opacity: 0.3;
  border-bottom:
    solid 1px ${({ theme }) => theme.colors.colorFooterBorder};
`

export const Search = ({
  theme,
  inputText,
  onChange,
  handleGetRunSearch,
  handleActiveModal,
  viewsAllDatas,
  consfigAdvancedInput,
  filterResultSearchData,
  getMapString,
  handleResetResultSearch,
  handleResetBlur
}) => {
  return (
    <Container>
      {viewsAllDatas && <ToBlock />}

      <Grid container style={{ zIndex: '12', position: 'relative' }}>
        {
          consfigAdvancedInput.inputSearch.text.checked &&
            <Grid item xs={8}>
              <SearchInputTypeText
                placeholder='Buscar en todos los rescursos'
                value={inputText}
                onChange={onChange}
                type='text'
                onBlur={() => handleResetBlur(inputText)}
              />
            </Grid>
        }

        {
          consfigAdvancedInput.inputSearch.number.checked &&
            <Grid item xs={8}>
              <SearchInputTypeNumber
                placeholder='Buscar en todos los rescursos'
                value={inputText}
                onChange={onChange}
                type='number'
                onBlur={() => handleResetBlur(inputText)}
              />
            </Grid>
        }

        {
          consfigAdvancedInput.inputSearch.date.checked &&
            <Grid container item xs={8}>
              <InputDate
                values={inputText}
                handleChange={onChange}
                type='date'
                disabled={false}
                theme={theme}
                id='---date---'
                label=''
                onBlur={handleResetBlur}
              />
            </Grid>
        }

        <Grid container item xs={1} justifyContent='center'>
          <Box
            display='flex'
            height='100%'
            justifyContent='center'
            alignItems='center'
            style={{ cursor: 'pointer' }}
          >
            <IconButton
              aria-label='search'
              color='primary'
              onClick={handleGetRunSearch}
            >
              <SearchIcon color='primary' style={{ fontSize: 22 }} />
            </IconButton>
          </Box>
        </Grid>

        <Grid container item xs={3} justifyContent='center'>
          <BorderLeft width='100%' bgcolor=''>
            <ContentButtonText
              display='flex'
              height='100%'
              justifyContent='center'
              alignItems='center'
              style={{ cursor: 'pointer' }}
              onClick={() => handleActiveModal(true)}
            >
              <Text
                type='span'
                fontFamily='RobotoBold'
                title='Busqueda avanzada'
                fontSize='13px'
                color={theme.colors.bgHeader}
              />
            </ContentButtonText>
          </BorderLeft>
        </Grid>
      </Grid>
      {
        filterResultSearchData.data.length > 0 &&
          <ContentResultSearch>
            <Grid container>
              <Grid item xs={12}>
                {
                  filterResultSearchData.data.map((item, index) => {
                    return (
                      <Border key={index}>
                        <Grid container item xs={12}>
                          <Grid item xs={12}>
                            <Box width='100%' mt={2} mb={1}>
                              <Box
                                width='auto'
                                display='inline'
                                onClick={() => {
                                  if (consfigAdvancedInput.inputSearch.text.checked) {
                                    handleResetResultSearch(item.name)
                                  }

                                  if (consfigAdvancedInput.inputSearch.number.checked) {
                                    handleResetResultSearch(item.index)
                                  }

                                  if (consfigAdvancedInput.inputSearch.date.checked) {
                                    handleResetResultSearch(item.createdAt)
                                  }
                                }}
                                style={{ cursor: 'pointer' }}
                                sx={{
                                  '& span:hover': {
                                    color: theme.colors.colorTitle
                                  }
                                }}
                              >
                                <Text
                                  type='span'
                                  fontFamily='RobotoMediumItalic'
                                  title={getMapString(item.name)}
                                  fontSize='15px'
                                  color={theme.colors.colorCheckText}
                                />
                              </Box>
                            </Box>
                          </Grid>

                          <Grid container item xs={12}>
                            <Box width='100%' mt={1}>
                              <Divider />
                            </Box>
                          </Grid>

                          <Grid container item xs={12}>
                            <Grid container item xs={8} flex='auto'>
                              <Grid item xs={1}>
                                <Box width='100%' mt={1} mb={2} mr={1}>
                                  <Text
                                    type='span'
                                    fontFamily='RobotoMediumItalic'
                                    title='Tag:'
                                    fontSize='15px'
                                    color={theme.colors.colorCheckText}
                                  />
                                </Box>
                              </Grid>

                              <Grid item xs={11}>
                                <Box width='100%' ml={0} mt={1} mb={2}>
                                  <Text
                                    type='span'
                                    fontFamily='RobotoLightItalic'
                                    title={getMapString(item.tags)}
                                    fontSize='15px'
                                    color={theme.colors.colorCheckText}
                                  />
                                </Box>
                              </Grid>
                            </Grid>

                            <Grid container item xs={4}>
                              <Grid item xs={1}>
                                <Box width='100%' mt={1} mb={2} mr={1}>
                                  <Text
                                    type='span'
                                    fontFamily='RobotoMediumItalic'
                                    title='Fecha:'
                                    fontSize='15px'
                                    color={theme.colors.colorCheckText}
                                  />
                                </Box>
                              </Grid>

                              <Grid item xs={11}>
                                <Box width='100%' ml={4} mt={1} mb={2}>
                                  <Text
                                    type='span'
                                    fontFamily='RobotoLightItalic'
                                    title={item.createdAt}
                                    fontSize='15px'
                                    color={theme.colors.colorCheckText}
                                  />
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid container item xs={12}>
                            <Box width='100%' mt={0}>
                              <Divider />
                            </Box>
                          </Grid>

                          <Grid container item xs={12}>
                            <Grid container item xs={8} flex='auto'>
                              <Grid item xs={2}>
                                <Box width='100%' mt={1} mb={2} mr={1}>
                                  <Text
                                    type='span'
                                    fontFamily='RobotoMediumItalic'
                                    title='Categoría:'
                                    fontSize='15px'
                                    color={theme.colors.colorCheckText}
                                  />
                                </Box>
                              </Grid>

                              <Grid container item xs={10} alignItems='center'>
                                <Box ml={1} mt={1} mb={2} bgcolor=''>
                                  <Text
                                    type='span'
                                    fontFamily='RobotoLightItalic'
                                    title={getMapString(item.category)}
                                    fontSize='15px'
                                    color={theme.colors.colorCheckText}
                                  />
                                </Box>

                                <Box
                                  flex='none'
                                  width='50px'
                                  height='8px'
                                  ml={1} mt={1}
                                  mb={2}
                                  bgcolor='#82C628'
                                  borderRadius='20px'
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Border>
                    )
                  })
                }
              </Grid>
            </Grid>
          </ContentResultSearch>
      }
    </Container>
  )
}

/**
 *  <Border key={index}>
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Box width='100%' mt={2} mb={1}>
          <Box
            width='auto'
            display='inline'
            onClick={() => handleResetResultSearch(item.name)}
            style={{ cursor: 'pointer' }}
            sx={{
              '& span:hover': {
                color: theme.colors.colorTitle
              }
            }}
          >
            <Text
              type='span'
              fontFamily='RobotoMediumItalic'
              title={getMapString(item.name)}
              fontSize='15px'
              color={theme.colors.colorCheckText}
            />
          </Box>
        </Box>
      </Grid>

      <Grid container item xs={12}>
        <Box width='100%' mt={1}>
          <Divider />
        </Box>
      </Grid>

      <Grid container item xs={12}>
        <Grid container item xs={8} flex='auto'>
          <Grid item xs={1}>
            <Box width='100%' mt={1} mb={2} mr={1}>
              <Text
                type='span'
                fontFamily='RobotoMediumItalic'
                title='Tag:'
                fontSize='15px'
                color={theme.colors.colorCheckText}
              />
            </Box>
          </Grid>

          <Grid item xs={11}>
            <Box width='100%' ml={0} mt={1} mb={2}>
              <Text
                type='span'
                fontFamily='RobotoLightItalic'
                title={getMapString(item.tags)}
                fontSize='15px'
                color={theme.colors.colorCheckText}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container item xs={4}>
          <Grid item xs={1}>
            <Box width='100%' mt={1} mb={2} mr={1}>
              <Text
                type='span'
                fontFamily='RobotoMediumItalic'
                title='Fecha:'
                fontSize='15px'
                color={theme.colors.colorCheckText}
              />
            </Box>
          </Grid>

          <Grid item xs={11}>
            <Box width='100%' ml={4} mt={1} mb={2}>
              <Text
                type='span'
                fontFamily='RobotoLightItalic'
                title={item.createdAt}
                fontSize='15px'
                color={theme.colors.colorCheckText}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Box width='100%' mt={0}>
          <Divider />
        </Box>
      </Grid>

      <Grid container item xs={12}>
        <Grid container item xs={8} flex='auto'>
          <Grid item xs={2}>
            <Box width='100%' mt={1} mb={2} mr={1}>
              <Text
                type='span'
                fontFamily='RobotoMediumItalic'
                title='Categoría:'
                fontSize='15px'
                color={theme.colors.colorCheckText}
              />
            </Box>
          </Grid>

          <Grid container item xs={10} alignItems='center'>
            <Box ml={1} mt={1} mb={2} bgcolor=''>
              <Text
                type='span'
                fontFamily='RobotoLightItalic'
                title={getMapString(item.category)}
                fontSize='15px'
                color={theme.colors.colorCheckText}
              />
            </Box>

            <Box
              flex='none'
              width='50px'
              height='8px'
              ml={1} mt={1}
              mb={2}
              bgcolor='#82C628'
              borderRadius='20px'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Border>
  <Border key={index}>
                        <Box
                          width='auto'
                          display='inline'
                          onClick={() => handleResetResultSearch(item.name)}
                          style={{ cursor: 'pointer' }}
                          sx={{
                            '& span:hover': {
                              color: theme.colors.colorTitle
                            }
                          }}
                        >
                          <Text
                            type='span'
                            fontFamily='RobotoMediumItalic'
                            title={getMapString(item.name)}
                            fontSize='15px'
                            color={theme.colors.colorCheckText}
                          />
                        </Box>
                      </Border>
  */
