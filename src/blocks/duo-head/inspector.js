/* eslint-disable @wordpress/no-unsafe-wp-apis */
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	CardDivider,
	TextControl,
	Button,
	ToggleControl,
	Dashicon,
	RangeControl,
	TextareaControl,
	GradientPicker,
	__experimentalElevation as Elevation,
} from '@wordpress/components';
const { Fragment, useState, useEffect } = wp.element;
const { useDispatch } = wp.data;

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

import './editor.scss';
import aligns from '../../options/align';
import SelectedTag from '../../options/select-tag';
import SelectStyle from '../../options/selected-style';
import placeholderImageUrl from '../../../includes/assets/img/bwd-placeholder.jpg';

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
} = Controls;
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
	WRAPPER_BORDER_RADIUS_LEFT,
} = Constants;

import objAttributes from './attributes'

const Inspector = ({ attributes, setAttributes }) => {
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
		wrapperGradientBg,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	    const { editPost } = useDispatch('core/editor');

		const applyCustomCSS = (css) => {
			const styleElement = document.getElementById(
				'custom-css-block-styles'
			);

			if (styleElement) {
				styleElement.innerHTML = css;
			} else {
				const newStyleElement = document.createElement('style');
				newStyleElement.id = 'custom-css-block-styles';
				newStyleElement.innerHTML = css;
				document.head.appendChild(newStyleElement);
			}
		};

		const handleInputChange = (value) => {
			setAttributes({ customCSS: value });
			editPost({ meta: { 'custom-css': value } }); // Save to post meta
		};

		useEffect(() => {
			if (customCSS) {
				applyCustomCSS(customCSS);
			}
		}, [customCSS]);

		const marginControl = [
			WRAPPER_MARGIN_TOP,
			WRAPPER_MARGIN_RIGHT,
			WRAPPER_MARGIN_BOTTOM,
			WRAPPER_MARGIN_LEFT,
		];
		const paddingControl = [
			WRAPPER_PADDING_TOP,
			WRAPPER_PADDING_RIGHT,
			WRAPPER_PADDING_BOTTOM,
			WRAPPER_PADDING_LEFT,
		];
		const wrapperBorderRadius = [
			WRAPPER_BORDER_RADIUS_TOP,
			WRAPPER_BORDER_RADIUS_RIGHT,
			WRAPPER_BORDER_RADIUS_BOTTOM,
			WRAPPER_BORDER_RADIUS_LEFT,
		];

	// Define a function to check if rightText is empty
	const isRightTextEmpty = () => {
		return !rightText || rightText.trim() === '';
	};
	const isLeftTextEmpty = () => {
		return !leftText || leftText.trim() === '';
	};

	return (
		<InspectorControls>
			<Fragment>
				<TabPanelControl
					tabs={[
						{
							name: 'bwddhb_team_normal',
							title: 'Content',
							className: 'bwd-tab bwd-general',
							icon: 'edit',
							components: (
								<Fragment>
									<PanelBody
										title={__(
											'Settings',
											'duo-head-block'
										)}
										initialOpen={true}
									>
										<SelectControl
											label={__(
												'Select Style',
												'duo-head-block'
											)}
											value={style}
											options={SelectStyle}
											onChange={(size) =>
												setAttributes({ style: size })
											}
										/>
										<TextControl
											label={__(
												'Left Text',
												'duo-head-block'
											)}
											value={ leftText }
											onChange={ ( value ) => setAttributes( { leftText:value } ) }
										/>
										<TextControl
											label={__(
												'Right Text',
												'duo-head-block'
											)}
											value={ rightText }
											onChange={ ( value ) => setAttributes( { rightText:value } ) }
										/>
										<ToggleControl
											label={__(
												'Enable Link',
												'duo-head-block'
											)}
											checked={
												enaLink
											}
											onChange={ ( Nvalue) => setAttributes( { enaLink: Nvalue } ) }
										/>
										{enaLink && (
											<>
												<TextControl
													label={__(
														'Link',
														'duo-head-block'
													)}
													value={ textUrl }
													onChange={ ( value) => setAttributes( { textUrl: value } ) }
												/>
												<ToggleControl
													label={__(
														'Open in New Tab',
														'duo-head-block'
													)}
													checked={
														newTab
													}
													onChange={ ( Nvalue) => setAttributes( { newTab: Nvalue } ) }
												/>
											</>
										)}
										{/* i want when enaLink is true then the textUrl and newTab control will show */}

									</PanelBody>
								</Fragment>
							),
						},
						{
							name: 'bwddhb_team_hover',
							title: 'Style',
							className: 'bwd-tab bwd-style',
							icon: 'editor-code',
							components: (
								<Fragment>
								{!isLeftTextEmpty() && (
									<PanelBody
										title={__('Left Heading', 'duo-head-block')}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Color',
												'duo-head-block'
											)}
											color={leftColor}
											colorName="leftColor"
											onChange={setAttributes}
										/>
										<ColorControl
											label={__(
												'Hover Color',
												'duo-head-block'
											)}
											color={leftHoverColor}
											colorName="leftHoverColor"
											onChange={setAttributes}
										/>
										<ResRangleControl
											label={__(
												'Font Size',
												'duo-head-block'
											)}
											controlName={LEFT_FONT_SIZE}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
										<MyTypographyControl
											label={__(
												'Typography',
												'duo-head-block'
											)}
											typography={typography}
											onChange={(newTypography) => {
												setAttributes({
													typography: newTypography,
												});
											}}
											attribute={attributes}
											setAttributes={setAttributes}
										/>
										<CardDivider />
										<Alignment
											label={__(
												'Alignment',
												'bdt-review-blocks'
											)}
											attribute={leftAlign}
											attributeName="leftAlign"
											setAttributes={setAttributes}
											options={aligns}
										/>
										<ResRangleControl
											label={__(
												'Gap Between',
												'duo-head-block'
											)}
											controlName={GAP_MARGIN_LR}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
									</PanelBody>
									)}
									{!isRightTextEmpty() && (
										<PanelBody
											title={__('Right Heading', 'duo-head-block')}
											initialOpen={false}
										>
										<ColorControl
											label={__(
												'Color',
												'duo-head-block'
											)}
											color={rightColor}
											colorName="rightColor"
											onChange={setAttributes}
										/>
										<ColorControl
											label={__(
												'Hover Color',
												'duo-head-block'
											)}
											color={rightHoverColor}
											colorName="rightHoverColor"
											onChange={setAttributes}
										/>
										<ResRangleControl
											label={__(
												'Font Size',
												'duo-head-block'
											)}
											controlName={RIGHT_FONT_SIZE}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
										<MyTypographyControl
											label={__(
												'Typography',
												'duo-head-block'
											)}
											typography={typography}
											onChange={(newTypography) => {
												setAttributes({
													typography: newTypography,
												});
											}}
											attribute={attributes}
											setAttributes={setAttributes}
										/>
										<CardDivider />
										<Alignment
											label={__(
												'Alignment',
												'bdt-review-blocks'
											)}
											attribute={rightAlign}
											attributeName="rightAlign"
											setAttributes={setAttributes}
											options={aligns}
										/>
										<ResRangleControl
											label={__(
												'Gap Between',
												'duo-head-block'
											)}
											controlName={GAP_MARGIN_LR}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
										</PanelBody>
									)}
								</Fragment>
							),
						},
						{
							name: 'bwddhb_team_advanced',
							title: 'Advanced',
							className: 'bwd-tab bwd-style',
							icon: 'admin-generic',
							components: (
								<Fragment>
									<PanelBody
										title={__(
											'Wrapper Margin & Padding',
											'duo-head-block'
										)}
										initialOpen={false}
									>
										<ResDimensionControl
											label={__(
												'Margin',
												'duo-head-block'
											)}
											controlName={marginControl}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={1000}
										/>
										<ResDimensionControl
											label={__(
												'Padding',
												'duo-head-block'
											)}
											controlName={paddingControl}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={1000}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Background',
											'duo-head-block'
										)}
										initialOpen={false}
									>
										<TabPanelControl
											tabs={[
												{
													name: 'bwddhb_team_normal',
													title: 'Solid',
													className:
														'bwd-tab bwd-general',
													components: (
														<BackgroundControl
															attributes={
																attributes
															}
															setAttributes={
																setAttributes
															}
														/>
													),
												},
												{
													name: 'bwddhb_team_hover',
													title: 'Gradient',
													className:
														'bwd-tab bwd-style',
													components: (
														<GradientPicker
															value={
																wrapperGradientBg
															}
															onChange={(
																currentGradient
															) =>
																setAttributes({
																	wrapperGradientBg:
																		currentGradient,
																})
															}
															gradients={[
																{
																	name: 'JShine',
																	gradient:
																		'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
																	slug: 'jshine',
																},
																{
																	name: 'Moonlit Asteroid',
																	gradient:
																		'linear-gradient(to right, #134e5e, #71b280)',
																	slug: 'moonlit-asteroid',
																},
																{
																	name: 'Rastafarie',
																	gradient:
																		'linear-gradient(to right, #673ab7, #512da8)',
																	slug: 'rastafari',
																},
																{
																	name: 'Rastafarie',
																	gradient:
																		'linear-gradient(45deg, #04dac4 0%, #dff0a2 100%)',
																	slug: 'rastafari',
																},
																{
																	name: 'Rastafarie',
																	gradient:
																		'linear-gradient(45deg, #f97ef9 0%, #8127ce 100%)',
																	slug: 'rastafari',
																},
																{
																	name: 'Rastafarie',
																	gradient:
																		'linear-gradient(45deg, #a288a6 0%, #db0963 100%)',
																	slug: 'rastafari',
																},
															]}
														/>
													),
												},
											]}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Border & Shadow',
											'duo-head-block'
										)}
										initialOpen={false}
									>
										<CustomBorderControl
											label={__(
												'Border',
												'duo-head-block'
											)}
											values={wrapperBorder}
											onChange={(newSettings) =>
												setAttributes({
													wrapperBorder: newSettings,
												})
											}
											setAttributes={setAttributes}
										/>
										<BoxShadowControl
											label={__(
												'Box Shadow',
												'duo-head-block'
											)}
											values={boxShadowWrapper}
											onChange={(newSettings) =>
												setAttributes({
													boxShadowWrapper:
														newSettings,
												})
											}
										/>
										<ResDimensionControl
											label={__(
												'Border Radius',
												'duo-head-block'
											)}
											controlName={wrapperBorderRadius}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={1000}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Z-Index',
											'duo-head-block'
										)}
										initialOpen={false}
									>
										<RangeControl
											value={zIndex}
											onChange={(value) =>
												setAttributes({ zIndex: value })
											}
											initialPosition={1}
											min={-100}
											max={1000000000}
											allowReset
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Responsive Control',
											'duo-head-block'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Hide On Desktop',
												'duo-head-block'
											)}
											checked={hideOnDesktop}
											onChange={() =>
												setAttributes({
													hideOnDesktop:
														!hideOnDesktop,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Hide On Tablet',
												'duo-head-block'
											)}
											checked={hideOnTablet}
											onChange={() =>
												setAttributes({
													hideOnTablet: !hideOnTablet,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Hide On Mobile',
												'duo-head-block'
											)}
											checked={hideOnMobile}
											onChange={() =>
												setAttributes({
													hideOnMobile: !hideOnMobile,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Custom CSS',
											'duo-head-block'
										)}
										initialOpen={false}
									>
										<TextareaControl
											value={customCSS}
											onChange={handleInputChange}
											placeholder={__(
												'.bwddhb-team-name { font-size: 15px; }',
												'duo-head-block'
											)}
										/>
									</PanelBody>
								</Fragment>
							),
						},
					]}
				/>
			</Fragment>
		</InspectorControls>
	);
};

export default Inspector;
