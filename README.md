# Lab 5 - Starter
### Members
Kainoa Woessner

### Pages
expose.html: https://kaiwoessner.github.io/Lab5_Starter/expose.html  
explore.html: https://kaiwoessner.github.io/Lab5_Starter/explore.html

### Unit Testing Questions
1. No, you would not use a unit test to test the "message" feature of a message application. This is because it would require the code to interact with another device which is not possible in the realm of unit tests due to the many moving parts.
2. Yes, you would use a unit test to test the "max message length" feature. This is because it is an enclosed part of the application and has the ability to be tested by inputting a test input and checking if the expected output is returned. Using Data attribtues with microdata can lead to errors because although Data attributes and microdata are similar it can be confusing to mix them together.
3. DOM Fragments are created using the `CreateDocumentFragment()` method and are used to create DOM trees that are seperate from the main DOM tree. They are powerful because they are lightweight which means they can speed up the DOM.
4. The point of "Virtual DOM" is to create a virtual and lightweight representation of the DOM. The benefit of this is that each time an update is made, the virtual representation of the DOM gets updated instead of the actual DOM. This means that modifying the virtual DOM is faster than the actual DOM. The downsize of the virtual DOM is that having another representation of the DOM can lead to higher memory usage and it also is harder to integrate other frameworks.
5. Class cannot be used to reference an object in JS because it is a 'reverved' word unlike other attributes in JS. Therefore the workaround to this is to use `className` instead.
6. The difference between using addEventListener() and onClick() is that while addEventListener() can add multiple event handlers to a single element, onClick() can only add a single event handler (if another event is added it will be overwritten). An advantage to addEventLister() is that multiple event handlers can be added but a disadvantage is that the function does not work for some older internet browsers. An advantage to onClick() is that it can also be implemented as an HTML attribute but a disadvantage is that it will be overwritten if multiple events are added to a single element.
