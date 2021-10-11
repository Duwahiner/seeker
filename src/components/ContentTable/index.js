import styled from '@emotion/styled'
import { Box, Grid } from '@material-ui/core'
import { TableDynamic } from '../TableDynamic'

const Container = styled(Grid)`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 39vh);
  background-color: ${({ theme }) => theme.colors.bgTable};
  overflow: auto;
  &::-webkit-scrollbar {
    background: rgba(196, 196, 196, 1);
    width: 6px;
    opacity: 0;
    display: block;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.bgHeader};
    border-radius: 0px;
    opacity: 0;
  }

  &::-webkit-scrollbar-thumb:hover{
    background-color: ${({ theme }) => theme.colors.bgHeader};
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0);
  }
`
const ContainerBox = styled(Box)`
  width: 100%;
  height: auto;
  flex: none;
  background-color: i;
  box-sizing: border-box;
  padding-top: 0px;
`

export const ContentTable = ({
  theme,
  stateFilterCategory,
  viewsAllDatas,
  inputText,
  eventActionButtons
}) => {
  return (
    <Container container justifyContent='center'>
      <ContainerBox>
        <TableDynamic
          stateFilterCategory={stateFilterCategory}
          viewsAllDatas={viewsAllDatas}
          inputText={inputText}
          eventActionButtons={eventActionButtons}
        />
      </ContainerBox>
    </Container>
  )
}
