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
            id: 'H_bg', 
            propertyName: 'Background',
            propertyValue: '#ffffff',
            visibility: true,
            category:"Heading"
            }, 
            {
            id: 'H_font', 
            propertyName: 'Font Size',
            propertyValue: '14px' ,
            visibility: true,
            category:"Heading"
                
            },
            {
            id: 'H_align', 
            propertyName: 'Align',
            propertyValue: 'center',
            visibility: true,
            category:"Heading"
            }, 
            {
            type:'color',
            id: 'H_color', 
            propertyName: 'Color',
            propertyValue: '#000000',
            visibility: true,
            category:"Heading"
            },
            {//for component height
                id:'H_width',
                propertyName:'Width',
                propertyValue: '100%',
                visibility:true,
                category:"Heading"
            }, 
            {//for component width
                id:'H_height',
                propertyName:'Height',
                propertyValue: '30px',
                visibility:true,
                category:"Heading"
            }, 
            {//for component width
                id:'H_data',
                propertyName:'data',
                propertyValue: 'Some Heading for Paragraph',
                visibility:true,
                category:"Heading"
            },
             {
            type:'color',
            id: 'H_border', 
            propertyName: 'Border bottom Color',
            propertyValue: '#DD4814',
            visibility: true,
            category:"Heading"
            },
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
            }
            ];
        return Comp_props;
    });