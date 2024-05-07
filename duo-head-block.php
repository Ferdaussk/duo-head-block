<?php
/**
 * Plugin Name:       Duo Head Block
 * Description:       Dual heading plugin with 30+ types of dual heading also custom text with masking effects.
 * Plugin URI:  https://bestwpdeveloper.com/duo-head-block
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Best Wp Developer
 * Author URI:        https://bestwpdeveloper.com/
 * Text Domain:       duo-head-block
 *
 */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @package BWDDHB Blocks 
 * @version 1.0.0
 * Final Class BWDDHB Blocks
 */

final class BWDDHB_DUO_HEAD_BLOCKS_CLASS {
	
	private static $instance;

	/**
	 * Singleton Instance
	 */
	public static function instance(){
		if( is_null( self::$instance ) ){
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Class Constructor
	 */
	public function __construct(){
		$this->define_constants();

		if ( !version_compare( BWDDHB_DUO_HEAD_WP_VERSION, '5.8', '>=' ) ){
            add_action( 'admin_notices', [ $this, 'check_wp_version' ] );
        } elseif ( !version_compare( BWDDHB_DUO_HEAD_PHP_VERSION, '5.7', '>=' ) ){
            add_action( 'admin_notices', [ $this, 'check_php_version' ] );
        } elseif ( !function_exists( 'register_block_type' ) ){
            add_action( 'admin_notices', [ $this, 'gutenberg_unavailable_notice' ] );
        } else {
            $this->includes();
            // Load the plugin text domain for localization
            add_action('plugins_loaded', [$this, 'load_textdomain']);
        }
		
        // activation hook
        register_activation_hook( BWDDHB_DUO_HEAD_FILE, [ $this, 'blocks_activation_hook' ] );
        // deactivation hook
        register_deactivation_hook( BWDDHB_DUO_HEAD_FILE, [ $this, 'blocks_deactivation_hook' ] );

	}

    /**
     * Load the plugin text domain for localization
    */
    public function load_textdomain() {
        load_plugin_textdomain('duo-head-block', false, BWDDHB_DUO_HEAD_DIR_PATH . '/languages/');
    }
	/**
     * Define Constants
     */
    public function define_constants(){
        define('BWDDHB_DUO_HEAD_NAME', 'duo-head-block');
		define('BWDDHB_DUO_HEAD_SLUG', 'duo-head-block');
        define('BWDDHB_DUO_HEAD_VERSION', '1.0.0');
        define('BWDDHB_DUO_HEAD_FILE', __FILE__);
		define('BWDDHB_DUO_HEAD_DIR', __DIR__);
        define('BWDDHB_DUO_HEAD_DIR_PATH', plugin_dir_path(__FILE__));
        define('BWDDHB_DUO_HEAD_ADMIN_URL', plugin_dir_url(__FILE__));
        define('BWDDHB_DUO_HEAD_WP_VERSION', (float) get_bloginfo('version'));
        define('BWDDHB_DUO_HEAD_PHP_VERSION', (float) phpversion());
    }

	/**
     * PHP Version Related Admin Notice
     */
    public function check_php_version(){
        $message = sprintf(
            esc_html__( 'Duo Head Block Blocks requires minimum PHP version %s where your current PHP version is %2s. Please update your PHP version to enable BWDDHB Blocks features. ', 'duo-head-block' ),
            '5.6',
            BWDDHB_DUO_HEAD_PHP_VERSION
        );
        $html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
        echo wp_kses_post( $html_message );
    }

    /**
     * WordPress Version Related Admin Notice
     */
    public function check_wp_version(){
        $message = sprintf(
            esc_html__( 'Duo Head Block Blocks requires minimum WordPress version %s where your current WordPress version is %2s. Please update your WordPress version to enable BWDDHB Blocks features. ', 'duo-head-block' ),
            '5.8',
            BWDDHB_DUO_HEAD_WP_VERSION
        );
        $html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
        echo wp_kses_post( $html_message );
    }

    /**
     * Gutenberg Plugin Activation Related Admin Notice
     */
    public function gutenberg_unavailable_notice(){

        if ( ! current_user_can( 'install_plugins' ) ) {
            return;
        }

        $class = 'notice notice-error';
        /* translators: %s: html tags */
        $message = sprintf(
            __( 'The <%1$s>%2$s</%1$s> plugin requires <%1$s>Gutenberg</%1$s> plugin installed & activated.', 'duo-head-block' ),
            $tag = 'strong',
            ZOLO_NAME
        );

        $action_url = wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=gutenberg' ), 'install-plugin_gutenberg' );
        $button_label = __( 'Install Gutenberg', 'duo-head-block' );

        $button = '<p><a href="' . $action_url . '" class="button-primary">' . $button_label . '</a></p><p></p>';

        printf( '<div class="%1$s"><p>%2$s</p>%3$s</div>', esc_attr( $class ), wp_kses_post( $message ), wp_kses_post( $button ) );
    }

	/**
     * Activation Hook
     */
    public function blocks_activation_hook() {
        // flush rewrite rules
        flush_rewrite_rules();
    }

    /**
     * Deactivation Hook
     */
    public function blocks_deactivation_hook() {
        // flush rewrite rules
        flush_rewrite_rules();
    }

	/**
     * Include required files
     */
    public function includes(){
        require_once BWDDHB_DUO_HEAD_DIR_PATH . 'includes/blocks-loader.php';
    }
}

/**
 * Kickoff
*/
function bwddhb_duo_head_blocks(){
	return BWDDHB_DUO_HEAD_BLOCKS_CLASS::instance();
}

// start plugin
bwddhb_duo_head_blocks();
