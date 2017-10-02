export default function(document, innerHTML) {
  const varsScript = document.createElement('script');

  varsScript.async = true;
  varsScript.innerHTML = innerHTML;

  document.body.appendChild(varsScript);


  const conversionScript = document.createElement('script');

  conversionScript.async = true;
  conversionScript.src = '//www.googleadservices.com/pagead/conversion.js';

  document.body.appendChild(conversionScript);
}
