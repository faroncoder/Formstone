/*! 
 * Formstone v0.0.1 - 2014-11-26 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

!function(a,b){"use strict";function c(a){a.$target=a.$el.find(a.target),b.support.transition?this.on(h.transitionEnd,a,e):a.complete.apply(a.$el)}function d(){this.off(h.namespace)}function e(b){b.stopPropagation(),b.preventDefault();var c=b.data,d=b.originalEvent,e=!c.property||d&&d.propertyName===c.property,g=!c.target||d&&a(d.target).is(c.$target),h=!c.target&&d&&a(d.target).is(c.$el);e&&g&&h&&f(c)}function f(a){a.always||a.$el.off(h.transitionEnd)[g.namespace]("destroy"),a.complete.apply(a.$el)}{var g=b.Plugin("transition",{widget:!0,defaults:{always:!1,complete:a.noop,property:null,target:null},methods:{_construct:c,_destruct:d,resolve:f}}),h=g.events;g.functions,b.$window}}(jQuery,Formstone);