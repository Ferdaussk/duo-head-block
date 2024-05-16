
/**
 * WordPress dependencies
 */
import { useBlockProps, RichText} from '@wordpress/block-editor';
import icons from '../../options/icons';
import placeholderImageUrl from '../../../includes/assets/img/bwd-placeholder.jpg';


export default function save({ attributes }) {
	const { uniqueId,style, containerWidth,textUrl ,enaLink,newTab,leftText,rightText } =
		attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `bwddh-heading bwddh-dual-hedi-${style} ${uniqueId} ${containerWidth}`,
			})}
		>
		{enaLink ? (
			<a href={textUrl} target={newTab ? '_blank' : ''} rel="noopener">
				<RichText.Content tagName="div" className={`bwddh-first-hedi bwddh-heddi-${style}`} value={leftText}/>
				<RichText.Content tagName="div" className={`bwddh-sec-hedi bwddh-cor-hedi-${style}`} value={rightText}/>
			</a>
		) : (
			<div>
				<RichText.Content tagName="div" className={`bwddh-first-hedi bwddh-heddi-${style}`} value={leftText}/>
				<RichText.Content tagName="div" className={`bwddh-sec-hedi bwddh-cor-hedi-${style}`} value={rightText}/>
			</div>
		)}
		</div>
	);
}
