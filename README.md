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

```
git clone https://github.com/cesarecamurani/JanuS
```
1. From the command line in the main folder:
```
npm install
```
```
npm add colors
```
2. From the command line in the proj folder:
```
npm add deep-equal
```
```
npm link
```
3. From the command line in the playground folder:
```
npm link janus
```

Now you can go in <b>playground/src</b> and add the code to be tested and in <b>playground/tests</b> to write your tests.

Please note that you may need to repeat steps <b>2</b> and <b>3</b> in case you install other dependencies after them.
