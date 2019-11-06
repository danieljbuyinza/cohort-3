
			/**
             * event listener listens for what will hamppen
             * while event handler executes the fuction
            */
		   function username() {
			   	var userName=document.getElementById('username')
	           	userName.addEventListener('click',alert('Enter username:'))
		   }
		   function password() {
			   	var passWord=document.getElementById('password')
				passWord.addEventListener('click',alert('Enter password:'))
		   }
		   function check() {
				var userName=document.getElementById('username')
				var passWord=document.getElementById('password')
                if (userName.value==''||passWord=='') {
                    alert('field can not be left empty')
                    userName.style.border='2px solid red'
                    passWord.style.border='2px solid red'
                    return false
                }else{
					var divLog = document.getElementById('divLog');
					var log = document.getElementById('log');
					divLog.textContent=userName.value+'&nbsp'+passWord.value 
            		// divLog.addEventListener(userName.value,passWord.value ); 
				}
            }
            
            /* creating a rest handler that will be triggered after event reset. 
                -event handle -logReset
                -reset is an the event
             */
            function logReset(e) {
                log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
            }
            //accessing dom element and we set a listener to form tag
            var form = document.getElementById('form');
            var log = document.getElementById('log');
            form.addEventListener('reset', logReset); 

			
