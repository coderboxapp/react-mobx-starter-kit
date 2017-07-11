import coolorsToHex from 'coolors-to-hex'
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  grayscale: coolorsToHex('https://coolors.co/2B2B2B-888888-c1c1c1-ECECEC-ffffff'),
  primary: coolorsToHex('https://coolors.co/106cb9-1b8ceb-65b3e3-82c3ed-cde6fb'),
  success: coolorsToHex('https://coolors.co/388e3c-4caf50-7cc47f-9fd4a1-c8e6c9'),
  danger: coolorsToHex('https://coolors.co/c2185b-e91e63-f06292-f48caf-f8bbd0'),
  white: coolorsToHex('https://coolors.co/ffffff-ffffff-ffffff-ffffff-ffffff'),
  black: coolorsToHex('https://coolors.co/000000-000000-000000-000000-000000')
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Open Sans, Arial, sans-serif'
}

theme.sizes = {
  maxWidth: '650px',
  fontSize: '14px',
  fontSizeSmall: '12px',
  iconSize: '24px',
  radius: '4px'
}

theme.shadows = {
  light: '0 1px 1px rgba(0, 0, 0, 0.08)',
  normal: '0 1px 2px rgba(0, 0, 0, 0.12)',
  heavy: '1px 2px 2px rgba(0, 0, 0, 0.15)'
}

export default theme
