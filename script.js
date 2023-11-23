function register(){
    window.location='./register.html'
}
const loggedobj1=JSON.parse(localStorage.getItem('loggedobj'))
const username=loggedobj1.username;
document.getElementById("head").innerHTML=`Welcome ${username}`;

function registerr(event){
    event.preventDefault();

    if(uname.value==''|| accnum.value=='' || passwd.value==''){
        alert("Enter All Fields")
    }
    else{
        if(accnum.value in localStorage){
            alert("User Already exist")
            document.getElementById("myform").reset()
        }
        else{
            const userobj={
                username:uname.value,
                accnum:accnum.value,
                passwd:passwd.value,
                balance:0
            }
            localStorage.setItem(accnum.value,JSON.stringify(userobj))
            alert("User Added Successfully")
            window.location='./login.html'
            document.getElementById("myform").reset()
            
        }
    }
}

function login(event){
    event.preventDefault();
    
    if(acnum.value==''|| pswd.value==''){
        alert("Fill up all fields")
    }
    else{
        if(acnum.value in localStorage){
            const accobj=JSON.parse(localStorage.getItem(acnum.value))
            console.log(accobj);
            if(pswd.value==accobj.passwd){
                localStorage.setItem('loggedobj',JSON.stringify(accobj))
                // localStorage.setItem(username,accobj.accnum)
                window.location='./welcome.html'
                                        
            }
            else{
                alert("Incorrect Password :login Failed")
                document.getElementById("myform1").reset()
            }
        }
        else{
            alert("Account Number does not exist")
            document.getElementById("myform1").reset()
        }
    }
    
    }
    //deposite

    function deposit(event){
        event.preventDefault();  
        const key=loggedobj1.accnum;  
        
        const loggedobj=JSON.parse(localStorage.getItem(key))   
        if(depamt.value=='' || deppswd.value==''){
            alert("Fill Up All details")
        }
        else{
            if(deppswd.value == loggedobj.passwd){
                //converting to number and adding 
                 if(depamt.value <=0) {
                    alert("Invalid Input")
                    myform2.reset();
                }
                 else{
                    loggedobj.balance=parseFloat(loggedobj.balance)+parseFloat(depamt.value);
                          
                    withdrawresult.innerHTML='';
                    depositresult.innerHTML=`<div class="text-success bg-white style="font-weight:500"><b>Amount Deposited ,Your Current Balance is Rs : ${loggedobj.balance}</b></div>`;
                    localStorage.setItem(loggedobj.accnum,JSON.stringify(loggedobj))
                    myform2.reset();
                    }
                
            }
            else{
                 alert("Incorrect Password :Cannot Deposit ")
                 myform2.reset();
                }
        }   
    }
    

//withdraw


 

function withdraw(event){

    event.preventDefault();  
    const key=loggedobj1.accnum;  
    
    const loggedobj=JSON.parse(localStorage.getItem(key))   
    if(wamt.value=='' || wpswd.value==''){
        alert("Fill Up All details")
    }
    else{
        if(wpswd.value == loggedobj.passwd ){
             if(loggedobj.balance >= wamt.value)
            {
                if(wamt.value <=0 ){
                    alert("Invalid Amount ")
                    myform4.reset();
                }
                else{//converting to number and subtraction 
                    console.log(loggedobj);   
                    loggedobj.balance=parseFloat(loggedobj.balance)-parseFloat(wamt.value);
                    
                    depositresult.innerHTML='';
                    withdrawresult.innerHTML=`<div class="text-danger bg-white style="font-weight:500"><b>Amount withdrawn,Your Current Balance is Rs : ${loggedobj.balance}</b></div>`;
                    localStorage.setItem(loggedobj.accnum,JSON.stringify(loggedobj))
                    myform4.reset();
                 }
            
            }
            else{ 
                depositresult.innerHTML='';
                withdrawresult.innerHTML=`<div class="text-danger bg-white style="font-weight:500"><b>Insufficient Balance , Available balance is Rs:${loggedobj.balance}</b></div>`;
                myform4.reset();
            }
        }
        else{
            alert("Incorrect Password :Cannot Withdraw ")
            formwithdraw.reset();
             }
    }
}
function logout(){
    localStorage.clear();
    window.location='./login.html'
}






    


