//	HYPE.documents["position"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="position.hyperesources",c="position",e="position_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("position_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d-1);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_578","HYPE_dtl_578",!0==(null!=a&&10>a||false==!0)?"HYPE-578.full.min.js":"HYPE-578.thin.min.js"),false==!0&&(a=a||l("HYPE_w_578","HYPE_wdtl_578","HYPE-578.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_578(c,e,{"3":{p:1,n:"right_arrow-1.svg",g:"310",t:"image/svg+xml"},"-2":{n:"blank.gif"},"4":{p:1,n:"left_arrow.svg",g:"312",t:"image/svg+xml"},"0":{p:1,n:"right_arrow.svg",g:"18",t:"image/svg+xml"},"1":{p:1,n:"IMG_FBD0147C42CC-1.jpg",g:"299",o:true,t:"@1x"},"2":{p:1,n:"IMG_FBD0147C42CC-1_2x.jpg",g:"299",o:true,t:"@2x"},"-1":{n:"PIE.htc"}},h,[],d,[{n:"Creating Functions Copy Copy Copy",o:"273",X:[0]},{n:"Untitled Scene",o:"295",X:[1]}],[{o:"293",p:"600px",a:100,Y:1366,Z:1024,b:100,cA:false,c:"#FFFFFF",L:[],bY:1,d:1366,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["329","330","331","333","332","328"],n:"Untitled Layout","_":0,v:{"330":{G:"#000000",aU:8,c:769,bS:37,d:112,aV:8,r:"inline",e:1,s:"Helvetica-Light,'Helvetica Light',Helvetica,Arial,Sans-Serif",t:36,Z:"break-word",w:"<font color=\"#292f33\">to make our block of code truly reuseable we can add parameters for x, y coordinates</font><br>",A:"#292F33",x:"visible",j:"absolute",B:"#292F33",y:"preserve",k:"div",C:"#292F33",z:7,aS:8,D:"#292F33",aT:8,a:297,F:"center",b:46},"329":{c:2070,bS:61,d:1022,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,N:1,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:1,C:"#D8DDE4",z:1,l:0,D:"#D8DDE4",m:"#E5CBAD",P:1,n:"#E8EBED",a:-361,b:0},"331":{c:903,d:367,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",x:"visible",j:"absolute",O:1,aJ:10,k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:10,bF:"333",P:1,a:0,aL:10,b:0},"333":{k:"div",x:"visible",c:905,d:369,z:10,a:237,j:"absolute",bS:45,b:327},"332":{aU:8,G:"#FF0019",T:0,c:873,bS:45,d:332,aV:8,r:"inline",e:1,s:"'Courier New',Courier,Monospace",t:36,Z:"break-word",v:"normal",w:"<b><font color=\"#0433ff\">func square(</font><font color=\"#ff2600\">xPos: Double, yPos: Double</font><font color=\"#0433ff\">){</font></b><br><font color=\"#000000\">&nbsp; &nbsp;var sqPen: Pen = Pen()</font><br><font color=\"#000000\">&nbsp; &nbsp;sqPen.goto(dx: </font><b><font color=\"#ff2600\">xPos</font></b><font color=\"#000000\">, dy: </font><b><font color=\"#ff2600\">yPos</font></b><font color=\"#000000\">)</font><br><font color=\"#000000\">&nbsp; &nbsp;for i in 0 ... 4 {</font><br><font color=\"#000000\">&nbsp; &nbsp; &nbsp; sqPen.drawLine(distance: </font><font color=\"#000000\">100</font><font color=\"#000000\">)</font><br><font color=\"#000000\">&nbsp; &nbsp; &nbsp; sqPen.turn(degrees: 90)</font><br><font color=\"#000000\">&nbsp; &nbsp;}</font><br><font color=\"#0433ff\"><b>}<br></b></font><br>",bF:"333",A:"#000000",x:"visible",j:"absolute",k:"div",y:"preserve",B:"#000000",C:"#000000",Q:0,z:2,D:"#000000",R:"#FF2600",aS:8,S:0,a:16,aT:8,F:"left",b:15},"328":{b:487,z:3,K:"None",c:22,L:"None",d:38,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:45,aU:6,P:0,h:"18",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",aB:{a:[{d:1.1000000000000001,p:1,g:5,f:1}]},x:"visible",I:"None",a:1316,y:"preserve",J:"None"}}},{o:"297",p:"600px",a:100,Y:1366,Z:1024,b:100,cA:false,c:"#FFFFFF",L:[],bY:1,d:1366,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["339","345","334","344","340","342","341","336","335","343","337","346","338"],n:"Untitled Layout","_":1,v:{"335":{b:487,z:22,K:"None",c:22,L:"None",d:38,aS:6,M:0,bD:"none",N:0,aT:6,bS:45,O:0,dB:"button",aU:6,P:0,h:"310",aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:1316,y:"preserve",J:"None"},"341":{c:59,d:59,I:"None",J:"None",K:"None",g:"#FF2600",L:"None",M:0,N:0,bF:"344",A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",k:"div",O:0,C:"#FF2600",z:2,P:0,D:"#FF2600",a:684,b:452},"338":{G:"#FF0019",aU:8,c:660,bS:45,d:124,aV:8,r:"inline",e:1,s:"'Courier New',Courier,Monospace",t:36,Z:"break-word",v:"normal",w:"<font color=\"#000000\">square(xPos: </font><b style=\"color: rgb(0, 0, 0);\">100</b><font color=\"#000000\">, yPos: </font><b style=\"color: rgb(0, 0, 0);\">100</b><font color=\"#000000\">)</font><br><font color=\"#000000\">square(xPos: </font><b><font color=\"#ff2600\">0</font></b><font color=\"#000000\">, yPos: </font><b><font color=\"#ff2600\">0</font></b><font color=\"#000000\">)</font><br><font color=\"#000000\">square(xPox: </font><b><font color=\"#0433ff\">-100</font></b><font color=\"#000000\">, yPos: </font><b><font color=\"#0433ff\">-100</font></b><font color=\"#000000\">)</font><br>",bF:"346",A:"#FF2600",x:"visible",j:"absolute",k:"div",y:"preserve",B:"#FF2600",C:"#FF2600",z:2,aS:8,D:"#FF2600",aT:8,a:1069,F:"left",b:24},"344":{k:"div",x:"visible",c:1365.3299999999999,d:1024,z:1,a:0,j:"absolute",bS:45,b:0},"336":{b:487,z:23,K:"None",c:22,L:"None",d:38,aS:6,M:0,bD:"none",N:0,aT:6,bS:45,O:0,dB:"button",aU:6,P:0,h:"312",aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",p:"no-repeat",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:16,y:"preserve",J:"None"},"342":{c:59,d:59,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,bF:"344",A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",k:"div",O:0,C:"#FF2600",z:3,P:0,D:"#FF2600",a:790,b:346},"339":{c:2810,bS:61,d:250,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,N:1,bF:"345",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:1,C:"#D8DDE4",z:1,l:0,D:"#D8DDE4",m:"#E5CBAD",P:1,n:"#E8EBED",a:0,b:0},"345":{k:"div",x:"visible",c:2812,d:252,z:28,a:-722,j:"absolute",bS:37,b:-60},"334":{h:"299",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bS:45,z:1,k:"div",dB:"img",d:1024,bF:"344",c:1365.3299999999999,r:"inline"},"340":{G:"#000000",aU:8,c:769,bS:45,d:88,aV:8,r:"inline",e:1,s:"Helvetica-Light,'Helvetica Light',Helvetica,Arial,Sans-Serif",t:36,Z:"break-word",w:"each time we call the function we can dictate where it is drawn on the grid<br>",bF:"345",A:"#292F33",x:"visible",j:"absolute",B:"#292F33",y:"preserve",k:"div",C:"#292F33",z:2,aS:8,D:"#292F33",aT:8,a:1012,F:"center",b:100},"343":{c:59,d:59,I:"None",J:"None",K:"None",g:"#0433FF",L:"None",M:0,N:0,bF:"344",A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",k:"div",O:0,C:"#FF2600",z:4,P:0,D:"#FF2600",a:520,b:616},"337":{c:2810,d:234,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:10,A:"#D8DDE4",x:"visible",j:"absolute",O:1,aJ:10,k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:10,bF:"346",P:1,a:0,aL:10,b:0},"346":{k:"div",x:"visible",c:2812,d:236,z:24,a:-723,j:"absolute",bS:13,b:832}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
