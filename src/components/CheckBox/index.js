import { Box, Checkbox, Grid } from '@material-ui/core'

import { Text } from '../Text'

export const CheckBox = ({
  theme,
  title,
  fontSize,
  size,
  handleChangeChecked,
  nameType,
  disabled,
  checked
}) => {
  return (
    <Grid container alignItems='center' justifyContent='flex-end'>
      <Box mr={1}>
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={handleChangeChecked}
          color='primary'
          name={nameType}
          size={size || 'medium'}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Box>

      <Box>
        <Text
          type='span'
          fontFamily='RobotoMediumItalic'
          title={title}
          fontSize={fontSize || '13px'}
          color={theme.colors.colorCheckText}
        />
      </Box>
    </Grid>
  )
}
