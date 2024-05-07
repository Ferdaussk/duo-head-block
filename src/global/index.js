// add resMode attributes to all blocks
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'bwddhb/attribute/resMode',
	function (settings, name) {
		if (name.includes('bwddhb/')) {
			settings.attributes = {
				...settings.attributes,
				resMode: {
					type: 'string',
					default: 'Desktop',
				},
			};
		}
		return settings;
	}
);
