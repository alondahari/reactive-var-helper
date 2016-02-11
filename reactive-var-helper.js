Template.prototype.reactiveVars = function(reactiveVars) {
  
  //Get the name of the template
  var templateName = this.viewName.replace('Template.', '');

  //Add each of the reactiveVars in the onCreated callback
  Template[templateName].onCreated(function() {

    var self = this;

    //Loop through the reactiveVars
    _.each(reactiveVars, function(defaultValue, varName) {

      //Check if varName is the withTemplateHelper object
      if (varName === 'withTemplateHelper' && _.isObject(defaultValue)) {

        //Init the helpers object
        var helpersObject = {};

        //Loop through each variable and add the helper and the reactive var
        _.each(defaultValue, function(defaultValue, varName) {

          //Create new reactiveVar
          self[varName] = new ReactiveVar(defaultValue);
          
          //Add helper
          helpersObject[varName] = function() {
            return Template.instance()[varName].get();
          }

        });
        //Add all the helpers to the template
        Template[templateName].helpers(helpersObject);

      } else {

         //Create new reactiveVar (without template helper)
         self[varName] = new ReactiveVar(defaultValue);
      }
      
    });

  });


  //Add all the helpers to the template
  if (typeof helpersObject !== "undefined") {
    Template[templateName].helpers(helpersObject);
  }

}
