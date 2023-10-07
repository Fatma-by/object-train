function fullname(Obj){

    if (!Obj.firstname ||!Obj.lastname) {
        console.log("error");

        return "error"
                                
    }

    else{
        Obj.fullname= Obj.firstname +" "+ Obj.lastname;
    }

} 
let my ={ lastname:"by"}
console.log(my);
fullname( my)
console.log(my);


function books(title, authors){

    let a ={}
    for (let i = 0; i < array.length; i++) {
        a['author'+""+i+1] = authors[i]
        
    }

    return{
        title,

        authors,
    }
}

function books(title, authors){

   
    return{
        title,

        authors,
    }
}

/*search book */

function  seacrh(array,query) {

    for (let i = 0 ; i<array.length;i++){
         if (array[i].toLowerCase() ==query.toLowerCase() )
             return array[i]
         else{
             let aux = array[i].split(' ')
           for (let j = 0 ; j<aux.length;j++)
                  if (aux[j].toLowerCase() == query.toLowerCase())
 
                     return array[i]
 
               }
 
         }
    }

