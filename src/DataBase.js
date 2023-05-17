export let data = [];

export function addSomethingToData(value){
    data =[...data,value]
}

export function removeSomethingFromData(value){
    [value, ...data] = data
    console.log(data)
}

export function getContentAndPageNumWithId(id){
    for(let i = 0 ; i< data.length;i++){
        if(data[i].id == id) return data[i];
    }

}