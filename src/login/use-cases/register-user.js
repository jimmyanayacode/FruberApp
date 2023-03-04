const messagge = document.querySelector('#mensagge');
const registerform = document.querySelector('.register__form');

export const registerUser = async (data) => {

    messagge.innerHTML = '';

    const url = `${import.meta.env.VITE_BASE_URL}/api/users`;

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( async response => {
            if (response.status === 200) {
              return response.json();
            } else {
              return response.json().then(error => {
                throw error;
              });
            }
          })
        
          .then(data => {
            const span = document.createElement('span');
            span.innerHTML = `usuario ${data.nombre} ha sido creado`
            messagge.appendChild(span);
            console.log(`usuario ${data.nombre} creado `)
            registerform.reset()
          })
          /* .catch(  error => error.errors.forEach( element => messagge.innerHTML = `${element.msg} \n` )) */
          .catch(  error => error.errors.forEach( element => {
            const span = document.createElement('span');
            span.innerHTML = element.msg
            messagge.appendChild(span);
            messagge.appendChild(document.createElement('br'));
          })) 
        
    } catch (error) {
        throw new error;
    }

    


}





