
import './style.scss';

const Alignment = ({
	label,
	attribute,
	attributeName,
	setAttributes,
	options,
}) => {
	return (
		<div className="bwddhb-Alignment">
			<p className="bwddhb-label">{label}</p>
			<div className="bwddhb-alignment-icon-wrapper">
				{options &&
					options.map((option, index) => {
						return (
							<button
								className={`bwddhb-single-icon ${
									attribute === option.value ? 'active' : ''
								}`}
								onClick={() =>
									setAttributes({
										[attributeName]: option.value,
									})
								}
								key={index}
							>
								<span
									className={`dashicons dashicons-editor-${option.icon}`}
								></span>
							</button>
						);
					})}
			</div>
		</div>
	);
};

export default Alignment;
