
define([
    'underscore', // do not remove it.
    'jquery', // do not remove it
    'vcl/views/componentView',
    'events', // do not remove it
    //  'libs/custom/Library',  if you need a library file named Library.js already uploaded by you
    'd3',
    'text!templates/vcl/image_display.html' // remove it if not required by your graph and remove from function arg.
    // 'text!templates/vcl/Graph.html' // HTML file if necessary
    // put 'text!templates/vcl/<ComponentName>.html'
], function(_, $, ComponentView,Events, d3, movG) {
    var chartName = ComponentView.extend({
        template: _.template(movG),     //remove if template is not being used

        render: function() {

            $(this.parentId).html("");
            $(this.parentId).append(this.template);
            var mydata=""; //remove if template is not being used
           var IMG={
              parent_background:this.model.attributes.properties.get('p_bg').attributes.propertyValue
            };

            //Don't remove following statement if you are creating component for Form Container
            $(this.parentId).css({

                'border':'0px',
                'background': IMG.parent_background,
                'margin-top':'0px' 
            });

var img=$(document.createElement('img'));
            $(img).attr("src",this.mydata);
            $(img).attr("id", "myimg");
            // $(img).attr("src",this.mydata||this.model.attributes.properties.get("img_path").attributes.propertyValue);
            $(img).attr("height", this.model.attributes.properties.get("img_height").attributes.propertyValue);
            $(img).attr("width", this.model.attributes.properties.get("img_width").attributes.propertyValue);
            $(this.parentId).append(img);




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
           
        },
        listen: function(data) {
            
            this.mydata=data.img;
            this.render();
            $('#myimg').parent().parent().parent().parent().parent().parent().show();
            
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