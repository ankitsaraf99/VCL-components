/* 
 
 */
define([
    'underscore', // do not remove it.
    'jquery', // do not remove it
    'vcl/views/componentView', // do not remove it
    'events',//Don't remove it
//  'libs/custom/Library',  if you need a library file named Library.js already uploaded by you 
    'd3', // remove it if not required by your graph and remove from function arg.
    'text!templates/vcl/p1.html' // HTML file 
                     // put 'text!templates/vcl/<ComponentName>.html'
], function(_, $, ComponentView,Events, d3, movG) {
    var chartName = ComponentView.extend({
        template: _.template(movG),     

        render: function() {
            $(this.parentId).html("");
            $(this.parentId).append(this.template);
            var width = this.width; // set width to container width
            var height = this.height;// set height to container height
//  Use this.parentId for refernce to DOM element to create visualization.    
//  Use this.model.attributes.properties.get('count').attributes.propertyValue
//  to link to property in "PROP.js" file  
//To add accordion view to the panel
$(function() {
    $( "#panel" ).accordion({
      collapsible: true,
      active: false,
      icon: null
    });
  });
//To add sortable function to tags
$(function() {
    $( "#mno" ).sortable();
    $( "#mno" ).disableSelection();
  });
//List of global variables
var test_data=this.data;
var parent_id=this.parentId;
var level_data = [];
var tag_data = [];
var json=[];
var tag_id=0;
var i=0;
var list_id=0;
var flag_json=0;
var global_flag=0;
var previous_string="";
var dummy_string="";
var delete_flag=0;
var node_data=[];
var data=[];

//To make the text-box invisible
document.getElementById("textbox_div").style.display="none";

//Add levels to auto-complete list
for(i=0;i<test_data.length;i++){
  data.push(test_data[i].type);
}
//Remove duplicates
$.each(data, function(i, el){
  if($.inArray(el, level_data) === -1) level_data.push(el);
});

//Add tags corresponding to give level  
function fill_tag(){
  if(global_flag%2 == 1){
    tag_data=[];
    for(i=0;i<35;i++){   
      if(dummy_string==test_data[i].type){  
        tag_data.push(test_data[i].name);
      }
    }
  }
}

function split( val ) {
      return val.split( /,\s*/ );
}
function extractLast( term ) {
      return split( term ).pop();
  }
$( "#mytext" )
  // don't navigate away from the field on tab when selecting an item
  .bind( "keydown", function( event ) {
    if ( event.keyCode === $.ui.keyCode.TAB &&
    $( this ).autocomplete( "instance" ).menu.active ) {
      event.preventDefault();
    }
  })
  .autocomplete({
    minLength: 0,
    source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
      var current_text = (global_flag%2 == 0) ? level_data : tag_data;
      response( $.ui.autocomplete.filter(
      current_text, extractLast( request.term ) ) );
    },
    focus: function() {
          // prevent value inserted on focus
      return false;
    },
    select: function( event, ui ) {
      // var terms = split( this.value );
      // remove the current input
      //terms.pop();
      // add the selected item
      //terms.push( ui.item.value );
      previous_string=ui.item.value;
      // add placeholder to get the comma-and-space at the end
      // terms.push( "" );
      // this.value = terms.join( ", " );
      submit();
      fill_tag();
      return false;
    }
  });

function submit(){
  //console.log(previous_string);
  document.getElementById("mytext").value="";
  document.getElementById("error").style.display="none";
  if(global_flag%2==0){
    level_length=level_data.length;
    level_flag=0;
    for(i=0;i<level_length;i++)
    {
      if(previous_string==level_data[i])
        level_flag=level_flag+1;
    }
    if(level_flag==0)
    { document.getElementById("error").style.display="block";
      $("#error").delay(100).hide('fast').delay(00).show('fast').delay(300).hide('fast').delay(100).show('fast').delay(300).hide('fast').delay(100).show('fast').delay(300).hide(100);
    }
    else
    {     for(i=0;i<json.length;i++)
          {
              if(json[i].level!=previous_string)
              {
                  flag_json=flag_json+1;
              }
              else{
                  flag_json=0;
                  break;
              }
          } 

          if(flag_json>0||json.length==0)
          {document.getElementById("mytext").placeholder="Enter tag";
          dummy_string=previous_string;
          //(document.getElementById("level").innerHTML)=x;
          //document.getElementById("level").style.display="inline";
          var node1;
          tag_id=tag_id+1;
          node1= '<label class="tags1"  id="l'+ tag_id +'" >'+ dummy_string  +' <i class="ui-icon ui-icon-close" /></label>';
          $("#textbox_div").append(node1);
          global_flag=global_flag+1;}
          else
          {
            document.getElementById("error").style.display="block";
            $("#error").delay(100).hide('fast').delay(100).show('fast').delay(500).hide('fast').delay(100).show('fast').delay(500).hide('fast').delay(100).show('fast').delay(500).hide(100);
          }    

          $('#l'+tag_id+" i").click(function(){
            $(this.parentNode).remove();
            previous_string="";
            document.getElementById("mytext").placeholder="Enter level";
             global_flag=global_flag-1;

          });
          
    }
  }
  else{
    
    tag_length=tag_data.length;
    tag_flag=0;
    for(i=0;i<tag_length;i++)
    {
      if(previous_string==tag_data[i])
        tag_flag=tag_flag+1;
    }
      if(tag_flag==0)
      { document.getElementById("error").style.display="block";
        $("#error").delay(100).hide('fast').delay(00).show('fast').delay(500).hide('fast').delay(100).show('fast').delay(500).hide('fast').delay(100).show('fast').delay(500).hide(100);
      }
      else{
        document.getElementById("mytext").placeholder="Enter level";
      var node;
      list_id=list_id+1;
      node= '<li id="l'+ list_id +'"><label class="tags" >'+ dummy_string +'&nbsp;&nbsp;:&nbsp;&nbsp;'+ previous_string +' <i class="ui-icon ui-icon-close"></i></label></li>';
      $("#mno").append(node);
      

      $('#l'+list_id+" i").click(function(){
            $(this.parentNode.parentNode).remove();
            delete_flag=delete_flag+1;
            console.log(el-((json.length)+delete_flag));
            json.splice(el-((json.length)+delete_flag),1);
	          console.log(json);

          });

      json.push({'level':dummy_string,'tag':previous_string});
      global_flag=global_flag+1;
      //document.getElementById("level").innerHTML="";
      //document.getElementById("level").style.display="none";
      el= "l"+ tag_id;
      var element = document.getElementById(el);
      element.parentNode.removeChild(element);

    }

  }
}


        },

        setSampleData: function() {

	 this.data=[
                          {
                            "name": "muESP",
                            "type": "Platform",
                          "icon": "/platform.jpg"
                          },
                          {
                            "name": "mkennedy0",
                            "ip": "230.110.80.252",
                            "state": "OFF",
                            "type": "Device",
                            "icon": "/workstation.jpg",
                            "subType": "Workstation"
                          },
                          {
                            "name": "dhart1",
                            "ip": "160.244.92.225",
                            "state": "OFF",
                            "type": "Device",
                            "icon": "/odroid.png",
                            "subType": "Odroid"
                          },
                          {
                            "name": "psnyder2",
                            "ip": "196.6.114.66",
                            "state": "ON",
                            "type": "Device",
                            "icon": "/workstation.jpg",
                            "subType": "Workstation"
                          },
                          {
                            "name": "wmason3",
                            "ip": "159.133.212.242",
                            "state": "ON",
                            "type": "Device",
                            "icon": "/workstation.jpg",
                            "subType": "Workstation"
                          },
                          {
                            "name": "dwelch4",
                            "ip": "129.221.38.250",
                            "state": "ON",
                            "type": "Device",
                            "icon": "/workstation.jpg",
                            "subType": "Workstation"
                          },
                          {
                            "name": "gjames5",
                            "ip": "109.185.173.250",
                            "state": "OFF",
                            "type": "Device",
                            "icon": "/workstation.jpg",
                            "subType": "Workstation"
                          },
                          {
                            "name": "mhudson6",
                            "ip": "120.195.120.36",
                            "state": "OFF",
                            "type": "Device",
                            "icon": "/odroid.png",
                            "subType": "Odroid"
                          },
                          {
                            "name": "jmitchell7",
                            "ip": "39.9.43.102",
                            "state": "OFF",
                            "type": "Device",
                            "icon": "/odroid.png",
                            "subType": "Odroid"
                          },
                          {
                            "name": "epeterson8",
                            "ip": "244.7.14.0",
                            "state": "ON",
                            "type": "Device",
                            "icon": "/workstation.jpg",
                            "subType": "Workstation"
                          },
                          {
                            "name": "wholmes9",
                            "ip": "44.43.25.30",
                            "state": "ON",
                            "type": "Device",
                            "icon": "/odroid.png",
                            "subType": "Odroid"
                          },
                          {
                            "id": 27,
                            "name": "dmartinez0",
                            "icon": "/eco123.jpg",
                            "type": "Ecosystem"
                          },
                          {
                            "id": 86,
                            "name": "jsimmons1",
                            "icon": "/eco123.jpg",
                            "type": "Ecosystem"
                          },
                          {
                            "id": 72,
                            "name": "aowens2",
                            "icon": "/eco123.jpg",
                            "type": "Ecosystem"
                          },
                          {
                            "id": 7,
                            "name": "twest3",
                            "icon": "/eco123.jpg",
                            "type": "Ecosystem"
                          },
                          {
                            "id": 15,
                            "name": "lray4",
                            "icon": "/eco123.jpg",
                            "type": "Ecosystem"
                          },
                          {
                            "id": 93,
                            "state": "Dead",
                            "name": "ereid0",
                            "icon": "/agency123.png",
                            "type": "Agency"
                          },
                          {
                            "id": 65,
                            "state": "Exception",
                            "name": "mwelch1",
                            "icon": "/agency123.png",
                            "type": "Agency"
                          },
                          {
                            "id": 66,
                            "state": "Dead",
                            "name": "lford3",
                            "icon": "/agency123.png",
                            "type": "Agency"
                          },
                          {
                            "id": 71,
                            "state": "Publishing",
                            "name": "jbarnes5",
                            "icon": "/agency123.png",
                            "type": "Agency"
                          },
                          {
                            "id": 1,
                            "state": "Dead",
                            "name": "wtucker6",
                            "icon": "/agency123.png",
                            "type": "Agency"
                          },
                          {
                            "id": 64,
                            "state": "Live",
                            "name": "lmills7",
                            "icon": "/agency123.png",
                            "type": "Agency"
                          },
                          {
                            "id": 42,
                            "state": "Dead",
                            "name": "welliott8",
                            "icon": "/agency123.png",
                            "type": "Agency"
                          },
                          {
                            "id": 53,
                            "state": "Publishing",
                            "name": "kbishop9",
                            "icon": "/agency123.png",
                            "type": "Agency"
                          },
                          {
                            "id": 95,
                            "mainFileType": "groovyFile",
                            "icon": "/groovyAgent.png",
                            "name": "ggilbert2s",
                            "type": "Agent",
                            "agencyName": "kbishop9",
                            "ecosystemName": "lray4",
                            "deviceIP": "230.110.80.252"    
                          },
                          {
                            "id": 195,
                            "mainFileType": "groovyFile",
                            "icon": "/groovyAgent.png",
                            "name": "test",
                            "type": "Agent",
                            "agencyName": "kbishop9",
                            "ecosystemName": "lray4",
                            "deviceIP": "230.110.80.252"    
                          },
                          {
                            "id": 13,
                            "mainFileType": "rFile",
                            "icon": "/RAgent.png",
                            "name": "kcunningham2t",
                            "type": "Agent",
                            "agencyName": "kbishop9",
                            "ecosystemName": "lray4",
                            "deviceIP": "160.244.92.225"
                          },
                          {
                            "id": 43,
                            "mainFileType": "rFile",
                            "icon": "/RAgent.png",
                            "name": "bpowell2u",
                            "type": "Agent",
                            "agencyName": "ereid0",
                            "ecosystemName": "lray4",
                            "deviceIP": "196.6.114.66"
                          },
                          {
                            "id": 62,
                            "mainFileType": "rFile",
                            "icon": "/RAgent.png",
                            "name": "flawson2v",
                            "type": "Agent",
                            "agencyName": "ereid0",
                            "ecosystemName": "lray4",
                            "deviceIP": "159.133.212.242"
                          },
                          {
                            "id": 34,
                            "mainFileType": "groovyFile",
                            "icon": "/groovyAgent.png",
                            "name": "lflores2w",
                            "type": "Agent",
                            "agencyName": "mwelch1",
                            "ecosystemName": "twest3",
                            "deviceIP": "129.221.38.250"
                          },
                          {
                            "id": 75,
                            "mainFileType": "pyFile",
                            "icon": "/pyAgent.png",
                            "name": "wroberts2x",
                            "type": "Agent",
                            "agencyName": "welliott8",
                            "ecosystemName": "aowens2",
                            "deviceIP": "109.185.173.250"
                          },
                          {
                            "id": 68,
                            "mainFileType": "pyFile",
                            "icon": "/pyAgent.png",
                            "name": "mkelley2y",
                            "type": "Agent",
                            "agencyName": "lmills7",
                            "ecosystemName": "aowens2",
                            "deviceIP": "120.195.120.36"
                          },
                          {
                            "id": 48,
                            "mainFileType": "rFile",
                            "icon": "/RAgent.png",
                            "name": "tgriffin2z",
                            "type": "Agent",
                            "agencyName": "wtucker6",
                            "ecosystemName": "jsimmons1",
                            "deviceIP": "39.9.43.102"
                          },
                          {
                            "id": 67,
                            "mainFileType": "rFile",
                            "icon": "/RAgent.png",
                            "name": "jvasquez30",
                            "type": "Agent",
                            "agencyName": "jbarnes5",
                            "ecosystemName": "dmartinez0",
                            "deviceIP": "244.7.14.0"
                          },
                          {
                            "id": 20,
                            "mainFileType": "groovyFile",
                            "icon": "/groovyAgent.png",
                            "name": "jcox31",
                            "type": "Agent",
                            "agencyName": "lford3",
                            "ecosystemName": "dmartinez0",
                            "deviceIP": "44.43.25.30"
                          }
                        ];
            
        },

        setStaticData: function(socketdata) {

        },
	listen: function(data) {
         document.getElementById("textbox_div").style.display="none"; 
          console.log(data);
	if(data!=null)
	{    //document.getElementById(this.parentId).parentNode.style.display = 'block';
	 $("#panel").parent().parent().show(1000);
   //document.getElementById("panel").style.display="block";
        
	}
          node_data=data;
     var obj = node_data;
     var table = document.getElementById("myTable");
     $(table).empty();
           for (var prop in obj) {
      // important check that this is objects own property 
      // not from prototype prop inherited
	  if(prop!="children"){	
          if(obj.hasOwnProperty(prop)){
        console.log(prop + " = " + obj[prop]);
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = prop;
        cell2.innerHTML = obj[prop];
      }
   }}
   if(obj.type=="Device")
    document.getElementById("textbox_div").style.display="inline";
        },
  listen1: function() {
        $( "#mno" ).empty();
        json=[];
         $("#panel").parent().parent().hide(1000);
        //document.getElementById(parent_id).parentNode.style.display = 'none';
        //document.getElementById("panel").style.display="none";
        }.bind(this),
  getExposedFunctions:function(){
        return [
	
	//Event Listener Function decaration	
	{
          displayName:'listen', //Name you want to display for the function
          functionName:'listen' //This function should exist
        },
  {
          displayName:'listen1', //Name you want to display for the function
          functionName:'listen1' //This function should exist
        }
	
	];
      },
      
     

    });

    return chartName;
});
