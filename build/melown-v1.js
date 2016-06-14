!function(a){if("object"==typeof exports)module.exports=a();else if("function"==typeof define&&define.amd)define(a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b._mproj4_=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function Point(a,b,c){if(!(this instanceof Point))return new Point(a,b,c);if(Array.isArray(a))this.x=a[0],this.y=a[1],this.z=a[2]||0;else if("object"==typeof a)this.x=a.x,this.y=a.y,this.z=a.z||0;else if("string"==typeof a&&"undefined"==typeof b){var d=a.split(",");this.x=parseFloat(d[0],10),this.y=parseFloat(d[1],10),this.z=parseFloat(d[2],10)||0}else this.x=a,this.y=b,this.z=c||0;console.warn("_mproj4_.Point will be removed in version 3, use _mproj4_.toPoint")}var d=a("mgrs");Point.fromMGRS=function(a){return new Point(d.toPoint(a))},Point.prototype.toMGRS=function(a){return d.forward([this.x,this.y],a)},b.exports=Point},{mgrs:68}],2:[function(a,b,c){function Projection(a,b){if(!(this instanceof Projection))return new Projection(a);b=b||function(a){if(a)throw a};var c=d(a);if("object"!=typeof c)return void b(a);var f=g(c),h=Projection.projections.get(f.projName);h?(e(this,f),e(this,h),this.init(),b(null,this)):b(a)}var d=a("./parseCode"),e=a("./extend"),f=a("./projections"),g=a("./deriveConstants");Projection.projections=f,Projection.projections.start(),b.exports=Projection},{"./deriveConstants":33,"./extend":34,"./parseCode":37,"./projections":39}],3:[function(a,b,c){b.exports=function(a,b,c){var d,e,f,g=c.x,h=c.y,i=c.z||0;for(f=0;3>f;f++)if(!b||2!==f||void 0!==c.z)switch(0===f?(d=g,e="x"):1===f?(d=h,e="y"):(d=i,e="z"),a.axis[f]){case"e":c[e]=d;break;case"w":c[e]=-d;break;case"n":c[e]=d;break;case"s":c[e]=-d;break;case"u":void 0!==c[e]&&(c.z=d);break;case"d":void 0!==c[e]&&(c.z=-d);break;default:return null}return c}},{}],4:[function(a,b,c){var d=Math.PI/2,e=a("./sign");b.exports=function(a){return Math.abs(a)<d?a:a-e(a)*Math.PI}},{"./sign":21}],5:[function(a,b,c){var d=2*Math.PI,e=3.14159265359,f=a("./sign");b.exports=function(a){return Math.abs(a)<=e?a:a-f(a)*d}},{"./sign":21}],6:[function(a,b,c){b.exports=function(a){return Math.abs(a)>1&&(a=a>1?1:-1),Math.asin(a)}},{}],7:[function(a,b,c){b.exports=function(a){return 1-.25*a*(1+a/16*(3+1.25*a))}},{}],8:[function(a,b,c){b.exports=function(a){return.375*a*(1+.25*a*(1+.46875*a))}},{}],9:[function(a,b,c){b.exports=function(a){return.05859375*a*a*(1+.75*a)}},{}],10:[function(a,b,c){b.exports=function(a){return a*a*a*(35/3072)}},{}],11:[function(a,b,c){b.exports=function(a,b,c){var d=b*c;return a/Math.sqrt(1-d*d)}},{}],12:[function(a,b,c){b.exports=function(a,b,c,d,e){var f,g;f=a/b;for(var h=0;15>h;h++)if(g=(a-(b*f-c*Math.sin(2*f)+d*Math.sin(4*f)-e*Math.sin(6*f)))/(b-2*c*Math.cos(2*f)+4*d*Math.cos(4*f)-6*e*Math.cos(6*f)),f+=g,Math.abs(g)<=1e-10)return f;return NaN}},{}],13:[function(a,b,c){var d=Math.PI/2;b.exports=function(a,b){var c=1-(1-a*a)/(2*a)*Math.log((1-a)/(1+a));if(Math.abs(Math.abs(b)-c)<1e-6)return 0>b?-1*d:d;for(var e,f,g,h,i=Math.asin(.5*b),j=0;30>j;j++)if(f=Math.sin(i),g=Math.cos(i),h=a*f,e=Math.pow(1-h*h,2)/(2*g)*(b/(1-a*a)-f/(1-h*h)+.5/a*Math.log((1-h)/(1+h))),i+=e,Math.abs(e)<=1e-10)return i;return NaN}},{}],14:[function(a,b,c){b.exports=function(a,b,c,d,e){return a*e-b*Math.sin(2*e)+c*Math.sin(4*e)-d*Math.sin(6*e)}},{}],15:[function(a,b,c){b.exports=function(a,b,c){var d=a*b;return c/Math.sqrt(1-d*d)}},{}],16:[function(a,b,c){var d=Math.PI/2;b.exports=function(a,b){for(var c,e,f=.5*a,g=d-2*Math.atan(b),h=0;15>=h;h++)if(c=a*Math.sin(g),e=d-2*Math.atan(b*Math.pow((1-c)/(1+c),f))-g,g+=e,Math.abs(e)<=1e-10)return g;return-9999}},{}],17:[function(a,b,c){var d=1,e=.25,f=.046875,g=.01953125,h=.01068115234375,i=.75,j=.46875,k=.013020833333333334,l=.007120768229166667,m=.3645833333333333,n=.005696614583333333,o=.3076171875;b.exports=function(a){var b=[];b[0]=d-a*(e+a*(f+a*(g+a*h))),b[1]=a*(i-a*(f+a*(g+a*h)));var c=a*a;return b[2]=c*(j-a*(k+a*l)),c*=a,b[3]=c*(m-a*n),b[4]=c*a*o,b}},{}],18:[function(a,b,c){var d=a("./pj_mlfn"),e=1e-10,f=20;b.exports=function(a,b,c){for(var g=1/(1-b),h=a,i=f;i;--i){var j=Math.sin(h),k=1-b*j*j;if(k=(d(h,j,Math.cos(h),c)-a)*(k*Math.sqrt(k))*g,h-=k,Math.abs(k)<e)return h}return h}},{"./pj_mlfn":19}],19:[function(a,b,c){b.exports=function(a,b,c,d){return c*=b,b*=b,d[0]*a-c*(d[1]+b*(d[2]+b*(d[3]+b*d[4])))}},{}],20:[function(a,b,c){b.exports=function(a,b){var c;return a>1e-7?(c=a*b,(1-a*a)*(b/(1-c*c)-.5/a*Math.log((1-c)/(1+c)))):2*b}},{}],21:[function(a,b,c){b.exports=function(a){return 0>a?-1:1}},{}],22:[function(a,b,c){b.exports=function(a,b){return Math.pow((1-a)/(1+a),b)}},{}],23:[function(a,b,c){b.exports=function(a){var b={x:a[0],y:a[1]};return a.length>2&&(b.z=a[2]),a.length>3&&(b.m=a[3]),b}},{}],24:[function(a,b,c){var d=Math.PI/2;b.exports=function(a,b,c){var e=a*c,f=.5*a;return e=Math.pow((1-e)/(1+e),f),Math.tan(.5*(d-b))/e}},{}],25:[function(a,b,c){c.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},c.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},c.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},c.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},c.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},c.potsdam={towgs84:"606.0,23.0,413.0",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},c.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},c.hermannskogel={towgs84:"653.0,-212.0,449.0",ellipse:"bessel",datumName:"Hermannskogel"},c.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},c.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},c.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},c.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"},c.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},c.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},c.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},c.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"}},{}],26:[function(a,b,c){c.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"},c.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},c.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},c.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"},c.airy={a:6377563.396,b:6356256.91,ellipseName:"Airy 1830"},c.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},c.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},c.mod_airy={a:6377340.189,b:6356034.446,ellipseName:"Modified Airy"},c.andrae={a:6377104.43,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},c.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},c.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},c.bessel={a:6377397.155,rf:299.1528128,ellipseName:"Bessel 1841"},c.bess_nam={a:6377483.865,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},c.clrk66={a:6378206.4,b:6356583.8,ellipseName:"Clarke 1866"},c.clrk80={a:6378249.145,rf:293.4663,ellipseName:"Clarke 1880 mod."},c.clrk58={a:6378293.645208759,rf:294.2606763692654,ellipseName:"Clarke 1858"},c.CPM={a:6375738.7,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},c.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},c.engelis={a:6378136.05,rf:298.2566,ellipseName:"Engelis 1985"},c.evrst30={a:6377276.345,rf:300.8017,ellipseName:"Everest 1830"},c.evrst48={a:6377304.063,rf:300.8017,ellipseName:"Everest 1948"},c.evrst56={a:6377301.243,rf:300.8017,ellipseName:"Everest 1956"},c.evrst69={a:6377295.664,rf:300.8017,ellipseName:"Everest 1969"},c.evrstSS={a:6377298.556,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},c.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},c.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"},c.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"},c.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"},c.hough={a:6378270,rf:297,ellipseName:"Hough"},c.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},c.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"},c.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"},c.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"},c.new_intl={a:6378157.5,b:6356772.2,ellipseName:"New International 1967"},c.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},c.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},c.SEasia={a:6378155,b:6356773.3205,ellipseName:"Southeast Asia"},c.walbeck={a:6376896,b:6355834.8467,ellipseName:"Walbeck"},c.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"},c.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"},c.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"},c.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"},c.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}},{}],27:[function(a,b,c){c.greenwich=0,c.lisbon=-9.131906111111,c.paris=2.337229166667,c.bogota=-74.080916666667,c.madrid=-3.687938888889,c.rome=12.452333333333,c.bern=7.439583333333,c.jakarta=106.807719444444,c.ferro=-17.666666666667,c.brussels=4.367975,c.stockholm=18.058277777778,c.athens=23.7163375,c.oslo=10.722916666667},{}],28:[function(a,b,c){c.ft={to_meter:.3048},c["us-ft"]={to_meter:1200/3937}},{}],29:[function(a,b,c){function d(a,b,c){var d;return Array.isArray(c)?(d=g(a,b,c),3===c.length?[d.x,d.y,d.z]:[d.x,d.y]):g(a,b,c)}function e(a){return a instanceof f?a:a.oProj?a.oProj:f(a)}function _mproj4_(a,b,c){a=e(a);var f,g=!1;return"undefined"==typeof b?(b=a,a=h,g=!0):("undefined"!=typeof b.x||Array.isArray(b))&&(c=b,b=a,a=h,g=!0),b=e(b),c?d(a,b,c):(f={forward:function(c){return d(a,b,c)},inverse:function(c){return d(b,a,c)},info:function(){return{a:b.a,b:b.b,ra:b.R_A,"proj-name":b.projName}}},g&&(f.oProj=b),f)}var f=a("./Proj"),g=a("./transform"),h=f("WGS84");b.exports=_mproj4_},{"./Proj":2,"./transform":66}],30:[function(a,b,c){var d=Math.PI/2,e=1,f=2,g=3,h=4,i=5,j=484813681109536e-20,k=1.0026,l=.3826834323650898,m=function(a){if(!(this instanceof m))return new m(a);if(this.datum_type=h,a){if(a.datumCode&&"none"===a.datumCode&&(this.datum_type=i),a.datum_params){for(var b=0;b<a.datum_params.length;b++)a.datum_params[b]=parseFloat(a.datum_params[b]);(0!==a.datum_params[0]||0!==a.datum_params[1]||0!==a.datum_params[2])&&(this.datum_type=e),a.datum_params.length>3&&(0!==a.datum_params[3]||0!==a.datum_params[4]||0!==a.datum_params[5]||0!==a.datum_params[6])&&(this.datum_type=f,a.datum_params[3]*=j,a.datum_params[4]*=j,a.datum_params[5]*=j,a.datum_params[6]=a.datum_params[6]/1e6+1)}this.datum_type=a.grids?g:this.datum_type,this.a=a.a,this.b=a.b,this.es=a.es,this.ep2=a.ep2,this.datum_params=a.datum_params,this.datum_type===g&&(this.grids=a.grids)}};m.prototype={compare_datums:function(a){return this.datum_type!==a.datum_type?!1:this.a!==a.a||Math.abs(this.es-a.es)>5e-11?!1:this.datum_type===e?this.datum_params[0]===a.datum_params[0]&&this.datum_params[1]===a.datum_params[1]&&this.datum_params[2]===a.datum_params[2]:this.datum_type===f?this.datum_params[0]===a.datum_params[0]&&this.datum_params[1]===a.datum_params[1]&&this.datum_params[2]===a.datum_params[2]&&this.datum_params[3]===a.datum_params[3]&&this.datum_params[4]===a.datum_params[4]&&this.datum_params[5]===a.datum_params[5]&&this.datum_params[6]===a.datum_params[6]:this.datum_type===g||a.datum_type===g?this.nadgrids===a.nadgrids:!0},geodetic_to_geocentric:function(a){var b,c,e,f,g,h,i,j=a.x,k=a.y,l=a.z?a.z:0,m=0;if(-d>k&&k>-1.001*d)k=-d;else if(k>d&&1.001*d>k)k=d;else if(-d>k||k>d)return null;return j>Math.PI&&(j-=2*Math.PI),g=Math.sin(k),i=Math.cos(k),h=g*g,f=this.a/Math.sqrt(1-this.es*h),b=(f+l)*i*Math.cos(j),c=(f+l)*i*Math.sin(j),e=(f*(1-this.es)+l)*g,a.x=b,a.y=c,a.z=e,m},geocentric_to_geodetic:function(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=1e-12,u=t*t,v=30,w=a.x,x=a.y,y=a.z?a.z:0;if(o=!1,b=Math.sqrt(w*w+x*x),c=Math.sqrt(w*w+x*x+y*y),b/this.a<t){if(o=!0,q=0,c/this.a<t)return r=d,void(s=-this.b)}else q=Math.atan2(x,w);e=y/c,f=b/c,g=1/Math.sqrt(1-this.es*(2-this.es)*f*f),j=f*(1-this.es)*g,k=e*g,p=0;do p++,i=this.a/Math.sqrt(1-this.es*k*k),s=b*j+y*k-i*(1-this.es*k*k),h=this.es*i/(i+s),g=1/Math.sqrt(1-h*(2-h)*f*f),l=f*(1-h)*g,m=e*g,n=m*j-l*k,j=l,k=m;while(n*n>u&&v>p);return r=Math.atan(m/Math.abs(l)),a.x=q,a.y=r,a.z=s,a},geocentric_to_geodetic_noniter:function(a){var b,c,e,f,g,h,i,j,m,n,o,p,q,r,s,t,u,v=a.x,w=a.y,x=a.z?a.z:0;if(v=parseFloat(v),w=parseFloat(w),x=parseFloat(x),u=!1,0!==v)b=Math.atan2(w,v);else if(w>0)b=d;else if(0>w)b=-d;else if(u=!0,b=0,x>0)c=d;else{if(!(0>x))return c=d,void(e=-this.b);c=-d}return g=v*v+w*w,f=Math.sqrt(g),h=x*k,j=Math.sqrt(h*h+g),n=h/j,p=f/j,o=n*n*n,i=x+this.b*this.ep2*o,t=f-this.a*this.es*p*p*p,m=Math.sqrt(i*i+t*t),q=i/m,r=t/m,s=this.a/Math.sqrt(1-this.es*q*q),e=r>=l?f/r-s:-l>=r?f/-r-s:x/q+s*(this.es-1),u===!1&&(c=Math.atan(q/r)),a.x=b,a.y=c,a.z=e,a},geocentric_to_wgs84:function(a){if(this.datum_type===e)a.x+=this.datum_params[0],a.y+=this.datum_params[1],a.z+=this.datum_params[2];else if(this.datum_type===f){var b=this.datum_params[0],c=this.datum_params[1],d=this.datum_params[2],g=this.datum_params[3],h=this.datum_params[4],i=this.datum_params[5],j=this.datum_params[6],k=j*(a.x-i*a.y+h*a.z)+b,l=j*(i*a.x+a.y-g*a.z)+c,m=j*(-h*a.x+g*a.y+a.z)+d;a.x=k,a.y=l,a.z=m}},geocentric_from_wgs84:function(a){if(this.datum_type===e)a.x-=this.datum_params[0],a.y-=this.datum_params[1],a.z-=this.datum_params[2];else if(this.datum_type===f){var b=this.datum_params[0],c=this.datum_params[1],d=this.datum_params[2],g=this.datum_params[3],h=this.datum_params[4],i=this.datum_params[5],j=this.datum_params[6],k=(a.x-b)/j,l=(a.y-c)/j,m=(a.z-d)/j;a.x=k+i*l-h*m,a.y=-i*k+l+g*m,a.z=h*k-g*l+m}}},b.exports=m},{}],31:[function(a,b,c){var d=1,e=2,f=3,g=5,h=6378137,i=.006694379990141316;b.exports=function(a,b,c){function j(a){return a===d||a===e}var k,l,m;if(a.compare_datums(b))return c;if(a.datum_type===g||b.datum_type===g)return c;var n=a.a,o=a.es,p=b.a,q=b.es,r=a.datum_type;if(r===f)if(0===this.apply_gridshift(a,0,c))a.a=h,a.es=i;else{if(!a.datum_params)return a.a=n,a.es=a.es,c;for(k=1,l=0,m=a.datum_params.length;m>l;l++)k*=a.datum_params[l];if(0===k)return a.a=n,a.es=a.es,c;r=a.datum_params.length>3?e:d}return b.datum_type===f&&(b.a=h,b.es=i),(a.es!==b.es||a.a!==b.a||j(r)||j(b.datum_type))&&(a.geodetic_to_geocentric(c),j(a.datum_type)&&a.geocentric_to_wgs84(c),j(b.datum_type)&&b.geocentric_from_wgs84(c),b.geocentric_to_geodetic(c)),b.datum_type===f&&this.apply_gridshift(b,1,c),a.a=n,a.es=o,b.a=p,b.es=q,c}},{}],32:[function(a,b,c){function d(a){var b=this;if(2===arguments.length){var c=arguments[1];"string"==typeof c?"+"===c.charAt(0)?d[a]=f(arguments[1]):d[a]=g(arguments[1]):d[a]=c}else if(1===arguments.length){if(Array.isArray(a))return a.map(function(a){Array.isArray(a)?d.apply(b,a):d(a)});if("string"==typeof a){if(a in d)return d[a]}else"EPSG"in a?d["EPSG:"+a.EPSG]=a:"ESRI"in a?d["ESRI:"+a.ESRI]=a:"IAU2000"in a?d["IAU2000:"+a.IAU2000]=a:console.log(a);return}}var e=a("./global"),f=a("./projString"),g=a("./wkt");e(d),b.exports=d},{"./global":35,"./projString":38,"./wkt":67}],33:[function(a,b,c){var d=a("./constants/Datum"),e=a("./constants/Ellipsoid"),f=a("./extend"),g=a("./datum"),h=1e-10,i=.16666666666666666,j=.04722222222222222,k=.022156084656084655;b.exports=function(a){if(a.datumCode&&"none"!==a.datumCode){var b=d[a.datumCode];b&&(a.datum_params=b.towgs84?b.towgs84.split(","):null,a.ellps=b.ellipse,a.datumName=b.datumName?b.datumName:a.datumCode)}if(!a.a){var c=e[a.ellps]?e[a.ellps]:e.WGS84;f(a,c)}return a.rf&&!a.b&&(a.b=(1-1/a.rf)*a.a),(0===a.rf||Math.abs(a.a-a.b)<h)&&(a.sphere=!0,a.b=a.a),a.a2=a.a*a.a,a.b2=a.b*a.b,a.es=(a.a2-a.b2)/a.a2,a.e=Math.sqrt(a.es),a.R_A&&(a.a*=1-a.es*(i+a.es*(j+a.es*k)),a.a2=a.a*a.a,a.b2=a.b*a.b,a.es=0),a.ep2=(a.a2-a.b2)/a.b2,a.k0||(a.k0=1),a.axis||(a.axis="enu"),a.datum||(a.datum=g(a)),a}},{"./constants/Datum":25,"./constants/Ellipsoid":26,"./datum":30,"./extend":34}],34:[function(a,b,c){b.exports=function(a,b){a=a||{};var c,d;if(!b)return a;for(d in b)c=b[d],void 0!==c&&(a[d]=c);return a}},{}],35:[function(a,b,c){b.exports=function(a){a("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),a("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),a("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),a.WGS84=a["EPSG:4326"],a["EPSG:3785"]=a["EPSG:3857"],a.GOOGLE=a["EPSG:3857"],a["EPSG:900913"]=a["EPSG:3857"],a["EPSG:102113"]=a["EPSG:3857"]}},{}],36:[function(a,b,c){var _mproj4_=a("./core");_mproj4_.defaultDatum="WGS84",_mproj4_.Proj=a("./Proj"),_mproj4_.WGS84=new _mproj4_.Proj("WGS84"),_mproj4_.Point=a("./Point"),_mproj4_.toPoint=a("./common/toPoint"),_mproj4_.defs=a("./defs"),_mproj4_.transform=a("./transform"),_mproj4_.mgrs=a("mgrs"),_mproj4_.version=a("../package.json").version,a("./includedProjections")(_mproj4_),b.exports=_mproj4_},{"../package.json":69,"./Point":1,"./Proj":2,"./common/toPoint":23,"./core":29,"./defs":32,"./includedProjections":"Pk/iAZ","./transform":66,mgrs:68}],37:[function(a,b,c){function d(a){return"string"==typeof a}function e(a){return a in i}function f(a){var b=["GEOGCS","GEOCCS","PROJCS","LOCAL_CS"];return b.reduce(function(b,c){return b+1+a.indexOf(c)},0)}function g(a){return"+"===a[0]}function h(a){return d(a)?e(a)?i[a]:f(a)?j(a):g(a)?k(a):void 0:a}var i=a("./defs"),j=a("./wkt"),k=a("./projString");b.exports=h},{"./defs":32,"./projString":38,"./wkt":67}],38:[function(a,b,c){var d=.017453292519943295,e=a("./constants/PrimeMeridian"),f=a("./constants/units");b.exports=function(a){var b={},c={};a.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).forEach(function(a){var b=a.split("=");b.push(!0),c[b[0].toLowerCase()]=b[1]});var g,h,i,j={proj:"projName",datum:"datumCode",rf:function(a){b.rf=parseFloat(a)},lat_0:function(a){b.lat0=a*d},lat_1:function(a){b.lat1=a*d},lat_2:function(a){b.lat2=a*d},lat_ts:function(a){b.lat_ts=a*d},lon_0:function(a){b.long0=a*d},lon_1:function(a){b.long1=a*d},lon_2:function(a){b.long2=a*d},alpha:function(a){b.alpha=parseFloat(a)*d},lonc:function(a){b.longc=a*d},x_0:function(a){b.x0=parseFloat(a)},y_0:function(a){b.y0=parseFloat(a)},k_0:function(a){b.k0=parseFloat(a)},k:function(a){b.k0=parseFloat(a)},a:function(a){b.a=parseFloat(a)},b:function(a){b.b=parseFloat(a)},r_a:function(){b.R_A=!0},zone:function(a){b.zone=parseInt(a,10)},south:function(){b.utmSouth=!0},towgs84:function(a){b.datum_params=a.split(",").map(function(a){return parseFloat(a)})},to_meter:function(a){b.to_meter=parseFloat(a)},units:function(a){b.units=a,f[a]&&(b.to_meter=f[a].to_meter)},from_greenwich:function(a){b.from_greenwich=a*d},pm:function(a){b.from_greenwich=(e[a]?e[a]:parseFloat(a))*d},nadgrids:function(a){"@null"===a?b.datumCode="none":b.nadgrids=a},axis:function(a){var c="ewnsud";3===a.length&&-1!==c.indexOf(a.substr(0,1))&&-1!==c.indexOf(a.substr(1,1))&&-1!==c.indexOf(a.substr(2,1))&&(b.axis=a)}};for(g in c)h=c[g],g in j?(i=j[g],"function"==typeof i?i(h):b[i]=h):b[g]=h;return"string"==typeof b.datumCode&&"WGS84"!==b.datumCode&&(b.datumCode=b.datumCode.toLowerCase()),b}},{"./constants/PrimeMeridian":27,"./constants/units":28}],39:[function(a,b,c){function d(a,b){var c=g.length;return a.names?(g[c]=a,a.names.forEach(function(a){f[a.toLowerCase()]=c}),this):(console.log(b),!0)}var e=[a("./projections/merc"),a("./projections/longlat")],f={},g=[];c.add=d,c.get=function(a){if(!a)return!1;var b=a.toLowerCase();return"undefined"!=typeof f[b]&&g[f[b]]?g[f[b]]:void 0},c.start=function(){e.forEach(d)}},{"./projections/longlat":52,"./projections/merc":53}],40:[function(a,b,c){var d=1e-10,e=a("../common/msfnz"),f=a("../common/qsfnz"),g=a("../common/adjust_lon"),h=a("../common/asinz");c.init=function(){Math.abs(this.lat1+this.lat2)<d||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=e(this.e3,this.sin_po,this.cos_po),this.qs1=f(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=e(this.e3,this.sin_po,this.cos_po),this.qs2=f(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=f(this.e3,this.sin_po,this.cos_po),Math.abs(this.lat1-this.lat2)>d?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)},c.forward=function(a){var b=a.x,c=a.y;this.sin_phi=Math.sin(c),this.cos_phi=Math.cos(c);var d=f(this.e3,this.sin_phi,this.cos_phi),e=this.a*Math.sqrt(this.c-this.ns0*d)/this.ns0,h=this.ns0*g(b-this.long0),i=e*Math.sin(h)+this.x0,j=this.rh-e*Math.cos(h)+this.y0;return a.x=i,a.y=j,a},c.inverse=function(a){var b,c,d,e,f,h;return a.x-=this.x0,a.y=this.rh-a.y+this.y0,this.ns0>=0?(b=Math.sqrt(a.x*a.x+a.y*a.y),d=1):(b=-Math.sqrt(a.x*a.x+a.y*a.y),d=-1),e=0,0!==b&&(e=Math.atan2(d*a.x,d*a.y)),d=b*this.ns0/this.a,this.sphere?h=Math.asin((this.c-d*d)/(2*this.ns0)):(c=(this.c-d*d)/this.ns0,h=this.phi1z(this.e3,c)),f=g(e/this.ns0+this.long0),a.x=f,a.y=h,a},c.phi1z=function(a,b){var c,e,f,g,i,j=h(.5*b);if(d>a)return j;for(var k=a*a,l=1;25>=l;l++)if(c=Math.sin(j),e=Math.cos(j),f=a*c,g=1-f*f,i=.5*g*g/e*(b/(1-k)-c/g+.5/a*Math.log((1-f)/(1+f))),j+=i,Math.abs(i)<=1e-7)return j;return null},c.names=["Albers_Conic_Equal_Area","Albers","aea"]},{"../common/adjust_lon":5,"../common/asinz":6,"../common/msfnz":15,"../common/qsfnz":20}],41:[function(a,b,c){var d=a("../common/adjust_lon"),e=Math.PI/2,f=1e-10,g=a("../common/mlfn"),h=a("../common/e0fn"),i=a("../common/e1fn"),j=a("../common/e2fn"),k=a("../common/e3fn"),l=a("../common/gN"),m=a("../common/asinz"),n=a("../common/imlfn");c.init=function(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)},c.forward=function(a){var b,c,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H=a.x,I=a.y,J=Math.sin(a.y),K=Math.cos(a.y),L=d(H-this.long0);return this.sphere?Math.abs(this.sin_p12-1)<=f?(a.x=this.x0+this.a*(e-I)*Math.sin(L),a.y=this.y0-this.a*(e-I)*Math.cos(L),a):Math.abs(this.sin_p12+1)<=f?(a.x=this.x0+this.a*(e+I)*Math.sin(L),a.y=this.y0+this.a*(e+I)*Math.cos(L),a):(B=this.sin_p12*J+this.cos_p12*K*Math.cos(L),z=Math.acos(B),A=z/Math.sin(z),a.x=this.x0+this.a*A*K*Math.sin(L),a.y=this.y0+this.a*A*(this.cos_p12*J-this.sin_p12*K*Math.cos(L)),a):(b=h(this.es),c=i(this.es),m=j(this.es),n=k(this.es),Math.abs(this.sin_p12-1)<=f?(o=this.a*g(b,c,m,n,e),p=this.a*g(b,c,m,n,I),a.x=this.x0+(o-p)*Math.sin(L),a.y=this.y0-(o-p)*Math.cos(L),a):Math.abs(this.sin_p12+1)<=f?(o=this.a*g(b,c,m,n,e),p=this.a*g(b,c,m,n,I),a.x=this.x0+(o+p)*Math.sin(L),a.y=this.y0+(o+p)*Math.cos(L),a):(q=J/K,r=l(this.a,this.e,this.sin_p12),s=l(this.a,this.e,J),t=Math.atan((1-this.es)*q+this.es*r*this.sin_p12/(s*K)),u=Math.atan2(Math.sin(L),this.cos_p12*Math.tan(t)-this.sin_p12*Math.cos(L)),C=0===u?Math.asin(this.cos_p12*Math.sin(t)-this.sin_p12*Math.cos(t)):Math.abs(Math.abs(u)-Math.PI)<=f?-Math.asin(this.cos_p12*Math.sin(t)-this.sin_p12*Math.cos(t)):Math.asin(Math.sin(L)*Math.cos(t)/Math.sin(u)),v=this.e*this.sin_p12/Math.sqrt(1-this.es),w=this.e*this.cos_p12*Math.cos(u)/Math.sqrt(1-this.es),x=v*w,y=w*w,D=C*C,E=D*C,F=E*C,G=F*C,z=r*C*(1-D*y*(1-y)/6+E/8*x*(1-2*y)+F/120*(y*(4-7*y)-3*v*v*(1-7*y))-G/48*x),a.x=this.x0+z*Math.sin(u),a.y=this.y0+z*Math.cos(u),a))},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I;if(this.sphere){if(b=Math.sqrt(a.x*a.x+a.y*a.y),b>2*e*this.a)return;return c=b/this.a,o=Math.sin(c),p=Math.cos(c),q=this.long0,Math.abs(b)<=f?r=this.lat0:(r=m(p*this.sin_p12+a.y*o*this.cos_p12/b),s=Math.abs(this.lat0)-e,q=d(Math.abs(s)<=f?this.lat0>=0?this.long0+Math.atan2(a.x,-a.y):this.long0-Math.atan2(-a.x,a.y):this.long0+Math.atan2(a.x*o,b*this.cos_p12*p-a.y*this.sin_p12*o))),a.x=q,a.y=r,a}return t=h(this.es),u=i(this.es),v=j(this.es),w=k(this.es),Math.abs(this.sin_p12-1)<=f?(x=this.a*g(t,u,v,w,e),b=Math.sqrt(a.x*a.x+a.y*a.y),y=x-b,r=n(y/this.a,t,u,v,w),q=d(this.long0+Math.atan2(a.x,-1*a.y)),a.x=q,a.y=r,a):Math.abs(this.sin_p12+1)<=f?(x=this.a*g(t,u,v,w,e),b=Math.sqrt(a.x*a.x+a.y*a.y),y=b-x,r=n(y/this.a,t,u,v,w),q=d(this.long0+Math.atan2(a.x,a.y)),a.x=q,a.y=r,a):(b=Math.sqrt(a.x*a.x+a.y*a.y),B=Math.atan2(a.x,a.y),z=l(this.a,this.e,this.sin_p12),C=Math.cos(B),D=this.e*this.cos_p12*C,E=-D*D/(1-this.es),F=3*this.es*(1-E)*this.sin_p12*this.cos_p12*C/(1-this.es),G=b/z,H=G-E*(1+E)*Math.pow(G,3)/6-F*(1+3*E)*Math.pow(G,4)/24,I=1-E*H*H/2-G*H*H*H/6,A=Math.asin(this.sin_p12*Math.cos(H)+this.cos_p12*Math.sin(H)*C),q=d(this.long0+Math.asin(Math.sin(B)*Math.sin(H)/Math.cos(A))),r=Math.atan((1-this.es*I*this.sin_p12/Math.sin(A))*Math.tan(A)/(1-this.es)),a.x=q,a.y=r,a)},c.names=["Azimuthal_Equidistant","aeqd"]},{"../common/adjust_lon":5,"../common/asinz":6,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/gN":11,"../common/imlfn":12,"../common/mlfn":14}],42:[function(a,b,c){var d=a("../common/mlfn"),e=a("../common/e0fn"),f=a("../common/e1fn"),g=a("../common/e2fn"),h=a("../common/e3fn"),i=a("../common/gN"),j=a("../common/adjust_lon"),k=a("../common/adjust_lat"),l=a("../common/imlfn"),m=Math.PI/2,n=1e-10;c.init=function(){this.sphere||(this.e0=e(this.es),this.e1=f(this.es),this.e2=g(this.es),this.e3=h(this.es),this.ml0=this.a*d(this.e0,this.e1,this.e2,this.e3,this.lat0))},c.forward=function(a){var b,c,e=a.x,f=a.y;if(e=j(e-this.long0),this.sphere)b=this.a*Math.asin(Math.cos(f)*Math.sin(e)),c=this.a*(Math.atan2(Math.tan(f),Math.cos(e))-this.lat0);else{var g=Math.sin(f),h=Math.cos(f),k=i(this.a,this.e,g),l=Math.tan(f)*Math.tan(f),m=e*Math.cos(f),n=m*m,o=this.es*h*h/(1-this.es),p=this.a*d(this.e0,this.e1,this.e2,this.e3,f);b=k*m*(1-n*l*(1/6-(8-l+8*o)*n/120)),c=p-this.ml0+k*g/h*n*(.5+(5-l+6*o)*n/24)}return a.x=b+this.x0,a.y=c+this.y0,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,d=a.x/this.a,e=a.y/this.a;if(this.sphere){var f=e+this.lat0;b=Math.asin(Math.sin(f)*Math.cos(d)),c=Math.atan2(Math.tan(d),Math.cos(f))}else{var g=this.ml0/this.a+e,h=l(g,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(h)-m)<=n)return a.x=this.long0,a.y=m,0>e&&(a.y*=-1),a;var o=i(this.a,this.e,Math.sin(h)),p=o*o*o/this.a/this.a*(1-this.es),q=Math.pow(Math.tan(h),2),r=d*this.a/o,s=r*r;b=h-o*Math.tan(h)/p*r*r*(.5-(1+3*q)*r*r/24),c=r*(1-s*(q/3+(1+3*q)*q*s/15))/Math.cos(h)}return a.x=j(c+this.long0),a.y=k(b),a},c.names=["Cassini","Cassini_Soldner","cass"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/gN":11,"../common/imlfn":12,"../common/mlfn":14}],43:[function(a,b,c){var d=a("../common/adjust_lon"),e=a("../common/qsfnz"),f=a("../common/msfnz"),g=a("../common/iqsfnz");c.init=function(){this.sphere||(this.k0=f(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))},c.forward=function(a){var b,c,f=a.x,g=a.y,h=d(f-this.long0);if(this.sphere)b=this.x0+this.a*h*Math.cos(this.lat_ts),c=this.y0+this.a*Math.sin(g)/Math.cos(this.lat_ts);else{var i=e(this.e,Math.sin(g));b=this.x0+this.a*this.k0*h,c=this.y0+this.a*i*.5/this.k0}return a.x=b,a.y=c,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c;return this.sphere?(b=d(this.long0+a.x/this.a/Math.cos(this.lat_ts)),c=Math.asin(a.y/this.a*Math.cos(this.lat_ts))):(c=g(this.e,2*a.y*this.k0/this.a),b=d(this.long0+a.x/(this.a*this.k0))),a.x=b,a.y=c,a},c.names=["cea"]},{"../common/adjust_lon":5,"../common/iqsfnz":13,"../common/msfnz":15,"../common/qsfnz":20}],44:[function(a,b,c){var d=a("../common/adjust_lon"),e=a("../common/adjust_lat");c.init=function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)},c.forward=function(a){var b=a.x,c=a.y,f=d(b-this.long0),g=e(c-this.lat0);return a.x=this.x0+this.a*f*this.rc,a.y=this.y0+this.a*g,a},c.inverse=function(a){var b=a.x,c=a.y;return a.x=d(this.long0+(b-this.x0)/(this.a*this.rc)),a.y=e(this.lat0+(c-this.y0)/this.a),a},c.names=["Equirectangular","Equidistant_Cylindrical","eqc"]},{"../common/adjust_lat":4,"../common/adjust_lon":5}],45:[function(a,b,c){var d=a("../common/e0fn"),e=a("../common/e1fn"),f=a("../common/e2fn"),g=a("../common/e3fn"),h=a("../common/msfnz"),i=a("../common/mlfn"),j=a("../common/adjust_lon"),k=a("../common/adjust_lat"),l=a("../common/imlfn"),m=1e-10;c.init=function(){Math.abs(this.lat1+this.lat2)<m||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=d(this.es),this.e1=e(this.es),this.e2=f(this.es),this.e3=g(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=h(this.e,this.sinphi,this.cosphi),this.ml1=i(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<m?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=h(this.e,this.sinphi,this.cosphi),this.ml2=i(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=i(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))},c.forward=function(a){var b,c=a.x,d=a.y;if(this.sphere)b=this.a*(this.g-d);else{var e=i(this.e0,this.e1,this.e2,this.e3,d);b=this.a*(this.g-e)}var f=this.ns*j(c-this.long0),g=this.x0+b*Math.sin(f),h=this.y0+this.rh-b*Math.cos(f);return a.x=g,a.y=h,a},c.inverse=function(a){a.x-=this.x0,a.y=this.rh-a.y+this.y0;var b,c,d,e;this.ns>=0?(c=Math.sqrt(a.x*a.x+a.y*a.y),b=1):(c=-Math.sqrt(a.x*a.x+a.y*a.y),b=-1);var f=0;if(0!==c&&(f=Math.atan2(b*a.x,b*a.y)),this.sphere)return e=j(this.long0+f/this.ns),d=k(this.g-c/this.a),a.x=e,a.y=d,a;var g=this.g-c/this.a;return d=l(g,this.e0,this.e1,this.e2,this.e3),e=j(this.long0+f/this.ns),a.x=e,a.y=d,a},c.names=["Equidistant_Conic","eqdc"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/imlfn":12,"../common/mlfn":14,"../common/msfnz":15}],46:[function(a,b,c){var d=Math.PI/4,e=a("../common/srat"),f=Math.PI/2,g=20;c.init=function(){var a=Math.sin(this.lat0),b=Math.cos(this.lat0);b*=b,this.rc=Math.sqrt(1-this.es)/(1-this.es*a*a),this.C=Math.sqrt(1+this.es*b*b/(1-this.es)),this.phic0=Math.asin(a/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+d)/(Math.pow(Math.tan(.5*this.lat0+d),this.C)*e(this.e*a,this.ratexp))},c.forward=function(a){var b=a.x,c=a.y;return a.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*c+d),this.C)*e(this.e*Math.sin(c),this.ratexp))-f,a.x=this.C*b,a},c.inverse=function(a){for(var b=1e-14,c=a.x/this.C,h=a.y,i=Math.pow(Math.tan(.5*h+d)/this.K,1/this.C),j=g;j>0&&(h=2*Math.atan(i*e(this.e*Math.sin(a.y),-.5*this.e))-f,!(Math.abs(h-a.y)<b));--j)a.y=h;return j?(a.x=c,a.y=h,a):null},c.names=["gauss"]},{"../common/srat":22}],47:[function(a,b,c){function d(a){return a;
}c.init=function(){this.isGeocent=!0},c.forward=d,c.inverse=d,c.names=["geocent"]},{}],48:[function(a,b,c){var d=a("../common/adjust_lon"),e=1e-10,f=a("../common/asinz");c.init=function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1},c.forward=function(a){var b,c,f,g,h,i,j,k,l=a.x,m=a.y;return f=d(l-this.long0),b=Math.sin(m),c=Math.cos(m),g=Math.cos(f),i=this.sin_p14*b+this.cos_p14*c*g,h=1,i>0||Math.abs(i)<=e?(j=this.x0+this.a*h*c*Math.sin(f)/i,k=this.y0+this.a*h*(this.cos_p14*b-this.sin_p14*c*g)/i):(j=this.x0+this.infinity_dist*c*Math.sin(f),k=this.y0+this.infinity_dist*(this.cos_p14*b-this.sin_p14*c*g)),a.x=j,a.y=k,a},c.inverse=function(a){var b,c,e,g,h,i;return a.x=(a.x-this.x0)/this.a,a.y=(a.y-this.y0)/this.a,a.x/=this.k0,a.y/=this.k0,(b=Math.sqrt(a.x*a.x+a.y*a.y))?(g=Math.atan2(b,this.rc),c=Math.sin(g),e=Math.cos(g),i=f(e*this.sin_p14+a.y*c*this.cos_p14/b),h=Math.atan2(a.x*c,b*this.cos_p14*e-a.y*this.sin_p14*c),h=d(this.long0+h)):(i=this.phic0,h=0),a.x=h,a.y=i,a},c.names=["gnom"]},{"../common/adjust_lon":5,"../common/asinz":6}],49:[function(a,b,c){var d=a("../common/adjust_lon");c.init=function(){this.a=6377397.155,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.4334234309119251),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq},c.forward=function(a){var b,c,e,f,g,h,i,j=a.x,k=a.y,l=d(j-this.long0);return b=Math.pow((1+this.e*Math.sin(k))/(1-this.e*Math.sin(k)),this.alfa*this.e/2),c=2*(Math.atan(this.k*Math.pow(Math.tan(k/2+this.s45),this.alfa)/b)-this.s45),e=-l*this.alfa,f=Math.asin(Math.cos(this.ad)*Math.sin(c)+Math.sin(this.ad)*Math.cos(c)*Math.cos(e)),g=Math.asin(Math.cos(c)*Math.sin(e)/Math.cos(f)),h=this.n*g,i=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(f/2+this.s45),this.n),a.y=i*Math.cos(h)/1,a.x=i*Math.sin(h)/1,this.czech||(a.y*=-1,a.x*=-1),a},c.inverse=function(a){var b,c,d,e,f,g,h,i,j=a.x;a.x=a.y,a.y=j,this.czech||(a.y*=-1,a.x*=-1),g=Math.sqrt(a.x*a.x+a.y*a.y),f=Math.atan2(a.y,a.x),e=f/Math.sin(this.s0),d=2*(Math.atan(Math.pow(this.ro0/g,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),b=Math.asin(Math.cos(this.ad)*Math.sin(d)-Math.sin(this.ad)*Math.cos(d)*Math.cos(e)),c=Math.asin(Math.cos(d)*Math.sin(e)/Math.cos(b)),a.x=this.long0-c/this.alfa,h=b,i=0;var k=0;do a.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(b/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.e/2))-this.s45),Math.abs(h-a.y)<1e-10&&(i=1),h=a.y,k+=1;while(0===i&&15>k);return k>=15?null:a},c.names=["Krovak","krovak"]},{"../common/adjust_lon":5}],50:[function(a,b,c){var d=Math.PI/2,e=Math.PI/4,f=1e-10,g=a("../common/qsfnz"),h=a("../common/adjust_lon");c.S_POLE=1,c.N_POLE=2,c.EQUIT=3,c.OBLIQ=4,c.init=function(){var a=Math.abs(this.lat0);if(Math.abs(a-d)<f?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(a)<f?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var b;switch(this.qp=g(this.e,1),this.mmf=.5/(1-this.es),this.apa=this.authset(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),b=Math.sin(this.lat0),this.sinb1=g(this.e,b)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*b*b)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))},c.forward=function(a){var b,c,i,j,k,l,m,n,o,p,q=a.x,r=a.y;if(q=h(q-this.long0),this.sphere){if(k=Math.sin(r),p=Math.cos(r),i=Math.cos(q),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(c=this.mode===this.EQUIT?1+p*i:1+this.sinph0*k+this.cosph0*p*i,f>=c)return null;c=Math.sqrt(2/c),b=c*p*Math.sin(q),c*=this.mode===this.EQUIT?k:this.cosph0*k-this.sinph0*p*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(r+this.phi0)<f)return null;c=e-.5*r,c=2*(this.mode===this.S_POLE?Math.cos(c):Math.sin(c)),b=c*Math.sin(q),c*=i}}else{switch(m=0,n=0,o=0,i=Math.cos(q),j=Math.sin(q),k=Math.sin(r),l=g(this.e,k),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(m=l/this.qp,n=Math.sqrt(1-m*m)),this.mode){case this.OBLIQ:o=1+this.sinb1*m+this.cosb1*n*i;break;case this.EQUIT:o=1+n*i;break;case this.N_POLE:o=d+r,l=this.qp-l;break;case this.S_POLE:o=r-d,l=this.qp+l}if(Math.abs(o)<f)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:o=Math.sqrt(2/o),c=this.mode===this.OBLIQ?this.ymf*o*(this.cosb1*m-this.sinb1*n*i):(o=Math.sqrt(2/(1+n*i)))*m*this.ymf,b=this.xmf*o*n*j;break;case this.N_POLE:case this.S_POLE:l>=0?(b=(o=Math.sqrt(l))*j,c=i*(this.mode===this.S_POLE?o:-o)):b=c=0}}return a.x=this.a*b+this.x0,a.y=this.a*c+this.y0,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,e,g,i,j,k,l=a.x/this.a,m=a.y/this.a;if(this.sphere){var n,o=0,p=0;if(n=Math.sqrt(l*l+m*m),c=.5*n,c>1)return null;switch(c=2*Math.asin(c),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(p=Math.sin(c),o=Math.cos(c)),this.mode){case this.EQUIT:c=Math.abs(n)<=f?0:Math.asin(m*p/n),l*=p,m=o*n;break;case this.OBLIQ:c=Math.abs(n)<=f?this.phi0:Math.asin(o*this.sinph0+m*p*this.cosph0/n),l*=p*this.cosph0,m=(o-Math.sin(c)*this.sinph0)*n;break;case this.N_POLE:m=-m,c=d-c;break;case this.S_POLE:c-=d}b=0!==m||this.mode!==this.EQUIT&&this.mode!==this.OBLIQ?Math.atan2(l,m):0}else{if(k=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(l/=this.dd,m*=this.dd,j=Math.sqrt(l*l+m*m),f>j)return a.x=0,a.y=this.phi0,a;g=2*Math.asin(.5*j/this.rq),e=Math.cos(g),l*=g=Math.sin(g),this.mode===this.OBLIQ?(k=e*this.sinb1+m*g*this.cosb1/j,i=this.qp*k,m=j*this.cosb1*e-m*this.sinb1*g):(k=m*g/j,i=this.qp*k,m=j*e)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(m=-m),i=l*l+m*m,!i)return a.x=0,a.y=this.phi0,a;k=1-i/this.qp,this.mode===this.S_POLE&&(k=-k)}b=Math.atan2(l,m),c=this.authlat(Math.asin(k),this.apa)}return a.x=h(this.long0+b),a.y=c,a},c.P00=.3333333333333333,c.P01=.17222222222222222,c.P02=.10257936507936508,c.P10=.06388888888888888,c.P11=.0664021164021164,c.P20=.016415012942191543,c.authset=function(a){var b,c=[];return c[0]=a*this.P00,b=a*a,c[0]+=b*this.P01,c[1]=b*this.P10,b*=a,c[0]+=b*this.P02,c[1]+=b*this.P11,c[2]=b*this.P20,c},c.authlat=function(a,b){var c=a+a;return a+b[0]*Math.sin(c)+b[1]*Math.sin(c+c)+b[2]*Math.sin(c+c+c)},c.names=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"]},{"../common/adjust_lon":5,"../common/qsfnz":20}],51:[function(a,b,c){var d=1e-10,e=a("../common/msfnz"),f=a("../common/tsfnz"),g=Math.PI/2,h=a("../common/sign"),i=a("../common/adjust_lon"),j=a("../common/phi2z");c.init=function(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<d)){var a=this.b/this.a;this.e=Math.sqrt(1-a*a);var b=Math.sin(this.lat1),c=Math.cos(this.lat1),g=e(this.e,b,c),h=f(this.e,this.lat1,b),i=Math.sin(this.lat2),j=Math.cos(this.lat2),k=e(this.e,i,j),l=f(this.e,this.lat2,i),m=f(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>d?this.ns=Math.log(g/k)/Math.log(h/l):this.ns=b,isNaN(this.ns)&&(this.ns=b),this.f0=g/(this.ns*Math.pow(h,this.ns)),this.rh=this.a*this.f0*Math.pow(m,this.ns),this.title||(this.title="Lambert Conformal Conic")}},c.forward=function(a){var b=a.x,c=a.y;Math.abs(2*Math.abs(c)-Math.PI)<=d&&(c=h(c)*(g-2*d));var e,j,k=Math.abs(Math.abs(c)-g);if(k>d)e=f(this.e,c,Math.sin(c)),j=this.a*this.f0*Math.pow(e,this.ns);else{if(k=c*this.ns,0>=k)return null;j=0}var l=this.ns*i(b-this.long0);return a.x=this.k0*(j*Math.sin(l))+this.x0,a.y=this.k0*(this.rh-j*Math.cos(l))+this.y0,a},c.inverse=function(a){var b,c,d,e,f,h=(a.x-this.x0)/this.k0,k=this.rh-(a.y-this.y0)/this.k0;this.ns>0?(b=Math.sqrt(h*h+k*k),c=1):(b=-Math.sqrt(h*h+k*k),c=-1);var l=0;if(0!==b&&(l=Math.atan2(c*h,c*k)),0!==b||this.ns>0){if(c=1/this.ns,d=Math.pow(b/(this.a*this.f0),c),e=j(this.e,d),-9999===e)return null}else e=-g;return f=i(l/this.ns+this.long0),a.x=f,a.y=e,a},c.names=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_2SP","lcc"]},{"../common/adjust_lon":5,"../common/msfnz":15,"../common/phi2z":16,"../common/sign":21,"../common/tsfnz":24}],52:[function(a,b,c){function d(a){return a}c.init=function(){},c.forward=d,c.inverse=d,c.names=["longlat","identity"]},{}],53:[function(a,b,c){var d=a("../common/msfnz"),e=Math.PI/2,f=1e-10,g=57.29577951308232,h=a("../common/adjust_lon"),i=Math.PI/4,j=a("../common/tsfnz"),k=a("../common/phi2z");c.init=function(){var a=this.b/this.a;this.es=1-a*a,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=d(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)},c.forward=function(a){var b=a.x,c=a.y;if(c*g>90&&-90>c*g&&b*g>180&&-180>b*g)return null;var d,k;if(Math.abs(Math.abs(c)-e)<=f)return null;if(this.sphere)d=this.x0+this.a*this.k0*h(b-this.long0),k=this.y0+this.a*this.k0*Math.log(Math.tan(i+.5*c));else{var l=Math.sin(c),m=j(this.e,c,l);d=this.x0+this.a*this.k0*h(b-this.long0),k=this.y0-this.a*this.k0*Math.log(m)}return a.x=d,a.y=k,a},c.inverse=function(a){var b,c,d=a.x-this.x0,f=a.y-this.y0;if(this.sphere)c=e-2*Math.atan(Math.exp(-f/(this.a*this.k0)));else{var g=Math.exp(-f/(this.a*this.k0));if(c=k(this.e,g),-9999===c)return null}return b=h(this.long0+d/(this.a*this.k0)),a.x=b,a.y=c,a},c.names=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"]},{"../common/adjust_lon":5,"../common/msfnz":15,"../common/phi2z":16,"../common/tsfnz":24}],54:[function(a,b,c){var d=a("../common/adjust_lon");c.init=function(){},c.forward=function(a){var b=a.x,c=a.y,e=d(b-this.long0),f=this.x0+this.a*e,g=this.y0+this.a*Math.log(Math.tan(Math.PI/4+c/2.5))*1.25;return a.x=f,a.y=g,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b=d(this.long0+a.x/this.a),c=2.5*(Math.atan(Math.exp(.8*a.y/this.a))-Math.PI/4);return a.x=b,a.y=c,a},c.names=["Miller_Cylindrical","mill"]},{"../common/adjust_lon":5}],55:[function(a,b,c){var d=a("../common/adjust_lon"),e=1e-10;c.init=function(){},c.forward=function(a){for(var b=a.x,c=a.y,f=d(b-this.long0),g=c,h=Math.PI*Math.sin(c),i=0;!0;i++){var j=-(g+Math.sin(g)-h)/(1+Math.cos(g));if(g+=j,Math.abs(j)<e)break}g/=2,Math.PI/2-Math.abs(c)<e&&(f=0);var k=.900316316158*this.a*f*Math.cos(g)+this.x0,l=1.4142135623731*this.a*Math.sin(g)+this.y0;return a.x=k,a.y=l,a},c.inverse=function(a){var b,c;a.x-=this.x0,a.y-=this.y0,c=a.y/(1.4142135623731*this.a),Math.abs(c)>.999999999999&&(c=.999999999999),b=Math.asin(c);var e=d(this.long0+a.x/(.900316316158*this.a*Math.cos(b)));e<-Math.PI&&(e=-Math.PI),e>Math.PI&&(e=Math.PI),c=(2*b+Math.sin(2*b))/Math.PI,Math.abs(c)>1&&(c=1);var f=Math.asin(c);return a.x=e,a.y=f,a},c.names=["Mollweide","moll"]},{"../common/adjust_lon":5}],56:[function(a,b,c){var d=484813681109536e-20;c.iterations=1,c.init=function(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013},c.forward=function(a){var b,c=a.x,e=a.y,f=e-this.lat0,g=c-this.long0,h=f/d*1e-5,i=g,j=1,k=0;for(b=1;10>=b;b++)j*=h,k+=this.A[b]*j;var l,m,n=k,o=i,p=1,q=0,r=0,s=0;for(b=1;6>=b;b++)l=p*n-q*o,m=q*n+p*o,p=l,q=m,r=r+this.B_re[b]*p-this.B_im[b]*q,s=s+this.B_im[b]*p+this.B_re[b]*q;return a.x=s*this.a+this.x0,a.y=r*this.a+this.y0,a},c.inverse=function(a){var b,c,e,f=a.x,g=a.y,h=f-this.x0,i=g-this.y0,j=i/this.a,k=h/this.a,l=1,m=0,n=0,o=0;for(b=1;6>=b;b++)c=l*j-m*k,e=m*j+l*k,l=c,m=e,n=n+this.C_re[b]*l-this.C_im[b]*m,o=o+this.C_im[b]*l+this.C_re[b]*m;for(var p=0;p<this.iterations;p++){var q,r,s=n,t=o,u=j,v=k;for(b=2;6>=b;b++)q=s*n-t*o,r=t*n+s*o,s=q,t=r,u+=(b-1)*(this.B_re[b]*s-this.B_im[b]*t),v+=(b-1)*(this.B_im[b]*s+this.B_re[b]*t);s=1,t=0;var w=this.B_re[1],x=this.B_im[1];for(b=2;6>=b;b++)q=s*n-t*o,r=t*n+s*o,s=q,t=r,w+=b*(this.B_re[b]*s-this.B_im[b]*t),x+=b*(this.B_im[b]*s+this.B_re[b]*t);var y=w*w+x*x;n=(u*w+v*x)/y,o=(v*w-u*x)/y}var z=n,A=o,B=1,C=0;for(b=1;9>=b;b++)B*=z,C+=this.D[b]*B;var D=this.lat0+C*d*1e5,E=this.long0+A;return a.x=E,a.y=D,a},c.names=["New_Zealand_Map_Grid","nzmg"]},{}],57:[function(a,b,c){var d=a("../common/tsfnz"),e=a("../common/adjust_lon"),f=a("../common/phi2z"),g=Math.PI/2,h=Math.PI/4,i=1e-10;c.init=function(){this.no_off=this.no_off||!1,this.no_rot=this.no_rot||!1,isNaN(this.k0)&&(this.k0=1);var a=Math.sin(this.lat0),b=Math.cos(this.lat0),c=this.e*a;this.bl=Math.sqrt(1+this.es/(1-this.es)*Math.pow(b,4)),this.al=this.a*this.bl*this.k0*Math.sqrt(1-this.es)/(1-c*c);var f=d(this.e,this.lat0,a),g=this.bl/b*Math.sqrt((1-this.es)/(1-c*c));1>g*g&&(g=1);var h,i;if(isNaN(this.longc)){var j=d(this.e,this.lat1,Math.sin(this.lat1)),k=d(this.e,this.lat2,Math.sin(this.lat2));this.lat0>=0?this.el=(g+Math.sqrt(g*g-1))*Math.pow(f,this.bl):this.el=(g-Math.sqrt(g*g-1))*Math.pow(f,this.bl);var l=Math.pow(j,this.bl),m=Math.pow(k,this.bl);h=this.el/l,i=.5*(h-1/h);var n=(this.el*this.el-m*l)/(this.el*this.el+m*l),o=(m-l)/(m+l),p=e(this.long1-this.long2);this.long0=.5*(this.long1+this.long2)-Math.atan(n*Math.tan(.5*this.bl*p)/o)/this.bl,this.long0=e(this.long0);var q=e(this.long1-this.long0);this.gamma0=Math.atan(Math.sin(this.bl*q)/i),this.alpha=Math.asin(g*Math.sin(this.gamma0))}else h=this.lat0>=0?g+Math.sqrt(g*g-1):g-Math.sqrt(g*g-1),this.el=h*Math.pow(f,this.bl),i=.5*(h-1/h),this.gamma0=Math.asin(Math.sin(this.alpha)/g),this.long0=this.longc-Math.asin(i*Math.tan(this.gamma0))/this.bl;this.no_off?this.uc=0:this.lat0>=0?this.uc=this.al/this.bl*Math.atan2(Math.sqrt(g*g-1),Math.cos(this.alpha)):this.uc=-1*this.al/this.bl*Math.atan2(Math.sqrt(g*g-1),Math.cos(this.alpha))},c.forward=function(a){var b,c,f,j=a.x,k=a.y,l=e(j-this.long0);if(Math.abs(Math.abs(k)-g)<=i)f=k>0?-1:1,c=this.al/this.bl*Math.log(Math.tan(h+f*this.gamma0*.5)),b=-1*f*g*this.al/this.bl;else{var m=d(this.e,k,Math.sin(k)),n=this.el/Math.pow(m,this.bl),o=.5*(n-1/n),p=.5*(n+1/n),q=Math.sin(this.bl*l),r=(o*Math.sin(this.gamma0)-q*Math.cos(this.gamma0))/p;c=Math.abs(Math.abs(r)-1)<=i?Number.POSITIVE_INFINITY:.5*this.al*Math.log((1-r)/(1+r))/this.bl,b=Math.abs(Math.cos(this.bl*l))<=i?this.al*this.bl*l:this.al*Math.atan2(o*Math.cos(this.gamma0)+q*Math.sin(this.gamma0),Math.cos(this.bl*l))/this.bl}return this.no_rot?(a.x=this.x0+b,a.y=this.y0+c):(b-=this.uc,a.x=this.x0+c*Math.cos(this.alpha)+b*Math.sin(this.alpha),a.y=this.y0+b*Math.cos(this.alpha)-c*Math.sin(this.alpha)),a},c.inverse=function(a){var b,c;this.no_rot?(c=a.y-this.y0,b=a.x-this.x0):(c=(a.x-this.x0)*Math.cos(this.alpha)-(a.y-this.y0)*Math.sin(this.alpha),b=(a.y-this.y0)*Math.cos(this.alpha)+(a.x-this.x0)*Math.sin(this.alpha),b+=this.uc);var d=Math.exp(-1*this.bl*c/this.al),h=.5*(d-1/d),j=.5*(d+1/d),k=Math.sin(this.bl*b/this.al),l=(k*Math.cos(this.gamma0)+h*Math.sin(this.gamma0))/j,m=Math.pow(this.el/Math.sqrt((1+l)/(1-l)),1/this.bl);return Math.abs(l-1)<i?(a.x=this.long0,a.y=g):Math.abs(l+1)<i?(a.x=this.long0,a.y=-1*g):(a.y=f(this.e,m),a.x=e(this.long0-Math.atan2(h*Math.cos(this.gamma0)-k*Math.sin(this.gamma0),Math.cos(this.bl*b/this.al))/this.bl)),a},c.names=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","omerc"]},{"../common/adjust_lon":5,"../common/phi2z":16,"../common/tsfnz":24}],58:[function(a,b,c){var d=a("../common/e0fn"),e=a("../common/e1fn"),f=a("../common/e2fn"),g=a("../common/e3fn"),h=a("../common/adjust_lon"),i=a("../common/adjust_lat"),j=a("../common/mlfn"),k=1e-10,l=a("../common/gN"),m=20;c.init=function(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=d(this.es),this.e1=e(this.es),this.e2=f(this.es),this.e3=g(this.es),this.ml0=this.a*j(this.e0,this.e1,this.e2,this.e3,this.lat0)},c.forward=function(a){var b,c,d,e=a.x,f=a.y,g=h(e-this.long0);if(d=g*Math.sin(f),this.sphere)Math.abs(f)<=k?(b=this.a*g,c=-1*this.a*this.lat0):(b=this.a*Math.sin(d)/Math.tan(f),c=this.a*(i(f-this.lat0)+(1-Math.cos(d))/Math.tan(f)));else if(Math.abs(f)<=k)b=this.a*g,c=-1*this.ml0;else{var m=l(this.a,this.e,Math.sin(f))/Math.tan(f);b=m*Math.sin(d),c=this.a*j(this.e0,this.e1,this.e2,this.e3,f)-this.ml0+m*(1-Math.cos(d))}return a.x=b+this.x0,a.y=c+this.y0,a},c.inverse=function(a){var b,c,d,e,f,g,i,l,n;if(d=a.x-this.x0,e=a.y-this.y0,this.sphere)if(Math.abs(e+this.a*this.lat0)<=k)b=h(d/this.a+this.long0),c=0;else{g=this.lat0+e/this.a,i=d*d/this.a/this.a+g*g,l=g;var o;for(f=m;f;--f)if(o=Math.tan(l),n=-1*(g*(l*o+1)-l-.5*(l*l+i)*o)/((l-g)/o-1),l+=n,Math.abs(n)<=k){c=l;break}b=h(this.long0+Math.asin(d*Math.tan(l)/this.a)/Math.sin(c))}else if(Math.abs(e+this.ml0)<=k)c=0,b=h(this.long0+d/this.a);else{g=(this.ml0+e)/this.a,i=d*d/this.a/this.a+g*g,l=g;var p,q,r,s,t;for(f=m;f;--f)if(t=this.e*Math.sin(l),p=Math.sqrt(1-t*t)*Math.tan(l),q=this.a*j(this.e0,this.e1,this.e2,this.e3,l),r=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),s=q/this.a,n=(g*(p*s+1)-s-.5*p*(s*s+i))/(this.es*Math.sin(2*l)*(s*s+i-2*g*s)/(4*p)+(g-s)*(p*r-2/Math.sin(2*l))-r),l-=n,Math.abs(n)<=k){c=l;break}p=Math.sqrt(1-this.es*Math.pow(Math.sin(c),2))*Math.tan(c),b=h(this.long0+Math.asin(d*p/this.a)/Math.sin(c))}return a.x=b,a.y=c,a},c.names=["Polyconic","poly"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/gN":11,"../common/mlfn":14}],59:[function(a,b,c){var d=a("../common/adjust_lon"),e=a("../common/adjust_lat"),f=a("../common/pj_enfn"),g=20,h=a("../common/pj_mlfn"),i=a("../common/pj_inv_mlfn"),j=Math.PI/2,k=1e-10,l=a("../common/asinz");c.init=function(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=f(this.es)},c.forward=function(a){var b,c,e=a.x,f=a.y;if(e=d(e-this.long0),this.sphere){if(this.m)for(var i=this.n*Math.sin(f),j=g;j;--j){var l=(this.m*f+Math.sin(f)-i)/(this.m+Math.cos(f));if(f-=l,Math.abs(l)<k)break}else f=1!==this.n?Math.asin(this.n*Math.sin(f)):f;b=this.a*this.C_x*e*(this.m+Math.cos(f)),c=this.a*this.C_y*f}else{var m=Math.sin(f),n=Math.cos(f);c=this.a*h(f,m,n,this.en),b=this.a*e*n/Math.sqrt(1-this.es*m*m)}return a.x=b,a.y=c,a},c.inverse=function(a){var b,c,f,g;return a.x-=this.x0,f=a.x/this.a,a.y-=this.y0,b=a.y/this.a,this.sphere?(b/=this.C_y,f/=this.C_x*(this.m+Math.cos(b)),this.m?b=l((this.m*b+Math.sin(b))/this.n):1!==this.n&&(b=l(Math.sin(b)/this.n)),f=d(f+this.long0),b=e(b)):(b=i(a.y/this.a,this.es,this.en),g=Math.abs(b),j>g?(g=Math.sin(b),c=this.long0+a.x*Math.sqrt(1-this.es*g*g)/(this.a*Math.cos(b)),f=d(c)):j>g-k&&(f=this.long0)),a.x=f,a.y=b,a},c.names=["Sinusoidal","sinu"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/asinz":6,"../common/pj_enfn":17,"../common/pj_inv_mlfn":18,"../common/pj_mlfn":19}],60:[function(a,b,c){c.init=function(){var a=this.lat0;this.lambda0=this.long0;var b=Math.sin(a),c=this.a,d=this.rf,e=1/d,f=2*e-Math.pow(e,2),g=this.e=Math.sqrt(f);this.R=this.k0*c*Math.sqrt(1-f)/(1-f*Math.pow(b,2)),this.alpha=Math.sqrt(1+f/(1-f)*Math.pow(Math.cos(a),4)),this.b0=Math.asin(b/this.alpha);var h=Math.log(Math.tan(Math.PI/4+this.b0/2)),i=Math.log(Math.tan(Math.PI/4+a/2)),j=Math.log((1+g*b)/(1-g*b));this.K=h-this.alpha*i+this.alpha*g/2*j},c.forward=function(a){var b=Math.log(Math.tan(Math.PI/4-a.y/2)),c=this.e/2*Math.log((1+this.e*Math.sin(a.y))/(1-this.e*Math.sin(a.y))),d=-this.alpha*(b+c)+this.K,e=2*(Math.atan(Math.exp(d))-Math.PI/4),f=this.alpha*(a.x-this.lambda0),g=Math.atan(Math.sin(f)/(Math.sin(this.b0)*Math.tan(e)+Math.cos(this.b0)*Math.cos(f))),h=Math.asin(Math.cos(this.b0)*Math.sin(e)-Math.sin(this.b0)*Math.cos(e)*Math.cos(f));return a.y=this.R/2*Math.log((1+Math.sin(h))/(1-Math.sin(h)))+this.y0,a.x=this.R*g+this.x0,a},c.inverse=function(a){for(var b=a.x-this.x0,c=a.y-this.y0,d=b/this.R,e=2*(Math.atan(Math.exp(c/this.R))-Math.PI/4),f=Math.asin(Math.cos(this.b0)*Math.sin(e)+Math.sin(this.b0)*Math.cos(e)*Math.cos(d)),g=Math.atan(Math.sin(d)/(Math.cos(this.b0)*Math.cos(d)-Math.sin(this.b0)*Math.tan(e))),h=this.lambda0+g/this.alpha,i=0,j=f,k=-1e3,l=0;Math.abs(j-k)>1e-7;){if(++l>20)return;i=1/this.alpha*(Math.log(Math.tan(Math.PI/4+f/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(j))/2)),k=j,j=2*Math.atan(Math.exp(i))-Math.PI/2}return a.x=h,a.y=j,a},c.names=["somerc"]},{}],61:[function(a,b,c){var d=Math.PI/2,e=1e-10,f=a("../common/sign"),g=a("../common/msfnz"),h=a("../common/tsfnz"),i=a("../common/phi2z"),j=a("../common/adjust_lon");c.ssfn_=function(a,b,c){return b*=c,Math.tan(.5*(d+a))*Math.pow((1-b)/(1+b),.5*c)},c.init=function(){this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=e&&(this.k0=.5*(1+f(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=e&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=e&&(this.k0=.5*this.cons*g(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/h(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=g(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-d,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))},c.forward=function(a){var b,c,f,g,i,k,l=a.x,m=a.y,n=Math.sin(m),o=Math.cos(m),p=j(l-this.long0);return Math.abs(Math.abs(l-this.long0)-Math.PI)<=e&&Math.abs(m+this.lat0)<=e?(a.x=NaN,a.y=NaN,a):this.sphere?(b=2*this.k0/(1+this.sinlat0*n+this.coslat0*o*Math.cos(p)),a.x=this.a*b*o*Math.sin(p)+this.x0,a.y=this.a*b*(this.coslat0*n-this.sinlat0*o*Math.cos(p))+this.y0,a):(c=2*Math.atan(this.ssfn_(m,n,this.e))-d,g=Math.cos(c),f=Math.sin(c),Math.abs(this.coslat0)<=e?(i=h(this.e,m*this.con,this.con*n),k=2*this.a*this.k0*i/this.cons,a.x=this.x0+k*Math.sin(l-this.long0),a.y=this.y0-this.con*k*Math.cos(l-this.long0),a):(Math.abs(this.sinlat0)<e?(b=2*this.a*this.k0/(1+g*Math.cos(p)),a.y=b*f):(b=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*f+this.cosX0*g*Math.cos(p))),a.y=b*(this.cosX0*f-this.sinX0*g*Math.cos(p))+this.y0),a.x=b*g*Math.sin(p)+this.x0,a))},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,f,g,h,k=Math.sqrt(a.x*a.x+a.y*a.y);if(this.sphere){var l=2*Math.atan(k/(.5*this.a*this.k0));return b=this.long0,c=this.lat0,e>=k?(a.x=b,a.y=c,a):(c=Math.asin(Math.cos(l)*this.sinlat0+a.y*Math.sin(l)*this.coslat0/k),b=j(Math.abs(this.coslat0)<e?this.lat0>0?this.long0+Math.atan2(a.x,-1*a.y):this.long0+Math.atan2(a.x,a.y):this.long0+Math.atan2(a.x*Math.sin(l),k*this.coslat0*Math.cos(l)-a.y*this.sinlat0*Math.sin(l))),a.x=b,a.y=c,a)}if(Math.abs(this.coslat0)<=e){if(e>=k)return c=this.lat0,b=this.long0,a.x=b,a.y=c,a;a.x*=this.con,a.y*=this.con,f=k*this.cons/(2*this.a*this.k0),c=this.con*i(this.e,f),b=this.con*j(this.con*this.long0+Math.atan2(a.x,-1*a.y))}else g=2*Math.atan(k*this.cosX0/(2*this.a*this.k0*this.ms1)),b=this.long0,e>=k?h=this.X0:(h=Math.asin(Math.cos(g)*this.sinX0+a.y*Math.sin(g)*this.cosX0/k),b=j(this.long0+Math.atan2(a.x*Math.sin(g),k*this.cosX0*Math.cos(g)-a.y*this.sinX0*Math.sin(g)))),c=-1*i(this.e,Math.tan(.5*(d+h)));return a.x=b,a.y=c,a},c.names=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)"]},{"../common/adjust_lon":5,"../common/msfnz":15,"../common/phi2z":16,"../common/sign":21,"../common/tsfnz":24}],62:[function(a,b,c){var d=a("./gauss"),e=a("../common/adjust_lon");c.init=function(){d.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))},c.forward=function(a){var b,c,f,g;return a.x=e(a.x-this.long0),d.forward.apply(this,[a]),b=Math.sin(a.y),c=Math.cos(a.y),f=Math.cos(a.x),g=this.k0*this.R2/(1+this.sinc0*b+this.cosc0*c*f),a.x=g*c*Math.sin(a.x),a.y=g*(this.cosc0*b-this.sinc0*c*f),a.x=this.a*a.x+this.x0,a.y=this.a*a.y+this.y0,a},c.inverse=function(a){var b,c,f,g,h;if(a.x=(a.x-this.x0)/this.a,a.y=(a.y-this.y0)/this.a,a.x/=this.k0,a.y/=this.k0,h=Math.sqrt(a.x*a.x+a.y*a.y)){var i=2*Math.atan2(h,this.R2);b=Math.sin(i),c=Math.cos(i),g=Math.asin(c*this.sinc0+a.y*b*this.cosc0/h),f=Math.atan2(a.x*b,h*this.cosc0*c-a.y*this.sinc0*b)}else g=this.phic0,f=0;return a.x=f,a.y=g,d.inverse.apply(this,[a]),a.x=e(a.x+this.long0),a},c.names=["Stereographic_North_Pole","Oblique_Stereographic","Polar_Stereographic","sterea","Oblique Stereographic Alternative"]},{"../common/adjust_lon":5,"./gauss":46}],63:[function(a,b,c){var d=a("../common/e0fn"),e=a("../common/e1fn"),f=a("../common/e2fn"),g=a("../common/e3fn"),h=a("../common/mlfn"),i=a("../common/adjust_lon"),j=Math.PI/2,k=1e-10,l=a("../common/sign"),m=a("../common/asinz");c.init=function(){this.e0=d(this.es),this.e1=e(this.es),this.e2=f(this.es),this.e3=g(this.es),this.ml0=this.a*h(this.e0,this.e1,this.e2,this.e3,this.lat0)},c.forward=function(a){var b,c,d,e=a.x,f=a.y,g=i(e-this.long0),j=Math.sin(f),k=Math.cos(f);if(this.sphere){var l=k*Math.sin(g);if(Math.abs(Math.abs(l)-1)<1e-10)return 93;c=.5*this.a*this.k0*Math.log((1+l)/(1-l)),b=Math.acos(k*Math.cos(g)/Math.sqrt(1-l*l)),0>f&&(b=-b),d=this.a*this.k0*(b-this.lat0)}else{var m=k*g,n=Math.pow(m,2),o=this.ep2*Math.pow(k,2),p=Math.tan(f),q=Math.pow(p,2);b=1-this.es*Math.pow(j,2);var r=this.a/Math.sqrt(b),s=this.a*h(this.e0,this.e1,this.e2,this.e3,f);c=this.k0*r*m*(1+n/6*(1-q+o+n/20*(5-18*q+Math.pow(q,2)+72*o-58*this.ep2)))+this.x0,d=this.k0*(s-this.ml0+r*p*(n*(.5+n/24*(5-q+9*o+4*Math.pow(o,2)+n/30*(61-58*q+Math.pow(q,2)+600*o-330*this.ep2)))))+this.y0}return a.x=c,a.y=d,a},c.inverse=function(a){var b,c,d,e,f,g,h=6;if(this.sphere){var n=Math.exp(a.x/(this.a*this.k0)),o=.5*(n-1/n),p=this.lat0+a.y/(this.a*this.k0),q=Math.cos(p);b=Math.sqrt((1-q*q)/(1+o*o)),f=m(b),0>p&&(f=-f),g=0===o&&0===q?this.long0:i(Math.atan2(o,q)+this.long0)}else{var r=a.x-this.x0,s=a.y-this.y0;for(b=(this.ml0+s/this.k0)/this.a,c=b,e=0;!0&&(d=(b+this.e1*Math.sin(2*c)-this.e2*Math.sin(4*c)+this.e3*Math.sin(6*c))/this.e0-c,c+=d,!(Math.abs(d)<=k));e++)if(e>=h)return 95;if(Math.abs(c)<j){var t=Math.sin(c),u=Math.cos(c),v=Math.tan(c),w=this.ep2*Math.pow(u,2),x=Math.pow(w,2),y=Math.pow(v,2),z=Math.pow(y,2);b=1-this.es*Math.pow(t,2);var A=this.a/Math.sqrt(b),B=A*(1-this.es)/b,C=r/(A*this.k0),D=Math.pow(C,2);f=c-A*v*D/B*(.5-D/24*(5+3*y+10*w-4*x-9*this.ep2-D/30*(61+90*y+298*w+45*z-252*this.ep2-3*x))),g=i(this.long0+C*(1-D/6*(1+2*y+w-D/20*(5-2*w+28*y-3*x+8*this.ep2+24*z)))/u)}else f=j*l(s),g=this.long0}return a.x=g,a.y=f,a},c.names=["Transverse_Mercator","Transverse Mercator","tmerc"]},{"../common/adjust_lon":5,"../common/asinz":6,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/mlfn":14,"../common/sign":21}],64:[function(a,b,c){var d=.017453292519943295,e=a("./tmerc");c.dependsOn="tmerc",c.init=function(){this.zone&&(this.lat0=0,this.long0=(6*Math.abs(this.zone)-183)*d,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,e.init.apply(this),this.forward=e.forward,this.inverse=e.inverse)},c.names=["Universal Transverse Mercator System","utm"]},{"./tmerc":63}],65:[function(a,b,c){var d=a("../common/adjust_lon"),e=Math.PI/2,f=1e-10,g=a("../common/asinz");c.init=function(){this.R=this.a},c.forward=function(a){var b,c,h=a.x,i=a.y,j=d(h-this.long0);Math.abs(i)<=f&&(b=this.x0+this.R*j,c=this.y0);var k=g(2*Math.abs(i/Math.PI));(Math.abs(j)<=f||Math.abs(Math.abs(i)-e)<=f)&&(b=this.x0,c=i>=0?this.y0+Math.PI*this.R*Math.tan(.5*k):this.y0+Math.PI*this.R*-Math.tan(.5*k));var l=.5*Math.abs(Math.PI/j-j/Math.PI),m=l*l,n=Math.sin(k),o=Math.cos(k),p=o/(n+o-1),q=p*p,r=p*(2/n-1),s=r*r,t=Math.PI*this.R*(l*(p-s)+Math.sqrt(m*(p-s)*(p-s)-(s+m)*(q-s)))/(s+m);0>j&&(t=-t),b=this.x0+t;var u=m+p;return t=Math.PI*this.R*(r*u-l*Math.sqrt((s+m)*(m+1)-u*u))/(s+m),c=i>=0?this.y0+t:this.y0-t,a.x=b,a.y=c,a},c.inverse=function(a){var b,c,e,g,h,i,j,k,l,m,n,o,p;return a.x-=this.x0,a.y-=this.y0,n=Math.PI*this.R,e=a.x/n,g=a.y/n,h=e*e+g*g,i=-Math.abs(g)*(1+h),j=i-2*g*g+e*e,k=-2*i+1+2*g*g+h*h,p=g*g/k+(2*j*j*j/k/k/k-9*i*j/k/k)/27,l=(i-j*j/3/k)/k,m=2*Math.sqrt(-l/3),n=3*p/l/m,Math.abs(n)>1&&(n=n>=0?1:-1),o=Math.acos(n)/3,c=a.y>=0?(-m*Math.cos(o+Math.PI/3)-j/3/k)*Math.PI:-(-m*Math.cos(o+Math.PI/3)-j/3/k)*Math.PI,b=Math.abs(e)<f?this.long0:d(this.long0+Math.PI*(h-1+Math.sqrt(1+2*(e*e-g*g)+h*h))/2/e),a.x=b,a.y=c,a},c.names=["Van_der_Grinten_I","VanDerGrinten","vandg"]},{"../common/adjust_lon":5,"../common/asinz":6}],66:[function(a,b,c){var d=.017453292519943295,e=57.29577951308232,f=1,g=2,h=a("./datum_transform"),i=a("./adjust_axis"),j=a("./Proj"),k=a("./common/toPoint");b.exports=function l(a,b,c){function m(a,b){return(a.datum.datum_type===f||a.datum.datum_type===g)&&"WGS84"!==b.datumCode}var n;return Array.isArray(c)&&(c=k(c)),a.datum&&b.datum&&(m(a,b)||m(b,a))&&(n=new j("WGS84"),l(a,n,c),a=n),"enu"!==a.axis&&i(a,!1,c),"longlat"===a.projName?(c.x*=d,c.y*=d):a.isGeocent?(a.to_meter&&(c.x*=a.to_meter,c.y*=a.to_meter,c.z*=a.to_meter),b.datum.geocentric_to_geodetic_noniter(c)):(a.to_meter&&(c.x*=a.to_meter,c.y*=a.to_meter),a.inverse(c)),a.from_greenwich&&(c.x+=a.from_greenwich),c=h(a.datum,b.datum,c),b.from_greenwich&&(c.x-=b.from_greenwich),"longlat"===b.projName?(c.x*=e,c.y*=e):b.isGeocent?(b.datum.geodetic_to_geocentric(c),b.to_meter&&(c.x/=b.to_meter,c.y/=b.to_meter,c.z/=b.to_meter)):(b.forward(c),b.to_meter&&(c.x/=b.to_meter,c.y/=b.to_meter)),"enu"!==b.axis&&i(b,!0,c),c}},{"./Proj":2,"./adjust_axis":3,"./common/toPoint":23,"./datum_transform":31}],67:[function(a,b,c){function d(a,b,c){a[b]=c.map(function(a){var b={};return e(a,b),b}).reduce(function(a,b){return j(a,b)},{})}function e(a,b){var c;return Array.isArray(a)?(c=a.shift(),"PARAMETER"===c&&(c=a.shift()),1===a.length?Array.isArray(a[0])?(b[c]={},e(a[0],b[c])):b[c]=a[0]:a.length?"TOWGS84"===c?b[c]=a:(b[c]={},["UNIT","PRIMEM","VERT_DATUM"].indexOf(c)>-1?(b[c]={name:a[0].toLowerCase(),convert:a[1]},3===a.length&&(b[c].auth=a[2])):"SPHEROID"===c?(b[c]={name:a[0],a:a[1],rf:a[2]},4===a.length&&(b[c].auth=a[3])):["GEOGCS","GEOCCS","DATUM","VERT_CS","COMPD_CS","LOCAL_CS","FITTED_CS","LOCAL_DATUM"].indexOf(c)>-1?(a[0]=["name",a[0]],d(b,c,a)):a.every(function(a){return Array.isArray(a)})?d(b,c,a):e(a,b[c])):b[c]=!0,
void 0):void(b[a]=!0)}function f(a,b){var c=b[0],d=b[1];!(c in a)&&d in a&&(a[c]=a[d],3===b.length&&(a[c]=b[2](a[c])))}function g(a){return a*i}function h(a){function b(b){var c=a.to_meter||1;return parseFloat(b,10)*c}"GEOGCS"===a.type?a.projName="longlat":"LOCAL_CS"===a.type?(a.projName="identity",a.local=!0):"object"==typeof a.PROJECTION?a.projName=Object.keys(a.PROJECTION)[0]:a.projName=a.PROJECTION,a.UNIT&&(a.units=a.UNIT.name.toLowerCase(),"metre"===a.units&&(a.units="meter"),a.UNIT.convert&&(a.to_meter=parseFloat(a.UNIT.convert,10))),a.GEOGCS&&(a.GEOGCS.DATUM?a.datumCode=a.GEOGCS.DATUM.name.toLowerCase():a.datumCode=a.GEOGCS.name.toLowerCase(),"d_"===a.datumCode.slice(0,2)&&(a.datumCode=a.datumCode.slice(2)),("new_zealand_geodetic_datum_1949"===a.datumCode||"new_zealand_1949"===a.datumCode)&&(a.datumCode="nzgd49"),"wgs_1984"===a.datumCode&&("Mercator_Auxiliary_Sphere"===a.PROJECTION&&(a.sphere=!0),a.datumCode="wgs84"),"_ferro"===a.datumCode.slice(-6)&&(a.datumCode=a.datumCode.slice(0,-6)),"_jakarta"===a.datumCode.slice(-8)&&(a.datumCode=a.datumCode.slice(0,-8)),~a.datumCode.indexOf("belge")&&(a.datumCode="rnb72"),a.GEOGCS.DATUM&&a.GEOGCS.DATUM.SPHEROID&&(a.ellps=a.GEOGCS.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),"international"===a.ellps.toLowerCase().slice(0,13)&&(a.ellps="intl"),a.a=a.GEOGCS.DATUM.SPHEROID.a,a.rf=parseFloat(a.GEOGCS.DATUM.SPHEROID.rf,10)),~a.datumCode.indexOf("osgb_1936")&&(a.datumCode="osgb36")),a.b&&!isFinite(a.b)&&(a.b=a.a);var c=function(b){return f(a,b)},d=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_2","Standard_Parallel_2"],["false_easting","False_Easting"],["false_northing","False_Northing"],["central_meridian","Central_Meridian"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",g],["longitude_of_center","Longitude_Of_Center"],["longc","longitude_of_center",g],["x0","false_easting",b],["y0","false_northing",b],["long0","central_meridian",g],["lat0","latitude_of_origin",g],["lat0","standard_parallel_1",g],["lat1","standard_parallel_1",g],["lat2","standard_parallel_2",g],["alpha","azimuth",g],["srsCode","name"]];d.forEach(c),a.long0||!a.longc||"Albers_Conic_Equal_Area"!==a.projName&&"Lambert_Azimuthal_Equal_Area"!==a.projName||(a.long0=a.longc),a.lat_ts||!a.lat1||"Stereographic_South_Pole"!==a.projName&&"Polar Stereographic (variant B)"!==a.projName||(a.lat0=g(a.lat1>0?90:-90),a.lat_ts=a.lat1)}var i=.017453292519943295,j=a("./extend");b.exports=function(a,b){var c=JSON.parse((","+a).replace(/\s*\,\s*([A-Z_0-9]+?)(\[)/g,',["$1",').slice(1).replace(/\s*\,\s*([A-Z_0-9]+?)\]/g,',"$1"]').replace(/,\["VERTCS".+/,"")),d=c.shift(),f=c.shift();c.unshift(["name",f]),c.unshift(["type",d]),c.unshift("output");var g={};return e(c,g),h(g.output),j(b,g.output)}},{"./extend":34}],68:[function(a,b,c){function d(a){return a*(Math.PI/180)}function e(a){return 180*(a/Math.PI)}function f(a){var b,c,e,f,g,i,j,k,l,m=a.lat,n=a.lon,o=6378137,p=.00669438,q=.9996,r=d(m),s=d(n);l=Math.floor((n+180)/6)+1,180===n&&(l=60),m>=56&&64>m&&n>=3&&12>n&&(l=32),m>=72&&84>m&&(n>=0&&9>n?l=31:n>=9&&21>n?l=33:n>=21&&33>n?l=35:n>=33&&42>n&&(l=37)),b=6*(l-1)-180+3,k=d(b),c=p/(1-p),e=o/Math.sqrt(1-p*Math.sin(r)*Math.sin(r)),f=Math.tan(r)*Math.tan(r),g=c*Math.cos(r)*Math.cos(r),i=Math.cos(r)*(s-k),j=o*((1-p/4-3*p*p/64-5*p*p*p/256)*r-(3*p/8+3*p*p/32+45*p*p*p/1024)*Math.sin(2*r)+(15*p*p/256+45*p*p*p/1024)*Math.sin(4*r)-35*p*p*p/3072*Math.sin(6*r));var t=q*e*(i+(1-f+g)*i*i*i/6+(5-18*f+f*f+72*g-58*c)*i*i*i*i*i/120)+5e5,u=q*(j+e*Math.tan(r)*(i*i/2+(5-f+9*g+4*g*g)*i*i*i*i/24+(61-58*f+f*f+600*g-330*c)*i*i*i*i*i*i/720));return 0>m&&(u+=1e7),{northing:Math.round(u),easting:Math.round(t),zoneNumber:l,zoneLetter:h(m)}}function g(a){var b=a.northing,c=a.easting,d=a.zoneLetter,f=a.zoneNumber;if(0>f||f>60)return null;var h,i,j,k,l,m,n,o,p,q,r=.9996,s=6378137,t=.00669438,u=(1-Math.sqrt(1-t))/(1+Math.sqrt(1-t)),v=c-5e5,w=b;"N">d&&(w-=1e7),o=6*(f-1)-180+3,h=t/(1-t),n=w/r,p=n/(s*(1-t/4-3*t*t/64-5*t*t*t/256)),q=p+(3*u/2-27*u*u*u/32)*Math.sin(2*p)+(21*u*u/16-55*u*u*u*u/32)*Math.sin(4*p)+151*u*u*u/96*Math.sin(6*p),i=s/Math.sqrt(1-t*Math.sin(q)*Math.sin(q)),j=Math.tan(q)*Math.tan(q),k=h*Math.cos(q)*Math.cos(q),l=s*(1-t)/Math.pow(1-t*Math.sin(q)*Math.sin(q),1.5),m=v/(i*r);var x=q-i*Math.tan(q)/l*(m*m/2-(5+3*j+10*k-4*k*k-9*h)*m*m*m*m/24+(61+90*j+298*k+45*j*j-252*h-3*k*k)*m*m*m*m*m*m/720);x=e(x);var y=(m-(1+2*j+k)*m*m*m/6+(5-2*k+28*j-3*k*k+8*h+24*j*j)*m*m*m*m*m/120)/Math.cos(q);y=o+e(y);var z;if(a.accuracy){var A=g({northing:a.northing+a.accuracy,easting:a.easting+a.accuracy,zoneLetter:a.zoneLetter,zoneNumber:a.zoneNumber});z={top:A.lat,right:A.lon,bottom:x,left:y}}else z={lat:x,lon:y};return z}function h(a){var b="Z";return 84>=a&&a>=72?b="X":72>a&&a>=64?b="W":64>a&&a>=56?b="V":56>a&&a>=48?b="U":48>a&&a>=40?b="T":40>a&&a>=32?b="S":32>a&&a>=24?b="R":24>a&&a>=16?b="Q":16>a&&a>=8?b="P":8>a&&a>=0?b="N":0>a&&a>=-8?b="M":-8>a&&a>=-16?b="L":-16>a&&a>=-24?b="K":-24>a&&a>=-32?b="J":-32>a&&a>=-40?b="H":-40>a&&a>=-48?b="G":-48>a&&a>=-56?b="F":-56>a&&a>=-64?b="E":-64>a&&a>=-72?b="D":-72>a&&a>=-80&&(b="C"),b}function i(a,b){var c=""+a.easting,d=""+a.northing;return a.zoneNumber+a.zoneLetter+j(a.easting,a.northing,a.zoneNumber)+c.substr(c.length-5,b)+d.substr(d.length-5,b)}function j(a,b,c){var d=k(c),e=Math.floor(a/1e5),f=Math.floor(b/1e5)%20;return l(e,f,d)}function k(a){var b=a%q;return 0===b&&(b=q),b}function l(a,b,c){var d=c-1,e=r.charCodeAt(d),f=s.charCodeAt(d),g=e+a-1,h=f+b,i=!1;g>x&&(g=g-x+t-1,i=!0),(g===u||u>e&&g>u||(g>u||u>e)&&i)&&g++,(g===v||v>e&&g>v||(g>v||v>e)&&i)&&(g++,g===u&&g++),g>x&&(g=g-x+t-1),h>w?(h=h-w+t-1,i=!0):i=!1,(h===u||u>f&&h>u||(h>u||u>f)&&i)&&h++,(h===v||v>f&&h>v||(h>v||v>f)&&i)&&(h++,h===u&&h++),h>w&&(h=h-w+t-1);var j=String.fromCharCode(g)+String.fromCharCode(h);return j}function m(a){if(a&&0===a.length)throw"MGRSPoint coverting from nothing";for(var b,c=a.length,d=null,e="",f=0;!/[A-Z]/.test(b=a.charAt(f));){if(f>=2)throw"MGRSPoint bad conversion from: "+a;e+=b,f++}var g=parseInt(e,10);if(0===f||f+3>c)throw"MGRSPoint bad conversion from: "+a;var h=a.charAt(f++);if("A">=h||"B"===h||"Y"===h||h>="Z"||"I"===h||"O"===h)throw"MGRSPoint zone letter "+h+" not handled: "+a;d=a.substring(f,f+=2);for(var i=k(g),j=n(d.charAt(0),i),l=o(d.charAt(1),i);l<p(h);)l+=2e6;var m=c-f;if(m%2!==0)throw"MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters"+a;var q,r,s,t,u,v=m/2,w=0,x=0;return v>0&&(q=1e5/Math.pow(10,v),r=a.substring(f,f+v),w=parseFloat(r)*q,s=a.substring(f+v),x=parseFloat(s)*q),t=w+j,u=x+l,{easting:t,northing:u,zoneLetter:h,zoneNumber:g,accuracy:q}}function n(a,b){for(var c=r.charCodeAt(b-1),d=1e5,e=!1;c!==a.charCodeAt(0);){if(c++,c===u&&c++,c===v&&c++,c>x){if(e)throw"Bad character: "+a;c=t,e=!0}d+=1e5}return d}function o(a,b){if(a>"V")throw"MGRSPoint given invalid Northing "+a;for(var c=s.charCodeAt(b-1),d=0,e=!1;c!==a.charCodeAt(0);){if(c++,c===u&&c++,c===v&&c++,c>w){if(e)throw"Bad character: "+a;c=t,e=!0}d+=1e5}return d}function p(a){var b;switch(a){case"C":b=11e5;break;case"D":b=2e6;break;case"E":b=28e5;break;case"F":b=37e5;break;case"G":b=46e5;break;case"H":b=55e5;break;case"J":b=64e5;break;case"K":b=73e5;break;case"L":b=82e5;break;case"M":b=91e5;break;case"N":b=0;break;case"P":b=8e5;break;case"Q":b=17e5;break;case"R":b=26e5;break;case"S":b=35e5;break;case"T":b=44e5;break;case"U":b=53e5;break;case"V":b=62e5;break;case"W":b=7e6;break;case"X":b=79e5;break;default:b=-1}if(b>=0)return b;throw"Invalid zone letter: "+a}var q=6,r="AJSAJS",s="AFAFAF",t=65,u=73,v=79,w=86,x=90;c.forward=function(a,b){return b=b||5,i(f({lat:a[1],lon:a[0]}),b)},c.inverse=function(a){var b=g(m(a.toUpperCase()));return[b.left,b.bottom,b.right,b.top]},c.toPoint=function(a){var b=c.inverse(a);return[(b[2]+b[0])/2,(b[3]+b[1])/2]}},{}],69:[function(a,b,c){b.exports={name:"_mproj4_",version:"2.3.7-alpha",description:"Proj4js is a JavaScript library to transform point coordinates from one coordinate system to another, including datum transformations.",main:"lib/index.js",directories:{test:"test",doc:"docs"},scripts:{test:"./node_modules/istanbul/lib/cli.js test ./node_modules/mocha/bin/_mocha test/test.js"},repository:{type:"git",url:"git://github.com/_mproj4_js/_mproj4_js.git"},author:"",license:"MIT",jam:{main:"dist/_mproj4_.js",include:["dist/_mproj4_.js","README.md","AUTHORS","LICENSE.md"]},devDependencies:{"grunt-cli":"~0.1.13",grunt:"~0.4.2","grunt-contrib-connect":"~0.6.0","grunt-contrib-jshint":"~0.8.0",chai:"~1.8.1",mocha:"~1.17.1","grunt-mocha-phantomjs":"~0.4.0",browserify:"~3.24.5","grunt-browserify":"~1.3.0","grunt-contrib-uglify":"~0.3.2",curl:"git://github.com/cujojs/curl.git",istanbul:"~0.2.4",tin:"~0.4.0"},dependencies:{mgrs:"0.0.0"}}},{}],"./includedProjections":[function(a,b,c){b.exports=a("Pk/iAZ")},{}],"Pk/iAZ":[function(a,b,c){var d=[a("./lib/projections/tmerc"),a("./lib/projections/utm"),a("./lib/projections/sterea"),a("./lib/projections/stere"),a("./lib/projections/somerc"),a("./lib/projections/omerc"),a("./lib/projections/lcc"),a("./lib/projections/krovak"),a("./lib/projections/cass"),a("./lib/projections/laea"),a("./lib/projections/aea"),a("./lib/projections/gnom"),a("./lib/projections/cea"),a("./lib/projections/eqc"),a("./lib/projections/poly"),a("./lib/projections/nzmg"),a("./lib/projections/mill"),a("./lib/projections/sinu"),a("./lib/projections/moll"),a("./lib/projections/eqdc"),a("./lib/projections/vandg"),a("./lib/projections/aeqd"),a("./lib/projections/geocent")];b.exports=function(_mproj4_){d.forEach(function(a){_mproj4_.Proj.projections.add(a)})}},{"./lib/projections/aea":40,"./lib/projections/aeqd":41,"./lib/projections/cass":42,"./lib/projections/cea":43,"./lib/projections/eqc":44,"./lib/projections/eqdc":45,"./lib/projections/geocent":47,"./lib/projections/gnom":48,"./lib/projections/krovak":49,"./lib/projections/laea":50,"./lib/projections/lcc":51,"./lib/projections/mill":54,"./lib/projections/moll":55,"./lib/projections/nzmg":56,"./lib/projections/omerc":57,"./lib/projections/poly":58,"./lib/projections/sinu":59,"./lib/projections/somerc":60,"./lib/projections/stere":61,"./lib/projections/sterea":62,"./lib/projections/tmerc":63,"./lib/projections/utm":64,"./lib/projections/vandg":65}]},{},[36])(36)});var GeographicLib={};GeographicLib.Constants={};GeographicLib.Math={};GeographicLib.Accumulator={};(function(c){c.WGS84={a:6378137,f:1/298.257223563};c.version={major:1,minor:45,patch:0};c.version_string="1.45"})(GeographicLib.Constants);
(function(m){m.digits=53;m.epsilon=Math.pow(.5,m.digits-1);m.degree=Math.PI/180;m.sq=function(x){return x*x};m.hypot=function(x,y){var a,b;x=Math.abs(x);y=Math.abs(y);a=Math.max(x,y);b=Math.min(x,y)/(a?a:1);return a*Math.sqrt(1+b*b)};m.cbrt=function(x){var y=Math.pow(Math.abs(x),1/3);return x<0?-y:y};m.log1p=function(x){var y=1+x,z=y-1;return z===0?x:x*Math.log(y)/z};m.atanh=function(x){var y=Math.abs(x);y=m.log1p(2*y/(1-y))/2;return x<0?-y:y};m.sum=function(u,v){var s=u+v,up=s-v,vpp=s-up,t;up-=u;
vpp-=v;t=-(up+vpp);return{s:s,t:t}};m.polyval=function(N,p,s,x){var y=N<0?0:p[s++];while(--N>=0)y=y*x+p[s++];return y};m.AngRound=function(x){var z=1/16,y=Math.abs(x);y=y<z?z-(z-y):y;return x<0?0-y:y};m.AngNormalize=function(x){x=x%360;return x<-180?x+360:x<180?x:x-360};m.LatFix=function(x){return Math.abs(x)>90?Number.NaN:x};m.AngDiff=function(x,y){var r=m.sum(m.AngNormalize(x),m.AngNormalize(-y)),d=-m.AngNormalize(r.s),t=r.t;return(d==180&&t<0?-180:d)-t};m.sincosd=function(x){var r,q,s,c,sinx,cosx;
r=x%360;q=Math.floor(r/90+.5);r-=90*q;r*=this.degree;s=Math.sin(r);c=Math.cos(r);switch(q&3){case 0:sinx=s;cosx=c;break;case 1:sinx=c;cosx=0-s;break;case 2:sinx=0-s;cosx=0-c;break;default:sinx=0-c;cosx=s;break}return{s:sinx,c:cosx}};m.atan2d=function(y,x){var q=0,t,ang;if(Math.abs(y)>Math.abs(x)){t=x;x=y;y=t;q=2}if(x<0){x=-x;++q}ang=Math.atan2(y,x)/this.degree;switch(q){case 1:ang=(y>0?180:-180)-ang;break;case 2:ang=90-ang;break;case 3:ang=-90+ang;break}return ang}})(GeographicLib.Math);
(function(a,m){a.Accumulator=function(y){this.Set(y)};a.Accumulator.prototype.Set=function(y){if(!y)y=0;if(y.constructor===a.Accumulator){this._s=y._s;this._t=y._t}else{this._s=y;this._t=0}};a.Accumulator.prototype.Add=function(y){var u=m.sum(y,this._t),v=m.sum(u.s,this._s);u=u.t;this._s=v.s;this._t=v.t;if(this._s===0)this._s=u;else this._t+=u};a.Accumulator.prototype.Sum=function(y){var b;if(!y)return this._s;else{b=new a.Accumulator(this);b.Add(y);return b._s}};a.Accumulator.prototype.Negate=function(){this._s*=
-1;this._t*=-1}})(GeographicLib.Accumulator,GeographicLib.Math);GeographicLib.DMS={};
(function(d){var lookup,zerofill,InternalDecode,NumMatch,hemispheres_="SNWE",signs_="-+",digits_="0123456789",dmsindicators_="D'\":",dmsindicatorsu_="\u00b0'\"",components_=["degrees","minutes","seconds"];lookup=function(s,c){return s.indexOf(c.toUpperCase())};zerofill=function(s,n){return String("0000").substr(0,Math.max(0,Math.min(4,n-s.length)))+s};d.NONE=0;d.LATITUDE=1;d.LONGITUDE=2;d.AZIMUTH=3;d.DEGREE=0;d.MINUTE=1;d.SECOND=2;d.Decode=function(dms){var dmsa=dms,end,v=0,i=0,mi,pi,vals,ind1=d.NONE,
ind2,p,pa,pb;dmsa=dmsa.replace(/\u00b0/g,"d").replace(/\u00ba/g,"d").replace(/\u2070/g,"d").replace(/\u02da/g,"d").replace(/\u2032/g,"'").replace(/\u00b4/g,"'").replace(/\u2019/g,"'").replace(/\u2033/g,'"').replace(/\u201d/g,'"').replace(/\u2212/g,"-").replace(/''/g,'"').trim();end=dmsa.length;for(p=0;p<end;p=pb,++i){pa=p;if(i===0&&lookup(hemispheres_,dmsa.charAt(pa))>=0)++pa;if(i>0||pa<end&&lookup(signs_,dmsa.charAt(pa))>=0)++pa;mi=dmsa.substr(pa,end-pa).indexOf("-");pi=dmsa.substr(pa,end-pa).indexOf("+");
if(mi<0)mi=end;else mi+=pa;if(pi<0)pi=end;else pi+=pa;pb=Math.min(mi,pi);vals=InternalDecode(dmsa.substr(p,pb-p));v+=vals.val;ind2=vals.ind;if(ind1==d.NONE)ind1=ind2;else if(!(ind2==d.NONE||ind1==ind2))throw new Error("Incompatible hemisphere specifies in "+dmsa.substr(0,pb));}if(i===0)throw new Error("Empty or incomplete DMS string "+dmsa);return{val:v,ind:ind1}};InternalDecode=function(dmsa){var vals={},errormsg="",sign,beg,end,ind1,k,ipieces,fpieces,npiece,icurrent,fcurrent,ncurrent,p,pointseen,
digcount,intcount,x;do{sign=1;beg=0;end=dmsa.length;ind1=d.NONE;k=-1;if(end>beg&&(k=lookup(hemispheres_,dmsa.charAt(beg)))>=0){ind1=k&2?d.LONGITUDE:d.LATITUDE;sign=k&1?1:-1;++beg}if(end>beg&&(k=lookup(hemispheres_,dmsa.charAt(end-1)))>=0)if(k>=0){if(ind1!==d.NONE){if(dmsa.charAt(beg-1).toUpperCase()===dmsa.charAt(end-1).toUpperCase())errormsg="Repeated hemisphere indicators "+dmsa.charAt(beg-1)+" in "+dmsa.substr(beg-1,end-beg+1);else errormsg="Contradictory hemisphere indicators "+dmsa.charAt(beg-
1)+" and "+dmsa.charAt(end-1)+" in "+dmsa.substr(beg-1,end-beg+1);break}ind1=k&2?d.LONGITUDE:d.LATITUDE;sign=k&1?1:-1;--end}if(end>beg&&(k=lookup(signs_,dmsa.charAt(beg)))>=0)if(k>=0){sign*=k?1:-1;++beg}if(end===beg){errormsg="Empty or incomplete DMS string "+dmsa;break}ipieces=[0,0,0];fpieces=[0,0,0];npiece=0;icurrent=0;fcurrent=0;ncurrent=0;p=beg;pointseen=false;digcount=0;intcount=0;while(p<end){x=dmsa.charAt(p++);if((k=lookup(digits_,x))>=0){++ncurrent;if(digcount>0)++digcount;else{icurrent=10*
icurrent+k;++intcount}}else if(x==="."){if(pointseen){errormsg="Multiple decimal points in "+dmsa.substr(beg,end-beg);break}pointseen=true;digcount=1}else if((k=lookup(dmsindicators_,x))>=0){if(k>=3){if(p===end){errormsg="Illegal for colon to appear at the end of "+dmsa.substr(beg,end-beg);break}k=npiece}if(k===npiece-1){errormsg="Repeated "+components_[k]+" component in "+dmsa.substr(beg,end-beg);break}else if(k<npiece){errormsg=components_[k]+" component follows "+components_[npiece-1]+" component in "+
dmsa.substr(beg,end-beg);break}if(ncurrent===0){errormsg="Missing numbers in "+components_[k]+" component of "+dmsa.substr(beg,end-beg);break}if(digcount>0){fcurrent=parseFloat(dmsa.substr(p-intcount-digcount-1,intcount+digcount));icurrent=0}ipieces[k]=icurrent;fpieces[k]=icurrent+fcurrent;if(p<end){npiece=k+1;icurrent=fcurrent=0;ncurrent=digcount=intcount=0}}else if(lookup(signs_,x)>=0){errormsg="Internal sign in DMS string "+dmsa.substr(beg,end-beg);break}else{errormsg="Illegal character "+x+" in DMS string "+
dmsa.substr(beg,end-beg);break}}if(errormsg.length)break;if(lookup(dmsindicators_,dmsa.charAt(p-1))<0){if(npiece>=3){errormsg="Extra text following seconds in DMS string "+dmsa.substr(beg,end-beg);break}if(ncurrent===0){errormsg="Missing numbers in trailing component of "+dmsa.substr(beg,end-beg);break}if(digcount>0){fcurrent=parseFloat(dmsa.substr(p-intcount-digcount,intcount+digcount));icurrent=0}ipieces[npiece]=icurrent;fpieces[npiece]=icurrent+fcurrent}if(pointseen&&digcount===0){errormsg="Decimal point in non-terminal component of "+
dmsa.substr(beg,end-beg);break}if(ipieces[1]>=60||fpieces[1]>60){errormsg="Minutes "+fpieces[1]+" not in range [0,60)";break}if(ipieces[2]>=60||fpieces[2]>60){errormsg="Seconds "+fpieces[2]+" not in range [0,60)";break}vals.ind=ind1;vals.val=sign*(fpieces[2]?(60*(60*fpieces[0]+fpieces[1])+fpieces[2])/3600:fpieces[1]?(60*fpieces[0]+fpieces[1])/60:fpieces[0]);return vals}while(false);vals.val=NumMatch(dmsa);if(vals.val===0)throw new Error(errormsg);else vals.ind=d.NONE;return vals};NumMatch=function(s){var t,
sign,p0,p1;if(s.length<3)return 0;t=s.toUpperCase().replace(/0+$/,"");sign=t.charAt(0)==="-"?-1:1;p0=t.charAt(0)==="-"||t.charAt(0)==="+"?1:0;p1=t.length-1;if(p1+1<p0+3)return 0;t=t.substr(p0,p1+1-p0);if(t==="NAN"||t==="1.#QNAN"||t==="1.#SNAN"||t==="1.#IND"||t==="1.#R")return Number.NaN;else if(t==="INF"||t==="1.#INF")return sign*Number.POSITIVE_INFINITY;return 0};d.DecodeLatLon=function(stra,strb,longfirst){var vals={},valsa=d.Decode(stra),valsb=d.Decode(strb),a=valsa.val,ia=valsa.ind,b=valsb.val,
ib=valsb.ind,lat,lon;if(!longfirst)longfirst=false;if(ia===d.NONE&&ib===d.NONE){ia=longfirst?d.LONGITUDE:d.LATITUDE;ib=longfirst?d.LATITUDE:d.LONGITUDE}else if(ia===d.NONE)ia=d.LATITUDE+d.LONGITUDE-ib;else if(ib===d.NONE)ib=d.LATITUDE+d.LONGITUDE-ia;if(ia===ib)throw new Error("Both "+stra+" and "+strb+" interpreted as "+(ia===d.LATITUDE?"latitudes":"longitudes"));lat=ia===d.LATITUDE?a:b;lon=ia===d.LATITUDE?b:a;if(Math.abs(lat)>90)throw new Error("Latitude "+lat+" not in [-90,90]");vals.lat=lat;vals.lon=
lon;return vals};d.DecodeAngle=function(angstr){var vals=d.Decode(angstr),ang=vals.val,ind=vals.ind;if(ind!==d.NONE)throw new Error("Arc angle "+angstr+" includes a hemisphere N/E/W/S");return ang};d.DecodeAzimuth=function(azistr){var vals=d.Decode(azistr),azi=vals.val,ind=vals.ind;if(ind===d.LATITUDE)throw new Error("Azimuth "+azistr+" has a latitude hemisphere N/S");return azi};d.Encode=function(angle,trailing,prec,ind){var scale=1,i,sign,idegree,fdegree,f,pieces,ip,fp,s;if(!ind)ind=d.NONE;if(!isFinite(angle))return angle<
0?String("-inf"):angle>0?String("inf"):String("nan");prec=Math.min(15-2*trailing,prec);for(i=0;i<trailing;++i)scale*=60;for(i=0;i<prec;++i)scale*=10;if(ind===d.AZIMUTH)angle-=Math.floor(angle/360)*360;sign=angle<0?-1:1;angle*=sign;idegree=Math.floor(angle);fdegree=(angle-idegree)*scale+.5;f=Math.floor(fdegree);fdegree=f==fdegree&&f&1?f-1:f;fdegree/=scale;fdegree=Math.floor((angle-idegree)*scale+.5)/scale;if(fdegree>=1){idegree+=1;fdegree-=1}pieces=[fdegree,0,0];for(i=1;i<=trailing;++i){ip=Math.floor(pieces[i-
1]);fp=pieces[i-1]-ip;pieces[i]=fp*60;pieces[i-1]=ip}pieces[0]+=idegree;s="";if(ind===d.NONE&&sign<0)s+="-";switch(trailing){case d.DEGREE:s+=zerofill(pieces[0].toFixed(prec),ind===d.NONE?0:1+Math.min(ind,2)+prec+(prec?1:0))+dmsindicatorsu_.charAt(0);break;default:s+=zerofill(pieces[0].toFixed(0),ind===d.NONE?0:1+Math.min(ind,2))+dmsindicatorsu_.charAt(0);switch(trailing){case d.MINUTE:s+=zerofill(pieces[1].toFixed(prec),2+prec+(prec?1:0))+dmsindicatorsu_.charAt(1);break;case d.SECOND:s+=zerofill(pieces[1].toFixed(0),
2)+dmsindicatorsu_.charAt(1);s+=zerofill(pieces[2].toFixed(prec),2+prec+(prec?1:0))+dmsindicatorsu_.charAt(2);break;default:break}}if(ind!==d.NONE&&ind!==d.AZIMUTH)s+=hemispheres_.charAt((ind===d.LATITUDE?0:2)+(sign<0?0:1));return s}})(GeographicLib.DMS);GeographicLib.Geodesic={};GeographicLib.GeodesicLine={};GeographicLib.PolygonArea={};
(function(g,l,p,m,c){var GEOGRAPHICLIB_GEODESIC_ORDER=6,nA1_=GEOGRAPHICLIB_GEODESIC_ORDER,nA2_=GEOGRAPHICLIB_GEODESIC_ORDER,nA3_=GEOGRAPHICLIB_GEODESIC_ORDER,nA3x_=nA3_,nC3x_,nC4x_,maxit1_=20,maxit2_=maxit1_+m.digits+10,tol0_=m.epsilon,tol1_=200*tol0_,tol2_=Math.sqrt(tol0_),tolb_=tol0_*tol1_,xthresh_=1E3*tol2_,CAP_NONE=0,CAP_ALL=31,CAP_MASK=CAP_ALL,OUT_ALL=32640,Astroid,A1m1f_coeff,C1f_coeff,C1pf_coeff,A2m1f_coeff,C2f_coeff,A3_coeff,C3_coeff,C4_coeff;g.tiny_=Math.sqrt(Number.MIN_VALUE);g.nC1_=GEOGRAPHICLIB_GEODESIC_ORDER;
g.nC1p_=GEOGRAPHICLIB_GEODESIC_ORDER;g.nC2_=GEOGRAPHICLIB_GEODESIC_ORDER;g.nC3_=GEOGRAPHICLIB_GEODESIC_ORDER;g.nC4_=GEOGRAPHICLIB_GEODESIC_ORDER;nC3x_=g.nC3_*(g.nC3_-1)/2;nC4x_=g.nC4_*(g.nC4_+1)/2,g.CAP_C1=1<<0;g.CAP_C1p=1<<1;g.CAP_C2=1<<2;g.CAP_C3=1<<3;g.CAP_C4=1<<4;g.NONE=0;g.LATITUDE=1<<7|CAP_NONE;g.LONGITUDE=1<<8|g.CAP_C3;g.AZIMUTH=1<<9|CAP_NONE;g.DISTANCE=1<<10|g.CAP_C1;g.STANDARD=g.LATITUDE|g.LONGITUDE|g.AZIMUTH|g.DISTANCE;g.DISTANCE_IN=1<<11|g.CAP_C1|g.CAP_C1p;g.REDUCEDLENGTH=1<<12|g.CAP_C1|
g.CAP_C2;g.GEODESICSCALE=1<<13|g.CAP_C1|g.CAP_C2;g.AREA=1<<14|g.CAP_C4;g.ALL=OUT_ALL|CAP_ALL;g.LONG_UNROLL=1<<15;g.OUT_MASK=OUT_ALL|g.LONG_UNROLL;g.SinCosSeries=function(sinp,sinx,cosx,c){var k=c.length,n=k-(sinp?1:0),ar=2*(cosx-sinx)*(cosx+sinx),y0=n&1?c[--k]:0,y1=0;n=Math.floor(n/2);while(n--){y1=ar*y0-y1+c[--k];y0=ar*y1-y0+c[--k]}return sinp?2*sinx*cosx*y0:cosx*(y0-y1)};Astroid=function(x,y){var k,p=m.sq(x),q=m.sq(y),r=(p+q-1)/6,S,r2,r3,disc,u,T3,T,ang,v,uv,w;if(!(q===0&&r<=0)){S=p*q/4;r2=m.sq(r);
r3=r*r2;disc=S*(S+2*r3);u=r;if(disc>=0){T3=S+r3;T3+=T3<0?-Math.sqrt(disc):Math.sqrt(disc);T=m.cbrt(T3);u+=T+(T!==0?r2/T:0)}else{ang=Math.atan2(Math.sqrt(-disc),-(S+r3));u+=2*r*Math.cos(ang/3)}v=Math.sqrt(m.sq(u)+q);uv=u<0?q/(v-u):u+v;w=(uv-q)/(2*v);k=uv/(Math.sqrt(uv+m.sq(w))+w)}else k=0;return k};A1m1f_coeff=[+1,4,64,0,256];g.A1m1f=function(eps){var p=Math.floor(nA1_/2),t=m.polyval(p,A1m1f_coeff,0,m.sq(eps))/A1m1f_coeff[p+1];return(t+eps)/(1-eps)};C1f_coeff=[-1,6,-16,32,-9,64,-128,2048,+9,-16,768,
+3,-5,512,-7,1280,-7,2048];g.C1f=function(eps,c){var eps2=m.sq(eps),d=eps,o=0,l,p;for(l=1;l<=g.nC1_;++l){p=Math.floor((g.nC1_-l)/2);c[l]=d*m.polyval(p,C1f_coeff,o,eps2)/C1f_coeff[o+p+1];o+=p+2;d*=eps}};C1pf_coeff=[+205,-432,768,1536,+4005,-4736,3840,12288,-225,116,384,-7173,2695,7680,+3467,7680,+38081,61440];g.C1pf=function(eps,c){var eps2=m.sq(eps),d=eps,o=0,l,p;for(l=1;l<=g.nC1p_;++l){p=Math.floor((g.nC1p_-l)/2);c[l]=d*m.polyval(p,C1pf_coeff,o,eps2)/C1pf_coeff[o+p+1];o+=p+2;d*=eps}};A2m1f_coeff=
[-11,-28,-192,0,256];g.A2m1f=function(eps){var p=Math.floor(nA2_/2),t=m.polyval(p,A2m1f_coeff,0,m.sq(eps))/A2m1f_coeff[p+1];return(t-eps)/(1+eps)};C2f_coeff=[+1,2,16,32,+35,64,384,2048,+15,80,768,+7,35,512,+63,1280,+77,2048];g.C2f=function(eps,c){var eps2=m.sq(eps),d=eps,o=0,l,p;for(l=1;l<=g.nC2_;++l){p=Math.floor((g.nC2_-l)/2);c[l]=d*m.polyval(p,C2f_coeff,o,eps2)/C2f_coeff[o+p+1];o+=p+2;d*=eps}};g.Geodesic=function(a,f){this.a=a;this.f=f;this._f1=1-this.f;this._e2=this.f*(2-this.f);this._ep2=this._e2/
m.sq(this._f1);this._n=this.f/(2-this.f);this._b=this.a*this._f1;this._c2=(m.sq(this.a)+m.sq(this._b)*(this._e2===0?1:(this._e2>0?m.atanh(Math.sqrt(this._e2)):Math.atan(Math.sqrt(-this._e2)))/Math.sqrt(Math.abs(this._e2))))/2;this._etol2=.1*tol2_/Math.sqrt(Math.max(.001,Math.abs(this.f))*Math.min(1,1-this.f/2)/2);if(!(isFinite(this.a)&&this.a>0))throw new Error("Major radius is not positive");if(!(isFinite(this._b)&&this._b>0))throw new Error("Minor radius is not positive");this._A3x=new Array(nA3x_);
this._C3x=new Array(nC3x_);this._C4x=new Array(nC4x_);this.A3coeff();this.C3coeff();this.C4coeff()};A3_coeff=[-3,128,-2,-3,64,-1,-3,-1,16,+3,-1,-2,8,+1,-1,2,+1,1];g.Geodesic.prototype.A3coeff=function(){var o=0,k=0,j,p;for(j=nA3_-1;j>=0;--j){p=Math.min(nA3_-j-1,j);this._A3x[k++]=m.polyval(p,A3_coeff,o,this._n)/A3_coeff[o+p+1];o+=p+2}};C3_coeff=[+3,128,+2,5,128,-1,3,3,64,-1,0,1,8,-1,1,4,+5,256,+1,3,128,-3,-2,3,64,+1,-3,2,32,+7,512,-10,9,384,+5,-9,5,192,+7,512,-14,7,512,+21,2560];g.Geodesic.prototype.C3coeff=
function(){var o=0,k=0,l,j,p;for(l=1;l<g.nC3_;++l)for(j=g.nC3_-1;j>=l;--j){p=Math.min(g.nC3_-j-1,j);this._C3x[k++]=m.polyval(p,C3_coeff,o,this._n)/C3_coeff[o+p+1];o+=p+2}};C4_coeff=[+97,15015,+1088,156,45045,-224,-4784,1573,45045,-10656,14144,-4576,-858,45045,+64,624,-4576,6864,-3003,15015,+100,208,572,3432,-12012,30030,45045,+1,9009,-2944,468,135135,+5792,1040,-1287,135135,+5952,-11648,9152,-2574,135135,-64,-624,4576,-6864,3003,135135,+8,10725,+1856,-936,225225,-8448,4992,-1144,225225,-1440,4160,
-4576,1716,225225,-136,63063,+1024,-208,105105,+3584,-3328,1144,315315,-128,135135,-2560,832,405405,+128,99099];g.Geodesic.prototype.C4coeff=function(){var o=0,k=0,l,j,p;for(l=0;l<g.nC4_;++l)for(j=g.nC4_-1;j>=l;--j){p=g.nC4_-j-1;this._C4x[k++]=m.polyval(p,C4_coeff,o,this._n)/C4_coeff[o+p+1];o+=p+2}};g.Geodesic.prototype.A3f=function(eps){return m.polyval(nA3x_-1,this._A3x,0,eps)};g.Geodesic.prototype.C3f=function(eps,c){var mult=1,o=0,l,p;for(l=1;l<g.nC3_;++l){p=g.nC3_-l-1;mult*=eps;c[l]=mult*m.polyval(p,
this._C3x,o,eps);o+=p+1}};g.Geodesic.prototype.C4f=function(eps,c){var mult=1,o=0,l,p;for(l=0;l<g.nC4_;++l){p=g.nC4_-l-1;c[l]=mult*m.polyval(p,this._C4x,o,eps);o+=p+1;mult*=eps}};g.Geodesic.prototype.Lengths=function(eps,sig12,ssig1,csig1,dn1,ssig2,csig2,dn2,cbet1,cbet2,outmask,C1a,C2a){outmask&=g.OUT_MASK;var vals={},m0x=0,J12=0,A1=0,A2=0,B1,B2,l,csig12,t;if(outmask&(g.DISTANCE|g.REDUCEDLENGTH|g.GEODESICSCALE)){A1=g.A1m1f(eps);g.C1f(eps,C1a);if(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)){A2=g.A2m1f(eps);
g.C2f(eps,C2a);m0x=A1-A2;A2=1+A2}A1=1+A1}if(outmask&g.DISTANCE){B1=g.SinCosSeries(true,ssig2,csig2,C1a)-g.SinCosSeries(true,ssig1,csig1,C1a);vals.s12b=A1*(sig12+B1);if(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)){B2=g.SinCosSeries(true,ssig2,csig2,C2a)-g.SinCosSeries(true,ssig1,csig1,C2a);J12=m0x*sig12+(A1*B1-A2*B2)}}else if(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)){for(l=1;l<=g.nC2_;++l)C2a[l]=A1*C1a[l]-A2*C2a[l];J12=m0x*sig12+(g.SinCosSeries(true,ssig2,csig2,C2a)-g.SinCosSeries(true,ssig1,csig1,
C2a))}if(outmask&g.REDUCEDLENGTH){vals.m0=m0x;vals.m12b=dn2*(csig1*ssig2)-dn1*(ssig1*csig2)-csig1*csig2*J12}if(outmask&g.GEODESICSCALE){csig12=csig1*csig2+ssig1*ssig2;t=this._ep2*(cbet1-cbet2)*(cbet1+cbet2)/(dn1+dn2);vals.M12=csig12+(t*ssig2-csig2*J12)*ssig1/dn1;vals.M21=csig12-(t*ssig1-csig1*J12)*ssig2/dn2}return vals};g.Geodesic.prototype.InverseStart=function(sbet1,cbet1,dn1,sbet2,cbet2,dn2,lam12,C1a,C2a){var vals={},sbet12=sbet2*cbet1-cbet2*sbet1,cbet12=cbet2*cbet1+sbet2*sbet1,sbet12a,shortline,
omg12,sbetm2,somg12,comg12,t,ssig12,csig12,x,y,lamscale,betscale,k2,eps,cbet12a,bet12a,m12b,m0,nvals,k,omg12a;vals.sig12=-1;sbet12a=sbet2*cbet1;sbet12a+=cbet2*sbet1;shortline=cbet12>=0&&sbet12<.5&&cbet2*lam12<.5;omg12=lam12;if(shortline){sbetm2=m.sq(sbet1+sbet2);sbetm2/=sbetm2+m.sq(cbet1+cbet2);vals.dnm=Math.sqrt(1+this._ep2*sbetm2);omg12/=this._f1*vals.dnm}somg12=Math.sin(omg12);comg12=Math.cos(omg12);vals.salp1=cbet2*somg12;vals.calp1=comg12>=0?sbet12+cbet2*sbet1*m.sq(somg12)/(1+comg12):sbet12a-
cbet2*sbet1*m.sq(somg12)/(1-comg12);ssig12=m.hypot(vals.salp1,vals.calp1);csig12=sbet1*sbet2+cbet1*cbet2*comg12;if(shortline&&ssig12<this._etol2){vals.salp2=cbet1*somg12;vals.calp2=sbet12-cbet1*sbet2*(comg12>=0?m.sq(somg12)/(1+comg12):1-comg12);t=m.hypot(vals.salp2,vals.calp2);vals.salp2/=t;vals.calp2/=t;vals.sig12=Math.atan2(ssig12,csig12)}else if(Math.abs(this._n)>.1||csig12>=0||ssig12>=6*Math.abs(this._n)*Math.PI*m.sq(cbet1));else{if(this.f>=0){k2=m.sq(sbet1)*this._ep2;eps=k2/(2*(1+Math.sqrt(1+
k2))+k2);lamscale=this.f*cbet1*this.A3f(eps)*Math.PI;betscale=lamscale*cbet1;x=(lam12-Math.PI)/lamscale;y=sbet12a/betscale}else{cbet12a=cbet2*cbet1-sbet2*sbet1;bet12a=Math.atan2(sbet12a,cbet12a);nvals=this.Lengths(this._n,Math.PI+bet12a,sbet1,-cbet1,dn1,sbet2,cbet2,dn2,cbet1,cbet2,g.REDUCEDLENGTH,C1a,C2a);m12b=nvals.m12b;m0=nvals.m0;x=-1+m12b/(cbet1*cbet2*m0*Math.PI);betscale=x<-.01?sbet12a/x:-this.f*m.sq(cbet1)*Math.PI;lamscale=betscale/cbet1;y=(lam12-Math.PI)/lamscale}if(y>-tol1_&&x>-1-xthresh_)if(this.f>=
0){vals.salp1=Math.min(1,-x);vals.calp1=-Math.sqrt(1-m.sq(vals.salp1))}else{vals.calp1=Math.max(x>-tol1_?0:-1,x);vals.salp1=Math.sqrt(1-m.sq(vals.calp1))}else{k=Astroid(x,y);omg12a=lamscale*(this.f>=0?-x*k/(1+k):-y*(1+k)/k);somg12=Math.sin(omg12a);comg12=-Math.cos(omg12a);vals.salp1=cbet2*somg12;vals.calp1=sbet12a-cbet2*sbet1*m.sq(somg12)/(1-comg12)}}if(!(vals.salp1<=0)){t=m.hypot(vals.salp1,vals.calp1);vals.salp1/=t;vals.calp1/=t}else{vals.salp1=1;vals.calp1=0}return vals};g.Geodesic.prototype.Lambda12=
function(sbet1,cbet1,dn1,sbet2,cbet2,dn2,salp1,calp1,diffp,C1a,C2a,C3a){var vals={},t,salp0,calp0,somg1,comg1,somg2,comg2,omg12,B312,h0,k2,nvals;if(sbet1===0&&calp1===0)calp1=-g.tiny_;salp0=salp1*cbet1;calp0=m.hypot(calp1,salp1*sbet1);vals.ssig1=sbet1;somg1=salp0*sbet1;vals.csig1=comg1=calp1*cbet1;t=m.hypot(vals.ssig1,vals.csig1);vals.ssig1/=t;vals.csig1/=t;vals.salp2=cbet2!==cbet1?salp0/cbet2:salp1;vals.calp2=cbet2!==cbet1||Math.abs(sbet2)!==-sbet1?Math.sqrt(m.sq(calp1*cbet1)+(cbet1<-sbet1?(cbet2-
cbet1)*(cbet1+cbet2):(sbet1-sbet2)*(sbet1+sbet2)))/cbet2:Math.abs(calp1);vals.ssig2=sbet2;somg2=salp0*sbet2;vals.csig2=comg2=vals.calp2*cbet2;t=m.hypot(vals.ssig2,vals.csig2);vals.ssig2/=t;vals.csig2/=t;vals.sig12=Math.atan2(Math.max(0,vals.csig1*vals.ssig2-vals.ssig1*vals.csig2),vals.csig1*vals.csig2+vals.ssig1*vals.ssig2);omg12=Math.atan2(Math.max(0,comg1*somg2-somg1*comg2),comg1*comg2+somg1*somg2);k2=m.sq(calp0)*this._ep2;vals.eps=k2/(2*(1+Math.sqrt(1+k2))+k2);this.C3f(vals.eps,C3a);B312=g.SinCosSeries(true,
vals.ssig2,vals.csig2,C3a)-g.SinCosSeries(true,vals.ssig1,vals.csig1,C3a);h0=-this.f*this.A3f(vals.eps);vals.domg12=salp0*h0*(vals.sig12+B312);vals.lam12=omg12+vals.domg12;if(diffp)if(vals.calp2===0)vals.dlam12=-2*this._f1*dn1/sbet1;else{nvals=this.Lengths(vals.eps,vals.sig12,vals.ssig1,vals.csig1,dn1,vals.ssig2,vals.csig2,dn2,cbet1,cbet2,g.REDUCEDLENGTH,C1a,C2a);vals.dlam12=nvals.m12b;vals.dlam12*=this._f1/(vals.calp2*cbet2)}return vals};g.Geodesic.prototype.Inverse=function(lat1,lon1,lat2,lon2,
outmask){var vals={},lon12,lonsign,t,swapp,latsign,sbet1,cbet1,sbet2,cbet2,s12x,m12x,dn1,dn2,lam12,slam12,clam12,sig12,calp1,salp1,calp2,salp2,C1a,C2a,C3a,meridian,nvals,ssig1,csig1,ssig2,csig2,eps,omg12,dnm,numit,salp1a,calp1a,salp1b,calp1b,tripn,tripb,v,dv,dalp1,sdalp1,cdalp1,nsalp1,lengthmask,salp0,calp0,alp12,k2,A4,C4a,B41,B42,somg12,domg12,dbet1,dbet2,salp12,calp12;if(!outmask)outmask=g.STANDARD;if(outmask==g.LONG_UNROLL)outmask|=g.STANDARD;outmask&=g.OUT_MASK;vals.lat1=lat1=m.LatFix(lat1);vals.lat2=
lat2=m.LatFix(lat2);lon12=m.AngDiff(lon1,lon2);if(outmask&g.LONG_UNROLL){vals.lon1=lon1;vals.lon2=lon1+lon12}else{vals.lon1=m.AngNormalize(lon1);vals.lon2=m.AngNormalize(lon2)}lon12=m.AngRound(lon12);lonsign=lon12>=0?1:-1;lon12*=lonsign;lat1=m.AngRound(lat1);lat2=m.AngRound(lat2);swapp=Math.abs(lat1)<Math.abs(lat2)?-1:1;if(swapp<0){lonsign*=-1;t=lat1;lat1=lat2;lat2=t}latsign=lat1<0?1:-1;lat1*=latsign;lat2*=latsign;t=m.sincosd(lat1);sbet1=this._f1*t.s;cbet1=t.c;t=m.hypot(sbet1,cbet1);sbet1/=t;cbet1/=
t;cbet1=Math.max(g.tiny_,cbet1);t=m.sincosd(lat2);sbet2=this._f1*t.s;cbet2=t.c;t=m.hypot(sbet2,cbet2);sbet2/=t;cbet2/=t;cbet2=Math.max(g.tiny_,cbet2);if(cbet1<-sbet1){if(cbet2===cbet1)sbet2=sbet2<0?sbet1:-sbet1}else if(Math.abs(sbet2)===-sbet1)cbet2=cbet1;dn1=Math.sqrt(1+this._ep2*m.sq(sbet1));dn2=Math.sqrt(1+this._ep2*m.sq(sbet2));lam12=lon12*m.degree;t=m.sincosd(lon12);slam12=t.s;clam12=t.c;C1a=new Array(g.nC1_+1);C2a=new Array(g.nC2_+1);C3a=new Array(g.nC3_);meridian=lat1===-90||slam12===0;if(meridian){calp1=
clam12;salp1=slam12;calp2=1;salp2=0;ssig1=sbet1;csig1=calp1*cbet1;ssig2=sbet2;csig2=calp2*cbet2;sig12=Math.atan2(Math.max(0,csig1*ssig2-ssig1*csig2),csig1*csig2+ssig1*ssig2);nvals=this.Lengths(this._n,sig12,ssig1,csig1,dn1,ssig2,csig2,dn2,cbet1,cbet2,outmask|g.DISTANCE|g.REDUCEDLENGTH,C1a,C2a);s12x=nvals.s12b;m12x=nvals.m12b;if((outmask&g.GEODESICSCALE)!==0){vals.M12=nvals.M12;vals.M21=nvals.M21}if(sig12<1||m12x>=0){if(sig12<3*g.tiny_)sig12=m12x=s12x=0;m12x*=this._b;s12x*=this._b;vals.a12=sig12/m.degree}else meridian=
false}if(!meridian&&sbet1===0&&(this.f<=0||lam12<=Math.PI-this.f*Math.PI)){calp1=calp2=0;salp1=salp2=1;s12x=this.a*lam12;sig12=omg12=lam12/this._f1;m12x=this._b*Math.sin(sig12);if(outmask&g.GEODESICSCALE)vals.M12=vals.M21=Math.cos(sig12);vals.a12=lon12/this._f1}else if(!meridian){nvals=this.InverseStart(sbet1,cbet1,dn1,sbet2,cbet2,dn2,lam12,C1a,C2a);sig12=nvals.sig12;salp1=nvals.salp1;calp1=nvals.calp1;if(sig12>=0){salp2=nvals.salp2;calp2=nvals.calp2;dnm=nvals.dnm;s12x=sig12*this._b*dnm;m12x=m.sq(dnm)*
this._b*Math.sin(sig12/dnm);if(outmask&g.GEODESICSCALE)vals.M12=vals.M21=Math.cos(sig12/dnm);vals.a12=sig12/m.degree;omg12=lam12/(this._f1*dnm)}else{numit=0;salp1a=g.tiny_;calp1a=1;salp1b=g.tiny_;calp1b=-1;for(tripn=false,tripb=false;numit<maxit2_;++numit){nvals=this.Lambda12(sbet1,cbet1,dn1,sbet2,cbet2,dn2,salp1,calp1,numit<maxit1_,C1a,C2a,C3a);v=nvals.lam12-lam12;salp2=nvals.salp2;calp2=nvals.calp2;sig12=nvals.sig12;ssig1=nvals.ssig1;csig1=nvals.csig1;ssig2=nvals.ssig2;csig2=nvals.csig2;eps=nvals.eps;
omg12=nvals.domg12;dv=nvals.dlam12;if(tripb||!(Math.abs(v)>=(tripn?8:2)*tol0_))break;if(v>0&&(numit<maxit1_||calp1/salp1>calp1b/salp1b)){salp1b=salp1;calp1b=calp1}else if(v<0&&(numit<maxit1_||calp1/salp1<calp1a/salp1a)){salp1a=salp1;calp1a=calp1}if(numit<maxit1_&&dv>0){dalp1=-v/dv;sdalp1=Math.sin(dalp1);cdalp1=Math.cos(dalp1);nsalp1=salp1*cdalp1+calp1*sdalp1;if(nsalp1>0&&Math.abs(dalp1)<Math.PI){calp1=calp1*cdalp1-salp1*sdalp1;salp1=nsalp1;t=m.hypot(salp1,calp1);salp1/=t;calp1/=t;tripn=Math.abs(v)<=
16*tol0_;continue}}salp1=(salp1a+salp1b)/2;calp1=(calp1a+calp1b)/2;t=m.hypot(salp1,calp1);salp1/=t;calp1/=t;tripn=false;tripb=Math.abs(salp1a-salp1)+(calp1a-calp1)<tolb_||Math.abs(salp1-salp1b)+(calp1-calp1b)<tolb_}lengthmask=outmask|(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)?g.DISTANCE:g.NONE);nvals=this.Lengths(eps,sig12,ssig1,csig1,dn1,ssig2,csig2,dn2,cbet1,cbet2,lengthmask,C1a,C2a);s12x=nvals.s12b;m12x=nvals.m12b;if((outmask&g.GEODESICSCALE)!==0){vals.M12=nvals.M12;vals.M21=nvals.M21}m12x*=this._b;
s12x*=this._b;vals.a12=sig12/m.degree;omg12=lam12-omg12}}if(outmask&g.DISTANCE)vals.s12=0+s12x;if(outmask&g.REDUCEDLENGTH)vals.m12=0+m12x;if(outmask&g.AREA){salp0=salp1*cbet1;calp0=m.hypot(calp1,salp1*sbet1);if(calp0!==0&&salp0!==0){ssig1=sbet1;csig1=calp1*cbet1;ssig2=sbet2;csig2=calp2*cbet2;k2=m.sq(calp0)*this._ep2;eps=k2/(2*(1+Math.sqrt(1+k2))+k2);A4=m.sq(this.a)*calp0*salp0*this._e2;t=m.hypot(ssig1,csig1);ssig1/=t;csig1/=t;t=m.hypot(ssig2,csig2);ssig2/=t;csig2/=t;C4a=new Array(g.nC4_);this.C4f(eps,
C4a);B41=g.SinCosSeries(false,ssig1,csig1,C4a);B42=g.SinCosSeries(false,ssig2,csig2,C4a);vals.S12=A4*(B42-B41)}else vals.S12=0;if(!meridian&&omg12<.75*Math.PI&&sbet2-sbet1<1.75){somg12=Math.sin(omg12);domg12=1+Math.cos(omg12);dbet1=1+cbet1;dbet2=1+cbet2;alp12=2*Math.atan2(somg12*(sbet1*dbet2+sbet2*dbet1),domg12*(sbet1*sbet2+dbet1*dbet2))}else{salp12=salp2*calp1-calp2*salp1;calp12=calp2*calp1+salp2*salp1;if(salp12===0&&calp12<0){salp12=g.tiny_*calp1;calp12=-1}alp12=Math.atan2(salp12,calp12)}vals.S12+=
this._c2*alp12;vals.S12*=swapp*lonsign*latsign;vals.S12+=0}if(swapp<0){t=salp1;salp1=salp2;salp2=t;t=calp1;calp1=calp2;calp2=t;if(outmask&g.GEODESICSCALE){t=vals.M12;vals.M12=vals.M21;vals.M21=t}}salp1*=swapp*lonsign;calp1*=swapp*latsign;salp2*=swapp*lonsign;calp2*=swapp*latsign;if(outmask&g.AZIMUTH){vals.azi1=m.atan2d(salp1,calp1);vals.azi2=m.atan2d(salp2,calp2)}return vals};g.Geodesic.prototype.GenDirect=function(lat1,lon1,azi1,arcmode,s12_a12,outmask){var line;if(!outmask)outmask=g.STANDARD;else if(outmask==
g.LONG_UNROLL)outmask|=g.STANDARD;line=new l.GeodesicLine(this,lat1,lon1,azi1,outmask|(arcmode?g.NONE:g.DISTANCE_IN));return line.GenPosition(arcmode,s12_a12,outmask)};g.Geodesic.prototype.Direct=function(lat1,lon1,azi1,s12,outmask){return this.GenDirect(lat1,lon1,azi1,false,s12,outmask)};g.Geodesic.prototype.ArcDirect=function(lat1,lon1,azi1,a12,outmask){return this.GenDirect(lat1,lon1,azi1,true,a12,outmask)};g.Geodesic.prototype.Line=function(lat1,lon1,azi1,caps){return new l.GeodesicLine(this,
lat1,lon1,azi1,caps)};g.Geodesic.prototype.Polygon=function(polyline){return new p.PolygonArea(this,polyline)};g.WGS84=new g.Geodesic(c.WGS84.a,c.WGS84.f)})(GeographicLib.Geodesic,GeographicLib.GeodesicLine,GeographicLib.PolygonArea,GeographicLib.Math,GeographicLib.Constants);
(function(g,l,m){l.GeodesicLine=function(geod,lat1,lon1,azi1,caps){var t,cbet1,sbet1,eps,s,c;if(!caps)caps=g.STANDARD|g.DISTANCE_IN;this.a=geod.a;this.f=geod.f;this._b=geod._b;this._c2=geod._c2;this._f1=geod._f1;this._caps=(!caps?g.ALL:caps|g.LATITUDE|g.AZIMUTH)|g.LONG_UNROLL;this.lat1=m.LatFix(lat1);this.lon1=lon1;this.azi1=m.AngNormalize(azi1);t=m.sincosd(m.AngRound(this.azi1));this._salp1=t.s;this._calp1=t.c;t=m.sincosd(m.AngRound(this.lat1));sbet1=this._f1*t.s;cbet1=t.c;t=m.hypot(sbet1,cbet1);
sbet1/=t;cbet1/=t;cbet1=Math.max(g.tiny_,cbet1);this._dn1=Math.sqrt(1+geod._ep2*m.sq(sbet1));this._salp0=this._salp1*cbet1;this._calp0=m.hypot(this._calp1,this._salp1*sbet1);this._ssig1=sbet1;this._somg1=this._salp0*sbet1;this._csig1=this._comg1=sbet1!==0||this._calp1!==0?cbet1*this._calp1:1;t=m.hypot(this._ssig1,this._csig1);this._ssig1/=t;this._csig1/=t;this._k2=m.sq(this._calp0)*geod._ep2;eps=this._k2/(2*(1+Math.sqrt(1+this._k2))+this._k2);if(this._caps&g.CAP_C1){this._A1m1=g.A1m1f(eps);this._C1a=
new Array(g.nC1_+1);g.C1f(eps,this._C1a);this._B11=g.SinCosSeries(true,this._ssig1,this._csig1,this._C1a);s=Math.sin(this._B11);c=Math.cos(this._B11);this._stau1=this._ssig1*c+this._csig1*s;this._ctau1=this._csig1*c-this._ssig1*s}if(this._caps&g.CAP_C1p){this._C1pa=new Array(g.nC1p_+1);g.C1pf(eps,this._C1pa)}if(this._caps&g.CAP_C2){this._A2m1=g.A2m1f(eps);this._C2a=new Array(g.nC2_+1);g.C2f(eps,this._C2a);this._B21=g.SinCosSeries(true,this._ssig1,this._csig1,this._C2a)}if(this._caps&g.CAP_C3){this._C3a=
new Array(g.nC3_);geod.C3f(eps,this._C3a);this._A3c=-this.f*this._salp0*geod.A3f(eps);this._B31=g.SinCosSeries(true,this._ssig1,this._csig1,this._C3a)}if(this._caps&g.CAP_C4){this._C4a=new Array(g.nC4_);geod.C4f(eps,this._C4a);this._A4=m.sq(this.a)*this._calp0*this._salp0*geod._e2;this._B41=g.SinCosSeries(false,this._ssig1,this._csig1,this._C4a)}};l.GeodesicLine.prototype.GenPosition=function(arcmode,s12_a12,outmask){var vals={},sig12,ssig12,csig12,B12,AB1,ssig2,csig2,tau12,s,c,serr,omg12,lam12,lon12,
E,sbet2,cbet2,somg2,comg2,salp2,calp2,dn2,B22,AB2,J12,t,B42,salp12,calp12;if(!outmask)outmask=g.STANDARD;else if(outmask==g.LONG_UNROLL)outmask|=g.STANDARD;outmask&=this._caps&g.OUT_MASK;vals.lat1=this.lat1;vals.azi1=this.azi1;vals.lon1=outmask&g.LONG_UNROLL?this.lon1:m.AngNormalize(this.lon1);if(arcmode)vals.a12=s12_a12;else vals.s12=s12_a12;if(!(arcmode||this._caps&g.DISTANCE_IN&g.OUT_MASK)){vals.a12=Number.NaN;return vals}B12=0;AB1=0;if(arcmode){sig12=s12_a12*m.degree;t=m.sincosd(s12_a12);ssig12=
t.s;csig12=t.c}else{tau12=s12_a12/(this._b*(1+this._A1m1));s=Math.sin(tau12);c=Math.cos(tau12);B12=-g.SinCosSeries(true,this._stau1*c+this._ctau1*s,this._ctau1*c-this._stau1*s,this._C1pa);sig12=tau12-(B12-this._B11);ssig12=Math.sin(sig12);csig12=Math.cos(sig12);if(Math.abs(this.f)>.01){ssig2=this._ssig1*csig12+this._csig1*ssig12;csig2=this._csig1*csig12-this._ssig1*ssig12;B12=g.SinCosSeries(true,ssig2,csig2,this._C1a);serr=(1+this._A1m1)*(sig12+(B12-this._B11))-s12_a12/this._b;sig12=sig12-serr/Math.sqrt(1+
this._k2*m.sq(ssig2));ssig12=Math.sin(sig12);csig12=Math.cos(sig12)}}ssig2=this._ssig1*csig12+this._csig1*ssig12;csig2=this._csig1*csig12-this._ssig1*ssig12;dn2=Math.sqrt(1+this._k2*m.sq(ssig2));if(outmask&(g.DISTANCE|g.REDUCEDLENGTH|g.GEODESICSCALE)){if(arcmode||Math.abs(this.f)>.01)B12=g.SinCosSeries(true,ssig2,csig2,this._C1a);AB1=(1+this._A1m1)*(B12-this._B11)}sbet2=this._calp0*ssig2;cbet2=m.hypot(this._salp0,this._calp0*csig2);if(cbet2===0)cbet2=csig2=g.tiny_;salp2=this._salp0;calp2=this._calp0*
csig2;if(arcmode&&outmask&g.DISTANCE)vals.s12=this._b*((1+this._A1m1)*sig12+AB1);if(outmask&g.LONGITUDE){somg2=this._salp0*ssig2;comg2=csig2;E=this._salp0<0?-1:1;omg12=outmask&g.LONG_UNROLL?E*(sig12-(Math.atan2(ssig2,csig2)-Math.atan2(this._ssig1,this._csig1))+(Math.atan2(E*somg2,comg2)-Math.atan2(E*this._somg1,this._comg1))):Math.atan2(somg2*this._comg1-comg2*this._somg1,comg2*this._comg1+somg2*this._somg1);lam12=omg12+this._A3c*(sig12+(g.SinCosSeries(true,ssig2,csig2,this._C3a)-this._B31));lon12=
lam12/m.degree;vals.lon2=outmask&g.LONG_UNROLL?this.lon1+lon12:m.AngNormalize(m.AngNormalize(this.lon1)+m.AngNormalize(lon12))}if(outmask&g.LATITUDE)vals.lat2=m.atan2d(sbet2,this._f1*cbet2);if(outmask&g.AZIMUTH)vals.azi2=m.atan2d(salp2,calp2);if(outmask&(g.REDUCEDLENGTH|g.GEODESICSCALE)){B22=g.SinCosSeries(true,ssig2,csig2,this._C2a);AB2=(1+this._A2m1)*(B22-this._B21);J12=(this._A1m1-this._A2m1)*sig12+(AB1-AB2);if(outmask&g.REDUCEDLENGTH)vals.m12=this._b*(dn2*(this._csig1*ssig2)-this._dn1*(this._ssig1*
csig2)-this._csig1*csig2*J12);if(outmask&g.GEODESICSCALE){t=this._k2*(ssig2-this._ssig1)*(ssig2+this._ssig1)/(this._dn1+dn2);vals.M12=csig12+(t*ssig2-csig2*J12)*this._ssig1/this._dn1;vals.M21=csig12-(t*this._ssig1-this._csig1*J12)*ssig2/dn2}}if(outmask&g.AREA){B42=g.SinCosSeries(false,ssig2,csig2,this._C4a);if(this._calp0===0||this._salp0===0){salp12=salp2*this._calp1-calp2*this._salp1;calp12=calp2*this._calp1+salp2*this._salp1;if(salp12===0&&calp12<0){salp12=g.tiny_*this._calp1;calp12=-1}}else{salp12=
this._calp0*this._salp0*(csig12<=0?this._csig1*(1-csig12)+ssig12*this._ssig1:ssig12*(this._csig1*ssig12/(1+csig12)+this._ssig1));calp12=m.sq(this._salp0)+m.sq(this._calp0)*this._csig1*csig2}vals.S12=this._c2*Math.atan2(salp12,calp12)+this._A4*(B42-this._B41)}if(!arcmode)vals.a12=sig12/m.degree;return vals};l.GeodesicLine.prototype.Position=function(s12,outmask){return this.GenPosition(false,s12,outmask)};l.GeodesicLine.prototype.ArcPosition=function(a12,outmask){return this.GenPosition(true,a12,outmask)}})(GeographicLib.Geodesic,
GeographicLib.GeodesicLine,GeographicLib.Math);
(function(p,g,m,a){var transit,transitdirect;transit=function(lon1,lon2){var lon12,cross;lon1=m.AngNormalize(lon1);lon2=m.AngNormalize(lon2);lon12=m.AngDiff(lon1,lon2);cross=lon1<0&&lon2>=0&&lon12>0?1:lon2<0&&lon1>=0&&lon12<0?-1:0;return cross};transitdirect=function(lon1,lon2){lon1=lon1%720;lon2=lon2%720;return(lon2>=0&&lon2<360||lon2<-360?0:1)-(lon1>=0&&lon1<360||lon1<-360?0:1)};p.PolygonArea=function(geod,polyline){this._geod=geod;this.a=this._geod.a;this.f=this._geod.f;this._area0=4*Math.PI*geod._c2;
this.polyline=!polyline?false:polyline;this._mask=g.LATITUDE|g.LONGITUDE|g.DISTANCE|(this.polyline?g.NONE:g.AREA|g.LONG_UNROLL);if(!this.polyline)this._areasum=new a.Accumulator(0);this._perimetersum=new a.Accumulator(0);this.Clear()};p.PolygonArea.prototype.Clear=function(){this.num=0;this._crossings=0;if(!this.polyline)this._areasum.Set(0);this._perimetersum.Set(0);this._lat0=this._lon0=this.lat=this.lon=Number.NaN};p.PolygonArea.prototype.AddPoint=function(lat,lon){var t;if(this.num===0){this._lat0=
this.lat=lat;this._lon0=this.lon=lon}else{t=this._geod.Inverse(this.lat,this.lon,lat,lon,this._mask);this._perimetersum.Add(t.s12);if(!this.polyline){this._areasum.Add(t.S12);this._crossings+=transit(this.lon,lon)}this.lat=lat;this.lon=lon}++this.num};p.PolygonArea.prototype.AddEdge=function(azi,s){var t;if(this.num){t=this._geod.Direct(this.lat,this.lon,azi,s,this._mask);this._perimetersum.Add(s);if(!this.polyline){this._areasum.Add(t.S12);this._crossings+=transitdirect(this.lon,t.lon2)}this.lat=
t.lat2;this.lon=t.lon2}++this.num};p.PolygonArea.prototype.Compute=function(reverse,sign){var vals={number:this.num},t,tempsum,crossings;if(this.num<2){vals.perimeter=0;if(!this.polyline)vals.area=0;return vals}if(this.polyline){vals.perimeter=this._perimetersum.Sum();return vals}t=this._geod.Inverse(this.lat,this.lon,this._lat0,this._lon0,this._mask);vals.perimeter=this._perimetersum.Sum(t.s12);tempsum=new a.Accumulator(this._areasum);tempsum.Add(t.S12);crossings=this._crossings+transit(this.lon,
this._lon0);if(crossings&1)tempsum.Add((tempsum.Sum()<0?1:-1)*this._area0/2);if(!reverse)tempsum.Negate();if(sign)if(tempsum.Sum()>this._area0/2)tempsum.Add(-this._area0);else{if(tempsum.Sum()<=-this._area0/2)tempsum.Add(+this._area0)}else if(tempsum.Sum()>=this._area0)tempsum.Add(-this._area0);else if(tempsum<0)tempsum.Add(-this._area0);vals.area=tempsum.Sum();return vals};p.PolygonArea.prototype.TestPoint=function(lat,lon,reverse,sign){var vals={number:this.num+1},t,tempsum,crossings,i;if(this.num===
0){vals.perimeter=0;if(!this.polyline)vals.area=0;return vals}vals.perimeter=this._perimetersum.Sum();tempsum=this.polyline?0:this._areasum.Sum();crossings=this._crossings;for(i=0;i<(this.polyline?1:2);++i){t=this._geod.Inverse(i===0?this.lat:lat,i===0?this.lon:lon,i!==0?this._lat0:lat,i!==0?this._lon0:lon,this._mask);vals.perimeter+=t.s12;if(!this.polyline){tempsum+=t.S12;crossings+=transit(i===0?this.lon:lon,i!==0?this._lon0:lon)}}if(this.polyline)return vals;if(crossings&1)tempsum+=(tempsum<0?
1:-1)*this._area0/2;if(!reverse)tempsum*=-1;if(sign)if(tempsum>this._area0/2)tempsum-=this._area0;else{if(tempsum<=-this._area0/2)tempsum+=this._area0}else if(tempsum>=this._area0)tempsum-=this._area0;else if(tempsum<0)tempsum+=this._area0;vals.area=tempsum;return vals};p.PolygonArea.prototype.TestEdge=function(azi,s,reverse,sign){var vals={number:this.num?this.num+1:0},t,tempsump,crossings;if(this.num===0)return vals;vals.perimeter=this._perimetersum.Sum()+s;if(this.polyline)return vals;tempsum=
this._areasum.Sum();crossings=this._crossings;t=this._geod.Direct(this.lat,this.lon,azi,s,this._mask);tempsum+=t.S12;crossings+=transitdirect(this.lon,t.lon2);t=this._geod(t.lat2,t.lon2,this._lat0,this._lon0,this._mask);perimeter+=t.s12;tempsum+=t.S12;crossings+=transit(t.lon2,this._lon0);if(crossings&1)tempsum+=(tempsum<0?1:-1)*this._area0/2;if(!reverse)tempsum*=-1;if(sign)if(tempsum>this._area0/2)tempsum-=this._area0;else{if(tempsum<=-this._area0/2)tempsum+=this._area0}else if(tempsum>=this._area0)tempsum-=
this._area0;else if(tempsum<0)tempsum+=this._area0;vals.area=tempsum;return vals}})(GeographicLib.PolygonArea,GeographicLib.Geodesic,GeographicLib.Math,GeographicLib.Accumulator);window["GeographicLib"]=GeographicLib;window["GeographicLib"]["Geodesic"]=GeographicLib.Geodesic;window["GeographicLib"]["Geodesic"]["Geodesic"]=GeographicLib.Geodesic.Geodesic;var h,s={};window.Melown=s;window.ga=null!=window.ga?window.ga:{};window.MelownMap_=null!=window.MelownMap_?window.MelownMap_:null;window.Q=null!=window.Q?window.Q:{};s.dd=Array;s.qn={};s.qn.create=function(a){var b=new s.dd(2);a&&(b[0]=a[0],b[1]=a[1]);return b};s.sf={};s.sf.create=function(a){var b=new s.dd(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};s.sf.hb=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};s.s={};s.s.create=function(a){var b=new s.dd(3);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2]);return b};s.s.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};
s.s.add=function(a,b,c){if(!c||a==c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};s.s.qo=function(a,b,c){if(!c||a==c)return a[0]-=b[0],a[1]-=b[1],a[2]-=b[2],a;c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};s.s.eo=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};s.s.scale=function(a,b,c){if(!c||a==c)return a[0]*=b,a[1]*=b,a[2]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
s.s.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(1==g)return b[0]=c,b[1]=d,b[2]=e,b}else return b[0]=0,b[1]=0,b[2]=0,b;g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};s.s.Gf=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var g=b[0],f=b[1];b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};s.s.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};s.s.hb=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
s.s.po=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return c*c+d*d+e*e};s.s.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};s.s.Vn=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};s.s.bh=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};s.Jb={};
s.Jb.create=function(a){var b=new s.dd(9);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9]);return b};s.Jb.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};s.Jb.G=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
s.Jb.Xb=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};s.Jb.gn=function(a,b){b||(b=s.f.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
s.Jb.bh=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};s.f={};s.f.create=function(a){var b=new s.dd(16);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]);return b};
s.f.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};s.f.G=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
s.f.Xb=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],k=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=k;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
s.f.In=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],k=a[6],l=a[7],m=a[8],p=a[9],n=a[10],q=a[11],t=a[12],r=a[13],u=a[14];a=a[15];return t*p*k*e-m*r*k*e-t*f*n*e+g*r*n*e+m*f*u*e-g*p*u*e-t*p*d*l+m*r*d*l+t*c*n*l-b*r*n*l-m*c*u*l+b*p*u*l+t*f*d*q-g*r*d*q-t*c*k*q+b*r*k*q+g*c*u*q-b*f*u*q-m*f*d*a+g*p*d*a+m*c*k*a-b*p*k*a-g*c*n*a+b*f*n*a};
s.f.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],k=a[5],l=a[6],m=a[7],p=a[8],n=a[9],q=a[10],t=a[11],r=a[12],u=a[13],C=a[14],P=a[15],F=c*k-d*f,E=c*l-e*f,H=c*m-g*f,D=d*l-e*k,I=d*m-g*k,M=e*m-g*l,Y=p*u-n*r,A=p*C-q*r,R=p*P-t*r,ka=n*C-q*u,Ba=n*P-t*u,Ca=q*P-t*C,ca=1/(F*Ca-E*Ba+H*ka+D*R-I*A+M*Y);b[0]=(k*Ca-l*Ba+m*ka)*ca;b[1]=(-d*Ca+e*Ba-g*ka)*ca;b[2]=(u*M-C*I+P*D)*ca;b[3]=(-n*M+q*I-t*D)*ca;b[4]=(-f*Ca+l*R-m*A)*ca;b[5]=(c*Ca-e*R+g*A)*ca;b[6]=(-r*M+C*H-P*E)*ca;b[7]=(p*M-q*H+t*E)*ca;
b[8]=(f*Ba-k*R+m*Y)*ca;b[9]=(-c*Ba+d*R-g*Y)*ca;b[10]=(r*I-u*H+P*F)*ca;b[11]=(-p*I+n*H-t*F)*ca;b[12]=(-f*ka+k*A-l*Y)*ca;b[13]=(c*ka-d*A+e*Y)*ca;b[14]=(-r*D+u*E-C*F)*ca;b[15]=(p*D-n*E+q*F)*ca;return b};s.f.uo=function(a,b){b||(b=s.f.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
s.f.dj=function(a,b){b||(b=s.Jb.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};s.f.fn=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],k=a[6],l=a[8],m=a[9],p=a[10],n=p*f-k*m,q=-p*g+k*l,t=m*g-f*l,r=c*n+d*q+e*t;if(!r)return null;r=1/r;b||(b=s.Jb.create());b[0]=n*r;b[1]=(-p*d+e*m)*r;b[2]=(k*d-e*f)*r;b[3]=q*r;b[4]=(p*c-e*l)*r;b[5]=(-k*c+e*g)*r;b[6]=t*r;b[7]=(-m*c+d*l)*r;b[8]=(f*c-d*g)*r;return b};
s.f.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],k=a[4],l=a[5],m=a[6],p=a[7],n=a[8],q=a[9],t=a[10],r=a[11],u=a[12],C=a[13],P=a[14];a=a[15];var F=b[0],E=b[1],H=b[2],D=b[3],I=b[4],M=b[5],Y=b[6],A=b[7],R=b[8],ka=b[9],Ba=b[10],Ca=b[11],ca=b[12],qb=b[13],rb=b[14];b=b[15];c[0]=F*d+E*k+H*n+D*u;c[1]=F*e+E*l+H*q+D*C;c[2]=F*g+E*m+H*t+D*P;c[3]=F*f+E*p+H*r+D*a;c[4]=I*d+M*k+Y*n+A*u;c[5]=I*e+M*l+Y*q+A*C;c[6]=I*g+M*m+Y*t+A*P;c[7]=I*f+M*p+Y*r+A*a;c[8]=R*d+ka*k+Ba*n+Ca*u;c[9]=R*e+ka*l+Ba*q+Ca*
C;c[10]=R*g+ka*m+Ba*t+Ca*P;c[11]=R*f+ka*p+Ba*r+Ca*a;c[12]=ca*d+qb*k+rb*n+b*u;c[13]=ca*e+qb*l+rb*q+b*C;c[14]=ca*g+qb*m+rb*t+b*P;c[15]=ca*f+qb*p+rb*r+b*a;return c};s.f.va=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
s.f.bf=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};
s.f.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c)return a[12]=a[0]*d+a[4]*e+a[8]*b+a[12],a[13]=a[1]*d+a[5]*e+a[9]*b+a[13],a[14]=a[2]*d+a[6]*e+a[10]*b+a[14],a[15]=a[3]*d+a[7]*e+a[11]*b+a[15],a;var g=a[0],f=a[1],k=a[2],l=a[3],m=a[4],p=a[5],n=a[6],q=a[7],t=a[8],r=a[9],u=a[10],C=a[11];c[0]=g;c[1]=f;c[2]=k;c[3]=l;c[4]=m;c[5]=p;c[6]=n;c[7]=q;c[8]=t;c[9]=r;c[10]=u;c[11]=C;c[12]=g*d+m*e+t*b+a[12];c[13]=f*d+p*e+r*b+a[13];c[14]=k*d+n*e+u*b+a[14];c[15]=l*d+q*e+C*b+a[15];return c};
s.f.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c)return a[0]*=d,a[1]*=d,a[2]*=d,a[3]*=d,a[4]*=e,a[5]*=e,a[6]*=e,a[7]*=e,a[8]*=b,a[9]*=b,a[10]*=b,a[11]*=b,a;c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
s.f.rotate=function(a,b,c,d){var e=c[0],g=c[1];c=c[2];var f=Math.sqrt(e*e+g*g+c*c);if(!f)return null;1!=f&&(f=1/f,e*=f,g*=f,c*=f);var k=Math.sin(b),l=Math.cos(b),m=1-l;b=a[0];var f=a[1],p=a[2],n=a[3],q=a[4],t=a[5],r=a[6],u=a[7],C=a[8],P=a[9],F=a[10],E=a[11],H=e*e*m+l,D=g*e*m+c*k,I=c*e*m-g*k,M=e*g*m-c*k,Y=g*g*m+l,A=c*g*m+e*k,R=e*c*m+g*k,e=g*c*m-e*k,g=c*c*m+l;d?a!=d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]):d=a;d[0]=b*H+q*D+C*I;d[1]=f*H+t*D+P*I;d[2]=p*H+r*D+F*I;d[3]=n*H+u*D+E*I;d[4]=b*M+q*
Y+C*A;d[5]=f*M+t*Y+P*A;d[6]=p*M+r*Y+F*A;d[7]=n*M+u*Y+E*A;d[8]=b*R+q*e+C*g;d[9]=f*R+t*e+P*g;d[10]=p*R+r*e+F*g;d[11]=n*R+u*e+E*g;return d};s.f.lo=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],g=a[5],f=a[6],k=a[7],l=a[8],m=a[9],p=a[10],n=a[11];c?a!=c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[4]=e*b+l*d;c[5]=g*b+m*d;c[6]=f*b+p*d;c[7]=k*b+n*d;c[8]=e*-d+l*b;c[9]=g*-d+m*b;c[10]=f*-d+p*b;c[11]=k*-d+n*b;return c};
s.f.mo=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],k=a[3],l=a[8],m=a[9],p=a[10],n=a[11];c?a!=c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+l*-d;c[1]=g*b+m*-d;c[2]=f*b+p*-d;c[3]=k*b+n*-d;c[8]=e*d+l*b;c[9]=g*d+m*b;c[10]=f*d+p*b;c[11]=k*d+n*b;return c};
s.f.no=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],k=a[3],l=a[4],m=a[5],p=a[6],n=a[7];c?a!=c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+l*d;c[1]=g*b+m*d;c[2]=f*b+p*d;c[3]=k*b+n*d;c[4]=e*-d+l*b;c[5]=g*-d+m*b;c[6]=f*-d+p*b;c[7]=k*-d+n*b;return c};
s.f.Ak=function(a,b,c,d,e,g,f){f||(f=s.f.create());var k=b-a,l=d-c,m=g-e;f[0]=2*e/k;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2*e/l;f[6]=0;f[7]=0;f[8]=(b+a)/k;f[9]=(d+c)/l;f[10]=-(g+e)/m;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/m;f[15]=0;return f};s.f.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b*=a;return s.f.Ak(-b,b,-a,a,c,d,e)};
s.f.ho=function(a,b,c,d,e,g,f){f||(f=s.f.create());var k=b-a,l=d-c,m=g-e;f[0]=2/k;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/l;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/m;f[11]=0;f[12]=-(a+b)/k;f[13]=-(d+c)/l;f[14]=-(g+e)/m;f[15]=1;return f};
s.f.Zn=function(a,b,c,d){d||(d=s.f.create());var e=a[0],g=a[1];a=a[2];var f=c[0],k=c[1],l=c[2];c=b[1];var m=b[2];if(e==b[0]&&g==c&&a==m)return s.f.G(d);var p,n,q,t;c=e-b[0];m=g-b[1];b=a-b[2];t=1/Math.sqrt(c*c+m*m+b*b);c*=t;m*=t;b*=t;p=k*b-l*m;l=l*c-f*b;f=f*m-k*c;(t=Math.sqrt(p*p+l*l+f*f))?(t=1/t,p*=t,l*=t,f*=t):f=l=p=0;k=m*f-b*l;n=b*p-c*f;q=c*l-m*p;(t=Math.sqrt(k*k+n*n+q*q))?(t=1/t,k*=t,n*=t,q*=t):q=n=k=0;d[0]=p;d[1]=k;d[2]=c;d[3]=0;d[4]=l;d[5]=n;d[6]=m;d[7]=0;d[8]=f;d[9]=q;d[10]=b;d[11]=0;d[12]=
-(p*e+l*g+f*a);d[13]=-(k*e+n*g+q*a);d[14]=-(c*e+m*g+b*a);d[15]=1;return d};s.f.bh=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};s.nb={};s.nb.create=function(a){var b=new s.dd(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};s.nb.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
s.nb.En=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b)return a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a;b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};s.nb.inverse=function(a,b){if(!b||a==b)return a[0]*=1,a[1]*=1,a[2]*=1,a;b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};s.nb.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
s.nb.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(0==f)return b[0]=0,b[1]=0,b[2]=0,b[3]=0,b;f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};s.nb.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=b[0],k=b[1],l=b[2];b=b[3];c[0]=d*b+a*f+e*l-g*k;c[1]=e*b+a*k+g*f-d*l;c[2]=g*b+a*l+d*k-e*f;c[3]=a*b-d*f-e*k-g*l;return c};
s.nb.va=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=a[0];var f=a[1],k=a[2];a=a[3];var l=a*d+f*g-k*e,m=a*e+k*d-b*g,p=a*g+b*e-f*d,d=-b*d-f*e-k*g;c[0]=l*a+d*-b+m*-k-p*-f;c[1]=m*a+d*-f+p*-b-l*-k;c[2]=p*a+d*-k+l*-f-m*-b;return c};s.nb.dj=function(a,b){b||(b=s.Jb.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,k=d+d,l=e+e,m=c*f,p=c*k,c=c*l,n=d*k,d=d*l,e=e*l,f=g*f,k=g*k,g=g*l;b[0]=1-(n+e);b[1]=p-g;b[2]=c+k;b[3]=p+g;b[4]=1-(m+e);b[5]=d-f;b[6]=c-k;b[7]=d+f;b[8]=1-(m+n);return b};
s.nb.gn=function(a,b){b||(b=s.f.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,k=d+d,l=e+e,m=c*f,p=c*k,c=c*l,n=d*k,d=d*l,e=e*l,f=g*f,k=g*k,g=g*l;b[0]=1-(n+e);b[1]=p-g;b[2]=c+k;b[3]=0;b[4]=p+g;b[5]=1-(m+e);b[6]=d-f;b[7]=0;b[8]=c-k;b[9]=d+f;b[10]=1-(m+n);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};s.nb.oo=function(a,b,c,d){d||(d=a);var e=c;0>a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]&&(e=-1*c);d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
s.nb.bh=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};s.Math={};s.Math.mat4Multiply=s.f.multiply;s.Math.mat4Inverse=s.f.inverse;s.Math.mat4ToMat3=s.f.dj;s.Math.mat4ToInverseMat3=s.f.fn;s.Math.mat4Transpose=s.f.Xb;s.Math.mat3Transpose=s.Jb.Xb;s.Math.vec3Normalize=s.s.normalize;s.Math.vec3Dot=s.s.hb;s.Math.vec3Cross=s.s.Gf;s.Math.vec3Length=s.s.length;
s.Bk=function(a,b,c,d,e,g){var f=b-a,k=d-c,l=g-e;a=s.f.create([2*e/f,0,(b+a)/f,0,0,2*e/k,(d+c)/k,0,0,0,-(g+e)/l,-2*g*e/l,0,0,-1,0]);s.f.Xb(a);return a};s.am=function(a,b,c,d){a=c*Math.tan(a*Math.PI/360);b*=a;return s.Bk(-b,b,-a,a,c,d)};s.Zl=function(a,b,c,d){var e=d-c;a=s.f.create([1/(0.5*a*b),0,0,0,0,1/(0.5*a),0,0,0,0,-2/e,-((d+c)/e),0,0,0,1]);s.f.Xb(a);return a};
s.bb=function(a,b){var c=Math.cos(b),d=Math.sin(b);switch(a){case 0:c=[1,0,0,0,0,c,-d,0,0,d,c,0,0,0,0,1];break;case 1:c=[c,0,-d,0,0,1,0,0,d,0,c,0,0,0,0,1];break;default:c=[c,-d,0,0,d,c,0,0,0,0,1,0,0,0,0,1]}s.f.Xb(c);return c};s.hf=function(a,b,c){a=[a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1];s.f.Xb(a);return a};s.ym=function(a){return s.hf(a,a,a)};s.Tc=function(a,b,c){a=[1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1];s.f.Xb(a);return a};s.vo=function(a){return s.Tc(a[0],a[1],0)};s.wo=function(a){return s.Tc(a[0],a[1],a[2])};
s.isEqual=function(a,b,c){return Math.abs(a-b)<c};s.Zc=function(a,b,c){a<b?a=b:a>c&&(a=c);return a};s.ta=function(a){return a*Math.PI/180};s.Fh=function(a){return a/Math.PI*180};s.Hl=function(a,b,c){return a+(b-a)*c};s.Bb=function(a,b){return"boolean"===typeof a?a:b};s.Zb=function(a,b,c){var d=Number.wn;return"number"===typeof a?s.Zc(a,b,d):c};s.qj=function(a){return"string"===typeof a?a:null};
s.io=function(a,b){if(0>a)return a=-a+"",b--,a.length>=b?"-"+a:"-"+(Array(b-a.length+1).join("0")+a);a+="";return a.length>=b?a:Array(b-a.length+1).join("0")+a};s.ck=function(a){var b=(a&31744)>>10;fraction=a&1023;return(a>>15?-1:1)*(b?31===b?fraction?NaN:Infinity:Math.pow(2,b-15)*(1+fraction/1024):fraction/1024*6.103515625E-5)};s.Fm=function(a){var b={copy:"&copy;",Y:(new Date).getFullYear()};return a.replace(/\{([_$a-zA-Z0-9][_$a-zA-Z0-9]*)\}/g,function(a,d){return d in b?b[d]:a})};
s.Hm=function(a){return s.Fm(a).replace(/\[([^\]]*)\]/g,function(a,c){c=c.trim();urls_=c.split(" ");return-1!=urls_[0].indexOf("://")?1<urls_.length?"<a href="+urls_[0]+">"+c.substring(urls_[0].length)+"</a>":"<a href="+urls_[0]+">"+urls_[0]+"</a>":c})};s.Gm=function(a,b,c){return a.replace(/\{([_$a-zA-Z(-9][_$a-zA-Z(-9]*)\}/g,function(a,e){return e in b?b[e]:c(e)})};
s.Mn=function(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?[parseInt(a[4],16),parseInt(a[3],16),parseInt(a[2],16),parseInt(a[1],16)]:[0,0,0,255]};s.Om=function(){return"("+s.Ek+").call(self);"};s.Sd=function(a,b,c,d,e){var g=new XMLHttpRequest;g.onload=function(){var a=g.response;try{var e=d?a:eval("("+a+")")}catch(l){null!=c&&c();return}null!=b&&b(e)}.bind(this);g.onerror=function(){null!=c&&c()}.bind(this);g.open("GET",a,!0);g.withCredentials=e;g.send("")};
s.Rb=function(a,b,c,d){var e=new XMLHttpRequest;e.onreadystatechange=function(){switch(e.readyState){case 0:case 1:case 2:case 3:break;case 4:if(404==e.status){null!=c&&c();break}var a=new DataView(e.response);null!=b&&b(a);break;default:null!=c&&c()}}.bind(this);e.onerror=function(){null!=c&&c()}.bind(this);e.open("GET",a,!0);e.responseType="arraybuffer";e.withCredentials=d;e.send("")};window.performance=window.performance||{};
performance.now=performance.now||performance.bo||performance.co||performance.fo||performance.webkitNow||function(){return(new Date).getTime()};window.Gi=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};"undefined"===typeof Array.isArray&&(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});s.isEqual=s.isEqual;
s.clamp=s.Zc;s.mix=s.Hl;s.radians=s.ta;s.degrees=s.Fh;s.loadJSON=s.Sd;s.loadBinary=s.Rb;
s.T={jc:!1,kb:function(){var a=s.T;a.Af=a.Ki(a.$j)||"An unknown browser";a.version=a.Li(navigator.userAgent.toLowerCase())||a.Li(navigator.appVersion)||"an unknown version";a.sc=a.Ki(a.ak)||"an unknown os: ua: "+navigator.userAgent+" pl: "+navigator.platform;a.Jl="iphone/ipod"==a.sc||"android"==a.sc||"ipad"==a.sc||"windows ce"==a.sc||"windows phone"==a.sc||"kindle"==a.sc;a.Il="android"==a.sc;a.jc=!0},Fk:function(){s.T.jc||s.T.kb();return s.T.Af},Gk:function(){s.T.jc||s.T.kb();return s.T.Af},Nk:function(){s.T.jc||
s.T.kb();return s.T.Af},tl:function(){s.T.jc||s.T.kb();return s.T.Jl},rl:function(){s.T.jc||s.T.kb();return s.T.Il},Ki:function(a){for(var b=s.T,c=0;c<a.length;c++){var d=a[c].Z,e=a[c].qm;b.sj=a[c].Uc||a[c].G;if(d){if(-1!=d.toLowerCase().indexOf(a[c].$))return null!=a[c].version&&(b.version=a[c].version),a[c].G}else if(e)return a[c].G}},Li:function(a){var b=s.T;if(null!=b.version)return b.version;var c=a.indexOf(b.sj);if(-1!=c)return parseFloat(a.substring(c+b.sj.length+1))},$j:[{Z:navigator.userAgent,
$:"chrome",G:"chrome"},{Z:navigator.userAgent,$:"firefox",G:"firefox"},{Z:navigator.vendor,$:"apple",G:"safari",Uc:"version"},{qm:window.opera,G:"opera",Uc:"version"},{Z:navigator.vendor,$:"icab",G:"icab"},{Z:navigator.vendor,$:"kde",G:"konqueror"},{Z:navigator.vendor,$:"camino",G:"camino"},{Z:navigator.userAgent,$:"netscape",G:"netscape"},{Z:navigator.userAgent,$:"msie",G:"explorer",Uc:"msie"},{Z:navigator.userAgent,$:"trident/",G:"explorer",version:"11"},{Z:navigator.userAgent,$:"edge/",G:"explorer",
version:"12"},{Z:navigator.userAgent,$:"omniweb",Uc:"omniweb/",G:"omniweb"},{Z:navigator.userAgent,$:"silk",Uc:"silk/",G:"silk"},{Z:navigator.userAgent,$:"gecko",G:"mozilla",Uc:"rv"},{Z:navigator.userAgent,$:"mozilla",G:"netscape",Uc:"mozilla"}],ak:[{Z:navigator.userAgent,$:"windows ce",G:"windows ce"},{Z:navigator.userAgent,$:"windows phone",G:"windows phone"},{Z:navigator.platform,$:"win",G:"windows"},{Z:navigator.platform,$:"mac",G:"mac"},{Z:navigator.userAgent,$:"iphone",G:"iphone/ipod"},{Z:navigator.userAgent,
$:"ipod",G:"iphone/ipod"},{Z:navigator.userAgent,$:"ipad",G:"ipad"},{Z:navigator.userAgent,$:"android",G:"android"},{Z:navigator.userAgent,$:"silk",G:"kindle"},{Z:navigator.userAgent,$:"blackberry",G:"blackberry"},{Z:navigator.platform,$:"linux",G:"linux"}]};s.getBrowser=s.T.Fk;s.getBrowserVersion=s.T.Gk;s.getOS=s.T.Nk;s.isPlatformMobileDevice=s.T.tl;s.isPlatformAndroid=s.T.rl;s.ac={};
s.ac.Sn=function(a){if("string"!==typeof a)return!1;var b=document.location.hostname;return s.ac.parse(a).hostname===b};s.ac.parse=function(a){if("string"!==typeof a)return null;var b=document.createElement("a");b.href=a;return b};s.ac.Ok=function(a){var b={};a=s.ac.parse(a).search.substring(1).split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");"undefined"===typeof b[d[0]]?b[d[0]]=d[1]:"string"===typeof b[d[0]]?b[d[0]]=[b[d[0]],d[1]]:b[d[0]].push(d[1])}return b};s.Url=s.ac;
s.ac.getParamsFromUrl=s.ac.Ok;s.xa={};s.xa.Dl=function(a,b,c,d){!a instanceof Image||"string"!==typeof b||(d||(a.crossOrigin=c?"use-credentials":"anonymous"),a.src=b)};s.xa.kg=function(a,b,c,d,e){var g=new Image;g.onerror=c;g.onload=b;s.xa.Dl(g,a,d,e);return g};s.xa.Sd=function(a,b,c){s.Rb(a,b,c)};s.xa.Rb=function(a,b,c){s.Rb(a,b,c)};
s.xa.ci=function(a,b,c){var d=new XMLHttpRequest;d.onreadystatechange=function(){switch(d.readyState){case 0:case 1:case 2:case 3:break;case 4:null!=b&&b(d.getAllResponseHeaders(),d.status);break;default:null!=c&&c()}}.bind(this);d.onerror=function(){null!=c&&c()}.bind(this);d.open("HEAD",a,!0);d.send("")};s.Http=s.xa;s.xa.imageFactory=s.xa.kg;s.xa.loadJSON=s.xa.Sd;s.xa.loadBinary=s.xa.Rb;s.xa.headRequest=s.xa.ci;
function fa(a){a=this.h=a.h;if(null!=a){this.pa=null;this.pa=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.pa);var b=[0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1];a.bufferData(a.ARRAY_BUFFER,new Float32Array(b),a.STATIC_DRAW);this.pa.ba=3;this.pa.ca=b.length/3;this.o=36;this.ng=this.pa.ca/3}}fa.prototype.r=function(){this.h.deleteBuffer(this.pa)};
fa.prototype.Wa=function(a,b){var c=this.h;if(null!=c){var d=a.getAttribute(b);c.bindBuffer(c.ARRAY_BUFFER,this.pa);c.vertexAttribPointer(d,this.pa.ba,c.FLOAT,!1,0,0);c.drawArrays(c.LINES,0,this.pa.ca)}};function ha(a,b,c,d){this.bc=a;this.qa=null;this.J=b;this.Ch=null;this.If=this.dk=this.$c({});this.Hf=0;this.hi=null==c?!1:c;this.Fj=d?!0:!1}h=ha.prototype;
h.kb=function(){this.qa=document.createElement("canvas");if(null!=this.qa&&(this.qa.width=this.J[0],this.qa.height=this.J[1],this.qa.style.display="block",null!=this.qa.getContext)){try{this.h=this.qa.getContext("webgl",{preserveDrawingBuffer:this.hi,antialias:this.Fj,stencil:!0})||this.qa.getContext("experimental-webgl",{preserveDrawingBuffer:this.hi})}catch(a){}this.h&&(this.h.getExtension("OES_standard_derivatives"),this.bc.appendChild(this.qa),this.h.kh=this.qa.width,this.h.jh=this.qa.height,
this.h.clearColor(0,0,0,1),this.h.enable(this.h.DEPTH_TEST),this.h.viewport(0,0,this.h.kh,this.h.jh),this.h.clear(this.h.COLOR_BUFFER_BIT|this.h.DEPTH_BUFFER_BIT))}};h.resize=function(a,b){this.J=a;null!=this.qa&&!0!=b&&(this.qa.width=this.J[0],this.qa.height=this.J[1]);null!=this.h&&(this.h.kh=this.qa.width,this.h.jh=this.qa.height)};function la(a){a.h.viewport(0,0,a.h.kh,a.h.jh)}
h.clear=function(a,b,c){null!=c&&this.h.clearColor(c[0]/255,c[1]/255,c[2]/255,c[3]/255);this.h.clear((a?this.h.COLOR_BUFFER_BIT:0)|(b?this.h.DEPTH_BUFFER_BIT:0))};
h.useProgram=function(a,b,c,d,e,g,f,k,l){this.Ch!=a&&(this.h.useProgram(a.Ra),this.Ch=a,na(a,"uSampler",0),l&&na(a,"uSampler2",1),b=a.getAttribute(b),this.h.enableVertexAttribArray(b),null!=c&&(c=a.getAttribute(c),this.h.enableVertexAttribArray(c)),null!=d&&(d=a.getAttribute(d),this.h.enableVertexAttribArray(d)),null!=e&&(e=a.getAttribute(e),this.h.enableVertexAttribArray(e)),null!=g&&(g=a.getAttribute(g),this.h.enableVertexAttribArray(g)),null!=f&&(a=a.getAttribute(f),this.h.enableVertexAttribArray(a)))};
h.bindTexture=function(a,b){!1!=a.Td&&(this.h.activeTexture(b?this.h.TEXTURE1:this.h.TEXTURE0),this.h.bindTexture(this.h.TEXTURE_2D,a.v))};s.un=function(){return!0};function oa(a,b){null!=b?a.h.bindFramebuffer(a.h.FRAMEBUFFER,b.Mh):(a.h.bindTexture(a.h.TEXTURE_2D,null),a.h.bindRenderbuffer(a.h.RENDERBUFFER,null),a.h.bindFramebuffer(a.h.FRAMEBUFFER,null))}
ha.prototype.$c=function(a){null==a.Xc&&(a.Xc=!1);null==a.ke&&(a.ke=!1);null==a.wf&&(a.wf=0);null==a.se&&(a.se=!0);null==a.re&&(a.re=!0);null==a.Ad&&(a.Ad=!1);null==a.Fd&&(a.Fd=!0);return a};
ha.prototype.Wb=function(a,b){if(this.If==a)null!=b&&b!=this.Hf&&(this.Hf=b,this.h.polygonOffset(-1,b));else{var c=this.h,d=this.If;b=b||a.wf;d.Xc!=a.Xc&&(!0==a.Xc?(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA),c.enable(c.BLEND)):c.disable(c.BLEND));d.ke!=a.ke&&(!0==a.ke?c.enable(c.STENCIL_TEST):c.disable(c.STENCIL_TEST));d.wf!=b&&(0!=b?(c.polygonOffset(-1,b),c.enable(c.POLYGON_OFFSET_FILL)):c.disable(c.POLYGON_OFFSET_FILL),
this.Hf=b);d.se!=a.se&&(!0==a.se?c.depthMask(!0):c.depthMask(!1));d.re!=a.re&&(0!=a.re?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST));d.Ad!=a.Ad&&(0!=a.Ad?c.depthFunc(c.LEQUAL):c.depthFunc(c.LESS));d.Fd!=a.Fd&&(!0==a.Fd?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE));this.If=a}};
s.Jn=function(a,b,c,d,e){var g=d.Zd;if(0!=d.je){var f=d.wk.id;if(null!=f&&null!=c.jg)if(1==d.je){if(c.jg[0].id==f)return}else{if(c.jg[0].id!=f)return}else if(2==d.je)return}var k=d.Rn&&c.yi,f=d.we;if(k){var l=c.fi,f=[(l&255)/255,(l>>8&255)/255,(l>>16&255)/255,1];c.kl[l]=[d.wk,d.Fn,d.Oj,d.jl,d.Ln,d.Un];c.fi++}switch(d.S){case "flat-line":a.Wb(s.ph,c.eg(d.nh));l=c.jm;a.useProgram(l,"aPosition",null,null,null);pa(l,"uColor",f);qa(l,"uMVP",g);a=l.getAttribute("aPosition");b.bindBuffer(b.ARRAY_BUFFER,
d.pa);b.vertexAttribPointer(a,d.pa.ba,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.pa.ca);break;case "flat-tline":case "pixel-line":case "pixel-tline":a.Wb(s.ph,c.eg(d.nh));var l=d.Ra,m=null,p=[0,0,0,0];if("pixel-line"!=d.S){if(k)m=c.vf;else{c=d.v;if(null==c||null==c[0])break;m=c[0];p=[0,c[1]/c[0].Od,(c[1]+c[2])/c[0].Od,0];"flat-tline"==d.S?p[0]=1/d.Wn/(m.rc/c[2]):(c=d.P.w.Xa.to(d.ha||d.P.Hn)/d.P.so,p[0]=1/m.rc/c)}if(!1==m.Td)break;a.bindTexture(m)}a.useProgram(l,"aPosition",null,null,null);pa(l,
"uColor",f);ua(l,"uScale",e);qa(l,"uMVP",g);"pixel-line"!=d.S&&(null!=d.Ij&&pa(l,"uColor2",d.Ij),pa(l,"uParams",p),na(l,"uSampler",0));a=l.getAttribute("aPosition");g=l.getAttribute("aNormal");b.bindBuffer(b.ARRAY_BUFFER,d.pa);b.vertexAttribPointer(a,d.pa.ba,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.rn);b.vertexAttribPointer(g,d.rn.ba,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.pa.ca);break;case "line-label":m=k?c.vf:c.zk.v;l=s.ta(c.lc[0]);e=[-Math.sin(l),Math.cos(l),0,0];a.Wb(s.yj,c.eg(d.nh));
l=c.Bi;a.bindTexture(m);a.useProgram(l,"aPosition","aTexCoord",null,null);na(l,"uSampler",0);qa(l,"uMVP",g);pa(l,"uVec",e);pa(l,"uColor",f);a=l.getAttribute("aPosition");g=l.getAttribute("aTexCoord");b.bindBuffer(b.ARRAY_BUFFER,d.pa);b.vertexAttribPointer(a,d.pa.ba,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.ih);b.vertexAttribPointer(g,d.ih.ba,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.pa.ca);break;case "icon":case "label":m=k?c.vf:d.v;if(!1==m.Td)break;a.Wb(s.yj,c.eg(d.nh));l=c.im;a.bindTexture(m);
a.useProgram(l,"aPosition","aTexCoord",null,"aOrigin");na(l,"uSampler",0);qa(l,"uMVP",g);pa(l,"uScale",[e[0],e[1],"label"==d.S?1:1/m.rc,0]);pa(l,"uColor",f);a=l.getAttribute("aPosition");g=l.getAttribute("aTexCoord");f=l.getAttribute("aOrigin");b.bindBuffer(b.ARRAY_BUFFER,d.pa);b.vertexAttribPointer(a,d.pa.ba,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.ih);b.vertexAttribPointer(g,d.ih.ba,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.sn);b.vertexAttribPointer(f,d.sn.ba,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,
0,d.pa.ca)}};
function va(a,b,c,d){this.h=a.h;this.l=b.l;this.w=d;this.pc=this.Yb=this.N=null;performance.now();a=b.u;c=b.rf;d=b.nj;var e=b.tn||3,g=b.nn||2;b=b.mn||2;var f=this.h;a&&f&&(this.N=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,this.N),f.bufferData(f.ARRAY_BUFFER,new Float32Array(a),f.STATIC_DRAW),this.N.ba=e,this.N.ca=a.length/e,null!=c&&(this.Yb=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,this.Yb),f.bufferData(f.ARRAY_BUFFER,new Float32Array(c),f.STATIC_DRAW),this.Yb.ba=g,this.Yb.ca=c.length/g),null!=
d&&(this.pc=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,this.pc),f.bufferData(f.ARRAY_BUFFER,new Float32Array(d),f.STATIC_DRAW),this.pc.ba=b,this.pc.ca=d.length/b),this.o=this.N.ca*e*4,this.o+=null==c?0:this.Yb.ca*g*4,this.o+=null==d?0:this.pc.ca*b*4,this.ge=this.N.ca/3,this.qc=!0)}va.prototype.r=function(){this.h&&this.qc&&(this.h.deleteBuffer(this.N),this.h.deleteBuffer(this.Yb))};
va.prototype.Wa=function(a,b,c,d,e){var g=this.h;null!=g&&this.qc&&(b=a.getAttribute(b),g.bindBuffer(g.ARRAY_BUFFER,this.N),g.vertexAttribPointer(b,this.N.ba,g.FLOAT,!1,0,0),this.Yb&&c&&(c=a.getAttribute(c),g.bindBuffer(g.ARRAY_BUFFER,this.Yb),g.vertexAttribPointer(c,this.Yb.ba,g.FLOAT,!1,0,0)),this.pc&&d&&(d=a.getAttribute(d),g.bindBuffer(g.ARRAY_BUFFER,this.pc),g.vertexAttribPointer(d,this.pc.ba,g.FLOAT,!1,0,0)),e&&e&&(a=a.getAttribute(e),g.bindBuffer(g.ARRAY_BUFFER,s.Vc),g.vertexAttribPointer(a,
s.Vc.ba,g.FLOAT,!1,0,0)),g.drawArrays(g.TRIANGLES,0,this.N.ca))};function xa(a,b,c,d,e,g){this.l=null;this.g=a;this.h=a.h;this.w=b;performance.now();null!=this.h&&(this.u=[],this.N=null,this.ng=c,this.Pe=e,this.Oe=g,this.Bg=d,this.kb())}xa.prototype.r=function(){this.h.deleteBuffer(this.N)};
xa.prototype.kb=function(){if(this.ng){this.Pe&&ya(this,0,this.Oe);for(var a=0;a<this.Bg;a++){var b=a,c=a+1,d=this.u.length;this.u[d]=b;this.u[d+1]=c;this.u[d+2]=1;this.u[d+3]=b;this.u[d+4]=c;this.u[d+5]=-1;this.u[d+6]=c;this.u[d+7]=b;this.u[d+8]=1;this.u[d+9]=b;this.u[d+10]=c;this.u[d+11]=1;this.u[d+12]=c;this.u[d+13]=b;this.u[d+14]=1;this.u[d+15]=c;this.u[d+16]=b;this.u[d+17]=-1;this.ge+=2;this.Pe&&ya(this,a+1,this.Oe)}}else if(this.Pe)for(a=0;a<=this.Bg;a++)ya(this,a,this.Oe);this.compile()};
function ya(a,b,c){var d=a.u.length,e=2*Math.PI/c;for(i=0;i<c;i++)a.u[d]=b,a.u[d+1]=-1,a.u[d+2]=0,a.u[d+3]=b,a.u[d+4]=-2,a.u[d+5]=e*i,a.u[d+6]=b,a.u[d+7]=-2,a.u[d+8]=e*(i+1),d+=9;a.ge+=c}xa.prototype.compile=function(){var a=this.h;this.N=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.N);a.bufferData(a.ARRAY_BUFFER,new Float32Array(this.u),a.STATIC_DRAW);this.N.ba=3;this.N.ca=this.u.length/3;this.o=24*this.N.ca;this.ge=this.N.ca/3};
xa.prototype.Wa=function(a,b,c){var d=this.h;null==d||null==this.N||c>this.Bg||(a=a.getAttribute(b),d.bindBuffer(d.ARRAY_BUFFER,this.N),d.vertexAttribPointer(a,this.N.ba,d.FLOAT,!1,0,0),a=0,this.ng&&(a+=6*(c-1)),this.Pe&&(a+=3*c*this.Oe),d.drawArrays(d.TRIANGLES,0,a))};function w(a,b,c){this.h=a.h;this.Ra=null;this.gh=[];this.zf=[];this.createProgram(b,c)}
w.prototype.createShader=function(a,b){var c=this.h;if(!a||!c)return null;var d;d=!0!=b?c.createShader(c.FRAGMENT_SHADER):c.createShader(c.VERTEX_SHADER);c.shaderSource(d,a);c.compileShader(d);return c.getShaderParameter(d,c.COMPILE_STATUS)?d:(alert("An error occurred compiling the shaders: "+c.getShaderInfoLog(d)),null)};
w.prototype.createProgram=function(a,b){var c=this.h;if(null!=c){var d=this.createShader(a,!0),e=this.createShader(b,!1),g=c.createProgram();c.attachShader(g,d);c.attachShader(g,e);c.linkProgram(g);c.getProgramParameter(g,c.LINK_STATUS)||alert("Unable to initialize the shader program.");c.useProgram(g);this.Ra=g}};function na(a,b,c){var d=a.h;null!=d&&null!=a.Ra&&(a=a.getUniform(b),null!=a&&d.uniform1i(a,c))}
function qa(a,b,c){var d=a.h;null!=d&&null!=a.Ra&&(a=a.getUniform(b),null!=a&&d.uniformMatrix4fv(a,!1,c))}function ua(a,b,c){var d=a.h;null!=d&&null!=a.Ra&&(a=a.getUniform(b),null!=a&&d.uniform2fv(a,c))}function Aa(a,b,c){var d=a.h;null!=d&&null!=a.Ra&&(a=a.getUniform(b),null!=a&&d.uniform3fv(a,c))}function pa(a,b,c){var d=a.h;null!=d&&null!=a.Ra&&(a=a.getUniform(b),null!=a&&d.uniform4fv(a,c))}function Da(a,b,c){var d=a.h;null!=d&&null!=a.Ra&&(a=a.getUniform(b),null!=a&&d.uniform1f(a,c))}
w.prototype.getAttribute=function(a){var b=this.h;if(null!=b&&null!=this.Ra)return null==this.zf[a]?(b=b.getAttribLocation(this.Ra,a),this.zf[a]=b):this.zf[a]};w.prototype.getUniform=function(a){var b=this.h;if(null!=b&&null!=this.Ra)return null==this.gh[a]?(b=b.getUniformLocation(this.Ra,a),this.gh[a]=b):this.gh[a]};s.Kj="attribute vec3 aPosition;\nuniform mat4 uMVP;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";s.Jj="precision mediump float;\nvoid main() {\ngl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);\n}";
s.Cl="attribute vec3 aPosition;\nuniform mat4 uMVP;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";s.Al="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";s.xl="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(aPosition.xyz, 1.0));\nif (aNormal.w == 0.0) {\ngl_Position = pp0 + vec4((vec3(aNormal.x*uScale.x*pp0.w, aNormal.y*uScale.y*pp0.w, 0.0)), 0.0);\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(aNormal.xyz, 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aNormal.w*pp0.w, n.x*uScale.y*aNormal.w*pp0.w, 0.0)), 0.0);\n}\n}";
s.wl="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";s.zl="attribute vec3 aPosition;\nuniform mat4 uMVP;\nuniform vec3 uScale;\nuniform vec3 uPoints[32];\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(uPoints[int(aPosition.x)], 1.0));\nif (aPosition.y < 0.0) {\nif (aPosition.y == -1.0) {\ngl_Position = pp0;\n} else {\ngl_Position = pp0 + vec4((vec3(-sin(aPosition.z)*uScale.x*uScale.z, cos(aPosition.z)*uScale.y*uScale.z, 0.0)), 0.0);\n}\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(uPoints[int(aPosition.y)], 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aPosition.z*uScale.z, n.x*uScale.y*aPosition.z*uScale.z, 0.0)), 0.0);\n}\n}";
s.yl="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";s.$i="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvoid main(){ \nvec4 p=vec4(aPosition.xyz, 1.0);\np.xy+=aNormal.xy;\nif (aNormal.w == 0.0){\nfloat tcy=(uParams[1]+uParams[2])*0.5;\nfloat tdy=uParams[1]-tcy;\nfloat ty=(aNormal.x == 0.0 && aNormal.y == 0.0)?tcy:tcy+tdy*cos(aNormal.z);\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], ty);\n} else {\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], aPosition.w < 0.0 ? uParams[1] : uParams[2]);\n}\ngl_Position = uMVP * p;\n}";
s.ej="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(aPosition.xyz, 1.0));\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], aPosition.w < 0.0 ? uParams[1] : uParams[2]);\nif (aNormal.w == 0.0) {\ngl_Position = pp0 + vec4((vec3(aNormal.x*uScale.x*pp0.w, aNormal.y*uScale.y*pp0.w, 0.0)), 0.0);\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(aNormal.xyz, 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aNormal.w*pp0.w, n.x*uScale.y*aNormal.w*pp0.w, 0.0)), 0.0);\n}\n}";
s.Zi="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uColor2;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord)*uColor;\ngl_FragColor = c;\n}";s.Si="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uColor2;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord)*uColor;\nvec4 c2=uColor2;\nc.xyz*=c.w; c2.xyz*=c2.w;\nc=mix(c,c2,1.0-c.w);\nc.xyz/=(c.w+0.00001);\ngl_FragColor = c;\n}";
s.em="attribute vec3 aPosition;\nattribute vec3 aNormal;\nuniform mat4 uMVP;\nuniform mat4 uRot;\nuniform vec4 uColor;\nvarying vec4 vColor;\nvoid main(){ \nfloat l = dot((uRot*vec4(aNormal,1.0)).xyz, vec3(0.0,0.0,1.0)) * 0.5;\nvec3 c = uColor.xyz;\nc = (l > 0.0) ? mix(c,vec3(1.0,1.0,1.0),l) : mix(vec3(0.0,0.0,0.0),c,1.0+l);\nvColor = vec4(c, uColor.w);\ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";s.dm="precision mediump float;\nvarying vec4 vColor;\nvoid main() {\ngl_FragColor = vColor;\n}";
s.Sm="attribute vec3 aPosition;\nattribute vec4 aTexCoord;\nuniform mat4 uMVP;\nuniform vec4 uVec;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy;\nif (dot(uVec.xy, aTexCoord.zw) < 0.0) {\ngl_Position = uMVP * vec4(2.0, 0.0, 0.0, 1.0);\n}else{\ngl_Position = uMVP * vec4(aPosition, 1.0);\n}\n}";s.Tm="attribute vec3 aPosition;\nattribute vec4 aTexCoord;\nuniform mat4 uMVP;\nuniform vec4 uPosition;\nuniform float uDepth;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy;\ngl_Position = uMVP*vec4(aPosition[0]+uPosition[0],-aPosition[1]+uPosition[1],uPosition[2],1.0);\n}";
s.nl="attribute vec3 aPosition;\nattribute vec4 aTexCoord;\nattribute vec3 aOrigin;\nuniform mat4 uMVP;\nuniform vec4 uScale;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy * uScale[2];\nvec4 pos = (uMVP * vec4(aOrigin, 1.0));\ngl_Position = pos + vec4(aPosition.x*uScale.x*pos.w, aPosition.y*uScale.y*pos.w, 0.0, 0.0);\n}";s.fh="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord);\nif(c.w < 0.01){ discard; }\ngl_FragColor = c*uColor;\n}";
s.Mi="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMVP;\nvarying vec2 vTexCoord;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\nvTexCoord = aTexCoord;\n}";s.Im="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nconst vec4 gray = vec4(0.125, 0.125, 0.125, 1.0);\nvoid main() {\nfloat fade = smoothstep(0.51, 0.55, vTexCoord.t);\ngl_FragColor = mix(texture2D(uSampler, vTexCoord), gray, fade);\n}";s.Nm="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uSampler, vTexCoord);\n}";
s.Hj="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform mat3 uNorm;\nvarying vec3 vNormal;\nvarying vec4 vPosition;\nvoid main(){ \nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nvec4 c = uMV * vec4(aPosition, 1.0);\nvNormal = uNorm * (aPosition.xyz - vec3(0.5));\nvPosition = camSpacePos;\n}";s.Gj="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uNFactor;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec4 c = texture2D(uSampler, vec2(0,0));\nfloat l = dot(normalize(vNormal*uNFactor),ldir);\nc = mix(vec4(0.0,0.0,0.0,1.0),fogColor,max(0.0,-l*3.0));\ngl_FragColor = c;\n}";
s.An="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uNFactor;\nuniform vec2 uRadius;\nuniform vec3 uPos;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec3 diff = uPos;\nfloat a = dot(ldir, ldir);\nfloat b = 2 * dot(ldir, diff);\nfloat c = dot(diff, diff) - (uRadius[0] * uRadius[0]);\nfloat i = 0;\nfloat discr = b * b - 4 * a * c;\nif (discr > 0.0) {}\n}\ngl_FragColor = fogColor;\n}";
s.hl="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
s.gl="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 gridColor = mix(texture2D(uSampler, vTexCoord1), texture2D(uSampler, vTexCoord2), uGridBlend);\ngl_FragColor = mix(fogColor, gridColor, vFogFactor);\n}";s.fl="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
s.el="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";s.cn="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\n}";
s.$m="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = mix(fogColor, texture2D(uSampler, vTexCoord), vFogFactor);\n}";s.Ui="attribute vec3 aPosition;\nattribute vec2 aTexCoord2;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform vec4 uTransform;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = vec2(uTransform[0] * aTexCoord2[0] + uTransform[2], uTransform[1] * aTexCoord2[1] + uTransform[3]);\n}";
s.Um="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 c = texture2D(uSampler, vTexCoord);\ngl_FragColor = mix(fogColor, c, vFogFactor);\ngl_FragColor[3] = c.w * uAlpha;\n}";s.Vm="precision mediump float;\nuniform sampler2D uSampler;\nuniform sampler2D uSampler2;\nuniform float uAlpha;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 c = texture2D(uSampler, vTexCoord);\nvec4 c2 = texture2D(uSampler2, vTexCoord);\ngl_FragColor = mix(fogColor, c, vFogFactor);\ngl_FragColor[3] = c.w * uAlpha * c2.x;\n}";
s.yk="attribute vec3 aPosition;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\n}";s.xk="precision mediump float;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = vec4(fogColor.xyz, 1.0-vFogFactor);\n}";
s.Wi="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aNormal;\nuniform mat4 uMV, uProj;\nuniform mat3 uNorm;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvPosition = camSpacePos;\nvNormal = aNormal * uNorm;\n}";
s.bn="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nuniform mat4 uMaterial;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec3 normal = normalize(vNormal);\nvec3 eyeDir = ldir;\nvec3 refDir = reflect(-ldir, normal);\nfloat specW = pow(max(dot(refDir, eyeDir), 0.0), uMaterial[3][0]);\nfloat diffW = max(dot(normal, ldir), 0.0);\nvec4 lcolor = uMaterial[0]+(uMaterial[1]*diffW)+(uMaterial[2]*specW);\nvec4 tcolor = texture2D(uSampler, vTexCoord);\ngl_FragColor = mix(fogColor, vec4(lcolor.xyz*(1.0/255.0), 1.0) * tcolor, vFogFactor);\n}";
s.an="precision mediump float;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nuniform mat4 uMaterial;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec3 normal = normalize(vNormal);\nvec3 eyeDir = ldir;\nvec3 refDir = reflect(-ldir, normal);\nfloat specW = pow(max(dot(refDir, eyeDir), 0.0), uMaterial[3][0]);\nfloat diffW = max(dot(normal, ldir), 0.0);\nvec4 lcolor = uMaterial[0]+(uMaterial[1]*diffW)+(uMaterial[2]*specW);\ngl_FragColor = mix(fogColor, vec4(lcolor.xyz*(1.0/255.0), 1.0), vFogFactor);\n}";
s.Zm="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvBarycentric = camSpacePos.xyz;\n}";s.Ym="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\n#ifdef GL_OES_standard_derivatives\nvec3 nx = dFdx(vBarycentric);\nvec3 ny = dFdy(vBarycentric);\nvec3 normal=normalize(cross(nx,ny));\ngl_FragColor = vec4(vec3(max(0.0,normal.z*(204.0/255.0))+(32.0/255.0)),1.0);\n#else\ngl_FragColor = vec4(1.0,1.0,1.0,1.0);\n#endif\n}";
s.Yi="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvBarycentric = aBarycentric;\n}";s.Xi="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nfloat edgeFactor(){\n#ifdef GL_OES_standard_derivatives\nvec3 d = fwidth(vBarycentric);\nvec3 a3 = smoothstep(vec3(0.0), d*1.0, vBarycentric);\nreturn min(min(a3.x, a3.y), a3.z);\n#else\nfloat a = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);\nreturn a > 0.1 ? 1.0 : smoothstep(0.0,1.0,a*10.0);\n#endif\n}\nvoid main() {\ngl_FragColor = mix(fogColor, vec4( mix(vec3(0.0), texture2D(uSampler, vTexCoord).rgb, edgeFactor()) , 1.0), vFogFactor);\n}";
s.dn="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nfloat edgeFactor(){\n#ifdef GL_OES_standard_derivatives\nvec3 d = fwidth(vBarycentric);\nvec3 a3 = smoothstep(vec3(0.0), d*1.0, vBarycentric);\nreturn min(min(a3.x, a3.y), a3.z);\n#else\nfloat a = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);\nreturn a > 0.1 ? 1.0 : smoothstep(0.0,1.0,a*10.0);\n#endif\n}\nvoid main() {\nif (edgeFactor() < 0.5){ gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); } else { discard; }}";
s.en="attribute vec3 aPosition;\nattribute vec2 aTexCoord2;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord2;\nvBarycentric = aBarycentric;\n}";s.Xm="attribute vec3 aPosition;\nuniform mat4 uMV, uProj;\nvarying float vDepth;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\n}";
s.Wm="precision mediump float;\nuniform sampler2D uSampler;\nvarying float vDepth;\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";s.pl="\nattribute vec4 aPosition;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uData;\nuniform vec4 uColor;\nuniform float uDepth;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nvoid main(void){\nint i=int(aPosition.x);\nif(i==0) gl_Position=uProjectionMatrix*vec4(floor(uData[0][0]+0.1),floor(uData[0][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[0][2], uData[0][3]);\nif(i==1) gl_Position=uProjectionMatrix*vec4(floor(uData[1][0]+0.1),floor(uData[1][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[1][2], uData[1][3]);\nif(i==2) gl_Position=uProjectionMatrix*vec4(floor(uData[2][0]+0.1),floor(uData[2][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[2][2], uData[2][3]);\nif(i==3) gl_Position=uProjectionMatrix*vec4(floor(uData[3][0]+0.1),floor(uData[3][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[3][2], uData[3][3]);\nvec4 c=uColor*(1.0/255.0);\nc.w*=1.0;\nvColor=c;\n}";
s.ol="precision mediump float;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nuniform sampler2D uSampler;\nvoid main(void){\nvec4 c=texture2D(uSampler, vec2(vTexcoords.x, vTexcoords.y) );\nc*=vColor;\nif(c.w < 0.01){ discard; }\ngl_FragColor = c;\n}";function Ea(a,b,c,d,e,g,f){this.g=a;this.h=a.h;this.Mh=this.v=null;this.Od=this.rc=this.o=0;this.Vg=g||!1;this.Kh=f||"linear";this.Ea=null;this.Td=!1;this.w=c;null!=b&&this.load(b,null,null,e)}Ea.prototype.r=function(){this.h.deleteTexture(this.v)};
function Ha(a,b,c,d,e,g){var f=a.h;a.v=f.createTexture();f.bindTexture(f.TEXTURE_2D,a.v);!0==g?(g=f.REPEAT,a.Vg=!0):g=f.CLAMP_TO_EDGE;f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_S,g);f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_T,g);g=!1;switch(e){case "linear":f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.LINEAR);f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MAG_FILTER,f.LINEAR);break;case "trilinear":f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.LINEAR_MIPMAP_LINEAR);f.texParameteri(f.TEXTURE_2D,
f.TEXTURE_MAG_FILTER,f.LINEAR);g=!0;break;default:f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.NEAREST),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MAG_FILTER,f.NEAREST)}f.pixelStorei(f.UNPACK_ALIGNMENT,1);f.texImage2D(f.TEXTURE_2D,0,f.RGBA,b,c,0,f.RGBA,f.UNSIGNED_BYTE,d);!0==g&&f.generateMipmap(f.TEXTURE_2D);f.bindTexture(f.TEXTURE_2D,null);a.rc=b;a.Od=c;a.o=b*c*4;a.Td=!0}
function Ia(a,b,c,d){var e=a.h;performance.now();a.v=e.createTexture();e.bindTexture(e.TEXTURE_2D,a.v);!0==d?(d=e.REPEAT,a.Vg=!0):d=e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,d);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,d);d=!1;a.Kh=c;switch(c){case "linear":e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);break;case "trilinear":e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR);e.texParameteri(e.TEXTURE_2D,
e.TEXTURE_MAG_FILTER,e.LINEAR);d=!0;break;default:e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)}!0!=s.Nl&&(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,b),!0==d&&e.generateMipmap(e.TEXTURE_2D));e.bindTexture(e.TEXTURE_2D,null);a.rc=b.naturalWidth;a.Od=b.naturalHeight;a.o=b.naturalWidth*b.naturalHeight*4;a.Td=!0}
Ea.prototype.load=function(a,b,c,d){this.Ea=s.xa.kg(a,function(){if(null==this.w||!0!=this.w.X)Ia(this,this.Ea,this.Kh,this.Vg),this.Ea=null,b&&b()}.bind(this),function(){(null==this.w||!0!=this.w.X)&&c&&c()}.bind(this),null,d)};
Ea.prototype.createFramebuffer=function(a,b){if(null!=this.v){var c=this.h,d=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,d);d.width=a;d.height=b;c.bindTexture(c.TEXTURE_2D,this.v);var e=c.createRenderbuffer();c.bindRenderbuffer(c.RENDERBUFFER,e);c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_COMPONENT16,a,b);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,this.v,0);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.RENDERBUFFER,e);c.bindTexture(c.TEXTURE_2D,
null);c.bindRenderbuffer(c.RENDERBUFFER,null);c.bindFramebuffer(c.FRAMEBUFFER,null);this.Mh=d}};s.jo=1.1;s.ro=1;s.Nl=!1;s.ph=null;
function Ja(a,b,c,d,e){this.j=e||{};this.ob(e);this.w=a;this.Bi=this.Ci=this.Di=this.Ai=this.Pg=null;this.bc=b;this.yi=this.Wl=this.Jg=this.X=!1;this.jg=null;this.fi=0;this.kl=[];this.wi=d;this.jl=this.Oj=null;a=this.bc.getBoundingClientRect();this.J=[a.width,a.height];this.df=[a.width,a.height];this.ka=!0;this.Cf=[0,1,0];this.g=new ha(b,this.J,this.j.Tg,this.j.Ug);this.m=new Ka(this,45,2,12E5);s.f.create();s.f.create();s.f.create();s.f.create();this.Jd=this.Ac=this.mf=this.lf=this.Le=this.ig=null;
this.Pd=1024;this.zk=this.fd=this.Lc=this.Mc=this.Ei=null;this.bd=0;s.f.create();this.Se=[0,0,100];window.addEventListener("resize",this.ef.bind(this),!1);this.g.kb();this.Pg=new w(this.g,s.cn,s.$m);this.nm=new w(this.g,s.Ui,s.Um);this.om=new w(this.g,s.Ui,s.Vm);this.km=new w(this.g,s.Wi,s.an);this.mm=new w(this.g,s.Wi,s.bn);this.hm=new w(this.g,s.yk,s.xk);this.Di=new w(this.g,s.Yi,s.Xi);this.Ci=new w(this.g,s.Yi,s.dn);this.pm=new w(this.g,s.en,s.Xi);this.gm=new w(this.g,s.Zm,s.Ym);new w(this.g,s.hl,
s.gl);this.Ai=new w(this.g,s.Mi,s.Im);this.lm=new w(this.g,s.Mi,s.Nm);new w(this.g,s.Hj,s.Gj);this.zi=new w(this.g,s.Xm,s.Wm);new w(this.g,s.fl,s.el);this.od=new w(this.g,s.Kj,s.Jj);this.jm=new w(this.g,s.Cl,s.Al);new w(this.g,s.xl,s.wl);this.pd=new w(this.g,s.zl,s.yl);new w(this.g,s.$i,s.Zi);new w(this.g,s.ej,s.Zi);new w(this.g,s.$i,s.Si);new w(this.g,s.ej,s.Si);new w(this.g,s.em,s.dm);this.Bi=new w(this.g,s.Sm,s.fh);new w(this.g,s.Tm,s.fh);this.oa=new w(this.g,s.pl,s.ol);this.im=new w(this.g,s.nl,
s.fh);b=s.eb.Lj();this.ig=new va(this.g,b,0,this.w);b=new Uint8Array(16384);for(a=0;64>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),1>a||63<=a||1>c||63<=c?(b[d]=255,b[d+1]=255,b[d+2]=255):(b[d]=32,b[d+1]=32,b[d+2]=32),b[d+3]=255;this.Le=new Ea(this.g);Ha(this.Le,64,64,b,"trilinear",!0);b=s.eb.uh(32,64);this.lf=new va(this.g,b,0,this.w);this.mf=new Ea(this.g,"./skydome.jpg",this.w);b=s.eb.uh(128,256);new va(this.g,b,0,this.w);b=this.Pd;a=new Uint8Array(b*b*4);this.Ac=new Ea(this.g);Ha(this.Ac,b,b,a);this.Ac.createFramebuffer(b,
b);this.Jd=new Ea(this.g);Ha(this.Jd,b,b,a);this.Jd.createFramebuffer(b,b);this.Rm=new Ea(this.g,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACACAMAAADTa0c4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAABIFJREFUeNrsnNuyqzAIhsP7v/Se6Yxra0L4OUVNCzetVqP5DAQItrVOiLg95739NnfOaR99RDj6esBw+CKZXiMK4PiuBkAcANoHAP3J5fzzAV2jePQIt6f4Ndb/MIChlVcCEFpAACZPfN4KUAF0/ufboDW3AuBMFgBwHTCfg2ftYgDUKBuA1ABuHKvA2P+5XdONIEt7BO2o2MdlAJoTQOsV6GEAswt0Zq/bsBhdeQQkqEDMwmIAnJHzA8i3ASkWRFKBbADyLGB3mlYD6DyhA4DfBlgsBDtirUPcBgC5woStYMgVtgKATWcB6DskKUEkGFLYrGw3+l3ydR16wKbbPDlWp4Xfo9vZwR1jtOMA6GkABrdvNmt1Vluy6pyvxu4Xt62fquyTggCTsIkCoIuv8gAA08w+ATBXAdSRY56xPDFPx/VPWFZp5v65kFMPgFjP70YASMfRsDn01xLPcwkRq1HLMoK647hR8v+nId74MQBjvIbUQePra42ZVXVcBCR3mIY89mYAlNGLflqA0V1seosCQNMg80B0bsLGAIDNwvFyiqu66ngVGGMGVBwyWwIwpty2DqEr/qf0Bq+DbjYkkcr4VUoOxiRjrYn3YY5SC4BQB/cF0Lq4kD1RCJ+tN4g6Jps5zfWu+QmSz9sUABkA0BIAXocmBwCJ99MDIASATkmtLQAIft4IgE/ZDStZ59yQbOQQAGZWYMbZ3FFCAGRHnwHQznegGAE+zwxNi8kALCOgS9tzAC4jYG1Qo0myRm0Ae/z8eleqewBoZLwfUswCsbT1KgBZD6QAzAEoXUe3K+xxVf2uLf5U3nBeMPRyACW/LtrwVX989id3PRQOG5Io6vh9XwC6stHIdGdJozun03lxNlwvH4u6UgDM8/LmJyx7ak12feEebaXmUwCOYJWk1JcYKsl74HL74wAaH93NqkE1FSKXc4cv0AjaPEEPgE4ru/ieWdvzVq/4psG3AYDFHlEAioQCuEgMgPjK1VDrqlkbTABAiQBGK38B0BlBSf9xtiAJQDM4NtDqMlaeyduTtkDjHgAtEQBj5ZGK2QE0aCcMAIxLSw0WVYlGDgOQXWE+afouAM0S398O4Nej3wIQf4cIHSfz9pbWugyep4MFIAFARvspbm8BcE2DOdvWnCJQAWFhJ/hKzh4AaB2A7NxedKmLPc+6PN4cL2S8GYC1QMIEQJvmFsJfxdvkEQAoLV4AogBS8/kNvdXlWe5GKhABvQUAZASDALJffY1XfsrToFXFbvYD1gBo6wC8LR7/uvj9CwHcfWuoUJItsVl5nwWAnhxxqsXatUq0OYCcaS/fkbK61u5H8jwAuUIEZXHNL1Jmub5oSKZWiDR9FttM4HEAigqRpn8TeB2AuWNiByAXSHCGbB7/3qYCfgCgPgADEEskbjCCaJDB/+kR6wP4P1Obl8jsBwDUB4yAxqKkthaATjX0KmCtDyCxm+yIMLjCbwBgrg94FYC3h8vLPPmfAVBSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlLy9fJPgAEAvWMULbGsSjwAAAAASUVORK5CYII=",
this.w,0,!0);b=new Uint8Array(2048);for(a=0;8>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=255;b=this.g.h;this.Mc=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,this.Mc);b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,0,1,2,0,0,1,3,0,0,1]),b.STATIC_DRAW);this.Mc.ba=4;this.Mc.ca=4;this.Lc=b.createBuffer();b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,this.Lc);b.bufferData(b.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,2,1,0,3,2]),b.STATIC_DRAW);this.Lc.ba=1;this.Lc.ca=6;b=new Uint8Array(1024);
for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=255,b[d+1]=0,b[d+2]=0,b[d+3]=255;this.Ei=new Ea(this.g);Ha(this.Ei,16,16,b);b=new Uint8Array(1024);for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=255,b[d+1]=255,b[d+2]=255,b[d+3]=255;this.vf=new Ea(this.g);Ha(this.vf,16,16,b);b=new Uint8Array(1024);for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=255;this.rh=new Ea(this.g);Ha(this.rh,16,16,b);new Uint8Array(2048);e="............................................................ .....xxxxx.......................xxxxx...................... .....xxxxx.......................xxxxx...................... .....xxxxx.......................xxxxx...................... xxxxxxxxxxxxxxxx............xxxxxxxxxxxxxxxx................ xxxxxxxxxxxxxxxx............xxxxxxxxxxxxxxxx................ ............................................................".split(" ");
b=new Uint8Array(2048);for(a=0;8>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=0;a=0;for(var g=e.length;a<g;a++){var f=e[a];c=0;for(var k=f.length;c<k;c++)d=4*(64*a+c),"."!=f.charAt(c)&&(b[d]=255,b[d+1]=255,b[d+2]=255,b[d+3]=255)}this.Bl=new Ea(this.g);Ha(this.Bl,64,8,b,"linear",!0);this.qh=new fa(this.g);this.ff=new Float32Array(96);this.cm=new xa(this.g,this.w,!0,64,!0,8);new xa(this.g,this.w,!1,64,!0,8);b=Array(196605);for(a=0;196605>a;a+=9)b[a]=1,b[a+1]=0,b[a+2]=0,b[a+3]=
0,b[a+4]=1,b[a+5]=0,b[a+6]=0,b[a+7]=0,b[a+8]=1;a=this.g.h;s.Vc=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,s.Vc);a.bufferData(a.ARRAY_BUFFER,new Float32Array(b),a.STATIC_DRAW);s.Vc.ba=3;s.Vc.ca=b.length/3;!0==window.MelownMobile_&&null!=this.g.qa&&(this.g.qa.style.width="100%",this.g.qa.style.height="100%");b=window.MelownScreenScaleFactor_;La(this,Math.floor(this.J[0]*b),Math.floor(this.J[1]*b))}h=Ja.prototype;
h.ef=function(){if(!0!=this.X){var a=this.bc.getBoundingClientRect();La(this,Math.floor(a.width),Math.floor(a.height));this.wi&&this.wi()}};h.r=function(){!0!=this.X&&(this.X=!0,null!=this.bm&&this.bm.r(),this.Hb.reset(),null!=this.ig&&this.ig.r(),null!=this.Le&&this.Le.r(),null!=this.lf&&this.lf.r(),null!=this.mf&&this.mf.r(),null!=this.Ac&&this.Ac.r(),null!=this.Jd&&this.Jd.r(),this.bc.removeChild(this.g.qa))};
function La(a,b,c){var d=a.m;d.Wc=b/c;d.ka=!0;a.J=[b,c];a.df=[b,c];a.g.resize(a.J,void 0);a.g.clear(!0,!1);!0!=a.Wl&&!0!=a.Jg&&!0!=a.yi&&Oa(a);d=[];d[0]=2/b;d[1]=0;d[2]=0;d[3]=0;d[4]=0;d[5]=-2/c;d[6]=0;d[7]=0;d[8]=0;d[9]=0;d[10]=1;d[11]=0;d[12]=0.5*-b*d[0];d[13]=0.5*-c*d[5];d[14]=0;d[15]=1;a.fd=d}function Pa(a,b,c){var d=[0,0,0,1],d=s.f.bf(c,[b[0],b[1],b[2],1]);return 0!=d[3]?(b=[0,0,0],b[0]=0.5*(d[0]/d[3]+1)*a.J[0],b[1]=0.5*(-(d[1]/d[3])+1)*a.J[1],b[2]=d[2]/d[3],b):[0,0,0]}
function Sa(a,b,c){if(null==a.m)return[0,0,1];b=[2*b/a.J[0]-1,1-2*c/a.J[1],1];c=[b[0],b[1],-1,1];var d=s.f.create(),d=s.f.inverse(Ta(a.m));b=[0,0,0,0];s.f.bf(d,c,b);b[2]=-1;b[3]=0;c=s.f.create();c=s.f.inverse(Ua(a.m));a=[0,0,0,0];s.f.bf(c,b,a);return a=s.s.normalize([a[0],a[1],a[2]])}
function Va(a,b){var c=a.g.h;switch(b){case "base":var d=a.df[0],e=a.df[1];c.clearColor(0,0,0,1);oa(a.g,null);c=a.m;c.Wc=d/e;c.ka=!0;a.J=[d,e];a.g.resize(a.J,!0);a.m.update();a.Jg=!1;break;case "depth":oa(a.g,a.Ac),a.df=[a.J[0],a.J[1]],c.clearColor(1,1,1,1),c.enable(c.DEPTH_TEST),d=a.Pd,c.viewport(0,0,d,d),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),a.J=[d,d],a.g.clear(),a.m.update(),a.Jg=!0}}h.ob=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.cb(b,a[b])};
h.cb=function(a,b){switch(a){case "rendererAntialiasing":this.j.Ug=s.Bb(b,!0);break;case "rendererAllowScreenshots":this.j.Tg=s.Bb(b,!1)}};h.Eb=function(a){switch(a){case "rendererAntialiasing":return this.j.Ug;case "rendererAllowScreenshots":return this.j.Tg}};function G(a){this.k=a;this.g=a.g}h=G.prototype;h.clear=function(a){null!=a&&this.g.clear(a.clearDepth||!0,a.clearColor||!1,a.color||[255,255,255,255],null!=a.depth?a.depth:1);return this};
h.$c=function(a){return null==a||"object"!==typeof a?this:this.g.$c({Xc:null!=a.blend?a.blend:!1,ke:null!=a.stencil?a.stencil:!1,wf:null!=a.zoffset?a.zoffset:0,se:null!=a.zwrite?a.zwrite:!0,re:null!=a.ztest?a.ztest:!0,Ad:null!=a.zequal?a.zequal:!0,Fd:null!=a.culling?a.culling:!0})};h.Wb=function(a){null!=a&&this.g.Wb(a);return this};
h.createTexture=function(a){if(null==a||"object"!==typeof a)return null;var b=a.source;if(null==b)return null;var c=a.filter||"linear",d=a.repeat||!1;if(b instanceof Uint8Array){var e=a.width;a=a.height;if(e&&a){var g=new Ea(this.g);Ha(g,e,a,b,filter,d);return g}}return b instanceof Image?(g=new Ea(this.g),Ia(g,b,c,d),g):null};h.wm=function(a){a&&a.r();return this};
h.Zj=function(a){return null==a||"object"!==typeof a?null:new va(this.g,{u:a.vertices,rf:a.uvs,nj:a.normals,tn:a["vertex-size"],nn:a["uv-size"],mn:a["normal-size"]||3,Bo:a["vertex-attr"],Ao:a["uv-attr"],zo:a["normal-attr"],l:a.bbox},0,this.k.w)};h.um=function(a){a&&a.r();return this};h.createShader=function(a){if(null==a||"object"!==typeof a)return null;var b=a["vertex-shader"];a=a["fragment-shader"];if(null!=b&&a)return new w(this.g,b,a)};h.vm=function(a){null!=a&&null!=a.r&&resource.r();return this};
h.Dj=function(){return this};h.Nj=function(){return this};
h.ok=function(a){if(null==a||"object"!==typeof a||null==!a.mesh||!a["shader-variables"])return this;var b=a.vertex||"aPosition",c=a.uv||"aTexCoord",d=a.normal||"aNormal",e=a["shader-variables"],g=a.shader||"textured",f=this.k,k=a.mesh;a=a.texture;var l=Ua(f.m),m=Ta(f.m),p=f.bd;if("string"===typeof g)switch(g){case "hit":e.uMV||(e.uMV=["mat4",l]);e.uProj||(e.uProj=["mat4",m]);a=d=c=null;g=f.zi;break;case "shaded":case "textured":case "textured-and-shaded":e.uMV||(e.uMV=["mat4",l]),e.uProj||(e.uProj=
["mat4",m]),e.uFogDensity||(e.uFogDensity=["float",p]),d="textured"==g?null:"aNormal",g="textured"==g?f.Pg:"shaded"==g?f.km:f.mm}f.g.useProgram(g,b,c,d,null);for(var n in e)if(b=e[n],2==b.length)switch(b[0]){case "floatArray":b=b[1];l=g.h;null!=l&&null!=g.Ra&&(m=g.getUniform(n),null!=m&&l.uniform1fv(m,b));break;case "float":Da(g,n,b[1]);break;case "mat3":b=b[1];l=g.h;null!=l&&null!=g.Ra&&(m=g.getUniform(n),null!=m&&l.uniformMatrix3fv(m,!1,b));break;case "mat4":qa(g,n,b[1]);break;case "vec2":ua(g,
n,b[1]);break;case "vec3":Aa(g,n,b[1]);break;case "vec4":pa(g,n,b[1]);break;case "sampler":na(g,n,b[1])}null!=a&&f.g.bindTexture(a);k.Wa(g,"aPosition",a?c:null,d,null);return this};
h.drawImage=function(a){if(null==a||"object"!==typeof a||null==a.texture||null==a.rect)return this;var b=a.rect;this.k.drawImage(b[0],b[1],b[2],b[3],a.texture,a.color||[255,255,255,255],null!=a.depth?a.depth:0,null!=a["depth-test"]?a["depth-test"]:!1,null!=a.blend?a.blend:!1,null!=a["write-depth"]?a["write-depth"]:!1,null!=a["use-state"]?a["use-state"]:!1);return this};
h.Mf=function(a){if(null==a||"object"!==typeof a||null==a.texture||null==a.mvp)return this;this.k.Mf(a.mvp,a.texture,a.color||[255,255,255,255],null!=a["depth-test"]?a["depth-test"]:!1,null!=a.blend?a.blend:!1,null!=a["write-depth"]?a["write-depth"]:!1,null!=a["use-state"]?a["use-state"]:!1);return this};
h.Be=function(a){if(null==a||"object"!==typeof a||null==a.points)return this;this.k.Be(a.points,a.size||2,a.color||[255,255,255,255],null!=a["depth-test"]?a["depth-test"]:!1,null!=a.blend?a.blend:!1,null!=a["write-depth"]?a["write-depth"]:!1,null!=a["use-state"]?a["use-state"]:!1);return this};h.lk=function(){return this};h.ad=function(){return this};
h.ik=function(a){if(null==a||"object"!==typeof a)return this;var b=a.text,c=a.coords;if(!b||!c)return this;var d=a.size||16;Wa(this.k,c[0]-0.5*Ya(d,b),c[1],d,b,a.color||[255,255,255,255],a.depth,a["use-state"]||!1);return this};h.cd=function(a,b){return Pa(this.k,a,b)};h.Hk=function(){return this.k.J.slice()};h.ob=function(a){this.k.ob(a);return this};h.cb=function(a,b){this.k.cb(a,b);return this};h.Eb=function(a){return this.k.Eb(a,value_)};G.prototype.clear=G.prototype.clear;
G.prototype.createState=G.prototype.$c;G.prototype.setState=G.prototype.Wb;G.prototype.createTexture=G.prototype.createTexture;G.prototype.removeTexture=G.prototype.wm;G.prototype.createMesh=G.prototype.Zj;G.prototype.removeMesh=G.prototype.um;G.prototype.createshader=G.prototype.Gn;G.prototype.removeResource=G.prototype.vm;G.prototype.addJob=G.prototype.Dj;G.prototype.clearJobs=G.prototype.Nj;G.prototype.drawMesh=G.prototype.ok;G.prototype.drawImage=G.prototype.drawImage;
G.prototype.drawBillboard=G.prototype.Mf;G.prototype.drawLineString=G.prototype.Be;G.prototype.drawJobs=G.prototype.lk;G.prototype.drawBBox=G.prototype.ad;G.prototype.drawDebugText=G.prototype.ik;G.prototype.getCanvasCoords=G.prototype.cd;G.prototype.getCanvasSize=G.prototype.Hk;G.prototype.setConfigParams=G.prototype.ob;G.prototype.setConfigParam=G.prototype.cb;G.prototype.getConfigParam=G.prototype.Eb;
function Za(a,b,c,d,e,g){this.t=[];this.H=[];this.t[0]=null!=a?a:Number.POSITIVE_INFINITY;this.t[1]=null!=b?b:Number.POSITIVE_INFINITY;this.t[2]=null!=c?c:Number.POSITIVE_INFINITY;this.H[0]=null!=d?d:Number.NEGATIVE_INFINITY;this.H[1]=null!=e?e:Number.NEGATIVE_INFINITY;this.H[2]=null!=g?g:Number.NEGATIVE_INFINITY;this.Fl=Math.abs(Math.max(this.H[0]-this.t[0],this.H[1]-this.t[1],this.H[2]-this.t[2]))}Za.prototype.ua=function(){return new Za(this.t[0],this.t[1],this.t[2],this.H[0],this.H[1],this.H[2])};
function $a(a,b){return a.H[b]-a.t[b]}Za.prototype.Df=function(a){return null!=a?(a[0]=0.5*(this.t[0]+this.H[0]),a[1]=0.5*(this.t[1]+this.H[1]),a):[0.5*(this.t[0]+this.H[0]),0.5*(this.t[1]+this.H[1]),0.5*(this.t[2]+this.H[2])]};
function Ka(a,b,c,d){this.R=a;this.M=[0,0,0];this.lc=[0,0,0];this.Wc=1;this.Sf=b;this.ae=c;this.yc=d;this.Xg=!1;this.Yd=s.f.create();this.sd=s.f.create();this.he=s.f.create();this.Zd=s.f.create();this.Db=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];this.Ii=[0,0,0,0];this.ka=!0}h=Ka.prototype;h.Lb=function(a){this.M=a;this.ka=!0};h.td=function(a){this.Xg=!1;this.lc=a;this.ka=!0};
h.ua=function(a){a=new Ka(this.R,null!=a?a:this.fc(),this.ae,this.yc);a.Lb(this.gc());a.td(this.ib());a.Wc=this.Wc;a.ka=!0;a.update();return a};h.gc=function(){return[this.M[0],this.M[1],this.M[2]]};h.ib=function(){return[this.lc[0],this.lc[1],this.lc[2]]};h.fc=function(){return this.Sf};function Ua(a){a.ka&&a.update();return a.Yd}function Ta(a){a.ka&&a.update();return a.he}function ab(a){a.ka&&a.update();return a.Zd}
function S(a,b){a.ka&&a.update();s.f.va(a.Yd,b,a.Ii);var c=s.s.length(a.Ii);return c<a.ae?[Number.POSITIVE_INFINITY,c]:[a.he[0]/c,c]}h.ue=function(a,b){this.ka&&this.update();var c=a.t,d=a.H;b&&(c=[c[0]-b[0],c[1]-b[1],c[2]-b[2]],d=[d[0]-b[0],d[1]-b[1],d[2]-b[2]]);c=[[c[0],c[1],c[2],1],[c[0],c[1],d[2],1],[c[0],d[1],c[2],1],[c[0],d[1],d[2],1],[d[0],c[1],c[2],1],[d[0],c[1],d[2],1],[d[0],d[1],c[2],1],[d[0],d[1],d[2],1]];for(d=0;6>d;d++){for(var e=!0,g=0;8>g;g++)if(0<=s.sf.hb(this.Db[d],c[g])){e=!1;break}if(e)return!1}return!0};
h.update=function(){this.Xg||(s.f.multiply(s.bb(2,s.ta(-this.lc[2])),s.bb(0,s.ta(-this.lc[1]-90)),this.sd),s.f.multiply(this.sd,s.bb(2,s.ta(-this.lc[0])),this.sd));s.f.multiply(this.sd,s.Tc(-this.M[0],-this.M[1],-this.M[2]),this.Yd);this.he=!0==this.Yl?s.Zl(this.uj,this.Wc,this.ae,this.yc):s.am(this.Sf,this.Wc,this.ae,this.yc);s.f.multiply(this.he,this.Yd,this.Zd);this.Db[0]=[0,0,1,1];this.Db[1]=[0,0,-1,1];this.Db[2]=[1,0,0,1];this.Db[3]=[-1,0,0,1];this.Db[4]=[0,1,0,1];this.Db[5]=[0,-1,0,1];var a=
s.f.create();s.f.Xb(this.Zd,a);for(var b=0;6>b;b++)this.Db[b]=s.f.bf(a,this.Db[b]);this.ka=!1};
function Oa(a,b,c){if(b){var d=s.f.create();s.f.multiply(s.hf(2,2,2),s.Tc(-0.5,-0.5,-0.5),d);var e=s.f.create(),g=a.m.gc();s.f.multiply(s.Tc(g[0],g[1],g[2]-400),s.ym(Math.min(0.9*a.m.yc,6E5)),e);g=s.f.create();s.f.multiply(ab(a.m),e,g);s.f.multiply(g,d,g);a.g.useProgram(c,"aPosition","aTexCoord");a.g.bindTexture(b);na(c,"uSampler",0);qa(c,"uMVP",g);a.g.h.depthMask(!1);a.lf.Wa(c,"aPosition","aTexCoord");a.g.h.depthMask(!0);a.g.h.enable(a.g.h.CULL_FACE)}}
Ja.prototype.Be=function(a,b,c,d,e,g,f){var k=this.g.h,l=0,m=a.length;if(32<m)for(var p=0;p<m;p+=31)this.Be(a.slice(p,p+32),b,c,d,e,g,f);else{for(p=0;p<m;p++){var n=a[p];this.ff[l]=n[0];this.ff[l+1]=n[1];this.ff[l+2]=n[2]||0;l+=3}!0!=f&&(!0!=d&&k.disable(k.DEPTH_TEST),!0==e&&(k.blendEquationSeparate(k.FUNC_ADD,k.FUNC_ADD),k.blendFuncSeparate(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA,k.ONE,k.ONE_MINUS_SRC_ALPHA),k.enable(k.BLEND)),!1===g&&k.depthMask(!1),k.disable(k.CULL_FACE));this.g.useProgram(this.pd,"aPosition",
null);qa(this.pd,"uMVP",this.fd);Aa(this.pd,"uScale",[2/this.J[0],2/this.J[1],0.5*b]);pa(this.pd,"uColor",null!=c?c:[255,255,255,255]);Aa(this.pd,"uPoints",this.ff);this.cm.Wa(this.pd,"aPosition",m);!0!=f&&(!0!=d&&k.enable(k.DEPTH_TEST),!0==e&&k.disable(k.BLEND),!1===g&&k.depthMask(!1),k.enable(k.CULL_FACE))}};
Ja.prototype.drawImage=function(a,b,c,d,e,g,f,k,l,m,p){if(null!=e&&null!=this.fd){var n=this.g.h;!0!=p&&(!0!=k&&n.disable(n.DEPTH_TEST),!0==l&&(n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA),n.enable(n.BLEND)),!1===m&&n.depthMask(!1),n.disable(n.CULL_FACE));this.g.useProgram(this.oa,"aPosition",null);this.g.bindTexture(e);e=this.Mc;n.bindBuffer(n.ARRAY_BUFFER,e);n.vertexAttribPointer(this.oa.getAttribute("aPosition"),
e.ba,n.FLOAT,!1,0,0);e=this.Lc;n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e);qa(this.oa,"uProjectionMatrix",this.fd);qa(this.oa,"uData",[a,b,0,0,a+c,b,1,0,a+c,b+d,1,1,a,b+d,0,1]);pa(this.oa,"uColor",null!=g?g:[255,255,255,255]);Da(this.oa,"uDepth",null!=f?f:0);n.drawElements(n.TRIANGLES,e.ca,n.UNSIGNED_SHORT,0);!0!=p&&(!1===m&&n.depthMask(!0),!0!=k&&n.enable(n.DEPTH_TEST),!0==l&&n.disable(n.BLEND),n.enable(n.CULL_FACE))}};
Ja.prototype.Mf=function(a,b,c,d,e,g,f){var k=this.g.h;!0!=f&&(!0!=d&&k.disable(k.DEPTH_TEST),!0==e&&(k.blendEquationSeparate(k.FUNC_ADD,k.FUNC_ADD),k.blendFuncSeparate(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA,k.ONE,k.ONE_MINUS_SRC_ALPHA),k.enable(k.BLEND)),!1===g&&k.depthMask(!1),k.disable(k.CULL_FACE));this.g.useProgram(this.oa,"aPosition","aTexCoord");this.g.bindTexture(b);na(this.oa,"uSampler",0);b=this.Mc;k.bindBuffer(k.ARRAY_BUFFER,b);k.vertexAttribPointer(this.oa.getAttribute("aPosition"),b.ba,k.FLOAT,
!1,0,0);b=this.Lc;k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,b);qa(this.oa,"uProjectionMatrix",a);qa(this.oa,"uData",[0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1]);pa(this.oa,"uColor",null!=c?c:[255,255,255,255]);Da(this.oa,"uDepth",0);k.drawElements(k.TRIANGLES,b.ca,k.UNSIGNED_SHORT,0);!0!=f&&(!1===g&&k.depthMask(!0),!0!=d&&k.enable(k.DEPTH_TEST),!0==e&&k.disable(k.BLEND),k.enable(k.CULL_FACE))};
function Wa(a,b,c,d,e,g,f,k){if(null!=a.fd){var l=a.g.h;!0!=k&&(l.disable(l.CULL_FACE),null==f?l.disable(l.DEPTH_TEST):(l.depthFunc(l.LEQUAL),l.enable(l.DEPTH_TEST)));a.g.useProgram(a.oa,"aPosition",null);a.g.bindTexture(a.Rm);var m=a.Mc;l.bindBuffer(l.ARRAY_BUFFER,m);l.vertexAttribPointer(a.oa.getAttribute("aPosition"),m.ba,l.FLOAT,!1,0,0);m=a.Lc;l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,m);qa(a.oa,"uProjectionMatrix",a.fd);pa(a.oa,"uColor",g);Da(a.oa,"uDepth",null!=f?f:0);g=d-1;var p=Math.round(0.5*d),
n=1/256,q=Ya(d,e)+2,t=0,r=(t&15)<<4,u=t>>4<<4;qa(a.oa,"uData",[b-2,c-2,r*n,0.0078125*u,b-2+q,c-2,(r+15)*n,0.0078125*u,b-2+q,c+d+1,(r+15)*n,0.0078125*(u+15),b-2,c+d+1,r*n,0.0078125*(u+15)]);l.drawElements(l.TRIANGLES,m.ca,l.UNSIGNED_SHORT,0);for(var q=0,C=e.length;q<C;q++){t=e.charCodeAt(q)-32;r=(t&15)<<4;u=t>>4<<4;switch(t){case 12:case 14:case 27:case 28:case 64:case 73:case 76:case 84:qa(a.oa,"uData",[b,c,r*n,0.0078125*u,b+p,c,(r+8)*n,0.0078125*u,b+p,c+d,(r+8)*n,0.0078125*(u+16),b,c+d,r*n,0.0078125*
(u+16)]);b+=p;break;default:qa(a.oa,"uData",[b,c,r*n,0.0078125*u,b+g,c,(r+15)*n,0.0078125*u,b+g,c+d,(r+15)*n,0.0078125*(u+16),b,c+d,r*n,0.0078125*(u+16)]),b+=g}l.drawElements(l.TRIANGLES,m.ca,l.UNSIGNED_SHORT,0)}!0!=k&&(l.enable(l.CULL_FACE),null==f&&l.enable(l.DEPTH_TEST))}}function Ya(a,b){for(var c=a-1,d=Math.round(0.5*a),e=0,g=0,f=b.length;g<f;g++)switch(b.charCodeAt(g)-32){case 12:case 14:case 27:case 28:case 64:case 73:case 76:case 84:e+=d;break;default:e+=c}return e}s.eb={};
s.eb.kf=function(a,b,c,d,e){a[e]=b[0];a[e+1]=b[1];a[e+2]=b[2];a[e+3]=c[0];a[e+4]=c[1];a[e+5]=c[2];a[e+6]=d[0];a[e+7]=d[1];a[e+8]=d[2]};s.eb.jf=function(a,b,c,d,e){a[e]=b[0];a[e+1]=b[1];a[e+2]=c[0];a[e+3]=c[1];a[e+4]=d[0];a[e+5]=d[1]};
s.eb.Lj=function(){var a=5;a--;for(var b=s.eb,c=a*a*2,d=new Float32Array(9*c),c=new Float32Array(6*c),e=1*a,g=0,f=0,k=0;k<a;k++)for(var l=0;l<a;l++){var m=l*e,p=(l+1)*e,n=k*e,q=(k+1)*e;b.kf(d,[m,n,0],[p,n,0],[p,q,0],g);b.jf(d,[m,n],[p,n],[p,q],f);g+=9;f+=6;b.kf(d,[p,q,0],[m,q,0],[m,n,0],g);b.jf(d,[p,q],[m,q],[m,n],f);g+=9;f+=6}return{l:new Za(0,0,0,1,1,1),u:d,rf:c}};
s.eb.nf=function(a,b){b*=Math.PI;a=2*a*Math.PI;return[Math.cos(a)*Math.sin(b)*0.5+0.5,Math.sin(a)*Math.sin(b)*0.5+0.5,0.5*Math.cos(b)+0.5]};s.eb.uh=function(a,b){for(var c=s.eb,d=a*b*2,e=new Float32Array(9*d),d=new Float32Array(6*d),g=0,f=0,k=0;k<a;k++)for(var l=0;l<b;l++)c.El(l/b,k/a,(l+1)/b,(k+1)/a,e,g,d,f),g+=18,f+=12;return{l:new Za(0,0,0,1,1,1),u:e,rf:d}};
s.eb.El=function(a,b,c,d,e,g,f,k){var l=s.eb,m=[a,b],p=l.nf(a,d),n=[a,d],q=l.nf(c,b),t=[c,b],r=l.nf(c,d);c=[c,d];l.kf(e,p,l.nf(a,b),q,g);l.jf(f,n,m,t,k);l.kf(e,q,r,p,g+9);l.jf(f,t,c,n,k+6)};s.Vc=null;
function bb(a,b,c,d){this.j=d||{};this.ob(d);this.w=a;this.mb=this.w.$f();this.Xa=b;this.Yj=a.Yj;this.X=!1;this.lj=0;this.j=d||{};this.pg=!1;this.Bd=c.split("?")[0].split("/").slice(0,-1).join("/")+"/";this.M=new T(this,["obj",0,0,"fix",0,0,0,0,0,0]);this.ki=this.M.ua();this.Rc={};this.yb={};this.p={};this.xe={};this.Ca=[];this.Je=[];this.Qb=[];this.ya=[];this.me=Array(500);this.gi=null;this.Gd=new cb(0,{});this.Dh="";this.$d=[];this.cc=this.yd=0;this.gk=["base","hit"];this.dh=[];this.Ri=[];this.Cb=
[];this.uf={lg:[],qi:[]};this.Hb=new db(this,1048576*this.j.We);this.mc=new db(this,1048576*this.j.Ve);this.kc=new db(this,1048576*this.j.Ye);this.Ec=new eb(this,this.j.vg);this.k=this.w.k;this.m=this.k.m;this.uc=10;this.fb=[0,0,0];this.Cf=[0,0,1];this.Bf=0;this.n=new fb(this);var e;a=this.Xa.srses;this.Rc={};if(null==a)e=!1;else{for(e in a)b=new gb(this,e,a[e]),this.Rc[e]=b;e=!0}if(e&&(e=this.Xa.referenceFrame,null==e?e=!1:(this.yb=new hb(this,e),e=!1==this.yb.qc?!1:!0),e)){var g;e=this.Xa.credits;
this.p={};if(null==e)g=!1;else{for(g in e)a=g,b=new ib(this,e[g]),this.p[a]=b,this.xe[b.d]=b,b.mg=a;g=!0}if(g){g=this.Xa.surfaces;this.Ca=[];if(null==g)g=!1;else{e=0;for(a=g.length;e<a;e++)b=new jb(this,g[e]),this.Ca.push(b),b.e=this.Ca.length-1;g=!0}if(g){g=this.Xa.glue;this.Je=[];if(null!=g)for(e=0,a=g.length;e<a;e++)b=new s.Bj(this,g[e],!0),this.Je[b.d.join(";")]=b;g=this.Xa.boundLayers;this.ya=[];if(null!=g)for(var f in g)e=new kb(this,g[f],f),this.ya[f]=e;f=this.Xa.freeLayers;this.Qb=[];if(null!=
f)for(var k in f)g=new s.Aj(this,f[k]),this.Qb[k]=g;k=this.Xa.namedViews;this.$d=[];if(null!=k)for(var l in k)f=new cb(0,k[l]),this.$d[l]=f;l=this.Xa.view;null!=l&&(this.gi=JSON.parse(JSON.stringify(l)));l=this.Xa.browserOptions;this.th={};null!=l&&(this.th=JSON.parse(JSON.stringify(l)))}}}null!=this.Xa.position&&this.Lb(this.Xa.position,!1);this.ud(this.gi);this.ne=new mb(this,!1);this.kd=0.5*this.k.J[0];this.rk=this.mk=this.Of=this.Lf=!1;this.uk=0;this.qk=this.hk=this.sk=this.fk=this.pk=this.tk=
this.jk=this.kk=!1;this.Pf=0;this.Nf=this.j.wg;this.bk=2;this.bd=0;this.Ih=this.k.g.$c({});this.ek=this.k.g.$c({Ad:!0,Xc:!0});this.Ia=[];this.te("map",this.nk.bind(this),!0)}h=bb.prototype;h.r=function(){this.X=!0;null!=this.k&&(this.k.r(),this.k=null)};h.He=function(){return this.w.ql.He()};h.bg=function(){return nb(this.Rc)};h.Xf=function(){return nb(this.p)};h.cg=function(){for(var a=[],b=0,c=this.Ca.length;b<c;b++)a.push(this.Ca[b].d);return a};
function ob(a,b){var c=a.ya,d;for(d in c)if(c[d].Rl==b)return c[d];return null}h.Wf=function(){return nb(this.ya)};h.Fe=function(){return nb(this.Qb)};function pb(a,b){return null==b?null:-1!=b.indexOf("+proj")?new gb(a,{srsDef:b}):a.Rc[b]}h.ud=function(a,b){if(null!=a){if("string"===typeof a){a=this.$d[a];if(!a)return;a=a.tb()}var c=JSON.stringify(a);if(c!=this.Dh||b)this.Gd.parse(a),this.Dh=c,this.Qb=this.Gd.Qb,this.yd++;sb(this);tb(this);ub(this)}};h.dg=function(){return this.Gd.tb()};
function vb(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c].d==b)return c;return-1}function wb(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c].d==b)return a[c];return null}function nb(a){var b=[],c;for(c in a)b.push(c);return b}h.Lb=function(a){this.M=new T(this,a);ub(this)};h.ea=function(a,b,c){return this.yb.ea(a,b,c)};function V(a){return a.yb.Za.cf}h.gc=function(){return this.M.ua()};h.ob=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.cb(b,a[b])};
h.Vf=function(a,b){if(!xb(V(this))){var c=yb(this).vn(a[0],a[1],b[0],b[1]),c=c.Cn-c.Dn;isNaN(c)&&(c=0);return c}return 0};
h.cb=function(a,b){switch(a){case "map":this.j.c=s.qj(b);break;case "mapCache":this.j.Ve=1048576*s.Zb(b,10,900);var c=this.mc;c.Ud=this.j.Ve;zb(c);break;case "mapGPUCache":this.j.We=1048576*s.Zb(b,10,360);c=this.Hb;c.Ud=this.j.We;zb(c);break;case "mapMetatileCache":this.j.Ye=1048576*s.Zb(b,10,60);c=this.kc;c.Ud=this.j.Ye;zb(c);break;case "mapTexelSizeFit":this.j.Ag=s.Zb(b,1E-4,1.1);break;case "mapTexelSizeTolerance":this.j.Ze=s.Zb(b,1E-4,2.2);break;case "mapDownloadThreads":this.j.vg=s.Zb(b,1,6);
break;case "mapMaxProcessingTime":this.j.Xe=s.Zb(b,1,50);break;case "mapMobileMode":this.j.oi=s.Bb(b,!1);break;case "mapMobileTexelDegradation":this.j.pi=s.Zb(b,1,2);break;case "mapNavSamplesPerViewExtent":this.j.Ub=s.Zb(b,1,10);break;case "mapFog":this.j.wg=s.Bb(b,!1);break;case "mapIgnoreNavtiles":this.j.yg=s.Bb(b,!1);break;case "mapAllowHires":this.j.sg=s.Bb(b,!0);break;case "mapAllowLowres":this.j.tg=s.Bb(b,!0);break;case "mapAllowSmartSwitching":this.j.ni=s.Bb(b,!0);break;case "mapHeightLodBlend":this.j.gd=
s.Bb(b,!0);break;case "mapHeightNodeBlend":this.j.xg=s.Bb(b,!0);break;case "mapBasicTileSequence":this.j.ug=s.Bb(b,!0)}};
h.Eb=function(a){switch(a){case "map":return this.j.c;case "mapCache":return this.j.Ve;case "mapGPUCache":return this.j.We;case "mapMetatileCache":return this.j.Ye;case "mapTexelSizeFit":return this.j.Ag;case "mapTexelSizeTolerance":return this.j.Ze;case "mapDownloadThreads":return this.j.vg;case "mapMaxProcessingTime":return this.j.Xe;case "mapMobileMode":return this.j.oi;case "mapMobileTexelDegradation":return this.j.pi;case "mapNavSamplesPerViewExtent":return this.j.Ub;case "mapFog":return this.j.wg;
case "mapIgnoreNavtiles":return this.j.yg;case "mapAllowHires":return this.j.sg;case "mapAllowLowres":return this.j.tg;case "mapAllowSmartSwitching":return this.j.ni;case "mapHeightLodBlend":return this.j.gd;case "mapHeightNodeBlend":return this.j.xg;case "mapBasicTileSequence":return this.j.ug}};function ub(a){a.ka=!0;a.il=!0}
h.Zf=function(a,b,c,d){this.il&&(this.cc=1,Va(this.k,"depth"),Ab(this),Va(this.k,"base"),this.cc=0);var e;e=this.k;var g=e.g.h;if(g.checkFramebufferStatus(g.FRAMEBUFFER)!=g.FRAMEBUFFER_COMPLETE)e=[0,0,0,0];else{var f=0,k=0,f=Math.floor(e.Pd/e.J[0]*a),k=Math.floor(e.Pd/e.J[1]*b);g=e.Ac;k=e.Pd-k-1;if(null!=g.v){g.g.bindTexture(g);oa(g.g,g);var l=g.h,m=new Uint8Array(4);l.readPixels(f,k,1,1,l.RGBA,l.UNSIGNED_BYTE,m);oa(g.g,null);f=m}else f=void 0;g=1/255*f[0]+f[1]+255*f[2]+65025*f[3];f=!(255==f[0]&&
255==f[1]&&255==f[2]&&255==f[3]);a=Sa(e,a,b);b=e.m.gc();e.Se=[b[0]+a[0]*g,b[1]+a[1]*g,b[2]+a[2]*g];e=[e.Se[0],e.Se[1],e.Se[2],f]}if(!e[3])return null;a=this.fb;e=this.ea([e[0]+a[0],e[1]+a[1],e[2]+a[2]],"physical","navigation");"float"==c&&(d=null!=d?d:Bb(this,e,100,this.j.Ub),c=this.Gb(e,d),e[2]-=c[0]);return e};
h.nk=function(){1!=this.cc&&la(this.k.g);this.uf={lg:[],qi:[]};s.f.create();this.M.check();this.uc=Cb(this.M);this.uc=s.Zc(this.uc,0.1,this.m.yc);var a=this.M.i[4];if("float"==this.M.i[3]){var b=Bb(this,W(this.M),Db(this.M),this.j.Ub),b=this.Gb(W(this.M),b,!0);this.n.cl=b[0];this.n.bl=a;a+=b[0]}b=this.M.Ee(xb(V(this)));this.m.Lb(b.ab);var c=this.m,d=b.Wg;c.Xg=!0;c.sd=d.slice();c.ka=!0;this.k.uc=b.sb;this.Cf=b.tf;this.Mj=b.rj;this.fb=b.ab;this.Bf=b.Xl+a;c=this.m;c.uj=Db(this.M);c.ka=!0;a=this.ea([W(this.M)[0],
W(this.M)[1],a],"navigation","physical");a[0]+=b.ab[0];a[1]+=b.ab[1];a[2]+=b.ab[2];this.m.Lb([0,0,0]);this.fb=a;a=Math.max(this.Bf,this.uc)/6E5;b=Math.max(2,40*a);a=Math.max(1,a);c=this.m;c.Sf=0.5*this.M.fc();c.ae=b;c.yc=6E6*a;c.ka=!0;this.k.ka=!0;this.k.Nf=this.Nf;this.k.g.clear(!0,!1);this.k.g.Wb(this.Ih);xb(V(this))?Oa(this.k,this.k.mf,this.k.Ai):Oa(this.k,this.k.rh,this.k.lm);this.Wa();xb(V(this))||V(this).hc()};
h.update=function(){if(!0!=this.X&&(null==this.bc||"hidden"!=this.bc.style.visibility)){var a=this.M,b=this.ki,b=b.i;a.i[0]==b[0]&&s.isEqual(a.i[1],b[1],1E-7)&&s.isEqual(a.i[2],b[2],1E-7)&&a.i[3]==b[3]&&s.isEqual(a.i[4],b[4],0.001)&&s.isEqual(a.i[5],b[5],0.001)&&s.isEqual(a.i[6],b[6],0.001)&&s.isEqual(a.i[7],b[7],0.001)&&s.isEqual(a.i[8],b[8],0.001)&&s.isEqual(a.i[9],b[9],0.001)||this.w.Pb("map-position-changed",{position:this.M.i.slice()});this.ki=this.M.ua();a=this.k.bc.getBoundingClientRect();
if(this.k.J[0]!=a.width||this.k.J[1]!=a.height)this.k.ef(),this.ka=!0;a=this.ka;b=this.n;if(a){b.Qf=0;b.Ce=0;for(var c=b.jb=0,d=b.gf.length;c<d;c++)b.gf[c]=0}b.xb=[[0,0],[0,0]];b.wb=[[0,0],[0,0]];b.vc++;b.Pi++;b.Fi=performance.now();this.pg||this.Ec.update();this.ka&&(this.ka=!1,Ab(this),this.w.Pb("map-update",{}));this.n.end(a)}};
s.Ek=function(){function a(a,c,d,e){var g=u(c.style,a,e),f=r(g,"visible",c,d),k=r(g,"z-index",c,d);if(!1!=f){var l={},m;for(m in c)"points"!=m&&"d-points"!=m&&(l[m]=c[m]);f=r(g,"hover-style",c,d);f=""!=f?u(f,a,e):null;null!=f?(M=1,b(a,c,d,g,k,l),M=2,b(a,c,d,f,k,l)):(M=0,b(a,c,d,g,k,l));m=r(g,"multi-pass",c,d);if(null!=m)for(var p=0,n=m.length;p<n;p++)k=m[p][0],g=u(m[p][1],a,e),f=r(g,"visible",c,d),!1!=f&&(f=r(g,"hover-style",c,d),f=""!=f?u(f,a,e):null,null!=f?(M=1,b(a,c,d,g,k,l),M=2,b(a,c,d,f,k,l)):
(M=0,b(a,c,d,g,k,l)))}}function b(a,b,c,d,e,g){switch(a){case "line-string":(r(d,"point",b,c)||r(d,"label",b,c))&&k(b,c,d,e,g);l(b,c,d,e,g);break;case "point-array":k(b,c,d,e,g),(r(d,"line",b,c)||r(d,"line-label",b,c))&&l(b,c,d,e,g)}}function c(a,b){for(var c=0,d=[0,0,0],e=[1,0,0],g=0,f=a.length-1;g<f;g++){var d=a[g],e=a[g+1],e=[e[0]-d[0],e[1]-d[1],e[2]-d[2]],k=vec3Length(e);if(c+k>b){c=(b-c)/k;d=[d[0]+e[0]*c,d[1]+e[1]*c,d[2]+e[2]*c];vec3Normalize(e);break}c+=k}return[d,e]}function d(a,b,c){var d=
0;c=c.ve;for(var e=0,g=a.length;e<g;e++){var f=a.charCodeAt(e);10!=f&&(9==f&&(f=32),f=c[f],null!=f&&(d+=f.wd*b))}return d}function e(a,b,e,f,k,l,m){var p=e/f.o,n=d(b,p,f),q,r=0;q=0;for(var t=a.length-1;q<t;q++)var u=a[q],A=a[q+1],r=r+vec3Length([A[0]-u[0],A[1]-u[1],A[2]-u[2]]);q=r;r=0.5*(q-n);0>r&&(r=0);if(!(n>q)){a:{n=r;q=0;for(var u=[0,0,0],u=[1,0,0],t=[0,0,0],p=n+d(b,p,f),A=0,C=a.length-1;A<C;A++){var u=a[A],E=a[A+1],u=[E[0]-u[0],E[1]-u[1],E[2]-u[2]];q+=vec3Length(u);q>n&&(vec3Normalize(u),t[0]+=
u[0],t[1]+=u[1],t[2]+=u[2]);if(q>p){vec3Normalize(t);p=[-t[1],t[0],0];break a}}p=t}null==p&&(p=[0,1]);A=a[0];n=l.length;t=m.length;q=f.ve;e/=f.o;u=f.Zg*e;A=[A[0],A[1],A[2]];C=0;for(E=b.length;C<E;C++){var F=b.charCodeAt(C);if(10==F)A[0]+=-D[1]*u,A[1]+=D[0]*u;else{9==F&&(F=32);var D=q[F],H=1;null!=D&&(H=D.wd*e);var I=c(a,r),D=c(a,r+H),D=[0.5*(D[1][0]+I[1][0]),0.5*(D[1][1]+I[1][1]),0.5*(D[1][2]+I[1][2])];vec3Normalize(D);t=g(I[0],D,-e*f.o*0.7+k,F,e,n,t,p,f,l,m);n=t[1];t=t[2];r+=H}}}}function g(a,b,
c,d,e,f,g,k,l,m,p){var n=[-b[1],b[0],0];a=[a[0],a[1],a[2]];var q=[a[0],a[1],a[2]],r=l.ve;l=r[d];var t=0,u=k[0];k=k[1];9==d||32==d?(l=r[32],null!=l&&(a[0]+=b[0]*l.wd*e,a[1]+=b[1]*l.wd*e,t=l.mi*e)):null!=l&&(d=l.mi*e,r=l.$n*e,c=[n[0]*c,n[1]*c,n[2]*c],n=[c[0]+n[0]*r,c[1]+n[1]*r,c[2]+n[2]*r],q[0]=a[0]+b[0]*d,q[1]=a[1]+b[1]*d,q[2]=a[2]+b[2]*d,m[f]=a[0]-c[0],m[f+1]=a[1]-c[1],m[f+2]=a[2]-c[2],p[g]=l.jj,p[g+1]=l.oj,p[g+2]=u,p[g+3]=k,m[f+3]=a[0]-n[0],m[f+4]=a[1]-n[1],m[f+5]=a[2]-n[2],p[g+4]=l.jj,p[g+5]=l.pj,
p[g+6]=u,p[g+7]=k,m[f+6]=q[0]-c[0],m[f+7]=q[1]-c[1],m[f+8]=q[2]-c[2],p[g+8]=l.kj,p[g+9]=l.oj,p[g+10]=u,p[g+11]=k,m[f+9]=a[0]-n[0],m[f+10]=a[1]-n[1],m[f+11]=a[2]-n[2],p[g+12]=l.jj,p[g+13]=l.pj,p[g+14]=u,p[g+15]=k,m[f+12]=q[0]-n[0],m[f+13]=q[1]-n[1],m[f+14]=q[2]-n[2],p[g+16]=l.kj,p[g+17]=l.pj,p[g+18]=u,p[g+19]=k,m[f+15]=q[0]-c[0],m[f+16]=q[1]-c[1],m[f+17]=q[2]-c[2],p[g+20]=l.kj,p[g+21]=l.oj,p[g+22]=u,p[g+23]=k,f+=18,g+=24,a[0]+=b[0]*l.wd*e,a[1]+=b[1]*l.wd*e,t=l.mi*e);return[a,f,g,t]}function f(a,b,
c){switch(a){case "top-left":return[0,0];case "top-right":return[-b,0];case "top-center":return[0.5*-b,0];case "center-left":return[0,0.5*-c];case "center-right":return[-b,0.5*-c];case "center-center":return[0.5*-b,0.5*-c];case "bottom-left":return[0,-c];case "bottom-right":return[-b,-c];case "bottom-center":return[0.5*-b,-c]}}function k(a,b,c,e,k){var l=a.points||[];if(0!=l.length){var m=r(c,"visibility",a,b),p=r(c,"hover-event",a,b),n=r(c,"click-event",a,b),q=r(c,"draw-event",a,b),t=r(c,"enter-event",
a,b),u=r(c,"leave-event",a,b),C=r(c,"zbuffer-offset",a,b),qc=r(c,"point",a,b),Tb=r(c,"point-flat",a,b),X=r(c,"point-color",a,b),ma=0.5*r(c,"point-radius",a,b),Fa=r(c,"icon",a,b);if(!0==Fa)var wa={we:r(c,"icon-color",a,b),Ji:r(c,"icon-scale",a,b),ce:r(c,"icon-offset",a,b),Kg:r(c,"icon-origin",a,b),vd:r(c,"icon-source",a,b),N:[],fe:[],le:[]};var lb=r(c,"label",a,b);if(!0==lb)var ta={we:r(c,"label-color",a,b),o:r(c,"label-size",a,b),ce:r(c,"label-offset",a,b),Kg:r(c,"label-origin",a,b),Ej:r(c,"label-align",
a,b),vd:r(c,"label-source",a,b),rc:r(c,"label-width",a,b),N:[],fe:[],le:[]};b=a=0;c=[];var ra;ra=4*ma;8>ra&&(ra=8);32<ra&&(ra=32);for(var x=0,z=2*Math.PI/ra,aa=0;aa<ra;aa++)c[aa]=[-Math.sin(x),Math.cos(x)],x+=z;c[ra]=[0,1];var aa=l[0],K=[aa[0],aa[1],aa[2]],x=[0,0,0],z=Array(9*l.length*ra);if(!1==Tb)var y=Array(12*l.length*ra);for(var aa=0,ja=l.length;aa<ja;aa++){!0==F&&(K=[K[0]-E,K[1]-H,K[2]]);null!=forceScale_&&(K=[K[0]*forceScale_[0],K[1]*forceScale_[1],K[2]*forceScale_[2]]);x[0]+=K[0];x[1]+=K[1];
x[2]+=K[2];for(var U=0;U<ra;U++){if(!0==Fa){var ea=K,Z=wa,v=Z.vd;if(null!=v){var B=Math.abs(v[3]*Z.Ji),N=Math.abs(v[4]*Z.Ji),L=Z.N,O=Z.le,ia=Z.fe,da=L.length;L.push(0,0,0,B,0,0,B,-N,0);O.push(v[1],v[2],0,0,v[1]+v[3],v[2],0,0,v[1]+v[3],v[2]+v[4],0,0);L.push(0,0,0,0,-N,0,B,-N,0);O.push(v[1],v[2],0,0,v[1],v[2]+v[4],0,0,v[1]+v[3],v[2]+v[4],0,0);v=f(Z.Kg,B,N);v[0]+=Z.ce[0];v[1]+=Z.ce[1];Z=da;for(da=L.length;Z<da;Z+=3)ia.push(ea[0],ea[1],ea[2]),L[Z]+=v[0],L[Z+1]-=v[1]}}if(!0==lb&&(ea=K,L=ta,!(null==L.vd||
""==L.vd||1E-4>Math.abs(L.o)))){for(var ia=L.N,v=L.le,Z=L.fe,da=ia.length,ba=L.vd.match(/[^\r\n]+/g),B=[],N=0,O=ba.length;N<O;N++){var J=ba[N];do{var za;a:{za=0;for(var Qa=I["default"].ve,Ma=0,Na=J.length;Ma<Na;Ma++){var sa=J.charCodeAt(Ma);if(za>L.rc&&(10==sa||9==sa||32==sa)){za=Ma;break a}10!=sa&&(9==sa&&(sa=32),sa=Qa[sa],null!=sa&&(za+=L.o/I["default"].o*sa.wd))}za=Na}if(J.length==za){B.push(J);break}B.push(J.substring(0,za));J=J.substring(za+1)}while(1)}J=ba=0;N=I["default"];za=L.o/N.o*N.Zg;Qa=
0;Ma=[];N=0;for(O=B.length;N<O;N++)Ma[N]=d(B[N],L.o/I["default"].o,I["default"]),Qa=Math.max(Ma[N],Qa);N=0;for(O=B.length;N<O;N++){Na=Ma[N];switch(L.Ej){case "left":ba=0;break;case "right":ba=Qa-Na;break;case "center":ba=0.5*(Qa-Na)}for(var Ga=[ba,J,0],Na=B[N],sa=I["default"],rc=ia,sc=v,Ub=[1,0,0],Rc=[0,1],tc=rc.length,Xa=sc.length,uc=L.o/sa.o,vc=sa.Zg*uc,Ra=[Ga[0],Ga[1],Ga[2]],Ga=[Ga[0],Ga[1],Ga[2]],Vb=0,Sc=Na.length;Vb<Sc;Vb++){var wc=Na.charCodeAt(Vb);10==wc?(Ra[0]+=-Ub[1]*vc,Ra[1]+=Ub[0]*vc,Ga=
[Ra[0],Ra[1],Ra[2]]):(Xa=g(Ga,Ub,0,wc,uc,tc,Xa,Rc,sa,rc,sc),Ga=Xa[0],tc=Xa[1],Xa=Xa[2])}J-=za}v=f(L.Kg,Qa,-J);v[0]+=L.ce[0];v[1]+=L.ce[1];N=da;for(O=ia.length;N<O;N+=3)Z.push(ea[0],ea[1],ea[2]),ia[N]+=v[0],ia[N+1]-=v[1]}!0==qc&&(!0==Tb?(z[a]=K[0],z[a+1]=K[1],z[a+2]=K[2],z[a+3]=K[0]+c[U][0]*ma,z[a+4]=K[1]+c[U][1]*ma,z[a+5]=K[2],z[a+6]=K[0]+c[U+1][0]*ma,z[a+7]=K[1]+c[U+1][1]*ma,z[a+8]=K[2]):(z[a]=K[0],z[a+1]=K[1],z[a+2]=K[2],y[b]=0,y[b+1]=0,y[b+2]=0,y[b+3]=0,z[a+3]=K[0],z[a+4]=K[1],z[a+5]=K[2],y[b+
4]=c[U][0]*ma,y[b+5]=c[U][1]*ma,y[b+6]=0,y[b+7]=0,z[a+6]=K[0],z[a+7]=K[1],z[a+8]=K[2],y[b+8]=c[U+1][0]*ma,y[b+9]=c[U+1][1]*ma,y[b+10]=0,y[b+11]=0,b+=12),a+=9)}K=l[aa+1]}0<ja&&(x[0]/=ja,x[1]/=ja,x[2]/=ja);x[0]+=Y[0];x[1]+=Y[1];x[2]+=Y[2];l=p||n||t||u;!0==qc&&(!0==Tb?postMessage({command:"addRenderJob",type:"flat-line",vertexBuffer:z,color:X,"z-index":e,visibility:m,center:x,"hover-event":p,"click-event":n,"draw-event":q,"enter-event":t,"leave-event":u,"zbuffer-offset":C,hitable:l,state:M,eventInfo:k,
lod:A?null:D}):postMessage({command:"addRenderJob",type:"pixel-line",vertexBuffer:z,normalBuffer:y,color:X,"z-index":e,visibility:m,center:x,"hover-event":p,"click-event":n,"draw-event":q,"enter-event":t,"leave-event":u,"zbuffer-offset":C,hitable:l,state:M,eventInfo:k,lod:A?null:D}));!0==Fa&&0<wa.N.length&&postMessage({command:"addRenderJob",type:"icon",vertexBuffer:wa.N,originBuffer:wa.fe,texcoordsBuffer:wa.le,icon:P[wa.vd[0]],color:wa.we,"z-index":e,visibility:m,center:x,"hover-event":p,"click-event":n,
"draw-event":q,"enter-event":t,"leave-event":u,"zbuffer-offset":C,hitable:l,state:M,eventInfo:k,lod:A?null:D});!0==lb&&0<ta.N.length&&postMessage({command:"addRenderJob",type:"label",vertexBuffer:ta.N,originBuffer:ta.fe,texcoordsBuffer:ta.le,color:ta.we,"z-index":e,visibility:m,center:x,"hover-event":p,"click-event":n,"draw-event":q,"enter-event":t,"leave-event":u,"zbuffer-offset":C,hitable:l,state:M,eventInfo:k,lod:A?null:D})}}function l(a,b,c,d,g){var f,k=a.points||[];if(0!=k.length&&!1!=r(c,"line",
a,b)){var l=r(c,"hover-event",a,b),m=r(c,"click-event",a,b),p=r(c,"draw-event",a,b),n=r(c,"enter-event",a,b),q=r(c,"leave-event",a,b),t=r(c,"zbuffer-offset",a,b),u=r(c,"line-flat",a,b),C=r(c,"line-color",a,b),X=0.5*r(c,"line-width",a,b);f=r(c,"line-style",a,b);var ma=r(c,"line-style-texture",a,b),Fa=r(c,"line-style-background",a,b),wa=r(c,"line-label",a,b),lb=r(c,"line-label-size",a,b);if(!0==wa)var ta=Array(k.length),ra=Array(k.length);for(var x=0,z=0,aa=[],K=[],y=0,ja=2*Math.PI/8,U=0;8>U;U++)aa[U]=
[-Math.sin(y),Math.cos(y)],K[U]=y,y+=ja;aa[8]=[0,1];K[8]=0;var ea=k[0],y=[ea[0],ea[1],ea[2]],ja="solid"!=f,Z=6*(ja||!u?4:3),v=Array(k.length*Z+24*k.length*(ja||!u?4:3));if(!1==u||!0==ja)var B=Array(24*k.length+96*k.length);if(!0==ja)var N=Array(k.length);for(var L=0.001,O=0.001,U=0,ia=k.length-1;U<ia;U++){y=k[U];f=k[U+1];!0==F&&(y=[y[0]-E,y[1]-H,y[2]],f=[f[0]-E,f[1]-H,f[2]]);null!=forceScale_&&(y=[y[0]*forceScale_[0],y[1]*forceScale_[1],y[2]*forceScale_[2]],f=[f[0]*forceScale_[0],f[1]*forceScale_[1],
f[2]*forceScale_[2]]);if(!0!=u||ja)da=[f[0]-y[0],f[1]-y[1],0],ba=Math.sqrt(da[0]*da[0]+da[1]*da[1]),O+=ba,!0==u?(ba=0!=ba?X/ba:0,J=[-da[1]*ba,da[0]*ba,0],null!=N&&(N[U]=0!=ba?Math.atan2(da[0],da[1])+0.5*Math.PI:0),v[x]=y[0],v[x+1]=y[1],v[x+2]=y[2],v[x+3]=L,B[z]=J[0],B[z+1]=J[1],B[z+2]=0,B[z+3]=X,v[x+4]=y[0],v[x+5]=y[1],v[x+6]=y[2],v[x+7]=-L,B[z+4]=-J[0],B[z+5]=-J[1],B[z+6]=0,B[z+7]=-X,v[x+8]=f[0],v[x+9]=f[1],v[x+10]=f[2],v[x+11]=O,B[z+8]=J[0],B[z+9]=J[1],B[z+10]=0,B[z+11]=X,v[x+12]=y[0],v[x+13]=y[1],
v[x+14]=y[2],v[x+15]=-L,B[z+12]=-J[0],B[z+13]=-J[1],B[z+14]=0,B[z+15]=-X,v[x+16]=f[0],v[x+17]=f[1],v[x+18]=f[2],v[x+19]=-O,B[z+16]=-J[0],B[z+17]=-J[1],B[z+18]=0,B[z+19]=-X,v[x+20]=f[0],v[x+21]=f[1],v[x+22]=f[2],v[x+23]=O,B[z+20]=J[0],B[z+21]=J[1],B[z+22]=0,B[z+23]=X):(v[x]=y[0],v[x+1]=y[1],v[x+2]=y[2],v[x+3]=L,B[z]=f[0],B[z+1]=f[1],B[z+2]=f[2],B[z+3]=X,v[x+4]=y[0],v[x+5]=y[1],v[x+6]=y[2],v[x+7]=-L,B[z+4]=f[0],B[z+5]=f[1],B[z+6]=f[2],B[z+7]=-X,v[x+8]=f[0],v[x+9]=f[1],v[x+10]=f[2],v[x+11]=-O,B[z+8]=
y[0],B[z+9]=y[1],B[z+10]=y[2],B[z+11]=X,v[x+12]=y[0],v[x+13]=y[1],v[x+14]=y[2],v[x+15]=L,B[z+12]=f[0],B[z+13]=f[1],B[z+14]=f[2],B[z+15]=X,v[x+16]=f[0],v[x+17]=f[1],v[x+18]=f[2],v[x+19]=-O,B[z+16]=y[0],B[z+17]=y[1],B[z+18]=y[2],B[z+19]=X,v[x+20]=f[0],v[x+21]=f[1],v[x+22]=f[2],v[x+23]=O,B[z+20]=y[0],B[z+21]=y[1],B[z+22]=y[2],B[z+23]=-X),x+=24,z+=24;else{var da=[f[0]-y[0],f[1]-y[1],0],ba=Math.sqrt(da[0]*da[0]+da[1]*da[1]),O=O+ba,ba=0!=ba?X/ba:0,J=[-da[1]*ba,da[0]*ba,0];v[x]=y[0]+J[0];v[x+1]=y[1]+J[1];
v[x+2]=y[2];v[x+3]=y[0]-J[0];v[x+4]=y[1]-J[1];v[x+5]=y[2];v[x+6]=f[0]+J[0];v[x+7]=f[1]+J[1];v[x+8]=f[2];v[x+9]=y[0]-J[0];v[x+10]=y[1]-J[1];v[x+11]=y[2];v[x+12]=f[0]-J[0];v[x+13]=f[1]-J[1];v[x+14]=f[2];v[x+15]=f[0]+J[0];v[x+16]=f[1]+J[1];v[x+17]=f[2];x+=18}L=O}y=[ea[0],ea[1],ea[2]];f=[0,0,0];U=0;for(ia=k.length;U<ia;U++){!0==F&&(y=[y[0]-E,y[1]-H,y[2]]);null!=forceScale_&&(y=[y[0]*forceScale_[0],y[1]*forceScale_[1],y[2]*forceScale_[2]]);f[0]+=y[0];f[1]+=y[1];f[2]+=y[2];ea=null!=N?N[U]:0;for(O=0;8>O;O++)!0!=
u||ja?(L=U!=ia-1?v[U*Z+3]:v[(U-1)*Z+11],v[x]=y[0],v[x+1]=y[1],v[x+2]=y[2],v[x+3]=L,B[z]=0,B[z+1]=0,B[z+2]=0,B[z+3]=0,v[x+4]=y[0],v[x+5]=y[1],v[x+6]=y[2],v[x+7]=L,B[z+4]=aa[O][0]*X,B[z+5]=aa[O][1]*X,B[z+6]=K[O]+ea,B[z+7]=0,v[x+8]=y[0],v[x+9]=y[1],v[x+10]=y[2],v[x+11]=L,B[z+8]=aa[O+1][0]*X,B[z+9]=aa[O+1][1]*X,B[z+10]=K[O+1]+ea,B[z+11]=0,x+=12,z+=12):(v[x]=y[0],v[x+1]=y[1],v[x+2]=y[2],v[x+3]=y[0]+aa[O][0]*X,v[x+4]=y[1]+aa[O][1]*X,v[x+5]=y[2],v[x+6]=y[0]+aa[O+1][0]*X,v[x+7]=y[1]+aa[O+1][1]*X,v[x+8]=y[2],
x+=9);!0==wa&&(ea=[y[0],y[1],y[2]+0.1*lb],ta[U]=ea,ra[ia-U-1]=ea);y=k[U+1]}0<ia&&(f[0]/=ia,f[1]/=ia,f[2]/=ia);f[0]+=Y[0];f[1]+=Y[1];f[2]+=Y[2];k={command:"addRenderJob",vertexBuffer:v,color:C,"z-index":d,center:f,normalBuffer:B,"hover-event":l,"click-event":m,"draw-event":p,hitable:l||m||n||q,state:M,eventInfo:g,"enter-event":n,"leave-event":q,"zbuffer-offset":t,"line-width":2*X,lod:A?null:D};k.type=!0==u?!0==ja?"flat-tline":"flat-line":!0==ja?"pixel-tline":"pixel-line";!0==ja&&null!=ma&&(k.texture=
[P[ma[0]],ma[1],ma[2]],k.background=Fa);postMessage(k);wa=r(c,"line-label",a,b);!0==wa&&(u=ta,ma=r(c,"line-label-color",a,b),Fa=r(c,"line-label-source",a,b),ta=r(c,"line-label-size",a,b),k=r(c,"line-label-offset",a,b),null==Fa||""==Fa||1E-4>Math.abs(ta)||(l=r(c,"hover-event",a,b),m=r(c,"click-event",a,b),p=r(c,"draw-event",a,b),n=r(c,"enter-event",a,b),q=r(c,"leave-event",a,b),a=r(c,"zbuffer-offset",a,b),b=[],c=[],t=l||m||n||q,e(u,Fa,ta,I["default"],k,b,c),e(ra,Fa,ta,I["default"],k,b,c),postMessage({command:"addRenderJob",
type:"line-label",vertexBuffer:b,texcoordsBuffer:c,color:ma,"z-index":d,center:f,"hover-event":l,"click-event":m,"draw-event":p,"enter-event":n,"leave-event":q,"zbuffer-offset":a,hitable:t,state:M,eventInfo:g,lod:A?null:D})))}}function m(a){switch(a){case "inherit":return"";case "line":return!1;case "line-flat":return!1;case "line-width":return 1;case "line-color":return[255,255,255,255];case "line-style":return"solid";case "line-style-texture":return null;case "line-style-background":return[0,0,
0,0];case "line-label":return!1;case "line-label-color":return[255,255,255,255];case "line-label-source":return"name";case "line-label-size":return 1;case "line-label-offset":return 0;case "point":return!1;case "point-flat":return!1;case "point-radius":return 1;case "point-style":return"solid";case "point-color":return[255,255,255,255];case "icon":return!1;case "icon-source":return null;case "icon-scale":return 1;case "icon-offset":return[0,0];case "icon-origin":return"bottom-center";case "icon-color":return[255,
255,255,255];case "label":return!1;case "label-color":return[255,255,255,255];case "label-source":return"name";case "label-size":return 10;case "label-offset":return[0,0];case "label-origin":return"bottom-center";case "label-align":return"center";case "label-width":return 200;case "z-index":return 0;case "zbuffer-offset":return[1,1,1];case "hover-event":return!1;case "hover-style":return"";case "enter-event":return!1;case "leave-event":return!1;case "click-event":return!1;case "draw-event":return!1;
case "visible":return!0;case "visibility":return 0;case "multi-pass":return null}}function p(a,b,c){switch(b){case "inherit":return n(a,b,c,"string");case "line":return n(a,b,c,"boolean");case "line-flat":return n(a,b,c,"boolean");case "line-width":return n(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "line-color":return n(a,b,c,"object",4,0,255);case "line-style":return n(a,b,c,"string");case "line-style-texture":return n(a,b,c,"object",3,-Number.MAX_VALUE,Number.MAX_VALUE);case "line-style-background":return n(a,
b,c,"object",4,0,255);case "line-label":return n(a,b,c,"boolean");case "line-label-source":return n(a,b,c,"string");case "line-label-color":return n(a,b,c,"object",4,0,255);case "line-label-size":return n(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "line-label-offset":return n(a,b,c,"number",null,-Number.MAX_VALUE,Number.MAX_VALUE);case "point":return n(a,b,c,"boolean");case "point-flat":return n(a,b,c,"boolean");case "point-radius":return n(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "point-style":return n(a,
b,c,"string");case "point-color":return n(a,b,c,"object",4,0,255);case "icon":return n(a,b,c,"boolean");case "icon-source":return n(a,b,c,"object",5,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-scale":return n(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "icon-offset":return n(a,b,c,"object",2,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-origin":return n(a,b,c,"string");case "icon-color":return n(a,b,c,"object",4,0,255);case "label":return n(a,b,c,"boolean");case "label-color":return n(a,b,
c,"object",4,0,255);case "label-source":return n(a,b,c,"string");case "label-size":return n(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "label-offset":return n(a,b,c,"object",2,-Number.MAX_VALUE,Number.MAX_VALUE);case "label-origin":return n(a,b,c,"string");case "label-align":return n(a,b,c,"string");case "label-width":return n(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "z-index":return n(a,b,c,"number",null,-Number.MAX_VALUE,Number.MAX_VALUE);case "zbuffer-offset":return n(a,b,c,"object",
3,0,Number.MAX_VALUE);case "hover-event":return n(a,b,c,"boolean");case "hover-style":return n(a,b,c,"string");case "enter-event":return n(a,b,c,"boolean");case "leave-event":return n(a,b,c,"boolean");case "click-event":return n(a,b,c,"boolean");case "draw-event":return n(a,b,c,"boolean");case "visible":return n(a,b,c,"boolean");case "visibility":return n(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "multi-pass":return n(a,b,c,"object")}return c}function n(a,b,c,d,e,f,g){if(null!=c&&"object"==
typeof c&&(null!=c.discrete||null!=c.linear||null!=c["lod-scaled"])){e=null;var k=!1;if(null!=c["lod-scaled"]){var l=c["lod-scaled"];if(!("object"==typeof l&&Array.isArray(l)&&2<=l.length))return q("wrong-property-value",a,b,c,null,"[]"),m(b);null==l[2]&&(l[2]=1);if("number"!=typeof l[0]||"number"!=typeof l[2])return q("wrong-property-value",a,b,c,null,"[]"),m(b);if("number"==typeof l[1])return c;e=l[1];k=!0}else e=c.discrete||c.linear;if(null==e||!("object"==typeof e&&Array.isArray(e)&&0<e.length))return q("wrong-property-value",
a,b,c,null,"[]"),m(b);if(null!=e){var p=null;d=0;for(l=e.length;d<l;d++){var n=e[d];if(null==n||"object"!=typeof n||!Array.isArray(n)||2==n.length)if(null==p&&(p=typeof n[1],!0==k&&"number"!=p)||"number"!=typeof n[0]||typeof n[1]!=p||"number"==p&&(n[1]>g||n[1]<f))return q("wrong-property-value[]",a,b,c,d,"[]"),m(b)}}return c}if(typeof c!=d&&(null!==c||"icon-source"!=b&&"visibility"!=b))return q("wrong-property-value",a,b,c),m(b);switch(typeof c){case "object":if(null===c&&("line-style-texture"==b||
"icon-source"==b||"visibility"==b||"multi-pass"==b))return c;if("multi-pass"==b)if(!0==Array.isArray(c)&&0<c.length)for(d=0;d<l;d++){if(f=c[d],"object"!=typeof f||!0!=Array.isArray(f)||2!=f.length||"number"!=typeof f[0]||"string"!=typeof f[1])return q("wrong-property-value[]",a,b,c,d),m(b)}else return q("wrong-property-value",a,b,c),m(b);if(null!=e)if(!0==Array.isArray(c)&&c.length==e){d=0;if("icon-source"==b||"line-style-texture"==b){if("string"!=typeof c[0])return q("wrong-property-value[]",a,b,
c,0),m(b);if(null==P[c[0]])return q("wrong-object",a,b,c,null,"bitmap"),m(b);d=1}for(l=c.length;d<l;d++)if("number"!=typeof c[d])return q("wrong-property-value[]",a,b,c,d),m(b)}else return q("wrong-property-value",a,b,c),m(b);return c;case "string":if("line-style"==b)switch(c){case "solid":case "texture":return c;default:return q("wrong-property-value",a,b,c),m(b)}if("label-origin"==b||"icon-origin"==b)switch(c){case "top-left":case "top-right":case "top-center":case "center-left":case "center-right":case "center-center":case "bottom-left":case "bottom-right":case "bottom-center":return c;
default:return q("wrong-property-value",a,b,c),m(b)}if("label-align"==b)switch(c){case "left":case "right":case "center":break;default:return q("wrong-property-value",a,b,c),m(b)}return c;case "number":return c>g||c<f?(q("wrong-property-value",a,b,c),m(b)):c;case "boolean":return c}}function q(a,b,c,d,e,f){"object"==typeof d&&(d=JSON.stringify(d));switch(a){case "wrong-property-value":console.log("Error: wrong style property "+(f?"'"+f+"'":"")+": "+b+"."+c+" = "+d);break;case "wrong-property-value[]":console.log("Error: wrong style property "+
(f?"'"+f+"'":"")+"["+e+"]: "+b+"."+c+" = "+d);break;case "wrong-object":console.log("Error: reffered "+f+" does not exist: "+b+"."+c+" = "+d);break;case "wrong-object[]":console.log("Error: reffered "+f+" does not exist: "+b+"."+c+"["+e+"] = "+d);break;case "wrong-style":console.log("Error: reffered "+f+" style does not exist: "+f+"["+e+"].style = "+b);break;case "wrong-bitmap":console.log("Error: wrong definition of bitmap: "+b);break;case "custom":console.log("Error: "+b)}}function t(a,b,c,d,e){if(100<
e)q("custom","infinite inherit loop in style: "+a);else if(null!=c.inherit){var f=d.styles[c.inherit];if(null!=f){null!=f.inherit&&t(c.inherit,b,f,d,e++);for(var g in f)b[g]=f[g]}else q("wrong-object",a,"inherit",f,"style")}}function r(a,b,c,d){var e=a[b];switch(typeof e){case "string":if(0<e.length&&"$"==e.charAt(0)){d=c[e.substr(1)];if(null!=d)return d;q("wrong-object",a["$$style-id"],b,e,null,"feature-property")}return e;case "object":if(null==e)break;if(!0==Array.isArray(e)){if("icon-source"==
b&&null==P[e[0]]){q("wrong-object",a["$$style-id"],b,e,null,"bitmap");break}return e}var f=null;a=null;if(null!=e["lod-scaled"]){a=e["lod-scaled"];if("number"==typeof a[1])return a[1]*Math.pow(2*a[2],a[0]-d);f=a[1]}else f=e.discrete||e.linear;b=f[0][0];c=f[0][1];for(var g=typeof c,k=c,l=0,p=f.length;l<=p;l++){if(l==p){k=c;break}if(f[l][0]>d){if(null!=e.discrete||null!=a)k=c;else{currentLod_=f[l][0];currentValue_=f[l][1];if(currentLod_==b)break;switch(g){case "boolean":currentValue_=(c=c?1:0)?1:0;
k=c+(d-b)/(currentLod_-b)*(currentValue_-c);k=0.5<k?!0:!1;break;case "number":k=c+(d-b)/(currentLod_-b)*(currentValue_-c);break;case "object":for(k=[],e=0,f=c.length;e<f;e++)k[e]=c[e]+(d-b)/(currentLod_-b)*(currentValue_[e]-c[e])}}break}b=f[l][0];c=f[l][1]}null!=a&&(k*=Math.pow(2*a[2],a[0]-d));return k;case "number":case "boolean":return e}return m(b)}function u(a,b,c){var d=C.Qi[a];return null==d?(q("wrong-style",a,null,null,c,b),{}):d}var C={},P={},F=!1,E=0,H=0,D=0,I={},M=0,Y=[0,0,0],A=!1;vec3Normalize=
function(a){var b;b||(b=a);var c=a[0],d=a[1];a=a[2];var e=Math.sqrt(c*c+d*d+a*a);e?1==e?(b[0]=c,b[1]=d,b[2]=a):(e=1/e,b[0]=c*e,b[1]=d*e,b[2]=a*e):(b[0]=0,b[1]=0,b[2]=0)};vec3Length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};self.onmessage=function(b){var c=b.data;b=c.data;switch(c.command){case "setStyles":P={};var d=b.bitmaps||{},e;for(e in d)c=d[e],"string"==typeof c?c={url:c}:"object"==typeof c?null==c.url&&q("wrong-bitmap",e):q("wrong-bitmap",e),P[e]=c;postMessage({command:"loadBitmaps",
bitmaps:P});C={Qi:{}};d=b.styles||{};for(e in d){var c=C.Qi,f=e,g=e,k=d[e],l=b,n={};null!=k.inherit&&t(g,n,k,l,0);var r=void 0;for(r in k)n[r]=k[r];n["$$style-id"]=g;k=void 0;for(k in n)r=n[k],"string"==typeof r&&0<r.length&&"@"==r.charAt(0)&&(null!=l.constants?null!=l.constants[r]?n[k]=l.constants[r]:(q("wrong-object",g,k,r,null,"constant"),n[k]=m(k)):(q("wrong-object",g,k,r,null,"constant"),n[k]=m(k))),n[k]=p(g,k,n[k]);c[f]=n}postMessage("ready");break;case "setFont":I["default"]={ve:b.chars,Zg:b.space,
o:b.size};postMessage("ready");break;case "processGeodata":E=c.x||0;H=c.y||0;D=c.lod||1;A=c.autoLod||!1;e=D;if("string"==typeof b)try{d=JSON.parse(b)}catch(u){d=null}else d=b;if(d)for(b=d.layers||d.groups||[],d=0,c=b.length;d<c;d++){n=b[d];f=e;k=n.points||[];null==n.origin&&0!=E&&0!=H?(n.origin=[E,H,0],F=!0):F=!1;Y=n.origin;forceScale_=null!=n.scale?n.scale:null;postMessage({command:"beginGroup",id:n.id,bbox:n.bbox,origin:n.origin});g=0;for(l=k.length;g<l;g++)a("point-array",k[g],f,g);n=n.lines||
[];g=0;for(l=n.length;g<l;g++)a("line-string",n[g],f,g);postMessage({command:"endGroup"})}postMessage("allProcessed");postMessage("ready")}}};s.Uf=function(a,b){this.P=a;this.w=a.w;this.X=!1;this.Te=b;this.qd=!0;var c=window.URL||window.webkitURL,d,e=s.Om();try{d=new Blob([e],{type:"application/javascript"})}catch(g){window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.yn,d=new BlobBuilder,d.append(e),d=blob.getBlob()}this.Og=new Worker(c.createObjectURL(d));this.Og.onmessage=this.Vl.bind(this)};
s.Uf.prototype.r=function(){!0!=this.X&&(this.X=!0,null!=this.Og&&this.Og.terminate())};s.Uf.prototype.O=function(){return this.qd||this.X};s.Uf.prototype.Vl=function(a){!0!=this.X&&(a=a.data,"ready"==a&&(this.qd=!0),null!=this.Te&&this.Te(a))};
function kb(a,b,c){this.c=a;this.d=c;this.ye=[];this.Vi=[256,256];this.na=[0,100];this.p=[];this.da=[[0,0],[0,0]];this.qd=!1;"esri-world-imagery"==c&&(b.availability={type:"negative-size",size:2521});"string"===typeof b?(this.pe=b,s.Sd(this.pe,function(a){Eb(this,a);this.qd=!0;a=this.c;a.yd++;sb(a);tb(a);ub(a)}.bind(this),function(){}.bind(this),null,s.useCredentials)):(Eb(this,b),this.qd=!0)}
function Eb(a,b){a.Rl=b.id||null;a.S=b.type||"raster";a.pe=b.url||"";a.Vi=b.tileSize||[256,256];a.na=b.lodRange||[0,0];a.p=b.credits||[];a.da=b.tileRange||[[0,0],[0,0]];a.Fc=b.metaUrl||null;a.ri=b.maskUrl||null;a.qb=b.availability?{}:null;if(a.qb){var c=b.availability;a.qb.S=c.type;a.qb.Gl=c.mime;a.qb.Qj=c.codes;a.qb.o=c.size}a.Fc&&a.ri&&(a.qb={S:"metatile"});for(var c=0,d=a.p.length;c<d;c++){var e=a.c.p[a.p[c]];e&&a.ye.push(e.d)}}
kb.prototype.tb=function(){return{type:this.S,url:this.pe,tileSize:this.Vi,credits:this.p,lodRange:this.na,tileRange:this.da}};function Fb(a,b){var c=b[0]-a.na[0];if(0>c)return!1;var d=b[1]>>c,c=b[2]>>c;return d<a.da[0][0]||d>a.da[1][0]||c<a.da[0][1]||c>a.da[1][1]?0:b[0]>a.na[1]?1:2}function Gb(a,b){return Hb(a.c,a.pe,{ha:b[0],Fa:b[1],Ga:b[2]},null,void 0)}function db(a,b){this.c=a;this.Ud=null!=b?b:Number.MAX_VALUE;this.Ka=this.Va=null;this.Nb=0}
function Ib(a,b){if(null!=b&&a.Ka!=b){null!=b.Qa&&(b.Qa.$a=b.$a);null!=b.$a&&(b.$a.Qa=b.Qa);a.Va==b&&(a.Va=b.Qa);var c=a.Ka;a.Ka=b;a.Ka.$a=c;a.Ka.Qa=null;c.Qa=a.Ka}}h=db.prototype;h.clear=function(){for(var a=this.Ka;null!=a;)null!=a.ze&&a.ze(),a=a.$a;this.Ka=this.Va=null;this.Nb=0};function Jb(a,b,c){b={ze:b,Bh:c,Qa:null,$a:a.Ka};null!=a.Ka&&(a.Ka.Qa=b);a.Ka=b;null==a.Va&&(a.Va=b);a.Nb+=c;zb(a);return b}
h.remove=function(a){var b=!1;a==this.Ka&&(this.Ka=a.$a,b=!0,null!=this.Ka&&(this.Ka.Qa=null));a==this.Va&&(this.Va=a.Qa,b=!0,null!=this.Va&&(this.Va.$a=null));if(!b){if(a.Qa)a.Qa.$a=a.$a;else debugger;if(a.$a)a.$a.Qa=a.Qa;else debugger}this.Nb-=a.Bh;a.ze();zb(this)};function zb(a){for(;a.Nb>a.Ud;){var b=a.Va;if(null!=b)a.Va=a.Va.Qa,null!=a.Va&&(a.Va.$a=null),a.Nb-=b.Bh,b.ze();else break}}h.Cj=function(a,b){return Jb(this,b,a)};h.removeItem=function(a){return this.remove(a)};
h.vl=function(a){return Ib(this,a)};db.prototype.addItem=db.prototype.Cj;db.prototype.removeItem=db.prototype.removeItem;db.prototype.itemUsed=db.prototype.vl;function T(a,b){this.c=a;b instanceof T?this.i=b.i.slice():(this.i=null!=b&&b instanceof Array?b.slice():[],this.qe())}h=T.prototype;h.ua=function(){return new T(this.c,this.i)};function W(a){return[a.i[1],a.i[2],a.i[4]]}function Kb(a,b){a.i[1]=b[0];a.i[2]=b[1];a.i[4]=b[2];return a}function Lb(a,b){a.i[1]=b[0];a.i[2]=b[1]}
function Mb(a,b){a.i[4]=b;return a}h.ib=function(){return[this.i[5],this.i[6],this.i[7]]};h.td=function(a){this.i[5]=a[0];this.i[6]=a[1];this.i[7]=a[2];return this};h.fc=function(){return this.i[9]};function Nb(a,b){a.i[9]=b;return a}function Db(a){return a.i[8]}function Ob(a,b){a.i[8]=b;return a}function Cb(a){return Db(a)/Math.tan(s.ta(0.5*a.fc()))}h.check=function(){this.i[6]=s.Zc(this.i[6],-90,90);this.i[5]%=360;this.i[7]%=360};
function Pb(a,b,c,d){var e=W(a),g=V(a.c).hc();d=null==d?1:d;xb(V(a.c))?(d=s.ta(b),d=[-Math.sin(d),Math.cos(d)],Lb(a,[e[0]+d[0]*c,e[1]+d[1]*c])):(g=V(a.c).hc(),c=(new GeographicLib.Geodesic.Geodesic(g.a,g.a/g.b-1)).Direct(e[1],e[0],b,c),Lb(a,[c.lon2,c.lat2]),e=a.ib(),e[0]+=(c.azi1-c.azi2)*d,a.td(e));return a}
function Qb(a,b,c){if(a.i[3]==b)return a;var d=Bb(a.c,W(a),Db(a),a.c.j.Ub),d=a.c.Gb(W(a),d);if(!1==d[1]&&!c)return null;"float"==b?(a.i[3]=b,a.i[4]-=d[0]):"fix"==b&&(a.i[3]=b,a.i[4]+=d[0]);return a}
h.qe=function(){var a=this.i;"fixed"==a[0]&&(a[0]="obj",a[9]=a[8],a[8]=a[7],a[7]=a[6],a[6]=a[5],a[5]=a[4],a[4]=a[3],a[3]="fix");a[0]="obj"==a[0]||"subj"==a[0]?a[0]:"obj";a[1]=a[1]||0;a[2]=a[2]||0;a[3]="fix"==a[3]||"fixed"==a[3]||"float"==a[3]?a[3]:"float";a[4]=a[4]||0;a[5]=a[5]||0;a[6]=a[6]||0;a[7]=a[7]||0;a[8]=a[8]||300;a[9]=a[9]||90;a[3]="fixed"==a[3]?"fix":a[3]};
function Rb(a,b){var c=a.ib(),d=s.f.create();s.f.multiply(s.bb(2,s.ta(c[0])),s.bb(0,s.ta(c[1])),d);if("obj"==a.i[0]){var c=W(a),e=0;"float"==a.i[3]&&(d=Bb(a.c,W(a),Db(a),a.c.j.Ub),d=a.c.Gb(W(a),d),e=d[0]);d=a.Ee(xb(V(a.c)));xb(V(a.c))?(c[0]+=d.ab[0],c[1]+=d.ab[1],c[2]+=d.ab[2]+e):(c=a.c.ea([c[0],c[1],c[2]+e],"navigation","physical"),c[0]+=d.ab[0],c[1]+=d.ab[1],c[2]+=d.ab[2],c=a.c.ea(c,"physical","navigation"));"fix"!=b&&(d=Bb(a.c,c,Db(a),a.c.j.Ub),d=a.c.Gb(c,d),c[2]-=d[0]);return c}if(a.i[3]==b)return W(a);
d=Bb(a.c,W(a),Db(a),a.c.j.Ub);d=a.c.Gb(W(a),d);c=W(a);c[2]="fix"==b?c[2]+d[0]:c[2]-d[0];return c}function Sb(a,b){var c=W(a);if("float"==a.i[3]){b=null!=b?b:Bb(a.c,W(a),Db(a),a.c.j.Ub);var d=a.c.Gb(W(a),b);c[2]+=d[0]}c=a.c.ea(c,"navigation","physical");d=a.c.fb;c[0]-=d[0];c[1]-=d[1];c[2]-=d[2];return c}h.cd=function(a,b){if(b)var c=this.c.fb,d=W(this),c=[d[0]-c[0],d[1]-c[1],d[2]-c[2]];else c=Sb(this,a);return Pa(this.c.k,c,ab(this.c.m))};
function Wb(a){var b=a.ua();Qb(b,"fix");var c=W(b),b=a.c.ea(c,"navigation","physical");a.c.ea([0,0],"navigation","physical");a.c.ea([-180,0],"navigation","physical");a.c.ea([90,0],"navigation","physical");a.c.ea([0,90],"navigation","physical");a.c.ea([-90,0],"navigation","physical");a.c.ea([0,-90],"navigation","physical");a.c.ea([0,-100],"navigation","physical");if(xb(V(a.c)))var d=a.c.ea([c[0],c[1]+100,c[2]],"navigation","physical"),e=a.c.ea([c[0]+100,c[1],c[2]],"navigation","physical");else{var g=
yb(a.c),e=g.Direct(c[1],c[0],0,-100),d=a.ua();Lb(d,[e.lon2,e.lat2]);d=a.c.ea(W(d),"navigation","physical");e=g.Direct(c[1],c[0],90,100);c=a.ua();Lb(c,[e.lon2,e.lat2]);e=a.c.ea(W(c),"navigation","physical")}a=[d[0]-b[0],d[1]-b[1],d[2]-b[2]];b=[e[0]-b[0],e[1]-b[1],e[2]-b[2]];d=[0,0,0];s.s.normalize(a);s.s.normalize(b);s.s.Gf(a,b,d);s.s.normalize(d);return{Jh:b,Hh:a,ti:d}}
h.Ee=function(a){var b=this.ib(),c=Cb(this),d=s.f.create();s.f.multiply(s.bb(2,s.ta(b[0])),s.bb(0,s.ta(b[1])),d);if("obj"==this.i[0]){var e=[0,-c,0];s.f.va(d,e)}else e=[0,0,0];c={ab:null,sb:c,Wg:null,tf:null,Xl:e[2]};if(a){d=s.f.create();s.f.multiply(s.bb(0,s.ta(-b[1]-90)),s.bb(2,s.ta(-b[0])),d);a=Wb(this);north_=a.ti;east_=a.Jh;direction_=a.Hh;b=[east_[0],east_[1],east_[2],0,direction_[0],direction_[1],direction_[2],0,north_[0],north_[1],north_[2],0,0,0,0,1];b=[1,0,0];a=[0,1,0];var g=[0,0,1],f=[1,
0,0],k=[0,0,-1],l=[0,0,0];s.s.Gf(f,k,l);s.f.va(d,g);s.f.va(d,b);s.f.va(d,a);s.f.va(d,f);s.f.va(d,k);s.f.va(d,l);d=0;d=f[0];f[0]=f[1];f[1]=d;d=k[0];k[0]=k[1];k[1]=d;d=l[0];l[0]=l[1];l[1]=d;f[2]=-f[2];k[2]=-k[2];l[2]=-l[2];d=[b[0],b[1],b[2],0,a[0],a[1],a[2],0,g[0],g[1],g[2],0,0,0,0,1];c.tf=s.s.normalize([-e[0],-e[1],-e[2]]);c.rj=c.tf;c.ab=e;c.Wg=d}else a=Wb(this),north_=a.ti,east_=a.Jh,direction_=a.Hh,d=s.f.create(),s.f.multiply(s.bb(0,s.ta(-b[1]-90)),s.bb(2,s.ta(-b[0])),d),b=[1,0,0],a=[0,1,0],g=[0,
0,1],f=W(this),k=s.f.create(),s.f.multiply(s.bb(0,s.ta(f[1]-90)),s.bb(2,s.ta(-f[0]-90)),k),s.f.va(k,g),s.f.va(k,b),s.f.va(k,a),b=[b[0],b[1],b[2],0,a[0],a[1],a[2],0,g[0],g[1],g[2],0,0,0,0,1],l=[1,0,0],f=[0,1,0],k=[0,0,1],s.f.va(b,f),s.f.va(b,k),s.f.va(b,l),s.f.va(d,l),s.f.va(d,f),s.f.va(d,k),d=[l[0],l[1],l[2],0,f[0],f[1],f[2],0,k[0],k[1],k[2],0,0,0,0,1],b=s.f.inverse(b),s.f.va(b,e),c.rj=[-b[8],-b[9],-b[10]],Sa(this.c.k,800,400),s.f.inverse(d,b),c.tf=[-b[8],-b[9],-b[10]];c.ab=e;c.Wg=d;return c};
h.toString=function(){var a=this.i;return a[0]+", "+a[1].toFixed(0)+", "+a[2].toFixed(0)+", "+a[3]+", "+a[4].toFixed(0)+", "+a[5].toFixed(0)+", "+a[6].toFixed(0)+", "+a[7].toFixed(0)+", , "+a[8].toFixed(0)+", "+a[9].toFixed(0)};function ib(a,b){this.c=a;this.d=b.id||null;this.ui=b.notice||null;this.pe=b.url||null;this.ml=s.Hm(this.ui)}ib.prototype.tb=function(){return{id:this.d,notice:this.ui,html:this.ml}};
bb.prototype.Wa=function(){this.kd=0.5*this.k.J[0];var a=this.gc().ib(),b=this.m.yc,a=Math.log(0.05)/(10*b*(Math.max(5,-a[1])/90)),a=a*(5/(Math.min(5E4,Math.max(this.uc,1E3))/5E3));!1==this.Nf&&(a=0);this.bd=a;this.k.bd=a;this.Vd=0.9*this.Hb.Ud;a=this.Pf=this.n.Nc=0;for(b=this.me.length;a<b;a++)this.me[a]=null;this.ne.Wa();for(var c=this.fb,a=0,b=this.me.length;a<b;a++){var d=this.me[a];if(d)for(var e=0,g=d.length;e<g;e++){var f=d[e];Xb(this,f.F,f.Pl,c,f.Jc,f.Kc,!1,!1)}}a=0;for(b=this.Qb.length;a<
b;a++)this.Qb[a].Wa()};function Yb(a,b,c){for(var d=0,e=a.length;d<e;d++){var g=a[d];switch(g.S){case "submesh":var f=g.lb,g=g.v;if(!(f&&f.O(c,b,!0)&&(!g||g&&g.O(c,b,!0))))return!1}}return!0}function Zb(a,b){for(var c in b.p)a.uf.lg[c]=!0}
function $b(a,b,c,d,e){0<c.length&&a.Pf++;for(var g=0,f=c.length;g<f;g++){var k=c[g];switch(k.S){case "state":a.k.g.Wb(k.je);break;case "submesh":var l=k.lb,m=k.v;if(l&&l.O(e,d)&&(!m||m&&m.O(e,d))){a.Lf&&a.Of&&l.Ba[k.Mb].ad(b);a:{var p=b,n=k.Mb,q=k.Vb,k=k.tc;null==l.vb[n]&&null!=l.Ba[n]&&(l.vb[n]=ac(l.Ba[n]));var t=l.Ba[n],n=l.vb[n];if(null!=n){var r=l.c.k,u=null,C=null,P=null,F=null,E=l.c.uk;if("depth"==q)u=r.zi;else if(0<E)switch(E){case 2:u=r.Ci;break;case 3:u=r.gm;break;case 1:switch(q){case "internal":case "internal-nofog":u=
r.Di;P="aTexCoord";break;case "external":case "external-nofog":u=r.pm;F="aTexCoord2";break;case "fog":break a}}else switch(q){case "internal":case "internal-nofog":u=r.Pg;P="aTexCoord";break;case "external":case "external-nofog":u=r.nm;m&&(C=m.q?m.q.v&&m.q.v.sa?m.q.v.sa.Aa:null:m.sa?m.sa.Aa:null)&&(u=r.om);F="aTexCoord2";break;case "fog":u=r.hm}r.g.useProgram(u,"aPosition",P,F,0!=E?"aBarycentric":null,null,null,null,C);if(null!=m){var H=m.q?m.q.v?m.q.v.Aa:null:m.Aa;if(H)m.ah!=l.n.vc&&(m.ah=l.n.vc,
l.n.jb+=H.o),r.g.bindTexture(H),C&&r.g.bindTexture(C,1);else break a}else if("fog"!=q&&"depth"!=q)break a;C=s.f.create();s.f.multiply(Ua(r.m),t.Ie(p),C);p=Ta(r.m);qa(u,"uMV",C);qa(u,"uProj",p);if(0==E)switch(q){case "internal":case "fog":Da(u,"uFogDensity",l.c.bd);break;case "internal-nofog":Da(u,"uFogDensity",0);break;case "external":Da(u,"uAlpha",1);Da(u,"uFogDensity",l.c.bd);pa(u,"uTransform",m.q?m.q.v?m.q.ij:null:[1,1,0,0]);break;case "external-nofog":Da(u,"uAlpha",k),Da(u,"uFogDensity",0),pa(u,
"uTransform",m.q?m.q.v?m.q.ij:null:[1,1,0,0])}t.ah!=l.n.vc?(t.ah=l.n.vc,l.n.jb+=n.o):l.n.jb++;n.Wa(u,"aPosition",P,F,0!=E?"aBarycentric":null);l.n.Ce+=l.xc}}}}}}s.Jf=[144,8880,5492];
function Xb(a,b,c,d,e,g,f,k){if(!(a.n.jb>=a.Vd)){b.Sg=!1;var l=a.cc;if(null!=b.B){if(0!=(c.L&1)){if(null==b.ja){var m;m=b.B;var p=b.d;m=Hb(m.c,m.Cg,{ha:p[0],Fa:p[1],Ga:p[2]},null,void 0);b.ja=new bc(a,m)}if(a.Lf&&!f){var n=b.ja;a.Of||c.ad(d);var q=c.l.t;m=c.l.H;m=a.w.He().cd([q[0]+0.5*(m[0]-q[0])-d[0],q[1]+0.5*(m[1]-q[1])-d[1],m[2]-d[2]],ab(a.m));m[2]*=0.9992;p=a.bk;a.mk&&(t=""+b.d[0],Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]-4*p),4*p,t,[255,0,0,255],m[2]));if(a.Kn){var t=""+b.d[1]+" "+
b.d[2];Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]-11*p),4*p,t,[0,255,255,255],m[2])}a.rk&&(t=""+q[0].toFixed(1)+" "+q[1].toFixed(1)+" "+q[2].toFixed(1),Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+3*p),4*p,t,[0,255,255,255],m[2]));a.kk&&n&&(t=""+n.xc+" - "+n.Ba.length+(b.B&&b.B.ed?" - 1":" - 0"),Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+10*p),4*p,t,[0,255,0,255],m[2]));a.qk&&(t=""+a.Pf,Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+10*p),4*p,t,[0,255,0,255],
m[2]));a.sk&&(t=JSON.stringify(b.B.d),Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+10*p),4*p,t,[255,255,255,255],m[2]));if(a.fk&&b.Sa){var r=b.B;if(r.ed)for(var q=0,u=r.d.length;q<u;q++)b.Sa[r.d[q]]&&(t="< "+r.d[q]+" >",Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+(10+14*q)*p),4*p,t,[255,255,255,255],m[2]),t=JSON.stringify(b.Sa[r.d[q]]),Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+(17+14*q)*p),4*p,t,[255,255,255,255],m[2]));else b.Sa[r.d]&&(t="< "+r.d+" >",Wa(a.k,Math.round(m[0]-
0.5*Ya(4*p,t)),Math.round(m[1]+10*p),4*p,t,[255,255,255,255],m[2]),t=JSON.stringify(b.Sa[r.d]),Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+17*p),4*p,t,[255,255,255,255],m[2]))}if(a.hk){var t="{ ",C;for(C in b.p)b.p[C]&&(q=a.xe[C])&&(t+=q.mg+", ");t+="} ";Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+10*p),4*p,t,[255,255,255,255],m[2])}a.jk&&(t=""+e[1].toFixed(2)+"  "+e[0].toFixed(3)+"  "+c.Jc.toFixed(3),Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+17*p),4*p,t,[255,0,255,
255],m[2]));a.pk&&(e=(c.L&240)>>4,t=""+c.L.toString(2)+"-"+(e&1?"1":"0")+(e&2?"1":"0")+(e&4?"1":"0")+(e&8?"1":"0"),Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]-18*p),4*p,t,[255,0,255,255],m[2]));if(a.tk&&n)for(e=n.Ba,q=0,u=e.length;q<u;q++)e[q].Ib&&(C=b.la[q])&&C.Aa&&(t="["+q+"]: "+C.Aa.rc+" x "+C.Aa.Od,Wa(a.k,Math.round(m[0]-0.5*Ya(4*p,t)),Math.round(m[1]+(17+14*q)*p),4*p,t,[255,255,255,255],m[2]))}a.n.gf[b.d[0]]++;a.n.Qf++;if(b.Oc){b.C=[[],[],[]];b.oe=!0;if(b.rb)for(var P in b.rb)b.rb[P].Ob=
0;b.Oc=!1}if(0<b.C[l].length&&Yb(b.C[l],g,k))f||($b(a,d,b.C[l],g),Zb(a,b)),b.Ua=null;else{if(b.Ua)if(!0==b.ja.O(!0,g)){if(0<b.C[l].length){f||($b(a,d,b.Ua.C[l],g,!0),Zb(a,b));return}}else f||($b(a,d,b.Ua.C[l],g,!0),Zb(a,b));if(b.ja.O(k,g)&&!k){P=b.ja.Ba;b.C=[[],[],[]];b.p={};b.Sa={};e=0;for(C=P.length;e<C;e++){m=P[e];a.Lf&&a.Of&&!f&&m.ad(d);if(m.dc){if(b.oe){b.oe=!1;n=a;p=b;t=P;q=0;for(u=t.length;q<u;q++){var F=t[q];if(F.dc){var E=p.B;p.B.ed&&(E=p.B.Sc[F.Sc-1]);if(E){var H=p.rb[E.d];H||(H={zb:[],
tc:[],of:!1,Ob:0},p.rb[E.d]=H);if(H.Ob!=p.Ob){var D=n,r=p,I=F,F=E,E=H,H=H.Ob!=p.Ob;if(0<F.Cb.length){if(H){E.zb=[];for(var H=[],M=I=0,Y=F.Cb.length;M<Y;M++){var A=F.Cb[M][0];if(A&&Fb(A,r.d)&&0<F.Cb[M][1]){var R=null;r.d[0]>A.na[1]&&(R={Qc:cc(r,A.na[1]),Ni:null,P:A,F:r});if(r.U[A.d]){R=r.U[A.d];if(r.U[A.d].be)continue;dc(R)&&(E.of=!0)}else{var ka=Gb(A,r.d);r.U[A.d]=new ec(D,ka,null,R,{F:r,P:A})}R=r.U[A.d];(R=!(1>F.Cb[M][1]||R.q||dc(R)))&&I++;H.push(R);E.zb.push(A.d);E.tc[A.d]=F.Cb[M];r.ya[A.d]=A;1>
E.tc[A.d][1]&&(E.of=!0)}}if(0<I){D=[];for(F=E.zb.length-1;0<=F;F--)if(I=E.zb[F],H[F]){D.unshift(I);break}else R=r.U[I],(1>E.tc[I][1]||dc(R)&&!R.q)&&D.unshift(I);E.zb=D}}}else null!=F.oc?H&&(A=D.ya[F.oc])&&Fb(A,r.d)&&(R=null,r.d[0]>A.na[1]&&(R={Qc:cc(r,A.na[1]),Ni:null,P:A,F:r}),E.zb.push(A.d),r.ya[A.d]=A,r.U[A.d]||(ka=Gb(A,r.d),r.U[A.d]=new ec(D,ka,null,R,{F:r,P:A}))):0!=I.oc&&(A=ob(D,I.oc))&&Fb(A,r.d)&&(R=null,r.d[0]>A.na[1]&&(R={Qc:cc(r,A.na[1]),Ni:null,P:A,F:r}),r.ya[A.d]=A,r.U[A.d]||(ka=Gb(A,
r.d),r.U[A.d]=new ec(D,ka,null,R,{F:r,P:A})))}}}}n=void 0;for(n in p.rb)p.rb[n].Ob=p.Ob}p=b.B;p.ed&&(p=b.B.Sc[m.Sc-1]);if(null!=p&&(n=b.rb[p.d]))if(m.dc)if(0<n.zb.length)if(n.of){if(m.Ib){null==b.la[e]&&(m=fc(b.B,b.d,e),b.la[e]=new ec(a,m));t=0;for(q=c.p.length;t<q;t++)b.p[c.p[t]]=!0;b.C[0].push({S:"submesh",lb:b.ja,Mb:e,v:b.la[e],Vb:"internal-nofog"})}b.C[0].push({S:"state",je:a.ek});u=n.zb;r=0;for(E=u.length;r<E;r++)if(m=b.U[u[r]]){b.Sa[p.d]||(b.Sa[p.d]=[]);b.Sa[p.d].push(u[r]);D=b.ya[u[r]].ye;
t=0;for(q=D.length;t<q;t++)b.p[D[t]]=!0;b.C[0].push({S:"submesh",lb:b.ja,Mb:e,v:m,Vb:"external-nofog",tc:n.tc[u[r]][1]})}b.C[0].push({S:"submesh",lb:b.ja,Mb:e,v:null,Vb:"fog"});b.C[0].push({S:"state",je:a.Ih})}else{if(n=n.zb[n.zb.length-1],m=b.U[n]){b.Sa[p.d]||(b.Sa[p.d]=[]);b.Sa[p.d].push(n);D=b.ya[n].ye;t=0;for(q=D.length;t<q;t++)b.p[D[t]]=!0;b.C[0].push({S:"submesh",lb:b.ja,Mb:e,v:m,Vb:"external"})}}else if(m.oc){if(n=ob(a,m.oc))if(m=b.U[n.d]){b.Sa[p.d]||(b.Sa[p.d]=[]);b.Sa[p.d].push(n.d);D=b.ya[n.d].ye;
t=0;for(q=D.length;t<q;t++)b.p[D[t]]=!0;b.C[0].push({S:"submesh",lb:b.ja,Mb:e,v:m,Vb:"external"})}}else{if(m.Ib){null==b.la[e]&&(m=fc(b.B,b.d,e),b.la[e]=new ec(a,m));t=0;for(q=c.p.length;t<q;t++)b.p[c.p[t]]=!0;b.C[0].push({S:"submesh",lb:b.ja,Mb:e,v:b.la[e],Vb:"internal"})}}else if(m.Ib)if(null==b.la[e])m=fc(b.B,b.d,e),b.la[e]=new ec(a,m);else{t=0;for(q=c.p.length;t<q;t++)b.p[c.p[t]]=!0;b.C[0].push({S:"submesh",lb:b.ja,Mb:e,v:b.la[e],Vb:"internal"})}}else if(m.Ib)if(null==b.la[e])m=fc(b.B,b.d,e),
b.la[e]=new ec(a,m);else{t=0;for(q=c.p.length;t<q;t++)b.p[c.p[t]]=!0;b.C[0].push({S:"submesh",lb:b.ja,Mb:e,v:b.la[e],Vb:"internal"})}b.C[1].push({S:"submesh",lb:b.ja,Mb:e,Vb:"depth"})}Yb(b.C[l],g,k)?(f||($b(a,d,b.C[l],g),Zb(a,b)),b.Ua=null):b.Ua&&!f&&($b(a,d,b.Ua.C[l],g,!0),Zb(a,b))}}}}else!f&&b.Ua&&($b(a,d,b.Ua.C[l],g,!0),Zb(a,b))}}function cc(a,b){for(;a&&a.d[0]>b;)a=a.R;return a}function $(a){this.c=a;this.j=a.j}h=$.prototype;h.Lb=function(a){this.c.Lb(a);return this};h.gc=function(){return this.c.gc().i};
h.ud=function(a){this.c.ud(a);return this};h.dg=function(){return this.c.dg()};h.Xf=function(){return this.c.Xf()};h.Jk=function(){var a=this.c,b=a.uf.lg,c=[],d;for(d in b){var e=a.xe[d];e&&c.push(e.mg)}e=a.uf.qi;b=[];for(d in e)(e=a.xe[d])&&b.push(e.mg);return{"3D":[],imagery:c,mapdata:b}};h.Ik=function(a){return(a=this.c.p[a])?a.tb():{}};h.al=function(){return nb(this.c.$d)};h.$k=function(a){return(a=this.c.$d[a])?a.tb():{}};h.Wf=function(){return this.c.Wf()};h.Oh=function(a){return this.c.Oh(a)};
h.Fe=function(){return this.c.Fe()};h.Kk=function(a){return this.c.Fe(a)};h.cg=function(){return this.c.cg()};h.Zk=function(){return this.c.Pn(srsId_)};h.bg=function(){return this.c.bg(surfaceId_)};h.hc=function(a){return(a=this.c.Rc[a])?a.tb():{}};h.Yk=function(){return this.c.yb.tb()};
h.Xj=function(a,b){var c=new T(this.c,a);if(b!=c.i[0]){if("obj"==b){if("float"==c.i[3]){var d=!0;Qb(c,"fix",!0)}var e=Cb(c),g=c.ib(),f=s.ta(-g[1]),k=e*Math.sin(f),e=e*Math.cos(f);xb(V(c.c))?(g=s.ta(g[0]),g=[-Math.sin(g),Math.cos(g)],f=W(c),f[0]+=g[0]*e,f[1]+=g[1]*e):(Pb(c,-g[0],e),f=W(c));f[2]-=k;Kb(c,f);d&&Qb(c,"float",!0)}else"subj"==b&&(f=Rb(c,c.i[3]),Kb(c,f));c.i[0]=b}return null!=c?c.i:c};h.Wj=function(a,b,c){a=Qb(new T(this.c,a),b,c);return null!=a?a.i:a};
h.ea=function(a,b,c){a=this.c.Rc[a];b=this.c.Rc[b];return a&&b?gc(b,c,a):null};h.Tj=function(a,b,c){return(new T(this.c,["obj",a[0],a[1],b,a[2],0,0,0,10,90])).cd(c)};h.Vj=function(a){return(new T(this.c,["obj",a[0],a[1],"fix",a[2],0,0,0,10,90])).cd(null,!0)};h.Sj=function(a,b,c){return Sb(new T(this.c,["obj",a[0],a[1],b,a[2],0,0,0,10,90]),c)};h.Uj=function(a){var b=this.c.fb;return[a[0]-b[0],a[1]-b[1],a[2]-b[2]]};h.Pj=function(a){return(new T(this.c,a)).i};
h.Am=function(a,b){return Kb(new T(this.c,a),b).i};h.Rk=function(a){return W(new T(this.c,a))};h.Cm=function(a,b){return Mb(new T(this.c,a),b).i};h.Tk=function(a){return(new T(this.c,a)).i[4]};h.Dm=function(a,b){return(new T(this.c,a)).td(b).i};h.Vk=function(a){return(new T(this.c,a)).ib()};h.Em=function(a,b){return Ob(new T(this.c,a),b).i};h.Wk=function(a){return Db(new T(this.c,a))};h.Bm=function(a,b){return Nb(new T(this.c,a),b)};h.Sk=function(a){return(new T(this.c,a)).fc()};
h.Xk=function(a){return(new T(this.c,a)).i[0]};h.Uk=function(a){return(new T(this.c,a)).i[3]};h.Qk=function(a,b){return(new T(this.c,a)).cd(b)};h.Pk=function(a,b){return Rb(new T(this.c,a),b)};h.Kl=function(a,b,c,d){return Pb(new T(this.c,a),b,c,d)};h.Gb=function(a,b){return this.c.Gb(a,hc(this.c,a,b))};h.Yf=function(a,b,c){return this.c.On(a,b,c)};h.Vf=function(a,b){return this.c.Vf(a,b)};
h.Ee=function(){var a=this.c.m;return{"projection-matrix":a.he.slice(),"view-matrix":a.Yd.slice(),"view-projection-matrix":a.Zd.slice(),"rotation-matrix":a.sd.slice(),position:this.c.fb.slice(),vector:this.c.Cf.slice()}};h.ul=function(a){var b;a:{b=this.c.m;var c=this.c.fb;b.ka&&b.update();a=c?[a[0]-c[0],a[1]-c[1],a[2]-c[2],1]:[a[0],a[1],a[2],1];for(c=0;6>c;c++)if(0>s.sf.hb(b.Db[c],a)){b=!1;break a}b=!0}return b};h.sl=function(a){return this.c.m.ue({t:a[0],H:a[1]},this.c.fb)};
h.Ck=function(a,b,c){a=new T(this.c,a);b=new T(this.c,b);a=new ic(this.c,a,b,c);b=Array(Math.ceil(a.K/a.Hi)+(a.Kf?0:1));for(var d=c=0;d<=a.K;d+=a.Hi){var e=d/a.K,g=a.Pa.ua();if("direct"==a.jd){Kb(g,jc(a,e));var f=a.Pa.i[4];Mb(g,f+(a.Ha.i[4]-f)*e);g.td(kc(a.Pa.ib(),a.Ha.ib(),e));Nb(g,lc(a,e));Ob(g,mc(a,e))}else{e=e*e*(3-2*e);e=e*e*(3-2*e);f=0;f=d<a.Ta?0:d>a.K-a.Ta?1:Math.min(1,(d-a.Ta)/(a.K-2*a.Ta));f=f*f*(3-2*f);factor2_=f*f*(3-2*f);if("piha"==a.Pm){var f=W(a.Pa)[2],k=a.sb/(0.001*a.K*a.rm*Math.tan(0.5*
s.ta(a.Pa.fc())))*(1-Math.cos(2*Math.PI*d/a.K))+f+(W(a.Ha)[2]-f)*d/a.K,f=jc(a,a.sb/a.K*(d-a.K/(2*Math.PI)*Math.sin(2*Math.PI/a.K*d))/a.sb);Kb(g,f);Mb(g,k)}else f=jc(a,factor2_),Kb(g,f),k=W(a.Pa),Mb(g,k[2]+(W(a.Ha)[2]-k[2])*e+Math.sin(Math.PI*e)*a.zc);null!=f[3]&&(a.Da=f[3]);var f=a,k=d,l=null,m=null,m=[0,-90,0],p=0;m[0]=f.Da%360;0>m[0]&&(m[0]=360-Math.abs(m[0]));k<=f.Ta?(p=k/f.Ta,l=f.Pa.ib()):k>=f.K-f.Ta?(p=(k-(f.K-f.Ta))/f.Ta,l=m,m=f.Ha.ib()):(p=0,l=m);g.td(kc(l,m,p));Nb(g,lc(a,e));Ob(g,mc(a,e));
b[c]=g.i}b[c]=g.i;c++}a.Kf||(b[c]=a.md.ua().i);return b};G.prototype.ob=function(a){this.c.ob(a);return this};h=$.prototype;h.cb=function(a,b){this.c.cb(a,b);return this};h.Eb=function(a){return this.c.Eb(a,value_)};h.tm=function(){ub(this.c);return this};h.te=function(a,b,c){this.c.te(a,b,c);return this};h.Hg=function(a,b){this.c.Hg(a,b);return this};h.Gg=function(a,b){this.c.Gg(a,b);return this};h.Rg=function(a){this.c.Rg(a);return this};h.Yg=function(a,b){this.c.Yg(a,b);return this};h.ag=function(a){return this.c.ag(a)};
h.zm=function(a){this.c.pg=a;return this};h.Mk=function(){return this.c.pg};h.Lk=function(){return this.c.Hb};h.Zf=function(a,b,c,d){return this.c.Zf(a,b,c,d)};s.xn=T;$.prototype.setPosition=$.prototype.Lb;$.prototype.getPosition=$.prototype.gc;$.prototype.setView=$.prototype.ud;$.prototype.getView=$.prototype.dg;$.prototype.getCredits=$.prototype.Xf;$.prototype.getCurrentCredits=$.prototype.Jk;$.prototype.getCreditInfo=$.prototype.Ik;$.prototype.getViews=$.prototype.al;$.prototype.getViewInfo=$.prototype.$k;
$.prototype.getBoundLayers=$.prototype.Wf;$.prototype.getBoundLayerInfo=$.prototype.Oh;$.prototype.getFreeLayers=$.prototype.Fe;$.prototype.getFreeLayerInfo=$.prototype.Kk;$.prototype.getSurfaces=$.prototype.cg;$.prototype.getSurfaceInfo=$.prototype.Zk;$.prototype.getSrses=$.prototype.bg;$.prototype.getSrsInfo=$.prototype.hc;$.prototype.getReferenceFrame=$.prototype.Yk;$.prototype.convertPositionViewMode=$.prototype.Xj;$.prototype.convertPositionHeightMode=$.prototype.Wj;
$.prototype.convertCoords=$.prototype.ea;$.prototype.convertCoordsFromNavToCanvas=$.prototype.Tj;$.prototype.convertCoordsFromPhysToCanvas=$.prototype.Vj;$.prototype.convertCoordsFromNavToCameraSpace=$.prototype.Sj;$.prototype.convertCoordsFromPhysToCameraSpace=$.prototype.Uj;$.prototype.clonePosition=$.prototype.Pj;$.prototype.setPositionCoords=$.prototype.Am;$.prototype.getPositionCoords=$.prototype.Rk;$.prototype.setPositionHeight=$.prototype.Cm;$.prototype.getPositionHeight=$.prototype.Tk;
$.prototype.setPositionOrientation=$.prototype.Dm;$.prototype.getPositionOrientation=$.prototype.Vk;$.prototype.setPositionViewExtent=$.prototype.Em;$.prototype.getPositionViewExtent=$.prototype.Wk;$.prototype.setPositionFov=$.prototype.Bm;$.prototype.getPositionFov=$.prototype.Sk;$.prototype.getPositionViewMode=$.prototype.Xk;$.prototype.getPositionHeightMode=$.prototype.Uk;$.prototype.getPositionCanvasCoords=$.prototype.Qk;$.prototype.getPositionCameraCoords=$.prototype.Pk;
$.prototype.movePositionCoordsTo=$.prototype.Kl;$.prototype.getSurfaceHeight=$.prototype.Gb;$.prototype.getDistance=$.prototype.Yf;$.prototype.getAzimuthCorrection=$.prototype.Vf;$.prototype.getCameraInfo=$.prototype.Ee;$.prototype.isPointInsideCameraFrustum=$.prototype.ul;$.prototype.isBBoxInsideCameraFrustum=$.prototype.sl;$.prototype.generateTrajectory=$.prototype.Ck;$.prototype.setConfigParam=$.prototype.cb;$.prototype.getConfigParam=$.prototype.Eb;$.prototype.redraw=$.prototype.tm;
$.prototype.addRenderSlot=$.prototype.te;$.prototype.moveRenderSlotBefore=$.prototype.Hg;$.prototype.moveRenderSlotAfter=$.prototype.Gg;$.prototype.removeRenderSlot=$.prototype.Rg;$.prototype.setRenderSlotEnabled=$.prototype.Yg;$.prototype.getRenderSlotEnabled=$.prototype.ag;$.prototype.setLoaderSuspended=$.prototype.zm;$.prototype.getLoaderSuspended=$.prototype.Mk;$.prototype.getGpuCache=$.prototype.Lk;$.prototype.getHitCoords=$.prototype.Zf;
function eb(a,b){this.c=a;this.Ql=b||1;this.qf=0;this.wa=[];this.wc=[]}eb.prototype.load=function(a,b,c){var d=this.wc.indexOf(a);if(-1==d){d=vb(this.wa,a);-1!=d?this.wa[d].Kc=c:this.wa.unshift({d:a,vh:b,Kc:c||0});20<this.wa.length&&this.wa.pop();do for(c=!0,a=0,b=this.wa.length-1;a<b;a++)this.wa[a].Kc>this.wa[a+1].Kc&&(c=this.wa[a],this.wa[a]=this.wa[a+1],this.wa[a+1]=c,c=!1);while(!c)}};eb.prototype.remove=function(a){a=vb(this.wa,a);-1!=a&&this.wa.splice(a,1)};
eb.prototype.update=function(){for(var a=0,b=this.wa.length;a<b;a++)this.wa[a].Kc*=0.95;for(;0<this.wa.length&&this.qf<this.Ql;){var c=this.wa.shift();-1==this.wc.indexOf(c.d)&&null!=c.vh&&(this.wc.push(c.d),this.qf++,c.vh(c.d,function(){this.wc.splice(this.wc.indexOf(c.d),1);this.qf--;ub(this.c)}.bind(this),function(){this.wc.splice(this.wc.indexOf(c.d),1);this.qf--}.bind(this)))}};
bb.prototype.Gb=function(a,b,c){var d=nc(this,a),e=d[0],d=d[1];this.j.gd||(b=Math.floor(b));if(this.j.yg)return oc(this,a,b+8,c,b);var g=this.ne;if(null!=e&&null!==b){var f={Ah:d,Hd:Math.ceil(b),aa:{D:e.aa.D.slice(),I:e.aa.I.slice()},A:null,ra:null,Nd:null,gj:!0};g.ei.trace(pc(g,e.d),f);e=f.A;if(null!=f.ra)return c&&(this.n.fg=2,this.n.gg=b,this.n.hg=e.d[0]),this.j.gd&&0<e.d[0]&&f.R&&f.R.ra?(a=xc(d,f.R.A,f.R),a+=(xc(d,e,f)-a)*(b-Math.floor(b))):a=xc(d,e,f),[a,e.d[0]>=Math.ceil(b),!0];if(null!=e)return a=
oc(this,a,b+8,c,b),[a[0],a[1],!0]}return[0,!1,!1]};
function oc(a,b,c,d,e,g){if(g)b=g[0],f=g[1];else{f=nc(a,b);b=f[0];var f=f[1]}a.j.gd||(c=Math.floor(c));if(!g&&a.j.xg){g=oc(a,null,c,d,e,[b,[f[0],f[1],f[2]]]);if(g[2]){var k=g[3].I[0]-g[3].D[0],l=g[3].I[1]-g[3].D[1],m=(f[0]-g[3].D[0])/k,p=(f[1]-g[3].D[1])/l,n=oc(a,null,c,d,e,[b,[f[0]+k,f[1],f[2]]]),q=oc(a,null,c,d,e,[b,[f[0],f[1]+l,f[2]]]);c=oc(a,null,c,d,e,[b,[f[0]+k,f[1]+l,f[2]]]);a=g[0]+(n[0]-g[0])*m;c=a+(q[0]+(c[0]-q[0])*m-a)*p;return[c,g[1],g[2],g[3]]}return[g[0],g[1],g[2],g[3]]}m=a.ne;if(null!=
b&&null!==c&&(g={Ah:f,Hd:Math.ceil(c),aa:{D:b.aa.D.slice(),I:b.aa.I.slice()},A:null,ra:null,Nd:null,gj:!0},m.dl.trace(pc(m,b.d),g),b=g.A,null!=b))return f=b.l.Df(),f=a.ea(f,"physical","navigation"),d&&(a.n.fg=1,a.n.gg=e,a.n.hg=b.d[0]),a.j.gd&&0<b.d[0]&&g.R&&g.R.A?(a=a.ea(g.R.A.l.Df(),"physical","navigation"),c=f[2]+(a[2]-f[2])*(c-Math.floor(c)),[c,!0,!0,g.aa,b]):[f[2],!0,!0,g.aa,b];d&&(a.n.fg=0,a.n.gg=e,a.n.hg=0);return[0,!1,!1,null]}
function xc(a,b,c){var d=c.ra,e=d.ic,g=d.Me;c=c.Nd;var f=a[0]-c.D[0];a=c.I[1]-a[1];f=f/(c.I[0]-c.D[0])*(g[0]-1);a=a/(c.I[1]-c.D[1])*(g[1]-1);c=Math.floor(f);var d=Math.floor(a),f=f-c,k=d*g[0],g=k+g[0],l=e[4*(k+c)],m=e[4*(g+c)],k=l+(e[4*(k+c+1)]-l)*f,e=k+(m+(e[4*(g+c+1)]-m)*f-k)*(a-d);return e=b.af+e/255*(b.Wd-b.af)}
function nc(a,b){for(var c=a.yb.Id.Oa,d=null,e=-1,g=[0,0],f=0,k=c.length;f<k;f++){var l=c[f],m=gc(l.Mm,b,V(l.c)),p=l.aa;m[0]>=p.D[0]&&m[0]<=p.I[0]&&m[1]>=p.D[1]&&m[1]<=p.I[1]&&l.d[0]>e&&(d=l,e=l.d[0],g=m)}return[d,g]}function hc(a,b,c){b=nc(a,b)[0];return null!=b?(a=b.d[0],c=Math.log((b.aa.I[1]-b.aa.D[1])/c)/Math.log(2),Math.max(0,c-8+a)):null}function Bb(a,b,c,d){b=nc(a,b)[0];return null!=b?(a=b.d[0],c=Math.log(d*(b.aa.I[1]-b.aa.D[1])/c)/Math.log(2),Math.max(0,c-8+a)):null}
bb.prototype.Yf=function(a,b,c){var d=gc(this.yb.Za.nd,a,V(this)),e=gc(this.yb.Za.nd,b,V(this)),g=0,f=e[0]-d[0],k=e[1]-d[1],d=e[2]-d[2],g=c?Math.sqrt(f*f+k*k+d*d):Math.sqrt(f*f+k*k),e=V(this).hc();if(xb(V(this)))return[g,s.Fh(Math.atan2(k,f))];a=yb(this).Inverse(a[1],a[0],b[1],b[0]);return g>2*e.a*Math.PI/4007.5?c?[Math.sqrt(a.s12*a.s12+d*d),a.Bn]:[a.s12,a.azi1]:[g,a.azi1]};function yb(a){a=V(a).hc();return new GeographicLib.Geodesic.Geodesic(a.a,a.a/a.b-1)}
function ic(a,b,c,d){this.c=a;this.ld=b.ua();this.md=c.ua();this.ld.i[5]=0>this.ld.i[5]?360+this.ld.i[5]%360:this.ld.i[5]%360;this.md.i[5]=0>this.md.i[5]?360+this.md.i[5]%360:this.md.i[5]%360;this.Pa=this.ld.ua();this.jd=d.mode||"auto";this.Pm="piha";this.Wd=d.maxHeight||1E9;this.$e=d.maxDuration||1E4;this.Hi=d.samplePeriod||10;this.rm=d.pv||0.15;xb(V(this.c))||(this.Nh=yb(this.c));d.distanceAzimuth?(this.Kf=!0,this.Ha=this.ld.ua(),d.destHeight&&Mb(this.Ha,d.destHeight),d.destOrientation&&Mb(this.Ha,
d.destOrientation),d.destFov&&Mb(this.Ha,d.destFov),this.De=d.azimuth||0,this.sb=this.Tf=d.distance||100,this.Da=this.De%360,this.Da=0>this.Da?360+this.Da:this.Da):(this.Kf=!1,this.Ha=this.md.ua(),a=this.c.Yf(W(this.Pa),W(this.Ha)),this.sb=a[0],this.Da=(a[1]-90)%360,this.Da=0>this.Da?360+this.Da:this.Da,xb(V(this.c))||(a=this.Nh.Inverse(this.Pa.i[2],this.Pa.i[1],this.Ha.i[2],this.Ha.i[1]),this.De=a.azi1,this.Tf=a.s12,this.Da=this.De%360,this.Da=0>this.Da?360+this.Da:this.Da));"auto"==this.jd&&(this.jd=
2E3<this.sb?"ballistic":"direct");this.K=0;this.Ta=1E3;500>this.sb?this.K=1E3:2E3>this.sb?this.K=2E3:(this.K=this.sb/100,300>this.K?this.K=3E3:this.Ta=1500,6E3>this.K&&(this.K=6E3),1E4<this.K&&(this.K=1E4),"direct"!=this.jd&&(this.K*=1.8,this.Ta*=1.8));"direct"!=this.jd&&(a=3*this.Ta,this.K=Math.max(this.K,a),this.$e<a&&(this.K=this.$e,this.Ta=this.$e/3));this.K=Math.min(this.K,this.$e);d=d.height;"ballistic"==this.jd&&(this.zc=Math.max(this.Pa.i[4],this.Ha.i[4]),this.zc+=d||0.5*this.sb,this.zc=Math.min(this.zc,
this.Wd),this.zc-=Math.max(this.Pa.i[4],this.Ha.i[4]))}function jc(a,b){var c=W(a.Pa),d=W(a.Ha);if(xb(V(a.c)))return[c[0]+(d[0]-c[0])*b,c[1]+(d[1]-c[1])*b,c[2]+(d[2]-c[2])*b];var e=a.Nh.Direct(c[1],c[0],a.De,a.Tf*b),g=e.azi1-e.azi2,g=0>a.Da?360+g:g;return[e.lon2,e.lat2,c[2]+(d[2]-c[2])*b,g]}function kc(a,b,c){var d=b[0]-a[0],e=b[1]-a[1];b=b[2]-a[2];180<Math.abs(d)&&(d=0<d?-(360-d):360-Math.abs(d));return[a[0]+d*c,a[1]+e*c,a[2]+b*c]}function lc(a,b){var c=a.Pa.fc();return c+(a.Ha.fc()-c)*b}
function mc(a,b){var c=Db(a.Pa);return c+(Db(a.Ha)-c)*b}function bc(a,b){this.c=a;this.n=a.n;this.Na=b;this.l=new Za;this.xc=this.o=0;this.ub=this.V=null;this.fa=0;this.Ba=[];this.vb=[]}h=bc.prototype;h.r=function(){this.l=null;this.ji();this.ii()};h.ji=function(a){for(var b=0,c=this.Ba.length;b<c;b++)this.Ba[b].r();this.Ba=[];!0!=a&&null!=this.V&&this.c.mc.remove(this.V);this.fa=0;this.V=null};
h.ii=function(a){for(var b=0,c=0,d=this.vb.length;c<d;c++)this.vb[c].r(),b+=this.vb[c].o;0<d&&(this.n.Ld-=b,this.n.wb[1][0]++,this.n.wb[1][1]+=b);this.vb=[];!0!=a&&null!=this.ub&&this.c.Hb.remove(this.ub);this.ub=null};
h.O=function(a,b,c){var d=this.c.n.jb>=this.c.Vd;a=a||d;if(2==this.fa){Ib(this.c.mc,this.V);if(c)return!0;if(0==this.vb.length){if(this.c.n.jb>=this.c.Vd)return!1;if(this.n.Nc>this.c.j.Xe)return ub(this.c),!1;if(d)return!1;b=performance.now();c=0;this.vb=Array(this.Ba.length);for(var d=0,e=this.Ba.length;d<e;d++)this.vb[d]=ac(this.Ba[d]),c+=this.vb[d].o;this.n.Ld+=c;this.n.wb[0][0]++;this.n.wb[0][1]+=c;this.ub=Jb(this.c.Hb,this.ii.bind(this,!0),c);this.n.Nc+=performance.now()-b}a||Ib(this.c.Hb,this.ub);
return!0}0!=this.fa||a||this.Pc(b);return!1};h.Pc=function(a){null==this.Na&&(this.Na=Hb(this.c,this.F.B.Cg,{ha:this.F.d[0],Fa:this.F.d[1],Ga:this.F.d[2]}));this.c.Ec.load(this.Na,this.Gc.bind(this),a)};h.Gc=function(a,b,c){this.Tb=b;this.Sb=c;s.Rb(a,this.Ic.bind(this),this.Hc.bind(this),s.useCredentials?-1!=this.Na.indexOf(this.c.Bd):!1);this.fa=1};h.Hc=function(){!0!=this.c.X&&this.Sb()};
h.Ic=function(a){if(!0!=this.c.X){a={gb:a,e:0};var b;b=a.gb;var c;c=""+String.fromCharCode(b.getUint8(a.e,!0));a.e+=1;c+=String.fromCharCode(b.getUint8(a.e,!0));a.e+=1;"ME"!=c?b=!1:(this.tj=b.getUint16(a.e,!0),a.e+=2,2<this.tj?b=!1:(b.getFloat64(a.e,!0),a.e+=8,this.vi=b.getUint16(a.e,!0),a.e+=2,b=!0));if(b){this.Ba=[];b=0;for(c=this.vi;b<c;b++){var d=new yc(this,a);d.qc&&(this.Ba.push(d),this.o+=this.Ba[b].o,this.xc+=this.Ba[b].xc)}this.vi=this.Ba.length}this.V=Jb(this.c.mc,this.ji.bind(this,!0),
this.o);this.Tb();this.fa=2}};function zc(a,b,c,d){this.c=a.c;this.xd=a.xd;this.Xd=a.Xd;this.hd=a.hd;this.rd=a.rd;this.B=b;this.Ol=c;this.zh=d;this.Kb=null}zc.prototype.trace=function(a,b){this.Kb=b;if(a){if(1==a.d[0]&&(Ac(this,a.R,0,null,null,!0),!a.R.A))return;Ac(this,a,0)}};
function Ac(a,b,c,d,e,g){if(null!=b){null==b.ia&&(b.ia=s.oh(a.Xd,a.rd,b,a.hd));if(a.c.yd!=b.Ob){b.Rd=b.B;b.Cc={ja:b.ja,la:b.la,U:b.U,nc:b.nc};b.Ua=0<b.C[0].length?{C:b.C,p:b.p}:null;b.Sg=!1;b.Bc=b.A;for(var f in b.rb)b.rb[f]={zb:[],tc:[],of:!1,Ob:0};b.ya={};b.U={};b.oe=!0;b.B=null;b.ja=null;b.la=[];b.nc=null;b.zd=!1;b.lh=!1;b.$b=[];b.C=[[],[],[]];b.p={};b.Ob=a.c.yd;ub(a.c);b.Ua&&(b.Ua=b.Ua)}if(!e){if(b.mh||null==b.B&&0==b.$b.length)if(b.B=null,b.zd=!1,b.lh=!1,b.$b=[],b.mh=!1,f=a.c.dh,1E6==f.length){if(!0==
Bc(f[0],b.d)){var k=f[0];b.B=k}}else{for(var l=0,m=f.length;l<m;l++){a:{var k=f[l],p=b.d,n=p[0]-k.na[0],q=0>n;if(p[0]<k.na[0]){var n=-n,t=k.da[0][0]>>n,r=k.da[0][1]>>n,u=k.da[1][0]>>n,n=k.da[1][1]>>n;if(p[0]>k.na[1]||p[1]<t||p[1]>u||p[2]<r||p[2]>n){k=[!1,!1];break a}}else if(t=p[1]>>n,n=p[2]>>n,p[0]>k.na[1]||t<k.da[0][0]||t>k.da[1][0]||n<k.da[0][1]||n>k.da[1][1]){k=[!1,!1];break a}k=[!0,q]}if(!0==k[0]){k=f[l];if(0<b.d[0]&&(p=b.R,null!=p&&null!=p.ia))if(q=Cc(p.ia,k)){if(!q.O(c)){b.mh=!0;continue}if(p=
q.Kd(p.d)){if(q=b.d,0==(p.L&1<<(q[2]-(p.d[2]<<1)<<1)+(q[1]-(p.d[1]<<1))+4))continue}else continue}else continue;b.$b.push(k)}}1<b.$b.length?b.zd=!0:b.B=b.$b[0]}if(null==b.A||b.Bc){if(!(f=b.mh)){a:{if(b.zd){f=b.$b;m=l=0;for(k=f.length;m<k;m++)p=f[m],q=Cc(b.ia,p),null==q&&(q=new Dc(b.ia,p),b.ia.Ya.push(q)),!0==q.O(c)&&l++;if(l==k){f=b.$b;l=null;m=0;for(k=f.length;m<k;m++)if(p=f[m],q=Cc(b.ia,p),!0==q.O(c)&&(q=q.Kd(b.d),null!=q)){if(p.ed&&0==(q.L&1)&&0<q.Ne){n=q.Ne-1;n=wb(a.c.Ca,p.d[n]).vj;t=!1;for(r=
m;r<k;r++)if(f[r].vj<=n){t=r>m;m=r-1;break}if(t)continue}if(0!=(q.L&1)){l=q.ua();b.B=p;break}}m=0;for(k=f.length;m<k;m++)p=f[m],q=Cc(b.ia,p),!0==q.O(c)&&(q=q.Kd(b.d),null!=q&&(l?(l.L|=q.L&240,l.l.t[0]=Math.min(l.l.t[0],q.l.t[0]),l.l.t[1]=Math.min(l.l.t[1],q.l.t[1]),l.l.t[2]=Math.min(l.l.t[2],q.l.t[2]),l.l.H[0]=Math.max(l.l.H[0],q.l.H[0]),l.l.H[1]=Math.max(l.l.H[1],q.l.H[1]),l.l.H[2]=Math.max(l.l.H[2],q.l.H[2])):(l=q.ua(),b.B=p)));b.A=l;b.Bc=null;ub(a.c)}else{f=!1;break a}}f=b.B;if(null==f)f=!1;else if(l=
Cc(b.ia,f),null==l&&(l=new Dc(b.ia,f),b.ia.Ya.push(l)),!0==l.O(c)){b.zd||(b.A=l.Kd(b.d),b.Bc=null,ub(a.c));if(null!=b.A)for(b.A.F=b,b.Bc=null,ub(a.c),f=0;4>f;f++)0!=(b.A.L&1<<f+4)==!0?b.xf(f):(l=b,m=f,null!=l.W[m]&&(l.W[m].r(),l.W[m]=null));f=!0}else f=!1}f=f||null!=b.A&&b.Bc}if(!f)return;b.Bc&&(e=!0)}}if(null!=b.A&&!g&&(b.A.Fg.mj(),b.Rd&&b.Rd==b.B&&(b.Rd=null,b.Cc&&(b.ja=b.Cc.ja,b.la=b.Cc.la,b.U=b.Cc.U,b.nc=b.Cc.nc,b.Rd=null,b.Cc=null)),g=null,a.Kb&&a.Kb.gj||(g=a.zh(b,a.Kb)),c=a.Ol(b,a.Kb,g,c,d,
e),!0==c[0]))for(g||(g=a.zh(b,a.Kb)),d=0,e=g.length;d<e;d++)Ac(a,b.W[g[d][0]],g[d][1],c[1],c[2])}}MelownMetanodeFlags_GeometryPresent=1;MelownMetanodeFlags_NavtilePresent=3;MelownMetanodeFlags_InternalTexturePresent=7;MelownMetanodeFlags_CoarsenessControl=15;MelownMetanodeFlags_ChildShift=3;
function Ec(a,b,c){this.Fg=a;this.c=a.c;this.d=b;this.p=[];if(c){a=c.gb;this.L=a.getUint8(c.e,!0);c.e+=1;var d=6*(this.d[0]+2)+7>>3;b=new Uint8Array(d);for(var e=0,g=d;e<g;e++)b[e]=a.getUint8(c.e,!0),c.e+=1;for(var g=this.d[0]+2,d=[0,0,0],f=[0,0,0],k=0,l=this.c.Km,m=this.c.Jm,e=0;3>e;e++)d[e]=Fc(b,g,k)*l[e]+m[e],k+=g,f[e]=Fc(b,g,k)*l[e]+m[e],k+=g;e=k=0;for(g=b.length;e<g;e++)k+=b[e];0==k&&(d[0]=Number.POSITIVE_INFINITY,d[1]=Number.POSITIVE_INFINITY,d[2]=Number.POSITIVE_INFINITY,f[0]=Number.NEGATIVE_INFINITY,
f[1]=Number.NEGATIVE_INFINITY,f[2]=Number.NEGATIVE_INFINITY);this.l=new Za(d[0],d[1],d[2],f[0],f[1],f[2]);this.Ne=a.getUint8(c.e,!0);c.e+=1;this.Jc=s.ck(a.getUint16(c.e,!0));c.e+=2;this.Ae=a.getUint16(c.e,!0);c.e+=2;0==(this.L&4)&&(this.Jc=Number.POSITIVE_INFINITY);0==(this.L&8)&&(this.Ae=256);this.af=a.getInt16(c.e,!0);c.e+=2;this.Wd=a.getInt16(c.e,!0);c.e+=2}}Ec.prototype.r=function(){};function Fc(a,b,c){for(var d=0,e=0;e<b;e++)a[c>>3]&1<<7-(c&7)&&(d|=1<<b-e-1),c++;return d/((1<<b)-1)}
Ec.prototype.ua=function(){var a=new Ec(this.Fg,this.d);a.L=this.L;a.af=this.af;a.Wd=this.Wd;a.l=this.l.ua();a.Ne=this.Ne;a.Jc=this.Jc;a.Ae=this.Ae;return a};
Ec.prototype.Ie=function(a,b){var c=b;null!=c?(c[0]=$a(this.l,0),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=$a(this.l,1),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=$a(this.l,2),c[11]=0,c[12]=this.l.t[0]-a[0],c[13]=this.l.t[1]-a[1],c[14]=this.l.t[2]-a[2],c[15]=1):(c=s.f.create(),s.f.multiply(s.Tc(this.l.t[0]-a[0],this.l.t[1]-a[1],this.l.t[2]-a[2]),s.hf($a(this.l,0),$a(this.l,1),$a(this.l,2)),c));return c};
Ec.prototype.ad=function(a){var b=this.c.k;b.g.useProgram(b.od,"aPosition");var c=s.f.create(),d=s.f.create();s.f.multiply(Ua(b.m),this.Ie(a),d);a=Ta(b.m);s.f.multiply(a,d,c);qa(b.od,"uMVP",c);b.qh.Wa(b.od,"aPosition")};function Gc(a,b,c){this.d=c;this.c=a;this.R=b;this.Ya=[];this.W=[null,null,null,null]}
Gc.prototype.r=function(){for(var a=0,b=this.Ya.length;a<b;a++)this.Ya[a].r();this.Ya=[];for(a=0;4>a;a++)null!=this.W[a]&&this.W[a].r();this.W=[null,null,null,null];a=this.R;this.R=null;null!=a&&a.removeChild(this)};Gc.prototype.qe=function(){return 0==this.Ya.length?(this.r(),!1):!0};function Cc(a,b){for(var c=a.Ya,d=0,e=c.length;d<e;d++)if(c[d].B==b)return c[d];return null}function Hc(a,b){for(var c=0,d=a.Ya.length;c<d;c++)if(a.Ya[c]==b){a.Ya.splice(c,1);break}}
Gc.prototype.xf=function(a){var b=this.d,b=[b[0]+1,b[1]<<1,b[2]<<1];switch(a){case 1:b[1]++;break;case 2:b[2]++;break;case 3:b[1]++,b[2]++}this.W[a]=new Gc(this.c,this,b)};Gc.prototype.removeChild=function(a){for(var b=0;4>b;b++)this.W[b]==a&&(this.W[b].r(),this.W[b]=null)};s.oh=function(a,b,c,d){var e=c.d;b=b[0];c=e[1]>>d<<d;d=e[2]>>d<<d;for(e=e[0];e>b;e--){var g=0,f=1<<e-b-1;0!=(c&f)&&(g+=1);0!=(d&f)&&(g+=2);null==a.W[g]&&a.xf(g);a=a.W[g]}return a};
function Dc(a,b){this.ia=a;this.c=a.c;this.B=b;this.d=a.d;this.Oa=[];this.o=this.fa=0;this.V=null}h=Dc.prototype;h.r=function(a){!0!=a&&null!=this.V&&this.c.kc.remove(this.V);this.ia&&(Hc(this.ia,this),this.ia.qe(),this.ia=null);this.B=this.fa=0;this.V=null;this.Oa=[]};h.O=function(){if(2==this.fa)return!0;0==this.fa&&this.Pc();return!1};h.mj=function(){null!=this.V&&Ib(this.c.kc,this.V)};
h.Kd=function(a){var b=a[1]-this.d[1]-this.de;a=a[2]-this.d[2]-this.ee;return 0>b||0>a||b>=this.Ja||a>=this.Ab?null:this.Oa[this.Ja*a+b]};h.Pc=function(){null==this.Na&&(this.Na=Hb(this.c,this.B.Fc,{ha:this.d[0],Fa:this.d[1],Ga:this.d[2]}));this.c.Ec.load(this.Na,this.Gc.bind(this),null)};h.Gc=function(a,b,c){this.Tb=b;this.Sb=c;s.Rb(a,this.Ic.bind(this),this.Hc.bind(this),s.useCredentials?-1!=this.Na.indexOf(this.c.Bd):!1);this.fa=1};h.Hc=function(){!0!=this.c.X&&this.Sb()};
h.Ic=function(a){!0!=this.c.X&&(this.o+=4*a.byteLength,this.Lg({gb:a,e:0}),this.V=Jb(this.c.kc,this.r.bind(this,!0),this.o),this.Tb(),this.fa=2,ub(this.c))};
h.Lg=function(a){var b=a.gb,c;c=""+String.fromCharCode(b.getUint8(a.e,!0));a.e+=1;c+=String.fromCharCode(b.getUint8(a.e,!0));a.e+=1;"MT"==c&&(c=b.getUint16(a.e,!0),a.e+=2,1<c||(this.ha=b.getUint8(a.e,!0),a.e+=1,this.Dg=b.getUint32(a.e,!0),a.e+=4,this.Eg=b.getUint32(a.e,!0),a.e+=4,this.de=b.getUint16(a.e,!0),a.e+=2,this.ee=b.getUint16(a.e,!0),a.e+=2,this.Ja=b.getUint16(a.e,!0),a.e+=2,this.Ab=b.getUint16(a.e,!0),a.e+=2,b.getUint8(a.e,!0),a.e+=1,this.Mg(a),this.Ng(a)))};
h.Mg=function(a){var b=a.gb;this.Ed=b.getUint8(a.e,!0);a.e+=1;b.getUint16(a.e,!0);a.e+=2;if(0==this.Ed)this.p=[];else{var c=this.Ja*this.Ab+7>>3;this.p=Array(this.Ed);for(var d=0,e=this.p.length;d<e;d++){var g=b.getUint16(a.e,!0);a.e+=2;for(var f=new Uint8Array(c),k=0;k<c;k++)f[k]=b.getUint8(a.e,!0),a.e+=1;this.p[d]={Ef:g,Ff:f}}}};
h.yf=function(){for(var a=0;a<this.Ab;a++)for(var b=0;b<this.Ja;b++)for(var c=this.Ja*a+b,d=1<<(c&7),c=c>>3,e=0,g=this.p.length;e<g;e++)this.p[e].Ff[c]&d&&this.Oa[a*this.Ja+b].p.push(this.p[e].Ef)};h.Ng=function(a){this.Oa=Array(this.Ja*this.Ab);for(var b=0,c=0;c<this.Ab;c++)for(var d=0;d<this.Ja;d++)this.Oa[b]=new Ec(this,[this.ha,this.Dg+this.de+d,this.Eg+this.ee+c],a),b++;this.yf()};function Ic(a,b,c,d,e){this.c=a;this.d=b;this.Mm=pb(this.c,c);this.aa=d;this.di=e}
function hb(a,b){this.c=a;this.mb=a.mb;this.qc=!1;this.d=b.id||null;this.Gh=b.description||"";var c=b.model;if(null!=c&&(this.Za={nd:pb(this.c,c.physicalSrs),cf:pb(this.c,c.navigationSrs),Qg:pb(this.c,c.publicSrs)},this.Kb={},null!=b.parameters&&(c=b.parameters,this.Kb.hd=c.metaBinaryOrder||1,this.Kb.Ml=c.navDelta||8),c=b.division,null!=c)){this.Id={ko:c.rootLod||0,zn:c.arity||null,di:c.heightRange||[0,1]};var d;d=c.extents;d=null==d?{D:[0,0,0],I:[1,1,1]}:{D:d.ll||[0,0,0],I:d.ur||[1,1,1]};this.Id.aa=
d;this.c.Km=[d.I[0]-d.D[0],d.I[1]-d.D[1],d.I[2]-d.D[2]];this.c.Jm=d.D;c=c.nodes;this.Id.Oa=[];if(null!=c){d=0;for(var e=c.length;d<e;d++){var g;var f=c[d],k=void 0,l=void 0;g=f.srs;var m=void 0,k=f.extents,m=null==k?{D:[0,0],I:[1,1]}:{D:k.ll||[0,0],I:k.ur||[1,1]},f=f.id;null!=f?(k=f.lod||0,l=f.position||[0,0],g=new Ic(this.c,[k,l[0],l[1]],g,m,this.di)):g=void 0;this.Id.Oa.push(g)}this.qc=!0}}}hb.prototype.tb=function(){return{physicalSrs:this.Za.nd.d,navigationSrs:this.Za.cf.d,publicSrs:this.Za.Qg.d}};
hb.prototype.ea=function(a,b,c){var d,e;switch(b){case "public":d=this.Za.Qg;break;case "physical":d=this.Za.nd;break;case "navigation":d=this.Za.cf}switch(c){case "public":e=this.Za.Qg;break;case "physical":e=this.Za.nd;break;case "navigation":e=this.Za.cf}a:{b=d;b.O();if("string"!==typeof e){if(e.d==b.d){e=a.slice();break a}e.O()}a=a.slice();a[2]=Jc(b,a);a=b.mb(b.pb,"string"===typeof e?e:e.pb,a);"string"!==typeof e&&(a[2]=Kc(e,a));e=a}return e};h=bb.prototype;
h.te=function(a,b,c){this.Ia.push({id:a,wh:b,Rf:c})};h.Hg=function(a,b){var c=vb(this.Ia,"after-map-render"==a?"map":a),d=vb(this.Ia,b);-1!=c&&-1!=d&&this.Ia.splice(d,0,this.Ia.splice(c,1)[0])};h.Gg=function(a,b){var c=vb(this.Ia,"after-map-render"==a?"map":a),d=vb(this.Ia,b);-1!=c&&-1!=d&&(d++,this.Ia.splice(d,0,this.Ia.splice(c,1)[0]))};h.Rg=function(){var a=vb(this.Ia,id2_);-1!=a&&this.Ia.splice(a,1)};h.Yg=function(a,b){var c=vb(this.Ia,a);-1!=c&&(this.Ia[c].Rf=b)};
h.ag=function(){var a=vb(this.Ia,id2_);return-1!=a?this.Ia[a].Rf:!1};function Ab(a){1!=a.cc&&la(a.k.g);for(var b=0,c=a.Ia.length;b<c;b++){var d=a.Ia[b];d.Rf&&d.wh&&d.wh(a.gk[a.cc])}}Dc=function(a,b){this.ia=a;this.c=a.c;this.B=b;this.d=a.d;this.Oa=[];this.o=this.fa=0;this.V=null};h=Dc.prototype;h.r=function(a){!0!=a&&null!=this.V&&this.c.kc.remove(this.V);this.ia&&(Hc(this.ia,this),this.ia.qe(),this.ia=null);this.B=this.fa=0;this.V=null;this.Oa=[]};
h.O=function(){if(2==this.fa)return!0;0==this.fa&&this.Pc();return!1};h.mj=function(){null!=this.V&&Ib(this.c.kc,this.V)};h.Kd=function(a){var b=a[1]-this.d[1]-this.de;a=a[2]-this.d[2]-this.ee;return 0>b||0>a||b>=this.Ja||a>=this.Ab?null:this.Oa[this.Ja*a+b]};h.Pc=function(){null==this.Na&&(this.Na=Hb(this.c,this.B.Fc,{ha:this.d[0],Fa:this.d[1],Ga:this.d[2]}));this.c.Ec.load(this.Na,this.Gc.bind(this),null)};
h.Gc=function(a,b,c){this.Tb=b;this.Sb=c;s.Rb(a,this.Ic.bind(this),this.Hc.bind(this),s.useCredentials?-1!=this.Na.indexOf(this.c.Bd):!1);this.fa=1};h.Hc=function(){!0!=this.c.X&&this.Sb()};h.Ic=function(a){!0!=this.c.X&&(this.o+=4*a.byteLength,this.Lg({gb:a,e:0}),this.V=Jb(this.c.kc,this.r.bind(this,!0),this.o),this.Tb(),this.fa=2,ub(this.c))};
h.Lg=function(a){var b=a.gb,c;c=""+String.fromCharCode(b.getUint8(a.e,!0));a.e+=1;c+=String.fromCharCode(b.getUint8(a.e,!0));a.e+=1;"MT"==c&&(c=b.getUint16(a.e,!0),a.e+=2,1<c||(this.ha=b.getUint8(a.e,!0),a.e+=1,this.Dg=b.getUint32(a.e,!0),a.e+=4,this.Eg=b.getUint32(a.e,!0),a.e+=4,this.de=b.getUint16(a.e,!0),a.e+=2,this.ee=b.getUint16(a.e,!0),a.e+=2,this.Ja=b.getUint16(a.e,!0),a.e+=2,this.Ab=b.getUint16(a.e,!0),a.e+=2,b.getUint8(a.e,!0),a.e+=1,this.Mg(a),this.Ng(a)))};
h.Mg=function(a){var b=a.gb;this.Ed=b.getUint8(a.e,!0);a.e+=1;b.getUint16(a.e,!0);a.e+=2;if(0==this.Ed)this.p=[];else{var c=this.Ja*this.Ab+7>>3;this.p=Array(this.Ed);for(var d=0,e=this.p.length;d<e;d++){var g=b.getUint16(a.e,!0);a.e+=2;for(var f=new Uint8Array(c),k=0;k<c;k++)f[k]=b.getUint8(a.e,!0),a.e+=1;this.p[d]={Ef:g,Ff:f}}}};
h.yf=function(){for(var a=0;a<this.Ab;a++)for(var b=0;b<this.Ja;b++)for(var c=this.Ja*a+b,d=1<<(c&7),c=c>>3,e=0,g=this.p.length;e<g;e++)this.p[e].Ff[c]&d&&this.Oa[a*this.Ja+b].p.push(this.p[e].Ef)};h.Ng=function(a){this.Oa=Array(this.Ja*this.Ab);for(var b=0,c=0;c<this.Ab;c++)for(var d=0;d<this.Ja;d++)this.Oa[b]=new Ec(this,[this.ha,this.Dg+this.de+d,this.Eg+this.ee+c],a),b++;this.yf()};
function gb(a,b,c){this.c=a;this.d=b;this.mb=a.mb;this.Rj=c.comment||null;this.pb=c.srsDef||null;this.Oi=c.srsModifiers||[];this.S=c.type||"projected";this.pn=c.vdatum||"orthometric";this.pb=c.srsDefEllps||this.pb;a=c.periodicity;this.$l=null==a?null:{type:a.type||"",period:a.period||0};this.$g=this.mb(this.pb).info();this.ec=this.La=null;c.geoidGrid&&(c=c.geoidGrid,this.La={Eh:c.definition||null,Lm:c.srsDefEllps||null,hh:c.valueRange||[0,1]},this.La.aa=null!=c.extents?{D:c.extents.ll,I:c.extents.ur}:
{D:[0,0],I:[1,1]},null!=this.La.Eh&&(c=Hb(this.c,this.La.Eh,{},null),this.ec=new ec(this.c,c,!0)))}gb.prototype.tb=function(){return{comment:this.Rj,srsDef:this.pb,srsModifiers:this.Oi,type:this.S,vdatum:this.pn,srsDefEllps:this.pb,a:this.$g.a,b:this.$g.b}};gb.prototype.hc=function(){return this.$g};gb.prototype.O=function(){return null==this.La||null!=this.ec&&this.ec.O()};function xb(a){return"projected"==a.S}function Jc(a,b){var c=b[2]||0,c=c/Lc(a,b);return c-=Mc(a,b)}
function Kc(a,b){var c=b[2]||0,c=c+Mc(a,b);return c*=Lc(a,b)}
function Mc(a,b){if(null!=a.ec&&(null==a.La||null!=a.ec&&a.ec.O())){mapCoords_=a.mb(a.pb,a.La.Lm,[b[0],b[1]]);var c=mapCoords_[0]-a.La.aa.D[0],d=a.La.aa.I[1]-mapCoords_[1],e=a.ec.Me,c=e[0]/(a.La.aa.I[0]-a.La.aa.D[0])*c,d=e[1]/(a.La.aa.I[1]-a.La.aa.D[1])*d,c=s.Zc(c,0,e[0]-2),d=s.Zc(d,0,e[1]-2),g=Math.floor(c),f=Math.floor(d),c=c-g,k=a.ec.ic,l=f*e[0],e=l+e[0],m=k[4*(l+g)],p=k[4*(e+g)],l=m+(k[4*(l+g+1)]-m)*c,d=l+(p+(k[4*(e+g+1)]-p)*c-l)*(d-f);return d=a.La.hh[0]+(a.La.hh[1]-a.La.hh[0])/255*d}return 0}
function Lc(a,b){if(-1!=a.Oi.indexOf("adjustVertical")){var c=a.hc(),d="+proj=longlat  +alpha=0 +gamma=0 +a="+c.a+" +b="+c.b+" +x_0=0 +y_0=0",e=a.mb(a.pb,d,[b[0],b[1]]),e=(new GeographicLib.Geodesic.Geodesic(c.a,c.a/c.b-1)).Direct(e[1],e[0],90,1E3),e=[e.Yn,e.Tn],e=a.mb(d,a.pb,e),d=e[0]-b[0],e=e[1]-b[1];return Math.sqrt(d*d+e*e)/1E3}return 1}
function gc(a,b,c){a.O();if("string"!==typeof c){if(c.d==a.d)return b.slice();c.O()}b=b.slice();"string"!==typeof c&&(b[2]=Jc(c,b));b=a.mb("string"===typeof c?c:c.pb,a.pb,b);b[2]=Kc(a,b);return b}
function fb(a){this.c=a;this.w=a.w;this.Qd=a.w.Qd;this.li=this.Nc=this.Fi=this.ie=this.Lh=this.Pi=this.vc=this.Ce=this.Qf=0;this.gf=Array(32);this.sm=!1;this.Ke=0;this.Ma=600;this.bi=Array(this.Ma);this.Sh=Array(this.Ma);this.Rh=Array(this.Ma);this.Th=Array(this.Ma);this.Wh=Array(this.Ma);this.Ph=Array(this.Ma);this.Qh=Array(this.Ma);this.Zh=Array(this.Ma);this.Xh=Array(this.Ma);this.Yh=Array(this.Ma);this.ai=Array(this.Ma);this.$h=Array(this.Ma);this.Vh=Array(this.Ma);this.Uh=Array(this.Ma);this.xb=
[[0,0],[0,0]];this.wb=[[0,0],[0,0]];for(a=this.Ke=0;a<this.Ma;a++)this.bi[a]=0,this.Sh[a]=0,this.Rh[a]=0,this.Th[a]=0,this.Wh[a]=0,this.Qh[a]=0,this.Ph[a]=0,this.Zh[a]=0,this.Xh[a]=0,this.Yh[a]=0,this.ai[a]=0,this.$h[a]=[0,[]],this.Vh[a]=[[0,0],[0,0]],this.Uh[a]=[[0,0],[0,0]];this.bl=this.cl=this.hg=this.gg=this.fg=this.jb=this.Md=this.Ld=0}
fb.prototype.end=function(a){var b=performance.now(),c=b-this.Fi,d=b-this.Lh;this.Lh=b;a?(this.ie+=c,this.li=c):this.ie+=this.li;this.sm&&(a=this.Ke,this.bi[a]=c,this.Sh[a]=0,this.Rh[a]=0,this.Th[a]=0,this.Wh[a]=d,this.Qh[a]=this.c.mc.Nb,this.Ph[a]=this.c.kc.Nb,this.Zh[a]=this.Md,this.Xh[a]=this.Ld,this.Yh[a]=this.jb,this.ai[a]=this.Ce,this.Vh[a]=[[this.xb[0][0],this.xb[0][1]],[this.xb[1][0],this.xb[1][1]]],this.Uh[a]=[[this.wb[0][0],this.wb[0][1]],[this.wb[1][0],this.wb[1][1]]],this.$h[a]=[this.Qf,
this.gf.slice()],this.Ke=(this.Ke+1)%this.Ma,this.Qd.xo(this));0==this.Pi%50&&(this.ie=0,null!=this.Qd&&this.Qd.yo(this))};MelownSubmeshFlags_InternalTexcoords=1;MelownSubmeshFlags_ExternalTexcoords=2;MelownSubmeshFlags_PerVertexUndulation=4;MelownSubmeshFlags_TextureMode=8;
function yc(a,b){this.c=a.c;this.pf=this.dc=this.Ib=this.u=null;this.lb=a;this.qc=!0;this.l=new Za;this.xc=this.o=0;if(null!=b){var c=b.gb;this.L=c.getUint8(b.e,!0);b.e+=1;1<this.lb.tj?(this.Sc=c.getUint8(b.e,!0),b.e+=1):this.Sc=0;this.oc=c.getUint16(b.e,!0);b.e+=2;var d=this.l.t,e=this.l.H;d[0]=c.getFloat64(b.e,!0);b.e+=8;d[1]=c.getFloat64(b.e,!0);b.e+=8;d[2]=c.getFloat64(b.e,!0);b.e+=8;e[0]=c.getFloat64(b.e,!0);b.e+=8;e[1]=c.getFloat64(b.e,!0);b.e+=8;e[2]=c.getFloat64(b.e,!0);b.e+=8;c=b.gb;d=b.e;
e=c.getUint16(b.e,!0);d+=2;e||(this.qc=!1);var g=null,f=null,k=new Float32Array(3*e);this.L&MelownSubmeshFlags_ExternalTexcoords&&(g=new Float32Array(2*e));this.L&MelownSubmeshFlags_PerVertexUndulation&&(f=new Float32Array(e));for(var l=1/65535,m=0;m<e;m++){var p=3*m;k[p]=c.getUint16(d,!0)*l;d+=2;k[p+1]=c.getUint16(d,!0)*l;d+=2;k[p+2]=c.getUint16(d,!0)*l;d+=2;null!=g&&(p=2*m,g[p]=c.getUint16(d,!0)*l,d+=2,g[p+1]=(65535-c.getUint16(d,!0))*l,d+=2);null!=f&&(f[m]=c.getUint16(d,!0)*l,d+=2)}this.cj=k;this.aj=
g;this.pf=f;b.e=d;if(this.L&MelownSubmeshFlags_InternalTexcoords){c=b.gb;d=b.e;k=c.getUint16(b.e,!0);d+=2;e=new Float32Array(2*k);g=1/65535;f=0;for(k*=2;f<k;f+=2)e[f]=c.getUint16(d,!0)*g,d+=2,e[f+1]=(65535-c.getUint16(d,!0))*g,d+=2;this.bj=e;b.e=d}c=b.gb;d=b.e;e=c.getUint16(b.e,!0);d+=2;f=g=null;k=new Float32Array(9*e);this.L&MelownSubmeshFlags_InternalTexcoords&&(g=new Float32Array(6*e));this.L&MelownSubmeshFlags_ExternalTexcoords&&(f=new Float32Array(6*e));for(var l=this.cj,m=this.aj,p=this.bj,
n=0;n<e;n++){var q=9*n,t=c.getUint16(d,!0),d=d+2,r=c.getUint16(d,!0),d=d+2,u=c.getUint16(d,!0),d=d+2,C=3*t;k[q]=l[C];k[q+1]=l[C+1];k[q+2]=l[C+2];C=3*r;k[q+3]=l[C];k[q+4]=l[C+1];k[q+5]=l[C+2];C=3*u;k[q+6]=l[C];k[q+7]=l[C+1];k[q+8]=l[C+2];null!=f&&(q=6*n,f[q]=m[2*t],f[q+1]=m[2*t+1],f[q+2]=m[2*r],f[q+3]=m[2*r+1],f[q+4]=m[2*u],f[q+5]=m[2*u+1]);null!=g&&(t=c.getUint16(d,!0),d+=2,r=c.getUint16(d,!0),d+=2,u=c.getUint16(d,!0),d+=2,q=6*n,g[q]=p[2*t],g[q+1]=p[2*t+1],g[q+2]=p[2*r],g[q+3]=p[2*r+1],g[q+4]=p[2*
u],g[q+5]=p[2*u+1])}this.u=k;this.Ib=g;this.dc=f;this.aj=this.bj=this.cj=null;b.e=d;this.o=this.u.length;this.Ib&&(this.o+=this.Ib.length);this.dc&&(this.o+=this.dc.length);this.pf&&(this.o+=this.pf.length);this.o*=4;this.xc=e}}yc.prototype.r=function(){this.pf=this.dc=this.Ib=this.u=null};function ac(a){return new va(a.c.k.g,{l:a.l,u:a.u,rf:a.Ib,nj:a.dc},0,a.c.w)}
yc.prototype.Ie=function(a,b){var c=b;null!=c?(c[0]=$a(this.l,0),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=$a(this.l,1),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=$a(this.l,2),c[11]=0,c[12]=this.l.t[0]-a[0],c[13]=this.l.t[1]-a[1],c[14]=this.l.t[2]-a[2],c[15]=1):(c=s.f.create(),s.f.multiply(s.Tc(this.l.t[0]-a[0],this.l.t[1]-a[1],this.l.t[2]-a[2]),s.hf($a(this.l,0),$a(this.l,1),$a(this.l,2)),c));return c};
yc.prototype.ad=function(a){var b=this.c.k;b.g.useProgram(b.od,"aPosition");var c=s.f.create(),d=s.f.create();s.f.multiply(Ua(b.m),this.Ie(a),d);a=Ta(b.m);s.f.multiply(a,d,c);qa(b.od,"uMVP",c);b.qh.Wa(b.od,"aPosition")};
function jb(a,b,c){this.c=a;this.d=b.id||null;this.hd=b.metaBinaryOrder||1;this.Fc=b.metaUrl||"";this.si=b.navUrl||"";this.Ml=b.navDelta||1;this.Cg=b.meshUrl||"";this.Ti=b.textureUrl||"";this.na=b.lodRange||[0,0];this.da=b.tileRange||[[0,0],[0,0]];this.oc=b.textureLayer||null;this.Cb=[];this.ed=c||!1;this.Sc=[];if(this.ed)for(a=0,b=this.d.length;a<b;a++)this.Sc.push(wb(this.c.Ca,this.d[a]))}
jb.prototype.tb=function(){return{metaUrl:this.Fc,navUrl:this.si,meshUrl:this.Cg,textureUrl:this.Ti,lodRange:this.na,tileRange:this.da,textureLayer:this.oc}};function Bc(a,b){if(b[0]>a.na[1])return!1;var c=b[0]-a.na[0];if(0<=c){var d=b[1]>>c,c=b[2]>>c;if(d<a.da[0][0]||d>a.da[1][0]||c<a.da[0][1]||c>a.da[1][1])return!1}else if(c=-c,b[1]<a.da[0][0]>>c||b[1]>a.da[1][0]>>c||b[2]<a.da[0][1]>>c||b[2]>a.da[1][1]>>c)return!1;return!0}
function fc(a,b,c){return Hb(a.c,a.Ti,{ha:b[0],Fa:b[1],Ga:b[2]},c,void 0)}
function sb(a){var b=a.Gd;a.dh=[];a.Ri=[];var c={},d=0,e=[],g;for(g in b.Ca)if(b=wb(a.Ca,g))d++,c[g]=b.e+1,e.push([[b.e+1],b,!0]);for(g in a.Je){var f=a.Je[g],k=f.d;if(k.length<=d){for(var l=!1,b=0,m=k.length;b<m;b++)if(!c[k[b]]){l=!0;break}if(!l){l=[];b=0;for(m=k.length;b<m;b++)l.unshift(c[k[b]]);e.push([l,f,!1])}}}do for(f=!0,c=0,g=e.length-1;c<g;c++){for(var k=e[c][0],l=e[c+1][0],p=!1,b=0,m=Math.min(k.length,l.length);b<m;b++)if(k[b]<l[b]||b==m-1&&k[b]==l[b]&&l.length>k.length){p=!0;break}p&&(b=
e[c],e[c]=e[c+1],e[c+1]=b,f=!1)}while(!f);d-=1;c=0;for(g=e.length;c<g;c++)a.dh.push(e[c][1]),e[c][1].vj=d,e[c][2]&&(d--,a.Ri.push(e[c][1]))}function tb(a){var b=a.Gd,c;for(c in b.Ca){var d=b.Ca[c],e=wb(a.Ca,c);if(null!=e){e.Cb=[];for(var g=0,f=d.length;g<f;g++){var k=d[g];if("string"===typeof k){var l=a.ya[k];l&&e.Cb.push([l,1])}else if(l=a.ya[k.id]){var m=1;"undefined"!==typeof k.alpha&&(m=k.alpha);e.Cb.push([l,m])}}}}}s.Aj=jb;s.Bj=jb;
function ec(a,b,c,d,e){this.c=a;this.n=a.n;this.Aa=this.Me=this.ic=this.Ea=null;this.fa=0;this.be=!1;this.sa=null;this.Na=b;this.ra=c||!1;this.q=d;this.ma=e;this.za=0;this.Yc=this.Cd=null;if(e&&e.P&&(a=e.P,a.qb))switch(this.Cd=a.qb.S,this.Cd){case "negative-type":this.Yc=a.qb.Gl;break;case "negative-code":this.Yc=a.qb.Qj;break;case "negative-size":this.Yc=a.qb.o}this.ub=this.V=null}h=ec.prototype;h.r=function(){this.v=null;this.Re();this.Qe();this.sa&&(this.sa.Re(),this.sa.Qe())};
h.Re=function(a){this.ic=this.Ea=null;!0!=a&&null!=this.V&&this.c.mc.remove(this.V);this.sa&&this.sa.Re();this.fa=0;this.V=null};h.Qe=function(a){null!=this.Aa&&(this.n.Md-=this.Aa.o,this.Aa.r(),this.n.xb[1][0]++,this.n.xb[1][1]+=this.Aa.o,this.sa&&this.sa.Qe());this.Aa=null;!0!=a&&null!=this.ub&&this.c.Hb.remove(this.ub);this.ub=null};
function Nc(a,b,c){if(b&&c){a.q.Qc=b;a.q.P=c;if(!b.U[c.d]){b.ya[c.d]=c;var d=Gb(c,b.d);b.U[c.d]=new ec(a.c,d,null,null,{F:b,P:c})}a.q.v=b.U[c.d];c=a.q.F;var d=c.d[0]-b.d[0],e=1/Math.pow(2,d);a.q.ij=[e,e,(c.d[1]-(b.d[1]<<d))*e,(c.d[2]-(b.d[2]<<d))*e];ub(a.c)}}
h.O=function(a,b,c){var d=this.c.n.jb>=this.c.Vd;a=a||d;this.ma&&this.ma.F.d[0]==s.Jf[0]&&this.ma.F.d[1]==s.Jf[1]&&this.ma.F.d[2]==s.Jf[2]&&(this.ma=this.ma);if(this.be)return!1;if(this.q){if(this.q.v){for(;-1==this.q.v.za;){d=this.q.Qc.R;if(d.d[0]<this.q.P.na[0])return this.be=!0,this.q.F.Oc=!0,ub(this.c),!1;Nc(this,d,this.q.P)}(a=this.q.v.O(a,b,c))&&this.xh&&(this.q.F.Oc=null!=dc(this.q.v),this.xh=!1);return a}Nc(this,this.q.Qc,this.q.P);return!1}switch(this.Cd){case "metatile":if(2!=this.za){if(0==
this.za&&this.ma&&this.ma.F){var e=this.ma.F.sh;e||(e=s.oh(this.c.ne.Xd,this.c.ne.rd,this.ma.F,8),this.ma.F.sh=e);var d=this.ma.P,g=e.Ya[d.d];e.Ya[d.d]||(g=e.d,g=Hb(d.c,d.Fc,{ha:g[0],Fa:g[1],Ga:g[2]},null,void 0),g=new ec(this.c,g,!0,null,null),e.Ya[d.d]=g);this.sa?this.sa.O(a,b,c)&&(this.za=2):g.O(a,b,c)&&(a=this.ma.F,b=g.ic?g.ic[4*((a.d[2]&255)*g.Me[0]+(a.d[1]&255))]:0,this.za=b&128?2:-1,2!=this.za||b&64||(b=a.d,g=Hb(d.c,d.ri,{ha:b[0],Fa:b[1],Ga:b[2]},null,void 0),this.sa=new ec(this.c,g,null,null,
null),this.za=0,a.Oc=!0,ub(this.c)))}if(-1==this.za){if(!this.q){d=this.ma.F.R;if(d.d[0]<this.ma.P.na[0])return this.be=!0,this.ma.F.Oc=!0,ub(this.c),!1;this.q={F:this.ma.F,P:this.ma.P};Nc(this,this.q.F.R,this.q.P);this.xh=!0}for(;-1==this.q.v.za;){d=this.q.Qc.R;if(d.d[0]<this.q.P.na[0]){this.be=!0;this.q.F.Oc=!0;ub(this.c);break}Nc(this,d,this.q.P)}}return!1}break;case "negative-type":case "negative-code":case "negative-size":if(2!=this.za){if(0==this.za)this.c.Ec.load(this.Na,this.Tl.bind(this,
"negative-size"==this.Cd),b);else if(-1==this.za&&this.ma)for(this.q||(this.q={F:this.ma.F,P:this.ma.P},Nc(this,this.q.F.R,this.q.P));-1==this.q.v.za;)Nc(this,this.q.Qc.R,this.q.P);return!1}}if(2==this.fa){a||Ib(this.c.mc,this.V);if(c)return this.ra&&null==this.ic&&Oc(this),this.sa?this.sa.O(a,b,c):!0;if(this.ra)null==this.ic&&Oc(this);else{if(null==this.Aa){if(this.c.n.jb>=this.c.Vd)return!1;if(this.n.Nc>this.c.j.Xe)return ub(this.c),!1;if(d)return!1;d=performance.now();this.Aa=new Ea(this.c.k.g,
null,this.c.w);Ia(this.Aa,this.Ea,"linear",!1);this.n.Md+=this.Aa.o;this.n.xb[0][0]++;this.n.xb[0][1]+=this.Aa.o;this.ub=Jb(this.c.Hb,this.Qe.bind(this,!0),this.Aa.o);this.n.Nc+=performance.now()-d}a||Ib(this.c.Hb,this.ub)}return this.sa?this.sa.O(a,b,c):!0}0!=this.fa||a||this.Pc(b);return!1};h.Pc=function(a){this.c.Ec.load(this.Na,this.Gc.bind(this),a)};
h.Gc=function(a,b,c){this.Tb=b;this.Sb=c;this.Ea=s.xa.kg(a,this.Ic.bind(this),this.Hc.bind(this),s.useCredentials?-1!=this.Na.indexOf(this.c.Bd):!1);this.fa=1};h.Hc=function(){!0!=this.c.X&&this.Sb()};h.Ic=function(){!0!=this.c.X&&(this.V=Jb(this.c.mc,this.Re.bind(this,!0),this.Ea.naturalWidth*this.Ea.naturalHeight*3),this.fa=2,this.Tb())};h.Tl=function(a,b,c,d){this.Tb=c;this.Sb=d;c=this.Ul.bind(this,a);d=this.Sl.bind(this,a);this.za=1;a?s.Rb(b,d,c):s.xa.ci(b,d,c)};
h.Ul=function(){!0!=this.c.X&&this.Sb()};h.Sl=function(a,b,c){if(!0!=this.c.X){this.za=2;switch(this.Cd){case "negative-size":b&&b.byteLength==this.Yc&&(this.za=-1);break;case "negative-type":case "negative-size":b&&-1!=b.indexOf(this.Yc)&&(this.za=-1);break;case "negative-code":c&&-1!=this.Yc.indexOf(c)&&(this.za=-1)}this.Tb()}};
function Oc(a){var b=document.createElement("canvas");b.width=a.Ea.naturalWidth;b.height=a.Ea.naturalHeight;b=b.getContext("2d");b.drawImage(a.Ea,0,0);a.ic=b.getImageData(0,0,a.Ea.naturalWidth,a.Ea.naturalHeight).data;a.Me=[a.Ea.naturalWidth,a.Ea.naturalHeight];a.Ea=null}function dc(a){return a.q&&a.q.v?a.q.v.sa:a.sa}
function Pc(a,b,c){this.c=a;this.d=c;this.R=b;this.yd=a.yd;this.Sg=!1;this.nc=this.ja=this.B=this.Bc=this.sh=this.ia=this.A=null;this.la=[];this.lh=this.zd=!1;this.$b=[];this.Oc=!1;this.C=[[],[],[]];this.rb={};this.ya={};this.U={};this.oe=!0;this.ra=null;this.C=[[],[],[]];this.p=[];this.W=[null,null,null,null]}
Pc.prototype.r=function(){for(var a=0;4>a;a++)null!=this.W[a]&&this.W[a].r();null!=this.ja&&this.ja.r();for(var b in this.la)null!=this.la[c]&&this.la[c].r();null!=this.nc&&this.nc.r();null!=this.ra&&this.ra.r();for(var c in this.U)null!=this.U[c]&&this.U[c].r();this.ja=this.B=this.ia=this.A=null;this.la=[];this.nc=null;this.rb={};this.ya={};this.U={};this.oe=!0;this.lh=this.zd=!1;this.$b=[];this.Sg=!1;this.ra=this.Ua=this.Cc=this.Rd=null;this.C=[[],[],[]];this.p={};this.W=[null,null,null,null];a=
this.R;this.R=null;null!=a&&a.removeChild(this)};Pc.prototype.qe=function(){};Pc.prototype.xf=function(a){if(!this.W[a]){var b=this.d,b=[b[0]+1,b[1]<<1,b[2]<<1];switch(a){case 1:b[1]++;break;case 2:b[2]++;break;case 3:b[1]++,b[2]++}this.W[a]=new Pc(this.c,this,b)}};Pc.prototype.removeChild=function(a){for(var b=0;4>b;b++)this.W[b]==a&&(this.W[b].r(),this.W[b]=null)};
function mb(a,b){this.c=a;this.m=a.m;this.rd=[0,0,0];this.hd=this.c.yb.Kb.hd;this.jc=!1;this.Dk=!xb(V(this.c));this.xd=new Pc(this.c,null,this.rd);this.Xd=new Gc(this.c,null,this.rd);this.eh=new zc(this,null,this.hj.bind(this),this.jn.bind(this));this.Qm=new zc(this,null,this.hj.bind(this),this.hn.bind(this));!0!=b&&(this.ei=new zc(this,null,this.kn.bind(this),this.fj.bind(this)),this.dl=new zc(this,null,this.ln.bind(this),this.fj.bind(this)));this.j=this.c.j;this.kd=1;this.vc=0}h=mb.prototype;
h.r=function(){this.ei=this.eh=this.Xd=this.xd=null};h.kb=function(){var a=Hb(this.c,surface.Fc,{ha:result_[0],Fa:result_[1],Ga:result_[2]});map_.Ec.load(a,metatile_.Xn.bind(metatile_,a));this.ao.load();this.xd.Fg=1;this.jc=!0};function pc(a,b){for(var c=a.xd,d=1;d<=b[0];d++){var e=1<<d-1,g=0;0!=(b[1]&e)&&(g+=1);0!=(b[2]&e)&&(g+=2);c=c.W[g];if(!c)return null}return c}
h.Wa=function(){this.kd=this.c.kd;var a=this.c.yb.Za.nd.$l;this.c.j.ug&&(this.eh=this.Qm);null!=a?(Qc(this),"X"==a.S&&(Qc(this),Qc(this))):Qc(this)};function Qc(a){a.vc++;a.eh.trace(a.xd)}h.hn=function(){return[[0,0],[1,0],[2,0],[3,0]]};
h.jn=function(a){for(var b=[],c=this.c.fb,d=0;4>d;d++){var e=a.W[d];if(e){var g=Number.POSITIVE_INFINITY;e.A&&(g=e.A.l.Df(),s.s.length([g[0]-c[0],g[1]-c[1],g[2]-c[2]]),g=Tc(this,e.A.l,1,c)[1]);b.push([d,g])}}do for(c=!0,d=0,a=b.length-1;d<a;d++)b[d][1]>b[d+1][1]&&(c=b[d],b[d]=b[d+1],b[d+1]=c,c=!1);while(!c);return b};
h.hj=function(a,b,c,d,e,g){if(null==a||null==a.A)return[!1,e,g];b=a.A;var f=this.c.fb;if(!0!=this.ue(a.d,b.l,f))return[!1,e,g];var k;if(0!=(b.L&1))if(k=Number.POSITIVE_INFINITY,0!=(b.L&4)?k=this.kd*b.Jc:0!=(b.L&8)&&(k=b.l.Fl/b.Ae*this.kd),!0==this.m.Yl){var l=this.m.uj;k=[2*k/l,l]}else k=Tc(this,b.l,k,f);else k=[Number.POSITIVE_INFINITY,99999];this.j.Ze=2.2;if(0!=(b.L&240)==!1||k[0]<this.j.Ag){if(c=this.j.sg)if(c=0!=(b.L&240))c=this.c.cc,c=!(0<a.C[c].length&&Yb(a.C[c],d,g))&&!a.Ua;if(c)return Xb(this.c,
a,b,f,k,d,!0,g),[!0,e,!0];e||(f=Math.min(499,Math.round(Math.log(k[1])/Math.log(1.04))),c=this.c.me,c[f]||(c[f]=[]),c[f].push({F:a,Pl:b,Jc:k,Kc:d}));return[!1,e,g]}if(l=this.j.tg&&0!=(b.L&1)&&k[0]<this.j.Ze)if(l=this.c.cc,0!=(b.L&1)&&0<a.C[l].length&&Yb(a.C[l],d,!0)){for(var m=!1,p=0,n=c.length;p<n;p++){var q=a.W[c[p][0]];q&&(q.A?0==(q.A.L&1)||0<q.C[l].length&&Yb(q.C[l],d)||(Xb(this.c,q,q.A,f,1,d,!0,!1),m=!0):m=!0)}l=m}else l=!1;return l?(Xb(this.c,a,b,f,k,d,e,g),[!0,!0,g]):[!0,e,g]};
h.ue=function(a,b,c){if(this.Dk&&0<a[0]&&12>a[0]){var d=!1,e=this.c.Mj,g=b.H,f=b.t,k=-0.5,l=Math.max(this.Bf,this.c.uc);1E6>l&&(k=-0.9);1E5>l&&(k=-0.991);switch(a[0]){case 1:k=1;break;case 2:k=0;break;case 3:k=-0.4;break;case 4:k=-0.45;break;case 5:k=-0.45}d=(d=(d=(d=(d=(d=(d=(d=d||s.s.hb(e,s.s.normalize([g[0],g[1],g[2]]))<k)||s.s.hb(e,s.s.normalize([f[0],g[1],g[2]]))<k)||s.s.hb(e,s.s.normalize([g[0],f[1],g[2]]))<k)||s.s.hb(e,s.s.normalize([f[0],f[1],g[2]]))<k)||s.s.hb(e,s.s.normalize([g[0],g[1],
f[2]]))<k)||s.s.hb(e,s.s.normalize([f[0],g[1],f[2]]))<k)||s.s.hb(e,s.s.normalize([g[0],f[1],f[2]]))<k)||s.s.hb(e,s.s.normalize([f[0],f[1],f[2]]))<k;if(!d)return!1}return this.m.ue(b,c)};h.fj=function(a,b){var c=b.Ah,d=b.aa,e=[0.5*(d.D[0]+d.I[0]),0.5*(d.D[1]+d.I[1])],g=c[0]>=e[0],c=c[1]>=e[1];g?d.D[0]=e[0]:d.I[0]=e[0];c?d.D[1]=e[1]:d.I[1]=e[1];return g?c?[[1,0]]:[[3,0]]:c?[[0,0]]:[[2,0]]};
h.kn=function(a,b,c,d,e,g){if(!a||a.d[0]>b.Hd&&b.ra)return[!1,e,g];c=a.A;if(!c)return[!1,e,g];if(0!=(c.L&2))if(!a.ra)g||(b=a.B,c=a.d,b=Hb(b.c,b.si,{ha:c[0],Fa:c[1],Ga:c[2]},null,void 0),a.ra=new ec(this.c,b,!0));else{if(!0==a.ra.O())return b.R={A:b.A,ra:b.ra,Nd:b.Nd},b.A=c,b.ra=a.ra,b.Nd={D:b.aa.D.slice(),I:b.aa.I.slice()},[a.d[0]!=b.Hd,e,g]}else return b.ra||(b.A=c),[!0,e,g];return[!1,e,g]};
h.ln=function(a,b,c,d,e,g){if(!a||a.d[0]>b.Hd)return[!1,e,g];c=a.A;if(!c)return[!1,e,g];b.R={A:b.A};b.A=c;return[a.d[0]!=b.Hd,e,g]};
function Tc(a,b,c,d){var e=b.t,g=b.H;b=[e[0]-d[0],e[1]-d[1]];var f=[g[0]-d[0],e[1]-d[1]],k=[g[0]-d[0],g[1]-d[1]],l=[e[0]-d[0],g[1]-d[1]],e=e[2]-d[2];d=g[2]-d[2];g=0;g=0<b[1]?0<b[0]?0>d?S(a.m,[b[0],b[1],d]):0<e?S(a.m,[b[0],b[1],e]):S(a.m,[b[0],b[1],0.5*(e+d)]):0>f[0]?0>d?S(a.m,[f[0],f[1],d]):0<e?S(a.m,[f[0],f[1],e]):S(a.m,[f[0],f[1],0.5*(e+d)]):0>d?S(a.m,[0.5*(b[0]+f[0]),f[1],d]):0<e?S(a.m,[0.5*(b[0]+f[0]),f[1],e]):S(a.m,[0.5*(b[0]+f[0]),f[1],0.5*(e+d)]):0>l[1]?0<l[0]?0>d?S(a.m,[l[0],l[1],d]):0<e?
S(a.m,[l[0],l[1],e]):S(a.m,[l[0],l[1],0.5*(e+d)]):0>k[0]?0>d?S(a.m,[k[0],k[1],d]):0<e?S(a.m,[k[0],k[1],e]):S(a.m,[k[0],k[1],0.5*(e+d)]):0>d?S(a.m,[0.5*(l[0]+k[0]),k[1],d]):0<e?S(a.m,[0.5*(l[0]+k[0]),k[1],e]):S(a.m,[0.5*(l[0]+k[0]),k[1],0.5*(e+d)]):0<l[0]?0>d?S(a.m,[b[0],0.5*(f[1]+k[1]),d]):0<e?S(a.m,[b[0],0.5*(f[1]+k[1]),e]):S(a.m,[b[0],0.5*(f[1]+k[1]),0.5*(e+d)]):0>k[0]?0>d?S(a.m,[f[0],0.5*(f[1]+k[1]),d]):0<e?S(a.m,[f[0],0.5*(f[1]+k[1]),e]):S(a.m,[f[0],0.5*(f[1]+k[1]),0.5*(e+d)]):0>d?S(a.m,[0.5*
(b[1]+f[1]),0.5*(f[1]+k[1]),d]):0<e?S(a.m,[0.5*(b[1]+f[1]),0.5*(f[1]+k[1]),e]):S(a.m,[0.5*(b[1]+f[1]),0.5*(f[1]+k[1]),0.5*(e+d)]);return[g[0]*c,g[1]]}bb.prototype.quad=function(a,b,c){var d="";for(i=a;0<i;i--){a=0;var e=1<<i-1;0!=(b&e)&&(a+=1);0!=(c&e)&&(a+=2);d+=a}return d};bb.prototype.msDigit=function(a,b){return((a&3)<<1)+(b&1)};function Uc(a){for(a=a.toString(16);8>a.length;)a="0"+a;return a}bb.prototype.ppx=function(a,b){return Uc(b<<28-a)};
bb.prototype.ppy=function(a,b){return Uc(268435456-(b+1<<28-a))};
bb.prototype.fm=function(a,b,c){if("string"==typeof c)if(-1!=c.indexOf("quad")){b="(function(lod,x,y,loclod,locx,locy){"+c.replace("quad","return this.quad")+"})";try{var d=eval(b).bind(this);return d(a.ha,a.Fa,a.Ga,a.Ue,a.qg,a.rg)}catch(e){return c}}else if(-1!=c.indexOf("ms_digit")){b="(function(x,y,loclod,locx,locy){"+c.replace("ms_digit","return this.msDigit")+"})";try{return d=eval(b).bind(this),d(a.Fa,a.Ga,a.Ue,a.qg,a.rg)}catch(g){return c}}else{if(-1!=c.indexOf("alt"))return(a=/\(([^)]*)\)/.exec(c))&&
a[1]&&(a=a[1].match(/([^,]+)/g),0<a.length)?a[b%a.length]:c;if(-1!=c.indexOf("ppx")){b="(function(lod,x,loclod,locx){"+c.replace("ppx","return this.ppx")+"})";try{return d=eval(b).bind(this),d(a.ha,a.Fa,a.Ue,a.qg)}catch(f){return c}}else if(-1!=c.indexOf("ppy")){b="(function(lod,y,loclod,locy){"+c.replace("ppy","return this.ppy")+"})";try{return d=eval(b).bind(this),d(a.ha,a.Ga,a.Ue,a.rg)}catch(k){return c}}else return c}else return c};
function Hb(a,b,c,d,e){var g=e=0,f=0;if(c.ha){var k=[c.ha,c.Fa,c.Ga],l=a.yb.Id.Oa;e=[];f=0;for(g=l.length;f<g;f++){var m=l[f],p=k[0]-m.d[0];ix_=k[1]>>p;iy_=k[2]>>p;ix_==m.d[1]&&iy_==m.d[2]&&e.push(m)}k=null;f=0;for(g=e.length;f<g;f++)-1<e[f].d[0]&&(k=e[f]);f=c.ha-(k?k.d.slice():[0,0,0])[0];g=(1<<f)-1;e=c.Fa&g;g&=c.Ga}k={ha:c.ha,Fa:c.Fa,Ga:c.Ga,Ue:f,qg:e,rg:g};b=b.replace(/ /g,"");b=s.Gm(b,{lod:c.ha,x:c.Fa,y:c.Ga,sub:d,locx:e,locy:g,loclod:f,here_app_id:"abcde",here_app_code:"12345"},a.fm.bind(a,k,
a.lj));a.lj++;return(e=-1!=b.indexOf("://"))?b:a.Bd+b}function cb(a,b){this.parse(b)}cb.prototype.parse=function(a){this.Gh=a.description||"";this.ya=a.boundLayers||[];this.Qb=a.freeLayers||[];this.Ca={};if(a.surfaces)if(a=a.surfaces,Array.isArray(a))for(var b=0,c=a.length;b<c;b++)this.Ca[a[b]]=[];else this.Ca=a;this.Ca=JSON.parse(JSON.stringify(this.Ca))};cb.prototype.tb=function(){return{description:JSON.parse(JSON.stringify(this.Gh)),surfaces:JSON.parse(JSON.stringify(this.Ca)),freeLayers:JSON.parse(JSON.stringify(this.Qb))}};
s.useCredentials=!0;function Vc(a,b,c){this.j={c:null,Ve:900,We:360,Ye:60,Ag:1.1,Ze:2.2,vg:6,Xe:2E4,oi:!1,pi:2,Ub:4,yg:!1,sg:!0,tg:!0,ni:!0,gd:!0,xg:!0,ug:!1,wg:!1,Ug:!0,Tg:!1};this.Dd={};this.ob(b);this.vk=a;this.ql=c;this.X=this.qd=!1;this.Dc=[];this.og=0;this.Qd=null!=s.xj?new s.xj(this):null;this.zg=this.c=null;this.k=new Ja(this,this.vk,0,this.ef.bind(this),this.j);this.xm=new G(this.k);this.mb=window._mproj4_;s.T.kb();Wc(this,this.j.c);window.Gi(this.xi.bind(this))}h=Vc.prototype;
h.ef=function(){null!=this.c&&ub(this.c)};function Wc(a,b){null!=a.c&&(a.c.r(),a.c=null,a.zg=null,a.Pb("map-unloaded",{}));null!=b&&s.Sd(b,function(a){this.Pb("map-mapconfig-loaded",a);this.c=new bb(this,a,b,this.j);this.zg=new $(this.c);this.ob(this.c.th);this.ob(this.Dd);this.j.M&&(this.c.Lb(this.j.M),this.j.M=null);this.j.wj&&(this.c.ud(this.j.wj),this.j.wj=null);this.Pb("map-loaded",{})}.bind(a),function(){}.bind(a),null,s.useCredentials)}h.Fb=function(){return this.c};h.Ge=function(){return this.k};
h.He=function(){return this.xm};h.$f=function(){return this.mb};h.Ig=function(a,b){if(!0!=this.X&&null!=b)return this.og++,this.Dc.push({Ll:a,Te:b,d:this.og}),function(a){this.removeListener(a)}.bind(this,this.og)};h.Pb=function(a,b){for(var c=0;c<this.Dc.length;c++)this.Dc[c].Ll==a&&this.Dc[c].Te(b)};h.removeListener=function(a){for(var b=0;b<this.Dc.length;b++)if(this.Dc[b].d==a){this.Dc.splice(b,1);break}};s.Nn=function(){return"1.65"};
s.yh=function(){s.T.kb();var a=document.createElement("canvas");if(null==a)return!1;a.width=1024;a.height=768;if(null==a.getContext)return!1;var b=null;try{b=a.getContext("webgl")||a.getContext("experimental-webgl")}catch(c){return!1}return b?!0:!1};s.zj=function(a,b){a="string"!==typeof a?a:document.getElementById(a);return s.yh()?new Xc(a,b):null};function Xc(a,b){this.w=new Vc(a,b,this);this.c=this.w.Fb()}h=Xc.prototype;h.Fb=function(){return this.w.zg};h.Ge=function(){return this.w.He()};
h.$f=function(){return this.w.$f()};h.Ig=function(a,b){this.w.Ig(a,b)};h.Pb=function(a,b){this.w.Pb(a,b)};s.MapCore=s.zj;Xc.prototype.getMap=Xc.prototype.Fb;Xc.prototype.getRenderer=Xc.prototype.Ge;Xc.prototype.on=Xc.prototype.Ig;Xc.prototype.callListener=Xc.prototype.Pb;s.getVersion=s.Qn;s.checkSupport=s.yh;Vc.prototype.ob=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.cb(b,a[b])};
Vc.prototype.cb=function(a,b){"pos"==a||"position"==a||"view"==a?this.Fb()?("view"==a?this.Fb().ud(b):this.Fb().Lb(new T(this,b)),this.Dd[a]&&delete this.Dd[a]):this.Dd[a]=b:"map"==a?this.j.c=s.qj(b):(0==a.indexOf("map")&&(this.Dd[a]=b,null!=this.Fb()&&this.Fb().cb(a,b)),0==a.indexOf("renderer")&&this.Ge().cb(a,b))};Vc.prototype.Eb=function(a){if("map"==a)return this.j.c;if(0==a.indexOf("map")&&null!=this.Fb())return this.Fb().Eb(a,value_);if(0==a.indexOf("renderer"))return this.Ge().Eb(a,value_)};
Vc.prototype.xi=function(){null!=this.c&&this.c.update();this.Pb("tick",{});window.Gi(this.xi.bind(this))};
Melown.Utils = {};
Melown.Utils.stampCounter_ = 0;

Melown.Utils.stamp = function(obj_) {
    obj_.melownStamp_ = obj_.melownStamp_ || ++Melown.Utils.stampCounter_;
    return obj_.melownStamp_;
};

Melown.Utils.splitWords = function(str_) {
    return str_.trim().split(/\s+/);
};

Melown.Utils.validateBool = function(value_, defaultValue_) {
    if (typeof value_ === "boolean") {
        return value_;
    } else {
        return defaultValue_;
    }
};

Melown.Utils.validateNumber = function(value_, minValue, maxValue, defaultValue_) {
    if (typeof value_ === "number") {
        return Melown.clamp(value_, minValue, maxValue);
    } else {
        return defaultValue_;
    }
};

//Melown.Utils.dragging_ = false;

Melown.Utils.hasClass = function(element_, name_) {
    if (element_.classList !== undefined) {
        return element_.classList.contains(name_);
    }
    var className_ = Melown.Utils.getClass(element_);
    return className_.length > 0 && new RegExp('(^|\\s)' + name_ + '(\\s|$)').test(className_);
};

Melown.Utils.addClass = function(element_, name_) {
    if (element_.classList !== undefined) {
        var classes_ = Melown.Utils.splitWords(name_);
        for (var i = 0, li = classes_.length; i < li; i++) {
            element_.classList.add(classes_[i]);
        }
    } else if (!Melown.Utils.hasClass(element_, name_)) {
        var className_ = Melown.Utils.getClass(element_);
        Melown.Utils.setClass(element_, (className_ ? className_ + ' ' : '') + name_);
    }
};

Melown.Utils.removeClass = function(element_, name_) {
    if (element_.classList !== undefined) {
        element_.classList.remove(name_);
    } else {
        Melown.Utils.setClass(element_, ((' ' + Melown.Utils.getClass(element_) + ' ').replace(' ' + name_ + ' ', ' ')).trim() );
    }
};

Melown.Utils.setClass = function(element_, name_) {
    if (element_.className.baseVal === undefined) {
        element_.className = name_;
    } else {
        element_.className.baseVal = name_;
    }
};

Melown.Utils.getClass = function(element_) {
    return element_.className.baseVal === undefined ? element_.className : element_.className.baseVal;
};

Melown.Utils.preventDefault = function(e) {
    e = e instanceof Melown.UIEvent ? e.event_ : e;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};

Melown.Utils.disableTextSelection = function() {
    window.addEventListener("selectstart", Melown.Utils.preventDefault);
};

Melown.Utils.enableTextSelection = function() {
    window.removeEventListener("selectstart", Melown.Utils.preventDefault);
};

Melown.Utils.disableImageDrag = function() {
    window.addEventListener("dragstart", Melown.Utils.preventDefault);
};

Melown.Utils.enableImageDrag = function() {
    window.removeEventListener("dragstart", Melown.Utils.preventDefault);
};

Melown.Utils.disableContexMenu = function(element_) {
    element_.addEventListener("contextmenu", Melown.Utils.preventDefault);
};

Melown.Utils.enableContexMenu = function(element_) {
    element_.removeEventListener("contextmenu", Melown.Utils.preventDefault);
};

Melown.Utils.getSupportedProperty = function(properties_) {
    var style_ = document.documentElement.style;

    for (var i = 0, li = properties_.length; i < li; i++) {
        if (properties_[i] in style_) {
            return properties_[i];
        }
    }

    return false;
};

Melown.Utils.TRANSFORM = Melown.Utils.getSupportedProperty(
            ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);


/**
 * @constructor
 */
Melown.Autopilot = function(browser_) {
    this.browser_ = browser_;
    this.trajectory_ = [];
    this.flightDuration_ = 1;
    this.flightTime_ = 0;
    this.trajectoryIndex_ = 0;
    this.finished_ = true;
    this.autoMovement_ = false;
    this.autoRotate_ = 0;
    this.autoPan_ = 0;
    this.autoPanAzimuth_ = 0;

    this.center_ = [0,0,0];
    this.orientation_ = [0,0,0];
    this.viewHeight_ = 0;
    this.fov_ = 90;
    this.lastTime_ = 0;
};

Melown.Autopilot.prototype.setAutorotate = function(speed_) {
    this.autoRotate_ = speed_;
};

Melown.Autopilot.prototype.getAutorotate = function() {
    return this.autoRotate_;
};

Melown.Autopilot.prototype.setAutopan = function(speed_, azimuth_) {
    this.autoPan_ = speed_;
    this.autoPanAzimuth_ = azimuth_;
};

Melown.Autopilot.prototype.getAutopan = function() {
    return [this.autoPan_, this.autoPanAzimuth_];
};

Melown.Autopilot.prototype.flyToDAH = function(distance_, azimuth_, height_, options_) {
    var map_ = this.browser_.getCore().getMap();
    if (!map_) {
        return;
    }
    
    options_ = options_ || {};
    
    var trajectory_ = map_.generatePIHTrajectory(map_.getPosition(), distance_, azimuth_, height_, options_);
    this.setTrajectory(trajectory_, options_["samplePeriod"] || 10, options_); 
};

Melown.Autopilot.prototype.flyTo = function(position_, options_) {
    var map_ = this.browser_.getCore().getMap();
    if (!map_) {
        return;
    }
    
    options_ = options_ || {};
    var trajectory_ = map_.generateTrajectory(map_.getPosition(), position_, options_);
    this.setTrajectory(trajectory_, options_["samplePeriod"] || 10, options_); 
};

Melown.Autopilot.prototype.flyTrajectory = function(trajectory_, sampleDuration_) {
    var options_ = {};
    this.setTrajectory(trajectory_, sampleDuration_ || 10, {});
};

Melown.Autopilot.prototype.cancelFlight = function() {
    this.finished_ = true;
};

Melown.Autopilot.prototype.setTrajectory = function(trajectory_, sampleDuration_, options_) {
    if (trajectory_ == null || trajectory_.length == 0) {
        return;
    }

    this.setAutorotate(0);
    this.setAutopan(0,0);

    this.speed_ = options_["speed"] || 1.0;
    if (this.finished_) {
        this.lastControlMode_ = this.browser_.getControlMode().getCurrentControlMode(); 
    }
    this.browser_.getControlMode().setCurrentControlMode("disabled");

    this.trajectory_ = trajectory_;
    this.sampleDuration_ = sampleDuration_;
    //this.
    
    this.browser_.callListener("fly-start", { "startPosition" : this.trajectory_[0],
                                              "endPosition" : this.trajectory_[this.trajectory_.length - 1],
                                              "options" : options_
                                             });
    
    this.timeStart_ = performance.now();
    this.finished_ = false;
};

Melown.Autopilot.prototype.tick = function() {
    var map_ = this.browser_.getMap();
    if (!map_) {
        return;
    }

    var time_ = performance.now();
    var timeFactor_ =  (time_ - this.lastTime_) / 1000; 
    this.lastTime_ = time_;

    if (this.autoRotate_ != 0) {
        var pos_ = map_.getPosition();
        var o = map_.getPositionOrientation(pos_);
        o[0] = (o[0] + this.autoRotate_*timeFactor_) % 360;
        pos_ = map_.setPositionOrientation(pos_, o);
        map_.setPosition(pos_);
    }
    
    if (this.autoPan_ != 0) {
        var pos_ = map_.getPosition();
        pos_ = map_.movePositionCoordsTo(pos_, this.autoPanAzimuth_, map_.getPositionViewExtent(pos_)*(this.autoPan_*0.01)*timeFactor_, 0);
        map_.setPosition(pos_);
    }


    if (this.finished_ || !this.trajectory_) {
        return;
    }
    
    time_ = time_ - this.timeStart_;
    var sampleIndex_ =  Math.floor((time_ / this.sampleDuration_)*this.speed_);
    var totalSamples_ = this.trajectory_.length - 1; 

    if (sampleIndex_ < totalSamples_) {
        //interpolate
        map_.setPosition(this.trajectory_[sampleIndex_]);        

        this.browser_.callListener("fly-progress", { "position" : this.trajectory_[sampleIndex_],
                                                     "progress" : 100 * (sampleIndex_ / totalSamples_)
                                                    });

    } else {
        map_.setPosition(this.trajectory_[totalSamples_]);
    } 
    
    if (sampleIndex_ >= this.trajectory_.length) {
        this.browser_.callListener("fly-end", { "position" : this.trajectory_[totalSamples_] });

        this.browser_.getControlMode().setCurrentControlMode(this.lastControlMode_);
        this.finished_ = true;
    } 
};

// Basic class for requesting ROI servers. It hasn't any UI. Eg. Explore Bar
// class has this class as ancestor.

/**
 * @constructor
 */
Melown.Rois = function(roiServers_) {
    this.roiServers_ = roiServers_;
};

/**
 * roisAtPosition
 * Request rois intended for specific position
 * @param position_ position array 
 * @param count_ number of requested rois
 * @param clb_ callback
 * @return Response promise object (if ES6 is supported otherwise null)
 */
Melown.Rois.prototype.roisAtPosition = function(position_, count_, clb_) {
    // TODO request ROI server
    // ROI gravity must be defined before implementation
};
/**
 * @constructor
 */
Melown.UIControlCompass = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("compass",
      '<div id="melown-compass">'

        + '<div id="melown-compass-frame">'
            + '<img id="melown-compass-compass" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAYAAACPO76VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODRDNjZFNDJCQjNCMTFFM0IyN0ZCQTZFQTAwNzEzNDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODRDNjZFNDNCQjNCMTFFM0IyN0ZCQTZFQTAwNzEzNDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NEM2NkU0MEJCM0IxMUUzQjI3RkJBNkVBMDA3MTM0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NEM2NkU0MUJCM0IxMUUzQjI3RkJBNkVBMDA3MTM0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgg3VBcAAAzUSURBVHja7F1bbBTXGf7tNdiAbTAXYxscMJe04GDLwVwKNDgNhaogRB+4qKgtzUMrISEhIXjiLsT9gQd4oQ8lPFRtEdACoWCCuASRBCelJBASEnM1xsbgGwYbg03PN/4PHI93vTO7s7tnxv6kX7Pe9Y7H/zf/5fxnzn/iXr16Rd3QA3HdZHST0Q2XktFTSLKQNCGpQlKEJLL4WFqFvGRp5uMTIfVCaoQ08PvdZNgEFJ8uZIiQQQ6fu0rIfSEPmaBuMvygv5CRQrJN78cLyeLPQc4AIX2ZsB5Cegn5qZBqIff47oc8F1In5DErH5+XswWpwHdK+fMuTQYUOUrIaJPy3xLyEyYnV0iGQ3+vQsg1Vv73Qu6ayPlByI9CGrsSGf34bs5SCMgRksfKL4jSdVxmcr4WckshBhb0nZBaL5ORysrO5J+ThExmmRBjD3FJyBdCPhfSxO89YLLqvUQGsp18IcP5Z2RD04X8jC1EJ8AiPhNyjrMx4LaQK0Ja3E7GGBaZon4gZCbHBZ2BeHJKyCdKSnydxXVk+Nj1ZHFMeEfIbCGFLhuHfSnkYyFXOaYgnpREykoiQQbSz2lMCFLS+WwNbkaxkAOcAoOIC5w2a03GOCVVRXa0UMO4EE48+QdnXzIV/kZXMibwoA0WMU/Ib8mb+JuQf7GF3GO3pQ0Z8ZwZDeZMaYmQIvI2zgrZxxlXJWdgrbEmA0T8nOMEyPijBmOGaAEW8VcmA/Hj03AJCYeMOA7UKOYNFfJ7IeOpa+ErIfuFlFFbERKB/VU4d3aomMhEoID3oVUijhw5QqWlpV4hYzz/77LCPDFcNxMK3uULQJ3pdzzCtoSmpiaqqanxknXksw7SWCfvRpOMd7i0gTL2n63EiKqqKrp+vW3w2qtXL3r27JnX3BV08CfWyXDWUcTJgCW8zenrEqtmWVlZSSUlbRlg7969qbGxkTyIiawTH+soLZJk4Hen8OtfC3nfikuSBMjXHrUMifdZN8Tpvq2bPcEm8yh7j7E6oNu8eTNt3LjRIEMS0LdvXzp27BhdvnyZfD6f8RkIeu+99ygvL88LhEA3mKS6zjr73GkyQICc/kStqaedq+vTp89ry8jNzTVIAl68eEFPnz41iEpOTvaKdfRkHe1WdHfdKTJ8fMJ4/iP5wVJX3OX9+vVrRwaC+KFDhwwrgMAiBg4cSCNGjGj3ux7KsKCrv7DubpCFSm+8xRMDKAIGrb6WlZXRkydt8zJwQy9fvqT4+HhasmQJZWVlUWJiIjU0NNCdO3fo1q1brtEuLLi52dbTPjMV3eU7YRmpnKolKoGpUyQlJb2OD7AAKD09Pd1wTyDFjbh48SJduHCBVq1aZfervxLyLesQcaQ+HDJy+TiDLE4Mwf3gLgLGjh1LR48epefPnxvpbGtrK8XFxdH69euNoxusYefOnXTu3Dk6cOBAKKcoZN19zLr8LFQy4Mjx8EAKn9AS1NR1zpw5rnX6sIZNmzbRw4cPacOGDTRgwIBQTwXdnVd0WhsKGXJSqIhszFmDjOPHj9OlS5deB2vI9OnTKSMjwzXWAIsGpk2bRrNnzw7nlG+xDo+yTgOmuoGqtkkcI3DcSG0PlFkGLEOmrPL1yJEjKS0tzTXWYATM1FTDPYVhFRKojK6ltseA/kMBHpQLZBly6nSyXSJk3IC4KVNSrUFixYoVThBBrEPo8iy1PUX5jZ3UdjR/Nok8DgTn+fPndyDCAfdkxiTW6Wg7MaM/H3MozPq8zsBYaNu2bXTixImO+bxwT2vWrHH6T05knZayjqutWIZ0S3letwZ/RADLly93yj2ZkWfScVDLyGaScruSNUhMnjyZ5s6dG6lLgE7/zTouCUaGrNZhxFjgNWvYsmULPXr0KODvoFi5du3aSF5GAev2Juu6oTMy0k3ZVJewBtU9oXQTYbzNZKQHI2NIZz7Ni9aguqd58+ZF47JGKLq+2RkZeMLB5/Z4YccaouSezHHDR37WK6pkyAkj1KMyuoI1RNk9SWSwjstY583+yEg2jTNchbq6OsMaiouLbX0viu7JPJYrY51X+xtnpJnihmtw+vRpY9xgl4gouycVQ00672AZqXwc4CZr2Lp1K506dSqk70fZPfmrcqQGIiOFj33dYg1wS9XVoS3hjpF7IpOOUwKRkWSKHdoCAfrgwYMhfz+G7skcn5PUN+P9ZFM9dLcISUSoU7cxdE8SiSaddyDDx8deumdMAOZLMAeBCqsdTJo0KZbuyWwZvmBkaLsGD8Faxohly5YZU7l79uyxTAgIXL16tQ7/yshgZMhVN9U6EgH3JLOmCRMmGKksMGbMGMuEgMDMzExtXbBKxks+3tPdPZmDrxVCVAI1gFwt1BKMDO2aZG3fvr2de/J3d3dGiD8CY4yGYGRIEl7odNWoNZ08edLS3R2IEA3d03N/N75KhiRBm5UsqL5iTGHn7gYhixYt0tU9mS2jKdCgD8+BDtIpgCNOyOqrlbvbXB7R0D1JyFYXdYHIkKseH+ninuR8hJW721weARF4wkPT7OmRSecdyJD9lcrd5J78FQtBHr6jcRpbbtJ5BzKkH6t1i3vyZw34fQ1jhBm1Jp13IEMGcLRfQHPFjFi7p8LCQr+Kdak1SFSwjjtkruY58CoO4tdiQYbqnvDkur/ShYutQeIajy+qzB+YybjPZGCE+EEs3dPSpUtp6NChnVoD5iQQpAcPHkwuwk1F152S8ZCPP8TSPRUUFLQbK5itAfMRKINrUH0NBTdMug5Ihgwot6mt72tBLNzTunXrjLkKKB8kgAzVGhAbYjwfESous247BG9/ZAAoFGazbyuIlXtCCWTHjh1UW1vrBWuQwGLLVgpQjPVHRimT8XU0ru78+fPt3NOsWbNo5cqVdObMGa9Yg4orio4tkSHLIVikjU7IEVujgRVDCMrSPU2dOpUWLFjgNWuQuMQ6pUAlp0DLyBDA8fDzF5EkA9Omcv0csHv3bi9ag0QJu6iAyVEgMn5kMrAyEwstHX8QGosZ1aVbsu2RbtaARmXoHIeWG3KtonxtA3BLFxXd2iKjkesnaN7yqdNkwD1hVakZOloDGgqADNwsUpBsFBUV0cyZlnsnQ4dNrNNGu2QA3zEZZ4X8ghzsX252T5gMgjVEcMVQyMDa9YULF7Z7D60rHj+23PD5LusQ+L6zX0wIUsx6wK/RoP3DSLgnrCrFKDpCa+hCAtbGo6UGjuh3guQCDWhGjRpldH2Ai0LDGouA7p6wLmtCJUPWUTL5hFgcWOiUe4I1YJ21w8t7HQEGnGhRAaDfCa4bloyH50AGYobFbnJfsu6kLikcMup5xDhcyIlwyZDuSUdrkGUXjPplPywZrMeNG2e8J5MMtc1fEEBnmO++QxY2RbHSc+iKciwOxz2h/oQ7bteuXdoRAeTk5NCwYcOMjA6Bu7y8nPbt22dYR0JCArW0tD3MkZKS0q6IGQDFiu7+Z+XvW+nEhitAWzd0FEOfH5RI8+26JwQ9h/pwOIr6+nqjGRnu9uzsbKMznIobN24Y1w8CJNA5LkiycYV11cq6a3GKDOITysfYDzAxlvsU9ujRI5TGWVHB7du3jZIMXBDiAO5+dI9bvHix0bAMzczMZARBM73Za6OcbOxGY6cXOlwaOovhMXbcFn8gj+Lw4cPGHMmUKVNo7969NGPGDMNiECdAThB8JOQIjytOkI1m9Xb61OGkspMYOoud8SoZaiNktc2fBSLOsG6IQtjGwW7TQOTJshPlPnJwIw+doHaTw9y6xZnEEtZJC+vIdsP3hBCu9SrHi+FskiB0vNcso6KiwniNJxQt4CvWRQMPBa6G8ncTQrze/9KbRTX7+Tz5XiEDHeMsuCQ1c9rPI+xK1k1og80wNjOBRWAzk4HUvZkJaiOYqrxAYewu4+Q2P5mcYXWlbX4+YouI+TY/KiFdbQOsc0xEHWm0AZYKuTUc4sdvhCzyKBF/x1CE2hYXabc1nIruTRM1IoOo43aiC4T80uVE4DHGf5LLthOVMG+0C4vBXLobN9o9zhbgyo12VahbUKMrwAwWN2xB/QmLXH/n2i2ozVZi3py9iFNi3drvlXKKepY8uDm7CixBzeXxCIAhLjbUmqjB2ASuBw+Z4XEaOYWH8QOmSuujdRHRJON1tYEzrExlnJLD1jOWotfCFQ8hf8t3/S1lnPCAM6eo7+wYCzIkUNsaRe3btsZzPAFZI9iSnFq0U8F3+k1W9l3TQA2pKh4wi9nS61iSoaI/x49sP6N7uQvaEE6bMeOYzAlBmpIM3OW7GQG3gUfHSD/v05tZN/Mo+R6T81gHJehChopkLq2AhEEOn7uKSakkP+sjuskIjp5MUBonASkc/HtypibbBLWwNHMQfsLBt4YV36z7P+oGMroMusnQCP8XYACgtQtbAKLiKwAAAABJRU5ErkJggg==">'
        + '</div>'

        + '<div id="melown-compass-frame2">'
            + '<img id="melown-compass-compass2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAYAAACPO76VAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABG9JREFUeNrtnM9LFGEcxkeEPCQVmbkh7EXoEgW6noIQzQwKoQ5Lkgh7SA8iddlCQfAQFApdghAxooJCsEMe9JAEek8i81YQCIEYQvgHZM9L37Fpmpl9Z3d+rs8DDw7unuaz3+ddX+d9DIOiKIqiKIqiKIqiKIqiKIqiKIqiKMpTQ0NDyqNwTq7/MRUNAKsfwL2EER+MLHxBru/BA4QR3zR0wY/lWmmEMKKHcVh+tsEv5PoGPE4Y0cP4LD9b4AW57oC/whvwB3gZfgN3886FG1EmjAZ41WEa6uAm+DTcyLsXPAz11fWkDUYtvAVPwHfgAnwdbmVMhQtjDj4jN3gNPiTXF+E8fAsuwvfhQScIuVwuMusK762H69IGYwY+LwDew+3wcZkOQ2fhThoMvK8TnkrjZEzCV+RGF2XhXoE/wuvwJ7jGK5aSAkOm4Qm8DTemEcYYfNNtCnTWiCTAkGn4Bu/B+bSuGcPwF3gJfg1Pww/l661uLMQGwzINe+L5tH+1PSpbIOdkG0TtRWWSDsM2Dco/UhlPQSpqGA7TsJfqeEorDLjHNg3pj6cUwjgCzzpAYDxFDENNw6YLCOU+Uggfhtc0mH5LAuHDKDUNyjtwhgTCg6EzDab7effDg6EzDYynkGH4mQbGU4gw/EwD4ykkGMfgZz4hMJ5CgHEV/l4GCMZTgDDUNDwvAwLjKeD1odxp2I8nP/92JQx3P6oAwn48EUYw64N5U3+VG09+H0ggDOc1woymn/Bl2WH1A2KhnKdDCON/WxfrgvzurA8gCmAzYVQOwxpPi7bXdIEUyn1uijDc46nZ4T2lgCxW8hAbYfz1U69PtwYQN4AE4BNGT6lPtwaQQqWPdxLGn93XzVKfbgff1QVI6cOY1Ywnt+2RkgApPRh+48m+PaJA9Ab1FPpBhuEnnpw2Cxd1I40qDUM3npymoRDG+YyDCsMaT0thTANh6MGwxtMunA1jGghDD4Y1ngY1pkH9T+JUFMfIDhoMazy9g2s8pmHHug1OGMHCcIunBvilwzRkoj5geZBgOMXTNXgrjGkgDHcYl2zxdAJ+FeY0EIYziHrLQRUVT7ejmAbCcIZhPbq1G9U06MIo97RuGkF0ejy50Z9LwDlwuekZOSB6QQ6MZuUAaVXGU+TT4BNGixydnpaj1EtytHq4GuPJPEPXF/HBSkcYOmUCUjowVo3xNK8OM8YBwgNGjdRqrEvNxorUbhTldVXHMVlN8aSmIR8XBDsMjymolSKadimmMaSoZqZa4mnePNqbMBiDUr1UlCqmvFQzGVLVtCbXqsJpLu3xtG1vHYgThMMUtEopWUFKyiaktKzWVmamys1G0xxPU04H3RMAo1Fq+Zqkps8OaFVq/aww0vt3hleDWQJgdEth5bIUWG5IoWWHvL5gNgJZYVABy2PRHpfKV0MqYNts1bC8eRHCGJEyZEPKkbvYwRsfjAGpCTdkGyRLAPHB6JUCfU5DAmDkpJ+XN4miKIqiKIqiKIqiKIqiKIqiKIpKpn4DKrVAiBFUfdUAAAAASUVORK5CYII=">'
        + '</div>'

        + '<div id="melown-compass-frame3">'
            + '<img id="melown-compass-compass3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAYAAACPO76VAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABG9JREFUeNrtnM9LFGEcxkeEPCQVmbkh7EXoEgW6noIQzQwKoQ5Lkgh7SA8iddlCQfAQFApdghAxooJCsEMe9JAEek8i81YQCIEYQvgHZM9L37Fpmpl9Z3d+rs8DDw7unuaz3+ddX+d9DIOiKIqiKIqiKIqiKIqiKIqiKIqiKMpTQ0NDyqNwTq7/MRUNAKsfwL2EER+MLHxBru/BA4QR3zR0wY/lWmmEMKKHcVh+tsEv5PoGPE4Y0cP4LD9b4AW57oC/whvwB3gZfgN3886FG1EmjAZ41WEa6uAm+DTcyLsXPAz11fWkDUYtvAVPwHfgAnwdbmVMhQtjDj4jN3gNPiTXF+E8fAsuwvfhQScIuVwuMusK762H69IGYwY+LwDew+3wcZkOQ2fhThoMvK8TnkrjZEzCV+RGF2XhXoE/wuvwJ7jGK5aSAkOm4Qm8DTemEcYYfNNtCnTWiCTAkGn4Bu/B+bSuGcPwF3gJfg1Pww/l661uLMQGwzINe+L5tH+1PSpbIOdkG0TtRWWSDsM2Dco/UhlPQSpqGA7TsJfqeEorDLjHNg3pj6cUwjgCzzpAYDxFDENNw6YLCOU+Uggfhtc0mH5LAuHDKDUNyjtwhgTCg6EzDab7effDg6EzDYynkGH4mQbGU4gw/EwD4ykkGMfgZz4hMJ5CgHEV/l4GCMZTgDDUNDwvAwLjKeD1odxp2I8nP/92JQx3P6oAwn48EUYw64N5U3+VG09+H0ggDOc1woymn/Bl2WH1A2KhnKdDCON/WxfrgvzurA8gCmAzYVQOwxpPi7bXdIEUyn1uijDc46nZ4T2lgCxW8hAbYfz1U69PtwYQN4AE4BNGT6lPtwaQQqWPdxLGn93XzVKfbgff1QVI6cOY1Ywnt+2RkgApPRh+48m+PaJA9Ab1FPpBhuEnnpw2Cxd1I40qDUM3npymoRDG+YyDCsMaT0thTANh6MGwxtMunA1jGghDD4Y1ngY1pkH9T+JUFMfIDhoMazy9g2s8pmHHug1OGMHCcIunBvilwzRkoj5geZBgOMXTNXgrjGkgDHcYl2zxdAJ+FeY0EIYziHrLQRUVT7ejmAbCcIZhPbq1G9U06MIo97RuGkF0ejy50Z9LwDlwuekZOSB6QQ6MZuUAaVXGU+TT4BNGixydnpaj1EtytHq4GuPJPEPXF/HBSkcYOmUCUjowVo3xNK8OM8YBwgNGjdRqrEvNxorUbhTldVXHMVlN8aSmIR8XBDsMjymolSKadimmMaSoZqZa4mnePNqbMBiDUr1UlCqmvFQzGVLVtCbXqsJpLu3xtG1vHYgThMMUtEopWUFKyiaktKzWVmamys1G0xxPU04H3RMAo1Fq+Zqkps8OaFVq/aww0vt3hleDWQJgdEth5bIUWG5IoWWHvL5gNgJZYVABy2PRHpfKV0MqYNts1bC8eRHCGJEyZEPKkbvYwRsfjAGpCTdkGyRLAPHB6JUCfU5DAmDkpJ+XN4miKIqiKIqiKIqiKIqiKIqiKIpKpn4DKrVAiBFUfdUAAAAASUVORK5CYII=">'
        + '</div>'

      + ' </div>', visible_);

    var compass_ = this.control_.getElement("melown-compass");
    compass_.setDraggableState(true);
    compass_.on("drag", this.onDrag.bind(this));
    compass_.on("dblclick", this.onDoubleClick.bind(this));

    this.image_ = this.control_.getElement("melown-compass-compass");
    this.image2_ = this.control_.getElement("melown-compass-compass2");
    this.image3_ = this.control_.getElement("melown-compass-compass3");
    
    this.lastStyle_ = "";
};

Melown.UIControlCompass.prototype.update = function() {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var value_ = "rotateX("+((pos_[6]+90)*0.7)+"deg) " + "rotateZ("+(pos_[5]-45)+"deg)";

    if (value_ != this.lastStyle_) {
        this.lastStyle_ = value_;
        this.image_.setStyle(Melown.Utils.TRANSFORM, value_);
        this.image2_.setStyle(Melown.Utils.TRANSFORM, value_);
        this.image3_.setStyle(Melown.Utils.TRANSFORM, value_);
    }
};

Melown.UIControlCompass.prototype.onDrag = function(event_) {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var delta_ = event_.getDragDelta();
    var sensitivity_ = 0.8;
    
    var controller_ = this.browser_.controlMode_.getCurrentController();
    
    if (controller_.orientationDeltas_) {
        controller_.orientationDeltas_.push([-delta_[0] * sensitivity_,
                                             -delta_[1] * sensitivity_, 0]);
    }
};

Melown.UIControlCompass.prototype.onDoubleClick = function(event_) {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var orientation_ = map_.getPositionOrientation(pos_);
    orientation_[0] = 0;
    pos_ = map_.setPositionOrientation(pos_, orientation_);

    map_.setPosition(pos_);
};


/**
 * @constructor
 */
Melown.UIControlCredits = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("credits",
      '<div id="melown-credits"'
      + ' class="melown-credits">'
      + ' </div>', visible_);

    this.lastHTML_ = "";
    this.credits_ = this.control_.getElement("melown-credits");
};

Melown.UIControlCredits.prototype.getCreditsString = function(array_) {
    var map_ = this.browser_.getMap();
    var html_ = "";
    var copyright_ = "&copy;" + (new Date().getFullYear());

    for (var i = 0, li = array_.length; i < li; i++) {
        var creditInfo_ = map_.getCreditInfo(array_[i]);
        
        /*
        if (creditInfo_["copyrighted"]) {
            html_ += copyright_;        
        }

        if (creditInfo_["url"]) {
            html_ += " <a href='" + creditInfo_["notice"] + "'>" + creditInfo_["notice"] + "</a>";        
        } else {
            html_ += " " + creditInfo_["notice"];        
        }*/
        
        if (creditInfo_["html"]) {
            html_ += creditInfo_["html"];
        }

        if (i + 1 < li) {
            html_ += ", ";        
        }
    }
    
    return html_;
};

Melown.UIControlCredits.prototype.update = function() {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var html_ = "<ul>";
    var credits_ = map_.getCurrentCredits();
    
    if (credits_["imagery"].length > 0) {
        html_ += "<li>Imagery: " + this.getCreditsString(credits_["imagery"]) + "</li>";
    }
    
    if (credits_["mapdata"].length > 0) {
        html_ += "<li>Map Data: " + this.getCreditsString(credits_["mapdata"]) + "</li>";
    }

    html_ += "<li>3D: MELOWN";

    if (credits_["mapdata"].length > 0) {
        html_ += ", " + this.getCreditsString(credits_["3d"]) + "</li>";
    }

    html_ += "</ul>";

    if (this.lastHTML_ != html_) {
        this.lastHTML_ = html_;
        this.credits_.setHTML(html_);
    }
};/**
 * @constructor
 */
Melown.UIControlLayers = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("layers",
      '<div class="melown-layers"'
      + '</div>', visible_);
};
/**
 * @constructor
 */
Melown.UIControlFallback = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("fallback",
      '<div class="melown-fallback">'

        + '<div class="melown-fallback-text">'
            + '<p>Melown Maps is <a href="http://get.webgl.org/">WebGL</a> dependent service.</p>'
            + '<p>You can read more about Melown Maps in our <a/ href="https://www.melown.com/maps/about.html">About section</a>.</p>'
        + '</div>'

      + ' </div>', visible_);
};
/**
 * @constructor
 */
Melown.UIControlHolder = function(ui_, html_, visible_) {
    this.ui_ = ui_;
    this.html_ = html_;
    this.elementsById_ = [];
    this.visible_ = (visible_ != null) ? visible_ : true;

    //create holder element
    this.element_ = document.createElement("div");
    this.setVisible(this.visible_);

    //set element content
    this.setHtml(html_);

    //append elemenet to UI
    this.ui_.element_.appendChild(this.element_);
};

Melown.UIControlHolder.prototype.setHtml = function(html_) {
    this.element_.innerHTML = html_;

    var allElements_ = this.element_.getElementsByTagName('*');

    //store all elements with id attribute to the table
    for (var i = 0, li = allElements_.length; i < li; i++) {
        var id_ = allElements_[i].getAttribute("id");

        if (id_ !== null) {
            //store element to the table
            this.elementsById_[id_] = new Melown.UIElement(this, allElements_[i]);
        }
    }
};

Melown.UIControlHolder.prototype.getElement = function(id_) {
    return this.elementsById_[id_];
};

Melown.UIControlHolder.prototype.setVisible = function(state_) {
    this.element_.style.display = state_ ? "block" : "none";
    this.visible_ = state_;
};

Melown.UIControlHolder.prototype.getVisible = function() {
    return this.visible_;
};


//prevent minification
Melown.UIControlHolder.prototype["setHtml"] = Melown.UIControlHolder.prototype.setHtml; 
Melown.UIControlHolder.prototype["getElement"] = Melown.UIControlHolder.prototype.getElement; 
Melown.UIControlHolder.prototype["setVisible"] = Melown.UIControlHolder.prototype.setVisible; 
Melown.UIControlHolder.prototype["getVisible"] = Melown.UIControlHolder.prototype.getVisible; 




/**
 * @constructor
 */
Melown.UIControlLogo = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("logo",
      '<a class="melown-logo"'
      + ' href="https://melown.com">'
      + 'Powered by MELOWN'
      + '</a>', visible_);
};


/**
 * @constructor
 */
Melown.UIControlScale = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("scale",
      '<div class="melown-scale"'
      + '</div>', visible_);
};/**
 * @constructor
 */
Melown.UIControlMap = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("map",
      '<div id="melown-map"'
      + ' class="melown-map">'
      + ' </div>');

    var map_ = this.getMapElement();
    map_.setDraggableState(true);
};

Melown.UIControlMap.prototype.getMapElement = function() {
    return this.control_.getElement("melown-map");
};
/**
 * @constructor
 */
Melown.UIControlZoom = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("zoom",
      '<div id="melown-zoom"'
      + ' class="melown-zoom">'

        + '<div id="melown-zoom-plus" class="melown-zoom-plus">'
            + '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAASUlEQVRIx+2Tyw0AIAhDq0d2KsMzFFddQBO9+En6rqR5kFBAiBVINpJtJ1NPLCbJe5IyG7j78IMyEwBgZsNcRJQrl6gnkgjxIx12Cg3wDaLBUAAAAABJRU5ErkJggg==">'
        + '</div>'

        + '<div id="melown-zoom-minus" class="melown-zoom-minus">'
          + '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAALUlEQVRIx2NgGAWjYBSMAqoCRlwSdnZ2/8kx8NChQxhmMo2G8ygYBaNgFGAHAElYBARpOBYqAAAAAElFTkSuQmCC">'
        + '</div>'

     + ' </div>', visible_);

    var plus_ = this.control_.getElement("melown-zoom-plus");
    plus_.on("click", this.onZoomIn.bind(this));

    var minus_ = this.control_.getElement("melown-zoom-minus");
    minus_.on("click", this.onZoomOut.bind(this));

};

Melown.UIControlZoom.prototype.onZoomIn = function() {
    this.repeat(7, 0.96, 50);
};

Melown.UIControlZoom.prototype.onZoomOut = function() {
    this.repeat(7, 1.04, 50);
};

Melown.UIControlZoom.prototype.repeat = function(count_, factor_, delay_) {
    if (count_ <= 0) {
        return;
    }

    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }
    
    var controller_ = this.browser_.controlMode_.getCurrentController();
    
    if (controller_.viewExtentDeltas_) {
        controller_.viewExtentDeltas_.push(factor_);
    }

    setTimeout(this.repeat.bind(this, --count_, factor_, delay_), delay_);
};


/**
 * @constructor
 */
Melown.UIControlSpace = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("space",
      '<div id="melown-space"'
      + ' class="melown-space">'

        + '<img id="melown-space-2d"'
          + ' class="melown-space-button"'
          + ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABqElEQVRIx+2UsWoUURSGv3Nn1sIiaKMBSbD0AdRBdmbdB7DMA0gaSSVRbFRYiGAaUWJhEAQVEey10yacO/gAwqZNSKWwhShs4ew9NtewTDI6sRCE/at7h8P/nfnvuRdmmum/lkxvut1u5pwbAOfNrAMMzWy9LMt3v2qKorCaRwC+A9vApqq+bITkeX4Z+CAiab3IzJa9988bIPXaR977G9Pf3NT6joikZvYmSZL5JElOAPcBRORu3UxVRVVlNBodCyEsmtkAMBFZjQ3va79rETluZl+rqrrpvf8c41t3zt0GFpo6Hw6HP4A9YK0oinlgRUSuAVsHIKqaH8hSJIsR7LQ54KqqNtI0XTGzS01xURuCBeBZhD1pAzGz3Vh/+o+QXq93zjnnReSsmb1W1Y0jTm3yW0ie5xdDCB5YNLMX4/H4KmAtzc/EP/py6MHH8bwAvAfmgDXv/eAo7Xc6nSsxro+HQrIsO2Vmb0VkDrilqg9aert+v39yMpksAfciZLPpMj4UkdUmJ1WVNpcReKyq15viWvrLp8mAb8CnEMLTsixfzV7rmf6dfgKmzKAWE7bqxgAAAABJRU5ErkJggg==">'

        + '<img id="melown-space-3d"'
          + ' class="melown-space-button"'
          + ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAB8klEQVRIx+1Uv4sTQRT+3mRygyDInYXFabaxsRNOIiG7mEPQxsJCLQVF8AeiaCNWigrWiniCVfA/0Eo4ONnZ4P4FURAL9yyCEMQfRMzs7LOZk2HZxNgIQr7qzbw373t838wAc8zxX4P8RbvdPimEuMLM+4loAcAmM3eTJLkHgAEgiiIu9SgAfAfwBsCa1rpbJqltBWEYXhBCdAE0HEENwBIRrQZBQFmWvQKAIAhuVwyqAOwGcLzRaOzIsuylXyB+VxKdc+FTY8yyMWZbURSn3N7l8nRaa9Ja03A4XCiKosHMtwAwEV0Lw/BQJYnW+oAxZu9oNLqUpulASrmdiPa49GCS3v1+3/R6vc0kSe4AeOIGPu/XSH+Rpul7J906ER0GAGYeADgzi8F5nj+QUl5k5tZEEk+6fV6sfO+mgZk/uDO7KuUqYcUYswTgGYBFAPf/8tbW/kiitR6kafqZma+7CVdmbL7s6j9VyhVF0QtmbuV5fnDLm/F4rJRSICKehaFerx9zcr2uJGHmn0S0U0r5uNlsnlVKWQCPXG5jSm/R6XQWrbUnANx1JGuTjL/JzEeJ6IhS6qNH/kUIcaPc2X/51lo/9TCO441KT5IkeWetXQWwDuAHgG/M/BxAK47jt9MuFYCvAHpFUZzWWl+d/9Zz/Dv8ApJPyD0fWCwOAAAAAElFTkSuQmCC">'

     + ' </div>', visible_);
     
    this.button2D_ = this.control_.getElement("melown-space-2d");
    this.button2D_.on("click", this.onSwitch.bind(this));

    this.button3D_ = this.control_.getElement("melown-space-3d");
    this.button3D_.on("click", this.onSwitch.bind(this));

    this.space3D_ = true;
    this.update();
};

Melown.UIControlSpace.prototype.onSwitch = function() {
    this.space3D_ = !this.space3D_;
    this.update();
};

Melown.UIControlSpace.prototype.update = function() {
    if (this.space3D_) {
        this.button2D_.setStyle("display", "block");
        this.button3D_.setStyle("display", "none");
    } else {
        this.button2D_.setStyle("display", "none");
        this.button3D_.setStyle("display", "block");
    }

    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var orientation_ = map_.getPositionOrientation(pos_);

    if (this.space3D_) {
        orientation_[1] = -60;
        //pos_ = map_.setPositionFov(pos_, 90);
        pos_ = map_.setPositionOrientation(pos_, orientation_);
    } else {
        orientation_[1] = -90;
        //pos_ = map_.setPositionFov(pos_, 5);
        pos_ = map_.setPositionOrientation(pos_, orientation_);
    }

    pos_ = Melown.constrainMapPosition(this.browser_, pos_);
    map_.setPosition(pos_);
};


/**
 * @constructor
 */
Melown.UIControlLink = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("link",
      '<div id="melown-link" class="melown-link">'

        + '<div id="melown-link-button" class="melown-link-button">'
          + '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABrUlEQVRIx+2VMWtUQRSFz5nZjVrpD9gNVhpLQbZZ5vWaIoUECayNRSpbo9UiJI1pBRs7DVjYGBC1ntm3yHaiwgYsZP+EmMe7x8K3YJEH+xYLwT3NcGe483HvnJkBVvovxWWSsiy7BeAxgGuSpmY2zPP8/V+DhBAekDysQgPgAMDMbo5Gow9n5bgmgF6vd47kAYBC0t0Y45qkPQAguV+X1wgymUx+ShqUZZmllI4AlEVRPJckkht1ea1FNu/3+1ve+31JV0h+dc49mq+12+0dkpQ0XfpMQgh7JJ9U4SmANf3WZUnXvfevAbQBbMYY3zVu1x+Awsx2YoznzewOgKcke3OApId1AADwCwIGJG90u12f5/nx+vr6Jefc0RyQUjpsfE9CCJsk3wIoyrLcljRttVrznv8AcAEAFgHUtovksNrkXp7nx+Px+ETSbQBfKrN8NrOtRQC17pK0QbJMKb2az5nZd+fc/ZRSBKAm1q+r5ASADyHsVuPAe/+R5JtlnqEzIWY2rGDPsiw7JfmysulB0ypq3TWbzb51Op0JyaskLwL4BGA3xvhi9aes9G/pF4AdwlhUZ8RfAAAAAElFTkSuQmCC">'
        + '</div>'

        + '<div id="melown-link-text-holder" class="melown-link-text-holder">'
            + '<div class="melown-link-text">'
              + '<textarea id="melown-link-text-input" rows="4" cols="50" wrap="hard"></textarea>'
            + '</div>'
        + '</div>'
        
     + ' </div>', visible_);
     
    this.div_ = this.control_.getElement("melown-link");

    var button_ = this.control_.getElement("melown-link-button");
    button_.on("click", this.onSwitch.bind(this));

    this.linkPanel_ = this.control_.getElement("melown-link-text-holder");
    this.link_ = this.control_.getElement("melown-link-text-input");

    this.linkVisible_ = false;
    this.update();
};

Melown.UIControlLink.prototype.onSwitch = function() {
    this.linkVisible_ = !this.linkVisible_;
    this.updateLink();
    this.update();
};

Melown.UIControlLink.prototype.update = function() {
    var button_ = this.control_.getElement("melown-link-button");
    
    var left_ = 10 + (this.ui_.config_.controlZoom_ ? 70 : 0) +
                (this.ui_.config_.controlSpace_ ? 35 : 0);
    
    this.div_.setStyle("left", left_ + "px");
    this.linkPanel_.setStyle("display", this.linkVisible_ ? "block" : "none");
};

Melown.UIControlLink.prototype.updateLink = function() {
    var map_ = this.browser_.getMap();
    if (!map_  || !this.linkVisible_) {
        return;
    }

    var p = map_.getPosition();
    var s = "";
    s += map_.getPositionViewMode(p) + ",";
    var c = map_.getPositionCoords(p);
    s += c[0].toFixed(6) + "," + c[1].toFixed(6) + "," + map_.getPositionHeightMode(p) + "," + c[2].toFixed(2) + ",";
    var o = map_.getPositionOrientation(p);
    s += o[0].toFixed(2) + "," + o[1].toFixed(2) + "," + o[2].toFixed(2) + ",";
    s += map_.getPositionViewExtent(p).toFixed(2) + "," + map_.getPositionFov(p).toFixed(2);
    
    var linkValue_ =  window.location.href + "?pos=" + s;

    if (this.link_.getElement().value != linkValue_) {
        this.link_.getElement().value = linkValue_;
    }
};

/**
 * @constructor
 */
Melown.UIControlNavigation = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("navigation",
      '<div id="melown-navigation"'
      + ' class="melown-navigation">'

        + '<img id="melown-navigation-n1"'
          + ' class="melown-navigation-button"'
          + ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjc5RDgzNzAxMTQwMTFFNjk0MjFGQjMxMEI5NUZCN0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc5RDgzNzExMTQwMTFFNjk0MjFGQjMxMEI5NUZCN0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNzlEODM2RTExNDAxMUU2OTQyMUZCMzEwQjk1RkI3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNzlEODM2RjExNDAxMUU2OTQyMUZCMzEwQjk1RkI3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pifk4XoAAAL/SURBVHjavJZbSJRREMd1V+1KSYtJQSXdL1QkREalD0IPaVGBElEiKT1EtwchepAtQiii7CGk8i1iJYpuEpQEuRElkgkZdKELUVoWRg8WmLd+A/+F0+d+a0H5wY85Z745M+c7M2d2A4ODg0n/m0DSCDwpwxnk5eWdReTAfEiFXsk+eA6PotHojkQ+Agmcl8MPhmthEaRBFXTBEQUyfa7Zwf6/CsKCi4haaITl2n02O65EjkGGkTOlz4cGqGZd/R8FwfAmohhCOFuHfAFvGLfybi7jAWQu87eMn0Ab442QzLiQd/e8PpMt+06A9Ygb0K3zNifbYBpOPsvmI+MpGqfINqKjs7xNgO3YXPAL8hNxDUrBvmgVBOGTctIPGcpLkpKfaV8HD2EDHIMygqQMCUKAasRuXqY6QdvkyPKzErJUaS3wSo7tSyeybqFnsxF0pd4SLoFWz3HOgJMY1yBrnOPKcRzapsKedQ9gk07kt8SPgqMeYzueW47DdCtd5BzHxt73o3N9hV3f3svYpQqyZ4HykeHosrQmG12ydJnSbUXXLF238jQkyGi47OzAjmE8nHcWBFU955Sr2GO6M9CjudmPjRfEDMqhU/N5cBr2KMmxHFmACrsfzpfYRg7CY+nGwdV4QazMeklqk+ZNfP4p5DN0LcrJU4RVTgO6d9LN0roaJ3crrHLj3XhbXOnJkR1PYWyCIzvrvlgAPQWyc58qv5xYvyrzGJuzAnb2WhfT+lWIeaM6gt2TIujwrFsDV/xuvDW8OnZawviOdVjtsl0lbkcQgq8qb7Ofql3fV7M8AXvxEfQrYbuQEfWwDu1ms3ViFnX69K7vcF0l/wUmwU7fLsziOhNgl24p8y1ycltO7b6kIVdrSaOSXgyLFcB+xGp9u7BzbPVK+CXYBR9gCYtf8u4bMh05Gd17dd7D6mF3eZefsNV7AlXoF7BdN93O+ADss34Gx1X2doemW/clwKF4vnyDOMHst2IZzFagHhXBgALYj1ZRIh/DBvkXz4j8JfolwAB8CHbQFO+3/gAAAABJRU5ErkJggg==">'

        + '<img id="melown-navigation-n2"'
          + ' class="melown-navigation-button"'
          + ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGQ0FCNkZFRTQwMTFFNjExOEU3RUNCNUI5MEVDMTIxQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMzc2NURENjExNDAxMUU2ODYwMDkyMTg1NTFFNDRGOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMzc2NURENTExNDAxMUU2ODYwMDkyMTg1NTFFNDRGOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZDQUI2RkVFNDAxMUU2MTE4RTdFQ0I1QjkwRUMxMjFBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZDQUI2RkVFNDAxMUU2MTE4RTdFQ0I1QjkwRUMxMjFBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4pNHzgAAAztJREFUeNq0ll9ozWEYx7c5zN8lNFuZoeXC37mxVnTKhU1ioaaV7WLSWGkRy8VsNUVCImvYjbWwCBdm/o11arH8CQvRDMtk7RSGLcV2fJ76ntPbmdPWzK8+Pb/zvu/zvs+/9/md6EAgEPW/n5ihLvR6vTEwcTiHRA/miW2OuALL4QdMgHHwC15CFdT5fL6uYR3CAe8Qs6APPsJBuAc/NX4RAorIUQ7aO+RwsXkmmPJUeAIL4Axsg9uQBNNgNBvHISuhGJ0DMGXQQ1g0FnEd+mElWB7Ws1kZMh2eQS3UMGZro5C7EVmwSkYM6kkvnIdHKDcjn0M2h8fz23LSAmZtL2NZQSXmbiC2WBgZ3xHxECYt3nXyokPDpeCBPcx3I3PYMBrZCPsZW+Yc9NCMU+4iepLOwrVKdLIUzZPpYNY18TtRa/PgPVRz0HhYDWac5aiT9+oBhzB4HPFYP+9b0hm7qwJ4pXLtcaz+jCiXl+b1OVjEuOVtp+UT3bhwT7KtYpj4oGqxEvXBXBTtjlRAKvMbnftzDGaAFUCivLbnjV0PmBQ6BAWPBk7IuhTwwxcUW6V4Gt6alazfp5C+gMXwGk45Xj5V2FLCPRkFl1hQBW2837Eky4Dg0wBLoQgSWLdZ1jfKy3hnrV+VGjrEI/f8ziK7zQmwQj3rk7y8poS7T6WKI0mRSZZuTOgQrLE20QkljsuX1assDN+hTLe8SHqHnLWtmmvggB7lZIzCGOWGwqyb4+SoUO3kN2xlo2DM25ivR1rJmlHb1X5a1B0yFBE/Ol/Dc3IY1qA4T7G0VjETbtpNZjw1LJSWVCuADeoA1hwnK5+34OyAe8LkVUS3KiaD30lg5ZyvSqrWN8XL+wOoV8uxEv8mT4L7pTGWH+nGp2nDfudw+04U6xtiMW6wtgLr1P4L1FTtXsXybiHaFbGtoNiOuGB3gsUFzrhP3xELUbOjUq77YEWRKUPaWX7E3dfzly6cJ6UK60m61XbLc9T6rSla9dSyWQnvZtQmFY2Fb8mQvoxqGaVKqt2f+fb5ZdMmzeciTsryPhmbx3zNcL/xuYrxbCdXsaJD3/fCf/ojEfbFXKgEdylPI/NvZSSePwIMADA6T5QN8pfUAAAAAElFTkSuQmCC">'

     + ' </div>', visible_);
     
    this.buttonN1_ = this.control_.getElement("melown-navigation-n1");
    this.buttonN1_.on("click", this.onSwitch.bind(this));

    this.buttonN2_ = this.control_.getElement("melown-navigation-n2");
    this.buttonN2_.on("click", this.onSwitch.bind(this));

    this.mode_ = 0;
    this.update();
};

Melown.UIControlNavigation.prototype.onSwitch = function() {
    this.mode_ = (this.mode_ + 1) % 2;
    this.update();
};

Melown.UIControlNavigation.prototype.update = function() {
    this.buttonN1_.setStyle("display", "none");
    this.buttonN2_.setStyle("display", "none");
    
    switch(this.mode_) {
        case 0: this.buttonN1_.setStyle("display", "block"); break;
        case 1: this.buttonN2_.setStyle("display", "block"); break;
    }
};


/**
 * @constructor
 */
Melown.UIElement = function(control_, element_) {
    this.control_ = control_;
    this.ui_ = this.control_.ui_;
    this.element_ = element_;
    this.events_ = [];
    this.dragBeginCall_ = this.onDragBegin.bind(this);
    this.dragMoveCall_ = this.onDragMove.bind(this);
    this.dragEndCall_ = this.onDragEnd.bind(this);
    this.firstDragDistance_ = 0;
    this.lastDragDistance_ = 0;
    this.dragStartPos_ = [0,0];
    this.dragCurrentPos_ = [0,0];
    this.dragLastPos_ = [0,0];
    this.dragAbsMoved_ = [0,0];
    this.zoomDrag_ = false;
};

Melown.UIElement.prototype.setStyle = function(key_, value_) {
    this.element_.style[key_] = value_;
};

Melown.UIElement.prototype.getStyle = function(key_) {
    return this.element_.style[key_];
};

Melown.UIElement.prototype.setClass = function(name_) {
    Melown.Utils.setClass(this.element_, name_);
    return this;
};

Melown.UIElement.prototype.getClass = function() {
    Melown.Utils.getClass(this.element_);
    return this;
};

Melown.UIElement.prototype.hasClass = function(name_) {
    return Melown.Utils.hasClass(this.element_, name_);
};

Melown.UIElement.prototype.addClass = function(name_) {
    Melown.Utils.addClass(this.element_, name_);
    return this;
};

Melown.UIElement.prototype.removeClass = function(name_) {
    Melown.Utils.removeClass(this.element_, name_);
    return this;
};

Melown.UIElement.prototype.setHTML = function(html_) {
    this.element_.innerHTML = html_;
};

Melown.UIElement.prototype.getHTML = function() {
    return this.element_.innerHTML;
};

Melown.UIElement.prototype.getElement = function() {
    return this.element_;
};

//prevent minification
Melown.UIElement.prototype["setHtml"] = Melown.UIElement.prototype.setHtml; 
Melown.UIElement.prototype["getHtml"] = Melown.UIElement.prototype.getHtml; 
Melown.UIElement.prototype["getElement"] = Melown.UIElement.prototype.getElement; 
Melown.UIElement.prototype["setClass"] = Melown.UIElement.prototype.setClass; 
Melown.UIElement.prototype["getClass"] = Melown.UIElement.prototype.getClass; 
Melown.UIElement.prototype["setStyle"] = Melown.UIElement.prototype.setStyle; 
Melown.UIElement.prototype["getStyle"] = Melown.UIElement.prototype.getStyle; 
Melown.UIElement.prototype["addClass"] = Melown.UIElement.prototype.addClass; 
Melown.UIElement.prototype["hasClass"] = Melown.UIElement.prototype.hasClass; 
Melown.UIElement.prototype["removeClass"] = Melown.UIElement.prototype.removeClass; 


Melown.UIElement.prototype.setDraggableState = function(state_) {
    if (state_) {
        this.on("mousedown", this.dragBeginCall_);
        this.on("touchstart", this.dragBeginCall_);
    } else if (this.dragable_){
        this.off("mousedown", this.dragBeginCall_);
        this.off("mousemove", this.dragMoveCall_, document);
        //this.off("mouseup", this.onDragEnd.bind(this));
        this.off("mouseup", this.dragEndCall_, document);
        
        this.off("touchstart", this.dragBeginCall_);
        this.off("touchmove", this.dragMoveCall_, document);
        this.off("touchend", this.dragEndCall_, document);
        
        this.dragging_ = false;
    }
    
    this.dragStartPos_ = [0,0];
    this.dragCurrentPos_ = [0,0];
    this.dragLastPos_ = [0,0];
    this.dragAbsMoved_ = [0,0];
    
    this.dragable_ = state_;
    this.dragButtons_ = {
      "left" : false,
      "right" : false,
      "middle" : false
    };
};

Melown.UIElement.prototype.getDraggableState = function() {
    return this.dragable_;
};

Melown.UIElement.prototype.getDraggingState = function() {
    return {
        "dragging" : this.dragging_,
        "buttonLeft" : this.dragButtons_["left"],
        "buttonRight" : this.dragButtons_["right"],
        "buttonMiddle" : this.dragButtons_["middle"],
        "startPos" : this.dragStartPos_.slice(), 
        "lastPos" : this.dragLastPos_.slice(), 
        "currentPos" : this.dragCurrentPos_.slice(), 
        "absMoved" : this.dragAbsMoved_.slice() 
    };
};

Melown.UIElement.prototype.onDragBegin = function(event_) {
    //console.log("bergin: 1#:  " + JSON.stringify(this.dragButtons_));

    this.dragButtons_[event_.getMouseButton()] = true;

    //console.log("bergin: 2#:  " + JSON.stringify(this.dragButtons_));

    this.firstDragDistance_ = 0;
    this.lastDragDistance_ = 0;
    this.zoomDrag_ = false;



    if (this.dragging_ != true) {
        this.dragging_ = true;
        var pos_ = event_.getMouseCoords(true);
        this.dragStartPos_ = [pos_[0], pos_[1]];
        this.dragCurrentPos_ = [pos_[0], pos_[1]];
        this.dragLastPos_ = [pos_[0], pos_[1]];
        this.dragAbsMoved_ = [0,0];

        this.on("mousemove", this.dragMoveCall_, document);
        this.on("mouseup", this.dragEndCall_, document);
        //this.on("mouseup", this.onDragEnd.bind(this), document);

        this.on("touchmove", this.dragMoveCall_, document);
        this.on("touchend", this.dragEndCall_, document);

        Melown.Utils.disableTextSelection();
        Melown.Utils.disableImageDrag();
        //Melown.Utils.disableContexMenu();
        Melown.Utils.preventDefault(event_);

        this.fire("dragstart", {
            "clientX" : pos_[0],
            "clientY" : pos_[1]
            });
    } else {
        var pos_ = event_.getMouseCoords();
        this.dragLastPos_ = pos_;
    }

};

Melown.UIElement.prototype.onDragMove = function(event_) {
    var pos_ = event_.getMouseCoords();

    //console.log("move: 1#:  " + JSON.stringify(this.dragButtons_));

    if (event_.getTouchesCount() != -1) {
        this.updateDragButtonsState(event_, true);
    }

    Melown.Utils.preventDefault(event_);


    //console.log("move: 2#:  " + JSON.stringify(this.dragButtons_));

    var zoom_ = 0;

    if (event_.getTouchesCount() == 2) {
        var p1_ = event_.getTouchCoords(0); 
        var p2_ = event_.getTouchCoords(1); 
        var dx_ = p2_[0] - p1_[0];
        var dy_ = p2_[1] - p1_[1];
        var distance_ = Math.sqrt(dx_ * dx_ + dy_* dy_); 

        if (this.firstDragDistance_ == 0) {
            this.firstDragDistance_ = distance_;
        }

        if (!this.zoomDrag_ && Math.abs(this.firstDragDistance_ - distance_) > 25) {
            this.zoomDrag_ = true;
            this.firstDragDistance_ = distance_;
            this.lastDragDistance_ = distance_;
            //zoom_ = 1.0;
        } else {
            zoom_ = this.zoomDrag_ ? (distance_ / this.lastDragDistance_) : 0; 
            this.lastDragDistance_ = distance_;
        }
    }

    this.fire("drag", {
        "clientX" : pos_[0],
        "clientY" : pos_[1],
        "deltaX" : pos_[0] - this.dragLastPos_[0],
        "deltaY" : pos_[1] - this.dragLastPos_[1],
        "left" : this.dragButtons_["left"],
        "right" : this.dragButtons_["right"],
        "middle" : this.dragButtons_["middle"],
        "zoom" : zoom_
        });

    this.dragLastPos_ = this.dragCurrentPos_;
    this.dragCurrentPos_ = [pos_[0], pos_[1]];
    this.dragAbsMoved_[0] += Math.abs(pos_[0] - this.dragLastPos_[0]);
    this.dragAbsMoved_[1] += Math.abs(pos_[1] - this.dragLastPos_[1]);

    //var el_ = document.getElementById("melown-debug-logo");
    //el_.innerHTML = "" + this.firstDragDistance_ + "   " + this.lastDragDistance_ + "   " + zoom_;
    //el_.innerHTML = "" + this.dragAbsMoved_[0] + "    " + this.dragAbsMoved_[1];

};

Melown.UIElement.prototype.onDragEnd = function(event_) {
    //this.dragButtons_[event_.getMouseButton()] = false;
    //console.log("end: 1#:  " + JSON.stringify(this.dragButtons_));

    var left_ = this.dragButtons_["left"];
    var right_ = this.dragButtons_["right"];
    var middle_ = this.dragButtons_["middle"];

    this.updateDragButtonsState(event_, false);

    //console.log("end: 2#:  " + JSON.stringify(this.dragButtons_));

    this.firstDragDistance_ = 0;
    this.lastDragDistance_ = 0;
    this.zoomDrag_ = false;


    if (this.dragging_ == true) {
        var pos_ = event_.getMouseCoords();
        this.dragLastPos_ = pos_;

        if (!this.dragButtons_["left"] &&
            !this.dragButtons_["right"] &&
            !this.dragButtons_["middle"] ) {

            this.dragging_ = false;
            var pos_ = this.dragCurrentPos_;//event_.getMouseCoords();
            this.off("mousemove", this.dragMoveCall_, document);
            this.off("mouseup", this.dragEndCall_, document);
            //this.off("mouseup", this.onDragEnd.bind(this), document);

            this.off("touchmove", this.dragMoveCall_, document);
            this.off("touchend", this.dragEndCall_, document);

            Melown.Utils.enableTextSelection();
            Melown.Utils.enableImageDrag();
            //Melown.Utils.enableContexMenu();
            Melown.Utils.preventDefault(event_);

            this.fire("dragend", {
                "clientX" : pos_[0],
                "clientY" : pos_[1],
                "left" : left_,
                "right" : right_,
                "middle" : middle_
                });
        }
    }
};

Melown.UIElement.prototype.updateDragButtonsState = function(event_, state_) {
    switch(event_.getTouchesCount()) {
        case -1: this.dragButtons_[event_.getMouseButton()] = state_; break;
        case 0: this.dragButtons_ = { "left" : false, "right" : false, "middle" : false }; break;
        case 1: this.dragButtons_ = { "left" : true, "right" : false, "middle" : false }; break;
        case 2: this.dragButtons_ = { "left" : false, "right" : true, "middle" : false }; break;
        case 3: this.dragButtons_ = { "left" : false, "right" : false, "middle" : true }; break;
    }        
};



Melown.UIElement.prototype.setDraggableState = function(state_) {
    if (state_) {
        this.on("mousedown", this.dragBeginCall_);
        this.on("touchstart", this.dragBeginCall_);
    } else if (this.dragable_){
        this.off("mousedown", this.dragBeginCall_);
        this.off("mousemove", this.dragMoveCall_, document);
        //this.off("mouseup", this.onDragEnd.bind(this));
        this.off("mouseup", this.dragEndCall_, document);
        
        this.off("touchstart", this.dragBeginCall_);
        this.off("touchmove", this.dragMoveCall_, document);
        this.off("touchend", this.dragEndCall_, document);
        
        this.dragging_ = false;
    }

    this.dragable_ = state_;
    this.dragButtons_ = {
      "left" : false,
      "right" : false,
      "middle" : false
    };
};

//prevent minification
Melown.UIElement.prototype["setDraggableState"] = Melown.UIElement.prototype.setDraggableState; 
Melown.UIElement.prototype["getDraggableState"] = Melown.UIElement.prototype.getDraggableState; 
Melown.UIElement.prototype["getDraggingState"] = Melown.UIElement.prototype.getDraggingState; 



/**
 * @constructor
 */
Melown.UIEvent = function(type_, element_, event_) {
    this.type_ = type_;
    this.event_ = event_;
    this.element_ = element_;
};

Melown.UIEvent.prototype.getMouseButton = function() {
    switch (this.type_) {
        case "touchstart":
        case "touchend":
        case "touchmove":

            var touches_ = this.event_["touches"];
            
            if (touches_) {
                switch(touches_.length) {
                    case 1: return "left";
                    case 2: return "right";
                    case 3: return "middle";
                }
            }   

        default:
    
            if (this.event_.which) { // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
                //right_ = e.which == 3;
        
                switch(this.event_.which) {
                    case 1: return "left";
                    case 2: return "middle";
                    case 3: return "right";
                }
        
            } else if (this.event_.button) { // IE, Opera
                //right_ = e.button == 2;
        
                switch(this.event_.button) {
                    case 1: return "left";
                    case 2: return "right";
                    case 3: return "middle";
                }
            }
    
    }

    return "";
};

Melown.UIEvent.prototype.getMouseCoords = function(absolute_) {
    var event_ = null;

    switch (this.type_) {
        case "touchstart":
        case "touchend":
        case "touchmove":

            var touches_ = this.event_["touches"];
            if (!touches_ || touches_.length == 0) {
                break;
            }
            
            var pos_ = [0,0];
            
            for (var i = 0, li = touches_.length; i < li; i++) {
                var pos2_ = this.getEventCoords(this.event_["touches"][i], absolute_);
                pos_[0] += pos2_[0];   
                pos_[1] += pos2_[1];   
            }
            
            pos_[0] /= li;
            pos_[1] /= li;
            return pos_;    

        case "mousedown":
        case "mouseup":
        case "mousemove":
        case "dragstart":
        case "dragend":
        case "drag":

            return this.getEventCoords(this.event_, absolute_);
            break;

    }

    return [0,0];
};

Melown.UIEvent.prototype.getEventCoords = function(event_, absolute_) {
    if (this.element_.getBoundingClientRect == null || absolute_) {
        return [ event_["clientX"],
                 event_["clientY"] ];
    } else {
        var rect_ = this.element_.getBoundingClientRect();

        return [ event_["clientX"] - rect_.left,
                 event_["clientY"] - rect_.top ];
    }
};

Melown.UIEvent.prototype.getDragDelta = function() {
    switch (this.type_) {
        case "drag":

            return [ this.event_["deltaX"],
                     this.event_["deltaY"] ];
    }

    return [0,0];
};

Melown.UIEvent.prototype.getDragZoom = function() {
    switch (this.type_) {
        case "drag":
            return this.event_["zoom"];
    }
    
    return 1.0;
};

Melown.UIEvent.prototype.getModifierKey = function(key_) {
    switch (this.type_) {
        case "mouseup":
        case "mousedown":
        case "keyup":
        case "keydown":
        case "keypress":

            switch(key_) {
                case "alt":   return this.event_.altKey;
                case "ctrl":  return this.event_.ctrlKey;
                case "shift": return this.event_.shiftKey;
            }
    }

    return false;
};

Melown.UIEvent.prototype.getKeyCode = function(key_) {
    switch (this.type_) {
        case "keyup":
        case "keydown":
        case "keypress":
        
            if (this.event_.keyCode) {         // eg. IE
                return this.event_.keyCode;
            } else if (this.event_.which) {   // eg. Firefox
                return this.event_.which;
            } else {
                return this.event_.charCode;
            }
    }
    
    return null;
};

Melown.UIEvent.prototype.getDragButton = function(button_) {
    switch(button_) {
        case "left": 
        case "right":
        case "middle":
            
            switch(this.getTouchesCount()) {
                case -1: return this.event_[button_];
                case 0: return false;
                case 1: return button_ == "left";
                case 2: return button_ == "right";
                case 3: return button_ == "middle";
            }
        
    }

    return false;
};


Melown.UIEvent.prototype.getWheelDelta = function() {
    switch (this.type_) {
        case "mousewheel":

            var delta = 0;

            if (this.event_.wheelDelta) {
                delta = this.event_.wheelDelta / 120;
            }
            if (this.event_.detail) {
                delta = -this.event_.detail / 3;
            }

            return delta;
    }

    return 0;
};

Melown.UIEvent.prototype.getTouchesCount = function() {
    switch (this.type_) {
        case "touchstart":
        case "touchend":
        case "touchmove":

            var touches_ = this.event_["touches"];
            if (!touches_) {
                break;
            }
            
            return this.event_["touches"].length;    
    }
    
    return -1;
};

Melown.UIEvent.prototype.getTouchCoords = function(index_, absolute_) {
    switch (this.type_) {
        case "touchstart":
        case "touchend":
        case "touchmove":

            var touches_ = this.event_["touches"];
            if (!touches_) {
                break;
            }
            
            var event_ = this.event_["touches"][index_];    
            if (!event_) {
                break;
            }

            if (this.element_.getBoundingClientRect == null || absolute_) {
                return [ event_["clientX"],
                         event_["clientY"] ];
            } else {
                var rect_ = this.element_.getBoundingClientRect();

                return [ event_["clientX"] - rect_.left,
                         event_["clientY"] - rect_.top ];
            }
    }

    return [0,0];
};

Melown.UIEvent.prototype.getType = function() {
    return this.type_;
};

//prevent minification
Melown.UIEvent.prototype["getMouseButton"] = Melown.UIEvent.prototype.getMouseButton;
Melown.UIEvent.prototype["getMouseCoords"] = Melown.UIEvent.prototype.getMouseCoords;
Melown.UIEvent.prototype["getDragDelta"] = Melown.UIEvent.prototype.getDragDelta;
Melown.UIEvent.prototype["getModifierKey"] = Melown.UIEvent.prototype.getModifierKey;
Melown.UIEvent.prototype["getKeyCode"] = Melown.UIEvent.prototype.getKeyCode;
Melown.UIEvent.prototype["getDragButton"] = Melown.UIEvent.prototype.getDragButton;
Melown.UIEvent.prototype["getWheelDelta"] = Melown.UIEvent.prototype.getWheelDelta;
Melown.UIEvent.prototype["getDragZoom"] = Melown.UIEvent.prototype.getDragZoom;
Melown.UIEvent.prototype["getTouchesCount"] = Melown.UIEvent.prototype.getTouchesCount;
Melown.UIEvent.prototype["getTouchCoords"] = Melown.UIEvent.prototype.getTouchCoords;
Melown.UIEvent.prototype["getType"] = Melown.UIEvent.prototype.getType;



Melown.UIElement.prototype.on = function(type_, function_, externalElement_) {
    this.addEvent(type_, function_, externalElement_);
};

Melown.UIElement.prototype.once = function(type_, function_, externalElement_) {
    var removeEventCall_ = (function() {
        this.removeEvent(type_, function_, externalElement_);
    }).bind(this);

    var handler_ = function(e) {
        function_(e);
        removeEventCall_();
    };

    this.addEvent(type_, handler_, externalElement_);
};

Melown.UIElement.prototype.off = function(type_, function_, externalElement_) {
    this.removeEvent(type_, function_, externalElement_);
};

Melown.UIElement.prototype.fire = function(type_, event_) {
    var hooks_ = this.events_[type_];

    if (hooks_ != null) {
        for (var hook_ in hooks_) {
            hooks_[hook_](event_);
        }
    }
};

Melown.UIElement.prototype.addEvent = function(type_, function_, externalElement_) {
    var id_ = type_ + "-" + Melown.Utils.stamp(function_)
              + (externalElement_ ? ("-" + Melown.Utils.stamp(externalElement_)) : "");

    var handler_ = function(e) {
//        function_.call(new Melown.UIEvent(type_, this, e || window.event));
        function_(new Melown.UIEvent(type_, this, e || window.event));
    };

    var element_ =  externalElement_ || this.element_;
    element_.addEventListener(this.getEventName(type_), handler_, false);

    if (type_ == "mousewheel") {
        element_.addEventListener("DOMMouseScroll", handler_, false);
    }

    this.events_[type_] = this.events_[type_] || [];
    this.events_[type_][id_] = handler_;

};

Melown.UIElement.prototype.removeEvent = function(type_, function_, externalElement_) {
    var id_ = type_ + "-" + Melown.Utils.stamp(function_)
              + (externalElement_ ? ("-" + Melown.Utils.stamp(externalElement_)) : "");

    var handler_ = this.events_[type_] && this.events_[type_][id_];

    if (handler_ != null) {
        delete this.events_[type_][id_];

        var element_ =  externalElement_ || this.element_;
        element_.removeEventListener(this.getEventName(type_), handler_, false);
    }
};

Melown.UIElement.prototype.getEventName = function(type_) {
    return type_;
};

//prevent minification
Melown.UIElement.prototype["on"] = Melown.UIElement.prototype.on;
Melown.UIElement.prototype["once"] = Melown.UIElement.prototype.once;
Melown.UIElement.prototype["off"] = Melown.UIElement.prototype.off;
Melown.UIElement.prototype["fire"] = Melown.UIElement.prototype.fire;


/**
 * @constructor
 */
Melown.UI = function(browser_, element_) {
    this.browser_ = browser_;
    this.config_ = browser_.config_;
    this.element_ = element_;
    this.controls_ = [];
    this.init();
    this.instanceId_ = Melown.InstanceCounter++;
};

Melown.UI.prototype.init = function() {
    this.map_ = new Melown.UIControlMap(this);
    this.compass_ = new Melown.UIControlCompass(this, this.config_.controlCompass_);
    this.credits_ = new Melown.UIControlCredits(this);
    this.logo_ = new Melown.UIControlLogo(this, this.config_.controlLogo_);
    this.zoom_ = new Melown.UIControlZoom(this, this.config_.controlZoom_);
    this.space_ = new Melown.UIControlSpace(this, this.config_.controlSpace_);
    this.link_ = new Melown.UIControlLink(this, this.config_.controlLink_);
    //this.navigator_ = new Melown.UIControlNavigation(this, this.config_.controlNavigator_);
    this.layers_ = new Melown.UIControlLayers(this, this.config_.controlLayers_);
    this.fallback_ = new Melown.UIControlFallback(this);
    Melown.Utils.disableContexMenu(this.element_);
};

Melown.UI.prototype.addControl = function(id_, html_, visible_) {
    var control_ = new Melown.UIControlHolder(this, html_, visible_);
    this.controls_[id_] = control_;
    return control_;
};

Melown.UI.prototype.removeControl = function(id_) {
    if (this.controls_[id_] != null) {
        delete this.controls_[id_];
    }
};

Melown.UI.prototype.setControlHtml = function(id_, html_) {
    if (this.controls_[id_] != null) {
        this.controls_[id_].setHTML(html_);
    }
};

Melown.UI.prototype.setControlVisible = function(id_, state_) {
    if (this.controls_[id_] != null) {
        this.controls_[id_].setVisible(state_);
    }
};

Melown.UI.prototype.getControlVisible = function(id_) {
    if (this.controls_[id_] != null) {
        this.controls_[id_].getVisible(state_);
    }
};

Melown.UI.prototype.getControlById = function(id_) {
    return this.controls_[id_];
};

Melown.UI.prototype.getMapControl = function() {
    return this.map_;
};

Melown.UI.prototype.setParam = function(key_) {
    switch (key_) {
        case "controlCompass":     this.setControlVisible("comapss", this.config_.controlCompass_); break;
        case "controlZoom":        this.setControlVisible("zoom", this.config_.controlZoom_); break;
        //case "controlMeasure":     this.setControlVisible(this.config_.controlCompass_); break;
        case "controlScale":       this.setControlVisible("scale", this.config_.controlScale_); break;
        case "controlLayers":      this.setControlVisible("layers", this.config_.controlLayers_); break;
        case "controlSpace":       this.setControlVisible("space", this.config_.controlSpace_); break;
        case "controlLink":        this.setControlVisible("link", this.config_.controlLink_); break;
        case "controlLogo":        this.setControlVisible("logo", this.config_.controlLogo_); break;
    }
};

Melown.UI.prototype.tick = function(dirty_) {
    if (dirty_) {
        this.compass_.update();
        this.credits_.update();
        this.link_.updateLink();                
    }
};

Melown.UI.prototype["addControl"] = Melown.UI.prototype.addControl;
Melown.UI.prototype["removeControl"] = Melown.UI.prototype.removeControl;
Melown.UI.prototype["setControlHtml"] = Melown.UI.prototype.setControlHtml;
Melown.UI.prototype["setControlVisible"] = Melown.UI.prototype.setControlVisible;
Melown.UI.prototype["getControlVisible"] = Melown.UI.prototype.getControlVisible;
Melown.UI.prototype["getControlById"] = Melown.UI.prototype.getControlById;


/**
 * @constructor
 */
Melown.ControlMode = function(browser_) {
    this.browser_ = browser_;
    this.ui_ = browser_.ui_;
    this.mapControl_ = this.ui_.getMapControl();
    this.mapElement_ = this.mapControl_.getMapElement();
    this.altKey_ = false;
    this.shiftKey_ = false;
    this.ctrlKey_ = false;

    this.mapElement_.on('drag', this.onDrag.bind(this));
    //this.mapElement_.on('dragstart', this.onDragStart.bind(this));
    //this.mapElement_.on('dragend', this.onDragEnd.bind(this));
    this.mapElement_.on('mousedown', this.onDown.bind(this));
    this.mapElement_.on('mouseup', this.onUp.bind(this));
    this.mapElement_.on('mousewheel', this.onWheel.bind(this));
    this.mapElement_.on('keyup', this.onKeyUp.bind(this), window);
    this.mapElement_.on('keydown', this.onKeyDown.bind(this), window);
    this.mapElement_.on('keypress', this.onKeyPress.bind(this), window);
    this.browser_.on('tick', this.onTick.bind(this));

    this.controlModes_ = {};
    this.currentCotnrolMode_ = 'map-observer';

    // default control modes
    this.addControlMode('map-observer', new Melown.ControlMode.MapObserver(browser_));
    this.addControlMode('disabled', new Melown.ControlMode.Disabled());
    this.addControlMode('pano', new Melown.ControlMode.Pano(browser_));

    // use map observer mode as default
    this.setDefaultControlMode();
};

// Control Mode object interface keys
/** @const */ Melown_ControlMode_Drag = 'drag';
/** @const */ Melown_ControlMode_Down = 'down';
/** @const */ Melown_ControlMode_Up = 'up';
/** @const */ Melown_ControlMode_KeyUp = 'keyup';
/** @const */ Melown_ControlMode_KeyDown = 'keydown';
/** @const */ Melown_ControlMode_KeyPress = 'keypress';
/** @const */ Melown_ControlMode_Wheel = 'wheel';
/** @const */ Melown_ControlMode_Tick = 'tick';
/** @const */ Melown_ControlMode_Reset = 'reset';

// Public methods

Melown.ControlMode.prototype.addControlMode = function(id_, controller_) {
    if (typeof id_ !== 'string'
        || controller_ === null
        || typeof controller_ !== 'object') {
        throw new Error('Melown.ControlMode.addControlMode function has (String, Object) prototype.');
    }

    this.controlModes_[id_] = controller_;
};

Melown.ControlMode.prototype.removeControlMode = function(id_) {
    if (typeof id_ !== 'string') {
        throw new Error('Melown.ControlMode.removeControlMode function takes string as argument.');
    }
    if (id_ === this.currentCotnrolMode_) {
        throw new Error(id_ + ' control mode is in use. Can\'t be removed.');
    }

    delete this.controlModes_[id_];
    this.controlModes_[id_];
};

Melown.ControlMode.prototype.setCurrentControlMode = function(id_, options_) {
    var newMode_ = this.controlModes_[id_];
    if (newMode_ === null || typeof newMode_ !== 'object') {
        throw new Error ('Melown.ControlMode.setCurrentControlMode: Try tu use unregistered control mode ' + id_  + '.');
    }

    // set new mode
    this.currentControlMode_ = id_;

    // call reset
    if (typeof newMode_[Melown_ControlMode_Reset] === 'function') {
        newMode_[Melown_ControlMode_Reset](options_);
    }
};

Melown.ControlMode.prototype.setDefaultControlMode = function() {
    this.setCurrentControlMode('map-observer');
};

Melown.ControlMode.prototype.getCurrentControlMode = function() {
    return this.currentControlMode_;
};

// Event callbacks

Melown.ControlMode.prototype.onDrag = function(event_) {
    this._checkAutopilot();
    if (typeof this._currentController()[Melown_ControlMode_Drag]
        === 'function') {
        this._currentController()[Melown_ControlMode_Drag](event_);
    }
};

Melown.ControlMode.prototype.onDown = function(event_) {
    this._checkAutopilot();
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_Down]
        === 'function') {
        this._currentController()[Melown_ControlMode_Down](event_);
    }
};

Melown.ControlMode.prototype.onUp = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_Up]
        === 'function') {
        this._currentController()[Melown_ControlMode_Up](event_);
    }
};

Melown.ControlMode.prototype.onWheel = function(event_) {
    this._checkAutopilot();
    if (typeof this._currentController()[Melown_ControlMode_Wheel]
        === 'function') {
        this._currentController()[Melown_ControlMode_Wheel](event_);
    }
};

Melown.ControlMode.prototype.onKeyUp = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_KeyUp]
        === 'function') {
        this._currentController()[Melown_ControlMode_KeyUp](event_);
    }
};

Melown.ControlMode.prototype.onKeyDown = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_KeyDown]
        === 'function') {
        this._currentController()[Melown_ControlMode_KeyDown](event_);
    }
};

Melown.ControlMode.prototype.onKeyPress = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_KeyPress]
        === 'function') {
        this._currentController()[Melown_ControlMode_KeyPress](event_);
    }
};

Melown.ControlMode.prototype.onTick = function(event_) {
    if (typeof this._currentController()[Melown_ControlMode_Tick]
        === 'function') {
        event_.draggingState_ = this.mapElement_.getDraggingState();    
        this._currentController()[Melown_ControlMode_Tick](event_);
    }
};

Melown.ControlMode.prototype.getCurrentController = function() {
    return this.controlModes_[this.currentControlMode_];
};

// Private metod
Melown.ControlMode.prototype._updateModifierKeys = function(event_) {
    this.altKey_ = event_.getModifierKey("alt");
    this.shiftKey_ = event_.getModifierKey("shift");
    this.ctrlKey_ = event_.getModifierKey("ctrl");
    
    //console.log("alt:" + this.altKey_ + "  ctrl:" + this.ctrlKey_ + "  shift:" + this.shiftKey_);
};

Melown.ControlMode.prototype._currentController = function() {
    return this.controlModes_[this.currentControlMode_];
};

Melown.ControlMode.prototype._checkAutopilot = function() {
    if (this.browser_.autopilot_) {
        this.browser_.autopilot_.setAutorotate(0);
        this.browser_.autopilot_.setAutopan(0,0);
    }
};

/**
 * @constructor
 */
Melown.ControlMode.Disabled = function() {

};
/**
 * @constructor
 */
Melown.ControlMode.MapObserver = function(browser_) {
    this.browser_ = browser_;
    this.config_ = browser_.config_;
    
    this.coordsDeltas_ = [];
    this.orientationDeltas_ = [];
    this.viewExtentDeltas_ = [];

    this["drag"] = this.drag;
    this["wheel"] = this.wheel;
    this["tick"] = this.tick;
    this["reset"] = this.reset;
    this["keyup"] = this.keyup;
    this["keydown"] = this.keydown;
    this["keypress"] = this.keypress;
};

Melown.ControlMode.MapObserver.prototype.drag = function(event_) {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var coords_ = map_.getPositionCoords(pos_);
    var delta_ = event_.getDragDelta();
    var zoom_ = event_.getDragZoom(); 
    var azimuthDistance_ = this.getAzimuthAndDistance(delta_[0], delta_[1]);
    
    var modifierKey_ = (this.browser_.controlMode_.altKey_
               || this.browser_.controlMode_.shiftKey_
               || this.browser_.controlMode_.ctrlKey_);

    if (zoom_ != 0) {
        var factor_ = 1.0 + (zoom_ > 1.0 ? -1 : 1)*0.05;
        
        if (map_.getPositionViewMode(pos_) != "obj") {
            return;
        }
        
        this.viewExtentDeltas_.push(factor_);
        this.reduceFloatingHeight(0.8);
        
    } else if ((event_.getDragButton("left") && !modifierKey_)
        && this.config_.panAllowed_) { //pan
            
        if (map_.getPositionHeightMode(pos_) == "fix") {
            var pos2_ = map_.convertPositionHeightMode(pos_, "float", true);
            if (pos2_ != null) {
                pos_ = pos2_;
                this.setPosition(pos_);
            }
        } else {
            var fov_ = map_.getPositionFov(pos_);
            var fovCorrection_ = (fov_ > 0.01 && fov_ < 179) ? (1.0 / Math.tan(Melown.radians(fov_*0.5))) : 1.0;
            var azimuth_ = Melown.radians(azimuthDistance_[0]);
            var forward_ = [-Math.sin(azimuth_), //direction vector x
                            Math.cos(azimuth_), //direction vector y
                            azimuthDistance_[1] * fovCorrection_, azimuthDistance_[0], //distance and azimut
                            coords_[0], coords_[1]]; //coords
            
            this.coordsDeltas_.push(forward_);
            this.reduceFloatingHeight(0.9);
        }
    } else if ((event_.getDragButton("right") || modifierKey_) 
               && this.config_.rotationAllowed_) { //rotate
                   
        var sensitivity_ = 0.4;
        this.orientationDeltas_.push([-delta_[0] * sensitivity_,
                                      -delta_[1] * sensitivity_, 0]);
    }
};

Melown.ControlMode.MapObserver.prototype.wheel = function(event_) {
    var map_ = this.browser_.getMap();
    if (!map_ || !this.config_.zoomAllowed_) { 
        return;
    }

    var pos_ = map_.getPosition();
    var delta_ = event_.getWheelDelta();
    var factor_ = 1.0 + (delta_ > 0 ? -1 : 1)*0.05;
    
    if (map_.getPositionViewMode(pos_) != "obj") {
        return;
    }
    
    this.viewExtentDeltas_.push(factor_);
    this.reduceFloatingHeight(0.8);
};

Melown.ControlMode.MapObserver.prototype.keyup = function(event_) {
};

Melown.ControlMode.MapObserver.prototype.keydown = function(event_) {
};

Melown.ControlMode.MapObserver.prototype.keypress = function(event_) {
};

Melown.ControlMode.MapObserver.prototype.setPosition = function(pos_) {
    pos_ = Melown.constrainMapPosition(this.browser_, pos_);
    var map_ = this.browser_.getMap();
    map_.setPosition(pos_);
    //console.log(JSON.stringify(pos_));
};

Melown.ControlMode.MapObserver.prototype.reduceFloatingHeight = function(factor_) {
    var map_ = this.browser_.getMap();
    var pos_ = map_.getPosition();
    var coords_ = map_.getPositionCoords(pos_);
    
    if (map_.getPositionHeightMode(pos_) == "float" &&
        map_.getPositionViewMode(pos_) == "obj") {
        if (coords_[2] != 0) {
            coords_[2] *= factor_;

            if (Math.abs(coords_[2]) < 0.1) {
                coords_[2] = 0;
            }

            pos_ = map_.setPositionCoords(pos_, coords_);
            this.setPosition(pos_);
        }
    }
};

Melown.ControlMode.MapObserver.prototype.isNavigationSRSProjected = function() {
    var map_ = this.browser_.getMap();
    var rf_ = map_.getReferenceFrame();
    var srs_ = map_.getSrsInfo(rf_["navigationSrs"]);
    return (srs_) ? (srs_["type"] == "projected") : false; 
};

Melown.ControlMode.MapObserver.prototype.getAzimuthAndDistance = function(dx_, dy_) {
    var map_ = this.browser_.getMap();
    var pos_ = map_.getPosition();
    var viewExtent_ = map_.getPositionViewExtent(pos_);
    var fov_ = map_.getPositionFov(pos_)*0.5;

    var sensitivity_ = 0.5;
    var zoomFactor_ = ((viewExtent_ * Math.tan(Melown.radians(fov_))) / 800) * sensitivity_;
    dx_ *= zoomFactor_;
    dy_ *= zoomFactor_;

    var distance_ = Math.sqrt(dx_*dx_ + dy_*dy_);    
    var azimuth_ = Melown.degrees(Math.atan2(dx_, dy_)) + map_.getPositionOrientation(pos_)[0]; 
    
    return [azimuth_, distance_];
};

Melown.ControlMode.MapObserver.prototype.tick = function(event_) {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var update_ = false;
    var inertia_ = [0.8, 0.8, 0.7]; 

    //process coords deltas
    if (this.coordsDeltas_.length > 0) {
        var deltas_ = this.coordsDeltas_;
        var forward_ = [0,0];
        var coords_ = map_.getPositionCoords(pos_);
        
        //get foward vector form coord deltas    
        for (var i = 0; i < deltas_.length; i++) {
            var delta_ = deltas_[i];

            var coords2_ = [delta_[4], delta_[5]];
            
            var azimuth_ = delta_[3];
            azimuth_ += 0;
            azimuth_ = Melown.radians(azimuth_);

            forward_[0] += -Math.sin(azimuth_) * delta_[2];  
            forward_[1] += Math.cos(azimuth_) * delta_[2];

            delta_[2] *= inertia_[0];
            
            //remove zero deltas
            if (delta_[2] < 0.01) {
                deltas_.splice(i, 1);
                i--;
            }
        }
        
        var distance_ = Math.sqrt(forward_[0]*forward_[0] + forward_[1]*forward_[1]);
        var azimuth_ = Melown.degrees(Math.atan2(forward_[0], forward_[1]));
    
        //apply final azimuth and distance
        if (this.config_.navigationMode_ == "free") { 
            var correction_ = map_.getPositionOrientation(pos_)[0];
            pos_ = map_.movePositionCoordsTo(pos_, (this.isNavigationSRSProjected() ? -1 : 1) * azimuth_, distance_);
            correction_ = map_.getPositionOrientation(pos_)[0] - correction_;
            
        } else { // "azimuthal" 

            var correction_ = map_.getPositionOrientation(pos_)[0];
            pos_ = map_.movePositionCoordsTo(pos_, (this.isNavigationSRSProjected() ? -1 : 1) * azimuth_, distance_, (Math.abs(coords_[1]) < 75) ? 0 : 1);

            correction_ = map_.getPositionOrientation(pos_)[0] - correction_;
        }

        for (var i = 0; i < deltas_.length; i++) {
            var delta_ = deltas_[i];
            delta_[3] += correction_; 
        }

        update_ = true;
    }

    //process coords deltas
    if (this.orientationDeltas_.length > 0) {
        var deltas_ = this.orientationDeltas_;
        var orientation_ = map_.getPositionOrientation(pos_);
        
        //apply detals to current orientation    
        for (var i = 0; i < deltas_.length; i++) {
            var delta_ = deltas_[i];
            orientation_[0] += delta_[0];  
            orientation_[1] += delta_[1];
            orientation_[2] += delta_[2];
            delta_[0] *= inertia_[1];
            delta_[1] *= inertia_[1];
            delta_[2] *= inertia_[1];
            
            //remove zero deltas
            if (delta_[0]*delta_[0] + delta_[1]*delta_[1] + delta_[2]*delta_[2] < 0.1) {
                deltas_.splice(i, 1);
                i--;
            }
        }

        //apply final orintation
        // HACK
         pos_ = map_.setPositionOrientation(pos_, orientation_);
        update_ = true;
    }

    //process view extents deltas
    if (this.viewExtentDeltas_.length > 0) {
        var deltas_ = this.viewExtentDeltas_;
        var viewExtent_ = map_.getPositionViewExtent(pos_);
        
        //apply detals to current view extent    
        for (var i = 0; i < deltas_.length; i++) {
            viewExtent_ *= deltas_[i];
            deltas_[i] += (1 - deltas_[i]) * (1.0 - inertia_[2]);
            
            //remove zero deltas
            if (Math.abs(1 - deltas_[i]) < 0.001) {
                deltas_.splice(i, 1);
                i--;
            }
        }
        
        viewExtent_ = Math.max(1, viewExtent_);

        //apply final view extrent
        pos_ = map_.setPositionViewExtent(pos_, viewExtent_);
        update_ = true;
    }


    //set new position
    if (update_) {
        this.setPosition(pos_);    
        
            
    }
    
};

Melown.ControlMode.MapObserver.prototype.reset = function(config_) {
    this.coordsDeltas_ = [];
    this.orientationDeltas_ = [];
    this.viewExtentDeltas_ = [];
};


Melown.constrainMapPosition = function(browser_, pos_) {

    //reduce tilt whe you are far off the planet
    var map_ = browser_.getMap();

    if (map_.getPositionViewMode(pos_) == "obj") {
        var rf_ = map_.getReferenceFrame();
        var srs_ = map_.getSrsInfo(rf_["navigationSrs"]);
        
        var distance_ = map_.getPositionViewExtent(pos_) / Math.tan(Melown.radians(map_.getPositionFov(pos_)*0.5));
        
        if (srs_["a"]) {
            var factor_ = Math.min(distance_ / (srs_["a"]*0.5), 1.0);
            var maxTilt_ = 20 + ((-90) - 20) * factor_; 
            var minTilt_ = -90; 
            
            var o = map_.getPositionOrientation(pos_);
            
            if (o[1] > maxTilt_) {
                o[1] = maxTilt_;
            }
    
            if (o[1] < minTilt_) {
                o[1] = minTilt_;
            }
    
            pos_ = map_.setPositionOrientation(pos_, o);
        }
    }

    //do not allow camera under terrain
    var camPos_ = map_.getPositionCameraCoords(pos_, "float");
    var cameraConstrainDistance_ = 1;
    
    var hmax_ = Math.max(Math.min(4000,cameraConstrainDistance_), (distance_ * Math.tan(Melown.radians(3.0))));
    var cameraHeight_ = camPos_[2]; //this.cameraHeight() - this.cameraHeightOffset_ - this.cameraHeightOffset2_;

    if (cameraHeight_ < hmax_) {
        var o = map_.getPositionOrientation(pos_);

        var getFinalOrientation = (function(start_, end_, level_) {
            var value_ = (start_ + end_) * 0.5;

            if (level_ > 20) {
                return value_;
            } else {
                o[1] = value_;
                pos_ = map_.setPositionOrientation(pos_, o);

                if (map_.getPositionCameraCoords(pos_, "float")[2] < hmax_) {
                    return getFinalOrientation(start_, value_, level_+1);
                } else {
                    return getFinalOrientation(value_, end_, level_+1);
                }
            }

        });//.bind(this);

        o[1] = getFinalOrientation(-90, Math.min(-1, o[1]), 0);
        pos_ = map_.setPositionOrientation(pos_, o);
    }

    return pos_;
};


/**
 * @constructor
 */
Melown.ControlMode.Pano = function(browser_) {
    this.browser_ = browser_;
    this.config_ = null;

    this.center_ = [0, 0];
    this.dragging_ = false;
    this.velocity_ = [0, 0];

    this.impulse_ = [0, 0];

    this["drag"] = this.drag;
    this["down"] = this.drag;
    this["up"] = this.drag;
    this["wheel"] = this.wheel;
    this["tick"] = this.tick;
    this["reset"] = this.reset;
    this["keyup"] = this.keyup;
    this["keydown"] = this.keydown;
    this["keypress"] = this.keypress;
};

Melown.ControlMode.Pano.prototype.drag = function(event_) {
    if (!this.dragging_) {
        return;
    }

    var mouse_ = event_.getMouseCoords();
    var delta_ = [mouse_[0] - this.center_[0], mouse_[1] - this.center_[1]];
    var sensitivity_ = 0.008;
    this.velocity_[0] = delta_[0] * sensitivity_;
    this.velocity_[1] = delta_[1] * sensitivity_;

    this.impulse_[0] = delta_[0] * sensitivity_;
    this.impulse_[1] = delta_[1] * sensitivity_;
};

Melown.ControlMode.Pano.prototype.down = function(event_) {
    if (event_.getMouseButton() === 'left') {
        this.center_ = event_.getMouseCoords();
        this.dragging_ = true;
    }
};

Melown.ControlMode.Pano.prototype.up = function(event_) {
    if (event_.getMouseButton() === 'left') {
        this.dragging_ = false;
    }
};

Melown.ControlMode.Pano.prototype.wheel = function(event_) {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var delta_ = event_.getWheelDelta();

    var factor_ = (delta_ > 0 ? -1 : 1) * 1;
    pos_[9] = Melown.clamp(pos_[9] + factor_, 1, 179);

    map_.setPosition(pos_);
};

Melown.ControlMode.Pano.prototype.keyup = function(event_) {
};

Melown.ControlMode.Pano.prototype.keydown = function(event_) {
};

Melown.ControlMode.Pano.prototype.keypress = function(event_) {
};

Melown.ControlMode.Pano.prototype.tick = function(event_) {
    if (this.velocity_[0] == 0.0 && this.velocity_[1] == 0.0) {
        return;
    }

    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }
    
    var pos_ = map_.getPosition();
    pos_[5] -= this.velocity_[0];
    pos_[6] -= this.velocity_[1];
    map_.setPosition(pos_);

    // friction
    if (this.dragging_) {
        return;
    }
    var step_ = 0.9;
    var treshold_ = 0.0005;

    if (Math.abs(this.velocity_[0]) < treshold_) {
        this.velocity_[0] = 0.0;
    } else {
        this.velocity_[0] *= step_;
    }

    if (Math.abs(this.velocity_[1]) < treshold_) {
        this.velocity_[1] = 0.0;
    } else {
        this.velocity_[1] *= step_;
    }

};

Melown.ControlMode.Pano.prototype.reset = function(config_) {
    this.config_ = config_;
};
/**
 * @constructor
 */
Melown.Browser = function(element_, config_) {
    this.initConfig();
    this.setConfigParams(config_, true);
    this.ui_ = new Melown.UI(this, (typeof element_ === "string") ? document.getElementById(element_) : element_);

    this.core_ = Melown.MapCore("melown-map", config_);

    if (this.core_ == null) {
        this.ui_.setControlDisplayState("fallback", true);
        return;
    }

    this.autopilot_ = new Melown.Autopilot(this);
    this.rois_ = new Melown.Rois(this);
    this.controlMode_ = new Melown.ControlMode(this, this.ui_);

    this.on("map-loaded", this.onMapLoaded.bind(this));
    this.on("map-unloaded", this.onMapUnloaded.bind(this));
    this.on("map-update", this.onMapUpdate.bind(this));

    this.on("tick", this.onTick.bind(this));
};

Melown.Browser.prototype.getCore = function() {
    return this.core_;
};

Melown.Browser.prototype.getMap = function() {
    return this.core_ ? this.core_.getMap() : null;
};

Melown.Browser.prototype.getRenderer = function() {
    return this.core_ ? this.core_.getRenderer() : null;
};

Melown.Browser.prototype.getProj4 = function() {
    return this.core_ ? this.core_.getProj4() : null;
};

Melown.Browser.prototype.getUI = function() {
    return this.ui_;
};

Melown.Browser.prototype.getControlMode = function() {
    return this.controlMode_;
};

Melown.Browser.prototype.on = function(name_, listener_) {
    this.core_.on(name_, listener_);
};

Melown.Browser.prototype.callListener = function(name_, event_) {
    this.core_.callListener(name_, event_);
};

Melown.Browser.prototype.onMapLoaded = function() {
    if (this.autopilot_) {
        this.autopilot_.setAutorotate(this.config_.autoRotate_);
        this.autopilot_.setAutopan(this.config_.autoPan_[0], this.config_.autoPan_[1]);
    }
};

Melown.Browser.prototype.onMapUnloaded = function() {

};

Melown.Browser.prototype.onMapUpdate = function() {
    this.dirty_ = true;

};

Melown.Browser.prototype.onTick = function() {
    this.autopilot_.tick();
    this.ui_.tick(this.dirty_);
    this.dirty_ = false;
};



Melown.Browser.prototype.initConfig = function(data_) {
    this.config_ = {
        panAllowed_ : true,
        rotationAllowed_ : true,
        zoomAllowed_ : true,
        inertia_ : 1.1,
        navigationMode_ : "free",
        controlCompass_ : true,
        controlZoom_ : true,
        controlSpace_ : true,
        controlMeasure_ : false,
        controlScale_ : true,
        controlLayers_ : false,
        autoRotate_ : 0,
        autoPan_ : [0,0]
    };
};

Melown.Browser.prototype.setConfigParams = function(params_, ignoreCore_) {
    if (typeof params_ === "object" && params_ !== null) {
        for (var key_ in params_) {
            this.setConfigParam(key_, params_[key_]);
        }
    }
};

Melown.Browser.prototype.updateUI = function(key_) {
    if (this.ui_ == null) {
        return;
    }

    this.ui_.setParam(key_);
};

Melown.Browser.prototype.setConfigParam = function(key_, value_, ignoreCore_) {
    switch (key_) {
        case "pos":                
        case "position":           this.config_.position_ = value_;                                           break;
        case "view":               this.config_.view_ = value_;                                               break;
        case "panAllowed":         this.config_.panAllowed_ = Melown.Utils.validateBool(value_, true);        break;
        case "rotationAllowed":    this.config_.rotationAllowed_ = Melown.Utils.validateBool(value_, true);   break;
        case "zoomAllowed":        this.config_.zoomAllowed_ = Melown.Utils.validateBool(value_, true);       break;
        case "inertia":            this.config_.inertia_ = Melown.Utils.validateNumber(value_, 0, 0.99, 0.9); break;
        case "navigationMode":     this.config_.navigationMode_ = value_;                                     break;
        case "controlCompass":     this.config_.controlCompass_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);   break;
        case "controlZoom":        this.config_.controlZoom_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);      break;
        case "controlMeasure":     this.config_.controlMeasure_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);  break;
        case "controlScale":       this.config_.controlScale_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);     break;
        case "controlLayers":      this.config_.controlLayers_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);   break;
        case "controlSpace":       this.config_.controlSpace_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);    break;
        case "controlLink":        this.config_.controlLink_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);     break;
        case "controlLogo":        this.config_.controlLogo_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);     break;
        case "rotate":             this.config_.autoRotate_ = Melown.Utils.validateNumber(value_, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 0); break;
        case "pan":
        
                if (Array.isArray(value_) && value_.length == 2){
                    this.config_.autoPan_ = [
                        Melown.Utils.validateNumber(value_[0], Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 0),
                        Melown.Utils.validateNumber(value_[1], -360, 360, 0)
                    ];
                }
        
            break;

    }

    if (ignoreCore_ == true) {
        if (key_.indexOf("map") == 0 && this.core_.getMap()) {
            this.core_.getMap().setConfigParam(key_, value_);
        }

        if (key_.indexOf("renderer") == 0) {
            this.core_.getRenderer().setConfigParam(key_, value_);
        }
    }
};

Melown.Browser.prototype.getConfigParam = function(key_) {
    switch (key_) {
        case "pos":
        case "position":           return this.config_.position_;
        case "view":               return this.config_.view_;
        case "panAllowed":         return this.config_.panAllowed_;
        case "rotationAllowed":    return this.config_.rotationAllowed_;
        case "zoomAllowed":        return this.config_.zoomAllowed_;
        case "inertia":            return this.config_.inertia_;
        case "navigationMode":     return this.config_.navigationMode_;
        case "controlCompass":     return this.config_.controlCompass_;
        case "controlZoom":        return this.config_.controlZoom_;
        case "controlMeasure":     return this.config_.controlMeasure_;
        case "controlScale":       return this.config_.controlScale_;
        case "controlLayers":      return this.config_.controlLayers_;
        case "controlSpace":       return this.config_.controlSpace_;
        case "controlLink":        return this.config_.controlLink_;
        case "controlLogo":        return this.config_.controlLogo_;
        case "rotate":             return this.config_.autoRotate_;
        case "pan":                return this.config_.autoPan_;
    }

    if (ignoreCore_ == true) {
        if (key_.indexOf("map") == 0 && this.core_.getMap()) {
            return this.core_.getMap().getConfigParam(key_, value_);
        }

        if (key_.indexOf("renderer") == 0) {
            return this.core_.getRenderer().getConfigParam(key_, value_);
        }
    }
};



Melown.MapBrowser = function(element_, config_) {
    var interface_ = new Melown.BrowserInterface(element_, config_);
    return interface_.core_ ? interface_ : null;
};

/**
 * @constructor
 */
Melown.BrowserInterface = function(element_, config_) {
    this.browser_ = new Melown.Browser(element_, config_);
    this.core_ = this.browser_.getCore();
    this.map_ = null;//this.core_.getMap();
    this.ui_ = this.browser_.ui_;
    this.autopilot_ = this.browser_.autopilot_;
    this.core_.on("map-loaded", (function(){ this.map_ = this.core_.getMap(); }).bind(this));
    this.core_.on("map-unloaded", (function(){ this.map_ = null; }).bind(this));    
};

Melown.BrowserInterface.prototype.getRenderer = function() {
    return this.core_.getRenderer();
};

Melown.BrowserInterface.prototype.getProj4 = function() {
    return this.core_.getProj4();
};

Melown.BrowserInterface.prototype.getUI = function() {
    return this.ui_;
};

Melown.BrowserInterface.prototype.setControlMode = function(mode_) {
    this.browser_.controlMode_ = mode_;
    return this;    
};

Melown.BrowserInterface.prototype.getControlMode = function() {
    return this.browser_.controlMode_;
};

Melown.BrowserInterface.prototype.setPosition = function(position_) {
    if(!this.map_) return;
    this.map_.setPosition(position_);
    return this;    
};

Melown.BrowserInterface.prototype.getPosition = function() {
    if(!this.map_) return;
    return this.map_.getPosition();
};

Melown.BrowserInterface.prototype.getPositionCredits = function() {
    if(!this.map_) return;
    return this.map_.getCurrentCredits();
};

Melown.BrowserInterface.prototype.setView = function(view_) {
    if(!this.map_) return;
    this.map_.setView(view_);
    return this;    
};

Melown.BrowserInterface.prototype.getView = function() {
    if(!this.map_) return;
    return this.map_.getView();
};

Melown.BrowserInterface.prototype.getCredits = function() {
    if(!this.map_) return;
    return this.map_.getCredits();
};

Melown.BrowserInterface.prototype.getCreditsInfo = function(creditId_) {
    if(!this.map_) return;
    var credit_ = this.map_.getCredit(creditId_);
    return (credit_ != null) ? credit_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getViews = function() {
    if(!this.map_) return;
    return this.map_.getMapViews();
};

Melown.BrowserInterface.prototype.getViewInfo = function(viewId_) {
    if(!this.map_) return;
    var view_ = this.map_.getMapView(viewId_);
    return (view_ != null) ? view_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getBoundLayers = function() {
    if(!this.map_) return;
    return this.map_.getBoundLayers();
};

Melown.BrowserInterface.prototype.getBoundLayerInfo = function(layerId_) {
    if(!this.map_) return;
    var layer_ = this.map_.getBoundLayer(layerId_);
    return (layer_ != null) ? layer_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getFreeLayers = function() {
    if(!this.map_) return;
    return this.map_.getFreeLayers();
};

Melown.BrowserInterface.prototype.getFreeLayerInfo = function(layerId_) {
    if(!this.map_) return;
    var layer_ = this.map_.getFreeLayer(layerId_);
    return (layer_ != null) ? layer_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getSurfaces = function() {
    if(!this.map_) return;
    return this.map_.getSurfaces();
};

Melown.BrowserInterface.prototype.getSurfaceInfo = function(surfaceId_) {
    if(!this.map_) return;
    var surface_ = this.map_.getFreeLayer(surfaceId_);
    return (surface_ != null) ? surface_.getInfo() : null;
};

Melown.BrowserInterface.prototype.getSrses = function() {
    if(!this.map_) return;
    return this.map_.getSrses();
};

Melown.BrowserInterface.prototype.getSrsInfo = function(srsId_) {
    if(!this.map_) return;
    return this.map_.getSrsInfo(srsId_);
};

Melown.BrowserInterface.prototype.getReferenceFrame = function() {
    if(!this.map_) return;
    return this.map_.getReferenceFrame();
};

Melown.BrowserInterface.prototype.convertPositionViewMode = function(position_, mode_) {
    if(!this.map_) return;
    return this.map_.convertPositionViewMode(position_, mode_);
};

Melown.BrowserInterface.prototype.convertPositionHeightMode = function(position_, mode_) {
    if(!this.map_) return;
    return this.map_.convertPositionHeightMode(position_, mode_);
};

Melown.BrowserInterface.prototype.convertCoords = function(sourceSrs_, destinationSrs_, coords_) {
    if(!this.map_) return;
    return this.map_.convertCoords(sourceSrs_, destinationSrs_, coords_);
};

Melown.BrowserInterface.prototype.convertCoordsFromNavToPhys = function(coords_, heightMode_, lod_) {
    if(!this.map_) return;
    return this.map_.convertCoordsFromNavToPhys(coords_, heightMode_, lod_);
};

Melown.BrowserInterface.prototype.convertCoordsFromNavToCanvas = function(coords_, heightMode_, lod_) {
    if(!this.map_) return;
    return this.map_.convertCoordsFromNavToCanvas(coords_, heightMode_, lod_);
};

Melown.BrowserInterface.prototype.convertCoordsFromPhysToCanvas = function(coords_) {
    if(!this.map_) return;
    return this.map_.convertCoordsFromPhysToCanvas(coords_);
};

Melown.BrowserInterface.prototype.convertCoordsFromNavToCameraSpace = function(coords_, heightMode_, lod_) {
    if(!this.map_) return;
    return this.map_.convertCoordsFromNavToCameraSpace(coords_, heightMode_, lod_);
};

Melown.BrowserInterface.prototype.convertCoordsFromPhysToCameraSpace = function(coords_, heightMode_, lod_) {
    if(!this.map_) return;
    return this.map_.convertCoordsFromPhysToCameraSpace(coords_, heightMode_, lod_);
};

Melown.BrowserInterface.prototype.clonePosition = function(position_) {
    if(!this.map_) return;
    return this.map_.clonePosition(position_);
};

Melown.BrowserInterface.prototype.arePositionsSame = function(position_, position2_) {
    if(!this.map_) return;
    return this.map_.arePositionsSame(position_, position2_);
};

Melown.BrowserInterface.prototype.setPositionCoords = function(position_, coords_) {
    if(!this.map_) return;
    return this.map_.setPositionCoords(position_, coords_);
};

Melown.BrowserInterface.prototype.getPositionCoords = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionCoords(position_);
};

Melown.BrowserInterface.prototype.setPositionHeight = function(position_, height_) {
    if(!this.map_) return;
    return this.map_.setPositionHeight(position_, height_);
};

Melown.BrowserInterface.prototype.getPositionHeight = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionHeight(position_);
};

Melown.BrowserInterface.prototype.setPositionOrientation = function(position_, orientation_) {
    if(!this.map_) return;
    return this.map_.setPositionOrientation(position_);
};

Melown.BrowserInterface.prototype.getPositionOrientation = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionOrientation(position_);
};

Melown.BrowserInterface.prototype.setPositionViewExtent = function(position_, extent_) {
    if(!this.map_) return;
    return this.map_.setPositionViewExtent(position_, extent_);
};

Melown.BrowserInterface.prototype.getPositionViewExtent = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionViewExtent(position_);
};

Melown.BrowserInterface.prototype.setPositionFov = function(position_, fov_) {
    if(!this.map_) return;
    return this.map_.setPositionFov(position_, fov_);
};

Melown.BrowserInterface.prototype.getPositionFov = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionFov(position_);
};

Melown.BrowserInterface.prototype.getPositionViewMode = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionViewMode(position_);
};

Melown.BrowserInterface.prototype.getPositionHeigthMode = function(position_) {
    if(!this.map_) return;
    return this.map_.getPositionHeightMode(position_);
};

Melown.BrowserInterface.prototype.getPositionCanvasCoords = function(position_, lod_) {
    if(!this.map_) return;
    return this.map_.getPositionCanvasCoords(position_, lod_);
};

Melown.BrowserInterface.prototype.getPositionCameraCoords = function(position_, mode_) {
    if(!this.map_) return;
    return this.map_.getPositionCameraCoords(position_, mode_);
};

Melown.BrowserInterface.prototype.movePositionCoordsTo = function(position_, azimuth_, distance_) {
    if(!this.map_) return;
    return this.map_.movePositionCoordsTo(position_, azimuth_, distance_);
};

Melown.BrowserInterface.prototype.getSurfaceHeight = function(coords_, precision_) {
    if(!this.map_) return;
    return this.map_.getSurfaceHeight(coords_, precision_);
};

Melown.BrowserInterface.prototype.getDistance = function(coords_, coords2_, includingHeight_) {
    if(!this.map_) return;
    return this.map_.getDistance(coords_, coords2_, includingHeight_);
};

Melown.BrowserInterface.prototype.getAzimuthCorrection = function(coords_, coords2_) {
    if(!this.map_) return;
    return this.map_.getAzimuthCorrection(coords_, coords2_);
};

Melown.BrowserInterface.prototype.getCameraInfo = function() {
    if(!this.map_) return;
    return this.map_.getCameraInfo();
};

Melown.BrowserInterface.prototype.isPointInsideCameraFrustum = function(point_) {
    if(!this.map_) return;
    return this.map_.isPointInsideCameraFrustum(point_);
};

Melown.BrowserInterface.prototype.isBBoxInsideCameraFrustum = function(bbox_) {
    if(!this.map_) return;
    return this.map_.isBBoxInsideCameraFrustum(bbox_);
};

Melown.BrowserInterface.prototype.generateTrajectory = function(position_, position2_, options_) {
    if(!this.map_) return;
    return this.map_.generateTrajectory(position_, position2_, options_);
};

Melown.BrowserInterface.prototype.redraw = function() {
    if(!this.map_) return;
    this.map_.redraw();
    return this;    
};

Melown.BrowserInterface.prototype.addRenderSlot = function(id_, callback_, enabled_) {
    if(!this.map_) return;
    return this.map_.addRenderSlot(id_, callback_, enabled_);
};
 
Melown.BrowserInterface.prototype.moveRenderSlotBefore = function(whichId_, whereId_) {
    if(!this.map_) return;
    this.map_.moveRenderSlotBefore(whichId_, whereId_);
    return this;    
};
 
Melown.BrowserInterface.prototype.moveRenderSlotAfter = function(whichId_, whereId_) {
    if(!this.map_) return;
    this.map_.moveRenderSlotAfter(whichId_, whereId_);
    return this;    
};

Melown.BrowserInterface.prototype.removeRenderSlot = function(id_) {
    if(!this.map_) return;
    this.map_.removeRenderSlot(id_);
    return this;    
};

Melown.BrowserInterface.prototype.setRenderSlotEnabled = function(id_, state_) {
    if(!this.map_) return;
    this.map_.setRenderSlotEnabled(id_, state_);
    return this;    
};
 
Melown.BrowserInterface.prototype.getRenderSlotEnabled = function(id_) {
    if(!this.map_) return;
    return this.map_.getRenderSlotEnabled(id_);
};
 
Melown.BrowserInterface.prototype.setLoaderSuspended = function(state_) {
    if(!this.map_) return;
    this.map_.setLoaderSuspended(state_);
    return this;    
};

Melown.BrowserInterface.prototype.getLoaderSuspended = function() {
    if(!this.map_) return;
    return this.map_.getLoaderSuspended();
};
 
Melown.BrowserInterface.prototype.getGpuCache = function() {
    if(!this.map_) return;
    return this.map_.getGpuCache();
};

Melown.BrowserInterface.prototype.getHitCoords = function(screenX_, screenY_, mode_, lod_) {
    if(!this.map_) return;
    return this.map_.getHitCoords(screenX_, screenY_, mode_, lod_);
};

Melown.BrowserInterface.prototype.flyTo = function(position_, options_) {
    if(!this.map_) return;
    this.autopilot_.flyTo(position_, options_); 
    return this;    
};

Melown.BrowserInterface.prototype.generateTrajectory = function(p1_, p2_, options_) {
    if(!this.map_) return;
    return this.map_.generateTrajectory(p1_, p2_, options_);
};

Melown.BrowserInterface.prototype.generatePIHTrajectory = function(position_, azimuth_, distance_, options_) {
    if(!this.map_) return;
    return this.map_.generatePIHTrajectory(position_, azimuth_, distance_, options_);
};

Melown.BrowserInterface.prototype.flyTrajectory = function(trajectory_, sampleDuration_) {
    if(!this.map_) return;
    this.autopilot_.flyTrajectory(trajectory_, sampleDuration_); 
    return this;    
};

Melown.BrowserInterface.prototype.cancelFlight = function() {
    if(!this.map_) return;
    this.autopilot_.cancelFlight(); 
    return this;    
}; 

Melown.BrowserInterface.prototype.setAutorotate = function(speed_) {
    if(!this.map_) return;
    this.autopilot_.setAutorotate(speed_);
    return this;
};

Melown.BrowserInterface.prototype.getAutorotate = function() {
    if(!this.map_) return;
    return this.autopilot_.getAutorotate();
};

Melown.BrowserInterface.prototype.setAutopan = function(speed_, azimuth_) {
    if(!this.map_) return;
    this.autopilot_.setAutopan(speed_, azimuth_);
    return this;
};

Melown.BrowserInterface.prototype.getAutopan = function() {
    if(!this.map_) return;
    return this.autopilot_.getAutopan();
};

Melown.BrowserInterface.prototype.on = function(eventName_, call_) {
    this.core_.on(eventName_, call_);
    return this;    
};

Melown.BrowserInterface.prototype.getMapElement = function() {
    return this.ui_.getMapControl().getMapElement();
};

Melown.BrowserInterface.prototype.getControl = function(id_) {
    return this.ui_.getControlById(id_);
};

Melown.BrowserInterface.prototype.addControl = function(id_, html_, visible_) {
    return this.ui_.addControl(id_, html_, visible_);
};

Melown.BrowserInterface.prototype.removeControl = function(id_) {
    this.ui_.removeControl(id_);
    return this;    
};

Melown.BrowserInterface.prototype.setParams = function(params_) {
    this.setConfigParams(params_);
    return this;
};

Melown.BrowserInterface.prototype.setParam = function(key_, value_) {
    this.setConfigParam(key_, value_);
    return this;
};

Melown.BrowserInterface.prototype.getParam = function(key_) {
    return this.getConfigParam(key_, value_);
};

Melown.getBrowserVersion = function() {
    return "0.1";
};

//prevent minification
Melown["MapBrowser"] = Melown.MapBrowser;
Melown.BrowserInterface.prototype["getRenderer"] = Melown.BrowserInterface.prototype.getRenderer; 
Melown.BrowserInterface.prototype["getProj4"] = Melown.BrowserInterface.prototype.getProj4; 
Melown.BrowserInterface.prototype["getUI"] = Melown.BrowserInterface.prototype.getUI; 
Melown.BrowserInterface.prototype["setControlMode"] = Melown.BrowserInterface.prototype.setControlMode;
Melown.BrowserInterface.prototype["getControlMode"] = Melown.BrowserInterface.prototype.getControlMode;
Melown.BrowserInterface.prototype["setPosition"] = Melown.BrowserInterface.prototype.setPosition;
Melown.BrowserInterface.prototype["getPosition"] = Melown.BrowserInterface.prototype.getPosition;
Melown.BrowserInterface.prototype["getCurrentCredits"] = Melown.BrowserInterface.prototype.getCurrentCredits; 
Melown.BrowserInterface.prototype["setView"] = Melown.BrowserInterface.prototype.setView; 
Melown.BrowserInterface.prototype["getView"] = Melown.BrowserInterface.prototype.getView; 
Melown.BrowserInterface.prototype["getCredits"] = Melown.BrowserInterface.prototype.getCredits; 
Melown.BrowserInterface.prototype["getCreditsInfo"] = Melown.BrowserInterface.prototype.getCreditsInfo; 
Melown.BrowserInterface.prototype["getViews"] = Melown.BrowserInterface.prototype.getViews; 
Melown.BrowserInterface.prototype["getViewInfo"] = Melown.BrowserInterface.prototype.getViewInfo; 
Melown.BrowserInterface.prototype["getBoundLayers"] = Melown.BrowserInterface.prototype.getBoundLayers; 
Melown.BrowserInterface.prototype["getBoundLayerInfo"] = Melown.BrowserInterface.prototype.getBoundLayerInfo; 
Melown.BrowserInterface.prototype["getFreeLayers"] = Melown.BrowserInterface.prototype.getFreeLayers; 
Melown.BrowserInterface.prototype["getFreeLayerInfo"] = Melown.BrowserInterface.prototype.getFreeLayerInfo; 
Melown.BrowserInterface.prototype["getSurfaces"] = Melown.BrowserInterface.prototype.getSurfaces; 
Melown.BrowserInterface.prototype["getSurfaceInfo"] = Melown.BrowserInterface.prototype.getSurfaceInfo; 
Melown.BrowserInterface.prototype["getSrses"] = Melown.BrowserInterface.prototype.getSrses; 
Melown.BrowserInterface.prototype["getSrsInfo"] = Melown.BrowserInterface.prototype.getSrsInfo; 
Melown.BrowserInterface.prototype["getReferenceFrame"] = Melown.BrowserInterface.prototype.getReferenceFrame; 
Melown.BrowserInterface.prototype["convertPositionViewMode"] = Melown.BrowserInterface.prototype.convertPositionViewMode; 
Melown.BrowserInterface.prototype["convertPositionHeightMode"] = Melown.BrowserInterface.prototype.convertPositionHeightMode; 
Melown.BrowserInterface.prototype["convertCoords"] = Melown.BrowserInterface.prototype.convertCoords; 
Melown.BrowserInterface.prototype["convertCoordsFromNavToCanvas"] = Melown.BrowserInterface.prototype.convertCoordsFromNavToCanvas; 
Melown.BrowserInterface.prototype["convertCoordsFromPhysToCanvas"] = Melown.BrowserInterface.prototype.convertCoordsFromPhysToCanvas; 
Melown.BrowserInterface.prototype["convertCoordsFromNavToCameraSpace"] = Melown.BrowserInterface.prototype.convertCoordsFromNavToCameraSpace;
Melown.BrowserInterface.prototype["convertCoordsFromPhysToCameraSpace"] = Melown.BrowserInterface.prototype.convertCoordsFromPhysToCameraSpace;
Melown.BrowserInterface.prototype["clonePosition"] = Melown.BrowserInterface.prototype.clonePosition; 
Melown.BrowserInterface.prototype["arePositionsSame"] = Melown.BrowserInterface.prototype.arePositionsSame; 
Melown.BrowserInterface.prototype["setPositionCoords"] = Melown.BrowserInterface.prototype.setPositionCoords; 
Melown.BrowserInterface.prototype["getPositionCoords"] = Melown.BrowserInterface.prototype.getPositionCoords; 
Melown.BrowserInterface.prototype["setPositionHeight"] = Melown.BrowserInterface.prototype.setPositionHeight; 
Melown.BrowserInterface.prototype["getPositionHeight"] = Melown.BrowserInterface.prototype.getPositionHeight; 
Melown.BrowserInterface.prototype["setPositionOrientation"] = Melown.BrowserInterface.prototype.setPositionOrientation; 
Melown.BrowserInterface.prototype["getPositionOrientation"] = Melown.BrowserInterface.prototype.getPositionOrientation; 
Melown.BrowserInterface.prototype["setPositionViewExtent"] = Melown.BrowserInterface.prototype.setPositionViewExtent; 
Melown.BrowserInterface.prototype["getPositionViewExtent"] = Melown.BrowserInterface.prototype.getPositionViewExtent;
Melown.BrowserInterface.prototype["setPositionFov"] = Melown.BrowserInterface.prototype.setPositionFov; 
Melown.BrowserInterface.prototype["getPositionFov"] = Melown.BrowserInterface.prototype.getPositionFov; 
Melown.BrowserInterface.prototype["getPositionViewMode"] = Melown.BrowserInterface.prototype.getPositionViewMode; 
Melown.BrowserInterface.prototype["getPositionHeigthMode"] = Melown.BrowserInterface.prototype.getPositionHeigthMode; 
Melown.BrowserInterface.prototype["getPositionCanvasCoords"] = Melown.BrowserInterface.prototype.getPositionCanvasCoords; 
Melown.BrowserInterface.prototype["getPositionCameraCoords"] = Melown.BrowserInterface.prototype.getPositionCameraCoords; 
Melown.BrowserInterface.prototype["movePositionCoordsTo"] = Melown.BrowserInterface.prototype.movePositionCoordsTo; 
Melown.BrowserInterface.prototype["getSurfaceHeight"] = Melown.BrowserInterface.prototype.getSurfaceHeight;
Melown.BrowserInterface.prototype["getDistance"] = Melown.BrowserInterface.prototype.getDistance;
Melown.BrowserInterface.prototype["getAzimuthCorrection"] = Melown.BrowserInterface.prototype.getAzimuthCorrection; 
Melown.BrowserInterface.prototype["getCameraInfo"] = Melown.BrowserInterface.prototype.getCameraInfo;
Melown.BrowserInterface.prototype["isPointInsideCameraFrustum"] = Melown.BrowserInterface.prototype.isPointInsideCameraFrustum;
Melown.BrowserInterface.prototype["isBBoxInsideCameraFrustum"] = Melown.BrowserInterface.prototype.isBBoxInsideCameraFrustum;
Melown.BrowserInterface.prototype["generateTrajectory"] = Melown.BrowserInterface.prototype.generateTrajectory; 
Melown.BrowserInterface.prototype["redraw"] = Melown.BrowserInterface.prototype.redraw;
Melown.BrowserInterface.prototype["addRenderSlot"] = Melown.BrowserInterface.prototype.addRenderSlot; 
Melown.BrowserInterface.prototype["moveRenderSlotBefore"] = Melown.BrowserInterface.prototype.moveRenderSlotBefore; 
Melown.BrowserInterface.prototype["moveRenderSlotAfter"] = Melown.BrowserInterface.prototype.moveRenderSlotAfter;
Melown.BrowserInterface.prototype["removeRenderSlot"] = Melown.BrowserInterface.prototype.removeRenderSlot;
Melown.BrowserInterface.prototype["setRenderSlotEnabled"] = Melown.BrowserInterface.prototype.setRenderSlotEnabled; 
Melown.BrowserInterface.prototype["getRenderSlotEnabled"] = Melown.BrowserInterface.prototype.getRenderSlotEnabled; 
Melown.BrowserInterface.prototype["setLoaderSuspended"] = Melown.BrowserInterface.prototype.setLoaderSuspended;
Melown.BrowserInterface.prototype["getLoaderSuspended"] = Melown.BrowserInterface.prototype.getLoaderSuspended; 
Melown.BrowserInterface.prototype["getGpuCache"] = Melown.BrowserInterface.prototype.getGpuCache;
Melown.BrowserInterface.prototype["getHitCoords"] = Melown.BrowserInterface.prototype.getHitCoords;
Melown.BrowserInterface.prototype["flyTo"] = Melown.BrowserInterface.prototype.flyTo; 
Melown.BrowserInterface.prototype["flyTrajectory"] = Melown.BrowserInterface.prototype.flyTrajectory; 
Melown.BrowserInterface.prototype["setAutorotate"] = Melown.BrowserInterface.prototype.setAutorotate; 
Melown.BrowserInterface.prototype["getAutorotate"] = Melown.BrowserInterface.prototype.getAutorotate; 
Melown.BrowserInterface.prototype["setAutopan"] = Melown.BrowserInterface.prototype.setAutopan; 
Melown.BrowserInterface.prototype["getAutopan"] = Melown.BrowserInterface.prototype.getAutopan; 
Melown.BrowserInterface.prototype["cancelFlight"] = Melown.BrowserInterface.prototype.cancelFlight; 
Melown.BrowserInterface.prototype["on"] = Melown.BrowserInterface.prototype.on; 
Melown.BrowserInterface.prototype["getMapElement"] = Melown.BrowserInterface.prototype.getMapElement; 
Melown.BrowserInterface.prototype["getControl"] = Melown.BrowserInterface.prototype.getControl; 
Melown.BrowserInterface.prototype["addControl"] = Melown.BrowserInterface.prototype.addControl; 
Melown.BrowserInterface.prototype["removeControl"] = Melown.BrowserInterface.prototype.removeControl; 
Melown.BrowserInterface.prototype["setParams"] = Melown.BrowserInterface.prototype.setParams; 
Melown.BrowserInterface.prototype["setParam"] = Melown.BrowserInterface.prototype.setParam; 
Melown.BrowserInterface.prototype["getParam"] = Melown.BrowserInterface.prototype.getParam; 
Melown["getBrowserVersion"] = Melown.getBrowserVersion; 

