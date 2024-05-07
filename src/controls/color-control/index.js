/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Flex,
	FlexItem,
	FlexBlock,
	Button,
	ColorPicker,
	ColorIndicator,
	Popover,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import './style.scss';

/**
 * Color Control
 */

const ColorControl = ({ label, color, onChange, colorName }) => {
	const [showColorPanel, setShowColorPanel] = useState(false);
	return (
		<div className="bwddhb-color-control-wrapper">
			<style>
				{`
					.bwddhb-color-control-wrapper .components-base-control__label, .bwddhb-color-control-wrapper .components-base-control__field, .bwddhb-color-control-wrapper .components-base-control {
						margin-bottom: 0 !important;
					}
				`}
			</style>
			<Flex
				justify={{
					justifyContent: 'flex-end',
				}}
				gap={0}
			>
				<FlexBlock>
					<BaseControl
						id="color-control"
						label={
							label ? label : __('Color', 'bwddhb-review-blocks')
						}
					/>
				</FlexBlock>
				<FlexItem>
					<Button
						className="bwddhb-color-control"
						onClick={() => setShowColorPanel(true)}
					>
						<ColorIndicator colorValue={color} />
					</Button>
				</FlexItem>
				{showColorPanel && (
					<Popover
						position="bottom right"
						onClose={() => setShowColorPanel(false)}
						onFocusOutside={() => setShowColorPanel(false)}
					>
						<BaseControl>
							<ColorPicker
								color={color}
								disableAlpha={false}
								onChangeComplete={(value) => {
									onChange({ [colorName]: value.hex });
								}}
							/>
						</BaseControl>
						<button
							className="bwddhb-clear-btn"
							onClick={() => onChange({ [colorName]: '' })}
						>
							{__('Reset', 'bwddhb-review-blocks')}
						</button>
					</Popover>
				)}
			</Flex>
		</div>
	);
};

export default ColorControl;
