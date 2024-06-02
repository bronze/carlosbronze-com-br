import fetch from 'node-fetch';

export async function onRequest({request, next}) {
  try {
    const response=await fetch('.netlify/functions/random-quote'); // Ensure this URL is correct
    if (response.ok) {
      const quoteData=await response.json();
      request.locals.quote=quoteData.quote;
      request.locals.author=quoteData.author;
    } else {
      console.error('HTTP error! Status:', response.status);
      request.locals.quote='Failed to load quote.';
      request.locals.author='Unknown';
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
    request.locals.quote='Failed to load quote.';
    request.locals.author='Unknown';
  }

  return next();
}
