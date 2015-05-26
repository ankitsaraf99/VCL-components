/*
 * @Author: Vikash
 */
define([
    'underscore', // do not remove it.
    'jquery', // do not remove it
    'vcl/views/componentView', // do not remove it
    //  'libs/custom/Library',  if you need a library file named Library.js already uploaded by you
    'd3' // remove it if not required by your graph and remove from function arg.
    // 'text!templates/vcl/Graph.html' // HTML file if necessary
    // put 'text!templates/vcl/<ComponentName>.html'
], function(_, $, ComponentView, d3) {
    var chartName = ComponentView.extend({
        //template: _.template(movG),     //remove if template is not being used

        render: function() {

            $(this.parentId).html("");
            $(this.parentId).append(this.template); //remove if template is not being used
            var HEADING={
              background: this.model.attributes.properties.get('H_bg').attributes.propertyValue,
              font_size: this.model.attributes.properties.get('H_font').attributes.propertyValue,
              font_color: this.model.attributes.properties.get('H_color').attributes.propertyValue,
              align: this.model.attributes.properties.get('H_align').attributes.propertyValue,
              height: this.model.attributes.properties.get('H_height').attributes.propertyValue,
              width: this.model.attributes.properties.get('H_width').attributes.propertyValue,
              bottom_clr: this.model.attributes.properties.get('H_border').attributes.propertyValue
            };
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
                'border':'1px solid rgba(0,0,0,0.18)'
            });


            var p1 = $(document.createElement('p'));
            //var text = $(document.createTextNode(this.model.attributes.properties.get("H_data").attributes.propertyValue));
            $(p1).html(this.model.attributes.properties.get("H_data").attributes.propertyValue);
            $(p1).css({
                'width':HEADING.width,
                'height':HEADING.height,
                'background':HEADING.background,
                'color':HEADING.font_color,
                'font-size':HEADING.font_size,
                'text-align':HEADING.align,
                'margin-top':'0px',
                'margin-bottom':'0px',
                'padding':'10px',
                'font-family':'verdana, arial, sans-serif',
                'border-bottom':'3px solid',
                'border-bottom-color':this.model.attributes.properties.get("H_border").attributes.propertyValue,
                'font-weight':'bold'
            });
            $(this.parentId).append(p1);
            var p2 = $(document.createElement('p'));
            //var text = $(document.createTextNode(this.model.attributes.properties.get("C_data").attributes.propertyValue));
            $(p2).html(this.model.attributes.properties.get("C_data").attributes.propertyValue);
            $(p2).css({
                'width':CONTENT.width,
                'height':CONTENT.height,
                'background':CONTENT.background,
                'color':CONTENT.font_color,
                'font-size':CONTENT.font_size,
                'margin-top':'0px',
                'margin-bottom': '0px',
                'padding-left': '10px',
                'padding-right': '10px',
                'padding-top': '5px',
                'padding-bottom': '5px'
                
            });
            $(this.parentId).append(p2);


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
        }

    });

    return chartName;
});