/**
 * Monaco Query Parameters
 *
 * @author Marcos Abreu
 */

'use strict';

( function() {
  var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
  var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

  function loadDependencies(require, exports, module) {
    module.exports = require( './lib/monaco-query-parameters' );
  }

  if ( isAMD ) {
    define(loadDependencies);
  }
  else if ( isNode ) {
    loadDependencies( require, module.exports, module );
  }
}() );
