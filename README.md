# reactive-var-helper

A tiny helper that allows you, instead of this:

```javascript
Template.myTemplate.onCreated(function(){
  this.myVar1 = new ReactiveVar('defaultValue1');
  this.myVar2 = new ReactiveVar('defaultValue2');
  this.myVar3 = new ReactiveVar('defaultValue3');
  ...
})
```

To do this:

```javascript
Template.myTemplate.reactiveVars({
  myVar1: 'defaultValue1',
  myVar2: 'defaultValue2',
  myVar3: 'defaultValue3',
})
```
