import { Box } from '@material-ui/core'
import { Logo } from '../Logo'

export const Header = ({ theme }) => {
  return (
    <Box display='flex' height='100%'>
      <Logo theme={theme} />
    </Box>
  )
}
