import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState, useEffect } from 'react';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".component-table__container {\r\n    width: 90%;\r\n    margin: 20px auto;\r\n}\r\n\r\n.component-table__content-head {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.component-table__content-head_headers {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 18px;\r\n}\r\n\r\n.component-table__content-body {\r\n    padding: 5px 0;\r\n    width: 100%;\r\n    overflow-x: scroll;\r\n}\r\n\r\n.component-table__content-body__table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    font-size: 12px;\r\n}\r\n\r\n.component-table__content-body__thead {\r\n    width: 100%;\r\n}\r\n\r\n.component-table__th-table {\r\n    position: relative;\r\n    height: 30px;\r\n    border: 1px solid grey;\r\n    text-align: center;\r\n    line-height: 28px;\r\n}\r\n\r\n.table-header__text {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #eee;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    padding: 0 30px 0 20px;\r\n}\r\n\r\n.table-header__text[data-focus=\"true\"] {\r\n    background-color: #c2c2c2;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.table-header__icon-filter {\r\n    position: absolute;\r\n    right: 0;\r\n    width: 15px;\r\n    height: 50%;\r\n    border: 1px solid rgb(53, 53, 53);\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    background-color: white;\r\n    font-size: 10px;\r\n}\r\n\r\n.table-header__icon-up {\r\n    top: 0;\r\n    line-height: 8px;\r\n}\r\n\r\n.table-header__icon-dwn {\r\n    top: 50%;\r\n    line-height: 16px;\r\n}\r\n\r\n.table-header__icon:hover {\r\n    background-color: #c2c2c2;\r\n}\r\n\r\ntbody tr:nth-child(even) {\r\n    background: #eee;\r\n}\r\n\r\n.component-table__td-table {\r\n    padding: 5px 0;\r\n    border: 1px solid grey;\r\n    text-align: center;\r\n    font-size: 15px;\r\n}\r\n\r\n.component-table__content-footer {\r\n    display: flex;\r\n    justify-content: center;\r\n    position: relative;\r\n    padding: 10px 0;\r\n    height: 40px;\r\n}\r\n\r\n.table-footer__counter-items {\r\n    position: absolute;\r\n    top: 14px;\r\n    left: 30px;\r\n    font-size: 16px;\r\n}\r\n\r\n.table-footer__button {\r\n    width: 100px;\r\n    height: 25px;\r\n    margin: 0 50px;\r\n    font-size: 16px;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: darkgray;\r\n    color: white;\r\n    box-shadow: 3px 3px 3px grey;\r\n    cursor: pointer;\r\n}\r\n\r\n.table-footer__button:disabled {\r\n    background-color: #d3d4d3;\r\n    box-shadow: none;\r\n}\r\n\r\n.table-footer__numpage-list {\r\n    display: block;\r\n    height: 25px;\r\n    width: 25px;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    line-height: 26px;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.table-footer__numpage-list[data-active=\"true\"] {\r\n    background-color: darkgray;\r\n    border-radius: 20px;\r\n    color: white;\r\n    box-shadow: 1px 1px 1px grey;\r\n}\r\n\r\n";
n(css,{});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var TableHeader = function TableHeader(props) {
  return Object.entries(props.eltHead).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return /*#__PURE__*/React.createElement("th", {
      className: "component-table__th-table",
      key: k,
      "data-name": k
    }, /*#__PURE__*/React.createElement("p", {
      className: "table-header__text",
      "data-name": k,
      onClick: props.handleClickHeader,
      "data-focus": props.currentColumn === k ? "true" : "false",
      tabIndex: "1"
    }, v), /*#__PURE__*/React.createElement("span", {
      className: "table-header__icon-up table-header__icon-filter",
      "data-name": "desc",
      alt: "arrowup",
      onClick: props.handleClickSorted
    }, "\uD83E\uDC81"), /*#__PURE__*/React.createElement("span", {
      className: "table-header__icon-dwn table-header__icon-filter",
      "data-name": "asc",
      alt: "arrowdwn",
      onClick: props.handleClickSorted
    }, "\uD83E\uDC83"));
  });
};

var TableBody = function TableBody(props) {
  return /*#__PURE__*/React.createElement("tr", {
    onClick: props.event
  }, Object.values(props.eltBody).map(function (el, i) {
    return /*#__PURE__*/React.createElement("td", {
      className: "component-table__td-table",
      value: el,
      key: i
    }, el);
  }));
};
/**
 * To obtain the list for a page
 * @param {<Array<Object>} list of items
 * @param {number} itemsByPage selected by selectBox ui
 * @param {number} pageNb 
 * @returns {Array.<Object>} Array of items for the page selected
 */


var getPageList = function getPageList(list, itemsByPage, pageNb) {
  var newList = [];
  var startIndex = (pageNb - 1) * itemsByPage;
  var nbItems = startIndex + itemsByPage;
  var endIndex = nbItems > list.length ? list.length : nbItems;

  for (var i = startIndex; i < endIndex; i++) {
    newList.push(list[i]);
  }

  return newList;
};
/**
 * Sort the list increase or decrease
 * @param {string[]} arr
 * @param {"asc"|"desc"} mode
 * @param {string} colName
 * @return {Array.<Object>} array of items sorted
 */


var sortList = function sortList(arr, colName, mode) {
  var newArray = arr.slice(0);
  var isDate = newArray[0][colName].includes("/") ? true : false;
  return newArray.sort(function (a, b) {
    var first = isDate ? a[colName].split('/').reverse().join('') : a[colName].toUpperCase();
    var second = isDate ? b[colName].split('/').reverse().join('') : b[colName].toUpperCase();

    if (mode === "desc") {
      return second.localeCompare(first);
    } else {
      return first.localeCompare(second);
    }
  });
};
/**
 * Select object by predicat enter in input search
 * @param {Array.<Object>} arr 
 * @param {String} value the value enter in input search
 * @param {String} keyName the header's name of column
 * @returns {Array.<Object>} filtered by the predicat 
 */


var toSearchByValue = function toSearchByValue(arr, value, keyName) {
  var len = value.length;

  var arrayFiltered = _toConsumableArray(arr).filter(function (el) {
    return el[keyName].toUpperCase().substring(0, len) === value.toUpperCase();
  });

  return arrayFiltered;
};
/**
 * 
 * @param {String*} pred 
 * @param {Number} currentPage 
 * @returns {Number} next page number
 */


var toSelectPage = function toSelectPage(pred, currentPage) {
  switch (pred) {
    case "next":
      return currentPage + 1;

    case "prev":
      return currentPage - 1;

    default:
      return Number(pred);
  }
};
/**
 * Customize each titles of column
 * @param {Array.<Object>} bodyEl 
 * @param {Object.<String>} headEl 
 * @returns Object.<String>
 */


var buildHeaderElement = function buildHeaderElement(bodyEl, headEl) {
  if (Object.keys(headEl).length > 0) {
    return headEl;
  } else {
    return Object.keys(bodyEl[0]).reduce(function (acc, key) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, key));
    }, {});
  }
};
/**
 * Create list of items from headItems selected
 * @param {Object.<String>} headItems 
 * @param {Array.<Object>} bodyItems 
 * @returns Array of Object
 */


var toBuildList = function toBuildList(headItems, bodyItems) {
  var headerModel = Object.entries(headItems);
  var newArray = [];

  for (var i = 0; i < bodyItems.length; i++) {
    var itemsArr = Object.entries(bodyItems[i]);
    var array = [];

    for (var j = 0; j < itemsArr.length; j++) {
      for (var k = 0; k < headerModel.length; k++) {
        if (itemsArr[j][0] === headerModel[k][0]) {
          array.push(itemsArr[j]);
        }
      }
    }

    newArray.push(Object.fromEntries(array));
  }

  return newArray;
};
/**
 * Component Table for npm
 * Component
 * @param {*} props { bodyElements: Array<object>, headerElements: <object>, optionsTable: <object>}
 * @returns DOM
 */


var TableComponent = function TableComponent(props) {
  var isPropsExist = function isPropsExist(name) {
    return props.hasOwnProperty(name);
  };

  var listBody = isPropsExist('bodyElements') ? props.bodyElements || [{
    noDataFound: "no data found"
  }] : [{
    noDataFound: "no data found"
  }];
  var valueOptions = {
    nbRows: isPropsExist('optionsTable') ? props.optionsTable.nbRows || [10, 20] : [10, 20],
    color: isPropsExist('optionsTable') ? props.optionsTable.color || "grey" : "grey",
    headElements: buildHeaderElement(listBody, isPropsExist('headerElements') ? props.headerElements || {} : {})
  };

  var _useState = useState(valueOptions.nbRows[0]),
      _useState2 = _slicedToArray(_useState, 2),
      sizeOfList = _useState2[0],
      setSizeOfList = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      listByPage = _useState4[0],
      setListByPage = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  var _useState7 = useState(1),
      _useState8 = _slicedToArray(_useState7, 2),
      currentPage = _useState8[0],
      setCurrentPage = _useState8[1];

  var _useState9 = useState(Object.keys(listBody[0])[0]),
      _useState10 = _slicedToArray(_useState9, 2),
      columnName = _useState10[0],
      setColumnName = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isError = _useState12[0],
      setIsError = _useState12[1];

  var nbOfPages = Math.ceil(list.length / sizeOfList);
  useEffect(function () {
    setList(toBuildList(valueOptions.headElements, listBody));
  }, []);
  useEffect(function () {
    var newPageList = getPageList(list, sizeOfList, currentPage);
    setListByPage(newPageList);
  }, [sizeOfList, list, currentPage]);

  var handleClickHeader = function handleClickHeader(e) {
    setColumnName(e.target.dataset.name);
  };

  var handleClickSorted = function handleClickSorted(e) {
    var sorted = e.target.dataset.name;
    var colName = e.target.parentNode.dataset.name;
    setColumnName(colName);
    setList(sortList(list, colName, sorted));
  };
  /**
   * Filter the Array of object and setList for change listByPage inside useEffect
   * @param {String} e  onChange input search
   */


  var handleChangeSearch = function handleChangeSearch(e) {
    var word = e.target.value;
    var newArr = toSearchByValue(listBody, word, columnName);

    if (newArr.length > 0) {
      if (isError) {
        setIsError(false);
      }

      setList(sortList(toSearchByValue(listBody, word, columnName), columnName, ""));
    } else {
      setIsError(true);
    }
  };

  var handleChangeSizeOfList = function handleChangeSizeOfList(e) {
    setSizeOfList(e.target.value);
  };

  var handleChangePage = function handleChangePage(e) {
    var texte = e.target.dataset.value;

    if (texte) {
      setCurrentPage(toSelectPage(texte, currentPage));
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "component-table__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "component-table__content-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "component-table__content-head_headers"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "entries"
  }, "Show"), /*#__PURE__*/React.createElement("select", {
    id: "entries",
    onChange: handleChangeSizeOfList,
    style: {
      margin: "0 10px"
    }
  }, valueOptions.nbRows.map(function (el, i) {
    return /*#__PURE__*/React.createElement("option", {
      key: i
    }, el);
  })), /*#__PURE__*/React.createElement("span", null, "entries")), /*#__PURE__*/React.createElement("div", {
    className: "component-table__content-head_headers"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "search"
  }, " Search : ", columnName), /*#__PURE__*/React.createElement("input", {
    id: "search",
    type: "search",
    onChange: handleChangeSearch,
    style: {
      margin: "0 10px"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "component-table__content-body"
  }, /*#__PURE__*/React.createElement("table", {
    className: "component-table__content-body__table"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "component-table__content-body__thead"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(TableHeader, {
    eltHead: valueOptions.headElements,
    handleClickHeader: handleClickHeader,
    handleClickSorted: handleClickSorted,
    currentColumn: columnName
  }))), !isError ? /*#__PURE__*/React.createElement("tbody", null, listByPage.map(function (el, i) {
    return /*#__PURE__*/React.createElement(TableBody, {
      key: "".concat(i, "+").concat(el),
      eltBody: el
    });
  })) : /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "100%"
  }, "No data found"))))), /*#__PURE__*/React.createElement("div", {
    className: "component-table__content-footer",
    role: "navigation",
    onClick: handleChangePage
  }, /*#__PURE__*/React.createElement("p", {
    className: "table-footer__counter-items"
  }, currentPage * sizeOfList > list.length ? list.length : currentPage * sizeOfList, "/ ", list.length, " "), /*#__PURE__*/React.createElement("button", {
    className: "table-footer__button",
    "data-value": "prev",
    disabled: currentPage === 1
  }, "Prev"), _toConsumableArray(Array(nbOfPages)).map(function (el, i) {
    return /*#__PURE__*/React.createElement("span", {
      className: "table-footer__numpage-list",
      key: i,
      "data-value": i + 1,
      "data-active": currentPage === i + 1 ? "true" : "false"
    }, i + 1);
  }), /*#__PURE__*/React.createElement("button", {
    className: "table-footer__button",
    "data-value": "next",
    disabled: currentPage === nbOfPages
  }, "Next")));
};

var returnLibrary = function returnLibrary() {
  return {
    Table: TableComponent // you can add here other components that you want to export

  };
};

var index = returnLibrary();

export { index as default };
