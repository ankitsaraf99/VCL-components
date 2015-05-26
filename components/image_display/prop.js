/*
* @Author: Vikash
*  Don't delete these properties if you are creating a component for Form Container
*  however you can add extra properties as and when you want
*/

define([],
    function() {
        var Comp_props = [
            {//for component height
                id:'img_width',
                propertyName:'Width',
                propertyValue: '100%',
                visibility:true
                
            }, 
            {//for component width
                id:'img_height',
                propertyName:'Height',
                propertyValue: '100%',
                visibility:true
                
            }, 
            {//for component width
                id:'img_path',
                propertyName:'File Path',
                propertyValue: './img/vcl/usercomponents/logo.png',
                visibility:true  
            },
            {//for component width
                type:'color',
                id:'p_bg',
                propertyName:'Parent Background',
                propertyValue: '#ebebeb',
                visibility:true  
            }
            ];
        return Comp_props;
    });