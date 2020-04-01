// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src2/types.ts":[function(require,module,exports) {
"use strict"; //import { Board } from "./objects/board";
//import { BoxHandler } from "./objects/boxes";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Direction;

(function (Direction) {
  Direction[Direction["Up"] = 0] = "Up";
  Direction[Direction["Down"] = 1] = "Down";
  Direction[Direction["Left"] = 2] = "Left";
  Direction[Direction["Right"] = 3] = "Right";
})(Direction = exports.Direction || (exports.Direction = {}));

var Conveyors;

(function (Conveyors) {
  Conveyors[Conveyors["Base"] = 0] = "Base";
  Conveyors[Conveyors["Mover"] = 1] = "Mover";
  Conveyors[Conveyors["Adder"] = 2] = "Adder";
  Conveyors[Conveyors["Subtractor"] = 3] = "Subtractor";
  Conveyors[Conveyors["MemoryAssigner"] = 4] = "MemoryAssigner";
  Conveyors[Conveyors["MemoryAdder"] = 5] = "MemoryAdder";
  Conveyors[Conveyors["MemorySubtractor"] = 6] = "MemorySubtractor";
  Conveyors[Conveyors["MemorySplitter"] = 7] = "MemorySplitter";
})(Conveyors = exports.Conveyors || (exports.Conveyors = {}));

var MemoryType;

(function (MemoryType) {
  MemoryType[MemoryType["A"] = 0] = "A";
  MemoryType[MemoryType["B"] = 1] = "B";
  MemoryType[MemoryType["C"] = 2] = "C";
})(MemoryType = exports.MemoryType || (exports.MemoryType = {}));
/*
export interface Memory {
    A: number;
    B: number;
    C: number;
}

export enum MemoryType {
    A,
    B,
    C
}

export interface State {
    selectedPiece: Conveyors;
    selectedMemory: MemoryType;
    direction: Direction;
    boardState: Board;
    level: Level;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    boxHandler: BoxHandler;
    isRunning: boolean;
    update: () => void;
    start: () => void;
    reset: (won?:boolean) => void;
    nextLevel: () => void;
    prevLevel: () => void;
}

export interface Level {
    name: string,
    description: string,
    input: number[],
    output: number[],
    size: number,
}
*/
},{}],"src2/utils/stringToConveyor.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var types_1 = require("../types");

var stringToConveyor = function stringToConveyor(name) {
  switch (name) {
    case 'base':
      return types_1.Conveyors.Base;

    case 'mover':
      return types_1.Conveyors.Mover;

    case 'adder':
      return types_1.Conveyors.Adder;

    case 'subtractor':
      return types_1.Conveyors.Subtractor;

    case 'memory_assigner':
      return types_1.Conveyors.MemoryAssigner;

    case 'memory_adder':
      return types_1.Conveyors.MemoryAdder;

    case 'memory_subtractor':
      return types_1.Conveyors.MemorySubtractor;

    case 'memory_splitter':
      return types_1.Conveyors.MemorySplitter;

    case 'up':
      return types_1.Conveyors.MemorySplitter;

    case 'down':
      return types_1.Conveyors.MemorySplitter;

    case 'left':
      return types_1.Conveyors.MemorySplitter;

    case 'right':
      return types_1.Conveyors.MemorySplitter;
  }
};

exports.default = stringToConveyor;
},{"../types":"src2/types.ts"}],"src2/view/images/base.png":[function(require,module,exports) {
module.exports = "/base.561b85f5.png";
},{}],"src2/view/images/down_mover.png":[function(require,module,exports) {
module.exports = "/down_mover.db38e472.png";
},{}],"src2/view/images/left_mover.png":[function(require,module,exports) {
module.exports = "/left_mover.991ba7fa.png";
},{}],"src2/view/images/right_mover.png":[function(require,module,exports) {
module.exports = "/right_mover.850c1c6a.png";
},{}],"src2/view/images/up_mover.png":[function(require,module,exports) {
module.exports = "/up_mover.c43b79fe.png";
},{}],"src2/view/images/*_mover.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_mover.png"),
  "left": require("./left_mover.png"),
  "right": require("./right_mover.png"),
  "up": require("./up_mover.png")
};
},{"./down_mover.png":"src2/view/images/down_mover.png","./left_mover.png":"src2/view/images/left_mover.png","./right_mover.png":"src2/view/images/right_mover.png","./up_mover.png":"src2/view/images/up_mover.png"}],"src2/view/images/down_adder.png":[function(require,module,exports) {
module.exports = "/down_adder.45d46cfd.png";
},{}],"src2/view/images/left_adder.png":[function(require,module,exports) {
module.exports = "/left_adder.f769527c.png";
},{}],"src2/view/images/right_adder.png":[function(require,module,exports) {
module.exports = "/right_adder.fbc41c84.png";
},{}],"src2/view/images/up_adder.png":[function(require,module,exports) {
module.exports = "/up_adder.956af069.png";
},{}],"src2/view/images/*_adder.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_adder.png"),
  "left": require("./left_adder.png"),
  "right": require("./right_adder.png"),
  "up": require("./up_adder.png")
};
},{"./down_adder.png":"src2/view/images/down_adder.png","./left_adder.png":"src2/view/images/left_adder.png","./right_adder.png":"src2/view/images/right_adder.png","./up_adder.png":"src2/view/images/up_adder.png"}],"src2/view/images/down_subtractor.png":[function(require,module,exports) {
module.exports = "/down_subtractor.ead570c8.png";
},{}],"src2/view/images/left_subtractor.png":[function(require,module,exports) {
module.exports = "/left_subtractor.b3d9ecec.png";
},{}],"src2/view/images/right_subtractor.png":[function(require,module,exports) {
module.exports = "/right_subtractor.4a02d3c3.png";
},{}],"src2/view/images/up_subtractor.png":[function(require,module,exports) {
module.exports = "/up_subtractor.259fbf1b.png";
},{}],"src2/view/images/*_subtractor.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_subtractor.png"),
  "left": require("./left_subtractor.png"),
  "right": require("./right_subtractor.png"),
  "up": require("./up_subtractor.png")
};
},{"./down_subtractor.png":"src2/view/images/down_subtractor.png","./left_subtractor.png":"src2/view/images/left_subtractor.png","./right_subtractor.png":"src2/view/images/right_subtractor.png","./up_subtractor.png":"src2/view/images/up_subtractor.png"}],"src2/view/images/down_memory.png":[function(require,module,exports) {
module.exports = "/down_memory.de73a06b.png";
},{}],"src2/view/images/left_memory.png":[function(require,module,exports) {
module.exports = "/left_memory.764b63ac.png";
},{}],"src2/view/images/right_memory.png":[function(require,module,exports) {
module.exports = "/right_memory.e937e20e.png";
},{}],"src2/view/images/up_memory.png":[function(require,module,exports) {
module.exports = "/up_memory.f37e0e2b.png";
},{}],"src2/view/images/*_memory.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_memory.png"),
  "left": require("./left_memory.png"),
  "right": require("./right_memory.png"),
  "up": require("./up_memory.png")
};
},{"./down_memory.png":"src2/view/images/down_memory.png","./left_memory.png":"src2/view/images/left_memory.png","./right_memory.png":"src2/view/images/right_memory.png","./up_memory.png":"src2/view/images/up_memory.png"}],"src2/view/images/down_memory_plus.png":[function(require,module,exports) {
module.exports = "/down_memory_plus.5e14c0ce.png";
},{}],"src2/view/images/left_memory_plus.png":[function(require,module,exports) {
module.exports = "/left_memory_plus.66786d98.png";
},{}],"src2/view/images/right_memory_plus.png":[function(require,module,exports) {
module.exports = "/right_memory_plus.92345c75.png";
},{}],"src2/view/images/up_memory_plus.png":[function(require,module,exports) {
module.exports = "/up_memory_plus.7854d796.png";
},{}],"src2/view/images/*_memory_plus.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_memory_plus.png"),
  "left": require("./left_memory_plus.png"),
  "right": require("./right_memory_plus.png"),
  "up": require("./up_memory_plus.png")
};
},{"./down_memory_plus.png":"src2/view/images/down_memory_plus.png","./left_memory_plus.png":"src2/view/images/left_memory_plus.png","./right_memory_plus.png":"src2/view/images/right_memory_plus.png","./up_memory_plus.png":"src2/view/images/up_memory_plus.png"}],"src2/view/images/down_memory_minus.png":[function(require,module,exports) {
module.exports = "/down_memory_minus.0d1e5ccb.png";
},{}],"src2/view/images/left_memory_minus.png":[function(require,module,exports) {
module.exports = "/left_memory_minus.3f962ad5.png";
},{}],"src2/view/images/right_memory_minus.png":[function(require,module,exports) {
module.exports = "/right_memory_minus.5a76a25a.png";
},{}],"src2/view/images/up_memory_minus.png":[function(require,module,exports) {
module.exports = "/up_memory_minus.4593d823.png";
},{}],"src2/view/images/*_memory_minus.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_memory_minus.png"),
  "left": require("./left_memory_minus.png"),
  "right": require("./right_memory_minus.png"),
  "up": require("./up_memory_minus.png")
};
},{"./down_memory_minus.png":"src2/view/images/down_memory_minus.png","./left_memory_minus.png":"src2/view/images/left_memory_minus.png","./right_memory_minus.png":"src2/view/images/right_memory_minus.png","./up_memory_minus.png":"src2/view/images/up_memory_minus.png"}],"src2/view/images/down_memory_splitter.png":[function(require,module,exports) {
module.exports = "/down_memory_splitter.538f3d11.png";
},{}],"src2/view/images/left_memory_splitter.png":[function(require,module,exports) {
module.exports = "/left_memory_splitter.5794d58f.png";
},{}],"src2/view/images/right_memory_splitter.png":[function(require,module,exports) {
module.exports = "/right_memory_splitter.70116d2f.png";
},{}],"src2/view/images/up_memory_splitter.png":[function(require,module,exports) {
module.exports = "/up_memory_splitter.e2811c39.png";
},{}],"src2/view/images/*_memory_splitter.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_memory_splitter.png"),
  "left": require("./left_memory_splitter.png"),
  "right": require("./right_memory_splitter.png"),
  "up": require("./up_memory_splitter.png")
};
},{"./down_memory_splitter.png":"src2/view/images/down_memory_splitter.png","./left_memory_splitter.png":"src2/view/images/left_memory_splitter.png","./right_memory_splitter.png":"src2/view/images/right_memory_splitter.png","./up_memory_splitter.png":"src2/view/images/up_memory_splitter.png"}],"src2/view/image-loader.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var base_png_1 = __importDefault(require("./images/base.png"));

var __mover_png_1 = __importDefault(require("./images/*_mover.png"));

var __adder_png_1 = __importDefault(require("./images/*_adder.png"));

var __subtractor_png_1 = __importDefault(require("./images/*_subtractor.png"));

var __memory_png_1 = __importDefault(require("./images/*_memory.png"));

var __memory_plus_png_1 = __importDefault(require("./images/*_memory_plus.png"));

var __memory_minus_png_1 = __importDefault(require("./images/*_memory_minus.png"));

var __memory_splitter_png_1 = __importDefault(require("./images/*_memory_splitter.png"));

var types_1 = require("../types");

var loadImage = function loadImage(src) {
  var img = new Image();
  img.src = src;
  return img;
};

var getImage = function getImage(direction, type) {
  var imageType;

  switch (type) {
    case types_1.Conveyors.Base:
      return images.base;

    case types_1.Conveyors.Mover:
      imageType = images.mover;
      break;

    case types_1.Conveyors.Adder:
      imageType = images.adder;
      break;

    case types_1.Conveyors.Subtractor:
      imageType = images.subtractor;
      break;

    case types_1.Conveyors.MemoryAssigner:
      imageType = images.memory;
      break;

    case types_1.Conveyors.MemoryAdder:
      imageType = images.memory_adder;
      break;

    case types_1.Conveyors.MemorySubtractor:
      imageType = images.memory_subtractor;
      break;

    case types_1.Conveyors.MemorySplitter:
      imageType = images.memory_splitter;
      break;
  }

  switch (direction) {
    case types_1.Direction.Up:
      return imageType.up;

    case types_1.Direction.Down:
      return imageType.down;

    case types_1.Direction.Left:
      return imageType.left;

    case types_1.Direction.Right:
      return imageType.right;
  }
};

var images = {
  base: loadImage(base_png_1.default),
  mover: {
    up: loadImage(__mover_png_1.default.up),
    down: loadImage(__mover_png_1.default.down),
    left: loadImage(__mover_png_1.default.left),
    right: loadImage(__mover_png_1.default.right)
  },
  adder: {
    up: loadImage(__adder_png_1.default.up),
    down: loadImage(__adder_png_1.default.down),
    left: loadImage(__adder_png_1.default.left),
    right: loadImage(__adder_png_1.default.right)
  },
  subtractor: {
    up: loadImage(__subtractor_png_1.default.up),
    down: loadImage(__subtractor_png_1.default.down),
    left: loadImage(__subtractor_png_1.default.left),
    right: loadImage(__subtractor_png_1.default.right)
  },
  memory: {
    up: loadImage(__memory_png_1.default.up),
    down: loadImage(__memory_png_1.default.down),
    left: loadImage(__memory_png_1.default.left),
    right: loadImage(__memory_png_1.default.right)
  },
  memory_adder: {
    up: loadImage(__memory_plus_png_1.default.up),
    down: loadImage(__memory_plus_png_1.default.down),
    left: loadImage(__memory_plus_png_1.default.left),
    right: loadImage(__memory_plus_png_1.default.right)
  },
  memory_subtractor: {
    up: loadImage(__memory_minus_png_1.default.up),
    down: loadImage(__memory_minus_png_1.default.down),
    left: loadImage(__memory_minus_png_1.default.left),
    right: loadImage(__memory_minus_png_1.default.right)
  },
  memory_splitter: {
    up: loadImage(__memory_splitter_png_1.default.up),
    down: loadImage(__memory_splitter_png_1.default.down),
    left: loadImage(__memory_splitter_png_1.default.left),
    right: loadImage(__memory_splitter_png_1.default.right)
  }
};
exports.default = getImage;
},{"./images/base.png":"src2/view/images/base.png","./images/*_mover.png":"src2/view/images/*_mover.png","./images/*_adder.png":"src2/view/images/*_adder.png","./images/*_subtractor.png":"src2/view/images/*_subtractor.png","./images/*_memory.png":"src2/view/images/*_memory.png","./images/*_memory_plus.png":"src2/view/images/*_memory_plus.png","./images/*_memory_minus.png":"src2/view/images/*_memory_minus.png","./images/*_memory_splitter.png":"src2/view/images/*_memory_splitter.png","../types":"src2/types.ts"}],"src2/view/main-view.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var stringToConveyor_1 = __importDefault(require("../utils/stringToConveyor"));

var image_loader_1 = __importDefault(require("./image-loader")); //TODO: make view its own object


exports.setDirectionBorder = function (direction) {};

exports.drawGrid = function (ctx, grid, direction) {
  grid.forEach(function (row) {
    row.forEach(function (cell) {
      ctx.drawImage(image_loader_1.default(direction, cell.type), width / size * x, height / size * y, width / size, height / size);
    });
  });
};

exports.setCanvasOnClick = function (canvasOnClick, canvas) {
  canvas.onclick = canvasOnClick;
};

exports.setDirectionOnClick = function (setDirection, buttons) {
  buttons.forEach(function (button) {
    button.onclick = setDirection;
  });
};

exports.initializeView = function (menuButtons, grid, canvas, direction) {
  setGridSize(grid);
  initializeButtons(menuButtons, direction);
  initializeCanvas(canvas);
};

var initializeCanvas = function initializeCanvas(canvas) {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#eeeeee";
  canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);
};

var setGridSize = function setGridSize(grid) {
  var width = grid.parentElement.clientWidth;
  var height = grid.parentElement.clientHeight;
  var size = width > height ? height : width;
  grid.style.height = size + "px";
  grid.style.width = size * 1.5 + "px";
};

var initializeButtons = function initializeButtons(elements, direction) {
  elements.forEach(function (element) {
    setImageSource(element, direction);
    preventDrag(element);
  });
};

var setImageSource = function setImageSource(element, direction) {
  var imageSource = image_loader_1.default(direction, stringToConveyor_1.default(element.getAttribute('id'))).src;
  element.setAttribute('src', imageSource);
};

var preventDrag = function preventDrag(element) {
  // TODO: Refactor to initalizeButtons if nothing else is added
  // Refactor to initialize one time stuff if more is added
  element.ondragstart = function (e) {
    e.preventDefault();
  };
};
},{"../utils/stringToConveyor":"src2/utils/stringToConveyor.ts","./image-loader":"src2/view/image-loader.ts"}],"src2/utils/gridManipulators.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var types_1 = require("../types"); // Move back to main-model???


exports.createGrid = function (size) {
  var grid = Array(size).fill(undefined).map(function () {
    return Array(size).fill(undefined);
  });
  fillEmptyGrid(grid);
  return grid;
};

var filler =
/** @class */
function () {
  function filler() {}

  return filler;
}();

var fillEmptyGrid = function fillEmptyGrid(grid) {
  //TODO: replace with non-filler
  grid.map(function (row) {
    return row.map(function () {
      return new filler();
    });
  });
};

exports.createConveyor = function (type) {
  switch (type) {
    case types_1.Conveyors.Base:
      return new filler();

    default:
      return new filler();
  }
};
},{"../types":"src2/types.ts"}],"src2/model/main-model.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var types_1 = require("../types");

var gridManipulators_1 = require("../utils/gridManipulators");

var model =
/** @class */
function () {
  function model() {
    var _this = this;

    this.menu = {
      selectedConveyor: types_1.Conveyors.Mover,
      selectedMemoryType: types_1.MemoryType.A,
      selectedDirection: types_1.Direction.Down
    };
    this.level = {
      levelSize: 3
    };
    this.board = {
      memory: {
        A: 0,
        B: 0,
        C: 0
      },
      resetMemory: function resetMemory() {
        _this.board.memory.A = 0;
        _this.board.memory.B = 0;
        _this.board.memory.C = 0;
      },
      grid: [],
      resetGrid: function resetGrid() {
        _this.board.grid = gridManipulators_1.createGrid(_this.level.levelSize);
      },
      updateGrid: function updateGrid(x, y) {
        _this.board.grid[x][y] = gridManipulators_1.createConveyor(_this.menu.selectedConveyor);
        console.log(_this.board.grid);
      }
    };
    this.board.grid = gridManipulators_1.createGrid(this.level.levelSize);
  }

  return model;
}();

exports.default = model;
},{"../types":"src2/types.ts","../utils/gridManipulators":"src2/utils/gridManipulators.ts"}],"src2/main-controller.ts":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var view = __importStar(require("./view/main-view"));

var main_model_1 = __importDefault(require("./model/main-model"));

var types_1 = require("./types");

var Controller =
/** @class */
function () {
  function Controller() {
    var _this = this;

    this.isRunning = false;

    this.canvasOnClick = function (e) {
      var divisor = e.target.clientHeight / _this.model.level.levelSize;
      var xclick = Math.floor(e.offsetX / divisor);
      var yclick = Math.floor(e.offsetY / divisor);

      _this.model.board.updateGrid(xclick, yclick);

      _this.updateView();
    };

    this.directionOnClick = function (e) {
      var img = e.currentTarget;
      var id = img.getAttribute('id');

      switch (id) {
        case 'up':
          _this.model.menu.selectedDirection = types_1.Direction.Up;
          break;

        case 'down':
          _this.model.menu.selectedDirection = types_1.Direction.Down;
          break;

        case 'left':
          _this.model.menu.selectedDirection = types_1.Direction.Left;
          break;

        case 'right':
          _this.model.menu.selectedDirection = types_1.Direction.Right;
          break;

        default:
          break;
      }

      _this.updateView();
    };

    this.updateView = function () {
      view.setDirectionBorder(_this.model.menu.selectedDirection);
      view.drawGrid(document.querySelector('#canvas').getContext("2d"), _this.model.board.grid, types_1.Direction.Down);
    };

    this.model = new main_model_1.default();
    view.initializeView(document.querySelectorAll('.menu_buttons'), document.querySelector('#grid'), document.querySelector('#canvas'), types_1.Direction.Down);
    view.setDirectionOnClick(this.directionOnClick, document.querySelectorAll('.menu_direction'));
    view.setCanvasOnClick(this.canvasOnClick, document.querySelector('#canvas'));
  }

  return Controller;
}();

new Controller();
},{"./view/main-view":"src2/view/main-view.ts","./model/main-model":"src2/model/main-model.ts","./types":"src2/types.ts"}],"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43975" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src2/main-controller.ts"], null)
//# sourceMappingURL=/main-controller.7aa73ee8.js.map