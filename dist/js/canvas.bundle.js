/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/bg.jpg":
/*!************************!*\
  !*** ./src/img/bg.jpg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c469c3a7e2082fd2c346454d4e51b37d.jpg");

/***/ }),

/***/ "./src/img/platformLand.jpg":
/*!**********************************!*\
  !*** ./src/img/platformLand.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c040ad2d2411b0d0dbf1104ee4c5aa3c.jpg");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platformLand_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platformLand.jpg */ "./src/img/platformLand.jpg");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_bg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/bg.jpg */ "./src/img/bg.jpg");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.frame = 0;
    this.actions = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentAction = this.actions.stand.right;
    this.currentAcitonWidth = 177;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentAction, this.currentAcitonWidth * this.frame, 0, this.currentAcitonWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frame++;
      if (this.frame > 59 && (this.currentAction === this.actions.stand.right || this.currentAction === this.actions.stand.left)) this.frame = 0;else if (this.frame > 29 && (this.currentAction === this.actions.run.right || this.currentAction === this.actions.run.left)) this.frame = 0;
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var MainBackGround = /*#__PURE__*/function () {
  function MainBackGround(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, MainBackGround);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(MainBackGround, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return MainBackGround;
}();
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var platformImage = createImage(_img_platformLand_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var currentKey;
var platforms = [new Platform({
  x: platformImage.width,
  y: 400,
  image: platformImage
})];
var mainBG = [new MainBackGround({
  x: 0,
  y: 0,
  image: createImage(_img_bg_jpg__WEBPACK_IMPORTED_MODULE_5__["default"])
})];
function init() {
  platformImage = createImage(_img_platformLand_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: 0,
    y: 400,
    image: platformImage
  })];
  mainBG = [new MainBackGround({
    x: 0,
    y: 0,
    image: createImage(_img_bg_jpg__WEBPACK_IMPORTED_MODULE_5__["default"])
  })];
  winIndicator = 0;
  currentKey;
}
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var winIndicator = 0;
var platformSpawnCounter = 0;
var platformSpawnInterval = 200;
function spawnPlatform() {
  var newPlatform = new Platform({
    x: platforms[platforms.length - 1].position.x + platformImage.width + platformSpawnInterval,
    y: 400,
    image: platformImage
  });
  platforms.push(newPlatform);
}
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  mainBG.forEach(function (bg) {
    bg.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  // player movement right and left
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      platformSpawnCounter += 5;
      winIndicator += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      winIndicator -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
    }
  }
  ///// win condition
  console.log(winIndicator);
  if (winIndicator > 2000) {
    console.log('you win');
  }

  //// lose condition
  if (player.position.y > canvas.height) {
    console.log('you lose');
    init();
  }
  //player and platform collision
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  // action switching
  if (keys.right.pressed && currentKey === 'right' && player.currentAction !== player.actions.run.right) {
    player.currentAction = player.actions.run.right;
    player.currentAcitonWidth = player.actions.run.cropWidth;
    player.width = player.actions.run.width;
  } else if (keys.left.pressed && currentKey === 'left' && player.currentAction !== player.actions.run.left) {
    player.currentAction = player.actions.run.left;
    player.currentAcitonWidth = player.actions.run.cropWidth;
    player.width = player.actions.run.width;
  } else if (!keys.left.pressed && currentKey === 'left' && player.currentAction !== player.actions.stand.left) {
    player.currentAction = player.actions.stand.left;
    player.currentAcitonWidth = player.actions.stand.cropWidth;
    player.width = player.actions.stand.width;
  } else if (!keys.right.pressed && currentKey === 'right' && player.currentAction !== player.actions.stand.right) {
    player.currentAction = player.actions.stand.right;
    player.currentAcitonWidth = player.actions.stand.cropWidth;
    player.width = player.actions.stand.width;
  }
  if (platformSpawnCounter >= platformSpawnInterval) {
    spawnPlatform();
    platformSpawnCounter = 0;
  }

  // Update platform positions
  platforms.forEach(function (platform) {
    platform.position.x -= player.velocity.x;
  });
}
animate();

// Player Movements

addEventListener('keydown', function (_ref3) {
  var key = _ref3.key;
  switch (key) {
    case "a":
      console.log('left');
      keys.left.pressed = true;
      currentKey = 'left';
      break;
    case 's':
      console.log('down');
      break;
    case 'd':
      console.log('right');
      keys.right.pressed = true;
      currentKey = 'right';
      break;
    case 'w':
      console.log('up');
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var key = _ref4.key;
  switch (key) {
    case "a":
      console.log('left');
      keys.left.pressed = false;
      break;
    case "s":
      console.log('down');
      break;
    case "d":
      console.log('right');
      keys.right.pressed = false;
      break;
    case "w":
      console.log('up');
      player.velocity.y -= 12;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map