import { setupForm } from "./utils"

export function render(){
    setupForm('wf-form-Generate-Product-Form',transformFormData,submitFormData,responseHandler);
}

function transformFormData(formData) {

    const image_wrapper = document.getElementById('image_wrapper');
    const starter_wrapper = document.querySelector('.starter-description');
    starter_wrapper.remove();
    addLoader(image_wrapper);
    
    const transformedData = {
        form: formData.get('product_shape'),
        sole: formData.get('product_sole'),
        bodyMaterial: formData.get('product_material'),
        bodyPattern: formData.get('product_pattern'),
        laces: formData.get('product_laces'),
        generalstyle: formData.get('product_gender')
    }

    return transformedData;
}

async function submitFormData (formData) {
    // Assuming `formData` is your FormData object
    console.log(formData)

    // Send the POST request to the server
    const response = await fetch(`https://us-central1-quiet-amp-415709.cloudfunctions.net/genai_for_product_design_1`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json()

    if (response.ok)
  
        return {success:true, data: data};
    
    else {
        return {success:false, data: null};
    }
}

function responseHandler (response) {
    if (response.success) {
        console.log('success!');
        console.log(response);
        const image = document.getElementById('generated_image');
        image.src = response.data.image_url;

        const image_wrapper = document.getElementById('image_wrapper');

        removeLoader(image_wrapper);
    } else {
        console.log('failed!');
    }
}

function addLoader(parentElement) {
    const html = `<div class="skeleton-loader"></div>`

    return parentElement.insertAdjacentHTML("beforeend", html);
    
}

function removeLoader (parentElement) {

    // Find all children with the 'skeleton-loader' class
    var loaders = parentElement.querySelectorAll('.skeleton-loader');

    // Loop through the NodeList and remove each element
    loaders.forEach(function(loader) {
        loader.parentNode.removeChild(loader);
    });

}

// const inputData = {
//     form: $w("#form").value,
//     sole: $w("#sole").value,
//     bodyMaterial: $w("#bodyMaterial").value,
//     bodyPattern: $w("#bodyPattern").value,
//     laces: $w("#laces").value,
//     generalstyle: $w("#generalstyle").value
//   };

//   fetch("https://us-central1-quiet-amp-415709.cloudfunctions.net/genai_for_product_design_1", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(inputData)
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log("Success:", data);
//     // Display the image
//     $w("#image1").src = data.image_url; // This line needs to be adjusted
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });