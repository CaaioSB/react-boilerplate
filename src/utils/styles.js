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
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)

  const rgb = `rgb(${r}, ${g}, ${b})`

  return { r, g, b, rgb }
}

export { pxToRem, hexToRgb }
export default { pxToRem, hexToRgb }
