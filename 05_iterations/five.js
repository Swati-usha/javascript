// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     return item;
// })
// console.log(values);

// forEach doesn't return values.

const myNums = ["1","2","3","4","5"]
//  filter returns value

//  Arrow function
const result = myNums.filter((num)=>(num>3))
// console.log(result)

const newNums = []

myNums.forEach((num) => {
    if(num >3){
        newNums.push(num)
    }
})
// console.log(newNums)

const books =[{title: 'Book One' , genre:'Fiction',publish: 1981, edition: 2004},
{title: 'Book Two' , genre:'Non-Fiction',publish: 1992, edition: 2008},
{title: 'Book Three' , genre:'History',publish: 1999, edition: 2007},
{title: 'Book Four' , genre:'Non-Fiction',publish: 1989, edition: 2010},
{title: 'Book Five' , genre:'Science',publish: 2009, edition: 2014},
{title: 'Book Six' , genre:'Fiction',publish: 1987, edition: 2010},
{title: 'Book Seven' , genre:'History',publish: 1986, edition: 1996},
{title: 'Book Eight' , genre:'Science',publish: 2011, edition: 2016},
{title: 'Book Nine' , genre:'Non-Fiction',publish: 1981, edition: 1989}];

const userbooks = books.filter((bk)=>(bk.genre === "Science"))

userbooks.forEach((item)=>(console.log(item.title)))
// console.log(userbooks)

const year_wise_filter =books.filter((bk)=>(bk.publish >2010))

console.log(year_wise_filter)