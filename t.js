function loginAndPasswordVerification(login, password){
    const trueLogin = "ocharovashka";
    const truePassword = '123456789';
   if (login === undefined || password === undefined) {
    console.log("ERROR")
   }
    else if ( login === trueLogin && password === truePassword){
        console.log( "u are logged ")
    }
     else if ( login !== trueLogin && password !== truePassword){
        console.log ( "both inputs are wrong")
    }
    else if ( login != trueLogin){
        console.log( "ur login is wrong")
    }
    else if ( password != truePassword){
        console.log('ur password - ' + password + 'is wrong')
    }
   else {
        console.log("sorry u are not registered - u can cry")
    } //я не придумала такого варианта что вышел этот вариант :(((
}
loginAndPasswordVerification("ocharovashka",'123456789');// все правильно
loginAndPasswordVerification("blabla", '123456789'); // !логин 
loginAndPasswordVerification("ocharovashka", '87655469'); //!пароль
loginAndPasswordVerification('паьи', "50660");// !логин !пароль
loginAndPasswordVerification( undefined, undefined); // ничего не написано 
loginAndPasswordVerification( null); 
