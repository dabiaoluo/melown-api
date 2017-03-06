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
this._area0;else if(tempsum<0)tempsum+=this._area0;vals.area=tempsum;return vals}})(GeographicLib.PolygonArea,GeographicLib.Geodesic,GeographicLib.Math,GeographicLib.Accumulator);window["GeographicLib"]=GeographicLib;window["GeographicLib"]["Geodesic"]=GeographicLib.Geodesic;window["GeographicLib"]["Geodesic"]["Geodesic"]=GeographicLib.Geodesic.Geodesic;var l,ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this;
function la(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}la("Array.prototype.find",function(a){return a?a:function(a,c){var b;a:{b=this;b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++){var g=b[f];if(a.call(c,g,f,b)){b=g;break a}}b=void 0}return b}});la("Number.isNaN",function(a){return a?a:function(a){return"number"===typeof a&&isNaN(a)}});
var q={};window.M=q;window.Melown=q;window.ga=null!=window.ga?window.ga:{};window.MelownMap_=null!=window.MelownMap_?window.MelownMap_:null;window.Q=null!=window.Q?window.Q:{};window.$=null!=window.$?window.$:{};q.hf=Array;q.rs={};q.rs.create=function(a){var b=new q.hf(2);a&&(b[0]=a[0],b[1]=a[1]);return b};q.Qe={};q.Qe.create=function(a){var b=new q.hf(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};q.Qe.oe=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};q.Qe.ql=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]};q.Qe.rl=function(a,b,c,d,e,f){return a[0]*(b[c]-d)+a[1]*(b[c+1]-e)+a[2]*(b[c+2]-f)+a[3]};q.O={};
q.O.create=function(a){var b=new q.hf(3);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2]);return b};q.O.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};q.O.add=function(a,b,c){if(!c||a==c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};q.O.jt=function(a,b,c){if(!c||a==c)return a[0]-=b[0],a[1]-=b[1],a[2]-=b[2],a;c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};q.O.Xs=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};
q.O.scale=function(a,b,c){if(!c||a==c)return a[0]*=b,a[1]*=b,a[2]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};q.O.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],f=Math.sqrt(c*c+d*d+e*e);if(f){if(1==f)return b[0]=c,b[1]=d,b[2]=e,b}else return b[0]=0,b[1]=0,b[2]=0,b;f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;return b};
q.O.xq=function(a,b,c){var d=a[b],e=a[b+1];a=a[b+2];if(b=Math.sqrt(d*d+e*e+a*a)){if(1==b)return c[0]=d,c[1]=e,c[2]=a,c}else return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b};q.O.Ys=function(a,b,c,d){var e=a[b],f=a[b+1];a=a[b+2];if(b=Math.sqrt(e*e+f*f+a*a)){if(1==b)return c[d]=e,c[d+1]=f,c[d+2]=a,c}else return c[d]=0,c[d+1]=0,c[d+2]=0,c;b=1/b;c[d]=e*b;c[d+1]=f*b;c[d+2]=a*b};
q.O.Fi=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var f=b[0],g=b[1];b=b[2];c[0]=e*b-a*g;c[1]=a*f-d*b;c[2]=d*g-e*f;return c};q.O.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};q.O.oe=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};q.O.ql=function(a,b,c){return a[0]*b[c]+a[1]*b[c+1]+a[2]*b[c+2]};q.O.rl=function(a,b,c,d){return a[b]*c[d]+a[b+1]*c[d+1]+a[b+2]*c[d+2]};q.O.it=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return c*c+d*d+e*e};
q.O.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};q.O.Ps=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};q.O.xk=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};q.Kc={};
q.Kc.create=function(a){var b=new q.hf(9);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9]);return b};q.Kc.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};q.Kc.ma=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
q.Kc.qd=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};q.Kc.ks=function(a,b){b||(b=q.i.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
q.Kc.xk=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};q.i={};q.i.create=function(a){var b=new q.hf(16);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]);return b};
q.i.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};q.i.ma=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
q.i.qd=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],f=a[6],g=a[7],k=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=f;a[11]=a[14];a[12]=e;a[13]=g;a[14]=k;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
q.i.Is=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],k=a[6],h=a[7],m=a[8],n=a[9],p=a[10],w=a[11],r=a[12],t=a[13],u=a[14];a=a[15];return r*n*k*e-m*t*k*e-r*g*p*e+f*t*p*e+m*g*u*e-f*n*u*e-r*n*d*h+m*t*d*h+r*c*p*h-b*t*p*h-m*c*u*h+b*n*u*h+r*g*d*w-f*t*d*w-r*c*k*w+b*t*k*w+f*c*u*w-b*g*u*w-m*g*d*a+f*n*d*a+m*c*k*a-b*n*k*a-f*c*p*a+b*g*p*a};
q.i.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],k=a[5],h=a[6],m=a[7],n=a[8],p=a[9],w=a[10],r=a[11],t=a[12],u=a[13],x=a[14],H=a[15],y=c*k-d*g,I=c*h-e*g,D=c*m-f*g,L=d*h-e*k,C=d*m-f*k,v=e*m-f*h,O=n*u-p*t,ia=n*x-w*t,F=n*H-r*t,fa=p*x-w*u,ja=p*H-r*u,ha=w*H-r*x,aa=1/(y*ha-I*ja+D*fa+L*F-C*ia+v*O);b[0]=(k*ha-h*ja+m*fa)*aa;b[1]=(-d*ha+e*ja-f*fa)*aa;b[2]=(u*v-x*C+H*L)*aa;b[3]=(-p*v+w*C-r*L)*aa;b[4]=(-g*ha+h*F-m*ia)*aa;b[5]=(c*ha-e*F+f*ia)*aa;b[6]=(-t*v+x*D-H*I)*aa;b[7]=(n*v-w*D+r*I)*
aa;b[8]=(g*ja-k*F+m*O)*aa;b[9]=(-c*ja+d*F-f*O)*aa;b[10]=(t*C-u*D+H*y)*aa;b[11]=(-n*C+p*D-r*y)*aa;b[12]=(-g*fa+k*ia-h*O)*aa;b[13]=(c*fa-d*ia+e*O)*aa;b[14]=(-t*L+u*I-x*y)*aa;b[15]=(n*L-p*I+w*y)*aa;return b};q.i.mt=function(a,b){b||(b=q.i.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
q.i.Bn=function(a,b){b||(b=q.Kc.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};q.i.An=function(a,b){var c=a[0],d=a[1],e=a[2],f=a[4],g=a[5],k=a[6],h=a[8],m=a[9],n=a[10],p=n*g-k*m,w=-n*f+k*h,r=m*f-g*h,t=c*p+d*w+e*r;if(!t)return null;t=1/t;b||(b=q.Kc.create());b[0]=p*t;b[1]=(-n*d+e*m)*t;b[2]=(k*d-e*g)*t;b[3]=w*t;b[4]=(n*c-e*h)*t;b[5]=(-k*c+e*f)*t;b[6]=r*t;b[7]=(-m*c+d*h)*t;b[8]=(g*c-d*f)*t;return b};
q.i.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2],g=a[3],k=a[4],h=a[5],m=a[6],n=a[7],p=a[8],w=a[9],r=a[10],t=a[11],u=a[12],x=a[13],H=a[14];a=a[15];var y=b[0],I=b[1],D=b[2],L=b[3],C=b[4],v=b[5],O=b[6],ia=b[7],F=b[8],fa=b[9],ja=b[10],ha=b[11],aa=b[12],Ga=b[13],Ja=b[14];b=b[15];c[0]=y*d+I*k+D*p+L*u;c[1]=y*e+I*h+D*w+L*x;c[2]=y*f+I*m+D*r+L*H;c[3]=y*g+I*n+D*t+L*a;c[4]=C*d+v*k+O*p+ia*u;c[5]=C*e+v*h+O*w+ia*x;c[6]=C*f+v*m+O*r+ia*H;c[7]=C*g+v*n+O*t+ia*a;c[8]=F*d+fa*k+ja*p+ha*u;c[9]=F*e+fa*h+ja*
w+ha*x;c[10]=F*f+fa*m+ja*r+ha*H;c[11]=F*g+fa*n+ja*t+ha*a;c[12]=aa*d+Ga*k+Ja*p+b*u;c[13]=aa*e+Ga*h+Ja*w+b*x;c[14]=aa*f+Ga*m+Ja*r+b*H;c[15]=aa*g+Ga*n+Ja*t+b*a;return c};q.i.cb=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
q.i.ai=function(a,b,c){c||(c=b);var d=b[0],e=b[1],f=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*f+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*f+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*f+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*f+a[15]*b;return c};
q.i.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c)return a[12]=a[0]*d+a[4]*e+a[8]*b+a[12],a[13]=a[1]*d+a[5]*e+a[9]*b+a[13],a[14]=a[2]*d+a[6]*e+a[10]*b+a[14],a[15]=a[3]*d+a[7]*e+a[11]*b+a[15],a;var f=a[0],g=a[1],k=a[2],h=a[3],m=a[4],n=a[5],p=a[6],w=a[7],r=a[8],t=a[9],u=a[10],x=a[11];c[0]=f;c[1]=g;c[2]=k;c[3]=h;c[4]=m;c[5]=n;c[6]=p;c[7]=w;c[8]=r;c[9]=t;c[10]=u;c[11]=x;c[12]=f*d+m*e+r*b+a[12];c[13]=g*d+n*e+t*b+a[13];c[14]=k*d+p*e+u*b+a[14];c[15]=h*d+w*e+x*b+a[15];return c};
q.i.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c)return a[0]*=d,a[1]*=d,a[2]*=d,a[3]*=d,a[4]*=e,a[5]*=e,a[6]*=e,a[7]*=e,a[8]*=b,a[9]*=b,a[10]*=b,a[11]*=b,a;c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
q.i.rotate=function(a,b,c,d){var e=c[0],f=c[1];c=c[2];var g=Math.sqrt(e*e+f*f+c*c);if(!g)return null;1!=g&&(g=1/g,e*=g,f*=g,c*=g);var k=Math.sin(b),h=Math.cos(b),m=1-h;b=a[0];var g=a[1],n=a[2],p=a[3],w=a[4],r=a[5],t=a[6],u=a[7],x=a[8],H=a[9],y=a[10],I=a[11],D=e*e*m+h,L=f*e*m+c*k,C=c*e*m-f*k,v=e*f*m-c*k,O=f*f*m+h,ia=c*f*m+e*k,F=e*c*m+f*k,e=f*c*m-e*k,f=c*c*m+h;d?a!=d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]):d=a;d[0]=b*D+w*L+x*C;d[1]=g*D+r*L+H*C;d[2]=n*D+t*L+y*C;d[3]=p*D+u*L+I*C;d[4]=b*v+w*
O+x*ia;d[5]=g*v+r*O+H*ia;d[6]=n*v+t*O+y*ia;d[7]=p*v+u*O+I*ia;d[8]=b*F+w*e+x*f;d[9]=g*F+r*e+H*f;d[10]=n*F+t*e+y*f;d[11]=p*F+u*e+I*f;return d};q.i.et=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],f=a[5],g=a[6],k=a[7],h=a[8],m=a[9],n=a[10],p=a[11];c?a!=c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[4]=e*b+h*d;c[5]=f*b+m*d;c[6]=g*b+n*d;c[7]=k*b+p*d;c[8]=e*-d+h*b;c[9]=f*-d+m*b;c[10]=g*-d+n*b;c[11]=k*-d+p*b;return c};
q.i.ft=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],f=a[1],g=a[2],k=a[3],h=a[8],m=a[9],n=a[10],p=a[11];c?a!=c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+h*-d;c[1]=f*b+m*-d;c[2]=g*b+n*-d;c[3]=k*b+p*-d;c[8]=e*d+h*b;c[9]=f*d+m*b;c[10]=g*d+n*b;c[11]=k*d+p*b;return c};
q.i.gt=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],f=a[1],g=a[2],k=a[3],h=a[4],m=a[5],n=a[6],p=a[7];c?a!=c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+h*d;c[1]=f*b+m*d;c[2]=g*b+n*d;c[3]=k*b+p*d;c[4]=e*-d+h*b;c[5]=f*-d+m*b;c[6]=g*-d+n*b;c[7]=k*-d+p*b;return c};
q.i.ap=function(a,b,c,d,e,f,g){g||(g=q.i.create());var k=b-a,h=d-c,m=f-e;g[0]=2*e/k;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=2*e/h;g[6]=0;g[7]=0;g[8]=(b+a)/k;g[9]=(d+c)/h;g[10]=-(f+e)/m;g[11]=-1;g[12]=0;g[13]=0;g[14]=-(f*e*2)/m;g[15]=0;return g};q.i.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b*=a;return q.i.ap(-b,b,-a,a,c,d,e)};
q.i.at=function(a,b,c,d,e,f,g){g||(g=q.i.create());var k=b-a,h=d-c,m=f-e;g[0]=2/k;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=2/h;g[6]=0;g[7]=0;g[8]=0;g[9]=0;g[10]=-2/m;g[11]=0;g[12]=-(a+b)/k;g[13]=-(d+c)/h;g[14]=-(f+e)/m;g[15]=1;return g};
q.i.Ss=function(a,b,c,d){d||(d=q.i.create());var e=a[0],f=a[1];a=a[2];var g=c[0],k=c[1],h=c[2];c=b[1];var m=b[2];if(e==b[0]&&f==c&&a==m)return q.i.ma(d);var n,p,w,r;c=e-b[0];m=f-b[1];b=a-b[2];r=1/Math.sqrt(c*c+m*m+b*b);c*=r;m*=r;b*=r;n=k*b-h*m;h=h*c-g*b;g=g*m-k*c;(r=Math.sqrt(n*n+h*h+g*g))?(r=1/r,n*=r,h*=r,g*=r):g=h=n=0;k=m*g-b*h;p=b*n-c*g;w=c*h-m*n;(r=Math.sqrt(k*k+p*p+w*w))?(r=1/r,k*=r,p*=r,w*=r):w=p=k=0;d[0]=n;d[1]=k;d[2]=c;d[3]=0;d[4]=h;d[5]=p;d[6]=m;d[7]=0;d[8]=g;d[9]=w;d[10]=b;d[11]=0;d[12]=
-(n*e+h*f+g*a);d[13]=-(k*e+p*f+w*a);d[14]=-(c*e+m*f+b*a);d[15]=1;return d};q.i.xk=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};q.qc={};q.qc.create=function(a){var b=new q.hf(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};q.qc.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
q.qc.Fs=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b)return a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a;b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};q.qc.inverse=function(a,b){if(!b||a==b)return a[0]*=1,a[1]*=1,a[2]*=1,a;b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};q.qc.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
q.qc.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],f=a[3],g=Math.sqrt(c*c+d*d+e*e+f*f);if(0==g)return b[0]=0,b[1]=0,b[2]=0,b[3]=0,b;g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;b[3]=f*g;return b};q.qc.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2];a=a[3];var g=b[0],k=b[1],h=b[2];b=b[3];c[0]=d*b+a*g+e*h-f*k;c[1]=e*b+a*k+f*g-d*h;c[2]=f*b+a*h+d*k-e*g;c[3]=a*b-d*g-e*k-f*h;return c};
q.qc.cb=function(a,b,c){c||(c=b);var d=b[0],e=b[1],f=b[2];b=a[0];var g=a[1],k=a[2];a=a[3];var h=a*d+g*f-k*e,m=a*e+k*d-b*f,n=a*f+b*e-g*d,d=-b*d-g*e-k*f;c[0]=h*a+d*-b+m*-k-n*-g;c[1]=m*a+d*-g+n*-b-h*-k;c[2]=n*a+d*-k+h*-g-m*-b;return c};q.qc.Bn=function(a,b){b||(b=q.Kc.create());var c=a[0],d=a[1],e=a[2],f=a[3],g=c+c,k=d+d,h=e+e,m=c*g,n=c*k,c=c*h,p=d*k,d=d*h,e=e*h,g=f*g,k=f*k,f=f*h;b[0]=1-(p+e);b[1]=n-f;b[2]=c+k;b[3]=n+f;b[4]=1-(m+e);b[5]=d-g;b[6]=c-k;b[7]=d+g;b[8]=1-(m+p);return b};
q.qc.ks=function(a,b){b||(b=q.i.create());var c=a[0],d=a[1],e=a[2],f=a[3],g=c+c,k=d+d,h=e+e,m=c*g,n=c*k,c=c*h,p=d*k,d=d*h,e=e*h,g=f*g,k=f*k,f=f*h;b[0]=1-(p+e);b[1]=n-f;b[2]=c+k;b[3]=0;b[4]=n+f;b[5]=1-(m+e);b[6]=d-g;b[7]=0;b[8]=c-k;b[9]=d+g;b[10]=1-(m+p);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};q.qc.ht=function(a,b,c,d){d||(d=a);var e=c;0>a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]&&(e=-1*c);d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
q.qc.xk=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};q.Math={};q.Math.mat4Multiply=q.i.multiply;q.Math.mat4Inverse=q.i.inverse;q.Math.mat4ToMat3=q.i.Bn;q.Math.mat4ToInverseMat3=q.i.An;q.Math.mat4Transpose=q.i.qd;q.Math.mat3Transpose=q.Kc.qd;q.Math.vec3Normalize=q.O.normalize;q.Math.vec3Dot=q.O.oe;q.Math.vec3Cross=q.O.Fi;q.Math.vec3Length=q.O.length;
q.bp=function(a,b,c,d,e,f){var g=b-a,k=d-c,h=f-e;a=q.i.create([2*e/g,0,(b+a)/g,0,0,2*e/k,(d+c)/k,0,0,0,-(f+e)/h,-2*f*e/h,0,0,-1,0]);q.i.qd(a);return a};q.Kq=function(a,b,c,d){a=c*Math.tan(a*Math.PI/180);b*=a;return q.bp(-b,b,-a,a,c,d)};q.Iq=function(a,b,c,d){var e=d-c;a=q.i.create([1/(.5*a*b),0,0,0,0,1/(.5*a),0,0,0,0,-2/e,-((d+c)/e),0,0,0,1]);q.i.qd(a);return a};
q.dc=function(a,b){var c=Math.cos(b),d=Math.sin(b);switch(a){case 0:c=[1,0,0,0,0,c,-d,0,0,d,c,0,0,0,0,1];break;case 1:c=[c,0,-d,0,0,1,0,0,d,0,c,0,0,0,0,1];break;default:c=[c,-d,0,0,d,c,0,0,0,0,1,0,0,0,0,1]}q.i.qd(c);return c};q.Bf=function(a,b,c){a=[a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1];q.i.qd(a);return a};q.$m=function(a){return q.Bf(a,a,a)};q.tc=function(a,b,c){a=[1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1];q.i.qd(a);return a};q.nt=function(a){return q.tc(a[0],a[1],0)};q.ot=function(a){return q.tc(a[0],a[1],a[2])};
q.isEqual=function(a,b,c){return Math.abs(a-b)<c};q.le=function(a,b,c){a<b?a=b:a>c&&(a=c);return a};q.Oa=function(a){return a*Math.PI/180};q.ml=function(a){return a/Math.PI*180};q.rq=function(a,b,c){return a+(b-a)*c};q.Ka=function(a,b){return"boolean"===typeof a?a:b};q.Ld=function(a,b,c){var d=Number.xs;return"number"===typeof a?q.le(a,b,d):c};q.ti=function(a,b){return"string"===typeof a?a:b};
q.bt=function(a,b){if(0>a)return a=-a+"",b--,a.length>=b?"-"+a:"-"+(Array(b-a.length+1).join("0")+a);a+="";return a.length>=b?a:Array(b-a.length+1).join("0")+a};q.yo=function(a){var b=(a&31744)>>10;fraction=a&1023;return(a>>15?-1:1)*(b?31===b?fraction?NaN:Infinity:Math.pow(2,b-15)*(1+fraction/1024):fraction/1024*6.103515625E-5)};q.Fr=function(a){var b={copy:"&copy;",Y:(new Date).getFullYear()};return a&&""!=a?a.replace(/\{([_$a-zA-Z0-9][_$a-zA-Z0-9]*)\}/g,function(a,d){return d in b?b[d]:a}):""};
q.dn=function(a){return a&&""!=a?q.Fr(a).replace(/\[([^\]]*)\]/g,function(a,c){c=c.trim();urls_=c.split(" ");return-1!=urls_[0].indexOf("//")?1<urls_.length?"<a href="+urls_[0]+" target='_blank'>"+c.substring(urls_[0].length)+"</a>":"<a href="+urls_[0]+" target='_blank'>"+urls_[0]+"</a>":c}):""};q.Gr=function(a,b,c){return a&&""!=a?a.replace(/\{([_$a-zA-Z(-9][_$a-zA-Z(-9]*)\}/g,function(a,e){return e in b?b[e]:c(e)}):""};
q.Ks=function(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?[parseInt(a[4],16),parseInt(a[3],16),parseInt(a[2],16),parseInt(a[1],16)]:[0,0,0,255]};q.Or=function(){return"("+q.Pn+").call(self);"};
q.hd=function(a,b,c,d,e,f){var g=new XMLHttpRequest;g.onreadystatechange=function(){switch(g.readyState){case 4:if(400<=g.status||0==g.status)c&&c(g.status);else{var e=g.response,f=e;if(!d)try{f=JSON.parse(e)}catch(m){console.log("JSON Parse Error ("+a+"): "+(m.message?m.message:""));c&&c(g.status);break}b&&b(f)}}}.bind(this);g.open("GET",a,!0);g.withCredentials=e;f&&f.token&&g.setRequestHeader("Accept","token/"+f.token+", */*");g.send("")};
q.Hc=function(a,b,c,d,e,f){var g=new XMLHttpRequest;g.onreadystatechange=function(){switch(g.readyState){case 0:case 1:case 2:case 3:break;case 4:if(400<=g.status||0==g.status){c&&c(g.status);break}var a=g.response;if(!a){c&&c();break}b&&b(a);break;default:c&&c()}}.bind(this);g.open("GET",a,!0);g.responseType=f?f:"arraybuffer";g.withCredentials=d;e&&e.token&&g.setRequestHeader("Accept","token/"+e.token+", */*");g.send("")};window.performance=window.performance||{};
performance.now=performance.now||performance.Us||performance.Vs||performance.Zs||performance.webkitNow||function(){return(new Date).getTime()};window.Xm=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};"undefined"===typeof Array.isArray&&(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});q.isEqual=q.isEqual;
q.clamp=q.le;q.mix=q.rq;q.radians=q.Oa;q.degrees=q.ml;q.loadJSON=q.hd;q.loadBinary=q.Hc;
q.wa={Yd:!1,lc:function(){var a=q.wa;a.zi=a.bn(a.vo)||"An unknown browser";a.version=a.cn(navigator.userAgent.toLowerCase())||a.cn(navigator.appVersion)||"an unknown version";a.ke=a.bn(a.wo)||"an unknown os: ua: "+navigator.userAgent+" pl: "+navigator.platform;a.ae="iphone/ipod"==a.ke||"android"==a.ke||"ipad"==a.ke||"windows ce"==a.ke||"windows phone"==a.ke||"kindle"==a.ke;a.sq="android"==a.ke;a.Yd=!0},ep:function(){q.wa.Yd||q.wa.lc();return q.wa.zi},fp:function(){q.wa.Yd||q.wa.lc();return q.wa.zi},
op:function(){q.wa.Yd||q.wa.lc();return q.wa.zi},em:function(){q.wa.Yd||q.wa.lc();return q.wa.ae},Vp:function(){q.wa.Yd||q.wa.lc();return q.wa.sq},bn:function(a){for(var b=q.wa,c=0;c<a.length;c++){var d=a[c].Ca,e=a[c].pr;b.Ln=a[c].Re||a[c].ma;if(d){if(-1!=d.toLowerCase().indexOf(a[c].Da))return null!=a[c].version&&(b.version=a[c].version),a[c].ma}else if(e)return a[c].ma}},cn:function(a){var b=q.wa;if(null!=b.version)return b.version;var c=a.indexOf(b.Ln);if(-1!=c)return parseFloat(a.substring(c+
b.Ln.length+1))},vo:[{Ca:navigator.userAgent,Da:"chrome",ma:"chrome"},{Ca:navigator.userAgent,Da:"firefox",ma:"firefox"},{Ca:navigator.vendor,Da:"apple",ma:"safari",Re:"version"},{pr:window.opera,ma:"opera",Re:"version"},{Ca:navigator.vendor,Da:"icab",ma:"icab"},{Ca:navigator.vendor,Da:"kde",ma:"konqueror"},{Ca:navigator.vendor,Da:"camino",ma:"camino"},{Ca:navigator.userAgent,Da:"netscape",ma:"netscape"},{Ca:navigator.userAgent,Da:"msie",ma:"explorer",Re:"msie"},{Ca:navigator.userAgent,Da:"trident/",
ma:"explorer",version:"11"},{Ca:navigator.userAgent,Da:"edge/",ma:"explorer",version:"12"},{Ca:navigator.userAgent,Da:"omniweb",Re:"omniweb/",ma:"omniweb"},{Ca:navigator.userAgent,Da:"silk",Re:"silk/",ma:"silk"},{Ca:navigator.userAgent,Da:"gecko",ma:"mozilla",Re:"rv"},{Ca:navigator.userAgent,Da:"mozilla",ma:"netscape",Re:"mozilla"}],wo:[{Ca:navigator.userAgent,Da:"windows ce",ma:"windows ce"},{Ca:navigator.userAgent,Da:"windows phone",ma:"windows phone"},{Ca:navigator.platform,Da:"win",ma:"windows"},
{Ca:navigator.platform,Da:"mac",ma:"mac"},{Ca:navigator.userAgent,Da:"iphone",ma:"iphone/ipod"},{Ca:navigator.userAgent,Da:"ipod",ma:"iphone/ipod"},{Ca:navigator.userAgent,Da:"ipad",ma:"ipad"},{Ca:navigator.userAgent,Da:"android",ma:"android"},{Ca:navigator.userAgent,Da:"silk",ma:"kindle"},{Ca:navigator.userAgent,Da:"blackberry",ma:"blackberry"},{Ca:navigator.platform,Da:"linux",ma:"linux"}]};q.getBrowser=q.wa.ep;q.getBrowserVersion=q.wa.fp;q.getOS=q.wa.op;q.isPlatformMobileDevice=q.wa.em;
q.isPlatformAndroid=q.wa.Vp;q.ra={};q.ra.Ms=function(a){if("string"!==typeof a)return!1;var b=document.location.hostname;return q.ra.parse(a).hostname===b};q.ra.parse=function(a){if("string"!==typeof a)return null;var b=document.createElement("a");b.href=a;return b};
q.ra.pp=function(a){var b={};a=q.ra.parse(a).search.substring(1).split("&");if(1!=a.length||""!=a[0])for(var c=0;c<a.length;c++){var d=a[c].split("=");"undefined"===typeof b[d[0]]?b[d[0]]=d[1]:"string"===typeof b[d[0]]?b[d[0]]=[b[d[0]],d[1]]:b[d[0]].push(d[1])}return b};q.ra.mp=function(a){var b=document.createElement("a");b.href=a;return b.hostname};
q.ra.rh=function(a){if(-1!=a.indexOf("http://"))return"http:";if(-1!=a.indexOf("https://"))return"https:";var b=document.createElement("a");b.href=a;return b.protocol};q.ra.ph=function(a){var b=document.createElement("a");b.href=a;return b.origin};q.ra.mh=function(a){return a.split("?")[0].split("/").slice(0,-1).join("/")+"/"};
q.ra.Hl=function(a,b){if(!a||!b)return a;a=a.trim();b=b.trim();var c=q.ra.mh(b),d=q.ra.rh(b),e=q.ra.ph(b);return-1!=a.indexOf("://")?a:0==a.indexOf("//")?d+a:0==a.indexOf("/")?e+a:c+a};q.Url=q.ra;q.ra.getParamsFromUrl=q.ra.pp;q.gb={};q.gb.gq=function(a,b,c,d){!a instanceof Image||"string"!==typeof b||(d||(a.crossOrigin=c?"use-credentials":"anonymous"),a.src=b)};q.gb.nj=function(a,b,c,d,e){var f=new Image;f.onerror=c;f.onload=b;q.gb.gq(f,a,d,e);return f};q.gb.hd=function(a,b,c){q.Hc(a,b,c)};
q.gb.Hc=function(a,b,c){q.Hc(a,b,c)};q.gb.bm=function(a,b,c,d,e){var f=new XMLHttpRequest;f.onreadystatechange=function(){switch(f.readyState){case 0:case 1:case 2:case 3:break;case 4:null!=b&&b(f.getAllResponseHeaders(),f.status);break;default:null!=c&&c()}}.bind(this);f.onerror=function(){null!=c&&c()}.bind(this);f.open("HEAD",a,!0);f.withCredentials=d;e&&e.token&&f.setRequestHeader("Accept","token/"+e.token+", */*");f.send("")};q.Http=q.gb;q.gb.imageFactory=q.gb.nj;q.gb.loadJSON=q.gb.hd;
q.gb.loadBinary=q.gb.Hc;q.gb.headRequest=q.gb.bm;function na(a){a=this.o=a.o;if(null!=a){this.P=null;this.P=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.P);var b=[0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1];a.bufferData(a.ARRAY_BUFFER,new Float32Array(b),a.STATIC_DRAW);this.P.ka=3;this.P.ca=b.length/3;this.u=36;this.wj=this.P.ca/3}}na.prototype.D=function(){this.o.deleteBuffer(this.P)};
na.prototype.Ua=function(a,b){var c=this.o;if(null!=c){var d=a.getAttribute(b);c.bindBuffer(c.ARRAY_BUFFER,this.P);c.vertexAttribPointer(d,this.P.ka,c.FLOAT,!1,0,0);c.drawArrays(c.LINES,0,this.P.ca)}};function pa(a,b,c,d){this.Qd=a;this.La=null;this.ha=b;this.hl=null;this.xm=8;this.vq=new Uint8Array(this.xm);this.Vo=new Uint8Array(this.xm);this.il=this.zo=this.jc({});this.fm=null==c?!1:c;this.Un=d?!0:!1}l=pa.prototype;
l.lc=function(){this.La=document.createElement("canvas");if(null!=this.La&&(this.La.width=this.ha[0],this.La.height=this.ha[1],this.La.style.display="block",null!=this.La.getContext)){try{this.o=this.La.getContext("webgl",{preserveDrawingBuffer:this.fm,antialias:this.Un,stencil:!0})||this.La.getContext("experimental-webgl",{preserveDrawingBuffer:this.fm})}catch(a){}this.o&&(this.o.getExtension("OES_standard_derivatives"),this.Qd.appendChild(this.La),this.o.Rk=this.La.width,this.o.Qk=this.La.height,
this.o.clearColor(0,0,0,1),this.o.enable(this.o.DEPTH_TEST),this.o.viewport(0,0,this.o.Rk,this.o.Qk),this.o.clear(this.o.COLOR_BUFFER_BIT|this.o.DEPTH_BUFFER_BIT))}};l.D=function(){this.Qd.removeChild(this.La);delete this.La;this.La=null};l.resize=function(a,b){this.ha=a;null!=this.La&&1!=b&&(this.La.width=this.ha[0],this.La.height=this.ha[1]);null!=this.o&&(this.o.Rk=this.La.width,this.o.Qk=this.La.height)};function ta(a){a.o.viewport(0,0,a.o.Rk,a.o.Qk)}
l.clear=function(a,b,c){null!=c&&this.o.clearColor(c[0]/255,c[1]/255,c[2]/255,c[3]/255);this.o.clear((b?this.o.COLOR_BUFFER_BIT:0)|(a?this.o.DEPTH_BUFFER_BIT:0))};
l.useProgram=function(a,b,c){if(this.hl!=a){this.o.useProgram(a.Na);this.hl=a;za(a,"uSampler",0);c&&za(a,"uSampler2",1);c=this.vq;for(var d=this.Vo,e=0,f=c.length;e<f;e++)c[e]=0;e=0;for(f=b.length;e<f;e++){var g=a.getAttribute(b[e]);-1!=g&&(c[g]=1)}e=0;for(f=c.length;e<f;e++)d[e]!=c[e]&&(c[e]?(this.o.enableVertexAttribArray(e),d[e]=1):(this.o.disableVertexAttribArray(e),d[e]=0))}};
l.bindTexture=function(a,b){0!=a.Ic&&(this.o.activeTexture(b?this.o.TEXTURE1:this.o.TEXTURE0),this.o.bindTexture(this.o.TEXTURE_2D,a.J))};q.vs=function(){return!0};function Ba(a,b){null!=b?a.o.bindFramebuffer(a.o.FRAMEBUFFER,b.Cl):(a.o.bindTexture(a.o.TEXTURE_2D,null),a.o.bindRenderbuffer(a.o.RENDERBUFFER,null),a.o.bindFramebuffer(a.o.FRAMEBUFFER,null))}
pa.prototype.jc=function(a){null==a.vc&&(a.vc=!1);null==a.Gf&&(a.Gf=!1);null==a.Nd&&(a.Nd=!0);null==a.je&&(a.je=!0);null==a.Nf&&(a.Nf=!1);null==a.$c&&(a.$c=!0);return a};
pa.prototype.ec=function(a){var b=this.o,c=this.il;c.vc!=a.vc&&(1==a.vc?(b.blendEquationSeparate(b.FUNC_ADD,b.FUNC_ADD),b.blendFuncSeparate(b.SRC_ALPHA,b.ONE_MINUS_SRC_ALPHA,b.ONE,b.ONE_MINUS_SRC_ALPHA),b.enable(b.BLEND)):b.disable(b.BLEND));c.Gf!=a.Gf&&(1==a.Gf?b.enable(b.STENCIL_TEST):b.disable(b.STENCIL_TEST));c.Nd!=a.Nd&&(1==a.Nd?b.depthMask(!0):b.depthMask(!1));c.je!=a.je&&(0!=a.je?b.enable(b.DEPTH_TEST):b.disable(b.DEPTH_TEST));c.Nf!=a.Nf&&(0!=a.Nf?b.depthFunc(b.LEQUAL):b.depthFunc(b.LESS));
c.$c!=a.$c&&(1==a.$c?b.enable(b.CULL_FACE):b.disable(b.CULL_FACE));this.il=a};function Ca(a,b,c,d){this.v=null;this.j=a;this.o=a.o;this.C=b;this.wd=[];this.Ff=0;this.dd=c;this.u=d;this.J=this.Ga=null;this.Ui(c,d)}Ca.prototype.D=function(){};
Ca.prototype.Ui=function(a,b){null==a&&(a="Arial, 'Helvetica Neue', Helvetica, sans-serif");null==b&&(b=10);var c=1/512,d=1/512,e=document.createElement("canvas");e.width=512;e.height=512;e=e.getContext("2d");e.beginPath();e.font=b+"pt "+a;e.textAlign="left";e.textBaseline="top";e.fillStyle="#ffffff";e.strokeStyle="#000000";e.lineWidth=5;e.lineCap="round";e.lineJoin="round";var f=Math.round(.5*e.lineWidth),g=e.lineWidth+2,k=g,h=g,m=Math.floor(2.5*e.measureText("e").width);this.wd=[];this.Ff=m;this.u=
b;this.dd=a;for(var n=[],p=33;191>p;p++)n.push(p);for(p=192;688>p;p++)n.push(p);for(var n=n.concat(32,8230,8216,8217,8218,8219,8220,8221,8222,8242,8243,8252),p=0,w=n.length;p<w;p++){var r=String.fromCharCode(n[p]),t=Math.round(e.measureText(r).width),u=t+e.lineWidth;512<=k+t+g&&(k=g,h+=m+g);e.strokeText(r,k+f,h);e.fillText(r,k+f,h);this.wd[n[p]]={Ik:k*c,Mk:h*d,Jk:(k+u)*c,Nk:(h+m)*d,Cj:u,iq:m,Le:u-2};k+=u+g}this.Ga=e.getImageData(0,0,512,512);this.J=new Fa(this.j,null);Ha(this.J,this.Ga,"linear");
this.J.Md=512;this.J.kf=512;this.J.u=1048576};Ca.prototype.size=function(){return this.u};function Ia(a,b,c,d,e){this.f=a;this.v=null;this.Ee=c||[0,0,0];this.j=d;this.o=d.o;this.l=e;this.Bd=[];this.fe=0;null!=b&&null!=b[0]&&null!=b[1]&&(this.v=new Na(b[0][0],b[0][1],b[0][2],b[1][0],b[1][1],b[1][2]));this.Eb=this.u=0}
Ia.prototype.D=function(){for(var a=0,b=this.Bd.length;a<b;a++){var c=this.Bd[a];switch(c.T){case "flat-line":c.P&&this.o.deleteBuffer(c.P);break;case "flat-tline":case "pixel-line":case "pixel-tline":c.P&&this.o.deleteBuffer(c.P);c.Se&&this.o.deleteBuffer(c.Se);break;case "line-label":c.P&&this.o.deleteBuffer(c.P);c.yb&&this.o.deleteBuffer(c.yb);break;case "icon":case "label":c.P&&this.o.deleteBuffer(c.P),c.yb&&this.o.deleteBuffer(c.yb),c.ie&&this.o.deleteBuffer(c.ie)}}};Ia.prototype.size=function(){return this.u};
function Oa(a,b){var c=a.o,d=b.vertexBuffer,e=b.normalBuffer,f=b.color,g=1/255,k={};k.T=b.type;k.Na=b.program;k.Zc=[f[0]*g,f[1]*g,f[2]*g,f[3]*g];k.Mf=b["z-index"]+256;k.Rf=b["click-event"];k.lg=b["hover-event"];k.jg=b.hitable;k.Yf=b.eventInfo;k.gh=b["enter-event"];k.Fh=b["leave-event"];k.Id=b.state;k.vd=b.center;k.fa=b.lod;k.lm=b["line-width"];k.Ve=b["zbuffer-offset"];k.fe=!1;k.pa=!0;if(null!=b.texture){var f=b.texture,h=f[0];k.J=[Pa(a.l,h.url,h.filter||"linear",h.tiled||!1),f[1],f[2],f[3],f[4]];
h=b.background;0!=h[3]&&(k.Uk=[h[0]*g,h[1]*g,h[2]*g,h[3]*g])}switch(k.T){case "flat-tline":k.Na=0!=h[3]?a.l.hr:a.l.ir;break;case "pixel-line":k.Na=a.l.cr;break;case "pixel-tline":k.Na=0!=h[3]?a.l.jr:a.l.kr}k.P=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,k.P);c.bufferData(c.ARRAY_BUFFER,d,c.STATIC_DRAW);k.P.ka=4;k.P.ca=d.length/4;k.Se=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,k.Se);c.bufferData(c.ARRAY_BUFFER,e,c.STATIC_DRAW);k.Se.ka=4;k.Se.ca=e.length/4;a.Bd.push(k);a.u+=4*d.length+4*e.length;
a.Eb+=d.length/4}
function Qa(a,b,c){var d=a.o,e=b.vertexBuffer,f=b.texcoordsBuffer,g=b.originBuffer,k=b.color,h=b.stick,m=1/255,n={};n.T=c?"label":"icon";n.Na=b.program;n.Zc=[k[0]*m,k[1]*m,k[2]*m,k[3]*m];n.Mf=b["z-index"]+256;n.Lf=b.visibility;n.$c=b.culling;n.Rf=b["click-event"];n.lg=b["hover-event"];n.gh=b["enter-event"];n.Fh=b["leave-event"];n.jg=b.hitable;n.Yf=b.eventInfo;n.Id=b.state;n.vd=b.center;n.Hf=[h[0],h[1],h[2],h[3]*m,h[4]*m,h[5]*m,h[6]*m];n.fa=b.lod;n.Ve=b["zbuffer-offset"];n.fe=!1;n.pa=!0;1!=c?(b=b.icon,
n.J=Pa(a.l,b.url,b.filter||"linear",b.tiled||!1)):n.J=a.l.dd.J;n.P=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,n.P);d.bufferData(d.ARRAY_BUFFER,e,d.STATIC_DRAW);n.P.ka=4;n.P.ca=e.length/4;n.yb=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,n.yb);d.bufferData(d.ARRAY_BUFFER,f,d.STATIC_DRAW);n.yb.ka=4;n.yb.ca=f.length/4;n.ie=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,n.ie);d.bufferData(d.ARRAY_BUFFER,g,d.STATIC_DRAW);n.ie.ka=3;n.ie.ca=g.length/3;a.Bd.push(n);a.u+=4*n.P.ca+4*n.ie.ca+4*n.yb.ca;a.Eb+=
n.P.ca/4}
Ia.prototype.Ua=function(a,b,c){if(null==this.f||!1!==this.l.Zp[this.f]){if(1==c){c=q.i.create();var d=q.i.create(),e=this.l.oa,f=this.l.Os[this.f];if(null!=f){var g=f[1],g=[g[0]-e[0],g[1]-e[1],g[2]];q.i.multiply(q.tc(g[0],g[1],g[2]),f[0],d);q.i.multiply(a,d,d)}else g=[this.Ee[0]-e[0],this.Ee[1]-e[1],this.Ee[2]],q.i.multiply(a,q.tc(g[0],g[1],g[2]),d);q.i.multiply(b,d,c);a=d;b=c}c=this.l.ba;for(var d=this.l.xe,e=this.l.pg,f=this.l.Zj,g=0,k=this.Bd.length;g<k;g++){var h=this.Bd[g];if(("icon"==h.T||
"label"==h.T)&&0<h.Lf){var m=h.vd;if(q.O.length([m[0]-c[0],m[1]-c[1],m[2]-c[2]])>h.Lf)continue}if(!f||h.jg)h.Ws=a,h.xg=b,m=h.Mf,d[m][e[m]]=h,e[m]++}}};
q.Ko=function(a,b,c,d,e){var f=d.xg;if(d.pa){if(0!=d.Id){var g=d.Yf.id;if(null!=g&&null!=c.mj)if(1==d.Id){if(c.mj[0].id==g)return}else{if(c.mj[0].id!=g)return}else if(2==d.Id)return}var k=d.jg&&c.Zj,g=d.Zc;if(k){var h=c.cm,g=[(h&255)/255,(h>>8&255)/255,(h>>16&255)/255,1];c.Op[h]=[d.Yf,d.vd,d.Rf,d.lg,d.gh,d.Fh];c.cm++}switch(d.T){case "flat-line":a.ec(q.ui);h=c.dr;a.useProgram(h,["aPosition"]);Ra(h,"uColor",g);Sa(h,"uMVP",f,Ta(c,d.Ve));a=h.getAttribute("aPosition");b.bindBuffer(b.ARRAY_BUFFER,d.P);
b.vertexAttribPointer(a,d.P.ka,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.P.ca);break;case "flat-tline":case "pixel-line":case "pixel-tline":a.ec(q.ui);var h=d.Na,m=[0,0,0,0];if("pixel-line"!=d.T){if(k)k=c.Te;else{var n=d.J;if(null==n||null==n[0])break;k=n[0];m=[0,n[1]/n[0].kf,(n[1]+n[2])/n[0].kf,0];m[0]="flat-tline"==d.T?1/d.lm/(k.Md/n[2]):1/k.Md/1}if(0==k.Ic)break;a.bindTexture(k)}a.useProgram(h,["aPosition","aNormal"]);Ra(h,"uColor",g);Ua(h,"uScale",e);Sa(h,"uMVP",f,Ta(c,d.Ve));"pixel-line"!=
d.T&&(null!=d.Uk&&Ra(h,"uColor2",d.Uk),Ra(h,"uParams",m),za(h,"uSampler",0));a=h.getAttribute("aPosition");c=h.getAttribute("aNormal");b.bindBuffer(b.ARRAY_BUFFER,d.P);b.vertexAttribPointer(a,d.P.ka,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.Se);b.vertexAttribPointer(c,d.Se.ka,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.P.ca);break;case "line-label":k=k?c.Te:c.dd.J;a.ec(q.Sk);h=c.Rm;a.bindTexture(k);a.useProgram(h,["aPosition","aTexCoord"]);za(h,"uSampler",0);Sa(h,"uMVP",f,Ta(c,d.Ve));Ra(h,"uVec",
c.rj);Ra(h,"uColor",g);a=h.getAttribute("aPosition");c=h.getAttribute("aTexCoord");b.bindBuffer(b.ARRAY_BUFFER,d.P);b.vertexAttribPointer(a,d.P.ka,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.yb);b.vertexAttribPointer(c,d.yb.ka,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.P.ca);break;case "icon":case "label":if(k=k?c.Te:d.J,0!=k.Ic){if(180!=d.$c){h=d.vd;m=c.ba;h=[h[0]-m[0],h[1]-m[1],h[2]-m[2]];if(0!=d.Lf){m=q.O.length(h);if(m>d.Lf)break;m=1/m;h[0]*=m;h[1]*=m;h[2]*=m}else q.O.normalize(h);d.Gm=[0,
0,0];q.O.normalize(d.vd,d.Gm);if(-q.O.oe(h,d.Gm)<Math.cos(q.Oa(d.$c)))break}else if(0!=d.Lf&&(h=d.vd,m=c.ba,h=[h[0]-m[0],h[1]-m[1],h[2]-m[2]],m=q.O.length(h),m>d.Lf))break;a.ec(q.Sk);m=0;0!=d.Hf[0]&&(h=d.Hf,m=c.cl*h[0],m<h[1]?m=0:0!=h[2]&&(n=Va(c,d.vd,f),n[0]=Math.round(n[0]),c.pe([[n[0],n[1],n[2]],[n[0],n[1]-m,n[2]]],h[2],[h[3],h[4],h[5],h[6]],null,null,null,!0)));h=c.br;a.bindTexture(k);a.useProgram(h,["aPosition","aTexCoord","aOrigin"]);za(h,"uSampler",0);Sa(h,"uMVP",f,Ta(c,d.Ve));Ra(h,"uScale",
[e[0],e[1],"label"==d.T?1:1/k.Md,2*m]);Ra(h,"uColor",g);a=h.getAttribute("aPosition");c=h.getAttribute("aTexCoord");e=h.getAttribute("aOrigin");b.bindBuffer(b.ARRAY_BUFFER,d.P);b.vertexAttribPointer(a,d.P.ka,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.yb);b.vertexAttribPointer(c,d.yb.ka,b.FLOAT,!1,0,0);b.bindBuffer(b.ARRAY_BUFFER,d.ie);b.vertexAttribPointer(e,d.ie.ka,b.FLOAT,!1,0,0);b.drawArrays(b.TRIANGLES,0,d.P.ca)}}}};
function Za(a,b,c,d){this.o=a.o;this.v=b.v;this.Vb=c;this.C=d;this.Tc=this.Uc=this.ja=null;performance.now();a=b.U;c=b.Pg;d=b.Jn;var e=b.ts||3,f=b.ps||2;b=b.os||2;var g=this.o;a&&g&&(this.ja=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,this.ja),g.bufferData(g.ARRAY_BUFFER,new Float32Array(a),g.STATIC_DRAW),this.ja.ka=e,this.ja.ca=a.length/e,null!=c&&(this.Uc=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,this.Uc),g.bufferData(g.ARRAY_BUFFER,new Float32Array(c),g.STATIC_DRAW),this.Uc.ka=f,this.Uc.ca=
c.length/f),null!=d&&(this.Tc=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,this.Tc),g.bufferData(g.ARRAY_BUFFER,new Float32Array(d),g.STATIC_DRAW),this.Tc.ka=b,this.Tc.ca=d.length/b),this.u=this.ja.ca*e*4,this.u+=null==c?0:this.Uc.ca*f*4,this.u+=null==d?0:this.Tc.ca*b*4,this.Eb=this.ja.ca/3,this.Kd=!0)}Za.prototype.D=function(){this.o&&this.Kd&&(this.ja&&this.o.deleteBuffer(this.ja),this.Uc&&this.o.deleteBuffer(this.Uc),this.Tc&&this.o.deleteBuffer(this.Tc),this.Tc=this.Uc=this.ja=null)};
Za.prototype.Ua=function(a,b,c,d,e){var f=this.o;null!=f&&this.Kd&&(b=a.getAttribute(b),f.bindBuffer(f.ARRAY_BUFFER,this.ja),f.vertexAttribPointer(b,this.ja.ka,f.FLOAT,!1,0,0),this.Uc&&c&&(c=a.getAttribute(c),f.bindBuffer(f.ARRAY_BUFFER,this.Uc),f.vertexAttribPointer(c,this.Uc.ka,f.FLOAT,!1,0,0)),this.Tc&&d&&(d=a.getAttribute(d),f.bindBuffer(f.ARRAY_BUFFER,this.Tc),f.vertexAttribPointer(d,this.Tc.ka,f.FLOAT,!1,0,0)),e&&e&&(a=a.getAttribute(e),f.bindBuffer(f.ARRAY_BUFFER,q.We),f.vertexAttribPointer(a,
q.We.ka,f.FLOAT,!1,0,0)),f.drawArrays(f.TRIANGLES,0,this.ja.ca))};Za.prototype.size=function(){return this.u};function $a(a,b,c,d,e,f){this.v=null;this.j=a;this.o=a.o;this.C=b;performance.now();null!=this.o&&(this.U=[],this.ja=null,this.wj=c,this.zh=e,this.yh=f,this.Rj=d,this.lc())}l=$a.prototype;l.D=function(){this.o.deleteBuffer(this.ja)};
l.lc=function(){if(this.wj){this.zh&&ab(this,0,this.yh);for(var a=0;a<this.Rj;a++){var b=a,c=a+1,d=this.U.length;this.U[d]=b;this.U[d+1]=c;this.U[d+2]=1;this.U[d+3]=b;this.U[d+4]=c;this.U[d+5]=-1;this.U[d+6]=c;this.U[d+7]=b;this.U[d+8]=1;this.U[d+9]=b;this.U[d+10]=c;this.U[d+11]=1;this.U[d+12]=c;this.U[d+13]=b;this.U[d+14]=1;this.U[d+15]=c;this.U[d+16]=b;this.U[d+17]=-1;this.Eb+=2;this.zh&&ab(this,a+1,this.yh)}}else if(this.zh)for(a=0;a<=this.Rj;a++)ab(this,a,this.yh);this.compile()};
function ab(a,b,c){var d=a.U.length,e=2*Math.PI/c;for(i=0;i<c;i++)a.U[d]=b,a.U[d+1]=-1,a.U[d+2]=0,a.U[d+3]=b,a.U[d+4]=-2,a.U[d+5]=e*i,a.U[d+6]=b,a.U[d+7]=-2,a.U[d+8]=e*(i+1),d+=9;a.Eb+=c}l.compile=function(){var a=this.o;this.ja=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.ja);a.bufferData(a.ARRAY_BUFFER,new Float32Array(this.U),a.STATIC_DRAW);this.ja.ka=3;this.ja.ca=this.U.length/3;this.u=24*this.ja.ca;this.Eb=this.ja.ca/3};
l.Ua=function(a,b,c){var d=this.o;null==d||null==this.ja||c>this.Rj||(a=a.getAttribute(b),d.bindBuffer(d.ARRAY_BUFFER,this.ja),d.vertexAttribPointer(a,this.ja.ka,d.FLOAT,!1,0,0),a=0,this.wj&&(a+=6*(c-1)),this.zh&&(a+=3*c*this.yh),d.drawArrays(d.TRIANGLES,0,a))};l.size=function(){return this.u};function z(a,b,c){this.j=a;this.o=a.o;this.Na=null;this.Kk=[];this.yi=[];this.lq=new Float32Array(16);this.createProgram(b,c)}
z.prototype.createShader=function(a,b){var c=this.o;if(!a||!c)return null;var d;d=1!=b?c.createShader(c.FRAGMENT_SHADER):c.createShader(c.VERTEX_SHADER);c.shaderSource(d,a);c.compileShader(d);return c.getShaderParameter(d,c.COMPILE_STATUS)?d:(alert("An error occurred compiling the shaders: "+c.getShaderInfoLog(d)),null)};
z.prototype.createProgram=function(a,b){var c=this.o;if(null!=c){var d=this.createShader(a,!0),e=this.createShader(b,!1),f=c.createProgram();c.attachShader(f,d);c.attachShader(f,e);c.linkProgram(f);c.getProgramParameter(f,c.LINK_STATUS)||alert("Unable to initialize the shader program.");c.useProgram(f);this.Na=f}};function za(a,b,c){var d=a.o;null!=d&&null!=a.Na&&(a=a.getUniform(b),null!=a&&d.uniform1i(a,c))}
function Sa(a,b,c,d){var e=a.o;null!=e&&null!=a.Na&&(b=a.getUniform(b),null!=b&&(d?(d=1+d,a=a.lq,a[0]=c[0],a[1]=c[1],a[2]=c[2]*d,a[3]=c[3],a[4]=c[4],a[5]=c[5],a[6]=c[6]*d,a[7]=c[7],a[8]=c[8]*d,a[9]=c[9]*d,a[10]=c[10]*d,a[11]=c[11]*d,a[12]=c[12],a[13]=c[13],a[14]=c[14]*d,a[15]=c[15],e.uniformMatrix4fv(b,!1,a)):e.uniformMatrix4fv(b,!1,c)))}function cb(a,b,c){var d=a.o;null!=d&&null!=a.Na&&(a=a.getUniform(b),null!=a&&d.uniformMatrix3fv(a,!1,c))}
function Ua(a,b,c){var d=a.o;null!=d&&null!=a.Na&&(a=a.getUniform(b),null!=a&&d.uniform2fv(a,c))}function db(a,b,c){var d=a.o;null!=d&&null!=a.Na&&(a=a.getUniform(b),null!=a&&d.uniform3fv(a,c))}function Ra(a,b,c){var d=a.o;null!=d&&null!=a.Na&&(a=a.getUniform(b),null!=a&&d.uniform4fv(a,c))}function eb(a,b,c){var d=a.o;null!=d&&null!=a.Na&&(a=a.getUniform(b),null!=a&&d.uniform1f(a,c))}function fb(a,b,c){var d=a.o;null!=d&&null!=a.Na&&(a=a.getUniform(b),null!=a&&d.uniform1fv(a,c))}
z.prototype.getAttribute=function(a){var b=this.o;if(null!=b&&null!=this.Na)return null==this.yi[a]?(b=b.getAttribLocation(this.Na,a),this.yi[a]=b):this.yi[a]};z.prototype.getUniform=function(a){var b=this.o;if(null!=b&&null!=this.Na)return null==this.Kk[a]?(b=b.getUniformLocation(this.Na,a),this.Kk[a]=b):this.Kk[a]};q.ao="attribute vec3 aPosition;\nuniform mat4 uMVP;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";q.Zn="precision mediump float;\nvoid main() {\ngl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);\n}";
q.fq="attribute vec3 aPosition;\nuniform mat4 uMVP;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";q.eq="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";q.aq="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(aPosition.xyz, 1.0));\nif (aNormal.w == 0.0) {\ngl_Position = pp0 + vec4((vec3(aNormal.x*uScale.x*pp0.w, aNormal.y*uScale.y*pp0.w, 0.0)), 0.0);\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(aNormal.xyz, 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aNormal.w*pp0.w, n.x*uScale.y*aNormal.w*pp0.w, 0.0)), 0.0);\n}\n}";
q.$p="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";q.cq="attribute vec3 aPosition;\nuniform mat4 uMVP;\nuniform vec3 uScale;\nuniform vec3 uPoints[32];\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(uPoints[int(aPosition.x)], 1.0));\nif (aPosition.y < 0.0) {\nif (aPosition.y == -1.0) {\ngl_Position = pp0;\n} else {\ngl_Position = pp0 + vec4((vec3(-sin(aPosition.z)*uScale.x*uScale.z, cos(aPosition.z)*uScale.y*uScale.z, 0.0)), 0.0);\n}\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(uPoints[int(aPosition.y)], 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aPosition.z*uScale.z, n.x*uScale.y*aPosition.z*uScale.z, 0.0)), 0.0);\n}\n}";
q.bq="precision mediump float;\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}";q.zn="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvoid main(){ \nvec4 p=vec4(aPosition.xyz, 1.0);\np.xy+=aNormal.xy;\nif (aNormal.w == 0.0){\nfloat tcy=(uParams[1]+uParams[2])*0.5;\nfloat tdy=uParams[1]-tcy;\nfloat ty=(aNormal.x == 0.0 && aNormal.y == 0.0)?tcy:tcy+tdy*cos(aNormal.z);\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], ty);\n} else {\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], aPosition.w < 0.0 ? uParams[1] : uParams[2]);\n}\ngl_Position = uMVP * p;\n}";
q.Fn="attribute vec4 aPosition;\nattribute vec4 aNormal;\nuniform mat4 uMVP;\nuniform vec2 uScale;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvoid main(){ \nvec4 pp0 = (uMVP * vec4(aPosition.xyz, 1.0));\nvTexCoord=vec2(abs(aPosition.w)*uParams[0], aPosition.w < 0.0 ? uParams[1] : uParams[2]);\nif (aNormal.w == 0.0) {\ngl_Position = pp0 + vec4((vec3(aNormal.x*uScale.x*pp0.w, aNormal.y*uScale.y*pp0.w, 0.0)), 0.0);\n} else {\nvec2 pp1 = pp0.xy / pp0.w;\nvec4 pp3 = (uMVP * vec4(aNormal.xyz, 1.0));\nvec2 pp2 = pp3.xy / pp3.w;\nvec2 n = normalize(pp2 - pp1);\ngl_Position = pp0 + vec4((vec3(-n.y*uScale.x*aNormal.w*pp0.w, n.x*uScale.y*aNormal.w*pp0.w, 0.0)), 0.0);\n}\n}";
q.yn="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uColor2;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord)*uColor;\ngl_FragColor = c;\n}";q.qn="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uColor2;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord)*uColor;\nvec4 c2=uColor2;\nc.xyz*=c.w; c2.xyz*=c2.w;\nc=mix(c,c2,1.0-c.w);\nc.xyz/=(c.w+0.00001);\ngl_FragColor = c;\n}";
q.Xq="attribute vec3 aPosition;\nattribute vec3 aNormal;\nuniform mat4 uMVP;\nuniform mat4 uRot;\nuniform vec4 uColor;\nvarying vec4 vColor;\nvoid main(){ \nfloat l = dot((uRot*vec4(aNormal,1.0)).xyz, vec3(0.0,0.0,1.0)) * 0.5;\nvec3 c = uColor.xyz;\nc = (l > 0.0) ? mix(c,vec3(1.0,1.0,1.0),l) : mix(vec3(0.0,0.0,0.0),c,1.0+l);\nvColor = vec4(c, uColor.w);\ngl_Position = uMVP * vec4(aPosition, 1.0);\n}";q.Wq="precision mediump float;\nvarying vec4 vColor;\nvoid main() {\ngl_FragColor = vColor;\n}";
q.Rr="attribute vec4 aPosition;\nattribute vec4 aTexCoord;\nuniform mat4 uMVP;\nuniform vec4 uVec;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy;\nif (dot(uVec.xyz, vec3(aTexCoord.z, aTexCoord.w, aPosition.w)) < 0.0) {\ngl_Position = uMVP * vec4(2.0, 0.0, 0.0, 1.0);\n}else{\ngl_Position = uMVP * vec4(aPosition.xyz, 1.0);\n}\n}";q.Sr="attribute vec3 aPosition;\nattribute vec4 aTexCoord;\nuniform mat4 uMVP;\nuniform vec4 uPosition;\nuniform float uDepth;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy;\ngl_Position = uMVP*vec4(aPosition[0]+uPosition[0],-aPosition[1]+uPosition[1],uPosition[2],1.0);\n}";
q.Qp="attribute vec4 aPosition;\nattribute vec4 aTexCoord;\nattribute vec3 aOrigin;\nuniform mat4 uMVP;\nuniform vec4 uScale;\nvarying vec2 vTexCoord;\nvoid main(){ \nvTexCoord = aTexCoord.xy * uScale[2];\nvec4 pos = (uMVP * vec4(aOrigin, 1.0));\ngl_Position = pos + vec4(aPosition.x*uScale.x*pos.w, (aPosition.y+uScale.w)*uScale.y*pos.w, 0.0, 0.0);\n}";q.Ak="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 c=texture2D(uSampler, vTexCoord);\nif(c.w < 0.01){ discard; }\ngl_FragColor = c*uColor;\n}";
q.fn="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMVP;\nvarying vec2 vTexCoord;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\nvTexCoord = aTexCoord;\n}";q.Jr="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nconst vec4 gray = vec4(0.125, 0.125, 0.125, 1.0);\nvoid main() {\nfloat fade = smoothstep(0.51, 0.55, vTexCoord.t);\ngl_FragColor = mix(texture2D(uSampler, vTexCoord), gray, fade);\n}";q.Mr="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uSampler, vTexCoord);\n}";
q.Xn="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform mat3 uNorm;\nvarying vec3 vNormal;\nvarying vec4 vPosition;\nvoid main(){ \nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nvec4 c = uMV * vec4(aPosition, 1.0);\nvNormal = (aPosition.xyz - vec3(0.5));\nvPosition = camSpacePos;\n}";q.Vn="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uParams;\nuniform vec4 uParams2;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nconst vec4 fogColor2 = vec4(72.0/255.0, 154.0/255.0, 255.0/255.0, 1.0);\nvoid main() {\nfloat l = dot(normalize(vNormal),-uParams2.xyz);\nl = (1.0-pow(abs(l),uParams.x));\nvec4 c = vec4(mix(fogColor2.xyz, fogColor.xyz, l), l);\ngl_FragColor = c;\n}";
q.Bs="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uNFactor;\nuniform vec2 uRadius;\nuniform vec3 uPos;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec3 diff = uPos;\nfloat a = dot(ldir, ldir);\nfloat b = 2 * dot(ldir, diff);\nfloat c = dot(diff, diff) - (uRadius[0] * uRadius[0]);\nfloat i = 0;\nfloat discr = b * b - 4 * a * c;\nif (discr > 0.0) {}\n}\ngl_FragColor = fogColor;\n}";
q.Yn="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform vec4 uParams;\nuniform vec4 uParams2;\nvarying vec2 vTexcoords;\nvoid main(){ \ngl_Position = uProj * (uMV * vec4(aPosition, 1.0));\nvec3 position = (aPosition.xyz - vec3(0.5)) * vec3(uParams.w * 2.0);\nvec4 camPos = uParams2;\nfloat SurfaceRadius = uParams.x;\nfloat AtmosphereRadius = uParams.y;\nfloat StretchAmt = uParams.z;\nfloat camHeight = length(camPos.xyz);\nvec3 camToPos = position - camPos.xyz;\nfloat farDist = length(camToPos);\nfloat altitude = max(0.0,camHeight - SurfaceRadius);\nfloat horizonDist = sqrt((altitude*altitude) + (2.0 * SurfaceRadius * altitude));\nfloat maxDot = horizonDist / camHeight;\naltitude = max(0.0,camHeight - AtmosphereRadius);\nhorizonDist = sqrt((altitude*altitude) + (2.0 * AtmosphereRadius * altitude));\nfloat tweakAmount = 0.1;\nfloat minDot = max(tweakAmount,horizonDist / camHeight);\nfloat minDot2 = ((camHeight - SurfaceRadius) * (1.0 / (AtmosphereRadius  - SurfaceRadius))) - (1.0 - tweakAmount);\nminDot = min(minDot, minDot2);\nfloat posDot = dot(camToPos / farDist,-camPos.xyz / camHeight) - minDot;\nfloat height = posDot * (1.0 / (maxDot - minDot));\nvTexcoords.y = height;\nheight -= min(0.0,minDot2 + ((1.0 + StretchAmt) * minDot2));\nvTexcoords.x = height;\n}";
q.Wn="precision mediump float;\nvarying vec2 vTexcoords;\nuniform vec4 uParams3;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nconst vec4 fogColor2 = vec4(72.0/255.0, 154.0/255.0, 255.0/255.0, 1.0);\nconst vec4 fogColor3 = vec4(0.0/255.0, 0.0/255.0, 0.0/255.0, 1.0);\nvoid main() {\nfloat l = vTexcoords.y;\nif (l > uParams3.z){ discard; } else {\nfloat l2 = clamp((l*l)*0.9+0.1, 0.0, 1.5);\ngl_FragColor = vec4(mix(fogColor2.xyz, fogColor.xyz, l2), l);\nif (l > uParams3.x){ gl_FragColor.xyz = mix(gl_FragColor.xyz, fogColor3.xyz, (l-uParams3.x)*uParams3.y); }\n}}";
q.Mp="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
q.Kp="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 gridColor = mix(texture2D(uSampler, vTexCoord1), texture2D(uSampler, vTexCoord2), uGridBlend);\ngl_FragColor = mix(fogColor, gridColor, vFogFactor);\n}";q.Jp="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
q.Ip="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";q.Rq="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform vec4 uParams;\nuniform vec4 uParams3;\nuniform float uPoints[9*3];\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nvec3 quadPoint(int i1, int i2, int i3, float t, float t2) {\nfloat p1x = uPoints[i1], p1y = uPoints[i1+1], p1z = uPoints[i1+2];\nfloat p3x = uPoints[i3], p3y = uPoints[i3+1], p3z = uPoints[i3+2];\nfloat p2x = 2.0*uPoints[i2]-p1x*0.5-p3x*0.5;\nfloat p2y = 2.0*uPoints[i2+1]-p1y*0.5-p3y*0.5;\nfloat p2z = 2.0*uPoints[i2+2]-p1z*0.5-p3z*0.5;\nreturn vec3(t2*t2*p1x+2.0*t2*t*p2x+t*t*p3x, t2*t2*p1y+2.0*t2*t*p2y+t*t*p3y, t2*t2*p1z+2.0*t2*t*p2z+t*t*p3z); }\nvoid main() {\nvec3 indices = aPosition;\nfloat t = aPosition.y * uParams[2];\nfloat t2 = (1.0-t);\nvec3 p1 = quadPoint(0, 3, 6, t, t2);\nvec3 p2 = quadPoint(9, 9+3, 9+6, t, t2);\nvec3 p3 = quadPoint(18, 18+3, 18+6, t, t2);\nt = aPosition.x * uParams[2];\nt2 = (1.0-t);\nfloat p2x = 2.0*p2.x-p1.x*0.5-p3.x*0.5;\nfloat p2y = 2.0*p2.y-p1.y*0.5-p3.y*0.5;\nfloat p2z = 2.0*p2.z-p1.z*0.5-p3.z*0.5;\nvec4 p = vec4(t2*t2*p1.x+2.0*t2*t*p2x+t*t*p3.x, t2*t2*p1.y+2.0*t2*t*p2y+t*t*p3.y, t2*t2*p1.z+2.0*t2*t*p2z+t*t*p3.z, 1);\nvec4 camSpacePos = uMV * p;\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uParams[1] * camDist);\nvec2 uv = aTexCoord;\nuv.x = uv.x * uParams3[2] + uParams3[0];\nuv.y = uv.y * uParams3[3] + uParams3[1];\nvTexCoord = uv;\n}";
q.Oq="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uParams2;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 c = mix(texture2D(uSampler, vTexCoord), texture2D(uSampler, vTexCoord*8.0), uParams2[2]);\ngl_FragColor = mix(fogColor, c, vFogFactor);\n}";q.Qq="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform vec4 uParams;\nuniform vec4 uParams3;\nuniform float uPoints[9*3];\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nvec3 quadPoint(int i1, int i2, int i3, float t, float t2) {\nfloat p1x = uPoints[i1], p1y = uPoints[i1+1], p1z = uPoints[i1+2];\nfloat p3x = uPoints[i3], p3y = uPoints[i3+1], p3z = uPoints[i3+2];\nfloat p2x = 2.0*uPoints[i2]-p1x*0.5-p3x*0.5;\nfloat p2y = 2.0*uPoints[i2+1]-p1y*0.5-p3y*0.5;\nfloat p2z = 2.0*uPoints[i2+2]-p1z*0.5-p3z*0.5;\nreturn vec3(t2*t2*p1x+2.0*t2*t*p2x+t*t*p3x, t2*t2*p1y+2.0*t2*t*p2y+t*t*p3y, t2*t2*p1z+2.0*t2*t*p2z+t*t*p3z); }\nvoid main() {\nvec3 indices = aPosition;\nfloat t = aPosition.y * uParams[2];\nfloat t2 = (1.0-t);\nvec3 p1 = quadPoint(0, 3, 6, t, t2);\nvec3 p2 = quadPoint(9, 9+3, 9+6, t, t2);\nvec3 p3 = quadPoint(18, 18+3, 18+6, t, t2);\nt = aPosition.x * uParams[2];\nt2 = (1.0-t);\nfloat p2x = 2.0*p2.x-p1.x*0.5-p3.x*0.5;\nfloat p2y = 2.0*p2.y-p1.y*0.5-p3.y*0.5;\nfloat p2z = 2.0*p2.z-p1.z*0.5-p3.z*0.5;\nvec4 p = vec4(t2*t2*p1.x+2.0*t2*t*p2x+t*t*p3.x, t2*t2*p1.y+2.0*t2*t*p2y+t*t*p3.y, t2*t2*p1.z+2.0*t2*t*p2z+t*t*p3.z, 1);\nvec4 camSpacePos = uMV * p;\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uParams[1] * camDist);\nvec2 uv = aTexCoord;\nuv.x = uv.x * uParams3[2] + uParams3[0];\nuv.y = uv.y * uParams3[3] + uParams3[1];\nvTexCoord = uv;\nvTexCoord2 = p.xy;\n}";
q.Nq="precision mediump float;\nuniform sampler2D uSampler;\nuniform vec4 uParams2;\nuniform vec4 uParams4;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nif (length(uParams4.xy - vTexCoord2.xy) > uParams4.z){ discard; }vec4 c = mix(texture2D(uSampler, vTexCoord), texture2D(uSampler, vTexCoord*8.0), uParams2[2]);\ngl_FragColor = mix(fogColor, c, vFogFactor);\n}";q.ds="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform vec4 uParams;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uParams[1] * camDist);\nvTexCoord = aTexCoord;\n}";
q.as="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = mix(fogColor, texture2D(uSampler, vTexCoord), vFogFactor);\n}";q.sn="attribute vec3 aPosition;\nattribute vec2 aTexCoord2;\nuniform mat4 uMV, uProj;\nuniform vec4 uParams;\nuniform vec4 uTransform;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uParams[1] * camDist);\nvTexCoord = vec2(uTransform[0] * aTexCoord2[0] + uTransform[2], uTransform[1] * aTexCoord2[1] + uTransform[3]);\n}";
q.Vr="precision mediump float;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 c = texture2D(uSampler, vTexCoord);\ngl_FragColor = mix(fogColor, c, vFogFactor);\ngl_FragColor[3] = c.w * uAlpha;\n}";q.Wr="precision mediump float;\nuniform sampler2D uSampler;\nuniform sampler2D uSampler2;\nuniform float uAlpha;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec4 c = texture2D(uSampler, vTexCoord);\nvec4 c2 = texture2D(uSampler2, vTexCoord);\ngl_FragColor = mix(fogColor, c, vFogFactor);\ngl_FragColor[3] = c.w * uAlpha * c2.x;\n}";
q.$o="attribute vec3 aPosition;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\n}";q.Zo="precision mediump float;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\ngl_FragColor = vec4(fogColor.xyz, 1.0-vFogFactor);\n}";
q.un="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aNormal;\nuniform mat4 uMV, uProj;\nuniform mat3 uNorm;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvPosition = camSpacePos;\nvNormal = aNormal * uNorm;\n}";
q.cs="precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nuniform mat4 uMaterial;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec3 normal = normalize(vNormal);\nvec3 eyeDir = ldir;\nvec3 refDir = reflect(-ldir, normal);\nfloat specW = pow(max(dot(refDir, eyeDir), 0.0), uMaterial[3][0]);\nfloat diffW = max(dot(normal, ldir), 0.0);\nvec4 lcolor = uMaterial[0]+(uMaterial[1]*diffW)+(uMaterial[2]*specW);\nvec4 tcolor = texture2D(uSampler, vTexCoord);\ngl_FragColor = mix(fogColor, vec4(lcolor.xyz*(1.0/255.0), 1.0) * tcolor, vFogFactor);\n}";
q.bs="precision mediump float;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\nvarying vec3 vNormal;\nuniform mat4 uMaterial;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nvoid main() {\nvec3 ldir = normalize(-vPosition.xyz);\nvec3 normal = normalize(vNormal);\nvec3 eyeDir = ldir;\nvec3 refDir = reflect(-ldir, normal);\nfloat specW = pow(max(dot(refDir, eyeDir), 0.0), uMaterial[3][0]);\nfloat diffW = max(dot(normal, ldir), 0.0);\nvec4 lcolor = uMaterial[0]+(uMaterial[1]*diffW)+(uMaterial[2]*specW);\ngl_FragColor = mix(fogColor, vec4(lcolor.xyz*(1.0/255.0), 1.0), vFogFactor);\n}";
q.$r="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvBarycentric = camSpacePos.xyz;\n}";q.Zr="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\n#ifdef GL_OES_standard_derivatives\nvec3 nx = dFdx(vBarycentric);\nvec3 ny = dFdy(vBarycentric);\nvec3 normal=normalize(cross(nx,ny));\ngl_FragColor = vec4(vec3(max(0.0,normal.z*(204.0/255.0))+(32.0/255.0)),1.0);\n#else\ngl_FragColor = vec4(1.0,1.0,1.0,1.0);\n#endif\n}";
q.wn="attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\nvBarycentric = aBarycentric;\n}";q.vn="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nfloat edgeFactor(){\n#ifdef GL_OES_standard_derivatives\nvec3 d = fwidth(vBarycentric);\nvec3 a3 = smoothstep(vec3(0.0), d*1.0, vBarycentric);\nreturn min(min(a3.x, a3.y), a3.z);\n#else\nfloat a = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);\nreturn a > 0.1 ? 1.0 : smoothstep(0.0,1.0,a*10.0);\n#endif\n}\nvoid main() {\ngl_FragColor = mix(fogColor, vec4( mix(vec3(0.0), texture2D(uSampler, vTexCoord).rgb, edgeFactor()) , 1.0), vFogFactor);\n}";
q.es="precision mediump float;\n#extension GL_OES_standard_derivatives : enable\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(216.0/255.0, 232.0/255.0, 243.0/255.0, 1.0);\nfloat edgeFactor(){\n#ifdef GL_OES_standard_derivatives\nvec3 d = fwidth(vBarycentric);\nvec3 a3 = smoothstep(vec3(0.0), d*1.0, vBarycentric);\nreturn min(min(a3.x, a3.y), a3.z);\n#else\nfloat a = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);\nreturn a > 0.1 ? 1.0 : smoothstep(0.0,1.0,a*10.0);\n#endif\n}\nvoid main() {\nif (edgeFactor() < 0.5){ gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); } else { discard; }}";
q.fs="attribute vec3 aPosition;\nattribute vec2 aTexCoord2;\nattribute vec3 aBarycentric;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying vec3 vBarycentric;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord2;\nvBarycentric = aBarycentric;\n}";q.Yr="attribute vec3 aPosition;\nuniform mat4 uMV, uProj;\nvarying float vDepth;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\n}";
q.Xr="precision mediump float;\nuniform sampler2D uSampler;\nvarying float vDepth;\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";q.Sp="\nattribute vec4 aPosition;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uData;\nuniform vec4 uColor;\nuniform float uDepth;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nvoid main(void){\nint i=int(aPosition.x);\nif(i==0) gl_Position=uProjectionMatrix*vec4(floor(uData[0][0]+0.1),floor(uData[0][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[0][2], uData[0][3]);\nif(i==1) gl_Position=uProjectionMatrix*vec4(floor(uData[1][0]+0.1),floor(uData[1][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[1][2], uData[1][3]);\nif(i==2) gl_Position=uProjectionMatrix*vec4(floor(uData[2][0]+0.1),floor(uData[2][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[2][2], uData[2][3]);\nif(i==3) gl_Position=uProjectionMatrix*vec4(floor(uData[3][0]+0.1),floor(uData[3][1]+0.1),uDepth,1.0), vTexcoords=vec2(uData[3][2], uData[3][3]);\nvec4 c=uColor;\nc.w*=1.0;\nvColor=c;\n}";
q.Rp="precision mediump float;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nuniform sampler2D uSampler;\nvoid main(void){\nvec4 c=texture2D(uSampler, vec2(vTexcoords.x, vTexcoords.y) );\nc*=vColor;\nif(c.w < 0.01){ discard; }\ngl_FragColor = c;\n}";function Fa(a,b,c,d,e,f,g){this.j=a;this.o=a.o;this.Cl=this.J=null;this.u=0;this.Vb=d;this.kf=this.Md=0;this.pk=f||!1;this.Al=g||"linear";this.Ga=null;this.Ic=!1;this.C=c;null!=b&&this.load(b,null,null,e)}
Fa.prototype.D=function(){this.o.deleteTexture(this.J);this.J=null};Fa.prototype.size=function(){return this.u};
function gb(a,b,c,d,e,f){var g=a.o;a.J=g.createTexture();g.bindTexture(g.TEXTURE_2D,a.J);1==f?(f=g.REPEAT,a.pk=!0):f=g.CLAMP_TO_EDGE;g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,f);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,f);f=!1;switch(e){case "linear":g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR);break;case "trilinear":g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR_MIPMAP_LINEAR);g.texParameteri(g.TEXTURE_2D,
g.TEXTURE_MAG_FILTER,g.LINEAR);f=!0;break;default:g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.NEAREST),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.NEAREST)}g.pixelStorei(g.UNPACK_ALIGNMENT,1);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,b,c,0,g.RGBA,g.UNSIGNED_BYTE,d);1==f&&g.generateMipmap(g.TEXTURE_2D);g.bindTexture(g.TEXTURE_2D,null);a.Md=b;a.kf=c;a.u=b*c*4;a.Ic=!0}
function Ha(a,b,c,d){var e=a.o;performance.now();a.J=e.createTexture();e.bindTexture(e.TEXTURE_2D,a.J);1==d?(d=e.REPEAT,a.pk=!0):d=e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,d);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,d);d=!1;a.Al=c;switch(c){case "linear":e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);break;case "trilinear":e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR);e.texParameteri(e.TEXTURE_2D,
e.TEXTURE_MAG_FILTER,e.LINEAR);d=!0;break;default:e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)}1!=q.wq&&(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,b),1==d&&e.generateMipmap(e.TEXTURE_2D));e.bindTexture(e.TEXTURE_2D,null);a.Md=b.naturalWidth;a.kf=b.naturalHeight;a.u=b.naturalWidth*b.naturalHeight*4;a.Ic=!0}
Fa.prototype.load=function(a,b,c,d){this.Ga=q.gb.nj(a,function(){if(null==this.C||1!=this.C.S)Ha(this,this.Ga,this.Al,this.pk),this.Ga=null,b&&b()}.bind(this),function(){(null==this.C||1!=this.C.S)&&c&&c()}.bind(this),null,d)};
Fa.prototype.createFramebuffer=function(a,b){if(null!=this.J){var c=this.o,d=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,d);d.width=a;d.height=b;c.bindTexture(c.TEXTURE_2D,this.J);var e=c.createRenderbuffer();c.bindRenderbuffer(c.RENDERBUFFER,e);c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_COMPONENT16,a,b);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,this.J,0);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.RENDERBUFFER,e);c.bindTexture(c.TEXTURE_2D,
null);c.bindRenderbuffer(c.RENDERBUFFER,null);c.bindFramebuffer(c.FRAMEBUFFER,null);this.Cl=d}};q.ct=1.1;q.lt=1;q.wq=!1;q.ui=null;
function hb(a,b,c,d,e){this.h=e||{};this.C=a;this.Rm=this.Sm=this.Tm=this.ik=null;this.Qd=b;this.Zj=this.Eq=this.Yj=this.S=!1;this.mj=null;this.cm=0;this.Op=[];this.ah=[];this.Km=d;this.lg=this.Rf=null;a=this.Qd.getBoundingClientRect();this.ha=[a.width,a.height];this.ci=[a.width,a.height];this.Aa=!0;this.Pd=[0,1,0];this.j=new pa(b,this.ha,this.h.mk,this.h.nk);this.L=new ib(this,45,2,12E5);q.i.create();q.i.create();q.i.create();q.i.create();this.$f=this.we=this.en=this.ki=this.ig=this.lj=null;this.kg=
1024;this.dd=this.lf=this.Ge=this.He=this.Eg=null;this.se=0;this.xe=Array(512);this.pg=Array(512);b=0;for(a=this.xe.length;b<a;b++)this.xe[b]=[],this.pg[b]=0;this.Zp=[];this.Wk={};this.ba=[0,0,0];this.Zg=[0,0,0];this.xn=this.pl=this.cl=1;this.Pd=[0,0,0];this.rj=[0,0,0];q.i.create();this.Dh=[0,0,100];window.addEventListener("resize",this.di.bind(this),!1);this.j.lc();this.ik=new z(this.j,q.ds,q.as);this.mr=new z(this.j,q.sn,q.Vr);this.nr=new z(this.j,q.sn,q.Wr);this.gr=new z(this.j,q.un,q.bs);this.lr=
new z(this.j,q.un,q.cs);this.ar=new z(this.j,q.$o,q.Zo);this.Tm=new z(this.j,q.wn,q.vn);this.Sm=new z(this.j,q.wn,q.es);this.or=new z(this.j,q.fs,q.vn);this.Pm=new z(this.j,q.$r,q.Zr);new z(this.j,q.Mp,q.Kp);this.fr=new z(this.j,q.Rq,q.Oq);this.er=new z(this.j,q.Qq,q.Nq);new z(this.j,q.fn,q.Jr);this.Qm=new z(this.j,q.fn,q.Mr);this.Zq=new z(this.j,q.Xn,q.Vn);this.$q=new z(this.j,q.Yn,q.Wn);this.Om=new z(this.j,q.Yr,q.Xr);new z(this.j,q.Jp,q.Ip);this.xf=new z(this.j,q.ao,q.Zn);this.dr=new z(this.j,
q.fq,q.eq);this.cr=new z(this.j,q.aq,q.$p);this.yf=new z(this.j,q.cq,q.bq);this.ir=new z(this.j,q.zn,q.yn);this.kr=new z(this.j,q.Fn,q.yn);this.hr=new z(this.j,q.zn,q.qn);this.jr=new z(this.j,q.Fn,q.qn);new z(this.j,q.Xq,q.Wq);this.Rm=new z(this.j,q.Rr,q.Ak);new z(this.j,q.Sr,q.Ak);this.Qa=new z(this.j,q.Sp,q.Rp);this.br=new z(this.j,q.Qp,q.Ak);b=q.Ab.co();this.lj=new Za(this.j,b,null,this.C);b=q.Ab.eo();this.Pq=new Za(this.j,b,null,this.C);b=new Uint8Array(16384);for(a=0;64>a;a++)for(c=0;64>c;c++)d=
4*(64*a+c),1>a||63<=a||1>c||63<=c?(b[d]=255,b[d+1]=255,b[d+2]=255):(b[d]=32,b[d+1]=32,b[d+2]=32),b[d+3]=255;this.ig=new Fa(this.j);gb(this.ig,64,64,b,"trilinear",!0);b=q.Ab.Yk(32,64);this.ki=new Za(this.j,b,null,this.C);b=q.Ab.Yk(128,256);this.xi=new Za(this.j,b,null,this.C);b=this.kg;a=new Uint8Array(b*b*4);this.we=new Fa(this.j);gb(this.we,b,b,a);this.we.createFramebuffer(b,b);this.$f=new Fa(this.j);gb(this.$f,b,b,a);this.$f.createFramebuffer(b,b);this.Bk=new Fa(this.j,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACACAMAAADTa0c4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAABIFJREFUeNrsnNuyqzAIhsP7v/Se6Yxra0L4OUVNCzetVqP5DAQItrVOiLg95739NnfOaR99RDj6esBw+CKZXiMK4PiuBkAcANoHAP3J5fzzAV2jePQIt6f4Ndb/MIChlVcCEFpAACZPfN4KUAF0/ufboDW3AuBMFgBwHTCfg2ftYgDUKBuA1ABuHKvA2P+5XdONIEt7BO2o2MdlAJoTQOsV6GEAswt0Zq/bsBhdeQQkqEDMwmIAnJHzA8i3ASkWRFKBbADyLGB3mlYD6DyhA4DfBlgsBDtirUPcBgC5woStYMgVtgKATWcB6DskKUEkGFLYrGw3+l3ydR16wKbbPDlWp4Xfo9vZwR1jtOMA6GkABrdvNmt1Vluy6pyvxu4Xt62fquyTggCTsIkCoIuv8gAA08w+ATBXAdSRY56xPDFPx/VPWFZp5v65kFMPgFjP70YASMfRsDn01xLPcwkRq1HLMoK647hR8v+nId74MQBjvIbUQePra42ZVXVcBCR3mIY89mYAlNGLflqA0V1seosCQNMg80B0bsLGAIDNwvFyiqu66ngVGGMGVBwyWwIwpty2DqEr/qf0Bq+DbjYkkcr4VUoOxiRjrYn3YY5SC4BQB/cF0Lq4kD1RCJ+tN4g6Jps5zfWu+QmSz9sUABkA0BIAXocmBwCJ99MDIASATkmtLQAIft4IgE/ZDStZ59yQbOQQAGZWYMbZ3FFCAGRHnwHQznegGAE+zwxNi8kALCOgS9tzAC4jYG1Qo0myRm0Ae/z8eleqewBoZLwfUswCsbT1KgBZD6QAzAEoXUe3K+xxVf2uLf5U3nBeMPRyACW/LtrwVX989id3PRQOG5Io6vh9XwC6stHIdGdJozun03lxNlwvH4u6UgDM8/LmJyx7ak12feEebaXmUwCOYJWk1JcYKsl74HL74wAaH93NqkE1FSKXc4cv0AjaPEEPgE4ru/ieWdvzVq/4psG3AYDFHlEAioQCuEgMgPjK1VDrqlkbTABAiQBGK38B0BlBSf9xtiAJQDM4NtDqMlaeyduTtkDjHgAtEQBj5ZGK2QE0aCcMAIxLSw0WVYlGDgOQXWE+afouAM0S398O4Nej3wIQf4cIHSfz9pbWugyep4MFIAFARvspbm8BcE2DOdvWnCJQAWFhJ/hKzh4AaB2A7NxedKmLPc+6PN4cL2S8GYC1QMIEQJvmFsJfxdvkEQAoLV4AogBS8/kNvdXlWe5GKhABvQUAZASDALJffY1XfsrToFXFbvYD1gBo6wC8LR7/uvj9CwHcfWuoUJItsVl5nwWAnhxxqsXatUq0OYCcaS/fkbK61u5H8jwAuUIEZXHNL1Jmub5oSKZWiDR9FttM4HEAigqRpn8TeB2AuWNiByAXSHCGbB7/3qYCfgCgPgADEEskbjCCaJDB/+kR6wP4P1Obl8jsBwDUB4yAxqKkthaATjX0KmCtDyCxm+yIMLjCbwBgrg94FYC3h8vLPPmfAVBSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlLy9fJPgAEAvWMULbGsSjwAAAAASUVORK5CYII=",
this.C,null,!0);b=new Uint8Array(2048);for(a=0;8>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=255;b=this.j.o;this.He=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,this.He);b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,0,1,2,0,0,1,3,0,0,1]),b.STATIC_DRAW);this.He.ka=4;this.He.ca=4;this.Ge=b.createBuffer();b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,this.Ge);b.bufferData(b.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,2,1,0,3,2]),b.STATIC_DRAW);this.Ge.ka=1;this.Ge.ca=6;b=new Uint8Array(1024);
for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=255,b[d+1]=0,b[d+2]=0,b[d+3]=255;this.Eg=new Fa(this.j);gb(this.Eg,16,16,b);b=new Uint8Array(1024);for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=255,b[d+1]=255,b[d+2]=255,b[d+3]=255;this.Te=new Fa(this.j);gb(this.Te,16,16,b);b=new Uint8Array(1024);for(a=0;16>a;a++)for(c=0;16>c;c++)d=4*(16*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=255;this.Yg=new Fa(this.j);gb(this.Yg,16,16,b);e="............................................................ .....xxxxx.......................xxxxx...................... .....xxxxx.......................xxxxx...................... .....xxxxx.......................xxxxx...................... xxxxxxxxxxxxxxxx............xxxxxxxxxxxxxxxx................ xxxxxxxxxxxxxxxx............xxxxxxxxxxxxxxxx................ ............................................................".split(" ");
b=new Uint8Array(2048);for(a=0;8>a;a++)for(c=0;64>c;c++)d=4*(64*a+c),b[d]=0,b[d+1]=0,b[d+2]=0,b[d+3]=0;a=0;for(var f=e.length;a<f;a++){var g=e[a];c=0;for(var k=g.length;c<k;c++)d=4*(64*a+c),"."!=g.charAt(c)&&(b[d]=255,b[d+1]=255,b[d+2]=255,b[d+3]=255)}this.vj=new Fa(this.j);gb(this.vj,64,8,b,"linear",!0);this.Wg=new na(this.j);this.dd=new Ca(this.j,this.C);this.ei=new Float32Array(96);this.ek=new $a(this.j,this.C,!0,64,!0,8);this.Nm=new $a(this.j,this.C,!1,64,!0,8);b=Array(196605);for(a=0;196605>
a;a+=9)b[a]=1,b[a+1]=0,b[a+2]=0,b[a+3]=0,b[a+4]=1,b[a+5]=0,b[a+6]=0,b[a+7]=0,b[a+8]=1;a=this.j.o;q.We=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,q.We);a.bufferData(a.ARRAY_BUFFER,new Float32Array(b),a.STATIC_DRAW);q.We.ka=3;q.We.ca=b.length/3;1==window.MelownMobile_&&null!=this.j.La&&(this.j.La.style.width="100%",this.j.La.style.height="100%");b=window.MelownScreenScaleFactor_;kb(this,Math.floor(this.ha[0]*b),Math.floor(this.ha[1]*b))}
hb.prototype.di=function(){if(1!=this.S){var a=this.Qd.getBoundingClientRect();kb(this,Math.floor(a.width),Math.floor(a.height));this.Km&&this.Km()}};
hb.prototype.D=function(){1!=this.S&&(this.S=!0,null!=this.Sq&&this.Sq.D(),this.lj&&this.lj.D(),this.ig&&this.ig.D(),this.ki&&this.ki.D(),this.en&&this.en.D(),this.we&&this.we.D(),this.$f&&this.$f.D(),this.Eg&&this.Eg.D(),this.Te&&this.Te.D(),this.Yg&&this.Yg.D(),this.vj&&this.vj.D(),this.Bk&&this.Bk.D(),this.xi&&this.xi.D(),this.Wg&&this.Wg.D(),this.dd&&this.dd.D(),this.ek&&this.ek.D(),this.Nm&&this.Nm.D(),this.j.D())};
function kb(a,b,c){var d=a.L;d.Xe=b/c;d.Aa=!0;a.ha=[b,c];a.ci=[b,c];a.j.resize(a.ha,void 0);a.j.clear(!0,!1);1!=a.Eq&&1!=a.Yj&&1!=a.Zj&&ob(a);d=[];d[0]=2/b;d[1]=0;d[2]=0;d[3]=0;d[4]=0;d[5]=-2/c;d[6]=0;d[7]=0;d[8]=0;d[9]=0;d[10]=1;d[11]=0;d[12]=.5*-b*d[0];d[13]=.5*-c*d[5];d[14]=0;d[15]=1;a.lf=d}function Va(a,b,c){b=q.i.ai(c,[b[0],b[1],b[2],1]);return 0!=b[3]?(c=[0,0,0],c[0]=.5*(b[0]/b[3]+1)*a.ha[0],c[1]=.5*(-(b[1]/b[3])+1)*a.ha[1],c[2]=b[2]/b[3],c):[0,0,0]}
hb.prototype.ff=function(a,b){if(null==this.L)return[0,0,1];var c=[2*a/this.ha[0]-1,1-2*b/this.ha[1],1],d=[c[0],c[1],-1,1],e;q.i.create();e=q.i.inverse(pb(this.L));c=[0,0,0,0];q.i.ai(e,d,c);c[2]=-1;c[3]=0;q.i.create();d=q.i.inverse(qb(this.L));e=[0,0,0,0];q.i.ai(d,c,e);return e=q.O.normalize([e[0],e[1],e[2]])};
function rb(a,b){var c=a.j.o;switch(b){case "base":var d=a.ci[0],e=a.ci[1];c.clearColor(0,0,0,1);Ba(a.j,null);c=a.L;c.Xe=d/e;c.Aa=!0;a.ha=[d,e];a.j.resize(a.ha,!0);a.L.update();a.Yj=!1;break;case "depth":Ba(a.j,a.we),a.ci=[a.ha[0],a.ha[1]],c.clearColor(1,1,1,1),c.enable(c.DEPTH_TEST),d=a.kg,c.viewport(0,0,d,d),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),a.ha=[d,d],a.j.clear(),a.L.update(),a.Yj=!0}}function Ta(a,b){return 1E-4*(b[0]+b[1]*a.pl+b[2]*a.xn)}
hb.prototype.sk=function(a,b,c){var d=this.j.o,e=this.ha[0],f=this.ha[1],g=new Uint8Array(e*f*4);d.readPixels(0,0,e,f,d.RGBA,d.UNSIGNED_BYTE,g);for(var d=new Uint8Array(e*f*4),k=0,h=0;h<f;h++){index2_=(f-1-h)*e*4;for(var m=0;m<e;m++)d[k]=g[index2_],d[k+1]=g[index2_+1],d[k+2]=g[index2_+2],d[k+3]=g[index2_+3],k+=4,index2_+=4}g=document.createElement("canvas");g.width=e;g.height=f;k=g.getContext("2d");e=k.createImageData(e,f);e.data.set(d);k.putImageData(e,0,0);c=c||"jpg";if("file"==a){for(var n=document.createElement("a"),
f=g.toDataURL("image/"+c),f=atob(f.split(",")[1]),d=new ArrayBuffer(f.length),k=new Uint8Array(d),h=0;h<f.length;h++)k[h]=f.charCodeAt(h);var p=URL.createObjectURL(new Blob([d],{type:c}));n.href=p;n.download=b;document.body.appendChild(n);n.click();setTimeout(function(){document.body.removeChild(n);window.URL.revokeObjectURL(p)},0)}"tab"==a&&window.open(g.toDataURL("image/"+type_));return e};
function Pa(a,b,c,d){var e=b+"*"+c+"*"+d,f=a.Wk[e];null==f&&(f=new Fa(a.j,b,a.C,null,null,d,c),a.Wk[e]=f);return f}function S(a){this.l=a;this.j=a.j}l=S.prototype;l.clear=function(a){null!=a&&this.j.clear(a.clearDepth||!0,a.clearColor||!1,a.color||[255,255,255,255],null!=a.depth?a.depth:1);return this};
l.jc=function(a){return null==a||"object"!==typeof a?this:this.j.jc({vc:null!=a.blend?a.blend:!1,Gf:null!=a.stencil?a.stencil:!1,ut:null!=a.zoffset?a.zoffset:0,Nd:null!=a.zwrite?a.zwrite:!0,je:null!=a.ztest?a.ztest:!0,Nf:null!=a.zequal?a.zequal:!0,$c:null!=a.culling?a.culling:!0})};l.ec=function(a){null!=a&&this.j.ec(a);return this};
l.createTexture=function(a){if(null==a||"object"!==typeof a)return null;var b=a.source;if(null==b)return null;var c=a.filter||"linear",d=a.repeat||!1;if(b instanceof Uint8Array){var e=a.width;a=a.height;if(e&&a){var f=new Fa(this.j);gb(f,e,a,b,c,d);return f}}return b instanceof Image?(f=new Fa(this.j),Ha(f,b,c,d),f):null};l.wr=function(a){a&&a.D();return this};
l.to=function(a){return null==a||"object"!==typeof a?null:new Za(this.j,{U:a.vertices,Pg:a.uvs,Jn:a.normals,ts:a["vertex-size"],ps:a["uv-size"],os:a["normal-size"]||3,tt:a["vertex-attr"],st:a["uv-attr"],rt:a["normal-attr"],v:a.bbox},0,this.l.C)};l.tr=function(a){a&&a.D();return this};l.createShader=function(a){if(null==a||"object"!==typeof a)return null;var b=a["vertex-shader"];a=a["fragment-shader"];if(null!=b&&a)return new z(this.j,b,a)};l.vr=function(a){null!=a&&null!=a.D&&resource.D();return this};
l.Sn=function(){return this};l.io=function(){return this};
l.Oo=function(a){if(null==a||"object"!==typeof a||null==!a.mesh||!a["shader-variables"])return this;var b=a.vertex||"aPosition",c=a.uv||"aTexCoord",d=a.normal||"aNormal",e=a["shader-variables"],f=a.shader||"textured",g=this.l,k=a.mesh;a=a.texture;var h=qb(g.L),m=pb(g.L),n=g.se;if("string"===typeof f)switch(f){case "hit":e.uMV||(e.uMV=["mat4",h]);e.uProj||(e.uProj=["mat4",m]);a=d=c=null;f=g.Om;break;case "shaded":c=null;case "textured":case "textured-and-shaded":e.uMV||(e.uMV=["mat4",h]),e.uProj||
(e.uProj=["mat4",m]),e.uFogDensity||(e.uFogDensity=["float",n]),d="textured"==f?null:"aNormal",f="textured"==f?g.ik:"shaded"==f?g.gr:g.lr}h=[b];c&&h.push(c);d&&h.push(d);g.j.useProgram(f,h);for(var p in e)if(h=e[p],2==h.length)switch(h[0]){case "floatArray":fb(f,p,h[1]);break;case "float":eb(f,p,h[1]);break;case "mat3":cb(f,p,h[1]);break;case "mat4":Sa(f,p,h[1]);break;case "vec2":Ua(f,p,h[1]);break;case "vec3":db(f,p,h[1]);break;case "vec4":Ra(f,p,h[1]);break;case "sampler":za(f,p,h[1])}a&&g.j.bindTexture(a);
k.Ua(f,b,c,d,null);return this};l.drawImage=function(a){if(null==a||"object"!==typeof a||null==a.texture||null==a.rect)return this;var b=a.rect,c=a.color||[255,255,255,255],d=null!=a.depth?a.depth:0,e=null!=a["depth-test"]?a["depth-test"]:!1,f=null!=a.blend?a.blend:!1,g=null!=a["write-depth"]?a["write-depth"]:!1,k=null!=a["use-state"]?a["use-state"]:!1;c[0]*=1/255;c[1]*=1/255;c[2]*=1/255;c[3]*=1/255;this.l.drawImage(b[0],b[1],b[2],b[3],a.texture,c,d,e,f,g,k);return this};
l.Ii=function(a){if(null==a||"object"!==typeof a||null==a.texture||null==a.mvp)return this;var b=a.mvp,c=a.color||[255,255,255,255],d=null!=a["depth-test"]?a["depth-test"]:!1,e=null!=a.blend?a.blend:!1,f=null!=a["write-depth"]?a["write-depth"]:!1,g=null!=a["use-state"]?a["use-state"]:!1;c[0]*=1/255;c[1]*=1/255;c[2]*=1/255;c[3]*=1/255;this.l.Ii(b,a.texture,c,d,e,f,g);return this};
l.pe=function(a){if(null==a||"object"!==typeof a||null==a.points)return this;var b=a.points,c=a.color||[255,255,255,255],d=a.size||2,e=null!=a["depth-test"]?a["depth-test"]:!1,f=null!=a.blend?a.blend:!1,g=null!=a["write-depth"]?a["write-depth"]:!1;a=null!=a["use-state"]?a["use-state"]:!1;c[0]*=1/255;c[1]*=1/255;c[2]*=1/255;c[3]*=1/255;this.l.pe(b,d,c,e,f,g,a);return this};l.Lo=function(){return this};l.df=function(){return this};
l.Go=function(a){if(null==a||"object"!==typeof a)return this;var b=a.text,c=a.coords;if(!b||!c)return this;var d=a.color||[255,255,255,255],e=a.size||16,f=a.depth;a=a["use-state"]||!1;d[0]*=1/255;d[1]*=1/255;d[2]*=1/255;d[3]*=1/255;sb(this.l,c[0]-.5*tb(e,b),c[1],e,b,d,f,a);return this};l.sk=function(a,b,c){return this.l.sk(a,b,c)};l.te=function(a,b){return Va(this.l,a,b)};l.gp=function(){return this.l.ha.slice()};l.nd=function(a){this.l.nd(a);return this};l.md=function(a,b){this.l.md(a,b);return this};
l.Vd=function(a){return this.l.Vd(a,value_)};S.prototype.clear=S.prototype.clear;S.prototype.createState=S.prototype.jc;S.prototype.setState=S.prototype.ec;S.prototype.createTexture=S.prototype.createTexture;S.prototype.removeTexture=S.prototype.wr;S.prototype.createMesh=S.prototype.to;S.prototype.removeMesh=S.prototype.tr;S.prototype.createshader=S.prototype.Gs;S.prototype.removeResource=S.prototype.vr;S.prototype.addJob=S.prototype.Sn;S.prototype.clearJobs=S.prototype.io;S.prototype.drawMesh=S.prototype.Oo;
S.prototype.drawImage=S.prototype.drawImage;S.prototype.drawBillboard=S.prototype.Ii;S.prototype.drawLineString=S.prototype.pe;S.prototype.drawJobs=S.prototype.Lo;S.prototype.drawBBox=S.prototype.df;S.prototype.drawDebugText=S.prototype.Go;S.prototype.getCanvasCoords=S.prototype.te;S.prototype.getCanvasSize=S.prototype.gp;S.prototype.setConfigParams=S.prototype.nd;S.prototype.setConfigParam=S.prototype.md;S.prototype.getConfigParam=S.prototype.Vd;S.prototype.saveScreenshot=S.prototype.sk;
function Na(a,b,c,d,e,f){this.N=[];this.la=[];this.N[0]=null!=a?a:Number.POSITIVE_INFINITY;this.N[1]=null!=b?b:Number.POSITIVE_INFINITY;this.N[2]=null!=c?c:Number.POSITIVE_INFINITY;this.la[0]=null!=d?d:Number.NEGATIVE_INFINITY;this.la[1]=null!=e?e:Number.NEGATIVE_INFINITY;this.la[2]=null!=f?f:Number.NEGATIVE_INFINITY;ub(this)}Na.prototype.clone=function(){return new Na(this.N[0],this.N[1],this.N[2],this.la[0],this.la[1],this.la[2])};function yb(a,b){return a.la[b]-a.N[b]}
function ub(a){a.Wh=Math.abs(Math.max(a.la[0]-a.N[0],a.la[1]-a.N[1],a.la[2]-a.N[2]))}Na.prototype.Bi=function(a){return null!=a?(a[0]=.5*(this.N[0]+this.la[0]),a[1]=.5*(this.N[1]+this.la[1]),a):[.5*(this.N[0]+this.la[0]),.5*(this.N[1]+this.la[1]),.5*(this.N[2]+this.la[2])]};
function ib(a,b,c,d){this.qa=a;this.oa=[0,0,0];this.Ce=[0,0,0];this.Xe=1;this.Ti=b;this.tf=c;this.qe=d;this.rk=!1;this.sf=q.i.create();this.Af=q.i.create();this.ee=q.i.create();this.Um=q.i.create();this.xg=q.i.create();this.Dm=q.i.create();this.Cc=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];this.$n=[[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1]];this.Zm=[0,0,0,0];this.Aa=!0}l=ib.prototype;l.setPosition=function(a){this.oa=a;this.Aa=!0};
l.setOrientation=function(a){this.rk=!1;this.Ce=a;this.Aa=!0};l.clone=function(a){a=new ib(this.qa,null!=a?a:this.Wd(),this.tf,this.qe);a.setPosition(this.zd());a.setOrientation(this.Mb());a.Xe=this.Xe;a.Aa=!0;a.update();return a};l.zd=function(){return[this.oa[0],this.oa[1],this.oa[2]]};l.Mb=function(){return[this.Ce[0],this.Ce[1],this.Ce[2]]};l.Wd=function(){return this.Ti};function qb(a){a.Aa&&a.update();return a.sf}function pb(a){a.Aa&&a.update();return a.ee}
function zb(a){a.Aa&&a.update();return a.xg}function Ab(a,b){a.Aa&&a.update();q.i.cb(a.sf,b,a.Zm);var c=q.O.length(a.Zm);return c<a.tf?[Number.POSITIVE_INFINITY,c]:[a.ee[0]/c,c]}function Bb(a,b,c){a.Aa&&a.update();a=a.Cc;var d=b.length;if(c){var e=c[0],f=c[1];c=c[2]}else c=f=e=0;for(var g=q.Qe.rl,k=0;6>k;k++){for(var h=!0,m=a[k],n=0;n<d;n+=3)if(0<=g(m,b,n,e,f,c)){h=!1;break}if(h)return!1}return!0}
l.Xc=function(a,b){this.Aa&&this.update();var c=a.N,d=a.la,e=this.$n;if(b)var f=c[0]-b[0],g=c[1]-b[1],c=c[2]-b[2],k=d[0]-b[0],h=d[1]-b[1],m=d[2]-b[2];else f=c[0],g=c[1],c=c[2],k=d[0],h=d[1],m=d[2];d=e[0];d[0]=f;d[1]=g;d[2]=c;d=e[1];d[0]=f;d[1]=g;d[2]=m;d=e[2];d[0]=f;d[1]=h;d[2]=c;d=e[3];d[0]=f;d[1]=h;d[2]=m;d=e[4];d[0]=k;d[1]=g;d[2]=c;d=e[5];d[0]=k;d[1]=g;d[2]=m;d=e[6];d[0]=k;d[1]=h;d[2]=c;d=e[7];d[0]=k;d[1]=h;d[2]=m;f=q.Qe.ql;g=this.Cc;for(c=0;6>c;c++){k=!0;h=g[c];for(d=0;8>d;d++)if(0<=f(h,e[d])){k=
!1;break}if(k)return!1}return!0};
l.update=function(a){this.rk||(q.i.multiply(q.dc(2,q.Oa(-this.Ce[2])),q.dc(0,q.Oa(-this.Ce[1]-90)),this.Af),q.i.multiply(this.Af,q.dc(2,q.Oa(-this.Ce[0])),this.Af));q.i.multiply(this.Af,q.tc(-this.oa[0],-this.oa[1],-this.oa[2]),this.sf);this.ee=1==this.Hq?q.Iq(this.Mn,this.Xe,this.tf,this.qe):q.Kq(this.Ti,this.Xe,this.tf,this.qe);q.i.set(this.ee,this.Um);if(a){a=1+a;var b=this.ee;b[2]*=a;b[6]*=a;b[10]*=a;b[15]*=a}q.i.multiply(this.ee,this.sf,this.xg);q.i.multiply(this.Um,this.sf,this.Dm);this.Cc[0]=
[0,0,1,1];this.Cc[1]=[0,0,-1,1];this.Cc[2]=[1,0,0,1];this.Cc[3]=[-1,0,0,1];this.Cc[4]=[0,1,0,1];this.Cc[5]=[0,-1,0,1];a=q.i.create();q.i.qd(this.Dm,a);for(b=0;6>b;b++)this.Cc[b]=q.i.ai(a,this.Cc[b]);this.Aa=!1};
function ob(a,b,c){if(b){var d=q.i.create();q.i.multiply(q.Bf(2,2,2),q.tc(-.5,-.5,-.5),d);var e=q.i.create(),f=a.L.zd();q.i.multiply(q.tc(f[0],f[1],f[2]-400),q.$m(Math.min(.9*a.L.qe,6E5)),e);f=q.i.create();q.i.multiply(zb(a.L),e,f);q.i.multiply(f,d,f);a.j.useProgram(c,["aPosition","aTexCoord"]);a.j.bindTexture(b);za(c,"uSampler",0);Sa(c,"uMVP",f);a.j.o.depthMask(!1);a.ki.Ua(c,"aPosition","aTexCoord");a.j.o.depthMask(!0);a.j.o.enable(a.j.o.CULL_FACE)}}
function Cb(a,b,c,d,e,f,g,k){var h=a.j.o,m=q.i.create();q.i.multiply(q.Bf(2,2,2),q.tc(-.5,-.5,-.5),m);var n=[b[0],b[1],b[2]];b=q.i.create();q.i.multiply(q.tc(n[0],n[1],n[2]),q.$m(null!=c?c:1.5),b);c=q.i.create();q.i.multiply(qb(a.L),b,c);q.i.multiply(c,m,c);m=pb(a.L);b=[0,0,0,0,0,0,0,0,0];q.i.An(c,b);q.Kc.qd(b);a.j.useProgram(d,["aPosition"]);a.j.bindTexture(a.Eg);za(d,"uSampler",0);Sa(d,"uProj",m);Sa(d,"uMV",c);k&&(cb(d,"uNorm",b),h.cullFace(h.FRONT));e&&Ra(d,"uParams",e);f&&Ra(d,"uParams2",f);f&&
Ra(d,"uParams3",g);a.xi.Ua(d,"aPosition",null);k&&h.cullFace(h.BACK)}
hb.prototype.pe=function(a,b,c,d,e,f,g){var k=this.j.o,h=0,m=a.length;if(32<m)for(var n=0;n<m;n+=31)this.pe(a.slice(n,n+32),b,c,d,e,f,g);else{for(n=0;n<m;n++){var p=a[n];this.ei[h]=p[0];this.ei[h+1]=p[1];this.ei[h+2]=p[2]||0;h+=3}1!=g&&(1!=d&&k.disable(k.DEPTH_TEST),1==e&&(k.blendEquationSeparate(k.FUNC_ADD,k.FUNC_ADD),k.blendFuncSeparate(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA,k.ONE,k.ONE_MINUS_SRC_ALPHA),k.enable(k.BLEND)),!1===f&&k.depthMask(!1),k.disable(k.CULL_FACE));this.j.useProgram(this.yf,["aPosition"]);
Sa(this.yf,"uMVP",this.lf);db(this.yf,"uScale",[2/this.ha[0],2/this.ha[1],.5*b]);Ra(this.yf,"uColor",null!=c?c:[255,255,255,255]);db(this.yf,"uPoints",this.ei);this.ek.Ua(this.yf,"aPosition",m);1!=g&&(1!=d&&k.enable(k.DEPTH_TEST),1==e&&k.disable(k.BLEND),!1===f&&k.depthMask(!1),k.enable(k.CULL_FACE))}};
hb.prototype.drawImage=function(a,b,c,d,e,f,g,k,h,m,n){if(null!=e&&null!=this.lf){var p=this.j.o;1!=n&&(1!=k&&p.disable(p.DEPTH_TEST),1==h&&(p.blendEquationSeparate(p.FUNC_ADD,p.FUNC_ADD),p.blendFuncSeparate(p.SRC_ALPHA,p.ONE_MINUS_SRC_ALPHA,p.ONE,p.ONE_MINUS_SRC_ALPHA),p.enable(p.BLEND)),!1===m&&p.depthMask(!1),p.disable(p.CULL_FACE));this.j.useProgram(this.Qa,["aPosition"]);this.j.bindTexture(e);e=this.He;p.bindBuffer(p.ARRAY_BUFFER,e);p.vertexAttribPointer(this.Qa.getAttribute("aPosition"),e.ka,
p.FLOAT,!1,0,0);e=this.Ge;p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,e);Sa(this.Qa,"uProjectionMatrix",this.lf);Sa(this.Qa,"uData",[a,b,0,0,a+c,b,1,0,a+c,b+d,1,1,a,b+d,0,1]);Ra(this.Qa,"uColor",null!=f?f:[1,1,1,1]);eb(this.Qa,"uDepth",null!=g?g:0);p.drawElements(p.TRIANGLES,e.ca,p.UNSIGNED_SHORT,0);1!=n&&(!1===m&&p.depthMask(!0),1!=k&&p.enable(p.DEPTH_TEST),1==h&&p.disable(p.BLEND),p.enable(p.CULL_FACE))}};
hb.prototype.Ii=function(a,b,c,d,e,f,g){var k=this.j.o;1!=g&&(1!=d&&k.disable(k.DEPTH_TEST),1==e&&(k.blendEquationSeparate(k.FUNC_ADD,k.FUNC_ADD),k.blendFuncSeparate(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA,k.ONE,k.ONE_MINUS_SRC_ALPHA),k.enable(k.BLEND)),!1===f&&k.depthMask(!1),k.disable(k.CULL_FACE));this.j.useProgram(this.Qa,["aPosition","aTexCoord"]);this.j.bindTexture(b);za(this.Qa,"uSampler",0);b=this.He;k.bindBuffer(k.ARRAY_BUFFER,b);k.vertexAttribPointer(this.Qa.getAttribute("aPosition"),b.ka,k.FLOAT,
!1,0,0);b=this.Ge;k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,b);Sa(this.Qa,"uProjectionMatrix",a);Sa(this.Qa,"uData",[0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1]);Ra(this.Qa,"uColor",null!=c?c:[1,1,1,1]);eb(this.Qa,"uDepth",0);k.drawElements(k.TRIANGLES,b.ca,k.UNSIGNED_SHORT,0);1!=g&&(!1===f&&k.depthMask(!0),1!=d&&k.enable(k.DEPTH_TEST),1==e&&k.disable(k.BLEND),k.enable(k.CULL_FACE))};
function sb(a,b,c,d,e,f,g,k){if(null!=a.lf){var h=a.j.o;1!=k&&(h.disable(h.CULL_FACE),null==g?h.disable(h.DEPTH_TEST):(h.depthFunc(h.LEQUAL),h.enable(h.DEPTH_TEST)));a.j.useProgram(a.Qa,["aPosition"]);a.j.bindTexture(a.Bk);var m=a.He;h.bindBuffer(h.ARRAY_BUFFER,m);h.vertexAttribPointer(a.Qa.getAttribute("aPosition"),m.ka,h.FLOAT,!1,0,0);m=a.Ge;h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,m);Sa(a.Qa,"uProjectionMatrix",a.lf);Ra(a.Qa,"uColor",f);eb(a.Qa,"uDepth",null!=g?g:0);f=d-1;var n=Math.round(.5*d),p=1/
256,w=tb(d,e)+2,r=0,t=(r&15)<<4,u=r>>4<<4;Sa(a.Qa,"uData",[b-2,c-2,t*p,.0078125*u,b-2+w,c-2,(t+15)*p,.0078125*u,b-2+w,c+d+1,(t+15)*p,.0078125*(u+15),b-2,c+d+1,t*p,.0078125*(u+15)]);h.drawElements(h.TRIANGLES,m.ca,h.UNSIGNED_SHORT,0);for(var w=0,x=e.length;w<x;w++){r=e.charCodeAt(w)-32;t=(r&15)<<4;u=r>>4<<4;switch(r){case 12:case 14:case 27:case 28:case 64:case 73:case 76:case 84:Sa(a.Qa,"uData",[b,c,t*p,.0078125*u,b+n,c,(t+8)*p,.0078125*u,b+n,c+d,(t+8)*p,.0078125*(u+16),b,c+d,t*p,.0078125*(u+16)]);
b+=n;break;default:Sa(a.Qa,"uData",[b,c,t*p,.0078125*u,b+f,c,(t+15)*p,.0078125*u,b+f,c+d,(t+15)*p,.0078125*(u+16),b,c+d,t*p,.0078125*(u+16)]),b+=f}h.drawElements(h.TRIANGLES,m.ca,h.UNSIGNED_SHORT,0)}1!=k&&(h.enable(h.CULL_FACE),null==g&&h.enable(h.DEPTH_TEST))}}function tb(a,b){for(var c=a-1,d=Math.round(.5*a),e=0,f=0,g=b.length;f<g;f++)switch(b.charCodeAt(f)-32){case 12:case 14:case 27:case 28:case 64:case 73:case 76:case 84:e+=d;break;default:e+=c}return e}
function Db(a){var b=a.j,c=b.o;c.stencilMask(255);c.clear(c.STENCIL_BUFFER_BIT);c.stencilFunc(c.EQUAL,0,255);c.stencilOp(c.KEEP,c.KEEP,c.INCR);q.ui=a.j.jc({vc:!0,Gf:!0,$c:!1});q.Sk=a.j.jc({vc:!0,$c:!1});var d=[1/a.ha[0],1/a.ha[1]],e=513,f=0;0<a.ah.length&&(e=a.ah[0],f++);for(var g=0,k=a.xe.length;g<k;g++){var h=a.pg[g],m=a.xe[g];0<h&&g>=e&&(c.clear(c.STENCIL_BUFFER_BIT),a.ah.length>f?(e=a.ah[f],f++):e=513);for(var n=0;n<h;n++)q.Ko(b,c,a,m[n],d)}}
function Eb(a){for(var b=0,c=a.xe.length;b<c;b++){for(var d=a.pg[b],e=a.xe[b],f=0;f<d;f++)e[f]=null;a.pg[b]=0}}q.Ab={};q.Ab.Df=function(a,b,c,d,e){a[e]=b[0];a[e+1]=b[1];a[e+2]=b[2];a[e+3]=c[0];a[e+4]=c[1];a[e+5]=c[2];a[e+6]=d[0];a[e+7]=d[1];a[e+8]=d[2]};q.Ab.Cf=function(a,b,c,d,e){a[e]=b[0];a[e+1]=b[1];a[e+2]=c[0];a[e+3]=c[1];a[e+4]=d[0];a[e+5]=d[1]};
q.Ab.co=function(){var a=5;a--;for(var b=q.Ab,c=a*a*2,d=new Float32Array(9*c),c=new Float32Array(6*c),e=1*a,f=0,g=0,k=0;k<a;k++)for(var h=0;h<a;h++){var m=h*e,n=(h+1)*e,p=k*e,w=(k+1)*e;b.Df(d,[m,p,0],[n,p,0],[n,w,0],f);b.Cf(c,[m,p],[n,p],[n,w],g);f+=9;g+=6;b.Df(d,[n,w,0],[m,w,0],[m,p,0],f);b.Cf(c,[n,w],[m,w],[m,p],g);f+=9;g+=6}return{v:new Na(0,0,0,1,1,1),U:d,Pg:c}};
q.Ab.eo=function(){var a=16;a--;for(var b=q.Ab,c=a*a*2,d=new Float32Array(9*c),c=new Float32Array(6*c),e=1/a,f=0,g=0,k=0;k<a;k++)for(var h=0;h<a;h++){var m=h,n=h+1,p=k,w=k+1,r=h*e,t=(h+1)*e,u=k*e,x=(k+1)*e;b.Df(d,[m,p,0],[m,w,0],[n,w,0],f);b.Cf(c,[r,u],[r,x],[t,x],g);f+=9;g+=6;b.Df(d,[n,w,0],[n,p,0],[m,p,0],f);b.Cf(c,[t,x],[t,u],[r,u],g);f+=9;g+=6}return{v:new Na(0,0,0,1,1,1),U:d,Pg:c}};
q.Ab.li=function(a,b){b*=Math.PI;a*=2*Math.PI;return[Math.cos(a)*Math.sin(b)*.5+.5,Math.sin(a)*Math.sin(b)*.5+.5,.5*Math.cos(b)+.5]};q.Ab.Yk=function(a,b){for(var c=q.Ab,d=a*b*2,e=new Float32Array(9*d),d=new Float32Array(6*d),f=0,g=0,k=0;k<a;k++)for(var h=0;h<b;h++)c.mq(h/b,k/a,(h+1)/b,(k+1)/a,e,f,d,g),f+=18,g+=12;return{v:new Na(0,0,0,1,1,1),U:e,Pg:d}};
q.Ab.mq=function(a,b,c,d,e,f,g,k){var h=q.Ab,m=[a,b],n=h.li(a,d),p=[a,d],w=h.li(c,b),r=[c,b],t=h.li(c,d);c=[c,d];h.Df(e,n,h.li(a,b),w,f);h.Cf(g,p,m,r,k);h.Df(e,w,t,n,f+9);h.Cf(g,r,c,p,k+6)};q.We=null;
function Fb(a,b,c,d){this.h=d||{};this.nd(d);this.C=a;this.wb=this.C.dj();this.Qb=b;this.so=a.so;this.S=!1;this.In=0;this.h=d||{};this.zj=!1;this.Mq=new Float32Array(27);c=c.trim();this.Fa=q.ra.mh(c);this.Ub=q.ra.rh(c);this.gc=q.ra.ph(c);this.oa=new Gb(this,["obj",0,0,"fix",0,0,0,0,0,0]);this.tj=this.oa.clone();this.Ke={};this.Ra={};this.F={};this.Ei={};this.fb=[];this.Ib={};this.cg={};this.Wa=[];this.Ta=[];this.mi=[];this.ld=[];this.Hb=Array(500);this.Wi=[];this.dm=null;this.Tf=new Hb(0,{});this.jl=
"";this.yg=[];this.cd=this.Kf=this.Kb=0;this.Eo=["base","hit"];this.Zf=[];this.ih=!1;this.Vc={mg:{},sh:{},Th:{}};this.ae=!1;this.Wb=new Ib(this,1048576*this.h.Mh);this.rc=new Ib(this,1048576*this.h.Jh);this.Mc=new Ib(this,1048576*this.h.Ph);Jb(this);Qb(this);this.Zb=new Rb(this,this.h.Kh);this.l=this.C.l;this.L=this.l.L;this.bl=this.ic=10;this.ba=[0,0,0];this.Pd=[0,0,1];this.sj=this.Qf=this.ud=0;this.m=new Sb(this);this.ji=new Tb(this);this.A={L:null,Rd:null,fh:null,be:null,Hk:null,Gk:null,Jg:!1,
Ig:!1,Jf:!1,If:!1,wk:this.h.Rh,Jo:!1,vl:!1,ul:!1,Ki:!1,tl:!1,Li:!1,fa:30,Hr:!1,om:0,Ir:0,om:0,Ic:[],yj:0,Gh:0};var e;a=this.Qb.srses;this.Ke={};if(null==a)e=!1;else{for(e in a)b=new Ub(this,e,a[e]),this.Ke[e]=b;e=!0}e&&(e=this.Qb.referenceFrame,null==e?e=!1:(this.Ra=new Vb(this,e),e=0==this.Ra.Kd?!1:!0));if(e)if(e=this.Qb.credits,this.F={},null==e)e=!1;else{for(var f in e)Wb(this,f,new Xb(this,e[f]));e=!0}var g;if(f=e){f=this.Qb.stylesheets;this.mi=[];if(null!=f)for(g in f)e=new Yb(this,g,f[g]),this.mi[g]=
e;f=!0}if(g=f)if(g=this.Qb.surfaces,this.fb=[],null==g)g=!1;else{f=0;for(e=g.length;f<e;f++)a=new Zb(this,g[f]),this.fb.push(a),a.g=this.fb.length-1;g=!0}if(g){g=this.Qb.glue;this.cg=[];if(null!=g)for(f=0,e=g.length;f<e;f++)a=new Zb(this,g[f],"glue"),this.cg[a.f.join(";")]=a;g=!0}if(g){g=this.Qb.virtualSurfaces;this.Ib=[];if(this.h.Sh&&null!=g)for(f=0,e=g.length;f<e;f++)a=new $b(this,g[f]),this.Ib[a.nn]=a;g=!0}var k;if(g){g=this.Qb.boundLayers;this.Ta=[];if(null!=g)for(var h in g)f=new ac(this,g[h],
h),this.Ta[h]=f;g=!0}if(h=g){h=this.Qb.freeLayers;this.Wa=[];if(null!=h)for(k in h)g=new Zb(this,h[k],"free"),this.Wa[k]=g;h=!0}if(k=h){k=this.Qb.namedViews;this.yg=[];if(null!=k)for(var m in k)h=new Hb(0,k[m]),this.yg[m]=h;m=this.Qb.view;null!=m&&(this.dm=JSON.parse(JSON.stringify(m)));k=!0}k&&(m=this.Qb.browserOptions,this.Ai={},null!=m&&(this.Ai=JSON.parse(JSON.stringify(m))));this.m.nm=0;this.m.mm=0;this.m.yj=performance.now();this.m.Gh=this.yj;this.lh=!bc(cc(this));this.hk=Array(6E4);this.gk=
Array(6E4);this.Ji=Array(6E4);this.hs=Array(3);this.js=Array(5);m=this.Ra.ad.ta;k=-1;h=0;for(g=m.length;h<g;h++)f=m[h],f.f[0]>k&&(k=f.f[0]);this.Qj=k;this.xb=new dc(this);null!=this.Qb.position&&this.setPosition(this.Qb.position,!1);this.Ef(this.dm);this.Gd=.5*this.l.ha[0];this.Ro=this.Mo=this.Mi=this.zc=this.Lp=!1;this.wl=0;this.Qo=this.Fo=this.To=this.Do=this.Po=this.Uo=this.Ho=this.Io=!1;this.sl=!0;this.Ni=0;this.Xf=this.h.Lh;this.xo=2;this.Ue=this.se=0;this.Vk=this.Xg=1;this.pm=Math.log(8);this.hq=
Math.log(2);this.Oi=this.l.j.jc({});this.So=this.l.j.jc({Nd:!1,je:!1});this.Co=this.l.j.jc({Nf:!0,vc:!0});this.Bo=this.l.j.jc({Nd:!1,vc:!0});this.Ao=this.l.j.jc({Nd:!1,je:!1,vc:!0});this.l.j.jc({Nd:!1,je:!0,vc:!1});lc(this);this.pb=[];this.Ug("map",this.No.bind(this),!0)}l=Fb.prototype;l.D=function(){this.S=!0;this.xb.D();for(var a in this.Wa)this.Wa[a].xb.D();this.Wb.clear();this.rc.clear();this.Mc.clear();null!=this.l&&(this.l.D(),this.l=null)};
function Jb(a){a.ae=a.h.Kj;!a.ae&&a.h.Jj&&(a.ae=q.wa.em());Qb(a)}function Qb(a){var b=1/(a.ae?Math.pow(2,Math.max(0,a.h.tg-1)):1),b=.5*(b+1/(a.ae?Math.pow(2,a.h.tg):1)),c=a.rc;c.vg=1048576*a.h.Jh*b;mc(c);c=a.Wb;c.vg=1048576*a.h.Mh*b;mc(c);c=a.Mc;c.vg=1048576*a.h.Ph*(.8>b?.5:1);mc(c)}function lc(a){var b=0;a.ae&&(b=a.h.tg);a.Kg=a.h.Nj*Math.pow(2,b)}l.qh=function(){return this.C.Tp.qh()};l.fj=function(){return nc(this.Ke)};function Wb(a,b,c){a.F[b]=c;a.Ei[c.f]=c;c.gm=b}l.Zi=function(){return nc(this.F)};
l.Xd=function(a){a:{for(var b=this.fb,c=0,d=b.length;c<d;c++)if(b[c].f==a){a=b[c];break a}a=null}return a};l.gj=function(){for(var a=[],b=0,c=this.fb.length;b<c;b++)a.push(this.fb[b].f);return a};function oc(a,b){var c=a.Ta,d;for(d in c)if(c[d].yq==b)return c[d];return null}l.Yi=function(){return nc(this.Ta)};l.aj=function(){var a=[],b;for(b in this.Wa)a.push(b);return a};function pc(a,b){return null==b?null:-1!=b.indexOf("+proj")?new Ub(a,{srsDef:b}):a.Ke[b]}
l.Ef=function(a,b){if(null!=a){if("string"===typeof a)if(a=a.trim(),"{"==a.charAt(0))try{a=JSON.parse(a)}catch(f){return}else{a=this.yg[a];if(!a)return;a=a.Lb()}var c=JSON.stringify(a);if(c!=this.jl||b)this.Tf.parse(a),this.jl=c,this.Kf++;qc(this);rc(this);c=this.Tf.Wa;this.Zf=[];for(var d in c){var e=this.Wa[d];e&&(e.Ue=c[d].depthShift||0,this.Zf.push(e),c[d].style?sc(e,c[d].style):sc(e,e.$j))}Y(this)}};l.hj=function(){return this.Tf.Lb()};function tc(a){a.Kf++;qc(a);rc(a);Y(a)}
function uc(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c].f==b)return c;return-1}function nc(a){var b=[],c;for(c in a)b.push(c);return b}l.setPosition=function(a){this.oa=new Gb(this,a);Y(this)};l.hb=function(a,b,c){return this.Ra.hb(a,b,c)};function cc(a){return a.Ra.Db.bi}l.zd=function(){return this.oa.clone()};l.nd=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.md(b,a[b])};l.Xi=function(a,b){if(!bc(cc(this))){var c=vc(this).ws(a[0],a[1],b[0],b[1]),c=c.Ds-c.Es;isNaN(c)&&(c=0);return c}return 0};
l.vb=function(a,b){if(!a)return b;a=a.trim();return-1!=a.indexOf("://")?a:0==a.indexOf("//")?this.Ub+a:0==a.indexOf("/")?this.gc+a:this.Fa+a};
l.md=function(a,b){switch(a){case "map":this.h.c=q.ti(b,null);break;case "mapCache":this.h.Jh=q.Ld(b,10,900);Qb(this);break;case "mapGPUCache":this.h.Mh=q.Ld(b,10,360);Qb(this);break;case "mapMetatileCache":this.h.Ph=q.Ld(b,10,60);Qb(this);break;case "mapTexelSizeFit":this.h.Nj=q.Ld(b,1E-4,1.1);break;case "mapLowresBackground":this.h.Oh=q.Ld(b,0,0);break;case "mapDownloadThreads":this.h.Kh=q.Ld(b,1,6);break;case "mapMaxProcessingTime":this.h.sg=q.Ld(b,1,50);break;case "mapMobileMode":this.h.Kj=q.Ka(b,
!1);Jb(this);break;case "mapMobileModeAutodect":this.h.Jj=q.Ka(b,!1);break;case "mapMobileDetailDegradation":this.h.tg=q.Ld(b,1,2);break;case "mapNavSamplesPerViewExtent":this.h.Dd=q.Ld(b,1E-11,4);break;case "mapFog":this.h.Lh=q.Ka(b,!1);break;case "mapIgnoreNavtiles":this.h.Hj=q.Ka(b,!1);break;case "mapAllowHires":this.h.qm=q.Ka(b,!0);break;case "mapAllowLowres":this.h.rm=q.Ka(b,!0);break;case "mapAllowSmartSwitching":this.h.sm=q.Ka(b,!0);break;case "mapDisableCulling":this.h.Ej=q.Ka(b,!1);break;
case "mapPreciseCulling":this.h.Lj=q.Ka(b,!1);break;case "mapHeightLodBlend":this.h.nf=q.Ka(b,!0);break;case "mapHeightNodeBlend":this.h.Gj=q.Ka(b,!0);break;case "mapBasicTileSequence":this.h.tm=q.Ka(b,!0);break;case "mapSmartNodeParsing":this.h.vm=q.Ka(b,!0);break;case "mapStoreLoadStats":this.h.Rh=q.Ka(b,!0);this.A.wk=this.h.Rh;break;case "mapXhrImageLoad":this.h.ug=q.Ka(b,!1);break;case "mapLoadMode":this.h.Nh=q.ti(b,"topdown");break;case "mapGeodataLoadMode":this.h.Fj=q.ti(b,"fit");break;case "mapPreciseBBoxTest":this.h.Qh=
q.Ka(b,!0);break;case "mapPreciseDistanceTest":this.h.Mj=q.Ka(b,!1);break;case "mapHeightfiledWhenUnloaded":this.h.pf=q.Ka(b,!1);break;case "mapVirtualSurfaces":this.h.Sh=q.Ka(b,!0);break;case "mario":this.h.wm=q.Ka(b,!0)}};
l.Vd=function(a){switch(a){case "map":return this.h.c;case "mapCache":return this.h.Jh;case "mapGPUCache":return this.h.Mh;case "mapMetatileCache":return this.h.Ph;case "mapTexelSizeFit":return this.h.Nj;case "mapLowresBackground":return this.h.Oh;case "mapDownloadThreads":return this.h.Kh;case "mapMaxProcessingTime":return this.h.sg;case "mapMobileMode":return this.h.Kj;case "mapMobileModeAutodect":return this.h.Jj;case "mapMobileDetailDegradation":return this.h.tg;case "mapNavSamplesPerViewExtent":return this.h.Dd;
case "mapFog":return this.h.Lh;case "mapIgnoreNavtiles":return this.h.Hj;case "mapAllowHires":return this.h.qm;case "mapAllowLowres":return this.h.rm;case "mapAllowSmartSwitching":return this.h.sm;case "mapDisableCulling":return this.h.Ej;case "mapPreciseCulling":return this.h.Lj;case "mapHeightLodBlend":return this.h.nf;case "mapHeightNodeBlend":return this.h.Gj;case "mapBasicTileSequence":return this.h.tm;case "mapSmartNodeParsing":return this.h.vm;case "mapStoreLoadStats":return this.h.Rh;case "mapXhrImageLoad":return this.h.ug;
case "mapLoadMode":return this.h.Nh;case "mapGeodataLoadMode":return this.h.Fj;case "mapPreciseBBoxTest":return this.h.Qh;case "mapPreciseDistanceTest":return this.h.Mj;case "mapHeightfiledWhenUnloaded":return this.h.pf;case "mapVirtualSurfaces":return this.h.Sh;case "mario":return this.h.wm}};function Y(a){a.Aa=!0;a.Np=!0}l.ff=function(a,b){return this.l.ff(a,b)};
l.bj=function(a,b,c,d){this.Np&&(this.cd=1,rb(this.l,"depth"),wc(this),rb(this.l,"base"),this.cd=0);var e;e=this.l;var f=e.j.o,g=e.ff(a,b),k=e.L.zd();if(f.checkFramebufferStatus(f.FRAMEBUFFER)!=f.FRAMEBUFFER_COMPLETE)e=[0,0,0,null,g,Number.MAX_VALUE,k];else{a=Math.floor(e.kg/e.ha[0]*a);f=e.we;b=e.kg-Math.floor(e.kg/e.ha[1]*b)-1;if(null!=f.J){f.j.bindTexture(f);Ba(f.j,f);var h=f.o,m=new Uint8Array(4);h.readPixels(a,b,1,1,h.RGBA,h.UNSIGNED_BYTE,m);Ba(f.j,null);f=m}else f=void 0;a=1/255*f[0]+f[1]+255*
f[2]+65025*f[3];f=!(255==f[0]&&255==f[1]&&255==f[2]&&255==f[3]);e.Dh=[k[0]+g[0]*a,k[1]+g[1]*a,k[2]+g[2]*a];e=[e.Dh[0],e.Dh[1],e.Dh[2],f,g,a,k]}var g=!1,k=this.ba,n;a=e[4];if(bc(cc(this)))f=[0,0,Math.min(-1E3,this.Ra.ad.uh[0])],b=[0,0,1],h=q.Math.vec3Dot(b,a),f=[f[0]-k[0],f[1]-k[1],f[2]-k[2]],f=q.Math.vec3Dot(f,b)/h,0<=f&&(!e[3]||f<e[5])&&(n=[a[0]*f+k[0],a[1]*f+k[1],a[2]*f+k[2]],g=!0);else if(h=cc(this).Ad().b+this.Ra.ad.uh[0],m=[k[0],k[1],k[2]],f=q.Math.vec3Dot(a,a),b=2*q.Math.vec3Dot(a,m),h=q.Math.vec3Dot(m,
m)-h*h,h=b*b-4*f*h,0<h&&(h=Math.sqrt(h),m=(-b-h)/(2*f),f=(-b+h)/(2*f),f=m<f?m:f,!e[3]||f<e[5]))n=[a[0]*f+k[0],a[1]*f+k[1],a[2]*f+k[2]],g=!0;if(!e[3]&&!g)return null;g||(n=[e[0]+k[0],e[1]+k[1],e[2]+k[2]]);n=this.hb(n,"physical","navigation");"float"==c&&(d=null!=d?d:xc(this,n,100,this.h.Dd),c=this.Dc(n,d),n[2]-=c[0]);return n};
l.No=function(){1!=this.cd&&ta(this.l.j);this.Vc={mg:{},sh:{},Th:{}};var a=bc(cc(this));q.i.create();this.oa.check();var b=this.oa.s[4],c=xc(this,yc(this.oa),this.oa.s[8],this.h.Dd),d=this.Dc(yc(this.oa),c,!0);this.m.Hp=d[0];this.m.Gp=b;"float"==this.oa.s[3]&&(b+=d[0]);c=this.oa.nh(bc(cc(this)));this.L.setPosition(c.bc);var e=this.L,f=c.qk;e.rk=!0;e.Af=f.slice();e.Aa=!0;this.Pd=c.Qg;this.ba=c.bc;this.ud=c.Gq+b;this.Qf=this.ud-d[0];this.bl=zc(this.oa);this.ic=Math.max(this.Qf,this.bl);this.ic=q.le(this.ic,
.1,this.L.qe);this.l.ic=this.ic;d=this.L;d.Mn=this.oa.s[8];d.Aa=!0;b=this.hb([yc(this.oa)[0],yc(this.oa)[1],b],"navigation","physical");b[0]+=c.bc[0];b[1]+=c.bc[1];b[2]+=c.bc[2];this.L.setPosition([0,0,0]);this.ba=b;b=Math.max(this.ud,this.ic)/6E5;d=Math.max(2,40*b);b=Math.max(1,b);e=this.L;e.Ti=.5*this.oa.Wd();e.tf=d;e.qe=12E6*b;e.Aa=!0;this.l.Aa=!0;this.l.Xf=this.Xf;this.l.ba=this.ba;this.l.Zg=this.oa.Mb();this.l.cl=Math.cos(q.Oa(this.l.Zg[1]));this.l.Pd=this.Pd;a?(b=q.Oa(this.l.Zg[0]),this.l.rj=
[-Math.sin(b),Math.cos(b),0,0,0]):(b=c.Qg,this.l.rj=[b[0],b[1],b[2],0],this.fo=q.O.length(this.ba),b=[0,0,0],q.O.normalize(this.ba,b),this.ho=b);this.l.pl=1/Math.max(1,Math.log(this.ic)/Math.log(1.04));this.l.xn=Math.abs(this.l.Zg[1]/-90);1!=this.cd?this.l.j.clear(!0,!1):this.l.j.clear(!0,!0,[255,255,255,255]);this.l.j.ec(this.So);1!=this.cd&&.8>this.h.Oh&&(2==this.wl?ob(this.l,this.l.Te,this.l.Qm):ob(this.l,this.l.Yg,this.l.Qm));this.l.j.ec(this.Oi);lc(this);this.Ue=this.Zb.$g=0;this.Ua(null,a,c)};
l.update=function(){if(1!=this.S&&(this.C.oi&&Date.now()>this.C.oi-6E4&&this.C.Dn(),null==this.Qd||"hidden"!=this.Qd.style.visibility)){var a=this.oa,b=this.tj,b=b.s;a.s[0]==b[0]&&q.isEqual(a.s[1],b[1],1E-7)&&q.isEqual(a.s[2],b[2],1E-7)&&a.s[3]==b[3]&&q.isEqual(a.s[4],b[4],.001)&&q.isEqual(a.s[5],b[5],.001)&&q.isEqual(a.s[6],b[6],.001)&&q.isEqual(a.s[7],b[7],.001)&&q.isEqual(a.s[8],b[8],.001)&&q.isEqual(a.s[9],b[9],.001)||this.C.Yc("map-position-changed",{position:this.oa.s.slice(),"last-position":this.tj.s.slice()});
this.sj!=this.Qf&&this.C.Yc("map-position-fixed-height-changed",{height:this.Qf,"last-height":this.sj});this.tj=this.oa.clone();this.sj=this.Qf;this.Xf=this.h.Lh;a=this.l.Qd.getBoundingClientRect();if(this.l.ha[0]!=a.width||this.l.ha[1]!=a.height)this.l.di(),this.Aa=!0;a=this.Aa;b=this.m;if(a){b.Rd=0;b.Pi=0;b.eh=0;b.ef=0;b.Bb=0;b.ri=0;b.hi=0;for(var c=b.gi=0,d=b.ii.length;c<d;c++)b.ii[c]=0}b.xc++;b.mn++;b.Wm=performance.now();for(this.Zb.update();0<this.ld.length;){if(this.m.Sa>this.h.sg){Y(this);
break}this.ld[0]();this.ld.shift()}this.Aa&&(this.Aa=!1,this.Vk=this.Xg=0,wc(this),this.Zb.update(),this.C.Yc("map-update",{}));this.m.end(a)}};
q.Pn=function(){function a(a,b,c){if(Da>=Wa){var d=Ka;Wa+=65536;Ka=Array(Wa);for(var e=0,f=Da;e<f;e++)Ka[e]=d[e]}Ka[Da]={ye:a,Vg:b,Gg:c};Da++}function b(){for(var a=0,b=Ka,c=0,d=Da;c<d;c++){var e=b[c],f=e.ye,g=f.type,k=e.Gg;if(e.hitable||e.fe||"icon"==g||"label"==g)e.fe||(postMessage(e.ye,e.Vg),a++);else{switch(g){case "flat-line":for(var h=f.vertexBuffer.length,m=c+1;m<d;m++){var n=b[m];n.Gg==k&&(n.fe=!0,h+=n.ye.vertexBuffer.length)}for(var p=new Float32Array(h),h=0,m=c;m<d;m++){var n=b[m],r=n.ye;
if(n.Gg==k){n=r.vertexBuffer;r.vertexBuffer=null;for(var r=0,t=n.length;r<t;r++)p[h+r]=n[r];h+=t}}f.vertexBuffer=p;e.Vg=[p.buffer];break;case "pixel-line":case "line-label":h=f.vertexBuffer.length;for(m=c+1;m<d;m++)n=b[m],n.Gg==k&&(n.fe=!0,h+=n.ye.vertexBuffer.length);for(var p=new Float32Array(h),u=new Float32Array(h),h=0,m=c;m<d;m++)if(n=b[m],r=n.ye,n.Gg==k){n=r.vertexBuffer;r.vertexBuffer=null;if("line-label"==g){var v=r.texcoordsBuffer;r.texcoordsBuffer=null}else v=r.normalBuffer,r.normalBuffer=
null;r=0;for(t=n.length;r<t;r++)p[h+r]=n[r],u[h+r]=v[r];h+=t}f.vertexBuffer=p;"line-label"==g?f.texcoordsBuffer=u:f.normalBuffer=u;e.Vg=[p.buffer,u.buffer]}a++;postMessage(e.ye,e.Vg)}}Da=0}function c(a,b,c,e,f,g){for(var k in O){var h=O[k],m=y(h,"filter",b,c);b.Dg=b.properties||{};if(!m||C(m,b,f,g)){var m=a,n=b,R=c,P=e,p=y(h,"visible",n,R),X=y(h,"z-index",n,R);if(0!=p){var r=n.Dg,p=y(h,"hover-style",n,R),p=""!=p?D(p,m,P):null;null!=p?(La=1,d(m,n,R,h,X,r),La=2,d(m,n,R,p,X,r)):(La=0,d(m,n,R,h,X,r));
var t=y(h,"next-pass",n,R);if(null!=t)for(var ua=0,u=t.length;ua<u;ua++)X=t[ua][0],h=D(t[ua][1],m,P),p=y(h,"visible",n,R),0!=p&&(p=y(h,"hover-style",n,R),p=""!=p?D(p,m,P):null,null!=p?(La=1,d(m,n,R,h,X,r),La=2,d(m,n,R,p,X,r)):(La=0,d(m,n,R,h,X,r)))}}}}function d(b,c,d,e,f,g){switch(b){case "line-string":(y(e,"point",c,d)||y(e,"label",c,d))&&p(c,d,e,f,g);w(c,d,e,f,g);break;case "point-array":p(c,d,e,f,g);break;case "polygon":var k=style_,h=c.vertices||[];if(0!=h.length&&((y(k,"point",c,d)||y(k,"label",
c,d))&&m(c,h,d,k,f,g,!1),(y(k,"line",c,d)||y(k,"line-label",c,d))&&m(c,h,d,k,f,g,!0),0!=y(k,"polygon",c,d))){var n=c.surface||[];if(0!=n.length){b=y(k,"hover-event",c,d);e=y(k,"click-event",c,d);var R=y(k,"draw-event",c,d),X=y(k,"enter-event",c,d),P=y(k,"leave-event",c,d),r=y(k,"zbuffer-offset",c,d);c=y(k,"polygon-color",c,d);d=[0,0,0];for(var t=n.length/3*3,k=Array(3*t),ua=0,u=0,v,wa=0;wa<t;wa++)v=3*n[ua++],v=[h[v++],h[v++],h[v]],null!=forceScale_&&(v=[v[0]*forceScale_[0],v[1]*forceScale_[1],v[2]*
forceScale_[2]]),d[0]+=v[0],d[1]+=v[1],d[2]+=v[2],k[u++]=v[0],k[u++]=v[1],k[u++]=v[2];0<t&&(h=1/t,d[0]*=h,d[1]*=h,d[2]*=h);d[0]+=bb[0];d[1]+=bb[1];d[2]+=bb[2];a({command:"addRenderJob",type:"flat-line",vertexBuffer:k,color:c,"z-index":f,center:d,"hover-event":b,"click-event":e,"draw-event":R,hitable:b||e||X||P,state:La,eventInfo:g,"enter-event":X,"leave-event":P,"zbuffer-offset":r,lod:Ja})}}}}function e(a,b){if(!a||""==a)return!1;for(var c=b.wd,d=0,e=a.length;d<e;d++){var f=a.charCodeAt(d);if(10!=
f&&9!=f&&!c[f])return!1}return!0}function f(a,b){for(var c=0,d=[0,0,0],e=[1,0,0],f=0,g=a.length-1;f<g;f++){var d=a[f],e=a[f+1],e=[e[0]-d[0],e[1]-d[1],e[2]-d[2]],k=vec3Length(e);if(c+k>b){c=(b-c)/k;d=[d[0]+e[0]*c,d[1]+e[1]*c,d[2]+e[2]*c];vec3Normalize(e);break}c+=k}return[d,e]}function g(a,b,c){var d=0;c=c.wd;for(var e=0,f=a.length;e<f;e++){var g=a.charCodeAt(e);10!=g&&(9==g&&(g=32),g=c[g],null!=g&&(d+=g.Le*b))}return d}function k(a,b,c,d,e,k,m,n){var p=c/d.u,P=g(b,p,d),R,X=0;R=0;for(var r=a.length-
1;R<r;R++)var t=a[R],u=a[R+1],X=X+vec3Length([u[0]-t[0],u[1]-t[1],u[2]-t[2]]);R=X;X=.5*(R-P);0>X&&(X=0);if(!(P>R)){a:{R=X;for(var r=0,ua,P=[0,0,0],p=R+g(b,p,d),t=0,u=a.length-1;t<u;t++){ua=a[t];var v=a[t+1];ua=[v[0]-ua[0],v[1]-ua[1],v[2]-ua[2]];r+=vec3Length(ua);r>R&&(vec3Normalize(ua),P[0]+=ua[0],P[1]+=ua[1],P[2]+=ua[2]);if(r>p){vec3Normalize(P);if(Ga){p=[0,0,0];vec3Normalize(fa,p);L(p,P,p);break a}p=[-P[1],P[0],0];break a}}p=P}null==p&&(p=[0,1,0]);r=a[0];P=d.wd;c/=d.u;R=d.Ff*c;r=[r[0],r[1],r[2]];
t=0;for(u=b.length;t<u;t++)if(ua=b.charCodeAt(t),10==ua)r[0]+=-y[1]*R,r[1]+=y[0]*R;else{9==ua&&(ua=32);y=P[ua];v=1;null!=y&&(v=y.Le*c);var w=f(a,X),y=f(a,X+v),y=[.5*(y[1][0]+w[1][0]),.5*(y[1][1]+w[1][1]),.5*(y[1][2]+w[1][2])];vec3Normalize(y);n=h(w[0],y,-c*d.u*.7+e,ua,c,n,n,p,d,k,m)[1];X+=v}return n}}function h(a,b,c,d,e,f,g,k,h,m,n,p){if(Ga&&!p){p=[0,0,0];var P=[0,0,0];vec3Normalize(fa,P);L(P,b,p)}else p=[-b[1],b[0],0];a=[a[0],a[1],a[2]];var P=[a[0],a[1],a[2]],R=h.wd;h=R[d];var X=0,r=k[0],t=k[1];
k=k[2];9==d||32==d?(h=R[32],null!=h&&(a[0]+=b[0]*h.Le*e,a[1]+=b[1]*h.Le*e,X=h.Cj*e)):null!=h&&(d=h.Cj*e,R=h.iq*e,c=[p[0]*c,p[1]*c,p[2]*c],p=[c[0]+p[0]*R,c[1]+p[1]*R,c[2]+p[2]*R],P[0]=a[0]+b[0]*d,P[1]=a[1]+b[1]*d,P[2]=a[2]+b[2]*d,m[f]=a[0]-c[0],m[f+1]=a[1]-c[1],m[f+2]=a[2]-c[2],m[f+3]=k,n[g]=h.Ik,n[g+1]=h.Mk,n[g+2]=r,n[g+3]=t,m[f+4]=a[0]-p[0],m[f+5]=a[1]-p[1],m[f+6]=a[2]-p[2],m[f+7]=k,n[g+4]=h.Ik,n[g+5]=h.Nk,n[g+6]=r,n[g+7]=t,m[f+8]=P[0]-c[0],m[f+9]=P[1]-c[1],m[f+10]=P[2]-c[2],m[f+11]=k,n[g+8]=h.Jk,
n[g+9]=h.Mk,n[g+10]=r,n[g+11]=t,m[f+12]=a[0]-p[0],m[f+13]=a[1]-p[1],m[f+14]=a[2]-p[2],m[f+15]=k,n[g+12]=h.Ik,n[g+13]=h.Nk,n[g+14]=r,n[g+15]=t,m[f+16]=P[0]-p[0],m[f+17]=P[1]-p[1],m[f+18]=P[2]-p[2],m[f+19]=k,n[g+16]=h.Jk,n[g+17]=h.Nk,n[g+18]=r,n[g+19]=t,m[f+20]=P[0]-c[0],m[f+21]=P[1]-c[1],m[f+22]=P[2]-c[2],m[f+23]=k,n[g+20]=h.Jk,n[g+21]=h.Mk,n[g+22]=r,n[g+23]=t,f+=24,g+=24,a[0]+=b[0]*h.Le*e,a[1]+=b[1]*h.Le*e,X=h.Cj*e);return[a,f,g,X]}function m(a,b,c,d,e,f,g){var k=a.borders||[];if(0!=k.length){var h=
{},m;for(m in a)"surface"!=m&&"vertices"!=m&&"borders"!=m&&(h[m]=a[m]);a=k.length;for(m=0;m<a;m++){var n=k[m],P=n.length;if(0<P){var R;R=g?Array(P+1):Array(P);for(var X=0;X<P;X++){var r=3*n[X];R[X]=[b[r++],b[r++],b[r]];g&&0==X&&(R[P]=R[0])}h.points=R;g?w(h,c,d,e,f):p(h,c,d,e,f)}}}}function n(a,b,c){switch(a){case "top-left":return[0,0];case "top-right":return[-b,0];case "top-center":return[.5*-b,0];case "center-left":return[0,.5*-c];case "center-right":return[-b,.5*-c];case "center-center":return[.5*
-b,.5*-c];case "bottom-left":return[0,-c];case "bottom-right":return[-b,-c];case "bottom-center":return[.5*-b,-c]}}function p(b,c,d,f,k){var m=[];b.lines?m=b.lines||[]:b.points&&(m=[b.points]);if(0!=m.length){var p=y(d,"visibility",b,c),P=y(d,"culling",b,c),r=y(d,"hover-event",b,c),R=y(d,"click-event",b,c),t=y(d,"draw-event",b,c),X=y(d,"enter-event",b,c),u=y(d,"leave-event",b,c),v=y(d,"zbuffer-offset",b,c),w=y(d,"point",b,c),x=y(d,"point-flat",b,c),C=y(d,"point-color",b,c),wa=.5*y(d,"point-radius",
b,c),D=y(d,"icon",b,c);if(1==D){var K=y(d,"icon-source",b,c);if(K)var F=24*m.length,H=18*m.length,B={Zc:y(d,"icon-color",b,c),an:y(d,"icon-scale",b,c),Bg:y(d,"icon-offset",b,c),Hf:y(d,"icon-stick",b,c),Ee:y(d,"icon-origin",b,c),jn:y(d,"icon-source",b,c),ja:new Float32Array(F),De:new Float32Array(H),Pe:new Float32Array(F),g:0,ng:0};else D=!1}var ec=y(d,"label",b,c);if(1==ec){var K=y(d,"label-source",b,c),L=I(d,K,b),O=y(d,"label-size",b,c);if("$name"==K&&!e(L,Ma["default"])){var aa=I(d,"$name:en",b);
e(aa,Ma["default"])&&(L=aa)}if(L&&""!=L&&1E-4<Math.abs(O))var F=24*L.length*m.length,H=18*L.length*m.length,Xa={Zc:y(d,"label-color",b,c),u:O,Bg:y(d,"label-offset",b,c),Hf:y(d,"label-stick",b,c),Ee:y(d,"label-origin",b,c),Tn:y(d,"label-align",b,c),Tr:L,Md:y(d,"label-width",b,c),ja:new Float32Array(F),De:new Float32Array(H),Pe:new Float32Array(F),g:0,ng:0};else ec=!1}var T=0,ya=0,W=[],jb,Ea=4*wa;8>Ea&&(Ea=8);32<Ea&&(Ea=32);jb=Ea;for(var ha=0,A=2*Math.PI/jb,G=0;G<jb;G++)W[G]=[-Math.sin(ha),Math.cos(ha)],
ha+=A;W[jb]=[0,1];for(var ja=0,ea=[0,0,0],Ga=0,bb=m.length;Ga<bb;Ga++){var ca=m[Ga];if(Array.isArray(ca)&&0<ca.length){var E=ca[0],U=[E[0],E[1],E[2]],ja=ja+ca.length;if(0==x)var va=12*jb,V=Array(ca.length*va),qa=Array(12*ca.length*jb);else va=9*jb,V=Array(ca.length*va);for(var G=0,ma=ca.length;G<ma;G++){null!=forceScale_&&(U=[U[0]*forceScale_[0],U[1]*forceScale_[1],U[2]*forceScale_[2]]);ea[0]+=U[0];ea[1]+=U[1];ea[2]+=U[2];if(1==D){var oa=U,ra=B,N=ra.jn,J=ra.g,Da=ra.ng,Ka=J,fc=Math.abs(N[3]*ra.an),
gc=Math.abs(N[4]*ra.an),ka=ra.ja,sa=ra.Pe,Wa=ra.De;ka[J]=0;ka[J+1]=0;ka[J+2]=0;ka[J+3]=0;ka[J+4]=fc;ka[J+5]=0;ka[J+6]=0;ka[J+7]=0;ka[J+8]=fc;ka[J+9]=-gc;ka[J+10]=0;ka[J+11]=0;sa[J]=N[1];sa[J+1]=N[2];sa[J+2]=0;sa[J+3]=0;sa[J+4]=N[1]+N[3];sa[J+5]=N[2];sa[J+6]=0;sa[J+7]=0;sa[J+8]=N[1]+N[3];sa[J+9]=N[2]+N[4];sa[J+10]=0;sa[J+11]=0;J+=12;ka[J]=0;ka[J+1]=0;ka[J+2]=0;ka[J+3]=0;ka[J+4]=0;ka[J+5]=-gc;ka[J+6]=0;ka[J+7]=0;ka[J+8]=fc;ka[J+9]=-gc;ka[J+10]=0;ka[J+11]=0;sa[J]=N[1];sa[J+1]=N[2];sa[J+2]=0;sa[J+3]=
0;sa[J+4]=N[1];sa[J+5]=N[2]+N[4];sa[J+6]=0;sa[J+7]=0;sa[J+8]=N[1]+N[3];sa[J+9]=N[2]+N[4];sa[J+10]=0;sa[J+11]=0;for(var J=J+12,Hd=n(ra.Ee,fc,gc),xe=Hd[0]+ra.Bg[0],ye=Hd[1]+ra.Bg[1],ze=oa[0],Ae=oa[1],Be=oa[2],vb=Ka;vb<J;vb+=4)ka[vb]+=xe,ka[vb+1]-=ye,Wa[Da]=ze,Wa[Da+1]=Ae,Wa[Da+2]=Be,Da+=3;ra.g=J;ra.ng=Da}if(1==ec){for(var Nc=U,Aa=Xa,Kb=Aa.ja,Ce=Aa.Pe,Oc=Aa.De,Lb=Aa.g,Mb=Aa.ng,De=Lb,Id=(""+Aa.Tr).match(/[^\r\n]+/g),wb=[],xa=0,Nb=Id.length;xa<Nb;xa++){var lb=Id[xa];do{var Ob;a:{for(var Jd=0,Ee=Ma["default"].wd,
hc=0,Kd=lb.length;hc<Kd;hc++){var mb=lb.charCodeAt(hc);if(Jd>Aa.Md&&(10==mb||9==mb||32==mb)){Ob=hc;break a}if(10!=mb){9==mb&&(mb=32);var Ld=Ee[mb];null!=Ld&&(Jd+=Aa.u/Ma["default"].u*Ld.Le)}}Ob=Kd}if(lb.length==Ob){wb.push(lb);break}wb.push(lb.substring(0,Ob));lb=lb.substring(Ob+1)}while(1)}var ic=0,Pc=0,Md,Nd=Ma["default"];Md=Aa.u/Nd.u*Nd.Ff;for(var Pb=0,Qc=[],xa=0,Nb=wb.length;xa<Nb;xa++)Qc[xa]=g(wb[xa],Aa.u/Ma["default"].u,Ma["default"]),Pb=Math.max(Qc[xa],Pb);xa=0;for(Nb=wb.length;xa<Nb;xa++){var Od=
Qc[xa];switch(Aa.Tn){case "left":ic=0;break;case "right":ic=Pb-Od;break;case "center":ic=.5*(Pb-Od)}for(var xb=[ic,Pc,0],Pd=wb[xa],Rc=Ma["default"],Fe=Kb,Ge=Ce,jc=Lb,Sc=[1,0,0],He=[0,1,0],Qd=Aa.u/Rc.u,Rd=Rc.Ff*Qd,nb=[xb[0],xb[1],xb[2]],Tc=[xb[0],xb[1],xb[2]],Uc=0,Ie=Pd.length;Uc<Ie;Uc++){var Sd=Pd.charCodeAt(Uc);if(10==Sd)nb[0]+=-Sc[1]*Rd,nb[1]+=Sc[0]*Rd,Tc=[nb[0],nb[1],nb[2]];else var Td=h(Tc,Sc,0,Sd,Qd,jc,jc,He,Rc,Fe,Ge,!0),Tc=Td[0],jc=Td[1]}Lb=jc;Pc-=Md}var Ud=n(Aa.Ee,Pb,-Pc);offsetX_=Ud[0]+Aa.Bg[0];
offsetY_=Ud[1]+Aa.Bg[1];for(var Je=Nc[0],Ke=Nc[1],Le=Nc[2],xa=De;xa<Lb;xa+=4)Kb[xa]+=offsetX_,Kb[xa+1]-=offsetY_,Oc[Mb]=Je,Oc[Mb+1]=Ke,Oc[Mb+2]=Le,Mb+=3;Aa.g=Lb;Aa.ng=Mb}for(var Ya=0;Ya<jb;Ya++)1==w&&(1==x?(V[T]=U[0],V[T+1]=U[1],V[T+2]=U[2],V[T+3]=U[0]+W[Ya][0]*wa,V[T+4]=U[1]+W[Ya][1]*wa,V[T+5]=U[2],V[T+6]=U[0]+W[Ya+1][0]*wa,V[T+7]=U[1]+W[Ya+1][1]*wa,V[T+8]=U[2],T+=9):(V[T]=U[0],V[T+1]=U[1],V[T+2]=U[2],V[T+3]=0,qa[ya]=0,qa[ya+1]=0,qa[ya+2]=0,qa[ya+3]=0,V[T+4]=U[0],V[T+5]=U[1],V[T+6]=U[2],V[T+7]=0,
qa[ya+4]=W[Ya][0]*wa,qa[ya+5]=W[Ya][1]*wa,qa[ya+6]=0,qa[ya+7]=0,V[T+8]=U[0],V[T+9]=U[1],V[T+10]=U[2],V[T+11]=0,qa[ya+8]=W[Ya+1][0]*wa,qa[ya+9]=W[Ya+1][1]*wa,qa[ya+10]=0,qa[ya+11]=0,T+=12,ya+=12));U=ca[G+1]}}}0<ja&&(ea[0]/=ja,ea[1]/=ja,ea[2]/=ja);ea[0]+=fa[0];ea[1]+=fa[1];ea[2]+=fa[2];var kc=r||R||X||u;1==w&&(1==x?a({command:"addRenderJob",type:"flat-line",vertexBuffer:V,color:C,"z-index":f,visibility:p,center:ea,"hover-event":r,"click-event":R,"draw-event":t,"enter-event":X,"leave-event":u,"zbuffer-offset":v,
hitable:kc,state:La,eventInfo:k,lod:Ja},[V.buffer]):a({command:"addRenderJob",type:"pixel-line",vertexBuffer:V,normalBuffer:qa,color:C,"z-index":f,visibility:p,center:ea,"hover-event":r,"click-event":R,"draw-event":t,"enter-event":X,"leave-event":u,"zbuffer-offset":v,hitable:kc,state:La,eventInfo:k,lod:Ja},[V.buffer,qa.buffer]));1==D&&0<B.ja.length&&a({command:"addRenderJob",type:"icon",vertexBuffer:B.ja,originBuffer:B.De,texcoordsBuffer:B.Pe,icon:ia[B.jn[0]],color:B.Zc,"z-index":f,visibility:p,culling:P,
center:ea,stick:B.Hf,"hover-event":r,"click-event":R,"draw-event":t,"enter-event":X,"leave-event":u,"zbuffer-offset":v,hitable:kc,state:La,eventInfo:k,lod:Ja},[B.ja.buffer,B.De.buffer,B.Pe.buffer]);1==ec&&0<Xa.ja.length&&a({command:"addRenderJob",type:"label",vertexBuffer:Xa.ja,originBuffer:Xa.De,texcoordsBuffer:Xa.Pe,color:Xa.Zc,"z-index":f,visibility:p,culling:P,center:ea,stick:Xa.Hf,"hover-event":r,"click-event":R,"draw-event":t,"enter-event":X,"leave-event":u,"zbuffer-offset":v,hitable:kc,state:La,
eventInfo:k,lod:Ja},[Xa.ja.buffer,Xa.De.buffer,Xa.Pe.buffer])}}function w(b,c,d,f,g){var h,m=b.lines||[];if(0!=m.length){var n=y(d,"line",b,c),p=y(d,"line-label",b,c);if(n||p){var r=y(d,"hover-event",b,c),P=y(d,"click-event",b,c),t=y(d,"draw-event",b,c),R=y(d,"enter-event",b,c),X=y(d,"leave-event",b,c),u=y(d,"zbuffer-offset",b,c),v=y(d,"line-flat",b,c),w=y(d,"line-color",b,c),x=.5*y(d,"line-width",b,c),C=y(d,"line-style",b,c),wa=y(d,"line-style-texture",b,c),D=y(d,"line-style-background",b,c),p=y(d,
"line-label",b,c),F=y(d,"line-label-size",b,c),B=0,K=0,H=!v&&2.1>x;if(!H){for(var O=[],aa=[],ja=8,T=0,ya=2*Math.PI/ja,W=0;W<ja;W++)O[W]=[-Math.sin(T),Math.cos(T)],aa[W]=T,T+=ya;O[ja]=[0,1];aa[ja]=0}for(var ha=0,Ea=0;Ea<m.length;Ea++)Array.isArray(m[Ea])&&(ha+=m[Ea].length);var Da=6*(U||!v?4:3),A=new Float32Array(ha*Da+ha*(H?0:ja*(U||!v?4:3)*3));if(!v||U)var G=new Float32Array(24*ha+ha*(H?0:12*ja));if(U&&!H)var Ka=Float32Array(ha);T=[0,0,0];ya=[];for(Ea=0;Ea<m.length;Ea++)if(Array.isArray(m[Ea])&&
m[Ea].length){var ea=m[Ea];if(p){var Wa=Array(ea.length),Gd=Array(ea.length);ya.push({Uq:Wa,Tq:Gd})}for(var ca=ea[0],E,U="solid"!=C,va=.001,V=.001,W=0,qa=ea.length-1;W<qa;W++){E=ea[W];h=ea[W+1];null!=forceScale_&&(E=[E[0]*forceScale_[0],E[1]*forceScale_[1],E[2]*forceScale_[2]],h=[h[0]*forceScale_[0],h[1]*forceScale_[1],h[2]*forceScale_[2]]);if(v&&!U){if(Ga){var ma=[h[0]-E[0],h[1]-E[1],h[2]-E[2]],oa=Math.sqrt(ma[0]*ma[0]+ma[1]*ma[1]+ma[2]*ma[2]),V=V+oa,oa=0!=oa?1/oa:0,ra=[ma[0]*oa,ma[1]*oa,ma[2]*oa],
N=[0,0,0],J=[0,0,0];vec3Normalize(fa,J);L(J,ra,N);N=[N[0]*x,N[1]*x,N[2]*x]}else ma=[h[0]-E[0],h[1]-E[1],0],oa=Math.sqrt(ma[0]*ma[0]+ma[1]*ma[1]),V+=oa,oa=0!=oa?x/oa:0,N=[-ma[1]*oa,ma[0]*oa,0];A[B]=E[0]+N[0];A[B+1]=E[1]+N[1];A[B+2]=E[2]+N[2];A[B+3]=E[0]-N[0];A[B+4]=E[1]-N[1];A[B+5]=E[2]-N[2];A[B+6]=h[0]+N[0];A[B+7]=h[1]+N[1];A[B+8]=h[2]+N[2];A[B+9]=E[0]-N[0];A[B+10]=E[1]-N[1];A[B+11]=E[2]-N[2];A[B+12]=h[0]-N[0];A[B+13]=h[1]-N[1];A[B+14]=h[2]-N[2];A[B+15]=h[0]+N[0];A[B+16]=h[1]+N[1];A[B+17]=h[2]+N[2];
B+=18}else ma=[h[0]-E[0],h[1]-E[1],0],oa=Math.sqrt(ma[0]*ma[0]+ma[1]*ma[1]),V+=oa,v?(oa=0!=oa?x/oa:0,N=[-ma[1]*oa,ma[0]*oa,0],null!=Ka&&(Ka[W]=0!=oa?Math.atan2(ma[0],ma[1])+.5*Math.PI:0),A[B]=E[0],A[B+1]=E[1],A[B+2]=E[2],A[B+3]=va,G[K]=N[0],G[K+1]=N[1],G[K+2]=0,G[K+3]=x,A[B+4]=E[0],A[B+5]=E[1],A[B+6]=E[2],A[B+7]=-va,G[K+4]=-N[0],G[K+5]=-N[1],G[K+6]=0,G[K+7]=-x,A[B+8]=h[0],A[B+9]=h[1],A[B+10]=h[2],A[B+11]=V,G[K+8]=N[0],G[K+9]=N[1],G[K+10]=0,G[K+11]=x,A[B+12]=E[0],A[B+13]=E[1],A[B+14]=E[2],A[B+15]=
-va,G[K+12]=-N[0],G[K+13]=-N[1],G[K+14]=0,G[K+15]=-x,A[B+16]=h[0],A[B+17]=h[1],A[B+18]=h[2],A[B+19]=-V,G[K+16]=-N[0],G[K+17]=-N[1],G[K+18]=0,G[K+19]=-x,A[B+20]=h[0],A[B+21]=h[1],A[B+22]=h[2],A[B+23]=V,G[K+20]=N[0],G[K+21]=N[1],G[K+22]=0,G[K+23]=x):(A[B]=E[0],A[B+1]=E[1],A[B+2]=E[2],A[B+3]=va,G[K]=h[0],G[K+1]=h[1],G[K+2]=h[2],G[K+3]=x,A[B+4]=E[0],A[B+5]=E[1],A[B+6]=E[2],A[B+7]=-va,G[K+4]=h[0],G[K+5]=h[1],G[K+6]=h[2],G[K+7]=-x,A[B+8]=h[0],A[B+9]=h[1],A[B+10]=h[2],A[B+11]=-V,G[K+8]=E[0],G[K+9]=E[1],
G[K+10]=E[2],G[K+11]=x,A[B+12]=E[0],A[B+13]=E[1],A[B+14]=E[2],A[B+15]=va,G[K+12]=h[0],G[K+13]=h[1],G[K+14]=h[2],G[K+15]=x,A[B+16]=h[0],A[B+17]=h[1],A[B+18]=h[2],A[B+19]=-V,G[K+16]=E[0],G[K+17]=E[1],G[K+18]=E[2],G[K+19]=x,A[B+20]=h[0],A[B+21]=h[1],A[B+22]=h[2],A[B+23]=V,G[K+20]=E[0],G[K+21]=E[1],G[K+22]=E[2],G[K+23]=-x),B+=24,K+=24;va=V}E=[ca[0],ca[1],ca[2]];W=0;for(qa=ea.length;W<qa;W++){null!=forceScale_&&(E=[E[0]*forceScale_[0],E[1]*forceScale_[1],E[2]*forceScale_[2]]);T[0]+=E[0];T[1]+=E[1];T[2]+=
E[2];if(!H)for(h=null!=Ka?Ka[W]:0,Ga&&(ra=[0,0,0],J=[0,0,0],vec3Normalize(fa,J),vec3AnyPerpendicular(J,ra),vec3Normalize(ra),L(J,ra,J)),ca=0;ca<ja;ca++)v&&!U?(A[B]=E[0],A[B+1]=E[1],A[B+2]=E[2],Ga?(va=O[ca][0],V=O[ca][1],A[B+3]=E[0]+(J[0]*va+ra[0]*V)*x,A[B+4]=E[1]+(J[1]*va+ra[1]*V)*x,A[B+5]=E[2]+(J[2]*va+ra[2]*V)*x,va=O[ca+1][0],V=O[ca+1][1],A[B+6]=E[0]+(J[0]*va+ra[0]*V)*x,A[B+7]=E[1]+(J[1]*va+ra[1]*V)*x,A[B+8]=E[2]+(J[2]*va+ra[2]*V)*x):(A[B+3]=E[0]+O[ca][0]*x,A[B+4]=E[1]+O[ca][1]*x,A[B+5]=E[2],A[B+
6]=E[0]+O[ca+1][0]*x,A[B+7]=E[1]+O[ca+1][1]*x,A[B+8]=E[2]),B+=9):(va=W!=qa-1?A[W*Da+3]:A[(W-1)*Da+11],A[B]=E[0],A[B+1]=E[1],A[B+2]=E[2],A[B+3]=va,G[K]=0,G[K+1]=0,G[K+2]=0,G[K+3]=0,A[B+4]=E[0],A[B+5]=E[1],A[B+6]=E[2],A[B+7]=va,G[K+4]=O[ca][0]*x,G[K+5]=O[ca][1]*x,G[K+6]=aa[ca]+h,G[K+7]=0,A[B+8]=E[0],A[B+9]=E[1],A[B+10]=E[2],A[B+11]=va,G[K+8]=O[ca+1][0]*x,G[K+9]=O[ca+1][1]*x,G[K+10]=aa[ca+1]+h,G[K+11]=0,B+=12,K+=12);p&&(ca=[E[0],E[1],E[2]+.1*F],Wa[W]=ca,Gd[qa-W-1]=ca);E=ea[W+1]}}0<ha&&(T[0]/=ha,T[1]/=
ha,T[2]/=ha);T[0]+=bb[0];T[1]+=bb[1];T[2]+=bb[2];W=r||P||R||X;n&&(W={command:"addRenderJob",vertexBuffer:A,color:w,"z-index":f,center:T,normalBuffer:G,"hover-event":r,"click-event":P,"draw-event":t,hitable:W,state:La,eventInfo:g,"enter-event":R,"leave-event":X,"zbuffer-offset":u,"line-width":2*x,lod:Ja},W.type=v?1==U?"flat-tline":"flat-line":1==U?"pixel-tline":"pixel-line",U&&null!=wa&&(W.texture=[ia[wa[0]],wa[1],wa[2]],W.background=D),qa=JSON.stringify({T:W.type,Zc:w,Mf:f,us:u}),G?a(W,[A.buffer,
G.buffer],qa):a(W,[A.buffer],qa));if(p)for(W=0,qa=ya.length;W<qa;W++)n=ya[W].Uq,w=ya[W].Tq,x=b,p=T,A=c,m=d,G=f,u=g,v=y(m,"line-label-color",x,A),r=y(m,"line-label-source",x,A),wa=y(m,"line-label-size",x,A),D=y(m,"line-label-offset",x,A),1E-4>Math.abs(wa)||(U=I(m,r,x),"$name"!=r||e(U,Ma["default"])||(r=I(m,"$name:en",x),e(r,Ma["default"])&&(U=r)),U&&""!=U&&(r=y(m,"hover-event",x,A),P=y(m,"click-event",x,A),t=y(m,"draw-event",x,A),R=y(m,"enter-event",x,A),X=y(m,"leave-event",x,A),x=y(m,"zbuffer-offset",
x,A),m=48*U.length,A=new Float32Array(m),m=new Float32Array(m),C=r||P||R||X,n=k(n,U,wa,Ma["default"],D,A,m,0),k(w,U,wa,Ma["default"],D,A,m,n),w=JSON.stringify({T:"line-label",Zc:v,Mf:G,us:x}),a({command:"addRenderJob",type:"line-label",vertexBuffer:A,texcoordsBuffer:m,color:v,"z-index":G,center:p,"hover-event":r,"click-event":P,"draw-event":t,"enter-event":R,"leave-event":X,"zbuffer-offset":x,hitable:C,state:La,eventInfo:u,lod:Ja},[A.buffer,m.buffer],w)))}}}function r(a){switch(a){case "filter":return null;
case "inherit":return"";case "line":return!1;case "line-flat":return!1;case "line-width":return 1;case "line-color":return[255,255,255,255];case "line-style":return"solid";case "line-style-texture":return null;case "line-style-background":return[0,0,0,0];case "line-label":return!1;case "line-label-color":return[255,255,255,255];case "line-label-source":return"$name";case "line-label-size":return 1;case "line-label-offset":return 0;case "point":return!1;case "point-flat":return!1;case "point-radius":return 1;
case "point-Layer":return"solid";case "point-color":return[255,255,255,255];case "icon":return!1;case "icon-source":return null;case "icon-scale":return 1;case "icon-offset":return[0,0];case "icon-origin":return"bottom-center";case "icon-stick":return[0,0,0,255,255,255,255];case "icon-color":return[255,255,255,255];case "label":return!1;case "label-color":return[255,255,255,255];case "label-source":return"$name";case "label-size":return 10;case "label-offset":return[0,0];case "label-origin":return"bottom-center";
case "label-align":return"center";case "label-stick":return[0,0,0,255,255,255,255];case "label-width":return 200;case "polygon":return!1;case "polygon-color":return[255,255,255,255];case "z-index":return 0;case "zbuffer-offset":return[0,0,0];case "hover-event":return!1;case "hover-style":return"";case "enter-event":return!1;case "leave-event":return!1;case "click-event":return!1;case "draw-event":return!1;case "visible":return!0;case "visibility":return 0;case "culling":return 180;case "next-pass":return null}}
function t(a,b,c){switch(b){case "inherit":return u(a,b,c,"string");case "line":return u(a,b,c,"boolean");case "line-flat":return u(a,b,c,"boolean");case "line-width":return u(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "line-color":return u(a,b,c,"object",4,0,255);case "line-style":return u(a,b,c,"string");case "line-style-texture":return u(a,b,c,"object",3,-Number.MAX_VALUE,Number.MAX_VALUE);case "line-style-background":return u(a,b,c,"object",4,0,255);case "line-label":return u(a,b,c,"boolean");
case "line-label-source":return u(a,b,c,"string");case "line-label-color":return u(a,b,c,"object",4,0,255);case "line-label-size":return u(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "line-label-offset":return u(a,b,c,"number",null,-Number.MAX_VALUE,Number.MAX_VALUE);case "point":return u(a,b,c,"boolean");case "point-flat":return u(a,b,c,"boolean");case "point-radius":return u(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "point-Layer":return u(a,b,c,"string");case "point-color":return u(a,
b,c,"object",4,0,255);case "icon":return u(a,b,c,"boolean");case "icon-source":return u(a,b,c,"object",5,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-scale":return u(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "icon-offset":return u(a,b,c,"object",2,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-origin":return u(a,b,c,"string");case "icon-stick":return u(a,b,c,"object",7,-Number.MAX_VALUE,Number.MAX_VALUE);case "icon-color":return u(a,b,c,"object",4,0,255);case "label":return u(a,b,c,"boolean");
case "label-color":return u(a,b,c,"object",4,0,255);case "label-source":return u(a,b,c,"string");case "label-size":return u(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "label-offset":return u(a,b,c,"object",2,-Number.MAX_VALUE,Number.MAX_VALUE);case "label-origin":return u(a,b,c,"string");case "label-align":return u(a,b,c,"string");case "label-stick":return u(a,b,c,"object",7,-Number.MAX_VALUE,Number.MAX_VALUE);case "label-width":return u(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "polygon":return u(styleId_,
b,c,"boolean");case "polygon-color":return u(styleId_,b,c,"object",4,0,255);case "z-index":return u(a,b,c,"number",null,-Number.MAX_VALUE,Number.MAX_VALUE);case "zbuffer-offset":return u(a,b,c,"object",3,0,Number.MAX_VALUE);case "hover-event":return u(a,b,c,"boolean");case "hover-style":return u(a,b,c,"string");case "enter-event":return u(a,b,c,"boolean");case "leave-event":return u(a,b,c,"boolean");case "click-event":return u(a,b,c,"boolean");case "draw-event":return u(a,b,c,"boolean");case "visible":return u(a,
b,c,"boolean");case "visibility":return u(a,b,c,"number",null,1E-4,Number.MAX_VALUE);case "culling":return u(a,b,c,"number",180,1E-4,180);case "next-pass":return u(a,b,c,"object")}return c}function u(a,b,c,d,e,f,g){if(null!=c&&"object"==typeof c&&(null!=c.discrete||null!=c.linear||null!=c["lod-scaled"])){var h=!1;if(null!=c["lod-scaled"]){var k=c["lod-scaled"];if(!("object"==typeof k&&Array.isArray(k)&&2<=k.length))return x("wrong-property-value",a,b,c,null,"[]"),r(b);null==k[2]&&(k[2]=1);if("number"!=
typeof k[0]||"number"!=typeof k[2])return x("wrong-property-value",a,b,c,null,"[]"),r(b);if("number"==typeof k[1])return c;e=k[1];h=!0}else e=c.discrete||c.linear;if(null==e||!("object"==typeof e&&Array.isArray(e)&&0<e.length))return x("wrong-property-value",a,b,c,null,"[]"),r(b);if(null!=e){var m=null;d=0;for(k=e.length;d<k;d++){var n=e[d];if(null==n||"object"!=typeof n||!Array.isArray(n)||2==n.length)if(null==m&&(m=typeof n[1],1==h&&"number"!=m)||"number"!=typeof n[0]||typeof n[1]!=m||"number"==
m&&(n[1]>g||n[1]<f))return x("wrong-property-value[]",a,b,c,d,"[]"),r(b)}}return c}if(typeof c!=d&&(null!==c||"icon-source"!=b&&"visibility"!=b))return x("wrong-property-value",a,b,c),r(b);switch(typeof c){case "object":if(null===c&&("line-style-texture"==b||"icon-source"==b||"visibility"==b||"next-pass"==b))return c;if("next-pass"==b)if(1==Array.isArray(c)&&0<c.length)for(d=0;d<k;d++){if(f=c[d],"object"!=typeof f||1!=Array.isArray(f)||2!=f.length||"number"!=typeof f[0]||"string"!=typeof f[1])return x("wrong-property-value[]",
a,b,c,d),r(b)}else return x("wrong-property-value",a,b,c),r(b);if(null!=e)if(1==Array.isArray(c)&&c.length==e){d=0;if("icon-source"==b||"line-style-texture"==b){if("string"!=typeof c[0])return x("wrong-property-value[]",a,b,c,0),r(b);if(null==ia[c[0]])return x("wrong-object",a,b,c,null,"bitmap"),r(b);d=1}for(k=c.length;d<k;d++)if("number"!=typeof c[d])return x("wrong-property-value[]",a,b,c,d),r(b)}else return x("wrong-property-value",a,b,c),r(b);return c;case "string":if("line-style"==b)switch(c){case "solid":case "texture":return c;
default:return x("wrong-property-value",a,b,c),r(b)}if("label-origin"==b||"icon-origin"==b)switch(c){case "top-left":case "top-right":case "top-center":case "center-left":case "center-right":case "center-center":case "bottom-left":case "bottom-right":case "bottom-center":return c;default:return x("wrong-property-value",a,b,c),r(b)}if("label-align"==b)switch(c){case "left":case "right":case "center":break;default:return x("wrong-property-value",a,b,c),r(b)}return c;case "number":return c>g||c<f?(x("wrong-property-value",
a,b,c),r(b)):c;case "boolean":return c}}function x(a,b,c,d,e,f){"object"==typeof d&&(d=JSON.stringify(d));var g=null;switch(a){case "wrong-property-value":g="Error: wrong layer property "+(f?"'"+f+"'":"")+": "+b+"."+c+" = "+d;break;case "wrong-property-value[]":g="Error: wrong layer property "+(f?"'"+f+"'":"")+"["+e+"]: "+b+"."+c+" = "+d;break;case "wrong-object":g="Error: reffered "+f+" does not exist: "+b+"."+c+" = "+d;break;case "wrong-object[]":g="Error: reffered "+f+" does not exist: "+b+"."+
c+"["+e+"] = "+d;break;case "wrong-Layer":g="Error: reffered "+f+" Layer does not exist: "+f+"["+e+"].Layer = "+b;break;case "wrong-bitmap":g="Error: wrong definition of bitmap: "+b;break;case "custom":g="Error: "+b}g&&console.log(g)}function H(a,b,c,d,e){if(100<e)x("custom","infinite inherit loop in Layer: "+a);else if(null!=c.inherit){var f=d.Layers[c.inherit];if(null!=f){null!=f.inherit&&H(c.inherit,b,f,d,e++);for(var g in f)b[g]=f[g]}else x("wrong-object",a,"inherit",f,"Layer")}}function y(a,
b,c,d){var e=a[b];switch(typeof e){case "string":if(0<e.length&&"$"==e.charAt(0)){d=c.Dg[e.substr(1)];if(null!=d)return d;x("wrong-object",a["$$layer-id"],b,e,null,"feature-property")}return e;case "object":if(null==e)break;if(1==Array.isArray(e)){if("icon-source"==b&&null==ia[e[0]]){x("wrong-object",a["$$layer-id"],b,e,null,"bitmap");break}return e}var f;a=null;if(null!=e["lod-scaled"]){a=e["lod-scaled"];if("number"==typeof a[1])return a[1]*Math.pow(2*a[2],a[0]-d);f=a[1]}else f=e.discrete||e.linear;
b=f[0][0];c=f[0][1];for(var g=typeof c,k=c,h=0,m=f.length;h<=m;h++){if(h==m){k=c;break}if(f[h][0]>d){if(null!=e.discrete||null!=a)k=c;else{currentLod_=f[h][0];currentValue_=f[h][1];if(currentLod_==b)break;switch(g){case "boolean":currentValue_=(c=c?1:0)?1:0;k=c+(d-b)/(currentLod_-b)*(currentValue_-c);k=.5<k?!0:!1;break;case "number":k=c+(d-b)/(currentLod_-b)*(currentValue_-c);break;case "object":for(k=[],e=0,f=c.length;e<f;e++)k[e]=c[e]+(d-b)/(currentLod_-b)*(currentValue_[e]-c[e])}}break}b=f[h][0];
c=f[h][1]}null!=a&&(k*=Math.pow(2*a[2],a[0]-d));return k;case "number":case "boolean":return e}return r(b)}function I(a,b,c){switch(typeof b){case "string":if(0<b.length)switch(b.charAt(0)){case "$":return c=c.Dg[b.substr(1)],"undefined"==typeof c&&x("wrong-expresion",a["$$layer-id"],b,b,null,"feature-property"),c}}return b}function D(a,b,c){var d=v.uj[a];return null==d?(x("wrong-Layer",a,null,null,c,b),{}):d}function L(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var f=b[0],g=b[1];b=b[2];c[0]=e*b-a*
g;c[1]=a*f-d*b;c[2]=d*g-e*f}function C(a,b,c,d){if(!a||!Array.isArray(a))return!1;switch(a[0]){case "all":for(var e=!0,f=1,g=a.length;f<g;f++)e=e&&C(a[f],b,c,d);return e;case "any":e=!1;f=1;for(g=a.length;f<g;f++)e=e||C(a[f],b,c,d);return e;case "none":e=!0;f=1;for(g=a.length;f<g;f++)e=e&&C(a[f],b,c,d);return!e;case "skip":return!1}switch(a[1]){case "#type":e=c;break;case "#group":e=d;break;default:if((c=a[1])&&0<c.length)switch(c.charAt(0)){case "$":e=b.Dg[c.substr(1)];break;case "@":e=F[c];break;
default:e=b.Dg[c]}}switch(a[0]){case "==":return e==a[2];case "!=":return e!=a[2];case ">=":return e>=a[2];case "<=":return e<=a[2];case ">":return e>a[2];case "<":return e<a[2];case "has":return"undefined"!=typeof e;case "!has":return"undefined"==typeof e;case "in":f=2;for(g=a.length;f<g;f++)if(a[f]==e)return!0;break;case "!in":f=2;for(g=a.length;f<g;f++)if(a[f]==e)return!1;return!0}return!1}var v={},O={},ia={},F={},fa=[0,0,0],ja=[1,1,1],ha=[1,1,1],aa=4096,Ga=!1,Ja=0,Ma={},La=0,bb=[0,0,0],Ka=Array(65536),
Da=0,Wa=Ka.length;vec3Normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],f=Math.sqrt(c*c+d*d+e*e);if(f){if(1==f)return b[0]=c,b[1]=d,b[2]=e,b}else return b[0]=0,b[1]=0,b[2]=0,b;f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;return b};vec3Length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3AnyPerpendicular=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2];b[0]=1;b[1]=1;b[2]=e?-(c+d)/e:0;return b};self.onmessage=function(a){a=a.data;var d=a.data;switch(a.command){case "setStylesheet":if(d){Ga=
d.geocent||!1;var e=d.data;ia={};F=e.constants||{};a=e.bitmaps||{};for(var f in a)d=a[f],"string"==typeof d?d={url:d}:"object"==typeof d?null==d.url&&x("wrong-bitmap",f):x("wrong-bitmap",f),ia[f]=d;postMessage({command:"loadBitmaps",bitmaps:ia});v={uj:{}};a=e.layers||{};O=v.uj;for(f in a){var d=v.uj,g=f,k=f,h={},m=k,n=h,p=a[f];null!=p.inherit&&H(m,n,p,e,0);var u=void 0;for(u in p)n[u]=p[u];n["$$layer-id"]=m;m=void 0;for(m in h)n=h[m],"string"==typeof n&&0<n.length&&"@"==n.charAt(0)&&(null!=F[n]?h[m]=
F[n]:(x("wrong-object",k,m,n,null,"constant"),h[m]=r(m))),h[m]=t(k,m,h[m]);d[g]=h}}postMessage({command:"ready"});break;case "setFont":Ma["default"]={wd:d.chars,Ff:d.space,u:d.size};postMessage({command:"ready"});break;case "processGeodata":Ja=a.lod||0;a=d=JSON.parse(d);f=Ja;if("string"==typeof a)try{e=JSON.parse(a)}catch(Oe){e=null}else e=a;if(e)for(e=e.groups||[],a=0,d=e.length;a<d;a++)if(h=e[a],g=f,k=h.id||"",m=h.bbox){fa=m[0];ja=m[1];ha=[m[1][0]-m[0][0],m[1][1]-m[0][1],m[1][2]-m[0][2]];aa=h.resolution||
4096;bb=[0,0,0];forceScale_=[ha[0]/aa,ha[1]/aa,ha[2]/aa];postMessage({command:"beginGroup",id:h.id,bbox:[fa,ja],origin:fa});p=h.points||[];m=0;for(n=p.length;m<n;m++)c("point-array",p[m],g,m,"point",k);p=h.lines||[];m=0;for(n=p.length;m<n;m++)c("line-string",p[m],g,m,"line",k);h=h.polygons||[];m=0;for(n=h.length;m<n;m++)c("polygon",h[m],g,m,"polygon",k);b();postMessage({command:"endGroup"})}b();postMessage({command:"allProcessed"});postMessage({command:"ready"})}}};
q.Sg=function(a,b){this.Ha=a;this.c=a.c;this.S=!1;this.rg=b;this.pa=!0;var c=window.URL||window.webkitURL,d,e=q.Or();try{d=new Blob([e],{type:"application/javascript"})}catch(f){window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.zs,d=new BlobBuilder,d.append(e),d=blob.getBlob()}this.fi=new Worker(c.createObjectURL(d));this.fi.onmessage=this.onMessage.bind(this)};q.Sg.prototype.D=function(){1!=this.S&&(this.S=!0,null!=this.fi&&this.fi.terminate())};
q.Sg.prototype.V=function(){return this.pa||this.S};q.Sg.prototype.onMessage=function(a){if(1!=this.S){a=a.data;var b=a.command;"ready"==b&&(this.pa=!0);null!=this.rg&&this.rg(b,a)}};function Ac(a,b,c,d){1!=a.S&&(a.pa=!1,b={command:b,data:c},d&&d.f&&(b.lod=d.f[0]),a.fi.postMessage(b))}
function ac(a,b,c){this.c=a;this.f=c;this.tn=[256,256];this.na=[0,100];this.F=[];this.X=[[0,0],[0,0]];this.Yb=null;this.Fa=this.c.Fa;this.Ub=this.c.Ub;this.gc=this.c.gc;this.pa=!1;"esri-world-imagery"==c&&(b.availability={type:"negative-size",size:2521});"string"===typeof b?(this.Yb=this.c.vb(b),this.Fa=q.ra.mh(this.Yb),this.Ub=q.ra.rh(this.Yb),this.gc=q.ra.ph(this.Yb),q.hd(this.Yb,function(a){this.Fe(a);this.pa=!0;tc(this.c)}.bind(this),function(){}.bind(this),null,q.useCredentials?-1!=this.Yb.indexOf(this.c.Fa):
!1,this.c.C.zb)):(this.Fe(b),this.pa=!0)}
ac.prototype.Fe=function(a){this.yq=a.id||null;this.T=a.type||"raster";this.rd=this.vb(a.url,"");this.tn=a.tileSize||[256,256];this.na=a.lodRange||[0,0];this.X=a.tileRange||[[0,0],[0,0]];this.$b=this.vb(a.metaUrl);this.Pj=this.vb(a.maskUrl);this.xh=a.isTransparent||!1;this.F=a.credits||[];this.ge=Math.pow(2,this.na[0])/((this.X[1][0]-this.X[1][0]+1)*(this.X[1][1]-this.X[1][1]+1));if(this.uc=a.availability?{}:null)a=a.availability,this.uc.T=a.type,this.uc.pq=a.mime,this.uc.ko=a.codes,this.uc.u=a.size;
this.$b&&this.Pj&&(this.uc={T:"metatile"});switch(typeof this.F){case "string":this.F=[];break;case "object":if(!Array.isArray(this.F)){a=this.F;this.F=[];for(var b in a)Wb(this.c,b,new Xb(this.c,a[b])),this.F.push(b)}b=0;for(a=this.F.length;b<a;b++);}};ac.prototype.Lb=function(){return{type:this.T,url:this.rd,tileSize:this.tn,credits:this.F,lodRange:this.na,tileRange:this.X,mataUrl:this.$b,maskUrl:this.Pj,isTransparent:this.xh}};
ac.prototype.vb=function(a,b){if(!a)return b;a=a.trim();return-1!=a.indexOf("://")?a:0==a.indexOf("//")?this.Ub+a:0==a.indexOf("/")?this.gc+a:this.Fa+a};function Bc(a,b){var c=b[0]-a.na[0];if(0>c)return!1;var d=b[1]>>c,c=b[2]>>c;return d<a.X[0][0]||d>a.X[1][0]||c<a.X[0][1]||c>a.X[1][1]?0:b[0]>a.na[1]?1:2}function Cc(a,b){return Dc(a.c,a.rd,{fa:b[0],ib:b[1],jb:b[2]},null,void 0)}function Tb(a){this.c=a;this.xb=new Ec(a,null,[0,0,0])}Tb.prototype.D=function(){this.xb.D()};
function Fc(a,b,c,d){a=a.xb;var e=b[1]>>c<<c;c=b[2]>>c<<c;for(b=b[0];0<b;b--){var f=1<<b-1,g=0;0!=(e&f)&&(g+=1);0!=(c&f)&&(g+=2);if(!a.aa[g])if(d)a.Tg(g);else return null;a=a.aa[g]}return a}function Ec(a,b,c){this.c=a;this.f=c;this.qa=b;this.qf={};this.zm={};this.rn={};this.Pa={};this.F={};this.aa=[null,null,null,null]}Ec.prototype.D=function(){for(var a=0;4>a;a++)null!=this.aa[a]&&this.aa[a].D();this.aa=[null,null,null,null];a=this.qa;this.qa=null;null!=a&&a.removeChild(this)};
Ec.prototype.Tg=function(a){if(!this.aa[a]){var b=this.f,b=[b[0]+1,b[1]<<1,b[2]<<1];switch(a){case 1:b[1]++;break;case 2:b[2]++;break;case 3:b[1]++,b[2]++}this.aa[a]=new Ec(this.c,this,b)}};Ec.prototype.Vm=function(a){null!=this.aa[a]&&(this.aa[a].D(),this.aa[a]=null)};Ec.prototype.removeChild=function(a){for(var b=0;4>b;b++)this.aa[b]==a&&(this.aa[b].D(),this.aa[b]=null)};function Gc(a,b,c,d,e,f,g){var k=a.rn[b];k||(k=new Hc(a.c,b,c,d,e,f,g),a.rn[b]=k);return k}
function Ic(a,b){for(var c in a.qf)a.qf[c]==b&&delete a.qf[c]}function Jc(a,b,c,d){var e=a.qf,f;for(f in e)if(e[f].B==b)return e[f];f=b.oh(a.f);return e[f]?(b=e[f].clone(b),a.qf[f]=b):c?(b=new Kc(a,b,d),a.qf[f]=b):null}function Ib(a,b){this.c=a;this.vg=null!=b?b:Number.MAX_VALUE;this.sb=this.Pb=null;this.pd=0}function Lc(a,b){if(null!=b&&a.sb!=b){null!=b.Gb&&(b.Gb.ac=b.ac);null!=b.ac&&(b.ac.Gb=b.Gb);a.Pb==b&&(a.Pb=b.Gb);var c=a.sb;a.sb=b;a.sb.ac=c;a.sb.Gb=null;c.Gb=a.sb}}l=Ib.prototype;
l.clear=function(){for(var a=this.sb;null!=a;)null!=a.bh&&a.bh(),a=a.ac;this.sb=this.Pb=null;this.pd=0};function Mc(a,b,c){b={bh:b,gl:c,Gb:null,ac:a.sb};null!=a.sb&&(a.sb.Gb=b);a.sb=b;null==a.Pb&&(a.Pb=b);a.pd+=c;mc(a);return b}l.remove=function(a){var b=!1;a==this.sb&&(this.sb=a.ac,b=!0,null!=this.sb&&(this.sb.Gb=null));a==this.Pb&&(this.Pb=a.Gb,b=!0,null!=this.Pb&&(this.Pb.ac=null));if(!b){if(a.Gb)a.Gb.ac=a.ac;else debugger;if(a.ac)a.ac.Gb=a.Gb;else debugger}this.pd-=a.gl;a.bh();mc(this)};
function mc(a){for(;a.pd>a.vg;){var b=a.Pb;if(null!=b)a.Pb=a.Pb.Gb,null!=a.Pb&&(a.Pb.ac=null),a.pd-=b.gl,b.bh();else break}}l.Rn=function(a,b){return Mc(this,b,a)};l.removeItem=function(a){return this.remove(a)};l.Yp=function(a){return Lc(this,a)};Ib.prototype.addItem=Ib.prototype.Rn;Ib.prototype.removeItem=Ib.prototype.removeItem;Ib.prototype.itemUsed=Ib.prototype.Yp;function Gb(a,b){this.c=a;b instanceof Gb?this.s=b.s.slice():(this.s=null!=b&&b instanceof Array?b.slice():[],this.Kn())}l=Gb.prototype;
l.clone=function(){return new Gb(this.c,this.s)};function yc(a){return[a.s[1],a.s[2],a.s[4]]}function Vc(a,b){a.s[1]=b[0];a.s[2]=b[1];a.s[4]=b[2];return a}function Wc(a,b){a.s[1]=b[0];a.s[2]=b[1]}function Xc(a,b){a.s[4]=b;return a}l.Mb=function(){return[this.s[5],this.s[6],this.s[7]]};l.setOrientation=function(a){this.s[5]=a[0];this.s[6]=a[1];this.s[7]=a[2];return this};l.Wd=function(){return this.s[9]};function Yc(a,b){a.s[9]=b;return a}function Zc(a,b){a.s[8]=b;return a}
function zc(a){return.5*a.s[8]/Math.tan(q.Oa(.5*a.Wd()))}l.check=function(){this.s[6]=q.le(this.s[6],-90,90);this.s[5]%=360;this.s[7]%=360};function $c(a,b,c,d){var e=yc(a),f;cc(a.c).Ad();d=null==d?1:d;bc(cc(a.c))?(d=q.Oa(b),d=[-Math.sin(d),Math.cos(d)],Wc(a,[e[0]+d[0]*c,e[1]+d[1]*c])):(f=cc(a.c).Ad(),c=(new GeographicLib.Geodesic.Geodesic(f.a,f.a/f.b-1)).Direct(e[1],e[0],b,c),Wc(a,[c.lon2,c.lat2]),e=a.Mb(),e[0]+=(c.azi1-c.azi2)*d,a.setOrientation(e));return a}
function ad(a,b){if(b==a.s[0])return a;if("obj"==b){if("float"==a.s[3]){var c=!0;bd(a,"fix")}var d=zc(a),e=a.Mb(),f=q.Oa(-e[1]),g=d*Math.sin(f),d=d*Math.cos(f);bc(cc(a.c))?(e=q.Oa(e[0]),e=[-Math.sin(e),Math.cos(e)],f=yc(a),f[0]+=e[0]*d,f[1]+=e[1]*d):($c(a,-e[0],d),f=yc(a));f[2]-=g;Vc(a,f);c&&bd(a,"float")}else"subj"==b&&(f=cd(a,a.s[3]),Vc(a,f));a.s[0]=b;return a}
function bd(a,b){if(a.s[3]==b)return a;var c=xc(a.c,yc(a),a.s[8],a.c.h.Dd),c=a.c.Dc(yc(a),c);"float"==b?(a.s[3]=b,a.s[4]-=c[0]):"fix"==b&&(a.s[3]=b,a.s[4]+=c[0]);return a}
l.Kn=function(){var a=this.s;"fixed"==a[0]&&(a[0]="obj",a[9]=a[8],a[8]=a[7],a[7]=a[6],a[6]=a[5],a[5]=a[4],a[4]=a[3],a[3]="fix");a[0]="obj"==a[0]||"subj"==a[0]?a[0]:"obj";a[1]=null!=a[1]?a[1]:0;a[2]=null!=a[2]?a[2]:0;a[3]="fix"==a[3]||"fixed"==a[3]||"float"==a[3]?a[3]:"float";a[4]=null!=a[4]?a[4]:0;a[5]=null!=a[5]?a[5]:0;a[6]=null!=a[6]?a[6]:-90;a[7]=null!=a[7]?a[7]:0;a[8]=null!=a[8]?a[8]:900;a[9]=null!=a[9]?a[9]:55;a[3]="fixed"==a[3]?"fix":a[3]};
function cd(a,b){var c=a.Mb(),d=q.i.create();q.i.multiply(q.dc(2,q.Oa(c[0])),q.dc(0,q.Oa(c[1])),d);if("obj"==a.s[0]){var d=yc(a),e=0,c=-1;if("float"==a.s[3])var c=xc(a.c,yc(a),a.s[8],a.c.h.Dd),f=a.c.Dc(yc(a),c),e=f[0];f=a.nh(bc(cc(a.c)));bc(cc(a.c))?(d[0]+=f.bc[0],d[1]+=f.bc[1],d[2]+=f.bc[2]+e):(d=a.c.hb([d[0],d[1],d[2]+e],"navigation","physical"),d[0]+=f.bc[0],d[1]+=f.bc[1],d[2]+=f.bc[2],d=a.c.hb(d,"physical","navigation"));"fix"!=b&&(-1==c&&(c=xc(a.c,d,a.s[8],a.c.h.Dd)),f=a.c.Dc(d,c),d[2]-=f[0]);
return d}if(a.s[3]==b)return yc(a);c=xc(a.c,yc(a),a.s[8],a.c.h.Dd);f=a.c.Dc(yc(a),c);d=yc(a);d[2]="fix"==b?d[2]+f[0]:d[2]-f[0];return d}function dd(a,b){var c=yc(a);if("float"==a.s[3]){b=null!=b?b:xc(a.c,yc(a),a.s[8],a.c.h.Dd);var d=a.c.Dc(yc(a),b);c[2]+=d[0]}c=a.c.hb(c,"navigation","physical");d=a.c.ba;c[0]-=d[0];c[1]-=d[1];c[2]-=d[2];return c}l.te=function(a,b){if(b)var c=this.c.ba,d=yc(this),c=[d[0]-c[0],d[1]-c[1],d[2]-c[2]];else c=dd(this,a);return Va(this.c.l,c,zb(this.c.L))};
function ed(a){var b=yc(a.clone());b[2]=0;var c=a.c.hb(b,"navigation","physical");if(bc(cc(a.c)))var d=a.c.hb([b[0],b[1]+100,b[2]],"navigation","physical"),b=a.c.hb([b[0]+100,b[1],b[2]],"navigation","physical");else if(d=b[0]+180+1E-4,0>b[1]+90-1E-4||180<d){var e=vc(a.c),f=e.Direct(b[1],b[0],0,-100),d=a.clone();Wc(d,[f.lon2,f.lat2]);d=a.c.hb(yc(d),"navigation","physical");f=e.Direct(b[1],b[0],90,100);b=a.clone();Wc(b,[f.lon2,f.lat2]);b=a.c.hb(yc(b),"navigation","physical")}else d=a.c.hb([b[0],b[1]-
1E-4,b[2]],"navigation","physical"),b=a.c.hb([b[0]+1E-4,b[1],b[2]],"navigation","physical");a=[d[0]-c[0],d[1]-c[1],d[2]-c[2]];c=[b[0]-c[0],b[1]-c[1],b[2]-c[2]];b=[0,0,0];q.O.normalize(a);q.O.normalize(c);q.O.Fi(a,c,b);q.O.normalize(b);return{xl:c,ol:a,Hm:b}}
l.nh=function(a,b){var c=this.Mb(),d=zc(this);b&&(c[1]=q.le(c[1],-89,90));var e=q.i.create();q.i.multiply(q.dc(2,q.Oa(c[0])),q.dc(0,q.Oa(c[1])),e);if("obj"==this.s[0]){var f=[0,-d,0];q.i.cb(e,f)}else f=[0,0,0];d={bc:null,xa:d,qk:null,Qg:null,Gq:f[2]};if(a){e=q.i.create();q.i.multiply(q.dc(0,q.Oa(-c[1]-90)),q.dc(2,q.Oa(-c[0])),e);var g=ed(this);north_=g.Hm;east_=g.xl;direction_=g.ol;var c=[1,0,0],g=[0,1,0],k=[0,0,1],h=[1,0,0],m=[0,0,-1],n=[0,0,0];q.O.Fi(h,m,n);q.i.cb(e,k);q.i.cb(e,c);q.i.cb(e,g);q.i.cb(e,
h);q.i.cb(e,m);q.i.cb(e,n);e=h[0];h[0]=h[1];h[1]=e;e=m[0];m[0]=m[1];m[1]=e;e=n[0];n[0]=n[1];n[1]=e;h[2]=-h[2];m[2]=-m[2];n[2]=-n[2];g=[c[0],c[1],c[2],0,g[0],g[1],g[2],0,k[0],k[1],k[2],0,0,0,0,1];d.Qg=q.O.normalize([-f[0],-f[1],-f[2]]);d.ss=d.Qg;d.bc=f;d.qk=g}else g=ed(this),north_=g.Hm,east_=g.xl,direction_=g.ol,e=q.i.create(),q.i.multiply(q.dc(0,q.Oa(-c[1]-90)),q.dc(2,q.Oa(-c[0])),e),c=[1,0,0],g=[0,1,0],k=[0,0,1],h=yc(this),m=q.i.create(),q.i.multiply(q.dc(0,q.Oa(h[1]-90)),q.dc(2,q.Oa(-h[0]-90)),
m),q.i.cb(m,k),q.i.cb(m,c),q.i.cb(m,g),c=[c[0],c[1],c[2],0,g[0],g[1],g[2],0,k[0],k[1],k[2],0,0,0,0,1],n=[1,0,0],h=[0,1,0],m=[0,0,1],q.i.cb(c,h),q.i.cb(c,m),q.i.cb(c,n),q.i.cb(e,n),q.i.cb(e,h),q.i.cb(e,m),g=[n[0],n[1],n[2],0,h[0],h[1],h[2],0,m[0],m[1],m[2],0,0,0,0,1],c=q.i.inverse(c),q.i.cb(c,f),d.ss=[-c[8],-c[9],-c[10]],q.i.inverse(g,c),d.Qg=[-c[8],-c[9],-c[10]];d.bc=f;d.qk=g;return d};
l.toString=function(){var a=this.s;return a[0]+", "+a[1].toFixed(0)+", "+a[2].toFixed(0)+", "+a[3]+", "+a[4].toFixed(0)+", "+a[5].toFixed(0)+", "+a[6].toFixed(0)+", "+a[7].toFixed(0)+", , "+a[8].toFixed(0)+", "+a[9].toFixed(0)};function Xb(a,b){this.c=a;this.f=b.id||null;this.Wj=b.notice||null;this.rd=b.url||null;this.Pp=q.dn(this.Wj);this.Lq=q.dn(this.Wj)}Xb.prototype.Lb=function(){return{id:this.f,notice:this.Wj,html:this.Pp,plain:this.Lq}};
Fb.prototype.Ua=function(a,b,c){this.Gd=.5*this.l.ha[0];var d=this.zd().Mb(),d=Math.log(.05)/(Math.max(5,-d[1])/90*Math.max(1,1E-4*this.ud)*this.L.qe),d=5/(Math.min(5E4,Math.max(this.ic,1E3))/5E3)*d;this.Xf||(d=0);this.se=d;this.l.se=d;for(var d=this.Ra.ad.ta,e=0,f=d.length;e<f;e++){var g=d[e],k=2*(g.R.Z[0]-g.R.W[0]),h=Math.log(Math.min(k,Math.max(10,this.ic+20)))/this.pm,h=Math.log(k)/this.pm-h;g.Dp=h-Math.floor(h);h=Math.floor(Math.floor(h))+1;g.$l=Math.pow(8,h);g.Ep=8*g.$l}this.Be=.9*this.Wb.vg;
this.Ni=this.m.Sa=0;d=this.ba;if(this.sl){if(this.A.Jf||this.A.If)this.A.be=[];if(this.A.Jo||this.A.vl||this.A.Ki||this.A.ul||this.A.tl||this.A.Li){a=this.A.fa;b=this.A.Hr;if(this.A.vl&&this.A.Rd)for(k=this.A.Rd,e=0,f=k.length;e<f;e++)g=k[e],(b&&g.f[0]==a||!b&&g.f[0]<=a)&&fd(this,g,g.w,d,g.pc,!1,!1);if(this.A.Ki&&this.A.fh)for(k=this.A.fh,e=0,f=k.length;e<f;e++)g=k[e],(b&&g.f[0]==a||!b&&g.f[0]<=a)&&fd(this,g,g.w,d,g.pc,!1,!1);if(this.A.ul&&this.A.Hk){var k=this.A.Hk,m=this.zc;this.zc=!0;e=0;for(f=
k.length;e<f;e++)g=k[e],(b&&g.f[0]==a||!b&&g.f[0]<=a)&&gd(this,g,g.w,d,g.Ea);this.zc=m}if(this.A.tl&&this.A.Gk){k=this.A.Gk;m=this.zc;this.zc=!0;e=0;for(f=k.length;e<f;e++)g=k[e],(b&&g.f[0]==a||!b&&g.f[0]<=a)&&gd(this,g,g.w,d,g.Ea);this.zc=m}c=this.A.om;k=this.A.Ir;if(this.A.Li&&this.A.Ic){h=this.A.Ic;this.zc=!0;e=0;for(f=h.length;e<f;e++)(g=h[e])&&g.G&&g.G.f&&(g=g.G,(k&&e==c||!k&&e<=c)&&(b&&g.f[0]==a||!b&&g.f[0]<=a)&&g.w&&(0!=(g.w.I&1)?fd(this,g,g.w,d,g.pc,!1,!1):gd(this,g,g.w,d,g.Ea)));this.zc=
m}(this.A.Ki&&this.A.fh||this.A.Li&&this.A.Ic)&&this.ih&&(Db(this.l),Eb(this.l));return}e=0;for(f=this.Hb.length;e<f;e++)this.Hb[e]=null;0<this.xb.Ne.length&&this.xb.Ua(c);if(this.A.Jg){m=[];e=0;for(f=this.Hb.length;e<f;e++)if(k=this.Hb[e])for(var h=0,n=k.length;h<n;h++)m.push(k[h]);this.A.Pf=d;this.A.Rd=m;this.A.Jg=!1}if(this.A.Jf){m=[];e=0;for(f=this.A.be.length;e<f;e++)g=this.A.be[e],m.push(g);this.A.Pf=d;this.A.Hk=m;this.A.Jf=!1}e=0;for(f=this.Zf.length;e<f;e++)m=this.Zf[e],m.pa&&m.xb&&(!m.Pa||
m.he&&m.he.V())&&("geodata"==m.T?m&&this.L.Xc(m.R,this.ba)&&(null==m.$h&&(g=Dc(m.c,m.ag,{},null,void 0),m.$h=new hd(this,g,{G:null,B:m})),m.Cm!=m.Td&&(m.wg=null,m.Cm=m.Td),m.$h.V()&&(m.wg||(m.wg=new id(this,m.$h,{G:null,B:m})),m.wg.V()&&m.wg.Ua(this.ba))):m.xb.Ua(c));if(this.A.Ig){m=[];e=0;for(f=this.Hb.length;e<f;e++)if(k=this.Hb[e])for(h=0,n=k.length;h<n;h++)g=k[h],g.B&&g.B.jh&&m.push(g);this.A.Pf=d;this.A.fh=m;this.A.Ig=!1}if(this.A.If){m=[];e=0;for(f=this.A.be.length;e<f;e++)g=this.A.be[e],g.B&&
g.B.jh&&m.push(g);this.A.Pf=d;this.A.Gk=m;this.A.If=!1}}!b&&this.Xf&&"melown2015"==this.Ra.f&&(b=cc(this).Ad().a,m=[0,0,0,0],q.O.normalize(this.ba,m),q.O.length(this.ba),c=this.zd().Mb(),c=1-Math.max(0,Math.min(1,this.ud/(5E4*(10+Math.max(5,-c[1])/90*20)))),c=[Math.max(2,c*c*128),0,0,0],this.ud>2*b&&(c[0]=2-Math.min(1,(this.ud-2*b)/(2*b))),this.l.j.ec(this.Ao),Cb(this.l,[-this.ba[0],-this.ba[1],-this.ba[2]],b,this.l.Zq,c,m,null,!0),c=[2,(b+5E4)/b*2,.25,(b+5E4)/b*2],m=1/b*2,m=[this.ba[0]*m,this.ba[1]*
m,this.ba[2]*m,1],d=1.4,e=1.6,6E4<this.ud?(e=1.8,d=[e,1,e,0]):(5E3>this.ud&&(d=1.05,e=1.12),d=[d,5.2/(e-d),e,0]),this.l.j.ec(this.Bo),Cb(this.l,[-this.ba[0],-this.ba[1],-this.ba[2]],b+5E4,this.l.$q,c,m,d),this.l.j.ec(this.Oi));this.sl&&!a&&this.ih&&(Db(this.l),Eb(this.l))};
function jd(a,b,c,d){var e=!0;d=d?!1:!0;for(var f=0,g=a.length;f<g;f++){var k=a[f];switch(k.T){case "submesh":var h=k.Rb,k=k.J,h=h&&h.V(c,b,d),k=!k||k&&k.V(c,b,d);h&&k||(e=!1);break;case "geodata":(h=k.El)&&h.V(c,b,d)||(e=!1)}}return e}function kd(a,b){for(var c in b.Cb){var d=b.Cb[c],e=a.Vc.mg[c];a.Vc.mg[c]=e?d>e?d:e:d}for(c in b.ue)d=b.ue[c],e=a.Vc.mg[c],a.Vc.sh[c]=e?d>e?d:e:d;for(c in b.$d)d=b.$d[c],e=a.Vc.Th[c],a.Vc.Th[c]=e?d>e?d:e:d}
function ld(a,b,c,d,e){0<c.length&&a.Ni++;for(var f=0,g=c.length;f<g;f++){var k=c[f];switch(k.T){case "state":a.l.j.ec(k.Id);break;case "submesh":var h=k.Rb,m=k.J,n=h&&h.V(e,d),p=!m||m&&m.V(e,d);if(n&&p)if(a.zc&&a.Mi&&h.lb[k.sc].df(b),m)md(h,b,k.sc,m,k.Lc,k.Od);else{n=k.Lc;switch(n){case "external":case "internal":n="flat"}md(h,b,k.sc,m,n,k.Od)}break;case "geodata":(k=k.El)&&k.V(e,d,!0)&&k.Ua(b)}}}q.Hs=[144,8880,5492];
function fd(a,b,c,d,e,f,g,k){if(a.m.Bb>=a.Be)return!1;b.lk=!1;if(b.B){if(0!=(c.I&1)){a.zc&&!f&&gd(a,b,c,d,b.Ea);if(a.Lp&&!f)return b.B.Pa||nd(b,d),!0;f||(a.m.ii[b.f[0]]++,a.m.Rd++,b.B.Pa&&a.m.Pi++);if(b.Ie){b.ea=[[],[],[]];b.Og=!0;if(b.wc)for(var h in b.wc)b.wc[h].sd=0;b.Ie=!1}if(b.B.Pa)if(1>=b.f[0])b=!0;else{if(null==b.od){var m;if(b.B.Dl){h=b.f;var n=a.xb.Oe;if(0==h[0])h=n.w&&0!=(n.w.I&2)?n:null;else{for(var p=null,w=h[0];0<w;w--){var r=1<<w-1,t=0;0!=(h[1]&r)&&(t+=1);0!=(h[2]&r)&&(t+=2);if(n=n.aa[t])n.w&&
0!=(n.w.I&2)&&(p=n);else break}h=p}h&&h.B&&(m=h.B.cj(h.f)+";"+h.f[0]+"-"+h.f[1]+"-"+h.f[2]+";"+h.w.kd+";"+h.w.jd,m=od(b.B,b.f,encodeURIComponent(m)))}m||(m=od(b.ua,b.f,""));h=b.cc;n={G:b,B:b.B};p=h.Pa[m];p||(p=new hd(h.c,m,n),h.Pa[m]=p);b.od=p}m=a.cd;b.Td!=b.B.Td&&(b.ea=[[],[],[]],null!=b.Tb&&b.Tb.D(),b.Tb=null,b.Td=b.B.Td);if(0<b.ea[m].length&&jd(b.ea[m],e,g,k))f||(ld(a,d,b.ea[m],e),kd(a,b)),b.Ob=null,b=!0;else if(b.Tb||!b.od.V(g,e)||g||(b.Tb=new id(a,b.od,{G:b,B:b.B})),b.Tb){b.$d={};a=b.B?b.B.ge:
0;d=0;for(e=c.F.length;d<e;d++)b.$d[c.F[d]]=a;b.ea[m][0]={T:"geodata",El:b.Tb};b=b.Tb.V()}else b=!1}else a:{if(!b.Ea){if(b.ua.td){b=!0;break a}m=b.ua;h=b.f;t=Dc(m.c,m.Yh,{fa:h[0],ib:h[1],jb:h[2]},null,void 0);m=b.cc;h=t;n=m.zm[h];n||(n=new pd(m.c,h,b),m.zm[h]=n);b.Ea=n}m=a.cd;h=!1;if(0<b.ea[m].length&&jd(b.ea[m],e,g,k))f||(ld(a,d,b.ea[m],e),kd(a,b)),b.Ob=null,b=!0;else{if(b.Ob)if(1==b.Ea.V(!0,e)){if(0<b.ea[m].length){f||(ld(a,d,b.Ob.ea[m],e,!0),kd(a,b));b=!0;break a}}else f||(ld(a,d,b.Ob.ea[m],e,
!0),kd(a,b)),h=!0;0<b.ea[m].length&&a.h.pf&&!f&&(nd(b,d),h=!0);if(b.Ea.V(g,e)&&!g){n=b.Ea.lb;b.ea=[[],[],[]];b.Cb={};b.Jb={};var u=0;if(b.B.ve){t=b.B.f;p=0;for(w=t.length;p<w;p++)(r=a.Xd(t[p]))&&(u=Math.max(u,r.ge));for(var t=0,x=c.F.length;t<x;t++)b.ue[c.F[t]]=u}else for(u=b.B.ge,t=0,x=c.F.length;t<x;t++)b.Cb[c.F[t]]=u;p=0;for(w=n.length;p<w;p++){c=n[p];a.zc&&a.Mi&&!f&&c.df(d);if(c.Ac){if(b.Og){b.Og=!1;for(var t=a,r=b,x=n,u=0,H=x.length;u<H;u++){var y=x[u];if(y.Ac){var I=r.ua;r.ua.ve&&(I=r.ua.Me[y.Me-
1]);if(I){var D=r.wc[I.f];D||(D={Rc:[],Od:[],pi:!1,sd:0},r.wc[I.f]=D);if(D.sd!=r.sd){var L=t,C=r,v=y,y=I,I=D,D=D.sd!=r.sd;if(0<y.hc.length){if(D){I.Rc=[];for(var L=[],O=v=0,ia=y.hc.length;O<ia;O++){var F=y.hc[O][0];if(F&&F.pa&&Bc(F,C.f)&&0<y.hc[O][1]){var fa=null;C.f[0]>F.na[1]&&(fa={Je:qd(C,F.na[1]),hn:null,Ha:F,G:C});D=C.Za[F.f];D||(D=Cc(F,C.f),D=Gc(C.cc,D,null,fa,{G:C,Ha:F},C,!1),D.V(!0),C.Za[F.f]=D);!D.zg&&(rd(D)&&(I.pi=!0),(D=!(1>y.hc[O][1]||D.K||rd(D)||F.xh))&&v++,L.push(D),I.Rc.push(F.f),I.Od[F.f]=
y.hc[O],C.Ta[F.f]=F,1>I.Od[F.f][1]||F.xh)&&(I.pi=!0)}}if(0<v){y=[];for(v=I.Rc.length-1;0<=v;v--)if(O=I.Rc[v],L[v]){y.unshift(O);break}else D=C.Za[O],(1>I.Od[O][1]||C.Ta[O].xh||rd(D)&&!D.K)&&y.unshift(O);I.Rc=y}}}else null!=y.Jd?D&&(F=L.Ta[y.Jd])&&Bc(F,C.f)&&(fa=null,C.f[0]>F.na[1]&&(fa={Je:qd(C,F.na[1]),hn:null,Ha:F,G:C}),I.Rc.push(F.f),C.Ta[F.f]=F,C.Za[F.f]||(D=Cc(F,C.f),C.Za[F.f]=Gc(C.cc,D,null,fa,{G:C,Ha:F},C,!1))):0!=v.Jd&&(F=oc(L,v.Jd))&&Bc(F,C.f)&&(fa=null,C.f[0]>F.na[1]&&(fa={Je:qd(C,F.na[1]),
hn:null,Ha:F,G:C}),C.Ta[F.f]=F,C.Za[F.f]||(D=Cc(F,C.f),C.Za[F.f]=Gc(C.cc,D,null,fa,{G:C,Ha:F},C,!1)))}}}}t=void 0;for(t in r.wc)r.wc[t].sd=r.sd}r=b.ua;b.ua.ve&&(r=b.ua.Me[c.Me-1]);if(null!=r&&(u=b.wc[r.f]))if(c.Ac)if(0<u.Rc.length)if(u.pi){c.Xb&&(null==b.eb[p]&&(t=sd(b.ua,b.f,p),b.eb[p]=Gc(b.cc,t,null,null,null,b,!0)),b.ea[0].push({T:"submesh",Rb:b.Ea,sc:p,J:b.eb[p],Lc:"internal-nofog"}));b.ea[0].push({T:"state",Id:a.Co});H=u.Rc;C=0;for(I=H.length;C<I;C++)if(c=b.Za[H[C]]){b.Jb[r.f]||(b.Jb[r.f]=[]);
b.Jb[r.f].push(H[C]);y=b.Ta[H[C]];L=y.F;t=0;for(x=L.length;t<x;t++)b.Cb[L[t]]=y.ge;b.ea[0].push({T:"submesh",Rb:b.Ea,sc:p,J:c,Lc:"external-nofog",Od:u.Od[H[C]][1]})}b.ea[0].push({T:"submesh",Rb:b.Ea,sc:p,J:null,Lc:"fog"});b.ea[0].push({T:"state",Id:a.Oi})}else{if(t=u.Rc[u.Rc.length-1],c=b.Za[t]){b.Jb[r.f]||(b.Jb[r.f]=[]);b.Jb[r.f].push(t);y=b.Ta[t];L=y.F;t=0;for(x=L.length;t<x;t++)b.Cb[L[t]]=y.ge;b.ea[0].push({T:"submesh",Rb:b.Ea,sc:p,J:c,Lc:"external"})}}else if(c.Jd){if(y=oc(a,c.Jd))if(c=b.Za[y.f]){b.Jb[r.f]||
(b.Jb[r.f]=[]);b.Jb[r.f].push(y.f);y=b.Ta[y.f];L=y.F;t=0;for(x=L.length;t<x;t++)b.Cb[L[t]]=y.ge;b.ea[0].push({T:"submesh",Rb:b.Ea,sc:p,J:c,Lc:"external"})}}else c.Xb?(null==b.eb[p]&&(t=sd(b.ua,b.f,p),b.eb[p]=Gc(b.cc,t,null,null,null,b,!0)),b.ea[0].push({T:"submesh",Rb:b.Ea,sc:p,J:b.eb[p],Lc:"internal"})):b.ea[0].push({T:"submesh",Rb:b.Ea,sc:p,J:null,Lc:"flat"});else c.Xb&&(null==b.eb[p]&&(t=sd(b.ua,b.f,p),b.eb[p]=Gc(b.cc,t,null,null,null,b,!0)),b.ea[0].push({T:"submesh",Rb:b.Ea,sc:p,J:b.eb[p],Lc:"internal"}))}else c.Xb&&
(null==b.eb[p]&&(t=sd(b.ua,b.f,p),b.eb[p]=Gc(b.cc,t,null,null,null,b,!0)),b.ea[0].push({T:"submesh",Rb:b.Ea,sc:p,J:b.eb[p],Lc:"internal"}));b.ea[1].push({T:"submesh",Rb:b.Ea,sc:p,Lc:"depth"})}jd(b.ea[m],e,g,k)?(f||(ld(a,d,b.ea[m],e),kd(a,b)),b.Ob=null,h=!0):b.Ob?(f||(ld(a,d,b.Ob.ea[m],e,!0),kd(a,b)),h=!0):a.h.pf&&!f&&(nd(b,d),h=!0)}else a.h.pf&&!f&&(nd(b,d),h=!0);b=h}}return b}return!0}if(!f&&b.Ob)return ld(a,d,b.Ob.ea[a.cd],e,!0),kd(a,b),!0}function qd(a,b){for(;a&&a.f[0]>b;)a=a.qa;return a}
function gd(a,b,c,d,e){a.Mi||c.df(d);var f=c.v.N,g=c.v.la;d=a.C.qh().te([f[0]+.5*(g[0]-f[0])-d[0],f[1]+.5*(g[1]-f[1])-d[1],g[2]-d[2]],zb(a.L));d[2]*=.9992;g=a.xo;a.Mo&&(k=""+b.f[0],sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]-4*g),4*g,k,[1,0,0,1],d[2]));if(a.Js){var k=""+b.f[1]+" "+b.f[2];sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]-11*g),4*g,k,[0,1,1,1],d[2])}a.Ro&&(k=""+f[0].toFixed(1)+" "+f[1].toFixed(1)+" "+f[2].toFixed(1),sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+3*
g),4*g,k,[0,1,1,1],d[2]));a.Io&&e&&(k=""+e.Sd+" - "+e.lb.length+(b.B&&b.B.ve?" - 1":" - 0"),sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+10*g),4*g,k,[0,1,0,1],d[2]));a.Qo&&(k=""+a.Ni,sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+10*g),4*g,k,[0,1,0,1],d[2]));a.To&&(k=JSON.stringify(b.B.f),c.Of&&(k="[A]"+k),sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+10*g),4*g,k,[1,1,1,1],d[2]));if(a.Do&&b.Jb){var h=b.ua;if(h.ve)for(var f=0,m=h.f.length;f<m;f++)b.Jb[h.f[f]]&&(k="< "+h.f[f]+" >",
sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+(10+14*f)*g),4*g,k,[1,1,1,1],d[2]),k=JSON.stringify(b.Jb[h.f[f]]),sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+(17+14*f)*g),4*g,k,[1,1,1,1],d[2]));else b.Jb[h.f]&&(k="< "+h.f+" >",sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+10*g),4*g,k,[1,1,1,1],d[2]),k=JSON.stringify(b.Jb[h.f]),sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+17*g),4*g,k,[1,1,1,1],d[2]))}if(a.Fo){var k="{ ",n;for(n in b.Cb)b.Cb[n]&&(k+=n+":"+b.Cb[n]+", ");
for(n in b.ue)b.Cb[n]||(k+=n+":"+b.ue[n]+", ");k+="}";sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+10*g),4*g,k,[1,1,1,1],d[2])}a.Ho&&(k=""+b.xa.toFixed(2)+"  "+b.rb.toFixed(3)+"  "+c.wf.toFixed(3),k+="--"+b.Qr.toFixed(3),sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+17*g),4*g,k,[1,0,1,1],d[2]));a.Po&&(n=(c.I&240)>>4,k=""+c.I.toString(2)+"-"+(n&1?"1":"0")+(n&2?"1":"0")+(n&4?"1":"0")+(n&8?"1":"0"),k+="-"+c.kd+"/"+c.jd,sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]-18*g),4*g,k,[1,
0,1,1],d[2]));if(a.Uo&&e)for(c=e.lb,f=0,m=c.length;f<m;f++)c[f].Xb&&(e=b.eb[f])&&e.Xa&&(k="["+f+"]: "+e.Xa.Md+" x "+e.Xa.kf,sb(a.l,Math.round(d[0]-.5*tb(4*g,k)),Math.round(d[1]+(17+14*f)*g),4*g,k,[1,1,1,1],d[2]))}function Z(a){this.c=a;this.h=a.h}l=Z.prototype;l.setPosition=function(a){this.c.setPosition(a);return this};l.zd=function(){return this.c.zd().s};l.Ef=function(a){this.c.Ef(a);return this};l.hj=function(){return this.c.hj()};l.Zi=function(){return this.c.Zi()};
l.jp=function(){var a=this.c,b=a.Vc.mg,c=a.Vc.sh,d=[],e=[],f;for(f in c)b[f]||(b[f]=c[f]);a.Vc.sh={};for(f in b)d.push(f),e.push(b[f]);do for(var g=!0,b=0,c=e.length-1;b<c;b++)e[b]<e[b+1]&&(g=e[b],e[b]=e[b+1],e[b+1]=g,g=d[b],d[b]=d[b+1],d[b+1]=g,g=!1);while(!g);b=a.Vc.Th;a=[];e=[];for(f in b)a.push(f),e.push(b[f]);do for(g=!0,b=0,c=e.length-1;b<c;b++)e[b]<e[b+1]&&(g=e[b],e[b]=e[b+1],e[b+1]=g,g=a[b],a[b]=a[b+1],a[b+1]=g,g=!1);while(!g);return{"3D":[],imagery:d,mapdata:a}};
l.ip=function(a){return(a=this.c.F[a])?a.Lb():{}};l.Cp=function(){return nc(this.c.yg)};l.Bp=function(a){return(a=this.c.yg[a])?a.Lb():{}};l.Yi=function(){return this.c.Yi()};l.Gl=function(a){return this.c.Gl(a)};l.aj=function(){return this.c.aj()};l.kp=function(a){return(a=this.c.Wa[a])?a.Lb():{}};l.gj=function(){return this.c.gj()};l.Ap=function(a){return(a=this.c.Wa[a])?a.Lb():{}};l.fj=function(){return this.c.fj(surfaceId_)};l.Ad=function(a){return(a=this.c.Ke[a])?a.Lb():{}};l.zp=function(){return this.c.Ra.Lb()};
l.ro=function(a,b){var c=ad(new Gb(this.c,a),b);return null!=c?c.s:c};l.qo=function(a,b){var c=bd(new Gb(this.c,a),b);return null!=c?c.s:c};l.hb=function(a,b,c){a=this.c.Ke[a];b=this.c.Ke[b];return a&&b?td(b,c,a):null};l.no=function(a,b,c){return(new Gb(this.c,["obj",a[0],a[1],b,a[2],0,0,0,10,90])).te(c)};l.po=function(a){return(new Gb(this.c,["obj",a[0],a[1],"fix",a[2],0,0,0,10,90])).te(null,!0)};l.mo=function(a,b,c){return dd(new Gb(this.c,["obj",a[0],a[1],b,a[2],0,0,0,10,90]),c)};
l.oo=function(a){var b=this.c.ba;return[a[0]-b[0],a[1]-b[1],a[2]-b[2]]};l.jo=function(a){return(new Gb(this.c,a)).s};l.Ar=function(a,b){return Vc(new Gb(this.c,a),b).s};l.sp=function(a){return yc(new Gb(this.c,a))};l.Cr=function(a,b){return Xc(new Gb(this.c,a),b).s};l.up=function(a){return(new Gb(this.c,a)).s[4]};l.Dr=function(a,b){return(new Gb(this.c,a)).setOrientation(b).s};l.wp=function(a){return(new Gb(this.c,a)).Mb()};l.Er=function(a,b){return Zc(new Gb(this.c,a),b).s};
l.xp=function(a){return(new Gb(this.c,a)).s[8]};l.Br=function(a,b){return Yc(new Gb(this.c,a),b)};l.tp=function(a){return(new Gb(this.c,a)).Wd()};l.yp=function(a){return(new Gb(this.c,a)).s[0]};l.vp=function(a){return(new Gb(this.c,a)).s[3]};l.rp=function(a,b){return(new Gb(this.c,a)).te(b)};l.qp=function(a,b){return cd(new Gb(this.c,a),b)};l.tq=function(a,b,c,d){return $c(new Gb(this.c,a),b,c,d).s};l.Dc=function(a,b){return this.c.Dc(a,ud(this.c,a,b))};l.$i=function(a,b,c){return this.c.Ls(a,b,c)};
l.Xi=function(a,b){return this.c.Xi(a,b)};l.nh=function(){var a=this.c.L;return{"projection-matrix":a.ee.slice(),"view-matrix":a.sf.slice(),"view-projection-matrix":a.xg.slice(),"rotation-matrix":a.Af.slice(),position:this.c.ba.slice(),vector:this.c.Pd.slice(),distance:this.c.ic}};l.Xp=function(a){var b;a:{b=this.c.L;var c=this.c.ba;b.Aa&&b.update();a=c?[a[0]-c[0],a[1]-c[1],a[2]-c[2],1]:[a[0],a[1],a[2],1];for(c=0;6>c;c++)if(0>q.Qe.oe(b.Cc[c],a)){b=!1;break a}b=!0}return b};
l.Wp=function(a){return this.c.L.Xc({N:a[0],la:a[1]},this.c.ba)};l.cp=function(a,b,c){a=new Gb(this.c,a);b=new Gb(this.c,b);return(new vd(this.c,a,b,c)).Ui()};S.prototype.nd=function(a){this.c.nd(a);return this};l=Z.prototype;l.md=function(a,b){this.c.md(a,b);return this};l.Vd=function(a){return this.c.Vd(a,value_)};l.sr=function(){Y(this.c);return this};l.Ug=function(a,b,c){this.c.Ug(a,b,c);return this};l.Uj=function(a,b){this.c.Uj(a,b);return this};l.Tj=function(a,b){this.c.Tj(a,b);return this};
l.kk=function(a){this.c.kk(a);return this};l.tk=function(a,b){this.c.tk(a,b);return this};l.ej=function(a){return this.c.ej(a)};l.zr=function(a){this.c.zj=a;return this};l.np=function(){return this.c.zj};l.lp=function(){return this.c.Wb};l.bj=function(a,b,c,d){return this.c.bj(a,b,c,d)};l.ff=function(a,b){return this.c.ff(a,b)};
l.getStats=function(){for(var a=0,b=0,c=this.c.Wi;b<c;b++)this.c.Wi[b].Zk&&a++;return{bestMeshTexelSize:this.c.Xg,bestGeodataTexelSize:this.c.Vk,downloading:this.c.Zb.bd.length,lastDownload:this.c.Zb.qg,surfaces:this.c.xb.Ne.length,freeLayers:this.c.Zf.length,texelSizeFit:this.c.Kg,loadMode:this.c.h.Nh,processingTasks:this.c.ld.length,busyWorkers:a,dirty:this.c.Aa,drawnTiles:this.c.m.Rd,drawnGeodataTiles:this.c.m.Pi}};q.ys=Gb;Z.prototype.setPosition=Z.prototype.setPosition;
Z.prototype.getPosition=Z.prototype.zd;Z.prototype.setView=Z.prototype.Ef;Z.prototype.getView=Z.prototype.hj;Z.prototype.getCredits=Z.prototype.Zi;Z.prototype.getCurrentCredits=Z.prototype.jp;Z.prototype.getCreditInfo=Z.prototype.ip;Z.prototype.getViews=Z.prototype.Cp;Z.prototype.getViewInfo=Z.prototype.Bp;Z.prototype.getBoundLayers=Z.prototype.Yi;Z.prototype.getBoundLayerInfo=Z.prototype.Gl;Z.prototype.getFreeLayers=Z.prototype.aj;Z.prototype.getFreeLayerInfo=Z.prototype.kp;
Z.prototype.getSurfaces=Z.prototype.gj;Z.prototype.getSurfaceInfo=Z.prototype.Ap;Z.prototype.getSrses=Z.prototype.fj;Z.prototype.getSrsInfo=Z.prototype.Ad;Z.prototype.getReferenceFrame=Z.prototype.zp;Z.prototype.convertPositionViewMode=Z.prototype.ro;Z.prototype.convertPositionHeightMode=Z.prototype.qo;Z.prototype.convertCoords=Z.prototype.hb;Z.prototype.convertCoordsFromNavToCanvas=Z.prototype.no;Z.prototype.convertCoordsFromPhysToCanvas=Z.prototype.po;
Z.prototype.convertCoordsFromNavToCameraSpace=Z.prototype.mo;Z.prototype.convertCoordsFromPhysToCameraSpace=Z.prototype.oo;Z.prototype.clonePosition=Z.prototype.jo;Z.prototype.setPositionCoords=Z.prototype.Ar;Z.prototype.getPositionCoords=Z.prototype.sp;Z.prototype.setPositionHeight=Z.prototype.Cr;Z.prototype.getPositionHeight=Z.prototype.up;Z.prototype.setPositionOrientation=Z.prototype.Dr;Z.prototype.getPositionOrientation=Z.prototype.wp;Z.prototype.setPositionViewExtent=Z.prototype.Er;
Z.prototype.getPositionViewExtent=Z.prototype.xp;Z.prototype.setPositionFov=Z.prototype.Br;Z.prototype.getPositionFov=Z.prototype.tp;Z.prototype.getPositionViewMode=Z.prototype.yp;Z.prototype.getPositionHeightMode=Z.prototype.vp;Z.prototype.getPositionCanvasCoords=Z.prototype.rp;Z.prototype.getPositionCameraCoords=Z.prototype.qp;Z.prototype.movePositionCoordsTo=Z.prototype.tq;Z.prototype.getSurfaceHeight=Z.prototype.Dc;Z.prototype.getDistance=Z.prototype.$i;Z.prototype.getAzimuthCorrection=Z.prototype.Xi;
Z.prototype.getCameraInfo=Z.prototype.nh;Z.prototype.isPointInsideCameraFrustum=Z.prototype.Xp;Z.prototype.isBBoxInsideCameraFrustum=Z.prototype.Wp;Z.prototype.generateTrajectory=Z.prototype.cp;Z.prototype.setConfigParam=Z.prototype.md;Z.prototype.getConfigParam=Z.prototype.Vd;Z.prototype.redraw=Z.prototype.sr;Z.prototype.addRenderSlot=Z.prototype.Ug;Z.prototype.moveRenderSlotBefore=Z.prototype.Uj;Z.prototype.moveRenderSlotAfter=Z.prototype.Tj;Z.prototype.removeRenderSlot=Z.prototype.kk;
Z.prototype.setRenderSlotEnabled=Z.prototype.tk;Z.prototype.getRenderSlotEnabled=Z.prototype.ej;Z.prototype.setLoaderSuspended=Z.prototype.zr;Z.prototype.getLoaderSuspended=Z.prototype.np;Z.prototype.getGpuCache=Z.prototype.lp;Z.prototype.getHitCoords=Z.prototype.bj;Z.prototype.getScreenRay=Z.prototype.ff;Z.prototype.getStats=Z.prototype.getStats;function Rb(a,b){this.c=a;this.Xh=b||1;this.si=0;this.Vh=2*this.Xh;this.zl=.95;this.vf=[[],[]];this.$g=0;this.bd=[];this.cf=[];this.qg=0;wd(this)}
function wd(a){a.Xh=a.c.h.Kh;a.Vh=Math.max(20,2*a.Xh);a.zl=(a.Vh-1)/a.Vh}l=Rb.prototype;l.load=function(a,b,c,d,e){var f=this.bd.indexOf(a);if(-1==f){var g=this.vf[this.$g],f=uc(g,a);-1!=f?g[f].pc=c:g.unshift({f:a,$k:b,pc:c||0,G:d,Ch:e});do for(c=!0,a=0,b=g.length-1;a<b;a++)g[a].pc>g[a+1].pc&&(c=g[a],g[a]=g[a+1],g[a+1]=c,c=!1);while(!c);g.length>this.Vh&&g.pop()}};l.remove=function(a){a=uc(this.vf[this.$g],a);-1!=a&&this.vf[this.$g].splice(a,1)};
l.nb=function(a){var b=this.bd.indexOf(a.f),c=performance.now(),d=this.c.m;this.c.A.wk&&(this.c.A.Ic.push({rd:a.f,Ch:a.Ch,G:a.G,pc:a.pc,gs:c,ia:c-this.cf[b],Up:c-this.qg,Ur:this.bd.length}),Number.isNaN(c-this.cf[b]));this.bd.splice(b,1);this.cf.splice(b,1);this.qg=c;this.si--;Y(this.c);this.update();d.nm++;d.Gh=c};
l.Sb=function(a){var b=this.bd.indexOf(a.f),c=performance.now(),d=this.c.m;this.c.A.wk&&this.c.A.Ic.push({rd:a.f,Ch:a.Ch,G:a.G,pc:a.pc,gs:c,ia:c-this.cf[b],Up:c-this.qg,Ur:this.bd.length});this.bd.splice(b,1);this.cf.splice(b,1);this.qg=c;this.si--;Y(this.c);this.update();d.mm++;d.Gh=c};
l.update=function(){if(!this.c.zj)for(var a=this.vf.length-1;0<=a;a--)if(0<this.vf[a].length){a=this.vf[a];wd(this);for(var b=0,c=a.length;b<c;b++)a[b].pc*=this.zl;for(b=performance.now();0<a.length&&this.si<this.Xh;)c=a.shift(),-1==this.bd.indexOf(c.f)&&null!=c.$k&&(this.bd.push(c.f),this.cf.push(b),this.si++,c.$k(c.f,this.nb.bind(this,c),this.Sb.bind(this,c)));break}};
Fb.prototype.Dc=function(a,b,c,d,e,f){if(!d){var g=xd(this,a);d=g[0];e=g[1]}this.h.nf||(b=Math.floor(b));if(this.h.Hj)return yd(this,null,b+8,c,b,null,d,e,f);var k=this.xb;if(null!=d&&null!==b){g={fl:e,Uf:Math.ceil(b),R:{W:d.R.W.slice(),Z:d.R.Z.slice()},w:null,Ya:null,gg:null,ns:!0};zd(k,Ad(k,d.f),g,!1);k=g.w;if(null!=g.Ya){c&&(this.m.ij=2,this.m.jj=b,this.m.kj=k.f[0]);a=k.f[0]>=Math.ceil(b);var h;if(this.h.nf&&0<k.f[0]&&g.qa&&g.qa.Ya&&b<=k.f[0]){if(c=Bd(e,g.qa.w,g.qa),e=Bd(e,k,g),b-=Math.floor(b),
d=c+(e-c)*b,f){h=Array(f.length);for(var m=0,n=f.length;m<n;m++)e=f[m],c=Bd(e,g.qa.w,g.qa),e=Bd(e,k,g),h[m]=[c+(e-c)*b,a,!0]}}else if(d=Bd(e,k,g),f)for(h=Array(f.length),m=0,n=f.length;m<n;m++)e=Bd(f[m],k,g),h[m]=[e,a,!0];return[d,a,!0,null,null,h]}if(null!=k)return a=yd(this,a,b+8,c,b,null,d,e,f),[a[0],a[1],!0,null,null,a[5]]}return[0,!1,!1,null,null,null]};
function yd(a,b,c,d,e,f,g,k,h){var m;if(f)g=f[0],k=f[1];else if(g||(k=xd(a,b),g=k[0],k=k[1]),h){m=Array(h.length);b=0;for(var n=h.length;b<n;b++)m[b]=yd(a,null,c,d,e,f,g,h[b])}a.h.nf||(c=Math.floor(c));if(!f&&a.h.Gj){f=yd(a,null,c,d,e,[g,[k[0],k[1],k[2]]]);if(f[2]){var p=f[3].Z[0]-f[3].W[0],w=f[3].Z[1]-f[3].W[1];h=(k[0]-f[3].W[0])/p;b=(k[1]-f[3].W[1])/w;var r=yd(a,null,c,d,e,[g,[k[0]+p,k[1],k[2]]]),n=yd(a,null,c,d,e,[g,[k[0],k[1]+w,k[2]]]);c=yd(a,null,c,d,e,[g,[k[0]+p,k[1]+w,k[2]]]);a=f[0]+(r[0]-
f[0])*h;c=a+(n[0]+(c[0]-n[0])*h-a)*b;return[c,f[1],f[2],f[3],null,m]}return[f[0],f[1],f[2],f[3],null,m]}f=a.xb;if(null!=g&&null!==c&&(k={fl:k,Uf:Math.ceil(c),R:{W:g.R.W.slice(),Z:g.R.Z.slice()},w:null,Ya:null,gg:null,ns:!0},zd(f,Ad(f,g.f),k,!0),g=k.w,null!=g))return f=g.v.Bi(),f=a.hb(f,"physical","navigation"),d&&(a.m.ij=1,a.m.jj=e,a.m.kj=g.f[0]),a.h.nf&&0<g.f[0]&&k.qa&&k.qa.w?(a=a.hb(k.qa.w.v.Bi(),"physical","navigation"),c=f[2]+(a[2]-f[2])*(c-Math.floor(c)),[c,!0,!0,k.R,g,m]):[f[2],!0,!0,k.R,g,
m];d&&(a.m.ij=0,a.m.jj=e,a.m.kj=0);return[0,!1,!1,null,null,m]}function Bd(a,b,c){var d=c.Ya,e=d.gd,f=d.vh;c=c.gg;d=a[0]-c.W[0];a=c.Z[1]-a[1];var g=f[0]-1,k=f[1]-1,d=d/(c.Z[0]-c.W[0])*g;a=a/(c.Z[1]-c.W[1])*k;0>d&&(d=0);0>a&&(a=0);d>g&&(d=g);a>k&&(a=k);var h=Math.floor(d);c=Math.floor(a);var d=d-h,m=c*f[0],f=c==k?m:m+f[0],g=h==g?h:h+1,k=e[4*(m+h)],h=e[4*(f+h)],m=k+(e[4*(m+g)]-k)*d,e=m+(h+(e[4*(f+g)]-h)*d-m)*(a-c);return e=b.kd+e/255*(b.jd-b.kd)}
function xd(a,b){for(var c=a.Ra.ad.ta,d=null,e=-1,f=[0,0],g=0,k=c.length;g<k;g++){var h=c[g],m=td(h.vk,b,cc(h.c)),n=h.R;m[0]>=n.W[0]&&m[0]<=n.Z[0]&&m[1]>=n.W[1]&&m[1]<=n.Z[1]&&h.f[0]>e&&(d=h,e=h.f[0],f=m)}return[d,f]}
function Cd(a,b){for(var c=a.Ra.ad.ta,d=null,e=[0,0],f=0,g=c.length;f<g;f++){var k=c[f],h=b[0]-k.f[0];if(0<=h){var m=b[2]>>h;k.f[1]==b[1]>>h&&k.f[2]==m&&(d=k,e=[k.f[1]<<h,k.f[2]<<h])}}h=b[0]-d.f[0];k=1/Math.pow(2,h);c=d.R.Z;f=d.R.W;g=(c[0]-f[0])*k;k*=f[1]-c[1];h=b[1]-e[0];e=b[2]-e[1];return[d,[[f[0]+g*h,c[1]+k*e],[f[0]+g*(h+1),c[1]+k*(e+1)]]]}function ud(a,b,c){a=xd(a,b)[0];return null!=a?(c=Math.log((a.R.Z[1]-a.R.W[1])/c)/Math.log(2),c=c-8+a.f[0],Math.max(0,c)):null}
function xc(a,b,c,d){a=xd(a,b)[0];return null!=a?(c=Math.log(d*(a.R.Z[1]-a.R.W[1])/c)/Math.log(2),c=c-8+a.f[0],Math.max(0,c)):null}Fb.prototype.$i=function(a,b,c){var d=td(this.Ra.Db.de,a,cc(this)),e=td(this.Ra.Db.de,b,cc(this)),f=e[0]-d[0],g=e[1]-d[1],e=e[2]-d[2],d=c?Math.sqrt(f*f+g*g+e*e):Math.sqrt(f*f+g*g),k=cc(this).Ad();if(bc(cc(this)))return[d,q.ml(Math.atan2(g,f))];a=vc(this).Inverse(a[1],a[0],b[1],b[0]);return d>2*k.a*Math.PI/4007.5?c?[Math.sqrt(a.s12*a.s12+e*e),a.Cs]:[a.s12,a.azi1]:[d,a.azi1]};
function vc(a){a=cc(a).Ad();return new GeographicLib.Geodesic.Geodesic(a.a,a.a/a.b-1)}
function vd(a,b,c,d){this.c=a;this.Qc=b.clone();this.ce=c.clone();this.Fq=c.clone();a=this.Qc.s[3];b=this.ce.s[3];"fix"==a&&"float"==b?bd(this.Qc,"float"):"float"==a&&"fix"==b&&bd(this.Qc,"fix");a=this.Qc.s[0];b=this.ce.s[0];"subj"==a&&"obj"==b?ad(this.ce,"subj"):"obj"==a&&"subj"==b&&ad(this.Qc,"subj");this.Qc.s[5]=0>this.Qc.s[5]?360+this.Qc.s[5]%360:this.Qc.s[5]%360;this.ce.s[5]=0>this.ce.s[5]?360+this.ce.s[5]%360:this.ce.s[5]%360;this.Fb=this.Qc.clone();this.rf=d.mode||"auto";this.Pr="none";this.jd=
d.maxHeight||1E9;this.qq=d.minDuration||0;this.Uh=d.maxDuration||1E4;this.Ym=d.samplePeriod||10;this.Wo=d.fade||"none";this.Ri=d.fadePower||1;this.qr=d.pv||.15;bc(cc(this.c))||(this.Fl=vc(this.c));d.distanceAzimuth?(this.Hi=!0,this.ob=this.Qc.clone(),d.destHeight&&Xc(this.ob,d.destHeight),d.destOrientation&&Xc(this.ob,d.destOrientation),d.destFov&&Xc(this.ob,d.destFov),this.kh=d.azimuth||0,this.xa=this.Vi=d.distance||100,this.mb=this.kh%360,this.mb=0>this.mb?360+this.mb:this.mb):(this.Hi=!1,this.ob=
this.ce.clone(),a=this.c.$i(yc(this.Fb),yc(this.ob)),this.xa=a[0],this.mb=(a[1]-90)%360,this.mb=0>this.mb?360+this.mb:this.mb,bc(cc(this.c))||(a=this.Fl.Inverse(this.Fb.s[2],this.Fb.s[1],this.ob.s[2],this.ob.s[1]),this.kh=a.azi1,this.Vi=a.s12,this.mb=this.kh%360,this.mb=0>this.mb?360+this.mb:this.mb));"auto"==this.rf&&(this.rf=2E3<this.xa?"ballistic":"direct");this.ia=0;this.Nb=1E3;500>this.xa?this.ia=1E3:2E3>this.xa?this.ia=2E3:(this.ia=this.xa/100,300>this.ia?this.ia=3E3:this.Nb=1500,6E3>this.ia&&
(this.ia=6E3),1E4<this.ia&&(this.ia=1E4),"direct"!=this.rf&&(this.ia*=1.8,this.Nb*=1.8));"direct"!=this.rf&&(a=3*this.Nb,this.ia=Math.max(this.ia,a),this.Uh<a&&(this.ia=this.Uh,this.Nb=this.Uh/3));this.ia=Math.min(this.ia,this.Uh);this.ia=Math.max(this.ia,this.qq);d=d.height;"ballistic"==this.rf&&(this.re=Math.max(this.Fb.s[4],this.ob.s[4]),this.re+=d||.5*this.xa,this.re=Math.min(this.re,this.jd),this.re-=Math.max(this.Fb.s[4],this.ob.s[4]))}
vd.prototype.Ui=function(){for(var a=Array(Math.ceil(this.ia/this.Ym)+(this.Hi?0:1)),b=0,c=0;c<=this.ia;c+=this.Ym){var d=c/this.ia,e=this.Fb.clone();if("direct"==this.rf){var f=d;switch(this.Wo){case "in":switch(this.Ri){case 1:d=f*f;break;case 2:d=f*f*f;break;case 3:d=f*f*f*f;break;case 4:d=f*f*f*f*f;break;case 5:d=f*f*f*f*f*f;break;case 6:d=f*f*f*f*f*f*f}break;case "out":f=1-f;switch(this.Ri){case 1:d=1-f*f;break;case 2:d=1-f*f*f;break;case 3:d=1-f*f*f*f;break;case 4:d=1-f*f*f*f*f;break;case 5:d=
1-f*f*f*f*f*f;break;case 6:d=1-f*f*f*f*f*f*f}break;case "inout":switch(this.Ri){case 1:d=f*f*(3-2*f);break;case 2:d=f*f*f*(f*(6*f-15)+10);break;case 3:f=d=f*f*(3-2*f);d=f*f*(3-2*f);break;case 4:f=d=f*f*f*(f*(6*f-15)+10);d=f*f*f*(f*(6*f-15)+10);break;case 5:f=d=f*f*(3-2*f);f=d=f*f*(3-2*f);d=f*f*(3-2*f);break;case 6:f=d=f*f*f*(f*(6*f-15)+10),f=d=f*f*f*(f*(6*f-15)+10),d=f*f*f*(f*(6*f-15)+10)}}Vc(e,Dd(this,d));f=this.Fb.s[4];Xc(e,f+(this.ob.s[4]-f)*d);e.setOrientation(Ed(this.Fb.Mb(),this.ob.Mb(),d));
Yc(e,Fd(this,d));Zc(e,Vd(this,d))}else{f=d;f=d=f*f*(3-2*f);d=f*f*(3-2*f);f=c<this.Nb?0:c>this.ia-this.Nb?1:Math.min(1,(c-this.Nb)/(this.ia-2*this.Nb));f=f*f*(3-2*f);factor2_=f*f*(3-2*f);if("piha"==this.Pr){var f=yc(this.Fb)[2],g=this.xa/(.001*this.ia*this.qr*Math.tan(.5*q.Oa(this.Fb.Wd())))*(1-Math.cos(2*Math.PI*c/this.ia))+f+(yc(this.ob)[2]-f)*c/this.ia,f=Dd(this,this.xa/this.ia*(c-this.ia/(2*Math.PI)*Math.sin(2*Math.PI/this.ia*c))/this.xa);Vc(e,f);Xc(e,g)}else f=Dd(this,factor2_),Vc(e,f),g=yc(this.Fb),
Xc(e,g[2]+(yc(this.ob)[2]-g[2])*d+Math.sin(Math.PI*d)*this.re);null!=f[3]&&(this.mb=f[3]);var f=c,g=[0,-90,0],k;g[0]=this.mb%360;0>g[0]&&(g[0]=360-Math.abs(g[0]));f<=this.Nb?(k=f/this.Nb,f=this.Fb.Mb()):f>=this.ia-this.Nb?(k=(f-(this.ia-this.Nb))/this.Nb,f=g,g=this.ob.Mb()):(k=0,f=g);e.setOrientation(Ed(f,g,k));Yc(e,Fd(this,d));Zc(e,Vd(this,d));a[b]=e.s}a[b]=e.s;b++}this.Hi||(a[b]=this.Fq.clone().s);return a};
function Dd(a,b){var c=yc(a.Fb),d=yc(a.ob);if(bc(cc(a.c)))return[c[0]+(d[0]-c[0])*b,c[1]+(d[1]-c[1])*b,c[2]+(d[2]-c[2])*b];var e=a.Fl.Direct(c[1],c[0],a.kh,a.Vi*b),f=e.azi1-e.azi2,f=0>a.mb?360+f:f;return[e.lon2,e.lat2,c[2]+(d[2]-c[2])*b,f]}function Ed(a,b,c){var d=b[0]-a[0],e=b[1]-a[1];b=b[2]-a[2];180<Math.abs(d)&&(d=0<d?-(360-d):360-Math.abs(d));return[a[0]+d*c,a[1]+e*c,a[2]+b*c]}function Fd(a,b){var c=a.Fb.Wd();return c+(a.ob.Wd()-c)*b}function Vd(a,b){var c=a.Fb.s[8];return c+(a.ob.s[8]-c)*b}
function Yb(a,b,c){this.c=a;this.m=a.m;this.f=b;this.za=this.rd=null;this.Vb=this.u=this.H=0;"object"===typeof c?(this.za=c,this.H=2):(this.rd=this.c.vb(c),q.hd(this.rd,this.nb.bind(this),this.Sb.bind(this),null,q.useCredentials?-1!=this.rd.indexOf(this.c.Fa):!1,this.c.C.zb),this.H=1)}l=Yb.prototype;l.D=function(){};l.setData=function(a){this.za=a;this.H=2};l.V=function(a,b){if(2==this.H)return!0;0!=this.H||a||this.qb(b);return!1};l.qb=function(a){this.c.Zb.load(this.rd,this.Pc.bind(this),a)};
l.Pc=function(){this.H=1};l.Sb=function(){};l.nb=function(a){1!=this.c.S&&(this.za=a,this.H=2)};l.size=function(){return this.u};l.fileSize=function(){return this.Vb};function hd(a,b,c){this.c=a;this.m=a.m;this.Ia=b;this.Va=c;this.v=new Na;this.Vb=this.u=0;this.da=this.Pa=null;this.H=0;this.Ma=null;this.sa=0}l=hd.prototype;l.D=function(){this.v=null;this.hm()};l.hm=function(a){this.Pa&&(this.Pa=null);1!=a&&null!=this.da&&this.c.rc.remove(this.da);this.Vb=this.u=this.H=0;this.da=null};
l.V=function(a,b){var c=this.c.m.Bb>=this.c.Be;a=a||c;if(2==this.H)return Lc(this.c.rc,this.da),!0;0==this.H?a||this.qb(b):3==this.H&&this.sa<=this.c.h.mc&&performance.now()>this.Ma+this.c.h.nc&&this.qb(b);return!1};l.qb=function(a){this.c.Zb.load(this.Ia,this.Pc.bind(this),a,this.Va.G,"geodata")};l.Pc=function(a,b,c){this.oc=b;this.Jc=c;this.H=1;q.hd(a,this.nb.bind(this),this.Sb.bind(this),!0,q.useCredentials?-1!=this.Ia.indexOf(this.c.Fa):!1,this.c.C.zb)};
l.Sb=function(){this.c.S||(this.H=3,this.Ma=performance.now(),this.sa++,this.sa<=this.c.h.mc&&setTimeout(function(){this.c.S||Y(this.c)}.bind(this),this.c.h.nc),this.Jc())};l.nb=function(a){if(!this.c.S){var b=a.length;this.Vb=this.u=b;this.Pa=a;this.da=Mc(this.c.rc,this.hm.bind(this,!0),b);Y(this.c);this.H=2;this.Ma=null;this.sa=0;this.oc()}};l.size=function(){return this.u};l.fileSize=function(){return this.Vb};
function id(a,b,c){this.c=a;this.m=a.m;this.Pa=b;this.j=this.c.l.j;this.l=this.c.l;this.jf=[];this.Ze=null;this.G=c.G;this.B=c.B;this.B.ed?this.B.yk&&(Ac(this.B.ed,"setStylesheet",{data:this.B.he.za,geocent:!bc(cc(this.c))}),this.B.yk=!1):(a=new q.Sg(this,this.Cg.bind(this)),Ac(a,"setStylesheet",{data:this.B.he.za,geocent:!bc(cc(this.c))}),Ac(a,"setFont",{chars:this.l.dd.wd,space:this.l.dd.Ff,size:this.l.dd.u}),this.B.ed=a,this.c.Wi.push(a));this.ed=this.B.ed;this.u=0;this.pa=this.qj=this.S=!1;this.V()}
l=id.prototype;l.D=function(){this.S=!0;this.Pa=null;this.im(!1)};l.im=function(a){this.qj=a;for(var b=0,c=this.jf.length;b<c;b++)this.jf[b].D();this.jf=[];1!=a&&null!=this.ab&&this.c.Wb.remove(this.ab);this.m.dg-=this.u;this.m.Ec[1][0]++;this.m.Ec[1][1]+=this.u;this.pa=!1;this.u=0;this.ab=null};
l.Cg=function(a,b,c){if(!this.S&&!this.qj)switch(a){case "beginGroup":c?(this.Ze=new Ia(b.id,b.bbox,b.origin,this.j,this.l),this.jf.push(this.Ze)):(Y(this.c),this.c.ld.push(this.Cg.bind(this,a,b,!0)));break;case "addRenderJob":if(c){if(this.Ze){a=performance.now();c=this.Ze;switch(b.type){case "flat-line":var d=c.o,e=b.vertexBuffer,f=b.color,g=1/255,k={T:"flat-line"};k.Na=b.program;k.Zc=[f[0]*g,f[1]*g,f[2]*g,f[3]*g];k.Mf=b["z-index"]+256;k.Rf=b["click-event"];k.lg=b["hover-event"];k.gh=b["enter-event"];
k.Fh=b["leave-event"];k.jg=b.hitable;k.Yf=b.eventInfo;k.Id=b.state;k.vd=b.center;k.fa=b.lod;k.lm=b["line-width"];k.Ve=b["zbuffer-offset"];k.fe=!1;k.pa=!0;k.P=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,k.P);d.bufferData(d.ARRAY_BUFFER,e,d.STATIC_DRAW);k.P.ka=3;k.P.ca=e.length/3;c.Bd.push(k);c.u+=4*e.length;c.Eb+=e.length/3;break;case "flat-tline":Oa(c,b);break;case "pixel-line":Oa(c,b);break;case "pixel-tline":Oa(c,b);break;case "line-label":var d=c.o,e=b.vertexBuffer,f=b.texcoordsBuffer,g=b.color,
k=1/255,h={T:"line-label"};h.Na=b.program;h.Zc=[g[0]*k,g[1]*k,g[2]*k,g[3]*k];h.Mf=b["z-index"]+256;h.Rf=b["click-event"];h.lg=b["hover-event"];h.gh=b["enter-event"];h.Fh=b["leave-event"];h.jg=b.hitable;h.Yf=b.eventInfo;h.Id=b.state;h.vd=b.center;h.fa=b.lod;h.Ve=b["zbuffer-offset"];h.fe=!1;h.pa=!0;h.P=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,h.P);d.bufferData(d.ARRAY_BUFFER,e,d.STATIC_DRAW);h.P.ka=4;h.P.ca=e.length/4;h.yb=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,h.yb);d.bufferData(d.ARRAY_BUFFER,
f,d.STATIC_DRAW);h.yb.ka=4;h.yb.ca=f.length/4;c.Bd.push(h);c.u+=4*e.length+4*f.length;c.Eb+=e.length/4;break;case "icon":Qa(c,b);break;case "label":Qa(c,b,!0);break;case "optimize":c.$s(b)}this.m.Sa+=performance.now()-a}}else Y(this.c),this.c.ld.push(this.Cg.bind(this,a,b,!0));break;case "endGroup":c?this.Ze&&(this.u+=this.Ze.size()):(Y(this.c),this.c.ld.push(this.Cg.bind(this,a,b,!0)));break;case "allProcessed":Y(this.c);this.ab=Mc(this.c.Wb,this.im.bind(this,!0),this.u);this.m.dg+=this.u;this.m.Ec[0][0]++;
this.m.Ec[0][1]+=this.u;this.ed.Zk=!1;this.pa=!0;break;case "ready":Y(this.c)}};l.V=function(a,b,c){if(this.S)return!1;var d=this.c.m.Bb>=this.c.Be;a=a||d;!this.pa&&!a&&this.Pa.V(a,b,c)&&this.ed.V()&&(this.qj=!1,this.ed.rg=this.Cg.bind(this),Ac(this.ed,"processGeodata",this.Pa.Pa,this.G),this.ed.Zk=!0);!a&&this.ab&&Lc(this.c.Wb,this.ab);return this.pa};l.gf=function(a,b,c){null==c&&(c=q.i.create(),q.i.multiply(q.tc(a.N[0]-b[0],a.N[1]-b[1],a.N[2]-b[2]),q.Bf(1,1,1),c));return c};
l.Ua=function(a){if(this.pa){for(var b=this.l,c=0,d=this.jf.length;c<d;c++){var e=this.jf[c],f=q.i.create(),g=q.i.create();q.i.multiply(qb(b.L),this.gf(e.v,a),g);var k=pb(b.L);q.i.multiply(k,g,f);e.Ua(g,f);this.m.ef+=e.Eb;this.m.eh+=e.Bd.length}this.Hg!=this.m.xc&&(this.Hg=this.m.xc,this.m.Bb+=this.u)}return this.pa};l.size=function(){return this.u};
function pd(a,b,c){this.c=a;this.m=a.m;this.Ia=b;this.G=c;this.v=new Na;this.Sd=this.Vb=this.u=0;this.ab=this.da=null;this.H=0;this.Ma=null;this.sa=0;this.kq=q.i.create();this.jq=q.i.create();this.lb=[];this.kc=[];this.zk=!1}l=pd.prototype;l.D=function(){this.v=null;this.pj();this.jm()};l.pj=function(a){for(var b=0,c=this.lb.length;b<c;b++)this.lb[b].D();this.zk=!0;1!=a&&this.da&&this.c.rc.remove(this.da);0==this.kc.length&&(this.H=0);this.da=null};
l.jm=function(a){for(var b=0,c=0,d=this.kc.length;c<d;c++)this.kc[c].D(),b+=this.kc[c].u;0<d&&(this.m.eg-=b,this.m.Fc[1][0]++,this.m.Fc[1][1]+=b);this.kc=[];1!=a&&this.ab&&this.c.Wb.remove(this.ab);this.zk&&(this.H=0);this.ab=null};
l.V=function(a,b,c){var d=this.c.m.Bb>=this.c.Be;a=a||d;"https://cdn.melown.com/mario/proxy/melown2015/surface/melown/cz10/12-1107-688.bin?0"==this.Ia&&(this.Ia=this.Ia);if(2==this.H){this.da&&Lc(this.c.rc,this.da);if(c)return!0;if(0==this.kc.length){if(this.c.m.Bb>=this.c.Be)return!1;if(this.m.Sa>this.c.h.sg)return Y(this.c),!1;if(d)return!1;b=performance.now();c=0;this.kc=Array(this.lb.length);for(var d=0,e=this.lb.length;d<e;d++)this.kc[d]=Wd(this.lb[d]),c+=this.kc[d].u;this.m.eg+=c;this.m.Fc[0][0]++;
this.m.Fc[0][1]+=c;this.ab=Mc(this.c.Wb,this.jm.bind(this,!0),c);this.m.Sa+=performance.now()-b}!a&&this.ab&&Lc(this.c.Wb,this.ab);return!0}0==this.H?a||this.qb(b):3==this.H&&this.sa<=this.c.h.mc&&performance.now()>this.Ma+this.c.h.nc&&this.qb(b);return!1};l.qb=function(a){this.Ia||(this.Ia=Dc(this.c,this.G.ua.Yh,{fa:this.G.f[0],ib:this.G.f[1],jb:this.G.f[2]}));this.c.Zb.load(this.Ia,this.Pc.bind(this),a,this.G,"mesh")};
l.Pc=function(a,b,c){this.oc=b;this.Jc=c;q.Hc(a,this.nb.bind(this),this.Sb.bind(this),q.useCredentials?-1!=this.Ia.indexOf(this.c.Fa):!1,this.c.C.zb);this.H=1};l.Sb=function(){1!=this.c.S&&(this.H=3,this.Ma=performance.now(),this.sa++,this.sa<=this.c.h.mc&&setTimeout(function(){this.c.S||Y(this.c)}.bind(this),this.c.h.nc),this.Jc())};
l.nb=function(a,b){if(1!=this.c.S)if(b){this.Vb=a.byteLength;var c={za:new DataView(a),bo:a,g:0},d=performance.now();this.pj();var e=c.za,f;f=""+String.fromCharCode(e.getUint8(c.g,!0));c.g+=1;f+=String.fromCharCode(e.getUint8(c.g,!0));c.g+=1;if("ME"==f&&(this.va=e.getUint16(c.g,!0),c.g+=2,!(3<this.va))){c.Hn=new Uint8Array(c.bo);e.getFloat64(c.g,!0);c.g+=8;this.Im=e.getUint16(c.g,!0);c.g+=2;this.lb=[];e=0;for(f=this.Im;e<f;e++){var g=new Xd(this,c);g.Kd&&(this.lb.push(g),this.u+=this.lb[e].u,this.Sd+=
this.lb[e].Sd)}this.Im=this.lb.length}this.c.m.Sa+=performance.now()-d;this.zk=!1;this.da=Mc(this.c.rc,this.pj.bind(this,!0),this.u);Y(this.c);this.H=2;this.Ma=null;this.sa=0;this.oc()}else Y(this.c),this.c.ld.push(this.nb.bind(this,a,!0))};l.size=function(){return this.u};l.fileSize=function(){return this.Vb};
function md(a,b,c,d,e,f){null!=a.kc[c]||null==a.lb[c]||a.lb[c].S||(a.kc[c]=Wd(a.lb[c]));var g=a.lb[c];if(c=a.kc[c]){var k=a.c.l,h=null,m=null,n=null,p=null,w=a.c.wl,r=0!=w?["aPosition","aBarycentric"]:["aPosition"];if("depth"==e)h=k.Om;else if("flat"==e)h=k.Pm;else if(0<w)switch(w){case 2:h=k.Sm;break;case 3:h=k.Pm;break;case 1:switch(e){case "internal":case "internal-nofog":h=k.Tm;n="aTexCoord";r.push("aTexCoord");break;case "external":case "external-nofog":h=k.or;p="aTexCoord2";r.push("aTexCoord2");
break;case "fog":return}}else switch(e){case "internal":case "internal-nofog":h=k.ik;n="aTexCoord";r.push("aTexCoord");break;case "external":case "external-nofog":h=k.mr;d&&(m=d.K?d.K.J&&d.K.J.kb?d.K.J.kb.Xa:null:d.kb?d.kb.Xa:null)&&(h=k.nr);p="aTexCoord2";r.push("aTexCoord2");break;case "fog":h=k.ar}k.j.useProgram(h,r,m);if(d)if(r=d.K?d.K.J?d.K.J.Xa:null:d.Xa)d.Hg!=a.m.xc&&(d.Hg=a.m.xc,a.m.Bb+=r.u),k.j.bindTexture(r),m&&k.j.bindTexture(m,1);else return;else if("fog"!=e&&"depth"!=e&&"flat"!=e)return;
m=a.kq;q.i.multiply(qb(k.L),g.gf(b,a.jq),m);b=pb(k.L);Sa(h,"uMV",m);Sa(h,"uProj",b);if(0==w)switch(e){case "internal":case "fog":Ra(h,"uParams",[a.c.Ue,a.c.se,0,0]);break;case "internal-nofog":Ra(h,"uParams",[a.c.Ue,0,0,0]);break;case "external":eb(h,"uAlpha",1);Ra(h,"uParams",[a.c.Ue,a.c.se,0,0]);Ra(h,"uTransform",d.K?d.K.J?d.K.Gn:null:[1,1,0,0]);break;case "external-nofog":eb(h,"uAlpha",f),Ra(h,"uParams",[a.c.Ue,0,0,0]),Ra(h,"uTransform",d.K?d.K.J?d.K.Gn:null:[1,1,0,0])}g.Hg!=a.m.xc&&(g.Hg=a.m.xc,
a.m.Bb+=c.u);c.Ua(h,"aPosition",n,p,0!=w?"aBarycentric":null);a.m.ef+=a.Sd;a.m.eh++}}MelownMetanodeFlags_GeometryPresent=1;MelownMetanodeFlags_NavtilePresent=3;MelownMetanodeFlags_InternalTexturePresent=7;MelownMetanodeFlags_CoarsenessControl=15;MelownMetanodeFlags_ChildShift=3;q.Qn=new Uint8Array(1024);
function Yd(a,b,c,d){this.ub=a;this.c=a.c;this.f=b;this.F=[];this.hg=this.pa=this.Of=!1;this.ne=d;this.bf=Array(3);this.Wf=1;this.af=Array(3);this.$e=this.dh=1;this.Ye=Array(24);if(c){a=c.za;b=this.ub.va;this.I=a.getUint8(c.g,!0);c.g+=1;if(5>b){d=q.Qn;for(var e=0,f=6*(this.f[0]+2)+7>>3;e<f;e++)d[e]=a.getUint8(c.g,!0),c.g+=1;for(var f=this.f[0]+2,g=[0,0,0],k=[0,0,0],h=0,m=this.c.Lr,n=this.c.Kr,e=0;3>e;e++)g[e]=Zd(d,f,h)*m[e]+n[e],h+=f,k[e]=Zd(d,f,h)*m[e]+n[e],h+=f;e=h=0;for(f=d.length;e<f;e++)h+=d[e];
0==h&&(g[0]=Number.POSITIVE_INFINITY,g[1]=Number.POSITIVE_INFINITY,g[2]=Number.POSITIVE_INFINITY,k[0]=Number.NEGATIVE_INFINITY,k[1]=Number.NEGATIVE_INFINITY,k[2]=Number.NEGATIVE_INFINITY);this.v=new Na(g[0],g[1],g[2],k[0],k[1],k[2])}4<=b&&(this.Bm=a.getFloat32(c.g,!0),c.g+=4,this.ym=a.getFloat32(c.g,!0),c.g+=4,a.getFloat32(c.g,!0),c.g+=4);this.wh=a.getUint8(c.g,!0);c.g+=1;this.wf=q.yo(a.getUint16(c.g,!0));c.g+=2;a.getUint16(c.g,!0);c.g+=2;this.me=1024;0==(this.I&4)&&(this.wf=Number.POSITIVE_INFINITY);
0==(this.I&8)&&(this.me=256);this.kd=a.getInt16(c.g,!0);c.g+=2;this.jd=a.getInt16(c.g,!0);c.g+=2;4>b&&(this.Bm=this.kd,this.ym=this.jd);3<=this.ub.va&&(this.ub.I&128?(this.gn=a.getUint16(c.g,!0),c.g+=2):this.ub.I&64&&(this.gn=a.getUint8(c.g,!0),c.g+=1));this.hg=0!=(this.I&2);this.Of=!1;$d(this)}}Yd.prototype.D=function(){};function Zd(a,b,c){for(var d=0,e=0;e<b;e++)a[c>>3]&1<<7-(c&7)&&(d|=1<<b-e-1),c++;return d/((1<<b)-1)}
Yd.prototype.clone=function(){var a=new Yd(this.ub,this.f);a.I=this.I;a.kd=this.kd;a.jd=this.jd;a.wh=this.wh;a.wf=this.wf;a.me=this.me;a.pa=this.pa;a.Nr=this.Nr;a.hg=this.hg;a.F=Array(this.F.length);for(var b=0,c=this.F.length;b<c;b++)a.F[b]=this.F[b];this.v&&(a.v=this.v.clone());a.bf=this.bf;a.af=this.af;a.dh=this.dh;a.$e=this.$e;a.Wf=this.Wf;a.Ye=this.Ye;a.ne=this.ne;this.Mm&&(a.Mm=this.Mm.slice());return a};
function $d(a,b){a.pa=!0;var c=a.c;if(c.lh&&c.h.Lj&&!b){var d=c.hs;if(a.f[0]>c.Qj){var e=c.js,f;f=a.c;var g=a.f,k=g[0]-f.Qj;f=f.Ra.Fm[""+f.Qj+"."+(g[1]>>k)+"."+(g[2]>>k)];var h=a.f,m=h[0]-f.f[0],n=1/Math.pow(2,m),g=f.R.Z,k=f.R.W,p=(g[0]-k[0])*n,n=(k[1]-g[1])*n,w=h[1]-(f.f[1]<<m),h=h[2]-(f.f[2]<<m);e[0]=f;e[1]=k[0]+p*w;e[2]=g[1]+n*h;e[3]=k[0]+p*(w+1);e[4]=g[1]+n*(h+1);k=e[1];p=e[2];g=e[3];m=e[4]}else e=Cd(a.c,a.f),f=e[0],k=e[1][0][0],p=e[1][0][1],g=e[1][1][0],m=e[1][1][1];a.ne=f;h=a.Bm;d[0]=.5*(g+
k);d[1]=.5*(m+p);d[2]=h;ae(f,d,a.bf,0);a.Wf=q.O.length(a.bf);q.O.normalize(a.bf,a.af);e=a.af;d[0]=g;d[1]=m;d[2]=h;g=a.Ye;ae(f,d,g,0);d[1]=p;ae(f,d,g,3);d[0]=k;ae(f,d,g,6);d[1]=m;ae(f,d,g,9);f=q.O.xq;k=q.O.oe;c.h.Qh?(c=a.ym-h,f(g,0,d),p=k(e,d),g[12]=g[0]+d[0]*c,g[13]=g[1]+d[1]*c,g[14]=g[2]+d[2]*c,f(g,3,d),h=k(e,d),g[15]=g[3]+d[0]*c,g[16]=g[4]+d[1]*c,g[17]=g[5]+d[2]*c,f(g,6,d),m=k(e,d),g[18]=g[6]+d[0]*c,g[19]=g[7]+d[1]*c,g[20]=g[8]+d[2]*c,f(g,9,d),f=k(e,d),g[21]=g[9]+d[0]*c,g[22]=g[10]+d[1]*c,g[23]=
g[11]+d[2]*c):(f(g,0,d),p=k(e,d),f(g,3,d),h=k(e,d),f(g,6,d),m=k(e,d),f(g,9,d),f=k(e,d));d=Math.min(p,h,m,f);a.dh=Math.cos(Math.max(0,.5*Math.PI-Math.acos(d)));a.$e=d}}
Yd.prototype.gf=function(a,b){var c=b;null!=c?(c[0]=yb(this.v,0),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=yb(this.v,1),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=yb(this.v,2),c[11]=0,c[12]=this.v.N[0]-a[0],c[13]=this.v.N[1]-a[1],c[14]=this.v.N[2]-a[2],c[15]=1):(c=q.i.create(),q.i.multiply(q.tc(this.v.N[0]-a[0],this.v.N[1]-a[1],this.v.N[2]-a[2]),q.Bf(yb(this.v,0),yb(this.v,1),yb(this.v,2)),c));return c};
Yd.prototype.df=function(a){if(5<=this.ub.va){for(var b=[],c=this.Ye,d=0;24>d;d+=3)b.push((new Gb(this.c,["obj",c[d],c[d+1],"fix",c[d+2],0,0,0,10,90])).te(null,!0));c=this.c.l;c.pe([b[0],b[1],b[2],b[3],b[0]],2,[0,1,.5,255],!1,!1,!0);c.pe([b[4],b[5],b[6],b[7],b[4]],2,[0,1,.5,255],!1,!1,!0)}else b=this.c.l,b.j.useProgram(b.xf,["aPosition"]),c=q.i.create(),d=q.i.create(),q.i.multiply(qb(b.L),this.gf(a),d),a=pb(b.L),q.i.multiply(a,d,c),Sa(b.xf,"uMVP",c),b.Wg.Ua(b.xf,"aPosition")};
function Kc(a,b,c){this.tb=a;this.c=a.c;this.B=b;this.f=a.f;this.G=c;this.ta=[];this.H=this.Kb=0;this.Ma=null;this.u=this.sa=0;this.da=null}l=Kc.prototype;l.D=function(a){1!=a&&null!=this.da&&this.c.Mc.remove(this.da);this.tb&&Ic(this.tb,this);this.B=this.H=0;this.da=null;this.ta=[]};
l.clone=function(a){a=new Kc(this.tb,a);a.ta=this.ta;a.H=this.H;a.ta=this.ta;a.u=this.u;a.fa=this.fa;a.Ed=this.Ed;a.Fd=this.Fd;a.Nc=this.Nc;a.Oc=this.Oc;a.Ba=this.Ba;a.fc=this.fc;a.va=this.va;a.F=this.F;2>this.va?a.Ag=this.Ag:(a.I=this.I,a.yc=this.yc,a.Bc=this.Bc);a.da=Mc(this.c.Mc,a.D.bind(a,!0),a.u);return a};l.V=function(a){if(2==this.H)return!0;0==this.H&&(3==this.H?this.sa<=this.c.h.mc&&performance.now()>this.Ma+this.c.h.nc&&this.qb(a):this.qb(a));return!1};
l.Lk=function(){null!=this.da&&Lc(this.c.Mc,this.da)};l.bg=function(a){var b=a[1]-this.f[1]-this.Nc;a=a[2]-this.f[2]-this.Oc;if(0>b||0>a||b>=this.Ba||a>=this.fc)return null;var c=this.ta[this.Ba*a+b];if(!c){var d=this.Ba*a+b,c=new Yd(this,[this.fa,this.Ed+this.Nc+b,this.Fd+this.Oc+a],{za:this.za,g:this.Sj+d*this.Ja},this.ne);this.ta[d]=c;this.vi(b,a);this.wi(b,a)}return c};l.qb=function(){null==this.Ia&&(this.Ia=this.B.oh(this.f));this.c.Zb.load(this.Ia,this.Pc.bind(this),null,this.G,"metatile")};
l.Pc=function(a,b,c){this.oc=b;this.Jc=c;q.Hc(a,this.nb.bind(this),this.Sb.bind(this),q.useCredentials?-1!=this.Ia.indexOf(this.c.Fa):!1,this.c.C.zb);this.H=1};l.Sb=function(){1!=this.c.S&&(this.H=3,this.Ma=performance.now(),this.sa++,this.sa<=this.c.h.mc&&setTimeout(function(){this.c.S||Y(this.c)}.bind(this),this.c.h.nc),this.Jc())};
l.nb=function(a,b){if(1!=this.c.S)if(b){a=new DataView(a);this.u+=4*a.byteLength;this.za=a;var c=performance.now();this.bk({za:a,g:0});this.c.m.Sa+=performance.now()-c;this.da=Mc(this.c.Mc,this.D.bind(this,!0),this.u);Y(this.c);this.H=2;this.Ma=null;this.sa=0;this.oc()}else Y(this.c),this.c.ld.push(this.nb.bind(this,a,!0))};
l.bk=function(a){var b=a.za,c;c=""+String.fromCharCode(b.getUint8(a.g,!0));a.g+=1;c+=String.fromCharCode(b.getUint8(a.g,!0));a.g+=1;"MT"==c&&(this.va=b.getUint16(a.g,!0),a.g+=2,5<this.va||(this.fa=b.getUint8(a.g,!0),a.g+=1,this.Ed=b.getUint32(a.g,!0),a.g+=4,this.Fd=b.getUint32(a.g,!0),a.g+=4,this.Nc=b.getUint16(a.g,!0),a.g+=2,this.Oc=b.getUint16(a.g,!0),a.g+=2,this.Ba=b.getUint16(a.g,!0),a.g+=2,this.fc=b.getUint16(a.g,!0),a.g+=2,this.Bc=Array(8),2>this.va?(this.Ag=b.getUint8(a.g,!0),a.g+=1):(this.I=
b.getUint8(a.g,!0),a.g+=1,this.yc=b.getUint8(a.g,!0),a.g+=1,this.ak(a)),this.ck(a),this.dk(a)))};l.ak=function(a){for(var b=a.za,c=this.Ba*this.fc+7>>3,d=0;6>d;d++)if(0!=(this.I&1<<d)){for(var e=new Uint8Array(c),f=0;f<c;f++)e[f]=b.getUint8(a.g,!0),a.g+=1;this.Bc[d]=e}};
l.ck=function(a){var b=a.za;2>this.va&&(this.yc=b.getUint8(a.g,!0),a.g+=1,b.getUint16(a.g,!0),a.g+=2);if(0==this.yc)this.F=[];else{var c=this.Ba*this.fc+7>>3;this.F=Array(this.yc);for(var d=0,e=this.F.length;d<e;d++){var f=b.getUint16(a.g,!0);a.g+=2;for(var g=new Uint8Array(c),k=0;k<c;k++)g[k]=b.getUint8(a.g,!0),a.g+=1;f=this.c.Ei[f];this.F[d]={Ci:f?f.gm:null,Di:g}}}};
l.wi=function(a,b){for(var c=0;1>c;c++)if(this.Bc[c]){bitplane_=this.Bc[c];var d=this.Ba*b+a,e=1<<(d&7),d=d>>3;if(bitplane_[d]&e)switch(c){case 0:this.ta[b*this.Ba+a].Of=!0}}};l.vi=function(a,b){for(var c=this.Ba*b+a,d=1<<(c&7),c=c>>3,e=0,f=this.F.length;e<f;e++)if(this.F[e].Di[c]&d){var g=this.F[e].Ci;g&&this.ta[b*this.Ba+a].F.push(g)}};
l.dk=function(a){this.Sj=a.g;this.Ja=10;5<=this.va?this.Ja+=12:(this.Ja+=Math.floor((6*(this.f[0]+2)+7)/8),4==this.va&&(this.Ja+=12));3<=this.va&&(this.I&128?this.Ja+=2:this.I&64&&(this.Ja+=1));this.ne=Cd(this.c,[this.fa,this.Ed+this.Nc,this.Fd+this.Oc])[0];this.ta=Array(this.Ba*this.fc)};function be(a,b,c,d,e){this.c=a;this.f=b;this.vk=pc(this.c,c);this.R=d;this.uh=e;this.oj=1==b[0]&&(0==b[1]&&1==b[2]||1==b[1]&&0==b[2])}function ce(a,b,c){return de(a.vk,b,a.c.Ra.Db.de,c)}
function ae(a,b,c,d){var e=a.vk,f=a.c.Ra.Db.de;a=f.Sc;var f=f.Hd,g=e.zf[f];g||(g=e.wb(e.Sc,a),e.zf[f]=g);b=g.forward(b);c[d]=b[0];c[d+1]=b[1];c[d+2]=b[2]}
function Vb(a,b){this.c=a;this.wb=a.wb;this.Kd=!1;this.f=b.id||null;this.nl=b.description||"";this.Fm=[];var c=b.model;if(null!=c&&(this.Db={de:pc(a,c.physicalSrs),bi:pc(a,c.navigationSrs),jk:pc(a,c.publicSrs)},this.uf={},null!=b.parameters&&(c=b.parameters,this.uf.Zh=c.metaBinaryOrder||1,this.uf.Em=c.navDelta||8),c=b.division,null!=c)){this.ad={dt:c.rootLod||0,As:c.arity||null,uh:c.heightRange||[0,1]};var d;d=c.extents;d=null==d?{W:[0,0,0],Z:[1,1,1]}:{W:d.ll||[0,0,0],Z:d.ur||[1,1,1]};this.ad.R=d;
a.Lr=[d.Z[0]-d.W[0],d.Z[1]-d.W[1],d.Z[2]-d.W[2]];a.Kr=d.W;c=c.nodes;this.ad.ta=[];if(null!=c){this.Fp=4==c.length;d=0;for(var e=c.length;d<e;d++){var f;var g=c[d],k;f=g.srs;var h;h=g.extents;h=null==h?{W:[0,0],Z:[1,1]}:{W:h.ll||[0,0],Z:h.ur||[1,1]};k=g.id;null!=k?(g=k.lod||0,k=k.position||[0,0],f=new be(this.c,[g,k[0],k[1]],f,h,this.uh)):f=void 0;this.Fm[""+f.f[0]+"."+f.f[1]+"."+f.f[2]]=f;this.ad.ta.push(f)}this.Kd=!0}}}
Vb.prototype.Lb=function(){return{id:this.f,physicalSrs:this.Db.de.f,navigationSrs:this.Db.bi.f,publicSrs:this.Db.jk.f}};Vb.prototype.hb=function(a,b,c){var d,e;switch(b){case "public":d=this.Db.jk;break;case "physical":d=this.Db.de;break;case "navigation":d=this.Db.bi}switch(c){case "public":e=this.Db.jk;break;case "physical":e=this.Db.de;break;case "navigation":e=this.Db.bi}return de(d,a,e)};l=Fb.prototype;l.Ug=function(a,b,c){this.pb.push({id:a,al:b,Qi:c})};
l.Uj=function(a,b){var c=uc(this.pb,"after-map-render"==a?"map":a),d=uc(this.pb,b);-1!=c&&-1!=d&&this.pb.splice(d,0,this.pb.splice(c,1)[0])};l.Tj=function(a,b){var c=uc(this.pb,"after-map-render"==a?"map":a),d=uc(this.pb,b);-1!=c&&-1!=d&&(d++,this.pb.splice(d,0,this.pb.splice(c,1)[0]))};l.kk=function(a){a=uc(this.pb,a);-1!=a&&this.pb.splice(a,1)};l.tk=function(a,b){var c=uc(this.pb,a);-1!=c&&(this.pb[c].Qi=b)};l.ej=function(){var a=uc(this.pb,id2_);return-1!=a?this.pb[a].Qi:!1};
function wc(a){1!=a.cd&&ta(a.l.j);for(var b=0,c=a.pb.length;b<c;b++){var d=a.pb[b];d.Qi&&d.al&&d.al(a.Eo[a.cd])}}Kc=function(a,b,c){this.tb=a;this.c=a.c;this.B=b;this.f=a.f;this.G=c;this.ta=[];this.H=this.Kb=0;this.Ma=null;this.u=this.sa=0;this.da=null};l=Kc.prototype;l.D=function(a){1!=a&&null!=this.da&&this.c.Mc.remove(this.da);this.tb&&Ic(this.tb,this);this.B=this.H=0;this.da=null;this.ta=[]};
l.clone=function(a){a=new Kc(this.tb,a);a.ta=this.ta;a.H=this.H;a.ta=this.ta;a.u=this.u;a.fa=this.fa;a.Ed=this.Ed;a.Fd=this.Fd;a.Nc=this.Nc;a.Oc=this.Oc;a.Ba=this.Ba;a.fc=this.fc;a.va=this.va;a.F=this.F;2>this.va?a.Ag=this.Ag:(a.I=this.I,a.yc=this.yc,a.Bc=this.Bc);a.da=Mc(this.c.Mc,a.D.bind(a,!0),a.u);return a};l.V=function(a){if(2==this.H)return!0;0==this.H&&(3==this.H?this.sa<=this.c.h.mc&&performance.now()>this.Ma+this.c.h.nc&&this.qb(a):this.qb(a));return!1};
l.Lk=function(){null!=this.da&&Lc(this.c.Mc,this.da)};l.bg=function(a){var b=a[1]-this.f[1]-this.Nc;a=a[2]-this.f[2]-this.Oc;if(0>b||0>a||b>=this.Ba||a>=this.fc)return null;var c=this.ta[this.Ba*a+b];if(!c){var d=this.Ba*a+b,c=new Yd(this,[this.fa,this.Ed+this.Nc+b,this.Fd+this.Oc+a],{za:this.za,g:this.Sj+d*this.Ja},this.ne);this.ta[d]=c;this.vi(b,a);this.wi(b,a)}return c};l.qb=function(){null==this.Ia&&(this.Ia=this.B.oh(this.f));this.c.Zb.load(this.Ia,this.Pc.bind(this),null,this.G,"metatile")};
l.Pc=function(a,b,c){this.oc=b;this.Jc=c;q.Hc(a,this.nb.bind(this),this.Sb.bind(this),q.useCredentials?-1!=this.Ia.indexOf(this.c.Fa):!1,this.c.C.zb);this.H=1};l.Sb=function(){1!=this.c.S&&(this.H=3,this.Ma=performance.now(),this.sa++,this.sa<=this.c.h.mc&&setTimeout(function(){this.c.S||Y(this.c)}.bind(this),this.c.h.nc),this.Jc())};
l.nb=function(a,b){if(1!=this.c.S)if(b){a=new DataView(a);this.u+=4*a.byteLength;this.za=a;var c=performance.now();this.bk({za:a,g:0});this.c.m.Sa+=performance.now()-c;this.da=Mc(this.c.Mc,this.D.bind(this,!0),this.u);Y(this.c);this.H=2;this.Ma=null;this.sa=0;this.oc()}else Y(this.c),this.c.ld.push(this.nb.bind(this,a,!0))};
l.bk=function(a){var b=a.za,c;c=""+String.fromCharCode(b.getUint8(a.g,!0));a.g+=1;c+=String.fromCharCode(b.getUint8(a.g,!0));a.g+=1;"MT"==c&&(this.va=b.getUint16(a.g,!0),a.g+=2,5<this.va||(this.fa=b.getUint8(a.g,!0),a.g+=1,this.Ed=b.getUint32(a.g,!0),a.g+=4,this.Fd=b.getUint32(a.g,!0),a.g+=4,this.Nc=b.getUint16(a.g,!0),a.g+=2,this.Oc=b.getUint16(a.g,!0),a.g+=2,this.Ba=b.getUint16(a.g,!0),a.g+=2,this.fc=b.getUint16(a.g,!0),a.g+=2,this.Bc=Array(8),2>this.va?(this.Ag=b.getUint8(a.g,!0),a.g+=1):(this.I=
b.getUint8(a.g,!0),a.g+=1,this.yc=b.getUint8(a.g,!0),a.g+=1,this.ak(a)),this.ck(a),this.dk(a)))};l.ak=function(a){for(var b=a.za,c=this.Ba*this.fc+7>>3,d=0;6>d;d++)if(0!=(this.I&1<<d)){for(var e=new Uint8Array(c),f=0;f<c;f++)e[f]=b.getUint8(a.g,!0),a.g+=1;this.Bc[d]=e}};
l.ck=function(a){var b=a.za;2>this.va&&(this.yc=b.getUint8(a.g,!0),a.g+=1,b.getUint16(a.g,!0),a.g+=2);if(0==this.yc)this.F=[];else{var c=this.Ba*this.fc+7>>3;this.F=Array(this.yc);for(var d=0,e=this.F.length;d<e;d++){var f=b.getUint16(a.g,!0);a.g+=2;for(var g=new Uint8Array(c),k=0;k<c;k++)g[k]=b.getUint8(a.g,!0),a.g+=1;f=this.c.Ei[f];this.F[d]={Ci:f?f.gm:null,Di:g}}}};
l.wi=function(a,b){for(var c=0;1>c;c++)if(this.Bc[c]){bitplane_=this.Bc[c];var d=this.Ba*b+a,e=1<<(d&7),d=d>>3;if(bitplane_[d]&e)switch(c){case 0:this.ta[b*this.Ba+a].Of=!0}}};l.vi=function(a,b){for(var c=this.Ba*b+a,d=1<<(c&7),c=c>>3,e=0,f=this.F.length;e<f;e++)if(this.F[e].Di[c]&d){var g=this.F[e].Ci;g&&this.ta[b*this.Ba+a].F.push(g)}};
l.dk=function(a){this.Sj=a.g;this.Ja=10;5<=this.va?this.Ja+=12:(this.Ja+=Math.floor((6*(this.f[0]+2)+7)/8),4==this.va&&(this.Ja+=12));3<=this.va&&(this.I&128?this.Ja+=2:this.I&64&&(this.Ja+=1));this.ne=Cd(this.c,[this.fa,this.Ed+this.Nc,this.Fd+this.Oc])[0];this.ta=Array(this.Ba*this.fc)};
function Ub(a,b,c){this.c=a;this.f=b;this.wb=a.wb;this.lo=c.comment||null;this.Hd=c.srsDef||null;this.ln=c.srsModifiers||[];this.T=c.type||"projected";this.qs=c.vdatum||"orthometric";this.Hd=c.srsDefEllps||this.Hd;a=c.periodicity;this.Jq=null==a?null:{type:a.type||"",period:a.period||0};this.uk=this.wb(this.Hd).info();this.Ud=this.$a=null;this.Sc=this.wb(this.Hd,null,null,!0);this.Eh=null;this.zf={};c.geoidGrid&&(c=c.geoidGrid,this.$a={kl:c.definition||null,kn:c.srsDefEllps||null,Ok:c.valueRange||
[0,1]},this.$a.R=c.extents?{W:c.extents.ll,Z:c.extents.ur}:{W:[0,0],Z:[1,1]},this.$a.kl&&(c=Dc(this.c,this.$a.kl,{},null),this.Ud=new Hc(this.c,c,!0)),this.$a.kn&&(this.$a.Sc=this.wb(this.$a.kn,null,null,!0)))}Ub.prototype.Lb=function(){return{comment:this.lo,srsDef:this.Hd,srsModifiers:this.ln,type:this.T,vdatum:this.qs,srsDefEllps:this.Hd,a:this.uk.a,b:this.uk.b}};Ub.prototype.Ad=function(){return this.uk};Ub.prototype.V=function(){return null==this.$a||null!=this.Ud&&this.Ud.V()};
function bc(a){return"projected"==a.T}function ee(a,b){var c=b[2]||0,c=c/fe(a,b);return c-=ge(a,b)}function he(a,b){var c=b[2]||0,c=c+ge(a,b);return c*=fe(a,b)}
function ge(a,b){if(null!=a.Ud&&(null==a.$a||null!=a.Ud&&a.Ud.V())){mapCoords_=a.wb(a.Sc,a.$a.Sc,[b[0],b[1]]);var c=mapCoords_[0]-a.$a.R.W[0],d=a.$a.R.Z[1]-mapCoords_[1],e=a.Ud.vh,c=e[0]/(a.$a.R.Z[0]-a.$a.R.W[0])*c,d=e[1]/(a.$a.R.Z[1]-a.$a.R.W[1])*d,c=q.le(c,0,e[0]-2),d=q.le(d,0,e[1]-2),f=Math.floor(c),g=Math.floor(d),c=c-f,k=a.Ud.gd,h=g*e[0],e=h+e[0],m=k[4*(h+f)],n=k[4*(e+f)],h=m+(k[4*(h+f+1)]-m)*c,d=h+(n+(k[4*(e+f+1)]-n)*c-h)*(d-g);return d=a.$a.Ok[0]+(a.$a.Ok[1]-a.$a.Ok[0])/255*d}return 0}
function fe(a,b){if(-1!=a.ln.indexOf("adjustVertical")){var c=a.Ad(),d="+proj=longlat  +alpha=0 +gamma=0 +a="+c.a+" +b="+c.b+" +x_0=0 +y_0=0";a.Eh||(a.Eh=a.wb(d,null,null,!0));d=a.wb(a.Sc,a.Eh,[b[0],b[1]]);c=(new GeographicLib.Geodesic.Geodesic(c.a,c.a/c.b-1)).Direct(d[1],d[0],90,1E3);d=[c.Rs,c.Ns];d=a.wb(a.Eh,a.Sc,d);c=d[0]-b[0];d=d[1]-b[1];return Math.sqrt(c*c+d*d)/1E3}return 1}
function de(a,b,c,d){a.V();if("string"!==typeof c){if(c.f==a.f)return b.slice();c.V()}b=b.slice();var e="string"===typeof c;b[2]=ee(a,b);var f=e?c:c.Sc,g=e?c:c.Hd,k=a.zf[g];k||(k=a.wb(a.Sc,f),a.zf[g]=k);a=k.forward(b);!d&&e&&(a[2]=he(c,a));return a}
function td(a,b,c){a.V();if("string"!==typeof c){if(c.f==a.f)return b.slice();c.V()}b=b.slice();"string"!==typeof c&&(b[2]=ee(c,b));var d="string"===typeof c?c:c.Sc;c="string"===typeof c?c:c.Hd;var e=a.zf[c];e||(e=a.wb(a.Sc,d),a.zf[c]=e);b=e.inverse(b);b[2]=he(a,b);return b}
function Sb(a){this.c=a;this.C=a.C;this.og=a.C.og;this.km=this.Sa=this.Wm=this.Fg=this.Bl=this.mn=this.xc=this.gi=this.hi=this.ri=this.eh=this.ef=this.Pi=this.Rd=0;this.ii=Array(32);this.rr=!1;this.th=0;this.bb=900;this.Zl=Array(this.bb);this.Nl=Array(this.bb);this.Ml=Array(this.bb);this.Ol=Array(this.bb);this.Sl=Array(this.bb);this.Kl=Array(this.bb);this.Ll=Array(this.bb);this.Wl=Array(this.bb);this.Ul=Array(this.bb);this.Tl=Array(this.bb);this.Vl=Array(this.bb);this.Yl=Array(this.bb);this.Xl=Array(this.bb);
this.Jl=Array(this.bb);this.Rl=Array(this.bb);this.Ql=Array(this.bb);this.Pl=Array(this.bb);this.Gc=[[0,0],[0,0]];this.Fc=[[0,0],[0,0]];this.Ec=[[0,0],[0,0]];for(a=this.th=0;a<this.bb;a++)this.Zl[a]=0,this.Nl[a]=0,this.Ml[a]=0,this.Ol[a]=0,this.Sl[a]=0,this.Ll[a]=0,this.Kl[a]=0,this.Wl[a]=0,this.Ul[a]=0,this.Tl[a]=0,this.Vl[a]=0,this.Yl[a]=0,this.Xl[a]=[0,[]],this.Jl[a]=0,this.Rl[a]=[[0,0],[0,0]],this.Ql[a]=[[0,0],[0,0]],this.Pl[a]=[[0,0],[0,0]];this.Gp=this.Hp=this.kj=this.jj=this.ij=this.Gh=this.yj=
this.mm=this.nm=this.Bb=this.dg=this.fg=this.eg=0}
Sb.prototype.end=function(a){var b=performance.now(),c=b-this.Wm,d=b-this.Bl;this.Bl=b;a?(this.Fg+=c,this.km=c):this.Fg+=this.km;this.rr&&(a=this.th,this.Zl[a]=c,this.Nl[a]=0,this.Ml[a]=0,this.Ol[a]=0,this.Sl[a]=d,this.Ll[a]=this.c.rc.pd,this.Kl[a]=this.c.Mc.pd,this.Wl[a]=this.fg,this.Ul[a]=this.eg,this.Tl[a]=this.dg,this.Vl[a]=this.Bb,this.Yl[a]=this.ef,this.Rl[a]=[[this.Gc[0][0],this.Gc[0][1]],[this.Gc[1][0],this.Gc[1][1]]],this.Ql[a]=[[this.Fc[0][0],this.Fc[0][1]],[this.Fc[1][0],this.Fc[1][1]]],
this.Pl[a]=[[this.Ec[0][0],this.Ec[0][1]],[this.Ec[1][0],this.Ec[1][1]]],this.Xl[a]=[this.Rd,this.ii.slice()],this.Jl[a]=this.Sa,this.th=(this.th+1)%this.bb,this.og.pt(this));0==this.mn%50&&(this.Fg=0,null!=this.og&&this.og.qt(this));this.Gc=[[0,0],[0,0]];this.Fc=[[0,0],[0,0]];this.Ec=[[0,0],[0,0]]};MelownSubmeshFlags_InternalTexcoords=1;MelownSubmeshFlags_ExternalTexcoords=2;MelownSubmeshFlags_PerVertexUndulation=4;MelownSubmeshFlags_TextureMode=8;
function Xd(a,b){this.c=a.c;this.Ac=this.Xb=this.U=null;this.Rb=a;this.Kd=!0;this.S=!1;this.v=new Na;this.Sd=this.u=0;if(null!=b){var c=b.za;this.I=c.getUint8(b.g,!0);b.g+=1;1<this.Rb.va?(this.Me=c.getUint8(b.g,!0),b.g+=1):this.Me=0;this.Jd=c.getUint16(b.g,!0);b.g+=2;var d=this.v.N,e=this.v.la;d[0]=c.getFloat64(b.g,!0);b.g+=8;d[1]=c.getFloat64(b.g,!0);b.g+=8;d[2]=c.getFloat64(b.g,!0);b.g+=8;e[0]=c.getFloat64(b.g,!0);b.g+=8;e[1]=c.getFloat64(b.g,!0);b.g+=8;e[2]=c.getFloat64(b.g,!0);b.g+=8;ub(this.v);
if(3<=this.Rb.va){var f=b.za,e=b.g,c=b.Hn,g=f.getUint16(e,!0),e=e+2,k=f.getUint16(e,!0),e=e+2;g||(this.Kd=!1);for(var d=this.v.Bi(),h=this.v.Wh,m=1/k,k=null,n=new Float32Array(3*g),p=0,w=0,r=0,t=d[0],u=d[1],x=d[2],H=this.v.N[0],y=this.v.N[1],I=this.v.N[2],D=1/(this.v.la[0]-this.v.N[0]),L=1/(this.v.la[1]-this.v.N[1]),C=1/(this.v.la[2]-this.v.N[2]),d=[0,e],e=0;e<g;e++){ie(c,d);p+=d[0];ie(c,d);w+=d[0];ie(c,d);var r=r+d[0],v=3*e;n[v]=(p*m*h+t-H)*D;n[v+1]=(w*m*h+u-y)*L;n[v+2]=(r*m*h+x-I)*C}e=d[1];if(this.I&
MelownSubmeshFlags_ExternalTexcoords)for(k=f.getUint16(e,!0),m=1/k,k=new Float32Array(2*g),w=p=0,d[1]=e+2,e=0;e<g;e++)ie(c,d),p+=d[0],ie(c,d),w+=d[0],v=2*e,k[v]=p*m,k[v+1]=1-w*m;e=d[1];this.Ng=n;this.Lg=k;if(this.I&MelownSubmeshFlags_InternalTexcoords){n=f.getUint16(e,!0);e+=2;k=f.getUint16(e,!0);e+=2;v=f.getUint16(e,!0);k=1/k;v=1/v;w=p=0;g=new Float32Array(2*n);d[1]=e+2;e=0;for(n*=2;e<n;e+=2)ie(c,d),p+=d[0],ie(c,d),w+=d[0],g[e]=p*k,g[e+1]=1-w*v;e=d[1];this.Mg=g}f=f.getUint16(e,!0);k=g=null;n=new Float32Array(9*
f);this.I&MelownSubmeshFlags_InternalTexcoords&&(g=new Float32Array(6*f));this.I&MelownSubmeshFlags_ExternalTexcoords&&(k=new Float32Array(6*f));p=this.Ng;w=this.Lg;h=this.Mg;m=0;d[1]=e+2;for(e=0;e<f;e++)v=9*e,je(c,d),r=m-d[0],d[0]||m++,je(c,d),t=m-d[0],d[0]||m++,je(c,d),u=m-d[0],d[0]||m++,x=3*r,n[v]=p[x],n[v+1]=p[x+1],n[v+2]=p[x+2],x=3*t,n[v+3]=p[x],n[v+4]=p[x+1],n[v+5]=p[x+2],x=3*u,n[v+6]=p[x],n[v+7]=p[x+1],n[v+8]=p[x+2],null!=k&&(v=6*e,k[v]=w[2*r],k[v+1]=w[2*r+1],k[v+2]=w[2*t],k[v+3]=w[2*t+1],
k[v+4]=w[2*u],k[v+5]=w[2*u+1]);m=0;if(null!=g)for(e=0;e<f;e++)je(c,d),r=m-d[0],d[0]||m++,je(c,d),t=m-d[0],d[0]||m++,je(c,d),u=m-d[0],d[0]||m++,v=6*e,g[v]=h[2*r],g[v+1]=h[2*r+1],g[v+2]=h[2*t],g[v+3]=h[2*t+1],g[v+4]=h[2*u],g[v+5]=h[2*u+1];e=d[1];this.U=n;this.Xb=g;this.Ac=k;this.Lg=this.Mg=this.Ng=null;b.g=e;this.u=this.U.length;this.Xb&&(this.u+=this.Xb.length);this.Ac&&(this.u+=this.Ac.length);this.u*=4;this.Sd=f}else{p=b.za;c=b.g;d=b.Hn;v=p.getUint16(c,!0);c+=2;v||(this.Kd=!1);n=null;k=new Float32Array(3*
v);this.I&MelownSubmeshFlags_ExternalTexcoords&&(n=new Float32Array(2*v));g=w=1/65535;for(e=h=f=0;e<v;e++)k[f]=(d[c]+(d[c+1]<<8))*g,k[f+1]=(d[c+2]+(d[c+3]<<8))*g,k[f+2]=(d[c+4]+(d[c+5]<<8))*g,f+=3,null!=n?(n[h]=(d[c+6]+(d[c+7]<<8))*w,n[h+1]=(65535-(d[c+8]+(d[c+9]<<8)))*w,h+=2,c+=10):c+=6;this.Ng=k;this.Lg=n;if(this.I&MelownSubmeshFlags_InternalTexcoords){n=p.getUint16(c,!0);c+=2;v=new Float32Array(2*n);w=1/65535;e=0;for(n*=2;e<n;e+=2)v[e]=(d[c]+(d[c+1]<<8))*w,v[e+1]=(65535-(d[c+2]+(d[c+3]<<8)))*w,
c+=4;this.Mg=v}p=p.getUint16(c,!0);c+=2;n=v=null;k=new Float32Array(9*p);this.I&MelownSubmeshFlags_InternalTexcoords&&(v=new Float32Array(6*p));this.I&MelownSubmeshFlags_ExternalTexcoords&&(n=new Float32Array(6*p));w=this.Ng;g=this.Lg;h=this.Mg;for(e=0;e<p;e++)f=9*e,m=d[c]+(d[c+1]<<8),r=d[c+2]+(d[c+3]<<8),t=d[c+4]+(d[c+5]<<8),u=3*m,k[f]=w[u],k[f+1]=w[u+1],k[f+2]=w[u+2],u=3*r,k[f+3]=w[u],k[f+4]=w[u+1],k[f+5]=w[u+2],u=3*t,k[f+6]=w[u],k[f+7]=w[u+1],k[f+8]=w[u+2],null!=n&&(f=6*e,n[f]=g[2*m],n[f+1]=g[2*
m+1],n[f+2]=g[2*r],n[f+3]=g[2*r+1],n[f+4]=g[2*t],n[f+5]=g[2*t+1]),null!=v?(m=d[c+6]+(d[c+7]<<8),r=d[c+8]+(d[c+9]<<8),t=d[c+10]+(d[c+11]<<8),c+=12,f=6*e,v[f]=h[2*m],v[f+1]=h[2*m+1],v[f+2]=h[2*r],v[f+3]=h[2*r+1],v[f+4]=h[2*t],v[f+5]=h[2*t+1]):c+=6;this.U=k;this.Xb=v;this.Ac=n;this.Lg=this.Mg=this.Ng=null;b.g=c;this.u=this.U.length;this.Xb&&(this.u+=this.Xb.length);this.Ac&&(this.u+=this.Ac.length);this.u*=4;this.Sd=p}}}l=Xd.prototype;l.D=function(){this.S=!0;this.Ac=this.Xb=this.U=null};
function je(a,b){var c=a[b[1]];c&128?(b[0]=c&127|a[b[1]+1]<<7,b[1]+=2):(b[0]=c,b[1]++)}function ie(a,b){var c=a[b[1]];c&128?(c=c&127|a[b[1]+1]<<7,b[0]=c&1?-((c>>1)+1):c>>1,b[1]+=2):(b[0]=c&1?-((c>>1)+1):c>>1,b[1]++)}l.size=function(){return this.u};l.fileSize=function(){return this.Vb};function Wd(a){return new Za(a.c.l.j,{v:a.v,U:a.U,Pg:a.Xb,Jn:a.Ac},1,a.c.C)}
l.gf=function(a,b){var c=b;null!=c?(c[0]=yb(this.v,0),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=yb(this.v,1),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=yb(this.v,2),c[11]=0,c[12]=this.v.N[0]-a[0],c[13]=this.v.N[1]-a[1],c[14]=this.v.N[2]-a[2],c[15]=1):(c=q.i.create(),q.i.multiply(q.tc(this.v.N[0]-a[0],this.v.N[1]-a[1],this.v.N[2]-a[2]),q.Bf(yb(this.v,0),yb(this.v,1),yb(this.v,2)),c));return c};
l.df=function(a){var b=this.c.l;b.j.useProgram(b.xf,["aPosition"]);var c=q.i.create(),d=q.i.create();q.i.multiply(qb(b.L),this.gf(a),d);a=pb(b.L);q.i.multiply(a,d,c);Sa(b.xf,"uMVP",c);b.Wg.Ua(b.xf,"aPosition")};
function Zb(a,b,c){this.c=a;this.f=null;this.T="basic";this.Zh=1;this.Vj=this.$b="";this.Em=1;this.Ck=this.Yh="";this.Fa=this.c.Fa;this.Ub=this.c.Ub;this.gc=this.c.gc;this.na=[0,0];this.X=[[0,0],[0,0]];this.Jd=null;this.hc=[];this.ve="glue"==c;this.jh="free"==c;this.td=!1;this.Ue=0;this.pa=!1;this.ed=null;this.Td=0;this.Dl=!1;this.wg=this.$h=null;this.Cm=-1;this.uo=[];this.$j=this.he=this.pn=null;this.yk=!0;this.xb=this.jh?new dc(this.c,0,this):null;"string"===typeof b?(this.Yb=this.c.vb(b),this.Fa=
q.ra.mh(this.Yb),this.Ub=q.ra.rh(this.Yb),this.gc=q.ra.ph(this.Yb),q.hd(this.Yb,function(a){this.Fe(a);this.pa=!0;tc(this.c)}.bind(this),function(){}.bind(this),null,q.useCredentials?-1!=this.Yb.indexOf(this.c.Fa):!1,this.c.C.zb)):(this.Fe(b),this.pa=!0)}l=Zb.prototype;
l.Fe=function(a){this.f=a.id||null;this.T=a.type||"basic";this.Zh=a.metaBinaryOrder||1;this.$b=this.vb(a.metaUrl,"");this.Vj=this.vb(a.navUrl,"");this.Em=a.navDelta||1;this.Yh=this.vb(a.meshUrl,"");this.Ck=this.vb(a.textureUrl,"");this.ag=this.vb(a.geodataUrl||a.geodata,"");this.na=a.lodRange||[0,0];this.X=a.tileRange||[[0,0],[0,0]];this.Jd=a.textureLayer||null;this.Pa="geodata"==this.T||"geodata-tiles"==this.T;this.F=a.credits||[];this.me=a.displaySize||256;if(a.extents){var b=a.extents.ll,c=a.extents.ur;
this.R=new Na(b[0],b[1],b[2],c[0],c[1],c[2])}else this.R=new Na(0,0,0,1,1,1);this.ge=Math.pow(2,this.na[0])/((this.X[1][0]-this.X[1][0]+1)*(this.X[1][1]-this.X[1][1]+1));switch(typeof this.F){case "string":this.F=[];break;case "object":if(!Array.isArray(this.F)){b=this.F;this.F=[];for(var d in b)Wb(this.c,d,new Xb(this.c,b[d])),this.F.push(d)}d=0;for(b=this.F.length;d<b;d++)c=this.c.F[this.F[d]],this.uo.push(c?c.f:null)}this.ag&&-1!=this.ag.indexOf("{geonavtile}")&&(this.Dl=!1);this.Pa&&(this.$j=
a=a.style)&&sc(this,a);this.Me=[];if(this.ve)for(d=0,b=this.f.length;d<b;d++)this.Me.push(this.c.Xd(this.f[d]))};l.Lb=function(){return this.Pa?{type:this.T,metaUrl:this.$b,geodataUrl:this.ag,lodRange:this.na,tileRange:this.X,style:this.$j}:{type:this.T,metaUrl:this.$b,navUrl:this.Vj,meshUrl:this.Yh,textureUrl:this.Ck,lodRange:this.na,tileRange:this.X,textureLayer:this.Jd}};
l.vb=function(a,b){if(!a)return b;a=a.trim();return-1!=a.indexOf("://")?a:0==a.indexOf("//")?this.Ub+a:0==a.indexOf("/")?this.gc+a:this.Fa+a};l.am=function(a){var b=a[0]-this.na[0],c=0>b;if(a[0]<this.na[0]){var b=-b,d=this.X[0][0]>>b,e=this.X[0][1]>>b,f=this.X[1][0]>>b,b=this.X[1][1]>>b;if(a[0]>this.na[1]||a[1]<d||a[1]>f||a[2]<e||a[2]>b)return[!1,!1]}else if(d=a[1]>>b,b=a[2]>>b,a[0]>this.na[1]||d<this.X[0][0]||d>this.X[1][0]||b<this.X[0][1]||b>this.X[1][1])return[!1,!1];return[!0,c]};
function sc(a,b){a.pn!=b&&(a.he=a.c.mi[b],a.he||(a.he=new Yb(a.c,b,b),a.c.mi[b]=a.he),a.pn=b,a.yk=!0,a.Td++,Y(a.c))}l.oh=function(a,b){return Dc(this.c,this.$b,{fa:a[0],ib:a[1],jb:a[2]},null,b)};l.cj=function(a,b){return Dc(this.c,this.Vj,{fa:a[0],ib:a[1],jb:a[2]},null,b)};function sd(a,b,c){return Dc(a.c,a.Ck,{fa:b[0],ib:b[1],jb:b[2]},c,void 0)}function od(a,b,c){return Dc(a.c,a.ag,{fa:b[0],ib:b[1],jb:b[2]},c,void 0)}
function qc(a){var b,c=a.Tf;if(b=a.xb){b.Ne=[];b.kt=[];b.ni=[];var d={},e=0,f=[],g=[],k;for(k in c.fb){var h=a.Xd(k);h&&(g.push(h.f),e++,d[k]=h.g+1,f.push([[h.g+1],h,!0,!1]))}1<=e&&(g.sort(),g=g.join(";"),h=a.Ib[g])&&(f=[[[h.g+1],h,!0,!1]],e=1);if(1<e){var m=[];for(k in a.cg){var n=a.cg[k],p=n.f;if(p.length<=e){for(var w=!1,g=0,h=p.length;g<h;g++)if(!d[p[g]]){w=!0;break}if(!w){w=[];g=0;for(h=p.length;g<h;g++)w.unshift(d[p[g]]);m.push([w,n,!1,!1])}}}d=0;for(p=m.length;d<p;d++)g=m[d],n=g[1],n.Yo=!0,
n.Xo=!0,n.Yo&&f.push(g),n.Xo&&(w=g[0].slice(1),f.push([w,g[1],!1,!0]));do for(m=!0,d=0,p=f.length-1;d<p;d++){for(var n=f[d][0],w=f[d+1][0],r=!1,g=0,h=Math.min(n.length,w.length);g<h;g++)if(n[g]<w[g]||g==h-1&&n[g]==w[g]&&w.length>n.length){r=!0;break}r&&(g=f[d],f[d]=f[d+1],f[d+1]=g,m=!1)}while(!m);--e;d=0;for(p=f.length;d<p;d++)b.Ne.push([f[d][1],f[d][3]]),f[d][1].Pk=e,f[d][2]&&(e--,b.ni.push(f[d][1]))}else 1==e&&(b.Ne.push([f[0][1],f[0][3]]),f[0][1].Pk=e-1,b.ni=[f[0][1]]);a.ih=!1;for(k in c.Wa)if(b=
a.Wa[k])b.Ne=[b],b.ni=[b],b.Pa&&(a.ih=!0);Eb(a.l)}}
function rc(a){var b=a.Tf,c;for(c in b.fb){var d=b.fb[c],e=a.Xd(c);if(null!=e){e.hc=[];for(var f=0,g=d.length;f<g;f++){var k=d[f];if("string"===typeof k){var h=a.Ta[k];h&&e.hc.push([h,1])}else if(h=a.Ta[k.id]){var m=1;"undefined"!==typeof k.alpha&&(m=k.alpha);e.hc.push([h,m])}}}}for(c in b.Wa)if(f=b.Wa[c],d=a.Wa[c],null!=d&&d.pa&&(d.hc=[],(e=f.boundLayers)&&Array.isArray(e)))for(f=0,g=e.length;f<g;f++)if(k=e[f],"string"===typeof k)(h=a.Ta[k])&&d.hc.push([h,1]);else if(h=a.Ta[k.id])m=1,"undefined"!==
typeof k.alpha&&(m=k.alpha),d.hc.push([h,m])}function Hc(a,b,c,d,e,f,g){this.c=a;this.m=a.m;this.G=f;this.mf=g;this.Xa=this.vh=this.gd=this.Ga=null;this.H=0;this.Ma=null;this.sa=0;this.zg=!1;this.kb=null;this.Ia=b;this.Ya=c||!1;this.K=d;this.Va=e;this.ya=0;this.yd=this.xd=null;this.Si=!1;this.Vb=0;if(e&&e.Ha&&(a=e.Ha,a.uc))switch(this.xd=a.uc.T,this.xd){case "negative-type":this.yd=a.uc.pq;break;case "negative-code":this.yd=a.uc.ko;break;case "negative-size":this.yd=a.uc.u}this.ab=this.da=null}
l=Hc.prototype;l.D=function(){this.J=null;this.Bh();this.Ah();this.kb&&(this.kb.Bh(),this.kb.Ah())};l.Bh=function(a){this.gd=this.Ga=null;1!=a&&this.da&&this.c.rc.remove(this.da);this.kb&&this.kb.Bh();this.Xa||(this.H=0);this.da=null};l.Ah=function(a){null!=this.Xa&&(this.m.fg-=this.Xa.u,this.Xa.D(),this.m.Gc[1][0]++,this.m.Gc[1][1]+=this.Xa.u,this.kb&&this.kb.Ah());this.Xa=null;1!=a&&this.ab&&this.c.Wb.remove(this.ab);this.Ga||this.gd||(this.H=0);this.ab=null};
function ke(a,b,c){if(b&&c){a.K.Je=b;a.K.Ha=c;if(!b.Za[c.f]){b.Ta[c.f]=c;var d=Cc(c,b.f);b.Za[c.f]=Gc(b.cc,d,null,null,{G:b,Ha:c},a.G,a.mf)}a.K.J=b.Za[c.f];c=a.K.G;var d=c.f[0]-b.f[0],e=1/Math.pow(2,d);a.K.Gn=[e,e,(c.f[1]-(b.f[1]<<d))*e,(c.f[2]-(b.f[2]<<d))*e];Y(a.c)}}
l.V=function(a,b,c){var d=this.c.m.Bb>=this.c.Be;a=a||d;if(this.zg)return!1;if(this.K){if(this.K.J){for(;-1==this.K.J.ya;){var e=this.K.Je.qa;if(e.f[0]<this.K.Ha.na[0])return this.zg=!0,this.K.G.Ie=!0,Y(this.c),!1;ke(this,e,this.K.Ha)}(a=this.K.J.V(a,b,c))&&this.dl&&(this.K.G.Ie=null!=rd(this.K.J),this.dl=!1);return a}ke(this,this.K.Je,this.K.Ha);return!1}switch(this.xd){case "metatile":if(2!=this.ya){if(0==this.ya&&this.Va&&this.Va.G){d=this.Va.G.Xk;d||(d=Fc(this.c.ji,this.Va.G.f,8),this.Va.G.Xk=
d);var e=this.Va.Ha,f=this.Va.Am;this.Va.Am||(f=d.f,f=Dc(e.c,e.$b,{fa:f[0],ib:f[1],jb:f[2]},null,void 0),this.Va.Am=f);d=Gc(d,f,!0,null,null,this.G,this.mf);this.kb?this.kb.V(a,b,c)&&(this.ya=2):d.V(a,b,c)&&(a=this.Va.G,b=d.gd?d.gd[4*((a.f[2]&255)*d.vh[0]+(a.f[1]&255))]:0,this.ya=b&128?2:-1,2!=this.ya||b&64||(b=a.f,f=Dc(e.c,e.Pj,{fa:b[0],ib:b[1],jb:b[2]},null,void 0),this.kb=Gc(a.cc,f,null,null,null,this.G,this.mf),this.ya=0,a.Ie=!0,Y(this.c)))}if(-1==this.ya){if(!this.K){e=this.Va.G.qa;if(e.f[0]<
this.Va.Ha.na[0])return this.zg=!0,this.Va.G.Ie=!0,Y(this.c),!1;this.K={G:this.Va.G,Ha:this.Va.Ha};ke(this,this.K.G.qa,this.K.Ha);this.dl=!0}for(;-1==this.K.J.ya;){e=this.K.Je.qa;if(e.f[0]<this.K.Ha.na[0]){this.zg=!0;this.K.G.Ie=!0;Y(this.c);break}ke(this,e,this.K.Ha)}}return!1}break;case "negative-type":case "negative-code":case "negative-size":if(2!=this.ya){if(0==this.ya)le(this,b,"negative-size"==this.xd);else if(3==this.ya)this.sa<=this.c.h.mc&&performance.now()>this.Ma+this.c.h.nc&&le(this,
b,"negative-size"==this.xd);else if(-1==this.ya&&this.Va)for(this.K||(this.K={G:this.Va.G,Ha:this.Va.Ha},ke(this,this.K.G.qa,this.K.Ha));-1==this.K.J.ya;)ke(this,this.K.Je.qa,this.K.Ha);return!1}}e=!0;this.kb&&(e=this.kb.V(a,b,c));if(2==this.H){!a&&this.da&&Lc(this.c.rc,this.da);if((this.Ya&&!this.gd||!this.Ya&&!this.Xa)&&this.m.Sa>this.c.h.sg)return Y(this.c),!1;if(c)return this.Ya&&!this.gd&&(b=performance.now(),me(this),this.m.Sa+=performance.now()-b),e;if(this.Ya)this.gd||(b=performance.now(),
me(this),this.m.Sa+=performance.now()-b);else{if(!this.Xa){if(this.c.m.Bb>=this.c.Be||d)return!1;b=performance.now();this.Xa=new Fa(this.c.l.j,null,this.c.C);Ha(this.Xa,this.Ga,"linear",!1);this.m.fg+=this.Xa.u;this.m.Gc[0][0]++;this.m.Gc[0][1]+=this.Xa.u;this.ab=Mc(this.c.Wb,this.Ah.bind(this,!0),this.Xa.u);this.m.Sa+=performance.now()-b}!a&&this.ab&&Lc(this.c.Wb,this.ab)}return e}0==this.H?a||this.qb(b):3==this.H&&this.sa<=this.c.h.mc&&performance.now()>this.Ma+this.c.h.nc&&this.qb(b);return!1};
l.qb=function(a,b){this.c.Zb.load(this.Ia,this.Pc.bind(this,b),a,this.G,this.mf?"texture-in":"texture-ex")};l.Pc=function(a,b,c,d){this.oc=c;this.Jc=d;c=this.Sb.bind(this);d=this.nb.bind(this);a?this.ya=1:this.H=1;this.c.h.ug?q.Hc(b,this.zq.bind(this),c,q.useCredentials?-1!=this.Ia.indexOf(this.c.Fa):!1,this.c.C.zb,"blob"):this.Ga=q.gb.nj(b,d,c,this.c.C.Dk?-1!=b.indexOf(this.c.C.Dk):!1)};
l.Sb=function(a){1!=this.c.S&&(a&&window.URL.revokeObjectURL(this.Ga.src),this.H=3,this.Ma=performance.now(),this.sa++,this.sa<=this.c.h.mc&&setTimeout(function(){this.c.S||Y(this.c)}.bind(this),this.c.h.nc),this.Jc())};l.zq=function(a){if(this.Si&&this.xd&&"metatile"!=this.xd&&(this.Jm(0,a,null),-1==this.ya)){this.oc();return}var b=new Image;b.onerror=this.Sb.bind(this,!0);b.onload=this.nb.bind(this,!0);this.Ga=b;b.src=window.URL.createObjectURL(a);this.Vb=a.size};
l.nb=function(a){this.c.S||(a&&window.URL.revokeObjectURL(this.Ga.src),this.da=Mc(this.c.rc,this.Bh.bind(this,!0),this.Ga.naturalWidth*this.Ga.naturalHeight*3),Y(this.c),this.H=2,this.Ma=null,this.sa=0,this.oc())};function le(a,b,c){a.c.h.ug&&a.Si?a.qb(b,!0):a.c.Zb.load(a.Ia,a.Aq.bind(a,c),b,a.G,a.mf,a.mf?"texture-in":"texture-ex")}
l.Aq=function(a,b,c,d){this.oc=c;this.Jc=d;c=this.Bq.bind(this,a);d=this.Jm.bind(this,a);this.ya=1;a?q.Hc(b,d,c,q.useCredentials?-1!=this.Ia.indexOf(this.c.Fa):!1,this.c.C.zb,"blob"):q.gb.bm(b,d,c,q.useCredentials?-1!=this.Ia.indexOf(this.c.Fa):!1,this.c.C.zb)};l.Bq=function(){this.c.S||(this.ya=3,this.Ma=performance.now(),this.sa++,this.sa<=this.c.h.mc&&setTimeout(function(){this.c.S||Y(this.c)}.bind(this),this.c.h.nc),this.Jc())};
l.Jm=function(a,b,c){if(!this.c.S)if(this.ya=2,this.Ma=null,this.sa=0,this.c.h.ug&&this.Si)switch(this.xd){case "negative-size":b&&b.size==this.yd&&(this.ya=-1);break;case "negative-type":b&&b.type==this.yd&&(this.ya=-1);break;case "negative-code":c&&-1!=this.yd.indexOf(c)&&(this.ya=-1)}else{switch(this.xd){case "negative-size":b&&b.byteLength==this.yd&&(this.ya=-1);break;case "negative-type":b&&-1!=b.indexOf(this.yd)&&(this.ya=-1);break;case "negative-code":c&&-1!=this.yd.indexOf(c)&&(this.ya=-1)}this.oc()}};
function me(a){var b=document.createElement("canvas");b.width=a.Ga.naturalWidth;b.height=a.Ga.naturalHeight;b=b.getContext("2d");b.drawImage(a.Ga,0,0);a.gd=b.getImageData(0,0,a.Ga.naturalWidth,a.Ga.naturalHeight).data;a.vh=[a.Ga.naturalWidth,a.Ga.naturalHeight];a.Ga=null}function rd(a){return a.K&&a.K.J?a.K.J.kb:a.kb}
function $b(a,b){this.c=a;this.f=null;this.Oj=this.$b="";this.Fa=this.c.Fa;this.Ub=this.c.Ub;this.gc=this.c.gc;this.na=[0,0];this.X=[[0,0],[0,0]];this.fb=[];this.Fe(b);this.td=!0;this.pa=!1}l=$b.prototype;
l.Fe=function(a){this.f=a.id||null;this.$b=this.vb(a.metaUrl,"");this.Oj=this.vb(a.mapping,"");this.na=a.lodRange||[0,0];this.X=a.tileRange||[[0,0],[0,0]];this.nn=this.f?this.f.join(";"):null;if(this.f){var b=this.f.slice();b.sort();this.nn=b.join(";")}a.extents?(b=a.extents.ll,a=a.extents.ur,this.R=new Na(b[0],b[1],b[2],a[0],a[1],a[2])):this.R=new Na(0,0,0,1,1,1);this.ge=Math.pow(2,this.na[0])/((this.X[1][0]-this.X[1][0]+1)*(this.X[1][1]-this.X[1][1]+1));q.Hc(this.Oj,this.Dq.bind(this),this.Cq.bind(this),
q.useCredentials?-1!=this.Yb.indexOf(this.c.Fa):!1,this.c.C.zb)};l.Dq=function(a){a=new DataView(a);var b=0,c;c=""+String.fromCharCode(a.getUint8(b,!0));b+=1;c+=String.fromCharCode(a.getUint8(b,!0));b+=1;if("TM"==c){c=a.getUint16(b,!0);for(var b=b+2,d=0;d<c;d++){for(var e=a.getUint8(b,!0),b=b+1,f=[],g=0;g<e;g++){var k=a.getUint16(b,!0),b=b+2;(k=this.f[k])&&f.push(k)}1==f.length?this.fb.push(this.c.Xd(f[0])):this.fb.push(this.c.cg[f.join(";")])}}this.pa=!0;tc(this.c)};l.Cq=function(){};
l.Lb=function(){return{metaUrl:this.$b,mapping:this.Oj,lodRange:this.na,tileRange:this.X}};l.vb=function(a,b){if(!a)return b;a=a.trim();return-1!=a.indexOf("://")?a:0==a.indexOf("//")?this.Ub+a:0==a.indexOf("/")?this.gc+a:this.Fa+a};
l.am=function(a){var b=a[0]-this.na[0],c=0>b;if(a[0]<this.na[0]){var b=-b,d=this.X[0][0]>>b,e=this.X[0][1]>>b,f=this.X[1][0]>>b,b=this.X[1][1]>>b;if(a[0]>this.na[1]||a[1]<d||a[1]>f||a[2]<e||a[2]>b)return[!1,!1]}else if(d=a[1]>>b,b=a[2]>>b,a[0]>this.na[1]||d<this.X[0][0]||d>this.X[1][0]||b<this.X[0][1]||b>this.X[1][1])return[!1,!1];return[!0,c]};l.Xd=function(a){return this.fb[a-1]};l.oh=function(a,b){return Dc(this.c,this.$b,{fa:a[0],ib:a[1],jb:a[2]},null,b)};
function ne(a,b,c){this.c=a;this.f=c;this.qa=b;this.Kf=a.Kf;this.lk=!1;this.Td=0;this.xa=this.Qr=this.rb=1;this.Tb=this.od=this.Ea=this.B=this.Xk=this.ze=this.w=null;this.eb=[];this.ua=null;this.td=!1;this.Ib=[];this.Ie=!1;this.wc={};this.Ta={};this.Za={};this.Og=!0;this.Ya=null;this.ea=[[],[],[]];this.Cb={};this.ue={};this.$d={};a=this.c.ji.xb;for(b=c[0];0<b;b--){var d=1<<b-1,e=0;0!=(c[1]&d)&&(e+=1);0!=(c[2]&d)&&(e+=2);a.aa[e]||a.Tg(e);a=a.aa[e]}this.cc=a;this.tb=Fc(this.c.ji,c,5,!0);Fc(this.c.ji,
c,8,!0);this.aa=[null,null,null,null]}l=ne.prototype;l.D=function(){for(var a=0;4>a;a++)null!=this.aa[a]&&this.aa[a].D();this.Ea=this.B=this.w=this.tb=this.cc=null;this.eb=[];this.ua=this.Tb=this.od=null;this.wc={};this.Ta={};this.Za={};this.Og=!0;this.td=!1;this.Ib=[];this.lk=!1;this.Ya=this.Ob=this.Cd=this.Zd=null;this.ea=[[],[],[]];this.Cb={};this.ue={};this.$d={};this.aa=[null,null,null,null];a=this.qa;this.qa=null;null!=a&&a.removeChild(this)};
l.Kn=function(){null!=this.tb&&Jc(this.tb,this.B,null,this)};function oe(a){a.Cd&&(a.Ea=a.Cd.Ea,a.eb=a.Cd.eb,a.Za=a.Cd.Za,a.od=a.Cd.od,a.Tb=a.Cd.Tb,a.ua=a.Cd.ua,a.Zd=null,a.Cd=null)}l.Tg=function(a){if(!this.aa[a]){var b=this.f,b=[b[0]+1,b[1]<<1,b[2]<<1];switch(a){case 1:b[1]++;break;case 2:b[2]++;break;case 3:b[1]++,b[2]++}this.aa[a]=new ne(this.c,this,b)}};l.Vm=function(a){null!=this.aa[a]&&(this.aa[a].D(),this.aa[a]=null)};
l.removeChild=function(a){for(var b=0;4>b;b++)this.aa[b]==a&&(this.aa[b].D(),this.aa[b]=null)};
function pe(a,b,c,d){if(a.c.Kf!=a.sd){a.Zd=a.B;a.Cd={Ea:a.Ea,eb:a.eb,Za:a.Za,od:a.od,Tb:a.Tb,ua:a.ua};a.Ob=0<a.ea[0].length?{ea:a.ea,Cb:a.Cb,$d:a.$d}:null;a.lk=!1;a.ze=a.w;for(var e in a.wc)a.wc[e]={Rc:[],Od:[],pi:!1,sd:0};a.Ta={};a.Za={};a.Og=!0;a.B=null;a.Ea=null;a.eb=[];a.od=null;a.Tb=null;a.ua=null;a.td=!1;a.Ib=[];a.ea=[[],[],[]];a.Cb={};a.ue={};a.$d={};a.sd=a.c.Kf;Y(a.c);a.Ob&&(a.Ob=a.Ob)}if(!d){if(a.Rg||null==a.B&&0==a.Ib.length)a:if(a.B=null,a.td=!1,a.Ib=[],a.Rg=!1,b.hh)a.B=b.hh;else{b=b.Ne;
d=0;for(e=b.length;d<e;d++){var f=b[d][0],g=b[d][1];if(1==f.am(a.f)[0]){if(0<a.f[0]){var k=a.qa;if(k){if(k.Rg){a.Rg=!0;a.Ib=[];break a}var h=Jc(k.tb,f,null,a);if(h){if(!h.V(c)){a.Rg=!0;continue}if(k=h.bg(k.f)){if(h=a.f,0==(k.I&1<<(h[2]-(k.f[2]<<1)<<1)+(h[1]-(k.f[1]<<1))+4))continue}else continue}else continue}}a.Ib.push([f,g])}}1<a.Ib.length?a.td=!0:a.B=a.Ib[0]?a.Ib[0][0]:null}if(null==a.w||a.ze){if(!(b=a.Rg)){a:{if(a.td){b=a.Ib;e=d=0;for(f=b.length;e<f;e++)1==Jc(a.tb,b[e][0],!0,a).V(c)&&d++;if(d==
f){b=a.Ib;d=null;e=0;for(f=b.length;e<f;e++)if(g=b[e][0],h=b[e][1],k=Jc(a.tb,g,null,a),1==k.V(c)&&(k=k.bg(a.f),null!=k&&h==k.Of)){if(!h&&g.ve&&0==(k.I&1)&&0<k.wh){for(var h=k.wh-1,h=a.c.Xd(g.f[h]).Pk,m=!1,n=e;n<f;n++)if(b[n].Pk<=h){m=n>e;e=n-1;break}if(m)continue}if(0!=(k.I&1)){d=k.clone();a.B=g;break}}e=0;for(f=b.length;e<f;e++)g=b[e][0],k=Jc(a.tb,g,null,a),1==k.V(c)&&(k=k.bg(a.f),null!=k&&(d?(d.I|=k.I&240,d.v.N[0]=Math.min(d.v.N[0],k.v.N[0]),d.v.N[1]=Math.min(d.v.N[1],k.v.N[1]),d.v.N[2]=Math.min(d.v.N[2],
k.v.N[2]),d.v.la[0]=Math.max(d.v.la[0],k.v.la[0]),d.v.la[1]=Math.max(d.v.la[1],k.v.la[1]),d.v.la[2]=Math.max(d.v.la[2],k.v.la[2])):(d=k.clone(),a.B=g)));d&&$d(d,!0);a.w=d;a.ze=null;Y(a.c)}else{c=!1;break a}}b=a.B;if(null==b)c=!1;else if(b=Jc(a.tb,b,!0,a),1==b.V(c)){a.td||(a.w=b.bg(a.f),a.ze=null,Y(a.c));if(null!=a.w)for(a.w.G=a,a.ze=null,Y(a.c),c=0;4>c;c++)0!=(a.w.I&1<<c+4)==1?a.Tg(c):a.Vm(c);c=!0}else c=!1}b=c||null!=a.w&&a.ze}if(!b)return;a.ze&&(processFlag2_=!0)}}if(null==a.w)return!1;a.w.ub.Lk();
a.Zd&&a.Zd==a.B&&(a.Zd=null,oe(a));a.B&&(a.B.td?(a.ua=a.B.Xd(a.w.gn),a.ua||(a.ua=a.B)):a.ua=a.B);return!0}l.Xc=function(a,b,c,d){var e=this.c;if(!e.h.Ej&&e.lh&&d){var f=d.bf,g=e.ba,f=[f[0]-g[0],f[1]-g[1],f[2]-g[2]];q.O.normalize(f);if(q.O.oe(f,d.af)>d.dh)return!1}return 5<=d.ub.va?Bb(e.L,d.Ye,c):!e.lh||!e.h.Qh||4>a[0]?e.L.Xc(b,c):Bb(e.L,d.Ye,c)};
function qe(a,b,c,d){var e=b.N,f=b.la;b=e[0]-d[0];var g=e[1]-d[1],k=f[0]-d[0],h=e[1]-d[1],m=f[0]-d[0],n=f[1]-d[1],p=e[0]-d[0],w=f[1]-d[1],r=e[2]-d[2],t=f[2]-d[2];if(!a.c.h.Oh&&d[0]>e[0]&&d[0]<f[0]&&d[1]>e[1]&&d[1]<f[1]&&d[2]>e[2]&&d[2]<f[2])return[Number.POSITIVE_INFINITY,.1];a=a.c.L;a=0<g?0<b?0>t?Ab(a,[b,g,t]):0<r?Ab(a,[b,g,r]):Ab(a,[b,g,.5*(r+t)]):0>k?0>t?Ab(a,[k,h,t]):0<r?Ab(a,[k,h,r]):Ab(a,[k,h,.5*(r+t)]):0>t?Ab(a,[.5*(b+k),h,t]):0<r?Ab(a,[.5*(b+k),h,r]):Ab(a,[.5*(b+k),h,.5*(r+t)]):0>w?0<p?0>
t?Ab(a,[p,w,t]):0<r?Ab(a,[p,w,r]):Ab(a,[p,w,.5*(r+t)]):0>m?0>t?Ab(a,[m,n,t]):0<r?Ab(a,[m,n,r]):Ab(a,[m,n,.5*(r+t)]):0>t?Ab(a,[.5*(p+m),n,t]):0<r?Ab(a,[.5*(p+m),n,r]):Ab(a,[.5*(p+m),n,.5*(r+t)]):0<p?0>t?Ab(a,[b,.5*(h+n),t]):0<r?Ab(a,[b,.5*(h+n),r]):Ab(a,[b,.5*(h+n),.5*(r+t)]):0>m?0>t?Ab(a,[k,.5*(h+n),t]):0<r?Ab(a,[k,.5*(h+n),r]):Ab(a,[k,.5*(h+n),.5*(r+t)]):0>t?Ab(a,[.5*(b+k),.5*(h+n),t]):0<r?Ab(a,[.5*(b+k),.5*(h+n),r]):Ab(a,[.5*(b+k),.5*(h+n),.5*(r+t)]);return[a[0]*c,a[1]]}
function re(a,b,c){var d=1*a.c.fo-b.Wf;if(0>d)return[Number.POSITIVE_INFINITY,.1];var e=q.O.oe(a.c.ho,b.af);e<b.$e&&(e=Math.acos(e),e-=Math.acos(b.$e),b=Math.tan(e)*b.Wf,d=Math.sqrt(b*b+d*d));a=a.c.L;b=d;a.Aa&&a.update();a=b<a.tf?Number.POSITIVE_INFINITY:a.ee[0]/b;return[a*c,d]}
function se(a){var b,c=a.c,d=c.Kg,e=a.w,f=c.ba,g=c.lh&&c.h.Mj;0!=(e.I&1)?(b=Number.POSITIVE_INFINITY,0!=(e.I&4)?b=c.Gd*e.wf:0!=(e.I&8)&&(b=e.v.Wh/e.me*c.Gd),1==c.L.Hq?(e=c.L.Mn,b=[2*b/e,e]):0!=(e.I&8)?g?(b=e.v.Wh/256*c.Gd*(256/e.me),b=re(a,e,b)):(b=e.v.Wh/256*c.Gd,d=e.me/256*c.ic,c=c.Pd,f=[f[0]-c[0]*d,f[1]-c[1]*d,f[2]-c[2]*d],b=qe(a,e.v,b,f)):!g&&1.1<d?(b=d/1.1*e.wf*c.Gd,d=d/1.1*c.ic,c=c.Pd,f=[f[0]-c[0]*d,f[1]-c[1]*d,f[2]-c[2]*d],b=qe(a,e.v,b,f)):b=g?re(a,e,b):qe(a,e.v,b,f)):(b=g?re(a,e,1):qe(a,e.v,
1,f),b[0]=Number.POSITIVE_INFINITY);a.rb=b[0];a.xa=b[1]}
function nd(a,b,c,d){if(!(a.rb==Number.POSITIVE_INFINITY||4.4<a.rb)||!a.w||0==(a.w.I&240)){var e=a.c.h.nq,f=a.c;if(c){var g=c[0],k=c[1][0];c=c[1][1]}else{var h=Cd(f,a.f),g=h[0],k=h[1][0];c=h[1][1]}var m=[.5*(c[0]+k[0]),.5*(c[1]+k[1])],n=f.Ra.Fp;d=d||a.w.$e;if(n&&!g.oj&&Math.acos(d)>.1*Math.PI)d=Math.cos(.5*Math.acos(d)),nd(a,b,[g,[[k[0],k[1]],[m[0],m[1]]]],d),nd(a,b,[g,[[m[0],k[1]],[c[0],m[1]]]],d),nd(a,b,[g,[[k[0],m[1]],[m[0],c[1]]]],d),nd(a,b,[g,[[m[0],m[1]],[c[0],c[1]]]],d);else{h=Math.log(5*(g.R.Z[1]-
g.R.W[1])/a.xa)/f.hq;h=Math.max(0,h-8+g.f[0]);d=[[c[0],c[1]],[c[0],k[1]],[k[0],k[1]],[k[0],c[1]],[m[0],c[1]],[m[0],k[1]],[k[0],m[1]],[c[0],m[1]]];if(e){if(!a.w)return;var e=a.w.kd,p=[[e],[e],[e],[e],[e],[e],[e],[e]];m[2]=e;m=ce(g,m,!0)}else h=f.Dc(null,h,null,g,m,d),m[2]=h[0],m=ce(g,m,!0),(p=h[5])||(p=[[0],[0],[0],[0],[0],[0],[0],[0]]);var e=f.l,h=f.Mq,w=qb(e.L),r=pb(e.L),t=b[0],u=b[1];b=b[2];d[0][2]=p[0][0];var x=ce(g,d[0],!0);d[1][2]=p[1][0];var H=ce(g,d[1],!0);d[2][2]=p[2][0];var y=ce(g,d[2],!0);
d[3][2]=p[3][0];var I=ce(g,d[3],!0);d[4][2]=p[4][0];var D=ce(g,d[4],!0);d[5][2]=p[5][0];var L=ce(g,d[5],!0);d[6][2]=p[6][0];var C=ce(g,d[6],!0);d[7][2]=p[7][0];d=ce(g,d[7],!0);h[0]=I[0]-t;h[1]=I[1]-u;h[2]=I[2]-b;h[3]=D[0]-t;h[4]=D[1]-u;h[5]=D[2]-b;h[6]=x[0]-t;h[7]=x[1]-u;h[8]=x[2]-b;h[9]=C[0]-t;h[10]=C[1]-u;h[11]=C[2]-b;h[12]=m[0]-t;h[13]=m[1]-u;h[14]=m[2]-b;h[15]=d[0]-t;h[16]=d[1]-u;h[17]=d[2]-b;h[18]=y[0]-t;h[19]=y[1]-u;h[20]=y[2]-b;h[21]=L[0]-t;h[22]=L[1]-u;h[23]=L[2]-b;h[24]=H[0]-t;h[25]=H[1]-
u;h[26]=H[2]-b;!n||f.fk||1!=g.f[0]||g.oj||(m=ce(g,[g.R.Z[0],g.R.Z[1],0]),f.fk=Math.sqrt(m[0]*m[0]+m[1]*m[1]),f.Vq=8*Math.pow(2,552058/f.fk));m=1;n&&g.oj?(m=f.Vq,n=e.er,e.j.useProgram(n,["aPosition","aTexCoord"]),Ra(n,"uParams4",[-t,-u,f.fk,0])):(n=e.fr,e.j.useProgram(n,["aPosition","aTexCoord"]));Sa(n,"uMV",w);Sa(n,"uProj",r);fb(n,"uPoints",h);f=g.$l*m;r=1/(c[0]-k[0]);w=1/(k[1]-c[1]);d=f/((g.R.Z[0]-g.R.W[0])*r);h=f/((g.R.Z[1]-g.R.W[1])*w);k=(k[0]-g.R.W[0])*r*d;c=(c[1]-g.R.W[1])*w*h;Ra(n,"uParams",
[f*m,a.c.se,1/15,g.Ep*m]);Ra(n,"uParams3",[c-Math.floor(c),k-Math.floor(k),h,d]);Ra(n,"uParams2",[0,0,g.Dp,0]);e.j.bindTexture(e.ig);e.Pq.Ua(n,"aPosition","aTexCoord")}}}function dc(a,b,c){this.c=a;this.L=a.L;this.yr=[0,0,0];this.hh=c;this.Zh=this.c.Ra.uf.Zh;this.Yd=!1;this.Oe=new ne(this.c,null,this.yr);this.Ne=[];this.ni=[];this.h=this.c.h;this.Pf=[0,0,0];this.Gd=1;this.xc=0}l=dc.prototype;l.D=function(){this.Oe=null};
l.lc=function(){var a=Dc(this.c,surface.$b,{fa:result_[0],ib:result_[1],jb:result_[2]});map_.Zb.load(a,metatile_.Qs.bind(metatile_,a));this.Ts.load();this.Oe.ub=1;this.Yd=!0};function Ad(a,b){for(var c=a.Oe,d=b[0];0<d;d--){var e=1<<d-1,f=0;0!=(b[1]&e)&&(f+=1);0!=(b[2]&e)&&(f+=2);c=c.aa[f];if(!c)return null}return c}
l.Ua=function(){this.Pf=[0,0,0];this.Gd=this.c.Gd;var a=this.c.Ra.Db.de.Jq;if(null!=a)te(this),"X"==a.T&&(te(this),te(this));else switch(this.hh&&this.hh.Pa?this.c.h.Fj:this.c.h.Nh){case "topdown":te(this);break;case "fit":this.xc++;var b=this.Oe;if(pe(b,this,0)){var a=this.c,c=b.w,d=a.ba;if(b.Xc(b.f,c.v,d,c)){se(b);var e=b.B.jh,e=!b.B.Pa&&!e&&a.h.pf,f=a.Ji,g=a.hk,k=a.gk,h=0,m;g[0]=[b,0];var b=1,n=a.Kg,p=a.A.Jf||a.A.If,w=a.A.be;a.Kb++;var r=1,t=1,u=1,x=a.Kb,H=a.h.oq;do{var y=0;m=0;for(var I=b-1;0<=
I;I--)if(c=g[I],b=c[0],depth_=c[1],depth_>=H)e&&(f[h]=[b,!0],h++);else{if(c=b.w)t++,c.ub.Kb!=x&&(c.ub.Kb=x,u++);if(b.Xc(b.f,c.v,d,c)){r++;b.rb!=Number.POSITIVE_INFINITY&&b.rb>y&&(y=b.rb);p&&w.push(b);var D=m,L=h;if(0!=(c.I&240)==0||b.rb<=n){var C=2E3*(b.f[0]+4)*b.xa;if(0==(c.I&240)||fd(a,b,b.w,d,C,!0,0<depth_,!0))f[h]=[b,!1],h++;else for(depth_++,c=0;4>c;c++){var v=b.aa[c];v&&pe(v,this,v.f[0],!0)&&(ue(v,v.w),se(v),C=2E3*(v.f[0]+4)*v.xa,fd(a,v,v.w,d,C,!0,0<depth_,!0)?(f[h]=[v,!1],h++):(k[m]=[v,depth_],
m++))}}else if(0==depth_&&0!=(c.I&1)&&b.rb<=2*n){for(var O=0,ia=0,F=[],c=0;4>c;c++)if(v=b.aa[c])O++,pe(v,this,v.f[0])&&(ue(v,v.w),se(v),C=2E3*(v.f[0]+4)*v.xa,fd(a,v,v.w,d,C,!0,!0,!0)&&(ia++,F.push(v)));if(0<O&&O==ia){do for(v=!0,c=0,C=F.length-1;c<C;c++)F[c].xa>F[c+1].xa&&(v=F[c],F[c]=F[c+1],F[c+1]=v,v=!1);while(!v);c=0;for(C=F.length;c<C;c++)k[m]=[F[c],depth_],m++}else if(C=2E3*(b.f[0]+4)*b.xa,fd(a,b,b.w,d,C,!0,!0,!0))for(f[h]=[b,!1],h++,c=0;4>c;c++)(v=b.aa[c])&&pe(v,this,v.f[0])&&(C=2E3*(v.f[0]+
4)*v.xa,fd(a,v,v.w,d,C,!0,!1,!0));else for(c=0;4>c;c++)(v=b.aa[c])&&pe(v,this,v.f[0])&&(ue(v,v.w),se(v),k[m]=[v,depth_],m++)}else for(c=0;4>c;c++)(v=b.aa[c])&&pe(v,this,v.f[0])&&(ue(v,v.w),se(v),k[m]=[v,depth_],m++)}e&&D==m&&L==h&&(f[h]=[b,!0],h++)}b=g;g=k;k=b;b=m}while(0<b);a.m.ri=r;a.m.hi=t;a.m.gi=u;if(this.c.A.Jg||this.c.A.Ig)for(this.c.Hb[0]||(this.c.Hb[0]=[]),D=this.c.Hb[0],I=h-1;0<=I;I--)D.push(f[I]);for(I=h-1;0<=I;I--)D=f[I],b=D[0],e&&D[1]?nd(b,d):D[1]||fd(a,b,b.w,d,0,!1,!1,!0)}}break;case "fitonly":if(this.xc++,
H=this.Oe,pe(H,this,0)&&(a=this.c,u=H.w,d=a.ba,H.Xc(H.f,u.v,d,u))){se(H);e=a.Ji;D=a.hk;L=a.gk;f=0;D[0]=H;t=1;b=a.Kg;g=a.A.Jf||a.A.If;k=a.A.be;a.Kb++;p=n=m=1;w=a.Kb;do{h=r=0;for(--t;0<=t;t--){H=D[t];if(u=H.w)n++,u.ub.Kb!=w&&(u.ub.Kb=w,p++);if(H.Xc(H.f,u.v,d,u))if(m++,g&&k.push(H),H.rb!=Number.POSITIVE_INFINITY&&H.rb>r&&(r=H.rb),H.rb<=b)e[f]=H,f++;else{I=0;u=[];for(x=0;4>x;x++)if(y=H.aa[x])I++,pe(y,this,y.f[0])&&(ue(y,y.w),se(y),u.push(y));if(0<I){do for(I=!0,x=0,H=u.length-1;x<H;x++)u[x].xa>u[x+1].xa&&
(I=u[x],u[x]=u[x+1],u[x+1]=I,I=!1);while(!I);x=0;for(H=u.length;x<H;x++)L[h]=u[x],h++}else e[f]=H,f++}}r=D;D=L;L=r;t=h}while(0<t);a.m.ri=m;a.m.hi=n;a.m.gi=p;if(this.c.A.Jg||this.c.A.Ig)for(this.c.Hb[0]||(this.c.Hb[0]=[]),D=this.c.Hb[0],t=f-1;0<=t;t--)D.push(e[t]);for(t=f-1;0<=t;t--)H=e[t],fd(a,H,H.w,d,0,!1,!1)}}};function ue(a,b){if(!b.hg){for(var c=a.qa;c;){var d=c.w;if(0!=(d.I&2)){b.kd=d.kd;b.jd=d.jd;$d(b);break}c=c.qa}b.hg=!0}}
function te(a){a.xc++;var b=a.Oe;if(pe(b,a,0)){var c=a.c,d=b.w,e=c.ba;if(b.Xc(b.f,d.v,e,d)){se(b);var f=c.Ji,g=c.hk,k=c.gk,h=0,m,n;g[0]=b;m=1;var p=c.Kg,w=0,r=c.A.Jf||c.A.If,t=c.A.be;c.Kb++;var u=1,x=1,H=1,y=c.Kb;do{var I=0;n=0;for(--m;0<=m;m--){b=g[m];if(d=b.w)u++,d.ub.Kb!=y&&(d.ub.Kb=y,x++);if(b.Xc(b.f,d.v,e,d))if(H++,b.rb!=Number.POSITIVE_INFINITY&&b.rb>I&&(I=b.rb),r&&t.push(b),b.rb<=p)f[h]=b,h++;else{for(var D=0,L=0,d=[],C=0;4>C;C++){var v=b.aa[C];if(v&&(D++,pe(v,a,v.f[0]))){ue(v,v.w);se(v);var O=
1*v.f[0]*v.xa;b.B&&0!=(v.w.I&1)?fd(c,v,v.w,e,O,!0,!1)&&(L++,d.push(v)):(L++,d.push(v))}}if(0<D&&D==L&&0!=D){do for(D=!0,C=0,b=d.length-1;C<b;C++)d[C].xa>d[C+1].xa&&(D=d[C],d[C]=d[C+1],d[C+1]=D,D=!1);while(!D);C=0;for(b=d.length;C<b;C++)k[n]=d[C],n++}else f[h]=b,h++}}m=g;g=k;k=m;m=n;0!=I&&(w=I)}while(0<m);w>a.c.Xg&&(a.c.Xg=w);c.m.ri=H;c.m.hi=u;c.m.gi=x;if(a.c.A.Jg||a.c.A.Ig)for(a.c.Hb[0]||(a.c.Hb[0]=[]),a=a.c.Hb[0],m=h-1;0<=m;m--)a.push(f[m]);for(m=h-1;0<=m;m--)b=f[m],fd(c,b,b.w,e,0,!1,!1)}}}
function zd(a,b,c,d){if(b){a.uf=c;c=d?a.ms:a.ls;if(1==b.f[0]&&(ve(a,b.qa,!0),!b.qa.w))return;ve(a,b,!1,c)}}function ve(a,b,c,d){if(null!=b&&pe(b,a,0)&&!c&&(b.w.ub.Lk(),b.Zd&&b.Zd==b.B&&(b.Zd=null,oe(b)),1==d(b,a.uf,0))){var e=a.uf;c=e.fl;var e=e.R,f=[.5*(e.W[0]+e.Z[0]),.5*(e.W[1]+e.Z[1])],g=c[0]>=f[0];c=c[1]>=f[1];g?e.W[0]=f[0]:e.Z[0]=f[0];c?e.W[1]=f[1]:e.Z[1]=f[1];ve(a,b.aa[g?c?1:3:c?0:2],!1,d)}}
l.ls=function(a,b){if(!a||a.f[0]>b.Uf&&b.Ya)return!1;var c=a.w;if(!c)return!1;if(0!=(c.I&2))if(!a.Ya){if(!a.B||!a.ua||!a.ua.cj)return!1;c=a.ua.cj(a.f);a.Ya=Gc(a.cc,c,!0)}else{if(1==a.Ya.V())return b.qa={w:b.w,Ya:b.Ya,gg:b.gg},b.w=c,b.Ya=a.Ya,b.gg={W:b.R.W.slice(),Z:b.R.Z.slice()},a.f[0]!=b.Uf}else return b.Ya||(b.w=c),!0;return!1};l.ms=function(a,b){if(!a||a.f[0]>b.Uf)return!1;var c=a.w;if(!c)return!1;b.qa={w:b.w};b.w=c;return a.f[0]!=b.Uf};
Fb.prototype.quad=function(a,b,c){var d="";for(i=a;0<i;i--){a=0;var e=1<<i-1;0!=(b&e)&&(a+=1);0!=(c&e)&&(a+=2);d+=a}return d};Fb.prototype.msDigit=function(a,b){return((a&3)<<1)+(b&1)};function we(a){for(a=a.toString(16);8>a.length;)a="0"+a;return a}Fb.prototype.ppx=function(a,b){return we(b<<28-a)};Fb.prototype.ppy=function(a,b){return we(268435456-(b+1<<28-a))};
Fb.prototype.Yq=function(a,b,c){if("string"==typeof c)if(-1!=c.indexOf("quad")){b="(function(lod,x,y,loclod,locx,locy){"+c.replace("quad","return this.quad")+"})";try{var d=eval(b).bind(this);return d(a.fa,a.ib,a.jb,a.Ih,a.Aj,a.Bj)}catch(e){return c}}else if(-1!=c.indexOf("ms_digit")){b="(function(x,y,loclod,locx,locy){"+c.replace("ms_digit","return this.msDigit")+"})";try{return d=eval(b).bind(this),d(a.ib,a.jb,a.Ih,a.Aj,a.Bj)}catch(e){return c}}else{if(-1!=c.indexOf("alt"))return(a=/\(([^)]*)\)/.exec(c))&&
a[1]&&(a=a[1].match(/([^,]+)/g),0<a.length)?a[b%a.length]:c;if(-1!=c.indexOf("ppx")){b="(function(lod,x,loclod,locx){"+c.replace("ppx","return this.ppx")+"})";try{return d=eval(b).bind(this),d(a.fa,a.ib,a.Ih,a.Aj)}catch(e){return c}}else if(-1!=c.indexOf("ppy")){b="(function(lod,y,loclod,locy){"+c.replace("ppy","return this.ppy")+"})";try{return d=eval(b).bind(this),d(a.fa,a.jb,a.Ih,a.Bj)}catch(e){return c}}else return c}else return c};
function Dc(a,b,c,d,e){var f=e=0,g=0;if(c.fa){var k=[c.fa,c.ib,c.jb],h=a.Ra.ad.ta;e=[];g=0;for(f=h.length;g<f;g++){var m=h[g],n=k[0]-m.f[0];ix_=k[1]>>n;iy_=k[2]>>n;ix_==m.f[1]&&iy_==m.f[2]&&e.push(m)}k=null;g=0;for(f=e.length;g<f;g++)-1<e[g].f[0]&&(k=e[g]);g=c.fa-(k?k.f.slice():[0,0,0])[0];f=(1<<g)-1;e=c.ib&f;f&=c.jb}k={fa:c.fa,ib:c.ib,jb:c.jb,Ih:g,Aj:e,Bj:f};b=b.replace(/ /g,"");b=q.Gr(b,{lod:c.fa,x:c.ib,y:c.jb,sub:d,locx:e,locy:f,loclod:g,geonavtile:d,here_app_id:"abcde",here_app_code:"12345"},
a.Yq.bind(a,k,a.In));a.In++;return(e=-1!=b.indexOf("//"))?0==b.indexOf("//")?a.Ub+b:b:a.Fa+b}function Hb(a,b){this.parse(b)}Hb.prototype.parse=function(a){this.nl=a.description||"";this.Wa=a.freeLayers||{};this.fb={};if(a.surfaces)if(a=a.surfaces,Array.isArray(a))for(var b=0,c=a.length;b<c;b++)this.fb[a[b]]=[];else this.fb=a;this.Wa=!this.Wa||Array.isArray(this.Wa)?{}:JSON.parse(JSON.stringify(this.Wa));this.fb=JSON.parse(JSON.stringify(this.fb))};
Hb.prototype.Lb=function(){return{description:JSON.parse(JSON.stringify(this.nl)),surfaces:JSON.parse(JSON.stringify(this.fb)),freeLayers:JSON.parse(JSON.stringify(this.Wa))}};
function Me(a,b,c){this.S=!1;this.h={c:null,Jh:900,Mh:360,Ph:60,Nj:1.1,oq:2,Oh:0,Kh:20,sg:2E4,Kj:!1,Jj:!0,tg:1,Dd:4,Hj:!1,Sh:!0,qm:!0,rm:!0,sm:!0,Ej:!1,Lj:!0,nf:!0,Gj:!0,tm:!1,Qh:!1,Mj:!1,pf:!0,nq:!0,vm:!0,nc:3E3,mc:3,Nh:"topdown",Fj:"fit",ug:!1,Rh:!0,Lh:!0,nk:!0,mk:!1,Wc:null,wm:!1};this.Sf={};this.nd(b);this.yl=a;this.Tp=c;this.pa=!1;this.Ae=[];this.xj=0;this.Fk=this.Dk=null;this.zb={};this.og=null!=q.On?new q.On(this):null;this.Ij=this.c=null;this.l=new hb(this,this.yl,0,this.di.bind(this),this.h);
this.xr=new S(this.l);this.wb=window._mproj4_;q.wa.lc();this.Hh(this.h.c);window.Xm(this.Lm.bind(this))}l=Me.prototype;l.di=function(){null!=this.c&&Y(this.c)};
l.Hh=function(a){null!=this.c&&this.Vf();if(null!=a){a=q.ra.Hl(a,window.location.href);this.Ek=!0;this.Dn=this.oi=this.Dj=null;this.En=!1;this.Cn=!0;this.um=!1;var b=function(){if((this.Ek||this.Cn)&&this.Dj&&!this.um){this.um=!0;var b=this.Dj;this.Yc("map-mapconfig-loaded",b);this.c=new Fb(this,b,a,this.h);this.Ij=new Z(this.c);this.nd(this.c.Ai);this.nd(this.Sf);this.h.oa&&(this.c.setPosition(this.h.oa),this.h.oa=null);this.h.Nn&&(this.c.Ef(this.h.Nn),this.h.Nn=null);this.Yc("map-loaded",{browserOptions:this.c.Ai})}}.bind(this),
c=function(a){this.Dj=a;b()}.bind(this),d=function(){}.bind(this),e=function(b){this.zb.token=b.token;this.zb.tokenHeader=b.header;this.oi=1E3*b.expires;this.Dn=function(){this.oi=null;this.En=!0;"string"===typeof this.h.Wc?q.hd(this.h.Wc,e,f,null,q.useCredentials,this.zb):this.h.Wc(e)}.bind(this);this.En||k(a);"string"===typeof this.h.Wc?h(b.cookieInjector,this.h.Wc):h(b.cookieInjector,a)}.bind(this),f=function(){console.log("auth token not loaded");this.Cn&&k(a)}.bind(this),g=function(){document.body.removeChild(this.Fk);
this.Fk=null;this.Ek=!0;b()}.bind(this),k=function(a){q.hd(a,c,d,null,q.useCredentials,this.zb)}.bind(this),h=function(a,b){a=q.ra.Hl(a,b);this.Dk=q.ra.mp(a);var c=document.createElement("iframe");this.Fk=c;c.onload=g;c.src=a;c.style.display="none";document.body.appendChild(c)}.bind(this);this.h.Wc?(this.Ek=!1,"string"===typeof this.h.Wc?q.hd(this.h.Wc,e,f,null,q.useCredentials,this.zb):this.h.Wc(e)):k(a)}};l.Gi=function(){this.S||(this.Vf(),this.l&&this.l.D(),this.yl=null,this.S=!0)};
l.Vf=function(){this.c&&(this.c.D(),this.Ij=this.c=null,this.Yc("map-unloaded",{}))};l.fd=function(){return this.c};l.Il=function(){return this.l};l.qh=function(){return this.xr};l.dj=function(){return this.wb};l.Xj=function(a,b){if(1!=this.S&&null!=b)return this.xj++,this.Ae.push({uq:a,rg:b,f:this.xj}),function(a){this.removeListener(a)}.bind(this,this.xj)};l.Yc=function(a,b){for(var c=0;c<this.Ae.length;c++)this.Ae[c].uq==a&&this.Ae[c].rg(b)};
l.removeListener=function(a){for(var b=0;b<this.Ae.length;b++)if(this.Ae[b].f==a){this.Ae.splice(b,1);break}};q.hp=function(a){return(a?"Core: ":"")+"1.88"};q.el=function(){q.wa.lc();var a=document.createElement("canvas");if(null==a)return!1;a.width=1024;a.height=768;if(null==a.getContext)return!1;var b=null;try{b=a.getContext("webgl")||a.getContext("experimental-webgl")}catch(c){return!1}return b?!0:!1};
q.Tk=function(a,b){a="string"!==typeof a?a:document.getElementById(a);return q.el()?new Ne(a,b):null};function Ne(a,b){this.C=new Me(a,b,this);this.c=this.C.fd()}l=Ne.prototype;l.Gi=function(){this.C.Gi();this.C=null};l.fd=function(){return this.C?this.C.Ij:null};l.Hh=function(a){return this.C?this.C.Hh(a):null};l.Vf=function(){return this.C?this.C.Vf():null};l.Il=function(){return this.C?this.C.qh():null};l.dj=function(){return this.C?this.C.dj():null};
l.Xj=function(a,b){if(!this.C)return null;this.C.Xj(a,b)};l.Yc=function(a,b){if(!this.C)return null;this.C.Yc(a,b)};q.MapCore=q.Tk;q.mapCore=q.Tk;Ne.prototype.destroy=Ne.prototype.Gi;Ne.prototype.loadMap=Ne.prototype.Hh;Ne.prototype.destroyMap=Ne.prototype.Vf;Ne.prototype.getMap=Ne.prototype.fd;Ne.prototype.getRenderer=Ne.prototype.Il;Ne.prototype.on=Ne.prototype.Xj;Ne.prototype.callListener=Ne.prototype.Yc;q.getCoreVersion=q.hp;q.checkSupport=q.el;
Me.prototype.nd=function(a){if("object"===typeof a&&null!==a)for(var b in a)this.md(b,a[b])};
Me.prototype.md=function(a,b){if("pos"==a||"position"==a||"view"==a)this.fd()?("view"==a?this.fd().Ef(b):this.fd().setPosition(new Gb(this,b)),this.Sf[a]&&delete this.Sf[a]):this.Sf[a]=b;else if("map"==a)this.h.c=q.ti(b,null);else if("mapVirtualSurfaces"==a)this.h.Sh=q.Ka(b,!0);else if("authorization"==a)this.h.Wc="string"===typeof b||"function"===typeof b?b:null;else{if(0==a.indexOf("map")||"mario"==a)this.Sf[a]=b,null!=this.fd()&&this.fd().md(a,b);if(0==a.indexOf("renderer"))switch(a){case "rendererAntialiasing":this.h.nk=
q.Ka(b,!0);break;case "rendererAllowScreenshots":this.h.mk=q.Ka(b,!1)}}};Me.prototype.Vd=function(a){if("map"==a)return this.h.c;if(0==a.indexOf("map")&&null!=this.fd())return this.fd().Vd(a,value_);if(0==a.indexOf("renderer")){a:{switch(a){case "rendererAntialiasing":a=this.h.nk;break a;case "rendererAllowScreenshots":a=this.h.mk;break a}a=void 0}return a}};Me.prototype.Lm=function(){this.S||(null!=this.c&&this.c.update(),this.Yc("tick",{}),window.Xm(this.Lm.bind(this)))};
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

Melown.Utils.validateNumberArray = function(array_, arraySize_, minValues_, maxValues_, defaultValues_) {
    if (Array.isArray(array_) && array_.length == arraySize_) {
        for (var i = 0; i < arraySize_; i++) {
            array_[i] = Melown.clamp(array_[i], minValues_[i], maxValues_[i]);
        }
        return array_;
    } else {
        return defaultValues_;
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


// Presenter module goes here
/**
 * @constructor
 */
Melown.Presenter = function(browser_, config_) {
    this.container_ = null;
    this.aTags_ = null;
    this.sectionTags_ = null;
    this.defaultHeight_ = 0; // Changes based on presentation"s height
    this.maxHeight_ = 0; // Height of inner container to be set
    this.subtitlesHeights_ = []; // Set of heights after init() for subtitles

    this.firstTitleMargin_ = 20; // First slide of presentation has some css margin-top, so here we use it
    this.swipeOffset_ = 60; // Height of swipeControl

    this.actualNode_ = 0;
    this.maxNodes_ = 1;
    this.animTime_ = 600; // Default css transition time
    this.currentToolbox_ = "right"; // Default toolbox (right | wide)

    this.browser_ = browser_;
    this.id_ = [];
    this.current_ = null;

    this.presenter_ = (typeof config_["presenter"] !== "undefined") ? JSON.parse(JSON.stringify(config_["presenter"])) : {};
    this.presenterAutoplay_ = config_["presenterAutoplay"];

    if (typeof this.presenter_ !== "undefined") {
        this.playPresentation();
    }
};

Melown.Presenter.prototype.addPresentation = function(id_, source_) {
    if (Object.keys(this.presenter_).length !== 0) {
        this.presenter_[id_] = source_;
    } else if (typeof id_ !== "undefined") {
        this.presenter_ = {};
        this.presenter_[id_] = source_;
    }
};

Melown.Presenter.prototype.removePresentation = function(id_) {
    if (typeof id_ !== "undefined") {
        if (this.getCurrentPresentation() == id_) {
            this.stopPresentation();
            this.current_ = null;
        }
        delete this.presenter_[id_];
        return("Removed presentation id: "+id_);            
    } else {
        if (this.getCurrentPresentation() !== null) {
            this.stopPresentation();
        }
        this.presenter_ = {}; // Remove all presentations
        this.presenterAutoplay_ = "";
        this.current_ = null;
        return("All presentations removed.");
    }
};

Melown.Presenter.prototype.getCurrentPresentation = function() {
    return this.current_;
};

Melown.Presenter.prototype.getCurrentPresentationType = function() {
    return this.currentToolbox_;
};

Melown.Presenter.prototype.playPresentation = function(id_) {
    this.stopPresentation();
    if (this.presenterAutoplay_ !== undefined && typeof id_ === "undefined") {
        id_ = this.presenterAutoplay_;
    } else if (typeof id_ === "undefined" && this.presenter_ !== undefined && Object.keys(this.presenter_).length > 0) {
        for (var key in this.presenter_) {
            id_ = key;
            break;
        }
    }
    
    if (typeof id_ !== "undefined" && Object.keys(this.presenter_).indexOf(id_) != -1) {
        this.current_ = id_;
        this.readTextInput(id_);
        return true;
    } else {
        return false;
    }
};

Melown.Presenter.prototype.stopPresentation = function() {
    var current_ = this.getCurrentPresentation();
    this.currentToolbox_ = "right";
    if (current_ !== null) {
        this.current_ = null;
        this.browser_.ui_.removeControl(current_);
        this.container_.getElementsByTagName("article")[0].parentNode.parentNode.parentNode.remove();
        return true;
    }
    return false;    
};

Melown.Presenter.prototype.listPresentations = function(id_) {
    if (Object.keys(this.presenter_).length === 0) {
        return [];
    }
    if (typeof id_ !== "undefined") {
        if (this.presenter_[id_] !== "undefined") {
            return this.presenter_[id_];
        } else {
            return null;
        }
    } else {
        var tmp_ = [];
        for (var key_ in this.presenter_) {
            tmp_.push(key_);
        }
        return tmp_;
    }
};

//prevent minification
Melown.Presenter.prototype["addPresentation"] = Melown.Presenter.prototype.addPresentation;
Melown.Presenter.prototype["removePresentation"] = Melown.Presenter.prototype.removePresentation;
Melown.Presenter.prototype["getCurrentPresentation"] = Melown.Presenter.prototype.getCurrentPresentation;
Melown.Presenter.prototype["getCurrentPresentationType"] = Melown.Presenter.prototype.getCurrentPresentationType;
Melown.Presenter.prototype["playPresentation"] = Melown.Presenter.prototype.playPresentation;
Melown.Presenter.prototype["stopPresentation"] = Melown.Presenter.prototype.stopPresentation;
Melown.Presenter.prototype["listPresentations"] = Melown.Presenter.prototype.listPresentations;

// All Utilities needed for proper Presenter working

Melown.Presenter.prototype.init = function(id_, HTMLtemplate_) {
    var obj_ = this;    
    var templatePanelPrefix_ = "<div class='melown-presenter panelContainer'><div class='melown-presenter swipeControl top'></div><div class='melown-presenter toolboxContainer'>";
    var templatePanelSuffix_ = "</div><div class='melown-presenter swipeControl'></div></div>";
    var templatePanel_ = templatePanelPrefix_ + HTMLtemplate_ + templatePanelSuffix_;
    var templateSubtitlesPrefix_ = "<div class='melown-presenter subtitlesContainer'><button type='button'></button><button type='button'></button>"
                                    + "<div class='melown-presenter swipeSubtitles'><div><div></div></div></div><div class='melown-presenter swipeSubtitles'><div><div></div></div></div><div class='melown-presenter innerContainer'>";
    var templateSubtitlesSuffix_ = "</div></div>";
    var templateSubtitles_ = templateSubtitlesPrefix_ + HTMLtemplate_ + templateSubtitlesSuffix_;
    var template_ = templatePanel_ + templateSubtitles_;
    var ctrlDelve_ = this.browser_.ui_.addControl(id_, template_);
    this.id_.push(id_);
    this.setContainer(ctrlDelve_);

    // Set all <a> tags to have onclick
    this.aTags_ = this.container_.getElementsByTagName("a");
    for (var i = 0; i < this.aTags_.length; i++) {
        this.aTags_[i].onclick = function() {
            obj_.linksDecode(this);
        };
    }
    
    setTimeout((function(){
        this.renderControl();
    }).bind(this), 200);
};

Melown.Presenter.prototype.readTextInput = function(id_) {
    var presentation_ = {
        htmlDataStorage : this.presenter_[id_],
        id : id_,
        checkID : function() {
            var url_ = /^(ftp|http|https):\/\/[^ "]+$/;
            var relative_ = /.*\/+.*/;
            var level_ = /(\.\.\/|\.\/)/g;
            var hash_ = /^#.*$/;
            var str_ = /(<article)/g;
            if (str_.test(this.htmlDataStorage)) {
                return "string";
            } else if (url_.test(this.htmlDataStorage)) {
                return "url";
            } else if (relative_.test(this.htmlDataStorage)) {
                var getLevel_;
                var l_ = 0;
                var split_ = "";
                var loc_ = window.location.href.split("/");
                var path_ = "";
                while ((getLevel_ = level_.exec(this.htmlDataStorage)) !== null) {
                    split_ = split_ + getLevel_[0];
                    if (getLevel_[0] === "./") {
                        break;     
                    }
                    l_++;
                }
                l_++;
                for (var i = 0; i < (loc_.length-l_); i++) {
                    path_ = path_ + loc_[i] + "/";
                }
                path_ = path_ + this.htmlDataStorage.split(split_)[1];
                console.log("Final path:");
                console.log(path_);
                this.htmlDataStorage = path_;
                return "url";
            } else if (hash_.test(this.htmlDataStorage)) {
                return "hash";
            } else {
                return "string";
            }
        }
    };
    
    var mode_ = presentation_.checkID();
    
    if (mode_ == "url") {
        var rawFile_ = new XMLHttpRequest();
        //var obj_ = this;
        rawFile_.open("GET", presentation_.htmlDataStorage, false);
        rawFile_.onreadystatechange = (function() {
            if (rawFile_.readyState === 4) {
                if (rawFile_.status === 200 || rawFile_.status == 0) {
                    var allText_ = rawFile_.responseText;
                    this.html = allText_;
                    this.init(presentation_.id, this.html);
                } else {
                    this.file = "undefined";
                }
            }
        }).bind(this);
        rawFile_.send(null); 
    } else if (mode_ == "hash") {
        var obj_ = document.getElementById(presentation_.htmlDataStorage).innerHTML;
        this.init(presentation_.id, obj_);
    } else if (mode_ == "string") {
        this.init(presentation_.id, presentation_.htmlDataStorage);
    }
};

Melown.Presenter.prototype.linksDecode = function(obj_) {
    var position_ = null;
    var autorotate_ = null;
    var transition_ = null;
    var navigate_ = null;
    
    if (obj_.getAttribute("data-mln-navigate") !== null) {
        navigate_ = obj_.getAttribute("data-mln-navigate");
        if (navigate_ !== null) {
            if (navigate_ == "prev") {
                this.nextArticle("-1");
            } else if (navigate_ == "next") {
                this.nextArticle("+1");
            } else if (navigate_ == "first") {
                this.nextArticle(0);
            } else if (navigate_ == "last") {
                this.nextArticle(this.maxNodes_-1);
            } else {
                this.nextArticle(navigate_);
            }        
            return "navigation:true";
        }
    }
    
    if (obj_.getAttribute("data-mln-position") === null){
        return "position:false";
    }

    position_ = this.getNumbers(obj_.getAttribute("data-mln-position").split(","));
    
    if (obj_.getAttribute("data-mln-autorotate") !== null) {
        autorotate_ = this.getNumbers(obj_.getAttribute("data-mln-autorotate"));
    }
    if (obj_.getAttribute("data-mln-transition") !== null) {
        transition_ = obj_.getAttribute("data-mln-transition");
    }
    
    if (transition_ === null) {
        this.browser_.autopilot_.flyTo(position_);
    } else if (transition_ == "teleport") {
        this.browser_.core_.getMap().setPosition(position_);
    } else {
        this.browser_.autopilot_.flyTo(position_);
        // Feature to be considered
        // browser.flyTo(position, {mode_ : transition});
    }
    if (autorotate_ !== null) {
        this.browser_.autopilot_.setAutorotate(autorotate_);
    }
        
    return "Moving to position: " + position_;
};

// parseFloat here
Melown.Presenter.prototype.getNumbers = function(obj_) {
    var obj_ = obj_;
    for (var i = 0; i < obj_.length; i++){
        if (typeof obj_ == "string" && parseFloat(obj_)) {
            obj_ = parseFloat(obj_);
            break;
        }
        if (parseFloat(obj_[i])) {
            obj_[i] = parseFloat(obj_[i]); // toFixed might be added here
        }
    }
    return obj_;
};

Melown.Presenter.prototype.nextArticle = function(node_, init_, lastNode_) {
    // fly to whatever node we wish
    if (node_ === "+1") {
        node_ = 1;
    } else if (node_ === "-1") {
        node_ = -1;
    } else {
        this.actualNode_ = node_;
        node_ = 0;
    }
    this.actualNode_ = this.actualNode_ + node_;
    
    if (this.actualNode_ >= 0 && this.actualNode_ < this.maxNodes_) {
        if (!init_) {
            if (this.currentToolbox_ == "right") {
                this.handleArticle(this.actualNode_);
            } else if (this.currentToolbox_ == "wide") {
                this.handleSubtitlesPosition(this.actualNode_);
            }
        }
        if (typeof lastNode_ !== "undefined") {
            this.maxNodes_ = lastNode_;
        }
        this.linksDecode(this.container_.getElementsByTagName("section")[this.actualNode_]);
        return true;
    
    } else {
        this.actualNode_ = this.actualNode_ - node_;
    }
    return false;
};

Melown.Presenter.prototype.useToolbox = function() {
    var type_ = this.container_.getElementsByTagName("article")[0].getAttribute("data-mln-style");
    
    if (type_ === null) {
        type_ = "right";
    }
    
    var rightPanel_ = this.container_.getElementsByClassName("melown-presenter panelContainer")[0];
    var toolboxContainer_ = this.container_.getElementsByClassName("melown-presenter toolboxContainer")[0];
    var subtitles_ = this.container_.getElementsByClassName("melown-presenter subtitlesContainer")[0];
    var swipeControl_ = this.container_.getElementsByClassName("melown-presenter swipeControl");
    this.currentToolbox_ = type_;
    
    subtitles_.setAttribute("style", "opacity: 0;");
    subtitles_.setAttribute("class", "melown-presenter subtitlesContainer");
    if (type_ == "right") {
        rightPanel_.style.display = "block";
        setTimeout(function() {
            rightPanel_.style.opacity = 1;
        }, 20);
        swipeControl_[0].style.display = "block";
        swipeControl_[1].style.display = "block";
        for (var i = 0; i < this.sectionTags_.length; i++) { // Set maxHeight back as there is no dynamic rescaling of rightPanel_
            this.sectionTags_[i].style.height = this.maxHeight_ + "px";
        }
        this.nextArticle(0);
    } else if (type_ == "wide") {
        subtitles_.style.display = "block";
        setTimeout(function() {
            subtitles_.style.opacity = 1;
        }, 20);
        rightPanel_.style.display = "none";
        rightPanel_.style.opacity = 0;
        swipeControl_[0].style.display = "none";
        swipeControl_[1].style.display = "none";
        for (var i = 0; i < this.sectionTags_.length; i++) { // Set height to auto so we can dynamicaly adjust subtitles height
            this.sectionTags_[i].style.height = "auto";
        }
        this.handleSubtitlesPosition(0, true);
    }
};

Melown.Presenter.prototype.setContainer = function(c) {
    this.container_ = c.element_;
};

// Rendering of DOM elements for Presenter

Melown.Presenter.prototype.renderControl = function() {
    // Set every <section> tag excluding the first one to not to be displayed
    this.sectionTags_ = this.container_.getElementsByClassName("melown-presenter toolboxContainer")[0].querySelectorAll("section");
    
    var swipeControlUp_ = this.container_.getElementsByClassName("melown-presenter swipeControl")[0];
    var swipeControlDw_ = this.container_.getElementsByClassName("melown-presenter swipeControl")[1];

    var nextButton_ = document.createElement("button");
    nextButton_.innerHTML = "<div><div></div></div>";
    nextButton_.setAttribute("type","button");
    nextButton_.setAttribute("class","melown-presenter-btnDw");
    nextButton_.onclick = (function(){
        this.nextArticle("+1");
    }).bind(this);
        
    var prevButton_ = document.createElement("button");
    prevButton_.innerHTML = "<div><div></div></div>";
    prevButton_.setAttribute("type","button");
    prevButton_.setAttribute("class","melown-presenter-btnUp");
    prevButton_.onclick = (function(){
        this.nextArticle("-1");
    }).bind(this);

    // End of all buttons and other controllers
    
    swipeControlUp_.appendChild(prevButton_);
    swipeControlDw_.appendChild(nextButton_);

    this.getElementsTrueHeight(this.sectionTags_);

    var offsetTop_ = this.maxHeight_ + this.swipeOffset_;

    this.container_.getElementsByClassName("melown-presenter panelContainer")[0].style.height = (offsetTop_ + this.swipeOffset_) + "px";
    swipeControlDw_.style.top = offsetTop_ +"px";
    swipeControlUp_.style.opacity = "1";
    swipeControlDw_.style.opacity = "1";
    
    // init now
    setTimeout((function() {
        this.useToolbox();
    }).bind(this), this.animTime_);
    this.nextArticle(0, false, this.sectionTags_.length);
};

Melown.Presenter.prototype.getElementsTrueHeight = function(elems_) {
    for (var i = 0; i < elems_.length; i++) {
        if (elems_[i].offsetHeight > this.maxHeight_) {
            this.maxHeight_ = elems_[i].offsetHeight;
        }
    }
    
    for (var i = 0; i < elems_.length; i++) {
        elems_[i].style.height = this.maxHeight_ + "px";
    }
};

// Presentation handlers of events

Melown.Presenter.prototype.handleArticle = function(node_) {
    var rightPanel_ = this.container_.getElementsByClassName("melown-presenter toolboxContainer")[0];
    var btnUp_ = this.container_.getElementsByClassName("melown-presenter-btnUp")[0];
    var btnDw_ = this.container_.getElementsByClassName("melown-presenter-btnDw")[0];

    var articleClass_ = (function(a) {
        this.container_.getElementsByClassName("melown-presenter toolboxContainer")[0].querySelectorAll("article")[0].setAttribute("class",a);
    }).bind(this);
    
    var actualHeight_ = this.maxHeight_ * this.actualNode_ * -1;
    
    btnUp_.setAttribute("class","melown-presenter-btnUp");
    btnDw_.setAttribute("class","melown-presenter-btnDw");

    if (node_ === 0) {
        btnUp_.setAttribute("class","melown-presenter-btnUp melown-presenter hidden");
    } else if (node_ === this.maxNodes_-1) {
        btnDw_.setAttribute("class","melown-presenter-btnDw melown-presenter hidden");
    }
        
    this.container_.getElementsByTagName("article")[0].setAttribute("style","top: "+actualHeight_+"px");
    
    if (this.actualNode_ === 0) {
        /* handle right panel stuff */
        rightPanel_.style.height = (this.maxHeight_ + this.swipeOffset_) + "px";
        rightPanel_.style.top = 0;
        articleClass_("melown-presenter");
        /* done - now add some cosmetic attributes */
        this.container_.getElementsByClassName("melown-presenter swipeControl")[0].style.height = 0;
        this.container_.getElementsByTagName("article")[0].style.top = 0;
        this.container_.getElementsByTagName("section")[0].style.height = (this.maxHeight_ + (this.swipeOffset_ - this.firstTitleMargin_)) + "px";
    } else {
        /* handle right panel stuff */
        rightPanel_.style.height = this.maxHeight_ + "px";
        rightPanel_.style.top = this.swipeOffset_ + "px";
        articleClass_("melown-presenter nonFirst");
        /* done - now add some cosmetic attributes */
        this.container_.getElementsByClassName("melown-presenter swipeControl")[0].style.height = this.swipeOffset_ + "px";
        this.container_.getElementsByTagName("section")[0].style.height = (this.maxHeight_ + this.swipeOffset_) + "px";
    }
    return true;
};

Melown.Presenter.prototype.handleSubtitlesPosition = function(node_, init_) {
    if (typeof node_ === "undefined") {
        node_ = 0;
    }
    
    var subtitlesContainer_ = this.container_.getElementsByClassName("melown-presenter subtitlesContainer")[0];
    var leftButton_ = subtitlesContainer_.childNodes[0];
    var rightButton_ = subtitlesContainer_.childNodes[1];
    var sections_ = subtitlesContainer_.childNodes[4].querySelectorAll("article")[0].querySelectorAll("section");
    var swipeSubtitles_ = this.container_.getElementsByClassName("melown-presenter swipeSubtitles");
    
    this.linksDecode(sections_[node_]);
    
    // clean all previous states
    sections_[node_].removeAttribute("style");
    subtitlesContainer_.setAttribute("class","melown-presenter subtitlesContainer");
    subtitlesContainer_.removeAttribute("onclick");
    swipeSubtitles_[0].removeAttribute("onclick");
    swipeSubtitles_[1].removeAttribute("onclick");
    swipeSubtitles_[0].removeAttribute("style");
    swipeSubtitles_[1].removeAttribute("style");
    leftButton_.removeAttribute("onclick");
    rightButton_.removeAttribute("onclick");
    leftButton_.setAttribute("class", "melown-presenter hidden");
    rightButton_.setAttribute("class", "melown-presenter hidden");
    
    for (var i = 0; i < sections_.length; i++) {
        sections_[i].style.opacity = 0;
        if (this.subtitlesHeights_[i] === undefined) {
            sections_[i].style.display = "block";
            this.subtitlesHeights_[i] = sections_[i].offsetHeight;
            sections_[i].style.display = "none";
        }
        if (i !== node_) {
            this.hideSections(sections_[i]);
        }
    }
    this.showSections(sections_[node_]);
    
    var sectionType_ = sections_[node_].getAttribute("data-mln-style");
    if (sectionType_ == undefined) {
        sectionType_ = "full";
    }
    
    if (sectionType_ == "full") {
        swipeSubtitles_[0].style.opacity = 0;
        swipeSubtitles_[1].style.opacity = 0;
        swipeSubtitles_[0].style.cursor = "default";
        swipeSubtitles_[1].style.cursor = "default";
        
        if (node_ === 0) {
            leftButton_.setAttribute("class", "melown-presenter hidden");
            rightButton_.setAttribute("class", "melown-presenter");
            rightButton_.onclick = (function() {
                this.nextArticle(1);
            }).bind(this);
            rightButton_.innerHTML = "Continue";
        } else if (node_ === sections_.length - 2) { // One more before end
            leftButton_.setAttribute("class", "melown-presenter");
            leftButton_.onclick = (function() {  
                this.nextArticle("-1");
            }).bind(this);
            leftButton_.innerHTML = "Back";
            rightButton_.setAttribute("class", "melown-presenter");
            rightButton_.onclick = (function() {  
                this.nextArticle("+1");
            }).bind(this);
            rightButton_.innerHTML = "Explore";
        }
        if (typeof init_ === "undefined") {
            subtitlesContainer_.setAttribute("style", "display: block;");
        }
        subtitlesContainer_.setAttribute("class","melown-presenter subtitlesContainer full");
    } else if (sectionType_ == "title") {
        swipeSubtitles_[0].style.opacity = 1;
        swipeSubtitles_[1].style.opacity = 1;
        swipeSubtitles_[0].onclick = (function() {
            this.nextArticle("-1");
        }).bind(this);
        swipeSubtitles_[1].onclick = (function() {
            this.nextArticle("+1");
        }).bind(this);
        leftButton_.setAttribute("class", "melown-presenter hidden");
        rightButton_.setAttribute("class", "melown-presenter hidden");
        subtitlesContainer_.style.height = this.subtitlesHeights_[node_] + "px";
        subtitlesContainer_.setAttribute("class","melown-presenter subtitlesContainer title");
       
    } else if (sectionType_ == "mini") {
        subtitlesContainer_.setAttribute("style", "display: block;");
        subtitlesContainer_.setAttribute("class","melown-presenter subtitlesContainer mini");
        leftButton_.setAttribute("class", "melown-presenter hidden");
        rightButton_.setAttribute("class", "melown-presenter hidden");
    }
};


Melown.Presenter.prototype.hideSections = function(elem_) {
    setTimeout(function() {
        elem_.style.display = "none";
    }, this.animTime_);
};

Melown.Presenter.prototype.showSections = function(elem_) {
    setTimeout(function() {
        elem_.style.display = "block";
        setTimeout(function() {
            elem_.style.opacity = 1;
        }, 50);    
    }, this.animTime_);
};

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
    if (this.autoRotate_ != speed_) {
        this.browser_.callListener("autorotate-changed", { "autorotate" : speed_});
    }

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
    this.browser_.getControlMode().setCurrentControlMode(this.lastControlMode_);
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
    var value_ = "rotateX("+(Math.round(pos_[6]+90)*0.7)+"deg) " + "rotateZ("+Math.round(pos_[5]-45)+"deg)";

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
    orientation_[1] = -90;
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
    this.lastHTML2_ = "";
    this.lastHTML3_ = "";
    this.credits_ = this.control_.getElement("melown-credits");
};

Melown.UIControlCredits.prototype.getCreditsString = function(array_, separator_, full_) {
    var map_ = this.browser_.getMap();
    var html_ = "";
    var copyright_ = "&copy;" + (new Date().getFullYear());
    
    var li = array_.length;
    var plain_ = ""; 
    var more_ = false;

    for (var i = 0; i < li; i++) {
        var creditInfo_ = map_.getCreditInfo(array_[i]);
        if (creditInfo_["plain"]) {
            plain_ += creditInfo_["plain"];
        }
    }        
    
    if (plain_ && plain_.length > 30 && li > 1 && !full_) {
        li = 1;
        more_ = true; 
    }

    for (var i = 0; i < li; i++) {
        var creditInfo_ = map_.getCreditInfo(array_[i]);
       
        if (creditInfo_["html"]) {
            html_ += creditInfo_["html"];
        }

        if (i + 1 < li) {
            html_ += separator_;        
        }
    }
    
    return [html_, more_];
};

Melown.UIControlCredits.prototype.update = function() {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var html_ = "";
    var html2_ = "";
    var html3_ = "";
    var credits_ = map_.getCurrentCredits();
    
    if (credits_["imagery"].length > 0) {
        var res_ = this.getCreditsString(credits_["imagery"], ", ");
        html_ += "<div class='melown-credits-supercell'>";
            html_ += "<div class='melown-credits-cell'>Imagery: " + res_[0] + "</div>";
            html_ += res_[1] ? "<div class='melown-credits-cell-button' id='melown-credits-imagery-more'>and others</div>" : "";
            html_ += "<div class='melown-credits-separator'></div>";
        html_ += "</div>";
        var html2_ = "<div class='melown-credits-list'>";
        html2_ += this.getCreditsString(credits_["imagery"], "<br/>", true)[0] + "</div>";
    }
    
    if (credits_["mapdata"].length > 0) {
        var res_ = this.getCreditsString(credits_["mapdata"], ", ");
        html_ += "<div class='melown-credits-supercell'>";
            html_ += "<div class='melown-credits-cell'>Map Data: " + res_[0] + "</div>";
            html_ += res_[1] ? "<div class='melown-credits-cell-button' id='melown-credits-mapdata-more'>and others</div>" : "";
            html_ += "<div class='melown-credits-separator'></div>";
        html_ += "</div>";
        var html3_ = "<div class='melown-credits-list'>";
        html3_ += this.getCreditsString(credits_["mapdata"], "<br/>", true)[0] + "</div>";
    }

    html_ += "<div class='melown-credits-supercell'>";
        html_ += "<div class='melown-credits-cell'>Powered by <a class='melown-logo' href='https://melown.com' target='_blank'>MELOWN</a></div>";
        html_ += "<div class='melown-credits-separator'></div>";
    html_ += "</div>";

    if (this.lastHTML_ != html_) {
        this.lastHTML_ = html_;
        this.credits_.setHtml(html_);

        var butt_ = this.control_.getElement("melown-credits-imagery-more");
        if (butt_) {
            butt_.on("click", this.onMoreButton.bind(this, butt_, "2"));
        }
        
        butt_ = this.control_.getElement("melown-credits-mapdata-more");
        if (butt_) {
            butt_.on("click", this.onMoreButton.bind(this, butt_, "3"));
        }
    }

    this.lastHTML2_ = html2_;
    this.lastHTML3_ = html3_;

    /*
    if (this.lastHTML2_ != html2_) {
        var butt_ = this.control_.getElement("melown-credits-imagery-more");
        if (butt_) {
            butt_.on("click", this.onMoreButton.bind(this, butt_, "2"));
        }
    }
        
    if (this.lastHTML3_ != html3_) {
        var butt_ = this.control_.getElement("melown-credits-mapdata-more");
        if (butt_) {
            butt_.on("click", this.onMoreButton.bind(this, butt_, "3"));
        }
    }*/
};

Melown.UIControlCredits.prototype.onMoreButton = function(butt_, html_) {
    var rect_ = butt_.getRect();
    
    if (html_ == "2") {
        html_ = this.lastHTML2_;
    } else {
        html_ = this.lastHTML3_;
    }
    
    this.ui_.popup_.show({"right" : Math.max(0,(rect_["fromRight"]-rect_["width"])) + "px",
                          "bottom" : (rect_["fromBottom"]+7) + "px"}, html_);
};




/**
 * @constructor
 */
Melown.UIControlLoading = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("loading",
      '<div id="melown-loading" class="melown-loading">'

        + '<div class="melown-loading-progress">'
            + '<div id="melown-loading-dot1" class="melown-loading-dot"></div>'
            + '<div id="melown-loading-dot2" class="melown-loading-dot"></div>'
            + '<div id="melown-loading-dot3" class="melown-loading-dot"></div>'
            + '<div id="melown-loading-dot4" class="melown-loading-dot"></div>'
            + '<div id="melown-loading-dot5" class="melown-loading-dot"></div>'
        + '</div>'

      + ' </div>', visible_);

    this.loading_ = this.control_.getElement("melown-loading");
    this.dots_ = [
        this.control_.getElement("melown-loading-dot1"),
        this.control_.getElement("melown-loading-dot2"),
        this.control_.getElement("melown-loading-dot3"),
        this.control_.getElement("melown-loading-dot4"),
        this.control_.getElement("melown-loading-dot5")
    ];
    
    this.time_ = Date.now();
    this.hiding_ = null;
    
    //setTimeout(this.hide.bind(this), 5000);
};

Melown.UIControlLoading.prototype.show = function() {
    this.hiding_ = null;
    this.ui_.setControlVisible("compass", false);
    this.ui_.setControlVisible("zoom", false);
    this.ui_.setControlVisible("space", false);
    this.ui_.setControlVisible("search", false);
    this.ui_.setControlVisible("link", false);
    this.ui_.setControlVisible("fullscreen", false);
    this.ui_.setControlVisible("credits", false);
    this.ui_.setControlVisible("loading", true);
};

Melown.UIControlLoading.prototype.hide = function() {
    this.hiding_ = Date.now();
    
    var search_ = this.ui_.config_.controlSearch_;
    if (search_) { //enable search for melown2015 reference frame only
        var map_ = this.ui_.browser_.getMap();
        if (map_) {
            //search_ = (map_.getReferenceFrame()["id"] == "melown2015");
            
            var radius_ = map_.getSrsInfo(map_.getReferenceFrame()["physicalSrs"])["a"];
            
            if (radius_ < (6378137 + 50000) && radius_ > (6378137 - 50000)) { //is it earth
                search_ = true;  
            } else {
                search_ = false;  
            }
            //search_ = (map_.getSrsInfo(map_.getReferenceFrame()["physical"]) == "melown2015");
        }
    } 
    
    this.ui_.setControlVisible("compass", this.ui_.config_.controlCompass_);
    this.ui_.setControlVisible("zoom", this.ui_.config_.controlZoom_);
    this.ui_.setControlVisible("space", this.ui_.config_.controlSpace_);
    this.ui_.setControlVisible("search", search_);
    this.ui_.setControlVisible("link", this.ui_.config_.controlLink_);
    this.ui_.setControlVisible("fullscreen", this.ui_.config_.controlFullscreen_);
    this.ui_.setControlVisible("credits", this.ui_.config_.controlCredits_);
    this.ui_.setControlVisible("loading", false);
};

Melown.UIControlLoading.prototype.update = function() {
    var timer_ = Date.now();

    if (this.hiding_) { 
        var timeDelta_ = (timer_ - this.hiding_) * 0.001;
        this.loading_.setStyle("opacity", (1-Math.min(1.0, timeDelta_*2)) + "" );
        
        if (timeDelta_ > 0.5) {
            this.control_.setVisible(false);
        }
    }


    var timeDelta_ = (timer_ - this.time_) * 0.001;

    //sine wave
    /*
    for (var i = 0; i < 5; i++) {
        this.dots_[i].setStyle("top", (Math.sin(((Math.PI*1.5)/5)*i+timeDelta_*Math.PI*2)*10)+"%");
    }*/

    //opacity    
    for (var i = 0; i < 5; i++) {
        //this.dots_[i].setStyle("opacity", (Math.sin(((Math.PI*1.5)/5)*i+timeDelta_*Math.PI*2)*60+20)+"%");
        this.dots_[i].setStyle("opacity", (Math.sin(((Math.PI*1.5)/5)*i-timeDelta_*Math.PI*2)*0.6+0.2));
    }

    var map_ = this.ui_.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var stats_ = map_.getStats();
    
    //"bestMeshTexelSize" : this.map_.bestMeshTexelSize_,
    //"bestGeodataTexelSize" : this.map_.bestGeodataTexelSize_, 
    //console.log("drawnTiles: " + stats_["drawnTiles"] + "  geodata: " + stats_["drawnGeodataTiles"]);

    if ((stats_["surfaces"] == 0 && stats_["freeLayers"] == 0) ||  //nothing to load 
        (stats_["downloading"] == 0 && stats_["lastDownload"] > 0 && (timer_ - stats_["lastDownload"]) > 1000) || //or everything loaded
        (stats_["bestMeshTexelSize"] != 0 && stats_["bestMeshTexelSize"] <= (stats_["texelSizeFit"] * 3) || //or resolution is good enough
        (stats_["loadMode"] == "fit" || stats_["loadMode"] == "fitonly") && (stats_["drawnTiles"] - stats_["drawnGeodataTiles"]) > 1) ) { //or at leas some tiles are loaded
        this.hide();
    }

};
/**
 * @constructor
 */
Melown.UIControlFullscreen = function(ui_, visible_) {
    this.ui_ = ui_;
    this.control_ = this.ui_.addControl("fullscreen",
      '<img id="melown-fullscreen" class="melown-fullscreen" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAwUlEQVRo3u2YwRWDIBBEIc+SLMKmckpTFkFPePKQQ57DsitR/z/D6KgMDikBAMCTycKYxai9Bul8MYkic+NFS7BOs4FUa/1IrzTn9xk6O6+rrwEMjGayTlS/UXWeujbcDKgpEZRObgYOc1oYt7CIMXCFFLKmTrS+aqAEP8iSAGBYI1s776FLv7eReaWHWd/cyLz3Bas+vxIYGNXIhBTxOhcKNdCaHvPfGPjVYb3OhVjEGLhrI/Pewc9uZDQvAABwZQMKFi+DmFdLbgAAAABJRU5ErkJggg==">'
      , visible_);
      
    var img_ = this.control_.getElement("melown-fullscreen");
    img_.on("click", this.onClick.bind(this));
    img_.on("dblclick", this.onDoNothing.bind(this));
    
    this.enabled_ = false;
};

Melown.UIControlFullscreen.prototype.onDoNothing = function(event_) {
    Melown.Utils.preventDefault(event_);    
    Melown.Utils.stopPropagation(event_);    
};


Melown.UIControlFullscreen.prototype.requestFullscreen = function(element_) {
    if(element_.requestFullscreen) {
        element_.requestFullscreen();
    } else if(element_.mozRequestFullScreen) {
        element_.mozRequestFullScreen();
    } else if(element_.webkitRequestFullscreen) {
        element_.webkitRequestFullscreen();
    } else if(element_.msRequestFullscreen) {
        element_.msRequestFullscreen();
    }
};

Melown.UIControlFullscreen.prototype.exitFullscreen = function() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
};

Melown.UIControlFullscreen.prototype.fullscreenEnabled = function() {
    return (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled);
};

Melown.UIControlFullscreen.prototype.onClick = function(event_) {
    var element_ = this.ui_.element_;
    
    if (!this.enabled_) {
    //if (!this.fullscreenEnabled()) {
        this.enabled_ = true;
        this.requestFullscreen(element_);
    } else {
        this.enabled_ = false;
        this.exitFullscreen();  
    } 
};
/**
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
Melown.UIControlHolder = function(ui_, html_, visible_, parentElement_) {
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
    if (parentElement_) {
        parentElement_.appendChild(this.element_);
    } else {
        this.ui_.element_.appendChild(this.element_);
    }
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
    plus_.on("dblclick", this.onDoNothing.bind(this));

    var minus_ = this.control_.getElement("melown-zoom-minus");
    minus_.on("click", this.onZoomOut.bind(this));
    minus_.on("dblclick", this.onDoNothing.bind(this));
};

Melown.UIControlZoom.prototype.onDoNothing = function(event_) {
    Melown.Utils.preventDefault(event_);    
    Melown.Utils.stopPropagation(event_);    
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
Melown.UIControlPopup = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    this.control_ = this.ui_.addControl("popup",
        '<div class="melown-popup-background" id="melown-popup-background">'
      +    '<div id="melown-popup"</div>'
      + '</div>', visible_);

    this.lastHTML_ = "";
    this.popup_ = this.control_.getElement("melown-popup");
    this.background_ = this.control_.getElement("melown-popup-background");
    this.background_.on("click", this.hide.bind(this));
};

Melown.UIControlPopup.prototype.show = function(style_, html_) {
    this.control_.setVisible(true);
    
    for (var key_ in style_) {
        this.popup_.setStyle(key_, style_[key_]);
    }

    this.popup_.setHtml(html_);
};

Melown.UIControlPopup.prototype.hide = function() {
    this.control_.setVisible(false);
};/**
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
    this.button2D_.on("dblclick", this.onDoNothing.bind(this));

    this.button3D_ = this.control_.getElement("melown-space-3d");
    this.button3D_.on("click", this.onSwitch.bind(this));
    this.button3D_.on("dblclick", this.onDoNothing.bind(this));

    this.space3D_ = true;
    this.display3D_ = this.space3D_;

    if (this.space3D_) {
        this.button2D_.setStyle("display", "block");
        this.button3D_.setStyle("display", "none");
    } else {
        this.button2D_.setStyle("display", "none");
        this.button3D_.setStyle("display", "block");
    }
};

Melown.UIControlSpace.prototype.onDoNothing = function(event_) {
    Melown.Utils.stopPropagation(event_);    
};

Melown.UIControlSpace.prototype.onSwitch = function() {
    this.space3D_ = !this.space3D_;

    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var orientation_ = map_.getPositionOrientation(pos_);

    if (this.space3D_) {
        orientation_[0] = 45;
        orientation_[1] = -60;
        //pos_ = map_.setPositionFov(pos_, 90);
        pos_ = map_.setPositionOrientation(pos_, orientation_);
    } else {
        orientation_[0] = 0;
        orientation_[1] = -90;
        //pos_ = map_.setPositionFov(pos_, 5);
        pos_ = map_.setPositionOrientation(pos_, orientation_);
    }

    pos_ = Melown.constrainMapPosition(this.browser_, pos_);
    map_.setPosition(pos_);
    
    this.update();
};

Melown.UIControlSpace.prototype.update = function() {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    var orientation_ = map_.getPositionOrientation(pos_);

    var space3D_ = (Math.abs(orientation_[1]+90) > 0.1);

    if (space3D_ != this.display3D_) {
        if (space3D_) {
            this.button2D_.setStyle("display", "block");
            this.button3D_.setStyle("display", "none");
        } else {
            this.button2D_.setStyle("display", "none");
            this.button3D_.setStyle("display", "block");
        }

        this.space3D_ = space3D_;
        this.display3D_ = space3D_;
    }
};


/**
 * @constructor
 */
Melown.UIControlSearch = function(ui_, visible_) {
    this.ui_ = ui_;
    this.browser_ = ui_.browser_;
    
    var element_ = this.browser_.config_.controlSearchElement_;
    if (element_) {
        if (typeof element_ === "string") {
            element_ = document.getElementById(element_);
        }
    }
    
    this.control_ = this.ui_.addControl("search",
      '<div class="melown-search">'
      + '<div class="melown-search-input"><input type="text" id="melown-search-input" autocomplete="off" spellcheck="false" placeholder="Search location..."></div>'      
      + '<div id="melown-search-list" class="melown-search-list"></div>'      
      + '</div>', visible_, element_);

    this.input_ = this.control_.getElement("melown-search-input");
    
    //this.input_.on("change", this.onChange.bind(this));
    this.input_.on("input", this.onChange.bind(this));
    this.input_.on("keydown", this.onKeyUp.bind(this));
    this.input_.on("focus", this.onFocus.bind(this));
    this.input_.on('mousedown', this.onDrag2.bind(this));
    this.input_.on('mousewheel', this.onDrag.bind(this));

    this.list_ = this.control_.getElement("melown-search-list");
    this.list_.on('mousedown', this.onDrag2.bind(this));
    this.list_.on('mousewheel', this.onDrag.bind(this));

    this.mapControl_ = this.ui_.getMapControl();
    this.mapElement_ = this.mapControl_.getMapElement();
    this.mapElement_.on('mousedown', this.onDrag.bind(this), window);
    this.mapElement_.on('mousewheel', this.onDrag.bind(this), window);

    this.ignoreDrag_ = false; 

    this.urlTemplate_ = "https://www.windytv.com/search/get/v1.0/{value}?lang=en-US&hash=b0f07fGWSGdsx-l";
    this.data_ = [];
    this.lastSearch_ = "";
    this.itemIndex_ = -1;
    this.searchCounter_ = 0;
    this.coordsSrs_ = "+proj=longlat +datum=WGS84 +no_defs";

    this.initialValueUsed_ = false;

    if (this.browser_.config_.controlSearchValue_) {
        this.initialValueUsed_ = true;
        this.input_.getElement().value = this.browser_.config_.controlSearchValue_;
        this.onChange();
    }
};

Melown.UIControlSearch.prototype.processTemplate = function(str_, obj_) {
    return str_.replace(/\{([_$a-zA-Z0-9][_$a-zA-Z0-9]*)\}/g, function(s, match_) {
        return (match_ in obj_ ? obj_[match_] : s);
    });
};

Melown.UIControlSearch.prototype.showList = function(event_) {
    this.list_.setStyle("display", "block");
};

Melown.UIControlSearch.prototype.hideList = function(event_) {
    //this.data_ = {};
    this.list_.setStyle("display", "none");
};

Melown.UIControlSearch.prototype.moveSelector = function(delta_) {
    //this.data_ = {};
    this.itemIndex_ += delta_;

    if (this.itemIndex_ >= this.data_.length) {
        this.itemIndex_ = this.data_.length - 1;
    }
    
    if (this.itemIndex_ < 0) {
        this.itemIndex_ = 0;
    }
    
    this.updateList({"data" : this.data_});
};

Melown.UIControlSearch.prototype.updateList = function(json_) {
    if (json_["data"]) {
        var list_ = "";
        var data_ = json_["data"];
        data_ = data_.slice(0,10);
        this.data_ = data_; 
        
        for (var i = 0, li = data_.length; i < li; i++) {
            var item_ = data_[i];

            if (this.itemIndex_ == i) {
                list_ += '<div id="melown-search-item' + i + '"'+ ' class="melown-search-listitem-selected">' + item_["title"] + ' ' + (item_["region"] ? item_["region"] : "") + '</div>';
            } else {
                list_ += '<div id="melown-search-item' + i + '"'+ ' class="melown-search-listitem">' + item_["title"] + ' ' + (item_["region"] ? item_["region"] : "") + '</div>';
            }
                
        }
        
        this.list_.setHtml(list_);

        for (var i = 0, li = data_.length; i < li; i++) {
            var id_ = "melown-search-item" + i;
            var item_ = this.control_.getElement(id_);
            
            if (item_) {
                item_.on("click", this.onSelectItem.bind(this, i));
                item_.on("mouseenter", this.onHoverItem.bind(this, i));
            }
        }

        if (!this.initialValueUsed_) {
            this.showList();
        }
    } else {
        this.hideList();
    }
};

Melown.UIControlSearch.prototype.onSelectItem = function(index_, event_) {
    var map_ = this.browser_.getMap();
    if (map_ == null) {
        return;
    }

    var pos_ = map_.getPosition();
    //var coords_ = map_.getPositionCoords(pos_);                

    var item_ = this.data_[index_];
    if (item_) {
        var coords_ = [item_["lon"], item_["lat"]];
        
        //conver coords from location srs to map navigation srs         
        var refFrame_ = map_.getReferenceFrame();
        var navigationSrsId_ = refFrame_["navigationSrs"];
        var navigationSrs_ = map_.getSrsInfo(navigationSrsId_);
        
        var proj4_ = this.browser_.getProj4();
        coords_ = proj4_(this.coordsSrs_, navigationSrs_["srsDef"], coords_);

        pos_ = map_.setPositionCoords(pos_, coords_);
        
        //try to guess view extent from location type
        var viewExtent_ = 10000;                

        switch(item_["type"]) {
            case "peak": viewExtent_ = 20000; break;
            case "city": viewExtent_ = 30000; break;                
            case "street": viewExtent_ = 4000; break;
            case "residential": viewExtent_ = 3000; break;               
        }
        
        pos_ = map_.setPositionViewExtent(pos_, viewExtent_);                
        pos_ = map_.setPositionOrientation(pos_, [0,-60,0]);                

        map_.setPosition(pos_);
        
        this.itemIndex_ = index_;
        this.lastSearch_ = item_["title"];
        
        var element_ = this.input_.getElement();  
        element_.value = this.lastSearch_;
        element_.blur(); //defocus 
    }

    this.hideList();
};

Melown.UIControlSearch.prototype.onHoverItem = function(index_, event_) {
    if (this.itemIndex_ == index_) {
        return;
    }

    this.itemIndex_ = index_;
    this.updateList({"data" : this.data_});
};

Melown.UIControlSearch.prototype.onListLoaded = function(counter_, data_) {
    if (this.searchCounter_ == counter_) {
        this.updateList(data_);
    }
};

Melown.UIControlSearch.prototype.onListLoadError = function(event_) {
};

Melown.UIControlSearch.prototype.onFocus = function(event_) {
    this.lastSearch_ = "";
    var element_ = this.input_.getElement();  
    element_.value = this.lastSearch_;
    this.hideList();
};

Melown.UIControlSearch.prototype.onKeyPress = function(event_) {
        console.log("press");

    this.onKeyUp(event_);
};

Melown.UIControlSearch.prototype.onKeyUp = function(event_) {
    var code_ = event_.getKeyCode();
    
    switch(code_) {
        case 38:  //up
            this.moveSelector(-1);
            Melown.Utils.preventDefault(event_);
            Melown.Utils.stopPropagation(event_);    
            break;

        case 40:  //down
            this.moveSelector(1); 
            Melown.Utils.preventDefault(event_);
            Melown.Utils.stopPropagation(event_);    
            break;

        case 9:  //tab
        case 13: //enter
        
            this.onSelectItem(Math.max(0,this.itemIndex_), null); 
            break;
    }
};

Melown.UIControlSearch.prototype.onChange = function(event_) {
    var value_ = this.input_.getElement().value;
    value_ = value_.trim();

    //console.log("value: " + value_ + "  last-value: " + this.lastSearch_);

    if (value_ == this.lastSearch_) {
        //console.log("value-same");
        return;        
    }
    
    this.lastSearch_ = value_;
    
    if (value_ == "") {
        //console.log("value-null");
        this.hideList();        
    }    
    
    var url_ = this.processTemplate(this.urlTemplate_, { "value" : value_ });
    //console.log(url_);
    this.searchCounter_++;
    this.itemIndex_ = -1;
   
    Melown.loadJSON(url_, this.onListLoaded.bind(this, this.searchCounter_), this.onListLoadError.bind(this));
};

Melown.UIControlSearch.prototype.onDrag2 = function(event_) {
    this.ignoreDrag_ = true; 
    var element_ = this.input_.getElement();  
};

Melown.UIControlSearch.prototype.onDrag = function(event_) {
    if (this.ignoreDrag_) {
        this.ignoreDrag_ = false;
        return; 
    } 

    var element_ = this.input_.getElement();  
    element_.value = this.lastSearch_;
    element_.blur(); //defocus'
    this.hideList(); 
};

Melown.UIControlSearch.prototype.update = function(event_) {
    if (this.initialValueUsed_ && this.browser_.mapLoaded_) {
        this.initialValueUsed_ = false;
        this.onSelectItem(0);
    }
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
    button_.on("dblclick", this.onDoNothing.bind(this));

    this.linkPanel_ = this.control_.getElement("melown-link-text-holder");
    this.link_ = this.control_.getElement("melown-link-text-input");

    this.linkVisible_ = false;
    this.update();
};

Melown.UIControlLink.prototype.onDoNothing = function(event_) {
    Melown.Utils.stopPropagation(event_);    
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

Melown.UIElement.prototype.getRect = function() {
    var rect_ = this.element_.getBoundingClientRect();
    var rect2_ = this.ui_.map_.getMapElement().element_.getBoundingClientRect();
    var offsetX_ = window.pageXOffset || 0;
    var offsetY_ = window.pageYOffset || 0;
    return {
        "left" : (rect_.left + offsetX_) - (rect2_.left + offsetX_), 
        "top" : (rect_.top + offsetY_) - (rect2_.top + offsetY_), 
        "fromRight" : rect2_.right - ((rect_.left + offsetX_) - (rect2_.left + offsetX_)), 
        "fromBottom" : rect2_.height - ((rect_.top + offsetY_) - (rect2_.top + offsetY_)),
        "width" : rect_.width, 
        "height" : rect_.height 
    };
};

Melown.UIElement.prototype.setHtml = function(html_) {
    this.element_.innerHTML = html_;
    
    var allElements_ = this.element_.getElementsByTagName('*');

    //store all elements with id attribute to the table
    for (var i = 0, li = allElements_.length; i < li; i++) {
        var id_ = allElements_[i].getAttribute("id");

        if (id_ !== null) {
            //store element to the table
            this.control_.elementsById_[id_] = new Melown.UIElement(this, allElements_[i]);
        }
    }    
};

Melown.UIElement.prototype.getHtml = function() {
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
Melown.UIElement.prototype["getRect"] = Melown.UIElement.prototype.getRect; 
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
    this.dragTouches_ = [];
    this.dragTouches2_ = [];
    this.resetPos_ = false;
    
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

    //if (event_.getTouchesCount() == 2) {
        this.dragTouches_ = [];
        this.dragTouches2_ = [];
        this.dragTouches_.push(event_.getTouchCoords(0));            
        this.dragTouches2_.push(event_.getTouchCoords(1));            
    //}

    this.resetPos_ = true;

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

    if (event_.getTouchesCount() != -1) {
        this.updateDragButtonsState(event_, true);
    }

    Melown.Utils.preventDefault(event_);

    var mode_ = "";
    var zoom_ = 0;
    var rotateDelta_ = 0;
    var panDelta_ = [0,0];
    var distanceDelta_ = 0;

    //var el_ = document.getElementById("debug123");
    
    var touchCount_ = event_.getTouchesCount();
    if (touchCount_ != this.dragTouchCount_) {
        this.dragLastPos_[0] = pos_[0];
        this.dragLastPos_[1] = pos_[1];
        this.dragTouchCount_ = touchCount_; 
    }

    if (this.resetPos_) {
        this.dragCurrentPos_ = [pos_[0], pos_[1]];
        this.dragLastPos_[0] = pos_[0];
        this.dragLastPos_[1] = pos_[1];
        this.resetPos_ = false;
    }

    if (touchCount_ == 2) {
        this.dragTouches_.push(event_.getTouchCoords(0));            
        this.dragTouches2_.push(event_.getTouchCoords(1));            

        if (this.dragTouches_.length >= 7) {
            this.dragTouches_.shift();
            this.dragTouches2_.shift();
        }

        if (this.dragTouches_.length == 6) {

            //get vector for touch #1
            var t = this.dragTouches_;
            var v1x_ = (t[5][0] - t[4][0]) + (t[4][0] - t[3][0]) + (t[3][0] - t[2][0]) + (t[2][0] - t[1][0]) + (t[1][0] - t[0][0]);
            var v1y_ = (t[5][1] - t[4][1]) + (t[4][1] - t[3][1]) + (t[3][1] - t[2][1]) + (t[2][1] - t[1][1]) + (t[1][1] - t[0][1]);

            //get vector for touch #2
            t2 = this.dragTouches2_;
            var v2x_ = (t2[5][0] - t2[4][0]) + (t2[4][0] - t2[3][0]) + (t2[3][0] - t2[2][0]) + (t2[2][0] - t2[1][0]) + (t2[1][0] - t2[0][0]);
            var v2y_ = (t2[5][1] - t2[4][1]) + (t2[4][1] - t2[3][1]) + (t2[3][1] - t2[2][1]) + (t2[2][1] - t2[1][1]) + (t2[1][1] - t2[0][1]);
            
            //get distance of each vector
            var d1_ = Math.sqrt(v1x_ * v1x_ + v1y_ * v1y_);
            var d2_ = Math.sqrt(v2x_ * v2x_ + v2y_ * v2y_);

            mode_ = "pan";

            if (d1_ > d2_ * 5 || d2_ > d1_ * 5) { //dectec situation where only one finger is closing to another
                
                //make first vector from non moving point to beginnig positon of moving point
                //make seconf vector from non moving point to ending positon of moving point
                if (d1_ > d2_ * 5) {
                    var p1_ = t2[0];
                    var p2_ = t[0];
                    var p3_ = t[5];
                } else {
                    var p1_ = t[0];
                    var p2_ = t2[0];
                    var p3_ = t2[5];
                }
                
                var v1_ = [p2_[0] - p1_[0], p2_[1] - p1_[1]];
                var v2_ = [p3_[0] - p1_[0], p3_[1] - p1_[1]];

                //normalize vectors                
                var d =  Math.sqrt(v1_[0] * v1_[0] + v1_[1] * v1_[1]);
                v1_[0] /= d;
                v1_[1] /= d;
                
                d =  Math.sqrt(v2_[0] * v2_[0] + v2_[1] * v2_[1]);
                v2_[0] /= d;
                v2_[1] /= d;

                //measure angle between vectors
                var cosAngle_ = v1_[0] * v2_[0] + v1_[1] * v2_[1];
                var cosAngle2_ = -v1_[1] * v2_[0] + v1_[0] * v2_[1]; //v1 is rotated by 90deg
                
                rotateDelta_ = (Math.acos(cosAngle2_) * (180.0/Math.PI)) - 90;

                if (cosAngle_ > 0.9999) { //are vectors in same line?
                    mode_ = "zoom";
                } else {
                    panDelta_ = [(v1x_ + v2x_) *0.5, (v1y_ + v2y_) *0.5];
                }

            } else if (d1_ > 1 && d2_ > 1) { //are bouth vectors in motion

                //normalize vectors
                var nv1x_ = v1x_ / d1_;
                var nv1y_ = v1y_ / d1_;

                var nv2x_ = v2x_ / d2_;
                var nv2y_ = v2y_ / d2_;
                
                //do vectors move in same direction
                var cosAngle_ = nv1x_ * nv2x_ + nv1y_ * nv2y_;
                
                if (cosAngle_ < 0.2) {
                    mode_ = "zoom";
                } else {
                    panDelta_ = [(v1x_ + v2x_) *0.5, (v1y_ + v2y_) *0.5];
                } 
            }
            
            //if (mode_ == "zoom") {
                var t = this.dragTouches_;
                var t2 = this.dragTouches2_;

                //get distance between points at the beginig
                var dx_ = (t2[0][0] - t[0][0]);
                var dy_ = (t2[0][1] - t[0][1]);
                var d1_ = Math.sqrt(dx_ * dx_ + dy_ * dy_);

                //get distance between points at the end
                var dx_ = (t2[5][0] - t[5][0]);
                var dy_ = (t2[5][1] - t[5][1]);
                var d2_ = Math.sqrt(dx_ * dx_ + dy_ * dy_);

                //get delta betwwen distances
                distanceDelta_ = d2_ - d1_;   
            //}  
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
        "touchMode" : mode_,
        "touchPanDelta" : panDelta_,
        "touchRotateDelta" : rotateDelta_,
        "touchDistanceDelta" : distanceDelta_,
        "touches" : touchCount_  
        });

    //
    //el_.innerHTML = "rotDelta" + rotateDelta_;

    this.dragLastPos_ = this.dragCurrentPos_;
    this.dragCurrentPos_ = [pos_[0], pos_[1]];
    this.dragAbsMoved_[0] += Math.abs(pos_[0] - this.dragLastPos_[0]);
    this.dragAbsMoved_[1] += Math.abs(pos_[1] - this.dragLastPos_[1]);
};

//Melown.debugCoutner = 0;

Melown.UIElement.prototype.onDragEnd = function(event_) {
    //this.dragButtons_[event_.getMouseButton()] = false;
    //console.log("end: 1#:  " + JSON.stringify(this.dragButtons_));

    var left_ = this.dragButtons_["left"];
    var right_ = this.dragButtons_["right"];
    var middle_ = this.dragButtons_["middle"];

    this.updateDragButtonsState(event_, false);

    //if (event_.getTouchesCount() == 2) {
        this.dragTouches_ = [];
        this.dragTouches2_ = [];
        this.dragTouches_.push(event_.getTouchCoords(0));            
        this.dragTouches2_.push(event_.getTouchCoords(1));            
    //}

    //console.log("end: 2#:  " + JSON.stringify(this.dragButtons_));

    this.resetPos_ = true;

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
        case "dblclick":
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

Melown.UIEvent.prototype.getKeyCode = function() {
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

Melown.UIEvent.prototype.getTouchParameter = function(name_) {
    switch (this.type_) {
        case "drag":
            return this.event_[name_];
    }
    
    return null;
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

    var handler_ = (function(e) {
        if (this.ui_.killed_) {
            return; //todo remove event
        }

//        function_.call(new Melown.UIEvent(type_, this, e || window.event));
        function_(new Melown.UIEvent(type_, this, e || window.event));
    }).bind(this);

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
    this.rootElement_ = element_;
    this.element_ = null;
    this.controls_ = [];
    this.killed_ = false;
    this.init();
    this.instanceId_ = Melown.InstanceCounter++;
};

Melown.UI.prototype.init = function() {
    //create browser wrapper
    this.element_ = document.createElement('div');
    this.element_.className = "melown-browser";
    this.rootElement_.appendChild(this.element_);

    //create map cotrol
    this.map_ = new Melown.UIControlMap(this);
   
    //create other ui controls
    var loading_ = this.config_.controlLoading_;
    this.compass_ = new Melown.UIControlCompass(this, (!loading_ && this.config_.controlCompass_));
    this.credits_ = new Melown.UIControlCredits(this, (!loading_ && this.config_.controlCredits_));
    //this.logo_ = new Melown.UIControlLogo(this, this.config_.controlLogo_);
    this.fullscreen_ = new Melown.UIControlFullscreen(this, (!loading_ && this.config_.controlFullscreen_));
    this.zoom_ = new Melown.UIControlZoom(this, (!loading_ && this.config_.controlZoom_));
    this.space_ = new Melown.UIControlSpace(this, (!loading_ && this.config_.controlSpace_));
    this.search_ = new Melown.UIControlSearch(this, (!loading_ && this.config_.controlSearch_));
    this.link_ = new Melown.UIControlLink(this, (!loading_ && this.config_.controlLink_));
    //this.navigator_ = new Melown.UIControlNavigation(this, this.config_.controlNavigator_);
    this.layers_ = new Melown.UIControlLayers(this, (!loading_ && this.config_.controlLayers_));
    this.fallback_ = new Melown.UIControlFallback(this);
    this.popup_ = new Melown.UIControlPopup(this, false);
    this.loading_ = new Melown.UIControlLoading(this, this.config_.controlLoading_);

    Melown.Utils.disableContexMenu(this.element_);
};

Melown.UI.prototype.kill = function() {
    this.killed_ = true;

    for (var key_ in this.controls_) {
        delete this.controls_[key_];
    }

    this.rootElement_.removeChild(this.element_);
    delete this.element_;
    this.element_ = null;
};

Melown.UI.prototype.addControl = function(id_, html_, visible_, parentElement_) {
    var control_ = new Melown.UIControlHolder(this, html_, visible_, parentElement_);
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
        case "controlSearch":      this.setControlVisible("search", this.config_.controlSearch_); break;
        case "controlLink":        this.setControlVisible("link", this.config_.controlLink_); break;
        case "controlLogo":        this.setControlVisible("logo", this.config_.controlLogo_); break;
        case "controlFullscreen":  this.setControlVisible("fullscreeen", this.config_.controlFullscreen_); break;
        case "controlCredits":     this.setControlVisible("credits", this.config_.controlCredits_); break;
        //case "controlLoading":     this.setControlVisible("loading", this.config_.controlLogo_); break;
    }
};

Melown.UI.prototype.tick = function(dirty_) {
    if (dirty_) {
        this.compass_.update();
        this.space_.update();
        this.credits_.update();
        this.link_.updateLink();                
        this.search_.update();
    }

    if (this.loading_.control_.getVisible()) {
        this.loading_.update();
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
    
    this.retinaFactor_ = 1.0 / Math.max(1.0,(window.devicePixelRatio || 1) - 1);
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

    //event_.getTouchParameter("touchMode");


    if (touches_ == 2) {//} && /*event_.getDragButton("middle")*/ zoom_ != 0 && this.config_.zoomAllowed_) {
        if (map_.getPositionViewMode(pos_) != "obj") {
            return;
        }
        
        if (event_.getTouchParameter("touchMode") == "pan" && this.config_.rotationAllowed_) {
            var pan_ = event_.getTouchParameter("touchPanDelta");
            var sensitivity_ = this.config_.sensitivity_[1] * this.retinaFactor_;
            this.orientationDeltas_.push([-delta_[0] * sensitivity_, 
                                          -delta_[1] * sensitivity_, 0]);
            this.browser_.callListener("map-position-rotated", {});
        } else if (this.config_.zoomAllowed_) {
            var factor_ = 1.0 + (event_.getTouchParameter("touchDistanceDelta") > 1.0 ? -1 : 1)*0.01;
            this.viewExtentDeltas_.push(factor_);
            this.reduceFloatingHeight(0.8);
            this.browser_.callListener("map-position-zoomed", {});
        }
        
    } else if ((event_.getDragButton("left") && !modifierKey_)
        && this.config_.panAllowed_) { //pan
            
        if (map_.getPositionHeightMode(pos_) == "fix") {
            var pos2_ = map_.convertPositionHeightMode(pos_, "float", true);
            if (pos2_ != null) {
                pos_ = pos2_;
                this.setPosition(pos_);
            }
        } else {
            var sensitivity_ = this.config_.sensitivity_[0] * this.retinaFactor_;
            var fov_ = map_.getPositionFov(pos_);
            var fovCorrection_ = (fov_ > 0.01 && fov_ < 179) ? (1.0 / Math.tan(Melown.radians(fov_*0.5))) : 1.0;
            var azimuth_ = Melown.radians(azimuthDistance_[0]);
            var forward_ = [-Math.sin(azimuth_), //direction vector x
                            Math.cos(azimuth_), //direction vector y
                            azimuthDistance_[1] * fovCorrection_ * sensitivity_, azimuthDistance_[0], //distance and azimut
                            coords_[0], coords_[1]]; //coords
            
            this.coordsDeltas_.push(forward_);
            this.reduceFloatingHeight(0.9);
            this.browser_.callListener("map-position-panned", {});
        }
    } else if (((touches_ <= 1 && event_.getDragButton("right")) || event_.getDragButton("middle") || modifierKey_) 
               && this.config_.rotationAllowed_) { //rotate
                   
        var sensitivity_ = this.config_.sensitivity_[1] * this.retinaFactor_;
        this.orientationDeltas_.push([-delta_[0] * sensitivity_,
                                      -delta_[1] * sensitivity_, 0]);
        this.browser_.callListener("map-position-rotated", {});
    }
};

Melown.ControlMode.MapObserver.prototype.wheel = function(event_) {
    Melown.Utils.preventDefault(event_);    

    var map_ = this.browser_.getMap();
    if (!map_ || !this.config_.zoomAllowed_) { 
        return;
    }

    var pos_ = map_.getPosition();
    var delta_ = event_.getWheelDelta();
    var sensitivity_ = this.config_.sensitivity_[2];
    var factor_ = 1.0 + (delta_ > 0 ? -1 : 1)*sensitivity_;

    if (this.browser_.controlMode_.altKey_ &&
        this.browser_.controlMode_.shiftKey_ &&
        this.browser_.controlMode_.ctrlKey_) {
        var fov_ = Melown.clamp(map_.getPositionFov(pos_) * factor_, 1, 179);
        pos_ = map_.setPositionFov(pos_, fov_);
        map_.setPosition(pos_);
    } else {
        if (map_.getPositionViewMode(pos_) != "obj") {
            return;
        }
        
        this.viewExtentDeltas_.push(factor_);
        this.reduceFloatingHeight(0.8);
        this.browser_.callListener("map-position-zoomed", {});
    }
};

Melown.ControlMode.MapObserver.prototype.doubleclick = function(event_) {
    Melown.Utils.preventDefault(event_);    

    var map_ = this.browser_.getMap();
    if (!map_ || !this.config_.jumpAllowed_) {
        return;
    }

    if (this.browser_.controlMode_.altKey_ &&
        this.browser_.controlMode_.shiftKey_ &&
        this.browser_.controlMode_.ctrlKey_) {
        this.browser_.config_.minViewExtent_ = 0.5;        
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

    //var sensitivity_ = 0.5;
    var zoomFactor_ = (((viewExtent_*0.5) * Math.tan(Melown.radians(fov_))) / 800);
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
    var inertia_ = this.config_.inertia_; //[0.83, 0.9, 0.7]; 
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
    if (!browser_.config_.constrainCamera_) {
        return pos_;
    }

    var minVE_ = browser_.config_.minViewExtent_;
    var maxVE_ = browser_.config_.maxViewExtent_;

    var map_ = browser_.getMap();

    //clamp view extets
    var viewExtent_ = Melown.clamp(map_.getPositionViewExtent(pos_), minVE_, maxVE_); 
    pos_ = map_.setPositionViewExtent(pos_, viewExtent_);

    var distance_ = (map_.getPositionViewExtent(pos_)*0.5) / Math.tan(Melown.radians(map_.getPositionFov(pos_)*0.5));

    //reduce tilt whe you are far off the planet
    if (map_.getPositionViewMode(pos_) == "obj") {
        var rf_ = map_.getReferenceFrame();
        var srs_ = map_.getSrsInfo(rf_["navigationSrs"]);
        
        
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
    //var cameraConstrainDistance_ = 1;
    var cameraConstrainDistance_ = (minVE_*0.5) / Math.tan(Melown.radians(map_.getPositionFov(pos_)*0.5));
    cameraConstrainDistance_ *= 0.5; //divice by 2 to alow 45deg tilt in maximum zoom
    
    //var hmax_ = Math.max(Math.min(4000,cameraConstrainDistance_), (distance_ * Math.tan(Melown.radians(3.0))));
    //var hmax_ = Math.max(Math.min(4000,cameraConstrainDistance_), (distance_ * Math.tan(Melown.radians(3.0))));
    var hmax_ = Math.max(cameraConstrainDistance_, (distance_ * Math.tan(Melown.radians(3.0))));
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
    this.killed_ = false;
    this.configStorage_ = {};
    this.initConfig();
    this.setConfigParams(config_, true);
    this.originalConfig_ = JSON.parse(JSON.stringify(config_));
    
    this.element_ = (typeof element_ === "string") ? document.getElementById(element_) : element_; 
    this.ui_ = new Melown.UI(this, this.element_);

    this.core_ = Melown.MapCore(this.ui_.getMapControl().getMapElement().getElement(), config_);

    if (this.core_ == null) {
        this.ui_.setControlDisplayState("fallback", true);
        return;
    }
    
    this.updatePosInUrl_ = false;
    this.lastUrlUpdateTime_ = false;
    this.mapLoaded_ = false;
    this.mapInteracted_ = false;

    this.autopilot_ = new Melown.Autopilot(this);
    this.rois_ = new Melown.Rois(this);
    this.controlMode_ = new Melown.ControlMode(this, this.ui_);
    this.presenter_ = new Melown.Presenter(this, config_);

    this.on("map-loaded", this.onMapLoaded.bind(this));
    this.on("map-unloaded", this.onMapUnloaded.bind(this));
    this.on("map-update", this.onMapUpdate.bind(this));
    this.on("map-position-changed", this.onMapPositionChanged.bind(this));
    this.on("map-position-fixed-height-changed", this.onMapPositionFixedHeightChanged.bind(this));
    this.on("map-position-panned", this.onMapPositionPanned.bind(this));
    this.on("map-position-rotated", this.onMapPositionRotated.bind(this));
    this.on("map-position-zoomed", this.onMapPositionZoomed.bind(this));
        
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

Melown.Browser.prototype.onMapLoaded = function(event_) {
    this.mapLoaded_ = true;

    //overwrite browser options
    var options_ = event_["browserOptions"] || {};
    var originalOptions_ = this.originalConfig_;
    for (var key_ in originalOptions_) {
        if (typeof options_[key_] !== "undefined") {
            options_[key_] = originalOptions_[key_]; 
        } 
    }    
    
    this.setConfigParams(options_);

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
    p = map_.convertPositionHeightMode(p, "fix", true);
    
    var s = "";
    s += map_.getPositionViewMode(p) + ",";
    var c = map_.getPositionCoords(p);
    s += c[0].toFixed(6) + "," + c[1].toFixed(6) + "," + map_.getPositionHeightMode(p) + "," + c[2].toFixed(2) + ",";
    var o = map_.getPositionOrientation(p);
    s += o[0].toFixed(2) + "," + o[1].toFixed(2) + "," + o[2].toFixed(2) + ",";
    s += map_.getPositionViewExtent(p).toFixed(2) + "," + map_.getPositionFov(p).toFixed(2);

    //replace old value with new one    
    params_["pos"] = s;

    if (this.mapInteracted_) {
        if (params_["rotate"] || this.getConfigParam("rotate")) {
            params_["rotate"] = "0";
        }
        
        var pan_ = this.getConfigParam("pan");
        if (params_["pan"] || (pan_ && (pan_[0] || pan_[1]))) {
            params_["pan"] = "0,0";
        }
    }
    
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

Melown.Browser.prototype.onMapPositionPanned = function() {
    this.mapInteracted_ = true;
};

Melown.Browser.prototype.onMapPositionRotated = function() {
    this.mapInteracted_ = true;
};

Melown.Browser.prototype.onMapPositionZoomed = function() {
    this.mapInteracted_ = true;
};

Melown.Browser.prototype.onMapPositionFixedHeightChanged = function() {
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
    if (this.killed_) {
        return;
    }

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
        sensitivity_ : [1, 0.12, 0.05],
        inertia_ : [0.81, 0.9, 0.7],
        positionInUrl_ : false,
        positionUrlHistory_ : false,
        constrainCamera_ : true,
        navigationMode_ : "free",
        controlCompass_ : true,
        controlZoom_ : true,
        controlSpace_ : true,
        controlSearch_ : true,
        controlMeasure_ : false,
        controlLink_ : false,
        controlScale_ : true,
        controlLayers_ : false,
        controlCredits_ : true,
        controlFullscreen_ : false,
        controlLoading_ : true,
        searchElement_ : null,
        searchValue_ : null,
        minViewExtent_ : 75,
        maxViewExtent_ : Number.MAX_INTEGER,
        autoRotate_ : 0,
        autoPan_ : [0,0]
    };
};

Melown.Browser.prototype.setConfigParams = function(params_, ignoreCore_) {
    if (typeof params_ === "object" && params_ !== null) {
        for (var key_ in params_) {
            this.setConfigParam(key_, params_[key_]);

            /*if (!(key_ == "pos" || key_ == "position" || key_ == "view" ||
                key_.indexOf("map") == 0 || key_.indexOf("renderer") == 0)) {
                this.configStorage_[key_] = params_[key_];
            }*/
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
        case "position":
            this.config_.position_ = value_;
            if (this.map_) {
                this.map_.setPosition(this.config_.position_);
            }
            break;
            
        case "view":
            this.config_.view_ = value_;
            if (this.map_) {
                this.map_.setView(this.config_.view_);
            }
            break;
            
        case "panAllowed":           this.config_.panAllowed_ = Melown.Utils.validateBool(value_, true);           break;
        case "rotationAllowed":      this.config_.rotationAllowed_ = Melown.Utils.validateBool(value_, true);      break;
        case "zoomAllowed":          this.config_.zoomAllowed_ = Melown.Utils.validateBool(value_, true);          break;
        case "jumpAllowed":          this.config_.jumpAllowed_ = Melown.Utils.validateBool(value_, false);         break;
        case "constrainCamera":      this.config_.constrainCamera_ = Melown.Utils.validateBool(value_, true);      break;
        case "navigationMode":       this.config_.navigationMode_ = value_;                                        break;
        case "positionInUrl":        this.config_.positionInUrl_ = Melown.Utils.validateBool(value_, false);       break;
        case "positionUrlHistory":   this.config_.positionUrlHistory_ = Melown.Utils.validateBool(value_, false);  break;
        case "controlCompass":       this.config_.controlCompass_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);    break;
        case "controlZoom":          this.config_.controlZoom_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);       break;
        case "controlMeasure":       this.config_.controlMeasure_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);   break;
        case "controlScale":         this.config_.controlScale_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);      break;
        case "controlLayers":        this.config_.controlLayers_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);    break;
        case "controlSpace":         this.config_.controlSpace_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);     break;
        case "controlSearch":        this.config_.controlSearch_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);    break;
        case "controlLink":          this.config_.controlLink_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);      break;
        case "controlLogo":          this.config_.controlLogo_ = Melown.Utils.validateBool(value_, false); this.updateUI(key_);      break;
        case "controlFullscreen":    this.config_.controlFullscreen_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_); break;
        case "controlCredits":       this.config_.controlCredits_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);    break;
        case "controlLoading":       this.config_.controlLoading_ = Melown.Utils.validateBool(value_, true); this.updateUI(key_);    break;
        case "controlSearchElement": this.config_.controlSearchElement_ = value_; this.updateUI(key_);  break;
        case "controlSearchValue":   this.config_.controlSearchValue_ = /*Melown.Utils.validateString(*/value_/*, null)*/; this.updateUI(key_); break;
        case "minViewExtent":        this.config_.minViewExtent_ = Melown.Utils.validateNumber(value_, 0.01, Number.MAX_INTEGER, 100); break;
        case "maxViewExtent":        this.config_.maxViewExtent_ = Melown.Utils.validateNumber(value_, 0.01, Number.MAX_INTEGER, Number.MAX_INTEGER); break;
        case "sensitivity":          this.config_.sensitivity_ = Melown.Utils.validateNumberArray(value_, 3, [0,0,0], [10, 10, 10], [1, 0.12, 0.05]); break;
        case "inertia":              this.config_.inertia_ = Melown.Utils.validateNumberArray(value_, 3, [0,0,0], [0.99, 0.99, 0.99], [0.85, 0.9, 0.7]); break;
        case "rotate":             
            this.config_.autoRotate_ = Melown.Utils.validateNumber(value_, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 0);
            if (this.map_ && this.autopilot_) {
                this.autopilot_.setAutorotate(this.config_.autoRotate_);
            }
            break;
        case "pan":
            if (Array.isArray(value_) && value_.length == 2){
                this.config_.autoPan_ = [
                    Melown.Utils.validateNumber(value_[0], Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 0),
                    Melown.Utils.validateNumber(value_[1], -360, 360, 0)
                ];
            }

            if (this.map_ && this.autopilot_) {
                this.autopilot_.setAutorotate(this.config_.autoRotate_);
            }
            break;
    }

    if (ignoreCore_ == true) {
        if ((key_.indexOf("map") == 0 || key_.indexOf("mario") == 0 || key_.indexOf("authorization") == 0) && this.core_.getMap()) {
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
        case "position":
        
            if (this.map_) {
                this.map_.getPosition();
            } else {
                return this.config_.position_;
            }
            
            break;
        
        case "view":               

            if (this.map_) {
                return this.map_.getView();
            } else {
                return this.config_.view_;
            }
            
        case "panAllowed":           return this.config_.panAllowed_;
        case "rotationAllowed":      return this.config_.rotationAllowed_;
        case "zoomAllowed":          return this.config_.zoomAllowed_;
        case "jumpAllowed":          return this.config_.jumpAllowed_;
        case "sensitivity":          return this.config_.sensitivity_;
        case "inertia":              return this.config_.inertia_;
        case "navigationMode":       return this.config_.navigationMode_;
        case "constrainCamera":      return this.config_.constrainCamera_;
        case "positionInUrl":        return this.config_.positionInUrl_;
        case "positionUrlHistory":   return this.config_.positionUrlHistory_;
        case "controlCompass":       return this.config_.controlCompass_;
        case "controlZoom":          return this.config_.controlZoom_;
        case "controlMeasure":       return this.config_.controlMeasure_;
        case "controlScale":         return this.config_.controlScale_;
        case "controlLayers":        return this.config_.controlLayers_;
        case "controlSpace":         return this.config_.controlSpace_;
        case "controlSearch":        return this.config_.controlSearch_;
        case "controlLink":          return this.config_.controlLink_;
        case "controlLogo":          return this.config_.controlLogo_;
        case "controlFullscreen":    return this.config_.controlFullscreen_;
        case "controlCredits":       return this.config_.controlCredits_;
        case "controlLoading":       return this.config_.controlLoading_;
        case "controlSearchElement": return this.config_.controlSearchElement_;
        case "controlSearchValue":   return this.config_.controlSearchValue_;
        case "minViewExtent":        return this.config_.minViewExtent_;
        case "maxViewExtent":        return this.config_.maxViewExtent_;
        case "rotate":               return this.config_.autoRotate_;
        case "pan":                  return this.config_.autoPan_;
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
    this.killed_ = false;
    this.core_.on("map-loaded", (function(){ this.map_ = this.core_.getMap(); }).bind(this));
    this.core_.on("map-unloaded", (function(){ this.map_ = null; }).bind(this));    
};

Melown.BrowserInterface.prototype.getPresenter = function() {
    if (this.killed_) return;
    return this.presenter_;
};

Melown.BrowserInterface.prototype.getRenderer = function() {
    if (this.killed_) return;
    return this.core_.getRenderer();
};

Melown.BrowserInterface.prototype.getProj4 = function() {
    if (this.killed_) return;
    return this.core_.getProj4();
};

Melown.BrowserInterface.prototype.getUI = function() {
    if (this.killed_) return;
    return this.ui_;
};

Melown.BrowserInterface.prototype.destroy = function() {
    if (this.killed_) return;
    this.core_.destroy();
    this.map_ = null;
    this.browser_.killed_ = true;
    this.ui_.kill();
    this.ui_ = null;
    this.core_ = null;
    this.killed_ = true;
    return null;    
};

Melown.BrowserInterface.prototype.setControlMode = function(mode_) {
    if (this.killed_) return;
    this.browser_.controlMode_ = mode_;
    return this;    
};

Melown.BrowserInterface.prototype.getControlMode = function() {
    if (this.killed_) return;
    return this.browser_.controlMode_;
};

Melown.BrowserInterface.prototype.loadMap = function(path_) {
    if (this.killed_) return;
    this.core_.loadMap(path_);
    return this;    
};

Melown.BrowserInterface.prototype.destroyMap = function() {
    if (this.killed_) return;
    this.core_.destroyMap();
    this.map_ = null;
    return this;    
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

Melown.BrowserInterface.prototype.getCurrentCredits = function() {
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

Melown.BrowserInterface.prototype.getMapStats = function() {
    if(!this.map_) return;
    return this.map_.getStats();
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
    if(!this.map_ || !this.autopilot_) return;
    this.autopilot_.flyTrajectory(trajectory_, sampleDuration_); 
    return this;    
};

Melown.BrowserInterface.prototype.cancelFlight = function() {
    if(!this.map_ || !this.autopilot_) return;
    this.autopilot_.cancelFlight(); 
    return this;    
}; 

Melown.BrowserInterface.prototype.setAutorotate = function(speed_) {
    if(!this.map_ || !this.autopilot_) return;
    this.autopilot_.setAutorotate(speed_);
    return this;
};

Melown.BrowserInterface.prototype.getAutorotate = function() {
    if(!this.map_ || !this.autopilot_) return 0;
    return this.autopilot_.getAutorotate();
};

Melown.BrowserInterface.prototype.setAutopan = function(speed_, azimuth_) {
    if(!this.map_ || !this.autopilot_) return;
    this.autopilot_.setAutopan(speed_, azimuth_);
    return this;
};

Melown.BrowserInterface.prototype.getAutopan = function() {
    if(!this.map_ || !this.autopilot_) return;
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
    return "Browser: 1.17, Core: " + Melown.getCoreVersion();
};

//prevent minification
Melown["MapBrowser"] = Melown.MapBrowser;
Melown["mapBrowser"] = Melown.MapBrowser;
Melown.BrowserInterface.prototype["getRenderer"] = Melown.BrowserInterface.prototype.getRenderer; 
Melown.BrowserInterface.prototype["getPresenter"] = Melown.BrowserInterface.prototype.getPresenter; 
Melown.BrowserInterface.prototype["getProj4"] = Melown.BrowserInterface.prototype.getProj4; 
Melown.BrowserInterface.prototype["getUI"] = Melown.BrowserInterface.prototype.getUI; 
Melown.BrowserInterface.prototype["destroy"] = Melown.BrowserInterface.prototype.destroy; 
Melown.BrowserInterface.prototype["setControlMode"] = Melown.BrowserInterface.prototype.setControlMode;
Melown.BrowserInterface.prototype["getControlMode"] = Melown.BrowserInterface.prototype.getControlMode;
Melown.BrowserInterface.prototype["loadMap"] = Melown.BrowserInterface.prototype.loadMap;
Melown.BrowserInterface.prototype["destroyMap"] = Melown.BrowserInterface.prototype.destroyMap;
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
Melown.BrowserInterface.prototype["convertCoordsFromNavToPhys"] = Melown.BrowserInterface.prototype.convertCoordsFromNavToPhys; 
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
Melown.BrowserInterface.prototype["getMapStats"] = Melown.BrowserInterface.prototype.getMapStats;
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

