Template.prototype.reactiveVars = function(reactiveVars){
  var templateName = this.viewName.replace('Template.', '')
  Template[templateName].onCreated(function(){
    var self = this
    _.each(reactiveVars, function(defaultValue, varName){
      self[varName] = new ReactiveVar(defaultValue)
    })
  })
}
