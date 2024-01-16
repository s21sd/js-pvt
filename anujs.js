let num;
let valanu;

function createForm() {

    // Clear existing form fields
    document.getElementById('formContainer').innerHTML = "";

    // Get the value of 'n'
    const n = document.getElementById('nInput').value;
    num=n;
    // Create 'n' input fields
    for (let i = 1; i <= 3*n; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = `Enter data ${i}`;
        inputField.id = `data${i}`;
        inputField.className = 'formData';
        
        // Append input field to the form container
        document.getElementById('formContainer').appendChild(inputField);
        if(i%3==0){
        const lineBreak = document.createElement('br');
        document.getElementById('formContainer').appendChild(lineBreak);
        }
    }
    const option = document.createElement('br');
    document.getElementById('formContainer').appendChild(lineBreak);
}

let arrayCheck = [];

function submit() {
    document.getElementById('form2Container').innerHTML = "";
    const formDataArray1  = [];
    // Get the value of 'n'
    const n = document.getElementById('nInput').value;

    // Create 'n' input fields
    for (let i = 1; i <= n; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = `Enter data ${i}`;
        inputField.id = `data${i}`;
        inputField.className = 'formData';
        
        // Append input field to the form container
        document.getElementById('form2Container').appendChild(inputField);
        const lineBreak = document.createElement('br');
        document.getElementById('form2Container').appendChild(lineBreak);
        formDataArray1.push(inputField);
    }
    // document.getElementById('form2Container').appendChild(inputField);
    const submit2 = document.createElement('button');
    document.getElementById('form2Container').appendChild(submit2);
    submit2.innerText="Submit Data";
    submit2.id='sub2';
    const s=document.getElementById("sub2");
    s.addEventListener('click', function check() {
        const formDataElements = document.getElementsByClassName('formData');
        const formDataArray = Array.from(formDataElements);
        let count = 0;
        for (let index = 0; index < formDataArray.length; index += 3) {
            const input_i1 = parseFloat(formDataArray1[count].value);
            const input_i2 = formDataArray[index + 1].value;
            const input_i3 = parseFloat(formDataArray[index + 2].value);
            // Your comparison logic here...
            const n = document.getElementById('nInput').value;
            let val;
            if(input_i2=='>'){
                if(input_i1>input_i3){
                    val=1;
                    arrayCheck.push(val);
                }
                else{              
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='>='){
                if(input_i1>=input_i3){ 
                    val=1;
                    arrayCheck.push(val);
                }
                else{        
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='<'){
                if(input_i1<input_i3){
                    val=1;
                    arrayCheck.push(val);
                }
                else{                
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='<='){
                if(input_i1<=input_i3){                 
                    val=1;
                    arrayCheck.push(val);
                }
                else{  
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='=='){
                if(input_i1===input_i3){
                    val=1;
                    arrayCheck.push(val);
                }
                else{
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='!='){
                if(input_i1!=input_i3){                    
                    val=1;
                    arrayCheck.push(val);
                }
                else{                    
                    val=0;
                    arrayCheck.push(val)
                }
            }

            
            count += 1;
        }
        
    });
}
function countprint(){
    let c0=0;
    let c1=0;
    for(let i=0;i<num;i++){
        if(arrayCheck[i]===0)
            c0++;
        else
            c1++;
    }
   console.log(valanu);

    if(valanu=='ANY'){
        if(c1>=1){
            document.querySelector('#f').innerText=`Your Loan is Granted`;
        }
        else{
            document.querySelector('#f').innerText=`Loan Not Granted`;
        }
    }
    if(valanu=='ALL'){ 
        if(c1===num){
            document.querySelector('#f').innerText=`Loan Granted`;
        }
        else{
            document.querySelector('#f').innerText=`Marao`;
        }
    }
    
}





