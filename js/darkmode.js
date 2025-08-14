function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

         var password = "7894";
         (function passcodeprotect() {
            var passcode = prompt("Enter PassCode");
            while (passcode !== password) {
               alert("Incorrect PassCode");
               return passcodeprotect();
            }
         }());