import "./table.css";
import React, {useState, useEffect} from 'react';


const TableHeader = (props) => {
 
    return Object.entries(props.eltHead).map(([k, v]) => {  
        return <th className="component-table__th-table" key={k} data-name ={k}>
                    <p className="table-header__text" data-name ={k} onClick={props.handleClickHeader} data-focus={props.currentColumn === k ? "true" : "false"} tabIndex="1">{v}</p>
                    <span className="table-header__icon-up table-header__icon-filter"   data-name="desc" alt="arrowup" onClick={props.handleClickSorted}>{'\uD83E\uDC81'}</span>
                    <span className="table-header__icon-dwn table-header__icon-filter" data-name="asc" alt="arrowdwn"  onClick={props.handleClickSorted}>{'\uD83E\uDC83'}</span>
                </th>                  
    })
}

const TableBody = (props) => {

    return (
        <tr onClick={props.event}>
            {Object.values(props.eltBody).map((el, i) => {
                return <td className="component-table__td-table" value={el} key={i}>{el}</td>
            })}
        </tr>
    )
}


/**
 * To obtain the list for a page
 * @param {<Array<Object>} list of items
 * @param {number} itemsByPage selected by selectBox ui
 * @param {number} pageNb 
 * @returns {Array.<Object>} Array of items for the page selected
 */
const getPageList = (list, itemsByPage, pageNb)=>{
    let newList = [];
    let startIndex= (pageNb - 1) * itemsByPage;
    let nbItems = startIndex + itemsByPage;
    let endIndex = nbItems > list.length ? list.length : nbItems;
    for (let i = startIndex; i < endIndex; i++){
        newList.push(list[i]);
    }
    return newList
}


/**
 * Sort the list increase or decrease
 * @param {string[]} arr
 * @param {"asc"|"desc"} mode
 * @param {string} colName
 * @return {Array.<Object>} array of items sorted
 */
const sortList =(arr, colName, mode)=>{
    let newArray = arr.slice(0);
    let isDate = newArray[0][colName].includes("/") ? true : false;
    return newArray.sort((a, b)=>{ 
        let first = isDate ? a[colName].split('/').reverse().join('') : a[colName].toUpperCase();
        let second = isDate ? b[colName].split('/').reverse().join('') : b[colName].toUpperCase();
            if(mode==="desc"){
                return second.localeCompare(first)
            }else{
                return first.localeCompare(second)
            }   
    })
}

/**
 * Select object by predicat enter in input search
 * @param {Array.<Object>} arr 
 * @param {String} value the value enter in input search
 * @param {String} keyName the header's name of column
 * @returns {Array.<Object>} filtered by the predicat 
 */
const toSearchByValue =(arr, value, keyName)=>{
    let len = value.length;
    let arrayFiltered = [...arr].filter((el)=>el[keyName].toUpperCase().substring(0, len) === value.toUpperCase())
    return arrayFiltered;
}

/**
 * 
 * @param {String*} pred 
 * @param {Number} currentPage 
 * @returns {Number} next page number
 */
const toSelectPage =(pred, currentPage)=>{

    switch (pred){
        case "next" :
            return currentPage + 1; 
        case "prev" :
            return currentPage - 1;
        default :
            return Number(pred);
    }
}

/**
 * Customize each titles of column
 * @param {Array.<Object>} bodyEl 
 * @param {Object.<String>} headEl 
 * @returns Object.<String>
 */
const buildHeaderElement = (bodyEl, headEl)=>{
    if (Object.keys(headEl).length > 0){
        return headEl
    }
    else {
        return Object.keys(bodyEl[0]).reduce((acc, key)=>({...acc, [key]: key}),{})
    }
}


/**
 * Create list of items from headItems selected
 * @param {Object.<String>} headItems 
 * @param {Array.<Object>} bodyItems 
 * @returns Array of Object
 */
const toBuildList=(headItems, bodyItems)=>{
    const headerModel= Object.entries(headItems);
    let newArray=[] ;

    for (let i= 0; i<bodyItems.length; i++ ){
        let itemsArr = Object.entries(bodyItems[i]) 
        let array=[];
        for(let j = 0; j< itemsArr.length; j++){
            for(let k =0 ; k < headerModel.length; k++){
                if (itemsArr[j][0]=== headerModel[k][0]){
                    array.push(itemsArr[j]) 
                }
            }  
        }
        newArray.push(Object.fromEntries(array))
    }

   return newArray;
}

/**
 * Component Table for npm
 * Component
 * @param {*} props { bodyElements: Array<object>, headerElements: <object>, optionsTable: <object>}
 * @returns DOM
 */
const TableComponent = (props) => {

    const isPropsExist=(name)=>{
        return props.hasOwnProperty(name)
    }

    const listBody = ((isPropsExist('bodyElements')) ? props.bodyElements || [{noDataFound :"no data found"}]: [{noDataFound :"no data found"}])
    const valueOptions ={
        nbRows: (isPropsExist('optionsTable'))  ?  props.optionsTable.nbRows || [10, 20] : [10, 20] , 
        color: (isPropsExist('optionsTable'))  ?  props.optionsTable.color || "grey" : "grey" ,
        headElements: buildHeaderElement (listBody , ((isPropsExist('headerElements')) ? props.headerElements || {} : {}))
    }
                  
    const [sizeOfList, setSizeOfList] = useState(valueOptions.nbRows[0]);
    const [listByPage, setListByPage] = useState([]);
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [columnName, setColumnName] = useState(Object.keys(listBody[0])[0]);
    const [isError, setIsError] = useState (false);
    const nbOfPages = Math.ceil(list.length / sizeOfList);

    useEffect(()=>{
        setList(toBuildList(valueOptions.headElements, listBody))
    },[])
    
    useEffect(() =>{
        const newPageList = getPageList(list, sizeOfList, currentPage);
        setListByPage(newPageList);
    },[sizeOfList, list, currentPage])

    const handleClickHeader = (e) =>{
        setColumnName(e.target.dataset.name);
    }

    const handleClickSorted = (e) =>{
        let sorted = e.target.dataset.name;
        let colName =e.target.parentNode.dataset.name;  
        setColumnName(colName);
        setList(sortList(list, colName,sorted));
    }

 /**
  * Filter the Array of object and setList for change listByPage inside useEffect
  * @param {String} e  onChange input search
  */ 
    const handleChangeSearch = (e) => {
        let word = e.target.value;
        let newArr = toSearchByValue(listBody, word, columnName);
        if (newArr.length >0){
            if(isError){setIsError(false);}
            setList(sortList(toSearchByValue(listBody, word, columnName), columnName,""));  
        }else{
            setIsError(true);
        }
    }

    const handleChangeSizeOfList = (e) =>{
        setSizeOfList(e.target.value)
    }

    const handleChangePage = (e) =>{
        let texte = e.target.dataset.value;
        if(texte){
            setCurrentPage(toSelectPage(texte, currentPage));
        }
    }

    return (

        <div className="component-table__container">
            <div className="component-table__content-head">
                <div className="component-table__content-head_headers">
                    <label htmlFor="entries">Show</label>
                    <select id="entries" onChange={handleChangeSizeOfList} style={{margin: "0 10px"}}>
                        {valueOptions.nbRows.map((el, i)=>{
                            return <option key={i} >{el}</option>
                        })}  
                    </select>
                    <span>entries</span>
                </div>
                <div className="component-table__content-head_headers">
                    <label htmlFor="search"> Search : {columnName}</label>
                    <input id="search" type="search" onChange={handleChangeSearch} style={{margin: "0 10px"}}/>
                </div>
            </div>
            <div className="component-table__content-body">
            <table className="component-table__content-body__table">
                <thead className="component-table__content-body__thead">
                    <tr>
                        <TableHeader eltHead={valueOptions.headElements} handleClickHeader={handleClickHeader} handleClickSorted={handleClickSorted} currentColumn={columnName} />
                    </tr>
                </thead>
                {!isError
                ?  <tbody>
                        {listByPage.map((el, i) => <TableBody key={`${i}+${el}`} eltBody={el}  />
                        )}
                    </tbody>
                :   <tfoot>
                        <tr>
                            <td colSpan="100%">No data found</td>
                        </tr>
                    </tfoot>
                }
            </table>
            </div>
            <div className="component-table__content-footer" role="navigation" onClick={handleChangePage}>
                <p className="table-footer__counter-items">{(currentPage * sizeOfList) > list.length ? list.length : (currentPage * sizeOfList) }/ {list.length} </p>
                <button className="table-footer__button" data-value="prev" disabled={currentPage === 1}>Prev</button> 
                {[...Array(nbOfPages)].map((el,i)=><span className ="table-footer__numpage-list"  key={i} data-value={i + 1} data-active={currentPage === (i + 1)? "true" : "false"} >{i + 1}</span>)}
                <button className="table-footer__button" data-value="next" disabled={currentPage === nbOfPages}>Next</button>
            </div>
        </div>
    )
}

export default TableComponent;