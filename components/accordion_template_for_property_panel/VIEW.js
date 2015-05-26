/* 
 
 */
define([
    'underscore', 
    'jquery', 
    'vcl/views/componentView', 
    'events',
    'd3', 
    'text!templates/vcl/p7.html'  
                    
], function(_, $, ComponentView,Events, d3, movG) {
    var chartName = ComponentView.extend({
        template: _.template(movG),     

        render: function() {
            $(this.parentId).html("");
            $(this.parentId).append(this.template);
            var width = this.width; 
            var height = this.height;

var HEADING={
  background: this.model.attributes.properties.get('H_bg').attributes.propertyValue,
  font_size: this.model.attributes.properties.get('H_font').attributes.propertyValue,
  font_color: this.model.attributes.properties.get('H_color').attributes.propertyValue,
  align: this.model.attributes.properties.get('H_align').attributes.propertyValue
};
var BUTTON={
  background: this.model.attributes.properties.get('btn_bg').attributes.propertyValue,
  font_size: this.model.attributes.properties.get('btn_font').attributes.propertyValue,
  font_color: this.model.attributes.properties.get('btn_color').attributes.propertyValue,
  height: this.model.attributes.properties.get('btn_height').attributes.propertyValue,
  width: this.model.attributes.properties.get('btn_width').attributes.propertyValue
};
var TABLE={
  background: this.model.attributes.properties.get('tbl_bg').attributes.propertyValue,
  font_size: this.model.attributes.properties.get('tbl_font').attributes.propertyValue,
  font_color: this.model.attributes.properties.get('tbl_color').attributes.propertyValue,
  align: this.model.attributes.properties.get('tbl_align').attributes.propertyValue
};
console.log(HEADING.background);
$(".tag_heading ").css('background',HEADING.background);
$(".tag_heading ").css('font-size',HEADING.font_size);
$(".tag_heading ").css('text-align',HEADING.align);
$(".tag_heading ").css('color',HEADING.font_color);
$("#mybutton").css('background',BUTTON.background);
$("#mybutton").css('font-size',BUTTON.font_size);
$("#mybutton").css('color',BUTTON.font_color);
$("#mybutton").css('height',BUTTON.height);
$("#mybutton").css('width',BUTTON.width);
$("#mybutton").css('border-radius','4px');

$("#myTable ").css('background',TABLE.background);
$("#myTable").css('font-size',TABLE.font_size);
$("#myTable ").css('text-align',TABLE.align);
$("#myTable ").css('color',TABLE.font_color);


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
document.getElementById("mybutton").style.display="none";

//Add levels to auto-complete list
for(i=0;i<test_data.length;i++){
  data.push(test_data[i].type);
}
//Remove duplicates
$.each(data, function(i, el){
  if($.inArray(el, level_data) === -1) level_data.push(el);
});

//Add tags corresponding to given level  
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
// Autocomplete feature
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

  
//To perform manipulations on data submitted
function submit(){
  //console.log(previous_string);
  document.getElementById("mytext").value="";
  document.getElementById("error").style.display="none";
  //If level is being entered
  if(global_flag%2==0){
    level_length=level_data.length;
    level_flag=0;

    for(i=0;i<level_length;i++)
    {
      if(previous_string==level_data[i])
        level_flag=level_flag+1;
    }
    //Check whether level is selected from the given list
    if(level_flag==0)
    { document.getElementById("error").style.display="block";
      $("#error").delay(100).hide('fast').delay(00).show('fast').delay(300).hide('fast').delay(100).show('fast').delay(300).hide('fast').delay(100).show('fast').delay(300).hide(100);
    }
    else
    {   //Add level to a variable so that it is not selected again  
      for(i=0;i<json.length;i++)
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
          document.getElementById("mybutton").style.display="none";
          //(document.getElementById("level").innerHTML)=x;
          //document.getElementById("level").style.display="inline";
          //Create a box containing level value
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
    //If tag has been entered
    tag_length=tag_data.length;
    tag_flag=0;
    //Select tag from given list
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
      node= '<li class="tag_list" id="l'+ list_id +'"><label class="tags" >'+ dummy_string +'&nbsp;&nbsp;:&nbsp;&nbsp;'+ previous_string +' <i class="ui-icon ui-icon-close"></i></label></li>';
      $("#mno").append(node);
      
      //Delete the level and tag box and remove json entry
      $('#l'+list_id+" i").click(function(){
            $(this.parentNode.parentNode).remove();
            delete_flag=delete_flag+1;
            console.log(el-((json.length)+delete_flag));
            json.splice(el-((json.length)+delete_flag),1);
            console.log(json);

          });

      json.push({'level':dummy_string,'tag':previous_string});
      document.getElementById("mybutton").style.display="block";
      global_flag=global_flag+1;
      //document.getElementById("level").innerHTML="";
      //document.getElementById("level").style.display="none";
      el= "l"+ tag_id;
      var element = document.getElementById(el);
      element.parentNode.removeChild(element);

      $('#mybutton').click(function(){

            console.log(json);

          });

    }

  }
}
 //$(".tag_heading").style.background=HEADING.background;


        },

        setSampleData: function() {
this.count = 0;

          var x = {
  "platform": {
    "name": "muESP",
    "icon": "platform.jpg"
  },
  "deviceList": [
    {
      "name": "Device1",
      "ip": "172.25.1.159",
      "state": "ON",
      "icon": "workstation.jpg",
      "type": "ORDROID"
    },
    {
      "name": "Device2",
      "ip": "172.25.1.157",
      "state": "ON",
      "icon": "workstation.jpg",
      "type": "WORKSTATION"
    }
  ],
  "ecosystemList": [
    {
      "id": "122345",
      "name": "Ecosystem1",
      "icon": "eco123.jpg"
    }
  ],
  "agencyList": [
    {
      "agencyID": "124578",
      "state": "PUBLISHED",
      "name": "Agency1",
      "icon": "agency123.png"
    }
  ],
  "agentList": [
    {
      "agentID": "00001",
      "mainFileType": "Groovy",
      "name": "Agent1",
      "icon": "groovyAgent.png",
      "agencyName": "Agency1",
      "ecosystemName": "Ecosystem1",
      "deviceIP": "172.25.1.157"
    },
    {
      "agentID": "00002",
      "mainFileType": "Groovy",
      "name": "Agent2",
      "icon": "groovyAgent.png",
      "agencyName": "Agency1",
      "ecosystemName": "Ecosystem1",
      "deviceIP": "172.25.1.159"
    }
  ]
};




          x.deviceList.map(function(d) {d.subtype = d.type; delete d.type; return d})
          var json=[];
          // function isArray(what) {
          //   return Object.prototype.toString.call(what) === '[object Array]';
          // }
          for(var y in x)
          {
           // if(isArray(x[y])){
            if(Object.prototype.toString.call(x[y]) === '[object Array]'){
              for(var z in x[y])
              {   
                x[y][z].type=y.split("L")[0];
                json.push(x[y][z]);
              }
            }
            else{
              x[y].type=y;
              json.push(x[y]);
            }
          }

          this.data = json;


          
        },

        setStaticData: function(socketdata) {

console.log("Webservice data... " + JSON.stringify(socketdata));
var mydata= socketdata;
  //Allocate subtype as type from given json and delete type key
  mydata.deviceList.map(function(d) {d.subtype = d.type; delete d.type; return d})
  var myjson=[];
  for(var y in mydata)
  {
//    if(isArray(mydata[y])){
    //Check if it is array
    if(Object.prototype.toString.call(mydata[y]) === '[object Array]'){
    //Traverse each object and push to new json 
    for(var z in mydata[y])
      {   
      mydata[y][z].type=y.split("L")[0];
      myjson.push(mydata[y][z]);
      }
    }
    else{
      mydata[y].type=y;
      myjson.push(mydata[y]);}
  }
  this.data=myjson;
  this.render();

    
        },

listen: function(data) {
var ct = this.count;
         document.getElementById("textbox_div").style.display="none"; 
          console.log(data);
if(data!=null){    
//document.getElementById(this.parentId).parentNode.style.display = 'block';
$(this.parentId).parent().show();
    document.getElementById("panel").style.display="block";
        
}
          node_data=data;
     var obj = node_data;
     var table = document.getElementById("myTable");
     $(table).empty();
           for (var prop in obj) {
      //Add properties to the table
 if(prop!="children"&prop!="px"&prop!="py"&prop!="x"&prop!="y"&prop!="fixed"&prop!="weight"&prop!="index"&prop!="id"){ 
          if(obj.hasOwnProperty(prop)){
        //console.log(prop + " = " + obj[prop]);
        if(prop!="behaviourList"){
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = prop;
        cell2.innerHTML = obj[prop];  
        }
        else{
          var bl=obj["behaviourList"];
          var behaviourlist=obj["behaviourList"];
          var behaviourListLength = obj["behaviourList"].length;
          var dropDown = document.createElement('select');
          dropDown.setAttribute("id", "behaviourNameText");
          dropDown.setAttribute("class", "propertiesRowStatic span2");
          dropDown.setAttribute("value", "Behaviour");
          $(dropDown).prepend("<option value='' selected='selected'>Select behaviour</option>");
          for(var index = 0; index < behaviourListLength; index++){
            var currentBehaviour = obj["behaviourList"][index];
            var behaviourName = currentBehaviour.behaviourName;
            $(dropDown).append($('<option>', {
                id: index,
                class: 'options',
                text: behaviourName
            }));
           }
          // show the behaviour name in drop down using " cell2.innerHTML = obj[prop];"
          var row = table.insertRow(-1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          cell1.innerHTML = prop;
          cell2.appendChild(dropDown); 
          $('#behaviourNameText').change(function(){
              console.log('hi');
              var o_id=parseInt($(this).find('option:selected').attr("id"));  
              console.log('ct... ', ct);
              //Reset behaviour properties by deleting previous ones
              for(var i=0;i<ct;i++)
              {
               document.getElementById("myTable").deleteRow(-1);   
              }
              ct=0;
              for (var prop1 in bl[o_id]) {

                            //Add behaviour properties
                            if(prop1!="behaviourName"){
                            //console.log('prop1,,, ', JSON.stringify(prop1), 'bl[prop],,, ', bl[prop1]);
                            var row = table.insertRow(-1);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell1.innerHTML = prop1;
                            cell2.innerHTML = bl[o_id][prop1];  
                            ++ct;
                            }

                          }
          });
             
 
        }
        
      }
   }}
    document.getElementById("textbox_div").style.display="inline";
        },


  listen1: function() {
        $( "#mno" ).empty();
        json=[];
        console.log(this);
        document.getElementById("panel").style.display="none";
        $(this.parentId).parent().hide();

        //document.getElementById(parent_id).parentNode.style.display = 'none';
        
        },
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
      }
      
     

    });

    return chartName;
});