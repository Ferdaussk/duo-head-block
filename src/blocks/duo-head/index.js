import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

// import attributes
import attributes from './attributes';
import { TeamMemberIcon } from './icon';



/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: TeamMemberIcon,
		foreground: '#9100ff',
		borderRadius: '5px',
	},
	attributes,
	keywords: [
		__('team', 'duo-head-block'),
		__('bwd', 'duo-head-block'),
		__('member', 'duo-head-block'),
	],
	edit: Edit,
	save: Save,
});

