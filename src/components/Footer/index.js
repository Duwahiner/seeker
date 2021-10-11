import { Box, Grid } from '@material-ui/core'
import styled from '@emotion/styled'

import { Text } from '../Text'

const Container = styled(Grid)`
  height: 50px;
  border-top: solid 1px ${({ theme }) => theme.colors.colorFooterBorder};
`

export const Footer = ({ theme }) => {
  return (
    <Container container justifyContent='center' alignItems='center'>
      <Grid container item xs={3} justifyContent='center'>
        <Box width='auto'>
          <Text
            type='span'
            fontFamily='RobotoLightItalic'
            title='Todos los derechos reservados'
            fontSize='12px'
            color={theme.colors.colorFooterText}
          />
        </Box>
      </Grid>
    </Container>
  )
}
