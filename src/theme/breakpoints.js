/**
 * Default unit used for width calculations
 */
const unit = 'px';

/**
 * Default step used for width calculations
 */
const step = 5;

/**
 * Internal, utility constant
 *
 * Useful when we want to handle breakpoint borderline values such as 599.95, 1279.95, etc.
 */
const microStep = step / 100; // workaround for breakpoint borderline values (599.95, 1279.95)

/**
 * Available keys in ASC order
 */
const keys = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Starting sizes in {unit} for every breakpoint
 */
const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

/**
 * Generate `up` media query string
 *
 * Matches screen widths greater than and including the screen size given by the breakpoint key.
 *
 * @param {string} key
 * @returns {string} The media query string
 *
 * @example
 * // `@media (min-width: 600px)`
 * theme.breakpoint.up('sm');
 *
 * // `@media (min-width: 1000px)`
 * theme.breakpoint.up(1000);
 *
 */
function up(key) {
  const width = typeof values[key] === 'number' ? values[key] : key;
  return `@media (min-width: ${width}${unit})`;
}

/**
 * Generate `down` media query string
 *
 * Matches screen widths less than and including the screen size given by the breakpoint key.
 *
 * @param {string} key
 * @returns {string} The media query string
 *
 * @example
 * // `@media (max-width: 959.95px)`
 * theme.breakpoint.down('sm');
 *
 * // `@media (max-width: 1000px)`
 * theme.breakpoint.up(1000);
 *
 */
function down(key) {
  const nextIndex = keys.indexOf(key) + 1;
  const isAny = nextIndex === keys.length;

  if (isAny) {
    return up('xs');
  }

  const upperBoundary = values[keys[nextIndex]];
  const hasUpperBoundary = typeof upperBoundary === 'number' && nextIndex > 0;

  const width = hasUpperBoundary ? upperBoundary : key;
  return `@media (max-width: ${width - microStep}${unit})`;
}

/**
 * Generate `between` media query string
 *
 * Matches screen widths greater than given start and less than given end breakpoint keys.
 *
 * @param {string} startKey
 * @param {string} endKey
 * @returns {string} The media query string
 *
 * @example
 * // `@media (min-width: 0px) and (max-width: 1279.95px)`
 * theme.breakpoint.between('xs', 'md');
 *
 * // `@media (min-width: 1000px) and (max-width: 1999.95px)`
 * theme.breakpoint.up(1000, 2000);
 *
 */
function between(startKey, endKey) {
  const endIndex = keys.indexOf(endKey);
  const isLast = endIndex === keys.length - 1;
  const hasMaxWidth =
    endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number';

  if (isLast) {
    return up(startKey);
  }

  const minWidth =
    typeof values[startKey] === 'number' ? values[startKey] : startKey;
  const maxWidth =
    (hasMaxWidth ? values[keys[endIndex + 1]] : endKey) - microStep;

  return `@media (min-width: ${minWidth}${unit}) and (max-width: ${maxWidth}${unit})`;
}

/**
 * Generate `only` media query string
 *
 * Matches the screen width between the given breakpoint start and end.
 * Does `between(key, key)` behind the scenes.
 *
 * @param {string} key
 * @returns {string} The media query string
 *
 * @example
 * // `@media (min-width: 600px) and (max-width: 959.95px)`
 * theme.breakpoint.only('sm');
 *
 * // `@media (min-width: 1000px) and (max-width: 999.95px)`
 * theme.breakpoint.only(1000);
 *
 */
function only(key) {
  return between(key, key);
}

export default {
  unit,
  step,
  keys,
  values,
  up,
  down,
  between,
  only
};
