// Automatically generated file.  Do not edit!
 // This version is modified by viet1pro, Komaz from MIS!


window.CLOSURE_NO_DEPS = true;

(function() {
  var srcs = [
      "third-party/base.js",
      "third-party/blockly/core/utils/math.js",
      "js/lib-games.js",
      "third-party/blockly/core/utils/global.js",
      "third-party/blockly/core/utils/useragent.js",
      "third-party/blockly/core/utils/dom.js",
      "third-party/blockly/core/renderers/common/path_object.js",
      "third-party/blockly/core/utils/string.js",
      "third-party/blockly/core/tooltip.js",
      "third-party/blockly/core/utils/coordinate.js",
      "third-party/blockly/core/utils/size.js",
      "third-party/blockly/core/utils/style.js",
      "third-party/blockly/core/msg.js",
      "third-party/blockly/core/utils.js",
      "third-party/blockly/core/events.js",
      "third-party/blockly/core/events_abstract.js",
      "third-party/blockly/core/utils/object.js",
      "third-party/blockly/core/ui_events.js",
      "third-party/blockly/core/block_animations.js",
      "third-party/blockly/core/touch.js",
      "third-party/blockly/core/variable_events.js",
      "third-party/blockly/core/utils/xml.js",
      "third-party/blockly/core/workspace_events.js",
      "third-party/blockly/core/block_events.js",
      "third-party/blockly/core/xml.js",
      "third-party/blockly/core/connection.js",
      "third-party/blockly/core/rendered_connection.js",
      "third-party/blockly/core/utils/idgenerator.js",
      "third-party/blockly/core/components/component.js",
      "third-party/blockly/core/utils/aria.js",
      "third-party/blockly/core/components/menu/menuitem.js",
      "third-party/blockly/core/components/menu/menu.js",
      "third-party/blockly/core/ui_menu_utils.js",
      "third-party/blockly/core/contextmenu.js",
      "third-party/blockly/core/field_registry.js",
      "third-party/blockly/core/extensions.js",
      "third-party/blockly/core/ws_comment_events.js",
      "third-party/blockly/core/workspace_comment.js",
      "third-party/blockly/core/keyboard_nav/cursor.js",
      "third-party/blockly/core/theme.js",
      "third-party/blockly/core/theme/classic.js",
      "third-party/blockly/core/keyboard_nav/marker_cursor.js",
      "third-party/blockly/core/variable_map.js",
      "third-party/blockly/core/workspace.js",
      "third-party/blockly/core/blocks.js",
      "third-party/blockly/core/utils/colour.js",
      "third-party/blockly/core/bubble.js",
      "third-party/blockly/core/utils/rect.js",
      "third-party/blockly/core/workspace_comment_svg.js",
      "third-party/blockly/core/bubble_dragger.js",
      "third-party/blockly/core/insertion_marker_manager.js",
      "third-party/blockly/core/block_dragger.js",
      "third-party/blockly/core/workspace_dragger.js",
      "third-party/blockly/core/flyout_dragger.js",
      "third-party/blockly/core/constants.js",
      "third-party/blockly/core/gesture.js",
      "third-party/blockly/core/field.js",
      "third-party/blockly/core/field_label.js",
      "third-party/blockly/core/input.js",
      "third-party/blockly/core/block.js",
      "third-party/blockly/core/icon.js",
      "third-party/blockly/core/warning.js",
      "third-party/blockly/core/block_svg.js",
      "third-party/blockly/core/renderers/common/block_rendering.js",
      "third-party/blockly/core/block_render_svg.js",
      "third-party/blockly/core/names.js",
      "third-party/blockly/core/procedures.js",
      "third-party/blockly/core/keyboard_nav/ast_node.js",
      "third-party/blockly/core/keyboard_nav/action.js",
      "third-party/blockly/core/utils/keycodes.js",
      "third-party/blockly/core/keyboard_nav/key_map.js",
      "third-party/blockly/core/keyboard_nav/navigation.js",
      "third-party/blockly/core/generator.js",
      "third-party/blockly/core/keyboard_nav/flyout_cursor.js",
      "third-party/blockly/core/flyout_button.js",
      "third-party/blockly/core/scrollbar.js",
      "third-party/blockly/core/keyboard_nav/cursor_svg.js",
      "third-party/blockly/core/options.js",
      "third-party/blockly/core/grid.js",
      "third-party/blockly/core/variable_model.js",
      "third-party/blockly/core/variables.js",
      "third-party/blockly/core/variables_dynamic.js",
      "third-party/blockly/core/connection_db.js",
      "third-party/blockly/core/touch_gesture.js",
      "third-party/blockly/core/workspace_comment_render_svg.js",
      "third-party/blockly/core/workspace_audio.js",
      "third-party/blockly/core/workspace_drag_surface_svg.js",
      "third-party/blockly/core/workspace_svg.js",
      "third-party/blockly/core/flyout_base.js",
      "third-party/blockly/core/css.js",
      "third-party/blockly/core/widgetdiv.js",
      "third-party/blockly/core/flyout_horizontal.js",
      "third-party/blockly/core/dropdowndiv.js",
      "third-party/blockly/core/block_drag_surface.js",
      "third-party/blockly/core/inject.js",
      "third-party/blockly/core/flyout_vertical.js",
      "third-party/blockly/core/blockly.js",
      "third-party/blockly/core/utils/svg_paths.js",
      "third-party/blockly/core/renderers/common/constants.js",
      "third-party/blockly/core/renderers/measurables/types.js",
      "third-party/blockly/core/renderers/measurables/base.js",
      "third-party/blockly/core/renderers/measurables/connections.js",
      "third-party/blockly/core/renderers/measurables/row_elements.js",
      "third-party/blockly/core/renderers/measurables/inputs.js",
      "third-party/blockly/core/renderers/measurables/rows.js",
      "third-party/blockly/core/renderers/common/info.js",
      "third-party/blockly/core/renderers/common/debugger.js",
      "third-party/blockly/core/renderers/common/drawer.js",
      "third-party/blockly/core/renderers/common/renderer.js",
      "third-party/blockly/core/renderers/geras/highlighter.js",
      "third-party/blockly/core/renderers/geras/info.js",
      "third-party/blockly/core/renderers/geras/path_object.js",
      "third-party/blockly/core/renderers/geras/drawer.js",
      "third-party/blockly/core/renderers/geras/highlight_constants.js",
      "third-party/blockly/core/renderers/geras/renderer.js",
      "movie/generated/en/msg.js",
      "js/lib-interface.js",
      "js/lib-dialogs.js",
      "js/lib-gallery.js",
      "third-party/blockly/core/trashcan.js",
      "third-party/blockly/generators/javascript.js",
      "third-party/blockly/generators/javascript/lists.js",
      "third-party/blockly/generators/javascript/math.js",
      "third-party/blockly/generators/javascript/colour.js",
      "third-party/blockly/generators/javascript/text.js",
      "third-party/blockly/generators/javascript/logic.js",
      "third-party/blockly/generators/javascript/variables.js",
      "third-party/blockly/core/field_textinput.js",
      "third-party/blockly/core/mutator.js",
      "third-party/blockly/core/comment.js",
      "third-party/blockly/core/field_checkbox.js",
      "third-party/blockly/blocks/procedures.js",
      "third-party/blockly/core/field_dropdown.js",
      "third-party/blockly/blocks/logic.js",
      "third-party/blockly/core/field_variable.js",
      "third-party/blockly/blocks/variables.js",
      "third-party/blockly/generators/javascript/procedures.js",
      "third-party/blockly/core/field_number.js",
      "third-party/blockly/blocks/loops.js",
      "third-party/blockly/core/field_multilineinput.js",
      "third-party/blockly/core/field_image.js",
      "third-party/blockly/blocks/text.js",
      "third-party/blockly/generators/javascript/loops.js",
      "third-party/blockly/blocks/math.js",
      "third-party/blockly/blocks/lists.js",
      "third-party/blockly/core/field_colour.js",
      "third-party/blockly/blocks/colour.js",
      "movie/js/blocks.js",
      "movie/js/answers.js",
      "third-party/soyutils.js",
      "generated/en/soy.js",
      "movie/generated/en/soy.js",
      "movie/js/scrubber.js",
      "third-party/blockly/core/zoom_controls.js",
      "third-party/blockly/core/components/tree/basenode.js",
      "third-party/blockly/core/components/tree/treenode.js",
      "third-party/blockly/core/components/tree/treecontrol.js",
      "third-party/blockly/core/toolbox.js",
      "movie/js/movie.js"
  ];
  function loadScript() {
    var src = srcs.shift();
    if (src) {
      var script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.onload = loadScript;
      document.head.appendChild(script);
    }
  }
  loadScript();
})();
