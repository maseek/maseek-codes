$(function() {
	$('.tooltips').tooltip({selector:"[data-toggle=tooltip]",container:"body"});
});

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
                document.createTextNode(
                    '@-ms-viewport{width:auto!important}'
                    )
                );
        document.querySelector('head').appendChild(msViewportStyle);
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-26881307-2', 'maseek.codes');
ga('send', 'pageview');

hljs.initHighlightingOnLoad();

$('.projects').isotope({
  itemSelector: '.project'
});