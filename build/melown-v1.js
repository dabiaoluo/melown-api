!function(a){if("object"==typeof exports)module.exports=a();else if("function"==typeof define&&define.amd)define(a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b._mproj4_=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function Point(a,b,c){if(!(this instanceof Point))return new Point(a,b,c);if(Array.isArray(a))this.x=a[0],this.y=a[1],this.z=a[2]||0;else if("object"==typeof a)this.x=a.x,this.y=a.y,this.z=a.z||0;else if("string"==typeof a&&"undefined"==typeof b){var d=a.split(",");this.x=parseFloat(d[0],10),this.y=parseFloat(d[1],10),this.z=parseFloat(d[2],10)||0}else this.x=a,this.y=b,this.z=c||0;console.warn("_mproj4_.Point will be removed in version 3, use _mproj4_.toPoint")}var d=a("mgrs");Point.fromMGRS=function(a){return new Point(d.toPoint(a))},Point.prototype.toMGRS=function(a){return d.forward([this.x,this.y],a)},b.exports=Point},{mgrs:68}],2:[function(a,b,c){function Projection(a,b){if(!(this instanceof Projection))return new Projection(a);b=b||function(a){if(a)throw a};var c=d(a);if("object"!=typeof c)return void b(a);var f=g(c),h=Projection.projections.get(f.projName);h?(e(this,f),e(this,h),this.init(),b(null,this)):b(a)}var d=a("./parseCode"),e=a("./extend"),f=a("./projections"),g=a("./deriveConstants");Projection.projections=f,Projection.projections.start(),b.exports=Projection},{"./deriveConstants":33,"./extend":34,"./parseCode":37,"./projections":39}],3:[function(a,b,c){b.exports=function(a,b,c){var d,e,f,g=c.x,h=c.y,i=c.z||0;for(f=0;3>f;f++)if(!b||2!==f||void 0!==c.z)switch(0===f?(d=g,e="x"):1===f?(d=h,e="y"):(d=i,e="z"),a.axis[f]){case"e":c[e]=d;break;case"w":c[e]=-d;break;case"n":c[e]=d;break;case"s":c[e]=-d;break;case"u":void 0!==c[e]&&(c.z=d);break;case"d":void 0!==c[e]&&(c.z=-d);break;default:return null}return c}},{}],4:[function(a,b,c){var d=Math.PI/2,e=a("./sign");b.exports=function(a){return Math.abs(a)<d?a:a-e(a)*Math.PI}},{"./sign":21}],5:[function(a,b,c){var d=2*Math.PI,e=3.14159265359,f=a("./sign");b.exports=function(a){return Math.abs(a)<=e?a:a-f(a)*d}},{"./sign":21}],6:[function(a,b,c){b.exports=function(a){return Math.abs(a)>1&&(a=a>1?1:-1),Math.asin(a)}},{}],7:[function(a,b,c){b.exports=function(a){return 1-.25*a*(1+a/16*(3+1.25*a))}},{}],8:[function(a,b,c){b.exports=function(a){return.375*a*(1+.25*a*(1+.46875*a))}},{}],9:[function(a,b,c){b.exports=function(a){return.05859375*a*a*(1+.75*a)}},{}],10:[function(a,b,c){b.exports=function(a){return a*a*a*(35/3072)}},{}],11:[function(a,b,c){b.exports=function(a,b,c){var d=b*c;return a/Math.sqrt(1-d*d)}},{}],12:[function(a,b,c){b.exports=function(a,b,c,d,e){var f,g;f=a/b;for(var h=0;15>h;h++)if(g=(a-(b*f-c*Math.sin(2*f)+d*Math.sin(4*f)-e*Math.sin(6*f)))/(b-2*c*Math.cos(2*f)+4*d*Math.cos(4*f)-6*e*Math.cos(6*f)),f+=g,Math.abs(g)<=1e-10)return f;return NaN}},{}],13:[function(a,b,c){var d=Math.PI/2;b.exports=function(a,b){var c=1-(1-a*a)/(2*a)*Math.log((1-a)/(1+a));if(Math.abs(Math.abs(b)-c)<1e-6)return 0>b?-1*d:d;for(var e,f,g,h,i=Math.asin(.5*b),j=0;30>j;j++)if(f=Math.sin(i),g=Math.cos(i),h=a*f,e=Math.pow(1-h*h,2)/(2*g)*(b/(1-a*a)-f/(1-h*h)+.5/a*Math.log((1-h)/(1+h))),i+=e,Math.abs(e)<=1e-10)return i;return NaN}},{}],14:[function(a,b,c){b.exports=function(a,b,c,d,e){return a*e-b*Math.sin(2*e)+c*Math.sin(4*e)-d*Math.sin(6*e)}},{}],15:[function(a,b,c){b.exports=function(a,b,c){var d=a*b;return c/Math.sqrt(1-d*d)}},{}],16:[function(a,b,c){var d=Math.PI/2;b.exports=function(a,b){for(var c,e,f=.5*a,g=d-2*Math.atan(b),h=0;15>=h;h++)if(c=a*Math.sin(g),e=d-2*Math.atan(b*Math.pow((1-c)/(1+c),f))-g,g+=e,Math.abs(e)<=1e-10)return g;return-9999}},{}],17:[function(a,b,c){var d=1,e=.25,f=.046875,g=.01953125,h=.01068115234375,i=.75,j=.46875,k=.013020833333333334,l=.007120768229166667,m=.3645833333333333,n=.005696614583333333,o=.3076171875;b.exports=function(a){var b=[];b[0]=d-a*(e+a*(f+a*(g+a*h))),b[1]=a*(i-a*(f+a*(g+a*h)));var c=a*a;return b[2]=c*(j-a*(k+a*l)),c*=a,b[3]=c*(m-a*n),b[4]=c*a*o,b}},{}],18:[function(a,b,c){var d=a("./pj_mlfn"),e=1e-10,f=20;b.exports=function(a,b,c){for(var g=1/(1-b),h=a,i=f;i;--i){var j=Math.sin(h),k=1-b*j*j;if(k=(d(h,j,Math.cos(h),c)-a)*(k*Math.sqrt(k))*g,h-=k,Math.abs(k)<e)return h}return h}},{"./pj_mlfn":19}],19:[function(a,b,c){b.exports=function(a,b,c,d){return c*=b,b*=b,d[0]*a-c*(d[1]+b*(d[2]+b*(d[3]+b*d[4])))}},{}],20:[function(a,b,c){b.exports=function(a,b){var c;return a>1e-7?(c=a*b,(1-a*a)*(b/(1-c*c)-.5/a*Math.log((1-c)/(1+c)))):2*b}},{}],21:[function(a,b,c){b.exports=function(a){return 0>a?-1:1}},{}],22:[function(a,b,c){b.exports=function(a,b){return Math.pow((1-a)/(1+a),b)}},{}],23:[function(a,b,c){b.exports=function(a){var b={x:a[0],y:a[1]};return a.length>2&&(b.z=a[2]),a.length>3&&(b.m=a[3]),b}},{}],24:[function(a,b,c){var d=Math.PI/2;b.exports=function(a,b,c){var e=a*c,f=.5*a;return e=Math.pow((1-e)/(1+e),f),Math.tan(.5*(d-b))/e}},{}],25:[function(a,b,c){c.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},c.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},c.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},c.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},c.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},c.potsdam={towgs84:"606.0,23.0,413.0",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},c.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},c.hermannskogel={towgs84:"653.0,-212.0,449.0",ellipse:"bessel",datumName:"Hermannskogel"},c.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},c.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},c.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},c.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"},c.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},c.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},c.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},c.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"}},{}],26:[function(a,b,c){c.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"},c.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},c.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},c.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"},c.airy={a:6377563.396,b:6356256.91,ellipseName:"Airy 1830"},c.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},c.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},c.mod_airy={a:6377340.189,b:6356034.446,ellipseName:"Modified Airy"},c.andrae={a:6377104.43,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},c.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},c.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},c.bessel={a:6377397.155,rf:299.1528128,ellipseName:"Bessel 1841"},c.bess_nam={a:6377483.865,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},c.clrk66={a:6378206.4,b:6356583.8,ellipseName:"Clarke 1866"},c.clrk80={a:6378249.145,rf:293.4663,ellipseName:"Clarke 1880 mod."},c.clrk58={a:6378293.645208759,rf:294.2606763692654,ellipseName:"Clarke 1858"},c.CPM={a:6375738.7,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},c.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},c.engelis={a:6378136.05,rf:298.2566,ellipseName:"Engelis 1985"},c.evrst30={a:6377276.345,rf:300.8017,ellipseName:"Everest 1830"},c.evrst48={a:6377304.063,rf:300.8017,ellipseName:"Everest 1948"},c.evrst56={a:6377301.243,rf:300.8017,ellipseName:"Everest 1956"},c.evrst69={a:6377295.664,rf:300.8017,ellipseName:"Everest 1969"},c.evrstSS={a:6377298.556,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},c.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},c.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"},c.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"},c.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"},c.hough={a:6378270,rf:297,ellipseName:"Hough"},c.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},c.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"},c.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"},c.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"},c.new_intl={a:6378157.5,b:6356772.2,ellipseName:"New International 1967"},c.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},c.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},c.SEasia={a:6378155,b:6356773.3205,ellipseName:"Southeast Asia"},c.walbeck={a:6376896,b:6355834.8467,ellipseName:"Walbeck"},c.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"},c.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"},c.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"},c.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"},c.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}},{}],27:[function(a,b,c){c.greenwich=0,c.lisbon=-9.131906111111,c.paris=2.337229166667,c.bogota=-74.080916666667,c.madrid=-3.687938888889,c.rome=12.452333333333,c.bern=7.439583333333,c.jakarta=106.807719444444,c.ferro=-17.666666666667,c.brussels=4.367975,c.stockholm=18.058277777778,c.athens=23.7163375,c.oslo=10.722916666667},{}],28:[function(a,b,c){c.ft={to_meter:.3048},c["us-ft"]={to_meter:1200/3937}},{}],29:[function(a,b,c){function d(a,b,c){var d;return Array.isArray(c)?(d=g(a,b,c),3===c.length?[d.x,d.y,d.z]:[d.x,d.y]):g(a,b,c)}function e(a){return a instanceof f?a:a.oProj?a.oProj:f(a)}function _mproj4_(a,b,c,_dddd_){a=e(a);if(_dddd_) return a; var f,g=!1;return"undefined"==typeof b?(b=a,a=h,g=!0):("undefined"!=typeof b.x||Array.isArray(b))&&(c=b,b=a,a=h,g=!0),b=e(b),c?d(a,b,c):(f={forward:function(c){return d(a,b,c)},inverse:function(c){return d(b,a,c)},info:function(){return{a:b.a,b:b.b,ra:b.R_A,"proj-name":b.projName}}},g&&(f.oProj=b),f)}var f=a("./Proj"),g=a("./transform"),h=f("WGS84");b.exports=_mproj4_},{"./Proj":2,"./transform":66}],30:[function(a,b,c){var d=Math.PI/2,e=1,f=2,g=3,h=4,i=5,j=484813681109536e-20,k=1.0026,l=.3826834323650898,m=function(a){if(!(this instanceof m))return new m(a);if(this.datum_type=h,a){if(a.datumCode&&"none"===a.datumCode&&(this.datum_type=i),a.datum_params){for(var b=0;b<a.datum_params.length;b++)a.datum_params[b]=parseFloat(a.datum_params[b]);(0!==a.datum_params[0]||0!==a.datum_params[1]||0!==a.datum_params[2])&&(this.datum_type=e),a.datum_params.length>3&&(0!==a.datum_params[3]||0!==a.datum_params[4]||0!==a.datum_params[5]||0!==a.datum_params[6])&&(this.datum_type=f,a.datum_params[3]*=j,a.datum_params[4]*=j,a.datum_params[5]*=j,a.datum_params[6]=a.datum_params[6]/1e6+1)}this.datum_type=a.grids?g:this.datum_type,this.a=a.a,this.b=a.b,this.es=a.es,this.ep2=a.ep2,this.datum_params=a.datum_params,this.datum_type===g&&(this.grids=a.grids)}};m.prototype={compare_datums:function(a){return this.datum_type!==a.datum_type?!1:this.a!==a.a||Math.abs(this.es-a.es)>5e-11?!1:this.datum_type===e?this.datum_params[0]===a.datum_params[0]&&this.datum_params[1]===a.datum_params[1]&&this.datum_params[2]===a.datum_params[2]:this.datum_type===f?this.datum_params[0]===a.datum_params[0]&&this.datum_params[1]===a.datum_params[1]&&this.datum_params[2]===a.datum_params[2]&&this.datum_params[3]===a.datum_params[3]&&this.datum_params[4]===a.datum_params[4]&&this.datum_params[5]===a.datum_params[5]&&this.datum_params[6]===a.datum_params[6]:this.datum_type===g||a.datum_type===g?this.nadgrids===a.nadgrids:!0},geodetic_to_geocentric:function(a){var b,c,e,f,g,h,i,j=a.x,k=a.y,l=a.z?a.z:0,m=0;if(-d>k&&k>-1.001*d)k=-d;else if(k>d&&1.001*d>k)k=d;else if(-d>k||k>d)return null;return j>Math.PI&&(j-=2*Math.PI),g=Math.sin(k),i=Math.cos(k),h=g*g,f=this.a/Math.sqrt(1-this.es*h),b=(f+l)*i*Math.cos(j),c=(f+l)*i*Math.sin(j),e=(f*(1-this.es)+l)*g,a.x=b,a.y=c,a.z=e,m},geocentric_to_geodetic:function(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=1e-12,u=t*t,v=30,w=a.x,x=a.y,y=a.z?a.z:0;if(o=!1,b=Math.sqrt(w*w+x*x),c=Math.sqrt(w*w+x*x+y*y),b/this.a<t){if(o=!0,q=0,c/this.a<t)return r=d,void(s=-this.b)}else q=Math.atan2(x,w);e=y/c,f=b/c,g=1/Math.sqrt(1-this.es*(2-this.es)*f*f),j=f*(1-this.es)*g,k=e*g,p=0;do p++,i=this.a/Math.sqrt(1-this.es*k*k),s=b*j+y*k-i*(1-this.es*k*k),h=this.es*i/(i+s),g=1/Math.sqrt(1-h*(2-h)*f*f),l=f*(1-h)*g,m=e*g,n=m*j-l*k,j=l,k=m;while(n*n>u&&v>p);return r=Math.atan(m/Math.abs(l)),a.x=q,a.y=r,a.z=s,a},geocentric_to_geodetic_noniter:function(a){var b,c,e,f,g,h,i,j,m,n,o,p,q,r,s,t,u,v=a.x,w=a.y,x=a.z?a.z:0;if(v=parseFloat(v),w=parseFloat(w),x=parseFloat(x),u=!1,0!==v)b=Math.atan2(w,v);else if(w>0)b=d;else if(0>w)b=-d;else if(u=!0,b=0,x>0)c=d;else{if(!(0>x))return c=d,void(e=-this.b);c=-d}return g=v*v+w*w,f=Math.sqrt(g),h=x*k,j=Math.sqrt(h*h+g),n=h/j,p=f/j,o=n*n*n,i=x+this.b*this.ep2*o,t=f-this.a*this.es*p*p*p,m=Math.sqrt(i*i+t*t),q=i/m,r=t/m,s=this.a/Math.sqrt(1-this.es*q*q),e=r>=l?f/r-s:-l>=r?f/-r-s:x/q+s*(this.es-1),u===!1&&(c=Math.atan(q/r)),a.x=b,a.y=c,a.z=e,a},geocentric_to_wgs84:function(a){if(this.datum_type===e)a.x+=this.datum_params[0],a.y+=this.datum_params[1],a.z+=this.datum_params[2];else if(this.datum_type===f){var b=this.datum_params[0],c=this.datum_params[1],d=this.datum_params[2],g=this.datum_params[3],h=this.datum_params[4],i=this.datum_params[5],j=this.datum_params[6],k=j*(a.x-i*a.y+h*a.z)+b,l=j*(i*a.x+a.y-g*a.z)+c,m=j*(-h*a.x+g*a.y+a.z)+d;a.x=k,a.y=l,a.z=m}},geocentric_from_wgs84:function(a){if(this.datum_type===e)a.x-=this.datum_params[0],a.y-=this.datum_params[1],a.z-=this.datum_params[2];else if(this.datum_type===f){var b=this.datum_params[0],c=this.datum_params[1],d=this.datum_params[2],g=this.datum_params[3],h=this.datum_params[4],i=this.datum_params[5],j=this.datum_params[6],k=(a.x-b)/j,l=(a.y-c)/j,m=(a.z-d)/j;a.x=k+i*l-h*m,a.y=-i*k+l+g*m,a.z=h*k-g*l+m}}},b.exports=m},{}],31:[function(a,b,c){var d=1,e=2,f=3,g=5,h=6378137,i=.006694379990141316;b.exports=function(a,b,c){function j(a){return a===d||a===e}var k,l,m;if(a.compare_datums(b))return c;if(a.datum_type===g||b.datum_type===g)return c;var n=a.a,o=a.es,p=b.a,q=b.es,r=a.datum_type;if(r===f)if(0===this.apply_gridshift(a,0,c))a.a=h,a.es=i;else{if(!a.datum_params)return a.a=n,a.es=a.es,c;for(k=1,l=0,m=a.datum_params.length;m>l;l++)k*=a.datum_params[l];if(0===k)return a.a=n,a.es=a.es,c;r=a.datum_params.length>3?e:d}return b.datum_type===f&&(b.a=h,b.es=i),(a.es!==b.es||a.a!==b.a||j(r)||j(b.datum_type))&&(a.geodetic_to_geocentric(c),j(a.datum_type)&&a.geocentric_to_wgs84(c),j(b.datum_type)&&b.geocentric_from_wgs84(c),b.geocentric_to_geodetic(c)),b.datum_type===f&&this.apply_gridshift(b,1,c),a.a=n,a.es=o,b.a=p,b.es=q,c}},{}],32:[function(a,b,c){function d(a){var b=this;if(2===arguments.length){var c=arguments[1];"string"==typeof c?"+"===c.charAt(0)?d[a]=f(arguments[1]):d[a]=g(arguments[1]):d[a]=c}else if(1===arguments.length){if(Array.isArray(a))return a.map(function(a){Array.isArray(a)?d.apply(b,a):d(a)});if("string"==typeof a){if(a in d)return d[a]}else"EPSG"in a?d["EPSG:"+a.EPSG]=a:"ESRI"in a?d["ESRI:"+a.ESRI]=a:"IAU2000"in a?d["IAU2000:"+a.IAU2000]=a:console.log(a);return}}var e=a("./global"),f=a("./projString"),g=a("./wkt");e(d),b.exports=d},{"./global":35,"./projString":38,"./wkt":67}],33:[function(a,b,c){var d=a("./constants/Datum"),e=a("./constants/Ellipsoid"),f=a("./extend"),g=a("./datum"),h=1e-10,i=.16666666666666666,j=.04722222222222222,k=.022156084656084655;b.exports=function(a){if(a.datumCode&&"none"!==a.datumCode){var b=d[a.datumCode];b&&(a.datum_params=b.towgs84?b.towgs84.split(","):null,a.ellps=b.ellipse,a.datumName=b.datumName?b.datumName:a.datumCode)}if(!a.a){var c=e[a.ellps]?e[a.ellps]:e.WGS84;f(a,c)}return a.rf&&!a.b&&(a.b=(1-1/a.rf)*a.a),(0===a.rf||Math.abs(a.a-a.b)<h)&&(a.sphere=!0,a.b=a.a),a.a2=a.a*a.a,a.b2=a.b*a.b,a.es=(a.a2-a.b2)/a.a2,a.e=Math.sqrt(a.es),a.R_A&&(a.a*=1-a.es*(i+a.es*(j+a.es*k)),a.a2=a.a*a.a,a.b2=a.b*a.b,a.es=0),a.ep2=(a.a2-a.b2)/a.b2,a.k0||(a.k0=1),a.axis||(a.axis="enu"),a.datum||(a.datum=g(a)),a}},{"./constants/Datum":25,"./constants/Ellipsoid":26,"./datum":30,"./extend":34}],34:[function(a,b,c){b.exports=function(a,b){a=a||{};var c,d;if(!b)return a;for(d in b)c=b[d],void 0!==c&&(a[d]=c);return a}},{}],35:[function(a,b,c){b.exports=function(a){a("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),a("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),a("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),a.WGS84=a["EPSG:4326"],a["EPSG:3785"]=a["EPSG:3857"],a.GOOGLE=a["EPSG:3857"],a["EPSG:900913"]=a["EPSG:3857"],a["EPSG:102113"]=a["EPSG:3857"]}},{}],36:[function(a,b,c){var _mproj4_=a("./core");_mproj4_.defaultDatum="WGS84",_mproj4_.Proj=a("./Proj"),_mproj4_.WGS84=new _mproj4_.Proj("WGS84"),_mproj4_.Point=a("./Point"),_mproj4_.toPoint=a("./common/toPoint"),_mproj4_.defs=a("./defs"),_mproj4_.transform=a("./transform"),_mproj4_.mgrs=a("mgrs"),_mproj4_.version=a("../package.json").version,a("./includedProjections")(_mproj4_),b.exports=_mproj4_},{"../package.json":69,"./Point":1,"./Proj":2,"./common/toPoint":23,"./core":29,"./defs":32,"./includedProjections":"Pk/iAZ","./transform":66,mgrs:68}],37:[function(a,b,c){function d(a){return"string"==typeof a}function e(a){return a in i}function f(a){var b=["GEOGCS","GEOCCS","PROJCS","LOCAL_CS"];return b.reduce(function(b,c){return b+1+a.indexOf(c)},0)}function g(a){return"+"===a[0]}function h(a){return d(a)?e(a)?i[a]:f(a)?j(a):g(a)?k(a):void 0:a}var i=a("./defs"),j=a("./wkt"),k=a("./projString");b.exports=h},{"./defs":32,"./projString":38,"./wkt":67}],38:[function(a,b,c){var d=.017453292519943295,e=a("./constants/PrimeMeridian"),f=a("./constants/units");b.exports=function(a){var b={},c={};a.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).forEach(function(a){var b=a.split("=");b.push(!0),c[b[0].toLowerCase()]=b[1]});var g,h,i,j={proj:"projName",datum:"datumCode",rf:function(a){b.rf=parseFloat(a)},lat_0:function(a){b.lat0=a*d},lat_1:function(a){b.lat1=a*d},lat_2:function(a){b.lat2=a*d},lat_ts:function(a){b.lat_ts=a*d},lon_0:function(a){b.long0=a*d},lon_1:function(a){b.long1=a*d},lon_2:function(a){b.long2=a*d},alpha:function(a){b.alpha=parseFloat(a)*d},lonc:function(a){b.longc=a*d},x_0:function(a){b.x0=parseFloat(a)},y_0:function(a){b.y0=parseFloat(a)},k_0:function(a){b.k0=parseFloat(a)},k:function(a){b.k0=parseFloat(a)},a:function(a){b.a=parseFloat(a)},b:function(a){b.b=parseFloat(a)},r_a:function(){b.R_A=!0},zone:function(a){b.zone=parseInt(a,10)},south:function(){b.utmSouth=!0},towgs84:function(a){b.datum_params=a.split(",").map(function(a){return parseFloat(a)})},to_meter:function(a){b.to_meter=parseFloat(a)},units:function(a){b.units=a,f[a]&&(b.to_meter=f[a].to_meter)},from_greenwich:function(a){b.from_greenwich=a*d},pm:function(a){b.from_greenwich=(e[a]?e[a]:parseFloat(a))*d},nadgrids:function(a){"@null"===a?b.datumCode="none":b.nadgrids=a},axis:function(a){var c="ewnsud";3===a.length&&-1!==c.indexOf(a.substr(0,1))&&-1!==c.indexOf(a.substr(1,1))&&-1!==c.indexOf(a.substr(2,1))&&(b.axis=a)}};for(g in c)h=c[g],g in j?(i=j[g],"function"==typeof i?i(h):b[i]=h):b[g]=h;return"string"==typeof b.datumCode&&"WGS84"!==b.datumCode&&(b.datumCode=b.datumCode.toLowerCase()),b}},{"./constants/PrimeMeridian":27,"./constants/units":28}],39:[function(a,b,c){function d(a,b){var c=g.length;return a.names?(g[c]=a,a.names.forEach(function(a){f[a.toLowerCase()]=c}),this):(console.log(b),!0)}var e=[a("./projections/merc"),a("./projections/longlat")],f={},g=[];c.add=d,c.get=function(a){if(!a)return!1;var b=a.toLowerCase();return"undefined"!=typeof f[b]&&g[f[b]]?g[f[b]]:void 0},c.start=function(){e.forEach(d)}},{"./projections/longlat":52,"./projections/merc":53}],40:[function(a,b,c){var d=1e-10,e=a("../common/msfnz"),f=a("../common/qsfnz"),g=a("../common/adjust_lon"),h=a("../common/asinz");c.init=function(){Math.abs(this.lat1+this.lat2)<d||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=e(this.e3,this.sin_po,this.cos_po),this.qs1=f(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=e(this.e3,this.sin_po,this.cos_po),this.qs2=f(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=f(this.e3,this.sin_po,this.cos_po),Math.abs(this.lat1-this.lat2)>d?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)},c.forward=function(a){var b=a.x,c=a.y;this.sin_phi=Math.sin(c),this.cos_phi=Math.cos(c);var d=f(this.e3,this.sin_phi,this.cos_phi),e=this.a*Math.sqrt(this.c-this.ns0*d)/this.ns0,h=this.ns0*g(b-this.long0),i=e*Math.sin(h)+this.x0,j=this.rh-e*Math.cos(h)+this.y0;return a.x=i,a.y=j,a},c.inverse=function(a){var b,c,d,e,f,h;return a.x-=this.x0,a.y=this.rh-a.y+this.y0,this.ns0>=0?(b=Math.sqrt(a.x*a.x+a.y*a.y),d=1):(b=-Math.sqrt(a.x*a.x+a.y*a.y),d=-1),e=0,0!==b&&(e=Math.atan2(d*a.x,d*a.y)),d=b*this.ns0/this.a,this.sphere?h=Math.asin((this.c-d*d)/(2*this.ns0)):(c=(this.c-d*d)/this.ns0,h=this.phi1z(this.e3,c)),f=g(e/this.ns0+this.long0),a.x=f,a.y=h,a},c.phi1z=function(a,b){var c,e,f,g,i,j=h(.5*b);if(d>a)return j;for(var k=a*a,l=1;25>=l;l++)if(c=Math.sin(j),e=Math.cos(j),f=a*c,g=1-f*f,i=.5*g*g/e*(b/(1-k)-c/g+.5/a*Math.log((1-f)/(1+f))),j+=i,Math.abs(i)<=1e-7)return j;return null},c.names=["Albers_Conic_Equal_Area","Albers","aea"]},{"../common/adjust_lon":5,"../common/asinz":6,"../common/msfnz":15,"../common/qsfnz":20}],41:[function(a,b,c){var d=a("../common/adjust_lon"),e=Math.PI/2,f=1e-10,g=a("../common/mlfn"),h=a("../common/e0fn"),i=a("../common/e1fn"),j=a("../common/e2fn"),k=a("../common/e3fn"),l=a("../common/gN"),m=a("../common/asinz"),n=a("../common/imlfn");c.init=function(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)},c.forward=function(a){var b,c,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H=a.x,I=a.y,J=Math.sin(a.y),K=Math.cos(a.y),L=d(H-this.long0);return this.sphere?Math.abs(this.sin_p12-1)<=f?(a.x=this.x0+this.a*(e-I)*Math.sin(L),a.y=this.y0-this.a*(e-I)*Math.cos(L),a):Math.abs(this.sin_p12+1)<=f?(a.x=this.x0+this.a*(e+I)*Math.sin(L),a.y=this.y0+this.a*(e+I)*Math.cos(L),a):(B=this.sin_p12*J+this.cos_p12*K*Math.cos(L),z=Math.acos(B),A=z/Math.sin(z),a.x=this.x0+this.a*A*K*Math.sin(L),a.y=this.y0+this.a*A*(this.cos_p12*J-this.sin_p12*K*Math.cos(L)),a):(b=h(this.es),c=i(this.es),m=j(this.es),n=k(this.es),Math.abs(this.sin_p12-1)<=f?(o=this.a*g(b,c,m,n,e),p=this.a*g(b,c,m,n,I),a.x=this.x0+(o-p)*Math.sin(L),a.y=this.y0-(o-p)*Math.cos(L),a):Math.abs(this.sin_p12+1)<=f?(o=this.a*g(b,c,m,n,e),p=this.a*g(b,c,m,n,I),a.x=this.x0+(o+p)*Math.sin(L),a.y=this.y0+(o+p)*Math.cos(L),a):(q=J/K,r=l(this.a,this.e,this.sin_p12),s=l(this.a,this.e,J),t=Math.atan((1-this.es)*q+this.es*r*this.sin_p12/(s*K)),u=Math.atan2(Math.sin(L),this.cos_p12*Math.tan(t)-this.sin_p12*Math.cos(L)),C=0===u?Math.asin(this.cos_p12*Math.sin(t)-this.sin_p12*Math.cos(t)):Math.abs(Math.abs(u)-Math.PI)<=f?-Math.asin(this.cos_p12*Math.sin(t)-this.sin_p12*Math.cos(t)):Math.asin(Math.sin(L)*Math.cos(t)/Math.sin(u)),v=this.e*this.sin_p12/Math.sqrt(1-this.es),w=this.e*this.cos_p12*Math.cos(u)/Math.sqrt(1-this.es),x=v*w,y=w*w,D=C*C,E=D*C,F=E*C,G=F*C,z=r*C*(1-D*y*(1-y)/6+E/8*x*(1-2*y)+F/120*(y*(4-7*y)-3*v*v*(1-7*y))-G/48*x),a.x=this.x0+z*Math.sin(u),a.y=this.y0+z*Math.cos(u),a))},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I;if(this.sphere){if(b=Math.sqrt(a.x*a.x+a.y*a.y),b>2*e*this.a)return;return c=b/this.a,o=Math.sin(c),p=Math.cos(c),q=this.long0,Math.abs(b)<=f?r=this.lat0:(r=m(p*this.sin_p12+a.y*o*this.cos_p12/b),s=Math.abs(this.lat0)-e,q=d(Math.abs(s)<=f?this.lat0>=0?this.long0+Math.atan2(a.x,-a.y):this.long0-Math.atan2(-a.x,a.y):this.long0+Math.atan2(a.x*o,b*this.cos_p12*p-a.y*this.sin_p12*o))),a.x=q,a.y=r,a}return t=h(this.es),u=i(this.es),v=j(this.es),w=k(this.es),Math.abs(this.sin_p12-1)<=f?(x=this.a*g(t,u,v,w,e),b=Math.sqrt(a.x*a.x+a.y*a.y),y=x-b,r=n(y/this.a,t,u,v,w),q=d(this.long0+Math.atan2(a.x,-1*a.y)),a.x=q,a.y=r,a):Math.abs(this.sin_p12+1)<=f?(x=this.a*g(t,u,v,w,e),b=Math.sqrt(a.x*a.x+a.y*a.y),y=b-x,r=n(y/this.a,t,u,v,w),q=d(this.long0+Math.atan2(a.x,a.y)),a.x=q,a.y=r,a):(b=Math.sqrt(a.x*a.x+a.y*a.y),B=Math.atan2(a.x,a.y),z=l(this.a,this.e,this.sin_p12),C=Math.cos(B),D=this.e*this.cos_p12*C,E=-D*D/(1-this.es),F=3*this.es*(1-E)*this.sin_p12*this.cos_p12*C/(1-this.es),G=b/z,H=G-E*(1+E)*Math.pow(G,3)/6-F*(1+3*E)*Math.pow(G,4)/24,I=1-E*H*H/2-G*H*H*H/6,A=Math.asin(this.sin_p12*Math.cos(H)+this.cos_p12*Math.sin(H)*C),q=d(this.long0+Math.asin(Math.sin(B)*Math.sin(H)/Math.cos(A))),r=Math.atan((1-this.es*I*this.sin_p12/Math.sin(A))*Math.tan(A)/(1-this.es)),a.x=q,a.y=r,a)},c.names=["Azimuthal_Equidistant","aeqd"]},{"../common/adjust_lon":5,"../common/asinz":6,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/gN":11,"../common/imlfn":12,"../common/mlfn":14}],42:[function(a,b,c){var d=a("../common/mlfn"),e=a("../common/e0fn"),f=a("../common/e1fn"),g=a("../common/e2fn"),h=a("../common/e3fn"),i=a("../common/gN"),j=a("../common/adjust_lon"),k=a("../common/adjust_lat"),l=a("../common/imlfn"),m=Math.PI/2,n=1e-10;c.init=function(){this.sphere||(this.e0=e(this.es),this.e1=f(this.es),this.e2=g(this.es),this.e3=h(this.es),this.ml0=this.a*d(this.e0,this.e1,this.e2,this.e3,this.lat0))},c.forward=function(a){var b,c,e=a.x,f=a.y;if(e=j(e-this.long0),this.sphere)b=this.a*Math.asin(Math.cos(f)*Math.sin(e)),c=this.a*(Math.atan2(Math.tan(f),Math.cos(e))-this.lat0);else{var g=Math.sin(f),h=Math.cos(f),k=i(this.a,this.e,g),l=Math.tan(f)*Math.tan(f),m=e*Math.cos(f),n=m*m,o=this.es*h*h/(1-this.es),p=this.a*d(this.e0,this.e1,this.e2,this.e3,f);b=k*m*(1-n*l*(1/6-(8-l+8*o)*n/120)),c=p-this.ml0+k*g/h*n*(.5+(5-l+6*o)*n/24)}return a.x=b+this.x0,a.y=c+this.y0,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c,d=a.x/this.a,e=a.y/this.a;if(this.sphere){var f=e+this.lat0;b=Math.asin(Math.sin(f)*Math.cos(d)),c=Math.atan2(Math.tan(d),Math.cos(f))}else{var g=this.ml0/this.a+e,h=l(g,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(h)-m)<=n)return a.x=this.long0,a.y=m,0>e&&(a.y*=-1),a;var o=i(this.a,this.e,Math.sin(h)),p=o*o*o/this.a/this.a*(1-this.es),q=Math.pow(Math.tan(h),2),r=d*this.a/o,s=r*r;b=h-o*Math.tan(h)/p*r*r*(.5-(1+3*q)*r*r/24),c=r*(1-s*(q/3+(1+3*q)*q*s/15))/Math.cos(h)}return a.x=j(c+this.long0),a.y=k(b),a},c.names=["Cassini","Cassini_Soldner","cass"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/gN":11,"../common/imlfn":12,"../common/mlfn":14}],43:[function(a,b,c){var d=a("../common/adjust_lon"),e=a("../common/qsfnz"),f=a("../common/msfnz"),g=a("../common/iqsfnz");c.init=function(){this.sphere||(this.k0=f(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))},c.forward=function(a){var b,c,f=a.x,g=a.y,h=d(f-this.long0);if(this.sphere)b=this.x0+this.a*h*Math.cos(this.lat_ts),c=this.y0+this.a*Math.sin(g)/Math.cos(this.lat_ts);else{var i=e(this.e,Math.sin(g));b=this.x0+this.a*this.k0*h,c=this.y0+this.a*i*.5/this.k0}return a.x=b,a.y=c,a},c.inverse=function(a){a.x-=this.x0,a.y-=this.y0;var b,c;return this.sphere?(b=d(this.long0+a.x/this.a/Math.cos(this.lat_ts)),c=Math.asin(a.y/this.a*Math.cos(this.lat_ts))):(c=g(this.e,2*a.y*this.k0/this.a),b=d(this.long0+a.x/(this.a*this.k0))),a.x=b,a.y=c,a},c.names=["cea"]},{"../common/adjust_lon":5,"../common/iqsfnz":13,"../common/msfnz":15,"../common/qsfnz":20}],44:[function(a,b,c){var d=a("../common/adjust_lon"),e=a("../common/adjust_lat");c.init=function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)},c.forward=function(a){var b=a.x,c=a.y,f=d(b-this.long0),g=e(c-this.lat0);return a.x=this.x0+this.a*f*this.rc,a.y=this.y0+this.a*g,a},c.inverse=function(a){var b=a.x,c=a.y;return a.x=d(this.long0+(b-this.x0)/(this.a*this.rc)),a.y=e(this.lat0+(c-this.y0)/this.a),a},c.names=["Equirectangular","Equidistant_Cylindrical","eqc"]},{"../common/adjust_lat":4,"../common/adjust_lon":5}],45:[function(a,b,c){var d=a("../common/e0fn"),e=a("../common/e1fn"),f=a("../common/e2fn"),g=a("../common/e3fn"),h=a("../common/msfnz"),i=a("../common/mlfn"),j=a("../common/adjust_lon"),k=a("../common/adjust_lat"),l=a("../common/imlfn"),m=1e-10;c.init=function(){Math.abs(this.lat1+this.lat2)<m||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=d(this.es),this.e1=e(this.es),this.e2=f(this.es),this.e3=g(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=h(this.e,this.sinphi,this.cosphi),this.ml1=i(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<m?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=h(this.e,this.sinphi,this.cosphi),this.ml2=i(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=i(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))},c.forward=function(a){var b,c=a.x,d=a.y;if(this.sphere)b=this.a*(this.g-d);else{var e=i(this.e0,this.e1,this.e2,this.e3,d);b=this.a*(this.g-e)}var f=this.ns*j(c-this.long0),g=this.x0+b*Math.sin(f),h=this.y0+this.rh-b*Math.cos(f);return a.x=g,a.y=h,a},c.inverse=function(a){a.x-=this.x0,a.y=this.rh-a.y+this.y0;var b,c,d,e;this.ns>=0?(c=Math.sqrt(a.x*a.x+a.y*a.y),b=1):(c=-Math.sqrt(a.x*a.x+a.y*a.y),b=-1);var f=0;if(0!==c&&(f=Math.atan2(b*a.x,b*a.y)),this.sphere)return e=j(this.long0+f/this.ns),d=k(this.g-c/this.a),a.x=e,a.y=d,a;var g=this.g-c/this.a;return d=l(g,this.e0,this.e1,this.e2,this.e3),e=j(this.long0+f/this.ns),a.x=e,a.y=d,a},c.names=["Equidistant_Conic","eqdc"]},{"../common/adjust_lat":4,"../common/adjust_lon":5,"../common/e0fn":7,"../common/e1fn":8,"../common/e2fn":9,"../common/e3fn":10,"../common/imlfn":12,"../common/mlfn":14,"../common/msfnz":15}],46:[function(a,b,c){var d=Math.PI/4,e=a("../common/srat"),f=Math.PI/2,g=20;c.init=function(){var a=Math.sin(this.lat0),b=Math.cos(this.lat0);b*=b,this.rc=Math.sqrt(1-this.es)/(1-this.es*a*a),this.C=Math.sqrt(1+this.es*b*b/(1-this.es)),this.phic0=Math.asin(a/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+d)/(Math.pow(Math.tan(.5*this.lat0+d),this.C)*e(this.e*a,this.ratexp))},c.forward=function(a){var b=a.x,c=a.y;return a.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*c+d),this.C)*e(this.e*Math.sin(c),this.ratexp))-f,a.x=this.C*b,a},c.inverse=function(a){for(var b=1e-14,c=a.x/this.C,h=a.y,i=Math.pow(Math.tan(.5*h+d)/this.K,1/this.C),j=g;j>0&&(h=2*Math.atan(i*e(this.e*Math.sin(a.y),-.5*this.e))-f,!(Math.abs(h-a.y)<b));--j)a.y=h;return j?(a.x=c,a.y=h,a):null},c.names=["gauss"]},{"../common/srat":22}],47:[function(a,b,c){function d(a){return a;
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
this._area0;else if(tempsum<0)tempsum+=this._area0;vals.area=tempsum;return vals}})(GeographicLib.PolygonArea,GeographicLib.Geodesic,GeographicLib.Math,GeographicLib.Accumulator);window["GeographicLib"]=GeographicLib;window["GeographicLib"]["Geodesic"]=GeographicLib.Geodesic;window["GeographicLib"]["Geodesic"]["Geodesic"]=GeographicLib.Geodesic.Geodesic;var k,r={};window.Melown=r;window.ga=null!=window.ga?window.ga:{};window.MelownMap_=null!=window.MelownMap_?window.MelownMap_:null;window.Q=null!=window.Q?window.Q:{};window.$=null!=window.$?window.$:{};r.ie=Array;r.Wo={};r.Wo.create=function(a){var b=new r.ie(2);a&&(b[0]=a[0],b[1]=a[1]);return b};r.Gg={};r.Gg.create=function(a){var b=new r.ie(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};r.Gg.Sa=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};r.r={};r.r.create=function(a){var b=new r.ie(3);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2]);return b};r.r.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};
r.r.add=function(a,b,c){if(!c||a==c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};r.r.Np=function(a,b,c){if(!c||a==c)return a[0]-=b[0],a[1]-=b[1],a[2]-=b[2],a;c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};r.r.Bp=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};r.r.scale=function(a,b,c){if(!c||a==c)return a[0]*=b,a[1]*=b,a[2]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
r.r.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],f=Math.sqrt(c*c+d*d+e*e);if(f){if(1==f)return b[0]=c,b[1]=d,b[2]=e,b}else return b[0]=0,b[1]=0,b[2]=0,b;f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;return b};r.r.Qg=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var f=b[0],g=b[1];b=b[2];c[0]=e*b-a*g;c[1]=a*f-d*b;c[2]=d*g-e*f;return c};r.r.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};r.r.Sa=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
r.r.Mp=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return c*c+d*d+e*e};r.r.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};r.r.tp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};r.r.vi=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};r.hc={};
r.hc.create=function(a){var b=new r.ie(9);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9]);return b};r.hc.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};r.hc.S=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
r.hc.Kc=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};r.hc.Oo=function(a,b){b||(b=r.f.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
r.hc.vi=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};r.f={};r.f.create=function(a){var b=new r.ie(16);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]);return b};
r.f.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};r.f.S=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
r.f.Kc=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],f=a[6],g=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=f;a[11]=a[14];a[12]=e;a[13]=g;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
r.f.kp=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],l=a[7],m=a[8],n=a[9],p=a[10],q=a[11],s=a[12],u=a[13],t=a[14];a=a[15];return s*n*h*e-m*u*h*e-s*g*p*e+f*u*p*e+m*g*t*e-f*n*t*e-s*n*d*l+m*u*d*l+s*c*p*l-b*u*p*l-m*c*t*l+b*n*t*l+s*g*d*q-f*u*d*q-s*c*h*q+b*u*h*q+f*c*t*q-b*g*t*q-m*g*d*a+f*n*d*a+m*c*h*a-b*n*h*a-f*c*p*a+b*g*p*a};
r.f.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],l=a[6],m=a[7],n=a[8],p=a[9],q=a[10],s=a[11],u=a[12],t=a[13],w=a[14],C=a[15],I=c*h-d*g,F=c*l-e*g,P=c*m-f*g,G=d*l-e*h,fa=d*m-f*h,A=e*m-f*l,K=n*t-p*u,V=n*w-q*u,S=n*C-s*u,pa=p*w-q*t,sa=p*C-s*t,qa=q*C-s*w,U=1/(I*qa-F*sa+P*pa+G*S-fa*V+A*K);b[0]=(h*qa-l*sa+m*pa)*U;b[1]=(-d*qa+e*sa-f*pa)*U;b[2]=(t*A-w*fa+C*G)*U;b[3]=(-p*A+q*fa-s*G)*U;b[4]=(-g*qa+l*S-m*V)*U;b[5]=(c*qa-e*S+f*V)*U;b[6]=(-u*A+w*P-C*F)*U;b[7]=(n*A-q*P+s*F)*U;b[8]=
(g*sa-h*S+m*K)*U;b[9]=(-c*sa+d*S-f*K)*U;b[10]=(u*fa-t*P+C*I)*U;b[11]=(-n*fa+p*P-s*I)*U;b[12]=(-g*pa+h*V-l*K)*U;b[13]=(c*pa-d*V+e*K)*U;b[14]=(-u*G+t*F-w*I)*U;b[15]=(n*G-p*F+q*I)*U;return b};r.f.Qp=function(a,b){b||(b=r.f.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
r.f.Pk=function(a,b){b||(b=r.hc.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};r.f.No=function(a,b){var c=a[0],d=a[1],e=a[2],f=a[4],g=a[5],h=a[6],l=a[8],m=a[9],n=a[10],p=n*g-h*m,q=-n*f+h*l,s=m*f-g*l,u=c*p+d*q+e*s;if(!u)return null;u=1/u;b||(b=r.hc.create());b[0]=p*u;b[1]=(-n*d+e*m)*u;b[2]=(h*d-e*g)*u;b[3]=q*u;b[4]=(n*c-e*l)*u;b[5]=(-h*c+e*f)*u;b[6]=s*u;b[7]=(-m*c+d*l)*u;b[8]=(g*c-d*f)*u;return b};
r.f.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],l=a[5],m=a[6],n=a[7],p=a[8],q=a[9],s=a[10],u=a[11],t=a[12],w=a[13],C=a[14];a=a[15];var I=b[0],F=b[1],P=b[2],G=b[3],fa=b[4],A=b[5],K=b[6],V=b[7],S=b[8],pa=b[9],sa=b[10],qa=b[11],U=b[12],Aa=b[13],Kb=b[14];b=b[15];c[0]=I*d+F*h+P*p+G*t;c[1]=I*e+F*l+P*q+G*w;c[2]=I*f+F*m+P*s+G*C;c[3]=I*g+F*n+P*u+G*a;c[4]=fa*d+A*h+K*p+V*t;c[5]=fa*e+A*l+K*q+V*w;c[6]=fa*f+A*m+K*s+V*C;c[7]=fa*g+A*n+K*u+V*a;c[8]=S*d+pa*h+sa*p+qa*t;c[9]=S*e+pa*l+sa*
q+qa*w;c[10]=S*f+pa*m+sa*s+qa*C;c[11]=S*g+pa*n+sa*u+qa*a;c[12]=U*d+Aa*h+Kb*p+b*t;c[13]=U*e+Aa*l+Kb*q+b*w;c[14]=U*f+Aa*m+Kb*s+b*C;c[15]=U*g+Aa*n+Kb*u+b*a;return c};r.f.Ea=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
r.f.mg=function(a,b,c){c||(c=b);var d=b[0],e=b[1],f=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*f+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*f+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*f+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*f+a[15]*b;return c};
r.f.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c)return a[12]=a[0]*d+a[4]*e+a[8]*b+a[12],a[13]=a[1]*d+a[5]*e+a[9]*b+a[13],a[14]=a[2]*d+a[6]*e+a[10]*b+a[14],a[15]=a[3]*d+a[7]*e+a[11]*b+a[15],a;var f=a[0],g=a[1],h=a[2],l=a[3],m=a[4],n=a[5],p=a[6],q=a[7],s=a[8],u=a[9],t=a[10],w=a[11];c[0]=f;c[1]=g;c[2]=h;c[3]=l;c[4]=m;c[5]=n;c[6]=p;c[7]=q;c[8]=s;c[9]=u;c[10]=t;c[11]=w;c[12]=f*d+m*e+s*b+a[12];c[13]=g*d+n*e+u*b+a[13];c[14]=h*d+p*e+t*b+a[14];c[15]=l*d+q*e+w*b+a[15];return c};
r.f.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c)return a[0]*=d,a[1]*=d,a[2]*=d,a[3]*=d,a[4]*=e,a[5]*=e,a[6]*=e,a[7]*=e,a[8]*=b,a[9]*=b,a[10]*=b,a[11]*=b,a;c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
r.f.rotate=function(a,b,c,d){var e=c[0],f=c[1];c=c[2];var g=Math.sqrt(e*e+f*f+c*c);if(!g)return null;1!=g&&(g=1/g,e*=g,f*=g,c*=g);var h=Math.sin(b),l=Math.cos(b),m=1-l;b=a[0];var g=a[1],n=a[2],p=a[3],q=a[4],s=a[5],u=a[6],t=a[7],w=a[8],C=a[9],I=a[10],F=a[11],P=e*e*m+l,G=f*e*m+c*h,fa=c*e*m-f*h,A=e*f*m-c*h,K=f*f*m+l,V=c*f*m+e*h,S=e*c*m+f*h,e=f*c*m-e*h,f=c*c*m+l;d?a!=d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]):d=a;d[0]=b*P+q*G+w*fa;d[1]=g*P+s*G+C*fa;d[2]=n*P+u*G+I*fa;d[3]=p*P+t*G+F*fa;d[4]=b*
A+q*K+w*V;d[5]=g*A+s*K+C*V;d[6]=n*A+u*K+I*V;d[7]=p*A+t*K+F*V;d[8]=b*S+q*e+w*f;d[9]=g*S+s*e+C*f;d[10]=n*S+u*e+I*f;d[11]=p*S+t*e+F*f;return d};r.f.Ip=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],f=a[5],g=a[6],h=a[7],l=a[8],m=a[9],n=a[10],p=a[11];c?a!=c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[4]=e*b+l*d;c[5]=f*b+m*d;c[6]=g*b+n*d;c[7]=h*b+p*d;c[8]=e*-d+l*b;c[9]=f*-d+m*b;c[10]=g*-d+n*b;c[11]=h*-d+p*b;return c};
r.f.Jp=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],f=a[1],g=a[2],h=a[3],l=a[8],m=a[9],n=a[10],p=a[11];c?a!=c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+l*-d;c[1]=f*b+m*-d;c[2]=g*b+n*-d;c[3]=h*b+p*-d;c[8]=e*d+l*b;c[9]=f*d+m*b;c[10]=g*d+n*b;c[11]=h*d+p*b;return c};
r.f.Kp=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],f=a[1],g=a[2],h=a[3],l=a[4],m=a[5],n=a[6],p=a[7];c?a!=c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+l*d;c[1]=f*b+m*d;c[2]=g*b+n*d;c[3]=h*b+p*d;c[4]=e*-d+l*b;c[5]=f*-d+m*b;c[6]=g*-d+n*b;c[7]=h*-d+p*b;return c};
r.f.dm=function(a,b,c,d,e,f,g){g||(g=r.f.create());var h=b-a,l=d-c,m=f-e;g[0]=2*e/h;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=2*e/l;g[6]=0;g[7]=0;g[8]=(b+a)/h;g[9]=(d+c)/l;g[10]=-(f+e)/m;g[11]=-1;g[12]=0;g[13]=0;g[14]=-(f*e*2)/m;g[15]=0;return g};r.f.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b*=a;return r.f.dm(-b,b,-a,a,c,d,e)};
r.f.Ep=function(a,b,c,d,e,f,g){g||(g=r.f.create());var h=b-a,l=d-c,m=f-e;g[0]=2/h;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=2/l;g[6]=0;g[7]=0;g[8]=0;g[9]=0;g[10]=-2/m;g[11]=0;g[12]=-(a+b)/h;g[13]=-(d+c)/l;g[14]=-(f+e)/m;g[15]=1;return g};
r.f.wp=function(a,b,c,d){d||(d=r.f.create());var e=a[0],f=a[1];a=a[2];var g=c[0],h=c[1],l=c[2];c=b[1];var m=b[2];if(e==b[0]&&f==c&&a==m)return r.f.S(d);var n,p,q,s;c=e-b[0];m=f-b[1];b=a-b[2];s=1/Math.sqrt(c*c+m*m+b*b);c*=s;m*=s;b*=s;n=h*b-l*m;l=l*c-g*b;g=g*m-h*c;(s=Math.sqrt(n*n+l*l+g*g))?(s=1/s,n*=s,l*=s,g*=s):g=l=n=0;h=m*g-b*l;p=b*n-c*g;q=c*l-m*n;(s=Math.sqrt(h*h+p*p+q*q))?(s=1/s,h*=s,p*=s,q*=s):q=p=h=0;d[0]=n;d[1]=h;d[2]=c;d[3]=0;d[4]=l;d[5]=p;d[6]=m;d[7]=0;d[8]=g;d[9]=q;d[10]=b;d[11]=0;d[12]=
-(n*e+l*f+g*a);d[13]=-(h*e+p*f+q*a);d[14]=-(c*e+m*f+b*a);d[15]=1;return d};r.f.vi=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};r.Eb={};r.Eb.create=function(a){var b=new r.ie(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};r.Eb.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
r.Eb.ip=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b)return a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a;b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};r.Eb.inverse=function(a,b){if(!b||a==b)return a[0]*=1,a[1]*=1,a[2]*=1,a;b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};r.Eb.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
r.Eb.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],f=a[3],g=Math.sqrt(c*c+d*d+e*e+f*f);if(0==g)return b[0]=0,b[1]=0,b[2]=0,b[3]=0,b;g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;b[3]=f*g;return b};r.Eb.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2];a=a[3];var g=b[0],h=b[1],l=b[2];b=b[3];c[0]=d*b+a*g+e*l-f*h;c[1]=e*b+a*h+f*g-d*l;c[2]=f*b+a*l+d*h-e*g;c[3]=a*b-d*g-e*h-f*l;return c};
r.Eb.Ea=function(a,b,c){c||(c=b);var d=b[0],e=b[1],f=b[2];b=a[0];var g=a[1],h=a[2];a=a[3];var l=a*d+g*f-h*e,m=a*e+h*d-b*f,n=a*f+b*e-g*d,d=-b*d-g*e-h*f;c[0]=l*a+d*-b+m*-h-n*-g;c[1]=m*a+d*-g+n*-b-l*-h;c[2]=n*a+d*-h+l*-g-m*-b;return c};r.Eb.Pk=function(a,b){b||(b=r.hc.create());var c=a[0],d=a[1],e=a[2],f=a[3],g=c+c,h=d+d,l=e+e,m=c*g,n=c*h,c=c*l,p=d*h,d=d*l,e=e*l,g=f*g,h=f*h,f=f*l;b[0]=1-(p+e);b[1]=n-f;b[2]=c+h;b[3]=n+f;b[4]=1-(m+e);b[5]=d-g;b[6]=c-h;b[7]=d+g;b[8]=1-(m+p);return b};
r.Eb.Oo=function(a,b){b||(b=r.f.create());var c=a[0],d=a[1],e=a[2],f=a[3],g=c+c,h=d+d,l=e+e,m=c*g,n=c*h,c=c*l,p=d*h,d=d*l,e=e*l,g=f*g,h=f*h,f=f*l;b[0]=1-(p+e);b[1]=n-f;b[2]=c+h;b[3]=0;b[4]=n+f;b[5]=1-(m+e);b[6]=d-g;b[7]=0;b[8]=c-h;b[9]=d+g;b[10]=1-(m+p);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};r.Eb.Lp=function(a,b,c,d){d||(d=a);var e=c;0>a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]&&(e=-1*c);d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
r.Eb.vi=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};r.Math={};r.Math.mat4Multiply=r.f.multiply;r.Math.mat4Inverse=r.f.inverse;r.Math.mat4ToMat3=r.f.Pk;r.Math.mat4ToInverseMat3=r.f.No;r.Math.mat4Transpose=r.f.Kc;r.Math.mat3Transpose=r.hc.Kc;r.Math.vec3Normalize=r.r.normalize;r.Math.vec3Dot=r.r.Sa;r.Math.vec3Cross=r.r.Qg;r.Math.vec3Length=r.r.length;
r.em=function(a,b,c,d,e,f){var g=b-a,h=d-c,l=f-e;a=r.f.create([2*e/g,0,(b+a)/g,0,0,2*e/h,(d+c)/h,0,0,0,-(f+e)/l,-2*f*e/l,0,0,-1,0]);r.f.Kc(a);return a};r.zn=function(a,b,c,d){a=c*Math.tan(a*Math.PI/360);b*=a;return r.em(-b,b,-a,a,c,d)};r.xn=function(a,b,c,d){var e=d-c;a=r.f.create([1/(0.5*a*b),0,0,0,0,1/(0.5*a),0,0,0,0,-2/e,-((d+c)/e),0,0,0,1]);r.f.Kc(a);return a};
r.ub=function(a,b){var c=Math.cos(b),d=Math.sin(b);switch(a){case 0:c=[1,0,0,0,0,c,-d,0,0,d,c,0,0,0,0,1];break;case 1:c=[c,0,-d,0,0,1,0,0,d,0,c,0,0,0,0,1];break;default:c=[c,-d,0,0,d,c,0,0,0,0,1,0,0,0,0,1]}r.f.Kc(c);return c};r.tf=function(a,b,c){a=[a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1];r.f.Kc(a);return a};r.co=function(a){return r.tf(a,a,a)};r.pc=function(a,b,c){a=[1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1];r.f.Kc(a);return a};r.Rp=function(a){return r.pc(a[0],a[1],0)};r.Sp=function(a){return r.pc(a[0],a[1],a[2])};
r.isEqual=function(a,b,c){return Math.abs(a-b)<c};r.rd=function(a,b,c){a<b?a=b:a>c&&(a=c);return a};r.ua=function(a){return a*Math.PI/180};r.fj=function(a){return a/Math.PI*180};r.gn=function(a,b,c){return a+(b-a)*c};r.wb=function(a,b){return"boolean"===typeof a?a:b};r.Mc=function(a,b,c){var d=Number.ap;return"number"===typeof a?r.rd(a,b,d):c};r.Zk=function(a){return"string"===typeof a?a:null};
r.Fp=function(a,b){if(0>a)return a=-a+"",b--,a.length>=b?"-"+a:"-"+(Array(b-a.length+1).join("0")+a);a+="";return a.length>=b?a:Array(b-a.length+1).join("0")+a};r.Hl=function(a){var b=(a&31744)>>10;fraction=a&1023;return(a>>15?-1:1)*(b?31===b?fraction?NaN:Infinity:Math.pow(2,b-15)*(1+fraction/1024):fraction/1024*6.103515625E-5)};r.lo=function(a){var b={copy:"&copy;",Y:(new Date).getFullYear()};return a.replace(/\{([_$a-zA-Z0-9][_$a-zA-Z0-9]*)\}/g,function(a,d){return d in b?b[d]:a})};
r.no=function(a){return r.lo(a).replace(/\[([^\]]*)\]/g,function(a,c){c=c.trim();urls_=c.split(" ");return-1!=urls_[0].indexOf("//")?1<urls_.length?"<a href="+urls_[0]+">"+c.substring(urls_[0].length)+"</a>":"<a href="+urls_[0]+">"+urls_[0]+"</a>":c})};r.mo=function(a,b,c){return a.replace(/\{([_$a-zA-Z(-9][_$a-zA-Z(-9]*)\}/g,function(a,e){return e in b?b[e]:c(e)})};
r.mp=function(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?[parseInt(a[4],16),parseInt(a[3],16),parseInt(a[2],16),parseInt(a[1],16)]:[0,0,0,255]};r.to=function(){return"("+r.hl+").call(self);"};
r.dd=function(a,b,c,d,e){var f=new XMLHttpRequest;f.onload=function(){var e=f.response;try{var h=d?e:JSON.parse(e)}catch(l){console.log("JSON Parse Error ("+a+"): "+(l.message?l.message:""));null!=c&&c();return}null!=b&&b(h)}.bind(this);f.onerror=function(){null!=c&&c()}.bind(this);f.open("GET",a,!0);f.withCredentials=e;f.send("")};
r.xc=function(a,b,c,d){var e=new XMLHttpRequest;e.onreadystatechange=function(){switch(e.readyState){case 0:case 1:case 2:case 3:break;case 4:if(404==e.status){null!=c&&c();break}var a=new DataView(e.response);null!=b&&b(a);break;default:null!=c&&c()}}.bind(this);e.onerror=function(){null!=c&&c()}.bind(this);e.open("GET",a,!0);e.responseType="arraybuffer";e.withCredentials=d;e.send("")};window.performance=window.performance||{};
performance.now=performance.now||performance.yp||performance.zp||performance.Cp||performance.webkitNow||function(){return(new Date).getTime()};window.ok=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};"undefined"===typeof Array.isArray&&(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});r.isEqual=r.isEqual;
r.clamp=r.rd;r.mix=r.gn;r.radians=r.ua;r.degrees=r.fj;r.loadJSON=r.dd;r.loadBinary=r.xc;
r.ea={bd:!1,Cb:function(){var a=r.ea;a.Ng=a.sk(a.El)||"An unknown browser";a.version=a.tk(navigator.userAgent.toLowerCase())||a.tk(navigator.appVersion)||"an unknown version";a.pd=a.sk(a.Fl)||"an unknown os: ua: "+navigator.userAgent+" pl: "+navigator.platform;a.pe="iphone/ipod"==a.pd||"android"==a.pd||"ipad"==a.pd||"windows ce"==a.pd||"windows phone"==a.pd||"kindle"==a.pd;a.hn="android"==a.pd;a.bd=!0},gm:function(){r.ea.bd||r.ea.Cb();return r.ea.Ng},hm:function(){r.ea.bd||r.ea.Cb();return r.ea.Ng},
om:function(){r.ea.bd||r.ea.Cb();return r.ea.Ng},Nj:function(){r.ea.bd||r.ea.Cb();return r.ea.pe},Rm:function(){r.ea.bd||r.ea.Cb();return r.ea.hn},sk:function(a){for(var b=r.ea,c=0;c<a.length;c++){var d=a[c].ja,e=a[c].Vn;b.$k=a[c].Vd||a[c].S;if(d){if(-1!=d.toLowerCase().indexOf(a[c].ka))return null!=a[c].version&&(b.version=a[c].version),a[c].S}else if(e)return a[c].S}},tk:function(a){var b=r.ea;if(null!=b.version)return b.version;var c=a.indexOf(b.$k);if(-1!=c)return parseFloat(a.substring(c+b.$k.length+
1))},El:[{ja:navigator.userAgent,ka:"chrome",S:"chrome"},{ja:navigator.userAgent,ka:"firefox",S:"firefox"},{ja:navigator.vendor,ka:"apple",S:"safari",Vd:"version"},{Vn:window.opera,S:"opera",Vd:"version"},{ja:navigator.vendor,ka:"icab",S:"icab"},{ja:navigator.vendor,ka:"kde",S:"konqueror"},{ja:navigator.vendor,ka:"camino",S:"camino"},{ja:navigator.userAgent,ka:"netscape",S:"netscape"},{ja:navigator.userAgent,ka:"msie",S:"explorer",Vd:"msie"},{ja:navigator.userAgent,ka:"trident/",S:"explorer",version:"11"},
{ja:navigator.userAgent,ka:"edge/",S:"explorer",version:"12"},{ja:navigator.userAgent,ka:"omniweb",Vd:"omniweb/",S:"omniweb"},{ja:navigator.userAgent,ka:"silk",Vd:"silk/",S:"silk"},{ja:navigator.userAgent,ka:"gecko",S:"mozilla",Vd:"rv"},{ja:navigator.userAgent,ka:"mozilla",S:"netscape",Vd:"mozilla"}],Fl:[{ja:navigator.userAgent,ka:"windows ce",S:"windows ce"},{ja:navigator.userAgent,ka:"windows phone",S:"windows phone"},{ja:navigator.platform,ka:"win",S:"windows"},{ja:navigator.platform,ka:"mac",
S:"mac"},{ja:navigator.userAgent,ka:"iphone",S:"iphone/ipod"},{ja:navigator.userAgent,ka:"ipod",S:"iphone/ipod"},{ja:navigator.userAgent,ka:"ipad",S:"ipad"},{ja:navigator.userAgent,ka:"android",S:"android"},{ja:navigator.userAgent,ka:"silk",S:"kindle"},{ja:navigator.userAgent,ka:"blackberry",S:"blackberry"},{ja:navigator.platform,ka:"linux",S:"linux"}]};r.getBrowser=r.ea.gm;r.getBrowserVersion=r.ea.hm;r.getOS=r.ea.om;r.isPlatformMobileDevice=r.ea.Nj;r.isPlatformAndroid=r.ea.Rm;r.Oc={};
r.Oc.qp=function(a){if("string"!==typeof a)return!1;var b=document.location.hostname;return r.Oc.parse(a).hostname===b};r.Oc.parse=function(a){if("string"!==typeof a)return null;var b=document.createElement("a");b.href=a;return b};r.Oc.pm=function(a){var b={};a=r.Oc.parse(a).search.substring(1).split("&");if(1!=a.length||""!=a[0])for(var c=0;c<a.length;c++){var d=a[c].split("=");"undefined"===typeof b[d[0]]?b[d[0]]=d[1]:"string"===typeof b[d[0]]?b[d[0]]=[b[d[0]],d[1]]:b[d[0]].push(d[1])}return b};
r.Url=r.Oc;r.Oc.getParamsFromUrl=r.Oc.pm;r.Ia={};r.Ia.cn=function(a,b,c,d){!a instanceof Image||"string"!==typeof b||(d||(a.crossOrigin=c?"use-credentials":"anonymous"),a.src=b)};r.Ia.xh=function(a,b,c,d,e){var f=new Image;f.onerror=c;f.onload=b;r.Ia.cn(f,a,d,e);return f};r.Ia.dd=function(a,b,c){r.xc(a,b,c)};r.Ia.xc=function(a,b,c){r.xc(a,b,c)};
r.Ia.Ij=function(a,b,c){var d=new XMLHttpRequest;d.onreadystatechange=function(){switch(d.readyState){case 0:case 1:case 2:case 3:break;case 4:null!=b&&b(d.getAllResponseHeaders(),d.status);break;default:null!=c&&c()}}.bind(this);d.onerror=function(){null!=c&&c()}.bind(this);d.open("HEAD",a,!0);d.send("")};r.Http=r.Ia;r.Ia.imageFactory=r.Ia.xh;r.Ia.loadJSON=r.Ia.dd;r.Ia.loadBinary=r.Ia.xc;r.Ia.headRequest=r.Ia.Ij;
function ca(a){a=this.h=a.h;if(null!=a){this.s=null;this.s=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.s);var b=[0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1];a.bufferData(a.ARRAY_BUFFER,new Float32Array(b),a.STATIC_DRAW);this.s.I=3;this.s.C=b.length/3;this.k=36;this.Ch=this.s.C/3}}ca.prototype.v=function(){this.h.deleteBuffer(this.s)};
ca.prototype.Ca=function(a,b){var c=this.h;if(null!=c){var d=a.getAttribute(b);c.bindBuffer(c.ARRAY_BUFFER,this.s);c.vertexAttribPointer(d,this.s.I,c.FLOAT,!1,0,0);c.drawArrays(c.LINES,0,this.s.C)}};function ia(a,b,c,d){this.Tc=a;this.xa=null;this.R=b;this.bj=null;this.Hf=this.dj=this.Sc({});this.Oj=null==c?!1:c;this.ml=d?!0:!1}k=ia.prototype;
k.Cb=function(){this.xa=document.createElement("canvas");if(null!=this.xa&&(this.xa.width=this.R[0],this.xa.height=this.R[1],this.xa.style.display="block",null!=this.xa.getContext)){try{this.h=this.xa.getContext("webgl",{preserveDrawingBuffer:this.Oj,antialias:this.ml,stencil:!0})||this.xa.getContext("experimental-webgl",{preserveDrawingBuffer:this.Oj})}catch(a){}this.h&&(this.h.getExtension("OES_standard_derivatives"),this.Tc.appendChild(this.xa),this.h.Ii=this.xa.width,this.h.Hi=this.xa.height,
this.h.clearColor(0,0,0,1),this.h.enable(this.h.DEPTH_TEST),this.h.viewport(0,0,this.h.Ii,this.h.Hi),this.h.clear(this.h.COLOR_BUFFER_BIT|this.h.DEPTH_BUFFER_BIT))}};k.resize=function(a,b){this.R=a;null!=this.xa&&!0!=b&&(this.xa.width=this.R[0],this.xa.height=this.R[1]);null!=this.h&&(this.h.Ii=this.xa.width,this.h.Hi=this.xa.height)};function ka(a){a.h.viewport(0,0,a.h.Ii,a.h.Hi)}
k.clear=function(a,b,c){null!=c&&this.h.clearColor(c[0]/255,c[1]/255,c[2]/255,c[3]/255);this.h.clear((a?this.h.COLOR_BUFFER_BIT:0)|(b?this.h.DEPTH_BUFFER_BIT:0))};
k.useProgram=function(a,b,c,d,e,f,g,h,l){this.bj!=a&&(this.h.useProgram(a.qa),this.bj=a,ta(a,"uSampler",0),l&&ta(a,"uSampler2",1),b=a.getAttribute(b),this.h.enableVertexAttribArray(b),null!=c&&(c=a.getAttribute(c),this.h.enableVertexAttribArray(c)),null!=d&&(d=a.getAttribute(d),this.h.enableVertexAttribArray(d)),null!=e&&(e=a.getAttribute(e),this.h.enableVertexAttribArray(e)),null!=f&&(f=a.getAttribute(f),this.h.enableVertexAttribArray(f)),null!=g&&(a=a.getAttribute(g),this.h.enableVertexAttribArray(a)))};
k.bindTexture=function(a,b){!1!=a.cf&&(this.h.activeTexture(b?this.h.TEXTURE1:this.h.TEXTURE0),this.h.bindTexture(this.h.TEXTURE_2D,a.w))};r.Zo=function(){return!0};function ua(a,b){null!=b?a.h.bindFramebuffer(a.h.FRAMEBUFFER,b.pj):(a.h.bindTexture(a.h.TEXTURE_2D,null),a.h.bindRenderbuffer(a.h.RENDERBUFFER,null),a.h.bindFramebuffer(a.h.FRAMEBUFFER,null))}
ia.prototype.Sc=function(a){null==a.Pc&&(a.Pc=!1);null==a.ze&&(a.ze=!1);null==a.Ig&&(a.Ig=0);null==a.zf&&(a.zf=!0);null==a.yf&&(a.yf=!0);null==a.De&&(a.De=!1);null==a.td&&(a.td=!0);return a};
ia.prototype.Gc=function(a,b){if(this.Hf==a)null!=b&&this.h.polygonOffset(-1,b);else{this.h.polygonOffset(-1,0);var c=this.h,d=this.Hf;b=b||a.Ig;d.Pc!=a.Pc&&(!0==a.Pc?(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA),c.enable(c.BLEND)):c.disable(c.BLEND));d.ze!=a.ze&&(!0==a.ze?c.enable(c.STENCIL_TEST):c.disable(c.STENCIL_TEST));d.Ig!=b&&(0!=b?(c.polygonOffset(-1,b),c.enable(c.POLYGON_OFFSET_FILL)):c.disable(c.POLYGON_OFFSET_FILL));
d.zf!=a.zf&&(!0==a.zf?c.depthMask(!0):c.depthMask(!1));d.yf!=a.yf&&(0!=a.yf?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST));d.De!=a.De&&(0!=a.De?c.depthFunc(c.LEQUAL):c.depthFunc(c.LESS));d.td!=a.td&&(!0==a.td?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE));this.Hf=a}};function va(a,b,c,d){this.m=null;this.g=a;this.h=a.h;this.J=b;this.Rc=[];this.ye=0;this.Vc=c;this.k=d;this.w=this.za=null;this.eh(c,d)}va.prototype.v=function(){};
va.prototype.eh=function(a,b){null==a&&(a="Arial, 'Helvetica Neue', Helvetica, sans-serif");null==b&&(b=10);var c=1/512,d=1/512,e=document.createElement("canvas");e.width=512;e.height=512;e=e.getContext("2d");e.beginPath();e.font=b+"pt "+a;e.textAlign="left";e.textBaseline="top";e.fillStyle="#ffffff";e.strokeStyle="#000000";e.lineWidth=5;e.lineCap="round";e.lineJoin="round";var f=Math.round(0.5*e.lineWidth),g=e.lineWidth+2,h=g,l=g,m=Math.floor(2.5*e.measureText("e").width);this.Rc=[];this.ye=m;this.k=
b;this.Vc=a;for(var n=[],p=33;191>p;p++)n.push(p);for(p=192;688>p;p++)n.push(p);for(var n=n.concat(32,8230,8216,8217,8218,8219,8220,8221,8222,8242,8243,8252),p=0,q=n.length;p<q;p++){var s=String.fromCharCode(n[p]),u=Math.round(e.measureText(s).width),t=u+e.lineWidth;512<=h+u+g&&(h=g,l+=m+g);e.strokeText(s,h+f,l);e.fillText(s,h+f,l);this.Rc[n[p]]={Bi:h*c,Ei:l*d,Ci:(h+t)*c,Fi:(l+m)*d,Hh:t,dn:m,Rd:t-2};h+=t+g}this.za=e.getImageData(0,0,512,512);this.w=new xa(this.g,null);ya(this.w,this.za,"linear");
this.w.Nc=512;this.w.ke=512;this.w.k=1048576};va.prototype.size=function(){return this.k};function Ba(a,b,c,d,e){this.e=a;this.m=null;this.Jd=c||[0,0,0];this.g=d;this.h=d.h;this.i=e;this.da=[];this.Ec=0;null!=b&&null!=b[0]&&null!=b[1]&&(this.m=new Ea(b[0][0],b[0][1],b[0][2],b[1][0],b[1][1],b[1][2]));this.qg=!0;this.eb=this.k=0}
Ba.prototype.v=function(){for(var a=0,b=this.da.length;a<b;a++)switch(this.da[a].t){case "flat-line":this.h.deleteBuffer(this.da[a].s);break;case "flat-tline":case "pixel-line":case "pixel-tline":this.h.deleteBuffer(this.da[a].s);this.h.deleteBuffer(this.da[a].qc);break;case "line-label":this.h.deleteBuffer(this.da[a].s);this.h.deleteBuffer(this.da[a].Qa);break;case "icon":case "label":this.h.deleteBuffer(this.da[a].s),this.h.deleteBuffer(this.da[a].Qa),this.h.deleteBuffer(this.da[a].Wd)}};
Ba.prototype.size=function(){return this.k};
function Fa(a,b){var c=a.h,d=b.vertexBuffer,e=b.normalBuffer,f=b.color,g=1/255,h={};h.t=b.type;h.qa=b.program;h.Jb=[f[0]*g,f[1]*g,f[2]*g,f[3]*g];h.tc=b["z-index"]+256;h.Ie=b["click-event"];h.Xe=b["hover-event"];h.fc=b.hitable;h.Ne=b.eventInfo;h.Mf=b["enter-event"];h.ag=b["leave-event"];h.Ic=b.state;h.$d=b.center;h.V=b.lod;h.bg=b["line-width"];h.uc=b["zbuffer-offset"];h.Ec=!1;h.ca=!0;if(null!=b.texture){var l=b.texture,m=l[0];h.w=[Ga(a.i,m.url,m.filter||"linear",m.tiled||!1),l[1],l[2],l[3],l[4]];l=
b.background;0!=l[3]&&(h.Mi=[l[0]*g,l[1]*g,l[2]*g,l[3]*g])}switch(h.t){case "flat-tline":h.qa=0!=l[3]?a.i.Nn:a.i.On;break;case "pixel-line":h.qa=a.i.Kn;break;case "pixel-tline":h.qa=0!=l[3]?a.i.Pn:a.i.Qn}a.qg&&!h.fc?(h.ca=!1,h.kd=JSON.stringify({t:h.t,Jb:f,tc:h.tc,bg:h.bg,el:h.uc}),h.Pa=d,h.ed=e):(h.s=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,h.s),c.bufferData(c.ARRAY_BUFFER,d,c.STATIC_DRAW),h.s.I=4,h.s.C=d.length/4,h.qc=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,h.qc),c.bufferData(c.ARRAY_BUFFER,
e,c.STATIC_DRAW),h.qc.I=4,h.qc.C=e.length/4);a.da.push(h);a.k+=16*d.length+16*e.length;a.eb+=d.length/3}
function Ha(a,b,c){var d=a.h,e=b.vertexBuffer,f=b.texcoordsBuffer,g=b.originBuffer,h=b.color,l=b.stick,m=1/255,n={};n.t=c?"label":"icon";n.qa=b.program;n.Jb=[h[0]*m,h[1]*m,h[2]*m,h[3]*m];n.tc=b["z-index"]+256;n.dl=b.visibility;n.Ie=b["click-event"];n.Xe=b["hover-event"];n.Mf=b["enter-event"];n.ag=b["leave-event"];n.fc=b.hitable;n.Ne=b.eventInfo;n.Ic=b.state;n.$d=b.center;n.Ae=[l[0],l[1],l[2],l[3]*m,l[4]*m,l[5]*m,l[6]*m];n.V=b.lod;n.uc=b["zbuffer-offset"];n.Ec=!1;n.ca=!0;!0!=c?(b=b.icon,n.w=Ga(a.i,
b.url,b.filter||"linear",b.tiled||!1)):n.w=a.i.Vc.w;n.s=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,n.s);d.bufferData(d.ARRAY_BUFFER,e,d.STATIC_DRAW);n.s.I=4;n.s.C=e.length/4;n.Qa=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,n.Qa);d.bufferData(d.ARRAY_BUFFER,f,d.STATIC_DRAW);n.Qa.I=4;n.Qa.C=f.length/4;n.Wd=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,n.Wd);d.bufferData(d.ARRAY_BUFFER,g,d.STATIC_DRAW);n.Wd.I=3;n.Wd.C=g.length/3;a.da.push(n);a.k+=16*n.s.C+12*n.Wd.C+16*n.Qa.C;a.eb+=n.s.C/3}
Ba.prototype.Ca=function(a,b,c){if(null==this.e||!1!==this.i.Vm[this.e]){if(!0==c){c=r.f.create();var d=r.f.create(),e=this.i.O,f=this.i.sp[this.e];if(null!=f){var g=f[1],g=[g[0]-e[0],g[1]-e[1],g[2]];r.f.multiply(r.pc(g[0],g[1],g[2]),f[0],d);r.f.multiply(a,d,d)}else g=[this.Jd[0]-e[0],this.Jd[1]-e[1],this.Jd[2]],r.f.multiply(a,r.pc(g[0],g[1],g[2]),d);r.f.multiply(b,d,c);a=d;b=c}c=this.i.ra;for(var d=this.i.Cd,e=this.i.$e,f=this.i.ci,g=0,h=this.da.length;g<h;g++){var l=this.da[g];if(("icon"==l.t||
"label"==l.t)&&0<l.dl){var m=l.$d;if(r.r.length([m[0]-c[0],m[1]-c[1],m[2]-c[2]])>l.dl)continue}if(!f||l.fc)l.Ap=a,l.re=b,m=l.tc,d[m][e[m]]=l,e[m]++}}};
r.Pl=function(a,b,c,d,e){var f=d.re;if(d.ca){if(0!=d.Ic){var g=d.Ne.id;if(null!=g&&null!=c.wh)if(1==d.Ic){if(c.wh[0].id==g)return}else{if(c.wh[0].id!=g)return}else if(2==d.Ic)return}var h=d.fc&&c.ci,g=d.Jb;if(h){var l=c.Lj,g=[(l&255)/255,(l>>8&255)/255,(l>>16&255)/255,1];c.Lm[l]=[d.Ne,d.$d,d.Ie,d.Xe,d.Mf,d.ag];c.Lj++}switch(d.t){case "flat-line":a.Gc(r.Jg,Ia(c,d.uc));l=c.Ln;a.useProgram(l,"aPosition",null,null,null);Ka(l,"uColor",g);La(l,"uMVP",f);a=l.getAttribute("aPosition");b.bindBuffer(b.ARRAY_BUFFER,
d.s);b.vertexAttribPointer(a,d.s.I,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.s.C);break;case "flat-tline":case "pixel-line":case "pixel-tline":a.Gc(r.Jg,Ia(c,d.uc));var l=d.qa,m=null,n=[0,0,0,0];if("pixel-line"!=d.t){if(h)m=c.xf;else{c=d.w;if(null==c||null==c[0])break;m=c[0];n=[0,c[1]/c[0].ke,(c[1]+c[2])/c[0].ke,0];n[0]="flat-tline"==d.t?1/d.bg/(m.Nc/c[2]):1/m.Nc/1}if(!1==m.cf)break;a.bindTexture(m)}a.useProgram(l,"aPosition",null,null,null);Ka(l,"uColor",g);Ma(l,"uScale",e);La(l,"uMVP",f);"pixel-line"!=
d.t&&(null!=d.Mi&&Ka(l,"uColor2",d.Mi),Ka(l,"uParams",n),ta(l,"uSampler",0));a=l.getAttribute("aPosition");e=l.getAttribute("aNormal");b.bindBuffer(b.ARRAY_BUFFER,d.s);b.vertexAttribPointer(a,d.s.I,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.qc);b.vertexAttribPointer(e,d.qc.I,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.s.C);break;case "line-label":m=h?c.xf:c.Vc.w;a.Gc(r.Li,Ia(c,d.uc));l=c.ik;a.bindTexture(m);a.useProgram(l,"aPosition","aTexCoord",null,null);ta(l,"uSampler",0);La(l,"uMVP",f);Ka(l,
"uVec",c.Ah);Ka(l,"uColor",g);a=l.getAttribute("aPosition");e=l.getAttribute("aTexCoord");b.bindBuffer(b.ARRAY_BUFFER,d.s);b.vertexAttribPointer(a,d.s.I,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.Qa);b.vertexAttribPointer(e,d.Qa.I,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.s.C);break;case "icon":case "label":m=h?c.xf:d.w;if(!1==m.cf)break;a.Gc(r.Li,Ia(c,d.uc));h=0;0!=d.Ae[0]&&(l=d.Ae,h=c.Wi*l[0],h<l[1]?h=0:0!=l[2]&&(n=Oa(c,d.$d,f),n[0]=Math.round(n[0]),c.Me([[n[0],n[1],n[2]],[n[0],n[1]-h,n[2]]],
l[2],[l[3],l[4],l[5],l[6]],null,null,null,!0)));l=c.Jn;a.bindTexture(m);a.useProgram(l,"aPosition","aTexCoord",null,"aOrigin");ta(l,"uSampler",0);La(l,"uMVP",f);Ka(l,"uScale",[e[0],e[1],"label"==d.t?1:1/m.Nc,2*h]);Ka(l,"uColor",g);a=l.getAttribute("aPosition");e=l.getAttribute("aTexCoord");f=l.getAttribute("aOrigin");b.bindBuffer(b.ARRAY_BUFFER,d.s);b.vertexAttribPointer(a,d.s.I,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.Qa);b.vertexAttribPointer(e,d.Qa.I,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,
d.Wd);b.vertexAttribPointer(f,d.Wd.I,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.s.C)}}};
function Pa(a,b,c,d){this.h=a.h;this.m=b.m;this.J=d;this.nd=this.Lc=this.U=null;performance.now();a=b.D;c=b.Fg;d=b.Xk;var e=b.Yo||3,f=b.Uo||2;b=b.To||2;var g=this.h;a&&g&&(this.U=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,this.U),g.bufferData(g.ARRAY_BUFFER,new Float32Array(a),g.STATIC_DRAW),this.U.I=e,this.U.C=a.length/e,null!=c&&(this.Lc=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,this.Lc),g.bufferData(g.ARRAY_BUFFER,new Float32Array(c),g.STATIC_DRAW),this.Lc.I=f,this.Lc.C=c.length/f),null!=
d&&(this.nd=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,this.nd),g.bufferData(g.ARRAY_BUFFER,new Float32Array(d),g.STATIC_DRAW),this.nd.I=b,this.nd.C=d.length/b),this.k=this.U.C*e*4,this.k+=null==c?0:this.Lc.C*f*4,this.k+=null==d?0:this.nd.C*b*4,this.eb=this.U.C/3,this.od=!0)}Pa.prototype.v=function(){this.h&&this.od&&(this.h.deleteBuffer(this.U),this.h.deleteBuffer(this.Lc))};
Pa.prototype.Ca=function(a,b,c,d,e){var f=this.h;null!=f&&this.od&&(b=a.getAttribute(b),f.bindBuffer(f.ARRAY_BUFFER,this.U),f.vertexAttribPointer(b,this.U.I,f.FLOAT,!1,0,0),this.Lc&&c&&(c=a.getAttribute(c),f.bindBuffer(f.ARRAY_BUFFER,this.Lc),f.vertexAttribPointer(c,this.Lc.I,f.FLOAT,!1,0,0)),this.nd&&d&&(d=a.getAttribute(d),f.bindBuffer(f.ARRAY_BUFFER,this.nd),f.vertexAttribPointer(d,this.nd.I,f.FLOAT,!1,0,0)),e&&e&&(a=a.getAttribute(e),f.bindBuffer(f.ARRAY_BUFFER,r.Yd),f.vertexAttribPointer(a,r.Yd.I,
f.FLOAT,!1,0,0)),f.drawArrays(f.TRIANGLES,0,this.U.C))};Pa.prototype.size=function(){return this.k};function Qa(a,b,c,d,e,f){this.m=null;this.g=a;this.h=a.h;this.J=b;performance.now();null!=this.h&&(this.D=[],this.U=null,this.Ch=c,this.Xf=e,this.Wf=f,this.Vh=d,this.Cb())}k=Qa.prototype;k.v=function(){this.h.deleteBuffer(this.U)};
k.Cb=function(){if(this.Ch){this.Xf&&Ra(this,0,this.Wf);for(var a=0;a<this.Vh;a++){var b=a,c=a+1,d=this.D.length;this.D[d]=b;this.D[d+1]=c;this.D[d+2]=1;this.D[d+3]=b;this.D[d+4]=c;this.D[d+5]=-1;this.D[d+6]=c;this.D[d+7]=b;this.D[d+8]=1;this.D[d+9]=b;this.D[d+10]=c;this.D[d+11]=1;this.D[d+12]=c;this.D[d+13]=b;this.D[d+14]=1;this.D[d+15]=c;this.D[d+16]=b;this.D[d+17]=-1;this.eb+=2;this.Xf&&Ra(this,a+1,this.Wf)}}else if(this.Xf)for(a=0;a<=this.Vh;a++)Ra(this,a,this.Wf);this.compile()};
function Ra(a,b,c){var d=a.D.length,e=2*Math.PI/c;for(i=0;i<c;i++)a.D[d]=b,a.D[d+1]=-1,a.D[d+2]=0,a.D[d+3]=b,a.D[d+4]=-2,a.D[d+5]=e*i,a.D[d+6]=b,a.D[d+7]=-2,a.D[d+8]=e*(i+1),d+=9;a.eb+=c}k.compile=function(){var a=this.h;this.U=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.U);a.bufferData(a.ARRAY_BUFFER,new Float32Array(this.D),a.STATIC_DRAW);this.U.I=3;this.U.C=this.D.length/3;this.k=24*this.U.C;this.eb=this.U.C/3};
k.Ca=function(a,b,c){var d=this.h;null==d||null==this.U||c>this.Vh||(a=a.getAttribute(b),d.bindBuffer(d.ARRAY_BUFFER,this.U),d.vertexAttribPointer(a,this.U.I,d.FLOAT,!1,0,0),a=0,this.Ch&&(a+=6*(c-1)),this.Xf&&(a+=3*c*this.Wf),d.drawArrays(d.TRIANGLES,0,a))};k.size=function(){return this.k};function v(a,b,c){this.h=a.h;this.qa=null;this.Di=[];this.Mg=[];this.createProgram(b,c)}
v.prototype.createShader=function(a,b){var c=this.h;if(!a||!c)return null;var d;d=!0!=b?c.createShader(c.FRAGMENT_SHADER):c.createShader(c.VERTEX_SHADER);c.shaderSource(d,a);c.compileShader(d);return c.getShaderParameter(d,c.COMPILE_STATUS)?d:(alert("An error occurred compiling the shaders: "+c.getShaderInfoLog(d)),null)};
v.prototype.createProgram=function(a,b){var c=this.h;if(null!=c){var d=this.createShader(a,!0),e=this.createShader(b,!1),f=c.createProgram();c.attachShader(f,d);c.attachShader(f,e);c.linkProgram(f);c.getProgramParameter(f,c.LINK_STATUS)||alert("Unable to initialize the shader program.");c.useProgram(f);this.qa=f}};function ta(a,b,c){var d=a.h;null!=d&&null!=a.qa&&(a=a.getUniform(b),null!=a&&d.uniform1i(a,c))}
function La(a,b,c){var d=a.h;null!=d&&null!=a.qa&&(a=a.getUniform(b),null!=a&&d.uniformMatrix4fv(a,!1,c))}function Ma(a,b,c){var d=a.h;null!=d&&null!=a.qa&&(a=a.getUniform(b),null!=a&&d.uniform2fv(a,c))}function Sa(a,b,c){var d=a.h;null!=d&&null!=a.qa&&(a=a.getUniform(b),null!=a&&d.uniform3fv(a,c))}function Ka(a,b,c){var d=a.h;null!=d&&null!=a.qa&&(a=a.getUniform(b),null!=a&&d.uniform4fv(a,c))}function Ta(a,b,c){var d=a.h;null!=d&&null!=a.qa&&(a=a.getUniform(b),null!=a&&d.uniform1f(a,c))}
v.prototype.getAttribute=function(a){var b=this.h;if(null!=b&&null!=this.qa)return null==this.Mg[a]?(b=b.getAttribLocation(this.qa,a),this.Mg[a]=b):this.Mg[a]};v.prototype.getUniform=function(a){var b=this.h;if(null!=b&&null!=this.qa)return null==this.Di[a]?(b=b.getUniformLocation(this.qa,a),this.Di[a]=b):this.Di[a]};r.ql="attribute vec3 aPosition;\nuniform mat4 uMVP;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";r.pl="precision mediump float;\nvoid main() {\ngl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);\n}";
r.bn="attribute vec3 aPosition;\nuniform mat4 uMVP;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";r.$m="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";r.Xm="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(aPosition.xyz, 1.0));\nif (aNormal.w == 0.0) {\ngl_Position = pp0 + vec4((vec3(aNormal.x*uScale.x*pp0.w, aNormal.y*uScale.y*pp0.w, 0.0)), 0.0);\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(aNormal.xyz, 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aNormal.w*pp0.w, n.x*uScale.y*aNormal.w*pp0.w, 0.0)), 0.0);\n}\n}";
r.Wm="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";r.Zm="attribute vec3 aPosition;\nuniform mat4 uMVP;\nuniform vec3 uScale;\nuniform vec3 uPoints[32];\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(uPoints[int(aPosition.x)], 1.0));\nif (aPosition.y < 0.0) {\nif (aPosition.y == -1.0) {\ngl_Position = pp0;\n} else {\ngl_Position = pp0 + vec4((vec3(-sin(aPosition.z)*uScale.x*uScale.z, cos(aPosition.z)*uScale.y*uScale.z, 0.0)), 0.0);\n}\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(uPoints[int(aPosition.y)], 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aPosition.z*uScale.z, n.x*uScale.y*aPosition.z*uScale.z, 0.0)), 0.0);\n}\n}";
r.Ym="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";r.Lk="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvoid main(){ \nvec4 p=vec4(aPosition.xyz, 1.0);\np.xy+=aNormal.xy;\nif (aNormal.w == 0.0){\nfloat tcy=(uParams[1]+uParams[2])*0.5;\nfloat tdy=uParams[1]-tcy;\nfloat ty=(aNormal.x == 0.0 && aNormal.y == 0.0)?tcy:tcy+tdy*cos(aNormal.z);\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], ty);\n} else {\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], aPosition.w < 0.0 ? uParams[1] : uParams[2]);\n}\ngl_Position = uMVP * p;\n}";
r.Qk="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(aPosition.xyz, 1.0));\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], aPosition.w < 0.0 ? uParams[1] : uParams[2]);\nif (aNormal.w == 0.0) {\ngl_Position = pp0 + vec4((vec3(aNormal.x*uScale.x*pp0.w, aNormal.y*uScale.y*pp0.w, 0.0)), 0.0);\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(aNormal.xyz, 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aNormal.w*pp0.w, n.x*uScale.y*aNormal.w*pp0.w, 0.0)), 0.0);\n}\n}";
r.Kk="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uColor2;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord)*uColor;\ngl_FragColor = c;\n}";r.Ck="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uColor2;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord)*uColor;\nvec4 c2=uColor2;\nc.xyz*=c.w; c2.xyz*=c2.w;\nc=mix(c,c2,1.0-c.w);\nc.xyz/=(c.w+0.00001);\ngl_FragColor = c;\n}";
r.Fn="attribute vec3 aPosition;\nattribute vec3 aNormal;\nuniform mat4 uMVP;\nuniform mat4 uRot;\nuniform vec4 uColor;\nvarying vec4 vColor;\nvoid main(){ \nfloat l = dot((uRot*vec4(aNormal,1.0)).xyz, vec3(0.0,0.0,1.0)) * 0.5;\nvec3 c = uColor.xyz;\nc = (l > 0.0) ? mix(c,vec3(1.0,1.0,1.0),l) : mix(vec3(0.0,0.0,0.0),c,1.0+l);\nvColor = vec4(c, uColor.w);\ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";r.En="precision mediump float;\nvarying vec4 vColor;\nvoid main() {\ngl_FragColor = vColor;\n}";
r.yo="attribute vec4 aPosition;\nattribute vec4 aTexCoord;\nuniform mat4 uMVP;\nuniform vec4 uVec;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy;\nif (dot(uVec.xyz, vec3(aTexCoord.z, aTexCoord.w, aPosition.w)) < 0.0) {\ngl_Position = uMVP * vec4(2.0, 0.0, 0.0, 1.0);\n}else{\ngl_Position = uMVP * vec4(aPosition.xyz, 1.0);\n}\n}";r.zo="attribute vec3 aPosition;\nattribute vec4 aTexCoord;\nuniform mat4 uMVP;\nuniform vec4 uPosition;\nuniform float uDepth;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy;\ngl_Position = uMVP*vec4(aPosition[0]+uPosition[0],-aPosition[1]+uPosition[1],uPosition[2],1.0);\n}";
r.Nm="attribute vec4 aPosition;\nattribute vec4 aTexCoord;\nattribute vec3 aOrigin;\nuniform mat4 uMVP;\nuniform vec4 uScale;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy * uScale[2];\nvec4 pos = (uMVP * vec4(aOrigin, 1.0));\ngl_Position = pos + vec4(aPosition.x*uScale.x*pos.w, (aPosition.y+uScale.w)*uScale.y*pos.w, 0.0, 0.0);\n}";r.zi="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord);\nif(c.w < 0.01){ discard; }\ngl_FragColor = c*uColor;\n}";
r.vk="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMVP;\nvarying vec2 vTexCoord;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\nvTexCoord = aTexCoord;\n}";r.oo="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nconst vec4 gray = vec4(0.125, 0.125, 0.125, 1.0);\nvoid main() {\nfloat fade = smoothstep(0.51, 0.55, vTexCoord.t);\ngl_FragColor = mix(texture2D(uSampler, vTexCoord), gray, fade);\n}";r.so="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uSampler, vTexCoord);\n}";
r.ol="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform mat3 uNorm;\nvarying vec3 vNormal;\nvarying vec4 vPosition;\nvoid main(){ \nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nvec4 c = uMV * vec4(aPosition, 1.0);\nvNormal = uNorm * (aPosition.xyz - vec3(0.5));\nvPosition = camSpacePos;\n}";r.nl="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uNFactor;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec4 c = texture2D(uSampler, vec2(0,0));\nfloat l = dot(normalize(vNormal*uNFactor),ldir);\nc = mix(vec4(0.0,0.0,0.0,1.0),fogColor,max(0.0,-l*3.0));\ngl_FragColor = c;\n}";
r.ep="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uNFactor;\nuniform vec2 uRadius;\nuniform vec3 uPos;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec3 diff = uPos;\nfloat a = dot(ldir, ldir);\nfloat b = 2 * dot(ldir, diff);\nfloat c = dot(diff, diff) - (uRadius[0] * uRadius[0]);\nfloat i = 0;\nfloat discr = b * b - 4 * a * c;\nif (discr > 0.0) {}\n}\ngl_FragColor = fogColor;\n}";
r.Jm="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
r.Im="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 gridColor = mix(texture2D(uSampler, vTexCoord1), texture2D(uSampler, vTexCoord2), uGridBlend);\ngl_FragColor = mix(fogColor, gridColor, vFogFactor);\n}";r.Hm="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
r.Gm="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";r.Ko="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos; gl_Position.z+=uParams[0];\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uParams[1] * camDist);\nvTexCoord = aTexCoord;\n}";
r.Ho="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = mix(fogColor, texture2D(uSampler, vTexCoord), vFogFactor);\n}";r.Ek="attribute vec3 aPosition;\nattribute vec2 aTexCoord2;\nuniform mat4 uMV, uProj;\nuniform vec4 uParams;\nuniform vec4 uTransform;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos; gl_Position.z+=uParams[0];\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uParams[1] * camDist);\nvTexCoord = vec2(uTransform[0] * aTexCoord2[0] + uTransform[2], uTransform[1] * aTexCoord2[1] + uTransform[3]);\n}";
r.Bo="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 c = texture2D(uSampler, vTexCoord);\ngl_FragColor = mix(fogColor, c, vFogFactor);\ngl_FragColor[3] = c.w * uAlpha;\n}";r.Co="precision mediump float;\nuniform sampler2D uSampler;\nuniform sampler2D uSampler2;\nuniform float uAlpha;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 c = texture2D(uSampler, vTexCoord);\nvec4 c2 = texture2D(uSampler2, vTexCoord);\ngl_FragColor = mix(fogColor, c, vFogFactor);\ngl_FragColor[3] = c.w * uAlpha * c2.x;\n}";
r.cm="attribute vec3 aPosition;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\n}";r.bm="precision mediump float;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = vec4(fogColor.xyz, 1.0-vFogFactor);\n}";
r.Gk="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aNormal;\nuniform mat4 uMV, uProj;\nuniform mat3 uNorm;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvPosition = camSpacePos;\nvNormal = aNormal * uNorm;\n}";
r.Jo="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nuniform mat4 uMaterial;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec3 normal = normalize(vNormal);\nvec3 eyeDir = ldir;\nvec3 refDir = reflect(-ldir, normal);\nfloat specW = pow(max(dot(refDir, eyeDir), 0.0), uMaterial[3][0]);\nfloat diffW = max(dot(normal, ldir), 0.0);\nvec4 lcolor = uMaterial[0]+(uMaterial[1]*diffW)+(uMaterial[2]*specW);\nvec4 tcolor = texture2D(uSampler, vTexCoord);\ngl_FragColor = mix(fogColor, vec4(lcolor.xyz*(1.0/255.0), 1.0) * tcolor, vFogFactor);\n}";
r.Io="precision mediump float;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nuniform mat4 uMaterial;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec3 normal = normalize(vNormal);\nvec3 eyeDir = ldir;\nvec3 refDir = reflect(-ldir, normal);\nfloat specW = pow(max(dot(refDir, eyeDir), 0.0), uMaterial[3][0]);\nfloat diffW = max(dot(normal, ldir), 0.0);\nvec4 lcolor = uMaterial[0]+(uMaterial[1]*diffW)+(uMaterial[2]*specW);\ngl_FragColor = mix(fogColor, vec4(lcolor.xyz*(1.0/255.0), 1.0), vFogFactor);\n}";
r.Go="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvBarycentric = camSpacePos.xyz;\n}";r.Fo="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\n#ifdef GL_OES_standard_derivatives\nvec3 nx = dFdx(vBarycentric);\nvec3 ny = dFdy(vBarycentric);\nvec3 normal=normalize(cross(nx,ny));\ngl_FragColor = vec4(vec3(max(0.0,normal.z*(204.0/255.0))+(32.0/255.0)),1.0);\n#else\ngl_FragColor = vec4(1.0,1.0,1.0,1.0);\n#endif\n}";
r.Ik="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvBarycentric = aBarycentric;\n}";r.Hk="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nfloat edgeFactor(){\n#ifdef GL_OES_standard_derivatives\nvec3 d = fwidth(vBarycentric);\nvec3 a3 = smoothstep(vec3(0.0), d*1.0, vBarycentric);\nreturn min(min(a3.x, a3.y), a3.z);\n#else\nfloat a = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);\nreturn a > 0.1 ? 1.0 : smoothstep(0.0,1.0,a*10.0);\n#endif\n}\nvoid main() {\ngl_FragColor = mix(fogColor, vec4( mix(vec3(0.0), texture2D(uSampler, vTexCoord).rgb, edgeFactor()) , 1.0), vFogFactor);\n}";
r.Lo="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nfloat edgeFactor(){\n#ifdef GL_OES_standard_derivatives\nvec3 d = fwidth(vBarycentric);\nvec3 a3 = smoothstep(vec3(0.0), d*1.0, vBarycentric);\nreturn min(min(a3.x, a3.y), a3.z);\n#else\nfloat a = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);\nreturn a > 0.1 ? 1.0 : smoothstep(0.0,1.0,a*10.0);\n#endif\n}\nvoid main() {\nif (edgeFactor() < 0.5){ gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); } else { discard; }}";
r.Mo="attribute vec3 aPosition;\nattribute vec2 aTexCoord2;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord2;\nvBarycentric = aBarycentric;\n}";r.Eo="attribute vec3 aPosition;\nuniform mat4 uMV, uProj;\nvarying float vDepth;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\n}";
r.Do="precision mediump float;\nuniform sampler2D uSampler;\nvarying float vDepth;\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";r.Pm="\nattribute vec4 aPosition;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uData;\nuniform vec4 uColor;\nuniform float uDepth;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nvoid main(void){\nint i=int(aPosition.x);\nif(i==0) gl_Position=uProjectionMatrix*vec4(floor(uData[0][0]+0.1),floor(uData[0][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[0][2], uData[0][3]);\nif(i==1) gl_Position=uProjectionMatrix*vec4(floor(uData[1][0]+0.1),floor(uData[1][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[1][2], uData[1][3]);\nif(i==2) gl_Position=uProjectionMatrix*vec4(floor(uData[2][0]+0.1),floor(uData[2][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[2][2], uData[2][3]);\nif(i==3) gl_Position=uProjectionMatrix*vec4(floor(uData[3][0]+0.1),floor(uData[3][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[3][2], uData[3][3]);\nvec4 c=uColor*(1.0/255.0);\nc.w*=1.0;\nvColor=c;\n}";
r.Om="precision mediump float;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nuniform sampler2D uSampler;\nvoid main(void){\nvec4 c=texture2D(uSampler, vec2(vTexcoords.x, vTexcoords.y) );\nc*=vColor;\nif(c.w < 0.01){ discard; }\ngl_FragColor = c;\n}";function xa(a,b,c,d,e,f,g){this.g=a;this.h=a.h;this.pj=this.w=null;this.ke=this.Nc=this.k=0;this.oi=f||!1;this.nj=g||"linear";this.za=null;this.cf=!1;this.J=c;null!=b&&this.load(b,null,null,e)}xa.prototype.v=function(){this.h.deleteTexture(this.w)};
xa.prototype.size=function(){return this.k};
function Va(a,b,c,d,e,f){var g=a.h;a.w=g.createTexture();g.bindTexture(g.TEXTURE_2D,a.w);!0==f?(f=g.REPEAT,a.oi=!0):f=g.CLAMP_TO_EDGE;g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,f);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,f);f=!1;switch(e){case "linear":g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR);break;case "trilinear":g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR_MIPMAP_LINEAR);g.texParameteri(g.TEXTURE_2D,
g.TEXTURE_MAG_FILTER,g.LINEAR);f=!0;break;default:g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.NEAREST),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.NEAREST)}g.pixelStorei(g.UNPACK_ALIGNMENT,1);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,b,c,0,g.RGBA,g.UNSIGNED_BYTE,d);!0==f&&g.generateMipmap(g.TEXTURE_2D);g.bindTexture(g.TEXTURE_2D,null);a.Nc=b;a.ke=c;a.k=b*c*4;a.cf=!0}
function ya(a,b,c,d){var e=a.h;performance.now();a.w=e.createTexture();e.bindTexture(e.TEXTURE_2D,a.w);!0==d?(d=e.REPEAT,a.oi=!0):d=e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,d);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,d);d=!1;a.nj=c;switch(c){case "linear":e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);break;case "trilinear":e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR);e.texParameteri(e.TEXTURE_2D,
e.TEXTURE_MAG_FILTER,e.LINEAR);d=!0;break;default:e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)}!0!=r.ln&&(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,b),!0==d&&e.generateMipmap(e.TEXTURE_2D));e.bindTexture(e.TEXTURE_2D,null);a.Nc=b.naturalWidth;a.ke=b.naturalHeight;a.k=b.naturalWidth*b.naturalHeight*4;a.cf=!0}
xa.prototype.load=function(a,b,c,d){this.za=r.Ia.xh(a,function(){if(null==this.J||!0!=this.J.N)ya(this,this.za,this.nj,this.oi),this.za=null,b&&b()}.bind(this),function(){(null==this.J||!0!=this.J.N)&&c&&c()}.bind(this),null,d)};
xa.prototype.createFramebuffer=function(a,b){if(null!=this.w){var c=this.h,d=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,d);d.width=a;d.height=b;c.bindTexture(c.TEXTURE_2D,this.w);var e=c.createRenderbuffer();c.bindRenderbuffer(c.RENDERBUFFER,e);c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_COMPONENT16,a,b);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,this.w,0);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.RENDERBUFFER,e);c.bindTexture(c.TEXTURE_2D,
null);c.bindRenderbuffer(c.RENDERBUFFER,null);c.bindFramebuffer(c.FRAMEBUFFER,null);this.pj=d}};r.Gp=1.1;r.Pp=1;r.ln=!1;r.Jg=null;
function Wa(a,b,c,d,e){this.j=e||{};this.Fb(e);this.J=a;this.ik=this.jk=this.kk=this.ii=null;this.Tc=b;this.ci=this.un=this.bi=this.N=!1;this.wh=null;this.Lj=0;this.Lm=[];this.Ff=[];this.ek=d;this.Xe=this.Ie=null;a=this.Tc.getBoundingClientRect();this.R=[a.width,a.height];this.og=[a.width,a.height];this.pa=!0;this.Qc=[0,1,0];this.g=new ia(b,this.R,this.j.mi,this.j.ni);this.p=new Xa(this,45,2,12E5);r.f.create();r.f.create();r.f.create();r.f.create();this.Pe=this.Bd=this.uk=this.yg=this.Sf=this.vh=
null;this.We=1024;this.Vc=this.le=this.Ld=this.Md=this.lk=null;this.fe=0;this.Cd=Array(512);this.$e=Array(512);b=0;for(a=this.Cd.length;b<a;b++)this.Cd[b]=[],this.$e[b]=0;this.Vm=[];this.Oi={};this.ra=[0,0,0];this.Df=[0,0,0];this.Jk=this.jj=this.Wi=1;this.Qc=[0,0,0];this.Ah=[0,0,0];r.f.create();this.$f=[0,0,100];window.addEventListener("resize",this.pg.bind(this),!1);this.g.Cb();this.ii=new v(this.g,r.Ko,r.Ho);this.Sn=new v(this.g,r.Ek,r.Bo);this.Tn=new v(this.g,r.Ek,r.Co);this.Mn=new v(this.g,r.Gk,
r.Io);this.Rn=new v(this.g,r.Gk,r.Jo);this.In=new v(this.g,r.cm,r.bm);this.kk=new v(this.g,r.Ik,r.Hk);this.jk=new v(this.g,r.Ik,r.Lo);this.Un=new v(this.g,r.Mo,r.Hk);this.Hn=new v(this.g,r.Go,r.Fo);new v(this.g,r.Jm,r.Im);new v(this.g,r.vk,r.oo);this.hk=new v(this.g,r.vk,r.so);new v(this.g,r.ol,r.nl);this.gk=new v(this.g,r.Eo,r.Do);new v(this.g,r.Hm,r.Gm);this.te=new v(this.g,r.ql,r.pl);this.Ln=new v(this.g,r.bn,r.$m);this.Kn=new v(this.g,r.Xm,r.Wm);this.ue=new v(this.g,r.Zm,r.Ym);this.On=new v(this.g,
r.Lk,r.Kk);this.Qn=new v(this.g,r.Qk,r.Kk);this.Nn=new v(this.g,r.Lk,r.Ck);this.Pn=new v(this.g,r.Qk,r.Ck);new v(this.g,r.Fn,r.En);this.ik=new v(this.g,r.yo,r.zi);new v(this.g,r.zo,r.zi);this.ta=new v(this.g,r.Pm,r.Om);this.Jn=new v(this.g,r.Nm,r.zi);b=r.yb.rl();this.vh=new Pa(this.g,b,0,this.J);b=new Uint8Array(16384);for(a=0;64>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),1>a||63<=a||1>c||63<=c?(b[d]=255,b[d+1]=255,b[d+2]=255):(b[d]=32,b[d+1]=32,b[d+2]=32),b[d+3]=255;this.Sf=new xa(this.g);Va(this.Sf,64,
64,b,"trilinear",!0);b=r.yb.Si(32,64);this.yg=new Pa(this.g,b,0,this.J);b=r.yb.Si(128,256);new Pa(this.g,b,0,this.J);b=this.We;a=new Uint8Array(b*b*4);this.Bd=new xa(this.g);Va(this.Bd,b,b,a);this.Bd.createFramebuffer(b,b);this.Pe=new xa(this.g);Va(this.Pe,b,b,a);this.Pe.createFramebuffer(b,b);this.xo=new xa(this.g,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACACAMAAADTa0c4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAABIFJREFUeNrsnNuyqzAIhsP7v/Se6Yxra0L4OUVNCzetVqP5DAQItrVOiLg95739NnfOaR99RDj6esBw+CKZXiMK4PiuBkAcANoHAP3J5fzzAV2jePQIt6f4Ndb/MIChlVcCEFpAACZPfN4KUAF0/ufboDW3AuBMFgBwHTCfg2ftYgDUKBuA1ABuHKvA2P+5XdONIEt7BO2o2MdlAJoTQOsV6GEAswt0Zq/bsBhdeQQkqEDMwmIAnJHzA8i3ASkWRFKBbADyLGB3mlYD6DyhA4DfBlgsBDtirUPcBgC5woStYMgVtgKATWcB6DskKUEkGFLYrGw3+l3ydR16wKbbPDlWp4Xfo9vZwR1jtOMA6GkABrdvNmt1Vluy6pyvxu4Xt62fquyTggCTsIkCoIuv8gAA08w+ATBXAdSRY56xPDFPx/VPWFZp5v65kFMPgFjP70YASMfRsDn01xLPcwkRq1HLMoK647hR8v+nId74MQBjvIbUQePra42ZVXVcBCR3mIY89mYAlNGLflqA0V1seosCQNMg80B0bsLGAIDNwvFyiqu66ngVGGMGVBwyWwIwpty2DqEr/qf0Bq+DbjYkkcr4VUoOxiRjrYn3YY5SC4BQB/cF0Lq4kD1RCJ+tN4g6Jps5zfWu+QmSz9sUABkA0BIAXocmBwCJ99MDIASATkmtLQAIft4IgE/ZDStZ59yQbOQQAGZWYMbZ3FFCAGRHnwHQznegGAE+zwxNi8kALCOgS9tzAC4jYG1Qo0myRm0Ae/z8eleqewBoZLwfUswCsbT1KgBZD6QAzAEoXUe3K+xxVf2uLf5U3nBeMPRyACW/LtrwVX989id3PRQOG5Io6vh9XwC6stHIdGdJozun03lxNlwvH4u6UgDM8/LmJyx7ak12feEebaXmUwCOYJWk1JcYKsl74HL74wAaH93NqkE1FSKXc4cv0AjaPEEPgE4ru/ieWdvzVq/4psG3AYDFHlEAioQCuEgMgPjK1VDrqlkbTABAiQBGK38B0BlBSf9xtiAJQDM4NtDqMlaeyduTtkDjHgAtEQBj5ZGK2QE0aCcMAIxLSw0WVYlGDgOQXWE+afouAM0S398O4Nej3wIQf4cIHSfz9pbWugyep4MFIAFARvspbm8BcE2DOdvWnCJQAWFhJ/hKzh4AaB2A7NxedKmLPc+6PN4cL2S8GYC1QMIEQJvmFsJfxdvkEQAoLV4AogBS8/kNvdXlWe5GKhABvQUAZASDALJffY1XfsrToFXFbvYD1gBo6wC8LR7/uvj9CwHcfWuoUJItsVl5nwWAnhxxqsXatUq0OYCcaS/fkbK61u5H8jwAuUIEZXHNL1Jmub5oSKZWiDR9FttM4HEAigqRpn8TeB2AuWNiByAXSHCGbB7/3qYCfgCgPgADEEskbjCCaJDB/+kR6wP4P1Obl8jsBwDUB4yAxqKkthaATjX0KmCtDyCxm+yIMLjCbwBgrg94FYC3h8vLPPmfAVBSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlLy9fJPgAEAvWMULbGsSjwAAAAASUVORK5CYII=",
this.J,0,!0);b=new Uint8Array(2048);for(a=0;8>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=255;b=this.g.h;this.Md=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,this.Md);b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,0,1,2,0,0,1,3,0,0,1]),b.STATIC_DRAW);this.Md.I=4;this.Md.C=4;this.Ld=b.createBuffer();b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,this.Ld);b.bufferData(b.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,2,1,0,3,2]),b.STATIC_DRAW);this.Ld.I=1;this.Ld.C=6;b=new Uint8Array(1024);
for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=255,b[d+1]=0,b[d+2]=0,b[d+3]=255;this.lk=new xa(this.g);Va(this.lk,16,16,b);b=new Uint8Array(1024);for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=255,b[d+1]=255,b[d+2]=255,b[d+3]=255;this.xf=new xa(this.g);Va(this.xf,16,16,b);b=new Uint8Array(1024);for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=255;this.Pi=new xa(this.g);Va(this.Pi,16,16,b);new Uint8Array(2048);e="............................................................ .....xxxxx.......................xxxxx...................... .....xxxxx.......................xxxxx...................... .....xxxxx.......................xxxxx...................... xxxxxxxxxxxxxxxx............xxxxxxxxxxxxxxxx................ xxxxxxxxxxxxxxxx............xxxxxxxxxxxxxxxx................ ............................................................".split(" ");
b=new Uint8Array(2048);for(a=0;8>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=0;a=0;for(var f=e.length;a<f;a++){var g=e[a];c=0;for(var h=g.length;c<h;c++)d=4*(64*a+c),"."!=g.charAt(c)&&(b[d]=255,b[d+1]=255,b[d+2]=255,b[d+3]=255)}this.an=new xa(this.g);Va(this.an,64,8,b,"linear",!0);this.Ni=new ca(this.g);this.Vc=new va(this.g,this.J);this.rg=new Float32Array(96);this.Bn=new Qa(this.g,this.J,!0,64,!0,8);new Qa(this.g,this.J,!1,64,!0,8);b=Array(196605);for(a=0;196605>a;a+=9)b[a]=
1,b[a+1]=0,b[a+2]=0,b[a+3]=0,b[a+4]=1,b[a+5]=0,b[a+6]=0,b[a+7]=0,b[a+8]=1;a=this.g.h;r.Yd=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,r.Yd);a.bufferData(a.ARRAY_BUFFER,new Float32Array(b),a.STATIC_DRAW);r.Yd.I=3;r.Yd.C=b.length/3;!0==window.MelownMobile_&&null!=this.g.xa&&(this.g.xa.style.width="100%",this.g.xa.style.height="100%");b=window.MelownScreenScaleFactor_;bb(this,Math.floor(this.R[0]*b),Math.floor(this.R[1]*b))}k=Wa.prototype;
k.pg=function(){if(!0!=this.N){var a=this.Tc.getBoundingClientRect();bb(this,Math.floor(a.width),Math.floor(a.height));this.ek&&this.ek()}};k.v=function(){!0!=this.N&&(this.N=!0,null!=this.An&&this.An.v(),this.ec.reset(),this.vh&&this.vh.v(),this.Sf&&this.Sf.v(),this.yg&&this.yg.v(),this.uk&&this.uk.v(),this.Bd&&this.Bd.v(),this.Pe&&this.Pe.v(),this.Tc.removeChild(this.g.xa))};
function bb(a,b,c){var d=a.p;d.Zd=b/c;d.pa=!0;a.R=[b,c];a.og=[b,c];a.g.resize(a.R,void 0);a.g.clear(!0,!1);!0!=a.un&&!0!=a.bi&&!0!=a.ci&&cb(a);d=[];d[0]=2/b;d[1]=0;d[2]=0;d[3]=0;d[4]=0;d[5]=-2/c;d[6]=0;d[7]=0;d[8]=0;d[9]=0;d[10]=1;d[11]=0;d[12]=0.5*-b*d[0];d[13]=0.5*-c*d[5];d[14]=0;d[15]=1;a.le=d}function Oa(a,b,c){var d=[0,0,0,1],d=r.f.mg(c,[b[0],b[1],b[2],1]);return 0!=d[3]?(b=[0,0,0],b[0]=0.5*(d[0]/d[3]+1)*a.R[0],b[1]=0.5*(-(d[1]/d[3])+1)*a.R[1],b[2]=d[2]/d[3],b):[0,0,0]}
function db(a,b){var c=a.g.h;switch(b){case "base":var d=a.og[0],e=a.og[1];c.clearColor(0,0,0,1);ua(a.g,null);c=a.p;c.Zd=d/e;c.pa=!0;a.R=[d,e];a.g.resize(a.R,!0);a.p.update();a.bi=!1;break;case "depth":ua(a.g,a.Bd),a.og=[a.R[0],a.R[1]],c.clearColor(1,1,1,1),c.enable(c.DEPTH_TEST),d=a.We,c.viewport(0,0,d,d),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),a.R=[d,d],a.g.clear(),a.p.update(),a.bi=!0}}function Ia(a,b){return-Math.round(2E3*(1+a.jj*b[1]*(1-b[2]+b[2]*a.Jk))*b[0])}
function Ga(a,b,c,d){var e=b+"*"+c+"*"+d,f=a.Oi[e];null==f&&(f=new xa(a.g,b,a.J,0,null,d,c),a.Oi[e]=f);return f}k.Fb=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.vb(b,a[b])};k.vb=function(a,b){switch(a){case "rendererAntialiasing":this.j.ni=r.wb(b,!0);break;case "rendererAllowScreenshots":this.j.mi=r.wb(b,!1)}};k.bc=function(a){switch(a){case "rendererAntialiasing":return this.j.ni;case "rendererAllowScreenshots":return this.j.mi}};function M(a){this.i=a;this.g=a.g}k=M.prototype;
k.clear=function(a){null!=a&&this.g.clear(a.clearDepth||!0,a.clearColor||!1,a.color||[255,255,255,255],null!=a.depth?a.depth:1);return this};k.Sc=function(a){return null==a||"object"!==typeof a?this:this.g.Sc({Pc:null!=a.blend?a.blend:!1,ze:null!=a.stencil?a.stencil:!1,Ig:null!=a.zoffset?a.zoffset:0,zf:null!=a.zwrite?a.zwrite:!0,yf:null!=a.ztest?a.ztest:!0,De:null!=a.zequal?a.zequal:!0,td:null!=a.culling?a.culling:!0})};k.Gc=function(a){null!=a&&this.g.Gc(a);return this};
k.createTexture=function(a){if(null==a||"object"!==typeof a)return null;var b=a.source;if(null==b)return null;var c=a.filter||"linear",d=a.repeat||!1;if(b instanceof Uint8Array){var e=a.width;a=a.height;if(e&&a){var f=new xa(this.g);Va(f,e,a,b,filter,d);return f}}return b instanceof Image?(f=new xa(this.g),ya(f,b,c,d),f):null};k.ao=function(a){a&&a.v();return this};
k.Dl=function(a){return null==a||"object"!==typeof a?null:new Pa(this.g,{D:a.vertices,Fg:a.uvs,Xk:a.normals,Yo:a["vertex-size"],Uo:a["uv-size"],To:a["normal-size"]||3,Xp:a["vertex-attr"],Wp:a["uv-attr"],Vp:a["normal-attr"],m:a.bbox},0,this.i.J)};k.Zn=function(a){a&&a.v();return this};k.createShader=function(a){if(null==a||"object"!==typeof a)return null;var b=a["vertex-shader"];a=a["fragment-shader"];if(null!=b&&a)return new v(this.g,b,a)};k.$n=function(a){null!=a&&null!=a.v&&resource.v();return this};
k.jl=function(){return this};k.sl=function(){return this};
k.Tl=function(a){if(null==a||"object"!==typeof a||null==!a.mesh||!a["shader-variables"])return this;var b=a.vertex||"aPosition",c=a.uv||"aTexCoord",d=a.normal||"aNormal",e=a["shader-variables"],f=a.shader||"textured",g=this.i,h=a.mesh;a=a.texture;var l=eb(g.p),m=fb(g.p),n=g.fe;if("string"===typeof f)switch(f){case "hit":e.uMV||(e.uMV=["mat4",l]);e.uProj||(e.uProj=["mat4",m]);a=d=c=null;f=g.gk;break;case "shaded":case "textured":case "textured-and-shaded":e.uMV||(e.uMV=["mat4",l]),e.uProj||(e.uProj=
["mat4",m]),e.uFogDensity||(e.uFogDensity=["float",n]),d="textured"==f?null:"aNormal",f="textured"==f?g.ii:"shaded"==f?g.Mn:g.Rn}g.g.useProgram(f,b,c,d,null);for(var p in e)if(b=e[p],2==b.length)switch(b[0]){case "floatArray":b=b[1];l=f.h;null!=l&&null!=f.qa&&(m=f.getUniform(p),null!=m&&l.uniform1fv(m,b));break;case "float":Ta(f,p,b[1]);break;case "mat3":b=b[1];l=f.h;null!=l&&null!=f.qa&&(m=f.getUniform(p),null!=m&&l.uniformMatrix3fv(m,!1,b));break;case "mat4":La(f,p,b[1]);break;case "vec2":Ma(f,
p,b[1]);break;case "vec3":Sa(f,p,b[1]);break;case "vec4":Ka(f,p,b[1]);break;case "sampler":ta(f,p,b[1])}null!=a&&g.g.bindTexture(a);h.Ca(f,"aPosition",a?c:null,d,null);return this};
k.drawImage=function(a){if(null==a||"object"!==typeof a||null==a.texture||null==a.rect)return this;var b=a.rect;this.i.drawImage(b[0],b[1],b[2],b[3],a.texture,a.color||[255,255,255,255],null!=a.depth?a.depth:0,null!=a["depth-test"]?a["depth-test"]:!1,null!=a.blend?a.blend:!1,null!=a["write-depth"]?a["write-depth"]:!1,null!=a["use-state"]?a["use-state"]:!1);return this};
k.Vg=function(a){if(null==a||"object"!==typeof a||null==a.texture||null==a.mvp)return this;this.i.Vg(a.mvp,a.texture,a.color||[255,255,255,255],null!=a["depth-test"]?a["depth-test"]:!1,null!=a.blend?a.blend:!1,null!=a["write-depth"]?a["write-depth"]:!1,null!=a["use-state"]?a["use-state"]:!1);return this};
k.Me=function(a){if(null==a||"object"!==typeof a||null==a.points)return this;this.i.Me(a.points,a.size||2,a.color||[255,255,255,255],null!=a["depth-test"]?a["depth-test"]:!1,null!=a.blend?a.blend:!1,null!=a["write-depth"]?a["write-depth"]:!1,null!=a["use-state"]?a["use-state"]:!1);return this};k.Ql=function(){return this};k.de=function(){return this};
k.Ml=function(a){if(null==a||"object"!==typeof a)return this;var b=a.text,c=a.coords;if(!b||!c)return this;var d=a.size||16;gb(this.i,c[0]-0.5*hb(d,b),c[1],d,b,a.color||[255,255,255,255],a.depth,a["use-state"]||!1);return this};k.ge=function(a,b){return Oa(this.i,a,b)};k.im=function(){return this.i.R.slice()};k.Fb=function(a){this.i.Fb(a);return this};k.vb=function(a,b){this.i.vb(a,b);return this};k.bc=function(a){return this.i.bc(a,value_)};M.prototype.clear=M.prototype.clear;
M.prototype.createState=M.prototype.Sc;M.prototype.setState=M.prototype.Gc;M.prototype.createTexture=M.prototype.createTexture;M.prototype.removeTexture=M.prototype.ao;M.prototype.createMesh=M.prototype.Dl;M.prototype.removeMesh=M.prototype.Zn;M.prototype.createshader=M.prototype.jp;M.prototype.removeResource=M.prototype.$n;M.prototype.addJob=M.prototype.jl;M.prototype.clearJobs=M.prototype.sl;M.prototype.drawMesh=M.prototype.Tl;M.prototype.drawImage=M.prototype.drawImage;
M.prototype.drawBillboard=M.prototype.Vg;M.prototype.drawLineString=M.prototype.Me;M.prototype.drawJobs=M.prototype.Ql;M.prototype.drawBBox=M.prototype.de;M.prototype.drawDebugText=M.prototype.Ml;M.prototype.getCanvasCoords=M.prototype.ge;M.prototype.getCanvasSize=M.prototype.im;M.prototype.setConfigParams=M.prototype.Fb;M.prototype.setConfigParam=M.prototype.vb;M.prototype.getConfigParam=M.prototype.bc;
function Ea(a,b,c,d,e,f){this.A=[];this.W=[];this.A[0]=null!=a?a:Number.POSITIVE_INFINITY;this.A[1]=null!=b?b:Number.POSITIVE_INFINITY;this.A[2]=null!=c?c:Number.POSITIVE_INFINITY;this.W[0]=null!=d?d:Number.NEGATIVE_INFINITY;this.W[1]=null!=e?e:Number.NEGATIVE_INFINITY;this.W[2]=null!=f?f:Number.NEGATIVE_INFINITY;ib(this)}Ea.prototype.oa=function(){return new Ea(this.A[0],this.A[1],this.A[2],this.W[0],this.W[1],this.W[2])};function ob(a,b){return a.W[b]-a.A[b]}
function ib(a){a.Wh=Math.abs(Math.max(a.W[0]-a.A[0],a.W[1]-a.A[1],a.W[2]-a.A[2]))}Ea.prototype.Ef=function(a){return null!=a?(a[0]=0.5*(this.A[0]+this.W[0]),a[1]=0.5*(this.A[1]+this.W[1]),a):[0.5*(this.A[0]+this.W[0]),0.5*(this.A[1]+this.W[1]),0.5*(this.A[2]+this.W[2])]};
function Xa(a,b,c,d){this.ha=a;this.O=[0,0,0];this.Hd=[0,0,0];this.Zd=1;this.ah=b;this.mf=c;this.yd=d;this.ri=!1;this.jf=r.f.create();this.ve=r.f.create();this.rf=r.f.create();this.re=r.f.create();this.ac=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];this.qk=[0,0,0,0];this.pa=!0}k=Xa.prototype;k.kc=function(a){this.O=a;this.pa=!0};k.we=function(a){this.ri=!1;this.Hd=a;this.pa=!0};
k.oa=function(a){a=new Xa(this.ha,null!=a?a:this.Zc(),this.mf,this.yd);a.kc(this.$c());a.we(this.mb());a.Zd=this.Zd;a.pa=!0;a.update();return a};k.$c=function(){return[this.O[0],this.O[1],this.O[2]]};k.mb=function(){return[this.Hd[0],this.Hd[1],this.Hd[2]]};k.Zc=function(){return this.ah};function eb(a){a.pa&&a.update();return a.jf}function fb(a){a.pa&&a.update();return a.rf}function pb(a){a.pa&&a.update();return a.re}
function qb(a,b){a.pa&&a.update();r.f.Ea(a.jf,b,a.qk);var c=r.r.length(a.qk);return c<a.mf?[Number.POSITIVE_INFINITY,c]:[a.rf[0]/c,c]}k.Fe=function(a,b){this.pa&&this.update();var c=a.A,d=a.W;b&&(c=[c[0]-b[0],c[1]-b[1],c[2]-b[2]],d=[d[0]-b[0],d[1]-b[1],d[2]-b[2]]);c=[[c[0],c[1],c[2],1],[c[0],c[1],d[2],1],[c[0],d[1],c[2],1],[c[0],d[1],d[2],1],[d[0],c[1],c[2],1],[d[0],c[1],d[2],1],[d[0],d[1],c[2],1],[d[0],d[1],d[2],1]];for(d=0;6>d;d++){for(var e=!0,f=0;8>f;f++)if(0<=r.Gg.Sa(this.ac[d],c[f])){e=!1;break}if(e)return!1}return!0};
k.update=function(){this.ri||(r.f.multiply(r.ub(2,r.ua(-this.Hd[2])),r.ub(0,r.ua(-this.Hd[1]-90)),this.ve),r.f.multiply(this.ve,r.ub(2,r.ua(-this.Hd[0])),this.ve));r.f.multiply(this.ve,r.pc(-this.O[0],-this.O[1],-this.O[2]),this.jf);this.rf=!0==this.wn?r.xn(this.al,this.Zd,this.mf,this.yd):r.zn(this.ah,this.Zd,this.mf,this.yd);r.f.multiply(this.rf,this.jf,this.re);this.ac[0]=[0,0,1,1];this.ac[1]=[0,0,-1,1];this.ac[2]=[1,0,0,1];this.ac[3]=[-1,0,0,1];this.ac[4]=[0,1,0,1];this.ac[5]=[0,-1,0,1];var a=
r.f.create();r.f.Kc(this.re,a);for(var b=0;6>b;b++)this.ac[b]=r.f.mg(a,this.ac[b]);this.pa=!1};
function cb(a,b,c){if(b){var d=r.f.create();r.f.multiply(r.tf(2,2,2),r.pc(-0.5,-0.5,-0.5),d);var e=r.f.create(),f=a.p.$c();r.f.multiply(r.pc(f[0],f[1],f[2]-400),r.co(Math.min(0.9*a.p.yd,6E5)),e);f=r.f.create();r.f.multiply(pb(a.p),e,f);r.f.multiply(f,d,f);a.g.useProgram(c,"aPosition","aTexCoord");a.g.bindTexture(b);ta(c,"uSampler",0);La(c,"uMVP",f);a.g.h.depthMask(!1);a.yg.Ca(c,"aPosition","aTexCoord");a.g.h.depthMask(!0);a.g.h.enable(a.g.h.CULL_FACE)}}
Wa.prototype.Me=function(a,b,c,d,e,f,g){var h=this.g.h,l=0,m=a.length;if(32<m)for(var n=0;n<m;n+=31)this.Me(a.slice(n,n+32),b,c,d,e,f,g);else{for(n=0;n<m;n++){var p=a[n];this.rg[l]=p[0];this.rg[l+1]=p[1];this.rg[l+2]=p[2]||0;l+=3}!0!=g&&(!0!=d&&h.disable(h.DEPTH_TEST),!0==e&&(h.blendEquationSeparate(h.FUNC_ADD,h.FUNC_ADD),h.blendFuncSeparate(h.SRC_ALPHA,h.ONE_MINUS_SRC_ALPHA,h.ONE,h.ONE_MINUS_SRC_ALPHA),h.enable(h.BLEND)),!1===f&&h.depthMask(!1),h.disable(h.CULL_FACE));this.g.useProgram(this.ue,"aPosition",
null);La(this.ue,"uMVP",this.le);Sa(this.ue,"uScale",[2/this.R[0],2/this.R[1],0.5*b]);Ka(this.ue,"uColor",null!=c?c:[255,255,255,255]);Sa(this.ue,"uPoints",this.rg);this.Bn.Ca(this.ue,"aPosition",m);!0!=g&&(!0!=d&&h.enable(h.DEPTH_TEST),!0==e&&h.disable(h.BLEND),!1===f&&h.depthMask(!1),h.enable(h.CULL_FACE))}};
Wa.prototype.drawImage=function(a,b,c,d,e,f,g,h,l,m,n){if(null!=e&&null!=this.le){var p=this.g.h;!0!=n&&(!0!=h&&p.disable(p.DEPTH_TEST),!0==l&&(p.blendEquationSeparate(p.FUNC_ADD,p.FUNC_ADD),p.blendFuncSeparate(p.SRC_ALPHA,p.ONE_MINUS_SRC_ALPHA,p.ONE,p.ONE_MINUS_SRC_ALPHA),p.enable(p.BLEND)),!1===m&&p.depthMask(!1),p.disable(p.CULL_FACE));this.g.useProgram(this.ta,"aPosition",null);this.g.bindTexture(e);e=this.Md;p.bindBuffer(p.ARRAY_BUFFER,e);p.vertexAttribPointer(this.ta.getAttribute("aPosition"),
e.I,p.FLOAT,!1,0,0);e=this.Ld;p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,e);La(this.ta,"uProjectionMatrix",this.le);La(this.ta,"uData",[a,b,0,0,a+c,b,1,0,a+c,b+d,1,1,a,b+d,0,1]);Ka(this.ta,"uColor",null!=f?f:[255,255,255,255]);Ta(this.ta,"uDepth",null!=g?g:0);p.drawElements(p.TRIANGLES,e.C,p.UNSIGNED_SHORT,0);!0!=n&&(!1===m&&p.depthMask(!0),!0!=h&&p.enable(p.DEPTH_TEST),!0==l&&p.disable(p.BLEND),p.enable(p.CULL_FACE))}};
Wa.prototype.Vg=function(a,b,c,d,e,f,g){var h=this.g.h;!0!=g&&(!0!=d&&h.disable(h.DEPTH_TEST),!0==e&&(h.blendEquationSeparate(h.FUNC_ADD,h.FUNC_ADD),h.blendFuncSeparate(h.SRC_ALPHA,h.ONE_MINUS_SRC_ALPHA,h.ONE,h.ONE_MINUS_SRC_ALPHA),h.enable(h.BLEND)),!1===f&&h.depthMask(!1),h.disable(h.CULL_FACE));this.g.useProgram(this.ta,"aPosition","aTexCoord");this.g.bindTexture(b);ta(this.ta,"uSampler",0);b=this.Md;h.bindBuffer(h.ARRAY_BUFFER,b);h.vertexAttribPointer(this.ta.getAttribute("aPosition"),b.I,h.FLOAT,
!1,0,0);b=this.Ld;h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,b);La(this.ta,"uProjectionMatrix",a);La(this.ta,"uData",[0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1]);Ka(this.ta,"uColor",null!=c?c:[255,255,255,255]);Ta(this.ta,"uDepth",0);h.drawElements(h.TRIANGLES,b.C,h.UNSIGNED_SHORT,0);!0!=g&&(!1===f&&h.depthMask(!0),!0!=d&&h.enable(h.DEPTH_TEST),!0==e&&h.disable(h.BLEND),h.enable(h.CULL_FACE))};
function gb(a,b,c,d,e,f,g,h){if(null!=a.le){var l=a.g.h;!0!=h&&(l.disable(l.CULL_FACE),null==g?l.disable(l.DEPTH_TEST):(l.depthFunc(l.LEQUAL),l.enable(l.DEPTH_TEST)));a.g.useProgram(a.ta,"aPosition",null);a.g.bindTexture(a.xo);var m=a.Md;l.bindBuffer(l.ARRAY_BUFFER,m);l.vertexAttribPointer(a.ta.getAttribute("aPosition"),m.I,l.FLOAT,!1,0,0);m=a.Ld;l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,m);La(a.ta,"uProjectionMatrix",a.le);Ka(a.ta,"uColor",f);Ta(a.ta,"uDepth",null!=g?g:0);f=d-1;var n=Math.round(0.5*d),
p=1/256,q=hb(d,e)+2,s=0,u=(s&15)<<4,t=s>>4<<4;La(a.ta,"uData",[b-2,c-2,u*p,0.0078125*t,b-2+q,c-2,(u+15)*p,0.0078125*t,b-2+q,c+d+1,(u+15)*p,0.0078125*(t+15),b-2,c+d+1,u*p,0.0078125*(t+15)]);l.drawElements(l.TRIANGLES,m.C,l.UNSIGNED_SHORT,0);for(var q=0,w=e.length;q<w;q++){s=e.charCodeAt(q)-32;u=(s&15)<<4;t=s>>4<<4;switch(s){case 12:case 14:case 27:case 28:case 64:case 73:case 76:case 84:La(a.ta,"uData",[b,c,u*p,0.0078125*t,b+n,c,(u+8)*p,0.0078125*t,b+n,c+d,(u+8)*p,0.0078125*(t+16),b,c+d,u*p,0.0078125*
(t+16)]);b+=n;break;default:La(a.ta,"uData",[b,c,u*p,0.0078125*t,b+f,c,(u+15)*p,0.0078125*t,b+f,c+d,(u+15)*p,0.0078125*(t+16),b,c+d,u*p,0.0078125*(t+16)]),b+=f}l.drawElements(l.TRIANGLES,m.C,l.UNSIGNED_SHORT,0)}!0!=h&&(l.enable(l.CULL_FACE),null==g&&l.enable(l.DEPTH_TEST))}}function hb(a,b){for(var c=a-1,d=Math.round(0.5*a),e=0,f=0,g=b.length;f<g;f++)switch(b.charCodeAt(f)-32){case 12:case 14:case 27:case 28:case 64:case 73:case 76:case 84:e+=d;break;default:e+=c}return e}
function rb(a){for(var b=0,c=a.Cd.length;b<c;b++){for(var d=a.$e[b],e=a.Cd[b],f=0;f<d;f++)e[f]=null;a.$e[b]=0}}r.yb={};r.yb.xg=function(a,b,c,d,e){a[e]=b[0];a[e+1]=b[1];a[e+2]=b[2];a[e+3]=c[0];a[e+4]=c[1];a[e+5]=c[2];a[e+6]=d[0];a[e+7]=d[1];a[e+8]=d[2]};r.yb.wg=function(a,b,c,d,e){a[e]=b[0];a[e+1]=b[1];a[e+2]=c[0];a[e+3]=c[1];a[e+4]=d[0];a[e+5]=d[1]};
r.yb.rl=function(){var a=5;a--;for(var b=r.yb,c=a*a*2,d=new Float32Array(9*c),c=new Float32Array(6*c),e=1*a,f=0,g=0,h=0;h<a;h++)for(var l=0;l<a;l++){var m=l*e,n=(l+1)*e,p=h*e,q=(h+1)*e;b.xg(d,[m,p,0],[n,p,0],[n,q,0],f);b.wg(d,[m,p],[n,p],[n,q],g);f+=9;g+=6;b.xg(d,[n,q,0],[m,q,0],[m,p,0],f);b.wg(d,[n,q],[m,q],[m,p],g);f+=9;g+=6}return{m:new Ea(0,0,0,1,1,1),D:d,Fg:c}};
r.yb.zg=function(a,b){b*=Math.PI;a=2*a*Math.PI;return[Math.cos(a)*Math.sin(b)*0.5+0.5,Math.sin(a)*Math.sin(b)*0.5+0.5,0.5*Math.cos(b)+0.5]};r.yb.Si=function(a,b){for(var c=r.yb,d=a*b*2,e=new Float32Array(9*d),d=new Float32Array(6*d),f=0,g=0,h=0;h<a;h++)for(var l=0;l<b;l++)c.en(l/b,h/a,(l+1)/b,(h+1)/a,e,f,d,g),f+=18,g+=12;return{m:new Ea(0,0,0,1,1,1),D:e,Fg:d}};
r.yb.en=function(a,b,c,d,e,f,g,h){var l=r.yb,m=[a,b],n=l.zg(a,d),p=[a,d],q=l.zg(c,b),s=[c,b],u=l.zg(c,d);c=[c,d];l.xg(e,n,l.zg(a,b),q,f);l.wg(g,p,m,s,h);l.xg(e,q,u,n,f+9);l.wg(g,s,c,p,h+6)};r.Yd=null;
function sb(a,b,c,d){this.j=d||{};this.Fb(d);this.J=a;this.rb=this.J.nh();this.nb=b;this.Cl=a.Cl;this.N=!1;this.Vk=0;this.j=d||{};this.Eh=!1;this.Zb=c.split("?")[0].split("/").slice(0,-1).join("/")+"/";this.O=new W(this,["obj",0,0,"fix",0,0,0,0,0,0]);this.Rj=this.O.oa();this.Qd={};this.sb={};this.o={};this.Gf={};this.Na=[];this.Qf=[];this.ya=[];this.wa=[];this.Bg=[];this.Ud=Array(500);this.Mj=null;this.Ke=new tb(0,{});this.cj="";this.lf=[];this.Ab=this.Xd=0;this.Kl=["base","hit"];this.Oe=[];this.bh=
!1;this.Hg={yh:[],Uj:[]};this.pe=!1;this.ec=new ub(this,1048576*this.j.eg);this.Fc=new ub(this,1048576*this.j.dg);this.ic=new ub(this,1048576*this.j.gg);vb(this);wb(this);this.Rb=new xb(this,this.j.Lh);this.i=this.J.i;this.p=this.i.p;this.wc=10;this.ra=[0,0,0];this.Qc=[0,0,1];this.Vi=0;this.n=new yb(this);this.vg=new zb(this);var e;a=this.nb.srses;this.Qd={};if(null==a)e=!1;else{for(e in a)b=new Fb(this,e,a[e]),this.Qd[e]=b;e=!0}if(e&&(e=this.nb.referenceFrame,null==e?e=!1:(this.sb=new Gb(this,e),
e=!1==this.sb.od?!1:!0),e)){var f;e=this.nb.credits;this.o={};if(null==e)f=!1;else{for(f in e)Hb(this,f,new Ib(this,e[f]));f=!0}if(f){f=this.nb.stylesheets;this.Bg=[];if(null!=f)for(var g in f)e=new Jb(this,g,f[g]),this.Bg[g]=e;g=this.nb.surfaces;this.Na=[];if(null==g)g=!1;else{f=0;for(e=g.length;f<e;f++)a=new Lb(this,g[f]),this.Na.push(a),a.d=this.Na.length-1;g=!0}if(g){g=this.nb.glue;this.Qf=[];if(null!=g)for(f=0,e=g.length;f<e;f++)a=new Lb(this,g[f],"glue"),this.Qf[a.e.join(";")]=a;g=this.nb.boundLayers;
this.wa=[];if(null!=g)for(var h in g)f=new Mb(this,g[h],h),this.wa[h]=f;h=this.nb.freeLayers;this.ya=[];if(null!=h)for(var l in h)g=new Lb(this,h[l],"free"),this.ya[l]=g;l=this.nb.namedViews;this.lf=[];if(null!=l)for(var m in l)h=new tb(0,l[m]),this.lf[m]=h;m=this.nb.view;null!=m&&(this.Mj=JSON.parse(JSON.stringify(m)));m=this.nb.browserOptions;this.Ri={};null!=m&&(this.Ri=JSON.parse(JSON.stringify(m)))}}}this.Ha=new Nb(this,!1);null!=this.nb.position&&this.kc(this.nb.position,!1);this.xe(this.Mj);
this.fd=0.5*this.i.R[0];this.Wl=this.Rl=this.Xg=this.Ug=!1;this.lj=0;this.Vl=this.Ll=this.Xl=this.Jl=this.Ul=this.Yl=this.Nl=this.Ol=!1;this.Yg=0;this.Wg=this.j.Mh;this.Gl=2;this.fe=0;this.xb=1;this.kj=this.i.g.Sc({});this.Il=this.i.g.Sc({De:!0,Pc:!0});Ob(this);this.Wa=[];this.Cf("map",this.Sl.bind(this),!0)}k=sb.prototype;k.v=function(){this.N=!0;this.Ha.v();for(var a in freeLayers_)this.ya[a].Ha.v();null!=this.i&&(this.i.v(),this.i=null)};
function vb(a){a.pe=a.j.Rh;!a.pe&&a.j.Qh&&(a.pe=r.ea.Nj());wb(a)}function wb(a){var b=1/Math.pow(2,a.j.hg),c=a.Fc;c.ef=1048576*a.j.dg*b;Pb(c);c=a.ec;c.ef=1048576*a.j.eg*b;Pb(c);c=a.ic;c.ef=1048576*a.j.gg*(0.8>b?0.5:1);Pb(c)}function Ob(a,b){var c=0;a.pe&&(c=a.j.hg);b&&(c+=b);a.wo=a.j.Th*Math.pow(2,c)}k.Pf=function(){return this.J.Qm.Pf()};k.ph=function(){return Qb(this.Qd)};function Hb(a,b,c){a.o[b]=c;a.Gf[c.e]=c;c.zh=b}k.jh=function(){return Qb(this.o)};
k.qh=function(){for(var a=[],b=0,c=this.Na.length;b<c;b++)a.push(this.Na[b].e);return a};function Rb(a,b){var c=a.wa,d;for(d in c)if(c[d].pn==b)return c[d];return null}k.ih=function(){return Qb(this.wa)};k.lh=function(){var a=[],b;for(b in this.ya)a.push(b);return a};function Sb(a,b){return null==b?null:-1!=b.indexOf("+proj")?new Fb(a,{srsDef:b}):a.Qd[b]}
k.xe=function(a,b){if(null!=a){if("string"===typeof a){a=this.lf[a];if(!a)return;a=a.lb()}var c=JSON.stringify(a);if(c!=this.cj||b)this.Ke.parse(a),this.cj=c,this.Xd++;Tb(this);Ub(this);c=this.Ke.ya;this.Oe=[];for(var d in c){var e=this.ya[d];e&&(e.xb=c[d].depthShift||0,this.Oe.push(e),c[d].style?Vb(e,c[d].style):Vb(e,e.di))}Wb(this)}};k.rh=function(){return this.Ke.lb()};function Xb(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c].e==b)return c;return-1}
function Yb(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c].e==b)return a[c];return null}function Qb(a){var b=[],c;for(c in a)b.push(c);return b}k.kc=function(a){this.O=new W(this,a);Wb(this)};k.ma=function(a,b,c){return this.sb.ma(a,b,c)};function gc(a){return a.sb.kb.ng}k.$c=function(){return this.O.oa()};k.Fb=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.vb(b,a[b])};k.hh=function(a,b){if(!hc(gc(this))){var c=ic(this).$o(a[0],a[1],b[0],b[1]),c=c.gp-c.hp;isNaN(c)&&(c=0);return c}return 0};
k.qb=function(a,b){return a?-1!=a.indexOf("//")?a:this.Zb+a:b};
k.vb=function(a,b){switch(a){case "map":this.j.c=r.Zk(b);break;case "mapCache":this.j.dg=1048576*r.Mc(b,10,900);wb(this);break;case "mapGPUCache":this.j.eg=1048576*r.Mc(b,10,360);wb(this);break;case "mapMetatileCache":this.j.gg=1048576*r.Mc(b,10,60);wb(this);break;case "mapTexelSizeFit":this.j.Th=r.Mc(b,1E-4,1.1);break;case "mapLowresBackground":this.j.df=r.Mc(b,0,0);break;case "mapDownloadThreads":this.j.Lh=r.Mc(b,1,6);break;case "mapMaxProcessingTime":this.j.fg=r.Mc(b,1,50);break;case "mapMobileMode":this.j.Rh=
r.wb(b,!1);vb(this);break;case "mapMobileModeAutodect":this.j.Qh=r.wb(b,!1);break;case "mapMobileDetailDegradation":this.j.hg=r.Mc(b,1,2);break;case "mapNavSamplesPerViewExtent":this.j.yc=r.Mc(b,1,10);break;case "mapFog":this.j.Mh=r.wb(b,!1);break;case "mapIgnoreNavtiles":this.j.Oh=r.wb(b,!1);break;case "mapAllowHires":this.j.Ih=r.wb(b,!0);break;case "mapAllowLowres":this.j.Jh=r.wb(b,!0);break;case "mapAllowSmartSwitching":this.j.Tj=r.wb(b,!0);break;case "mapPreciseCulling":this.j.Sh=r.wb(b,!1);break;
case "mapHeightLodBlend":this.j.ne=r.wb(b,!0);break;case "mapHeightNodeBlend":this.j.Nh=r.wb(b,!0);break;case "mapBasicTileSequence":this.j.Kh=r.wb(b,!0)}};
k.bc=function(a){switch(a){case "map":return this.j.c;case "mapCache":return this.j.dg;case "mapGPUCache":return this.j.eg;case "mapMetatileCache":return this.j.gg;case "mapTexelSizeFit":return this.j.Th;case "mapLowresBackground":return this.j.df;case "mapDownloadThreads":return this.j.Lh;case "mapMaxProcessingTime":return this.j.fg;case "mapMobileMode":return this.j.Rh;case "mapMobileModeAutodect":return this.j.Qh;case "mapMobileDetailDegradation":return this.j.hg;case "mapNavSamplesPerViewExtent":return this.j.yc;
case "mapFog":return this.j.Mh;case "mapIgnoreNavtiles":return this.j.Oh;case "mapAllowHires":return this.j.Ih;case "mapAllowLowres":return this.j.Jh;case "mapAllowSmartSwitching":return this.j.Tj;case "mapPreciseCulling":return this.j.Sh;case "mapHeightLodBlend":return this.j.ne;case "mapHeightNodeBlend":return this.j.Nh;case "mapBasicTileSequence":return this.j.Kh}};function Wb(a){a.pa=!0;a.Km=!0}
k.mh=function(a,b,c,d){this.Km&&(this.Ab=1,db(this.i,"depth"),jc(this),db(this.i,"base"),this.Ab=0);var e;e=this.i;var f=e.g.h;if(f.checkFramebufferStatus(f.FRAMEBUFFER)!=f.FRAMEBUFFER_COMPLETE)e=[0,0,0,0];else{var g=0,h=0,g=Math.floor(e.We/e.R[0]*a),h=Math.floor(e.We/e.R[1]*b);f=e.Bd;h=e.We-h-1;if(null!=f.w){f.g.bindTexture(f);ua(f.g,f);var l=f.h,m=new Uint8Array(4);l.readPixels(g,h,1,1,l.RGBA,l.UNSIGNED_BYTE,m);ua(f.g,null);g=m}else g=void 0;f=1/255*g[0]+g[1]+255*g[2]+65025*g[3];g=!(255==g[0]&&
255==g[1]&&255==g[2]&&255==g[3]);null==e.p?a=[0,0,1]:(a=[2*a/e.R[0]-1,1-2*b/e.R[1],1],b=[a[0],a[1],-1,1],h=r.f.create(),h=r.f.inverse(fb(e.p)),a=[0,0,0,0],r.f.mg(h,b,a),a[2]=-1,a[3]=0,b=r.f.create(),b=r.f.inverse(eb(e.p)),h=[0,0,0,0],r.f.mg(b,a,h),a=h=r.r.normalize([h[0],h[1],h[2]]));b=e.p.$c();e.$f=[b[0]+a[0]*f,b[1]+a[1]*f,b[2]+a[2]*f];e=[e.$f[0],e.$f[1],e.$f[2],g]}if(!e[3])return null;a=this.ra;e=this.ma([e[0]+a[0],e[1]+a[1],e[2]+a[2]],"physical","navigation");"float"==c&&(d=null!=d?d:kc(this,e,
100,this.j.yc),c=this.dc(e,d),e[2]-=c[0]);return e};
k.Sl=function(){1!=this.Ab&&ka(this.i.g);this.Hg={yh:[],Uj:[]};var a=hc(gc(this));if(!a)var b=this.O.Qe(hc(gc(this)),!0);r.f.create();this.O.check();this.wc=lc(this.O);this.wc=r.rd(this.wc,0.1,this.p.yd);var c=this.O.l[4];if("float"==mc(this.O)){var d=kc(this,X(this.O),nc(this.O),this.j.yc),d=this.dc(X(this.O),d,!0);this.n.Em=d[0];this.n.Dm=c;c+=d[0]}d=this.O.Qe(hc(gc(this)));this.p.kc(d.pb);var e=this.p,f=d.qi;e.ri=!0;e.ve=f.slice();e.pa=!0;this.i.wc=d.Lb;this.Qc=d.wf;this.ra=d.pb;this.Vi=d.vn+c;
e=this.p;e.al=nc(this.O);e.pa=!0;c=this.ma([X(this.O)[0],X(this.O)[1],c],"navigation","physical");c[0]+=d.pb[0];c[1]+=d.pb[1];c[2]+=d.pb[2];this.p.kc([0,0,0]);this.ra=c;c=Math.max(this.Vi,this.wc)/6E5;d=Math.max(2,40*c);c=Math.max(1,c);e=this.p;e.ah=0.5*this.O.Zc();e.mf=d;e.yd=6E6*c;e.pa=!0;this.i.pa=!0;this.i.Wg=this.Wg;this.i.ra=this.ra;this.i.Df=this.O.mb();this.i.Wi=Math.cos(r.ua(this.i.Df[1]));this.i.Qc=this.Qc;a?(a=r.ua(this.i.Df[0]),this.i.Ah=[-Math.sin(a),Math.cos(a),0,0,0]):(a=b.wf,this.i.Ah=
[a[0],a[1],a[2],0],r.r.length(this.ra),r.r.normalize(this.ra,[0,0,0]));a=500/Math.max(10,this.wc);this.i.jj=a*a*a*0.5;this.i.Jk=0.5+0.5*Math.abs(this.i.Df[1]/-90);1!=this.Ab?this.i.g.clear(!0,!1):this.i.g.clear(!0,!0,[255,255,255,255]);this.i.g.Gc(this.kj);1!=this.Ab&&(2==this.lj?cb(this.i,this.i.xf,this.i.hk):cb(this.i,this.i.Pi,this.i.hk));0<this.j.df&&(Ob(this,this.j.df),this.i.g.Hf=this.i.g.dj,this.xb=0.8,this.Rb.Ge=1,this.Ca(!0));Ob(this);this.xb=this.Rb.Ge=0;this.Ca()};
k.update=function(){if(!0!=this.N&&(null==this.Tc||"hidden"!=this.Tc.style.visibility)){var a=this.O,b=this.Rj,b=b.l;a.l[0]==b[0]&&r.isEqual(a.l[1],b[1],1E-7)&&r.isEqual(a.l[2],b[2],1E-7)&&a.l[3]==b[3]&&r.isEqual(a.l[4],b[4],0.001)&&r.isEqual(a.l[5],b[5],0.001)&&r.isEqual(a.l[6],b[6],0.001)&&r.isEqual(a.l[7],b[7],0.001)&&r.isEqual(a.l[8],b[8],0.001)&&r.isEqual(a.l[9],b[9],0.001)||this.J.vc("map-position-changed",{position:this.O.l.slice()});this.Rj=this.O.oa();a=this.i.Tc.getBoundingClientRect();
if(this.i.R[0]!=a.width||this.i.R[1]!=a.height)this.i.pg(),this.pa=!0;a=this.pa;b=this.n;if(a){b.Zg=0;b.Lf=0;b.ee=0;for(var c=b.Bb=0,d=b.ug.length;c<d;c++)b.ug[c]=0}b.Qb=[[0,0],[0,0]];b.Pb=[[0,0],[0,0]];b.sd++;b.Ak++;b.nk=performance.now();this.Eh||this.Rb.update();this.pa&&(this.pa=!1,jc(this),this.J.vc("map-update",{}));this.n.end(a)}};
r.hl=function(){function a(a,c,d,e,f,g){for(var h in G){var l=G[h],m=t(l,"filter",c,d);c.tg=c.properties||{};if(!m||F(m,c,f,g)){var m=a,n=c,p=d,q=e,s=t(l,"visible",n,p),u=t(l,"z-index",n,p);if(!1!=s){var w=n.tg,s=t(l,"hover-style",n,p),s=""!=s?C(s,m,q):null;null!=s?(U=1,b(m,n,p,l,u,w),U=2,b(m,n,p,s,u,w)):(U=0,b(m,n,p,l,u,w));var A=t(l,"next-pass",n,p);if(null!=A)for(var aa=0,H=A.length;aa<H;aa++)u=A[aa][0],l=C(A[aa][1],m,q),s=t(l,"visible",n,p),!1!=s&&(s=t(l,"hover-style",n,p),s=""!=s?C(s,m,q):null,
null!=s?(U=1,b(m,n,p,l,u,w),U=2,b(m,n,p,s,u,w)):(U=0,b(m,n,p,l,u,w)))}}}}function b(a,b,c,d,e,f){switch(a){case "line-string":(t(d,"point",b,c)||t(d,"label",b,c))&&l(b,c,d,e,f);m(b,c,d,e,f);break;case "point-array":l(b,c,d,e,f);break;case "polygon":var h=style_,n=b.vertices||[];if(0!=n.length&&((t(h,"point",b,c)||t(h,"label",b,c))&&g(b,n,c,h,e,f,!1),(t(h,"line",b,c)||t(h,"line-label",b,c))&&g(b,n,c,h,e,f,!0),!1!=t(h,"polygon",b,c))){var p=b.surface||[];if(0!=p.length){a=t(h,"hover-event",b,c);d=t(h,
"click-event",b,c);var q=t(h,"draw-event",b,c),s=t(h,"enter-event",b,c),u=t(h,"leave-event",b,c),w=t(h,"zbuffer-offset",b,c);b=t(h,"polygon-color",b,c);c=[0,0,0];for(var A=p.length/3*3,h=Array(3*A),C=0,I=0,aa,H=0;H<A;H++)aa=3*p[C++],aa=[n[aa++],n[aa++],n[aa]],null!=forceScale_&&(aa=[aa[0]*forceScale_[0],aa[1]*forceScale_[1],aa[2]*forceScale_[2]]),c[0]+=aa[0],c[1]+=aa[1],c[2]+=aa[2],h[I++]=aa[0],h[I++]=aa[1],h[I++]=aa[2];0<A&&(n=1/A,c[0]*=n,c[1]*=n,c[2]*=n);c[0]+=Aa[0];c[1]+=Aa[1];c[2]+=Aa[2];postMessage({command:"addRenderJob",
type:"flat-line",vertexBuffer:h,color:b,"z-index":e,center:c,"hover-event":a,"click-event":d,"draw-event":q,hitable:a||d||s||u,state:U,eventInfo:f,"enter-event":s,"leave-event":u,"zbuffer-offset":w,lod:sa})}}}}function c(a,b){for(var c=0,d=[0,0,0],e=[1,0,0],f=0,g=a.length-1;f<g;f++){var d=a[f],e=a[f+1],e=[e[0]-d[0],e[1]-d[1],e[2]-d[2]],h=vec3Length(e);if(c+h>b){c=(b-c)/h;d=[d[0]+e[0]*c,d[1]+e[1]*c,d[2]+e[2]*c];vec3Normalize(e);break}c+=h}return[d,e]}function d(a,b,c){var d=0;c=c.Rc;for(var e=0,f=
a.length;e<f;e++){var g=a.charCodeAt(e);10!=g&&(9==g&&(g=32),g=c[g],null!=g&&(d+=g.Rd*b))}return d}function e(a,b,e,g,h,l,m,n){var p=e/g.k,q=d(b,p,g),s,t=0;s=0;for(var u=a.length-1;s<u;s++)var w=a[s],C=a[s+1],t=t+vec3Length([C[0]-w[0],C[1]-w[1],C[2]-w[2]]);s=t;t=0.5*(s-q);0>t&&(t=0);if(!(q>s)){a:{s=t;for(var u=0,w=[0,0,0],w=[1,0,0],q=[0,0,0],p=s+d(b,p,g),C=0,F=a.length-1;C<F;C++){var w=a[C],aa=a[C+1],w=[aa[0]-w[0],aa[1]-w[1],aa[2]-w[2]],u=u+vec3Length(w);u>s&&(vec3Normalize(w),q[0]+=w[0],q[1]+=w[1],
q[2]+=w[2]);if(u>p){vec3Normalize(q);if(pa){p=[0,0,0];vec3Normalize(A,p);I(p,q,p);break a}p=[-q[1],q[0],0];break a}}p=q}null==p&&(p=[0,1,0]);u=a[0];q=g.Rc;e/=g.k;s=g.ye*e;u=[u[0],u[1],u[2]];w=0;for(C=b.length;w<C;w++)if(F=b.charCodeAt(w),10==F)u[0]+=-K[1]*s,u[1]+=K[0]*s;else{9==F&&(F=32);K=q[F];aa=1;null!=K&&(aa=K.Rd*e);var H=c(a,t),K=c(a,t+aa),K=[0.5*(K[1][0]+H[1][0]),0.5*(K[1][1]+H[1][1]),0.5*(K[1][2]+H[1][2])];vec3Normalize(K);n=f(H[0],K,-e*g.k*0.7+h,F,e,n,n,p,g,l,m)[1];t+=aa}return n}}function f(a,
b,c,d,e,f,g,h,l,m,n,p){if(pa&&!p){p=[0,0,0];var q=[0,0,0];vec3Normalize(A,q);I(q,b,p)}else p=[-b[1],b[0],0];a=[a[0],a[1],a[2]];var q=[a[0],a[1],a[2]],s=l.Rc;l=s[d];var t=0,u=h[0],w=h[1];h=h[2];9==d||32==d?(l=s[32],null!=l&&(a[0]+=b[0]*l.Rd*e,a[1]+=b[1]*l.Rd*e,t=l.Hh*e)):null!=l&&(d=l.Hh*e,s=l.dn*e,c=[p[0]*c,p[1]*c,p[2]*c],p=[c[0]+p[0]*s,c[1]+p[1]*s,c[2]+p[2]*s],q[0]=a[0]+b[0]*d,q[1]=a[1]+b[1]*d,q[2]=a[2]+b[2]*d,m[f]=a[0]-c[0],m[f+1]=a[1]-c[1],m[f+2]=a[2]-c[2],m[f+3]=h,n[g]=l.Bi,n[g+1]=l.Ei,n[g+2]=
u,n[g+3]=w,m[f+4]=a[0]-p[0],m[f+5]=a[1]-p[1],m[f+6]=a[2]-p[2],m[f+7]=h,n[g+4]=l.Bi,n[g+5]=l.Fi,n[g+6]=u,n[g+7]=w,m[f+8]=q[0]-c[0],m[f+9]=q[1]-c[1],m[f+10]=q[2]-c[2],m[f+11]=h,n[g+8]=l.Ci,n[g+9]=l.Ei,n[g+10]=u,n[g+11]=w,m[f+12]=a[0]-p[0],m[f+13]=a[1]-p[1],m[f+14]=a[2]-p[2],m[f+15]=h,n[g+12]=l.Bi,n[g+13]=l.Fi,n[g+14]=u,n[g+15]=w,m[f+16]=q[0]-p[0],m[f+17]=q[1]-p[1],m[f+18]=q[2]-p[2],m[f+19]=h,n[g+16]=l.Ci,n[g+17]=l.Fi,n[g+18]=u,n[g+19]=w,m[f+20]=q[0]-c[0],m[f+21]=q[1]-c[1],m[f+22]=q[2]-c[2],m[f+23]=
h,n[g+20]=l.Ci,n[g+21]=l.Ei,n[g+22]=u,n[g+23]=w,f+=24,g+=24,a[0]+=b[0]*l.Rd*e,a[1]+=b[1]*l.Rd*e,t=l.Hh*e);return[a,f,g,t]}function g(a,b,c,d,e,f,g){var h=a.borders||[];if(0!=h.length){var n={},p;for(p in a)"surface"!=p&&"vertices"!=p&&"borders"!=p&&(n[p]=a[p]);a=h.length;for(p=0;p<a;p++){var q=h[p],s=q.length;if(0<s){var t;t=g?Array(s+1):Array(s);for(var u=0;u<s;u++){var w=3*q[u];t[u]=[b[w++],b[w++],b[w]];g&&0==u&&(t[s]=t[0])}n.points=t;g?m(n,c,d,e,f):l(n,c,d,e,f)}}}}function h(a,b,c){switch(a){case "top-left":return[0,
0];case "top-right":return[-b,0];case "top-center":return[0.5*-b,0];case "center-left":return[0,0.5*-c];case "center-right":return[-b,0.5*-c];case "center-center":return[0.5*-b,0.5*-c];case "bottom-left":return[0,-c];case "bottom-right":return[-b,-c];case "bottom-center":return[0.5*-b,-c]}}function l(a,b,c,e,g){var l=[];a.lines?l=a.lines||[]:a.points&&(l=[a.points]);if(0!=l.length){var m=t(c,"visibility",a,b),n=t(c,"hover-event",a,b),p=t(c,"click-event",a,b),q=t(c,"draw-event",a,b),s=t(c,"enter-event",
a,b),u=t(c,"leave-event",a,b),A=t(c,"zbuffer-offset",a,b),C=t(c,"point",a,b),F=t(c,"point-flat",a,b),K=t(c,"point-color",a,b),I=0.5*t(c,"point-radius",a,b),H=t(c,"icon",a,b);if(!0==H){var G=t(c,"icon-source",a,b);if(G)var P=24*l.length,V=18*l.length,S={Jb:t(c,"icon-color",a,b),rk:t(c,"icon-scale",a,b),pf:t(c,"icon-offset",a,b),Ae:t(c,"icon-stick",a,b),Jd:t(c,"icon-origin",a,b),xk:t(c,"icon-source",a,b),U:new Float32Array(P),Id:new Float32Array(V),Td:new Float32Array(P),d:0,Ye:0};else H=!1}var x=t(c,
"label",a,b);if(!0==x){var G=t(c,"label-source",a,b),D=w(c,G,a),pa=t(c,"label-size",a,b);if(D&&""!=D&&1E-4<Math.abs(pa))var P=24*D.length*l.length,V=18*D.length*l.length,Ca={Jb:t(c,"label-color",a,b),k:pa,pf:t(c,"label-offset",a,b),Ae:t(c,"label-stick",a,b),Jd:t(c,"label-origin",a,b),kl:t(c,"label-align",a,b),Ao:D,Nc:t(c,"label-width",a,b),U:new Float32Array(P),Id:new Float32Array(V),Td:new Float32Array(P),d:0,Ye:0};else x=!1}var L=0,oa=0,O=[],ra,za=4*I;8>za&&(za=8);32<za&&(za=32);ra=za;for(var Ua=
0,y=2*Math.PI/ra,B=0;B<ra;B++)O[B]=[-Math.sin(Ua),Math.cos(Ua)],Ua+=y;O[ra]=[0,1];for(var Ja=0,Y=[0,0,0],jb=0,Zb=l.length;jb<Zb;jb++){var T=l[jb];if(Array.isArray(T)&&0<T.length){var z=T[0],R=[z[0],z[1],z[2]],Ja=Ja+T.length;if(!1==F)var la=12*ra,N=Array(T.length*la),ma=Array(12*T.length*ra);else la=9*ra,N=Array(T.length*la);for(var B=0,da=T.length;B<da;B++){null!=forceScale_&&(R=[R[0]*forceScale_[0],R[1]*forceScale_[1],R[2]*forceScale_[2]]);Y[0]+=R[0];Y[1]+=R[1];Y[2]+=R[2];if(!0==H){var ea=R,ha=S,
J=ha.xk,E=ha.d,kb=ha.Ye,Xd=E,$b=Math.abs(J[3]*ha.rk),ac=Math.abs(J[4]*ha.rk),ba=ha.U,ja=ha.Td,Hc=ha.Id;ba[E]=0;ba[E+1]=0;ba[E+2]=0;ba[E+3]=0;ba[E+4]=$b;ba[E+5]=0;ba[E+6]=0;ba[E+7]=0;ba[E+8]=$b;ba[E+9]=-ac;ba[E+10]=0;ba[E+11]=0;ja[E]=J[1];ja[E+1]=J[2];ja[E+2]=0;ja[E+3]=0;ja[E+4]=J[1]+J[3];ja[E+5]=J[2];ja[E+6]=0;ja[E+7]=0;ja[E+8]=J[1]+J[3];ja[E+9]=J[2]+J[4];ja[E+10]=0;ja[E+11]=0;E+=12;ba[E]=0;ba[E+1]=0;ba[E+2]=0;ba[E+3]=0;ba[E+4]=0;ba[E+5]=-ac;ba[E+6]=0;ba[E+7]=0;ba[E+8]=$b;ba[E+9]=-ac;ba[E+10]=0;ba[E+
11]=0;ja[E]=J[1];ja[E+1]=J[2];ja[E+2]=0;ja[E+3]=0;ja[E+4]=J[1];ja[E+5]=J[2]+J[4];ja[E+6]=0;ja[E+7]=0;ja[E+8]=J[1]+J[3];ja[E+9]=J[2]+J[4];ja[E+10]=0;ja[E+11]=0;for(var E=E+12,pd=h(ha.Jd,$b,ac),Yd=pd[0]+ha.pf[0],Zd=pd[1]+ha.pf[1],$d=ea[0],ae=ea[1],be=ea[2],Ya=Xd;Ya<E;Ya+=4)ba[Ya]+=Yd,ba[Ya+1]-=Zd,Hc[kb]=$d,Hc[kb+1]=ae,Hc[kb+2]=be,kb+=3;ha.d=E;ha.Ye=kb}if(!0==x){for(var Ic=R,wa=Ca,Ab=wa.U,ce=wa.Td,Jc=wa.Id,Bb=wa.d,lb=wa.Ye,de=Bb,qd=(""+wa.Ao).match(/[^\r\n]+/g),mb=[],na=0,Cb=qd.length;na<Cb;na++){var Za=
qd[na];do{var Db;a:{for(var Kc=0,ee=qa["default"].Rc,bc=0,rd=Za.length;bc<rd;bc++){var $a=Za.charCodeAt(bc);if(Kc>wa.Nc&&(10==$a||9==$a||32==$a)){Db=bc;break a}if(10!=$a){9==$a&&($a=32);var sd=ee[$a];null!=sd&&(Kc+=wa.k/qa["default"].k*sd.Rd)}}Db=rd}if(Za.length==Db){mb.push(Za);break}mb.push(Za.substring(0,Db));Za=Za.substring(Db+1)}while(1)}var cc=0,dc=0,td,ud=qa["default"];td=wa.k/ud.k*ud.ye;for(var Eb=0,Lc=[],na=0,Cb=mb.length;na<Cb;na++)Lc[na]=d(mb[na],wa.k/qa["default"].k,qa["default"]),Eb=
Math.max(Lc[na],Eb);na=0;for(Cb=mb.length;na<Cb;na++){var vd=Lc[na];switch(wa.kl){case "left":cc=0;break;case "right":cc=Eb-vd;break;case "center":cc=0.5*(Eb-vd)}for(var nb=[cc,dc,0],wd=mb[na],Mc=qa["default"],fe=Ab,ge=ce,ec=Bb,Nc=[1,0,0],he=[0,1,0],xd=wa.k/Mc.k,yd=Mc.ye*xd,ab=[nb[0],nb[1],nb[2]],Oc=[nb[0],nb[1],nb[2]],Pc=0,ie=wd.length;Pc<ie;Pc++){var zd=wd.charCodeAt(Pc);if(10==zd)ab[0]+=-Nc[1]*yd,ab[1]+=Nc[0]*yd,Oc=[ab[0],ab[1],ab[2]];else var Ad=f(Oc,Nc,0,zd,xd,ec,ec,he,Mc,fe,ge,!0),Oc=Ad[0],
ec=Ad[1]}Bb=ec;dc-=td}var Bd=h(wa.Jd,Eb,-dc);offsetX_=Bd[0]+wa.pf[0];offsetY_=Bd[1]+wa.pf[1];for(var je=Ic[0],ke=Ic[1],le=Ic[2],na=de;na<Bb;na+=4)Ab[na]+=offsetX_,Ab[na+1]-=offsetY_,Jc[lb]=je,Jc[lb+1]=ke,Jc[lb+2]=le,lb+=3;wa.d=Bb;wa.Ye=lb}for(var Na=0;Na<ra;Na++)!0==C&&(!0==F?(N[L]=R[0],N[L+1]=R[1],N[L+2]=R[2],N[L+3]=R[0]+O[Na][0]*I,N[L+4]=R[1]+O[Na][1]*I,N[L+5]=R[2],N[L+6]=R[0]+O[Na+1][0]*I,N[L+7]=R[1]+O[Na+1][1]*I,N[L+8]=R[2],L+=9):(N[L]=R[0],N[L+1]=R[1],N[L+2]=R[2],N[L+3]=0,ma[oa]=0,ma[oa+1]=0,
ma[oa+2]=0,ma[oa+3]=0,N[L+4]=R[0],N[L+5]=R[1],N[L+6]=R[2],N[L+7]=0,ma[oa+4]=O[Na][0]*I,ma[oa+5]=O[Na][1]*I,ma[oa+6]=0,ma[oa+7]=0,N[L+8]=R[0],N[L+9]=R[1],N[L+10]=R[2],N[L+11]=0,ma[oa+8]=O[Na+1][0]*I,ma[oa+9]=O[Na+1][1]*I,ma[oa+10]=0,ma[oa+11]=0,L+=12,oa+=12));R=T[B+1]}}}0<Ja&&(Y[0]/=Ja,Y[1]/=Ja,Y[2]/=Ja);Y[0]+=Aa[0];Y[1]+=Aa[1];Y[2]+=Aa[2];var fc=n||p||s||u;!0==C&&(!0==F?postMessage({command:"addRenderJob",type:"flat-line",vertexBuffer:N,color:K,"z-index":e,visibility:m,center:Y,"hover-event":n,"click-event":p,
"draw-event":q,"enter-event":s,"leave-event":u,"zbuffer-offset":A,hitable:fc,state:U,eventInfo:g,lod:sa},[N.buffer]):postMessage({command:"addRenderJob",type:"pixel-line",vertexBuffer:N,normalBuffer:ma,color:K,"z-index":e,visibility:m,center:Y,"hover-event":n,"click-event":p,"draw-event":q,"enter-event":s,"leave-event":u,"zbuffer-offset":A,hitable:fc,state:U,eventInfo:g,lod:sa},[N.buffer,ma.buffer]));!0==H&&0<S.U.length&&postMessage({command:"addRenderJob",type:"icon",vertexBuffer:S.U,originBuffer:S.Id,
texcoordsBuffer:S.Td,icon:fa[S.xk[0]],color:S.Jb,"z-index":e,visibility:m,center:Y,stick:S.Ae,"hover-event":n,"click-event":p,"draw-event":q,"enter-event":s,"leave-event":u,"zbuffer-offset":A,hitable:fc,state:U,eventInfo:g,lod:sa},[S.U.buffer,S.Id.buffer,S.Td.buffer]);!0==x&&0<Ca.U.length&&postMessage({command:"addRenderJob",type:"label",vertexBuffer:Ca.U,originBuffer:Ca.Id,texcoordsBuffer:Ca.Td,color:Ca.Jb,"z-index":e,visibility:m,center:Y,stick:Ca.Ae,"hover-event":n,"click-event":p,"draw-event":q,
"enter-event":s,"leave-event":u,"zbuffer-offset":A,hitable:fc,state:U,eventInfo:g,lod:sa},[Ca.U.buffer,Ca.Id.buffer,Ca.Td.buffer])}}function m(a,b,c,d,f){var g,h=a.lines||[];if(0!=h.length){var l=t(c,"line",a,b),m=t(c,"line-label",a,b);if(l||m){for(var n=t(c,"hover-event",a,b),p=t(c,"click-event",a,b),q=t(c,"draw-event",a,b),s=t(c,"enter-event",a,b),u=t(c,"leave-event",a,b),C=t(c,"zbuffer-offset",a,b),F=t(c,"line-flat",a,b),K=t(c,"line-color",a,b),H=0.5*t(c,"line-width",a,b),G=t(c,"line-style",a,
b),P=t(c,"line-style-texture",a,b),S=t(c,"line-style-background",a,b),m=t(c,"line-label",a,b),V=t(c,"line-label-size",a,b),x=0,D=0,Da=[],Ca=[],L=0,oa=2*Math.PI/8,O=0;8>O;O++)Da[O]=[-Math.sin(L),Math.cos(L)],Ca[O]=L,L+=oa;Da[8]=[0,1];for(var ra=Ca[8]=0,za=0;za<h.length;za++)Array.isArray(h[za])&&(ra+=h[za].length);var Ua=6*(R||!F?4:3),y=new Float32Array(ra*Ua+24*ra*(R||!F?4:3));if(!F||R)var B=new Float32Array(24*ra+96*ra);if(R)var Ja=Float32Array(ra);L=[0,0,0];oa=[];for(za=0;za<h.length;za++)if(Array.isArray(h[za])&&
h[za].length){var Y=h[za];if(m){var jb=Array(Y.length),Zb=Array(Y.length);oa.push({Dn:jb,Cn:Zb})}for(var T=Y[0],z=[T[0],T[1],T[2]],R="solid"!=G,la=0.001,N=0.001,O=0,ma=Y.length-1;O<ma;O++){z=Y[O];g=Y[O+1];null!=forceScale_&&(z=[z[0]*forceScale_[0],z[1]*forceScale_[1],z[2]*forceScale_[2]],g=[g[0]*forceScale_[0],g[1]*forceScale_[1],g[2]*forceScale_[2]]);if(F&&!R){if(pa){var da=[g[0]-z[0],g[1]-z[1],g[2]-z[2]],ea=Math.sqrt(da[0]*da[0]+da[1]*da[1]+da[2]*da[2]),N=N+ea,ea=0!=ea?1/ea:0,ha=[da[0]*ea,da[1]*
ea,da[2]*ea],J=[0,0,0],E=[0,0,0];vec3Normalize(A,E);I(E,ha,J);J=[J[0]*H,J[1]*H,J[2]*H]}else da=[g[0]-z[0],g[1]-z[1],0],ea=Math.sqrt(da[0]*da[0]+da[1]*da[1]),N+=ea,ea=0!=ea?H/ea:0,J=[-da[1]*ea,da[0]*ea,0];y[x]=z[0]+J[0];y[x+1]=z[1]+J[1];y[x+2]=z[2]+J[2];y[x+3]=z[0]-J[0];y[x+4]=z[1]-J[1];y[x+5]=z[2]-J[2];y[x+6]=g[0]+J[0];y[x+7]=g[1]+J[1];y[x+8]=g[2]+J[2];y[x+9]=z[0]-J[0];y[x+10]=z[1]-J[1];y[x+11]=z[2]-J[2];y[x+12]=g[0]-J[0];y[x+13]=g[1]-J[1];y[x+14]=g[2]-J[2];y[x+15]=g[0]+J[0];y[x+16]=g[1]+J[1];y[x+
17]=g[2]+J[2];x+=18}else da=[g[0]-z[0],g[1]-z[1],0],ea=Math.sqrt(da[0]*da[0]+da[1]*da[1]),N+=ea,F?(ea=0!=ea?H/ea:0,J=[-da[1]*ea,da[0]*ea,0],null!=Ja&&(Ja[O]=0!=ea?Math.atan2(da[0],da[1])+0.5*Math.PI:0),y[x]=z[0],y[x+1]=z[1],y[x+2]=z[2],y[x+3]=la,B[D]=J[0],B[D+1]=J[1],B[D+2]=0,B[D+3]=H,y[x+4]=z[0],y[x+5]=z[1],y[x+6]=z[2],y[x+7]=-la,B[D+4]=-J[0],B[D+5]=-J[1],B[D+6]=0,B[D+7]=-H,y[x+8]=g[0],y[x+9]=g[1],y[x+10]=g[2],y[x+11]=N,B[D+8]=J[0],B[D+9]=J[1],B[D+10]=0,B[D+11]=H,y[x+12]=z[0],y[x+13]=z[1],y[x+14]=
z[2],y[x+15]=-la,B[D+12]=-J[0],B[D+13]=-J[1],B[D+14]=0,B[D+15]=-H,y[x+16]=g[0],y[x+17]=g[1],y[x+18]=g[2],y[x+19]=-N,B[D+16]=-J[0],B[D+17]=-J[1],B[D+18]=0,B[D+19]=-H,y[x+20]=g[0],y[x+21]=g[1],y[x+22]=g[2],y[x+23]=N,B[D+20]=J[0],B[D+21]=J[1],B[D+22]=0,B[D+23]=H):(y[x]=z[0],y[x+1]=z[1],y[x+2]=z[2],y[x+3]=la,B[D]=g[0],B[D+1]=g[1],B[D+2]=g[2],B[D+3]=H,y[x+4]=z[0],y[x+5]=z[1],y[x+6]=z[2],y[x+7]=-la,B[D+4]=g[0],B[D+5]=g[1],B[D+6]=g[2],B[D+7]=-H,y[x+8]=g[0],y[x+9]=g[1],y[x+10]=g[2],y[x+11]=-N,B[D+8]=z[0],
B[D+9]=z[1],B[D+10]=z[2],B[D+11]=H,y[x+12]=z[0],y[x+13]=z[1],y[x+14]=z[2],y[x+15]=la,B[D+12]=g[0],B[D+13]=g[1],B[D+14]=g[2],B[D+15]=H,y[x+16]=g[0],y[x+17]=g[1],y[x+18]=g[2],y[x+19]=-N,B[D+16]=z[0],B[D+17]=z[1],B[D+18]=z[2],B[D+19]=H,y[x+20]=g[0],y[x+21]=g[1],y[x+22]=g[2],y[x+23]=N,B[D+20]=z[0],B[D+21]=z[1],B[D+22]=z[2],B[D+23]=-H),x+=24,D+=24;la=N}z=[T[0],T[1],T[2]];O=0;for(ma=Y.length;O<ma;O++){null!=forceScale_&&(z=[z[0]*forceScale_[0],z[1]*forceScale_[1],z[2]*forceScale_[2]]);L[0]+=z[0];L[1]+=
z[1];L[2]+=z[2];g=null!=Ja?Ja[O]:0;pa&&(ha=[0,0,0],E=[0,0,0],vec3Normalize(A,E),vec3AnyPerpendicular(E,ha),vec3Normalize(ha),I(E,ha,E));for(T=0;8>T;T++)F&&!R?(y[x]=z[0],y[x+1]=z[1],y[x+2]=z[2],pa?(la=Da[T][0],N=Da[T][1],y[x+3]=z[0]+(E[0]*la+ha[0]*N)*H,y[x+4]=z[1]+(E[1]*la+ha[1]*N)*H,y[x+5]=z[2]+(E[2]*la+ha[2]*N)*H,la=Da[T+1][0],N=Da[T+1][1],y[x+6]=z[0]+(E[0]*la+ha[0]*N)*H,y[x+7]=z[1]+(E[1]*la+ha[1]*N)*H,y[x+8]=z[2]+(E[2]*la+ha[2]*N)*H):(y[x+3]=z[0]+Da[T][0]*H,y[x+4]=z[1]+Da[T][1]*H,y[x+5]=z[2],y[x+
6]=z[0]+Da[T+1][0]*H,y[x+7]=z[1]+Da[T+1][1]*H,y[x+8]=z[2]),x+=9):(la=O!=ma-1?y[O*Ua+3]:y[(O-1)*Ua+11],y[x]=z[0],y[x+1]=z[1],y[x+2]=z[2],y[x+3]=la,B[D]=0,B[D+1]=0,B[D+2]=0,B[D+3]=0,y[x+4]=z[0],y[x+5]=z[1],y[x+6]=z[2],y[x+7]=la,B[D+4]=Da[T][0]*H,B[D+5]=Da[T][1]*H,B[D+6]=Ca[T]+g,B[D+7]=0,y[x+8]=z[0],y[x+9]=z[1],y[x+10]=z[2],y[x+11]=la,B[D+8]=Da[T+1][0]*H,B[D+9]=Da[T+1][1]*H,B[D+10]=Ca[T+1]+g,B[D+11]=0,x+=12,D+=12);m&&(T=[z[0],z[1],z[2]+0.1*V],jb[O]=T,Zb[ma-O-1]=T);z=Y[O+1]}}0<ra&&(L[0]/=ra,L[1]/=ra,
L[2]/=ra);L[0]+=Aa[0];L[1]+=Aa[1];L[2]+=Aa[2];O=n||p||s||u;l&&(O={command:"addRenderJob",vertexBuffer:y,color:K,"z-index":d,center:L,normalBuffer:B,"hover-event":n,"click-event":p,"draw-event":q,hitable:O,state:U,eventInfo:f,"enter-event":s,"leave-event":u,"zbuffer-offset":C,"line-width":2*H,lod:sa},O.type=F?!0==R?"flat-tline":"flat-line":!0==R?"pixel-tline":"pixel-line",R&&null!=P&&(O.texture=[fa[P[0]],P[1],P[2]],O.background=S),B?postMessage(O,[y.buffer,B.buffer]):postMessage(O,[y.buffer]));if(m)for(O=
0,ma=oa.length;O<ma;O++)m=oa[O].Dn,F=oa[O].Cn,H=a,P=L,h=b,G=c,S=d,B=f,R=t(G,"line-label-color",H,h),p=t(G,"line-label-source",H,h),l=t(G,"line-label-size",H,h),n=t(G,"line-label-offset",H,h),1E-4>Math.abs(l)||(p=w(G,p,H),null!=p&&""!=p&&(q=t(G,"hover-event",H,h),s=t(G,"click-event",H,h),u=t(G,"draw-event",H,h),C=t(G,"enter-event",H,h),K=t(G,"leave-event",H,h),H=t(G,"zbuffer-offset",H,h),G=48*p.length,h=new Float32Array(G),G=new Float32Array(G),V=q||s||C||K,x=0,x=e(m,p,l,qa["default"],n,h,G,x),e(F,
p,l,qa["default"],n,h,G,x),postMessage({command:"addRenderJob",type:"line-label",vertexBuffer:h,texcoordsBuffer:G,color:R,"z-index":S,center:P,"hover-event":q,"click-event":s,"draw-event":u,"enter-event":C,"leave-event":K,"zbuffer-offset":H,hitable:V,state:U,eventInfo:B,lod:sa},[h.buffer,G.buffer])))}}}function n(a){switch(a){case "filter":return null;case "inherit":return"";case "line":return!1;case "line-flat":return!1;case "line-width":return 1;case "line-color":return[255,255,255,255];case "line-style":return"solid";
case "line-style-texture":return null;case "line-style-background":return[0,0,0,0];case "line-label":return!1;case "line-label-color":return[255,255,255,255];case "line-label-source":return"$name";case "line-label-size":return 1;case "line-label-offset":return 0;case "point":return!1;case "point-flat":return!1;case "point-radius":return 1;case "point-Layer":return"solid";case "point-color":return[255,255,255,255];case "icon":return!1;case "icon-source":return null;case "icon-scale":return 1;case "icon-offset":return[0,
0];case "icon-origin":return"bottom-center";case "icon-stick":return[0,0,0,255,255,255,255];case "icon-color":return[255,255,255,255];case "label":return!1;case "label-color":return[255,255,255,255];case "label-source":return"$name";case "label-size":return 10;case "label-offset":return[0,0];case "label-origin":return"bottom-center";case "label-align":return"center";case "label-stick":return[0,0,0,255,255,255,255];case "label-width":return 200;case "polygon":return!1;case "polygon-color":return[255,
255,255,255];case "z-index":return 0;case "zbuffer-offset":return[1,1,1];case "hover-event":return!1;case "hover-style":return"";case "enter-event":return!1;case "leave-event":return!1;case "click-event":return!1;case "draw-event":return!1;case "visible":return!0;case "visibility":return 0;case "next-pass":return null}}function p(a,b,c){switch(b){case "inherit":return q(a,b,c,"string");case "line":return q(a,b,c,"boolean");case "line-flat":return q(a,b,c,"boolean");case "line-width":return q(a,b,
c,"number",null,1E-4,Number.MAX_VALUE);case "line-color":return q(a,b,c,"object",4,0,255);case "line-style":return q(a,b,c,"string");case "line-style-texture":return q(a,b,c,"object",3,-Number.MAX_VALUE,Number.MAX_VALUE);case "line-style-background":return q(a,b,c,"object",4,0,255);case "line-label":return q(a,b,c,"boolean");case "line-label-source":return q(a,b,c,"string");case "line-label-color":return q(a,b,c,"object",4,0,255);case "line-label-size":return q(a,b,c,"number",null,1E-4,Number.MAX_VALUE);
case "line-label-offset":return q(a,b,c,"number",null,-Number.MAX_VALUE,Number.MAX_VALUE);case "point":return q(a,b,c,"boolean");case "point-flat":return q(a,b,c,"boolean");case "point-radius":return q(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "point-Layer":return q(a,b,c,"string");case "point-color":return q(a,b,c,"object",4,0,255);case "icon":return q(a,b,c,"boolean");case "icon-source":return q(a,b,c,"object",5,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-scale":return q(a,b,c,"number",
null,1E-4,Number.MAX_VALUE);case "icon-offset":return q(a,b,c,"object",2,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-origin":return q(a,b,c,"string");case "icon-stick":return q(a,b,c,"object",7,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-color":return q(a,b,c,"object",4,0,255);case "label":return q(a,b,c,"boolean");case "label-color":return q(a,b,c,"object",4,0,255);case "label-source":return q(a,b,c,"string");case "label-size":return q(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "label-offset":return q(a,
b,c,"object",2,-Number.MAX_VALUE,Number.MAX_VALUE);case "label-origin":return q(a,b,c,"string");case "label-align":return q(a,b,c,"string");case "label-stick":return q(a,b,c,"object",7,-Number.MAX_VALUE,Number.MAX_VALUE);case "label-width":return q(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "polygon":return q(styleId_,b,c,"boolean");case "polygon-color":return q(styleId_,b,c,"object",4,0,255);case "z-index":return q(a,b,c,"number",null,-Number.MAX_VALUE,Number.MAX_VALUE);case "zbuffer-offset":return q(a,
b,c,"object",3,0,Number.MAX_VALUE);case "hover-event":return q(a,b,c,"boolean");case "hover-style":return q(a,b,c,"string");case "enter-event":return q(a,b,c,"boolean");case "leave-event":return q(a,b,c,"boolean");case "click-event":return q(a,b,c,"boolean");case "draw-event":return q(a,b,c,"boolean");case "visible":return q(a,b,c,"boolean");case "visibility":return q(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "next-pass":return q(a,b,c,"object")}return c}function q(a,b,c,d,e,f,g){if(null!=c&&
"object"==typeof c&&(null!=c.discrete||null!=c.linear||null!=c["lod-scaled"])){e=null;var h=!1;if(null!=c["lod-scaled"]){var l=c["lod-scaled"];if(!("object"==typeof l&&Array.isArray(l)&&2<=l.length))return s("wrong-property-value",a,b,c,null,"[]"),n(b);null==l[2]&&(l[2]=1);if("number"!=typeof l[0]||"number"!=typeof l[2])return s("wrong-property-value",a,b,c,null,"[]"),n(b);if("number"==typeof l[1])return c;e=l[1];h=!0}else e=c.discrete||c.linear;if(null==e||!("object"==typeof e&&Array.isArray(e)&&
0<e.length))return s("wrong-property-value",a,b,c,null,"[]"),n(b);if(null!=e){var m=null;d=0;for(l=e.length;d<l;d++){var p=e[d];if(null==p||"object"!=typeof p||!Array.isArray(p)||2==p.length)if(null==m&&(m=typeof p[1],!0==h&&"number"!=m)||"number"!=typeof p[0]||typeof p[1]!=m||"number"==m&&(p[1]>g||p[1]<f))return s("wrong-property-value[]",a,b,c,d,"[]"),n(b)}}return c}if(typeof c!=d&&(null!==c||"icon-source"!=b&&"visibility"!=b))return s("wrong-property-value",a,b,c),n(b);switch(typeof c){case "object":if(null===
c&&("line-style-texture"==b||"icon-source"==b||"visibility"==b||"next-pass"==b))return c;if("next-pass"==b)if(!0==Array.isArray(c)&&0<c.length)for(d=0;d<l;d++){if(f=c[d],"object"!=typeof f||!0!=Array.isArray(f)||2!=f.length||"number"!=typeof f[0]||"string"!=typeof f[1])return s("wrong-property-value[]",a,b,c,d),n(b)}else return s("wrong-property-value",a,b,c),n(b);if(null!=e)if(!0==Array.isArray(c)&&c.length==e){d=0;if("icon-source"==b||"line-style-texture"==b){if("string"!=typeof c[0])return s("wrong-property-value[]",
a,b,c,0),n(b);if(null==fa[c[0]])return s("wrong-object",a,b,c,null,"bitmap"),n(b);d=1}for(l=c.length;d<l;d++)if("number"!=typeof c[d])return s("wrong-property-value[]",a,b,c,d),n(b)}else return s("wrong-property-value",a,b,c),n(b);return c;case "string":if("line-style"==b)switch(c){case "solid":case "texture":return c;default:return s("wrong-property-value",a,b,c),n(b)}if("label-origin"==b||"icon-origin"==b)switch(c){case "top-left":case "top-right":case "top-center":case "center-left":case "center-right":case "center-center":case "bottom-left":case "bottom-right":case "bottom-center":return c;
default:return s("wrong-property-value",a,b,c),n(b)}if("label-align"==b)switch(c){case "left":case "right":case "center":break;default:return s("wrong-property-value",a,b,c),n(b)}return c;case "number":return c>g||c<f?(s("wrong-property-value",a,b,c),n(b)):c;case "boolean":return c}}function s(a,b,c,d,e,f){"object"==typeof d&&(d=JSON.stringify(d));var g=null;switch(a){case "wrong-property-value":g="Error: wrong layer property "+(f?"'"+f+"'":"")+": "+b+"."+c+" = "+d;break;case "wrong-property-value[]":g=
"Error: wrong layer property "+(f?"'"+f+"'":"")+"["+e+"]: "+b+"."+c+" = "+d;break;case "wrong-object":g="Error: reffered "+f+" does not exist: "+b+"."+c+" = "+d;break;case "wrong-object[]":g="Error: reffered "+f+" does not exist: "+b+"."+c+"["+e+"] = "+d;break;case "wrong-Layer":g="Error: reffered "+f+" Layer does not exist: "+f+"["+e+"].Layer = "+b;break;case "wrong-bitmap":g="Error: wrong definition of bitmap: "+b;break;case "custom":g="Error: "+b}g&&console.log(g)}function u(a,b,c,d,e){if(100<
e)s("custom","infinite inherit loop in Layer: "+a);else if(null!=c.inherit){var f=d.Layers[c.inherit];if(null!=f){null!=f.inherit&&u(c.inherit,b,f,d,e++);for(var g in f)b[g]=f[g]}else s("wrong-object",a,"inherit",f,"Layer")}}function t(a,b,c,d){var e=a[b];switch(typeof e){case "string":if(0<e.length&&"$"==e.charAt(0)){d=c.tg[e.substr(1)];if(null!=d)return d;s("wrong-object",a["$$layer-id"],b,e,null,"feature-property")}return e;case "object":if(null==e)break;if(!0==Array.isArray(e)){if("icon-source"==
b&&null==fa[e[0]]){s("wrong-object",a["$$layer-id"],b,e,null,"bitmap");break}return e}var f=null;a=null;if(null!=e["lod-scaled"]){a=e["lod-scaled"];if("number"==typeof a[1])return a[1]*Math.pow(2*a[2],a[0]-d);f=a[1]}else f=e.discrete||e.linear;b=f[0][0];c=f[0][1];for(var g=typeof c,h=c,l=0,m=f.length;l<=m;l++){if(l==m){h=c;break}if(f[l][0]>d){if(null!=e.discrete||null!=a)h=c;else{currentLod_=f[l][0];currentValue_=f[l][1];if(currentLod_==b)break;switch(g){case "boolean":currentValue_=(c=c?1:0)?1:0;
h=c+(d-b)/(currentLod_-b)*(currentValue_-c);h=0.5<h?!0:!1;break;case "number":h=c+(d-b)/(currentLod_-b)*(currentValue_-c);break;case "object":for(h=[],e=0,f=c.length;e<f;e++)h[e]=c[e]+(d-b)/(currentLod_-b)*(currentValue_[e]-c[e])}}break}b=f[l][0];c=f[l][1]}null!=a&&(h*=Math.pow(2*a[2],a[0]-d));return h;case "number":case "boolean":return e}return n(b)}function w(a,b,c){switch(typeof b){case "string":if(0<b.length)switch(b.charAt(0)){case "$":return c=c.tg[b.substr(1)],"undefined"==typeof c&&s("wrong-expresion",
a["$$layer-id"],b,b,null,"feature-property"),c}}return b}function C(a,b,c){var d=P.Bh[a];return null==d?(s("wrong-Layer",a,null,null,c,b),{}):d}function I(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var f=b[0],g=b[1];b=b[2];c[0]=e*b-a*g;c[1]=a*f-d*b;c[2]=d*g-e*f}function F(a,b,c,d){if(!a||!Array.isArray(a))return!1;switch(a[0]){case "all":for(var e=!0,f=1,g=a.length;f<g;f++)e=e&&F(a[f],b,c,d);return e;case "any":e=!1;f=1;for(g=a.length;f<g;f++)e=e||F(a[f],b,c,d);return e;case "none":e=!0;f=1;for(g=a.length;f<
g;f++)e=e&&F(a[f],b,c,d);return!e;case "skip":return!1}switch(a[1]){case "#type":b=c;break;case "#group":b=d;break;default:b=b.tg[a[1]]}switch(a[0]){case "==":return b==a[2];case "!=":return b!=a[2];case ">=":return b>=a[2];case "<=":return b<=a[2];case ">":return b>a[2];case ">":return b<a[2];case "has":return"undefined"!=typeof b;case "!has":return"undefined"==typeof b;case "in":f=2;for(g=a.length;f<g;f++)if(a[f]==b)return!0;break;case "!in":f=2;for(g=a.length;f<g;f++)if(a[f]==b)return!1;return!0}return!1}
var P={},G={},fa={},A=[0,0,0],K=[1,1,1],V=[1,1,1],S=4096,pa=!1,sa=0,qa={},U=0,Aa=[0,0,0];vec3Normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],f=Math.sqrt(c*c+d*d+e*e);f?1==f?(b[0]=c,b[1]=d,b[2]=e):(f=1/f,b[0]=c*f,b[1]=d*f,b[2]=e*f):(b[0]=0,b[1]=0,b[2]=0)};vec3Length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3AnyPerpendicular=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2];b[0]=1;b[1]=1;b[2]=e?-(c+d)/e:0};self.onmessage=function(b){var c=b.data,d=c.command;b=c.data;
console.log("worker_onmessage: "+d);switch(d){case "setStylesheet":if(b){pa=b.geocent||!1;var e=b.data;fa={};b=e.bitmaps||{};for(var f in b)c=b[f],"string"==typeof c?c={url:c}:"object"==typeof c?null==c.url&&s("wrong-bitmap",f):s("wrong-bitmap",f),fa[f]=c;postMessage({command:"loadBitmaps",bitmaps:fa});P={Bh:{}};b=e.layers||{};G=P.Bh;for(f in b){var c=P.Bh,g=d=f,h=e,l={},m=g,q=l,t=b[f];null!=t.inherit&&u(m,q,t,h,0);var w=void 0;for(w in t)q[w]=t[w];q["$$layer-id"]=m;m=void 0;for(m in l)q=l[m],"string"==
typeof q&&0<q.length&&"@"==q.charAt(0)&&(null!=h.constants?null!=h.constants[q]?l[m]=h.constants[q]:(s("wrong-object",g,m,q,null,"constant"),l[m]=n(m)):(s("wrong-object",g,m,q,null,"constant"),l[m]=n(m))),l[m]=p(g,m,l[m]);c[d]=l}}postMessage("ready");break;case "setFont":qa["default"]={Rc:b.chars,ye:b.space,k:b.size};postMessage("ready");break;case "processGeodata":f=sa=c.lod||0;if("string"==typeof b)try{e=JSON.parse(b)}catch(C){e=null}else e=b;if(e)for(e=e.groups||[],b=0,c=e.length;b<c;b++)if(h=
e[b],d=f,g=h.id||"",l=h.bbox){A=l[0];K=l[1];V=[l[1][0]-l[0][0],l[1][1]-l[0][1],l[1][2]-l[0][2]];S=h.resolution||4096;Aa=[0,0,0];forceScale_=[V[0]/S,V[1]/S,V[2]/S];postMessage({command:"beginGroup",id:h.id,bbox:[A,K],origin:A});q=h.points||[];l=0;for(m=q.length;l<m;l++)a("point-array",q[l],d,l,"point",g);q=h.lines||[];l=0;for(m=q.length;l<m;l++)a("line-string",q[l],d,l,"line",g);h=h.polygons||[];l=0;for(m=h.length;l<m;l++)a("polygon",h[l],d,l,"polygon",g);postMessage({command:"endGroup"})}postMessage("allProcessed");
postMessage("ready")}}};r.Af=function(a,b){this.la=a;this.c=a.c;this.N=!1;this.bf=b;this.ca=!0;var c=window.URL||window.webkitURL,d,e=r.to();try{d=new Blob([e],{type:"application/javascript"})}catch(f){window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.cp,d=new BlobBuilder,d.append(e),d=blob.getBlob()}this.sg=new Worker(c.createObjectURL(d));this.sg.onmessage=this.tn.bind(this)};r.Af.prototype.v=function(){!0!=this.N&&(this.N=!0,null!=this.sg&&this.sg.terminate())};
r.Af.prototype.G=function(){return this.ca||this.N};r.Af.prototype.tn=function(a){!0!=this.N&&(a=a.data,"string"===typeof a&&"ready"==a&&(this.ca=!0),null!=this.bf&&this.bf(a))};function oc(a,b,c,d){!0!=a.N&&(a.ca=!1,b={command:b,data:c},d&&d.e&&(b.lod=d.e[0]),a.sg.postMessage(b))}
function Mb(a,b,c){this.c=a;this.e=c;this.be=[];this.Fk=[256,256];this.sa=[0,100];this.o=[];this.Oa=[[0,0],[0,0]];this.me=null;this.Hb="";this.ca=!1;"esri-world-imagery"==c&&(b.availability={type:"negative-size",size:2521});"string"===typeof b?(this.me=this.c.qb(b),this.Hb=b.split("?")[0].split("/").slice(0,-1).join("/")+"/",r.dd(this.me,function(a){this.qf(a);this.ca=!0;a=this.c;a.Xd++;Tb(a);Ub(a);Wb(a)}.bind(this),function(){}.bind(this),r.useCredentials?-1!=this.me.indexOf(this.c.Zb):!1)):(this.qf(b),
this.ca=!0)}
Mb.prototype.qf=function(a){this.pn=a.id||null;this.t=a.type||"raster";this.md=this.qb(this.Hb,a.url,"");this.Fk=a.tileSize||[256,256];this.sa=a.lodRange||[0,0];this.Oa=a.tileRange||[[0,0],[0,0]];this.Ac=this.qb(this.Hb,a.metaUrl);this.Uh=this.qb(this.Hb,a.maskUrl);this.Vf=a.isTransparent||!1;this.o=a.credits||[];if(this.Gb=a.availability?{}:null)a=a.availability,this.Gb.t=a.type,this.Gb.fn=a.mime,this.Gb.ul=a.codes,this.Gb.k=a.size;this.Ac&&this.Uh&&(this.Gb={t:"metatile"});switch(typeof this.o){case "string":this.o=[];
break;case "object":if(!Array.isArray(this.o)){a=this.o;this.o=[];for(var b in a)Hb(this.c,b,new Ib(this.c,a[b])),this.o.push(b)}b=0;for(a=this.o.length;b<a;b++){var c=this.c.o[this.o[b]];this.be.push(c?c.e:null)}}};Mb.prototype.lb=function(){return{type:this.t,url:this.md,tileSize:this.Fk,credits:this.o,lodRange:this.sa,tileRange:this.Oa,mataUrl:this.Ac,maskUrl:this.Uh,isTransparent:this.Vf}};Mb.prototype.qb=function(a,b,c){return b?-1!=b.indexOf("//")?b:a+b:c};
function pc(a,b){var c=b[0]-a.sa[0];if(0>c)return!1;var d=b[1]>>c,c=b[2]>>c;return d<a.Oa[0][0]||d>a.Oa[1][0]||c<a.Oa[0][1]||c>a.Oa[1][1]?0:b[0]>a.sa[1]?1:2}function qc(a,b){return rc(a.c,a.md,{V:b[0],Ta:b[1],Ua:b[2]},null,void 0)}function zb(a){this.c=a;this.Ha=new sc(a,null,[0,0,0])}zb.prototype.v=function(){this.Ha.v()};
function tc(a,b,c,d){a=a.Ha;var e=b[1]>>c<<c;c=b[2]>>c<<c;for(b=b[0];0<b;b--){var f=0,g=1<<b-0-1;0!=(e&g)&&(f+=1);0!=(c&g)&&(f+=2);if(!a.P[f])if(d)a.Bf(f);else return null;a=a.P[f]}return a}function sc(a,b,c){this.c=a;this.e=c;this.ha=b;this.hf={};this.Vj={};this.Dk={};this.Ya={};this.o={};this.P=[null,null,null,null]}sc.prototype.v=function(){for(var a=0;4>a;a++)null!=this.P[a]&&this.P[a].v();this.P=[null,null,null,null];a=this.ha;this.ha=null;null!=a&&a.removeChild(this)};
sc.prototype.Bf=function(a){if(!this.P[a]){var b=this.e,b=[b[0]+1,b[1]<<1,b[2]<<1];switch(a){case 1:b[1]++;break;case 2:b[2]++;break;case 3:b[1]++,b[2]++}this.P[a]=new sc(this.c,this,b)}};sc.prototype.mk=function(a){null!=this.P[a]&&(this.P[a].v(),this.P[a]=null)};sc.prototype.removeChild=function(a){for(var b=0;4>b;b++)this.P[b]==a&&(this.P[b].v(),this.P[b]=null)};function uc(a,b,c,d,e){var f=a.Dk[b];f||(f=new vc(a.c,b,c,d,e),a.Dk[b]=f);return f}
function wc(a,b){for(var c in metatiles_)a.hf[c]==b&&delete a.hf[c]}function xc(a,b,c){var d=a.hf,e;for(e in d)if(d[e].q==b)return d[e];e=yc(b,a.e);return d[e]?(b=d[e].oa(b),a.hf[e]=b):c?(b=new zc(a,b),a.hf[e]=b):null}function ub(a,b){this.c=a;this.ef=null!=b?b:Number.MAX_VALUE;this.Xa=this.jb=null;this.oc=0}function Ac(a,b){if(null!=b&&a.Xa!=b){null!=b.gb&&(b.gb.ob=b.ob);null!=b.ob&&(b.ob.gb=b.gb);a.jb==b&&(a.jb=b.gb);var c=a.Xa;a.Xa=b;a.Xa.ob=c;a.Xa.gb=null;c.gb=a.Xa}}k=ub.prototype;
k.clear=function(){for(var a=this.Xa;null!=a;)null!=a.If&&a.If(),a=a.ob;this.Xa=this.jb=null;this.oc=0};function Bc(a,b,c){b={If:b,aj:c,gb:null,ob:a.Xa};null!=a.Xa&&(a.Xa.gb=b);a.Xa=b;null==a.jb&&(a.jb=b);a.oc+=c;Pb(a);return b}k.remove=function(a){var b=!1;a==this.Xa&&(this.Xa=a.ob,b=!0,null!=this.Xa&&(this.Xa.gb=null));a==this.jb&&(this.jb=a.gb,b=!0,null!=this.jb&&(this.jb.ob=null));if(!b){if(a.gb)a.gb.ob=a.ob;else debugger;if(a.ob)a.ob.gb=a.gb;else debugger}this.oc-=a.aj;a.If();Pb(this)};
function Pb(a){for(;a.oc>a.ef;){var b=a.jb;if(null!=b)a.jb=a.jb.gb,null!=a.jb&&(a.jb.ob=null),a.oc-=b.aj,b.If();else break}}k.il=function(a,b){return Bc(this,b,a)};k.removeItem=function(a){return this.remove(a)};k.Um=function(a){return Ac(this,a)};ub.prototype.addItem=ub.prototype.il;ub.prototype.removeItem=ub.prototype.removeItem;ub.prototype.itemUsed=ub.prototype.Um;function W(a,b){this.c=a;b instanceof W?this.l=b.l.slice():(this.l=null!=b&&b instanceof Array?b.slice():[],this.Yk())}k=W.prototype;
k.oa=function(){return new W(this.c,this.l)};function X(a){return[a.l[1],a.l[2],a.l[4]]}function Cc(a,b){a.l[1]=b[0];a.l[2]=b[1];a.l[4]=b[2];return a}function Dc(a,b){a.l[1]=b[0];a.l[2]=b[1]}function Ec(a,b){a.l[4]=b;return a}k.mb=function(){return[this.l[5],this.l[6],this.l[7]]};k.we=function(a){this.l[5]=a[0];this.l[6]=a[1];this.l[7]=a[2];return this};k.Zc=function(){return this.l[9]};function Fc(a,b){a.l[9]=b;return a}function nc(a){return a.l[8]}function Gc(a,b){a.l[8]=b;return a}
function lc(a){return nc(a)/Math.tan(r.ua(0.5*a.Zc()))}function mc(a){return a.l[3]}k.check=function(){this.l[6]=r.rd(this.l[6],-90,90);this.l[5]%=360;this.l[7]%=360};function Qc(a,b,c,d){var e=X(a),f=gc(a.c).Ad();d=null==d?1:d;hc(gc(a.c))?(d=r.ua(b),d=[-Math.sin(d),Math.cos(d)],Dc(a,[e[0]+d[0]*c,e[1]+d[1]*c])):(f=gc(a.c).Ad(),c=(new GeographicLib.Geodesic.Geodesic(f.a,f.a/f.b-1)).Direct(e[1],e[0],b,c),Dc(a,[c.lon2,c.lat2]),e=a.mb(),e[0]+=(c.azi1-c.azi2)*d,a.we(e));return a}
function Rc(a,b,c){if(a.l[3]==b)return a;var d=kc(a.c,X(a),nc(a),a.c.j.yc),d=a.c.dc(X(a),d);if(!1==d[1]&&!c)return null;"float"==b?(a.l[3]=b,a.l[4]-=d[0]):"fix"==b&&(a.l[3]=b,a.l[4]+=d[0]);return a}
k.Yk=function(){var a=this.l;"fixed"==a[0]&&(a[0]="obj",a[9]=a[8],a[8]=a[7],a[7]=a[6],a[6]=a[5],a[5]=a[4],a[4]=a[3],a[3]="fix");a[0]="obj"==a[0]||"subj"==a[0]?a[0]:"obj";a[1]=a[1]||0;a[2]=a[2]||0;a[3]="fix"==a[3]||"fixed"==a[3]||"float"==a[3]?a[3]:"float";a[4]=a[4]||0;a[5]=a[5]||0;a[6]=a[6]||0;a[7]=a[7]||0;a[8]=a[8]||300;a[9]=a[9]||90;a[3]="fixed"==a[3]?"fix":a[3]};
function Sc(a,b){var c=a.mb(),d=r.f.create();r.f.multiply(r.ub(2,r.ua(c[0])),r.ub(0,r.ua(c[1])),d);if("obj"==a.l[0]){var c=X(a),e=0;"float"==mc(a)&&(d=kc(a.c,X(a),nc(a),a.c.j.yc),d=a.c.dc(X(a),d),e=d[0]);d=a.Qe(hc(gc(a.c)));hc(gc(a.c))?(c[0]+=d.pb[0],c[1]+=d.pb[1],c[2]+=d.pb[2]+e):(c=a.c.ma([c[0],c[1],c[2]+e],"navigation","physical"),c[0]+=d.pb[0],c[1]+=d.pb[1],c[2]+=d.pb[2],c=a.c.ma(c,"physical","navigation"));"fix"!=b&&(d=kc(a.c,c,nc(a),a.c.j.yc),d=a.c.dc(c,d),c[2]-=d[0]);return c}if(mc(a)==b)return X(a);
d=kc(a.c,X(a),nc(a),a.c.j.yc);d=a.c.dc(X(a),d);c=X(a);c[2]="fix"==b?c[2]+d[0]:c[2]-d[0];return c}function Tc(a,b){var c=X(a);if("float"==mc(a)){b=null!=b?b:kc(a.c,X(a),nc(a),a.c.j.yc);var d=a.c.dc(X(a),b);c[2]+=d[0]}c=a.c.ma(c,"navigation","physical");d=a.c.ra;c[0]-=d[0];c[1]-=d[1];c[2]-=d[2];return c}k.ge=function(a,b){if(b)var c=this.c.ra,d=X(this),c=[d[0]-c[0],d[1]-c[1],d[2]-c[2]];else c=Tc(this,a);return Oa(this.c.i,c,pb(this.c.p))};
function Uc(a){var b=a.oa();Rc(b,"fix");var c=X(b),b=a.c.ma(c,"navigation","physical");a.c.ma([0,0],"navigation","physical");a.c.ma([-180,0],"navigation","physical");a.c.ma([90,0],"navigation","physical");a.c.ma([0,90],"navigation","physical");a.c.ma([-90,0],"navigation","physical");a.c.ma([0,-90],"navigation","physical");a.c.ma([0,-100],"navigation","physical");if(hc(gc(a.c)))var d=a.c.ma([c[0],c[1]+100,c[2]],"navigation","physical"),e=a.c.ma([c[0]+100,c[1],c[2]],"navigation","physical");else{var f=
ic(a.c),e=f.Direct(c[1],c[0],0,-100),d=a.oa();Dc(d,[e.lon2,e.lat2]);d=a.c.ma(X(d),"navigation","physical");e=f.Direct(c[1],c[0],90,100);c=a.oa();Dc(c,[e.lon2,e.lat2]);e=a.c.ma(X(c),"navigation","physical")}a=[d[0]-b[0],d[1]-b[1],d[2]-b[2]];b=[e[0]-b[0],e[1]-b[1],e[2]-b[2]];d=[0,0,0];r.r.normalize(a);r.r.normalize(b);r.r.Qg(a,b,d);r.r.normalize(d);return{mj:b,hj:a,ak:d}}
k.Qe=function(a,b){var c=this.mb(),d=lc(this);b&&(c[1]=r.rd(c[1],-89,90));var e=r.f.create();r.f.multiply(r.ub(2,r.ua(c[0])),r.ub(0,r.ua(c[1])),e);if("obj"==this.l[0]){var f=[0,-d,0];r.f.Ea(e,f)}else f=[0,0,0];d={pb:null,Lb:d,qi:null,wf:null,vn:f[2]};if(a){e=r.f.create();r.f.multiply(r.ub(0,r.ua(-c[1]-90)),r.ub(2,r.ua(-c[0])),e);var g=Uc(this);north_=g.ak;east_=g.mj;direction_=g.hj;var c=[east_[0],east_[1],east_[2],0,direction_[0],direction_[1],direction_[2],0,north_[0],north_[1],north_[2],0,0,0,
0,1],c=[1,0,0],g=[0,1,0],h=[0,0,1],l=[1,0,0],m=[0,0,-1],n=[0,0,0];r.r.Qg(l,m,n);r.f.Ea(e,h);r.f.Ea(e,c);r.f.Ea(e,g);r.f.Ea(e,l);r.f.Ea(e,m);r.f.Ea(e,n);e=0;e=l[0];l[0]=l[1];l[1]=e;e=m[0];m[0]=m[1];m[1]=e;e=n[0];n[0]=n[1];n[1]=e;l[2]=-l[2];m[2]=-m[2];n[2]=-n[2];e=[c[0],c[1],c[2],0,g[0],g[1],g[2],0,h[0],h[1],h[2],0,0,0,0,1];d.wf=r.r.normalize([-f[0],-f[1],-f[2]]);d.Xo=d.wf;d.pb=f;d.qi=e}else g=Uc(this),north_=g.ak,east_=g.mj,direction_=g.hj,e=r.f.create(),r.f.multiply(r.ub(0,r.ua(-c[1]-90)),r.ub(2,
r.ua(-c[0])),e),c=[1,0,0],g=[0,1,0],h=[0,0,1],l=X(this),m=r.f.create(),r.f.multiply(r.ub(0,r.ua(l[1]-90)),r.ub(2,r.ua(-l[0]-90)),m),r.f.Ea(m,h),r.f.Ea(m,c),r.f.Ea(m,g),c=[c[0],c[1],c[2],0,g[0],g[1],g[2],0,h[0],h[1],h[2],0,0,0,0,1],n=[1,0,0],l=[0,1,0],m=[0,0,1],r.f.Ea(c,l),r.f.Ea(c,m),r.f.Ea(c,n),r.f.Ea(e,n),r.f.Ea(e,l),r.f.Ea(e,m),e=[n[0],n[1],n[2],0,l[0],l[1],l[2],0,m[0],m[1],m[2],0,0,0,0,1],c=r.f.inverse(c),r.f.Ea(c,f),d.Xo=[-c[8],-c[9],-c[10]],r.f.inverse(e,c),d.wf=[-c[8],-c[9],-c[10]];d.pb=f;
d.qi=e;return d};k.toString=function(){var a=this.l;return a[0]+", "+a[1].toFixed(0)+", "+a[2].toFixed(0)+", "+a[3]+", "+a[4].toFixed(0)+", "+a[5].toFixed(0)+", "+a[6].toFixed(0)+", "+a[7].toFixed(0)+", , "+a[8].toFixed(0)+", "+a[9].toFixed(0)};function Ib(a,b){this.c=a;this.e=b.id||null;this.bk=b.notice||null;this.md=b.url||null;this.Mm=r.no(this.bk)}Ib.prototype.lb=function(){return{id:this.e,notice:this.bk,html:this.Mm}};
sb.prototype.Ca=function(a){this.fd=0.5*this.i.R[0];var b=this.$c().mb(),c=this.p.yd,b=Math.log(0.05)/(10*c*(Math.max(5,-b[1])/90)),b=b*(5/(Math.min(5E4,Math.max(this.wc,1E3))/5E3));!1==this.Wg&&(b=0);this.fe=b;this.i.fe=b;this.ff=0.9*this.ec.ef;b=this.Yg=this.n.Nd=0;for(c=this.Ud.length;b<c;b++)this.Ud[b]=null;0<this.Ha.uf.length&&this.Ha.Ca();b=0;for(c=this.Oe.length;b<c;b++){var d=this.Oe[b];if(d.ca&&d.Ha&&(!d.Ya||d.ld&&d.ld.G()))if("geodata"==d.t){if(d&&d.Ha.Fe([0,0,0],d.aa,this.ra)){if(null==
d.lg){var e=rc(d.c,d.gh,{},null,void 0);d.lg=new Vc(this,e,{B:null,q:d})}d.Yj!=d.Wc&&(d.kf=null,d.Yj=d.Wc);d.lg.G()&&(d.kf||(d.kf=new Wc(this,d.lg,{B:null,q:d})),d.kf.G()&&d.kf.Ca(this.ra))}}else d.Ha.Ca()}d=this.ra;b=0;for(c=this.Ud.length;b<c;b++)if(e=this.Ud[b])for(var f=0,g=e.length;f<g;f++){var h=e[f],l=h.B.q;l&&!l.dh&&Xc(this,h.B,h.$j,d,h.Dc,h.jd,!1,!1)}if(!a){if(0<this.Oe.length)for(b=0,c=this.Ud.length;b<c;b++)if(e=this.Ud[b])for(f=0,g=e.length;f<g;f++)h=e[f],(l=h.B.q)&&l.dh&&(a=this.xb,this.xb+=
l?l.xb:0,Xc(this,h.B,h.$j,d,h.Dc,h.jd,!1,!1),this.xb=a);if(this.bh){a=this.i;b=a.g;c=b.h;c.stencilMask(255);c.clear(c.STENCIL_BUFFER_BIT);c.stencilFunc(c.EQUAL,0,255);c.stencilOp(c.KEEP,c.KEEP,c.INCR);r.Jg=a.g.Sc({Pc:!0,ze:!0,td:!1});r.Li=a.g.Sc({Pc:!0,td:!1});d=[1/a.R[0],1/a.R[1]];e=513;f=0;0<a.Ff.length&&(e=a.Ff[0],f++);g=0;for(h=a.Cd.length;g<h;g++){var l=a.$e[g],m=a.Cd[g];0<l&&g>=e&&(c.clear(c.STENCIL_BUFFER_BIT),a.Ff.length>f?(e=a.Ff[f],f++):e=513);for(var n=0;n<l;n++)r.Pl(b,c,a,m[n],d)}rb(this.i)}}};
function Yc(a,b,c){for(var d=0,e=a.length;d<e;d++){var f=a[d];switch(f.t){case "submesh":var g=f.Db,f=f.w;if(!(g&&g.G(c,b,!0)&&(!f||f&&f.G(c,b,!0))))return!1;break;case "geodata":if(g=f.Ya,!g||!g.G(c,b,!0))return!1}}return!0}function Zc(a,b){for(var c in b.o)a.Hg.yh[c]=!0}
function $c(a,b,c,d,e){0<c.length&&a.Yg++;for(var f=0,g=c.length;f<g;f++){var h=c[f];switch(h.t){case "state":a.i.g.Gc(h.Ic);break;case "submesh":var l=h.Db,m=h.w;if(l&&l.G(e,d)&&(!m||m&&m.G(e,d))){a.Ug&&a.Xg&&l.Ma[h.lc].de(b);a:{var n=b,p=h.lc,q=h.zc,h=h.qd;null==l.Ob[p]&&null!=l.Ma[p]&&(l.Ob[p]=ad(l.Ma[p]));var s=l.Ma[p],p=l.Ob[p];if(null!=p){var u=l.c.i,t=null,w=null,C=null,I=null,F=l.c.lj;if("depth"==q)t=u.gk;else if(0<F)switch(F){case 2:t=u.jk;break;case 3:t=u.Hn;break;case 1:switch(q){case "internal":case "internal-nofog":t=
u.kk;C="aTexCoord";break;case "external":case "external-nofog":t=u.Un;I="aTexCoord2";break;case "fog":break a}}else switch(q){case "internal":case "internal-nofog":t=u.ii;C="aTexCoord";break;case "external":case "external-nofog":t=u.Sn;m&&(w=m.u?m.u.w&&m.u.w.Aa?m.u.w.Aa.Ka:null:m.Aa?m.Aa.Ka:null)&&(t=u.Tn);I="aTexCoord2";break;case "fog":t=u.In}u.g.useProgram(t,"aPosition",C,I,0!=F?"aBarycentric":null,null,null,null,w);if(null!=m){var P=m.u?m.u.w?m.u.w.Ka:null:m.Ka;if(P)m.ui!=l.n.sd&&(m.ui=l.n.sd,
l.n.Bb+=P.k),u.g.bindTexture(P),w&&u.g.bindTexture(w,1);else break a}else if("fog"!=q&&"depth"!=q)break a;w=r.f.create();r.f.multiply(eb(u.p),s.he(n),w);n=fb(u.p);La(t,"uMV",w);La(t,"uProj",n);if(0==F)switch(q){case "internal":case "fog":Ka(t,"uParams",[l.c.xb,l.c.fe,0,0]);break;case "internal-nofog":Ka(t,"uParams",[l.c.xb,0,0,0]);break;case "external":Ta(t,"uAlpha",1);Ka(t,"uParams",[l.c.xb,l.c.fe,0,0]);Ka(t,"uTransform",m.u?m.u.w?m.u.Uk:null:[1,1,0,0]);break;case "external-nofog":Ta(t,"uAlpha",
h),Ka(t,"uParams",[l.c.xb,0,0,0]),Ka(t,"uTransform",m.u?m.u.w?m.u.Uk:null:[1,1,0,0])}s.ui!=l.n.sd?(s.ui=l.n.sd,l.n.Bb+=p.k):l.n.Bb++;p.Ca(t,"aPosition",C,I,0!=F?"aBarycentric":null);l.n.ee+=l.xd;l.n.Lf++}}}break;case "geodata":(l=h.Ya)&&l.G(e,d,!0)&&l.Ca(b)}}}r.Rg=[144,8880,5492];
function Xc(a,b,c,d,e,f,g,h){if(!(a.n.Bb>=a.ff))if(b.li=!1,null!=b.q){if(bd(c)){if(a.Ug&&!g){var l=b.va;a.Xg||c.de(d);var m=c.m.A,n=c.m.W,n=a.J.Pf().ge([m[0]+0.5*(n[0]-m[0])-d[0],m[1]+0.5*(n[1]-m[1])-d[1],n[2]-d[2]],pb(a.p));n[2]*=0.9992;var p=a.Gl;a.Rl&&(q=""+b.e[0],gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]-4*p),4*p,q,[255,0,0,255],n[2]));if(a.lp){var q=""+b.e[1]+" "+b.e[2];gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]-11*p),4*p,q,[0,255,255,255],n[2])}a.Wl&&(q=""+m[0].toFixed(1)+
" "+m[1].toFixed(1)+" "+m[2].toFixed(1),gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+3*p),4*p,q,[0,255,255,255],n[2]));a.Ol&&l&&(q=""+l.xd+" - "+l.Ma.length+(b.q&&b.q.je?" - 1":" - 0"),gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+10*p),4*p,q,[0,255,0,255],n[2]));a.Vl&&(q=""+a.Yg,gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+10*p),4*p,q,[0,255,0,255],n[2]));a.Xl&&(q=JSON.stringify(b.q.e),c.Ee&&(q="[A]"+q),gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+10*p),4*p,q,[255,
255,255,255],n[2]));if(a.Jl&&b.hb){var s=b.q;if(s.je)for(var m=0,u=s.e.length;m<u;m++)b.hb[s.e[m]]&&(q="< "+s.e[m]+" >",gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+(10+14*m)*p),4*p,q,[255,255,255,255],n[2]),q=JSON.stringify(b.hb[s.e[m]]),gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+(17+14*m)*p),4*p,q,[255,255,255,255],n[2]));else b.hb[s.e]&&(q="< "+s.e+" >",gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+10*p),4*p,q,[255,255,255,255],n[2]),q=JSON.stringify(b.hb[s.e]),gb(a.i,
Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+17*p),4*p,q,[255,255,255,255],n[2]))}if(a.Ll){var q="{ ",t;for(t in b.o)b.o[t]&&(m=a.Gf[t])&&(q+=m.zh+", ");q+="} ";gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+10*p),4*p,q,[255,255,255,255],n[2])}a.Nl&&(q=""+e[1].toFixed(2)+"  "+e[0].toFixed(3)+"  "+c.Dc.toFixed(3),gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+17*p),4*p,q,[255,0,255,255],n[2]));a.Ul&&(e=(c.M&240)>>4,q=""+c.M.toString(2)+"-"+(e&1?"1":"0")+(e&2?"1":"0")+(e&4?"1":"0")+
(e&8?"1":"0"),gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]-18*p),4*p,q,[255,0,255,255],n[2]));if(a.Yl&&l)for(l=l.Ma,m=0,u=l.length;m<u;m++)l[m].gc&&(e=b.Ga[m])&&e.Ka&&(q="["+m+"]: "+e.Ka.Nc+" x "+e.Ka.ke,gb(a.i,Math.round(n[0]-0.5*hb(4*p,q)),Math.round(n[1]+(17+14*m)*p),4*p,q,[255,255,255,255],n[2]))}a.n.ug[b.e[0]]++;a.n.Zg++;if(b.Od){b.F=[[],[],[]];b.vf=!0;if(b.Ib)for(var w in b.Ib)b.Ib[w].rc=0;b.Od=!1}if(b.q.Ya)if(null==b.nc&&(w=b.q,n=b.e,w=rc(w.c,w.gh,{V:n[0],Ta:n[1],Ua:n[2]},null,void 0),
n=b.tb,p={B:b,q:b.q},l=n.Ya[w],l||(l=new Vc(n.c,w,p),n.Ya[w]=l),b.nc=l),w=a.Ab,b.Wc!=b.q.Wc&&(b.F=[[],[],[]],b.mc=null,b.Wc=b.q.Wc),0<b.F[w].length&&Yc(b.F[w],f,h))g||($c(a,d,b.F[w],f),Zc(a,b)),b.cb=null;else{if(b.nc.G(h,f)&&!h){b.mc||(b.mc=new Wc(a,b.nc,{B:b,q:b.q}));b.o={};a=0;for(d=c.o.length;a<d;a++)b.o[c.o[a]]=!0;b.F[w][0]={t:"geodata",Ya:b.mc}}}else a:if(null==b.va&&(w=b.q,n=b.e,l=rc(w.c,w.jg,{V:n[0],Ta:n[1],Ua:n[2]},null,void 0),w=b.tb,n=l,p=w.Vj[n],p||(p=new cd(w.c,n),w.Vj[n]=p),b.va=p),w=
a.Ab,0<b.F[w].length&&Yc(b.F[w],f,h))g||($c(a,d,b.F[w],f),Zc(a,b)),b.cb=null;else{if(b.cb)if(!0==b.va.G(!0,f)){if(0<b.F[w].length){g||($c(a,d,b.cb.F[w],f,!0),Zc(a,b));break a}}else g||($c(a,d,b.cb.F[w],f,!0),Zc(a,b));if(b.va.G(h,f)&&!h){n=b.va.Ma;b.F=[[],[],[]];b.o={};b.hb={};t=0;for(m=c.o.length;t<m;t++)b.o[c.o[t]]=!0;c=0;for(p=n.length;c<p;c++){l=n[c];a.Ug&&a.Xg&&!g&&l.de(d);if(l.Uc){if(b.vf){b.vf=!1;q=a;e=b;t=n;m=0;for(u=t.length;m<u;m++){var C=t[m];if(C.Uc){var I=e.q;e.q.je&&(I=e.q.Sd[C.Sd-1]);
if(I){var F=e.Ib[I.e];F||(F={Yb:[],qd:[],Cg:!1,rc:0},e.Ib[I.e]=F);if(F.rc!=e.rc){var P=q,s=e,G=C,C=I,I=F,F=F.rc!=e.rc;if(0<C.zb.length){if(F){I.Yb=[];for(var P=[],G=F=0,fa=C.zb.length;G<fa;G++){var A=C.zb[G][0];if(A&&A.ca&&pc(A,s.e)&&0<C.zb[G][1]){var K=null;s.e[0]>A.sa[1]&&(K={Pd:dd(s,A.sa[1]),wk:null,la:A,B:s});if(s.na[A.e]){K=s.na[A.e];if(s.na[A.e].nf)continue;ed(K)&&(I.Cg=!0)}else{var V=qc(A,s.e);s.na[A.e]=uc(s.tb,V,null,K,{B:s,la:A})}K=s.na[A.e];(K=!(1>C.zb[G][1]||K.u||ed(K)||A.Vf))&&F++;P.push(K);
I.Yb.push(A.e);I.qd[A.e]=C.zb[G];s.wa[A.e]=A;if(1>I.qd[A.e][1]||A.Vf)I.Cg=!0}}if(0<F){C=[];for(F=I.Yb.length-1;0<=F;F--)if(G=I.Yb[F],P[F]){C.unshift(G);break}else K=s.na[G],(1>I.qd[G][1]||s.wa[G].Vf||ed(K)&&!K.u)&&C.unshift(G);I.Yb=C}}}else null!=C.Jc?F&&(A=P.wa[C.Jc])&&pc(A,s.e)&&(K=null,s.e[0]>A.sa[1]&&(K={Pd:dd(s,A.sa[1]),wk:null,la:A,B:s}),I.Yb.push(A.e),s.wa[A.e]=A,s.na[A.e]||(V=qc(A,s.e),s.na[A.e]=uc(s.tb,V,null,K,{B:s,la:A}))):0!=G.Jc&&(A=Rb(P,G.Jc))&&pc(A,s.e)&&(K=null,s.e[0]>A.sa[1]&&(K=
{Pd:dd(s,A.sa[1]),wk:null,la:A,B:s}),s.wa[A.e]=A,s.na[A.e]||(V=qc(A,s.e),s.na[A.e]=uc(s.tb,V,null,K,{B:s,la:A})))}}}}q=void 0;for(q in e.Ib)e.Ib[q].rc=e.rc}e=b.q;e.je&&(e=b.q.Sd[l.Sd-1]);if(null!=e&&(q=b.Ib[e.e]))if(l.Uc)if(0<q.Yb.length)if(q.Cg){l.gc&&(null==b.Ga[c]&&(l=fd(b.q,b.e,c),b.Ga[c]=uc(b.tb,l)),b.F[0].push({t:"submesh",Db:b.va,lc:c,w:b.Ga[c],zc:"internal-nofog"}));b.F[0].push({t:"state",Ic:a.Il});u=q.Yb;s=0;for(I=u.length;s<I;s++)if(l=b.na[u[s]]){b.hb[e.e]||(b.hb[e.e]=[]);b.hb[e.e].push(u[s]);
C=b.wa[u[s]].be;t=0;for(m=C.length;t<m;t++)b.o[C[t]]=!0;b.F[0].push({t:"submesh",Db:b.va,lc:c,w:l,zc:"external-nofog",qd:q.qd[u[s]][1]})}b.F[0].push({t:"submesh",Db:b.va,lc:c,w:null,zc:"fog"});b.F[0].push({t:"state",Ic:a.kj})}else{if(q=q.Yb[q.Yb.length-1],l=b.na[q]){b.hb[e.e]||(b.hb[e.e]=[]);b.hb[e.e].push(q);C=b.wa[q].be;t=0;for(m=C.length;t<m;t++)b.o[C[t]]=!0;b.F[0].push({t:"submesh",Db:b.va,lc:c,w:l,zc:"external"})}}else if(l.Jc){if(q=Rb(a,l.Jc))if(l=b.na[q.e]){b.hb[e.e]||(b.hb[e.e]=[]);b.hb[e.e].push(q.e);
C=b.wa[q.e].be;t=0;for(m=C.length;t<m;t++)b.o[C[t]]=!0;b.F[0].push({t:"submesh",Db:b.va,lc:c,w:l,zc:"external"})}}else l.gc&&(null==b.Ga[c]&&(l=fd(b.q,b.e,c),b.Ga[c]=uc(b.tb,l)),b.F[0].push({t:"submesh",Db:b.va,lc:c,w:b.Ga[c],zc:"internal"}));else l.gc&&(null==b.Ga[c]?(l=fd(b.q,b.e,c),b.Ga[c]=uc(b.tb,l)):b.F[0].push({t:"submesh",Db:b.va,lc:c,w:b.Ga[c],zc:"internal"}))}else l.gc&&(null==b.Ga[c]?(l=fd(b.q,b.e,c),b.Ga[c]=uc(b.tb,l)):b.F[0].push({t:"submesh",Db:b.va,lc:c,w:b.Ga[c],zc:"internal"}));b.F[1].push({t:"submesh",
Db:b.va,lc:c,zc:"depth"})}Yc(b.F[w],f,h)?(g||($c(a,d,b.F[w],f),Zc(a,b)),b.cb=null):b.cb&&!g&&($c(a,d,b.cb.F[w],f,!0),Zc(a,b))}}}}else!g&&b.cb&&($c(a,d,b.cb.F[a.Ab],f,!0),Zc(a,b))}function dd(a,b){for(;a&&a.e[0]>b;)a=a.ha;return a}function Z(a){this.c=a;this.j=a.j}k=Z.prototype;k.kc=function(a){this.c.kc(a);return this};k.$c=function(){return this.c.$c().l};k.xe=function(a){this.c.xe(a);return this};k.rh=function(){return this.c.rh()};k.jh=function(){return this.c.jh()};
k.km=function(){var a=this.c,b=a.Hg.yh,c=[],d;for(d in b){var e=a.Gf[d];e&&c.push(e.zh)}e=a.Hg.Uj;b=[];for(d in e)(e=a.Gf[d])&&b.push(e.zh);return{"3D":[],imagery:c,mapdata:b}};k.jm=function(a){return(a=this.c.o[a])?a.lb():{}};k.Cm=function(){return Qb(this.c.lf)};k.Bm=function(a){return(a=this.c.lf[a])?a.lb():{}};k.ih=function(){return this.c.ih()};k.tj=function(a){return this.c.tj(a)};k.lh=function(){return this.c.lh()};k.lm=function(a){return(a=this.c.ya[a])?a.lb():{}};k.qh=function(){return this.c.qh()};
k.Am=function(a){return(a=this.c.ya[a])?a.lb():{}};k.ph=function(){return this.c.ph(surfaceId_)};k.Ad=function(a){return(a=this.c.Qd[a])?a.lb():{}};k.zm=function(){return this.c.sb.lb()};
k.Bl=function(a,b){var c=new W(this.c,a);if(b!=c.l[0]){if("obj"==b){if("float"==mc(c)){var d=!0;Rc(c,"fix",!0)}var e=lc(c),f=c.mb(),g=r.ua(-f[1]),h=e*Math.sin(g),e=e*Math.cos(g);hc(gc(c.c))?(f=r.ua(f[0]),f=[-Math.sin(f),Math.cos(f)],g=X(c),g[0]+=f[0]*e,g[1]+=f[1]*e):(Qc(c,-f[0],e),g=X(c));g[2]-=h;Cc(c,g);d&&Rc(c,"float",!0)}else"subj"==b&&(g=Sc(c,mc(c)),Cc(c,g));c.l[0]=b}return null!=c?c.l:c};k.Al=function(a,b,c){a=Rc(new W(this.c,a),b,c);return null!=a?a.l:a};
k.ma=function(a,b,c){a=this.c.Qd[a];b=this.c.Qd[b];return a&&b?gd(b,c,a):null};k.xl=function(a,b,c){return(new W(this.c,["obj",a[0],a[1],b,a[2],0,0,0,10,90])).ge(c)};k.zl=function(a){return(new W(this.c,["obj",a[0],a[1],"fix",a[2],0,0,0,10,90])).ge(null,!0)};k.wl=function(a,b,c){return Tc(new W(this.c,["obj",a[0],a[1],b,a[2],0,0,0,10,90]),c)};k.yl=function(a){var b=this.c.ra;return[a[0]-b[0],a[1]-b[1],a[2]-b[2]]};k.tl=function(a){return(new W(this.c,a)).l};
k.fo=function(a,b){return Cc(new W(this.c,a),b).l};k.sm=function(a){return X(new W(this.c,a))};k.io=function(a,b){return Ec(new W(this.c,a),b).l};k.um=function(a){return(new W(this.c,a)).l[4]};k.jo=function(a,b){return(new W(this.c,a)).we(b).l};k.wm=function(a){return(new W(this.c,a)).mb()};k.ko=function(a,b){return Gc(new W(this.c,a),b).l};k.xm=function(a){return nc(new W(this.c,a))};k.ho=function(a,b){return Fc(new W(this.c,a),b)};k.tm=function(a){return(new W(this.c,a)).Zc()};
k.ym=function(a){return(new W(this.c,a)).l[0]};k.vm=function(a){return mc(new W(this.c,a))};k.rm=function(a,b){return(new W(this.c,a)).ge(b)};k.qm=function(a,b){return Sc(new W(this.c,a),b)};k.jn=function(a,b,c,d){return Qc(new W(this.c,a),b,c,d)};k.dc=function(a,b){return this.c.dc(a,hd(this.c,a,b))};k.kh=function(a,b,c){return this.c.op(a,b,c)};k.hh=function(a,b){return this.c.hh(a,b)};
k.Qe=function(){var a=this.c.p;return{"projection-matrix":a.rf.slice(),"view-matrix":a.jf.slice(),"view-projection-matrix":a.re.slice(),"rotation-matrix":a.ve.slice(),position:this.c.ra.slice(),vector:this.c.Qc.slice()}};k.Tm=function(a){var b;a:{b=this.c.p;var c=this.c.ra;b.pa&&b.update();a=c?[a[0]-c[0],a[1]-c[1],a[2]-c[2],1]:[a[0],a[1],a[2],1];for(c=0;6>c;c++)if(0>r.Gg.Sa(b.ac[c],a)){b=!1;break a}b=!0}return b};k.Sm=function(a){return this.c.p.Fe({A:a[0],W:a[1]},this.c.ra)};
k.fm=function(a,b,c){a=new W(this.c,a);b=new W(this.c,b);return(new id(this.c,a,b,c)).eh()};M.prototype.Fb=function(a){this.c.Fb(a);return this};k=Z.prototype;k.vb=function(a,b){this.c.vb(a,b);return this};k.bc=function(a){return this.c.bc(a,value_)};k.Yn=function(){Wb(this.c);return this};k.Cf=function(a,b,c){this.c.Cf(a,b,c);return this};k.Zh=function(a,b){this.c.Zh(a,b);return this};k.Yh=function(a,b){this.c.Yh(a,b);return this};k.ki=function(a){this.c.ki(a);return this};
k.si=function(a,b){this.c.si(a,b);return this};k.oh=function(a){return this.c.oh(a)};k.eo=function(a){this.c.Eh=a;return this};k.nm=function(){return this.c.Eh};k.mm=function(){return this.c.ec};k.mh=function(a,b,c,d){return this.c.mh(a,b,c,d)};r.bp=W;Z.prototype.setPosition=Z.prototype.kc;Z.prototype.getPosition=Z.prototype.$c;Z.prototype.setView=Z.prototype.xe;Z.prototype.getView=Z.prototype.rh;Z.prototype.getCredits=Z.prototype.jh;Z.prototype.getCurrentCredits=Z.prototype.km;
Z.prototype.getCreditInfo=Z.prototype.jm;Z.prototype.getViews=Z.prototype.Cm;Z.prototype.getViewInfo=Z.prototype.Bm;Z.prototype.getBoundLayers=Z.prototype.ih;Z.prototype.getBoundLayerInfo=Z.prototype.tj;Z.prototype.getFreeLayers=Z.prototype.lh;Z.prototype.getFreeLayerInfo=Z.prototype.lm;Z.prototype.getSurfaces=Z.prototype.qh;Z.prototype.getSurfaceInfo=Z.prototype.Am;Z.prototype.getSrses=Z.prototype.ph;Z.prototype.getSrsInfo=Z.prototype.Ad;Z.prototype.getReferenceFrame=Z.prototype.zm;
Z.prototype.convertPositionViewMode=Z.prototype.Bl;Z.prototype.convertPositionHeightMode=Z.prototype.Al;Z.prototype.convertCoords=Z.prototype.ma;Z.prototype.convertCoordsFromNavToCanvas=Z.prototype.xl;Z.prototype.convertCoordsFromPhysToCanvas=Z.prototype.zl;Z.prototype.convertCoordsFromNavToCameraSpace=Z.prototype.wl;Z.prototype.convertCoordsFromPhysToCameraSpace=Z.prototype.yl;Z.prototype.clonePosition=Z.prototype.tl;Z.prototype.setPositionCoords=Z.prototype.fo;Z.prototype.getPositionCoords=Z.prototype.sm;
Z.prototype.setPositionHeight=Z.prototype.io;Z.prototype.getPositionHeight=Z.prototype.um;Z.prototype.setPositionOrientation=Z.prototype.jo;Z.prototype.getPositionOrientation=Z.prototype.wm;Z.prototype.setPositionViewExtent=Z.prototype.ko;Z.prototype.getPositionViewExtent=Z.prototype.xm;Z.prototype.setPositionFov=Z.prototype.ho;Z.prototype.getPositionFov=Z.prototype.tm;Z.prototype.getPositionViewMode=Z.prototype.ym;Z.prototype.getPositionHeightMode=Z.prototype.vm;
Z.prototype.getPositionCanvasCoords=Z.prototype.rm;Z.prototype.getPositionCameraCoords=Z.prototype.qm;Z.prototype.movePositionCoordsTo=Z.prototype.jn;Z.prototype.getSurfaceHeight=Z.prototype.dc;Z.prototype.getDistance=Z.prototype.kh;Z.prototype.getAzimuthCorrection=Z.prototype.hh;Z.prototype.getCameraInfo=Z.prototype.Qe;Z.prototype.isPointInsideCameraFrustum=Z.prototype.Tm;Z.prototype.isBBoxInsideCameraFrustum=Z.prototype.Sm;Z.prototype.generateTrajectory=Z.prototype.fm;
Z.prototype.setConfigParam=Z.prototype.vb;Z.prototype.getConfigParam=Z.prototype.bc;Z.prototype.redraw=Z.prototype.Yn;Z.prototype.addRenderSlot=Z.prototype.Cf;Z.prototype.moveRenderSlotBefore=Z.prototype.Zh;Z.prototype.moveRenderSlotAfter=Z.prototype.Yh;Z.prototype.removeRenderSlot=Z.prototype.ki;Z.prototype.setRenderSlotEnabled=Z.prototype.si;Z.prototype.getRenderSlotEnabled=Z.prototype.oh;Z.prototype.setLoaderSuspended=Z.prototype.eo;Z.prototype.getLoaderSuspended=Z.prototype.nm;
Z.prototype.getGpuCache=Z.prototype.mm;Z.prototype.getHitCoords=Z.prototype.mh;function xb(a,b){this.c=a;this.nn=b||1;this.Eg=0;this.se=[[],[]];this.Ge=0;this.wd=[];this.Tg=[]}xb.prototype.load=function(a,b,c){var d=this.wd.indexOf(a);if(-1==d){var e=this.se[this.Ge],d=Xb(e,a);-1!=d?e[d].jd=c:e.unshift({e:a,Ti:b,jd:c||0});20<e.length&&e.pop();do for(c=!0,a=0,b=e.length-1;a<b;a++)e[a].jd>e[a+1].jd&&(c=e[a],e[a]=e[a+1],e[a+1]=c,c=!1);while(!c)}};
xb.prototype.remove=function(a){a=Xb(this.se[this.Ge],a);-1!=a&&this.se[this.Ge].splice(a,1)};
function jd(a,b){for(var c=a.se[b],d=0,e=c.length;d<e;d++)c[d].jd*=0.95;for(d=performance.now();0<c.length&&a.Eg<a.nn;){var f=c.shift();-1==a.wd.indexOf(f.e)&&null!=f.Ti&&(a.wd.push(f.e),a.Tg.push(d),a.Eg++,f.Ti(f.e,function(){var a=this.wd.indexOf(f.e);this.wd.splice(a,1);this.Tg.splice(a,1);this.Eg--;Wb(this.c)}.bind(a),function(){var a=this.wd.indexOf(f.e);this.wd.splice(a,1);this.Tg.splice(a,1);this.Eg--}.bind(a)))}}
xb.prototype.update=function(){for(var a=this.se.length-1;0<=a;a--)if(0<this.se[a].length){jd(this,a);break}};
sb.prototype.dc=function(a,b,c){var d=kd(this,a),e=d[0],d=d[1];this.j.ne||(b=Math.floor(b));if(this.j.Oh)return ld(this,a,b+8,c,b);var f=this.Ha;if(null!=e&&null!==b){var g={$i:d,Le:Math.ceil(b),aa:{L:e.aa.L.slice(),T:e.aa.T.slice()},K:null,La:null,Ve:null,Sk:!0};f.Kj.trace(md(f,e.e),g);e=g.K;if(null!=g.La)return c&&(this.n.sh=2,this.n.th=b,this.n.uh=e.e[0]),this.j.ne&&0<e.e[0]&&g.ha&&g.ha.La&&b<=e.e[0]?(a=nd(d,g.ha.K,g.ha),a+=(nd(d,e,g)-a)*(b-Math.floor(b))):a=nd(d,e,g),[a,e.e[0]>=Math.ceil(b),!0];
if(null!=e)return a=ld(this,a,b+8,c,b),[a[0],a[1],!0]}return[0,!1,!1]};
function ld(a,b,c,d,e,f){if(f)b=f[0],g=f[1];else{g=kd(a,b);b=g[0];var g=g[1]}a.j.ne||(c=Math.floor(c));if(!f&&a.j.Nh){f=ld(a,null,c,d,e,[b,[g[0],g[1],g[2]]]);if(f[2]){var h=f[3].T[0]-f[3].L[0],l=f[3].T[1]-f[3].L[1],m=(g[0]-f[3].L[0])/h,n=(g[1]-f[3].L[1])/l,p=ld(a,null,c,d,e,[b,[g[0]+h,g[1],g[2]]]),q=ld(a,null,c,d,e,[b,[g[0],g[1]+l,g[2]]]);c=ld(a,null,c,d,e,[b,[g[0]+h,g[1]+l,g[2]]]);a=f[0]+(p[0]-f[0])*m;c=a+(q[0]+(c[0]-q[0])*m-a)*n;return[c,f[1],f[2],f[3]]}return[f[0],f[1],f[2],f[3]]}m=a.Ha;if(null!=
b&&null!==c&&(f={$i:g,Le:Math.ceil(c),aa:{L:b.aa.L.slice(),T:b.aa.T.slice()},K:null,La:null,Ve:null,Sk:!0},m.Fm.trace(md(m,b.e),f),b=f.K,null!=b))return g=b.m.Ef(),g=a.ma(g,"physical","navigation"),d&&(a.n.sh=1,a.n.th=e,a.n.uh=b.e[0]),a.j.ne&&0<b.e[0]&&f.ha&&f.ha.K?(a=a.ma(f.ha.K.m.Ef(),"physical","navigation"),c=g[2]+(a[2]-g[2])*(c-Math.floor(c)),[c,!0,!0,f.aa,b]):[g[2],!0,!0,f.aa,b];d&&(a.n.sh=0,a.n.th=e,a.n.uh=0);return[0,!1,!1,null]}
function nd(a,b,c){var d=c.La,e=d.ad,f=d.Tf;c=c.Ve;var g=a[0]-c.L[0];a=c.T[1]-a[1];g=g/(c.T[0]-c.L[0])*(f[0]-1);a=a/(c.T[1]-c.L[1])*(f[1]-1);c=Math.floor(g);var d=Math.floor(a),g=g-c,h=d*f[0],f=h+f[0],l=e[4*(h+c)],m=e[4*(f+c)],h=l+(e[4*(h+c+1)]-l)*g,e=h+(m+(e[4*(f+c+1)]-m)*g-h)*(a-d);return e=b.kg+e/255*(b.gf-b.kg)}
function kd(a,b){for(var c=a.sb.ce.fa,d=null,e=-1,f=[0,0],g=0,h=c.length;g<h;g++){var l=c[g],m=gd(l.zk,b,gc(l.c)),n=l.aa;m[0]>=n.L[0]&&m[0]<=n.T[0]&&m[1]>=n.L[1]&&m[1]<=n.T[1]&&l.e[0]>e&&(d=l,e=l.e[0],f=m)}return[d,f]}function hd(a,b,c){b=kd(a,b)[0];return null!=b?(a=b.e[0],c=Math.log((b.aa.T[1]-b.aa.L[1])/c)/Math.log(2),Math.max(0,c-8+a)):null}function kc(a,b,c,d){b=kd(a,b)[0];return null!=b?(a=b.e[0],c=Math.log(d*(b.aa.T[1]-b.aa.L[1])/c)/Math.log(2),Math.max(0,c-8+a)):null}
sb.prototype.kh=function(a,b,c){var d=gd(this.sb.kb.Kd,a,gc(this)),e=gd(this.sb.kb.Kd,b,gc(this)),f=0,g=e[0]-d[0],h=e[1]-d[1],d=e[2]-d[2],f=c?Math.sqrt(g*g+h*h+d*d):Math.sqrt(g*g+h*h),e=gc(this).Ad();if(hc(gc(this)))return[f,r.fj(Math.atan2(h,g))];a=ic(this).Inverse(a[1],a[0],b[1],b[0]);return f>2*e.a*Math.PI/4007.5?c?[Math.sqrt(a.s12*a.s12+d*d),a.fp]:[a.s12,a.azi1]:[f,a.azi1]};function ic(a){a=gc(a).Ad();return new GeographicLib.Geodesic.Geodesic(a.a,a.a/a.b-1)}
function id(a,b,c,d){this.c=a;this.gd=b.oa();this.hd=c.oa();this.gd.l[5]=0>this.gd.l[5]?360+this.gd.l[5]%360:this.gd.l[5]%360;this.hd.l[5]=0>this.hd.l[5]?360+this.hd.l[5]%360:this.hd.l[5]%360;this.fb=this.gd.oa();mc(this.gd)!=mc(this.hd)&&Rc(this.hd,mc(this.gd),!0);this.qe=d.mode||"auto";this.uo="piha";this.gf=d.maxHeight||1E9;this.ig=d.maxDuration||1E4;this.pk=d.samplePeriod||10;this.Wn=d.pv||0.15;hc(gc(this.c))||(this.sj=ic(this.c));d.distanceAzimuth?(this.Sg=!0,this.Va=this.gd.oa(),d.destHeight&&
Ec(this.Va,d.destHeight),d.destOrientation&&Ec(this.Va,d.destOrientation),d.destFov&&Ec(this.Va,d.destFov),this.Nf=d.azimuth||0,this.Lb=this.fh=d.distance||100,this.Ra=this.Nf%360,this.Ra=0>this.Ra?360+this.Ra:this.Ra):(this.Sg=!1,this.Va=this.hd.oa(),a=this.c.kh(X(this.fb),X(this.Va)),this.Lb=a[0],this.Ra=(a[1]-90)%360,this.Ra=0>this.Ra?360+this.Ra:this.Ra,hc(gc(this.c))||(a=this.sj.Inverse(this.fb.l[2],this.fb.l[1],this.Va.l[2],this.Va.l[1]),this.Nf=a.azi1,this.fh=a.s12,this.Ra=this.Nf%360,this.Ra=
0>this.Ra?360+this.Ra:this.Ra));"auto"==this.qe&&(this.qe=2E3<this.Lb?"ballistic":"direct");this.Z=0;this.ib=1E3;500>this.Lb?this.Z=1E3:2E3>this.Lb?this.Z=2E3:(this.Z=this.Lb/100,300>this.Z?this.Z=3E3:this.ib=1500,6E3>this.Z&&(this.Z=6E3),1E4<this.Z&&(this.Z=1E4),"direct"!=this.qe&&(this.Z*=1.8,this.ib*=1.8));"direct"!=this.qe&&(a=3*this.ib,this.Z=Math.max(this.Z,a),this.ig<a&&(this.Z=this.ig,this.ib=this.ig/3));this.Z=Math.min(this.Z,this.ig);d=d.height;"ballistic"==this.qe&&(this.zd=Math.max(this.fb.l[4],
this.Va.l[4]),this.zd+=d||0.5*this.Lb,this.zd=Math.min(this.zd,this.gf),this.zd-=Math.max(this.fb.l[4],this.Va.l[4]))}
id.prototype.eh=function(){for(var a=Array(Math.ceil(this.Z/this.pk)+(this.Sg?0:1)),b=0,c=0;c<=this.Z;c+=this.pk){var d=c/this.Z,e=this.fb.oa();if("direct"==this.qe){Cc(e,od(this,d));var f=this.fb.l[4];Ec(e,f+(this.Va.l[4]-f)*d);e.we(Cd(this.fb.mb(),this.Va.mb(),d));Fc(e,Dd(this,d));Gc(e,Ed(this,d))}else{d=d*d*(3-2*d);d=d*d*(3-2*d);f=0;f=c<this.ib?0:c>this.Z-this.ib?1:Math.min(1,(c-this.ib)/(this.Z-2*this.ib));f=f*f*(3-2*f);factor2_=f*f*(3-2*f);if("piha"==this.uo){var f=X(this.fb)[2],g=this.Lb/(0.001*
this.Z*this.Wn*Math.tan(0.5*r.ua(this.fb.Zc())))*(1-Math.cos(2*Math.PI*c/this.Z))+f+(X(this.Va)[2]-f)*c/this.Z,f=od(this,this.Lb/this.Z*(c-this.Z/(2*Math.PI)*Math.sin(2*Math.PI/this.Z*c))/this.Lb);Cc(e,f);Ec(e,g)}else f=od(this,factor2_),Cc(e,f),g=X(this.fb),Ec(e,g[2]+(X(this.Va)[2]-g[2])*d+Math.sin(Math.PI*d)*this.zd);null!=f[3]&&(this.Ra=f[3]);var f=c,h=g=null,h=[0,-90,0],l=0;h[0]=this.Ra%360;0>h[0]&&(h[0]=360-Math.abs(h[0]));f<=this.ib?(l=f/this.ib,g=this.fb.mb()):f>=this.Z-this.ib?(l=(f-(this.Z-
this.ib))/this.ib,g=h,h=this.Va.mb()):(l=0,g=h);e.we(Cd(g,h,l));Fc(e,Dd(this,d));Gc(e,Ed(this,d));a[b]=e.l}a[b]=e.l;b++}this.Sg||(a[b]=this.hd.oa().l);return a};function od(a,b){var c=X(a.fb),d=X(a.Va);if(hc(gc(a.c)))return[c[0]+(d[0]-c[0])*b,c[1]+(d[1]-c[1])*b,c[2]+(d[2]-c[2])*b];var e=a.sj.Direct(c[1],c[0],a.Nf,a.fh*b),f=e.azi1-e.azi2,f=0>a.Ra?360+f:f;return[e.lon2,e.lat2,c[2]+(d[2]-c[2])*b,f]}
function Cd(a,b,c){var d=b[0]-a[0],e=b[1]-a[1];b=b[2]-a[2];180<Math.abs(d)&&(d=0<d?-(360-d):360-Math.abs(d));return[a[0]+d*c,a[1]+e*c,a[2]+b*c]}function Dd(a,b){var c=a.fb.Zc();return c+(a.Va.Zc()-c)*b}function Ed(a,b){var c=nc(a.fb);return c+(nc(a.Va)-c)*b}
function Jb(a,b,c){this.c=a;this.n=a.n;this.e=b;this.Ba=this.md=null;this.k=this.H=0;"object"===typeof c?(this.Ba=c,this.H=2):(this.md=this.c.qb(c),r.dd(this.md,this.Wb.bind(this),this.Vb.bind(this),r.useCredentials?-1!=this.md.indexOf(this.c.Zb):!1),this.H=1)}k=Jb.prototype;k.v=function(){};k.G=function(a,b){if(2==this.H)return!0;0!=this.H||a||this.Xb(b);return!1};k.Xb=function(a){this.c.Rb.load(this.md,this.Ub.bind(this),a)};k.Ub=function(){this.H=1};k.Vb=function(){};
k.Wb=function(a){!0!=this.c.N&&(this.Ba=a,this.H=2)};k.size=function(){return this.k};function Vc(a,b,c){this.c=a;this.n=a.n;this.Da=b;this.ia=c;this.m=new Ea;this.k=0;this.X=this.Ya=null;this.H=0}k=Vc.prototype;k.v=function(){this.m=null};k.G=function(a,b){if(2==this.H)return Ac(this.c.Fc,this.X),!0;0!=this.H||a||this.Xb(b);return!1};k.Xb=function(a){this.c.Rb.load(this.Da,this.Ub.bind(this),a)};
k.Ub=function(a,b,c){this.Tb=b;this.Sb=c;this.H=1;r.dd(a,this.Wb.bind(this),this.Vb.bind(this),r.useCredentials?-1!=this.Da.indexOf(this.c.Zb):!1)};k.Vb=function(){!0!=this.c.N&&this.Sb()};k.Wb=function(a){!0!=this.c.N&&(this.Ya=a,Wb(this.c),this.Tb(),this.H=2)};k.size=function(){return this.k};
function Wc(a,b,c){this.c=a;this.n=a.n;this.Ya=b;this.g=this.c.i.g;this.i=this.c.i;this.Se=[];this.ud=null;this.B=c.B;this.q=c.q;this.q.Xc?this.q.wi&&(oc(this.q.Xc,"setStylesheet",{data:this.q.ld.Ba,geocent:!hc(gc(this.c))}),this.q.wi=!1):(a=new r.Af(this,this.dk.bind(this)),oc(a,"setStylesheet",{data:this.q.ld.Ba,geocent:!hc(gc(this.c))}),oc(a,"setFont",{chars:this.i.Vc.Rc,space:this.i.Vc.ye,size:this.i.Vc.k}),this.q.Xc=a);this.Xc=this.q.Xc;this.k=0;this.ca=this.N=!1;this.G()}k=Wc.prototype;
k.v=function(){this.N=!0;for(var a=0,b=this.Se.length;a<b;a++)this.Se[a].v()};
k.dk=function(a){if(!0!=this.N)if("string"!==typeof a&&null!=a.command)switch(a.command){case "beginGroup":this.ud=new Ba(a.id,a.bbox,a.origin,this.g,this.i);this.Se.push(this.ud);break;case "addRenderJob":if(this.ud){var b=this.ud;switch(a.type){case "flat-line":var c=b.h,d=a.vertexBuffer,e=a.color,f=1/255,g={t:"flat-line"};g.qa=a.program;g.Jb=[e[0]*f,e[1]*f,e[2]*f,e[3]*f];g.tc=a["z-index"]+256;g.Ie=a["click-event"];g.Xe=a["hover-event"];g.Mf=a["enter-event"];g.ag=a["leave-event"];g.fc=a.hitable;
g.Ne=a.eventInfo;g.Ic=a.state;g.$d=a.center;g.V=a.lod;g.bg=a["line-width"];g.uc=a["zbuffer-offset"];g.Ec=!1;g.ca=!0;b.qg&&!g.fc?(g.ca=!1,g.kd=JSON.stringify({t:g.t,Jb:e,tc:g.tc,el:g.uc}),g.Pa=d):(g.s=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,g.s),c.bufferData(c.ARRAY_BUFFER,d,c.STATIC_DRAW),g.s.I=3,g.s.C=d.length/3);b.da.push(g);b.k+=16*d.length;b.eb+=d.length/3;break;case "flat-tline":Fa(b,a);break;case "pixel-line":Fa(b,a);break;case "pixel-tline":Fa(b,a);break;case "line-label":var c=b.h,d=
a.vertexBuffer,e=a.texcoordsBuffer,f=a.color,g=1/255,h={t:"line-label"};h.qa=a.program;h.Jb=[f[0]*g,f[1]*g,f[2]*g,f[3]*g];h.tc=a["z-index"]+256;h.Ie=a["click-event"];h.Xe=a["hover-event"];h.Mf=a["enter-event"];h.ag=a["leave-event"];h.fc=a.hitable;h.Ne=a.eventInfo;h.Ic=a.state;h.$d=a.center;h.V=a.lod;h.uc=a["zbuffer-offset"];h.Ec=!1;h.ca=!0;b.qg&&!h.fc?(h.ca=!1,h.kd=JSON.stringify({t:h.t,Jb:f,tc:h.tc,el:h.uc}),h.Pa=d,h.ed=e):(h.s=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,h.s),c.bufferData(c.ARRAY_BUFFER,
d,c.STATIC_DRAW),h.s.I=4,h.s.C=d.length/4,h.Qa=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,h.Qa),c.bufferData(c.ARRAY_BUFFER,e,c.STATIC_DRAW),h.Qa.I=4,h.Qa.C=e.length/4);b.da.push(h);b.k+=16*d.length+16*e.length;b.eb+=d.length/3;break;case "icon":Ha(b,a);break;case "label":Ha(b,a,!0);break;case "optimize":b.Dp(a)}}break;case "endGroup":if(this.ud){a=this.ud;if(a.qg){b=a.h;c=[];d=0;for(e=a.da.length;d<e;d++)if(f=a.da[d],f.fc||f.Ec||"icon"==f.t||"label"==f.t)f.Ec||c.push(f);else{switch(f.t){case "flat-line":for(var l=
f.Pa.length,g=f.kd,h=d+1;h<e;h++){var m=a.da[h];m.kd==g&&(m.Ec=!0,l+=m.Pa.length)}for(var n=new Float32Array(l),l=0,h=d;h<e;h++)if(m=a.da[h],m.kd==g){var p=m.Pa;m.Pa=null;for(var m=0,q=p.length;m<q;m++)n[l+m]=p[m];l+=q}f.Pa=n;break;case "pixel-line":case "line-label":l=f.Pa.length;g=f.kd;for(h=d+1;h<e;h++)m=a.da[h],m.kd==g&&(m.Ec=!0,l+=m.Pa.length);for(var n=new Float32Array(l),s=new Float32Array(l),l=0,h=d;h<e;h++)if(m=a.da[h],m.kd==g){var p=m.Pa,u=m.ed;m.Pa=null;m.ed=null;m=0;for(q=p.length;m<q;m++)n[l+
m]=p[m],s[l+m]=u[m];l+=q}f.Pa=n;f.ed=s}c.push(f);f.ca=!0}a.Ec=a.da.length-c.length;a.da=c;d=0;for(e=a.da.length;d<e;d++)if(f=a.da[d],!f.fc&&"icon"!=f.t&&"label"!=f.t)switch(f.t){case "flat-line":f.s=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,f.s);b.bufferData(b.ARRAY_BUFFER,f.Pa,b.STATIC_DRAW);f.s.I=3;f.s.C=f.Pa.length/3;break;case "pixel-line":f.s=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,f.s),b.bufferData(b.ARRAY_BUFFER,f.Pa,b.STATIC_DRAW),f.s.I=4,f.s.C=f.Pa.length/4,f.qc=b.createBuffer(),
b.bindBuffer(b.ARRAY_BUFFER,f.qc),b.bufferData(b.ARRAY_BUFFER,f.ed,b.STATIC_DRAW),f.qc.I=4,f.qc.C=f.ed.length/4;case "line-label":f.s=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,f.s),b.bufferData(b.ARRAY_BUFFER,f.Pa,b.STATIC_DRAW),f.s.I=4,f.s.C=f.Pa.length/4,f.Qa=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,f.Qa),b.bufferData(b.ARRAY_BUFFER,f.ed,b.STATIC_DRAW),f.Qa.I=4,f.Qa.C=f.ed.length/4}}this.size+=this.ud.size()}}else switch(a){case "allProcessed":Wb(this.c);this.ca=!0;break;case "ready":Wb(this.c)}};
k.G=function(){!1==this.ca&&!0==this.Xc.G()&&(this.Xc.bf=this.dk.bind(this),oc(this.Xc,"processGeodata",this.Ya.Ya,this.B));return this.ca};k.he=function(a,b,c){null==c&&(c=r.f.create(),r.f.multiply(r.pc(a.A[0]-b[0],a.A[1]-b[1],a.A[2]-b[2]),r.tf(1,1,1),c));return c};
k.Ca=function(a){if(!0==this.ca)for(var b=this.i,c=0,d=this.Se.length;c<d;c++){var e=this.Se[c],f=r.f.create(),g=r.f.create();r.f.multiply(eb(b.p),this.he(e.m,a),g);var h=fb(b.p);r.f.multiply(h,g,f);e.Ca(g,f);this.n.ee+=e.eb;this.n.Lf+=e.da.length}return this.ca};k.size=function(){return this.k};function cd(a,b){this.c=a;this.n=a.n;this.Da=b;this.m=new Ea;this.xd=this.k=0;this.Nb=this.X=null;this.H=0;this.Ma=[];this.Ob=[]}k=cd.prototype;k.v=function(){this.m=null;this.Qj();this.Pj()};
k.Qj=function(a){for(var b=0,c=this.Ma.length;b<c;b++)this.Ma[b].v();this.Ma=[];!0!=a&&null!=this.X&&this.c.Fc.remove(this.X);this.H=0;this.X=null};k.Pj=function(a){for(var b=0,c=0,d=this.Ob.length;c<d;c++)this.Ob[c].v(),b+=this.Ob[c].k;0<d&&(this.n.Te-=b,this.n.Pb[1][0]++,this.n.Pb[1][1]+=b);this.Ob=[];!0!=a&&null!=this.Nb&&this.c.ec.remove(this.Nb);this.Nb=null};
k.G=function(a,b,c){var d=this.c.n.Bb>=this.c.ff;a=a||d;if(2==this.H){Ac(this.c.Fc,this.X);if(c)return!0;if(0==this.Ob.length){if(this.c.n.Bb>=this.c.ff)return!1;if(this.n.Nd>this.c.j.fg)return Wb(this.c),!1;if(d)return!1;b=performance.now();c=0;this.Ob=Array(this.Ma.length);for(var d=0,e=this.Ma.length;d<e;d++)this.Ob[d]=ad(this.Ma[d]),c+=this.Ob[d].k;this.n.Te+=c;this.n.Pb[0][0]++;this.n.Pb[0][1]+=c;this.Nb=Bc(this.c.ec,this.Pj.bind(this,!0),c);this.n.Nd+=performance.now()-b}a||Ac(this.c.ec,this.Nb);
return!0}0!=this.H||a||this.Xb(b);return!1};k.Xb=function(a){null==this.Da&&(this.Da=rc(this.c,this.B.q.jg,{V:this.B.e[0],Ta:this.B.e[1],Ua:this.B.e[2]}));this.c.Rb.load(this.Da,this.Ub.bind(this),a)};k.Ub=function(a,b,c){this.Tb=b;this.Sb=c;r.xc(a,this.Wb.bind(this),this.Vb.bind(this),r.useCredentials?-1!=this.Da.indexOf(this.c.Zb):!1);this.H=1};k.Vb=function(){!0!=this.c.N&&this.Sb()};
k.Wb=function(a){if(!0!=this.c.N){a={Ba:a,d:0};var b;b=a.Ba;var c;c=""+String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;c+=String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;"ME"!=c?b=!1:(this.bb=b.getUint16(a.d,!0),a.d+=2,2<this.bb?b=!1:(b.getFloat64(a.d,!0),a.d+=8,this.ck=b.getUint16(a.d,!0),a.d+=2,b=!0));if(b){this.Ma=[];b=0;for(c=this.ck;b<c;b++){var d=new Fd(this,a);d.od&&(this.Ma.push(d),this.k+=this.Ma[b].k,this.xd+=this.Ma[b].xd)}this.ck=this.Ma.length}this.X=Bc(this.c.Fc,this.Qj.bind(this,!0),
this.k);this.Tb();this.H=2}};k.size=function(){return this.k};function Gd(a,b,c,d){this.c=a.c;this.Ha=a;this.Be=a.Be;this.Xj=a.Xj;this.oe=a.oe;this.pi=a.pi;this.q=b;this.mn=c;this.Zi=d;this.jc=null}Gd.prototype.trace=function(a,b){this.jc=b;if(a){if(1==a.e[0]&&(Hd(this,a.ha,0,null,null,!0),!a.ha.K))return;Hd(this,a,0)}};
function Hd(a,b,c,d,e,f){if(null!=b){if(a.c.Xd!=b.rc){b.af=b.q;b.cd={va:b.va,Ga:b.Ga,na:b.na,nc:b.nc,mc:b.mc};b.cb=0<b.F[0].length?{F:b.F,o:b.o}:null;b.li=!1;b.Dd=b.K;for(var g in b.Ib)b.Ib[g]={Yb:[],qd:[],Cg:!1,rc:0};b.wa={};b.na={};b.vf=!0;b.q=null;b.va=null;b.Ga=[];b.nc=null;b.mc=null;b.Ce=!1;b.Ji=!1;b.sc=[];b.F=[[],[],[]];b.o={};b.rc=a.c.Xd;Wb(a.c);b.cb&&(b.cb=b.cb)}if(!e){if(b.Ki||null==b.q&&0==b.sc.length)if(b.q=null,b.Ce=!1,b.Ji=!1,b.sc=[],b.Ki=!1,a.Ha.qj)b.q=a.Ha.qj;else{g=a.Ha.uf;for(var h=
0,l=g.length;h<l;h++){var m=g[h][0],n=g[h][1],p;a:{p=b.e;var q=p[0]-m.sa[0],s=0>q;if(p[0]<m.sa[0]){var q=-q,u=m.Oa[0][0]>>q,t=m.Oa[0][1]>>q,w=m.Oa[1][0]>>q,q=m.Oa[1][1]>>q;if(p[0]>m.sa[1]||p[1]<u||p[1]>w||p[2]<t||p[2]>q){p=[!1,!1];break a}}else if(u=p[1]>>q,q=p[2]>>q,p[0]>m.sa[1]||u<m.Oa[0][0]||u>m.Oa[1][0]||q<m.Oa[0][1]||q>m.Oa[1][1]){p=[!1,!1];break a}p=[!0,s]}if(!0==p[0]){if(0<b.e[0]&&(p=b.ha,null!=p))if(s=xc(p.ab,m)){if(!s.G(c)){b.Ki=!0;continue}if(p=s.Re(p.e)){if(s=b.e,0==(p.M&1<<(s[2]-(p.e[2]<<
1)<<1)+(s[1]-(p.e[1]<<1))+4))continue}else continue}else continue;b.sc.push([m,n])}}1<b.sc.length?b.Ce=!0:b.q=b.sc[0]?b.sc[0][0]:null}if(null==b.K||b.Dd){if(!(g=b.Ki)){a:{if(b.Ce){g=b.sc;l=h=0;for(m=g.length;l<m;l++)!0==xc(b.ab,g[l][0],!0).G(c)&&h++;if(h==m){g=b.sc;h=null;l=0;for(m=g.length;l<m;l++)if(n=g[l][0],s=g[l][1],p=xc(b.ab,n),!0==p.G(c)&&(p=p.Re(b.e),null!=p&&s==p.Ee)){if(!s&&n.je&&!bd(p)&&0<p.Uf){q=p.Uf-1;q=Yb(a.c.Na,n.e[q]).bl;u=!1;for(s=l;s<m;s++)if(g[s].bl<=q){u=s>l;l=s-1;break}if(u)continue}if(bd(p)){h=
p.oa();b.q=n;break}}l=0;for(m=g.length;l<m;l++)if(n=g[l][0],p=xc(b.ab,n),!0==p.G(c)&&(p=p.Re(b.e),null!=p))if(h){h.M|=p.M&240;s=0;for(n=p.o.length;s<n;s++)-1==h.o.indexOf(p.o[s])&&h.o.push(p.o[s]);h.m.A[0]=Math.min(h.m.A[0],p.m.A[0]);h.m.A[1]=Math.min(h.m.A[1],p.m.A[1]);h.m.A[2]=Math.min(h.m.A[2],p.m.A[2]);h.m.W[0]=Math.max(h.m.W[0],p.m.W[0]);h.m.W[1]=Math.max(h.m.W[1],p.m.W[1]);h.m.W[2]=Math.max(h.m.W[2],p.m.W[2])}else h=p.oa(),b.q=n;h&&Id(h,!0);b.K=h;b.Dd=null;Wb(a.c)}else{g=!1;break a}}g=b.q;if(null==
g)g=!1;else if(g=xc(b.ab,g,!0),!0==g.G(c)){b.Ce||(b.K=g.Re(b.e),b.Dd=null,Wb(a.c));if(null!=b.K)for(b.K.B=b,b.Dd=null,Wb(a.c),g=0;4>g;g++)0!=(b.K.M&1<<g+4)==!0?b.Bf(g):b.mk(g);g=!0}else g=!1}g=g||null!=b.K&&b.Dd}if(!g)return;b.Dd&&(e=!0)}}if(null!=b.K&&!f&&(b.K.Xh.Wk(),b.af&&b.af==b.q&&(b.af=null,b.cd&&(b.va=b.cd.va,b.Ga=b.cd.Ga,b.na=b.cd.na,b.nc=b.cd.nc,b.mc=b.cd.mc,b.af=null,b.cd=null)),f=null,a.jc&&a.jc.Sk||(f=a.Zi(b,a.jc)),c=a.mn(b,a.jc,f,c,d,e),!0==c[0]))for(f||(f=a.Zi(b,a.jc)),d=0,e=f.length;d<
e;d++)Hd(a,b.P[f[d][0]],f[d][1],c[1],c[2])}}MelownMetanodeFlags_GeometryPresent=1;MelownMetanodeFlags_NavtilePresent=3;MelownMetanodeFlags_InternalTexturePresent=7;MelownMetanodeFlags_CoarsenessControl=15;MelownMetanodeFlags_ChildShift=3;
function Jd(a,b,c){this.Xh=a;this.c=a.c;this.e=b;this.o=[];this.Ee=!1;if(c){a=c.Ba;this.M=a.getUint8(c.d,!0);c.d+=1;var d=6*(this.e[0]+2)+7>>3;b=new Uint8Array(d);for(var e=0,f=d;e<f;e++)b[e]=a.getUint8(c.d,!0),c.d+=1;for(var f=this.e[0]+2,d=[0,0,0],g=[0,0,0],h=0,l=this.c.qo,m=this.c.po,e=0;3>e;e++)d[e]=Kd(b,f,h)*l[e]+m[e],h+=f,g[e]=Kd(b,f,h)*l[e]+m[e],h+=f;e=h=0;for(f=b.length;e<f;e++)h+=b[e];0==h&&(d[0]=Number.POSITIVE_INFINITY,d[1]=Number.POSITIVE_INFINITY,d[2]=Number.POSITIVE_INFINITY,g[0]=Number.NEGATIVE_INFINITY,
g[1]=Number.NEGATIVE_INFINITY,g[2]=Number.NEGATIVE_INFINITY);this.m=new Ea(d[0],d[1],d[2],g[0],g[1],g[2]);this.Uf=a.getUint8(c.d,!0);c.d+=1;this.Dc=r.Hl(a.getUint16(c.d,!0));c.d+=2;this.vd=a.getUint16(c.d,!0);c.d+=2;this.vd=1024;0==(this.M&4)&&(this.Dc=Number.POSITIVE_INFINITY);0==(this.M&8)&&(this.vd=256);this.kg=a.getInt16(c.d,!0);c.d+=2;this.gf=a.getInt16(c.d,!0);c.d+=2;this.Ee=!1;Id(this)}}Jd.prototype.v=function(){};
function Kd(a,b,c){for(var d=0,e=0;e<b;e++)a[c>>3]&1<<7-(c&7)&&(d|=1<<b-e-1),c++;return d/((1<<b)-1)}function bd(a){return 0!=(a.M&1)}Jd.prototype.oa=function(){var a=new Jd(this.Xh,this.e);a.M=this.M;a.kg=this.kg;a.gf=this.gf;a.m=this.m.oa();a.Uf=this.Uf;a.Dc=this.Dc;a.vd=this.vd;a.$b=this.$b;a.Kf=this.Kf;a.Jf=this.Jf;a.ij=this.ij;return a};
function Id(a,b){if(a.c.j.Sh){if(!b){var c;c=a.e;for(var d=a.c.sb.ce.fa,e=null,f=0,g=d.length;f<g;f++){var h=d[f],l=c[0]-h.e[0];if(0<=l){var m=c[2]>>l;h.e[1]==c[1]>>l&&h.e[2]==m&&(e=h)}}l=c[0]-e.e[0];h=1/Math.pow(2,l);d=e.aa.T;f=e.aa.L;g=(d[0]-f[0])*h;h*=f[1]-d[1];c=[e,[[f[0]+g*c[1],d[1]+h*c[2]],[f[0]+g*(c[1]+1),d[1]+h*(c[2]+1)]]];f=c[0];g=c[1][0];h=c[1][1];c=[0,0,0];a.$b=Ld(f,[0.5*(h[0]+g[0]),0.5*(h[1]+g[1]),0]);a.ij=r.r.length(a.$b);r.r.normalize(a.$b,c);a.Kf=c;l=Ld(f,[h[0],h[1],0]);d=Ld(f,[h[0],
g[1],0]);e=Ld(f,[g[0],g[1],0]);m=Ld(f,[g[0],h[1],0]);r.r.normalize(l);r.r.normalize(d);r.r.normalize(e);r.r.normalize(m);l=r.r.Sa(c,l);d=r.r.Sa(c,d);e=r.r.Sa(c,e);m=r.r.Sa(c,m);e=Math.min(l,d,e,m);a.Jf=Math.cos(Math.max(0,0.5*Math.PI-Math.acos(e)))}}else{var n=a.m.A,p=a.m.W;c=a.m.Ef();a.$b=[c[0],c[1],c[2]];r.r.normalize(c);a.Kf=c;l=[n[0],n[1],n[2]];d=[p[0],n[1],n[2]];e=[p[0],p[1],n[2]];m=[n[0],p[1],n[2]];f=[n[0],n[1],p[2]];g=[p[0],n[1],p[2]];h=[p[0],p[1],p[2]];n=[n[0],p[1],p[2]];r.r.normalize(l);
r.r.normalize(d);r.r.normalize(e);r.r.normalize(m);r.r.normalize(f);r.r.normalize(g);r.r.normalize(h);r.r.normalize(n);l=r.r.Sa(c,l);d=r.r.Sa(c,d);e=r.r.Sa(c,e);m=r.r.Sa(c,m);e=Math.min(l,d,e,m,r.r.Sa(c,f),r.r.Sa(c,g),r.r.Sa(c,h),r.r.Sa(c,n));a.Jf=Math.cos(Math.max(0,0.5*Math.PI-Math.acos(e)));ib(a.m);e=0.2*a.m.Wh;a.$b=[a.$b[0]-c[0]*e,a.$b[1]-c[1]*e,a.$b[2]-c[2]*e]}}
Jd.prototype.he=function(a,b){var c=b;null!=c?(c[0]=ob(this.m,0),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=ob(this.m,1),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=ob(this.m,2),c[11]=0,c[12]=this.m.A[0]-a[0],c[13]=this.m.A[1]-a[1],c[14]=this.m.A[2]-a[2],c[15]=1):(c=r.f.create(),r.f.multiply(r.pc(this.m.A[0]-a[0],this.m.A[1]-a[1],this.m.A[2]-a[2]),r.tf(ob(this.m,0),ob(this.m,1),ob(this.m,2)),c));return c};
Jd.prototype.de=function(a){var b=this.c.i;b.g.useProgram(b.te,"aPosition");var c=r.f.create(),d=r.f.create();r.f.multiply(eb(b.p),this.he(a),d);a=fb(b.p);r.f.multiply(a,d,c);La(b.te,"uMVP",c);b.Ni.Ca(b.te,"aPosition")};function zc(a,b){this.ab=a;this.c=a.c;this.q=b;this.e=a.e;this.fa=[];this.k=this.H=0;this.X=null}k=zc.prototype;k.v=function(a){!0!=a&&null!=this.X&&this.c.ic.remove(this.X);this.ab&&wc(this.ab,this);this.q=this.H=0;this.X=null;this.fa=[]};
k.oa=function(a){a=new zc(this.ab,a);a.fa=this.fa;a.H=this.H;a.fa=this.fa;a.k=this.k;a.V=this.V;a.Fd=this.Fd;a.Gd=this.Gd;a.Bc=this.Bc;a.Cc=this.Cc;a.ba=this.ba;a.Fa=this.Fa;a.bb=this.bb;a.o=this.o;2>this.bb?a.of=this.of:(a.M=this.M,a.Kb=this.Kb,a.Mb=this.Mb);a.X=Bc(this.c.ic,a.v.bind(a,!0),a.k);return a};k.G=function(){if(2==this.H)return!0;0==this.H&&this.Xb();return!1};k.Wk=function(){null!=this.X&&Ac(this.c.ic,this.X)};
k.Re=function(a){var b=a[1]-this.e[1]-this.Bc;a=a[2]-this.e[2]-this.Cc;return 0>b||0>a||b>=this.ba||a>=this.Fa?null:this.fa[this.ba*a+b]};k.Xb=function(){null==this.Da&&(this.Da=yc(this.q,this.e));this.c.Rb.load(this.Da,this.Ub.bind(this),null)};k.Ub=function(a,b,c){this.Tb=b;this.Sb=c;r.xc(a,this.Wb.bind(this),this.Vb.bind(this),r.useCredentials?-1!=this.Da.indexOf(this.c.Zb):!1);this.H=1};k.Vb=function(){!0!=this.c.N&&this.Sb()};
k.Wb=function(a){!0!=this.c.N&&(this.k+=4*a.byteLength,this.fi({Ba:a,d:0}),this.X=Bc(this.c.ic,this.v.bind(this,!0),this.k),this.Tb(),this.H=2,Wb(this.c))};
k.fi=function(a){var b=a.Ba,c;c=""+String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;c+=String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;"MT"==c&&(this.bb=b.getUint16(a.d,!0),a.d+=2,2<this.bb||(this.V=b.getUint8(a.d,!0),a.d+=1,this.Fd=b.getUint32(a.d,!0),a.d+=4,this.Gd=b.getUint32(a.d,!0),a.d+=4,this.Bc=b.getUint16(a.d,!0),a.d+=2,this.Cc=b.getUint16(a.d,!0),a.d+=2,this.ba=b.getUint16(a.d,!0),a.d+=2,this.Fa=b.getUint16(a.d,!0),a.d+=2,this.Mb=Array(8),2>this.bb?(this.of=b.getUint8(a.d,!0),a.d+=1):(this.M=
b.getUint8(a.d,!0),a.d+=1,this.Kb=b.getUint8(a.d,!0),a.d+=1,this.ei(a)),this.gi(a),this.hi(a)))};k.ei=function(a){for(var b=a.Ba,c=this.ba*this.Fa+7>>3,d=0;8>d;d++)if(0!=(this.M&1<<d)){for(var e=new Uint8Array(c),f=0;f<c;f++)e[f]=b.getUint8(a.d,!0),a.d+=1;this.Mb[d]=e}};
k.gi=function(a){var b=a.Ba;2>this.bb&&(this.Kb=b.getUint8(a.d,!0),a.d+=1,b.getUint16(a.d,!0),a.d+=2);if(0==this.Kb)this.o=[];else{var c=this.ba*this.Fa+7>>3;this.o=Array(this.Kb);for(var d=0,e=this.o.length;d<e;d++){var f=b.getUint16(a.d,!0);a.d+=2;for(var g=new Uint8Array(c),h=0;h<c;h++)g[h]=b.getUint8(a.d,!0),a.d+=1;this.o[d]={Og:f,Pg:g}}}};
k.Kg=function(){for(var a=0;1>a;a++)if(this.Mb[a]){bitplane_=this.Mb[a];for(var b=0;b<this.Fa;b++)for(var c=0;c<this.ba;c++){var d=this.ba*b+c,e=1<<(d&7),d=d>>3;if(bitplane_[d]&e)switch(a){case 0:this.fa[b*this.ba+c].Ee=!0}}}};k.Lg=function(){for(var a=0;a<this.Fa;a++)for(var b=0;b<this.ba;b++)for(var c=this.ba*a+b,d=1<<(c&7),c=c>>3,e=0,f=this.o.length;e<f;e++)this.o[e].Pg[c]&d&&this.fa[a*this.ba+b].o.push(this.o[e].Og)};
k.hi=function(a){this.fa=Array(this.ba*this.Fa);for(var b=0,c=0;c<this.Fa;c++)for(var d=0;d<this.ba;d++)this.fa[b]=new Jd(this,[this.V,this.Fd+this.Bc+d,this.Gd+this.Cc+c],a),b++;this.Lg();this.Kg()};function Md(a,b,c,d,e){this.c=a;this.e=b;this.zk=Sb(this.c,c);this.aa=d;this.Jj=e}function Ld(a,b){return Nd(a.zk,b,a.c.sb.kb.Kd)}
function Gb(a,b){this.c=a;this.rb=a.rb;this.od=!1;this.e=b.id||null;this.gj=b.description||"";var c=b.model;if(null!=c&&(this.kb={Kd:Sb(this.c,c.physicalSrs),ng:Sb(this.c,c.navigationSrs),ji:Sb(this.c,c.publicSrs)},this.jc={},null!=b.parameters&&(c=b.parameters,this.jc.oe=c.metaBinaryOrder||1,this.jc.Zj=c.navDelta||8),c=b.division,null!=c)){this.ce={Hp:c.rootLod||0,dp:c.arity||null,Jj:c.heightRange||[0,1]};var d;d=c.extents;d=null==d?{L:[0,0,0],T:[1,1,1]}:{L:d.ll||[0,0,0],T:d.ur||[1,1,1]};this.ce.aa=
d;this.c.qo=[d.T[0]-d.L[0],d.T[1]-d.L[1],d.T[2]-d.L[2]];this.c.po=d.L;c=c.nodes;this.ce.fa=[];if(null!=c){d=0;for(var e=c.length;d<e;d++){var f;var g=c[d],h=void 0,l=void 0;f=g.srs;var m=void 0,h=g.extents,m=null==h?{L:[0,0],T:[1,1]}:{L:h.ll||[0,0],T:h.ur||[1,1]},g=g.id;null!=g?(h=g.lod||0,l=g.position||[0,0],f=new Md(this.c,[h,l[0],l[1]],f,m,this.Jj)):f=void 0;this.ce.fa.push(f)}this.od=!0}}}Gb.prototype.lb=function(){return{physicalSrs:this.kb.Kd.e,navigationSrs:this.kb.ng.e,publicSrs:this.kb.ji.e}};
Gb.prototype.ma=function(a,b,c){var d,e;switch(b){case "public":d=this.kb.ji;break;case "physical":d=this.kb.Kd;break;case "navigation":d=this.kb.ng}switch(c){case "public":e=this.kb.ji;break;case "physical":e=this.kb.Kd;break;case "navigation":e=this.kb.ng}return Nd(d,a,e)};k=sb.prototype;k.Cf=function(a,b,c){this.Wa.push({id:a,Ui:b,$g:c})};k.Zh=function(a,b){var c=Xb(this.Wa,"after-map-render"==a?"map":a),d=Xb(this.Wa,b);-1!=c&&-1!=d&&this.Wa.splice(d,0,this.Wa.splice(c,1)[0])};
k.Yh=function(a,b){var c=Xb(this.Wa,"after-map-render"==a?"map":a),d=Xb(this.Wa,b);-1!=c&&-1!=d&&(d++,this.Wa.splice(d,0,this.Wa.splice(c,1)[0]))};k.ki=function(){var a=Xb(this.Wa,id2_);-1!=a&&this.Wa.splice(a,1)};k.si=function(a,b){var c=Xb(this.Wa,a);-1!=c&&(this.Wa[c].$g=b)};k.oh=function(){var a=Xb(this.Wa,id2_);return-1!=a?this.Wa[a].$g:!1};function jc(a){1!=a.Ab&&ka(a.i.g);for(var b=0,c=a.Wa.length;b<c;b++){var d=a.Wa[b];d.$g&&d.Ui&&d.Ui(a.Kl[a.Ab])}}
zc=function(a,b){this.ab=a;this.c=a.c;this.q=b;this.e=a.e;this.fa=[];this.k=this.H=0;this.X=null};k=zc.prototype;k.v=function(a){!0!=a&&null!=this.X&&this.c.ic.remove(this.X);this.ab&&wc(this.ab,this);this.q=this.H=0;this.X=null;this.fa=[]};
k.oa=function(a){a=new zc(this.ab,a);a.fa=this.fa;a.H=this.H;a.fa=this.fa;a.k=this.k;a.V=this.V;a.Fd=this.Fd;a.Gd=this.Gd;a.Bc=this.Bc;a.Cc=this.Cc;a.ba=this.ba;a.Fa=this.Fa;a.bb=this.bb;a.o=this.o;2>this.bb?a.of=this.of:(a.M=this.M,a.Kb=this.Kb,a.Mb=this.Mb);a.X=Bc(this.c.ic,a.v.bind(a,!0),a.k);return a};k.G=function(){if(2==this.H)return!0;0==this.H&&this.Xb();return!1};k.Wk=function(){null!=this.X&&Ac(this.c.ic,this.X)};
k.Re=function(a){var b=a[1]-this.e[1]-this.Bc;a=a[2]-this.e[2]-this.Cc;return 0>b||0>a||b>=this.ba||a>=this.Fa?null:this.fa[this.ba*a+b]};k.Xb=function(){null==this.Da&&(this.Da=yc(this.q,this.e));this.c.Rb.load(this.Da,this.Ub.bind(this),null)};k.Ub=function(a,b,c){this.Tb=b;this.Sb=c;r.xc(a,this.Wb.bind(this),this.Vb.bind(this),r.useCredentials?-1!=this.Da.indexOf(this.c.Zb):!1);this.H=1};k.Vb=function(){!0!=this.c.N&&this.Sb()};
k.Wb=function(a){!0!=this.c.N&&(this.k+=4*a.byteLength,this.fi({Ba:a,d:0}),this.X=Bc(this.c.ic,this.v.bind(this,!0),this.k),this.Tb(),this.H=2,Wb(this.c))};
k.fi=function(a){var b=a.Ba,c;c=""+String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;c+=String.fromCharCode(b.getUint8(a.d,!0));a.d+=1;"MT"==c&&(this.bb=b.getUint16(a.d,!0),a.d+=2,2<this.bb||(this.V=b.getUint8(a.d,!0),a.d+=1,this.Fd=b.getUint32(a.d,!0),a.d+=4,this.Gd=b.getUint32(a.d,!0),a.d+=4,this.Bc=b.getUint16(a.d,!0),a.d+=2,this.Cc=b.getUint16(a.d,!0),a.d+=2,this.ba=b.getUint16(a.d,!0),a.d+=2,this.Fa=b.getUint16(a.d,!0),a.d+=2,this.Mb=Array(8),2>this.bb?(this.of=b.getUint8(a.d,!0),a.d+=1):(this.M=
b.getUint8(a.d,!0),a.d+=1,this.Kb=b.getUint8(a.d,!0),a.d+=1,this.ei(a)),this.gi(a),this.hi(a)))};k.ei=function(a){for(var b=a.Ba,c=this.ba*this.Fa+7>>3,d=0;8>d;d++)if(0!=(this.M&1<<d)){for(var e=new Uint8Array(c),f=0;f<c;f++)e[f]=b.getUint8(a.d,!0),a.d+=1;this.Mb[d]=e}};
k.gi=function(a){var b=a.Ba;2>this.bb&&(this.Kb=b.getUint8(a.d,!0),a.d+=1,b.getUint16(a.d,!0),a.d+=2);if(0==this.Kb)this.o=[];else{var c=this.ba*this.Fa+7>>3;this.o=Array(this.Kb);for(var d=0,e=this.o.length;d<e;d++){var f=b.getUint16(a.d,!0);a.d+=2;for(var g=new Uint8Array(c),h=0;h<c;h++)g[h]=b.getUint8(a.d,!0),a.d+=1;this.o[d]={Og:f,Pg:g}}}};
k.Kg=function(){for(var a=0;1>a;a++)if(this.Mb[a]){bitplane_=this.Mb[a];for(var b=0;b<this.Fa;b++)for(var c=0;c<this.ba;c++){var d=this.ba*b+c,e=1<<(d&7),d=d>>3;if(bitplane_[d]&e)switch(a){case 0:this.fa[b*this.ba+c].Ee=!0}}}};k.Lg=function(){for(var a=0;a<this.Fa;a++)for(var b=0;b<this.ba;b++)for(var c=this.ba*a+b,d=1<<(c&7),c=c>>3,e=0,f=this.o.length;e<f;e++)this.o[e].Pg[c]&d&&this.fa[a*this.ba+b].o.push(this.o[e].Og)};
k.hi=function(a){this.fa=Array(this.ba*this.Fa);for(var b=0,c=0;c<this.Fa;c++)for(var d=0;d<this.ba;d++)this.fa[b]=new Jd(this,[this.V,this.Fd+this.Bc+d,this.Gd+this.Cc+c],a),b++;this.Lg();this.Kg()};
function Fb(a,b,c){this.c=a;this.e=b;this.rb=a.rb;this.vl=c.comment||null;this.Hc=c.srsDef||null;this.yk=c.srsModifiers||[];this.t=c.type||"projected";this.Vo=c.vdatum||"orthometric";this.Hc=c.srsDefEllps||this.Hc;a=c.periodicity;this.yn=null==a?null:{type:a.type||"",period:a.period||0};this.ti=this.rb(this.Hc).info();this.Yc=this.Za=null;this.Ag=this.rb(this.Hc,null,null,!0);c.geoidGrid&&(c=c.geoidGrid,this.Za={ej:c.definition||null,ro:c.srsDefEllps||null,Gi:c.valueRange||[0,1]},this.Za.aa=null!=
c.extents?{L:c.extents.ll,T:c.extents.ur}:{L:[0,0],T:[1,1]},null!=this.Za.ej&&(c=rc(this.c,this.Za.ej,{},null),this.Yc=new vc(this.c,c,!0)))}Fb.prototype.lb=function(){return{comment:this.vl,srsDef:this.Hc,srsModifiers:this.yk,type:this.t,vdatum:this.Vo,srsDefEllps:this.Hc,a:this.ti.a,b:this.ti.b}};Fb.prototype.Ad=function(){return this.ti};Fb.prototype.G=function(){return null==this.Za||null!=this.Yc&&this.Yc.G()};function hc(a){return"projected"==a.t}
function Od(a,b){var c=b[2]||0,c=c/Pd(a,b);return c-=Qd(a,b)}function Rd(a,b){var c=b[2]||0,c=c+Qd(a,b);return c*=Pd(a,b)}
function Qd(a,b){if(null!=a.Yc&&(null==a.Za||null!=a.Yc&&a.Yc.G())){mapCoords_=a.rb(a.Hc,a.Za.ro,[b[0],b[1]]);var c=mapCoords_[0]-a.Za.aa.L[0],d=a.Za.aa.T[1]-mapCoords_[1],e=a.Yc.Tf,c=e[0]/(a.Za.aa.T[0]-a.Za.aa.L[0])*c,d=e[1]/(a.Za.aa.T[1]-a.Za.aa.L[1])*d,c=r.rd(c,0,e[0]-2),d=r.rd(d,0,e[1]-2),f=Math.floor(c),g=Math.floor(d),c=c-f,h=a.Yc.ad,l=g*e[0],e=l+e[0],m=h[4*(l+f)],n=h[4*(e+f)],l=m+(h[4*(l+f+1)]-m)*c,d=l+(n+(h[4*(e+f+1)]-n)*c-l)*(d-g);return d=a.Za.Gi[0]+(a.Za.Gi[1]-a.Za.Gi[0])/255*d}return 0}
function Pd(a,b){if(-1!=a.yk.indexOf("adjustVertical")){var c=a.Ad(),d="+proj=longlat  +alpha=0 +gamma=0 +a="+c.a+" +b="+c.b+" +x_0=0 +y_0=0",e=a.rb(a.Hc,d,[b[0],b[1]]),e=(new GeographicLib.Geodesic.Geodesic(c.a,c.a/c.b-1)).Direct(e[1],e[0],90,1E3),e=[e.vp,e.rp],e=a.rb(d,a.Hc,e),d=e[0]-b[0],e=e[1]-b[1];return Math.sqrt(d*d+e*e)/1E3}return 1}
function Nd(a,b,c){a.G();if("string"!==typeof c){if(c.e==a.e)return b.slice();c.G()}b=b.slice();b[2]=Od(a,b);a=a.rb(a.Ag,"string"===typeof c?c:c.Ag,b);"string"!==typeof c&&(a[2]=Rd(c,a));return a}function gd(a,b,c){a.G();if("string"!==typeof c){if(c.e==a.e)return b.slice();c.G()}b=b.slice();"string"!==typeof c&&(b[2]=Od(c,b));b=a.rb("string"===typeof c?c:c.Ag,a.Ag,b);b[2]=Rd(a,b);return b}
function yb(a){this.c=a;this.J=a.J;this.Ze=a.J.Ze;this.Sj=this.Nd=this.nk=this.sf=this.oj=this.Ak=this.sd=this.Lf=this.ee=this.Zg=0;this.ug=Array(32);this.Xn=!1;this.Rf=0;this.$a=600;this.Hj=Array(this.$a);this.xj=Array(this.$a);this.wj=Array(this.$a);this.yj=Array(this.$a);this.Bj=Array(this.$a);this.uj=Array(this.$a);this.vj=Array(this.$a);this.Ej=Array(this.$a);this.Cj=Array(this.$a);this.Dj=Array(this.$a);this.Gj=Array(this.$a);this.Fj=Array(this.$a);this.Aj=Array(this.$a);this.zj=Array(this.$a);
this.Qb=[[0,0],[0,0]];this.Pb=[[0,0],[0,0]];for(a=this.Rf=0;a<this.$a;a++)this.Hj[a]=0,this.xj[a]=0,this.wj[a]=0,this.yj[a]=0,this.Bj[a]=0,this.vj[a]=0,this.uj[a]=0,this.Ej[a]=0,this.Cj[a]=0,this.Dj[a]=0,this.Gj[a]=0,this.Fj[a]=[0,[]],this.Aj[a]=[[0,0],[0,0]],this.zj[a]=[[0,0],[0,0]];this.Dm=this.Em=this.uh=this.th=this.sh=this.Bb=this.Ue=this.Te=0}
yb.prototype.end=function(a){var b=performance.now(),c=b-this.nk,d=b-this.oj;this.oj=b;a?(this.sf+=c,this.Sj=c):this.sf+=this.Sj;this.Xn&&(a=this.Rf,this.Hj[a]=c,this.xj[a]=0,this.wj[a]=0,this.yj[a]=0,this.Bj[a]=d,this.vj[a]=this.c.Fc.oc,this.uj[a]=this.c.ic.oc,this.Ej[a]=this.Ue,this.Cj[a]=this.Te,this.Dj[a]=this.Bb,this.Gj[a]=this.ee,this.Aj[a]=[[this.Qb[0][0],this.Qb[0][1]],[this.Qb[1][0],this.Qb[1][1]]],this.zj[a]=[[this.Pb[0][0],this.Pb[0][1]],[this.Pb[1][0],this.Pb[1][1]]],this.Fj[a]=[this.Zg,
this.ug.slice()],this.Rf=(this.Rf+1)%this.$a,this.Ze.Tp(this));0==this.Ak%50&&(this.sf=0,null!=this.Ze&&this.Ze.Up(this))};MelownSubmeshFlags_InternalTexcoords=1;MelownSubmeshFlags_ExternalTexcoords=2;MelownSubmeshFlags_PerVertexUndulation=4;MelownSubmeshFlags_TextureMode=8;
function Fd(a,b){this.c=a.c;this.Dg=this.Uc=this.gc=this.D=null;this.Db=a;this.od=!0;this.m=new Ea;this.xd=this.k=0;if(null!=b){var c=b.Ba;this.M=c.getUint8(b.d,!0);b.d+=1;1<this.Db.bb?(this.Sd=c.getUint8(b.d,!0),b.d+=1):this.Sd=0;this.Jc=c.getUint16(b.d,!0);b.d+=2;var d=this.m.A,e=this.m.W;d[0]=c.getFloat64(b.d,!0);b.d+=8;d[1]=c.getFloat64(b.d,!0);b.d+=8;d[2]=c.getFloat64(b.d,!0);b.d+=8;e[0]=c.getFloat64(b.d,!0);b.d+=8;e[1]=c.getFloat64(b.d,!0);b.d+=8;e[2]=c.getFloat64(b.d,!0);b.d+=8;c=b.Ba;d=b.d;
e=c.getUint16(b.d,!0);d+=2;e||(this.od=!1);var f=null,g=null,h=new Float32Array(3*e);this.M&MelownSubmeshFlags_ExternalTexcoords&&(f=new Float32Array(2*e));this.M&MelownSubmeshFlags_PerVertexUndulation&&(g=new Float32Array(e));for(var l=1/65535,m=0;m<e;m++){var n=3*m;h[n]=c.getUint16(d,!0)*l;d+=2;h[n+1]=c.getUint16(d,!0)*l;d+=2;h[n+2]=c.getUint16(d,!0)*l;d+=2;null!=f&&(n=2*m,f[n]=c.getUint16(d,!0)*l,d+=2,f[n+1]=(65535-c.getUint16(d,!0))*l,d+=2);null!=g&&(g[m]=c.getUint16(d,!0)*l,d+=2)}this.Ok=h;this.Mk=
f;this.Dg=g;b.d=d;if(this.M&MelownSubmeshFlags_InternalTexcoords){c=b.Ba;d=b.d;h=c.getUint16(b.d,!0);d+=2;e=new Float32Array(2*h);f=1/65535;g=0;for(h*=2;g<h;g+=2)e[g]=c.getUint16(d,!0)*f,d+=2,e[g+1]=(65535-c.getUint16(d,!0))*f,d+=2;this.Nk=e;b.d=d}c=b.Ba;d=b.d;e=c.getUint16(b.d,!0);d+=2;g=f=null;h=new Float32Array(9*e);this.M&MelownSubmeshFlags_InternalTexcoords&&(f=new Float32Array(6*e));this.M&MelownSubmeshFlags_ExternalTexcoords&&(g=new Float32Array(6*e));for(var l=this.Ok,m=this.Mk,n=this.Nk,
p=0;p<e;p++){var q=9*p,s=c.getUint16(d,!0),d=d+2,u=c.getUint16(d,!0),d=d+2,t=c.getUint16(d,!0),d=d+2,w=3*s;h[q]=l[w];h[q+1]=l[w+1];h[q+2]=l[w+2];w=3*u;h[q+3]=l[w];h[q+4]=l[w+1];h[q+5]=l[w+2];w=3*t;h[q+6]=l[w];h[q+7]=l[w+1];h[q+8]=l[w+2];null!=g&&(q=6*p,g[q]=m[2*s],g[q+1]=m[2*s+1],g[q+2]=m[2*u],g[q+3]=m[2*u+1],g[q+4]=m[2*t],g[q+5]=m[2*t+1]);null!=f&&(s=c.getUint16(d,!0),d+=2,u=c.getUint16(d,!0),d+=2,t=c.getUint16(d,!0),d+=2,q=6*p,f[q]=n[2*s],f[q+1]=n[2*s+1],f[q+2]=n[2*u],f[q+3]=n[2*u+1],f[q+4]=n[2*
t],f[q+5]=n[2*t+1])}this.D=h;this.gc=f;this.Uc=g;this.Mk=this.Nk=this.Ok=null;b.d=d;this.k=this.D.length;this.gc&&(this.k+=this.gc.length);this.Uc&&(this.k+=this.Uc.length);this.Dg&&(this.k+=this.Dg.length);this.k*=4;this.xd=e}}Fd.prototype.v=function(){this.Dg=this.Uc=this.gc=this.D=null};Fd.prototype.size=function(){return this.k};function ad(a){return new Pa(a.c.i.g,{m:a.m,D:a.D,Fg:a.gc,Xk:a.Uc},0,a.c.J)}
Fd.prototype.he=function(a,b){var c=b;null!=c?(c[0]=ob(this.m,0),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=ob(this.m,1),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=ob(this.m,2),c[11]=0,c[12]=this.m.A[0]-a[0],c[13]=this.m.A[1]-a[1],c[14]=this.m.A[2]-a[2],c[15]=1):(c=r.f.create(),r.f.multiply(r.pc(this.m.A[0]-a[0],this.m.A[1]-a[1],this.m.A[2]-a[2]),r.tf(ob(this.m,0),ob(this.m,1),ob(this.m,2)),c));return c};
Fd.prototype.de=function(a){var b=this.c.i;b.g.useProgram(b.te,"aPosition");var c=r.f.create(),d=r.f.create();r.f.multiply(eb(b.p),this.he(a),d);a=fb(b.p);r.f.multiply(a,d,c);La(b.te,"uMVP",c);b.Ni.Ca(b.te,"aPosition")};
function Lb(a,b,c){this.c=a;this.e=null;this.t="basic";this.oe=1;this.$h=this.Ac="";this.Zj=1;this.Hb=this.Ai=this.jg="";this.sa=[0,0];this.Oa=[[0,0],[0,0]];this.Jc=null;this.zb=[];this.je="glue"==c;this.dh="free"==c;this.xb=0;this.ca=!1;this.Xc=null;this.Wc=0;this.kf=this.lg=null;this.Yj=-1;this.be=[];this.di=this.ld=this.Bk=null;this.wi=!0;this.Ha=this.dh?new Nb(this.c,!0,this):null;"string"===typeof b?(this.me=this.c.qb(b),this.Hb=b.split("?")[0].split("/").slice(0,-1).join("/")+"/",r.dd(this.me,
function(a){this.qf(a);this.ca=!0;a=this.c;a.Xd++;Tb(a);Ub(a);Wb(a)}.bind(this),function(){}.bind(this),r.useCredentials?-1!=this.me.indexOf(this.c.Zb):!1)):(this.qf(b),this.ca=!0)}
Lb.prototype.qf=function(a){this.e=a.id||null;this.t=a.type||"basic";this.oe=a.metaBinaryOrder||1;this.Ac=this.qb(this.Hb,a.metaUrl,"");this.$h=this.qb(this.Hb,a.navUrl,"");this.Zj=a.navDelta||1;this.jg=this.qb(this.Hb,a.meshUrl,"");this.Ai=this.qb(this.Hb,a.textureUrl,"");this.gh=this.qb(this.Hb,a.geodataUrl,"");this.sa=a.lodRange||[0,0];this.Oa=a.tileRange||[[0,0],[0,0]];this.Jc=a.textureLayer||null;this.Ya="geodata"==this.t||"geodata-tiles"==this.t;this.o=a.credits||[];this.vd=a.displaySize||256;
if(a.extents){var b=a.extents.ll,c=a.extents.ur;this.aa=new Ea(b[0],b[1],b[2],c[0],c[1],c[2])}else this.aa=new Ea(0,0,0,1,1,1);switch(typeof this.o){case "string":this.o=[];break;case "object":if(!Array.isArray(this.o)){b=this.o;this.o=[];for(var d in b)Hb(this.c,d,new Ib(this.c,b[d])),this.o.push(d)}d=0;for(b=this.o.length;d<b;d++)c=this.c.o[this.o[d]],this.be.push(c?c.e:null)}this.Ya&&(this.di=a=a.style)&&Vb(this,a);this.Sd=[];if(this.je)for(d=0,b=this.e.length;d<b;d++)this.Sd.push(Yb(this.c.Na,
this.e[d]))};Lb.prototype.lb=function(){return this.Ya?{type:this.t,metaUrl:this.Ac,geodataUrl:this.gh,lodRange:this.sa,tileRange:this.Oa,style:this.di}:{type:this.t,metaUrl:this.Ac,navUrl:this.$h,meshUrl:this.jg,textureUrl:this.Ai,lodRange:this.sa,tileRange:this.Oa,textureLayer:this.Jc}};Lb.prototype.qb=function(a,b,c){return b?-1!=b.indexOf("//")?b:a+b:c};function Vb(a,b){a.Bk!=b&&(a.ld=a.c.Bg[b],a.ld||(a.ld=new Jb(a.c,b,b),a.c.Bg[b]=a.ld),a.Bk=b,a.wi=!0,a.Wc++,Wb(a.c))}
function yc(a,b){return rc(a.c,a.Ac,{V:b[0],Ta:b[1],Ua:b[2]},null,void 0)}function fd(a,b,c){return rc(a.c,a.Ai,{V:b[0],Ta:b[1],Ua:b[2]},c,void 0)}
function Tb(a){var b,c=a.Ke;if(b=a.Ha){b.uf=[];b.Op=[];b.xi=[];var d={},e=0,f=[],g;for(g in c.Na){var h=Yb(a.Na,g);h&&(e++,d[g]=h.d+1,f.push([[h.d+1],h,!0,!1]))}var l=[];for(g in a.Qf){var m=a.Qf[g],n=m.e;if(n.length<=e){for(var p=!1,h=0,q=n.length;h<q;h++)if(!d[n[h]]){p=!0;break}if(!p){p=[];h=0;for(q=n.length;h<q;h++)p.unshift(d[n[h]]);l.push([p,m,!1,!1])}}}d=0;for(n=l.length;d<n;d++)h=l[d],m=h[1],m.am=!0,m.$l=!0,m.am&&f.push(h),m.$l&&(p=h[0].slice(1),f.push([p,h[1],!1,!0]));do for(l=!0,d=0,n=f.length-
1;d<n;d++){for(var m=f[d][0],p=f[d+1][0],s=!1,h=0,q=Math.min(m.length,p.length);h<q;h++)if(m[h]<p[h]||h==q-1&&m[h]==p[h]&&p.length>m.length){s=!0;break}s&&(h=f[d],f[d]=f[d+1],f[d+1]=h,l=!1)}while(!l);e-=1;d=0;for(n=f.length;d<n;d++)b.uf.push([f[d][1],f[d][3]]),f[d][1].bl=e,f[d][2]&&(e--,b.xi.push(f[d][1]));a.bh=!1;for(g in c.ya)if(b=a.ya[g])b.uf=[b],b.xi=[b],b.Ya&&(a.bh=!0);rb(a.i)}}
function Ub(a){var b=a.Ke,c;for(c in b.Na){var d=b.Na[c],e=Yb(a.Na,c);if(null!=e){e.zb=[];for(var f=0,g=d.length;f<g;f++){var h=d[f];if("string"===typeof h){var l=a.wa[h];l&&e.zb.push([l,1])}else if(l=a.wa[h.id]){var m=1;"undefined"!==typeof h.alpha&&(m=h.alpha);e.zb.push([l,m])}}}}for(c in b.ya)if(f=b.ya[c],d=a.ya[c],null!=d&&d.ca&&(d.zb=[],(e=f.boundLayers)&&Array.isArray(e)))for(f=0,g=e.length;f<g;f++)if(h=e[f],"string"===typeof h)(l=a.wa[h])&&d.zb.push([l,1]);else if(l=a.wa[h.id])m=1,"undefined"!==
typeof h.alpha&&(m=h.alpha),d.zb.push([l,m])}function vc(a,b,c,d,e){this.c=a;this.n=a.n;this.Ka=this.Tf=this.ad=this.za=null;this.H=0;this.nf=!1;this.Aa=null;this.Da=b;this.La=c||!1;this.u=d;this.ia=e;this.Ja=0;this.ae=this.He=null;if(e&&e.la&&(a=e.la,a.Gb))switch(this.He=a.Gb.t,this.He){case "negative-type":this.ae=a.Gb.fn;break;case "negative-code":this.ae=a.Gb.ul;break;case "negative-size":this.ae=a.Gb.k}this.Nb=this.X=null}k=vc.prototype;
k.v=function(){this.w=null;this.Zf();this.Yf();this.Aa&&(this.Aa.Zf(),this.Aa.Yf())};k.Zf=function(a){this.ad=this.za=null;!0!=a&&null!=this.X&&this.c.Fc.remove(this.X);this.Aa&&this.Aa.Zf();this.H=0;this.X=null};k.Yf=function(a){null!=this.Ka&&(this.n.Ue-=this.Ka.k,this.Ka.v(),this.n.Qb[1][0]++,this.n.Qb[1][1]+=this.Ka.k,this.Aa&&this.Aa.Yf());this.Ka=null;!0!=a&&null!=this.Nb&&this.c.ec.remove(this.Nb);this.Nb=null};
function Sd(a,b,c){if(b&&c){a.u.Pd=b;a.u.la=c;if(!b.na[c.e]){b.wa[c.e]=c;var d=qc(c,b.e);b.na[c.e]=uc(b.tb,d,null,null,{B:b,la:c})}a.u.w=b.na[c.e];c=a.u.B;var d=c.e[0]-b.e[0],e=1/Math.pow(2,d);a.u.Uk=[e,e,(c.e[1]-(b.e[1]<<d))*e,(c.e[2]-(b.e[2]<<d))*e];Wb(a.c)}}
k.G=function(a,b,c){var d=this.c.n.Bb>=this.c.ff;a=a||d;this.ia&&this.ia.B.e[0]==r.Rg[0]&&this.ia.B.e[1]==r.Rg[1]&&this.ia.B.e[2]==r.Rg[2]&&(this.ia=this.ia);if(this.nf)return!1;if(this.u){if(this.u.w){for(;-1==this.u.w.Ja;){d=this.u.Pd.ha;if(d.e[0]<this.u.la.sa[0])return this.nf=!0,this.u.B.Od=!0,Wb(this.c),!1;Sd(this,d,this.u.la)}(a=this.u.w.G(a,b,c))&&this.Xi&&(this.u.B.Od=null!=ed(this.u.w),this.Xi=!1);return a}Sd(this,this.u.Pd,this.u.la);return!1}switch(this.He){case "metatile":if(2!=this.Ja){if(0==
this.Ja&&this.ia&&this.ia.B){var e=this.ia.B.Qi;e||(e=tc(this.c.vg,this.ia.B.e,8),this.ia.B.Qi=e);var d=this.ia.la,f=this.ia.Wj;this.ia.Wj||(f=e.e,f=rc(d.c,d.Ac,{V:f[0],Ta:f[1],Ua:f[2]},null,void 0),this.ia.Wj=f);e=uc(e,f,!0,null,null);this.Aa?this.Aa.G(a,b,c)&&(this.Ja=2):e.G(a,b,c)&&(a=this.ia.B,b=e.ad?e.ad[4*((a.e[2]&255)*e.Tf[0]+(a.e[1]&255))]:0,this.Ja=b&128?2:-1,2!=this.Ja||b&64||(b=a.e,f=rc(d.c,d.Uh,{V:b[0],Ta:b[1],Ua:b[2]},null,void 0),this.Aa=uc(a.tb,f,null,null,null),this.Ja=0,a.Od=!0,Wb(this.c)))}if(-1==
this.Ja){if(!this.u){d=this.ia.B.ha;if(d.e[0]<this.ia.la.sa[0])return this.nf=!0,this.ia.B.Od=!0,Wb(this.c),!1;this.u={B:this.ia.B,la:this.ia.la};Sd(this,this.u.B.ha,this.u.la);this.Xi=!0}for(;-1==this.u.w.Ja;){d=this.u.Pd.ha;if(d.e[0]<this.u.la.sa[0]){this.nf=!0;this.u.B.Od=!0;Wb(this.c);break}Sd(this,d,this.u.la)}}return!1}break;case "negative-type":case "negative-code":case "negative-size":if(2!=this.Ja){if(0==this.Ja)this.c.Rb.load(this.Da,this.rn.bind(this,"negative-size"==this.He),b);else if(-1==
this.Ja&&this.ia)for(this.u||(this.u={B:this.ia.B,la:this.ia.la},Sd(this,this.u.B.ha,this.u.la));-1==this.u.w.Ja;)Sd(this,this.u.Pd.ha,this.u.la);return!1}}if(2==this.H){a||Ac(this.c.Fc,this.X);if(c)return this.La&&null==this.ad&&Td(this),this.Aa?this.Aa.G(a,b,c):!0;if(this.La)null==this.ad&&Td(this);else{if(null==this.Ka){if(this.c.n.Bb>=this.c.ff)return!1;if(this.n.Nd>this.c.j.fg)return Wb(this.c),!1;if(d)return!1;d=performance.now();this.Ka=new xa(this.c.i.g,null,this.c.J);ya(this.Ka,this.za,"linear",
!1);this.n.Ue+=this.Ka.k;this.n.Qb[0][0]++;this.n.Qb[0][1]+=this.Ka.k;this.Nb=Bc(this.c.ec,this.Yf.bind(this,!0),this.Ka.k);this.n.Nd+=performance.now()-d}a||Ac(this.c.ec,this.Nb)}return this.Aa?this.Aa.G(a,b,c):!0}0!=this.H||a||this.Xb(b);return!1};k.Xb=function(a){this.c.Rb.load(this.Da,this.Ub.bind(this),a)};k.Ub=function(a,b,c){this.Tb=b;this.Sb=c;this.za=r.Ia.xh(a,this.Wb.bind(this),this.Vb.bind(this),r.useCredentials?-1!=this.Da.indexOf(this.c.Zb):!1);this.H=1};
k.Vb=function(){!0!=this.c.N&&this.Sb()};k.Wb=function(){!0!=this.c.N&&(this.X=Bc(this.c.Fc,this.Zf.bind(this,!0),this.za.naturalWidth*this.za.naturalHeight*3),this.H=2,this.Tb())};k.rn=function(a,b,c,d){this.Tb=c;this.Sb=d;c=this.sn.bind(this,a);d=this.qn.bind(this,a);this.Ja=1;a?r.xc(b,d,c):r.Ia.Ij(b,d,c)};k.sn=function(){!0!=this.c.N&&this.Sb()};
k.qn=function(a,b,c){if(!0!=this.c.N){this.Ja=2;switch(this.He){case "negative-size":b&&b.byteLength==this.ae&&(this.Ja=-1);break;case "negative-type":case "negative-size":b&&-1!=b.indexOf(this.ae)&&(this.Ja=-1);break;case "negative-code":c&&-1!=this.ae.indexOf(c)&&(this.Ja=-1)}this.Tb()}};
function Td(a){var b=document.createElement("canvas");b.width=a.za.naturalWidth;b.height=a.za.naturalHeight;b=b.getContext("2d");b.drawImage(a.za,0,0);a.ad=b.getImageData(0,0,a.za.naturalWidth,a.za.naturalHeight).data;a.Tf=[a.za.naturalWidth,a.za.naturalHeight];a.za=null}function ed(a){return a.u&&a.u.w?a.u.w.Aa:a.Aa}
function Ud(a,b,c){this.c=a;this.e=c;this.ha=b;this.Xd=a.Xd;this.li=!1;this.Wc=0;this.mc=this.nc=this.va=this.q=this.Qi=this.Dd=this.K=null;this.Ga=[];this.Ji=this.Ce=!1;this.sc=[];this.Od=!1;this.F=[[],[],[]];this.Ib={};this.wa={};this.na={};this.vf=!0;this.La=null;this.F=[[],[],[]];this.o=[];a=this.c.vg.Ha;for(b=1;b<=c[0];b++){var d=1<<b-1,e=0;0!=(c[1]&d)&&(e+=1);0!=(c[2]&d)&&(e+=2);a.P[e]||a.Bf(e);a=a.P[e]}this.tb=a;this.ab=tc(this.c.vg,c,5,!0);tc(this.c.vg,c,8,!0);this.P=[null,null,null,null]}
k=Ud.prototype;k.v=function(){for(var a=0;4>a;a++)null!=this.P[a]&&this.P[a].v();this.va=this.q=this.K=this.ab=this.tb=null;this.Ga=[];this.mc=this.nc=null;this.Ib={};this.wa={};this.na={};this.vf=!0;this.Ji=this.Ce=!1;this.sc=[];this.li=!1;this.La=this.cb=this.cd=this.af=null;this.F=[[],[],[]];this.o={};this.P=[null,null,null,null];a=this.ha;this.ha=null;null!=a&&a.removeChild(this)};k.Yk=function(){null!=this.ab&&xc(this.ab,this.q)};
k.Bf=function(a){if(!this.P[a]){var b=this.e,b=[b[0]+1,b[1]<<1,b[2]<<1];switch(a){case 1:b[1]++;break;case 2:b[2]++;break;case 3:b[1]++,b[2]++}this.P[a]=new Ud(this.c,this,b)}};k.mk=function(a){null!=this.P[a]&&(this.P[a].v(),this.P[a]=null)};k.removeChild=function(a){for(var b=0;4>b;b++)this.P[b]==a&&(this.P[b].v(),this.P[b]=null)};
function Nb(a,b,c){this.c=a;this.p=a.p;this.pi=[0,0,0];this.qj=c;this.oe=this.c.sb.jc.oe;this.bd=!1;this.rj=!hc(gc(this.c));this.Be=new Ud(this.c,null,this.pi);this.yi=new Gd(this,null,this.Tk.bind(this),this.Qo.bind(this));this.vo=new Gd(this,null,this.Tk.bind(this),this.Po.bind(this));!0!=b&&(this.Kj=new Gd(this,null,this.Ro.bind(this),this.Rk.bind(this)),this.Fm=new Gd(this,null,this.So.bind(this),this.Rk.bind(this)));this.uf=[];this.xi=[];this.j=this.c.j;this.fd=1;this.sd=0}k=Nb.prototype;
k.v=function(){this.Kj=this.yi=this.Xj=this.Be=null};k.Cb=function(){var a=rc(this.c,surface.Ac,{V:result_[0],Ta:result_[1],Ua:result_[2]});map_.Rb.load(a,metatile_.up.bind(metatile_,a));this.xp.load();this.Be.Xh=1;this.bd=!0};function md(a,b){for(var c=a.Be,d=1;d<=b[0];d++){var e=1<<d-1,f=0;0!=(b[1]&e)&&(f+=1);0!=(b[2]&e)&&(f+=2);c=c.P[f];if(!c)return null}return c}
k.Ca=function(){this.fd=this.c.fd;var a=this.c.sb.kb.Kd.yn;this.c.j.Kh&&(this.yi=this.vo);null!=a?(Vd(this),"X"==a.t&&(Vd(this),Vd(this))):Vd(this)};function Vd(a){a.sd++;a.yi.trace(a.Be)}k.Po=function(){return[[0,0],[1,0],[2,0],[3,0]]};
k.Qo=function(a){for(var b=[],c=this.c.ra,d=0;4>d;d++){var e=a.P[d];if(e){var f=Number.POSITIVE_INFINITY;e.K&&(f=e.K.m.Ef(),r.r.length([f[0]-c[0],f[1]-c[1],f[2]-c[2]]),f=Wd(this,e.K.m,1,c)[1]);b.push([d,f])}}do for(c=!0,d=0,a=b.length-1;d<a;d++)b[d][1]>b[d+1][1]&&(c=b[d],b[d]=b[d+1],b[d+1]=c,c=!1);while(!c);return b};
k.Tk=function(a,b,c,d,e,f){if(null==a||null==a.K)return[!1,e,f];b=a.K;var g=this.c.ra;if(!0!=this.Fe(a.e,b.m,g,b))return[!1,e,f];var h,l=this.c.wo;if(bd(b))if(h=Number.POSITIVE_INFINITY,0!=(b.M&4)?h=this.fd*b.Dc:0!=(b.M&8)&&(h=b.m.Wh/b.vd*this.fd),!0==this.p.wn){var m=this.p.al;h=[2*h/m,m]}else if(0!=(b.M&8)){h=b.m.Wh/256*this.fd;var m=b.vd/256*this.c.wc,n=this.c.Qc,m=[g[0]-n[0]*m,g[1]-n[1]*m,g[2]-n[2]*m];h=Wd(this,b.m,h,m)}else 1.1<l?(h=l/1.1*b.Dc*this.fd,m=l/1.1*this.c.wc,n=this.c.Qc,m=[g[0]-n[0]*
m,g[1]-n[1]*m,g[2]-n[2]*m],h=Wd(this,b.m,h,m)):h=Wd(this,b.m,h,g);else h=[Number.POSITIVE_INFINITY,99999];if(0!=(b.M&240)==!1||h[0]<l){if(c=this.j.Ih)if(c=0!=(b.M&240))c=this.c.Ab,c=!(0<a.F[c].length&&Yc(a.F[c],d,f))&&!a.cb;if(c)return Xc(this.c,a,b,g,h,d,!0,f),[!0,e,!0];e||(g=Math.max(0,Math.min(499,Math.round(Math.log(h[1])/Math.log(1.04)))),c=this.c.Ud,c[g]||(c[g]=[]),c[g].push({B:a,$j:b,Dc:h,jd:d}));return[!1,e,f]}if(l=this.j.Jh&&bd(b)&&h[0]<2*l)if(l=this.c.Ab,bd(b)&&0<a.F[l].length&&Yc(a.F[l],
d,!0)){for(var m=!1,n=0,p=c.length;n<p;n++){var q=a.P[c[n][0]];q&&(q.K?!bd(q.K)||0<q.F[l].length&&Yc(q.F[l],d)||(Xc(this.c,q,q.K,g,1,d,!0,!1),m=!0):m=!0)}l=m}else l=!1;return l?(Xc(this.c,a,b,g,h,d,e,f),[!0,!0,f]):[!0,e,f]};k.Fe=function(a,b,c,d){if(6<=a[0]&&this.rj&&!bd(d))return!1;if(this.rj&&d){a=d.$b;var e=this.c.ra;a=[a[0]-e[0],a[1]-e[1],a[2]-e[2]];r.r.normalize(a);if(r.r.Sa(a,d.Kf)>d.Jf)return!1}return this.p.Fe(b,c)};
k.Rk=function(a,b){var c=b.$i,d=b.aa,e=[0.5*(d.L[0]+d.T[0]),0.5*(d.L[1]+d.T[1])],f=c[0]>=e[0],c=c[1]>=e[1];f?d.L[0]=e[0]:d.T[0]=e[0];c?d.L[1]=e[1]:d.T[1]=e[1];return f?c?[[1,0]]:[[3,0]]:c?[[0,0]]:[[2,0]]};
k.Ro=function(a,b,c,d,e,f){if(!a||a.e[0]>b.Le&&b.La)return[!1,e,f];c=a.K;if(!c)return[!1,e,f];if(0!=(c.M&2))if(!a.La)f||(b=a.q,c=a.e,b=rc(b.c,b.$h,{V:c[0],Ta:c[1],Ua:c[2]},null,void 0),a.La=uc(a.tb,b,!0));else{if(!0==a.La.G())return b.ha={K:b.K,La:b.La,Ve:b.Ve},b.K=c,b.La=a.La,b.Ve={L:b.aa.L.slice(),T:b.aa.T.slice()},[a.e[0]!=b.Le,e,f]}else return b.La||(b.K=c),[!0,e,f];return[!1,e,f]};
k.So=function(a,b,c,d,e,f){if(!a||a.e[0]>b.Le)return[!1,e,f];c=a.K;if(!c)return[!1,e,f];b.ha={K:b.K};b.K=c;return[a.e[0]!=b.Le,e,f]};
function Wd(a,b,c,d){var e=b.A,f=b.W;b=[e[0]-d[0],e[1]-d[1]];var g=[f[0]-d[0],e[1]-d[1]],h=[f[0]-d[0],f[1]-d[1]],l=[e[0]-d[0],f[1]-d[1]],m=e[2]-d[2],n=f[2]-d[2];if(!a.c.j.df&&d[0]>e[0]&&d[0]<f[0]&&d[1]>e[1]&&d[1]<f[1]&&d[2]>e[2]&&d[2]<f[2])return[Number.POSITIVE_INFINITY,0.1];d=0;d=0<b[1]?0<b[0]?0>n?qb(a.p,[b[0],b[1],n]):0<m?qb(a.p,[b[0],b[1],m]):qb(a.p,[b[0],b[1],0.5*(m+n)]):0>g[0]?0>n?qb(a.p,[g[0],g[1],n]):0<m?qb(a.p,[g[0],g[1],m]):qb(a.p,[g[0],g[1],0.5*(m+n)]):0>n?qb(a.p,[0.5*(b[0]+g[0]),g[1],
n]):0<m?qb(a.p,[0.5*(b[0]+g[0]),g[1],m]):qb(a.p,[0.5*(b[0]+g[0]),g[1],0.5*(m+n)]):0>l[1]?0<l[0]?0>n?qb(a.p,[l[0],l[1],n]):0<m?qb(a.p,[l[0],l[1],m]):qb(a.p,[l[0],l[1],0.5*(m+n)]):0>h[0]?0>n?qb(a.p,[h[0],h[1],n]):0<m?qb(a.p,[h[0],h[1],m]):qb(a.p,[h[0],h[1],0.5*(m+n)]):0>n?qb(a.p,[0.5*(l[0]+h[0]),h[1],n]):0<m?qb(a.p,[0.5*(l[0]+h[0]),h[1],m]):qb(a.p,[0.5*(l[0]+h[0]),h[1],0.5*(m+n)]):0<l[0]?0>n?qb(a.p,[b[0],0.5*(g[1]+h[1]),n]):0<m?qb(a.p,[b[0],0.5*(g[1]+h[1]),m]):qb(a.p,[b[0],0.5*(g[1]+h[1]),0.5*(m+n)]):
0>h[0]?0>n?qb(a.p,[g[0],0.5*(g[1]+h[1]),n]):0<m?qb(a.p,[g[0],0.5*(g[1]+h[1]),m]):qb(a.p,[g[0],0.5*(g[1]+h[1]),0.5*(m+n)]):0>n?qb(a.p,[0.5*(b[1]+g[1]),0.5*(g[1]+h[1]),n]):0<m?qb(a.p,[0.5*(b[1]+g[1]),0.5*(g[1]+h[1]),m]):qb(a.p,[0.5*(b[1]+g[1]),0.5*(g[1]+h[1]),0.5*(m+n)]);return[d[0]*c,d[1]]}sb.prototype.quad=function(a,b,c){var d="";for(i=a;0<i;i--){a=0;var e=1<<i-1;0!=(b&e)&&(a+=1);0!=(c&e)&&(a+=2);d+=a}return d};sb.prototype.msDigit=function(a,b){return((a&3)<<1)+(b&1)};
function me(a){for(a=a.toString(16);8>a.length;)a="0"+a;return a}sb.prototype.ppx=function(a,b){return me(b<<28-a)};sb.prototype.ppy=function(a,b){return me(268435456-(b+1<<28-a))};
sb.prototype.Gn=function(a,b,c){if("string"==typeof c)if(-1!=c.indexOf("quad")){b="(function(lod,x,y,loclod,locx,locy){"+c.replace("quad","return this.quad")+"})";try{var d=eval(b).bind(this);return d(a.V,a.Ta,a.Ua,a.cg,a.Fh,a.Gh)}catch(e){return c}}else if(-1!=c.indexOf("ms_digit")){b="(function(x,y,loclod,locx,locy){"+c.replace("ms_digit","return this.msDigit")+"})";try{return d=eval(b).bind(this),d(a.Ta,a.Ua,a.cg,a.Fh,a.Gh)}catch(f){return c}}else{if(-1!=c.indexOf("alt"))return(a=/\(([^)]*)\)/.exec(c))&&
a[1]&&(a=a[1].match(/([^,]+)/g),0<a.length)?a[b%a.length]:c;if(-1!=c.indexOf("ppx")){b="(function(lod,x,loclod,locx){"+c.replace("ppx","return this.ppx")+"})";try{return d=eval(b).bind(this),d(a.V,a.Ta,a.cg,a.Fh)}catch(g){return c}}else if(-1!=c.indexOf("ppy")){b="(function(lod,y,loclod,locy){"+c.replace("ppy","return this.ppy")+"})";try{return d=eval(b).bind(this),d(a.V,a.Ua,a.cg,a.Gh)}catch(h){return c}}else return c}else return c};
function rc(a,b,c,d,e){var f=e=0,g=0;if(c.V){var h=[c.V,c.Ta,c.Ua],l=a.sb.ce.fa;e=[];g=0;for(f=l.length;g<f;g++){var m=l[g],n=h[0]-m.e[0];ix_=h[1]>>n;iy_=h[2]>>n;ix_==m.e[1]&&iy_==m.e[2]&&e.push(m)}h=null;g=0;for(f=e.length;g<f;g++)-1<e[g].e[0]&&(h=e[g]);g=c.V-(h?h.e.slice():[0,0,0])[0];f=(1<<g)-1;e=c.Ta&f;f&=c.Ua}h={V:c.V,Ta:c.Ta,Ua:c.Ua,cg:g,Fh:e,Gh:f};b=b.replace(/ /g,"");b=r.mo(b,{lod:c.V,x:c.Ta,y:c.Ua,sub:d,locx:e,locy:f,loclod:g,here_app_id:"abcde",here_app_code:"12345"},a.Gn.bind(a,h,a.Vk));
a.Vk++;return(e=-1!=b.indexOf("//"))?b:a.Zb+b}function tb(a,b){this.parse(b)}tb.prototype.parse=function(a){this.gj=a.description||"";this.ya=a.freeLayers||{};this.Na={};if(a.surfaces)if(a=a.surfaces,Array.isArray(a))for(var b=0,c=a.length;b<c;b++)this.Na[a[b]]=[];else this.Na=a;!this.ya||Array.isArray(this.ya)?this.ya={}:this.ya=JSON.parse(JSON.stringify(this.ya));this.Na=JSON.parse(JSON.stringify(this.Na))};
tb.prototype.lb=function(){return{description:JSON.parse(JSON.stringify(this.gj)),surfaces:JSON.parse(JSON.stringify(this.Na)),freeLayers:JSON.parse(JSON.stringify(this.ya))}};
function ne(a,b,c){this.j={c:null,dg:900,eg:360,gg:60,Th:1.1,df:0,Lh:6,fg:2E4,Rh:!1,Qh:!0,hg:1,yc:4,Oh:!1,Ih:!0,Jh:!0,Tj:!0,Sh:!1,ne:!0,Nh:!0,Kh:!1,Mh:!1,ni:!0,mi:!1};this.Je={};this.Fb(b);this.Zl=a;this.Qm=c;this.N=this.ca=!1;this.Ed=[];this.Dh=0;this.Ze=null!=r.fl?new r.fl(this):null;this.Ph=this.c=null;this.i=new Wa(this,this.Zl,0,this.pg.bind(this),this.j);this.bo=new M(this.i);this.rb=window._mproj4_;r.ea.Cb();oe(this,this.j.c);window.ok(this.fk.bind(this))}k=ne.prototype;
k.pg=function(){null!=this.c&&Wb(this.c)};function oe(a,b){null!=a.c&&(a.c.v(),a.c=null,a.Ph=null,a.vc("map-unloaded",{}));null!=b&&r.dd(b,function(a){this.vc("map-mapconfig-loaded",a);this.c=new sb(this,a,b,this.j);this.Ph=new Z(this.c);this.Fb(this.c.Ri);this.Fb(this.Je);this.j.O&&(this.c.kc(this.j.O),this.j.O=null);this.j.cl&&(this.c.xe(this.j.cl),this.j.cl=null);this.vc("map-loaded",{})}.bind(a),function(){}.bind(a),null,r.useCredentials)}k.cc=function(){return this.c};k.Of=function(){return this.i};
k.Pf=function(){return this.bo};k.nh=function(){return this.rb};k.ai=function(a,b){if(!0!=this.N&&null!=b)return this.Dh++,this.Ed.push({kn:a,bf:b,e:this.Dh}),function(a){this.removeListener(a)}.bind(this,this.Dh)};k.vc=function(a,b){for(var c=0;c<this.Ed.length;c++)this.Ed[c].kn==a&&this.Ed[c].bf(b)};k.removeListener=function(a){for(var b=0;b<this.Ed.length;b++)if(this.Ed[b].e==a){this.Ed.splice(b,1);break}};r.np=function(){return"1.65"};
r.Yi=function(){r.ea.Cb();var a=document.createElement("canvas");if(null==a)return!1;a.width=1024;a.height=768;if(null==a.getContext)return!1;var b=null;try{b=a.getContext("webgl")||a.getContext("experimental-webgl")}catch(c){return!1}return b?!0:!1};r.gl=function(a,b){a="string"!==typeof a?a:document.getElementById(a);return r.Yi()?new pe(a,b):null};function pe(a,b){this.J=new ne(a,b,this);this.c=this.J.cc()}k=pe.prototype;k.cc=function(){return this.J.Ph};k.Of=function(){return this.J.Pf()};
k.nh=function(){return this.J.nh()};k.ai=function(a,b){this.J.ai(a,b)};k.vc=function(a,b){this.J.vc(a,b)};r.MapCore=r.gl;pe.prototype.getMap=pe.prototype.cc;pe.prototype.getRenderer=pe.prototype.Of;pe.prototype.on=pe.prototype.ai;pe.prototype.callListener=pe.prototype.vc;r.getVersion=r.pp;r.checkSupport=r.Yi;ne.prototype.Fb=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.vb(b,a[b])};
ne.prototype.vb=function(a,b){"pos"==a||"position"==a||"view"==a?this.cc()?("view"==a?this.cc().xe(b):this.cc().kc(new W(this,b)),this.Je[a]&&delete this.Je[a]):this.Je[a]=b:"map"==a?this.j.c=r.Zk(b):(0==a.indexOf("map")&&(this.Je[a]=b,null!=this.cc()&&this.cc().vb(a,b)),0==a.indexOf("renderer")&&this.Of().vb(a,b))};ne.prototype.bc=function(a){if("map"==a)return this.j.c;if(0==a.indexOf("map")&&null!=this.cc())return this.cc().bc(a,value_);if(0==a.indexOf("renderer"))return this.Of().bc(a,value_)};
ne.prototype.fk=function(){null!=this.c&&this.c.update();this.vc("tick",{});window.ok(this.fk.bind(this))};
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

Melown.Utils.stopPropagation = function(e) {
    e = e instanceof Melown.UIEvent ? e.event_ : e;
    e.stopPropagation();
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
        //console.log(JSON.stringify(this.trajectory_[sampleIndex_]));

        this.browser_.callListener("fly-progress", { "position" : this.trajectory_[sampleIndex_],
                                                     "progress" : 100 * (sampleIndex_ / totalSamples_)
                                                    });

    } else {
        map_.setPosition(this.trajectory_[totalSamples_]);
        //console.log(JSON.stringify(this.trajectory_[totalSamples_]));
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
    
    Melown.Utils.stopPropagation(event_);    
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
    var linkValue_ =  this.browser_.getLinkWithCurrentPos();
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
    this.dragTouchCount_ = 0;
    
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
    
    var touchCount_ = event_.getTouchesCount();
    if (touchCount_ != this.dragTouchCount_) {
        this.dragLastPos_[0] = pos_[0];
        this.dragLastPos_[1] = pos_[1];
        this.dragTouchCount_ = touchCount_; 
    }

    if (touchCount_ == 2) {
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
        "zoom" : zoom_,
        "touches" : touchCount_  
        });

    this.dragLastPos_ = this.dragCurrentPos_;
    this.dragCurrentPos_ = [pos_[0], pos_[1]];
    this.dragAbsMoved_[0] += Math.abs(pos_[0] - this.dragLastPos_[0]);
    this.dragAbsMoved_[1] += Math.abs(pos_[1] - this.dragLastPos_[1]);

    //var el_ = document.getElementsByClassName("melown-logo")[0];
    //el_.innerHTML = "" + this.firstDragDistance_ + "   " + this.lastDragDistance_ + "   " + zoom_;
    //el_.innerHTML = "" + this.dragAbsMoved_[0] + "    " + this.dragAbsMoved_[1];
    //el_.innerHTML = "1111-" + Melown.debugCoutner;
    //Melown.debugCoutner++;
};

//Melown.debugCoutner = 0;

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
        case "dblclick":
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

Melown.UIEvent.prototype.getDragTouches = function() {
    switch (this.type_) {
        case "drag":
            return this.event_["touches"];
    }
    
    return 0;
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
Melown.UIEvent.prototype["getDragTuches"] = Melown.UIEvent.prototype.getDragTuches;
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
    this.mapElement_.on('dblclick', this.onDoubleClick.bind(this), window);
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
/** @const */ Melown_ControlMode_DoubleClick = 'doubleclick';

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

Melown.ControlMode.prototype.onDoubleClick = function(event_) {
    this._updateModifierKeys(event_);
    if (typeof this._currentController()[Melown_ControlMode_DoubleClick]
        === 'function') {
        this._currentController()[Melown_ControlMode_DoubleClick](event_);
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
    this["doubleclick"] = this.doubleclick;
};

Melown.ControlMode.MapObserver.prototype.drag = function(event_) {
    var map_ = this.browser_.getMap();
    if (!map_) {
        return;
    }

    var pos_ = map_.getPosition();
    var coords_ = map_.getPositionCoords(pos_);
    var delta_ = event_.getDragDelta();
    var zoom_ = event_.getDragZoom(); 
    var touches_ = event_.getDragTouches(); 
    var azimuthDistance_ = this.getAzimuthAndDistance(delta_[0], delta_[1]);
    
    var modifierKey_ = (this.browser_.controlMode_.altKey_
               || this.browser_.controlMode_.shiftKey_
               || this.browser_.controlMode_.ctrlKey_);


    if (touches_ == 2 && /*event_.getDragButton("middle")*/ zoom_ != 0 && this.config_.zoomAllowed_) {
        if (map_.getPositionViewMode(pos_) != "obj") {
            return;
        }

        var factor_ = 1.0 + (zoom_ > 1.0 ? -1 : 1)*0.01;
        //var factor_ = 1.0 + (delta_[1] > 1.0 ? -1 : 1)*0.025;
        
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
    } else if (((touches_ <= 1 && event_.getDragButton("right")) || event_.getDragButton("middle") || modifierKey_) 
               && this.config_.rotationAllowed_) { //rotate
                   
        var sensitivity_ = 0.3;
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

Melown.ControlMode.MapObserver.prototype.doubleclick = function(event_) {
    var map_ = this.browser_.getMap();
    if (!map_ || !this.config_.jumpAllowed_) {
        return;
    }

    var coords_ = event_.getMouseCoords();

    //get hit coords with fixed height
    var mapCoords_ = map_.getHitCoords(coords_[0], coords_[1], "fix");
    
    if (mapCoords_) {
        var pos_ = map_.getPosition();
        pos_ = map_.setPositionCoords(pos_, mapCoords_);
        pos_ = map_.convertPositionHeightMode(pos_, "fix");
        pos_ = map_.setPositionHeight(pos_, mapCoords_[2]);
        //pos_ = map_.convertPositionHeightMode(pos_, "fix");
        //pos_ = map_.setPositionHeight(pos_, 0);
        
        this.browser_.autopilot_.flyTo(pos_, {"mode" : "direct", "maxDuration" : 2000 });
    }
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
    //var inertia_ = [0.95, 0.8, 0.8]; 
    //var inertia_ = [0, 0, 0]; 

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
            azimuth_ += 0;//map_.getAzimuthCorrection(coords2_, coords_);
            azimuth_ = Melown.radians(azimuth_);

            //console.log("correction: " + map_.getAzimuthCorrection(coords2_, coords_) + " coords2: " + JSON.stringify(coords2_) + " coords: " + JSON.stringify(coords_));


            forward_[0] += -Math.sin(azimuth_) * delta_[2];  
            forward_[1] += Math.cos(azimuth_) * delta_[2];


            /*
            forward_[0] += delta_[0] * delta_[2];  
            forward_[1] += delta_[1] * delta_[2];
            */
            delta_[2] *= inertia_[0];

            
            //remove zero deltas
            if (delta_[2] < 0.01) {
                deltas_.splice(i, 1);
                i--;
            }
        }
        
        var distance_ = Math.sqrt(forward_[0]*forward_[0] + forward_[1]*forward_[1]);
        var azimuth_ = Melown.degrees(Math.atan2(forward_[0], forward_[1]));
    
        //console.log("tick: " + azimuth_ + " " + distance_);

        //apply final azimuth and distance
        if (this.config_.navigationMode_ == "free") { 
            var correction_ = map_.getPositionOrientation(pos_)[0];
            pos_ = map_.movePositionCoordsTo(pos_, (this.isNavigationSRSProjected() ? -1 : 1) * azimuth_, distance_);
            correction_ = map_.getPositionOrientation(pos_)[0] - correction_;
            
        } else { // "azimuthal" 

            var correction_ = map_.getPositionOrientation(pos_)[0];
            //pos_ = map_.movePositionCoordsTo(pos_, (this.isNavigationSRSProjected() ? -1 : 1) * azimuth_, distance_, true);
            
            
            //var correctionFactor_ = Math.min(5, Math.max(0, Math.abs(coords_[1]) - 75)) / 5;
            
            //pos_ = map_.movePositionCoordsTo(pos_, (this.isNavigationSRSProjected() ? -1 : 1) * azimuth_, distance_, (Math.abs(coords_[1]) < 70));
            pos_ = map_.movePositionCoordsTo(pos_, (this.isNavigationSRSProjected() ? -1 : 1) * azimuth_, distance_, (Math.abs(coords_[1]) < 75) ? 0 : 1);
            //pos_ = map_.movePositionCoordsTo(pos_, (this.isNavigationSRSProjected() ? -1 : 1) * azimuth_, distance_, correctionFactor_);

            correction_ = map_.getPositionOrientation(pos_)[0] - correction_;

            //if (Math.abs(coords_[1]) < 70) {

/*
            var orientation_ = map_.getPositionOrientation(pos_);
            //orientation_[0] *= 0.5  + 0.5 * (Math.max(0, orientation_[1] - 70) / 30);
            //pos_ = map_.setPositionOrientation(pos_, orientation_);
            
            if (Math.abs(coords_[1]) < 70) {
                if (!event_.draggingState_["dragging"]) {
                    orientation_[0] *= 0.5;
                    pos_ = map_.setPositionOrientation(pos_, orientation_);
                }
            }
            
*/

            /*
            var correction_ = 0; //HACK

            var coords_ = map_.getPositionCoords(pos_);
            
            var rf_ = map_.getReferenceFrame();
            var srs_ = map_.getSrsInfo(rf_["navigationSrs"]);
            
            fx_ = Melown.degrees((forward_[0] / (srs_["a"] * 2) * Math.PI) * Math.PI * 2) * 0.25;             
            fy_ = Melown.degrees((forward_[1] / (srs_["b"] * 2) * Math.PI) * Math.PI * 2) * 0.25;
            
            coords_[0] += fx_;    
            coords_[1] += fy_;
            
            if (Math.abs(coords_[1]) < 80) { || Math.abs(map_.getPositionOrientation(pos_)[0]) < 1) {
                //coords_[0] %= 180;
                //coords_[1] %= 90;
                pos_ = map_.setPositionCoords(pos_, coords_);
            } else {
                pos_ = map_.movePositionCoordsTo(pos_, (this.isNavigationSRSProjected() ? -1 : 1) * azimuth_, distance_, true);
            }*/
        }
        
        

        //console.log("correction2: " + correction_);

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
    
    this.updatePosInUrl_ = false;
    this.lastUrlUpdateTime_ = false;

    this.autopilot_ = new Melown.Autopilot(this);
    this.rois_ = new Melown.Rois(this);
    this.controlMode_ = new Melown.ControlMode(this, this.ui_);
    this.presenter_ = new Melown.Presenter(this, config_);

    this.on("map-loaded", this.onMapLoaded.bind(this));
    this.on("map-unloaded", this.onMapUnloaded.bind(this));
    this.on("map-update", this.onMapUpdate.bind(this));
    this.on("map-position-changed", this.onMapPositionChanged.bind(this));

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

Melown.Browser.prototype.getLinkWithCurrentPos = function() {
    var map_ = this.getMap();
    if (map_ == null) {
        return "";
    }

    //get url params
    var params_ = Melown.Url.getParamsFromUrl(window.location.href);
    
    //get position string
    var p = map_.getPosition();
    var s = "";
    s += map_.getPositionViewMode(p) + ",";
    var c = map_.getPositionCoords(p);
    s += c[0].toFixed(6) + "," + c[1].toFixed(6) + "," + map_.getPositionHeightMode(p) + "," + c[2].toFixed(2) + ",";
    var o = map_.getPositionOrientation(p);
    s += o[0].toFixed(2) + "," + o[1].toFixed(2) + "," + o[2].toFixed(2) + ",";
    s += map_.getPositionViewExtent(p).toFixed(2) + "," + map_.getPositionFov(p).toFixed(2);

    //replace old value with new one    
    params_["pos"] = s;
    
    //convert prameters to url parameters string
    s = "";
    for (var key_ in params_) {
        s += ((s.length > 0) ? "&" : "") + key_ + "=" + params_[key_];
    }

    //separete base url and url params
    var urlParts_ = window.location.href.split("?");
    
    if (urlParts_.length > 1) {
        var extraParts_ = urlParts_[1].split("#"); //is there anchor?
        return urlParts_[0] + "?" + s + (extraParts_[1] || ""); 
    } else {
        return urlParts_[0] + "?" + s; 
    }
};

Melown.Browser.prototype.onMapPositionChanged = function() {
    if (this.config_.positionInUrl_) {
        this.updatePosInUrl_ = true;
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
    
    if (this.updatePosInUrl_) {
        var timer_ = performance.now(); 
        if ((timer_ - this.lastUrlUpdateTime_) > 1000) {
            if (window.history.replaceState) {
                window.history.replaceState({}, null, this.getLinkWithCurrentPos());
            }        
            this.updatePosInUrl_ = false;
            this.lastUrlUpdateTime_ = timer_;
        }
    }
};



Melown.Browser.prototype.initConfig = function(data_) {
    this.config_ = {
        panAllowed_ : true,
        rotationAllowed_ : true,
        zoomAllowed_ : true,
        jumpAllowed_ : false,
        inertia_ : 1.1,
        positionInUrl_ : false,
        positionUrlHistory_ : false,
        navigationMode_ : "free",
        controlCompass_ : true,
        controlZoom_ : true,
        controlSpace_ : true,
        controlMeasure_ : false,
        controlLink_ : false,
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
        case "position":           this.config_.position_ = value_;                                              break;
        case "view":               this.config_.view_ = value_;                                                  break;
        case "panAllowed":         this.config_.panAllowed_ = Melown.Utils.validateBool(value_, true);           break;
        case "rotationAllowed":    this.config_.rotationAllowed_ = Melown.Utils.validateBool(value_, true);      break;
        case "zoomAllowed":        this.config_.zoomAllowed_ = Melown.Utils.validateBool(value_, true);          break;
        case "jumpAllowed":        this.config_.jumpAllowed_ = Melown.Utils.validateBool(value_, false);         break;
        case "inertia":            this.config_.inertia_ = Melown.Utils.validateNumber(value_, 0, 0.99, 0.9);    break;
        case "navigationMode":     this.config_.navigationMode_ = value_;                                        break;
        case "positionInUrl":      this.config_.positionInUrl_ = Melown.Utils.validateBool(value_, false);       break;
        case "positionUrlHistory": this.config_.positionUrlHistory_ = Melown.Utils.validateBool(value_, false);  break;
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
        case "jumpAllowed":        return this.config_.jumpAllowed_;
        case "inertia":            return this.config_.inertia_;
        case "navigationMode":     return this.config_.navigationMode_;
        case "positionInUrl":      return this.config_.positionInUrl_;
        case "positionUrlHistory": return this.config_.positionUrlHistory_;
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
    this.presenter_ = this.browser_.presenter_;
    this.core_.on("map-loaded", (function(){ this.map_ = this.core_.getMap(); }).bind(this));
    this.core_.on("map-unloaded", (function(){ this.map_ = null; }).bind(this));    
};

Melown.BrowserInterface.prototype.getPresenter = function() {
    return this.presenter_;
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
Melown.BrowserInterface.prototype["getPresenter"] = Melown.BrowserInterface.prototype.getPresenter; 
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

