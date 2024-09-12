# MattMullerDev.com
The code in this branch shows the changes that I made to the CSS file in order to make the website dynamically adapt to different window/screen sizes. I did this by changing the units that I used for many of the HTML elements and adding media queries to change the size of elements depending on the dimensions of the window.


I also set up the contact me email form to allow users of the site to send me an email. I did this by using an API called formsubmit which sends a POST request when the email form is submitted, resulting in the content of the form being sent to my email. I configured the HTML to display the email that I receive in the format that I desired and also added a honeypot to avoid bot emails while rerouting the user back to the website rather than having to complete a reCAPTCHA on formsubmit.


Finally, I created a new container image with this updated code, pushed the update to Google Cloud Run, and added a custom URL endpoint to give the site its name of [mattmullerdev.com](https://mattmullerdev.com/). Through the command line I containerized the code using Docker then configured, tagged, and deployed the image to Google Cloud Run, adding it to my project's Artifact Registry. I then deployed a revision using this new image. Lastly, I hosted my custom domain using Google Cloud Load Balancing. To complete this I had to set up the route for the site and configure the DNS records to make it possible for Google to generate an SSL certificate and deploy the website's custom URL.
