
define([
    'underscore', // do not remove it.
    'jquery', // do not remove it
    'vcl/views/componentView',
    'events', // do not remove it
    //  'libs/custom/Library',  if you need a library file named Library.js already uploaded by you
    'd3',
    'text!templates/vcl/paragraph.html' // remove it if not required by your graph and remove from function arg.
    // 'text!templates/vcl/Graph.html' // HTML file if necessary
    // put 'text!templates/vcl/<ComponentName>.html'
], function(_, $, ComponentView,Events, d3, movG) {
    var chartName = ComponentView.extend({
        template: _.template(movG),     //remove if template is not being used

        render: function() {

            $(this.parentId).html("");
            $(this.parentId).append(this.template);
 //remove if template is not being used
            var CONTENT={
              background: this.model.attributes.properties.get('C_bg').attributes.propertyValue,
              font_size: this.model.attributes.properties.get('C_font').attributes.propertyValue,
              font_color: this.model.attributes.properties.get('C_color').attributes.propertyValue,
              height: this.model.attributes.properties.get('C_height').attributes.propertyValue,
              width: this.model.attributes.properties.get('C_width').attributes.propertyValue,
              p_background: this.model.attributes.properties.get('p_bg').attributes.propertyValue
            };
            

            //Don't remove following statement if you are creating component for Form Container
            $(this.parentId).css({
                'word-wrap':'break-word',
                'overflow':'inherit',
                'border':'0px',
                'text-align':'justify',
                'background-color':'white',
                'margin-top':'0px',
                'background': CONTENT.p_background,
            });


            var p = $(document.createElement('p'));
            //var text = $(document.createTextNode(this.model.attributes.properties.get("C_data").attributes.propertyValue));
            $(p).html(this.mydata || mydata);
            $(p).css({
                'width':CONTENT.width,
                'height':CONTENT.height,
                'background':CONTENT.background,
                'color':CONTENT.font_color,
                'font-size':CONTENT.font_size,
                'margin-top':'0px',
                'margin-bottom': '0px',
                'padding-left': '2px',
                'padding-right': '2px',
                'padding-top': '5px',
                'padding-bottom': '5px'
                
            });
            $(this.parentId).append(p);


            //  Use this.parentId for refernce to DOM element to create visualization.
            //  Use this.model.attributes.properties.get('top').attributes.propertyValue
            //  to link to property in "PROP.js" file

            /*
             *   Add You code below
             */
             


        },

        setSampleData: function() {

            this.data = {};
        },

        setStaticData: function(socketdata) {
            if(socketdata.hasOwnProperty('paragraph')){
                this.data=socketdata.paragraph;
                this.render();
            }
        },
        listen: function(data) {
            this.mydata=data[this.model.attributes.properties.get('key').attributes.propertyValue];
            this.render();
            
        },
        getExposedFunctions:function(){
            return [
    
    //Event Listener Function decaration    
                {
                  displayName:'listen', //Name you want to display for the function
                  functionName:'listen' //This function should exist
                }
            ];
              }

    });

    return chartName;
});