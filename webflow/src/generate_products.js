import { checkCallLimit, incrementCallCount, setupForm, updateErrorMessage, updateSuccessMessage } from "./utils"

export function render(){
    setupForm('wf-form-Generate-Product-Form',transformFormData,submitFormData,responseHandler);
}

function transformFormData(formData) {
    
    //addLoader(image_wrapper);
    
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

    //hide/show starter description and result component
    const starterDescription = document.querySelector('.starter-description');
    const resultsComponent = document.querySelector('.results_components');

    // increment call count for the user
    incrementCallCount();
    
    // check call limit for user
    const remainingCalls = checkCallLimit();

    if (remainingCalls > 0) {

        // Check if the element has a class named 'myClass'
        if (resultsComponent.classList.contains('hide')) {
            starterDescription.classList.add('hide');
            resultsComponent.classList.remove('hide');
        }

        updateSuccessMessage('.success-message',`Please wait around 30 seconds for your sneaker image to be generated. You have ${remainingCalls} generation attempt(s) left.`)
    } else {
        return {success:false, data:"no remaining calls"}
    }

    // Send the POST request to the server
    // const response = await fetch(`https://us-central1-quiet-amp-415709.cloudfunctions.net/genai_for_product_design_1`, {
    //     method: 'POST',
    //     body: JSON.stringify(formData),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // });

    // const data = await response.json()

    return {success:true,data: 'test'}

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
        // const image = document.getElementById('generated_image');
        // image.src = response.data.image_url;

        // const image_wrapper = document.getElementById('image_wrapper');

        //removeLoader(image_wrapper);
    } else if (!response.success && response.data === "no remaining calls"){
        updateErrorMessage('.error-message','You have reached the maximum number of sneaker image generations allowed (3). Please try again in 12h.')
    }
        else {
        updateErrorMessage('.error-message','Something went wrong.')
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