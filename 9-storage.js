const addToLocalstorage = () => {

    const inputId = document.getElementById('storage-id');
    const id = inputId.value;


    const inputvalue = document.getElementById('storage-value')
    const value = inputvalue.value;

    //localstorage value set 
    localStorage.setItem(id, value);

    inputId.value = '';
    inputvalue.value = '';
    // this is the end 
}