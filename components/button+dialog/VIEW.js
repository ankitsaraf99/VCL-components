/* 
 
 */
define([
    'underscore', // do not remove it.
    'jquery', // do not remove it
    'vcl/views/componentView', // do not remove it
    'events',//Don't remove it
//  'libs/custom/Library',  if you need a library file named Library.js already uploaded by you 
    'd3', // remove it if not required by your graph and remove from function arg.
    'text!templates/vcl/d_b.html' // HTML file 
                     // put 'text!templates/vcl/<ComponentName>.html'
], function(_, $, ComponentView,Events, d3, movG) {
    var chartName = ComponentView.extend({
        template: _.template(movG),     

        render: function() {
            $(this.parentId).html("");
            $('body').append(this.template);
            var width = this.width; // set width to container width
            var height = this.height;// set height to container height
//  Use this.parentId for refernce to DOM element to create visualization.    
//  Use this.model.attributes.properties.get('count').attributes.propertyValue
//  to link to property in "PROP.js" file
$(this.parentId).append('<button id="adv_btn" style="background:#ABB7B7;padding:10px;font:16px;border:0px" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#downloaderModal">Advanced</button>');

            var json=[];
            $(document).ready(function() {
                      $('.checkbox').each(function() { //loop through each checkbox
                          this.checked = true;
                          json.push(this.value);  //select all checkboxes with class "checkbox1"               
                      });
                      $(".checkbox").change(function() {
                              var ischecked= $(this).is(':checked');
                              if(!ischecked)
                                json.splice(json.indexOf(this.value),1);
                              else
                                json.push(this.value);
                              if(json.length==0){
                              $("#download").attr('disabled',true);
                            }
                            else{
                              $("#download").attr('disabled',false);
                            }
                          });
                      $("#download").click(function(){
                        console.log(json);
                        for(var i=0;i<json.length;i++)
                        { var link = document.createElement("a");
                              link.download = "file"+json[i]+".jpg" ;
                              link.href = "./img/vcl/usercomponents/file"+json[i]+".jpg";
                              link.click();
                        }
                      });

                 
              });

          $('#adv_btn').click(function(){

$('#downloaderModal').modal('show');})

        },

        setSampleData: function() {
            
        },

        setStaticData: function(socketdata) {

        },
      getExposedFunctions:function(){
        return [
	/*
	Event Listener Function decaration	
	{
          displayName:'listen', //Name you want to display for the function
          functionName:'listen' //This function should exist
        }
	*/
	];
      },
      getEventList: function() {
	//Trigger events
	//Events.trigger('ArrayChange','dataToBeSent');        
	return [
	/*
	Events that will be Exposed	
	{
          eventName: 'ArrayChange',
          displayName: 'ArrayChange'
        }
	*/
	];
      }

    });

    return chartName;
});
