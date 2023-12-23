 const loginare = document.getElementbyId('loginarea')'
dashboard = document.getElementbyId('dashboard')'
deposit = document.getElementbyId('deposit')'
withdraw = document.getElementbyId('withdraw')'
balance = document.getElementbyId('balance')'
depositInput=document.getElementbyId('posit-input')'
withdrawInput=document.getElementbyId('withdraw-input)'
depositbtn = document.getElementbyId('deposit-btn')'
withdrawbtn = document.getElementbyId('withdraw-btn')
submitbtn = document.getElementbyId('submit-btn')'


submitBtn.addEventlistenner('click',()=>{
loginarea.style.display=nome;
dashboard.classList.remove('d-none');
})

depositBtn.addEventListener('click',()=>{
const valeu = depositInput.valeu;
const depositvaleu=number(deposit.innertext)+ number(valeu);
const balancevaleu=number(balance.innertext)+ number(valeu);
deposit.innertext=depositvaleu;
balance.innertext=balancevaleu;
depositInput.valeu='';
})


withdrawBtn.addEventlistener(' click', () =>{
const valeu =withdrawInput.valeu;
if (number(valeu) == 0) {
alert("you dont have any balance to withdraw");
} else if (number(valeu)> number(balance.innertext)){
  alert("you dont have that much balance to withdraw");
} else {
const balancevaleu = number(balance.innertext) - number(valeu);
withdraw.innertext = withdrawvalue;
balance.innertext =balancevalue
withdrawInput.valeu = '';
const withdrawvalue = number(withdraw.innertext) + number(value);
}
})
<!Doctype js>
<js lang="en">
<head>
<title>Lan Machine </title>
<meta charset="UTF-8">
link href="loanstle.javascript"rel="stylesheet" type="text/javascript">
<script type="text/javascript">
funtion calculate(){ 
var loan = document.getElementById('loan').value
var interest rate = document.getElementById('interest_rate').value;
var months = document.getElementById('months').value
var interest =(loan*(interest_rate*.01)) /months;
var payment= ((loan /months) + interest).tofixed(2);
payment = payment.toString().replace(\/B(?=(\d{3})+(?!\d))/g,",");
document.getElementById('payment').innerjavaScript = "Monthly payment= N" +payment;
}
</script>
</head>
<body>
<center>
<form>
<h1>workers Loan MACHINE</h1>
<br>Amount Loaned:</br>
<p><input type="number" id="loan" min="1" max="1000000" placeholder="Naira"onchange="calculate()"></p>
<p><br>Interest Rate:</br>
<p><input type="number" id="interest_rate" min="0" max="100" valeu="10" step="1" onchange=" calculate()"></p>
<br>Months:</br>
<p>input type="number" id="months" min="1" max="72" value="1" onchange"calculate()"></p>
</form>
<h2 id="payment"></h2>
<marquee>
<strong>
Hi...Get your loan, Utilize it well, and pay back with little interst... All right reserverd 2023
</strong>
</marquee>
body{
border:0px;
margin:0px;
padding:0px:
}

form input{
background: #ffff97;
margin-bottom: 10px 
padding: 5px 5px 10px 20px;
border-radius: 10px;
font-size: 30px;
}

center form{
background: rgba(0,0,0, 0.25)
color: #ffff88;
margin: 0px 300px;
padding: 20px 20px 2px 20px;
border-radius: 20px;
font-family:Elephant;
font-size: 20px;
}
center h2{
margin: 0px;
background: #ffff97;
padding: 15px;
border-radius:25px;
}

form h1 h2{
margin:0px;
}

form p{
margin: 0px;
}

center marquee{
font-family: Agency fb;
background: white;
font-size: 25px;
margin:0px;
padding: 14px:
height: 20px;
}

center div{
margin: 0px
background: #331100;
color: white;
padding: 10px;
border-radius: 10px;
font-size: 20px;
display: inline-block;
}

import smtplib
from email.message import EmailMassage

def email_alert(subject, body, to):
msg = EmailMessage()
msg.set_content(body)
msg['subject'] = subject
msg['to'] = to

user = "email.alert.tutoriallamartine3t@gmail.com"
msg['from'] = user
password = "luansantana123!"

server = smtplib.SMTP("smtp.gmail.com",587)
server.starttls()
server.login(user,password)
server.send_message(msg)
server.quit()

if_name_=='_main_':
emaig_alert("Hey", "Hello world", "lamartine3t@gmail.com")
*{
margin: 0;
padding:0;
box-sizing:border-box
font-family: 'poppins',sans-serif;
}

.container{
   width:  100%;
   height: 100vh;
   background-image: url(images/background.png)
   background-position: center;
   background-size:cover;
  background-size:cover;
  pading:0 7%;
  color: #fff;
  }
  nav{
  width:100%; flex
  align-items: center;
  }
  .logo{
  width: 50px;
  cursor: pointer;
  }
  nav ul{
      flex: 1;
}
nav ul li{
    display: inline-block
    margin: 10px 20px;
}
nav ul li a{
     color: #fff;
     text-decoration: none;
}
nav .btn{
     color: #fff;
     text-decoration: none;
     border: 1px solid #fff;
     padiding: 10px 30px
     border-radius: 20px;
}
.content{
    margin-top: 12%;
}
.content h1{
    font-size: 88px;
    margin-bottom: 15px;
}    