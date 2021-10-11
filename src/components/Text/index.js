import styled from '@emotion/styled'

const TitleText = styled.span`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
`

export const Text = ({
  type,
  title,
  fontFamily,
  fontSize,
  color,
  lineHeight
}) => {
  return (
    <TitleText
      as={type}
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontFamily={fontFamily}
    >
      {title}
    </TitleText>
  )
}
