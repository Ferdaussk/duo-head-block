import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const {
	CUSTOM_CONTAINER_WIDTH,
	LEFT_FONT_SIZE,
	RIGHT_FONT_SIZE,
	BORDER_WIDTH,
	GAP_MARGIN_LR,
	NAME_MARGIN_BOTTOM,
	WRAPPER_BORDER_RADIUS,
	WRAPPER_PADDING_BOTTOM,
	WRAPPER_PADDING_TOP,
	WRAPPER_PADDING_LEFT,
	WRAPPER_PADDING_RIGHT,
	WRAPPER_MARGIN_TOP,
	WRAPPER_MARGIN_BOTTOM,
	WRAPPER_MARGIN_LEFT,
	WRAPPER_MARGIN_RIGHT,
	WRAPPER_BORDER_RADIUS_TOP,
	WRAPPER_BORDER_RADIUS_RIGHT,
	WRAPPER_BORDER_RADIUS_BOTTOM,
	WRAPPER_BORDER_RADIUS_LEFT,
} = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	style: {
		type: 'string',
		default: '1',
	},
	leftText: {
		type: 'string',
		default: 'Get Exclusive',
	},
	enaLink: {
		type: 'boolean',
		default: false,
	},
	rightText: {
		type: 'string',
		default: 'Addons Now',
	},
	newTab: {
		type: 'boolean',
		default: false,
	},
	textUrl: {
		type: 'string',
		default: '#',
	},
	blockStyle: {
		type: 'object',
	},
	containerWidth: {
		type: 'string',
		default: 'container',
	},
	leftColor: {
		type: 'string',
	},
	rightColor: {
		type: 'string',
	},
	leftAlign: {
		type: 'string',
	},
	rightAlign: {
		type: 'string',
	},
	leftHoverColor: {
		type: 'string',
	},
	rightHoverColor: {
		type: 'string',
	},
	textAlign: {
		type: 'string',
		default: 'left',
	},
	wrapperBgColor: {
		type: 'string',
	},
	wrapperGradientBg: {
		type: 'string',
	},
	hideOnDesktop: {
		type: 'boolean',
		default: false,
	},
	hideOnTablet: {
		type: 'boolean',
		default: false,
	},
	hideOnMobile: {
		type: 'boolean',
		default: false,
	},
	mainWrapperBgColor: {
		type: 'string',
	},
	bgPosition: {
		type: 'string',
		default: '',
	},
	bgAttachment: {
		type: 'string',
		default: '',
	},
	bgRepeat: {
		type: 'string',
		default: '',
	},
	bgSize: {
		type: 'string',
		default: '',
	},
	imageUrl: {
		type: 'string',
	},
	zIndex: {
		type: 'string',
	},
	wrapperId: {
		type: 'string',
	},
	customCSS: {
		type: 'string',
		default: '',
	},
	typography: {
		type: 'object',
		default: {
			fontFamily: '',
			fontSize: '',
			fontWeight: '',
			fontStyle: '',
			textTransform: '',
			letterSpacing: '',
			wordSpacing: '',
			lineHeight: '',
		},
	},
	wrapperBorder: {
		type: 'object',
		default: {
			style: 'none',
			color: '#000000',
			width: 1,
		},
	},
	borderIcon: {
		type: 'object',
		default: {
			style: 'none',
			color: '#000000',
			width: 1,
		},
	},
	boxShadowWrapper: {
		type: 'object',
		default: {
			color: '#000000',
			offsetX: 0,
			offsetY: 0,
			blurRadius: 10,
			spreadRadius: 0,
			shadowType: 'none',
		},
	},
	isPopoverVisible: {
		type: 'boolean',
		default: false,
	},
	isBoxShadowActive: {
		type: 'boolean',
		default: false,
	},
	...generateResRangleControlAttributes({
		controlName: CUSTOM_CONTAINER_WIDTH,
		defaults: {
			[`${CUSTOM_CONTAINER_WIDTH}DeskRange`]: 1200,
			[`${CUSTOM_CONTAINER_WIDTH}TabRange`]: 700,
			[`${CUSTOM_CONTAINER_WIDTH}MobRange`]: 300,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: LEFT_FONT_SIZE,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: RIGHT_FONT_SIZE,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: BORDER_WIDTH,
		defaults: {
			[`${BORDER_WIDTH}DeskRange`]: 1,
			[`${BORDER_WIDTH}TabRange`]: 1,
			[`${BORDER_WIDTH}MobRange`]: 1,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_PADDING_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_PADDING_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_PADDING_LEFT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_PADDING_RIGHT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: GAP_MARGIN_LR,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: NAME_MARGIN_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_MARGIN_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_MARGIN_RIGHT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_MARGIN_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_MARGIN_LEFT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS_RIGHT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS_LEFT,
		defaults: {},
	}),
};

export default attributes;
