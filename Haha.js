(function(_0x3b2588,_0x195a39){var _0x28e03d=_0x452d,_0x2d6b11=_0x3b2588();while(!![]){try{var _0x39463f=-parseInt(_0x28e03d(0x1a8))/0x1*(parseInt(_0x28e03d(0x1aa))/0x2)+-parseInt(_0x28e03d(0x19e))/0x3*(parseInt(_0x28e03d(0x1a6))/0x4)+-parseInt(_0x28e03d(0x1a1))/0x5+-parseInt(_0x28e03d(0x1a7))/0x6+parseInt(_0x28e03d(0x1a9))/0x7*(parseInt(_0x28e03d(0x19f))/0x8)+-parseInt(_0x28e03d(0x1a3))/0x9+parseInt(_0x28e03d(0x1a0))/0xa;if(_0x39463f===_0x195a39)break;else _0x2d6b11['push'](_0x2d6b11['shift']());}catch(_0x5f2023){_0x2d6b11['push'](_0x2d6b11['shift']());}}}(_0x4747,0xb736a));function r(){var _0x3185bb=_0x452d;return Math[_0x3185bb(0x1ab)](Math['random']()*0xff);}function _0x452d(_0x9afe75,_0x2a3f56){var _0x4747a5=_0x4747();return _0x452d=function(_0x452d6f,_0x5b72e0){_0x452d6f=_0x452d6f-0x19e;var _0x22177e=_0x4747a5[_0x452d6f];return _0x22177e;},_0x452d(_0x9afe75,_0x2a3f56);}function lemon(){var _0x44713d=_0x452d;with(this[_0x44713d(0x1a5)]){color=[_0x44713d(0x1a2),[r(),r(),r()][_0x44713d(0x1a4)](','),')']['join'](''),backgroundColor=['rgb(',[r(),r(),r()]['join'](','),')'][_0x44713d(0x1a4)]('');}}function _0x4747(){var _0x50c264=['2591262KUNODu','join','style','362464hjEVle','1262970AzCTXm','538321LIKunO','8786554kRNUSu','2kHzpef','floor','30fFwuHy','8fMixBD','28992050xbgnQc','7305455Qskwfi','rgb('];_0x4747=function(){return _0x50c264;};return _0x4






/* Changes background and foreground colours  for all elements on the page */
function r() { return Math.floor(Math.random() * 255); }
function fakk(){ this.style.color = ['rgb(',[r(),r(),r()].join(','),')'].join(''),
this.style.backgroundColor = ['rgb(',[r(),r(),r()].join(','),')'].join(''); }
[].forEach.call(document.all, function(item) {
    setTimeout(function() {fakk.call(item)}, (Math.random()*500)+100)
});
