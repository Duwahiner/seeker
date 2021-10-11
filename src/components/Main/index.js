import { Box, Grid } from '@material-ui/core'
import styled from '@emotion/styled'

import ContainerSearch from '../../container/ContainerSearch'
import { AdvancedSearch } from '../AdvancedSearch'
import { ContentTable } from '../ContentTable'

const Container = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgTable};
`

const Main = ({
  theme,
  stateFilterCategory,
  filterResultSearch,
  activeAdvancedModal,
  handleChangeChecked,
  consfigAdvancedInput,
  handleActiveModal,
  handleChangeCheckedRadio,
  viewsAllDatas,
  handleChangeSwitch,
  validatedFilter,
  inputText,
  eventActionButtons,
  filterResultSearchData,
  getMapString
}) => {
  return (
    <Container>
      <Grid container>
        {
          activeAdvancedModal &&
            <AdvancedSearch
              theme={theme}
              handleChangeChecked={handleChangeChecked}
              handleChangeCheckedRadio={handleChangeCheckedRadio}
              consfigAdvancedInput={consfigAdvancedInput}
              handleActiveModal={handleActiveModal}
            />
        }
      </Grid>

      <Grid container flex='0'>
        <ContainerSearch
          theme={theme}
          filterResultSearch={filterResultSearch}
          handleChangeChecked={handleChangeChecked}
          handleActiveModal={handleActiveModal}
          viewsAllDatas={viewsAllDatas}
          handleChangeSwitch={handleChangeSwitch}
          validatedFilter={validatedFilter}
          inputText={inputText}
          consfigAdvancedInput={consfigAdvancedInput}
          filterResultSearchData={filterResultSearchData}
          getMapString={getMapString}
        />
      </Grid>

      <Grid container flex='1' style={{ height: '100%' }}>
        <ContentTable
          theme={theme}
          stateFilterCategory={stateFilterCategory}
          viewsAllDatas={viewsAllDatas}
          inputText={inputText}
          eventActionButtons={eventActionButtons}
        />
      </Grid>
    </Container>
  )
}

export default Main
