var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "Chat", style: "min-height:" + _vm.height + "px" }, [_c("div", { staticClass: "Chat__left" }, [_c("ChatList", { attrs: { "items": _vm.chats }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } }, scopedSlots: _vm._u([{ key: "empty", fn: function() {
    return [_vm._t("empty")];
  }, proxy: true }], null, true) })], 1), _c("div", { staticClass: "Chat__right" }, [_c("div", { staticClass: "Chat__background" }, [_vm._t("background")], 2), _c("div", { staticClass: "Chat__foreground" }, [_c("div", { staticClass: "Chat__messages" }, [_c("ChatMessages", { attrs: { "items": _vm.messages } })], 1), _c("div", { staticClass: "Chat__input" }, [_c("ChatInput", { on: { "submit": _vm.onNewMessage } })], 1)])])]);
};
var staticRenderFns$5 = [];
var Chats_vue_vue_type_style_index_0_lang = "\n.Chat {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  /* min-height: 200px; */\n}\n.Chat__messages {\n  padding: 10px;\n}\n.Chat__foreground {\n  width: 100%;\n  z-index: 1;\n  position: absolute;\n  height: 100%;\n}\n.Chat__right {\n  position: relative;\n  flex-grow: 1;\n}\n.Chat__input {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.Chat__background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  /* background-image: radial-gradient(\n      circle at 100% 100%,\n      rgba(173, 216, 230, 0.8),\n      rgba(255, 192, 203, 0.05)\n    ),\n    radial-gradient(\n      circle at 100% 0,\n      rgba(227, 173, 230, 0.05),\n      rgba(227, 173, 230, 0.8)\n    ),\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(255, 255, 0, 0.5),\n      rgba(255, 192, 203, 0.1)\n    ); */\n}\n";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles2, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles2) {
        injectStyles2.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles2) {
    hook = shadowMode ? function() {
      injectStyles2.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles2;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const script$5 = {
  props: {
    height: { type: Number, default: 200 },
    chats: { type: Array, default: () => [] },
    messages: { type: Array, default: () => [] }
  },
  methods: {
    onNewMessage($event) {
      this.$emit("input", $event);
    }
  }
};
const __cssModules$5 = {};
var component$5 = normalizeComponent(script$5, render$5, staticRenderFns$5, false, injectStyles$5, null, null, null);
function injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
component$5.options.__file = "src/Chats.vue";
var Chats = component$5.exports;
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "ChatList" }, [_vm._l(_vm.items, function(item, index) {
    return [_c("ChatListItem", { key: index, attrs: { "item": item }, on: { "click": function($event) {
      return _vm.$emit("click", item);
    } } })];
  }), _vm.items.length === 0 ? _c("div", [_vm._t("empty", function() {
    return [_vm._m(0)];
  })], 2) : _vm._e()], 2);
};
var staticRenderFns$4 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "ChatList__empty" }, [_c("p", [_vm._v("No chat history")])]);
}];
var ChatList_vue_vue_type_style_index_0_lang = "\n.ChatList {\n  background: white;\n  min-width: 330px;\n  min-height: 100%;\n}\n.ChatList__empty {\n  text-align: center;\n  padding:20px;\n}\n";
const ITEMS = [
  {
    id: "12",
    seen: 0,
    subtitle: "Subtitle",
    time: "2020-08-18 15:47:36",
    title: "John",
    new: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "12",
    seen: 0,
    subtitle: "Subtitle",
    time: "2020-08-18 15:47:36",
    title: "John",
    new: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];
const script$4 = {
  props: {
    items: {
      type: Array,
      default: () => ITEMS
    }
  }
};
const __cssModules$4 = {};
var component$4 = normalizeComponent(script$4, render$4, staticRenderFns$4, false, injectStyles$4, null, null, null);
function injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
component$4.options.__file = "src/ChatList.vue";
var ChatList = component$4.exports;
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "ChatMessages" }, _vm._l(_vm._items, function(item, index) {
    return _c("div", { key: index, staticClass: "ChatMessages__item" }, [item.isNewDay ? _c("div", { staticClass: "ChatMessages__date" }, [_c("div", { staticClass: "ChatMessages__tooltip" }, [_vm._v(" " + _vm._s(_vm._f("format")(item.date)) + " "), _c("span", { staticClass: "tooltiptext" }, [_vm._v(_vm._s(item.date))])])]) : _vm._e(), _c("div", { staticClass: "ChatMessages__message", class: "ChatMessages--" + (item.send ? "left" : "right") }, [_c("ChatMessage", _vm._b({ staticClass: "ChatMessages__messagewidth", attrs: { "send": item.send } }, "ChatMessage", item, false))], 1)]);
  }), 0);
};
var staticRenderFns$3 = [];
var ChatMessages_vue_vue_type_style_index_0_lang = "\n.ChatMessages__message {\n  display: flex;\n}\n.ChatMessages--left {\n  justify-content: flex-end;\n}\n.ChatMessages--right {\n  justify-content: flex-start;\n}\n.ChatMessages__messagewidth {\n  max-width: 75%;\n}\n.ChatMessages__date {\n  text-align: center;\n  background: #e1f4fb;\n  max-width: 200px;\n  margin: auto;\n  border-radius: 6px;\n}\n\n/* Tooltip container */\n.ChatMessages__tooltip {\n  position: relative;\n  display: inline-block;\n  /* border-bottom: 1px dotted black;  */\n  /* If you want dots under the hoverable text */\n}\n\n/* Tooltip text */\n.ChatMessages__tooltip .tooltiptext {\n  visibility: hidden;\n  width: 200px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px;\n  border-radius: 6px;\n  font-size: 12px;\n  opacity: 0.6;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.ChatMessages__tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n";
const script$3 = {
  filters: {
    format(date = new Date()) {
      var today = new Date();
      const diff = today.getTime() - date.getTime();
      const dayDiff = diff / 864e5;
      return dayDiff > 5 ? new Intl.DateTimeFormat("default", {}).format(new Date(date)) : new Intl.DateTimeFormat("default", {
        weekday: "long"
      }).format(new Date(date));
    }
  },
  props: {
    items: {
      type: Array,
      default: () => [
        {
          date: new Date(),
          message: "Hello Send",
          send: true
        },
        {
          date: new Date(),
          message: "Hello Received",
          send: false
        }
      ]
    },
    authorId: {
      type: Number,
      default: 0
    }
  },
  computed: {
    _items() {
      return this.items.map((item, index) => {
        const previous = this.items[index - 1];
        const compareDate = (_d1, _d2) => {
          const d1 = new Date(_d1);
          const d2 = new Date(_d2);
          return new Date(d1.setHours(0, 0, 0, 0)) === new Date(d2.setHours(0, 0, 0, 0));
        };
        return __spreadProps(__spreadValues({}, item), {
          isNewDay: index > 0 ? compareDate(previous.date, item.date) : true
        });
      });
    }
  }
};
const __cssModules$3 = {};
var component$3 = normalizeComponent(script$3, render$3, staticRenderFns$3, false, injectStyles$3, null, null, null);
function injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
component$3.options.__file = "src/ChatMessages.vue";
var ChatMessages = component$3.exports;
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "ChatMessage", class: "ChatMessage--" + _vm._direction }, [_c("div", { staticClass: "ChatMessage__message" }, [_vm._t("default", function() {
    return [_vm._v(" " + _vm._s(_vm.message) + " ")];
  }), _c("div", { staticClass: "ChatMessage__info" }, [_c("small", { staticClass: "ChatMessage__time" }, [_vm._v(" " + _vm._s(_vm._f("format")(_vm.date)) + " ")]), _vm.received ? [_c("svg", { attrs: { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 18 18", "width": "18", "height": "18" } }, [_c("path", { attrs: { "fill": "currentColor", "d": "M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z" } })])] : _vm._e()], 2)], 2)]);
};
var staticRenderFns$2 = [];
var ChatMessage_vue_vue_type_style_index_0_lang = "\n.ChatMessage {\n  background: white;\n  margin: 5px;\n  padding: 5px;\n  border-radius: 5px;\n}\n.ChatMessage--own {\n  background: #dcf8c6;\n}\n.ChatMessage--foreign {\n  background: #fff;\n}\n.ChatMessage__info {\n  margin-left: 10px;\n  float: right;\n}\n.ChatMessage__time {\n  color: rgba(0, 0, 0, 0.45);\n}\n";
const script$2 = {
  filters: {
    format(date = new Date()) {
      return date ? new Intl.DateTimeFormat("default", {
        hour: "numeric",
        minute: "numeric"
      }).format(new Date(date)) : "";
    }
  },
  props: {
    send: {
      type: Boolean,
      default: false
    },
    received: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: () => new Date(),
      required: false
    },
    message: {
      type: String,
      default: "",
      required: false
    }
  },
  computed: {
    _direction: (vm) => vm.send ? "own" : "foreign"
  }
};
const __cssModules$2 = {};
var component$2 = normalizeComponent(script$2, render$2, staticRenderFns$2, false, injectStyles$2, null, null, null);
function injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
component$2.options.__file = "src/ChatMessage.vue";
var ChatMessage = component$2.exports;
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("form", { on: { "submit": function($event) {
    $event.preventDefault();
    return _vm.submit(_vm.form);
  } } }, [_c("div", { staticClass: "ChatInput" }, [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.form.message, expression: "form.message" }], staticClass: "ChatInput__input", attrs: { "placeholder": "Type a message", "flat": "", "solo": "", "hide-details": "" }, domProps: { "value": _vm.form.message }, on: { "input": function($event) {
    if ($event.target.composing) {
      return;
    }
    _vm.$set(_vm.form, "message", $event.target.value);
  } } })])]);
};
var staticRenderFns$1 = [];
var ChatInput_vue_vue_type_style_index_0_lang = "\n.ChatInput {\n  background: #F0F0F0;\n  padding: 10px;\n  display: flex;\n}\n.ChatInput__input {\n  width: 100%;\n  height: 48px;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  padding: 0 12px;\n}\n";
const FORM = () => ({
  message: "",
  send: true
});
const script$1 = {
  props: {},
  data: (vm) => ({
    form: FORM(),
    loading: false
  }),
  methods: {
    submit(form) {
      this.$emit("submit", form);
      this.form = FORM();
    }
  }
};
const __cssModules$1 = {};
var component$1 = normalizeComponent(script$1, render$1, staticRenderFns$1, false, injectStyles$1, null, null, null);
function injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
component$1.options.__file = "src/ChatInput.vue";
var ChatInput = component$1.exports;
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", _vm._g({ staticClass: "ChatListItem", attrs: { "to": _vm.item.to || "#" } }, _vm.$listeners), [_c("div", { staticClass: "ChatListItem__avatar" }, [_c("img", { attrs: { "src": _vm.item.avatar } })]), _c("div", { staticClass: "ChatListItem__content" }, [_c("div", { staticClass: "ChatListItem__column ChatListItem__text" }, [_c("div", { staticClass: "ChatListItem__title" }, [_vm._v(" " + _vm._s(_vm.item.title || "?") + " ")]), _vm._t("subtitle", function() {
    return [_c("div", { staticClass: "ChatListItem__subtitle" }, [_vm._v(" " + _vm._s(_vm.item.subtitle) + " ")])];
  }, { "item": _vm.item })], 2), _c("div", { staticClass: "ChatListItem__column" }, [_c("div", { staticClass: "ChatListItem__meta" }, [_c("div", { staticClass: "ChatListItem__date" }, [_vm._v(" " + _vm._s(_vm._f("date")(_vm.item.time)) + " ")]), _c("div", [!_vm.item.seen ? _c("div", { staticClass: "ChatListItem__chip", attrs: { "dark": "", "small": "", "color": "#06d755" } }, [_vm._v(" " + _vm._s(_vm.item.new) + " ")]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
var ChatListItem_vue_vue_type_style_index_0_lang = "\n.ChatListItem__meta {\n  flex-direction: column;\n  text-align: right;\n}\n.ChatListItem__text {\n  flex-grow: 1;\n}\n.ChatListItem__title {\n  align-self: center;\n  font-size: 1rem;\n}\n.ChatListItem__subtitle {\n  font-size: 0.875rem;\n}\n.ChatListItem__chip {\n  background-color: rgb(6, 215, 85);\n  border-color: rgb(6, 215, 85);\n  border-radius: 12px;\n  font-size: 12px;\n  height: 24px;\n  color: #fff;\n\n  align-items: center;\n  cursor: default;\n  display: inline-flex;\n  line-height: 20px;\n  max-width: 100%;\n  outline: none;\n  overflow: hidden;\n  padding: 0 12px;\n  position: relative;\n  text-decoration: none;\n  transition-duration: 0.28s;\n  transition-property: box-shadow, opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.ChatListItem {\n  cursor: pointer;\n\n  display: flex;\n  text-decoration: none;\n  padding: 10px;\n  align-items: center;\n}\n.ChatListItem__avatar {\n  border-radius: 50%;\n  height: 48px;\n  min-width: 48px;\n  width: 48px;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.ChatListItem__content {\n  align-items: center;\n  align-self: center;\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1 1;\n  overflow: hidden;\n  padding: 12px 0;\n}\na.ChatListItem {\n  color: rgba(0, 0, 0, 0.87);\n}\n.ChatListItem:hover {\n  background: #ebebeb;\n}\n.ChatListItem__date {\n  color: grey;\n  font-size: 12px;\n}\n";
const script = {
  filters: {
    date(value, format = { year: "numeric", month: "short", day: "2-digit" }) {
      if (value) {
        const d = new Date(value);
        const dtf = new Intl.DateTimeFormat("en", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        });
        const [
          { value: mo },
          ,
          { value: da },
          ,
          { value: ye }
        ] = dtf.formatToParts(d);
        return `${da}-${mo}-${ye}`;
      }
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
};
const __cssModules = {};
var component = normalizeComponent(script, render, staticRenderFns, false, injectStyles, null, null, null);
function injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
component.options.__file = "src/ChatListItem.vue";
var ChatListItem = component.exports;
function plugin(Vue) {
  Vue.component("Chats", Chats);
  Vue.component("ChatList", ChatList);
  Vue.component("ChatMessages", ChatMessages);
  Vue.component("ChatMessage", ChatMessage);
  Vue.component("ChatInput", ChatInput);
  Vue.component("ChatListItem", ChatListItem);
}
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
export default plugin;
