import { ROOT_FONT_SIZE } from 'theme/constants'

/**
 * Convert the given pixels to `rem` unit.
 *
 * @param {number} pixels
 * @returns {string} - Pixels converted to `rem`
 */
const pxToRem = pixels => {
  return `${pixels / ROOT_FONT_SIZE}rem`
}

/**
 * Convert the given hex to `rgb`
 * reference: https://stackoverflow.com/a/5624139
 * Some changes were made to the original code.
 *
 * @param {string} hex
 * @returns {string} - Hex converted to `rgb`
 */
const hexToRgb = hex => {
  const result = /^#?(?<r>[a-f\d]{2})(?<g>[a-f\d]{2})(?<b>[a-f\d]{2})$/i.exec(hex)

  const r = parseInt(result?.groups?.r, 16)
  const g = parseInt(result?.groups?.g, 16)
  const b = parseInt(result?.groups?.b, 16)

  const rgb = `rgb(${r}, ${g}, ${b})`

  return { r, g, b, rgb }
}

export { pxToRem, hexToRgb }
export default { pxToRem, hexToRgb }
