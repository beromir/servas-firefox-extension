// Saves options to browser storage
function saveOptions() {
    var servasUrl = document.getElementById('servas-url').value;
    var apiToken = document.getElementById('api-token').value;
    browser.storage.sync.set({
        servasUrl: servasUrl,
        apiToken: apiToken
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.innerText = 'Settings saved.';
        setTimeout(function () {
            status.innerText = '';
        }, 1000);
    });
}

// Restores options stored in browser storage.
function restoreOptions() {
    browser.storage.sync.get({
        servasUrl: '',
        apiToken: '',
    }, function (items) {
        document.getElementById('servas-url').value = items.servasUrl;
        document.getElementById('api-token').value = items.apiToken;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save-options').addEventListener('click', saveOptions);
