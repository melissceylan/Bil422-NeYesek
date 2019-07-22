

$(document).ready(function($) {
  jokerNotifier.checkJoker();

  $(document.body).on('click', '.result table tr' ,function() {
    chrome.tabs.create({
      url: $(this).data('href')
    });
  });

  var onOfSwitch = $('.onoffswitch-checkbox');
  chrome.storage.local.get('check', function(data) {
    onOfSwitch.attr('checked', data.check);
  });

  onOfSwitch.on('change', function() {
    var isActive = $(this).is(':checked'),
      icon = isActive ? 'img/icon.png' : 'img/icon_off.png';

    chrome.storage.local.set({'check': isActive});
    chrome.browserAction.setIcon({path: icon});
    chrome.browserAction.setBadgeText ({text: ''});

    if (isActive) {
      jokerNotifier.checkJoker();
    }
  });
});
