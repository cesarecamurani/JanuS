# 🌜 JanuS6  🌛

Testing framework made in <b>JavaScript</b>

![Alt text](/screenshot.png?raw=true "Janus Testing Framework")

### Available Matchers:

- <b>same</b> (assertion passes if two values are exactly the same object (for reference types) or equal (for primitive types))
- <b>identical</b> (assertion passes if two values are equivalent)
- <b>deeplyIdentical</b> (assertion passes if two values are deeply equal)
- <b>contains</b> (assertion passes for value a containing value b)
- <b>notContains</b> (assertion passes for value a not containing value b)
- <b>throws</b> (assertion passes for function correclty throwing an Error)
- <b>isTrue</b> (assertion passes if the value/function passed as argument is true)
- <b>isFalse</b> (assertion passes if the value/function passed as argument is false)

### How to use it:

From the command line in the main folder:
```
npm install janus6
```

Now you can use it in your tests (example made assuming you're using ES6 syntax):
```
import janus6 from 'janus6'
import { verify } from 'janus6'
import YourClass from '../src/YourClass'

let something = new YourClass()
let somethingElse = new YourClass()

janus6.group('YourClass', () => {
  janus6.group('method: doesSomething', () => {
    janus6.check('whatever you want to test', () => {
      something.doesSomething()
      verify.contains(container, content);
    });
  });
  janus6.group('method: doesSomethingElse', () => {
    janus6.check('whatever you want to test', () => {
      something.doesSomethingElse()
      verify.isTrue("JavaScript is amazing!"); // evaluates to true by the way! 😉    
    });
  });
  janus6.group('method: doesAnotherThing', () => {
    janus6.check('whatever you want to test', () => {
      something.doesAnotherThing()
      verify.same(something, somethingElse);
    });
  });
});

```

