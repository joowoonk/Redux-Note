redux has a lot of concept behind the scene so I decided to take notes from the previous recorded class and put the guided project here. I want to follow along with the class and so I could go revisit the materials of redux when I can. 


- what's immutable and why do we care to learn?
    : Since we don't want to change original state, we want to make application states immutable. 


Refer to this website [https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6] if you want to revisit the flow of redux by explaination without code but cartoonized. 

Refer back to code to see the actual code on this repo.  

Store: The concept of the store essentially, all the state and our application, every single piece of state is going to represented in just a single javascript object.  Based on one global giant object that contains all of the state for our application that's referred to store.

UI: This is React. (Depends on what you are using.)

Action:  describes what's the event. It's really all about just an object. An action is just a plain old JS object that we pass through to the reducer. Keys names are there. Just follow conventionally. such as payload... type...  so others dont confuse with your code.

Reducer: it's a pure function, takein paremeter of some state and an action. clone the state and makes a change -  it makes a change to the clone based on the action that does what the action tells it what to do then return to a new state. 




