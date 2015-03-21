(function(jQuery){

  if(typeof jQuery === 'undefined') { throw new Error('Mymr need requires jQuery'); }
  
  /**
   * Line Break Function
   * @param {String} content text
   * @param {String} language type
   * @return {String} edited content
   */
    function lineBreak(lang, content){

    switch(lang){
      case "my":
      case "rki":
      case "tvn":
      case "int":
        // Unicode 5.1 to Unicode 5.2
        content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
        // Burmese break points - insert ZWSP before consonants and independant vowels
        // ([က-အဣ-ဧဩဪဿ၌-၏])
        content = content.replace(/([က-အဣ-ဧဩဪဿ၌-၏])/g, '\u200B$1');
        //Suppress unwanted breakpoints
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014]|\u1039)\u200B([\u1000-\u1021])/g, '$1$2');
        content = content.replace(/\u200B(\u1004\u103A\u1039)/g, '$1');
        content = content.replace(/\u200B([က-အ]\u103A)/g, '$1');
        content = content.replace(/(\s|\n)\u200B([က-အဣ-ဧဩဪဿ၌-၏])/g, '$1$2');
        content = content.replace(/([က-အ])\u200B([က-အ])/g, "$1$2");
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "ksw":
        // Unicode 5.1 to Unicode 5.2
        // content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
        // S'gaw Karen break points
        content = content.replace(/([\u1000-\u1006\u100a\u1010-\u1012\u1014-\u1016\u1018-\u101f\u1021\u1027\u1061])/g, '\u200B$1');
        //Suppress unwanted breakpoints
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|\||>|[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u104A-\u104F\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E]|\u200B)\|/g, '$1');
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "pwo":
        break;

      case "kjp":
        break;

      case "blk":
        break;

      case "mnw":
        // Unicode 5.1 to Unicode 5.2
        content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
        // Mon break points
        content = content.replace(/([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u1023\u1025\u1028-\u102A\u105A-\u105D])/g, '\u200B$1');
        //Suppress unwanted breakpoints
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014]|\u1039)\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u105A-\u105D])/g, '$1$2');
        content = content.replace(/\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u105A-\u105D]\u103A)/g, '$1');
        content = content.replace(/(\s|\n)\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u1023\u1025\u1028-\u102A\u105A-\u105D])/g, '$1$2');
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "kyu":
        break;

      case "csh":
        break;

      case "shn":
        // Unicode 5.1 to Unicode 5.2
        // content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
        // Shan break points
        content = content.replace(/([\u1004\u1010\u1011\u1015\u1019-\u101E\u1022\u1075-\u1081\u109E\u109F])/g, '\u200B$1');
        //Suppress unwanted breakpoints
        content = content.replace(/\u200B([\u1004\u1010\u1011\u1015\u1019-\u101C\u101E\u1022\u1075-\u1079\u107B-\u1081\u109E\u109F]\u103A)/g, '$1');
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f>\u201C\u2018\-\(\[{\u2012-\u2014])\u200B([\u1004\u1010\u1011\u1015\u1019-\u101E\u1022\u1075-\u1081\u109E\u109F])/g, '$1$2');
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "kht":
        // Unicode 5.1 to Unicode 5.2
        // content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
        // Khmati Shan break points
        content = content.replace(/([\u1000\u1002\u1004\u1010\u1011\u1015\u1019-\u101D\u1022\u1075\u1078\u1079\u107B\u107C\u107F\u1080\uAA60-\uAA6F\uAA71-\uAA76])/g, '\u200BjQuery1');
        //Suppress unwanted breakpoints
        content = content.replace(/\u200B([\u1000\u1004\u1010\u1015\u1019\u101D\uAA65\uAA6B]\u103A)/g, '$1');
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f>\u201C\u2018\-\(\[{\u2012-\u2014])\u200B([\u1000\u1002\u1004\u1010\u1011\u1015\u1019-\u101D\u1022\u1075\u1078\u1079\u107B\u107C\u107F\u1080\uAA60-\uAA6F\uAA71-\uAA76])/g, '$1$2');
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "aio":
      case "phk":
        break;

      case "tle":
        break;

      case "pll":
        break;

      case "pce":
        break;

      case "rbb":
        break;

      default:
        content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
        break;
    }

    return content;

  }
  // Languages ISO
  var iso = {
    "my": "myanmar",
    "rki": "rakhine",
    "tvn": "tavoyan",
    "int": "intha",
    "ksw": "sgawKaren",
    "pwo": "westernPwoKaren",
    "kjp": "easternPwoKaren",
    "blk": "poaKaren",
    "mnw": "mon",
    "kyu": "kayah",
    "csh": "ashoChin",
    "shn": "shan",
    "kht": "khamtiShan",
    "aio": "aiton",
    "phk": "phake",
    "tle": "taiLaing",
    "pll": "shwePalaung",
    "pce": "palePalaung",
    "rbb": "rumaiPalaung"
  };
  var set = {
    affix: 'parens',
    listPreffix: '',
    listSuffix: ''
  };

  // Digits and Consonants Map
  var map = {
    digits: {
      myanmar: {
      '0': '\u1040',
      '1': '\u1041',
      '2': '\u1042',
      '3': '\u1043',
      '4': '\u1044',
      '5': '\u1045',
      '6': '\u1046',
      '7': '\u1047',
      '8': '\u1048',
      '9': '\u1049'
      },
      shan: {
      '0': '\u1090',
      '1': '\u1091',
      '2': '\u1092',
      '3': '\u1093',
      '4': '\u1094',
      '5': '\u1045',
      '6': '\u1096',
      '7': '\u1097',
      '8': '\u1098',
      '9': '\u1099'
      }
    },
    consonants: {
      // 
      rakhine: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],
      tavoyan: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],
      intha: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],
      myanmar: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],

      mon: ["က","ခ","ဂ","ဃ","ၚ","စ","ဆ","ဇ","ၛ","ဉ","ည","ဋ","ဌ","ဍ","ဎ","ဏ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ","ၜ","ၝ"],
      sgawKaren: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ၡ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","အ","ဧ"],
      westernPwoKaren: ["က","ခ","ဂ","ဎ","င","စ","ဆ","ဇ","ည","ၡ","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","ၥ","ဟ","အ","ဧ","ၦ"],
      easternPwoKaren: ["က","ခ","င","စ","ဆ","ည","တ","ထ","ဍ","န","ၮ","ပ","ဖ","ၜ","မ","ယ","ရ","လ","ဝ","ဟ","အ"],
      poaKaren: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","ဏ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],
      kayah: ["က","ခ","ဃ","င","စ","ဆ","ဇ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","အ"],
      ashoChin: ["က","ခ","ဂ","င","စ","ဆ","ဇ","ည","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","ၡ","လ","ဝ","ဟ","အ","ဧ"],
      shan: ["ၵ","ၶ","ၷ","င","ၸ","သ","ၺ","ၹ","တ","ထ","ၻ","ၼ","ပ","ၽ","ၾ","ၿ","မ","ယ","ရ","လ","ဝ","ႀ","ႁ","ဢ"],
      khamtiShan: ["က","ၵ","ꩱ","ဂ","င","ꩡ","ꩢ","ꩣ","ꩤ","ꩥ","ꩦ","ꩧ","ꩨ","ꩩ","ၼ","တ","ထ","ၻ","ꩪ","ꩫ","ပ","ၸ","ၿ","ၹ","မ","ယ","ရ","လ","ဝ","ꩬ","ꩭ","ꩮ","ဢ","ꩯ","ႀ"],

      aiton: ["က","ၵ","င","ꩡ","ၺ","တ","ထ","ꩫ","ပ","ၸ","မ","ယ","ꩺ","လ","ဝ","ꩭ","ဢ"],
      phake: ["က","ၵ","င","ꩡ","ၺ","တ","ထ","ꩫ","ပ","ၸ","မ","ယ","ꩺ","လ","ဝ","ꩭ","ဢ"],

      // Under testing!
      taiLaing: ["က","ၵ","င","ၸ","ꩬ","ꧧ","တ","ထ","ꩫ","ပ","ꧤ","ꧨ","မ","ယ","ꩺ","လ","ဝ","ၯ","ဢ"],
      shwePalaung: ["1000","ခ","ꩾ","ဂ","င","စ","ဆ","ꩿ","ဇ","ဈ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","ႎ","ႎှ","သ","ဟ","အ","ျ","ြ","ွ","ှ","္လ"],

      palePalaung: ["က","ခ","ဂ","င","စ","စှ","ဆ","ဇ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","ဟ","အ","ဝှ"],
      rumaiPalaung: ["က","ခ","ဂ","င","စ","ဆ","ဇ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ႎ","ဝ","ဟ","အ"]
    }

  };

  /**
   * Convert Digits
   * @param {String} type of digits language in map
   * @param {String} content text
   * @return {String} edited text
   */
  function convertDigits(system,dig) {

    var regmap, k;
    var digstr = dig.toString();
    if((regmap = map.digits[system])) {
      for(k in regmap){
        digstr = digstr.replace(new RegExp(k, 'g'), regmap[k]);
      }
      return digstr;
    }
    return dig;

  }

  /**
   * Generate selected ordered list
   * @param {jQueryObject} selected ordered list
   * @param {Object} option about everything
   * @param {Function} Callback Function
   */
  
  function generate(that, opt, callback){
    console.log(opt);
    // About to set start as consonants
    // var start = that.attr('start') && !isNaN(parseInt(that.attr('start'))) == 'number' ? parseInt(that.attr('start')) : that.attr('start');
    var start = !isNaN(opt.start) ? opt.start : that.attr('start') && !isNaN(parseInt(that.attr('start'))) ? parseInt(that.attr('start')) : 0;
    var reversed = opt.reversed || that.attr('reversed');
    var li = that.find('>li');
    var rmap, dig, afx = opt.affix || 'x';
    
    if( !opt.affix && set.affix == "self" && set.listPreffix && set.listSuffix ){
      afx = set.listPreffix + "x" + set.listSuffix;
    }
    
    if(li.length > 0) {

      type = opt.type || that.attr('type');
      dig = type.match('dig-');
      type = iso[type.replace('dig-', '')] || type.replace('dig-', '');
      
      if (dig && (rmap = map.digits[type])) {

        // if(typeof start !== 'number'){start = 1;} // For consonants start

        if(reversed) {
          $(li.get().reverse()).each(function(i){
            $(this).attr('item-value', afx.replace("x",convertDigits(type,i+start+1)));
          });
        }else{
          li.each(function(i){
            $(this).attr('item-value', afx.replace("x",convertDigits(type,i+start+1)));
          });
        }

      } else if(!dig && (rmap = map.consonants[type])){

        // For consonants start
        // if(start && rmap.indexOf(start) > -1 ){
        //   start = rmap.indexOf(start)
        // }else{
        //   start = 0;
        // }

        li.each(function(i){
          if(i+start <= rmap.length-1){
            $(this).attr('item-value', afx.replace("x", rmap[i+start]));
          } else {
            var quot = Math.floor((i+start)/rmap.length) - 1;
            var rem = (i+start)%rmap.length;
            $(this).attr('item-value', afx.replace("x", rmap[quot] + rmap[rem]));
          }
        });

      }

      // Calling callback
      if( callback ) callback(that, li);
    }
  }

  /** 
   * Level finder than push to generate
   * @param {Selector||jQueryObject}
   */
  function rootGenerate(ol, opt, fn){

    var $firstLvl, $next, $secondLvl, $thirdLvl;
    var $root = $(ol);

    $root.each(function(){

      $firstLvl = $(this);
      generate($firstLvl, opt);

      if($firstLvl.find('ol li ol').length > 0) $next = $firstLvl.find('ol').not('li ol li ol');
      else $next = $firstLvl.find('ol');

      $next.each(function(){
    
        $secondLvl = $(this);
        generate($secondLvl, opt);
        
        $secondLvl.find('ol').each(function(){
          
          $thirdLvl = $(this);
          generate($thirdLvl, opt);

        });

      });

    });

    if(fn) fn($root);

  }

  // Detection is depending on type
  function hasContent($that){
    var mymrol;
    if((mymrol = $that.attr('data-mymrol') ) ){
      if( mymrol.match('isChild') ){
        return false;
      }
      mymrol = mymrol.split(',');
      return mymrol[0];
    }
    return $that.attr('type');
  }

  jQuery('head').append("<style id='mymrStyle'>"+
    "ol.mymr {list-style-type:none}"+
    "ol.mymr>li{display:block}"+
    "ol.mymr.parens>li:before{content: '(' attr(item-value) ') '}"+
    "ol.mymr.sm>li:before{content: '' attr(item-value) '။ '}"+
    "ol.mymr.self>li:before{content: attr(item-value) ' '}"+
    "</style>");

  // Find and nested Myanmar ordered List
  // This should be declare before some extend function declare
  function readyWork(){
    $('ol').each(function(){
      var $this = $(this);
      if( (type = hasContent($this)) ){

        if( $this.attr('data-mymrol') && $this.attr('data-mymrol').match('isRoot') ){

          rootGenerate($this, {type: type}, function(that){
            that.removeClass('sm parens')
            .addClass('mymr '+set.affix)
            .find('ol').attr('data-mymrol' ,'isChild')
            .removeClass('sm parnes')
            .addClass('mymr '+set.affix);
          });

        }else {
          generate($this, {type: type}, function(that, listItems){
            that.removeClass('sm parens')
            .addClass('mymr '+set.affix);
          });
        }
      }
    }); 
  }

  readyWork();

  /**
   * Extending to jQuery
   */
  jQuery.fn.extend({

    mymrSyllBreak: function(language){

      var lang = language || this.attr('lang');

      if( lang ){
        this.html(function(i,h){
          return lineBreak(lang, h);
        });
      }
      return this;

    },
    mymrOrderlist: function(lang, opt){

      var $this = this;
      var affix = opt.affix || set.affix, match;
      opt.type = lang;
      if( !affix.match(/parnes|sm/) && affix.match('x') ){
        match = affix;
        affix = "self";
      }else{
        affix = set.affix;
        opt.affix = false;
      }
      
    
      if( hasContent($this) ){
        if(!opt.isRoot){
          generate($this, opt, function(that, listItems){
            listItems.css('list-style-type', 'none');
            that.removeClass('sm parens')
            .addClass(affix+ ' mymr');
          });          
        }else{
          rootGenerate($this, opt, function(that){
            that.removeClass('sm parens')
            .addClass(affix+ ' mymr').find('ol').removeClass('sm parnes')
            .addClass(affix+ ' mymr');
          });
        }
      }
      return this;
      
    }
  });

  jQuery.extend({
    mymr: function(){
      readyWork();
    },
    mymrSetting: function(setting){

      if(setting.affix){
        if(setting.affix.match(/parnes|sm/)){
          set.affix = setting.affix
        }else if(setting.affix.match(/x/)){
          var afx = setting.affix.split('x');
          set.affix = 'self';
          set.listPreffix = afx[0];
          set.listSuffix = afx[1];
        }
      }
      
      // Declare readyWork again of fixed
      readyWork();
      return this;
    },
    mymrReset: function(){
      set = {
        affix: 'parnes',
        listPreffix: '',
        listSuffix: ''
      }
      readyWork();
    }
  })

}(jQuery));
