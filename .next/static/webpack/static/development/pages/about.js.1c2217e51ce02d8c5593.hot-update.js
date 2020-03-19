webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/meatripoli/ClassWork/FinalProject/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Layout(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('home'),
      name = _useState[0],
      setName = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    className: "jsx-1643877612",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    pointing: true,
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    name: "login",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    name: "form",
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1643877612",
    __self: this
  }, "h1.jsx-1643877612{border-bottom:1px solid gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWF0cmlwb2xpL0NsYXNzV29yay9GaW5hbFByb2plY3QvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY29CLEFBRzhDLDZCQUNqQyIsImZpbGUiOiIvVXNlcnMvbWVhdHJpcG9saS9DbGFzc1dvcmsvRmluYWxQcm9qZWN0L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gICAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZSgnaG9tZScpO1xuICAgIHJldHVybiAoPD5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxNZW51IHBvaW50aW5nIHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtICBuYW1lPSdsb2dpbicgaHJlZj1cIi9cIi8+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSAgbmFtZT0nZm9ybScgaHJlZj1cIi9hYm91dFwiLz5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvPilcbn1cblxuLypcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVFeGFtcGxlU2Vjb25kYXJ5UG9pbnRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ2hvbWUnIH1cblxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNZW51IHBvaW50aW5nIHNlY29uZGFyeT5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBuYW1lPSdob21lJ1xuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnaG9tZSd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgIG5hbWU9J21lc3NhZ2VzJ1xuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnbWVzc2FnZXMnfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBuYW1lPSdmcmllbmRzJ1xuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnZnJpZW5kcyd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249J3JpZ2h0Jz5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT0nbG9nb3V0J1xuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdsb2dvdXQnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICAgIDwvTWVudT5cblxuICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL3dpcmVmcmFtZS9tZWRpYS1wYXJhZ3JhcGgucG5nJyAvPlxuICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiovIl19 */\n/*@ sourceURL=/Users/meatripoli/ClassWork/FinalProject/components/Layout.js */"));
}
/*
export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    )
  }
}
*/

/***/ })

})
//# sourceMappingURL=about.js.1c2217e51ce02d8c5593.hot-update.js.map