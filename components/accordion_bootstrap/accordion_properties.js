/* 
 Add your properties here
 */

define([],
    function() {
        var Comp_props = [
        	{
            type:'color',
            id: 'l_bg', 
            propertyName: 'Background',
            propertyValue: 'white',
            visibility: true,
            category:"list"
            }, 
            {
            id: 'l_font', 
            propertyName: 'Font Size',
            propertyValue: '16px' ,
            visibility: true,
            category:"list"
                
            },
            {
            type:'color',
            id: 'l_color', 
            propertyName: 'Color',
            propertyValue: '#666666',
            visibility: true,
            category:"list"
            },
            {
                type:'color',
                id:'l_select',
                propertyName:'Active background',
                propertyValue: '#E4E4E4',
                visibility:true,
                category:"list"
            }, 
        	{
            type:'color',
            id: 'h_bg', 
            propertyName: 'Background',
            propertyValue: '#343434',
            visibility: true,
            category:"heading"
            }, 
            {
            id: 'h_font', 
            propertyName: 'Font Size',
            propertyValue: '18px' ,
            visibility: true,
            category:"heading"
                
            },
            {
            type:'color',
            id: 'h_color', 
            propertyName: 'Color',
            propertyValue: 'white',
            visibility: true,
            category:"heading"
            },
            {//for component height
                 type:'color',
                id:'h_select',
                propertyName:'Active heading',
                propertyValue: '#FF9900',
                visibility:true,
                category:"heading"
            }
			];
        return Comp_props;
    });
