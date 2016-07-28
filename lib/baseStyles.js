'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var styles = {

  overlay: function overlay(isOpen) {
    return {
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      opacity: isOpen ? 1 : 0,
      '-ms-transform': isOpen ? '' : 'translateX(-100%)',
      WebkitTransform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      transform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      WebkitTransition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s',
      transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s',
    };
  },

  menuWrap: function menuWrap(isOpen, width, right) {
    return {
      position: 'fixed',
      right: right ? 0 : 'inherit',
      zIndex: 2,
      width: width,
      height: '100%',
      pointerEvents: 'none'
    };
  },

  menu: function menu(isOpen, width, right) {
    return {
      height: '100%',
      boxSizing: 'border-box',
  	  '-ms-transform': isOpen ? '' : right ? 'translateX(100%)' : 'translateX(-100%)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
  		transform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      WebkitTransition: 'all 0.5s',
    	transition: 'all 0.5s',
    };
  },

  itemList: function itemList() {
    return {
      height: '100%'
    };
  },

  item: function item() {
    return {
      display: 'block',
      outline: 'none'
    };
  }

};

exports['default'] = styles;
module.exports = exports['default'];
