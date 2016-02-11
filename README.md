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

###Template helpers
You can also automatically add template helpers using `withTemplateHelper`!

So instead of this:

```javascript
Template.myTemplate.onCreated(function(){
  this.myVar1 = new ReactiveVar('defaultValue1');
  this.myVar2 = new ReactiveVar('defaultValue2');
  this.myVar3 = new ReactiveVar('defaultValue3');
});

Template.myTemplate.helpers({
  myVar2: function() {
    return Template.instance().myVar2.get();
  }
  myVar3: function() {
    return Template.instance().myVar3.get();
  }
});
```

You can do this:

```javascript
Template.myTemplate.reactiveVars({
  myVar1: 'defaultValue1',
  withTemplateHelper: {
    myVar2: 'defaultValue2',
    myVar3: 'defaultValue3'
  }
})
```


