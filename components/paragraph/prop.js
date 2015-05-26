/*
* @Author: Vikash
*  Don't delete these properties if you are creating a component for Form Container
*  however you can add extra properties as and when you want
*/

define([],
    function() {
        var Comp_props = [
            {
            type:'color',
            id: 'C_bg', 
            propertyName: 'Background',
            propertyValue: 'white',
            visibility: true,
            category:"Content"
            }, 
            {
            id: 'C_font', 
            propertyName: 'Font Size',
            propertyValue: '12px' ,
            visibility: true,
            category:"Content"
                
            },
            {
            type:'color',
            id: 'C_color', 
            propertyName: 'Color',
            propertyValue: 'black',
            visibility: true,
            category:"Content"
            },
                        {//for component height
                id:'C_width',
                propertyName:'Width',
                propertyValue: '100%',
                visibility:true,
                category:"Content"
            }, 
            {//for component width
                id:'C_height',
                propertyName:'Height',
                propertyValue: '70%',
                visibility:true,
                category:"Content"
            },
            {//for component width
                id:'C_data',
                propertyName:'data',
                propertyValue: 'Some dummy data to be shown in paragraph',
                visibility:true,
                category:"Content"
            },
            {
            type:'color',
            id: 'p_bg', 
            propertyName: 'Container Background',
            propertyValue: 'white',
            visibility: true
            },
            {//for component width
                id:'key',
                propertyName:'key',
                propertyValue: 'intro',
                visibility:true,
                category:"Content"
            }
            ];
        return Comp_props;
    });