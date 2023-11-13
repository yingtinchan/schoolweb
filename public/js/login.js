login()

function login() {
    document.querySelector('#loginbu')
        .addEventListener('click', async (e) => {
            e.preventDefault()
            e.stopPropagation()
            const id = document.querySelector('#userid').value
            const password = document.querySelector('#password').value
            // var details = {
            //     id: id,
            //     password: password
            // }
            // var formBody = [];
            // for (var property in details) {
            //     var encodedKey = encodeURIComponent(property);
            //     var encodedValue = encodeURIComponent(details[property]);
            //     formBody.push(encodedKey + "=" + encodedValue);
            // }
            // formBody = formBody.join("&");

            let res = await fetch('/login/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({id:id,password:password})
                // body: formBody
            })
            let json = await res.json()
            document.querySelector('.form-login').reset()
            console.log(json)
            if (json.statusCode === 200) {
                window.location.replace('admin_dashboard.html')
            } else {
                document.querySelector('.notice').innerHTML = 'json.result'
            }
        })
}