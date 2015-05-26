/*
* @Author: Vikash
*  Don't delete these properties if you are creating a component for Form Container
*  however you can add extra properties as and when you want
*/

define([],
    function() {
        var Comp_props = [
            {
            id: 'lbl_font', 
            propertyName: 'Font Size',
            propertyValue: '18px' ,
            visibility: true
            },
            {
            type:'color',
            id: 'lbl_color', 
            propertyName: 'Color',
            propertyValue: 'black',
            visibility: true
            
            },
            {//for component height
                id:'btn_width',
                propertyName:'Width',
                propertyValue: '116px',
                visibility:true
                
            }, 
            {//for component height
                type:'color',
                id:'btn_bg',
                propertyName:'Background',
                propertyValue: '#428BCA',
                visibility:true
                
            }, 
            {//for component width
                id:'btn_height',
                propertyName:'Height',
                propertyValue: '45px',
                visibility:true
                
            }, 
            {//for component width
                id:'lbl_data',
                propertyName:'Data',
                propertyValue: 'Download',
                visibility:true  
            },
            {//for component width
                id:'a_path',
                propertyName:'File Path',
                propertyValue: './img/vcl/usercomponents/download.png',
                visibility:true  
            },
            {//for component width
                type:'color',
                id:'p_bg',
                propertyName:'Parent Background',
                propertyValue: '#E6E6E6',
                visibility:true  
            }
            ];
        return Comp_props;
    });