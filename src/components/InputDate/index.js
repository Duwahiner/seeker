
import { Grid, TextField } from '@material-ui/core'
import styled from '@emotion/styled'

const Conteiner = styled(Grid)`
  & fieldset {
    border: transparent;
    max-height: 50px;
  };
  &.MuiInput-underline::border {
    border: transparent;
  }

  &.MuiInput-underline::after {
    border: transparent;
  }
`
export const DatePicker = styled(TextField)`
  width: 100%;
  height: 100%;
  font-family: Roboto;
  font-size: 18px;
  padding: 10px 30px;
  color: red;
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

export const InputDate = ({
  theme,
  handleChange,
  values,
  disabled,
  label,
  id,
  type,
  onBlur
}) => {
  return (
    <Conteiner container alignItems='center' item xs={8} style={{ marginLeft: '30px' }}>
      <TextField
        fullWidth
        type={type}
        id={id}
        label={label}
        value={values}
        disabled={disabled}
        placeholder='Selecciona una fecha para buscar en todos rescursos'
        onChange={handleChange}
        onBlur={() => onBlur(values)}
        InputLabelProps={{
          shrink: true
        }}
      />
    </Conteiner>
  )
}

/**
 * <KeyboardDatePicker
          disableToolbar
          variant='inline'
          inputVariant='outlined'
          format={format}
          id={id}
          label={label}
          value={values}
          onChange={(event, date) => handleChange({ target: { value: date } })}
          disabled={disabled}
          invalidDateMessage=''
          // placeholder='Selecciona una fecha para buscar en todos rescursos'
          InputAdornmentProps={{ position: 'start' }}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
 */
