
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Button, SelectControl, CardDivider } from '@wordpress/components';
import ColorControl from "../color-control"
import { MediaUpload } from '@wordpress/block-editor';
import placeholderImageUrl from '../../../includes/assets/img/bwd-placeholder.jpg';
import './index.scss';

const BackgroundControl = ({attributes, setAttributes}) => {
    const {mainWrapperBgColor, imageUrl, bgPosition, bgAttachment, bgRepeat, bgSize} = attributes;
	const onSelectMedia = (media) => {
		setAttributes({
			imageUrl: media.url, 
		});
	};
	const onRemoveMedia = () => {
		setAttributes({
			imageUrl: '', 
		});
	};
    return (
		<Fragment>
			<ColorControl
				label={__('Background Color', 'duo-head-block')}
				color={mainWrapperBgColor}
				colorName="mainWrapperBgColor"
				onChange={setAttributes}
			/>
			<p className="bwddhb-bgImg-label">
				{__('Background Image', 'duo-head-block')}
			</p>
			<MediaUpload
				onSelect={onSelectMedia}
				allowedTypes={['image']}
				value={imageUrl}
				render={({ open }) => (
					<div className="bwddhb-wrapperbg">
						{imageUrl ? (
							<>
								<Button
									onClick={open}
									className="bwddhb-wrapimg"
								>
									<img src={imageUrl} alt="Selected Media" />
								</Button>
								<Button
									className="remove-media"
									onClick={onRemoveMedia}
								>
									<span className="dashicons dashicons-trash"></span>
								</Button>
							</>
						) : (
							<Button
								onClick={open}
								className="bwddhb-bgwrap-placeholder"
							>
								<img
									src={placeholderImageUrl}
									alt="Placeholder"
									className="placeholder-image"
								/>
								<span>
									{__(
										'Upload Image',
										'duo-head-block'
									)}
								</span>
							</Button>
						)}
					</div>
				)}
			/>
			<CardDivider />
			{imageUrl && (
				<Fragment>
					<SelectControl
						label={__('Position', 'duo-head-block')}
						value={bgPosition}
						options={[
							{
								value: '',
								label: 'Default',
							},
							{
								value: 'center center',
								label: 'Center Center',
							},
							{
								value: 'center left',
								label: 'Center Left',
							},
							{
								value: 'center right',
								label: 'Center Right',
							},
							{
								value: 'top center',
								label: 'Top Center',
							},
							{
								value: 'top left',
								label: 'Top Left',
							},
							{
								value: 'top right',
								label: 'Top Right',
							},
							{
								value: 'bottom center',
								label: 'Bottom Center',
							},
							{
								value: 'bottom left',
								label: 'Bottom Left',
							},
							{
								value: 'bottom right',
								label: 'Bottom Right',
							},
							{
								value: 'custom',
								label: 'Custom',
							},
						]}
						onChange={(value) =>
							setAttributes({
								bgPosition: value,
							})
						}
					/>
					<SelectControl
						label={__('Attachment', 'duo-head-block')}
						value={bgAttachment}
						options={[
							{
								value: '',
								label: 'Default',
							},
							{
								value: 'scroll',
								label: 'Scroll',
							},
							{
								value: 'fixed',
								label: 'Fixed',
							},
						]}
						onChange={(value) =>
							setAttributes({
								bgAttachment: value,
							})
						}
					/>
					<SelectControl
						label={__('Repeat', 'duo-head-block')}
						value={bgRepeat}
						options={[
							{
								value: '',
								label: 'Default',
							},
							{
								value: 'no-repeat',
								label: 'No-repeat',
							},
							{
								value: 'repeat',
								label: 'Repeat',
							},
							{
								value: 'repeat-x',
								label: 'Repeat-X',
							},
							{
								value: 'repeat-y',
								label: 'Repeat-Y',
							},
						]}
						onChange={(value) =>
							setAttributes({
								bgRepeat: value,
							})
						}
					/>
					<SelectControl
						label={__('Size', 'duo-head-block')}
						value={bgSize}
						options={[
							{
								value: '',
								label: 'Default',
							},
							{
								value: 'auto',
								label: 'Auto',
							},
							{
								value: 'cover',
								label: 'Cover',
							},
							{
								value: 'contain',
								label: 'Contain',
							},
						]}
						onChange={(value) =>
							setAttributes({
								bgSize: value,
							})
						}
					/>
				</Fragment>
			)}
		</Fragment>
	);
}
export default BackgroundControl