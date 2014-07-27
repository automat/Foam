var _Error = require('../system/common/Error'),
    EventDispatcher = require('../system/EventDispatcher'),
    Event = require('../system/Event');

/**
 * Representation of keyboard input.
 * @constructor
 */

function Keyboard(){
    if (Keyboard.__instance){
        throw new Error(_Error.CLASS_IS_SINGLETON);
    }

    EventDispatcher.call(this);

    this._down = false;
    this._up   = false;

    this._keycode = null;
    this._keycodePrev = null;

    this._keystr = null;
    this._keystrPrev = null;

    this._altKey = false;
    this._ctrlKey = false;
    this._shiftKey = false;

    this._timestamp = null;
    this._timestampLast = null;

    Keyboard.__instance = this;
}

Keyboard.prototype = Object.create(EventDispatcher.prototype);

/**
 * Returns true if a key is down.
 * @returns {Boolean}
 */

Keyboard.prototype.isKeyDown = function(){
    return this._down;
};

/**
 * Returns true if a key is up.
 * @returns {Boolean}
 */

Keyboard.prototype.isKeyUp = function(){
    return this._up;
};

/**
 * Return the current key code.
 * @returns {null|String}
 */

Keyboard.prototype.getKeyCode = function(){
    return this._keycode;
};

/**
 * Return the current key string.
 * @returns {null|String}
 */

Keyboard.prototype.getKeyStr = function(){
    return this._keystr;
};

/**
 * Return the previous key code.
 * @returns {null|String}
 */

Keyboard.prototype.getKeyCodePrev = function(){
    return this._keycodePrev;
}

/**
 * Return the previous key string.
 * @returns {null|String}
 */

Keyboard.prototype.getKeyStrPrev = function(){
    return this._keystrPrev;
}

/**
 * Returns true if the alt-key is pressed.
 * @returns {Boolean}
 */

Keyboard.prototype.isKeyAlt = function(){
    return this._altKey;
};

/**
 * Returns true if the ctrl-key is pressed.
 * @returns {Boolean}
 */

Keyboard.prototype.isKeyCtrl = function(){
    return this._ctrKey;
};

/**
 * Returns true if the shift-key is pressed.
 * @returns {Boolean}
 */

Keyboard.prototype.isKeyShift = function(){
    return this._shiftKey;
};

/**
 * Returns the singleton.
 * @returns {Keyboard}
 */

Keyboard.getInstance = function() {
    return Keyboard.__instance;
}

Keyboard.__instance = null;
module.exports = Keyboard;