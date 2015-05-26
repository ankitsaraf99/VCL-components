/* 
 
 */
define([
    'underscore', 
    'jquery', 
    'vcl/views/componentView', 
    'events',
    'd3', 
    'text!templates/vcl/accordion_boot1.html' 
], function(_, $, ComponentView,Events, d3, movG) {
    var chartName = ComponentView.extend({
        template: _.template(movG),     

        render: function() {
            $(this.parentId).html("");
            $(this.parentId).append(this.template);
            var width = this.width; 
            var height = this.height;
            //Function to add classes dynamically to newly appended list items for the active tabs 
            ( function( $ ) {
              $( document ).ready(function() {
              $('#panel li.has-sub>a').on('click', function(){
                  $(this).removeAttr('href');
                  var element = $(this).parent('li');
                  if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp();
                  }
                  else {
                    element.addClass('open');
                    element.children('ul').slideDown();
                    element.siblings('li').children('ul').slideUp();
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp();
                  }
                });

                $('#panel>ul>li.has-sub>a').append('<span class="holder"></span>');

              });
              } )( jQuery );
            var HEADING={
              background: this.model.attributes.properties.get('h_bg').attributes.propertyValue,
              font_size: this.model.attributes.properties.get('h_font').attributes.propertyValue,
              font_color: this.model.attributes.properties.get('h_color').attributes.propertyValue,
              active_text:this.model.attributes.properties.get('h_select').attributes.propertyValue
            };
            var LIST={
              background: this.model.attributes.properties.get('l_bg').attributes.propertyValue,
              font_size: this.model.attributes.properties.get('l_font').attributes.propertyValue,
              font_color: this.model.attributes.properties.get('l_color').attributes.propertyValue,
              active_background: this.model.attributes.properties.get('l_select').attributes.propertyValue
            };
            $("#panel > ul > li > a").css({
                'background':HEADING.background,
                'color':HEADING.font_color,
                'font-size':HEADING.font_size
                
            });
            $("#panel > ul > li.open > a > span").css({
                'color':HEADING.active_text   
            });

            $("#panel > ul > ul > li > a").css({
                'background':LIST.background,
                'color':LIST.font_color,
                'font-size':LIST.font_size
            });
            $("#panel > ul > ul > li > a.active_link").css({
                'color':LIST.l_select
            });
            
            //Append class to change css for highlighting selection
            $('ul > li > ul > li > a ').click(function() { 
              $('ul > li > ul > li > a').removeClass('active_link'); 
              $(this).addClass('active_link'); 
            });
            //On click OF muESP, add components to tabs and pass information via JSON
            $("#esp").click(function(){
              console.log('hi');
              var esp={};
              esp.intro='<h3 style="margin:0px;display:inline;"><b>muESP</b></h3> (Mu Sigma Enterprise Signal Platform) is a <b>real time intelligent platform</b> to deploy Intelligent Systems & generate actionable insights in real time based on the design of an integrated workbench.The vision behind muESP stems from the concept of <b>loosely coupled components interacting with each other</b> in order to facilitate business applications towards decision making capability. In saying "loosely coupled", the idea is that components are like <b>plug and play devices</b> that are changeable and customizable. This bundle contains following services:<br><br><ul><li>&nbsp;muSTREAM</li><li>&nbsp;muFLOW</li><li>&nbsp;muVCL</li>';
              esp.img='./img/vcl/usercomponents/muesp1.png';
              esp.faq='<b><font style="size:18px">What is multi-agent system ?</font></b><br><br>A multi-agent system (MAS) is a system composed of multiple interacting intelligent agents within an environment. Multi-agent systems can be used to solve problems that are difficult or impossible for an individual agent or a monolithic system to solve. Intelligence may include some functional, procedural or algorithmic search, find and processing approach.<br><br><b><font style="size:18px">What is agent-based model ?</font></b><br><br>An agent-based model (ABM) (also sometimes related to the term multi-agent system or multi-agent simulation) is a class of computational models for simulating the actions and interactions of autonomous agents (both individual or collective entities such as organizations or groups) with a view to assessing their effects on the system as a whole.<br><br><b><font style="size:18px">What is JADE ?</font></b><br><br>Java Agent Development Framework, or JADE, is a software framework for multi-agent systems, in Java that has been in development since at least 2001.The JADE platform allows the coordination of multiple FIPA-compliant agents and the use of the standard FIPA-ACL communication language in both SL and XML.'
              esp.ins='';
              esp.f1='./muStreamDeployment/deploy.sh';
              esp.f2='./muStreamDeployment/muStream_Deployment_Guide_v1.1.pdf';
              esp.f3='./muStreamDeployment/setupaa';
              esp.f4='./muStreamDeployment/setupab';
              esp.f5='./muStreamDeployment/setupac';
              esp.f6='./muStreamDeployment/setupad';
              esp.f7='./muStreamDeployment/setupae';
              esp.f8='./muStreamDeployment/setupaf';
              esp.f9='./muStreamDeployment/setupag';
              esp.f10='./muStreamDeployment/setupah';
              esp.f11='./muStreamDeployment/setupai';
              esp.f12='./muStreamDeployment/setupaj';
              esp.f13='./muStreamDeployment/setupak';
              esp.f14='./muStreamDeployment/setupal';
              esp.f15='./muStreamDeployment/setupam';
              esp.f16='./muStreamDeployment/setupan';
              Events.trigger('PaneDisplay',esp);
            });
            //On click ov=f vcl clear the window
            $("#vcl").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            $("#stream").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            //On click OF muESP, add components to tabs and pass information via JSON
            $("#flow").click(function(){
              console.log('hi');
              var flow={};
              flow.intro='<h3 style="margin:0px;display:inline;"><b>muFLOW</b></h3> is a <b>workbench to create, deploy and execute analytical workflows</b> for data in a batch paradigm. Powered by a <b>simple drag-and-drop GUI</b>, muFLOW leverages the industry standard BPMN framework to provide a great platform for man-machine interaction. The tool allows for <b>operationalization and automation of analytical processes</b> within an enterprise and hence boosts the productivity of analytical workgroups. Deploying muFLOW enables analysts to spend more time on tactical and strategic analytics, thereby improving ROI.';
              flow.img='./img/vcl/usercomponents/muflow.png';
              flow.faq='<b><font style="size:18px">What is BPM?</font></b><br><br>BPM stands for Business Process Management.<ul><li>BPM is defined as “a generic software system that is driven by explicit process designs to enact and manage operational business processes”.</li><li>The system should be process-aware and generic as that it is possible to modify the process it supports. The process designs are often graphical and the focus is on structured processes that need to handle many cases.</li></ul><br>The world of business processes has changed dramatically over the past few years. Processes can be coordinated from behind, within and over organizations’ natural boundaries. A business process now spans multiple participants and coordination can be complex. BPM uses a systematic approach to continuously improve business efficiency while striving for innovation, flexibility, and integration with technology. Hence BPM can be looked upon as "business process optimization".<br><br><b><font style="size:18px">What is BPMN?</font></b><br><br>Business Process Modeling Notation (BPMN) has been designed to coordinate the sequence of processes and the messages that flow between different process participants in a related set of activities in a business process. BPMN is targeted at a high level for business users needing to communicate business processes in a standard manner and at a lower level for process implementers. The business users should be able to easily read and understand a BPMN business process diagram.<br><br><b><font style="size:18px">Why muFLOW?</font></b><br><br><ul><li>Lesser reliance on IT</li>With the ease of creating and deploying new workflows by end users, the dependency on IT for configuration and deployment is drastically reduced<br><br><li>Reuse design features</li>Workflows and sub-modules can be shared and re-used amongst team members for rapid development of business processes<br><br><li>Task delegation and workload balancing</li><br>Assign tasks at a managerial level to different members of an organization and enable even distribution of work<br><br><li>Technology agnostic</li><br>The whole ecosystem can leverage the power of existing compute and analytics infrastructure;thereby avoiding any major investments in new tools<br><br><li>Collaborative application building</li><br>Design and build solutions in a synergic fashion by having multiple users collaborate in a controlled and authorized environment<br><br><li>Scalable platform</li><br>Create multiple workflows and address diverse analytical problems with inherent design for vertical scaling<br><br><li>Process tracking and reporting</li><br>Monitor individual tasks of a workflow by using the performance and status report, to keep track of the execution progress and identify any issues ';
              flow.ins='';
              flow.f1='./muStreamDeployment/deploy.sh';
              flow.f2='./muStreamDeployment/muStream_Deployment_Guide_v1.1.pdf';
              flow.f3='./muStreamDeployment/setupaa';
              flow.f4='./muStreamDeployment/setupab';
              flow.f5='./muStreamDeployment/setupac';
              flow.f6='./muStreamDeployment/setupad';
              flow.f7='./muStreamDeployment/setupae';
              flow.f8='./muStreamDeployment/setupaf';
              flow.f9='./muStreamDeployment/setupag';
              flow.f10='./muStreamDeployment/setupah';
              flow.f11='./muStreamDeployment/setupai';
              flow.f12='./muStreamDeployment/setupaj';
              flow.f13='./muStreamDeployment/setupak';
              flow.f14='./muStreamDeployment/setupal';
              flow.f15='./muStreamDeployment/setupam';
              flow.f16='./muStreamDeployment/setupan';
              Events.trigger('PaneDisplay',flow);
            });
            $("#blood").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            $("#human").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            $("#osa").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            $("#m1").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            $("#m2").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            $("#m3").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            $("#p1").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            $("#p2").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            $("#p3").click(function(){
              console.log('hi');
              Events.trigger('PaneDisplay',false);
            });
            //On click of heading, change color
            $(".tag_heading").click(function(){
              $(this).css("color","orange");
            });
            


        },

        setSampleData: function() {
            
        },

        setStaticData: function(socketdata) {

        },
      getExposedFunctions:function(){
        return [

  ];
      },
      getEventList: function() {
      
  return [
    
  {
          eventName: 'PaneDisplay',
          displayName: 'PaneDisplay'
        }
  ];
      }

    });

    return chartName;
});
