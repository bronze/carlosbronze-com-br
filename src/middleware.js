export async function onRequest(context, next) {
  // intercept data from a context
  // optionally, modify the properties in `locals`
  context.locals.title="New title";
  context.locals.property="New title";
  try {
    const response=await fetch('/.netlify/functions/random-quote'); // Ensure this URL is correct
    if (response.ok) {
      const quoteData=await response.json();
      context.locals.quote=quoteData.quote;
      context.locals.author=quoteData.author;
    } else {
      console.error('HTTP error! Status:', response.status);
      context.locals.quote='Failed to load quote.';
      context.locals.author='Unknown';
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
    context.locals.quote='Failed to load quote.';
    context.locals.author='Unknown';
  }
  return next();
}
