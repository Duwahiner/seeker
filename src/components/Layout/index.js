import { Grid, Box } from '@material-ui/core'
import styled from '@emotion/styled'

import { Footer } from '../Footer'
import { Header } from '../Header'

const Container = styled(Grid)`
  width: 100%;
  height: 100vh;
  display:  block;
  position: relative;
`

const ContainerWrapper = styled(Grid)`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0px;
  left: 0px;
  flex-direction: column;
  justify-content: center;
  overflow: none;
`

const Layout = ({ children, theme }) => {
  return (
    <Container>
      <ContainerWrapper container>
        <Box width='100%' height='80px' component='header' bgcolor={theme.colors.bgHeader}>
          <Header theme={theme} />
        </Box>

        <Box width='100%' flex='auto' component='main' bgcolor={theme.colors.bgMain}>
          {children}
        </Box>

        <Box width='100%' height='30px' component='footer' bgcolor={theme.colors.bgFooter}>
          <Footer theme={theme} />
        </Box>

      </ContainerWrapper>
    </Container>
  )
}
export default Layout
