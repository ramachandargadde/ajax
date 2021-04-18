console.log("Ajax in one video")
let fetchbtn=document.getElementById("fetch-btn");

fetchbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log("1");
    //instantiate xmlhttprequestobj
    const xhr=new XMLHttpRequest();

    //open the obj
    // xhr.open('GET','chandu.txt',true)
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)


    //what to do when it is in progress(optional)
    xhr.onprogress=function(){
        console.log('on progress');
    }
    xhr.onreadystatechange=function(){
        console.log('ready state is ',xhr.readyState);
    }
        //what to do wheen responce is ready
        xhr.onload=function(){
            if(this.status===200){
                console.log(this.responseText)
            }
            else{
                console.log('some error occured')
            }

        }
        //send the request
        data=	'{"name":"testss122","salary":"123","age":"23"}';
        xhr.send(data);
        console.log('we are done');
    


}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}