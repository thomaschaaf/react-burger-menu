'use strict';

let styles = {

  overlay(isOpen) {
    return {
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      opacity: isOpen ? 1 : 0,
      WebkitTransform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      msTransform: isOpen ? '' : 'translateX(-100%)',
      transform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      WebkitTransition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s',
      transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s',
    };
  },

  menuWrap(isOpen, width, right) {
    return {
      position: 'fixed',
      right: right ? 0 : 'inherit',
      zIndex: 2,
      width,
      height: '100%',
      pointerEvents: 'none'
    };
  },

  menu(isOpen, width, right) {
    return {
      height: '100%',
      boxSizing: 'border-box',
      msTransform: isOpen ? '' : right ? 'translateX(100%)' : 'translateX(-100%)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
  		transform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      WebkitTransition: 'all 0.5s',
    	transition: 'all 0.5s',
    };
  },

  itemList() {
    return {
      height: '100%'
    };
  },

  item() {
    return {
      display: 'block',
      outline: 'none'
    };
  }

};

export default styles;
