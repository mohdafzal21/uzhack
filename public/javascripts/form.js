const form = []
form.database = {}

const loadAssests = function(){
$.getJSON('/form/', function(data){
    // console.log(data)
    form.database = data
    form.init()
})
}

 form.init = function(){
     form.add();
}

//adding a new restaurant
    form.add = function(){
    $(".add").on("click", function(){
        $("#add").show()
    })   
    
   }



   
loadAssests()