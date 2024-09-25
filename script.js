//using hyperlink, we can navigate from one page to another but if we want to go to some page after
// particular operation or task then we will do it by js. windows.location() method is used for this.
function Redirect() {
    window.location = "https://www.udemy.com";
    }

//sometimes we see that we open site and we show ads after 5 or 10 seconds we redirect to anyother page.
// so we can do this also. here is below code. 

{/* <body onload="setTimeout('Redirect()', 5000)">
    <p>You will be redirected in 5 seconds</p>
    
</body>

 <script language="javascript" type="text/javascript">

        function Redirect() {
        window.location = "https://www.udemy.com";
        }
    </script>

now when the body will load, it will call setTimeout function. after 5 seconds it will callback 
to the redirect function and we will be redirected to our location. */}