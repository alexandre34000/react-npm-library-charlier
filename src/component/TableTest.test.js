import {toSelectPage, toSearchByValue, sortList, buildHeaderElement} from'./TableTest';
import bodyElements from '../data/bodyElements'



describe('To select next or prev page',() => {
    it('should return something',() =>{
        expect(toSelectPage("next", 1)).toBeDefined()
    });

    it('should return a number',() =>{
        expect(toSelectPage("next", 1)).not.toBeNaN()
    });

    it('should return next page',() =>{
        expect(toSelectPage("next", 1)).toEqual(2)
    });

    it('should return prev page',() =>{
        expect(toSelectPage("prev", 2)).toEqual(1)
    });

    it('should return current page',() =>{
        expect(toSelectPage("", 2)).toEqual(2)
    });

})

describe('To search by value',() => {
    it('should return something',() =>{
        expect(toSearchByValue(bodyElements,'a', "firstName")).toBeDefined()
    });
    
    it('should return array filtered with predicat a',() =>{
        expect(toSearchByValue(bodyElements,'a', "firstName")).toEqual(
            expect.arrayContaining([
                expect.objectContaining({firstName:"alex"}),
                expect.objectContaining({firstName:"abcd"}),
                expect.objectContaining({firstName:"aral"}),
                expect.objectContaining({firstName:"alix"}),
            ]
            
        ))
    });
    it('should return array filtered with predicat  al',() =>{
        expect(toSearchByValue(bodyElements,'al', "firstName")).toEqual(
            expect.arrayContaining([
                expect.objectContaining({firstName:"alex"}),
                expect.objectContaining({firstName:"alix"}),
            ]
            
        ))
    });
    it('should return array filtered with predicat  alex',() =>{
        expect(toSearchByValue(bodyElements,'ale', "firstName")).toEqual(
            expect.arrayContaining([
                expect.objectContaining({firstName:"alex"})
            ]
        ))
    });

    it('should return array filtered with predicat  zaza',() =>{
        expect(toSearchByValue(bodyElements,'zaza', "lastName")).toEqual(
            expect.arrayContaining([
                expect.objectContaining({lastName:"zaza"})
            ]
        ))
    });
    it('should return array filtered with predicat of date', () =>{
        expect(toSearchByValue(bodyElements, "21/09", "dateOfBirth")).toEqual(
            expect.arrayContaining([
                expect.objectContaining({dateOfBirth: "21/09/2018" }),
                expect.objectContaining({dateOfBirth: "21/09/2020"}),
                expect.not.objectContaining({dateOfBirth: "21/06/2018"})
            ])
        )
    })
});

describe('To sort list increase or decrease',() => {
    it('should return list decrease',() =>{
        expect(sortList(bodyElements,'firstName', "desc")).toBeDefined()
    });

    it('should return list increase',() =>{
        expect(sortList(bodyElements,'firstName', "")).toBeDefined()
    });

    it('should return array of object sorted in decrease for string', ()=>{
        expect(sortList(bodyElements,'firstName', "desc")).toStrictEqual(
            [...bodyElements].sort((a,b)=>{
            let first = a.firstName.toUpperCase();
            let second =  b.firstName.toUpperCase();
            return second.localeCompare(first);
        }))
    });

    it('should return array of object sorted in increase for string', ()=>{
        expect(sortList(bodyElements,'firstName', "")).toStrictEqual(
            [...bodyElements].sort((a,b)=>{
            let first = a.firstName.toUpperCase();
            let second =  b.firstName.toUpperCase();
            return first.localeCompare(second);
        }))
    });

    it('should return array of object sorted in increase for date', ()=>{
        expect(sortList(bodyElements,'dateOfBirth', "")).toStrictEqual(
            [...bodyElements].sort((a,b)=>{
            let first = a.dateOfBirth.split('/').reverse().join('');
            let second =  b.dateOfBirth.split('/').reverse().join('');
            return first.localeCompare(second);
        }))
    });

    it('should return array of object sorted in decrease for date', ()=>{
        expect(sortList(bodyElements,'dateOfBirth', "desc")).toStrictEqual(
            [...bodyElements].sort((a,b)=>{
            let first = a.dateOfBirth.split('/').reverse().join('');
            let second =  b.dateOfBirth.split('/').reverse().join('');
            return second.localeCompare(first);
        }))
    });
});

describe('To build header elements',() => {
    it('should return header',() =>{
        expect(buildHeaderElement(bodyElements,{})).toBeDefined()
    });
    it('should return header value same as key',() =>{
        const myHeader ={firstName: "firstName", lastName: "lastName", dateOfBirth: "dateOfBirth"}
        expect(buildHeaderElement(bodyElements,{})).toEqual(myHeader)
    });
    it('should return value of header same as predicat',() =>{
        const myHeader ={firstName: "Name", lastName: "Last name", dateOfBirth: "Date Of Birth"}
        expect(buildHeaderElement(bodyElements,{firstName: "Name", lastName: "Last name", dateOfBirth: "Date Of Birth"})).toEqual(myHeader)
    });
});