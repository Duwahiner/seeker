import { Box, Grid, Switch } from '@material-ui/core'

import { Text } from '../Text'

export const SwitchDate = ({ theme, title, handleChangeSwitch, checked }) => {
  return (
    <Grid container alignItems='center' justifyContent='flex-end'>
      <Box>
        <Text
          type='span'
          fontFamily='RobotoBold'
          title={title}
          fontSize='13px'
          color={theme.colors.bgHeader}
        />
      </Box>

      <Box>
        <Switch
          checked={checked}
          onChange={handleChangeSwitch}
          color='primary'
          name='checkedB'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Box>
    </Grid>
  )
}
