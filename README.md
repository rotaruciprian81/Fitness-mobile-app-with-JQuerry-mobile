# Fitness-mobile-app-with-JQuerry-mobile
Fitness mobile app has been developed using JQuerry mobile, HTML, CSS, JavaScript and JSON files. 

The first page, which is the “Home” page begins with a header. The header will be styled with “data-theme=”b”” in black color and will include the company’s name. Using jQuery a button to open the menu panel will be dynamically generated in the header as well. 
The content of the page will be quite simple having at the top an image from inside the premises which will extend to full width of the screen. Underneath, a button to access a promotional video has been added in the middle of the screen. The video will be showed in the middle of the screen in a popup window. Also some text about the company has been inserted in this page content. Before the page will be show a pop up  will be dynamically created to appear in the middle of the screen and display the last offers. 
At the bottom of the page a footer has been inserted. On top of the footer a navigation bar has been added, with two options: book an appointment (linking with booking form) and contact (linking with the contact page). The footer is also holding a group of 4 buttons. Those buttons will hold only the icons (designed by Font Awesome). These buttons will provide access, on tap, to the company social media pages like: Facebook, LinkedIn, Twitter and Instagram. Those icons have been imported into the developed application using the appropriate CSS. 

The gallery page has a header at the top which will only show the company name and will hold the dynamically generated button to open the panel menu. 
In the page container two different containers have been inserted. One will hold the list of images that will be displayed and the second one will hold the focus of the gallery. On click or touch on an image in the gallery this will be displayed in the focus container. This container will also hold a left and right arrows and also a close icon for navigational purposes between the pictures.  
Again the footer will be on bottom of the page will hold the same buttons that will open the social media pages. 

The third page developed is the “Training” page. Here the customers can find information’s about classes and personal trainers. At top of the page a header had been inserted. From here, the panel with the application navigation buttons can be accessed, being dynamically generated for all the pages found in the same multipage document. 
In the page content 2 collapsible sets have been developed. The first one, when opened it will display a list view which holds all the week days. The users can tap on the chosen day and a popup will be displayed in the center of the page which will display the classes held in that day. The popup will hold at the bottom a button which will send the user to the contact page in order to do a booking for a specific class. A set of images displayed on two columns follows this collapsible set. 
The second collapsible set if accessed will display the trainers from the gym. If the users wants more details about a certain trainer he can click/tap on that specific list view item. A popup window will open in the middle of the screen with the trainer’s picture and details. A button has been inserted in this popup in order to be able to contact the gym in case of eventual booking a session with that trainer. The list view in this collapsible set also include a preview picture of the trainer. 
The images inserted on this page are being deployed using 2 columns grid. The popups for the classes or the trainers’ details are also having a close button on the top right hand side.  
The footer of the page, again holds the button icons to access the social media pages. 

The header had been inserted at the top of the page. Again the panel can be accessed, being generated by JQuery script.  
The page content have been developed using a 2 column grid. On each of the four places a button and an image underneath have been deployed. The first button is a link to the external page personalequipment.html. The second one from the first column contains a link to the external page suplementproducts.html. The first button from the second column also links with an external page named gymproducts.html. The second one links with the page homeproducts.html, which is also external. On these buttons, data-ajax has been set to “false” in order to clear the DOM and access the external pages.   
The user can view the shopping categories on this page and also access the chosen one specific page. At the bottom of the page a footer has been inserted. Again the button icons have been deployed in order to access the social media.  

Again at the top of the page a header had been inserted. As in the other pages from the multiple pages document, the panel access button has been deployed.  
In the page content can be seen the latest reviews left by customers and send thru the review form to the app admin.  
At the bottom of the page a footer had been inserted. The footer is also holding a navigation bar which hold two links. One for access the review form page, in case the user wants to live feedback, and one for the contact page. The footer also includes the buttons to access the social media pages. 
 
The “contact” page also starts with a header, which holds the button to access the panel and the name of the company. 
In the page content have been inserted the contact details of the company: address, email, telephone number. The telephone number it is a direct link to dial the company’s number (<a href="tel: 020 8516 7800">). Also the email address links to email provider of the user automatically inserting the company’s email into the receiver field.  
(<a href="mailto:contact@greenwichfitness.co.uk">) 
In the middle of the page a button to access the map.html external page had been inserted. The map.html will use geolocation to read the users location and to show the direction to the company’s address.  
At the bottom of the page a footer have been introduced which will also hold the group of buttons to access the social media pages.
 
This page is an external page of the application (“personalequipment.html”). At the top of the page a header had been inserted, only to display the category of products found on this page.  
In the page content a list view had been developed. In this listview will be displayed all the products from this category. The list will be populated dynamically with the help of JQuery script. The name and the image related for each listview component (product ID) are stored in a JSON file. The script which has been added at the end of the page, will extract from the JSON file all the products stored and display them one after another according to their ID number. The script will also create for every each listview component a link to the product detail external page which will display every each product details, according with the ID of the product selected. In this case the product details page will be personalsale.html. Details about this page layout can be seen at all “product details” page layout heading. 
At the end of the page a footer has been inserted which will hold a button, which pressed will send the user back to the “Shop” page where he can chose another category of products or visit other pages of the application using the menu panel.

This page is an external page of the application (“gymproducts.html”). At the top of the page a header had been inserted, only to display the category of products found on this page.  
In the page content a list view had been developed. In this listview will be displayed all the products from this category. The list will be populated dynamically with the help of JQuery script. The name and the image related for each listview component (product ID) are stored in a JSON file. The script which has been added at the end of the page, will extract from the JSON file all the products stored and display them one after another according to their ID number. The script will also create for every each listview component a link to the product detail external page which will display every each product details, according with the ID of the product selected. In this case the product details page will be gymsale.html. Details about this page layout can be seen at all “product details” page layout heading.
At the end of the page a footer has been inserted which will hold a button, which pressed will send the user back to the “Shop” page where he can chose another category of products or visit other pages of the application using the menu panel.

This page is an external page of the application (“suplementproducts.html”). At the top of the page a header had been inserted, only to display the category of products found on this page.  
In the page content a list view had been developed. In this listview will be displayed all the products from this category. The list will be populated dynamically with the help of JQuery script. The name and the image related for each listview component (product ID) are stored in a JSON file. The script which has been added at the end of the page, will extract from the JSON file all the products stored and display them one after another according to their ID number. The script will also create for every each listview component a link to the product detail external page which will display every each product details, according with the ID of the product selected. In this case the product details page will be suplementsale.html. Details about this page layout can be seen at all “product details” page layout heading. 
At the end of the page a footer has been inserted which will hold a button, which pressed will send the user back to the “Shop” page where he can chose another category of products or visit other pages of the application using the menu panel.  

This page is an external page of the application (“homeproducts.html”). At the top of the page a header had been inserted, only to display the category of products found on this page.  
In the page content a list view had been developed. In this listview will be displayed all the products from this category. The list will be populated dynamically with the help of JQuery script. The name and the image related for each listview component (product ID) are stored in a JSON file. The script which has been added at the end of the page, will extract from the JSON file all the products stored and display them one after another according to their ID number. The script will also create for every each listview component a link to the product detail external page which will display every each product details, according with the ID of the product selected. In this case the product details page will be homesale.html. Details about this page layout can be seen at all “product details” page layout heading. 
At the end of the page a footer has been inserted which hold a button, which pressed will send the user back to the “Shop” page where he can chose another category of products or visit other pages of the application using the menu panel 

The “map” page is an external page of the application and can be accessed from the contact page “Get direction” button. At the top, a header have been created. 
The page content has been split in two parts. A ”map canvas” have been created in order to display the map itself and the route. The second div has been developed to show the driving directions towards the set up company’s address. With the help of the script, this page will locate the user’s current position and will automatically calculate the distance and will display the route details between the current location and the static predefined gym location. 
The footer at the end of the page holds a “back” button which will display the company’s application last page named “contact”.  
 
This layout is the same for all four pages: homesale.html, suplementsale.html, gymsale.html and personalsale.html. These pages are being used to display the details of the products sold by the company. The details will be dynamically uploaded and displayed using the JQuery script from the pages: gymproducts.html, homeproducts.html, personalequipment.html and suplementproducts.html. The script will read the listview item chosen from the product pages and will display the details for that item. The products detail have been inserted in separate JSON files. 
The page has a header on the top of the page which is holding a back button which will take the user back to the product category page. The page content as has been specified above will be dynamically generated. 

The panel is dynamically created and inserted on all pages included in multipage application document index.html. Also the button present in every page header that opens the panel is being created the same way. The panel consists of 6 buttons to access the other application pages and one button at the bottom to close the panel. 

The booking form page has a header which includes the name of the company.  
In the content of the page a form has been inserted. The form will ask the user for his name, email, telephone number, and also his gender. At the end of the form a submit button has been inserted. 
The footer of the page will have a back button on the left hand side, which will take the user back to the previous page visited. 
The necessary fields contained in the form have been validated using jQuery mobile. If a user will not write his name an error message will appear:” Please fill out this field”. If an email address have been forgotten an error message containing: “Please enter your email” well appear as well. If the email will be introduced in the wrong format the following error message will appear: “Please include a “@” in the email address”. Also if the telephone number will be forgotten an error message to fill the field will appear
 
The app has been developed by using a multipage html document and a few external pages. The link between the main multipage document and the external ones is made with AJAX disabled for a full page refresh to prevent hash collisions. 
One of the drawbacks of the app can be seen on the get direction page. The button in the footer has been deployed as a button but looks like a simple HTML link. Another drawback is the fact that a user page missing for clients to join or use their credentials to view their classes and a personalized shopping cart. Also a live review page where the page actually refresh and add automatically the last review written.
 
 