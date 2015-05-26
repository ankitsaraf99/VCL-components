/* 
 Add your properties here
 */

define([],
    function() {
        var Comp_props = [{
            id: 'count', //this property "id" can be linked to your "VIEW.js" file 
//  this.model.attributes.properties.get('count').attributes.propertyValue   
            propertyName: 'No of Points', // Name to be displayed in property pane.
            propertyValue: '10', // Default Value
            visibility: true
            }];
        return Comp_props;
    });
