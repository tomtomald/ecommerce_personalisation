import { checkCallLimit, incrementCallCount, setupForm, updateErrorMessage, updateSuccessMessage } from "./utils"

export function render(){
    setupForm('wf-form-Generate-Product-Form',transformFormData,submitFormData,responseHandler);

    document.getElementById('prolific_id').value = '';
    document.getElementById('product_shape').value = '';
    document.getElementById('product_sole').value = '';
    document.getElementById('product_material').value = '';
    document.getElementById('product_pattern').value = '';
    document.getElementById('product_laces').value = '';
    document.getElementById('product_gender').value = '';

}

function transformFormData(formData) {
    
    const transformedData = {
        form: formData.get('product_shape'),
        sole: formData.get('product_sole'),
        bodyMaterial: formData.get('product_material'),
        bodyPattern: formData.get('product_pattern'),
        laces: formData.get('product_laces'),
        generalstyle: formData.get('product_gender'),
        prolific_id: formData.get('prolific_id')
    }

    return transformedData;
}

async function submitFormData (formData) {
    // Assuming `formData` is your FormData object

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

        const loaderItems = []
        const resultItems = document.querySelector('.results_generated-image-wrapper');
        const genAIresult = document.querySelector('.results_generated-image-wrapper2');
        if (resultItems) {
            loaderItems.push(resultItems);
        }
        if (genAIresult) {
            loaderItems.push(genAIresult);
        }
        loaderItems.forEach(item => {
            addLoader(item);
        });

        updateSuccessMessage('.success-message',`Please wait around 60 seconds for your sneaker image matches to be generated. You have ${remainingCalls} generation attempt(s) left.`)
    } else {
        return {success:false, data:"no remaining calls"}
    }

    // Send the POST request to the server
    /*
    const response = await fetch(`https://us-central1-quiet-amp-415709.cloudfunctions.net/genai_for_product_design_1-1`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    const data = await response.json()
    */

    const response = {ok:true};

    const data = {
        dalle_image_url:"https://uploads-ssl.webflow.com/65e5d94a6f997e69cffa965f/65eed96f34ef69823bbdad1f_Screenshot%202024-03-11%20at%2011.12.53.png",
        similar_image:{
            image_name:"https://uploads-ssl.webflow.com/65e5d94a6f997e69cffa965f/65eed96f34ef69823bbdad1f_Screenshot%202024-03-11%20at%2011.12.53.png",
            similarity_score: 0.9
        }
    }

    

    // return {success:true,data: 'test'}

    if (response.ok)
  
        return {success:true, data: data};
    
    else {
        return {success:false, data: null};
    }
}

function responseHandler (response) {

    if (response.success) {

        const response_data = response.data;

        // Handling the special case for 'result-image-genai'
        const result_image_genai = document.getElementById('result-image-genai');
        if (result_image_genai) {
            result_image_genai.src = response_data.dalle_image_url;
            result_image_genai.srcset = response_data.dalle_image_url;
        }

        const result_image_database = document.getElementById('result-image-database');

        if (result_image_database) {
            result_image_database.src = response_data.database_image_url;
            result_image_database.srcset = response_data.similar_image.image_name;
        }

        const imageIds = ['result-image-genai','result-image-database'];
        // Array to store image URLs

        let lighboxImageSrc = [];
        lighboxImageSrc = imageIds.map(id => {
            const imageElement = document.getElementById(id);
            if (imageElement) {
                return imageElement.src;
            }
        });

        // Select the lightbox container and ensure it's initially hidden
        const lightboxContainer = document.querySelector('.lightbox_modal');

        // Function to show the lightbox
        const showLightbox = () => {
            lightboxContainer.style.display = 'flex';
        };

        // Assuming you have a swiper-wrapper class in your HTML structure
        const swiperWrapper = document.querySelector('.swiper-wrapper');

        while(swiperWrapper.firstChild){
            swiperWrapper.removeChild(swiperWrapper.firstChild);
        }
            
        lighboxImageSrc.forEach((imgSrc) => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");

            const slideImg = document.createElement("img");
            slideImg.setAttribute("src", imgSrc);
            slideImg.setAttribute("width", "auto");
            slideImg.setAttribute("height", "auto");
            slide.classList.add("thumbnail-small");

            slide.appendChild(slideImg);
            swiperWrapper.appendChild(slide);
        });

        const mySwiper = new Swiper('[lightbox="swiper"]', {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            navigation: {
                nextEl: `.swiper-button-next`,
                prevEl: `.swiper-button-prev`,
            },
            pagination: {
                el: `.swiper-pagination`,
                type: 'bullets',
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="${className}" style="background-image: url('${lighboxImageSrc[index]}'); background-size: cover; background-position: center; width: 3rem; height: 3rem;"></span>`;
                },
            },
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
            mySwiper.slidePrev();
            } else if (event.key === 'ArrowRight') {
            mySwiper.slideNext();
            }
        });
    
        // Select all triggers - assuming the triggers are the images themselves for simplicity
        const lightboxTriggers = imageIds.map(id => {
            const imageElement = document.getElementById(id);
            if (imageElement) {
                return imageElement;
            }
        });
    
        lightboxTriggers.forEach((trigger, index) => {
            if(trigger){
                trigger.addEventListener("click", () => {
                    showLightbox(); // Show the lightbox on any trigger click
                });
            }
        });

        const loaderItems = []
        const resultItems = document.querySelector('.results_generated-image-wrapper2');
        const genAIresult = document.querySelector('.results_generated-image-wrapper');
        if (resultItems){
            loaderItems.push(resultItems);
        }
        if (genAIresult){
            loaderItems.push(genAIresult);
        }
        loaderItems.forEach(item => {
            removeLoader(item);
        });

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