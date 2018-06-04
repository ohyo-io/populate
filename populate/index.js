/*!
 * Populate <https://github.com/ohyo-io/populate>
 *
 * Copyright (c) 2015, 2117, Dudochkin Victor <dudochkin.victor@gmail.com>.
 * Released under the MIT License.
 */

"use strict";

Object.prototype.populate = function(template) {
  var keys = Object.keys(this);
  for (var idx = 0, len = keys.length; idx < len; idx++) {
    let key = keys[idx];
    let [_id, _attr] = key.split("__");
    if (_id && _attr) {
      let _el = template.querySelector("#" + _id);
      if (_el) {
        switch (_attr) {
          case "text":
            try {
              _el.innerHTML = this[key];
            } catch (e) {
              console.log(e);
            }
            break;
          default:
            try {
              _el[_attr] = this[key];
            } catch (e) {
              console.log(e);
            }
            break;
        }
      } else {
        console.log("no element", "." + _id);
      }
    } else {
      console.log("some wrong");
    }
  }
};

Array.prototype.populate = function(template, container) {
  for (var idx = 0, len = this.length; idx < len; idx++) {
    var obj = this[idx];
    if (typeof obj == "object") {
      obj.populate(template);
      container.appendChild(document.importNode(template, true));
    }
  }
};
