
/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
const { Fragment, useEffect } = wp.element;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';
import './style.scss';
import * as Constants from './constants';
import { __ } from '@wordpress/i18n';
import icons from '../../options/icons';
import placeholderImageUrl from '../../../includes/assets/img/bwd-placeholder.jpg';

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
	WRAPPER_BORDER_RADIUS_LEFT,
} = Constants;

// Edit Function
export default function Edit({ attributes, setAttributes, clientId }) {
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
		bgSize,
	} = attributes;

	// Wrapper Border Style
	const wrapperBorderStyle =
		wrapperBorder.style !== 'none'
			? `${wrapperBorder.width}px ${wrapperBorder.style} ${wrapperBorder.color}`
			: '';
	const wrapperBorderBlock =
		wrapperBorder.style !== 'none'
			? `
			.${uniqueId} {
				border: ${wrapperBorderStyle};
			}
			`
			: '';
	// Wrapper Box Shadow
	const wrapperShadowStyles = {
		'box-shadow':
			boxShadowWrapper.shadowType !== 'none'
				? `${boxShadowWrapper.offsetX}px ${
						boxShadowWrapper.offsetY
				  }px ${boxShadowWrapper.blurRadius || 10}px ${
						boxShadowWrapper.spreadRadius || 0
				  }px ${boxShadowWrapper.color} ${boxShadowWrapper.shadowType}`
				: '',
	};
	const wrapperShadow =
		boxShadowWrapper.shadowType !== 'none'
			? `
			.${uniqueId} {
				box-shadow: ${wrapperShadowStyles['box-shadow']};
			}
			`
			: '';

	// Left Typography
	const typographyStyles = {
		'font-family': typography.fontFamily,
		'font-weight': typography.fontWeight,
		'font-style': typography.fontStyle,
		'text-transform': typography.textTransform,
		'line-height': typography.lineHeight,
		'letter-spacing': typography.letterSpacing,
		'word-spacing': typography.wordSpacing,
	};
	const addPxIfNeeded = (value) => {
		if (typeof value === 'number') {
			return `${value}px`;
		}
		return value;
	};
	typographyStyles['letter-spacing'] = addPxIfNeeded(
		typographyStyles['letter-spacing']
	);
	typographyStyles['word-spacing'] = addPxIfNeeded(
		typographyStyles['word-spacing']
	);

	const mergedTypographyStyles = {
		...typographyStyles,
	};
	const cssStyles = Object.keys(mergedTypographyStyles)
		.filter(
			(property) =>
				mergedTypographyStyles[property] !== undefined &&
				mergedTypographyStyles[property] !== ''
		)
		.map((property) => `${property}: ${mergedTypographyStyles[property]};`)
		.join(' ');
	const nameBlock =
		typography.fontFamily ||
		typography.fontWeight ||
		typography.fontStyle ||
		typography.textTransform ||
		typography.lineHeight ||
		typography.letterSpacing ||
		typography.wordSpacing
			? `
		.${uniqueId} .bwddh-first-hedi {
			${cssStyles}
		}
  			`
			: '';

	// unique id
	useEffect(() => {
		setAttributes({
			uniqueId: `bwddhb-duo-head-${clientId.slice(0, 8)}`,
		});
	}, [clientId]);

	// function to convert object to css
	const convertToCss = (obj) => {
		let cssResult;
		Object.keys(obj).reduce((cssString, key) => {
			// change key to css property
			const cssProperty = key.replace(
				/[A-Z]/g,
				(match) => `-${match.toLowerCase()}`
			);
			cssResult = `${cssString}${cssProperty}:${obj[key]};`;
			return cssResult;
		}, '');
		return cssResult;
	};

	// Custom Container Width
	const deskContainerWidth = attributes[`${CUSTOM_CONTAINER_WIDTH}DeskRange`];
	const tabContainerWidth = attributes[`${CUSTOM_CONTAINER_WIDTH}TabRange`];
	const mobContainerWidth = attributes[`${CUSTOM_CONTAINER_WIDTH}MobRange`];
	const containerWidthUnit = attributes[`${CUSTOM_CONTAINER_WIDTH}Unit`];

	// Left Font Size
	const deskLeftFont = attributes[`${LEFT_FONT_SIZE}DeskRange`];
	const tabLeftFont = attributes[`${LEFT_FONT_SIZE}TabRange`];
	const mobLeftFont = attributes[`${LEFT_FONT_SIZE}MobRange`];
	const nameFontUnit = attributes[`${LEFT_FONT_SIZE}Unit`];
	// Right Font Size
	const deskRightFont = attributes[`${RIGHT_FONT_SIZE}DeskRange`];
	const tabRightFont = attributes[`${RIGHT_FONT_SIZE}TabRange`];
	const mobRightFont = attributes[`${RIGHT_FONT_SIZE}MobRange`];
	const rightFontUnit = attributes[`${RIGHT_FONT_SIZE}Unit`];
	// Left Margin Top
	const deskGapMarginLR = attributes[`${GAP_MARGIN_LR}DeskRange`];
	const tabGapMarginLR = attributes[`${GAP_MARGIN_LR}TabRange`];
	const mobGapMarginLR = attributes[`${GAP_MARGIN_LR}MobRange`];
	const gapMarginLrUnit = attributes[`${GAP_MARGIN_LR}Unit`];
	// Wrapper Padding Top
	const deskWrapperPaddingTop = attributes[`${WRAPPER_PADDING_TOP}DeskRange`];
	const tabWrapperPaddingTop = attributes[`${WRAPPER_PADDING_TOP}TabRange`];
	const mobWrapperPaddingTop = attributes[`${WRAPPER_PADDING_TOP}MobRange`];
	const wrapperPaddingTopUnit = attributes[`${WRAPPER_PADDING_TOP}Unit`];
	// Wrapper Padding Bottom
	const deskWrapperPaddingBottom =
		attributes[`${WRAPPER_PADDING_BOTTOM}DeskRange`];
	const tabWrapperPaddingBottom =
		attributes[`${WRAPPER_PADDING_BOTTOM}TabRange`];
	const mobWrapperPaddingBottom =
		attributes[`${WRAPPER_PADDING_BOTTOM}MobRange`];
	const wrapperPaddingBottomUnit =
		attributes[`${WRAPPER_PADDING_BOTTOM}Unit`];
	// Wrapper Padding Left
	const deskWrapperPaddingLeft =
		attributes[`${WRAPPER_PADDING_LEFT}DeskRange`];
	const tabWrapperPaddingLeft = attributes[`${WRAPPER_PADDING_LEFT}TabRange`];
	const mobWrapperPaddingLeft = attributes[`${WRAPPER_PADDING_LEFT}MobRange`];
	const wrapperPaddingLeftUnit = attributes[`${WRAPPER_PADDING_LEFT}Unit`];
	// Wrapper Padding Right
	const deskWrapperPaddingRight =
		attributes[`${WRAPPER_PADDING_RIGHT}DeskRange`];
	const tabWrapperPaddingRight =
		attributes[`${WRAPPER_PADDING_RIGHT}TabRange`];
	const mobWrapperPaddingRight =
		attributes[`${WRAPPER_PADDING_RIGHT}MobRange`];
	const wrapperPaddingRightUnit = attributes[`${WRAPPER_PADDING_RIGHT}Unit`];
	// Wrapper Border Radius Top
	const deskWrapperBorderRadiusTop =
		attributes[`${WRAPPER_BORDER_RADIUS_TOP}DeskRange`];
	const tabWrapperBorderRadiusTop =
		attributes[`${WRAPPER_BORDER_RADIUS_TOP}TabRange`];
	const mobWrapperBorderRadiusTop =
		attributes[`${WRAPPER_BORDER_RADIUS_TOP}MobRange`];
	const wrapperBorderRadiusTopUnit =
		attributes[`${WRAPPER_BORDER_RADIUS_TOP}Unit`];
	// Wrapper Border Radius Right
	const deskWrapperBorderRadiusRight =
		attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}DeskRange`];
	const tabWrapperBorderRadiusRight =
		attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}TabRange`];
	const mobWrapperBorderRadiusRight =
		attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}MobRange`];
	const wrapperBorderRadiusRightUnit =
		attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}Unit`];
	// Wrapper Border Radius Bottom
	const deskWrapperBorderRadiusBottom =
		attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}DeskRange`];
	const tabWrapperBorderRadiusBottom =
		attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}TabRange`];
	const mobWrapperBorderRadiusBottom =
		attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}MobRange`];
	const wrapperBorderRadiusBottomUnit =
		attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}Unit`];
	// Wrapper Border Radius Left
	const deskWrapperBorderRadiusLeft =
		attributes[`${WRAPPER_BORDER_RADIUS_LEFT}DeskRange`];
	const tabWrapperBorderRadiusLeft =
		attributes[`${WRAPPER_BORDER_RADIUS_LEFT}TabRange`];
	const mobWrapperBorderRadiusLeft =
		attributes[`${WRAPPER_BORDER_RADIUS_LEFT}MobRange`];
	const wrapperBorderRadiusLeftUnit =
		attributes[`${WRAPPER_BORDER_RADIUS_LEFT}Unit`];
	// Wrapper Margin Top
	const deskWrapperMarginTop = attributes[`${WRAPPER_MARGIN_TOP}DeskRange`];
	const tabWrapperMarginTop = attributes[`${WRAPPER_MARGIN_TOP}TabRange`];
	const mobWrapperMarginTop = attributes[`${WRAPPER_MARGIN_TOP}MobRange`];
	const wrapperMarginTopUnit = attributes[`${WRAPPER_MARGIN_TOP}Unit`];
	// Wrapper Margin Right
	const deskWrapperMarginRight =
		attributes[`${WRAPPER_MARGIN_RIGHT}DeskRange`];
	const tabWrapperMarginRight = attributes[`${WRAPPER_MARGIN_RIGHT}TabRange`];
	const mobWrapperMarginRight = attributes[`${WRAPPER_MARGIN_RIGHT}MobRange`];
	const wrapperMarginRightUnit = attributes[`${WRAPPER_MARGIN_RIGHT}Unit`];
	// Wrapper Margin Bottom
	const deskWrapperMarginBottom =
		attributes[`${WRAPPER_MARGIN_BOTTOM}DeskRange`];
	const tabWrapperMarginBottom =
		attributes[`${WRAPPER_MARGIN_BOTTOM}TabRange`];
	const mobWrapperMarginBottom =
		attributes[`${WRAPPER_MARGIN_BOTTOM}MobRange`];
	const wrapperMarginBottomUnit = attributes[`${WRAPPER_MARGIN_BOTTOM}Unit`];
	// Wrapper Margin Left
	const deskWrapperMarginLeft = attributes[`${WRAPPER_MARGIN_LEFT}DeskRange`];
	const tabWrapperMarginLeft = attributes[`${WRAPPER_MARGIN_LEFT}TabRange`];
	const mobWrapperMarginLeft = attributes[`${WRAPPER_MARGIN_LEFT}MobRange`];
	const wrapperMarginLeftUnit = attributes[`${WRAPPER_MARGIN_LEFT}Unit`];

	// Wrapper Style
	const wrapperDeskStyles = {
		...(deskWrapperPaddingTop !== undefined &&
			deskWrapperPaddingTop !== '' && {
				paddingTop: `${deskWrapperPaddingTop}${wrapperPaddingTopUnit}`,
			}),
		...(deskWrapperPaddingBottom !== undefined &&
			deskWrapperPaddingBottom !== '' && {
				paddingBottom: `${deskWrapperPaddingBottom}${wrapperPaddingBottomUnit}`,
			}),
		...(deskWrapperPaddingLeft !== undefined &&
			deskWrapperPaddingLeft !== '' && {
				paddingLeft: `${deskWrapperPaddingLeft}${wrapperPaddingLeftUnit}`,
			}),
		...(deskWrapperPaddingRight !== undefined &&
			deskWrapperPaddingRight !== '' && {
				paddingRight: `${deskWrapperPaddingRight}${wrapperPaddingRightUnit}`,
			}),
		...(deskWrapperMarginTop !== undefined &&
			deskWrapperMarginTop !== '' && {
				marginTop: `${deskWrapperMarginTop}${wrapperMarginTopUnit}`,
			}),
			...(deskWrapperMarginRight !== undefined &&
				deskWrapperMarginRight !== '' && {
					marginRight: `${deskWrapperMarginRight}${wrapperMarginRightUnit}`,
				}),
		...(deskWrapperMarginBottom !== undefined &&
			deskWrapperMarginBottom !== '' && {
				marginBottom: `${deskWrapperMarginBottom}${wrapperMarginBottomUnit}`,
			}),
		...(deskWrapperMarginLeft !== undefined &&
			deskWrapperMarginLeft !== '' && {
				marginLeft: `${deskWrapperMarginLeft}${wrapperMarginLeftUnit}`,
			}),
		...(deskWrapperBorderRadiusTop !== undefined &&
			deskWrapperBorderRadiusTop !== '' && {
				borderTopLeftRadius: `${deskWrapperBorderRadiusTop}${wrapperBorderRadiusTopUnit}`,
			}),
		...(deskWrapperBorderRadiusRight !== undefined &&
			deskWrapperBorderRadiusRight !== '' && {
				borderTopRightRadius: `${deskWrapperBorderRadiusRight}${wrapperBorderRadiusRightUnit}`,
			}),
		...(deskWrapperBorderRadiusBottom !== undefined &&
			deskWrapperBorderRadiusBottom !== '' && {
				borderBottomRightRadius: `${deskWrapperBorderRadiusBottom}${wrapperBorderRadiusBottomUnit}`,
			}),
		...(deskWrapperBorderRadiusLeft !== undefined &&
			deskWrapperBorderRadiusLeft !== '' && {
				borderBottomLeftRadius: `${deskWrapperBorderRadiusLeft}${wrapperBorderRadiusLeftUnit}`,
			}),
		...(wrapperBgColor !== undefined &&
			wrapperBgColor !== '' && {
				background: `${wrapperBgColor}`,
			}),
		...(wrapperGradientBg !== undefined &&
			wrapperGradientBg !== '' && {
				background: `${wrapperGradientBg}`,
			}),
		...(bgPosition !== undefined &&
			bgPosition !== '' && {
				backgroundPosition: `${bgPosition}`,
			}),
		...(bgAttachment !== undefined &&
			bgAttachment !== '' && {
				backgroundAttachment: `${bgAttachment}`,
			}),
		...(bgRepeat !== undefined &&
			bgRepeat !== '' && {
				backgroundRepeat: `${bgRepeat}`,
			}),
		...(bgSize !== undefined &&
			bgSize !== '' && {
				backgroundSize: `${bgSize}`,
			}),
	};
	const wrapperTabStyles = {
		...(tabWrapperPaddingTop !== undefined &&
			tabWrapperPaddingTop !== '' && {
				paddingTop: `${tabWrapperPaddingTop}${wrapperPaddingTopUnit}`,
			}),
		...(tabWrapperPaddingBottom !== undefined &&
			tabWrapperPaddingBottom !== '' && {
				paddingBottom: `${tabWrapperPaddingBottom}${wrapperPaddingBottomUnit}`,
			}),
		...(tabWrapperPaddingLeft !== undefined &&
			tabWrapperPaddingLeft !== '' && {
				paddingLeft: `${tabWrapperPaddingLeft}${wrapperPaddingLeftUnit}`,
			}),
		...(tabWrapperPaddingRight !== undefined &&
			tabWrapperPaddingRight !== '' && {
				paddingRight: `${tabWrapperPaddingRight}${wrapperPaddingRightUnit}`,
			}),
		...(tabWrapperMarginTop !== undefined &&
			tabWrapperMarginTop !== '' && {
				marginTop: `${tabWrapperMarginTop}${wrapperMarginTopUnit}`,
			}),
		...(tabWrapperMarginBottom !== undefined &&
			tabWrapperMarginBottom !== '' && {
				marginBottom: `${tabWrapperMarginBottom}${wrapperMarginBottomUnit}`,
			}),
		...(tabWrapperMarginLeft !== undefined &&
			tabWrapperMarginLeft !== '' && {
				marginLeft: `${tabWrapperMarginLeft}${wrapperMarginLeftUnit}`,
			}),
		...(tabWrapperMarginRight !== undefined &&
			tabWrapperMarginRight !== '' && {
				marginRight: `${tabWrapperMarginRight}${wrapperMarginRightUnit}`,
			}),
		...(tabWrapperBorderRadiusTop !== undefined &&
			tabWrapperBorderRadiusTop !== '' && {
				borderTopLeftRadius: `${tabWrapperBorderRadiusTop}${wrapperBorderRadiusTopUnit}`,
			}),
		...(tabWrapperBorderRadiusRight !== undefined &&
			tabWrapperBorderRadiusRight !== '' && {
				borderTopRightRadius: `${tabWrapperBorderRadiusRight}${wrapperBorderRadiusRightUnit}`,
			}),
		...(tabWrapperBorderRadiusBottom !== undefined &&
			tabWrapperBorderRadiusBottom !== '' && {
				borderBottomRightRadius: `${tabWrapperBorderRadiusBottom}${wrapperBorderRadiusBottomUnit}`,
			}),
		...(tabWrapperBorderRadiusLeft !== undefined &&
			tabWrapperBorderRadiusLeft !== '' && {
				borderBottomLeftRadius: `${tabWrapperBorderRadiusLeft}${wrapperBorderRadiusLeftUnit}`,
			}),
	};
	const wrapperMobStyles = {
		...(mobWrapperPaddingTop !== undefined &&
			mobWrapperPaddingTop !== '' && {
				paddingTop: `${mobWrapperPaddingTop}${wrapperPaddingTopUnit}`,
			}),
		...(mobWrapperPaddingBottom !== undefined &&
			mobWrapperPaddingBottom !== '' && {
				paddingBottom: `${mobWrapperPaddingBottom}${wrapperPaddingBottomUnit}`,
			}),
		...(mobWrapperPaddingLeft !== undefined &&
			mobWrapperPaddingLeft !== '' && {
				paddingLeft: `${mobWrapperPaddingLeft}${wrapperPaddingLeftUnit}`,
			}),
		...(mobWrapperPaddingRight !== undefined &&
			mobWrapperPaddingRight !== '' && {
				paddingRight: `${mobWrapperPaddingRight}${wrapperPaddingRightUnit}`,
			}),
		...(mobWrapperMarginTop !== undefined &&
			mobWrapperMarginTop !== '' && {
				marginTop: `${mobWrapperMarginTop}${wrapperMarginTopUnit}`,
			}),
		...(mobWrapperMarginBottom !== undefined &&
			mobWrapperMarginBottom !== '' && {
				marginBottom: `${mobWrapperMarginBottom}${wrapperMarginBottomUnit}`,
			}),
		...(mobWrapperMarginLeft !== undefined &&
			mobWrapperMarginLeft !== '' && {
				marginLeft: `${mobWrapperMarginLeft}${wrapperMarginLeftUnit}`,
			}),
		...(mobWrapperMarginRight !== undefined &&
			mobWrapperMarginRight !== '' && {
				marginRight: `${mobWrapperMarginRight}${wrapperMarginRightUnit}`,
			}),
		...(mobWrapperBorderRadiusTop !== undefined &&
			mobWrapperBorderRadiusTop !== '' && {
				borderTopLeftRadius: `${mobWrapperBorderRadiusTop}${wrapperBorderRadiusTopUnit}`,
			}),
		...(mobWrapperBorderRadiusRight !== undefined &&
			mobWrapperBorderRadiusRight !== '' && {
				borderTopRightRadius: `${mobWrapperBorderRadiusRight}${wrapperBorderRadiusRightUnit}`,
			}),
		...(mobWrapperBorderRadiusBottom !== undefined &&
			mobWrapperBorderRadiusBottom !== '' && {
				borderBottomRightRadius: `${mobWrapperBorderRadiusBottom}${wrapperBorderRadiusBottomUnit}`,
			}),
		...(mobWrapperBorderRadiusLeft !== undefined &&
			mobWrapperBorderRadiusLeft !== '' && {
				borderBottomLeftRadius: `${mobWrapperBorderRadiusLeft}${wrapperBorderRadiusLeftUnit}`,
			}),
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

		${
			deskContainerWidth !== undefined && deskContainerWidth !== ''
				? `.${uniqueId}.custom-width {
						max-width: ${deskContainerWidth}${containerWidthUnit}
					}`
				: ' '
		}
		${
			Object.keys(wrapperDeskStyles).length > 0
				? `.${uniqueId} { ${convertToCss(
						wrapperDeskStyles
				  )}}`
				: ' '
		}
		.${uniqueId} .bdt-image-wrap,
		.${uniqueId} .bdt-info-wrap,
		.${uniqueId} .wp-block-bdt-duo-head-item .bdt-hover-content .bdt-social-share{
			text-align: ${textAlign};
			justify-content: ${textAlign};
		}
		${
			deskLeftFont !== undefined && deskLeftFont !== ''
				? `.${uniqueId} .bwddh-first-hedi {
					font-size: ${deskLeftFont}${nameFontUnit};
				}`
				: ' '
		}		
		${
			deskRightFont !== undefined && deskRightFont !== ''
				? `.${uniqueId} .bwddh-sec-hedi {
					font-size: ${deskRightFont}${rightFontUnit};
				}`
				: ' '
		}		
		 ${nameBlock}
	
		
		
		${
			leftColor !== undefined && leftColor !== ''
				? `.${uniqueId} .bwddh-first-hedi {
				color: ${leftColor};
			}`
				: ' '
		}
		${
			rightColor !== undefined && rightColor !== ''
				? `.${uniqueId} .bwddh-sec-hedi {
				color: ${rightColor};
			}`
				: ' '
		}
		${responsiveDesktopCSS}
		${
			leftHoverColor !== undefined && leftHoverColor !== ''
				? `.${uniqueId} .bwddh-first-hedi:hover {
				color: ${leftHoverColor};
			}`
				: ' '
		}
		${
			rightHoverColor !== undefined && rightHoverColor !== ''
				? `.${uniqueId} .bwddh-sec-hedi:hover {
				color: ${rightHoverColor};
			}`
				: ' '
		}
		${
			leftAlign !== undefined && leftAlign !== ''
				? `.${uniqueId} {
				text-align: ${leftAlign};
			}`
				: ' '
		}
		${
			rightAlign !== undefined && rightAlign !== ''
				? `.${uniqueId} {
				text-align: ${rightAlign};
			}`
				: ' '
		}
		${
			deskGapMarginLR !== undefined && deskGapMarginLR !== ''
				? `.${uniqueId} .bwddh-first-hedi {
				margin-right: ${deskGapMarginLR}${gapMarginLrUnit};
			} .${uniqueId} .bwddh-sec-hedi {
				margin-left: ${deskGapMarginLR}${gapMarginLrUnit};
			}`
				: ' '
		}
		
		${wrapperBorderBlock}
		${wrapperShadow}
		${
			mainWrapperBgColor !== undefined && mainWrapperBgColor !== ''
				? `.${uniqueId} {
				background: ${mainWrapperBgColor};
			}`
				: ' '
		}
		${
			zIndex !== undefined && zIndex !== ''
				? `.${uniqueId} {
				z-index: ${zIndex};
			}`
				: ' '
		}
		
    
		${customCSS}
		
	`;

	const tabStyles = `
		${
			tabContainerWidth !== undefined && tabContainerWidth !== ''
				? `.${uniqueId} {
						max-width: ${tabContainerWidth}${containerWidthUnit}
					}`
				: ' '
		}
		${responsiveTabCSS}
		${
			Object.keys(wrapperTabStyles).length > 0
				? `.${uniqueId} { ${convertToCss(
						wrapperTabStyles
				  )}}`
				: ' '
		}
		${
			tabLeftFont !== undefined && tabLeftFont !== ''
				? `.${uniqueId} .bwddh-first-hedi {
					font-size: ${tabLeftFont}${nameFontUnit};
				}`
				: ' '
		}
		${
			tabRightFont !== undefined && tabRightFont !== ''
				? `.${uniqueId} .bwddh-sec-hedi {
					font-size: ${tabRightFont}${rightFontUnit};
				}`
				: ' '
		}
		${
			tabGapMarginLR !== undefined && tabGapMarginLR !== ''
				? `.${uniqueId} .bwddh-first-hedi {
				margin-right: ${tabGapMarginLR}${gapMarginLrUnit};
			} .${uniqueId} .bwddh-sec-hedi {
				margin-left: ${tabGapMarginLR}${gapMarginLrUnit};
			}`
				: ' '
		}
	`;
	const mobStyles = `
		${
			mobContainerWidth !== undefined && mobContainerWidth !== ''
				? `.${uniqueId}.custom-width {
						max-width: ${mobContainerWidth}${containerWidthUnit}
					}`
				: ' '
		}
		${responsiveMobileCSS}
		${
			Object.keys(wrapperMobStyles).length > 0
				? `.${uniqueId} {${convertToCss(
						wrapperMobStyles
				  )}}`
				: ' '
		}
		${
			mobLeftFont !== undefined && mobLeftFont !== ''
				? `.${uniqueId} .bwddh-first-hedi {
					font-size: ${mobLeftFont}${nameFontUnit};
				}`
				: ' '
		}
		${
			mobRightFont !== undefined && mobRightFont !== ''
				? `.${uniqueId} .bwddh-sec-hedi {
					font-size: ${mobRightFont}${rightFontUnit};
				}`
				: ' '
		}
		${
			mobGapMarginLR !== undefined && mobGapMarginLR !== ''
				? `.${uniqueId} .bwddh-first-hedi {
				margin-right: ${mobGapMarginLR}${gapMarginLrUnit};
			} .${uniqueId} .bwddh-sec-hedi {
				margin-left: ${mobGapMarginLR}${gapMarginLrUnit};
			}`
				: ' '
		}
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
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: `bwddh-heading bwddh-dual-hedi-${style} ${uniqueId} ${containerWidth}`,
				})}
			>
				{enaLink ? (
					<a href={textUrl} target={newTab ? '_blank' : ''} rel="noopener">
						<RichText className={`bwddh-first-hedi bwddh-heddi-${style}`} value={leftText} onChange={(newText) => setAttributes({ leftText: newText })} />
						<RichText className={`bwddh-sec-hedi bwddh-cor-hedi-${style}`} value={rightText} onChange={(newText) => setAttributes({ rightText: newText })} />
					</a>
				) : (
					<div>
						<RichText className={`bwddh-first-hedi bwddh-heddi-${style}`} value={leftText} onChange={(newText) => setAttributes({ leftText: newText })} />
						<RichText className={`bwddh-sec-hedi bwddh-cor-hedi-${style}`} value={rightText} onChange={(newText) => setAttributes({ rightText: newText })} />
					</div>
				)}
			</div>
		</Fragment>
	);
}
