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
            var BTN={
              font_size: this.model.attributes.properties.get('lbl_font').attributes.propertyValue,
              font_color: this.model.attributes.properties.get('lbl_color').attributes.propertyValue,
              height: this.model.attributes.properties.get('btn_height').attributes.propertyValue,
              width: this.model.attributes.properties.get('btn_width').attributes.propertyValue,
              background: this.model.attributes.properties.get('btn_bg').attributes.propertyValue,
              parent_background:this.model.attributes.properties.get('p_bg').attributes.propertyValue
            };

            //Don't remove following statement if you are creating component for Form Container
            $(this.parentId).css({
                'word-wrap':'break-word',
                'overflow':'inherit',
                'border':0,
                'text-align':'justify',
                'background': BTN.parent_background,
                'margin-top':'0px' 
            });


            var lbl = $(document.createElement('label'));
            //var text = $(document.createTextNode(this.model.attributes.properties.get("H_data").attributes.propertyValue));
            $(lbl).html(this.model.attributes.properties.get("lbl_data").attributes.propertyValue);
            $(lbl).css({
                'color':BTN.font_color,
                'font-size':BTN.font_size,
                'margin-top':'0px',
                'margin-bottom':'0px',
            });
            //$(this.parentId).append(p1);
            var btn = $(document.createElement('button'));
            //var text = $(document.createTextNode(this.model.attributes.properties.get("C_data").attributes.propertyValue));
            //$(p2).html(this.model.attributes.properties.get("C_data").attributes.propertyValue);
            $(btn).css({
                'width':BTN.width,
                'height':BTN.height,
                'margin-top':'0px',
                'margin-bottom': '0px',
                'background':BTN.background,
                'line-height': '1.33',
                'border-radius': '6px',
                'display': 'inline-block',
                'padding': '10px',
                'text-align': 'center',
                'white-space': 'nowrap',
                'vertical-align': 'middle',
                'border': '0px',
                'cursor': 'pointer',
            });
            $(btn).append(lbl);
            var a_link=$(document.createElement('a'));
            $(a_link).attr("href", this.model.attributes.properties.get("a_path").attributes.propertyValue);
            $(a_link).attr("download", "download.png");
            $(a_link).append(btn);
            $(this.parentId).append(a_link);



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