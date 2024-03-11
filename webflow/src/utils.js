export function setupForm (formId, onSubmitCustom, submitFormData, responseHandler = null,show_success=true) {
    const formElement = document.getElementById(formId);

    // Remove Webflow's form styling class
    formElement.parentElement.classList.remove('w-form');

    // Set the form submission event handler
    formElement.onsubmit = async (event) => {
        event.preventDefault();
        const submitButton = formElement.querySelector('[w-el="SubmitButton"]');

        // Handle the submit button state during form processing
        handleButtonState(submitButton, true);

        try {
            const customData = onSubmitCustom(new FormData(formElement),event);
            const response = await submitFormData(customData);
            responseHandler(response);
        } catch (error) {
            console.error(error);
        } finally {
            // Restore the submit button to its initial state
            handleButtonState(submitButton, false);
        }
    };
}

/**
 * Handles the state of the submit button during form processing.
 * 
 * @param {HTMLElement} button - The submit button element.
 * @param {boolean} isLoading - Indicates if the form is in the loading state.
 */
function handleButtonState(button, isLoading) {

    if (isLoading) {
        button.value = button.getAttribute('data-wait');
    } else {
        button.value = button.getAttribute('data-initial-state');
    }
}

/**
 * Creates a cookie with a specified key and value that expires in 24 hours.
 * 
 * @param {string} key - The key (name) of the cookie.
 * @param {string} value - The value of the cookie.
 */
function createCookie(key, value) {
    
    const encodedValue = encodeURIComponent(value);

    const date = new Date();
    // Set the expiry of the cookie to 24 hours from now
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    // Set the cookie with the key, value, expiry, and security attributes
    document.cookie = key + "=" + encodedValue + ";" + expires + ";path=/;";
}

/**
 * Deletes a cookie by its key. This is done by setting the cookie's expiry date
 * to a past date, effectively removing it.
 * 
 * @param {string} key - The key (name) of the cookie to delete.
 */
function deleteCookie(key) {
    // Set the cookie with an expired date, effectively deleting it
    document.cookie = key + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax;Secure";
}

/**
 * Retrieves the value of a cookie by its key. If the cookie does not exist, returns an empty string.
 * 
 * @param {string} key - The key (name) of the cookie to retrieve.
 * @return {string} The value of the cookie, or an empty string if the cookie does not exist.
 */
function getCookie(key) {
    // Encode the key to handle special characters correctly
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Checks how many more times the user is allowed to call a specific function and returns the number of remaining calls.
 * If the user has reached the limit, it returns 0.
 *
 * @return {number} The number of times the user can still call the function.
 */
export function checkCallLimit() {
    const functionName = 'generateSneaker';
    let calls = parseInt(getCookie(functionName), 10);
  
    if (isNaN(calls)) {
      // If the cookie does not exist, the user can call the function 3 times
      return 3;
    } else if (calls < 3) {
      // If the number of calls is less than 3, return the remaining calls
      return 3 - calls;
    } else {
      // If the limit has been reached or exceeded, return 0
      return 0;
    }
  }
  
  /**
   * Increments the count of how many times the user has called a specific function.
   * This should be called after the function executes successfully.
   */
export function incrementCallCount() {
    const functionName = 'generateSneaker';
    let calls = parseInt(getCookie(functionName), 10);
  
    if (!isNaN(calls) && calls < 3) {
      // If the cookie exists and the limit has not been reached, increment the counter
      calls++;
    } else if (isNaN(calls)) {
      // If the cookie does not exist, initialize it with 1
      calls = 1;
    } else {
      // If the limit is reached, don't increment
      return;
    }
  
    createCookie(functionName, String(calls));
}

/**
 * Updates the text content of all child elements of a specified parent element, identified by a query selector.
 * 
 * @param {string} querySelector - The CSS query selector to identify the parent element.
 * @param {string} text - The new text content to set for each of the parent element's child elements.
 */
export function updateSuccessMessage(querySelector, text) {
    // Find the parent element using the query selector
    const parentElement = document.querySelector(querySelector);
  
    if (parentElement) {
        // Iterate over all child elements of the parent element
        Array.from(parentElement.children).forEach(child => {
        // Update the text content of each child element
        child.textContent = text;
        });

        parentElement.style.display = 'flex';

        setTimeout(function() {
            parentElement.style.display = 'none';
        }, 45000); // 45000 milliseconds = 45 seconds
    } else {
      console.error('Element not found with the given query selector.');
    }
}

/**
 * Updates the text content of all child elements of a specified parent element, identified by a query selector,
 * with an error message.
 * 
 * @param {string} querySelector - The CSS query selector to identify the parent element.
 * @param {string} text - The new error message text content to set for each of the parent element's child elements.
 */
export function updateErrorMessage(querySelector, text) {
    // Find the parent element using the query selector
    const parentElement = document.querySelector(querySelector);
  
    if (parentElement) {
        // Iterate over all child elements of the parent element
        Array.from(parentElement.children).forEach(child => {
            // Update the text content of each child element with the error message
            child.textContent = text;
        });

        parentElement.style.display = 'flex';

        parentElement.style.display = 'flex';

        setTimeout(function() {
                parentElement.style.display = 'none';
        }, 45000); // 45000 milliseconds = 45 seconds
    } else {
      console.error('Element not found with the given query selector.');
    }
}
  

  
  