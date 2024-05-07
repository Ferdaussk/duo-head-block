import {
	ColorPicker,
	RangeControl,
	SelectControl,
	Button
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';

// BoxShadowControls component
const BoxShadowControl = ({ label, values, onChange }) => {
	const { color, offsetX, offsetY, blurRadius, spreadRadius, shadowType } =
		values;

	  const updateBoxShadowProperty = (key, value) => {
			onChange({
				...values,
				[key]: value !== undefined ? value : values[key],
			});
		};
		const resetColor = () => {
			onChange({
				...values,
				color: '#000000', 
			});
		};
		const shadowTypeOptions = [
			{ label: 'None', value: 'none' },
			{ label: 'Outset', value: '' },
			{ label: 'Inset', value: 'inset' },
		];
	return (
		<div className="bwddhb-box-shadow-wrapper">
			<p className="bwddhb-box-shadow">{label}</p>
			<SelectControl
				value={shadowType}
				options={shadowTypeOptions}
				onChange={(newValue) =>
					updateBoxShadowProperty('shadowType', newValue)
				}
			/>
			{shadowType !== 'none' && (
				<>
					<div className="bwddhb-colorPiker-wrapper">
						<ColorPicker
							label={__('Color', 'duo-head-block')}
							color={color}
							onChange={(newColor) =>
								updateBoxShadowProperty('color', newColor)
							}
							enableAlpha
							copyFormat
						/>
						<Button className="reset-button" onClick={resetColor}>
							{__('Reset', 'duo-head-block')}
						</Button>
					</div>
					<RangeControl
						label={__('Offset X', 'duo-head-block')}
						value={offsetX}
						onChange={(newValue) =>
							updateBoxShadowProperty('offsetX', newValue)
						}
						min={-100}
						max={100}
					/>
					<RangeControl
						label={__('Offset Y', 'duo-head-block')}
						value={offsetY}
						onChange={(newValue) =>
							updateBoxShadowProperty('offsetY', newValue)
						}
						min={-100}
						max={100}
					/>
					<RangeControl
						label={__('Blur', 'duo-head-block')}
						value={blurRadius}
						onChange={(newValue) =>
							updateBoxShadowProperty('blurRadius', newValue)
						}
						min={0}
						max={50}
					/>
					<RangeControl
						label={__('Spread', 'duo-head-block')}
						value={spreadRadius}
						onChange={(newValue) =>
							updateBoxShadowProperty('spreadRadius', newValue)
						}
						min={0}
						max={50}
					/>
				</>
			)}
		</div>
	);
};

export default BoxShadowControl;

