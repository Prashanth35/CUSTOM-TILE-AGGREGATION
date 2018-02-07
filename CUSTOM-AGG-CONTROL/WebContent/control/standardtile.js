sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Image",
	"sap/m/Link"
	
	
	
], function (Control,Image,Link) {
	"use strict";
	return Control .extend("control.standardtile", {
		 metadata: {
			 
		 
		  properties : { 
			 
			 	 "size" : {type: "sap.ui.core.CSSSize"}                 
          },
          aggregations : {
			    
	    	  _img   : {type : "sap.m.Image", multiple: false, visibility : "hidden"},
        	  _lnc : {type :"sap.m.Link", multiple : false, visibility: "hidden"}
        	
        	
        	 
        	 
			},
			
			events : {
				change : {
					parameters : {
						value : {type : "int"}
					}
				}
			}
		 
      },
    //////////////////////////////////////////////////////////
    init : function() {
    	
this.setAggregation("_img", new Image({
    		
    		src : "image/vicky.jpg"
    		
    	}).addStyleClass("img"))
   
    	
    
this.setAggregation("_lnc", new Link({
    		
    		text : "Vicky"
    		
    	}).addStyleClass("btn"))
   
    	
    
      },

      renderer:function(oRm, oControl) {
      oRm.write("<div");
      oRm.writeControlData(oControl); 
    
    oRm.writeStyles();
    oRm.addClass("myCustTile");
	oRm.writeClasses(); 
    oRm.write(">");
   
      
   
    oRm.renderControl(oControl.getAggregation("_img"))
   
  
    oRm.renderControl(oControl.getAggregation("_lnc"))
  

    oRm.write("</div>");      
   
    
    
    
    
    
   
      
      
      } 
                 
	});
});