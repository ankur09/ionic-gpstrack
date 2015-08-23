Ext.device.Geolocation.getCurrentPosition({
    success: function(position) {
        alert(position.coords.speed);
        alert(JSON.stringify(position))
    },
    failure: function() {
        console.log('something went wrong!');
    }
});
