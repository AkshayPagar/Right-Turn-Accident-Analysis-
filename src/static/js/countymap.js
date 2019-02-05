var counties_list=["ALAMEDA","ALPINE","AMADOR","BUTTE","CALAVERAS","COLUSA","CONTRA COSTA","DEL NORTE","EL DORADO","FRESNO","GLENN","HUMBOLDT","IMPERIAL","INYO","KERN","KINGS","LAKE","LASSEN","LOS ANGELES","MADERA","MARIN","MARIPOSA","MENDOCINO","MERCED","MODOC","MONO","MONTEREY","NAPA","NEVADA","ORANGE","PLACER","PLUMAS","RIVERSIDE", "SACRAMENTO","SAN BENITO","SAN BERNARDINO","SAN DIEGO","SAN FRANCISCO","SAN JOAQUIN","SAN LUIS OBISPO","SAN MATEO","SANTA BARBARA","SANTA CLARA","SANTA CRUZ","SHASTA","SIERRA","SISKIYOU","SOLANO","SONOMA","STANISLAUS","SUTTER","TEHAMA","TRINITY","TULARE","TUOLUMNE","VENTURA","YOLO","YUBA"];
var prefix = '{"cols":[{"id":"CASE_ID","label":"CASE_ID","type":"number"},{"id":"COLLISION_SEVERITY","label":"COLLISION_SEVERITY","type":"string"},{"id":"PCF_VIOL_CATEGORY","label":"PCF_VIOL_CATEGORY","type":"string"},{"id":"PEDESTRIAN_ACCIDENT","label":"PEDESTRIAN_ACCIDENT","type":"string"},{"id":"BICYCLE_ACCIDENT","label":"BICYCLE_ACCIDENT","type":"string"},{"id":"MOTORCYCLE_ACCIDENT","label":"MOTORCYCLE_ACCIDENT","type":"string"},{"id":"TRUCK_ACCIDENT","label":"TRUCK_ACCIDENT","type":"string"},{"id":"COUNTY","label":"COUNTY","type":"string"},{"id":"POINT_X","label":"POINT_X","type":"string"},{"id":"POINT_Y","label":"POINT_Y","type":"string"}],"rows":';
 var suffix = '}';
       var c = new Object();
c['ALAMEDA']=[42.339498,-114.879171,32.339498,-128.879171];
c['ALPINE']=[43.4706,-112.04698,33.4706,-128.04698];
c['AMADOR']=[43.442902,-112.684679,33.442902,-128.684679];
c['CALAVERAS']=[43.153194,-112.641941,33.153194,-128.641941];
c['COLUSA']=[44.21377,-114.172462,34.21377,-130.172462];
c['CONTRA COSTA']=[42.363424,-114.187864,32.363424,-128.187864];
c['DEL NORTE']=[46.777419,-116.195499,36.777419,-132.195499];
c['FRESNO']=[41.450378,-113.721269,31.450378,-126.721269];
c['GLENN']=[44.658614,-114.196586,34.658614,-130.196586];
c['IMPERIAL']=[38.439102,-109.180585,27.439102,-122.180585];

c['INYO']=[38.634271,-98.583993,28.634271,-114.583993]
c['KERN']=[39.260023,-107.146702,29.260023,-123.146702]
c['KINGS']=[40.674123,-109.594335,30.674123,-125.594335]

c['LAKE']=[43.981781,-114.747236,33.981781,-130.747236];
c['LASSEN']=[45.414176,-112.646681,35.414176,-128.646681];


c['MARIPOSA']=[42.490858,-111.972098,32.490858,-127.972098];
c['MENDOCINO']=[44.263578,-115.411202,34.263578,-131.411202];
c['MODOC']=[46.4849,-112.542444,36.4849,-128.542444];
c['MONO']=[42.708651,-110.973303,32.708651,-126.973303];



c['EL DORADO']=[44.597431,-115.560077,32.597431,-124.560077];
c['NEVADA']=[44.257495,-112.709991,34.257495,-128.709991];
c['ORANGE']=[38.341027,-112.468823,28.341027,-124.468823];
c['PLUMAS']=[45.08001,-113.011518,35.08001,-129.011518];


c['BUTTE']=[45.362463,-117.67456,33.362463,-125.67456];
c['HUMBOLDT']=[46.660518,-118.667305,34.660518,-128.667305];
c['LOS ANGELES']=[38.519925,-112.427431,28.519925,-124.427431];//che
c['MADERA']=[43.514086,-116.224978,30.514086,-123.224978];
c['MARIN']=[42.51023,-116.046793,32.51023,-129.046793];
c['MERCED']=[42.172694,-116.960636,31.172694,-124.960636];
c['PLACER']=[44.270511,-114.399286,33.270511,-127.399286];
c['MONTEREY']=[42.041888,-115.672618,31.041888,-127.672618];
c['NAPA']=[44.025096,-118.201644,32.025096,-126.201644];
c['RIVERSIDE']=[39.802318,-113.562582,27.802318,-121.562582];
c['SACRAMENTO']=[43.997841,-114.564969,32.997841,-127.564969];
c['SAN BENITO']=[42.146142,-114.101084,31.146142,-127.101084];
c['SAN BERNARDINO']=[39.727208,-110.083818,28.727208,-124.083818];
c['SAN DIEGO']=[38.747649,-114.143061,26.747649,-121.143061];
c['SAN FRANCISCO']=[42.236412,-115.69618,32.236412,-128.69618];
c['SAN JOAQUIN']=[42.748584,-112.670587,32.748584,-128.670587];
c['SAN LUIS OBISPO']=[40.81174,-116.580974,28.81174,-123.580974];
c['SAN MATEO']=[42.970465,-115.406414,31.970465,-128.406414];
c['SANTA BARBARA']=[39.854446,-114.4621,28.854446,-125.4621];
c['SANTA CLARA']=[42.43881,-116.02147,31.43881,-127.02147];
c['SANTA CRUZ']=[42.068976,-115.9862,31.068976,-126.9862];
c['SHASTA']=[45.315878,-114.578522,35.315878,-129.578522];
c['SOLANO']=[45.063492,-120.088934,31.063492,-123.088934];


c['SISKIYOU']=[41.063492,-127.088934,31.063492,-123.088934];//ns
c['SIERRA']=[41.063492,-127.088934,31.063492,-123.088934];//ns
c['SONOMA']=[44.49255,-116.82852,32.49255,-127.82852];
c['STANISLAUS']=[42.905923,-114.614418,31.905923,-126.614418];
c['SUTTER']=[43.845957,-114.712562,33.845957,-128.712562];
c['TEHAMA']=[45.348085,-115.826696,34.348085,-127.826696];
c['TRINITY']=[45.702762,-114.969211,35.702762,-130.969211];
c['TULARE']=[41.895628,-115.802368,29.895628,-122.802368];//ns
c['TUOLUMNE']=[42.973069,-112.373276,32.973069,-128.373276];
c['VENTURA']=[39.78147,-113.475344,28.78147,-125.475344];
c['YOLO']=[43.16014,-116.337988,33.16014,-128.337988];
c['YUBA']=[44.673394,-118.060215,32.673394,-125.060215];//ns
