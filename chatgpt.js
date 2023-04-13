async function submitForm(prompt) {
  const webAppUrl = "https://script.google.com/macros/s/AKfycbxZsKFZKsdkrruv55HglpbOMtZk5NDWmyoGjxwgb4JxVOOE2FUT6nEBy0RxxfNCvm_g/exec";
  const fetchUrl = `${webAppUrl}?prompt=${encodeURIComponent(prompt)}`;

  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error:", error);
    throw new Error(`An error occurred: ${error.message}. Please try again.`);
  }
}
