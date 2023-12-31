function deleteUser(){
    const email = document.querySelector('.user_to_delete').value;
    console.log(email)
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://the-gadget-finder.ew.r.appspot.com/user/delete/" + email);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    xhr.send();
    xhr.onreadystatechange = () => {
        // In local files, status is 0 upon success in Mozilla Firefox
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
                console.log(xhr.responseText);
                document.querySelector(".response").innerHTML = xhr.responseText;
            }
        }
    }
}
