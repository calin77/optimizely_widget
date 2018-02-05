
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGQWTMH');


  var mpTests = function(wstate) {
  if (!(typeof jQuery === 'function')) {
    if (mpTests.timeout !== undefined) {
      mpTests.timeout++;
    } else {
      mpTests.timeout = 0;
    }
    if (mpTests.timeout <= 100) setTimeout(mpCheck, 50);
    return;
  }

  try {

    var state = {};
    state.experiments = {};

    state.getExp = function() {

      var exp = window.optimizely.get("data").experiments;
      if (Object.getOwnPropertyNames(exp).length > 0) {
        for (var key in exp) {
          var obj = new Object;

          var variations = exp[key].variations;
          var var_list = [];

          for (var mykey in variations) {
            var_list.push(exp[key].variations[mykey].id);
          }

          obj = {
            name: exp[key].name,
            isActive: false,
            activeVariantion: '',
            variationList: var_list
          };

          state['experiments'][key] = obj;
        }
      }
    }

    state.getActive = function() {
      var active_exp = optimizely.get('state').getExperimentStates({
        "isActive": true
      });


      if (Object.getOwnPropertyNames(active_exp).length > 0) {
        for (var key in active_exp) {
          state.experiments[key].activeVariantion = active_exp[key].variation.id;
          state.experiments[key].isActive = true;
        }
      }

    }


  state.getExp();
  state.getActive();

    var script = {
      type: 'text/css',
      style: document.createElement('style'),
      content:'.mp-widget { position: fixed;' +
          'bottom: 0px;' +
          'left: 0px;' +
          'width: 100%;' +
          'background-color: #fff;' +
          'border-top: solid 1px #e1e1e1;' +
          'z-index: 99999;' +
          'padding: 10px 0px;' +
          'box-sizing: border-box;' +
          'min-height: 100px;' +
        '}' +
        '.mp-content {' +
          'vertical-align: middle;' +
          'text-align: left;' +
          '-moz-user-select: none;' +
          '-khtml-user-select: none;' +
          '-webkit-user-select: none;' +
          '-ms-user-select: none;' +
          'user-select: none;' +
          'width: 1200px;' +
          'max-width: 100%;' +
          'margin: 0 auto;' +
          'position: relative;' +
        '}' +
          '.mp-row {' +
          'line-height: 24px;' +
        '}' +
        '.mp-dec span{' +
          'text-decoration: underline;' +
          'color: #0072da;' +
        '}' +
        '.mp-dec {' +
          'padding-right: 50px;' +
        '}' +
        '.mp-dec span:hover, mp-dec:active{' +
        '}' +
        '.mp-active{' +
          'color: #93c760;' +
          'border-color: #93c760 !important;' +
        '}' +
        '.mp-var {' +
          'padding-left: 30px;' +
        '}' +
        '.mp-var span{' +
          'padding: 2px 10px;' +
          'background-color: #e1e1e1;' +
          'border: 1px solid #fff;' +
          'margin-left: 5px;' +
          'cursor: default;' +
          'opacity: 0.6;' +
        '}' +
        '.mp-var[data-active=mp-active] span {' +
          'opacity: 1;' +
        '}' +
        '.mp-var[data-active=mp-active] span:not(.mp-active) {' +
          'cursor: pointer;' +
        '}' +
        '.mp-mode {' +
          'display: inline-block;' +
          'margin-right: 10px;' +
        '}' +
        '.mp-mode span{' +
          'color: #fff;' +
          'padding: 5px 15px;' +
          'background-color: #faaa52;' +
          'cursor: pointer;' +
          'box-sizing: border-box;' +
          'border-radius: 5px;' +
          'display: inline-block;' +
          'border: 1px solid #faaa52;'+
        '}' +
        '.qa-active {' +
          'background-color: #93c760 !important;' +
          'border: 1px solid #aaa !important;' +
          'box-shadow: 1px 1px 2px #444;' +
          'border-radius: 5px;' +
          'cursor: default !important;' +
        '}' +
        '.qa-active[data-tooltip-1]:hover:before {' +
          'content: attr(data-tooltip-1);' +
          'display: inline-block;' +
          'position: relative;' +
          'position: absolute;' +
          'background: #000;' +
          'color: #fff;' +
          'padding: 4px 8px;' +
          'font-size: 14px;' +
          'line-height: 1.4;' +
          'min-width: 110px;' +
          'text-align: center;' +
          'border-radius: 4px;' +
          'left: 50%;' +
          'top: 100%;' +
          'margin-top: 8px !important;' +
          'transform: translateX(-50%);' +
        '}' +
        'span:not(.qa-active)[data-tooltip-0]:hover:before{' +
          'content: attr(data-tooltip-0);' +
          'display: inline-block;' +
          'position: relative;' +
          'position: absolute;' +
          'background: #000;' +
          'color: #fff;' +
          'padding: 4px 8px;' +
          'font-size: 14px;' +
          'line-height: 1.4;' +
          'min-width: 150px;' +
          'text-align: center;' +
          'border-radius: 4px;' +
          'left: 50%;' +
          'top: 100%;' +
          'margin-top: 8px !important;' +
          'transform: translateX(-50%);' +
        '}' +
        '.mp-mode span:not(.qa-active):hover, .mp-mode span:not(.qa-active):focus{' +
          'background-color: #e09849;' +
          'border: 1px solid #aaa;' +
        '}' +
        '.mp-options {' +
          'position: absolute;' +
          'top: 5px;' +
          'right: 15px;' +
        '}' +
        '@media only screen and (max-width: 980px){' +
        '.mp-options {' +
          'position: relative;' +
          'margin-bottom: 13px;' +
          'overflow: auto;' +
        '}' +
        '.mp-opt-list {' +
          'float: right;' +
          'display: inline-block;' +
          'height: 34px;' +
          'margin-right: 10px;' +
        '}' +
        '}' +
        '@media only screen and (max-width: 800px){' +
        '.mp-row>td {' +
          'display:block !important;' +
          'width:100% !important;' +
          'padding-left: 5px;' +
        '}' +
        '.mp-row .mp-var {' +
        'padding-left: 0px !important;' +
        '}' +
        '.mp-content {' +
        'overflow: auto;' +
        'max-height: 150px;' +
        '}' +
        '}' +
        '.mp-close {' +
        'color: #fff;' +
        'padding: 3px 9px 6px;' +
        'border: 1px solid #0072da;' +
        'background: #0072da;' +
        'border-radius: 5px;' +
        'cursor: pointer;' +
        'box-shadow: 1px 1px 2px #444;' +
        'font-size: 18px;' +
        'line-height: 18px;' +
        'display: inline-block;' +
        '}' +
        '.mp-minim[data-tooltip-min]:hover:before{' +
        'content: attr(data-tooltip-min);' +
        'display: inline-block;' +
        'position: absolute;' +
        'background: #000;' +
        'color: #fff;' +
        'padding: 4px 8px;' +
        'font-size: 14px;' +
        'line-height: 1.4;' +
        'min-width: 80px;' +
        'text-align: center;' +
        'border-radius: 4px;' +
        'left: 50%;' +
        'top: 100%;' +
        'margin-top: 8px !important;' +
        'transform: translateX(-50%);' +
        '}' +
        '.mp-close[data-tooltip]:hover:before{' +
        'content: attr(data-tooltip);' +
        'display: inline-block;' +
        'position: absolute;' +
        'background: #000;' +
        'color: #fff;' +
        'padding: 4px 8px;' +
        'font-size: 14px;' +
        'line-height: 1.4;' +
        'min-width: 140px;' +
        'text-align: center;' +
        'border-radius: 4px;' +
        'left: 50%;' +
        'top: 100%;' +
        'margin-top: 8px !important;' +
        'transform: translateX(-50%);' +
        '}' +
        '.mp-minim {' +
        'color: #fff;' +
        'display: inline-block;' +
        'margin-right: 10px;' +
        'padding: 4px 7px;' +
        'border: 1px solid #0072da;' +
        'background: #0072da;' +
        'border-radius: 5px;' +
        'cursor: pointer;' +
        'box-shadow: 1px 1px 2px #444;' +
        '}' +
        '.mp-min-widget {' +
        'z-index: 99;' +
        'bottom: -130px;' +
        'left: 20px;' +
        'transition: all .5s;' +
        'position: fixed;' +
        'height: 60px;' +
        'width: 60px;' +
        'border-radius: 5px;' +
        'text-align: center;' +
        'font-size: 45px;' +
        'border: 1px solid #0072da;' +
        'background: #0072da;' +
        'color: #fff;' +
        'cursor: pointer;' +
        'box-shadow: 1px 1px 2px #444;' +
        'line-height: 42px;' +
        '-moz-user-select: none;' +
        '-khtml-user-select: none;' +
        '-webkit-user-select: none;' +
        '-ms-user-select: none;' +
        'user-select: none;' +
        'box-sizing: border-box;' +
        '}' +
        '.mp-min-hide, .mp-wid-hide {' +
        'display: none;' +
        '}' +
        '.mp-min-show {' +
        'bottom: 20px;' +
        'display: block !important;' +
        '}' +
        '.mp-row {' +
        'font-weight: 600;' +
        '}',
      append: function() {
        this.style.type = this.type;
        this.style.appendChild(document.createTextNode(this.content));
        document.head.appendChild(this.style);
      }
    };
    script.append();

    var iterate = '';

    function getResults() {
      var iterate = '';
      if (Object.getOwnPropertyNames(state.experiments).length > 0) {
        for (var key in state.experiments) {
          var status = state.experiments[key].isActive ? 'Active' : 'Not active';
          var activeClass = state.experiments[key].isActive ? 'mp-active' : '';

          var activeIndex = state.experiments[key].variationList.indexOf(state.experiments[key].activeVariantion);

          var variationCont = '';

          for (var i = 0; i < state.experiments[key].variationList.length; i++) {
            var iactive = (i == activeIndex) ? 'mp-active' : '';

            variationCont = variationCont + "<span class='" + iactive + "'>" + i + "</span>";
          }

          iterate = iterate + "<tr class='mp-row' id=" + "exp-" + key + "><td class='mp-dec'><span>" + state.experiments[key].name + "</span></td><td class='" + activeClass + "'>" + status + "</td><td data-active = '" + activeClass + "' class='mp-var'>" + variationCont + "</td></tr>";

        }
      } else {
        iterate = '<tr class="mp-row"><td>No active tests</td></tr>';
      }
      return iterate;
    }


    var myresults = getResults();

    var minclasses = widgetstate === 'open' ? 'mp-min-hide' : 'mp-min-show';
    var widgetclasses = widgetstate === 'minimize' ? 'mp-wid-hide' : '';


    var myElem = "<div class='mp-min-widget " + minclasses + "'>" +
      '<svg style="margin-left: -1px; margin-top: -1px;" width="60" height="60">' +
      '<rect x="10" y="10" width="40" height="40" style="fill:#0072da;stroke:#fff;stroke-width:4;opacity:1"></rect>' +
      '</svg>' +
      "</div><div class='mp-widget " + widgetclasses + "'>" +
      "<div class='mp-content'>" +
      "<div class='mp-options'><div class='mp-opt-list'>" +
      "<div class='mp-mode' data='not-active' ><span data-tooltip-0='Drops a cookie to see QA test.' data-tooltip-1='QA mode is active.' data-tooltip-position='bottom'>QA mode</span></div>" +
      "<div data-tooltip-min='Minimize widget' class='mp-minim'> __ </div>" +
      "<div class='mp-close' data-tooltip='Close widget - delete QA cookie'>x</div>" +
      '</div></div>' +
      "<table style='margin-left: 5px;'>" + myresults + "</table>" +
      "</div></div>";
    jQuery('body').prepend(myElem);

    var forcevar = function(id, ind) {
      var var_id = state.experiments[id].variationList[ind];
      var url = window.location.href;
      var newUrl = url;
      if (var_id) {
        if (!(url.match(/optimizely_x=\d+/i))) {
          newUrl = (newUrl.indexOf('?') >= 0) ? newUrl + '&optimizely_x=' + var_id : newUrl + '?optimizely_x=' + var_id;
        } else {
          newUrl = newUrl.replace(/(optimizely_x=)[^\&]+/, '$1' + var_id);
        }
        document.location = newUrl;
      }
    }

    var checkCookie = function() {
      if ((document.cookie.match(/_mp.mode=staging/))) {
        $('.mp-mode span').addClass('qa-active');
        $('.mp-mode').attr('data', 'qa-active');
      }
    }


    jQuery('body').on('mousedown', '.mp-var[data-active="mp-active"] span:not(.mp-active)', function(e) {
      if (e.which === 1) {
        var var_index = $(e.target).index();
        var var_id = $(e.target).closest('tr.mp-row').attr('id') && $(e.target).closest('tr.mp-row').attr('id').match(/\d+/g)[0];
        if (var_id !== 'undefined' && var_index !== 'undefined') {
          forcevar(var_id, var_index);
        }
      }

    })
    jQuery('body').on('mousedown', '.mp-mode span:not(.qa-active)', function(e) {
      if (e.which === 1) {
        $(this).addClass('qa-active').attr('data-tooltip-1', 'Reload page. QA cookie dropped.');
        document.cookie = "_mp.mode=staging; domain=.moonpig.com; path=/; expires=;";
        location.reload();
      }
    });

    function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}

    jQuery('body').on('mousedown', '.mp-close', function(e) {
      if (e.which === 1) {
        document.cookie = "_mp.widget=; domain=.moonpig.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "_mp.mode=staging; domain=.moonpig.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        $(".mp-widget").fadeOut(function() {
          $(this).remove();
        });
        if (window.location.href.match(/optimizely_x=\d+/i)){
          var newUrl = removeParam('optimizely_x', window.location.href);
          window.location.href = newUrl;
        }
      }
    })
    jQuery('body').on('mousedown', '.mp-minim', function(e) {
      if (e.which === 1) {
        //document.cookie = "_mp.widget=; domain=.moonpig.com; path=/; expires=expires=Thu, 01 Jan 1970 00:00:00 GMT";
        $('.mp-min-widget').removeClass('mp-min-hide');
        $(".mp-widget").fadeOut(function() {
          $('.mp-min-widget').addClass('mp-min-show');
        })
        document.cookie = "_mp.widget=minimize; domain=.moonpig.com; path=/; expires=;";
      }
    })
    jQuery('body').on('mousedown', '.mp-min-widget.mp-min-show', function(e) {
      if (e.which === 1) {
        //document.cookie = "_mp.widget=; domain=.moonpig.com; path=/; expires=expires=Thu, 01 Jan 1970 00:00:00 GMT";
        $(".mp-min-widget").removeClass('mp-min-show');
        $(".mp-min-widget").show(function() {
          $('.mp-widget').fadeIn();
        });
        document.cookie = "_mp.widget=open; domain=.moonpig.com; path=/; expires=;";
      }
    })
    checkCookie();

  } catch (err) {

  }
}

var widgetstate = document.cookie.match(/_mp.widget=minimize/i) ? 'minimize' : 'open';

if (widgetstate) {

  
}
