import { Button } from '@material-ui/core'

import { Text } from '../Text'

export default function Buttons ({
  theme,
  color,
  title,
  fontFamily,
  type,
  fontSize,
  variant,
  onClick
}) {
  return (
    <Button
      variant={variant}
      color='primary'
      style={{ padding: '8px 30px' }}
      onClick={onClick}
    >
      <Text
        type={type || 'span'}
        fontFamily={fontFamily}
        title={title}
        fontSize={fontSize}
        color={color || '#FFF'}
      />
    </Button>
  )
}
