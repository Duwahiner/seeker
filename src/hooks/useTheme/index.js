import { useTheme as useColor } from '@emotion/react'

export const useTheme = () => {
  const theme = useColor()
  return { theme }
}
