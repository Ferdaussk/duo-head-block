/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/duo-head/attributes.js":
/*!*******************************************!*\
  !*** ./src/blocks/duo-head/attributes.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/duo-head/constants/index.js");
/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generators */ "./src/generators/index.js");


const {
  generateResRangleControlAttributes
} = _generators__WEBPACK_IMPORTED_MODULE_1__;
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
  WRAPPER_BORDER_RADIUS_LEFT
} = _constants__WEBPACK_IMPORTED_MODULE_0__;
const attributes = {
  uniqueId: {
    type: 'string'
  },
  style: {
    type: 'string',
    default: '1'
  },
  leftText: {
    type: 'string',
    default: 'Get Exclusive'
  },
  enaLink: {
    type: 'boolean',
    default: false
  },
  rightText: {
    type: 'string',
    default: 'Addons Now'
  },
  newTab: {
    type: 'boolean',
    default: false
  },
  textUrl: {
    type: 'string',
    default: '#'
  },
  blockStyle: {
    type: 'object'
  },
  containerWidth: {
    type: 'string',
    default: 'container'
  },
  leftColor: {
    type: 'string'
  },
  rightColor: {
    type: 'string'
  },
  leftAlign: {
    type: 'string'
  },
  rightAlign: {
    type: 'string'
  },
  leftHoverColor: {
    type: 'string'
  },
  rightHoverColor: {
    type: 'string'
  },
  textAlign: {
    type: 'string',
    default: 'left'
  },
  wrapperBgColor: {
    type: 'string'
  },
  wrapperGradientBg: {
    type: 'string'
  },
  hideOnDesktop: {
    type: 'boolean',
    default: false
  },
  hideOnTablet: {
    type: 'boolean',
    default: false
  },
  hideOnMobile: {
    type: 'boolean',
    default: false
  },
  mainWrapperBgColor: {
    type: 'string'
  },
  bgPosition: {
    type: 'string',
    default: ''
  },
  bgAttachment: {
    type: 'string',
    default: ''
  },
  bgRepeat: {
    type: 'string',
    default: ''
  },
  bgSize: {
    type: 'string',
    default: ''
  },
  imageUrl: {
    type: 'string'
  },
  zIndex: {
    type: 'string'
  },
  wrapperId: {
    type: 'string'
  },
  customCSS: {
    type: 'string',
    default: ''
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
      lineHeight: ''
    }
  },
  wrapperBorder: {
    type: 'object',
    default: {
      style: 'none',
      color: '#000000',
      width: 1
    }
  },
  borderIcon: {
    type: 'object',
    default: {
      style: 'none',
      color: '#000000',
      width: 1
    }
  },
  boxShadowWrapper: {
    type: 'object',
    default: {
      color: '#000000',
      offsetX: 0,
      offsetY: 0,
      blurRadius: 10,
      spreadRadius: 0,
      shadowType: 'none'
    }
  },
  isPopoverVisible: {
    type: 'boolean',
    default: false
  },
  isBoxShadowActive: {
    type: 'boolean',
    default: false
  },
  ...generateResRangleControlAttributes({
    controlName: CUSTOM_CONTAINER_WIDTH,
    defaults: {
      [`${CUSTOM_CONTAINER_WIDTH}DeskRange`]: 1200,
      [`${CUSTOM_CONTAINER_WIDTH}TabRange`]: 700,
      [`${CUSTOM_CONTAINER_WIDTH}MobRange`]: 300
    }
  }),
  ...generateResRangleControlAttributes({
    controlName: LEFT_FONT_SIZE,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: RIGHT_FONT_SIZE,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: BORDER_WIDTH,
    defaults: {
      [`${BORDER_WIDTH}DeskRange`]: 1,
      [`${BORDER_WIDTH}TabRange`]: 1,
      [`${BORDER_WIDTH}MobRange`]: 1
    }
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_PADDING_BOTTOM,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_PADDING_TOP,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_PADDING_LEFT,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_PADDING_RIGHT,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: GAP_MARGIN_LR,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: NAME_MARGIN_BOTTOM,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_BORDER_RADIUS,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_MARGIN_TOP,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_MARGIN_RIGHT,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_MARGIN_BOTTOM,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_MARGIN_LEFT,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_BORDER_RADIUS_TOP,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_BORDER_RADIUS_RIGHT,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_BORDER_RADIUS_BOTTOM,
    defaults: {}
  }),
  ...generateResRangleControlAttributes({
    controlName: WRAPPER_BORDER_RADIUS_LEFT,
    defaults: {}
  })
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/duo-head/constants/index.js":
/*!************************************************!*\
  !*** ./src/blocks/duo-head/constants/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BORDER_WIDTH: function() { return /* binding */ BORDER_WIDTH; },
/* harmony export */   CUSTOM_CONTAINER_WIDTH: function() { return /* binding */ CUSTOM_CONTAINER_WIDTH; },
/* harmony export */   DESG_FONT_SIZE: function() { return /* binding */ DESG_FONT_SIZE; },
/* harmony export */   FONT_SIZE: function() { return /* binding */ FONT_SIZE; },
/* harmony export */   GAP_MARGIN_LR: function() { return /* binding */ GAP_MARGIN_LR; },
/* harmony export */   GRID_COLUMNS: function() { return /* binding */ GRID_COLUMNS; },
/* harmony export */   GRID_GAP: function() { return /* binding */ GRID_GAP; },
/* harmony export */   IAMGE_SIZE: function() { return /* binding */ IAMGE_SIZE; },
/* harmony export */   ICON_GAP: function() { return /* binding */ ICON_GAP; },
/* harmony export */   ICON_ROUND_SIZE: function() { return /* binding */ ICON_ROUND_SIZE; },
/* harmony export */   ICON_SIZE: function() { return /* binding */ ICON_SIZE; },
/* harmony export */   LEFT_FONT_SIZE: function() { return /* binding */ LEFT_FONT_SIZE; },
/* harmony export */   RIGHT_FONT_SIZE: function() { return /* binding */ RIGHT_FONT_SIZE; },
/* harmony export */   ROW_GAP: function() { return /* binding */ ROW_GAP; },
/* harmony export */   WRAPPER_BORDER_BOTTOM_WIDTH: function() { return /* binding */ WRAPPER_BORDER_BOTTOM_WIDTH; },
/* harmony export */   WRAPPER_BORDER_LEFT_WIDTH: function() { return /* binding */ WRAPPER_BORDER_LEFT_WIDTH; },
/* harmony export */   WRAPPER_BORDER_RADIUS_BOTTOM: function() { return /* binding */ WRAPPER_BORDER_RADIUS_BOTTOM; },
/* harmony export */   WRAPPER_BORDER_RADIUS_LEFT: function() { return /* binding */ WRAPPER_BORDER_RADIUS_LEFT; },
/* harmony export */   WRAPPER_BORDER_RADIUS_RIGHT: function() { return /* binding */ WRAPPER_BORDER_RADIUS_RIGHT; },
/* harmony export */   WRAPPER_BORDER_RADIUS_TOP: function() { return /* binding */ WRAPPER_BORDER_RADIUS_TOP; },
/* harmony export */   WRAPPER_BORDER_RIGHT_WIDTH: function() { return /* binding */ WRAPPER_BORDER_RIGHT_WIDTH; },
/* harmony export */   WRAPPER_BORDER_TOP_WIDTH: function() { return /* binding */ WRAPPER_BORDER_TOP_WIDTH; },
/* harmony export */   WRAPPER_MARGIN_BOTTOM: function() { return /* binding */ WRAPPER_MARGIN_BOTTOM; },
/* harmony export */   WRAPPER_MARGIN_LEFT: function() { return /* binding */ WRAPPER_MARGIN_LEFT; },
/* harmony export */   WRAPPER_MARGIN_RIGHT: function() { return /* binding */ WRAPPER_MARGIN_RIGHT; },
/* harmony export */   WRAPPER_MARGIN_TOP: function() { return /* binding */ WRAPPER_MARGIN_TOP; },
/* harmony export */   WRAPPER_PADDING_BOTTOM: function() { return /* binding */ WRAPPER_PADDING_BOTTOM; },
/* harmony export */   WRAPPER_PADDING_LEFT: function() { return /* binding */ WRAPPER_PADDING_LEFT; },
/* harmony export */   WRAPPER_PADDING_RIGHT: function() { return /* binding */ WRAPPER_PADDING_RIGHT; },
/* harmony export */   WRAPPER_PADDING_TOP: function() { return /* binding */ WRAPPER_PADDING_TOP; }
/* harmony export */ });
const CUSTOM_CONTAINER_WIDTH = 'customContainerWidth';
const GRID_COLUMNS = 'gridColumns';
const GRID_GAP = 'gridGap';
const ROW_GAP = 'rowGap';
const LEFT_FONT_SIZE = 'leftFontSize';
const RIGHT_FONT_SIZE = 'rightFontSize';
const DESG_FONT_SIZE = 'desgFontSize';
const GAP_MARGIN_LR = 'gapMarginLR';
const ICON_SIZE = 'iconSize';
const ICON_ROUND_SIZE = 'iconRoundSize';
const ICON_GAP = 'iconGap';
const BORDER_WIDTH = 'borderWidth';
const IAMGE_SIZE = 'imageSize';
const FONT_SIZE = 'fontSize';
const WRAPPER_MARGIN_TOP = 'wrapperMarginTop';
const WRAPPER_MARGIN_RIGHT = 'wrapperMargRight';
const WRAPPER_MARGIN_BOTTOM = 'wrapperMarginBottom';
const WRAPPER_MARGIN_LEFT = 'wrapperMarginLeft';
const WRAPPER_PADDING_TOP = 'wrapperPaddingTop';
const WRAPPER_PADDING_BOTTOM = 'wrapperPaddingBottom';
const WRAPPER_PADDING_LEFT = 'wrapperPaddingLeft';
const WRAPPER_PADDING_RIGHT = 'wrapperPaddingRight';
const WRAPPER_BORDER_RADIUS_TOP = 'wrapperBorderRadiusTop';
const WRAPPER_BORDER_RADIUS_RIGHT = 'wrapperBorderRadiusRight';
const WRAPPER_BORDER_RADIUS_BOTTOM = 'wrapperBorderRadiusBottom';
const WRAPPER_BORDER_RADIUS_LEFT = 'wrapperBorderRadiusLeft';
const WRAPPER_BORDER_TOP_WIDTH = 'wrapperBorderTopWidth';
const WRAPPER_BORDER_RIGHT_WIDTH = 'wrapperBorderRaghtWidth';
const WRAPPER_BORDER_BOTTOM_WIDTH = 'wrapperBorderRadtomWidth';
const WRAPPER_BORDER_LEFT_WIDTH = 'wrapperBorderReftWidth';

/***/ }),

/***/ "./src/blocks/duo-head/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/duo-head/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/duo-head/editor.scss");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/duo-head/inspector.js");
/* harmony import */ var _helper_softminify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/softminify */ "./src/helper/softminify.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/duo-head/style.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/blocks/duo-head/constants/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _options_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../options/icons */ "./src/options/icons.js");
/* harmony import */ var _includes_assets_img_bwd_placeholder_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../includes/assets/img/bwd-placeholder.jpg */ "./includes/assets/img/bwd-placeholder.jpg");


/**
 * WordPress dependencies
 */

const {
  Fragment,
  useEffect
} = wp.element; // editor style


/**
 * Internal dependencies
 */








const {
  CUSTOM_CONTAINER_WIDTH,
  LEFT_FONT_SIZE,
  RIGHT_FONT_SIZE,
  GAP_MARGIN_LR,
  WRAPPER_PADDING_BOTTOM,
  WRAPPER_PADDING_TOP,
  WRAPPER_PADDING_LEFT,
  WRAPPER_PADDING_RIGHT,
  WRAPPER_MARGIN_TOP,
  WRAPPER_MARGIN_RIGHT,
  WRAPPER_MARGIN_BOTTOM,
  WRAPPER_MARGIN_LEFT,
  WRAPPER_BORDER_RADIUS_TOP,
  WRAPPER_BORDER_RADIUS_RIGHT,
  WRAPPER_BORDER_RADIUS_BOTTOM,
  WRAPPER_BORDER_RADIUS_LEFT
} = _constants__WEBPACK_IMPORTED_MODULE_6__; // Edit Function

function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    uniqueId,
    style,
    leftText,
    rightText,
    enaLink,
    newTab,
    textUrl,
    blockStyle,
    leftColor,
    rightColor,
    leftHoverColor,
    rightHoverColor,
    textAlign,
    containerWidth,
    typography,
    leftAlign,
    rightAlign,
    wrapperBgColor,
    mainWrapperBgColor,
    wrapperBorder,
    boxShadowWrapper,
    hideOnDesktop,
    hideOnTablet,
    hideOnMobile,
    zIndex,
    customCSS,
    wrapperGradientBg,
    bgPosition,
    bgAttachment,
    bgRepeat,
    bgSize
  } = attributes; // Wrapper Border Style

  const wrapperBorderStyle = wrapperBorder.style !== 'none' ? `${wrapperBorder.width}px ${wrapperBorder.style} ${wrapperBorder.color}` : '';
  const wrapperBorderBlock = wrapperBorder.style !== 'none' ? `
			.${uniqueId} {
				border: ${wrapperBorderStyle};
			}
			` : ''; // Wrapper Box Shadow

  const wrapperShadowStyles = {
    'box-shadow': boxShadowWrapper.shadowType !== 'none' ? `${boxShadowWrapper.offsetX}px ${boxShadowWrapper.offsetY}px ${boxShadowWrapper.blurRadius || 10}px ${boxShadowWrapper.spreadRadius || 0}px ${boxShadowWrapper.color} ${boxShadowWrapper.shadowType}` : ''
  };
  const wrapperShadow = boxShadowWrapper.shadowType !== 'none' ? `
			.${uniqueId} {
				box-shadow: ${wrapperShadowStyles['box-shadow']};
			}
			` : ''; // Left Typography

  const typographyStyles = {
    'font-family': typography.fontFamily,
    'font-weight': typography.fontWeight,
    'font-style': typography.fontStyle,
    'text-transform': typography.textTransform,
    'line-height': typography.lineHeight,
    'letter-spacing': typography.letterSpacing,
    'word-spacing': typography.wordSpacing
  };

  const addPxIfNeeded = value => {
    if (typeof value === 'number') {
      return `${value}px`;
    }

    return value;
  };

  typographyStyles['letter-spacing'] = addPxIfNeeded(typographyStyles['letter-spacing']);
  typographyStyles['word-spacing'] = addPxIfNeeded(typographyStyles['word-spacing']);
  const mergedTypographyStyles = { ...typographyStyles
  };
  const cssStyles = Object.keys(mergedTypographyStyles).filter(property => mergedTypographyStyles[property] !== undefined && mergedTypographyStyles[property] !== '').map(property => `${property}: ${mergedTypographyStyles[property]};`).join(' ');
  const nameBlock = typography.fontFamily || typography.fontWeight || typography.fontStyle || typography.textTransform || typography.lineHeight || typography.letterSpacing || typography.wordSpacing ? `
		.${uniqueId} .bwddh-first-hedi {
			${cssStyles}
		}
  			` : ''; // unique id

  useEffect(() => {
    setAttributes({
      uniqueId: `bwddhb-duo-head-${clientId.slice(0, 8)}`
    });
  }, [clientId]); // function to convert object to css

  const convertToCss = obj => {
    let cssResult;
    Object.keys(obj).reduce((cssString, key) => {
      // change key to css property
      const cssProperty = key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
      cssResult = `${cssString}${cssProperty}:${obj[key]};`;
      return cssResult;
    }, '');
    return cssResult;
  }; // Custom Container Width


  const deskContainerWidth = attributes[`${CUSTOM_CONTAINER_WIDTH}DeskRange`];
  const tabContainerWidth = attributes[`${CUSTOM_CONTAINER_WIDTH}TabRange`];
  const mobContainerWidth = attributes[`${CUSTOM_CONTAINER_WIDTH}MobRange`];
  const containerWidthUnit = attributes[`${CUSTOM_CONTAINER_WIDTH}Unit`]; // Left Font Size

  const deskLeftFont = attributes[`${LEFT_FONT_SIZE}DeskRange`];
  const tabLeftFont = attributes[`${LEFT_FONT_SIZE}TabRange`];
  const mobLeftFont = attributes[`${LEFT_FONT_SIZE}MobRange`];
  const nameFontUnit = attributes[`${LEFT_FONT_SIZE}Unit`]; // Right Font Size

  const deskRightFont = attributes[`${RIGHT_FONT_SIZE}DeskRange`];
  const tabRightFont = attributes[`${RIGHT_FONT_SIZE}TabRange`];
  const mobRightFont = attributes[`${RIGHT_FONT_SIZE}MobRange`];
  const rightFontUnit = attributes[`${RIGHT_FONT_SIZE}Unit`]; // Left Margin Top

  const deskGapMarginLR = attributes[`${GAP_MARGIN_LR}DeskRange`];
  const tabGapMarginLR = attributes[`${GAP_MARGIN_LR}TabRange`];
  const mobGapMarginLR = attributes[`${GAP_MARGIN_LR}MobRange`];
  const gapMarginLrUnit = attributes[`${GAP_MARGIN_LR}Unit`]; // Wrapper Padding Top

  const deskWrapperPaddingTop = attributes[`${WRAPPER_PADDING_TOP}DeskRange`];
  const tabWrapperPaddingTop = attributes[`${WRAPPER_PADDING_TOP}TabRange`];
  const mobWrapperPaddingTop = attributes[`${WRAPPER_PADDING_TOP}MobRange`];
  const wrapperPaddingTopUnit = attributes[`${WRAPPER_PADDING_TOP}Unit`]; // Wrapper Padding Bottom

  const deskWrapperPaddingBottom = attributes[`${WRAPPER_PADDING_BOTTOM}DeskRange`];
  const tabWrapperPaddingBottom = attributes[`${WRAPPER_PADDING_BOTTOM}TabRange`];
  const mobWrapperPaddingBottom = attributes[`${WRAPPER_PADDING_BOTTOM}MobRange`];
  const wrapperPaddingBottomUnit = attributes[`${WRAPPER_PADDING_BOTTOM}Unit`]; // Wrapper Padding Left

  const deskWrapperPaddingLeft = attributes[`${WRAPPER_PADDING_LEFT}DeskRange`];
  const tabWrapperPaddingLeft = attributes[`${WRAPPER_PADDING_LEFT}TabRange`];
  const mobWrapperPaddingLeft = attributes[`${WRAPPER_PADDING_LEFT}MobRange`];
  const wrapperPaddingLeftUnit = attributes[`${WRAPPER_PADDING_LEFT}Unit`]; // Wrapper Padding Right

  const deskWrapperPaddingRight = attributes[`${WRAPPER_PADDING_RIGHT}DeskRange`];
  const tabWrapperPaddingRight = attributes[`${WRAPPER_PADDING_RIGHT}TabRange`];
  const mobWrapperPaddingRight = attributes[`${WRAPPER_PADDING_RIGHT}MobRange`];
  const wrapperPaddingRightUnit = attributes[`${WRAPPER_PADDING_RIGHT}Unit`]; // Wrapper Border Radius Top

  const deskWrapperBorderRadiusTop = attributes[`${WRAPPER_BORDER_RADIUS_TOP}DeskRange`];
  const tabWrapperBorderRadiusTop = attributes[`${WRAPPER_BORDER_RADIUS_TOP}TabRange`];
  const mobWrapperBorderRadiusTop = attributes[`${WRAPPER_BORDER_RADIUS_TOP}MobRange`];
  const wrapperBorderRadiusTopUnit = attributes[`${WRAPPER_BORDER_RADIUS_TOP}Unit`]; // Wrapper Border Radius Right

  const deskWrapperBorderRadiusRight = attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}DeskRange`];
  const tabWrapperBorderRadiusRight = attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}TabRange`];
  const mobWrapperBorderRadiusRight = attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}MobRange`];
  const wrapperBorderRadiusRightUnit = attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}Unit`]; // Wrapper Border Radius Bottom

  const deskWrapperBorderRadiusBottom = attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}DeskRange`];
  const tabWrapperBorderRadiusBottom = attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}TabRange`];
  const mobWrapperBorderRadiusBottom = attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}MobRange`];
  const wrapperBorderRadiusBottomUnit = attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}Unit`]; // Wrapper Border Radius Left

  const deskWrapperBorderRadiusLeft = attributes[`${WRAPPER_BORDER_RADIUS_LEFT}DeskRange`];
  const tabWrapperBorderRadiusLeft = attributes[`${WRAPPER_BORDER_RADIUS_LEFT}TabRange`];
  const mobWrapperBorderRadiusLeft = attributes[`${WRAPPER_BORDER_RADIUS_LEFT}MobRange`];
  const wrapperBorderRadiusLeftUnit = attributes[`${WRAPPER_BORDER_RADIUS_LEFT}Unit`]; // Wrapper Margin Top

  const deskWrapperMarginTop = attributes[`${WRAPPER_MARGIN_TOP}DeskRange`];
  const tabWrapperMarginTop = attributes[`${WRAPPER_MARGIN_TOP}TabRange`];
  const mobWrapperMarginTop = attributes[`${WRAPPER_MARGIN_TOP}MobRange`];
  const wrapperMarginTopUnit = attributes[`${WRAPPER_MARGIN_TOP}Unit`]; // Wrapper Margin Right

  const deskWrapperMarginRight = attributes[`${WRAPPER_MARGIN_RIGHT}DeskRange`];
  const tabWrapperMarginRight = attributes[`${WRAPPER_MARGIN_RIGHT}TabRange`];
  const mobWrapperMarginRight = attributes[`${WRAPPER_MARGIN_RIGHT}MobRange`];
  const wrapperMarginRightUnit = attributes[`${WRAPPER_MARGIN_RIGHT}Unit`]; // Wrapper Margin Bottom

  const deskWrapperMarginBottom = attributes[`${WRAPPER_MARGIN_BOTTOM}DeskRange`];
  const tabWrapperMarginBottom = attributes[`${WRAPPER_MARGIN_BOTTOM}TabRange`];
  const mobWrapperMarginBottom = attributes[`${WRAPPER_MARGIN_BOTTOM}MobRange`];
  const wrapperMarginBottomUnit = attributes[`${WRAPPER_MARGIN_BOTTOM}Unit`]; // Wrapper Margin Left

  const deskWrapperMarginLeft = attributes[`${WRAPPER_MARGIN_LEFT}DeskRange`];
  const tabWrapperMarginLeft = attributes[`${WRAPPER_MARGIN_LEFT}TabRange`];
  const mobWrapperMarginLeft = attributes[`${WRAPPER_MARGIN_LEFT}MobRange`];
  const wrapperMarginLeftUnit = attributes[`${WRAPPER_MARGIN_LEFT}Unit`]; // Wrapper Style

  const wrapperDeskStyles = { ...(deskWrapperPaddingTop !== undefined && deskWrapperPaddingTop !== '' && {
      paddingTop: `${deskWrapperPaddingTop}${wrapperPaddingTopUnit}`
    }),
    ...(deskWrapperPaddingBottom !== undefined && deskWrapperPaddingBottom !== '' && {
      paddingBottom: `${deskWrapperPaddingBottom}${wrapperPaddingBottomUnit}`
    }),
    ...(deskWrapperPaddingLeft !== undefined && deskWrapperPaddingLeft !== '' && {
      paddingLeft: `${deskWrapperPaddingLeft}${wrapperPaddingLeftUnit}`
    }),
    ...(deskWrapperPaddingRight !== undefined && deskWrapperPaddingRight !== '' && {
      paddingRight: `${deskWrapperPaddingRight}${wrapperPaddingRightUnit}`
    }),
    ...(deskWrapperMarginTop !== undefined && deskWrapperMarginTop !== '' && {
      marginTop: `${deskWrapperMarginTop}${wrapperMarginTopUnit}`
    }),
    ...(deskWrapperMarginRight !== undefined && deskWrapperMarginRight !== '' && {
      marginRight: `${deskWrapperMarginRight}${wrapperMarginRightUnit}`
    }),
    ...(deskWrapperMarginBottom !== undefined && deskWrapperMarginBottom !== '' && {
      marginBottom: `${deskWrapperMarginBottom}${wrapperMarginBottomUnit}`
    }),
    ...(deskWrapperMarginLeft !== undefined && deskWrapperMarginLeft !== '' && {
      marginLeft: `${deskWrapperMarginLeft}${wrapperMarginLeftUnit}`
    }),
    ...(deskWrapperBorderRadiusTop !== undefined && deskWrapperBorderRadiusTop !== '' && {
      borderTopLeftRadius: `${deskWrapperBorderRadiusTop}${wrapperBorderRadiusTopUnit}`
    }),
    ...(deskWrapperBorderRadiusRight !== undefined && deskWrapperBorderRadiusRight !== '' && {
      borderTopRightRadius: `${deskWrapperBorderRadiusRight}${wrapperBorderRadiusRightUnit}`
    }),
    ...(deskWrapperBorderRadiusBottom !== undefined && deskWrapperBorderRadiusBottom !== '' && {
      borderBottomRightRadius: `${deskWrapperBorderRadiusBottom}${wrapperBorderRadiusBottomUnit}`
    }),
    ...(deskWrapperBorderRadiusLeft !== undefined && deskWrapperBorderRadiusLeft !== '' && {
      borderBottomLeftRadius: `${deskWrapperBorderRadiusLeft}${wrapperBorderRadiusLeftUnit}`
    }),
    ...(wrapperBgColor !== undefined && wrapperBgColor !== '' && {
      background: `${wrapperBgColor}`
    }),
    ...(wrapperGradientBg !== undefined && wrapperGradientBg !== '' && {
      background: `${wrapperGradientBg}`
    }),
    ...(bgPosition !== undefined && bgPosition !== '' && {
      backgroundPosition: `${bgPosition}`
    }),
    ...(bgAttachment !== undefined && bgAttachment !== '' && {
      backgroundAttachment: `${bgAttachment}`
    }),
    ...(bgRepeat !== undefined && bgRepeat !== '' && {
      backgroundRepeat: `${bgRepeat}`
    }),
    ...(bgSize !== undefined && bgSize !== '' && {
      backgroundSize: `${bgSize}`
    })
  };
  const wrapperTabStyles = { ...(tabWrapperPaddingTop !== undefined && tabWrapperPaddingTop !== '' && {
      paddingTop: `${tabWrapperPaddingTop}${wrapperPaddingTopUnit}`
    }),
    ...(tabWrapperPaddingBottom !== undefined && tabWrapperPaddingBottom !== '' && {
      paddingBottom: `${tabWrapperPaddingBottom}${wrapperPaddingBottomUnit}`
    }),
    ...(tabWrapperPaddingLeft !== undefined && tabWrapperPaddingLeft !== '' && {
      paddingLeft: `${tabWrapperPaddingLeft}${wrapperPaddingLeftUnit}`
    }),
    ...(tabWrapperPaddingRight !== undefined && tabWrapperPaddingRight !== '' && {
      paddingRight: `${tabWrapperPaddingRight}${wrapperPaddingRightUnit}`
    }),
    ...(tabWrapperMarginTop !== undefined && tabWrapperMarginTop !== '' && {
      marginTop: `${tabWrapperMarginTop}${wrapperMarginTopUnit}`
    }),
    ...(tabWrapperMarginBottom !== undefined && tabWrapperMarginBottom !== '' && {
      marginBottom: `${tabWrapperMarginBottom}${wrapperMarginBottomUnit}`
    }),
    ...(tabWrapperMarginLeft !== undefined && tabWrapperMarginLeft !== '' && {
      marginLeft: `${tabWrapperMarginLeft}${wrapperMarginLeftUnit}`
    }),
    ...(tabWrapperMarginRight !== undefined && tabWrapperMarginRight !== '' && {
      marginRight: `${tabWrapperMarginRight}${wrapperMarginRightUnit}`
    }),
    ...(tabWrapperBorderRadiusTop !== undefined && tabWrapperBorderRadiusTop !== '' && {
      borderTopLeftRadius: `${tabWrapperBorderRadiusTop}${wrapperBorderRadiusTopUnit}`
    }),
    ...(tabWrapperBorderRadiusRight !== undefined && tabWrapperBorderRadiusRight !== '' && {
      borderTopRightRadius: `${tabWrapperBorderRadiusRight}${wrapperBorderRadiusRightUnit}`
    }),
    ...(tabWrapperBorderRadiusBottom !== undefined && tabWrapperBorderRadiusBottom !== '' && {
      borderBottomRightRadius: `${tabWrapperBorderRadiusBottom}${wrapperBorderRadiusBottomUnit}`
    }),
    ...(tabWrapperBorderRadiusLeft !== undefined && tabWrapperBorderRadiusLeft !== '' && {
      borderBottomLeftRadius: `${tabWrapperBorderRadiusLeft}${wrapperBorderRadiusLeftUnit}`
    })
  };
  const wrapperMobStyles = { ...(mobWrapperPaddingTop !== undefined && mobWrapperPaddingTop !== '' && {
      paddingTop: `${mobWrapperPaddingTop}${wrapperPaddingTopUnit}`
    }),
    ...(mobWrapperPaddingBottom !== undefined && mobWrapperPaddingBottom !== '' && {
      paddingBottom: `${mobWrapperPaddingBottom}${wrapperPaddingBottomUnit}`
    }),
    ...(mobWrapperPaddingLeft !== undefined && mobWrapperPaddingLeft !== '' && {
      paddingLeft: `${mobWrapperPaddingLeft}${wrapperPaddingLeftUnit}`
    }),
    ...(mobWrapperPaddingRight !== undefined && mobWrapperPaddingRight !== '' && {
      paddingRight: `${mobWrapperPaddingRight}${wrapperPaddingRightUnit}`
    }),
    ...(mobWrapperMarginTop !== undefined && mobWrapperMarginTop !== '' && {
      marginTop: `${mobWrapperMarginTop}${wrapperMarginTopUnit}`
    }),
    ...(mobWrapperMarginBottom !== undefined && mobWrapperMarginBottom !== '' && {
      marginBottom: `${mobWrapperMarginBottom}${wrapperMarginBottomUnit}`
    }),
    ...(mobWrapperMarginLeft !== undefined && mobWrapperMarginLeft !== '' && {
      marginLeft: `${mobWrapperMarginLeft}${wrapperMarginLeftUnit}`
    }),
    ...(mobWrapperMarginRight !== undefined && mobWrapperMarginRight !== '' && {
      marginRight: `${mobWrapperMarginRight}${wrapperMarginRightUnit}`
    }),
    ...(mobWrapperBorderRadiusTop !== undefined && mobWrapperBorderRadiusTop !== '' && {
      borderTopLeftRadius: `${mobWrapperBorderRadiusTop}${wrapperBorderRadiusTopUnit}`
    }),
    ...(mobWrapperBorderRadiusRight !== undefined && mobWrapperBorderRadiusRight !== '' && {
      borderTopRightRadius: `${mobWrapperBorderRadiusRight}${wrapperBorderRadiusRightUnit}`
    }),
    ...(mobWrapperBorderRadiusBottom !== undefined && mobWrapperBorderRadiusBottom !== '' && {
      borderBottomRightRadius: `${mobWrapperBorderRadiusBottom}${wrapperBorderRadiusBottomUnit}`
    }),
    ...(mobWrapperBorderRadiusLeft !== undefined && mobWrapperBorderRadiusLeft !== '' && {
      borderBottomLeftRadius: `${mobWrapperBorderRadiusLeft}${wrapperBorderRadiusLeftUnit}`
    })
  };
  const responsiveDesktopCSS = `
            .${uniqueId}.wp-block {
                opacity: ${hideOnDesktop ? '0.4' : '1'};
                display: ${hideOnDesktop ? 'block' : 'inherit'};
            }
            .${uniqueId} {
                display: ${hideOnDesktop ? 'none' : 'inherit'};
            }
        `;
  const responsiveTabCSS = `
            .${uniqueId}.wp-block {
                opacity: ${hideOnTablet ? '0.4' : '1'};
                display: ${hideOnTablet ? 'block' : 'inherit'};
            }
            .${uniqueId} {
                display: ${hideOnTablet ? 'none' : 'inherit'};
            }
        `;
  const responsiveMobileCSS = `
            .${uniqueId}.wp-block {
                opacity: ${hideOnMobile ? '0.4' : '1'};
                display: ${hideOnMobile ? 'block' : 'inherit'};
            }
            .${uniqueId} {
                display: ${hideOnMobile ? 'none' : 'inherit'};
            }
        `;
  const deskStyles = `

		${deskContainerWidth !== undefined && deskContainerWidth !== '' ? `.${uniqueId}.custom-width {
						max-width: ${deskContainerWidth}${containerWidthUnit}
					}` : ' '}
		${Object.keys(wrapperDeskStyles).length > 0 ? `.${uniqueId} { ${convertToCss(wrapperDeskStyles)}}` : ' '}
		.${uniqueId} .bdt-image-wrap,
		.${uniqueId} .bdt-info-wrap,
		.${uniqueId} .wp-block-bdt-duo-head-item .bdt-hover-content .bdt-social-share{
			text-align: ${textAlign};
			justify-content: ${textAlign};
		}
		${deskLeftFont !== undefined && deskLeftFont !== '' ? `.${uniqueId} .bwddh-first-hedi {
					font-size: ${deskLeftFont}${nameFontUnit};
				}` : ' '}		
		${deskRightFont !== undefined && deskRightFont !== '' ? `.${uniqueId} .bwddh-sec-hedi {
					font-size: ${deskRightFont}${rightFontUnit};
				}` : ' '}		
		 ${nameBlock}
	
		
		
		${leftColor !== undefined && leftColor !== '' ? `.${uniqueId} .bwddh-first-hedi {
				color: ${leftColor};
			}` : ' '}
		${rightColor !== undefined && rightColor !== '' ? `.${uniqueId} .bwddh-sec-hedi {
				color: ${rightColor};
			}` : ' '}
		${responsiveDesktopCSS}
		${leftHoverColor !== undefined && leftHoverColor !== '' ? `.${uniqueId} .bwddh-first-hedi:hover {
				color: ${leftHoverColor};
			}` : ' '}
		${rightHoverColor !== undefined && rightHoverColor !== '' ? `.${uniqueId} .bwddh-sec-hedi:hover {
				color: ${rightHoverColor};
			}` : ' '}
		${leftAlign !== undefined && leftAlign !== '' ? `.${uniqueId} {
				text-align: ${leftAlign};
			}` : ' '}
		${rightAlign !== undefined && rightAlign !== '' ? `.${uniqueId} {
				text-align: ${rightAlign};
			}` : ' '}
		${deskGapMarginLR !== undefined && deskGapMarginLR !== '' ? `.${uniqueId} .bwddh-first-hedi {
				margin-right: ${deskGapMarginLR}${gapMarginLrUnit};
			} .${uniqueId} .bwddh-sec-hedi {
				margin-left: ${deskGapMarginLR}${gapMarginLrUnit};
			}` : ' '}
		
		${wrapperBorderBlock}
		${wrapperShadow}
		${mainWrapperBgColor !== undefined && mainWrapperBgColor !== '' ? `.${uniqueId} {
				background: ${mainWrapperBgColor};
			}` : ' '}
		${zIndex !== undefined && zIndex !== '' ? `.${uniqueId} {
				z-index: ${zIndex};
			}` : ' '}
		
    
		${customCSS}
		
	`;
  const tabStyles = `
		${tabContainerWidth !== undefined && tabContainerWidth !== '' ? `.${uniqueId} {
						max-width: ${tabContainerWidth}${containerWidthUnit}
					}` : ' '}
		${responsiveTabCSS}
		${Object.keys(wrapperTabStyles).length > 0 ? `.${uniqueId} { ${convertToCss(wrapperTabStyles)}}` : ' '}
		${tabLeftFont !== undefined && tabLeftFont !== '' ? `.${uniqueId} .bwddh-first-hedi {
					font-size: ${tabLeftFont}${nameFontUnit};
				}` : ' '}
		${tabRightFont !== undefined && tabRightFont !== '' ? `.${uniqueId} .bwddh-sec-hedi {
					font-size: ${tabRightFont}${rightFontUnit};
				}` : ' '}
		${tabGapMarginLR !== undefined && tabGapMarginLR !== '' ? `.${uniqueId} .bwddh-first-hedi {
				margin-right: ${tabGapMarginLR}${gapMarginLrUnit};
			} .${uniqueId} .bwddh-sec-hedi {
				margin-left: ${tabGapMarginLR}${gapMarginLrUnit};
			}` : ' '}
	`;
  const mobStyles = `
		${mobContainerWidth !== undefined && mobContainerWidth !== '' ? `.${uniqueId}.custom-width {
						max-width: ${mobContainerWidth}${containerWidthUnit}
					}` : ' '}
		${responsiveMobileCSS}
		${Object.keys(wrapperMobStyles).length > 0 ? `.${uniqueId} {${convertToCss(wrapperMobStyles)}}` : ' '}
		${mobLeftFont !== undefined && mobLeftFont !== '' ? `.${uniqueId} .bwddh-first-hedi {
					font-size: ${mobLeftFont}${nameFontUnit};
				}` : ' '}
		${mobRightFont !== undefined && mobRightFont !== '' ? `.${uniqueId} .bwddh-sec-hedi {
					font-size: ${mobRightFont}${rightFontUnit};
				}` : ' '}
		${mobGapMarginLR !== undefined && mobGapMarginLR !== '' ? `.${uniqueId} .bwddh-first-hedi {
				margin-right: ${mobGapMarginLR}${gapMarginLrUnit};
			} .${uniqueId} .bwddh-sec-hedi {
				margin-left: ${mobGapMarginLR}${gapMarginLrUnit};
			}` : ' '}
	`;
  /**
   * Block All Styles
   */

  const blockStyleCss = `
		${deskStyles}
		
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;
  useEffect(() => {
    if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
      setAttributes({
        blockStyle: blockStyleCss
      });
    }
  }, [attributes]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `${(0,_helper_softminify__WEBPACK_IMPORTED_MODULE_4__.softMinifyCssStrings)(blockStyleCss)}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `bwddh-heading bwddh-dual-hedi-${style} ${uniqueId} ${containerWidth}`
  }), enaLink ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: textUrl,
    target: newTab ? '_blank' : ''
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: `bwddh-first-hedi bwddh-heddi-${style}`,
    value: leftText,
    onChange: newText => setAttributes({
      leftText: newText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: `bwddh-sec-hedi bwddh-cor-hedi-${style}`,
    value: rightText,
    onChange: newText => setAttributes({
      rightText: newText
    })
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: `bwddh-first-hedi bwddh-heddi-${style}`,
    value: leftText,
    onChange: newText => setAttributes({
      leftText: newText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: `bwddh-sec-hedi bwddh-cor-hedi-${style}`,
    value: rightText,
    onChange: newText => setAttributes({
      rightText: newText
    })
  }))));
}

/***/ }),

/***/ "./src/blocks/duo-head/icon.js":
/*!*************************************!*\
  !*** ./src/blocks/duo-head/icon.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamMemberIcon: function() { return /* binding */ TeamMemberIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const TeamMemberIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "512",
    height: "512",
    viewBox: "0 0 173.397 173.397"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M86.665 13.481c-6.453 0-12.204 2.356-14.82 6.486-.224.351-.57.608-.972.718-2.236.61-3.794 1.799-4.764 3.635-1.588 3.007-1.463 7.729.341 12.954.414 1.197.919 2.37 1.502 3.496.41-1.943 1.21-3.38 2.406-4.347 2.008-1.62 3.105-6.128 2.175-8.932a1.671 1.671 0 0 1 2.537-1.9c5.236 3.621 10.732 4.333 17.296 2.238 3.048-.972 5.707-.667 7.902.907 3.312 2.374 4.786 7.163 5.42 11.538 1.594-3.158 2.77-6.219 2.77-8.81 0-8.01-5.263-14.319-14.077-16.876a27.811 27.811 0 0 0-7.717-1.107zm17.797 34.177a1.671 1.671 0 0 1-1.671-1.64c-.049-2.7-.515-11.73-4.47-14.566-1.308-.939-2.924-1.081-4.939-.439-6.293 2.008-11.946 1.726-17.179-.875-.068 3.273-1.298 6.91-3.746 8.886-.813.657-1.723 2.38-1.437 6.857a1.67 1.67 0 0 1-2.971 1.152c-2.028-2.53-3.673-5.526-4.758-8.668-2.136-6.186-2.185-11.728-.137-15.606 1.312-2.484 3.404-4.203 6.224-5.116 2.304-3.273 6.185-5.67 11.007-6.781 4.724-1.09 10.025-.906 14.927.516 10.324 2.996 16.487 10.504 16.487 20.085 0 4.75-2.786 9.975-5.89 15.36a1.67 1.67 0 0 1-1.447.835z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M86.695 70.856c-7.013 0-13.136-4.755-16.527-12.776-5.426-1.076-8.653-6.603-8.568-11.477.063-3.664 2.033-6.133 5.018-6.29a1.671 1.671 0 0 1 .174 3.338c-1.625.085-1.836 2.134-1.85 3.01-.054 3.086 1.994 7.838 6.56 8.237a1.671 1.671 0 0 1 1.414 1.064c2.788 7.234 7.939 11.553 13.779 11.553s10.991-4.319 13.779-11.553a1.671 1.671 0 0 1 1.413-1.064c4.568-.399 6.616-5.15 6.562-8.236-.015-.878-.226-2.926-1.851-3.011a1.671 1.671 0 0 1 .174-3.338c2.985.157 4.955 2.626 5.018 6.29.085 4.874-3.142 10.401-8.567 11.477-3.392 8.02-9.514 12.777-16.528 12.776zM106.839 113.454H66.558a1.67 1.67 0 1 1 0-3.342h40.281a1.671 1.671 0 0 1 0 3.342zM46.566 83.705a1.671 1.671 0 0 1-1.352-2.651c3.584-4.95 9.525-7.905 15.89-7.905h14.297c.358 0 .707.115.995.328 6.162 4.57 14.443 4.57 20.605 0a1.67 1.67 0 0 1 .995-.328h14.296c6.365 0 12.306 2.954 15.89 7.904a1.671 1.671 0 1 1-2.707 1.96c-2.958-4.084-7.886-6.522-13.183-6.522H98.536c-7.149 5.014-16.526 5.015-23.675 0H61.105c-5.298 0-10.227 2.438-13.184 6.523a1.67 1.67 0 0 1-1.355.69z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M75.4 76.49a1.67 1.67 0 0 1-1.67-1.67V63.538a1.67 1.67 0 1 1 3.342 0V74.82a1.67 1.67 0 0 1-1.671 1.67zM97.996 76.49a1.67 1.67 0 0 1-1.67-1.67V63.532a1.67 1.67 0 1 1 3.342 0V74.82c0 .924-.749 1.672-1.672 1.672zM47.282 83.67c-5.212 0-9.846 1.89-11.948 5.208-.223.352-.57.608-.971.718-1.76.48-2.983 1.411-3.742 2.848-1.27 2.405-1.162 6.21.299 10.438.25.725.542 1.44.87 2.135.389-1.282 1.016-2.266 1.886-2.968 1.575-1.272 2.432-4.824 1.697-7.038a1.67 1.67 0 0 1 2.537-1.9c4.232 2.927 8.679 3.501 13.993 1.806 3.244-1.035 5.472-.142 6.77.788 2.574 1.845 3.835 5.386 4.437 8.788 1.084-2.27 1.844-4.444 1.844-6.302 0-6.46-4.256-11.551-11.384-13.619a22.672 22.672 0 0 0-6.288-.903zm14.675 28.158a1.672 1.672 0 0 1-1.671-1.64c-.082-4.514-1.06-9.974-3.56-11.767-.997-.714-2.242-.819-3.807-.32-5.103 1.628-9.703 1.455-13.971-.542-.159 2.654-1.203 5.5-3.173 7.09-.504.407-1.314 1.65-1.075 5.401a1.671 1.671 0 0 1-2.971 1.152 24.43 24.43 0 0 1-3.968-7.228c-1.787-5.174-1.82-9.823-.095-13.09 1.087-2.059 2.878-3.544 5.203-4.326 1.947-2.716 5.181-4.703 9.186-5.626 3.94-.908 8.36-.755 12.446.43 8.638 2.506 13.795 8.797 13.795 16.83 0 3.984-2.314 8.328-4.892 12.8-.303.526-.86.836-1.447.836z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M47.32 130.939c-5.86 0-10.972-3.929-13.826-10.563-4.527-.988-7.214-5.624-7.143-9.717.056-3.186 1.788-5.333 4.413-5.47a1.671 1.671 0 0 1 .175 3.338c-1.091.056-1.235 1.55-1.246 2.19-.042 2.432 1.56 6.175 5.137 6.488a1.67 1.67 0 0 1 1.414 1.063c2.25 5.842 6.391 9.33 11.076 9.33 4.685 0 8.826-3.488 11.077-9.33a1.67 1.67 0 0 1 1.413-1.063c3.576-.313 5.18-4.056 5.137-6.487-.011-.64-.155-2.135-1.246-2.192a1.671 1.671 0 0 1 .175-3.337c2.625.137 4.357 2.285 4.412 5.47.072 4.092-2.614 8.729-7.142 9.716-2.854 6.635-7.967 10.564-13.826 10.564zM13.504 159.895h67.632v-12.363c0-6.423-5.712-11.648-12.734-11.648h-11.24c-5.874 4.058-13.81 4.059-19.683 0H26.238c-7.022 0-12.734 5.225-12.734 11.648zm69.303 3.342H11.833c-.923 0-1.671-.748-1.671-1.67v-14.035c0-8.266 7.212-14.99 16.076-14.99h11.777c.359 0 .708.115.996.328 4.892 3.629 11.726 3.629 16.618 0 .288-.213.637-.329.996-.329h11.777c8.864 0 16.076 6.725 16.076 14.991v14.034c0 .923-.748 1.671-1.67 1.671z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M38.015 135.884a1.671 1.671 0 0 1-1.67-1.67v-9.597a1.67 1.67 0 1 1 3.341 0v9.596c0 .923-.748 1.671-1.67 1.671zM56.63 135.884a1.671 1.671 0 0 1-1.671-1.67v-9.602a1.671 1.671 0 0 1 3.342 0v9.6c0 .924-.748 1.672-1.671 1.672zM126.039 83.67c-5.211 0-9.845 1.89-11.948 5.208-.223.352-.57.608-.971.718-1.76.48-2.983 1.411-3.742 2.848-1.27 2.405-1.161 6.21.299 10.438.25.725.542 1.44.87 2.135.389-1.282 1.015-2.266 1.886-2.968 1.575-1.272 2.432-4.824 1.697-7.038a1.671 1.671 0 0 1 2.537-1.9c4.233 2.927 8.679 3.501 13.993 1.806 3.244-1.035 5.472-.142 6.77.788 2.575 1.845 3.834 5.386 4.437 8.788 1.084-2.27 1.844-4.444 1.844-6.302 0-6.46-4.256-11.551-11.384-13.619a22.673 22.673 0 0 0-6.288-.903zm14.675 28.158a1.669 1.669 0 0 1-1.671-1.641c-.082-4.513-1.06-9.973-3.56-11.766-.997-.714-2.242-.819-3.807-.32-5.103 1.628-9.704 1.455-13.97-.542-.16 2.654-1.205 5.5-3.174 7.09-.504.407-1.314 1.65-1.074 5.401a1.671 1.671 0 0 1-2.972 1.152 24.414 24.414 0 0 1-3.968-7.228c-1.787-5.174-1.82-9.823-.095-13.09 1.087-2.059 2.878-3.544 5.203-4.326 1.946-2.716 5.181-4.703 9.186-5.626 3.94-.908 8.36-.755 12.446.43 8.638 2.506 13.795 8.797 13.795 16.83 0 3.984-2.314 8.328-4.892 12.8-.303.526-.86.836-1.447.836z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M126.077 130.939c-5.86 0-10.972-3.929-13.826-10.563-4.527-.988-7.214-5.624-7.143-9.717.056-3.186 1.788-5.333 4.413-5.47a1.67 1.67 0 1 1 .175 3.337c-1.091.057-1.235 1.552-1.246 2.192-.043 2.43 1.56 6.174 5.137 6.487a1.67 1.67 0 0 1 1.413 1.063c2.251 5.842 6.392 9.33 11.077 9.33s8.825-3.488 11.076-9.33a1.67 1.67 0 0 1 1.414-1.063c3.576-.313 5.18-4.056 5.137-6.487-.011-.64-.155-2.135-1.246-2.192a1.671 1.671 0 1 1 .175-3.337c2.625.137 4.357 2.285 4.413 5.47.07 4.092-2.616 8.729-7.143 9.716-2.854 6.635-7.967 10.564-13.826 10.564zM92.261 159.895h67.632v-12.363c0-6.423-5.713-11.648-12.734-11.648h-11.241c-5.873 4.058-13.809 4.058-19.682 0h-11.241c-7.022 0-12.734 5.225-12.734 11.648zm69.303 3.342H90.59a1.671 1.671 0 0 1-1.671-1.67v-14.035c0-8.266 7.211-14.99 16.076-14.99h11.777c.359 0 .708.115.996.328 4.892 3.629 11.726 3.629 16.618 0 .288-.213.637-.329.996-.329h11.777c8.864 0 16.076 6.725 16.076 14.991v14.034c0 .923-.748 1.671-1.671 1.671z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M116.772 135.884a1.67 1.67 0 0 1-1.671-1.67v-9.597a1.67 1.67 0 1 1 3.342 0v9.596c0 .923-.748 1.671-1.671 1.671zM135.387 135.884a1.67 1.67 0 0 1-1.671-1.67v-9.602a1.671 1.671 0 1 1 3.342 0v9.6c0 .924-.748 1.672-1.671 1.672z"
  })));
};

/***/ }),

/***/ "./src/blocks/duo-head/index.js":
/*!**************************************!*\
  !*** ./src/blocks/duo-head/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/duo-head/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/duo-head/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/duo-head/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/duo-head/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/duo-head/attributes.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "./src/blocks/duo-head/icon.js");




/**
 * Internal dependencies
 */


 // import attributes



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  icon: {
    src: _icon__WEBPACK_IMPORTED_MODULE_7__.TeamMemberIcon,
    foreground: '#9100ff',
    borderRadius: '5px'
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('team', 'duo-head-block'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('bwd', 'duo-head-block'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('member', 'duo-head-block')],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/duo-head/inspector.js":
/*!******************************************!*\
  !*** ./src/blocks/duo-head/inspector.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/duo-head/constants/index.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls */ "./src/controls/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/duo-head/editor.scss");
/* harmony import */ var _options_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../options/align */ "./src/options/align.js");
/* harmony import */ var _options_select_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../options/select-tag */ "./src/options/select-tag.js");
/* harmony import */ var _options_selected_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../options/selected-style */ "./src/options/selected-style.js");
/* harmony import */ var _includes_assets_img_bwd_placeholder_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../includes/assets/img/bwd-placeholder.jpg */ "./includes/assets/img/bwd-placeholder.jpg");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributes */ "./src/blocks/duo-head/attributes.js");


/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * WordPress dependencies
 */



const {
  Fragment,
  useState,
  useEffect
} = wp.element;
const {
  useDispatch
} = wp.data;
/**
 * Internal dependencies
 */








const {
  ResRangleControl,
  ColorControl,
  BackgroundControl,
  TabPanelControl,
  MyTypographyControl,
  CustomBorderControl,
  BoxShadowControl,
  Alignment,
  ResDimensionControl
} = _controls__WEBPACK_IMPORTED_MODULE_5__;
const {
  LEFT_FONT_SIZE,
  RIGHT_FONT_SIZE,
  GAP_MARGIN_LR,
  WRAPPER_PADDING_BOTTOM,
  WRAPPER_PADDING_LEFT,
  WRAPPER_PADDING_RIGHT,
  WRAPPER_PADDING_TOP,
  WRAPPER_MARGIN_TOP,
  WRAPPER_MARGIN_RIGHT,
  WRAPPER_MARGIN_BOTTOM,
  WRAPPER_MARGIN_LEFT,
  WRAPPER_BORDER_RADIUS_TOP,
  WRAPPER_BORDER_RADIUS_RIGHT,
  WRAPPER_BORDER_RADIUS_BOTTOM,
  WRAPPER_BORDER_RADIUS_LEFT
} = _constants__WEBPACK_IMPORTED_MODULE_4__;


const Inspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    style,
    leftText,
    rightText,
    enaLink,
    textUrl,
    newTab,
    leftColor,
    rightColor,
    leftHoverColor,
    rightHoverColor,
    typography,
    leftAlign,
    rightAlign,
    wrapperBorder,
    boxShadowWrapper,
    hideOnDesktop,
    hideOnTablet,
    hideOnMobile,
    zIndex,
    customCSS,
    wrapperGradientBg
  } = attributes;
  const objAttrs = {
    attributes,
    setAttributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_11__["default"]
  };
  const {
    editPost
  } = useDispatch('core/editor');

  const applyCustomCSS = css => {
    const styleElement = document.getElementById('custom-css-block-styles');

    if (styleElement) {
      styleElement.innerHTML = css;
    } else {
      const newStyleElement = document.createElement('style');
      newStyleElement.id = 'custom-css-block-styles';
      newStyleElement.innerHTML = css;
      document.head.appendChild(newStyleElement);
    }
  };

  const handleInputChange = value => {
    setAttributes({
      customCSS: value
    });
    editPost({
      meta: {
        'custom-css': value
      }
    }); // Save to post meta
  };

  useEffect(() => {
    if (customCSS) {
      applyCustomCSS(customCSS);
    }
  }, [customCSS]);
  const marginControl = [WRAPPER_MARGIN_TOP, WRAPPER_MARGIN_RIGHT, WRAPPER_MARGIN_BOTTOM, WRAPPER_MARGIN_LEFT];
  const paddingControl = [WRAPPER_PADDING_TOP, WRAPPER_PADDING_RIGHT, WRAPPER_PADDING_BOTTOM, WRAPPER_PADDING_LEFT];
  const wrapperBorderRadius = [WRAPPER_BORDER_RADIUS_TOP, WRAPPER_BORDER_RADIUS_RIGHT, WRAPPER_BORDER_RADIUS_BOTTOM, WRAPPER_BORDER_RADIUS_LEFT]; // Define a function to check if rightText is empty

  const isRightTextEmpty = () => {
    return !rightText || rightText.trim() === '';
  };

  const isLeftTextEmpty = () => {
    return !leftText || leftText.trim() === '';
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanelControl, {
    tabs: [{
      name: 'bwddhb_team_normal',
      title: 'Content',
      className: 'bwd-tab bwd-general',
      icon: 'edit',
      components: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'duo-head-block'),
        initialOpen: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Style', 'duo-head-block'),
        value: style,
        options: _options_selected_style__WEBPACK_IMPORTED_MODULE_9__["default"],
        onChange: size => setAttributes({
          style: size
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left Text', 'duo-head-block'),
        value: leftText,
        onChange: value => setAttributes({
          leftText: value
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right Text', 'duo-head-block'),
        value: rightText,
        onChange: value => setAttributes({
          rightText: value
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Link', 'duo-head-block'),
        checked: enaLink,
        onChange: Nvalue => setAttributes({
          enaLink: Nvalue
        })
      }), enaLink && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'duo-head-block'),
        value: textUrl,
        onChange: value => setAttributes({
          textUrl: value
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open in New Tab', 'duo-head-block'),
        checked: newTab,
        onChange: Nvalue => setAttributes({
          newTab: Nvalue
        })
      }))))
    }, {
      name: 'bwddhb_team_hover',
      title: 'Style',
      className: 'bwd-tab bwd-style',
      icon: 'editor-code',
      components: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, !isLeftTextEmpty() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left Heading', 'duo-head-block'),
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'duo-head-block'),
        color: leftColor,
        colorName: "leftColor",
        onChange: setAttributes
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Color', 'duo-head-block'),
        color: leftHoverColor,
        colorName: "leftHoverColor",
        onChange: setAttributes
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResRangleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'duo-head-block'),
        controlName: LEFT_FONT_SIZE,
        objAttrs: objAttrs,
        noUnits: false,
        min: 1,
        max: 100
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyTypographyControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'duo-head-block'),
        typography: typography,
        onChange: newTypography => {
          setAttributes({
            typography: newTypography
          });
        },
        attribute: attributes,
        setAttributes: setAttributes
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Alignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alignment', 'bdt-review-blocks'),
        attribute: leftAlign,
        attributeName: "leftAlign",
        setAttributes: setAttributes,
        options: _options_align__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResRangleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gap Between', 'duo-head-block'),
        controlName: GAP_MARGIN_LR,
        objAttrs: objAttrs,
        noUnits: false,
        min: 1,
        max: 100
      })), !isRightTextEmpty() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right Heading', 'duo-head-block'),
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'duo-head-block'),
        color: rightColor,
        colorName: "rightColor",
        onChange: setAttributes
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Color', 'duo-head-block'),
        color: rightHoverColor,
        colorName: "rightHoverColor",
        onChange: setAttributes
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResRangleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'duo-head-block'),
        controlName: RIGHT_FONT_SIZE,
        objAttrs: objAttrs,
        noUnits: false,
        min: 1,
        max: 100
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyTypographyControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'duo-head-block'),
        typography: typography,
        onChange: newTypography => {
          setAttributes({
            typography: newTypography
          });
        },
        attribute: attributes,
        setAttributes: setAttributes
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Alignment, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alignment', 'bdt-review-blocks'),
        attribute: rightAlign,
        attributeName: "rightAlign",
        setAttributes: setAttributes,
        options: _options_align__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResRangleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gap Between', 'duo-head-block'),
        controlName: GAP_MARGIN_LR,
        objAttrs: objAttrs,
        noUnits: false,
        min: 1,
        max: 100
      })))
    }, {
      name: 'bwddhb_team_advanced',
      title: 'Advanced',
      className: 'bwd-tab bwd-style',
      icon: 'admin-generic',
      components: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wrapper Margin & Padding', 'duo-head-block'),
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResDimensionControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'duo-head-block'),
        controlName: marginControl,
        objAttrs: objAttrs,
        noUnits: false,
        min: 0,
        max: 1000
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResDimensionControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'duo-head-block'),
        controlName: paddingControl,
        objAttrs: objAttrs,
        noUnits: false,
        min: 0,
        max: 1000
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'duo-head-block'),
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanelControl, {
        tabs: [{
          name: 'bwddhb_team_normal',
          title: 'Solid',
          className: 'bwd-tab bwd-general',
          components: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BackgroundControl, {
            attributes: attributes,
            setAttributes: setAttributes
          })
        }, {
          name: 'bwddhb_team_hover',
          title: 'Gradient',
          className: 'bwd-tab bwd-style',
          components: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker, {
            value: wrapperGradientBg,
            onChange: currentGradient => setAttributes({
              wrapperGradientBg: currentGradient
            }),
            gradients: [{
              name: 'JShine',
              gradient: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
              slug: 'jshine'
            }, {
              name: 'Moonlit Asteroid',
              gradient: 'linear-gradient(to right, #134e5e, #71b280)',
              slug: 'moonlit-asteroid'
            }, {
              name: 'Rastafarie',
              gradient: 'linear-gradient(to right, #673ab7, #512da8)',
              slug: 'rastafari'
            }, {
              name: 'Rastafarie',
              gradient: 'linear-gradient(45deg, #04dac4 0%, #dff0a2 100%)',
              slug: 'rastafari'
            }, {
              name: 'Rastafarie',
              gradient: 'linear-gradient(45deg, #f97ef9 0%, #8127ce 100%)',
              slug: 'rastafari'
            }, {
              name: 'Rastafarie',
              gradient: 'linear-gradient(45deg, #a288a6 0%, #db0963 100%)',
              slug: 'rastafari'
            }]
          })
        }]
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border & Shadow', 'duo-head-block'),
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomBorderControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'duo-head-block'),
        values: wrapperBorder,
        onChange: newSettings => setAttributes({
          wrapperBorder: newSettings
        }),
        setAttributes: setAttributes
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BoxShadowControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Shadow', 'duo-head-block'),
        values: boxShadowWrapper,
        onChange: newSettings => setAttributes({
          boxShadowWrapper: newSettings
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResDimensionControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'duo-head-block'),
        controlName: wrapperBorderRadius,
        objAttrs: objAttrs,
        noUnits: false,
        min: 0,
        max: 1000
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Z-Index', 'duo-head-block'),
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        value: zIndex,
        onChange: value => setAttributes({
          zIndex: value
        }),
        initialPosition: 1,
        min: -100,
        max: 1000000000,
        allowReset: true
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Control', 'duo-head-block'),
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide On Desktop', 'duo-head-block'),
        checked: hideOnDesktop,
        onChange: () => setAttributes({
          hideOnDesktop: !hideOnDesktop
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide On Tablet', 'duo-head-block'),
        checked: hideOnTablet,
        onChange: () => setAttributes({
          hideOnTablet: !hideOnTablet
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide On Mobile', 'duo-head-block'),
        checked: hideOnMobile,
        onChange: () => setAttributes({
          hideOnMobile: !hideOnMobile
        })
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom CSS', 'duo-head-block'),
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
        value: customCSS,
        onChange: handleInputChange,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('.bwddhb-team-name { font-size: 15px; }', 'duo-head-block')
      })))
    }]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/duo-head/save.js":
/*!*************************************!*\
  !*** ./src/blocks/duo-head/save.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _options_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options/icons */ "./src/options/icons.js");
/* harmony import */ var _includes_assets_img_bwd_placeholder_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../includes/assets/img/bwd-placeholder.jpg */ "./includes/assets/img/bwd-placeholder.jpg");


/**
 * WordPress dependencies
 */



function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    style,
    containerWidth,
    textUrl,
    enaLink,
    newTab,
    leftText,
    rightText
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `bwddh-heading bwddh-dual-hedi-${style} ${uniqueId} ${containerWidth}`
  }), enaLink ? //  target={newTab ? '_blank' : ''}
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: textUrl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: `bwddh-first-hedi bwddh-heddi-${style}`,
    value: leftText
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: `bwddh-sec-hedi bwddh-cor-hedi-${style}`,
    value: rightText
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: `bwddh-first-hedi bwddh-heddi-${style}`,
    value: leftText
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    className: `bwddh-sec-hedi bwddh-cor-hedi-${style}`,
    value: rightText
  })));
}

/***/ }),

/***/ "./src/controls/alignment/index.js":
/*!*****************************************!*\
  !*** ./src/controls/alignment/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/controls/alignment/style.scss");



const Alignment = _ref => {
  let {
    label,
    attribute,
    attributeName,
    setAttributes,
    options
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-Alignment"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bwddhb-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-alignment-icon-wrapper"
  }, options && options.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `bwddhb-single-icon ${attribute === option.value ? 'active' : ''}`,
      onClick: () => setAttributes({
        [attributeName]: option.value
      }),
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `dashicons dashicons-editor-${option.icon}`
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Alignment);

/***/ }),

/***/ "./src/controls/background/index.js":
/*!******************************************!*\
  !*** ./src/controls/background/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _includes_assets_img_bwd_placeholder_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../includes/assets/img/bwd-placeholder.jpg */ "./includes/assets/img/bwd-placeholder.jpg");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/controls/background/index.scss");









const BackgroundControl = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    mainWrapperBgColor,
    imageUrl,
    bgPosition,
    bgAttachment,
    bgRepeat,
    bgSize
  } = attributes;

  const onSelectMedia = media => {
    setAttributes({
      imageUrl: media.url
    });
  };

  const onRemoveMedia = () => {
    setAttributes({
      imageUrl: ''
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'duo-head-block'),
    color: mainWrapperBgColor,
    colorName: "mainWrapperBgColor",
    onChange: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bwddhb-bgImg-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'duo-head-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    onSelect: onSelectMedia,
    allowedTypes: ['image'],
    value: imageUrl,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "bwddhb-wrapperbg"
      }, imageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        className: "bwddhb-wrapimg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: imageUrl,
        alt: "Selected Media"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "remove-media",
        onClick: onRemoveMedia
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "dashicons dashicons-trash"
      }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        className: "bwddhb-bgwrap-placeholder"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _includes_assets_img_bwd_placeholder_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "Placeholder",
        className: "placeholder-image"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'duo-head-block'))));
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardDivider, null), imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'duo-head-block'),
    value: bgPosition,
    options: [{
      value: '',
      label: 'Default'
    }, {
      value: 'center center',
      label: 'Center Center'
    }, {
      value: 'center left',
      label: 'Center Left'
    }, {
      value: 'center right',
      label: 'Center Right'
    }, {
      value: 'top center',
      label: 'Top Center'
    }, {
      value: 'top left',
      label: 'Top Left'
    }, {
      value: 'top right',
      label: 'Top Right'
    }, {
      value: 'bottom center',
      label: 'Bottom Center'
    }, {
      value: 'bottom left',
      label: 'Bottom Left'
    }, {
      value: 'bottom right',
      label: 'Bottom Right'
    }, {
      value: 'custom',
      label: 'Custom'
    }],
    onChange: value => setAttributes({
      bgPosition: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Attachment', 'duo-head-block'),
    value: bgAttachment,
    options: [{
      value: '',
      label: 'Default'
    }, {
      value: 'scroll',
      label: 'Scroll'
    }, {
      value: 'fixed',
      label: 'Fixed'
    }],
    onChange: value => setAttributes({
      bgAttachment: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repeat', 'duo-head-block'),
    value: bgRepeat,
    options: [{
      value: '',
      label: 'Default'
    }, {
      value: 'no-repeat',
      label: 'No-repeat'
    }, {
      value: 'repeat',
      label: 'Repeat'
    }, {
      value: 'repeat-x',
      label: 'Repeat-X'
    }, {
      value: 'repeat-y',
      label: 'Repeat-Y'
    }],
    onChange: value => setAttributes({
      bgRepeat: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size', 'duo-head-block'),
    value: bgSize,
    options: [{
      value: '',
      label: 'Default'
    }, {
      value: 'auto',
      label: 'Auto'
    }, {
      value: 'cover',
      label: 'Cover'
    }, {
      value: 'contain',
      label: 'Contain'
    }],
    onChange: value => setAttributes({
      bgSize: value
    })
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundControl);

/***/ }),

/***/ "./src/controls/border-control/index.js":
/*!**********************************************!*\
  !*** ./src/controls/border-control/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/border-control/style.scss");





const CustomBorderControl = _ref => {
  let {
    label,
    values,
    onChange
  } = _ref;
  const {
    color,
    width,
    style
  } = values;

  const updateBorderProperty = (key, value) => {
    onChange({ ...values,
      [key]: value
    });
  };

  const resetColor = () => {
    onChange({ ...values,
      color: '#000000'
    });
  };

  const borderStyleOptions = [{
    label: 'None',
    value: 'none'
  }, {
    label: 'Solid',
    value: 'solid'
  }, {
    label: 'Dotted',
    value: 'dotted'
  }, {
    label: 'Dashed',
    value: 'dashed'
  }, {
    label: 'Double',
    value: 'double'
  }, {
    label: 'Groove',
    value: 'groove'
  }, {
    label: 'Ridge',
    value: 'ridge'
  }, {
    label: 'Inset',
    value: 'inset'
  }, {
    label: 'Outset',
    value: 'outset'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-border-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bwddhb-border-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: style,
    options: borderStyleOptions,
    onChange: newValue => updateBorderProperty('style', newValue)
  }), style !== 'none' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-colorPiker-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'duo-head-block'),
    color: color,
    onChange: newColor => updateBorderProperty('color', newColor),
    enableAlpha: true,
    copyFormat: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "bwddhb-reset-button",
    onClick: resetColor
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset', 'duo-head-block'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Width', 'duo-head-block'),
    value: width,
    onChange: newValue => updateBorderProperty('width', newValue),
    min: 1,
    max: 100
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomBorderControl);

/***/ }),

/***/ "./src/controls/box-shadow-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/box-shadow-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/box-shadow-control/style.scss");



 // BoxShadowControls component

const BoxShadowControl = _ref => {
  let {
    label,
    values,
    onChange
  } = _ref;
  const {
    color,
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    shadowType
  } = values;

  const updateBoxShadowProperty = (key, value) => {
    onChange({ ...values,
      [key]: value !== undefined ? value : values[key]
    });
  };

  const resetColor = () => {
    onChange({ ...values,
      color: '#000000'
    });
  };

  const shadowTypeOptions = [{
    label: 'None',
    value: 'none'
  }, {
    label: 'Outset',
    value: ''
  }, {
    label: 'Inset',
    value: 'inset'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-box-shadow-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bwddhb-box-shadow"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: shadowType,
    options: shadowTypeOptions,
    onChange: newValue => updateBoxShadowProperty('shadowType', newValue)
  }), shadowType !== 'none' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-colorPiker-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'duo-head-block'),
    color: color,
    onChange: newColor => updateBoxShadowProperty('color', newColor),
    enableAlpha: true,
    copyFormat: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "reset-button",
    onClick: resetColor
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset', 'duo-head-block'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Offset X', 'duo-head-block'),
    value: offsetX,
    onChange: newValue => updateBoxShadowProperty('offsetX', newValue),
    min: -100,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Offset Y', 'duo-head-block'),
    value: offsetY,
    onChange: newValue => updateBoxShadowProperty('offsetY', newValue),
    min: -100,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blur', 'duo-head-block'),
    value: blurRadius,
    onChange: newValue => updateBoxShadowProperty('blurRadius', newValue),
    min: 0,
    max: 50
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spread', 'duo-head-block'),
    value: spreadRadius,
    onChange: newValue => updateBoxShadowProperty('spreadRadius', newValue),
    min: 0,
    max: 50
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BoxShadowControl);

/***/ }),

/***/ "./src/controls/color-control/index.js":
/*!*********************************************!*\
  !*** ./src/controls/color-control/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/color-control/style.scss");


/**
 * WordPress dependencies
 */




/**
 * Color Control
 */

const ColorControl = _ref => {
  let {
    label,
    color,
    onChange,
    colorName
  } = _ref;
  const [showColorPanel, setShowColorPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-color-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
					.bwddhb-color-control-wrapper .components-base-control__label, .bwddhb-color-control-wrapper .components-base-control__field, .bwddhb-color-control-wrapper .components-base-control {
						margin-bottom: 0 !important;
					}
				`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: {
      justifyContent: 'flex-end'
    },
    gap: 0
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    id: "color-control",
    label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'bwddhb-review-blocks')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "bwddhb-color-control",
    onClick: () => setShowColorPanel(true)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: color
  }))), showColorPanel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    position: "bottom right",
    onClose: () => setShowColorPanel(false),
    onFocusOutside: () => setShowColorPanel(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
    color: color,
    disableAlpha: false,
    onChangeComplete: value => {
      onChange({
        [colorName]: value.hex
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "bwddhb-clear-btn",
    onClick: () => onChange({
      [colorName]: ''
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'bwddhb-review-blocks')))));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./src/controls/dimension-control/index.js":
/*!*************************************************!*\
  !*** ./src/controls/dimension-control/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res-btn */ "./src/controls/res-btn/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/dimension-control/style.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);







const ResDimensionControl = _ref => {
  let {
    label,
    controlName,
    objAttrs,
    noUnits,
    units,
    min,
    max
  } = _ref;
  const {
    attributes,
    setAttributes
  } = objAttrs;
  const {
    resMode
  } = attributes;
  const [isLinked, setIsLinked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    [`${controlName[0]}DeskRange`]: deskTopRange,
    [`${controlName[1]}DeskRange`]: deskRightRange,
    [`${controlName[2]}DeskRange`]: deskBottomRange,
    [`${controlName[3]}DeskRange`]: deskLeftRange,
    [`${controlName[0]}TabRange`]: tabTopRange,
    [`${controlName[1]}TabRange`]: tabRightRange,
    [`${controlName[2]}TabRange`]: tabBottomRange,
    [`${controlName[3]}TabRange`]: tabLeftRange,
    [`${controlName[0]}MobRange`]: mobTopRange,
    [`${controlName[1]}MobRange`]: mobRightRange,
    [`${controlName[2]}MobRange`]: mobBottomRange,
    [`${controlName[3]}MobRange`]: mobLeftRange,
    [`${controlName[0]}Unit`]: topUnit
  } = attributes;
  if (!units) units = units || ['px', 'em', 'rem', '%'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-dimension-control-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bwddhb-dimension-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-res-rangle-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resMode: resMode,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-unit"
  }, !noUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "units-wrapper"
  }, units && units.map((u, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "unit-btn",
      variant: topUnit === u ? 'primary' : 'secondary',
      key: index,
      onClick: () => setAttributes({
        [`${controlName[0]}Unit`]: u,
        [`${controlName[1]}Unit`]: u,
        [`${controlName[2]}Unit`]: u,
        [`${controlName[3]}Unit`]: u
      })
    }, u);
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-dimension-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwd-res-controls"
  }, resMode === 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwd-single-rangle"
  }, isLinked ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'duo-head-block'),
    value: deskTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}DeskRange`]: value,
      [`${controlName[1]}DeskRange`]: value,
      [`${controlName[2]}DeskRange`]: value,
      [`${controlName[3]}DeskRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'duo-head-block'),
    value: deskTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}DeskRange`]: value,
      [`${controlName[1]}DeskRange`]: value,
      [`${controlName[2]}DeskRange`]: value,
      [`${controlName[3]}DeskRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'duo-head-block'),
    value: deskTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}DeskRange`]: value,
      [`${controlName[1]}DeskRange`]: value,
      [`${controlName[2]}DeskRange`]: value,
      [`${controlName[3]}DeskRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'duo-head-block'),
    value: deskTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}DeskRange`]: value,
      [`${controlName[1]}DeskRange`]: value,
      [`${controlName[2]}DeskRange`]: value,
      [`${controlName[3]}DeskRange`]: value
    }),
    min: min,
    max: max
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'duo-head-block'),
    value: deskTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}DeskRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'duo-head-block'),
    value: deskRightRange,
    onChange: value => setAttributes({
      [`${controlName[1]}DeskRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'duo-head-block'),
    value: deskBottomRange,
    onChange: value => setAttributes({
      [`${controlName[2]}DeskRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'duo-head-block'),
    value: deskLeftRange,
    onChange: value => setAttributes({
      [`${controlName[3]}DeskRange`]: value
    }),
    min: min,
    max: max
  }))), resMode === 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwd-single-rangle"
  }, isLinked ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'duo-head-block'),
    value: tabTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}TabRange`]: value,
      [`${controlName[1]}TabRange`]: value,
      [`${controlName[2]}TabRange`]: value,
      [`${controlName[3]}TabRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'duo-head-block'),
    value: tabTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}TabRange`]: value,
      [`${controlName[1]}TabRange`]: value,
      [`${controlName[2]}TabRange`]: value,
      [`${controlName[3]}TabRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'duo-head-block'),
    value: tabTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}TabRange`]: value,
      [`${controlName[1]}TabRange`]: value,
      [`${controlName[2]}TabRange`]: value,
      [`${controlName[3]}TabRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'duo-head-block'),
    value: tabTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}TabRange`]: value,
      [`${controlName[1]}TabRange`]: value,
      [`${controlName[2]}TabRange`]: value,
      [`${controlName[3]}TabRange`]: value
    }),
    min: min,
    max: max
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'duo-head-block'),
    value: tabTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}TabRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'duo-head-block'),
    value: tabRightRange,
    onChange: value => setAttributes({
      [`${controlName[1]}TabRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'duo-head-block'),
    value: tabBottomRange,
    onChange: value => setAttributes({
      [`${controlName[2]}TabRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'duo-head-block'),
    value: tabLeftRange,
    onChange: value => setAttributes({
      [`${controlName[3]}TabRange`]: value
    }),
    min: min,
    max: max
  }))), resMode === 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwd-single-rangle"
  }, isLinked ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'duo-head-block'),
    value: mobTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}MobRange`]: value,
      [`${controlName[1]}MobRange`]: value,
      [`${controlName[2]}MobRange`]: value,
      [`${controlName[3]}MobRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'duo-head-block'),
    value: mobTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}MobRange`]: value,
      [`${controlName[1]}MobRange`]: value,
      [`${controlName[2]}MobRange`]: value,
      [`${controlName[3]}MobRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'duo-head-block'),
    value: mobTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}MobRange`]: value,
      [`${controlName[1]}MobRange`]: value,
      [`${controlName[2]}MobRange`]: value,
      [`${controlName[3]}MobRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'duo-head-block'),
    value: mobTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}MobRange`]: value,
      [`${controlName[1]}MobRange`]: value,
      [`${controlName[2]}MobRange`]: value,
      [`${controlName[3]}MobRange`]: value
    }),
    min: min,
    max: max
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'duo-head-block'),
    value: mobTopRange,
    onChange: value => setAttributes({
      [`${controlName[0]}MobRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'duo-head-block'),
    value: mobRightRange,
    onChange: value => setAttributes({
      [`${controlName[1]}MobRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'duo-head-block'),
    value: mobBottomRange,
    onChange: value => setAttributes({
      [`${controlName[2]}MobRange`]: value
    }),
    min: min,
    max: max
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'duo-head-block'),
    value: mobLeftRange,
    onChange: value => setAttributes({
      [`${controlName[3]}MobRange`]: value
    }),
    min: min,
    max: max
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-dimension-link"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "unit-btn",
    variant: isLinked ? 'primary' : 'secondary',
    onClick: () => setIsLinked(!isLinked)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `dashicons ${isLinked ? 'dashicons-admin-links' : 'dashicons-editor-unlink'}`
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResDimensionControl);

/***/ }),

/***/ "./src/controls/iconpicker/index.js":
/*!******************************************!*\
  !*** ./src/controls/iconpicker/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _options_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options/icons */ "./src/options/icons.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/iconpicker/style.scss");

// Import Icon





const IconPicker = _ref => {
  let {
    label,
    selectedIcon,
    changeIcon
  } = _ref;
  const [showIcons, setShowIcons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-icon-picker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bwddhb-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-icons-picker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "bwddhb-icon-header",
    onClick: () => setShowIcons(true)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bwddhb-selected-icon"
  }, _options_icons__WEBPACK_IMPORTED_MODULE_2__["default"][selectedIcon]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bwddhb-open-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: showIcons ? 'minus' : 'plus'
  }))), showIcons && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    offset: 10,
    position: "bottom left",
    onClose: () => setShowIcons(false),
    onFocusOutside: () => setShowIcons(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-icons-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-search"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    placeholder: "Search Icon",
    value: search,
    onChange: e => setSearch(e.target.value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-list"
  }, search !== '' ? Object.keys(_options_icons__WEBPACK_IMPORTED_MODULE_2__["default"]).map((icon, index) => {
    if (icon.toLowerCase().includes(search.toLowerCase())) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: `icon ${icon === selectedIcon ? 'active-icon' : ''}`,
        key: index,
        onClick: () => {
          changeIcon(icon);
          setShowIcons(false);
        }
      }, _options_icons__WEBPACK_IMPORTED_MODULE_2__["default"][icon]);
    }
  }) : Object.keys(_options_icons__WEBPACK_IMPORTED_MODULE_2__["default"]).map((icon, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `icon ${icon === selectedIcon ? 'active-icon' : ''}`,
      key: index,
      onClick: () => {
        changeIcon(icon);
        setShowIcons(false);
      }
    }, _options_icons__WEBPACK_IMPORTED_MODULE_2__["default"][icon]);
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (IconPicker);

/***/ }),

/***/ "./src/controls/index.js":
/*!*******************************!*\
  !*** ./src/controls/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alignment: function() { return /* reexport safe */ _alignment__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   BackgroundControl: function() { return /* reexport safe */ _background__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   BoxShadowControl: function() { return /* reexport safe */ _box_shadow_control__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   ColorControl: function() { return /* reexport safe */ _color_control__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   CustomBorderControl: function() { return /* reexport safe */ _border_control__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   IconPicker: function() { return /* reexport safe */ _iconpicker__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   MyTypographyControl: function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   ResDimensionControl: function() { return /* reexport safe */ _dimension_control__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   ResRangleControl: function() { return /* reexport safe */ _res_rangle_control__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   TabPanelControl: function() { return /* reexport safe */ _tab_panel__WEBPACK_IMPORTED_MODULE_2__["default"]; }
/* harmony export */ });
/* harmony import */ var _res_rangle_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./res-rangle-control */ "./src/controls/res-rangle-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _tab_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-panel */ "./src/controls/tab-panel/index.js");
/* harmony import */ var _alignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alignment */ "./src/controls/alignment/index.js");
/* harmony import */ var _iconpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iconpicker */ "./src/controls/iconpicker/index.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typography */ "./src/controls/typography/index.js");
/* harmony import */ var _border_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./border-control */ "./src/controls/border-control/index.js");
/* harmony import */ var _box_shadow_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./box-shadow-control */ "./src/controls/box-shadow-control/index.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./background */ "./src/controls/background/index.js");
/* harmony import */ var _dimension_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dimension-control */ "./src/controls/dimension-control/index.js");











/***/ }),

/***/ "./src/controls/res-btn/index.js":
/*!***************************************!*\
  !*** ./src/controls/res-btn/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);




const ResBtn = _ref => {
  let {
    resMode,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwd-res-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Desktop' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Desktop'
      });

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Desktop');
    },
    icon: "desktop",
    title: "Desktop"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Tablet' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Tablet'
      });

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    },
    icon: "tablet",
    title: "Tablet"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Mobile' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Mobile'
      });

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    },
    icon: "smartphone",
    title: "Mobile"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ResBtn);

/***/ }),

/***/ "./src/controls/res-rangle-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/res-rangle-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res-btn */ "./src/controls/res-btn/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/res-rangle-control/style.scss");





const ResRangleControl = _ref => {
  let {
    label,
    controlName,
    objAttrs,
    noUnits,
    units,
    min,
    max
  } = _ref;
  const {
    attributes,
    setAttributes
  } = objAttrs;
  const {
    resMode
  } = attributes;
  const {
    [`${controlName}DeskRange`]: deskRange,
    [`${controlName}TabRange`]: tabRange,
    [`${controlName}MobRange`]: mobRange,
    [`${controlName}Unit`]: unit
  } = attributes;
  if (!units) units = units || ['px', 'em', 'rem'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-res-rangle-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "bwddhb-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-resicon-unit-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resMode: resMode,
    setAttributes: setAttributes
  }), !noUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "units-wrapper"
  }, units && units.map((u, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "unit-btn",
      variant: unit === u ? 'primary' : 'secondary',
      key: index,
      onClick: () => setAttributes({
        [`${controlName}Unit`]: u
      })
    }, u);
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwd-res-controls"
  }, resMode === 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwd-single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: deskRange,
    onChange: value => setAttributes({
      [`${controlName}DeskRange`]: value
    }),
    min: min,
    max: max,
    allowReset: true,
    resetFallbackValue: "",
    trackColor: "#00ced1"
  })), resMode === 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwd-single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: tabRange,
    onChange: value => setAttributes({
      [`${controlName}TabRange`]: value
    }),
    min: min,
    max: max,
    trackColor: "#00ced1"
  })), resMode === 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwd-single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: mobRange,
    onChange: value => setAttributes({
      [`${controlName}MobRange`]: value
    }),
    min: min,
    max: max,
    trackColor: "#00ced1"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResRangleControl);

/***/ }),

/***/ "./src/controls/tab-panel/index.js":
/*!*****************************************!*\
  !*** ./src/controls/tab-panel/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/controls/tab-panel/style.scss");





const TabPanelControl = _ref => {
  let {
    tabs
  } = _ref;
  const tabItems = tabs.map(tab => ({
    name: tab.name,
    title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tab.icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `dashicons dashicons-${tab.icon}`,
      style: {
        marginRight: '5px'
      }
    }), tab.title),
    className: tab.className
  }));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "bwd-tab-panel",
    activeClass: "active-tab",
    initialTabName: tabs[0].name,
    tabs: tabItems
  }, tabContent => {
    const selectedTab = tabs.find(tab => tab.name === tabContent.name);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, selectedTab && selectedTab.components);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TabPanelControl);

/***/ }),

/***/ "./src/controls/typography/index.js":
/*!******************************************!*\
  !*** ./src/controls/typography/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _options_font_family__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../options/font-family */ "./src/options/font-family.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/controls/typography/style.scss");


/* eslint-disable @wordpress/no-unsafe-wp-apis */






const MyTypographyControl = _ref => {
  let {
    label,
    typography,
    onChange
  } = _ref;
  const {
    fontFamily,
    fontWeight,
    fontStyle,
    textTransform,
    letterSpacing,
    wordSpacing,
    lineHeight
  } = typography;
  const textTransformOptions = [{
    label: 'None',
    value: 'none'
  }, {
    label: 'Uppercase',
    value: 'uppercase'
  }, {
    label: 'Lowercase',
    value: 'lowercase'
  }, {
    label: 'Capitalize',
    value: 'capitalize'
  }];
  const fontWeightOptions = [{
    label: 'None',
    value: 'normal'
  }, {
    label: '100 – Thin',
    value: '100'
  }, {
    label: '200 – Extra Light',
    value: '200'
  }, {
    label: '300 – Light',
    value: '300'
  }, {
    label: '400 – Normal',
    value: '400'
  }, {
    label: '500 – Medium',
    value: '500'
  }, {
    label: '600 – Semi Bold',
    value: '600'
  }, {
    label: '700 – Bold',
    value: '700'
  }, {
    label: '800 – Extra Bold',
    value: '800'
  }, {
    label: '900 – Black',
    value: '900'
  }];
  const fontStyleOptions = [{
    label: 'Initial',
    value: 'initial'
  }, {
    label: 'Normal',
    value: 'normal'
  }, {
    label: 'Italic',
    value: 'italic'
  }];
  const [showTypography, setShowTypography] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bwddhb-typography-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "typography-control"
  }, label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'duo-head-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "bwddhb-typography-edit",
    onClick: () => setShowTypography(true)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "edit"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalElevation, {
    active: 1,
    focus: 3,
    hover: 3,
    value: 3
  })), showTypography && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "bottom right",
    onClose: () => setShowTypography(false),
    onFocusOutside: () => setShowTypography(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Family', 'duo-head-block'),
    value: fontFamily,
    options: _options_font_family__WEBPACK_IMPORTED_MODULE_3__["default"],
    onChange: value => onChange({ ...typography,
      fontFamily: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Weight', 'duo-head-block'),
    value: fontWeight,
    options: fontWeightOptions,
    onChange: value => onChange({ ...typography,
      fontWeight: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Style', 'duo-head-block'),
    value: fontStyle,
    options: fontStyleOptions,
    onChange: value => onChange({ ...typography,
      fontStyle: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Transform', 'duo-head-block'),
    value: textTransform,
    options: textTransformOptions,
    onChange: value => onChange({ ...typography,
      textTransform: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line Height', 'duo-head-block'),
    value: lineHeight,
    onChange: value => onChange({ ...typography,
      lineHeight: value
    }),
    min: 0,
    max: 50,
    step: 0.1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Letter Spacing (px)', 'duo-head-block'),
    value: letterSpacing,
    onChange: value => onChange({ ...typography,
      letterSpacing: value
    }),
    min: -1,
    max: 50
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Word Spacing (px)', 'duo-head-block'),
    value: wordSpacing,
    onChange: value => onChange({ ...typography,
      wordSpacing: value
    }),
    min: -1,
    max: 50
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyTypographyControl);

/***/ }),

/***/ "./src/generators/index.js":
/*!*********************************!*\
  !*** ./src/generators/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateResPaddingControlAttributes: function() { return /* binding */ generateResPaddingControlAttributes; },
/* harmony export */   generateResRangleControlAttributes: function() { return /* binding */ generateResRangleControlAttributes; }
/* harmony export */ });
const generateResRangleControlAttributes = _ref => {
  let {
    controlName,
    defaults = {}
  } = _ref;
  const {
    [`${controlName}DeskRange`]: deskRange,
    [`${controlName}TabRange`]: tabRange,
    [`${controlName}MobRange`]: mobRange,
    [`${controlName}Unit`]: unit = 'px'
  } = defaults;
  return {
    [`${controlName}DeskRange`]: {
      type: 'number',
      default: deskRange
    },
    [`${controlName}TabRange`]: {
      type: 'number',
      default: tabRange
    },
    [`${controlName}MobRange`]: {
      type: 'number',
      default: mobRange
    },
    [`${controlName}Unit`]: {
      type: 'string',
      default: unit
    }
  };
};
const generateResPaddingControlAttributes = _ref2 => {
  let {
    controlName,
    defaults = {}
  } = _ref2;
  const {
    [`${controlName}DeskRange`]: deskRange,
    [`${controlName}TabRange`]: tabRange,
    [`${controlName}MobRange`]: mobRange,
    [`${controlName}Unit`]: unit = 'px'
  } = defaults;
  return {
    [`${controlName}DeskRange`]: {
      type: 'number',
      default: deskRange
    },
    [`${controlName}TabRange`]: {
      type: 'number',
      default: tabRange
    },
    [`${controlName}MobRange`]: {
      type: 'number',
      default: mobRange
    },
    [`${controlName}Unit`]: {
      type: 'string',
      default: unit
    }
  };
};

/***/ }),

/***/ "./src/helper/softminify.js":
/*!**********************************!*\
  !*** ./src/helper/softminify.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   softMinifyCssStrings: function() { return /* binding */ softMinifyCssStrings; }
/* harmony export */ });
// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
const softMinifyCssStrings = function () {
  let cssString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  return cssString.replace(/\s+/g, ' ').replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, '');
};

/***/ }),

/***/ "./src/options/align.js":
/*!******************************!*\
  !*** ./src/options/align.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const aligns = [{
  icon: 'alignleft',
  value: 'start'
}, {
  icon: 'aligncenter',
  value: 'center'
}, {
  icon: 'alignright',
  value: 'end'
}];
/* harmony default export */ __webpack_exports__["default"] = (aligns);

/***/ }),

/***/ "./src/options/font-family.js":
/*!************************************!*\
  !*** ./src/options/font-family.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const fontOptions = [{
  value: 'Arial, sans-serif',
  label: 'Arial'
}, {
  value: 'Helvetica, sans-serif',
  label: 'Helvetica'
}, {
  value: 'Times New Roman, serif',
  label: 'Times New Roman'
}, {
  value: 'Georgia, serif',
  label: 'Georgia'
}, {
  value: 'Open Sans, sans-serif',
  label: 'Open Sans'
}, {
  value: 'Roboto, sans-serif',
  label: 'Roboto'
}, {
  value: 'Roboto Serif, serif',
  label: 'Roboto Serif'
}, {
  value: 'Roboto Condensed, sans-serif',
  label: 'Roboto Condensed'
}, {
  value: 'Roboto Mono, monospace',
  label: 'Roboto Mono'
}, {
  value: 'Lato, sans-serif',
  label: 'Lato'
}, {
  value: 'Montserrat, sans-serif',
  label: 'Montserrat'
}, {
  value: 'Montserrat Alternates, sans-serif',
  label: 'Montserrat Alternates'
}, {
  value: 'Raleway, sans-serif',
  label: 'Raleway'
}, {
  value: 'Poppins, sans-serif',
  label: 'Poppins'
}, {
  value: 'Roboto Slab, serif',
  label: 'Roboto Slab'
}, {
  value: 'Playfair Display, serif',
  label: 'Playfair Display'
}, {
  value: 'Playfair, serif',
  label: 'Playfair'
}, {
  value: 'Nunito Sans, sans-serif',
  label: 'Nunito Sans'
}, {
  value: 'Noto Sans, sans-serif',
  label: 'Noto Sans'
}, {
  value: 'Oswald, sans-serif',
  label: 'Oswald'
}, {
  value: 'Ubuntu, sans-serif',
  label: 'Ubuntu'
}, {
  value: 'Nunito, sans-serif',
  label: 'Nunito'
}, {
  value: 'Rubik, sans-serif',
  label: 'Rubik'
}, {
  value: 'Merriweather, serif',
  label: 'Merriweather'
}, {
  value: 'PT Sans, sans-serif',
  label: 'PT Sans'
}, {
  value: 'Kanit, sans-serif',
  label: 'Kanit'
}, {
  value: 'Mukta, sans-serif',
  label: 'Mukta'
}, {
  value: 'Lora, serif',
  label: 'Lora'
}, {
  value: 'Marcellus, serif',
  label: 'Marcellus'
}, {
  value: 'Marcellus SC, serif',
  label: 'Marcellus SC'
}, {
  value: 'Work Sans, sans-serif',
  label: 'Work Sans'
}, {
  value: 'Quicksand, sans-serif',
  label: 'Quicksand'
}, {
  value: 'Barlow, sans-serif',
  label: 'Barlow'
}, {
  value: 'Barlow Semi Condensed, sans-serif',
  label: 'Barlow Semi Condensed'
}, {
  value: 'Heebo, sans-serif',
  label: 'Heebo'
}, {
  value: 'DM Sans, sans-serif',
  label: 'DM Sans'
}, {
  value: 'Mulish, sans-serif',
  label: 'Mulish'
}, {
  value: 'IBM Plex Sans, sans-serif',
  label: 'IBM Plex Sans'
}, {
  value: 'PT Serif, serif',
  label: 'PT Serif'
}, {
  value: 'Titillium Web, sans-serif',
  label: 'Titillium Web'
}, {
  value: 'Libre Franklin, sans-serif',
  label: 'Libre Franklin'
}, {
  value: 'Inter, sans-serif',
  label: 'Inter'
}, {
  value: 'Manrope, sans-serif',
  label: 'Manrope'
}, {
  value: 'Inconsolata, monospace',
  label: 'Inconsolata'
}, {
  value: 'Nanum Gothic, sans-serif',
  label: 'Nanum Gothic'
}, {
  value: 'Josefin Sans, sans-serif',
  label: 'Josefin Sans'
}, {
  value: 'Karla, sans-serif',
  label: 'Karla'
}, {
  value: 'Dosis, sans-serif',
  label: 'Dosis'
}, {
  value: 'PT Sans Narrow, sans-serif',
  label: 'PT Sans Narrow'
}, {
  value: 'Space Grotesk, sans-serif',
  label: 'Space Grotesk'
}, {
  value: 'Oxygen, sans-serif',
  label: 'Oxygen'
}, {
  value: 'Bebas Neue, sans-serif',
  label: 'Bebas Neue'
}, {
  value: 'Abel, sans-serif',
  label: 'Abel'
}, {
  value: 'Assistant, sans-serif',
  label: 'Assistant'
}, {
  value: 'Cabin, sans-serif',
  label: 'Cabin'
}, {
  value: 'Bitter, serif',
  label: 'Bitter'
}, {
  value: 'Anton, sans-serif',
  label: 'Anton'
}, {
  value: 'EB Garamond, serif',
  label: 'EB Garamond'
}, {
  value: 'Barlow Condensed, sans-serif',
  label: 'Barlow Condensed'
}, {
  value: 'Jost, sans-serif',
  label: 'Jost'
}, {
  value: 'Hind, sans-serif',
  label: 'Hind'
}, {
  value: 'Source Code Pro, monospace',
  label: 'Source Code Pro'
}, {
  value: 'Maven Pro, sans-serif',
  label: 'Maven Pro'
}, {
  value: 'Prompt, sans-serif',
  label: 'Prompt'
}, {
  value: 'Martel Sans, sans-serif',
  label: 'Martel Sans'
}, {
  value: 'Crimson Text, serif',
  label: 'Crimson Text'
}, {
  value: 'Signika Negative, sans-serif',
  label: 'Signika Negative'
}, {
  value: 'Fjalla One, sans-serif',
  label: 'Fjalla One'
}, {
  value: 'Outfit, sans-serif',
  label: 'Outfit'
}, {
  value: 'Rajdhani, sans-serif',
  label: 'Rajdhani'
}, {
  value: 'Catamaran, sans-serif',
  label: 'Catamaran'
}, {
  value: 'Comfortaa, cursive',
  label: 'Comfortaa'
}, {
  value: 'Poiret One, cursive',
  label: 'Poiret One'
}, {
  value: 'Exo, sans-serif',
  label: 'Exo'
}, {
  value: 'Exo 2, sans-serif',
  label: 'Exo 2'
}, {
  value: 'Signika, sans-serif',
  label: 'Signika'
}, {
  value: 'Signika Negative, sans-serif',
  label: 'Signika Negative'
}, {
  value: 'Patua One, cursive',
  label: 'Patua One'
}, {
  value: 'Hammersmith One, sans-serif',
  label: 'Hammersmith One'
}, {
  value: 'Alegreya Sans, sans-serif',
  label: 'Alegreya Sans'
}, {
  value: 'Alegreya Sans SC, sans-serif',
  label: 'Alegreya Sans Sc'
}, {
  value: 'Pacifico, cursive',
  label: 'Pacifico'
}, {
  value: 'Orbitron, sans-serif',
  label: 'Orbitron'
}, {
  value: 'Zilla Slab, serif',
  label: 'Zilla Slab'
}, {
  value: 'Great Vibes, cursive',
  label: 'Great Vibes'
}, {
  value: 'Comic Neue, cursive',
  label: 'Comic Neue'
}, {
  value: 'Bree Serif, serif',
  label: 'Bree Serif'
}, {
  value: 'Domine, serif',
  label: 'Domine'
}, {
  value: 'Cardo, serif',
  label: 'Cardo'
}, {
  value: 'Notable, sans-serif',
  label: 'Notable'
}, {
  value: 'Varela Round, sans-serif',
  label: 'Varela Round'
}, {
  value: 'Cutive Mono, monospace',
  label: 'Cutive Mono'
}, {
  value: 'Darker Grotesque, sans-serif',
  label: 'Darker Grotesque'
}, {
  value: 'Overpass, sans-serif',
  label: 'Overpass'
}, {
  value: 'Overpass Mono, monospace',
  label: 'Overpass Mono'
}, {
  value: 'Istok Web, sans-serif',
  label: 'Istok Web'
}, {
  value: 'Asap, sans-serif',
  label: 'Asap'
}, {
  value: 'Asap, sans-serif',
  label: 'Asap'
}, {
  value: 'Fira Sans, sans-serif',
  label: 'Fira Sans'
}, {
  value: 'Fira Sans Condensed, sans-serif',
  label: 'Fira Sans Condensed'
}, {
  value: 'Fira Sans Extra Condensed, sans-serif',
  label: 'Fira Sans Extra Condensed'
}, {
  value: 'Archivo, sans-serif',
  label: 'Archivo'
}, {
  value: 'Public Sans, sans-serif',
  label: 'Public Sans'
}, {
  value: 'REM, sans-serif',
  label: 'REM'
}, {
  value: 'Urbanist, sans-serif',
  label: 'Urbanist'
}, {
  value: 'Chivo, sans-serif',
  label: 'Chivo'
}, {
  value: 'Noto Sans Display, sans-serif',
  label: 'Noto Sans Display'
}, {
  value: 'Noto Sans Adlam, sans-serif',
  label: 'Noto Sans Adlam'
}, {
  value: 'Noto Sans Armenian, sans-serif',
  label: 'Noto Sans Armenian'
}, {
  value: 'Noto Sans Avestan, sans-serif',
  label: 'Noto Sans Avestan'
}, {
  value: 'Noto Sans Balinese, sans-serif',
  label: 'Noto Sans Balinese'
}, {
  value: 'Noto Sans Bamum, sans-serif',
  label: 'Noto Sans Bamum'
}, {
  value: 'Noto Sans Bassa Vah, sans-serif',
  label: 'Noto Sans Bassa Vah'
}, {
  value: 'Noto Sans Batak, sans-serif',
  label: 'Noto Sans Batak'
}, {
  value: 'Noto Sans Bengali, sans-serif',
  label: 'Noto Sans Bengali'
}, {
  value: 'Noto Sans Brahmi, sans-serif',
  label: 'Noto Sans Brahmi'
}, {
  value: 'Noto Sans Buginese, sans-serif',
  label: 'Noto Sans Buginese'
}, {
  value: 'Noto Sans Buhid, sans-serif',
  label: 'Noto Sans Buhid'
}, {
  value: 'Noto Sans Carian, sans-serif',
  label: 'Noto Sans Carian'
}, {
  value: 'Noto Sans Cham, sans-serif',
  label: 'Noto Sans Cham'
}, {
  value: 'Noto Sans Cherokee, sans-serif',
  label: 'Noto Sans Cherokee'
}, {
  value: 'Noto Sans Coptic, sans-serif',
  label: 'Noto Sans Coptic'
}, {
  value: 'Noto Sans Chorasmian, sans-serif',
  label: 'Noto Sans Chorasmian'
}, {
  value: 'Noto Sans Canadian Aboriginal, sans-serif',
  label: 'Noto Sans Canadian Aboriginal'
}, {
  value: 'Noto Sans Anatolian Hieroglyphs, sans-serif',
  label: 'Noto Sans Anatolian Hieroglyphs'
}, {
  value: 'Noto Sans Adlam Unjoined, sans-serif',
  label: 'Noto Sans Adlam Unjoined'
}, {
  value: 'Ysabeau Infant, sans-serif',
  label: 'Ysabeau Infant'
}, {
  value: 'Ysabeau Office, sans-serif',
  label: 'Ysabeau Office'
}, {
  value: 'Be Vietnam Pro, sans-serif',
  label: 'Be Vietnam Pro'
}, {
  value: 'Saira, sans-serif',
  label: 'Saira'
}, {
  value: 'Orienta, sans-serif',
  label: 'Orienta'
}, {
  value: 'Rokkitt, serif',
  label: 'Rokkitt'
}, {
  value: 'Advent Pro, sans-serif',
  label: 'Advent Pro'
}, {
  value: 'Inter Tight, sans-serif',
  label: 'Inter Tight'
}, {
  value: 'Aleo, serif',
  label: 'Aleo'
}, {
  value: 'Petrona, serif',
  label: 'Petrona'
}, {
  value: 'Epilogue, sans-serif',
  label: 'Epilogue'
}, {
  value: 'Taviraj, serif',
  label: 'Taviraj'
}, {
  value: 'Albert Sans, sans-serif',
  label: 'Albert Sans'
}, {
  value: 'Fraunces, serif',
  label: 'Fraunces'
}, {
  value: 'Trirong, serif',
  label: 'Trirong'
}, {
  value: 'Noto Serif Display, serif',
  label: 'Noto Serif Display'
}, {
  value: 'Pathway Extreme, sans-serif',
  label: 'Pathway Extreme'
}, {
  value: 'Hanken Grotesk, sans-serif',
  label: 'Hanken Grotesk'
}, {
  value: 'Georama, sans-serif',
  label: 'Georama'
}, {
  value: 'Sofia Sans, sans-serif',
  label: 'Sofia Sans'
}, {
  value: 'Sofia Sans Condensed, sans-serif',
  label: 'Sofia Sans Condensed'
}, {
  value: 'Sofia Sans Extra Condensed, sans-serif',
  label: 'Sofia Sans Extra Condensed'
}, {
  value: 'Tomorrow, sans-serif',
  label: 'Tomorrow'
}, {
  value: 'Chivo Mono, monospace',
  label: 'Chivo Mono'
}, {
  value: 'Azeret Mono, monospace',
  label: 'Azeret Mono'
}, {
  value: 'Gantari, sans-serif',
  label: 'Gantari'
}, {
  value: 'Labrada, serif',
  label: 'Labrada'
}, {
  value: 'Piazzolla, serif',
  label: 'Piazzolla'
}, {
  value: 'Anybody, cursive',
  label: 'Anybody'
}, {
  value: 'Texturina, serif',
  label: 'Texturina'
}, {
  value: 'Grenze, serif',
  label: 'Grenze'
}, {
  value: 'Niramit, sans-serif',
  label: 'Niramit'
}, {
  value: 'Bai Jamjuree, sans-serif',
  label: 'Bai Jamjuree'
}, {
  value: 'Krub, sans-serif',
  label: 'Krub'
}, {
  value: 'Newsreader, serif',
  label: 'Newsreader'
}, {
  value: 'JetBrains Mono, monospace',
  label: 'JetBrains Mono'
}, {
  value: 'Yrsa, serif',
  label: 'Yrsa'
}, {
  value: 'K2D, sans-serif',
  label: 'K2D'
}, {
  value: 'Livvic, sans-serif',
  label: 'Livvic'
}, {
  value: 'Pathway Extreme, sans-serif',
  label: 'Pathway Extreme'
}, {
  value: 'Mali, cursive',
  label: 'Mali'
}, {
  value: 'Wix Madefor Text, sans-serif',
  label: 'Wix Madefor Text'
}, {
  value: 'Cormorant Infant, serif',
  label: 'Cormorant Infant'
}, {
  value: 'Proza Libre, sans-serif',
  label: 'Proza Libre'
}, {
  value: 'Rasa, serif',
  label: 'Rasa'
}, {
  value: 'Bellefair, serif',
  label: 'Bellefair'
}, {
  value: 'Vollkorn, serif',
  label: 'Vollkorn'
}, {
  value: 'Cardo, serif',
  label: 'Cardo'
}, {
  value: 'Caladea, serif',
  label: 'Caladea'
}, {
  value: 'Mirza, serif',
  label: 'Mirza'
}, {
  value: 'Castoro, serif',
  label: 'Castoro'
}, {
  value: 'Caudex, serif',
  label: 'Caudex'
}, {
  value: 'Charis SIL, serif',
  label: 'Charis SIL'
}, {
  value: 'Cantata One, serif',
  label: 'Cantata One'
}, {
  value: 'Rosario, sans-serif',
  label: 'Rosario'
}, {
  value: 'Fahkwang, sans-serif',
  label: 'Fahkwang'
}, {
  value: 'KoHo, sans-serif',
  label: 'KoHo'
}, {
  value: 'Schibsted Grotesk, sans-serif',
  label: 'Schibsted Grotesk'
}, {
  value: 'Radio Canada, sans-serif',
  label: 'Radio Canada'
}, {
  value: 'Kulim Park, sans-serif',
  label: 'Kulim Park'
}, {
  value: 'Kantumruy Pro, sans-serif',
  label: 'Kantumruy Pro'
}, {
  value: 'Kumbh Sans, sans-serif',
  label: 'Kumbh Sans'
}, {
  value: 'Mitr, sans-serif',
  label: 'Mitr'
}, {
  value: 'Molengo, sans-serif',
  label: 'Molengo'
}, {
  value: 'Monda, sans-serif',
  label: 'Monda'
}, {
  value: 'Moulpali, sans-serif',
  label: 'Moulpali'
}, {
  value: 'Mukta Malar, sans-serif',
  label: 'Mukta Malar'
}, {
  value: 'Mukta Vaani, sans-serif',
  label: 'Mukta Vaani'
}, {
  value: 'Murecho, sans-serif',
  label: 'Murecho'
}, {
  value: 'League Spartan, sans-serif',
  label: 'League Spartan'
}, {
  value: 'Lekton, sans-serif',
  label: 'Lekton'
}, {
  value: 'Lexend, sans-serif',
  label: 'Lexend'
}, {
  value: 'Lexend Deca, sans-serif',
  label: 'Lexend Deca'
}, {
  value: 'Lexend Zetta, sans-serif',
  label: 'Lexend Zetta'
}, {
  value: 'Lexend Giga, sans-serif',
  label: 'Lexend Giga'
}, {
  value: 'Lexend Mega, sans-serif',
  label: 'Lexend Mega'
}, {
  value: 'Lexend Peta, sans-serif',
  label: 'Lexend Peta'
}, {
  value: 'Lexend Exa, sans-serif',
  label: 'Lexend Exa'
}, {
  value: 'Lexend Tera, sans-serif',
  label: 'Lexend Tera'
}, {
  value: 'Mohave, sans-serif',
  label: 'Mohave'
}, {
  value: 'Roboto Flex, sans-serif',
  label: 'Roboto'
}, {
  value: 'Source Sans 3, sans-serif',
  label: 'Source Sans 3'
}, {
  value: 'Figtree, sans-serif',
  label: 'Figtree'
}, {
  value: 'Plus Jakarta Sans, sans-serif',
  label: 'Plus Jakarta Sans'
}, {
  value: 'Sarabun, sans-serif',
  label: 'Sarabun'
}, {
  value: 'Belanosima, sans-serif',
  label: 'Belanosima'
}, {
  value: 'Belleza, sans-serif',
  label: 'Belleza'
}, {
  value: 'Biryani, sans-serif',
  label: 'Biryani'
}, {
  value: 'Cambay, sans-serif',
  label: 'Cambay'
}, {
  value: 'Candal, sans-serif',
  label: 'Candal'
}, {
  value: 'Cantarell, sans-serif',
  label: 'Cantarell'
}, {
  value: 'Cantora One, sans-serif',
  label: 'Cantora One'
}, {
  value: 'Capriola, sans-serif',
  label: 'Capriola'
}, {
  value: 'Carlito, sans-serif',
  label: 'Carlito'
}, {
  value: 'Carme, sans-serif',
  label: 'Carme'
}, {
  value: 'Carrois Gothic, sans-serif',
  label: 'Carrois Gothic'
}, {
  value: 'Carrois Gothic SC, sans-serif',
  label: 'Carrois Gothic SC'
}, {
  value: 'Catamaran, sans-serif',
  label: 'Catamaran'
}, {
  value: 'Chakra Petch, sans-serif',
  label: 'Chakra Petch'
}, {
  value: 'Changa, sans-serif',
  label: 'Changa'
}, {
  value: 'Chathura, sans-serif',
  label: 'Chathura'
}, {
  value: 'Chau Philomene One, sans-serif',
  label: 'Chau Philomene One'
}, {
  value: 'Comme, sans-serif',
  label: 'Comme'
}, {
  value: 'Commissioner, sans-serif',
  label: 'Commissioner'
}, {
  value: 'Convergence, sans-serif',
  label: 'Convergence'
}, {
  value: 'Farro, sans-serif',
  label: 'Farro'
}, {
  value: 'Federo, sans-serif',
  label: 'Federo'
}, {
  value: 'M PLUS 1, sans-serif',
  label: 'M PLUS 1'
}, {
  value: 'M PLUS 2, sans-serif',
  label: 'M PLUS 2'
}, {
  value: 'M PLUS 1p, sans-serif',
  label: 'M PLUS 1p'
}, {
  value: 'M PLUS 1 Code, sans-serif',
  label: 'M PLUS 1 Code'
}, {
  value: 'M PLUS Rounded 1c, sans-serif',
  label: 'M PLUS Rounded 1c'
}, {
  value: 'Magra, sans-serif',
  label: 'Magra'
}, {
  value: 'Mada, sans-serif',
  label: 'Mada'
}, {
  value: 'Mako, sans-serif',
  label: 'Mako'
}, {
  value: 'Narnoor, sans-serif',
  label: 'Narnoor'
}, {
  value: 'News Cycle, sans-serif',
  label: 'News Cycle'
}, {
  value: 'Nobile, sans-serif',
  label: 'Nobile'
}, {
  value: 'Nokora, sans-serif',
  label: 'Nokora'
}, {
  value: 'Noto Music, sans-serif',
  label: 'Noto Music'
}, {
  value: 'Mallanna, sans-serif',
  label: 'Mallanna'
}, {
  value: 'Mandali, sans-serif',
  label: 'Mandali'
}, {
  value: 'Manjari, sans-serif',
  label: 'Manjari'
}, {
  value: 'Finlandica, sans-serif',
  label: 'Finlandica'
}, {
  value: 'Jaldi, sans-serif',
  label: 'Jaldi'
}, {
  value: 'Meera Inimai, sans-serif',
  label: 'Meera Inimai'
}, {
  value: 'Metrophobic, sans-serif',
  label: 'Metrophobic'
}, {
  value: 'Michroma, sans-serif',
  label: 'Michroma'
}, {
  value: 'Mingzat, sans-serif',
  label: 'Mingzat'
}, {
  value: 'Jockey One, sans-serif',
  label: 'Jockey One'
}, {
  value: 'Jura, sans-serif',
  label: 'Jura'
}, {
  value: 'Kosugi, sans-serif',
  label: 'Kosugi'
}, {
  value: 'Kosugi Maru, sans-serif',
  label: 'Kosugi Maru'
}, {
  value: 'Changa One, cursive',
  label: 'Changa One'
}, {
  value: 'Chango, cursive',
  label: 'Chango'
}, {
  value: 'Chela One, cursive',
  label: 'Chela One'
}, {
  value: 'Cherry Cream Soda, cursive',
  label: 'Cherry Cream Soda'
}, {
  value: 'Chicle, cursive',
  label: 'Chicle'
}, {
  value: 'Chonburi, cursive',
  label: 'Chonburi'
}, {
  value: 'Coda, cursive',
  label: 'Coda'
}, {
  value: 'Concert One, cursive',
  label: 'Concert One'
}, {
  value: 'Expletus Sans, cursive',
  label: 'Expletus Sans'
}, {
  value: 'Gugi, cursive',
  label: 'Gugi'
}, {
  value: 'MuseoModerno, cursive',
  label: 'MuseoModerno'
}, {
  value: 'Cousine, monospace',
  label: 'Cousine'
}, {
  value: 'Martian Mono, monospace',
  label: 'Martian Mono'
}, {
  value: 'Fira Mono, monospace',
  label: 'Fira Mono'
}, {
  value: 'Bellota Text, cursive',
  label: 'Bellota Text'
}, {
  value: 'Libre Barcode 128, cursive',
  label: 'Libre Barcode 128'
}, {
  value: 'Libre Barcode 128 Text, cursive',
  label: 'Libre Barcode 128 Text'
}, {
  value: 'Libre Barcode 39, cursive',
  label: 'Libre Barcode 39'
}, {
  value: 'Libre Barcode 39 Text, cursive',
  label: 'Libre Barcode 39 Text'
}, {
  value: 'Libre Barcode 39 Extended, cursive',
  label: 'Libre Barcode 39 Extended'
}, {
  value: 'Libre Barcode 39 Extended Text, cursive',
  label: 'Libre Barcode 39 Extended Text'
}, {
  value: 'Lilita One, cursive',
  label: 'Lilita One'
}];
/* harmony default export */ __webpack_exports__["default"] = (fontOptions);

/***/ }),

/***/ "./src/options/icons.js":
/*!******************************!*\
  !*** ./src/options/icons.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {
  'Facebook-f': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
  })),
  'Facebook-square': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
  })),
  'Facebook-circle-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.001 19.9381C16.9473 19.446 20.001 16.0796 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.0796 7.05467 19.446 11.001 19.9381V14H9.00098V12H11.001V10.3458C11.001 9.00855 11.1402 8.52362 11.4017 8.03473C11.6631 7.54584 12.0468 7.16216 12.5357 6.9007C12.9184 6.69604 13.3931 6.57252 14.2227 6.51954C14.5519 6.49851 14.9781 6.52533 15.501 6.6V8.5H15.001C14.0837 8.5 13.7052 8.54332 13.4789 8.66433C13.3386 8.73939 13.2404 8.83758 13.1653 8.97793C13.0443 9.20418 13.001 9.42853 13.001 10.3458V12H15.501L15.001 14H13.001V19.9381ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"
  })),
  'Facebook-box-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14 19H19V5H5V19H12V14H10V12H12V10.3458C12 9.00855 12.1392 8.52362 12.4007 8.03473C12.6622 7.54584 13.0458 7.16216 13.5347 6.9007C13.9174 6.69604 14.3922 6.57252 15.2217 6.51954C15.551 6.49851 15.9771 6.52533 16.5 6.6V8.5H16C15.0827 8.5 14.7042 8.54332 14.4779 8.66433C14.3376 8.73939 14.2394 8.83758 14.1643 8.97793C14.0433 9.20418 14 9.42853 14 10.3458V12H16.5L16 14H14V19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
  })),
  Facebook: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
  })),
  'Messenger-fill': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
  })),
  'Messenger-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.76497 19.225C8.35411 18.9652 9.01479 18.9164 9.63316 19.0861C10.4032 19.2963 11.198 19.4019 12.001 19.4C16.5861 19.4 20.001 16.1135 20.001 11.7C20.001 7.28651 16.5861 4 12.001 4C7.41585 4 4.00098 7.28651 4.00098 11.7C4.00098 13.9699 4.89652 15.9722 6.46655 17.3764C7.0418 17.8853 7.38251 18.6082 7.409 19.3822L7.76497 19.225ZM12.001 2C17.6345 2 22.001 6.1265 22.001 11.7C22.001 17.2735 17.6345 21.4 12.001 21.4C11.0233 21.4023 10.0497 21.273 9.10648 21.0155C8.92907 20.9668 8.7403 20.9808 8.57198 21.055L6.58748 21.931C6.34398 22.0386 6.06291 22.018 5.83768 21.8761C5.61244 21.7342 5.47254 21.4896 5.46448 21.2235L5.40998 19.4445C5.40257 19.2257 5.30547 19.0196 5.14148 18.8745C3.19598 17.1345 2.00098 14.6155 2.00098 11.7C2.00098 6.1265 6.36748 2 12.001 2ZM5.99598 14.5365L8.93348 9.8765C9.15689 9.5221 9.51834 9.27728 9.93034 9.2013C10.3423 9.12532 10.7673 9.22511 11.1025 9.4765L13.439 11.2265C13.6528 11.3878 13.9476 11.3878 14.1615 11.2265L17.317 8.8315C17.738 8.512 18.288 9.016 18.006 9.4635L15.0685 14.1235C14.8451 14.4779 14.4836 14.7227 14.0716 14.7987C13.6596 14.8747 13.2346 14.7749 12.8995 14.5235L10.563 12.7735C10.3491 12.6122 10.0543 12.6122 9.84048 12.7735L6.68498 15.1685C6.26398 15.488 5.71398 14.984 5.99598 14.5365Z"
  })),
  'Linkedin-in': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  })),
  'Linkedin-box-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z"
  })),
  Linkedin: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
  })),
  Twitter: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
  })),
  'Twitter-square': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
  })),
  'Twitter-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.3499 5.5498C13.7681 5.5498 12.4786 6.81785 12.4504 8.39633L12.4223 9.97138C12.4164 10.3027 12.143 10.5665 11.8117 10.5606C11.7881 10.5602 11.7646 10.5584 11.7413 10.5552L10.1805 10.3423C8.12699 10.0623 6.15883 9.11711 4.27072 7.54387C3.67275 10.8535 4.84 13.147 7.65342 14.9157L9.40041 16.014C9.68095 16.1904 9.7654 16.5608 9.58903 16.8413C9.54861 16.9056 9.49636 16.9616 9.43504 17.0064L7.84338 18.1693C8.78973 18.2288 9.68938 18.1873 10.435 18.0385C15.1526 17.097 18.2897 13.5468 18.2897 7.69084C18.2897 7.21275 17.2774 5.5498 15.3499 5.5498ZM10.4507 8.36066C10.4983 5.69559 12.6735 3.5498 15.3499 3.5498C16.7132 3.5498 17.9465 4.10658 18.8348 5.00515C19.5462 4.9998 20.1514 5.17966 21.5035 4.35943C21.1693 5.9998 21.0034 6.71177 20.2897 7.69084C20.2897 15.3324 15.5926 19.0487 10.8264 19.9998C7.5587 20.6519 2.80646 19.5812 1.44531 18.1584C2.13874 18.1051 4.95928 17.8018 6.58895 16.6089C5.20994 15.6984 -0.278631 12.4679 3.32772 3.78617C5.02119 5.76283 6.73797 7.10831 8.47807 7.82262C9.63548 8.29774 9.91978 8.28825 10.4507 8.36066Z"
  })),
  'Instagram-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
  })),
  'Instagram-fill': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.0281 2.00098C14.1535 2.00284 14.7238 2.00879 15.2166 2.02346L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10944 17.9128 2.27778 18.5503 2.52528C19.2094 2.77944 19.7661 3.12278 20.3219 3.67861C20.8769 4.23444 21.2203 4.79278 21.4753 5.45028C21.7219 6.08694 21.8903 6.81361 21.9403 7.87778C21.9522 8.14444 21.9618 8.36564 21.9697 8.58989L21.976 8.78397C21.9906 9.27672 21.9973 9.8471 21.9994 10.9725L22.0002 11.7182C22.0003 11.8093 22.0003 11.9033 22.0003 12.0003L22.0002 12.2824L21.9996 13.0281C21.9977 14.1535 21.9918 14.7238 21.9771 15.2166L21.9707 15.4107C21.9628 15.6349 21.9528 15.8561 21.9403 16.1228C21.8911 17.1869 21.7219 17.9128 21.4753 18.5503C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2203 18.5503 21.4753C17.9128 21.7219 17.1869 21.8903 16.1228 21.9403C15.8561 21.9522 15.6349 21.9618 15.4107 21.9697L15.2166 21.976C14.7238 21.9906 14.1535 21.9973 13.0281 21.9994L12.2824 22.0002C12.1913 22.0003 12.0973 22.0003 12.0003 22.0003L11.7182 22.0002L10.9725 21.9996C9.8471 21.9977 9.27672 21.9918 8.78397 21.9771L8.58989 21.9707C8.36564 21.9628 8.14444 21.9528 7.87778 21.9403C6.81361 21.8911 6.08861 21.7219 5.45028 21.4753C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5503C2.27778 17.9128 2.11028 17.1869 2.06028 16.1228C2.0484 15.8561 2.03871 15.6349 2.03086 15.4107L2.02457 15.2166C2.00994 14.7238 2.00327 14.1535 2.00111 13.0281L2.00098 10.9725C2.00284 9.8471 2.00879 9.27672 2.02346 8.78397L2.02981 8.58989C2.03778 8.36564 2.04778 8.14444 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79194 3.12278 4.23444 3.67861 3.67861C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.0484 8.36564 2.03871 8.58989 2.03086L8.78397 2.02457C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0003C7.00028 14.7632 9.23981 17.0003 12.0003 17.0003C14.7632 17.0003 17.0003 14.7607 17.0003 12.0003C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0003C15.0003 13.6572 13.6576 15.0003 12.0003 15.0003C10.3434 15.0003 9.00028 13.6576 9.00028 12.0003C9.00028 10.3434 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06018 16.0003 6.74943C16.0003 7.43867 16.5602 7.99944 17.2503 7.99944C17.9395 7.99944 18.5003 7.43954 18.5003 6.74943C18.5003 6.06018 17.9386 5.49941 17.2503 5.50028Z"
  })),
  Whattsapp: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
  })),
  'Square-whattsapp': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"
  })),
  Youtube: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 576 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
  })),
  'Youtube-square': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
  })),
  'Youtube-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"
  })),
  Youtube3: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"
  })),
  Youtube4: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.888 14.154c-.288 0-.535.184-.717.405v-1.893h-.814v5.88h.814v-.333c.225.28.471.388.766.388.537 0 .737-.417.737-.954v-2.406c0-.588-.195-1.087-.786-1.087zm-.044 3.376c0 .138-.023.238-.07.299-.089.116-.281.111-.413.045l-.191-.153v-2.703l.167-.132c.141-.071.323-.058.421.071.058.076.086.187.086.333v2.24zm-2.716-8.53v-2.119c0-.25.115-.434.353-.434.26 0 .371.179.371.434v2.119c0 .248-.126.431-.354.431-.235 0-.37-.191-.37-.431zm-1.849 4.52h-.94v5.027h-.908v-5.027h-.94v-.854h2.788v.854zm1.484.688h.807v4.338h-.807v-.479c-.148.176-.303.311-.464.403-.435.249-1.031.244-1.031-.636v-3.626h.806v3.325c0 .175.042.292.215.292.157 0 .376-.202.474-.325v-3.292zm-10.763-14.208v24h24v-24h-24zm13.434 5.62h.847v3.491c0 .184.044.307.226.307.165 0 .395-.212.498-.341v-3.457h.847v4.555h-.847v-.504c-.367.436-.723.569-.979.569-.454 0-.591-.364-.591-.813v-3.807zm-1.937-.038c.687 0 1.217.511 1.217 1.224v2.233c0 .765-.536 1.22-1.217 1.22-.821 0-1.241-.417-1.241-1.22v-2.233c0-.731.495-1.224 1.241-1.224zm-3.435-1.582l.658 2.468.611-2.468h.969l-1.11 3.67v2.504h-.954v-2.504l-1.134-3.67h.96zm8.493 15.912c-1.735.118-7.377.118-9.11 0-1.878-.128-2.097-1.267-2.111-4.245.014-2.983.235-4.116 2.111-4.245 1.733-.118 7.375-.118 9.11 0 1.878.128 2.097 1.267 2.111 4.245-.014 2.983-.235 4.116-2.111 4.245zm-.047-5.813c-.728 0-1.225.522-1.225 1.275v1.947c0 .781.394 1.342 1.164 1.342.85 0 1.208-.506 1.208-1.342v-.326h-.83v.301c0 .378-.02.607-.36.607-.325 0-.352-.282-.352-.607v-.818h1.542v-1.104c0-.783-.373-1.275-1.147-1.275zm.317 1.707h-.712v-.439c0-.298.062-.508.36-.508.29 0 .352.215.352.508v.439z"
  })),
  Skype: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"
  })),
  'Skype-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.0052 18.4232C13.4288 18.3577 13.8623 18.43 14.2418 18.6295C14.7026 18.8719 15.2154 19 15.751 19C17.5459 19 19.001 17.5449 19.001 15.75C19.001 15.2144 18.8728 14.7016 18.6305 14.2408C18.431 13.8613 18.3586 13.4278 18.4242 13.0042C18.4752 12.6746 18.501 12.3393 18.501 12C18.501 8.41015 15.5908 5.5 12.001 5.5C11.6617 5.5 11.3264 5.52582 10.9968 5.57681C10.5731 5.64234 10.1396 5.57001 9.7602 5.37047C9.29939 5.12815 8.7866 5 8.25098 5C6.45605 5 5.00098 6.45507 5.00098 8.25C5.00098 8.78562 5.12912 9.29841 5.37145 9.75922C5.57098 10.1387 5.64332 10.5722 5.57778 10.9958C5.5268 11.3254 5.50098 11.6607 5.50098 12C5.50098 15.5899 8.41113 18.5 12.001 18.5C12.3403 18.5 12.6755 18.4742 13.0052 18.4232ZM12.001 20.5C7.30656 20.5 3.50098 16.6944 3.50098 12C3.50098 11.5545 3.53524 11.1171 3.60129 10.6901C3.21792 9.96108 3.00098 9.13087 3.00098 8.25C3.00098 5.35051 5.35148 3 8.25098 3C9.13185 3 9.96205 3.21694 10.6911 3.60031C11.118 3.53427 11.5555 3.5 12.001 3.5C16.6954 3.5 20.501 7.30558 20.501 12C20.501 12.4455 20.4667 12.8829 20.4007 13.3099C20.784 14.0389 21.001 14.8691 21.001 15.75C21.001 18.6495 18.6505 21 15.751 21C14.8701 21 14.0399 20.7831 13.3109 20.3997C12.8839 20.4657 12.4464 20.5 12.001 20.5ZM12.0539 16.9993C9.25237 16.9993 8.00098 15.6213 8.00098 14.5872C8.00098 14.0545 8.39165 13.6848 8.92925 13.6848C10.1291 13.6848 9.81574 15.4096 12.0539 15.4096C13.1967 15.4096 13.8297 14.7864 13.8297 14.1485C13.8297 13.7648 13.6423 13.3408 12.8868 13.1535L10.3965 12.5303C8.39095 12.0261 8.02674 10.9384 8.02674 9.91832C8.02674 7.7966 10.0191 7 11.8909 7C13.6117 7 15.6465 7.95606 15.6465 9.22756C15.6465 9.77348 15.1674 10.091 14.6347 10.091C13.6117 10.091 13.8004 8.67259 11.735 8.67259C10.712 8.67259 10.1389 9.13495 10.1389 9.79855C10.1389 10.4622 10.9418 10.6745 11.6409 10.834L13.4773 11.2427C15.4905 11.6947 16.001 12.8763 16.001 13.9891C16.001 15.7132 14.6765 17 12.0163 17L12.0539 16.9993Z"
  })),
  'Mail-regular': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
  })),
  Mail: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 1792 1792"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
  })),
  'Mail-open': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2.24283 6.85419L11.4895 1.30843C11.8062 1.11848 12.2019 1.11855 12.5185 1.30862L21.7573 6.85416C21.9079 6.94453 22 7.10726 22 7.28286V19.9998C22 20.5521 21.5523 20.9998 21 20.9998H3C2.44772 20.9998 2 20.5521 2 19.9998V7.28298C2 7.10732 2.09218 6.94454 2.24283 6.85419ZM4 8.13244V18.9998H20V8.13197L12.0037 3.33221L4 8.13244ZM12.0597 13.6981L17.3556 9.23515L18.6444 10.7645L12.074 16.3016L5.36401 10.7715L6.63599 9.22813L12.0597 13.6981Z"
  })),
  'Mail-send': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"
  })),
  'Mail-unread': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.1 3C16.0344 3.32311 16 3.65753 16 4C16 4.34247 16.0344 4.67689 16.1 5H4.51146L12.0619 11.662L17.1098 7.14141C17.5363 7.66888 18.0679 8.10787 18.6728 8.42652L12.0718 14.338L4 7.21594V19H20V8.89998C20.3231 8.96557 20.6575 9 21 9C21.3425 9 21.6769 8.96557 22 8.89998V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H16.1ZM21 1C22.6569 1 24 2.34315 24 4C24 5.65685 22.6569 7 21 7C19.3431 7 18 5.65685 18 4C18 2.34315 19.3431 1 21 1Z"
  })),
  'Mail-add': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 13H20V7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM21 18H24V20H21V23H19V20H16V18H19V15H21V18Z"
  })),
  'Mail-check': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 14H20V7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V14ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM19 22L15.4645 18.4645L16.8787 17.0503L19 19.1716L22.5355 15.636L23.9497 17.0503L19 22Z"
  })),
  'Mail-close': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 14H20V7.23792L12.0718 14.338L4 7.21594V19H15V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V14ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM21.4142 19L23.5355 21.1213L22.1213 22.5355L20 20.4142L17.8787 22.5355L16.4645 21.1213L18.5858 19L16.4645 16.8787L17.8787 15.4645L20 17.5858L22.1213 15.4645L23.5355 16.8787L21.4142 19Z"
  })),
  'Mail-download': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 7.23792L12.0718 14.338L4 7.21594V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12H20V7.23792ZM19.501 5H4.51146L12.0619 11.662L19.501 5ZM20 18H23L19 22L15 18H18V14H20V18Z"
  })),
  'Mail-forbid': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 7.23792L12.0718 14.338L4 7.21594V19H11.0709C11.1719 19.7061 11.3783 20.3783 11.6736 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12.2547C21.396 11.8334 20.7224 11.5049 20 11.2899V7.23792ZM19.501 5H4.51146L12.0619 11.662L19.501 5ZM16.7066 20.7076C17.0982 20.895 17.5369 21 18 21C19.6569 21 21 19.6569 21 18C21 17.5369 20.895 17.0982 20.7076 16.7066L16.7066 20.7076ZM15.2924 19.2934L19.2934 15.2924C18.9018 15.105 18.4631 15 18 15C16.3431 15 15 16.3431 15 18C15 18.4631 15.105 18.9018 15.2924 19.2934ZM18 23C15.2386 23 13 20.7614 13 18C13 15.2386 15.2386 13 18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23Z"
  })),
  'Mail-lock': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 7.23792L12.0718 14.338L4 7.21594V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V11H20V7.23792ZM19.501 5H4.51146L12.0619 11.662L19.501 5ZM22 17H23V22H15V17H16V16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16V17ZM20 17V16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V17H20Z"
  })),
  'Mail-settings': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13H20V7.23792ZM19.501 5H4.51146L12.0619 11.662L19.501 5ZM17.05 19.5485C17.0172 19.3706 17 19.1873 17 19C17 18.8127 17.0172 18.6294 17.05 18.4515L16.0359 17.866L17.0359 16.134L18.0505 16.7197C18.3278 16.4824 18.6489 16.2948 19 16.1707V15H21V16.1707C21.3511 16.2948 21.6722 16.4824 21.9495 16.7197L22.9641 16.134L23.9641 17.866L22.95 18.4515C22.9828 18.6294 23 18.8127 23 19C23 19.1873 22.9828 19.3706 22.95 19.5485L23.9641 20.134L22.9641 21.866L21.9495 21.2803C21.6722 21.5176 21.3511 21.7052 21 21.8293V23H19V21.8293C18.6489 21.7052 18.3278 21.5176 18.0505 21.2803L17.0359 21.866L16.0359 20.134L17.05 19.5485ZM20 20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18C19.4477 18 19 18.4477 19 19C19 19.5523 19.4477 20 20 20Z"
  })),
  'Mail-star': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 13H20V7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM19.5 21.75L16.855 23.1406L17.3601 20.1953L15.2202 18.1094L18.1775 17.6797L19.5 15L20.8225 17.6797L23.7798 18.1094L21.6399 20.1953L22.145 23.1406L19.5 21.75Z"
  })),
  'Mail-volume': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 14.5V23.5L16.667 21H14V17H16.667L20 14.5ZM21 3C21.5523 3 22 3.44772 22 4V13H20V7.237L12.0718 14.338L4 7.215V19H12V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM21 17C22.1046 17 23 17.8954 23 19C23 20.0544 22.1841 20.9182 21.1493 20.9945L21 21V17ZM19.5 5H4.511L12.061 11.662L19.5 5Z"
  })),
  'Record-mail': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.2572 15C13.4718 14.0491 13 12.8296 13 11.5C13 8.46243 15.4624 6 18.5 6C21.5376 6 24 8.46243 24 11.5C24 14.5376 21.5376 17 18.5 17H5.5C2.46243 17 0 14.5376 0 11.5C0 8.46243 2.46243 6 5.5 6C8.53757 6 11 8.46243 11 11.5C11 12.8296 10.5282 14.0491 9.74284 15H14.2572ZM5.5 15C7.433 15 9 13.433 9 11.5C9 9.567 7.433 8 5.5 8C3.567 8 2 9.567 2 11.5C2 13.433 3.567 15 5.5 15ZM18.5 15C20.433 15 22 13.433 22 11.5C22 9.567 20.433 8 18.5 8C16.567 8 15 9.567 15 11.5C15 13.433 16.567 15 18.5 15Z"
  })),
  'Reddit-alien': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"
  })),
  'Reddit-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.0526 7.8154L11.8042 4.27941C12.0339 3.19898 13.0959 2.50929 14.1764 2.73894L17.3725 3.4183C17.8351 2.90546 18.5509 2.64644 19.275 2.80035C20.3554 3.03 21.0451 4.09204 20.8155 5.17247C20.5858 6.2529 19.5238 6.94259 18.4434 6.71294C17.7193 6.55903 17.1707 6.03124 16.9567 5.3746L13.7605 4.69523L13.0943 7.82978C14.8789 7.96683 16.6522 8.56079 18.2581 9.52961C19.0892 9.06763 20.0992 8.99337 21.007 9.36091C22.1731 9.833 22.9531 10.9459 22.9991 12.2031L22.9996 12.2241C23.0151 13.2277 22.559 14.1657 21.792 14.7742C21.7899 14.8178 21.7871 14.859 21.7836 14.8971C21.7836 18.8949 17.3341 21.9267 11.9852 21.9267C6.65232 21.9267 2.27693 18.9027 2.27987 14.9738C2.27523 14.9134 2.27162 14.853 2.26905 14.7926C1.46701 14.1873 0.984722 13.2277 1.00037 12.1962C1.01955 10.9317 1.78341 9.79777 2.94804 9.30491C3.85909 8.91936 4.881 8.98299 5.72371 9.44381C7.3578 8.46653 9.15777 7.91241 11.0526 7.8154ZM20.3385 13.341C20.7466 13.1382 21.003 12.7207 21.0001 12.2656C20.9789 11.8005 20.6887 11.3897 20.2565 11.2147C19.821 11.0384 19.3226 11.1343 18.9837 11.4597L18.3991 12.0207L17.729 11.5652C16.1137 10.4672 14.2771 9.8397 12.4995 9.80134L11.493 9.80123C9.61791 9.8295 7.84136 10.4002 6.25552 11.4757L5.59246 11.9254L5.00897 11.3764C4.66501 11.0528 4.16243 10.9627 3.7275 11.1468C3.29257 11.3308 3.0073 11.7543 3 12.2265C2.99298 12.6987 3.26526 13.1307 3.69441 13.3278L4.32738 13.6186L4.27399 14.3132C4.261 14.482 4.261 14.6516 4.27693 14.8971C4.27693 17.6071 7.63313 19.9267 11.9852 19.9267C16.3561 19.9267 19.7836 17.5913 19.7865 14.8205C19.7995 14.6516 19.7995 14.482 19.7865 14.3132L19.7348 13.6411L20.3385 13.341ZM6.95075 13.4999C6.95075 12.6715 7.62232 11.9999 8.45075 11.9999C9.27918 11.9999 9.95075 12.6715 9.95075 13.4999C9.95075 14.3283 9.27918 14.9999 8.45075 14.9999C8.05292 14.9999 7.67139 14.8419 7.39009 14.5606C7.10878 14.2793 6.95075 13.8977 6.95075 13.4999ZM13.9507 13.4999C13.9507 12.6715 14.6223 11.9999 15.4507 11.9999C16.2792 11.9999 16.9507 12.6715 16.9507 13.4999C16.9507 14.3283 16.2792 14.9999 15.4507 14.9999C15.0529 14.9999 14.6714 14.8419 14.3901 14.5606C14.1088 14.2793 13.9507 13.8977 13.9507 13.4999ZM11.9665 18.6028C10.5693 18.6028 9.19993 18.2329 8.08503 17.3928C7.94659 17.2241 7.95868 16.9779 8.11299 16.8236C8.2673 16.6693 8.51349 16.6572 8.68218 16.7956C9.62697 17.4886 10.805 17.7856 11.9507 17.7856C13.0965 17.7856 14.2813 17.5112 15.235 16.8271C15.3473 16.7176 15.5095 16.6763 15.6604 16.7188C15.8114 16.7613 15.9282 16.8811 15.9669 17.0331C16.0055 17.1851 15.9517 17.3346 15.8479 17.4556C15.1638 18.2531 13.3636 18.6028 11.9665 18.6028Z"
  })),
  Reddit: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"
  })),
  'Reddit-square': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M283.2 345.5c2.7 2.7 2.7 6.8 0 9.2-24.5 24.5-93.8 24.6-118.4 0-2.7-2.4-2.7-6.5 0-9.2 2.4-2.4 6.5-2.4 8.9 0 18.7 19.2 81 19.6 100.5 0 2.4-2.3 6.6-2.3 9 0zm-91.3-53.8c0-14.9-11.9-26.8-26.5-26.8-14.9 0-26.8 11.9-26.8 26.8 0 14.6 11.9 26.5 26.8 26.5 14.6 0 26.5-11.9 26.5-26.5zm90.7-26.8c-14.6 0-26.5 11.9-26.5 26.8 0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-11.9 26.8-26.5 0-14.9-11.9-26.8-26.8-26.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-99.7 140.6c-10.1 0-19 4.2-25.6 10.7-24.1-16.7-56.5-27.4-92.5-28.6l18.7-84.2 59.5 13.4c0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-12.2 26.8-26.8 0-14.6-11.9-26.8-26.8-26.8-10.4 0-19.3 6.2-23.8 14.9l-65.7-14.6c-3.3-.9-6.5 1.5-7.4 4.8l-20.5 92.8c-35.7 1.5-67.8 12.2-91.9 28.9-6.5-6.8-15.8-11-25.9-11-37.5 0-49.8 50.4-15.5 67.5-1.2 5.4-1.8 11-1.8 16.7 0 56.5 63.7 102.3 141.9 102.3 78.5 0 142.2-45.8 142.2-102.3 0-5.7-.6-11.6-2.1-17 33.6-17.2 21.2-67.2-16.1-67.2z"
  })),
  Tumblr: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-82.3 364.2c-8.5 9.1-31.2 19.8-60.9 19.8-75.5 0-91.9-55.5-91.9-87.9v-90h-29.7c-3.4 0-6.2-2.8-6.2-6.2v-42.5c0-4.5 2.8-8.5 7.1-10 38.8-13.7 50.9-47.5 52.7-73.2.5-6.9 4.1-10.2 10-10.2h44.3c3.4 0 6.2 2.8 6.2 6.2v72h51.9c3.4 0 6.2 2.8 6.2 6.2v51.1c0 3.4-2.8 6.2-6.2 6.2h-52.1V321c0 21.4 14.8 33.5 42.5 22.4 3-1.2 5.6-2 8-1.4 2.2.5 3.6 2.1 4.6 4.9l13.8 40.2c1 3.2 2 6.7-.3 9.1z"
  })),
  'Tumblr-fill': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.27051 7.62976C8.86829 7.07312 10.816 4.76401 10.816 2H13.8463V7.15152H17.4826V10.7879H13.8463V16.2424C13.8463 16.7566 14.044 17.4493 14.7554 17.9091C15.2296 18.2156 16.2397 18.3671 17.7857 18.3636V22H13.5432C11.0329 22 8.99778 19.9649 8.99778 17.4545V10.7879H6.27051V7.62976Z"
  })),
  Wechat: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.276.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.532 0-.963-.432-.963-.964 0-.533.431-.964.963-.964.533 0 .964.431.964.964 0 .532-.431.964-.964.964zm4.82 0c-.533 0-.964-.432-.964-.964 0-.533.431-.964.964-.964.532 0 .963.431.963.964 0 .532-.431.964-.963.964zm-13.398-5.639c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156zm5.783 0c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156z"
  })),
  'Wechat-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.0014 14.6759C10.0011 14.6553 10.001 14.6347 10.001 14.6141C10.001 12.1058 12.0175 9.99588 14.7539 9.38116C14.3904 7.07897 11.9602 5.2002 8.90098 5.2002C5.58037 5.2002 3.00098 7.41369 3.00098 9.97954C3.00098 10.9489 3.36131 11.8803 4.04082 12.6783C4.0728 12.7159 4.12443 12.772 4.19342 12.8429C4.78537 13.4519 5.13709 14.2459 5.19546 15.0807C5.90857 14.6685 6.74285 14.5125 7.55832 14.6394C7.72416 14.6652 7.85986 14.685 7.96345 14.6985C8.27111 14.7386 8.58419 14.7589 8.90098 14.7589C9.27825 14.7589 9.64595 14.7303 10.0014 14.6759ZM10.4581 16.6272C9.95467 16.7136 9.43399 16.7589 8.90098 16.7589C8.49441 16.7589 8.09502 16.7325 7.70499 16.6817C7.58312 16.6658 7.4317 16.6438 7.25073 16.6156C6.87693 16.5575 6.49436 16.6324 6.1713 16.827L4.26653 17.9747C4.12052 18.0649 3.94891 18.1059 3.77733 18.0918C3.33814 18.0557 3.01178 17.6746 3.04837 17.2408L3.19859 15.4599C3.23664 15.0089 3.07664 14.5634 2.75931 14.237C2.66182 14.1367 2.5814 14.0493 2.51802 13.9749C1.56406 12.8545 1.00098 11.4734 1.00098 9.97954C1.00098 6.23541 4.53793 3.2002 8.90098 3.2002C12.9601 3.2002 16.3041 5.82724 16.7504 9.20813C20.1225 9.36161 22.801 11.7232 22.801 14.6141C22.801 15.8071 22.3448 16.9099 21.572 17.8047C21.5206 17.8641 21.4555 17.9339 21.3765 18.014C21.1194 18.2747 20.9898 18.6304 21.0206 18.9906L21.1423 20.4127C21.172 20.7592 20.9076 21.0635 20.5518 21.0924C20.4128 21.1036 20.2738 21.0708 20.1555 20.9988L18.6124 20.0823C18.3506 19.9269 18.0407 19.867 17.7379 19.9135C17.5913 19.936 17.4686 19.9536 17.3699 19.9663C17.0539 20.0069 16.7303 20.0279 16.401 20.0279C13.7074 20.0279 11.4025 18.6203 10.4581 16.6272ZM17.4346 17.9366C18.0019 17.8496 18.5793 17.9112 19.1105 18.1113C19.2492 17.5506 19.5373 17.0307 19.9524 16.6097C20.0027 16.5587 20.0388 16.5201 20.0584 16.4973C20.5467 15.9321 20.801 15.2841 20.801 14.6141C20.801 12.8097 18.8983 11.2002 16.401 11.2002C13.9037 11.2002 12.001 12.8097 12.001 14.6141C12.001 16.4184 13.9037 18.0279 16.401 18.0279C16.6424 18.0279 16.8809 18.0127 17.115 17.9826C17.1957 17.9722 17.3029 17.9568 17.4346 17.9366Z"
  })),
  'Pinterest-p': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 384 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
  })),
  'Pinterest-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.49161 19.1912C8.51535 18.8546 8.56306 18.5199 8.63456 18.1897C8.69754 17.8951 8.88867 17.0596 9.16872 15.8498L9.17581 15.8191C9.29895 15.2872 9.43089 14.7192 9.56283 14.1525C9.64199 13.8124 9.70356 13.5484 9.74438 13.4602C9.55012 13.0123 9.45298 12.5263 9.45969 12.0373C9.45969 10.6999 10.2157 9.66359 11.1958 9.6636C11.5555 9.65809 11.8996 9.81388 12.1383 10.09C12.3764 10.3655 12.4863 10.7335 12.4404 11.086C12.4404 11.5385 12.3548 11.8844 11.9865 13.1212C11.9158 13.3587 11.8674 13.5254 11.8215 13.692C11.7696 13.8799 11.7261 14.0503 11.6887 14.2136C11.5928 14.6003 11.6811 15.011 11.9262 15.3195C12.1707 15.6272 12.5421 15.7966 12.9319 15.7762C14.4242 15.7762 15.5321 13.7911 15.5321 11.2277C15.5321 9.25804 14.2412 7.95424 12.1 7.95416C11.0224 7.91127 9.97466 8.32523 9.20095 9.09986C8.42664 9.87508 7.99452 10.9437 8.00559 12.0614C7.98214 12.6633 8.17064 13.2536 8.51804 13.7053C8.69915 13.8441 8.76869 14.0885 8.69262 14.2941C8.65157 14.4632 8.55259 14.8473 8.51649 14.9755C8.49464 15.1032 8.41497 15.2131 8.30126 15.2715C8.18678 15.3303 8.05172 15.3297 7.94618 15.2737C6.78507 14.7954 6.14967 13.4963 6.14967 11.8349C6.14967 8.84907 8.64129 6.2497 12.3417 6.2497C15.4772 6.2497 17.8231 8.57864 17.8231 11.3896C17.8231 14.922 15.8911 17.4942 13.1337 17.4942C12.3393 17.5202 11.5838 17.162 11.087 16.535L11.044 16.712C10.9499 17.0992 10.9028 17.2928 10.8368 17.5638L10.8349 17.5715C10.6887 18.1717 10.5867 18.5885 10.5471 18.7452C10.4412 19.0998 10.307 19.448 10.1471 19.7841C10.7421 19.9253 11.3628 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 15.1594 5.83244 17.8911 8.49161 19.1912ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"
  })),
  Pinterest: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 496 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
  })),
  'Pinterest-square': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
  })),
  Twitch: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"
  })),
  'Twitch-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.30098 3H21.001V14.7L16.301 19.4H12.401L9.90098 21.8H7.00098V19.4H3.00098V6.2L4.30098 3ZM5.00098 17.4H9.00098V19.8H9.09636L11.5964 17.4H15.4725L19.001 13.8716V5H5.00098V17.4ZM15.001 8H17.001V12.7H15.001V8ZM15.001 8H17.001V12.7H15.001V8ZM10.001 8H12.001V12.7H10.001V8Z"
  })),
  Discord: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 640 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
  })),
  'Discord-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.52062 13.8456C7.48059 13.8456 6.63159 12.9011 6.63159 11.7444 6.63159 10.5876 7.45936 9.64307 8.52062 9.64307 9.57123 9.64307 10.4308 10.5876 10.4096 11.7444 10.4096 12.9011 9.57123 13.8456 8.52062 13.8456ZM15.4941 13.8456C14.454 13.8456 13.604 12.9011 13.604 11.7444 13.604 10.5876 14.4328 9.64307 15.4941 9.64307 16.5447 9.64307 17.4043 10.5876 17.3831 11.7444 17.3831 12.9011 16.5553 13.8456 15.4941 13.8456ZM10.1253 4.32272 9.81655 3.75977 9.18323 3.86532C7.71915 4.10934 6.32658 4.54652 5.02544 5.1458L4.79651 5.25124 4.65507 5.45985C2.0418 9.31417 1.3258 13.1084 1.68032 16.836L1.71897 17.2423 2.04912 17.4822C3.78851 18.7463 5.47417 19.5186 7.12727 20.0254L7.91657 20.2674 9.03013 17.5504C10.9397 18.0224 13.0592 18.0225 14.969 17.5508L16.0757 20.2681 16.8668 20.0254C18.5173 19.5191 20.2137 18.7469 21.9466 17.4809L22.2726 17.2428 22.3131 16.8412C22.7491 12.521 21.616 8.75749 19.3547 5.45628L19.2128 5.2492 18.9846 5.1448C17.6767 4.5466 16.2852 4.10957 14.8309 3.86549L14.2132 3.76182 13.8987 4.30344C13.8112 4.4542 13.7215 4.6244 13.6364 4.79662 12.5441 4.68445 11.456 4.68421 10.3726 4.79627 10.2882 4.62711 10.2025 4.46356 10.1253 4.32272ZM6.71436 16.61C6.91235 16.724 7.11973 16.8356 7.32557 16.9378L6.8764 18.0338C5.75585 17.6256 4.61837 17.0635 3.4476 16.2555 3.22313 13.1175 3.86092 9.95075 6.01196 6.68602 6.90962 6.29099 7.8535 5.98255 8.83606 5.77271 8.89631 5.89807 8.95235 6.02042 8.99839 6.12892L9.27128 6.77213 9.96259 6.67074C11.3152 6.47235 12.6772 6.47209 14.0523 6.671L14.7424 6.77082 15.0147 6.12892C15.0621 6.01719 15.1167 5.89523 15.1743 5.77298 16.1525 5.98301 17.098 6.29188 18.0029 6.68787 19.8781 9.50833 20.8241 12.6541 20.5486 16.255 19.3837 17.0623 18.2422 17.6246 17.1193 18.0333L16.6735 16.9387C16.8799 16.8362 17.0879 16.7243 17.2865 16.61 17.7763 16.3277 18.3039 15.9757 18.6402 15.6395L17.3606 14.36C17.1969 14.5237 16.837 14.7805 16.3831 15.0421 15.9388 15.2981 15.498 15.5049 15.2164 15.598 13.2126 16.2606 10.7883 16.2606 8.78443 15.598 8.50285 15.5049 8.06205 15.2981 7.61772 15.0421 7.16383 14.7805 6.80392 14.5237 6.64017 14.36L5.36065 15.6395C5.6969 15.9757 6.2245 16.3277 6.71436 16.61Z"
  })),
  Snapchat: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M496.926,366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.959-45.42a102.889,102.889,0,0,1-9.089-16.12c-1.054-3.013-1-4.724-.248-6.287a10.221,10.221,0,0,1,2.914-3.038c3.918-2.591,7.96-5.22,10.7-6.993,4.885-3.162,8.754-5.667,11.246-7.44,9.362-6.547,15.909-13.5,20-21.278a42.371,42.371,0,0,0,2.1-35.191c-6.2-16.318-21.613-26.449-40.287-26.449a55.543,55.543,0,0,0-11.718,1.24c-1.029.224-2.059.459-3.063.72.174-11.16-.074-22.94-1.066-34.534-3.522-40.758-17.794-62.123-32.674-79.16A130.167,130.167,0,0,0,332.1,36.443C309.515,23.547,283.91,17,256,17S202.6,23.547,180,36.443a129.735,129.735,0,0,0-33.281,26.783c-14.88,17.038-29.152,38.44-32.673,79.161-.992,11.594-1.24,23.435-1.079,34.533-1-.26-2.021-.5-3.051-.719a55.461,55.461,0,0,0-11.717-1.24c-18.687,0-34.125,10.131-40.3,26.449a42.423,42.423,0,0,0,2.046,35.228c4.105,7.774,10.652,14.731,20.014,21.278,2.48,1.736,6.361,4.24,11.246,7.44,2.641,1.711,6.5,4.216,10.28,6.72a11.054,11.054,0,0,1,3.3,3.311c.794,1.624.818,3.373-.36,6.6a102.02,102.02,0,0,1-8.94,15.785c-12.077,17.669-29.363,32.648-51.434,44.639C32.355,348.608,20.2,352.75,15.069,366.7c-3.868,10.528-1.339,22.506,8.494,32.6a49.137,49.137,0,0,0,12.4,9.387,134.337,134.337,0,0,0,30.342,12.139,20.024,20.024,0,0,1,6.126,2.741c3.583,3.137,3.075,7.861,7.849,14.78a34.468,34.468,0,0,0,8.977,9.127c10.019,6.919,21.278,7.353,33.207,7.811,10.776.41,22.989.881,36.939,5.481,5.778,1.91,11.78,5.605,18.736,9.92C194.842,480.951,217.707,495,255.973,495s61.292-14.123,78.118-24.428c6.907-4.24,12.872-7.9,18.489-9.758,13.949-4.613,26.163-5.072,36.939-5.481,11.928-.459,23.187-.893,33.206-7.812a34.584,34.584,0,0,0,10.218-11.16c3.434-5.84,3.348-9.919,6.572-12.771a18.971,18.971,0,0,1,5.753-2.629A134.893,134.893,0,0,0,476.02,408.71a48.344,48.344,0,0,0,13.019-10.193l.124-.149C498.389,388.5,500.708,376.867,496.926,366.6Zm-34.013,18.277c-20.745,11.458-34.533,10.23-45.259,17.137-9.114,5.865-3.72,18.513-10.342,23.076-8.134,5.617-32.177-.4-63.239,9.858-25.618,8.469-41.961,32.822-88.038,32.822s-62.036-24.3-88.076-32.884c-31-10.255-55.092-4.241-63.239-9.858-6.609-4.563-1.24-17.211-10.341-23.076-10.739-6.907-24.527-5.679-45.26-17.075-13.206-7.291-5.716-11.8-1.314-13.937,75.143-36.381,87.133-92.552,87.666-96.719.645-5.046,1.364-9.014-4.191-14.148-5.369-4.96-29.189-19.7-35.8-24.316-10.937-7.638-15.748-15.264-12.2-24.638,2.48-6.485,8.531-8.928,14.879-8.928a27.643,27.643,0,0,1,5.965.67c12,2.6,23.659,8.617,30.392,10.242a10.749,10.749,0,0,0,2.48.335c3.6,0,4.86-1.811,4.612-5.927-.768-13.132-2.628-38.725-.558-62.644,2.84-32.909,13.442-49.215,26.04-63.636,6.051-6.932,34.484-36.976,88.857-36.976s82.88,29.92,88.931,36.827c12.611,14.421,23.225,30.727,26.04,63.636,2.071,23.919.285,49.525-.558,62.644-.285,4.327,1.017,5.927,4.613,5.927a10.648,10.648,0,0,0,2.48-.335c6.745-1.624,18.4-7.638,30.4-10.242a27.641,27.641,0,0,1,5.964-.67c6.386,0,12.4,2.48,14.88,8.928,3.546,9.374-1.24,17-12.189,24.639-6.609,4.612-30.429,19.343-35.8,24.315-5.568,5.134-4.836,9.1-4.191,14.149.533,4.228,12.511,60.4,87.666,96.718C468.629,373.011,476.119,377.524,462.913,384.877Z"
  })),
  'Snapchat-square': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M384,32H64A64,64,0,0,0,0,96V416a64,64,0,0,0,64,64H384a64,64,0,0,0,64-64V96A64,64,0,0,0,384,32Zm-3.907,319.309-.083.1a32.364,32.364,0,0,1-8.717,6.823,90.26,90.26,0,0,1-20.586,8.2,12.694,12.694,0,0,0-3.852,1.76c-2.158,1.909-2.1,4.64-4.4,8.55a23.137,23.137,0,0,1-6.84,7.471c-6.707,4.632-14.244,4.923-22.23,5.23-7.214.274-15.39.581-24.729,3.669-3.761,1.245-7.753,3.694-12.377,6.533-11.265,6.9-26.68,16.353-52.3,16.353s-40.925-9.4-52.106-16.279c-4.657-2.888-8.675-5.362-12.543-6.64-9.339-3.08-17.516-3.4-24.729-3.67-7.986-.307-15.523-.6-22.231-5.229a23.085,23.085,0,0,1-6.01-6.11c-3.2-4.632-2.855-7.8-5.254-9.895a13.428,13.428,0,0,0-4.1-1.834,89.986,89.986,0,0,1-20.313-8.127,32.905,32.905,0,0,1-8.3-6.284c-6.583-6.757-8.276-14.776-5.686-21.824,3.436-9.338,11.571-12.111,19.4-16.262,14.776-8.027,26.348-18.055,34.433-29.884a68.236,68.236,0,0,0,5.985-10.567c.789-2.158.772-3.329.241-4.416a7.386,7.386,0,0,0-2.208-2.217c-2.532-1.676-5.113-3.353-6.882-4.5-3.27-2.141-5.868-3.818-7.529-4.98-6.267-4.383-10.65-9.04-13.4-14.245a28.4,28.4,0,0,1-1.369-23.584c4.134-10.924,14.469-17.706,26.978-17.706a37.141,37.141,0,0,1,7.845.83c.689.15,1.37.307,2.042.482-.108-7.43.058-15.357.722-23.119,2.358-27.261,11.912-41.589,21.874-52.994a86.836,86.836,0,0,1,22.28-17.931C188.254,100.383,205.312,96,224,96s35.828,4.383,50.944,13.016a87.169,87.169,0,0,1,22.239,17.9c9.961,11.406,19.516,25.709,21.874,52.995a231.194,231.194,0,0,1,.713,23.118c.673-.174,1.362-.332,2.051-.481a37.131,37.131,0,0,1,7.844-.83c12.5,0,22.82,6.782,26.971,17.706a28.37,28.37,0,0,1-1.4,23.559c-2.74,5.2-7.123,9.861-13.39,14.244-1.668,1.187-4.258,2.864-7.529,4.981-1.835,1.187-4.541,2.947-7.164,4.682a6.856,6.856,0,0,0-1.951,2.034c-.506,1.046-.539,2.191.166,4.208a69.015,69.015,0,0,0,6.085,10.792c8.268,12.1,20.188,22.313,35.454,30.407,1.486.772,2.98,1.5,4.441,2.258.722.332,1.569.763,2.491,1.3,4.9,2.723,9.2,6.01,11.455,12.153C387.821,336.915,386.269,344.7,380.093,351.309Zm-16.719-18.461c-50.313-24.314-58.332-61.918-58.689-64.749-.431-3.379-.921-6.035,2.806-9.472,3.594-3.328,19.541-13.19,23.965-16.278,7.33-5.114,10.534-10.219,8.16-16.495-1.66-4.316-5.686-5.976-9.961-5.976a18.5,18.5,0,0,0-3.993.448c-8.035,1.743-15.838,5.769-20.354,6.857a7.1,7.1,0,0,1-1.66.224c-2.408,0-3.279-1.071-3.088-3.968.564-8.783,1.759-25.925.373-41.937-1.884-22.032-8.99-32.948-17.432-42.6-4.051-4.624-23.135-24.654-59.536-24.654S168.53,134.359,164.479,139c-8.434,9.654-15.531,20.57-17.432,42.6-1.386,16.013-.141,33.147.373,41.937.166,2.756-.68,3.968-3.088,3.968a7.1,7.1,0,0,1-1.66-.224c-4.507-1.087-12.31-5.113-20.346-6.856a18.494,18.494,0,0,0-3.993-.449c-4.25,0-8.3,1.636-9.961,5.977-2.374,6.276.847,11.381,8.168,16.494,4.425,3.088,20.371,12.958,23.966,16.279,3.719,3.437,3.237,6.093,2.805,9.471-.356,2.79-8.384,40.394-58.689,64.749-2.946,1.428-7.96,4.45.88,9.331,13.88,7.628,23.111,6.807,30.3,11.43,6.093,3.927,2.5,12.394,6.923,15.449,5.454,3.76,21.583-.266,42.335,6.6,17.433,5.744,28.116,22.015,58.963,22.015s41.788-16.3,58.938-21.973c20.795-6.865,36.89-2.839,42.336-6.6,4.433-3.055.822-11.522,6.923-15.448,7.181-4.624,16.411-3.8,30.3-11.472C371.36,337.355,366.346,334.333,363.374,332.848Z"
  })),
  Telegram: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 496 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
  })),
  'Telegram-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.4183 7.5827 20 12.001 20ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L6.39308 12.3911C5.85317 12.2255 5.84996 11.854 6.51397 11.5871L16.247 7.82754C16.8115 7.59644 17.1325 7.88842 16.9495 8.61641L15.2917 16.4377C15.1763 16.9941 14.8407 17.1266 14.3759 16.8698L11.825 14.9823L10.6361 16.1297C10.5139 16.2476 10.4145 16.3489 10.2273 16.3743C10.04 16.3996 9.88564 16.3442 9.77337 16.0337L8.90378 13.1628L8.89113 13.1708Z"
  })),
  'Tiktok-fill': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
  })),
  'Tiktok-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.0004 2V8.41396C10.5947 8.33909 10.1768 8.3 9.75039 8.3C5.96724 8.3 2.90039 11.3668 2.90039 15.15C2.90039 18.9332 5.96724 22 9.75039 22C13.5335 22 16.6004 18.9332 16.6004 15.15V11.4136C17.6366 11.8539 18.7662 12.1 20.0005 12.1H21.0005V6.5H20.0005C18.0966 6.5 16.6004 4.96259 16.6004 3V2H11.0004ZM13.0004 4H14.688C15.0818 6.22009 16.7673 7.99607 19.0005 8.4091V10.0282C17.9624 9.87602 17.0253 9.48645 16.1567 8.905L14.6004 7.86327V15.15C14.6004 17.8286 12.429 20 9.75039 20C7.07181 20 4.90039 17.8286 4.90039 15.15C4.90039 12.4714 7.07181 10.3 9.75039 10.3C9.83431 10.3 9.91769 10.3021 10.0005 10.3063V11.9095C9.91795 11.9032 9.83454 11.9 9.75039 11.9C7.95547 11.9 6.50039 13.3551 6.50039 15.15C6.50039 16.9449 7.95547 18.4 9.75039 18.4C11.5453 18.4 13.0004 16.9449 13.0004 15.15C13.0004 11.4334 12.9992 7.71665 13.0004 4ZM8.50039 15.15C8.50039 14.4596 9.06003 13.9 9.75039 13.9C10.4407 13.9 11.0004 14.4596 11.0004 15.15C11.0004 15.8404 10.4407 16.4 9.75039 16.4C9.06003 16.4 8.50039 15.8404 8.50039 15.15Z"
  })),
  Qzone: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 97.683 97.683"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M97.578 37.764a2.014 2.014 0 0 0-1.732-1.365l-31.396-2.91-13.633-30.02a2.024 2.024 0 0 0-1.873-1.237c-.82 0-1.561.489-1.871 1.237L33.021 32.831 1.833 36.399A2.015 2.015 0 0 0 .095 37.78a1.97 1.97 0 0 0 .613 2.114l23.047 21.137-5.672 31.939a1.977 1.977 0 0 0 .784 2.062 2.047 2.047 0 0 0 2.235.09l28.05-16.117 27.632 16.326c.688.202 1.558.17 2.214-.285a1.97 1.97 0 0 0 .815-2.025l-4.175-23.645c1.103-.512 4.345-1.941 6.05-3.902-2.78 1.099-3.826 1.389-6.607 1.914v-.006c-18.563 3.566-47.045.541-48.004.494L58.316 45c-10.575-1.941-35.127-2.716-36.642-2.763-.197.032-.232.034-.079-.002l.079.002c1.275-.206 33.333-5.459 51.921-.21l-31.461 22.06s24.257 2.358 32.813 1.367l-.573-4.424 22.83-21.158c.396-.525.625-1.354.374-2.108z"
  }))),
  Quora: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7.1 41.8-5.4 75.6-16.7 100.5z"
  })),
  Behance: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 576 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
  })),
  'Behance-square': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M186.5 293c0 19.3-14 25.4-31.2 25.4h-45.1v-52.9h46c18.6.1 30.3 7.8 30.3 27.5zm-7.7-82.3c0-17.7-13.7-21.9-28.9-21.9h-39.6v44.8H153c15.1 0 25.8-6.6 25.8-22.9zm132.3 23.2c-18.3 0-30.5 11.4-31.7 29.7h62.2c-1.7-18.5-11.3-29.7-30.5-29.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM271.7 185h77.8v-18.9h-77.8V185zm-43 110.3c0-24.1-11.4-44.9-35-51.6 17.2-8.2 26.2-17.7 26.2-37 0-38.2-28.5-47.5-61.4-47.5H68v192h93.1c34.9-.2 67.6-16.9 67.6-55.9zM380 280.5c0-41.1-24.1-75.4-67.6-75.4-42.4 0-71.1 31.8-71.1 73.6 0 43.3 27.3 73 71.1 73 33.2 0 54.7-14.9 65.1-46.8h-33.7c-3.7 11.9-18.6 18.1-30.2 18.1-22.4 0-34.1-13.1-34.1-35.3h100.2c.1-2.3.3-4.8.3-7.2z"
  })),
  Qq: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"
  })),
  'Qq-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.5359 12.5144L16.8402 10.7175C16.8408 10.6968 16.8494 10.3429 16.8494 10.1604C16.8494 7.08792 15.448 4.0003 12.0012 4C8.55459 4.0003 7.15292 7.08792 7.15292 10.1604C7.15292 10.3429 7.16151 10.6968 7.16209 10.7175L6.4667 12.5144C6.27608 13.0285 6.08776 13.564 5.94988 14.0232C5.29262 16.2126 5.50559 17.1186 5.66783 17.139C6.01581 17.1823 7.02221 15.4908 7.02221 15.4908C7.02221 16.4704 7.5095 17.7487 8.56405 18.6719C8.16963 18.7976 7.68635 18.9911 7.37564 19.2284C7.09645 19.442 7.13142 19.6594 7.18158 19.7473C7.40258 20.1329 10.9713 19.9935 12.0017 19.8733C13.0319 19.9935 16.6009 20.1329 16.8216 19.7473C16.872 19.6594 16.9067 19.442 16.6275 19.2284C16.3168 18.9911 15.8333 18.7976 15.4386 18.6716C16.4928 17.7487 16.9801 16.4704 16.9801 15.4908C16.9801 15.4908 17.9868 17.1823 18.3348 17.139C18.4967 17.1186 18.7131 16.2108 18.0524 14.0232C17.9125 13.56 17.7265 13.0285 17.5359 12.5144ZM18.5574 20.7407C18.1843 21.3926 17.7237 21.6334 17.1187 21.7981C16.8792 21.8633 16.621 21.9056 16.325 21.936C15.8844 21.9814 15.3392 22.001 14.712 22C13.786 21.9985 12.693 21.9491 12.0017 21.884C11.3103 21.9491 10.2173 21.9985 9.29129 22C8.66414 22.001 8.11889 21.9814 7.67832 21.936C7.38236 21.9056 7.12409 21.8633 6.88467 21.7981C6.27994 21.6335 5.81954 21.393 5.44496 20.7393C5.15165 20.2258 5.07747 19.6406 5.20612 19.0866C4.61376 18.9546 4.20483 18.6045 3.92733 18.1757C3.77911 17.9466 3.68408 17.7127 3.61845 17.4663C3.53001 17.1344 3.49486 16.7666 3.50184 16.3601C3.51532 15.5749 3.68902 14.5984 4.03435 13.4481C4.17427 12.9821 4.3614 12.4396 4.6015 11.7926L5.15467 10.3632C5.1536 10.287 5.15292 10.2154 5.15292 10.1604C5.15292 5.6047 7.58875 2.00038 12.0013 2C16.4138 2.00038 18.8494 5.60454 18.8494 10.1604C18.8494 10.2154 18.8487 10.2869 18.8477 10.3631L19.401 11.7923L19.4112 11.8191C19.636 12.4254 19.8242 12.9722 19.967 13.445C20.3145 14.5956 20.4889 15.5735 20.5018 16.361C20.5085 16.768 20.4728 17.1365 20.3837 17.4689C20.3178 17.7148 20.2226 17.9483 20.0746 18.1768C19.7976 18.6041 19.3905 18.9532 18.7974 19.0862C18.9266 19.6411 18.8523 20.2274 18.5574 20.7407Z"
  })),
  Digg: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M81.7 172.3H0v174.4h132.7V96h-51v76.3zm0 133.4H50.9v-92.3h30.8v92.3zm297.2-133.4v174.4h81.8v28.5h-81.8V416H512V172.3H378.9zm81.8 133.4h-30.8v-92.3h30.8v92.3zm-235.6 41h82.1v28.5h-82.1V416h133.3V172.3H225.1v174.4zm51.2-133.3h30.8v92.3h-30.8v-92.3zM153.3 96h51.3v51h-51.3V96zm0 76.3h51.3v174.4h-51.3V172.3z"
  })),
  Yelp: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 384 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"
  })),
  Blogger: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1 27.2 0 28.1.1 32.1 2.1 5.8 2.9 8.3 7 8.3 13.6 0 5.9-2.4 10-7.6 13.4-2.8 1.8-4.5 1.9-31.1 2.1-16.4.1-29.5-.2-31.5-.8-10.3-2.9-14.1-17.7-6.6-25.3zm61.4 94.5c-53.9 0-55.8.2-60.2 4.1-3.5 3.1-5.7 9.4-5.1 13.9.7 4.7 4.8 10.1 9.2 12 2.2 1 14.1 1.7 56.3 1.2l47.9-.6 9.2-1.5c9-5.1 10.5-17.4 3.1-24.4-5.3-4.7-5-4.7-60.4-4.7zm223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5-7.2 1.8-9.7 1.9-172.9 1.8-157.8 0-165.9-.1-172-1.8-8.4-2.2-15.6-5.5-22.3-10-5.6-3.8-13.9-11.8-17-16.4-3.8-5.6-8.2-15.3-10-22C.1 423 0 420.3 0 256.3 0 93.2 0 89.7 1.8 82.6 8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3 21.2 4.3 37.9 17.1 47.6 36.4 7.7 15.3 7-1.5 7.3 180.6.2 115.8 0 164.5-.7 170.5zm-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5-1.1-.6-8-1.3-15.5-1.7-12.4-.6-13.8-.8-17.8-3.1-6.2-3.6-7.9-7.6-8-18.3 0-20.4-8.5-39.4-25.3-56.5-12-12.2-25.3-20.5-40.6-25.1-3.6-1.1-11.8-1.5-39.2-1.8-42.9-.5-52.5.4-67.1 6.2-27 10.7-46.3 33.4-53.4 62.4-1.3 5.4-1.6 14.2-1.9 64.3-.4 62.8 0 72.1 4 84.5 9.7 30.7 37.1 53.4 64.6 58.4 9.2 1.7 122.2 2.1 133.7.5 20.1-2.7 35.9-10.8 50.7-25.9 10.7-10.9 17.4-22.8 21.8-38.5 3.2-10.9 2.9-88.4 1.7-93.9z"
  })),
  'Blogger-b': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M446.6 222.7c-1.8-8-6.8-15.4-12.5-18.5-1.8-1-13-2.2-25-2.7-20.1-.9-22.3-1.3-28.7-5-10.1-5.9-12.8-12.3-12.9-29.5-.1-33-13.8-63.7-40.9-91.3-19.3-19.7-40.9-33-65.5-40.5-5.9-1.8-19.1-2.4-63.3-2.9-69.4-.8-84.8.6-108.4 10C45.9 59.5 14.7 96.1 3.3 142.9 1.2 151.7.7 165.8.2 246.8c-.6 101.5.1 116.4 6.4 136.5 15.6 49.6 59.9 86.3 104.4 94.3 14.8 2.7 197.3 3.3 216 .8 32.5-4.4 58-17.5 81.9-41.9 17.3-17.7 28.1-36.8 35.2-62.1 4.9-17.6 4.5-142.8 2.5-151.7zm-322.1-63.6c7.8-7.9 10-8.2 58.8-8.2 43.9 0 45.4.1 51.8 3.4 9.3 4.7 13.4 11.3 13.4 21.9 0 9.5-3.8 16.2-12.3 21.6-4.6 2.9-7.3 3.1-50.3 3.3-26.5.2-47.7-.4-50.8-1.2-16.6-4.7-22.8-28.5-10.6-40.8zm191.8 199.8l-14.9 2.4-77.5.9c-68.1.8-87.3-.4-90.9-2-7.1-3.1-13.8-11.7-14.9-19.4-1.1-7.3 2.6-17.3 8.2-22.4 7.1-6.4 10.2-6.6 97.3-6.7 89.6-.1 89.1-.1 97.6 7.8 12.1 11.3 9.5 31.2-4.9 39.4z"
  })),
  Myspace: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 48 48",
    width: "18",
    height: "18"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#3F51B5",
    d: "M12 8A3 3 0 1 0 12 14 3 3 0 1 0 12 8zM21 7A4 4 0 1 0 21 15 4 4 0 1 0 21 7zM32.5 6A5.5 5.5 0 1 0 32.5 17 5.5 5.5 0 1 0 32.5 6zM41 42V28.5c0-4.694-3.806-8.5-8.5-8.5S24 23.806 24 28.5V42H41z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#3F51B5",
    d: "M27,36V23.5c0-3.037-2.462-5.5-5.5-5.5S16,20.463,16,23.5V36H27z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#3F51B5",
    d: "M17,31v-9c0-2.762-2.239-5-5-5s-5,2.238-5,5v9H17z"
  })),
  Rss: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
  })),
  'Square-rss': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
  })),
  Spotify: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 496 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
  })),
  Vine: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 384 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M384 254.7v52.1c-18.4 4.2-36.9 6.1-52.1 6.1-36.9 77.4-103 143.8-125.1 156.2-14 7.9-27.1 8.4-42.7-.8C137 452 34.2 367.7 0 102.7h74.5C93.2 261.8 139 343.4 189.3 404.5c27.9-27.9 54.8-65.1 75.6-106.9-49.8-25.3-80.1-80.9-80.1-145.6 0-65.6 37.7-115.1 102.2-115.1 114.9 0 106.2 127.9 81.6 181.5 0 0-46.4 9.2-63.5-20.5 3.4-11.3 8.2-30.8 8.2-48.5 0-31.3-11.3-46.6-28.4-46.6-18.2 0-30.8 17.1-30.8 50 .1 79.2 59.4 118.7 129.9 101.9z"
  })),
  Soundcloud: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 640 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"
  })),
  'Soundcloud-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 10C4.55228 10 5 10.4477 5 11V18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18V11C3 10.4477 3.44772 10 4 10ZM7 11C7.55228 11 8 11.4477 8 12V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 18.5523 6 18V12C6 11.4477 6.44772 11 7 11ZM10 7C10.5523 7 11 7.44772 11 8V18C11 18.5523 10.5523 19 10 19C9.44771 19 9 18.5523 9 18V8C9 7.44772 9.44771 7 10 7ZM15 6C18.2384 6 20.8776 8.56557 20.9959 11.7751L20.999 12.0353C22.6956 12.2775 24 13.7364 24 15.5C24 17.3686 22.5357 18.8951 20.692 18.9948L20.5 19H16.999C16.4468 19 15.999 18.5523 15.999 18C15.9989 17.4872 16.3849 17.0645 16.8823 17.0067L16.999 17L20.4461 17.0007L20.584 16.9977C21.3751 16.955 22 16.2975 22 15.5C22 14.7984 21.5142 14.199 20.8512 14.0409L20.7164 14.0152L18.9467 13.7626L18.999 11.976L18.9951 11.8004C18.8943 9.75011 17.2499 8.10567 15.1996 8.0049L15 8C14.7321 8 14.4687 8.02612 14.2123 8.07715L13.999 8.126L13.999 18.0005C13.999 18.5131 13.6132 18.9355 13.1161 18.9933L12.9995 19C12.4475 19 12 18.5525 11.9999 18.0005L11.999 6.80325C12.8818 6.2924 13.9067 6 15 6ZM1 12C1.55228 12 2 12.4477 2 13V17C2 17.5523 1.55228 18 1 18C0.447715 18 0 17.5523 0 17V13C0 12.4477 0.447715 12 1 12Z"
  })),
  Stumbleupon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M502.9 266v69.7c0 62.1-50.3 112.4-112.4 112.4-61.8 0-112.4-49.8-112.4-111.3v-70.2l34.3 16 51.1-15.2V338c0 14.7 12 26.5 26.7 26.5S417 352.7 417 338v-72h85.9zm-224.7-58.2l34.3 16 51.1-15.2V173c0-60.5-51.1-109-112.1-109-60.8 0-112.1 48.2-112.1 108.2v162.4c0 14.9-12 26.7-26.7 26.7S86 349.5 86 334.6V266H0v69.7C0 397.7 50.3 448 112.4 448c61.6 0 112.4-49.5 112.4-110.8V176.9c0-14.7 12-26.7 26.7-26.7s26.7 12 26.7 26.7v30.9z"
  })),
  'Stumbleupon-circle': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 496 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 177.5c-9.8 0-17.8 8-17.8 17.8v106.9c0 40.9-33.9 73.9-74.9 73.9-41.4 0-74.9-33.5-74.9-74.9v-46.5h57.3v45.8c0 10 8 17.8 17.8 17.8s17.8-7.9 17.8-17.8V200.1c0-40 34.2-72.1 74.7-72.1 40.7 0 74.7 32.3 74.7 72.6v23.7l-34.1 10.1-22.9-10.7v-20.6c.1-9.6-7.9-17.6-17.7-17.6zm167.6 123.6c0 41.4-33.5 74.9-74.9 74.9-41.2 0-74.9-33.2-74.9-74.2V263l22.9 10.7 34.1-10.1v47.1c0 9.8 8 17.6 17.8 17.6s17.8-7.9 17.8-17.6v-48h57.3c-.1 45.9-.1 46.4-.1 46.4z"
  })),
  Mastodon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"
  })),
  'Vimeo-v': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"
  })),
  Vimeo: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"
  })),
  Weibo: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"
  })),
  Dribbble: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"
  })),
  'Dribbble-square': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M90.2 228.2c8.9-42.4 37.4-77.7 75.7-95.7 3.6 4.9 28 38.8 50.7 79-64 17-120.3 16.8-126.4 16.7zM314.6 154c-33.6-29.8-79.3-41.1-122.6-30.6 3.8 5.1 28.6 38.9 51 80 48.6-18.3 69.1-45.9 71.6-49.4zM140.1 364c40.5 31.6 93.3 36.7 137.3 18-2-12-10-53.8-29.2-103.6-55.1 18.8-93.8 56.4-108.1 85.6zm98.8-108.2c-3.4-7.8-7.2-15.5-11.1-23.2C159.6 253 93.4 252.2 87.4 252c0 1.4-.1 2.8-.1 4.2 0 35.1 13.3 67.1 35.1 91.4 22.2-37.9 67.1-77.9 116.5-91.8zm34.9 16.3c17.9 49.1 25.1 89.1 26.5 97.4 30.7-20.7 52.5-53.6 58.6-91.6-4.6-1.5-42.3-12.7-85.1-5.8zm-20.3-48.4c4.8 9.8 8.3 17.8 12 26.8 45.5-5.7 90.7 3.4 95.2 4.4-.3-32.3-11.8-61.9-30.9-85.1-2.9 3.9-25.8 33.2-76.3 53.9zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-64 176c0-88.2-71.8-160-160-160S64 167.8 64 256s71.8 160 160 160 160-71.8 160-160z"
  })),
  Github: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 496 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
  })),
  'Github-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.88401 18.6531C5.58404 18.4523 5.32587 18.1972 5.0239 17.8366C4.91473 17.7062 4.47283 17.1521 4.55811 17.258C4.09533 16.6831 3.80296 16.4168 3.50156 16.3087C2.9817 16.1223 2.7114 15.5497 2.89784 15.0298C3.08428 14.51 3.65685 14.2397 4.17672 14.4261C4.92936 14.696 5.43847 15.1609 6.12425 16.0141C6.03025 15.8972 6.46364 16.4408 6.55731 16.5526C6.74784 16.7802 6.88732 16.918 6.99629 16.9909C7.20118 17.128 7.58451 17.1871 8.14709 17.1308C8.17065 16.7487 8.24136 16.378 8.34919 16.0355C5.38097 15.3101 3.70116 13.3949 3.70116 9.63947C3.70116 8.4006 4.0704 7.28368 4.75917 6.34756C4.5415 5.45368 4.57433 4.37259 5.06092 3.15611C5.1725 2.87715 5.40361 2.66314 5.69031 2.57328C5.77242 2.54949 5.81791 2.5389 5.89878 2.52648C6.70167 2.40319 7.83573 2.69681 9.31449 3.62311C10.181 3.41855 11.0885 3.31476 12.0012 3.31476C12.9129 3.31476 13.8196 3.41835 14.6854 3.62253C16.1619 2.68976 17.2986 2.39625 18.1072 2.52627C18.1919 2.53988 18.2645 2.55758 18.3249 2.57741C18.6059 2.66967 18.8316 2.88155 18.9414 3.15611C19.4279 4.37232 19.4608 5.45319 19.2433 6.34695C19.9342 7.28313 20.3012 8.39184 20.3012 9.63947C20.3012 13.3966 18.627 15.3046 15.6588 16.0318C15.7837 16.4467 15.8496 16.9103 15.8496 17.4118C15.8496 18.0763 15.8471 18.7108 15.8424 19.4223C15.8412 19.6124 15.8397 19.8156 15.8375 20.1279C16.2129 20.2107 16.5229 20.5074 16.6031 20.9086C16.7114 21.4502 16.3602 21.977 15.8186 22.0853C14.6794 22.3132 13.8353 21.5535 13.8353 20.5608C13.8353 20.4705 13.836 20.3414 13.8375 20.1142C13.8398 19.8012 13.8412 19.5987 13.8425 19.4092C13.8471 18.7017 13.8496 18.0714 13.8496 17.4118C13.8496 16.7145 13.6664 16.26 13.4237 16.0508C12.7627 15.481 13.0977 14.3971 13.965 14.2996C16.9314 13.9663 18.3012 12.8174 18.3012 9.63947C18.3012 8.68484 17.9893 7.89547 17.3881 7.23534C17.1301 6.95209 17.0567 6.54634 17.199 6.19062C17.3647 5.77639 17.4354 5.2336 17.2941 4.57678L17.2847 4.57944C16.7928 4.71861 16.1744 5.01956 15.4261 5.52826C15.182 5.69413 14.8772 5.74377 14.5932 5.66388C13.7729 5.43319 12.8913 5.31476 12.0012 5.31476C11.111 5.31476 10.2294 5.43319 9.40916 5.66388C9.12662 5.74335 8.82344 5.69468 8.57997 5.53077C7.8274 5.02414 7.2056 4.72355 6.71079 4.58352C6.56735 5.23672 6.63814 5.77758 6.80336 6.19062C6.94565 6.54634 6.87219 6.95209 6.61423 7.23534C6.01715 7.89096 5.70116 8.69352 5.70116 9.63947C5.70116 12.8114 7.07225 13.9681 10.023 14.2996C10.8883 14.3969 11.2246 15.4767 10.5675 16.048C10.3751 16.2153 10.1384 16.7799 10.1384 17.4118V20.5608C10.1384 21.5472 9.30356 22.2866 8.17878 22.0898C7.63476 21.9946 7.27093 21.4764 7.36613 20.9324C7.43827 20.5201 7.75331 20.2114 8.13841 20.1274V19.1379C7.22829 19.1991 6.47656 19.0496 5.88401 18.6531Z"
  })),
  Bitbucket: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z"
  })),
  Dropbox: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 528 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"
  })),
  'Dropbox-line': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.65039 17.2605L12.0422 19.4213L15.434 17.2605L17.2942 18.4454L12.0422 21.7914L6.79021 18.4454L8.65039 17.2605ZM7.77356 8.97982L10.1669 7.42713L7.74124 5.85326L5.28562 7.36964L7.77356 8.97982ZM9.61315 10.1704L12.0045 11.7181L14.3953 10.1707L12.0042 8.61922L9.61315 10.1704ZM13.845 12.9092L16.2689 14.478L18.7187 12.9759L16.2335 11.3634L13.845 12.9092ZM12.0042 6.23516L16.2413 3.48633L22.4656 7.32996L18.073 10.1728L22.4669 13.0237L16.2401 16.8416L12.0045 14.1004L7.76898 16.8416L1.54004 13.0238L5.93528 10.1724L1.54332 7.32996L7.7677 3.48633L12.0042 6.23516ZM13.8415 7.42724L16.2349 8.98015L18.7233 7.36963L16.2677 5.85324L13.8415 7.42724ZM10.164 12.9092L7.77487 11.363L5.2889 12.9758L7.73997 14.478L10.164 12.9092Z"
  })),
  Flickr: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z"
  })),
  'Flickr-fill': (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11 12C11 14.7615 8.76146 17 5.99998 17 3.23849 17 1 14.7615 1 12 1 9.23899 3.23849 7 5.99998 7 8.76146 7 11 9.23899 11 12ZM23 12C23 14.7615 20.7615 17 18 17 15.2385 17 13 14.7615 13 12 13 9.23899 15.2385 7 18 7 20.7615 7 23 9.23899 23 12Z"
  })),
  Foursqueare: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 368 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M323.1 3H49.9C12.4 3 0 31.3 0 49.1v433.8c0 20.3 12.1 27.7 18.2 30.1 6.2 2.5 22.8 4.6 32.9-7.1C180 356.5 182.2 354 182.2 354c3.1-3.4 3.4-3.1 6.8-3.1h83.4c35.1 0 40.6-25.2 44.3-39.7l48.6-243C373.8 25.8 363.1 3 323.1 3zm-16.3 73.8l-11.4 59.7c-1.2 6.5-9.5 13.2-16.9 13.2H172.1c-12 0-20.6 8.3-20.6 20.3v13c0 12 8.6 20.6 20.6 20.6h90.4c8.3 0 16.6 9.2 14.8 18.2-1.8 8.9-10.5 53.8-11.4 58.8-.9 4.9-6.8 13.5-16.9 13.5h-73.5c-13.5 0-17.2 1.8-26.5 12.6 0 0-8.9 11.4-89.5 108.3-.9.9-1.8.6-1.8-.3V75.9c0-7.7 6.8-16.6 16.6-16.6h219c8.2 0 15.6 7.7 13.5 17.5z"
  })),
  Renren: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M214 169.1c0 110.4-61 205.4-147.6 247.4C30 373.2 8 317.7 8 256.6 8 133.9 97.1 32.2 214 12.5v156.6zM255 504c-42.9 0-83.3-11-118.5-30.4C193.7 437.5 239.9 382.9 255 319c15.5 63.9 61.7 118.5 118.8 154.7C338.7 493 298.3 504 255 504zm190.6-87.5C359 374.5 298 279.6 298 169.1V12.5c116.9 19.7 206 121.4 206 244.1 0 61.1-22 116.6-58.4 159.9z"
  })),
  Trello: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8.1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z"
  })),
  Vk: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"
  })),
  Xing: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 384 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/options/select-tag.js":
/*!***********************************!*\
  !*** ./src/options/select-tag.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const SelectedTag = [{
  value: 'h1',
  label: 'H1'
}, {
  value: 'h2',
  label: 'H2'
}, {
  value: 'h3',
  label: 'H3'
}, {
  value: 'h4',
  label: 'H4'
}, {
  value: 'h5',
  label: 'H5'
}, {
  value: 'h6',
  label: 'H6'
}, {
  value: 'span',
  label: 'Span'
}, {
  value: 'div',
  label: 'Div'
}];
/* harmony default export */ __webpack_exports__["default"] = (SelectedTag);

/***/ }),

/***/ "./src/options/selected-style.js":
/*!***************************************!*\
  !*** ./src/options/selected-style.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const SelectStyle = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 1', 'duo-head-block'),
  value: '1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 2', 'duo-head-block'),
  value: '2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 3', 'duo-head-block'),
  value: '3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 4', 'duo-head-block'),
  value: '4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 5', 'duo-head-block'),
  value: '5'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 6', 'duo-head-block'),
  value: '6'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 7', 'duo-head-block'),
  value: '7'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 8', 'duo-head-block'),
  value: '8'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 9', 'duo-head-block'),
  value: '9'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 10', 'duo-head-block'),
  value: '10'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 11', 'duo-head-block'),
  value: '11'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 12', 'duo-head-block'),
  value: '12'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 13', 'duo-head-block'),
  value: '13'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 14', 'duo-head-block'),
  value: '14'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 15', 'duo-head-block'),
  value: '15'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 16', 'duo-head-block'),
  value: '16'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 17', 'duo-head-block'),
  value: '17'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 18', 'duo-head-block'),
  value: '18'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 19', 'duo-head-block'),
  value: '19'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 20', 'duo-head-block'),
  value: '20'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 21', 'duo-head-block'),
  value: '21'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 22', 'duo-head-block'),
  value: '22'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 23', 'duo-head-block'),
  value: '23'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 24', 'duo-head-block'),
  value: '24'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 25', 'duo-head-block'),
  value: '25'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 26', 'duo-head-block'),
  value: '26'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 27', 'duo-head-block'),
  value: '27'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 28', 'duo-head-block'),
  value: '28'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 29', 'duo-head-block'),
  value: '29'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 30', 'duo-head-block'),
  value: '30'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 31', 'duo-head-block'),
  value: '31'
}];
/* harmony default export */ __webpack_exports__["default"] = (SelectStyle);

/***/ }),

/***/ "./src/blocks/duo-head/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/duo-head/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/duo-head/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/duo-head/style.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/alignment/style.scss":
/*!*******************************************!*\
  !*** ./src/controls/alignment/style.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/background/index.scss":
/*!********************************************!*\
  !*** ./src/controls/background/index.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/border-control/style.scss":
/*!************************************************!*\
  !*** ./src/controls/border-control/style.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/box-shadow-control/style.scss":
/*!****************************************************!*\
  !*** ./src/controls/box-shadow-control/style.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/color-control/style.scss":
/*!***********************************************!*\
  !*** ./src/controls/color-control/style.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/dimension-control/style.scss":
/*!***************************************************!*\
  !*** ./src/controls/dimension-control/style.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/iconpicker/style.scss":
/*!********************************************!*\
  !*** ./src/controls/iconpicker/style.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/res-rangle-control/style.scss":
/*!****************************************************!*\
  !*** ./src/controls/res-rangle-control/style.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/tab-panel/style.scss":
/*!*******************************************!*\
  !*** ./src/controls/tab-panel/style.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/typography/style.scss":
/*!********************************************!*\
  !*** ./src/controls/typography/style.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/assets/img/bwd-placeholder.jpg":
/*!*************************************************!*\
  !*** ./includes/assets/img/bwd-placeholder.jpg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bwd-placeholder.46d9780a.jpg";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/duo-head/block.json":
/*!****************************************!*\
  !*** ./src/blocks/duo-head/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"bwddhb/duo-head","version":"1.0.0","title":"Duo Head","category":"bwddhb-duo-head","description":"Dual heading plugin with 30+ types of dual heading also custom text with masking effects.","example":[{"attributes":{"style":"1"}}],"supports":{"html":true,"anchor":true},"textdomain":"duo-head-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/duo-head/index": 0,
/******/ 			"blocks/duo-head/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbwd_duo_head"] = self["webpackChunkbwd_duo_head"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/duo-head/style-index"], function() { return __webpack_require__("./src/blocks/duo-head/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map