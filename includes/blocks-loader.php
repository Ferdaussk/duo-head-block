<?php
/**
 * @package BWDDHB Blocks
 * Blocks Loader
 */

// Exit if accessed directly.
if ( !defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Blocks Loader Class
 */
class BWDDHB_DUO_HEAD_BLOCKS_LOADER {

    /**
     * Constructor
     */
    public function __construct() {
        
         // Register Blocks
        add_action( 'init', [ $this, 'register_blocks' ] );
        
        //Register Block Category
        if ( version_compare( BWDDHB_DUO_HEAD_WP_VERSION, '5.8', '>=' ) ) {
            add_filter( 'block_categories_all', [ $this, 'register_duo_head_block_category' ], 99999, 2 );
        } else {
            add_filter( 'block_categories', [ $this, 'register_duo_head_block_category' ], 99999, 2 );
        }

        // Enqueue Inline style on render block
        add_filter( 'render_block', [ $this, 'generate_inline_style_on_render_block' ], 10, 2 );

        // enqueue editor assets
        add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_assets' ] );

    }

    /**
     * Enqueue Editor Assets
     */
    public function enqueue_editor_assets(){
        wp_enqueue_script(
            'bwddhb-blocks-global-js',
            BWDDHB_DUO_HEAD_ADMIN_URL . './dist/global.js',
            [],
            BWDDHB_DUO_HEAD_VERSION,
            true
        );
    }

   

    /**
     * Blocks Category
     */
    public function register_duo_head_block_category( $categories, $post ) {
        return array_merge(
            [
                [
                    'slug' => 'bwddhb-duo-head',
                    'title' => __( 'Duo Head', 'duo-head-block' )
                ],
            ],
            $categories
        );
    }

    /**
     * Load Blocks
     */
    public function register_blocks() {
        
        // get all blocks from includes/blocks/blocks.php
        require_once BWDDHB_DUO_HEAD_DIR_PATH . './includes/blocks/blocks.php';

        // Register Blocks
        if( ! empty( $bwddhb_duo_head_blocks ) && is_array( $bwddhb_duo_head_blocks ) ) {
            foreach( $bwddhb_duo_head_blocks as $block ) {
                $this->register_single_block( $block );
            }
        }

    }

    /**
     * Register Single Block
     */
    public function register_single_block( $block ) {
        register_block_type(
            BWDDHB_DUO_HEAD_DIR_PATH . './build/blocks/' . $block['name'],
            isset( $block['args'] ) ? $block['args'] : []
        );
        
    }

    /**
     * Register Inline Style
     */
    function generate_inline_style_on_render_block($block_content, $block ) {

        if (isset($block['blockName']) && str_contains($block['blockName'], 'bwddhb/')) {
            if (isset($block['attrs']['blockStyle'])) {

                $style = $block['attrs']['blockStyle'];
                $handle = isset( $block['attrs']['uniqueId'] ) ? $block['attrs']['uniqueId'] : 'duo-head-block';

                // convert style array to string
                if ( is_array($style) ) {
                    $style = implode(' ', $style);
                }

                // minify style to remove extra space
                $style = preg_replace( '/\s+/', ' ', $style );

                wp_register_style(
                    $handle,
                    false,
                    [],
                    BWDDHB_DUO_HEAD_VERSION
                );
                wp_enqueue_style( $handle );
                wp_add_inline_style( $handle, $style );

            }
        }
        return $block_content;
    }

}

new BWDDHB_DUO_HEAD_BLOCKS_LOADER();