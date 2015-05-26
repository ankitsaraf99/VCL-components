define([
    'underscore', // do not remove it.
    'jquery', // do not remove it
    'vcl/views/componentView',
    'events', // do not remove it
    //  'libs/custom/Library',  if you need a library file named Library.js already uploaded by you
    'd3',
    'text!templates/vcl/image_link.html' // remove it if not required by your graph and remove from function arg.
    // 'text!templates/vcl/Graph.html' // HTML file if necessary
    // put 'text!templates/vcl/<ComponentName>.html'
], function(_, $, ComponentView,Events, d3, movG) {
    var chartName = ComponentView.extend({
        template: _.template(movG),     //remove if template is not being used

        render: function() {

            $(this.parentId).html("");
            $(this.parentId).append(this.template); //remove if template is not being used
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
            $(img).attr("src", this.model.attributes.properties.get("img_path").attributes.propertyValue);
            $(img).attr("height", this.model.attributes.properties.get("img_height").attributes.propertyValue);
            $(img).attr("width", this.model.attributes.properties.get("img_width").attributes.propertyValue);
            $(this.parentId).append(img);
            var self=this;


/////////////////////////////////////////////////

function down(){
            console.log("download______button_____clicked");
            var a_link1=document.createElement('a');
                        a_link1.href = self.f1;
                        a_link1.download = "deploy.sh";
                        a_link1.click();

            var a_link2=document.createElement('a');
                        a_link2.href = self.f2;
                        a_link2.download = "muStream_Deployment_Guide_v1.1.pdf";
                        a_link2.click();

            var a_link3=document.createElement('a');
                        a_link3.href = self.f3;
                        a_link3.download = "setupaa";
                        a_link3.click();

            var a_link4=document.createElement('a');
                        a_link4.href= self.f4;
                        a_link4.download= "setupab";
                        a_link4.click();

            var a_link5=document.createElement('a');
                        a_link5.href= self.f5;
                        a_link5.download= "setupac";
                        a_link5.click();

            var a_link6=document.createElement('a');
                        a_link6.href=self.f6;
                        a_link6.download="setupad";
                        a_link6.click();

            var a_link7=document.createElement('a');
                        a_link7.href= self.f7;
                        a_link7.download= "setupae";
                        a_link7.click();

            var a_link8=document.createElement('a');
                        a_link8.href= self.f8;
                        a_link8.download= "setupaf";
                        a_link8.click();

            var a_link9=document.createElement('a');
                        a_link9.href=self.f9;
                        a_link9.download= "setupag";
                        a_link9.click();

            var a_link10=document.createElement('a');
                        a_link10.href= self.f10;
                        a_link10.download="setupah";
                        a_link10.click();

            var a_link11=document.createElement('a');
                        a_link11.href= self.f11;
                        a_link11.download= "setupai";
                        a_link11.click();

            var a_link12=document.createElement('a');
                        a_link12.href= self.f12;
                        a_link12.download= "setupaj";
                        a_link12.click();

            var a_link13=document.createElement('a');
                        a_link13.href= self.f13;
                        a_link13.download= "setupak";
                        a_link13.click();

            var a_link14=document.createElement('a');
                        a_link14.href= self.f14;
                        a_link14.download="setupal";
                        a_link14.click();

            var a_link15=document.createElement('a');
                        a_link15.href= self.f15;
                        a_link15.download= "setupam";
                        a_link15.click();

            var a_link16=document.createElement('a');
                        a_link16.href= self.f16;
                        a_link16.download= "setupan";
                        a_link16.click();
            }

        $(img).click(function(){down();})

/////////////////////////////////////////////////////////////////////////////////////////////////////


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
            this.f1=data.f1;
            this.f2=data.f2;
            this.f3=data.f3;
            this.f4=data.f4;
            this.f5=data.f5;
            this.f6=data.f6;
            this.f7=data.f7;
            this.f8=data.f8;
            this.f9=data.f9;
            this.f10=data.f10;
            this.f11=data.f11;
            this.f12=data.f12;
            this.f13=data.f13;
            this.f14=data.f14;
            this.f15=data.f15;
            this.f16=data.f16;
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