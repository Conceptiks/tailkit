const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		//Use imports like SASS (include imports instead of referencing them)
		atImport(),
		//Nested syntax unwrapping like in sass
		postcssNested(),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//Use future CSS, today (transforms non-standardized CSS to more compatible CSS)
		postcssPresetEnv(),
		//But others, like autoprefixer, need to run after,
		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};

module.exports = config;
