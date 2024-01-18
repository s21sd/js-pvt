
let num;


let valanu;

let k = 1;
function createForm() {

    // Clear existing form fields
    document.getElementById('formContainer').innerHTML = "";
    document.getElementById('heading').innerHTML = "Enter Data Fields Values:"

    // Get the value of 'n'
    const n = document.getElementById('nInput').value;
    num = n;
    // Create 'n' input fields
    for (let i = 1; i <= 3 * n; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        if ((i - 1) % 3 == 0)
            inputField.placeholder = `LHS ${k}`;
        else if ((i - 1) % 3 == 1)
            inputField.placeholder = `Operator ${k}`;
        else
            inputField.placeholder = `Value ${k}`;
        inputField.id = `data${i}`;

        inputField.className = 'formData';
        inputField.style.width = '20%';

        // Append input field to the form container
        document.getElementById('formContainer').appendChild(inputField);

        if (i % 3 == 0) {
            k++;
            const lineBreak = document.createElement('br');
            document.getElementById('formContainer').appendChild(lineBreak);
        }
    }
    const option = document.createElement('br');
    document.getElementById('formContainer').appendChild(lineBreak);
    hd.classList.remove("hide");

}
function update() {
    for (let i = 1; i <= 3; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        if ((i - 1) % 3 == 0)
            inputField.placeholder = `LHS ${k}`;
        else if ((i - 1) % 3 == 1)
            inputField.placeholder = `Operator ${k}`;
        else
            inputField.placeholder = `Value ${k}`;
        inputField.id = `data${i}`;

        inputField.className = 'formData';
        inputField.style.width = '20%';

        // Append input field to the form container
        document.getElementById('formContainer').appendChild(inputField);

        if (i % 3 == 0) {
            k++;
            const lineBreak = document.createElement('br');
            document.getElementById('formContainer').appendChild(lineBreak);
        }
    }


}

let arrayCheck = [];

function submit() {
    document.getElementById('form2Container').innerHTML = "";
    const formDataArray1 = [];
    // Get the value of 'n'
    const n = k;
    console.log(k);

    // Create 'n' input fields
    let j = 0;
    for (let i = 1; i <= n; i++) {
        // Create label
        const formDataElements = document.getElementsByClassName('formData');
        const formDataArray = Array.from(formDataElements);


        const label = document.createElement('label');
        label.innerText = `Enter ${formDataArray[j].value}`;
        label.for = `data${i}`;

        // Create input field
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = `Enter data ${i}`;
        inputField.id = `data${i}`;
        inputField.className = 'formData';

        // Append label and input field to the form container
        document.getElementById('form2Container').appendChild(label);
        document.getElementById('form2Container').appendChild(inputField);

        // Add line break
        const lineBreak = document.createElement('br');
        document.getElementById('form2Container').appendChild(lineBreak);

        // Store input field in an array if needed
        formDataArray1.push(inputField);
        j = j + 3;
    }

    valanu = document.querySelector('#option').value
    // console.log(valanu.value)


    // document.getElementById('form2Container').appendChild(inputField);
    const submit2 = document.createElement('button');
    document.getElementById('form2Container').appendChild(submit2);
    submit2.innerText = "Submit Data";
    submit2.id = 'sub2';
    const s = document.getElementById("sub2");
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
            if (input_i2 == '>') {
                if (input_i1 > input_i3) {
                    val = 1;
                    arrayCheck.push(val);
                }
                else {
                    val = 0;
                    arrayCheck.push(val)
                }
            }

            else if (input_i2 == '>=') {
                if (input_i1 >= input_i3) {
                    val = 1;
                    arrayCheck.push(val);
                }
                else {
                    val = 0;
                    arrayCheck.push(val)
                }
            }

            else if (input_i2 == '<') {
                if (input_i1 < input_i3) {
                    val = 1;
                    arrayCheck.push(val);
                }
                else {
                    val = 0;
                    arrayCheck.push(val)
                }
            }

            else if (input_i2 == '<=') {
                if (input_i1 <= input_i3) {
                    val = 1;
                    arrayCheck.push(val);
                }
                else {
                    val = 0;
                    arrayCheck.push(val)
                }
            }

            else if (input_i2 == '==') {
                if (input_i1 === input_i3) {
                    val = 1;
                    arrayCheck.push(val);
                }
                else {
                    val = 0;
                    arrayCheck.push(val)
                }
            }

            else if (input_i2 == '!=') {
                if (input_i1 != input_i3) {
                    val = 1;
                    arrayCheck.push(val);
                }
                else {
                    val = 0;
                    arrayCheck.push(val)
                }
            }


            count += 1;
        }

    });
}




function countprint() {
    let c0 = 0;
    let c1 = 0;
    for (let i = 0; i < num; i++) {
        if (arrayCheck[i] === 0)
            c0++;
        else
            c1++;
    }
    //    console.log(valanu);

    if (valanu === "all") {
        console.log(valanu);
        // console.log(c1);
        if (c1 == num) {

            let opt = document.querySelector('#fs')
            opt.innerText = `Success claue of c1 is ${c1} and value of num is ${num}`
        }
        else {
            let opt = document.querySelector('#fs')
            opt.innerText = `fail claue of c1 is ${c1} and value of num is ${num}`
        }
    }

    else if (valanu === "any") {
        if (c1 >= 1) {

            let opt = document.querySelector('#fs')
            opt.innerText = `Success vlaue of c1 is ${c1} and value of num is ${num}`
        }
        else {
            let opt = document.querySelector('#fs')
            opt.innerText = `Fail claue of c1 is ${c1} and value of num is ${num}`
        }
    }

}





