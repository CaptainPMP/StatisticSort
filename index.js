        var numbers = [];
        function pushToShowValue() {
            var show = "";
            numbers.forEach(showValue);
            document.getElementById("show").innerHTML =  show;
            
            function showValue(value){
            
            /* document.getElementById("show").innerHTML = txt; */
            /* var txt = txt + show.innerHTML; */
            show = show + value + "<br/>";
            }
            showValue();
        }

        function Push() {
            var x = document.getElementById("staticInput")
            var insert_value = x.value;
            /* document.getElementById("staticInput").value = insert_value; */
            /* value_to_int = parseInt(insert_value); */
            numbers.push(insert_value);
            numbers.sort(function(a, b){return a - b});
            console.log(numbers);
            document.getElementById("staticInput").value = ""
            document.getElementById("staticInput").focus();
        }

        function splitNow() {
            var x = document.getElementById("staticInput")
            var insert_value = x.value;
            var getFirstValue = insert_value[0];
            getFirstValue.split(",");
            var newArray = [];
            for (let i = 0; i < getFirstValue.length; i++) {
                var c = getFirstValue[i];
                var z = parseInt(c);
                newArray.push(z);
            }
            /* document.getElementById("staticInput").value = insert_value; */
            /* value_to_int = parseInt(insert_value); */
            /* numbers.push(insert_value); */
            /* var Array_now = numbers.split(","); */
            newArray.sort(function(a, b){return a - b});
            console.log(newArray);
            document.getElementById("staticInput").value = ","
            document.getElementById("staticInput").focus();
            var show = "";
            newArray.forEach(showValue);
            document.getElementById("show").innerHTML =  show;
            
            function showValue(value){
            
            /* document.getElementById("show").innerHTML = txt; */
            /* var txt = txt + show.innerHTML; */
            show = show + value + "<br/>";
            }
            showValue();
        }