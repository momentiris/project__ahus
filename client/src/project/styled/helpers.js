import { css } from 'styled-components';

/**
 * Media queries
 *
 * @type {Object}
 *
 * @return {css}
 */
 // these sizes are arbitrary and you can set them to whatever you wish
 const sizes = {
   giant: 1170,
   desktop: 992,
   tablet: 768,
   phone: 400
 }

export const breakpoints = Object.keys(sizes).reduce((accumulator, label) => {

	const size = sizes[label];
	accumulator[label] = (...args) => css`
	 	@media (max-width: ${size}px) {
	   ${css(...args)}
	 	}
	`
	return accumulator
}, {})
