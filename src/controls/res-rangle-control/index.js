import {
	RangeControl,
	Button,
} from '@wordpress/components';
import ResBtn from '../res-btn';

import './style.scss';

const ResRangleControl = ({
	label,
	controlName,
	objAttrs,
	noUnits,
	units,
	min,
	max,
}) => {
	const { attributes, setAttributes } = objAttrs;
	const { resMode } = attributes;

	const {
		[`${controlName}DeskRange`]: deskRange,
		[`${controlName}TabRange`]: tabRange,
		[`${controlName}MobRange`]: mobRange,
		[`${controlName}Unit`]: unit,
	} = attributes;

	if (!units) units = units || ['px', 'em', 'rem'];

	return (
		<div className="bwddhb-res-rangle-control">
			<p className='bwddhb-label'>{label}</p>
			<div className="bwddhb-resicon-unit-wrap">
					<ResBtn
						resMode={resMode}
						setAttributes={setAttributes}
					/>
				{!noUnits && (
					<div className="units-wrapper">
						{units &&
							units.map((u, index) => {
								return (
									<Button
										className="unit-btn"
										variant={
											unit === u
												? 'primary'
												: 'secondary'
										}
										key={index}
										onClick={() =>
											setAttributes({
												[`${controlName}Unit`]: u,
											})
										}
									>
										{u}
									</Button>
								);
							})}
					</div>
				)}
			</div>
			<div className="bwd-res-controls">
				{resMode === 'Desktop' && (
					<div className="bwd-single-rangle">
						<RangeControl
							value={deskRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}DeskRange`]: value,
								})
							}
							min={min}
							max={max}
							allowReset={true}
							resetFallbackValue=""
							trackColor="#00ced1"
						/>
					</div>
				)}
				{resMode === 'Tablet' && (
					<div className="bwd-single-rangle">
						<RangeControl
							value={tabRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}TabRange`]: value,
								})
							}
							min={min}
							max={max}
							trackColor="#00ced1"
						/>
					</div>
				)}
				{resMode === 'Mobile' && (
					<div className="bwd-single-rangle">
						<RangeControl
							value={mobRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}MobRange`]: value,
								})
							}
							min={min}
							max={max}
							trackColor="#00ced1"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ResRangleControl;
