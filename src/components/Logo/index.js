import { Box, Grid } from '@material-ui/core'
import { Text } from '../Text'

export const Logo = ({ theme }) => {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid container justifyContent='center' item xs={3}>
        <Box width='120px' height='35px'>
          <Text
            type='span'
            fontFamily='RobotoBold'
            title='Seeker'
            fontSize='40px'
            lineHeight='35px'
            color={theme.colors.bgMain}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
