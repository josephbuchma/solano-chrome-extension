
function ciBuildRepo() {
  var rurl = window.location.href;
  window.open("http://localhost:3000/1/repos/new?repo_url="+rurl, "_blank");
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    var html='<button id="solano_build_button" class="btn btn-sm btn-primary" title="Build with Solano CI" type="button">\
          <span>Solano CI</span>\
        </button>';
    $(".file-navigation").append(html);
    $("#solano_build_button").click(ciBuildRepo);

	}
	}, 10);
});