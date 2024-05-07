// Import Icon
import { Dashicon, Popover } from '@wordpress/components';
import icons from '../../options/icons';
import './style.scss';
import { useState } from '@wordpress/element';

const IconPicker = ({ label, selectedIcon, changeIcon }) => {
	const [showIcons, setShowIcons] = useState(false);
	const [search, setSearch] = useState('');
	return (
		<div className="bwddhb-icon-picker">
			<p className="bwddhb-label">{label}</p>
			<div className="bwddhb-icons-picker">
				<button
					className="bwddhb-icon-header"
					onClick={() => setShowIcons(true)}
				>
					<span className="bwddhb-selected-icon">
						{icons[selectedIcon]}
					</span>
					<span className="bwddhb-open-icon">
						<Dashicon icon={showIcons ? 'minus' : 'plus'} />
					</span>
				</button>

				{showIcons && (
					<Popover
						offset={10}
						position="bottom left"
						onClose={() => setShowIcons(false)}
						onFocusOutside={() => setShowIcons(false)}
					>
						<div className="bwddhb-icons-container">
							<div className="icon-search">
								<input
									type="text"
									placeholder="Search Icon"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>
							<div className="icon-list">
								{search !== ''
									? Object.keys(icons).map((icon, index) => {
											if (icon.toLowerCase().includes(search.toLowerCase()))
											 {
												return (
													<button
														className={`icon ${
															icon ===
															selectedIcon
																? 'active-icon'
																: ''
														}`}
														key={index}
														onClick={() => {
															changeIcon(icon);
															setShowIcons(false);
														}}
													>
														{icons[icon]}
													</button>
												);
											}
									  })
									: Object.keys(icons).map((icon, index) => {
											return (
												<button
													className={`icon ${
														icon === selectedIcon
															? 'active-icon'
															: ''
													}`}
													key={index}
													onClick={() => {
														changeIcon(icon);
														setShowIcons(false);
													}}
												>
													{icons[icon]}
												</button>
											);
									  })}
							</div>
						</div>
					</Popover>
				)}
			</div>
		</div>
	);
};

export default IconPicker;
