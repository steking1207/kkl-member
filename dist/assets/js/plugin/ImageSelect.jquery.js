/**
 * Image Select (Version 1.8)
 *
 * Image Select is an extention to the Chosen, a Select Box Enhancer for
 * jQuery and Prototype, full source at https://github.com/harvesthq/chosen
 *
 * This plugin extension was designed as a humanized UI element for social networking
 * sites that need to faciliate relations between people. Research shows that people
 * are extremely sensitvie to photos of others, so we needed to revamp the traditional
 * UI elements to make them more intuitive and human.
 *
 * Hope you find it helpful, and get back if you have any feedback/improvements.
 *
 * @author    Adnan M.Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2002-2015 Web Semantics, Inc. (http://websemantics.ca) & AlterSpark Corp. (http://www.alterspark.com)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://websemantics.ca
 * @package   websemantics/image-select
 */
!function(l){var d='<img class="{class_name}" src="{url}" />';function p(n,e,o,t,i,s){var r=l(e).data("img-src");null!=r&&""<r&&(n=l(n),text=l(e).text(),i=null==i||i,s=s||(i?"chose-image":"chose-image-small"),s=t?s+" rtl":s,o=o.replace("{url}",r).replace("{class_name}",s).replace("{text}",text),n.empty(),t&&i?n.append(o):n.prepend(o))}var n=l.fn.chosen;l.fn.extend({chosen:function(h){h=h||{};n.apply(this,arguments);return this.each(function(){var o=l(this),e=o.data("chosen");o.on("chosen:hiding_dropdown",function(n,e){for(var o=function(n){for(var e=[],o=l(n.form_field).find("option:selected")||[],t=n.is_multiple?l(n.container).find(".chosen-choices span"):l(n.container).find(".chosen-single span"),i=0;i<o.length;i++)for(var s=0;s<t.length;s++)l(t[s]).text()==l(o[i]).text()&&e.push({span:t[s],option:o[i]});return e}(e.chosen),t=e.chosen.is_rtl,i=e.chosen.is_multiple,s=h.html_template||(t&&i?"{text}"+d:d+"{text}"),r=0;r<o.length;r++)p(o[r].span,o[r].option,s,t,i)}),o.on("chosen:showing_dropdown",function(n,e){for(var o=(e=e.chosen).form_field.options||[],t=e.is_rtl,i=h.html_template||(t?"{text}"+d:d+"{text}"),s=l(e.container).find(".chosen-drop ul li:not(:has(img))"),r=0;r<s.length;r++){var c=s[r],a=(l(o[r]),l(c).attr("data-option-array-index"));a&&p(c,o[e.results_data[a].options_index],i,t,!0,"chose-image-list")}}),o.on("chosen:ready",function(n,e){o.trigger("chosen:hiding_dropdown",e)}),o.on("chosen:updated",function(n){o.trigger("chosen:hiding_dropdown",{chosen:e})}),o.on("chosen:filter",function(n,e){o.trigger("chosen:showing_dropdown",{chosen:e.chosen})}),void 0!==e&&o.trigger("chosen:hiding_dropdown",{chosen:e})}),l(this)}})}(jQuery);