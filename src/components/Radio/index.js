import {
  Box,
  Grid,
  Radio as Radi,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@material-ui/core'

import { Text } from '../Text'

export const Radio = ({
  theme,
  fontSize,
  label,
  handleChangeCheckedRadio
}) => {
  return (
    <Grid container alignItems='center' justifyContent='flex-end' style={{ backgroundColor: '' }}>
      <Box width='100%' mr='3px' bgcolor=''>
        <FormControl style={{ width: '100%' }}>
          <RadioGroup
            onChange={(event) => handleChangeCheckedRadio(event, 'configAdvanced')}
            style={{ width: '100%' }}
          >
            <Grid container item xs={12} alignItems='center'>
              {
                label && label.map((item, index) => {
                  return (
                    <Grid container item xs={item.mr} alignItems='center' key={index}>
                      <FormControlLabel
                        key={index}
                        style={{ marginRight: '0px' }}
                        value={item.value}
                        checked={item.checked}
                        control={
                          <Radi
                            color='primary'
                          />
                        }
                      />

                      <Box>
                        <Text
                          type='span'
                          fontFamily='RobotoMediumItalic'
                          title={item.title}
                          fontSize={fontSize || '13px'}
                          color={theme.colors.colorCheckText}
                        />
                      </Box>
                    </Grid>
                  )
                })
              }
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    </Grid>
  )
}
