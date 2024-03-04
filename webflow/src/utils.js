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