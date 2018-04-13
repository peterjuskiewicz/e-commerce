function check(form)
{
 
 if(form.userid.value == "admin" && form.pswrd.value == "falcon")
  {
    window.open('crm.html')
  }
 else
 {
   alert("Wrong username or password!")
  }
}