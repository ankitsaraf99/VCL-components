/* 
 Add your properties here
 */

define([],
    function() {
        var Comp_props = [
        {   type:'color',
            id: 'H_bg', 
            propertyName: 'Background',
            propertyValue: '#EEEEEE',
            visibility: true,
            category:"Headings"
        }, 
        {
            id: 'H_font', 
            propertyName: 'Font Size',
            propertyValue: '16px' ,
            visibility: true,
            category:"Headings"
                
        },
        {
            id: 'H_align', 
            propertyName: 'Align',
            propertyValue: 'center',
            visibility: true,
            category:"Headings"
        }, 
        {   type:'color',
            id: 'H_color', 
            propertyName: 'Color',
            propertyValue: '#FFFFFF',
            visibility: true,
            category:"Headings"
        },
         {  type:'color',
            id: 'tbl_bg', 
            propertyName: 'Background',
            propertyValue: 'white',
            visibility: true,
            category:"Table"
        }, 
        {
            id: 'tbl_font', 
            propertyName: 'Font Size',
            propertyValue: 14,
            visibility: true,
            category:"Table"
                
        },
        {
            id: 'tbl_align', 
            propertyName: 'Align',
            propertyValue: 'left',
            visibility: true,
            category:"Table"
        }, 
        {   type:'color',
            id: 'tbl_color', 
            propertyName: 'Color',
            propertyValue: 'black',
            visibility: true,
            category:"Table"
        },
        {
            id: 'btn_font', 
            propertyName: 'Font Size',
            propertyValue: 14 ,
            visibility: true,
            category:"Button"
                
        },
        {   type:'color',
            id: 'btn_color', 
            propertyName: 'Color',
            propertyValue: 'black',
            visibility: true,
            category:"Button"
        },
        {   type:'color',
            id: 'btn_bg', 
            propertyName: 'Background',
            propertyValue: 'grey',
            visibility: true,
            category:"Button"
        },
        {
            id: 'btn_height', 
            propertyName: 'Height',
            propertyValue: 19,
            visibility: true,
            category:"Button"
        },
        {
            id: 'btn_width', 
            propertyName: 'Width',
            propertyValue: 50,
            visibility: true,
            category:"Button"
        }
        
        ];
        return Comp_props;
    });

