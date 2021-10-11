import { Grid } from '@material-ui/core'
import styled from '@emotion/styled'

import { Search } from '../Search'
import { SwitchDate } from '../SwitchDate'
import { ContentFilterData } from '../ContentFilterData'

const Container = styled(Grid)`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.bgBoxSearch};
`

const ContainerWrapper = styled(Grid)`
  max-width: 1000px;
  box-sizing: content-box;
`

const ContainerSearch = styled(Grid)`
  width: 100%;
  height: auto;
  min-height: 50px;
  margin-top: 20px;
`

export const ContentSearch = ({
  theme,
  inputText,
  onChange,
  filterResultSearch,
  handleGetRunSearch,
  handleChangeChecked,
  handleActiveModal,
  viewsAllDatas,
  handleChangeSwitch,
  validatedFilter,
  consfigAdvancedInput,
  filterResultSearchData,
  getMapString,
  handleResetResultSearch,
  handleResetBlur
}) => {
  return (
    <Container container justifyContent='center'>
      <ContainerWrapper container item xs={12}>
        <Grid container item xs={12} alignItems='center'>
          <ContainerSearch container item xs={9}>
            <Search
              theme={theme}
              inputText={inputText}
              onChange={onChange}
              handleGetRunSearch={handleGetRunSearch}
              handleActiveModal={handleActiveModal}
              viewsAllDatas={viewsAllDatas}
              consfigAdvancedInput={consfigAdvancedInput}
              filterResultSearchData={filterResultSearchData}
              getMapString={getMapString}
              handleResetResultSearch={handleResetResultSearch}
              handleResetBlur={handleResetBlur}
            />
          </ContainerSearch>

          <ContainerSearch container item xs={3} justifyContent='flex-end'>
            <SwitchDate
              checked={viewsAllDatas}
              handleChangeSwitch={handleChangeSwitch}
              theme={theme}
              title='Ver todos los datos'
            />
          </ContainerSearch>
        </Grid>

        <Grid container item xs={12}>
          <ContentFilterData
            theme={theme}
            handleChangeChecked={handleChangeChecked}
            filterResultSearch={filterResultSearch}
            validatedFilter={validatedFilter}
            viewsAllDatas={viewsAllDatas}
          />
        </Grid>
      </ContainerWrapper>
    </Container>
  )
}
