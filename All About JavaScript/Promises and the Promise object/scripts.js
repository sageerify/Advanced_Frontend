function returnMap(){
    let items =['item1', 'item2', 'item3', 'item4', 'item5', 'items6', 'items6'];
    return function(){
        return items.filter(item => item ==='items6');

    }
}
let map = returnMap();
console.log(map());